import json
import uuid
import os
import uvicorn
import click
import asyncio
import shutil
import time
from pathlib import Path
from glob import glob
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.openapi.docs import get_swagger_ui_html, get_redoc_html
from typing import List, Optional
from loguru import logger
from base64 import b64encode
from contextlib import asynccontextmanager
from datetime import datetime

from mineru.cli.common import aio_do_parse, read_fn, pdf_suffixes, image_suffixes
from mineru.utils.cli_parser import arg_parse
from mineru.version import __version__
import hashlib
import os
from pathlib import Path
from typing import List, Optional
from glob import glob

# 文件清理管理器类
class FileCleanupManager:
    """文件清理管理器"""

    def __init__(self, base_dir: str = "/home/output", max_age_hours: int = 72):
        """
        初始化清理管理器

        Args:
            base_dir: 基础目录路径
            max_age_hours: 文件夹最大存活时间（小时）
        """
        self.base_dir = Path(base_dir)
        self.max_age_hours = max_age_hours
        self.max_age_seconds = max_age_hours * 3600

    def get_folder_age(self, folder_path: Path) -> float:
        """
        获取文件夹的年龄（创建时间到现在的秒数）

        Args:
            folder_path: 文件夹路径

        Returns:
            文件夹年龄（秒）
        """
        try:
            # 获取文件夹创建时间
            create_time = folder_path.stat().st_ctime
            current_time = time.time()
            return current_time - create_time
        except Exception as e:
            logger.error(f"获取文件夹 {folder_path} 创建时间失败: {e}")
            return 0

    def is_folder_expired(self, folder_path: Path) -> bool:
        """
        检查文件夹是否已过期

        Args:
            folder_path: 文件夹路径

        Returns:
            是否过期
        """
        folder_age = self.get_folder_age(folder_path)
        return folder_age > self.max_age_seconds

    def cleanup_expired_folders(self) -> dict:
        """
        清理过期的文件夹

        Returns:
            清理结果统计
        """
        if not self.base_dir.exists():
            logger.warning(f"基础目录 {self.base_dir} 不存在")
            return {"deleted": 0, "errors": 0, "total_checked": 0}

        deleted_count = 0
        error_count = 0
        total_checked = 0
        deleted_folders = []

        try:
            # 遍历输出目录下的所有文件夹
            for item in self.base_dir.iterdir():
                if not item.is_dir():
                    continue

                total_checked += 1

                try:
                    # 检查是否过期
                    if self.is_folder_expired(item):
                        folder_age_hours = self.get_folder_age(item) / 3600
                        logger.info(f"删除过期文件夹: {item.name} (年龄: {folder_age_hours:.2f}小时)")

                        # 删除整个文件夹
                        shutil.rmtree(item)
                        deleted_count += 1
                        deleted_folders.append({
                            "folder": item.name,
                            "age_hours": round(folder_age_hours, 2)
                        })
                    else:
                        folder_age_hours = self.get_folder_age(item) / 3600
                        logger.debug(f"文件夹 {item.name} 未过期 (年龄: {folder_age_hours:.2f}小时)")

                except Exception as e:
                    logger.error(f"删除文件夹 {item} 时发生错误: {e}")
                    error_count += 1

        except Exception as e:
            logger.error(f"扫描目录 {self.base_dir} 时发生错误: {e}")
            error_count += 1

        # 记录清理结果
        result = {
            "deleted": deleted_count,
            "errors": error_count,
            "total_checked": total_checked,
            "deleted_folders": deleted_folders,
            "cleanup_time": datetime.now().isoformat()
        }

        logger.info(
            f"清理完成: 检查了 {total_checked} 个文件夹，删除了 {deleted_count} 个过期文件夹，发生 {error_count} 个错误")

        return result

    async def start_periodic_cleanup(self, interval_hours: int = 1):
        """
        启动定期清理任务

        Args:
            interval_hours: 清理间隔时间（小时）
        """
        interval_seconds = interval_hours * 3600
        logger.info(f"启动定期清理任务，间隔: {interval_hours}小时，最大文件年龄: {self.max_age_hours}小时")

        while True:
            try:
                logger.info("开始执行定期清理任务...")
                result = self.cleanup_expired_folders()
                logger.info(f"定期清理完成: {result}")

            except Exception as e:
                logger.error(f"定期清理任务执行失败: {e}")

            # 等待下次执行
            logger.info(f"等待 {interval_hours} 小时后执行下次清理...")
            await asyncio.sleep(interval_seconds)


# 全局清理管理器实例
cleanup_manager = FileCleanupManager()


async def start_cleanup_task():
    """启动清理任务"""
    await cleanup_manager.start_periodic_cleanup(interval_hours=1)


# 应用生命周期管理
@asynccontextmanager
async def lifespan(app):
    """FastAPI 应用生命周期管理"""
    # 启动时创建后台任务
    cleanup_task = asyncio.create_task(start_cleanup_task())
    logger.info("文件清理任务已启动")

    yield  # 应用运行期间

    # 关闭时取消任务
    cleanup_task.cancel()
    try:
        await cleanup_task
    except asyncio.CancelledError:
        logger.info("文件清理任务已停止")


# 创建 FastAPI 应用，禁用默认的文档路由，添加生命周期管理
app = FastAPI(docs_url=None, redoc_url=None, lifespan=lifespan)
app.add_middleware(GZipMiddleware, minimum_size=1000)

# 挂载静态文件目录
app.mount("/static", StaticFiles(directory="/sgl-workspace/sglang/docs"), name="static")


# 自定义 Swagger UI 路由
@app.get("/docs", include_in_schema=False)
async def custom_swagger_ui_html():
    return get_swagger_ui_html(
        openapi_url=app.openapi_url,
        title=app.title + " - Swagger UI",
        swagger_css_url="/static/swagger-ui.css",
        swagger_js_url="/static/swagger-ui-bundle.js",
        swagger_favicon_url="https://fastapi.tiangolo.com/img/favicon.png",
    )


# 自定义 ReDoc 路由（可选，如果你也想本地化 ReDoc）
@app.get("/redoc", include_in_schema=False)
async def redoc_html():
    return get_redoc_html(
        openapi_url=app.openapi_url,
        title=app.title + " - ReDoc",
        redoc_js_url="https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js",
    )


def encode_image(image_path: str) -> str:
    """Encode image using base64"""
    with open(image_path, "rb") as f:
        return b64encode(f.read()).decode()


def get_infer_result(file_suffix_identifier: str, pdf_name: str, parse_dir: str) -> Optional[str]:
    """从结果文件中读取推理结果"""
    result_file_path = os.path.join(parse_dir, f"{pdf_name}{file_suffix_identifier}")
    if os.path.exists(result_file_path):
        with open(result_file_path, "r", encoding="utf-8") as fp:
            return fp.read()
    return None


@app.post(path="/file_parse")
async def parse_pdf(
        files: List[UploadFile] = File(...),
        backend: str = Form("pipeline"),
        parse_method: str = Form("auto"),
        formula_enable: bool = Form(True),
        table_enable: bool = Form(True),
        server_url: Optional[str] = Form(None),
        return_md: bool = Form(True),
        return_middle_json: bool = Form(False),
        return_model_output: bool = Form(False),
        return_content_list: bool = Form(True),
        return_tree_structure: bool = Form(True),
        return_images: bool = Form(False),
        draw_layout_bbox: bool = Form(True),
        draw_span_bbox: bool = Form(True),
        dump_orig_pdf: bool = Form(True),
        start_page_id: int = Form(0),
        end_page_id: int = Form(99999),
        base_url: Optional[str] = Form(None),
        # 简化为单一语言参数
        lang: str = Form("ch"),
):
    """
    PDF解析接口，支持多语言文档

    参数说明：
    - lang: OCR语言 (ch=中文, japan=日文, en=英文, korean=韩文等)

    常用语言选择：
    - 中日混合文档: lang="japan" (推荐) 或 lang="ch"
    - 纯中文文档: lang="ch"
    - 纯日文文档: lang="japan"
    - 中英混合文档: lang="ch"
    """
    # 获取命令行配置参数
    config = getattr(app.state, "config", {})

    # 固定输出目录为 /home/output
    output_dir = "/home/output"

    # 从环境变量获取基础URL
    if base_url is None:
        base_url = os.getenv('MINERU_BASE_URL', 'http://localhost:12901/file_mineru/output')

    # 验证语言代码
    supported_langs = ["ch", "en", "japan", "korean", "fr", "de", "es", "pt", "ru", "ar", "th", "vi", "it"]
    if lang not in supported_langs:
        return JSONResponse(
            status_code=400,
            content={"error": f"Unsupported language: {lang}. Supported: {supported_langs}"}
        )

    try:
        # 确保输出目录存在
        os.makedirs(output_dir, exist_ok=True)

        # 处理上传的PDF文件
        pdf_file_names = []
        pdf_bytes_list = []
        original_filenames = []
        files_to_process = []

        for file in files:
            content = await file.read()
            file_path = Path(file.filename)

            # 检查文件类型
            if file_path.suffix.lower() not in pdf_suffixes + image_suffixes:
                return JSONResponse(
                    status_code=400,
                    content={"error": f"Unsupported file type: {file_path.suffix}"}
                )

            # 计算文件内容的MD5值
            file_md5 = hashlib.md5(content).hexdigest()

            # 检查是否已经存在处理结果
            if backend.startswith("pipeline"):
                result_dir = os.path.join(output_dir, file_md5, parse_method)
            else:
                result_dir = os.path.join(output_dir, file_md5, "vlm")

            # 检查结果文件是否已存在
            md_file_path = os.path.join(result_dir, f"{file_md5}.md")
            file_already_processed = os.path.exists(md_file_path)

            pdf_file_names.append(file_md5)
            original_filenames.append(file.filename)

            if not file_already_processed:
                try:
                    # 创建临时文件用于处理
                    temp_path = Path(output_dir) / file_path.name
                    with open(temp_path, "wb") as f:
                        f.write(content)

                    pdf_bytes = read_fn(temp_path)
                    pdf_bytes_list.append(pdf_bytes)
                    files_to_process.append(file_md5)
                    os.remove(temp_path)
                except Exception as e:
                    return JSONResponse(
                        status_code=400,
                        content={"error": f"Failed to load file: {str(e)}"}
                    )

        # 处理新文件
        if files_to_process:
            # 为所有文件使用相同的语言
            lang_list = [lang] * len(files_to_process)

            # 调用异步处理函数
            await aio_do_parse(
                output_dir=output_dir,
                pdf_file_names=files_to_process,
                pdf_bytes_list=pdf_bytes_list,
                p_lang_list=lang_list,
                backend=backend,
                parse_method=parse_method,
                formula_enable=formula_enable,
                table_enable=table_enable,
                server_url=server_url,
                f_draw_layout_bbox=draw_layout_bbox,
                f_draw_span_bbox=draw_span_bbox,
                f_dump_md=return_md,
                f_dump_middle_json=return_middle_json,
                f_dump_model_output=return_model_output,
                f_dump_orig_pdf=dump_orig_pdf,
                f_dump_content_list=return_content_list,
                start_page_id=start_page_id,
                end_page_id=end_page_id,
                **config
            )

            # 生成树形结构
            if return_tree_structure:
                for file_md5 in files_to_process:
                    await generate_tree_structure(output_dir, file_md5, backend, parse_method)

        # 为缓存文件生成树形结构（如果需要且不存在）
        if return_tree_structure:
            for file_md5 in pdf_file_names:
                if file_md5 not in files_to_process:
                    tree_file_path = get_tree_file_path(output_dir, file_md5, backend, parse_method)
                    if not os.path.exists(tree_file_path):
                        await generate_tree_structure(output_dir, file_md5, backend, parse_method)

        # 构建结果路径
        result_dict = {}
        for i, file_md5 in enumerate(pdf_file_names):
            result_dict["document"] = {}
            data = result_dict["document"]

            # 添加原始文件名和MD5
            data["original_filename"] = original_filenames[i]
            data["file_md5"] = file_md5

            if backend.startswith("pipeline"):
                parse_dir = os.path.join(output_dir, file_md5, parse_method)
                relative_path = f"{file_md5}/{parse_method}"
            else:
                parse_dir = os.path.join(output_dir, file_md5, "vlm")
                relative_path = f"{file_md5}/vlm"

            if os.path.exists(parse_dir):
                if return_md:
                    md_file = f"{file_md5}.md"
                    if os.path.exists(os.path.join(parse_dir, md_file)):
                        data["md_url"] = f"{base_url.rstrip('/')}/{relative_path}/{md_file}"

                if return_middle_json:
                    middle_file = f"{file_md5}_middle.json"
                    if os.path.exists(os.path.join(parse_dir, middle_file)):
                        data["middle_json_url"] = f"{base_url.rstrip('/')}/{relative_path}/{middle_file}"

                if return_model_output:
                    if backend.startswith("pipeline"):
                        model_file = f"{file_md5}_model.json"
                    else:
                        model_file = f"{file_md5}_model_output.txt"
                    if os.path.exists(os.path.join(parse_dir, model_file)):
                        data["model_output_url"] = f"{base_url.rstrip('/')}/{relative_path}/{model_file}"

                if return_content_list:
                    content_file = f"{file_md5}_content_list.json"
                    if os.path.exists(os.path.join(parse_dir, content_file)):
                        data["content_list_url"] = f"{base_url.rstrip('/')}/{relative_path}/{content_file}"

                if return_tree_structure:
                    tree_file = f"{file_md5}_tree_structure.json"
                    if os.path.exists(os.path.join(parse_dir, tree_file)):
                        data["tree_structure_url"] = f"{base_url.rstrip('/')}/{relative_path}/{tree_file}"

                if return_images:
                    images_dir = os.path.join(parse_dir, "images")
                    if os.path.exists(images_dir):
                        image_paths = glob(f"{images_dir}/*.jpg")
                        data["image_urls"] = []
                        for image_path in image_paths:
                            image_name = os.path.basename(image_path)
                            image_url = f"{base_url.rstrip('/')}/{relative_path}/images/{image_name}"
                            data["image_urls"].append({
                                "filename": image_name,
                                "url": image_url
                            })

                if dump_orig_pdf:
                    orig_pdf_file = f"{file_md5}_origin.pdf"
                    if os.path.exists(os.path.join(parse_dir, orig_pdf_file)):
                        data["orig_pdf_url"] = f"{base_url.rstrip('/')}/{relative_path}/{orig_pdf_file}"

                if draw_layout_bbox:
                    layout_pdf_file = f"{file_md5}_layout.pdf"
                    if os.path.exists(os.path.join(parse_dir, layout_pdf_file)):
                        data["layout_pdf_url"] = f"{base_url.rstrip('/')}/{relative_path}/{layout_pdf_file}"

                if draw_span_bbox:
                    span_pdf_file = f"{file_md5}_span.pdf"
                    if os.path.exists(os.path.join(parse_dir, span_pdf_file)):
                        data["span_pdf_url"] = f"{base_url.rstrip('/')}/{relative_path}/{span_pdf_file}"

        return JSONResponse(
            status_code=200,
            content={
                "status_code": 200,
                "backend": backend,
                "version": __version__,
                "results": result_dict,
                "processed_files": len(files_to_process),
                "total_files": len(pdf_file_names),
                "cached_files": len(pdf_file_names) - len(files_to_process),
                "language_used": lang
            }
        )
    except Exception as e:
        logger.exception(e)
        return JSONResponse(
            status_code=500,
            content={"status_code": 500, "error": f"Failed to process file: {str(e)}"}
        )
async def generate_tree_structure(output_dir: str, file_md5: str, backend: str, parse_method: str):
    """
    根据content_list.json生成树形结构文件
    """
    try:
        # 确定解析目录
        if backend.startswith("pipeline"):
            parse_dir = os.path.join(output_dir, file_md5, parse_method)
        else:
            parse_dir = os.path.join(output_dir, file_md5, "vlm")

        # content_list.json文件路径
        content_file = os.path.join(parse_dir, f"{file_md5}_content_list.json")

        if not os.path.exists(content_file):
            logger.warning(f"Content list file not found: {content_file}")
            return

        # 读取content_list.json
        with open(content_file, 'r', encoding='utf-8') as f:
            content_data = json.load(f)

        # 调用Java服务处理树形结构（假设有Java服务）
        tree_data = await process_content_to_tree(content_data)

        # 保存树形结构文件
        tree_file = os.path.join(parse_dir, f"{file_md5}_tree_structure.json")
        with open(tree_file, 'w', encoding='utf-8') as f:
            json.dump(tree_data, f, ensure_ascii=False, indent=2)

        logger.info(f"Tree structure generated: {tree_file}")

    except Exception as e:
        logger.error(f"Failed to generate tree structure for {file_md5}: {str(e)}")


async def process_content_to_tree(content_data: list) -> dict:
    """
    将content_list数据转换为树形结构
    这里模拟你的Java PdfTreeProcessor的处理逻辑
    优化：如果标题节点没有内容，强制将下一个内容添加到该节点
    """
    try:
        result = []
        node_stack = []
        chunk_counter = 1

        # 用于跟踪空标题节点
        empty_title_nodes = []

        for i, item in enumerate(content_data):
            if item.get("type") == "text" and item.get("text_level", 0) > 0:
                # 处理标题项
                current_level = item.get("text_level")

                # 弹出比当前级别高或相等的节点
                while node_stack and node_stack[-1].get("text_level", 0) >= current_level:
                    popped_node = node_stack.pop()
                    # 检查被弹出的节点是否为空标题节点
                    if not popped_node.get("children"):
                        empty_title_nodes.append(popped_node)

                # 构建section_path
                section_path = []
                for node in node_stack:
                    if node.get("section_path"):
                        section_path.extend(node["section_path"])
                section_path.append(item.get("text", ""))

                # 创建新节点
                new_node = {
                    "chunk_id": f"c{chunk_counter:04d}",
                    "section_path": section_path,
                    "text_level": current_level,
                    "pages": [item.get("page_idx", 0)],
                    "children": []
                }

                # 添加到父节点或根节点
                if not node_stack:
                    result.append(new_node)
                else:
                    parent = node_stack[-1]
                    parent["children"].append(new_node)
                    # 更新父节点页码
                    if item.get("page_idx") not in parent.get("pages", []):
                        parent["pages"].append(item.get("page_idx"))

                node_stack.append(new_node)
                chunk_counter += 1

            else:
                # 处理内容项
                target_node = None

                # 优先检查是否有空标题节点需要填充
                if empty_title_nodes:
                    target_node = empty_title_nodes.pop(0)  # 取最早的空标题节点
                    target_node["children"].append(item)
                    # 更新页码
                    if item.get("page_idx") not in target_node.get("pages", []):
                        target_node["pages"].append(item.get("page_idx"))
                        # 更新祖先节点页码（需要找到该节点在树中的位置）
                        _update_ancestor_pages(result, target_node, item.get("page_idx"))

                elif not node_stack:
                    # 创建默认根节点
                    default_node = {
                        "chunk_id": "c0000",
                        "section_path": ["未分类内容"],
                        "text_level": 1,
                        "pages": [item.get("page_idx", 0)],
                        "children": [item]
                    }
                    result.append(default_node)

                else:
                    # 添加到当前最深层节点
                    current_node = node_stack[-1]
                    current_node["children"].append(item)
                    # 更新页码
                    if item.get("page_idx") not in current_node.get("pages", []):
                        current_node["pages"].append(item.get("page_idx"))
                        # 更新祖先节点页码
                        for node in node_stack:
                            if item.get("page_idx") not in node.get("pages", []):
                                node["pages"].append(item.get("page_idx"))

        # 处理剩余的空标题节点（如果到最后还有空的标题节点）
        for empty_node in empty_title_nodes:
            # 可以选择删除空节点或者保留
            pass  # 这里保留空节点

        # 排序页码
        def sort_pages(nodes):
            for node in nodes:
                if isinstance(node, dict) and "pages" in node:
                    node["pages"].sort()
                    if "children" in node:
                        child_tree_nodes = [child for child in node["children"] if
                                            isinstance(child, dict) and "chunk_id" in child]
                        if child_tree_nodes:
                            sort_pages(child_tree_nodes)

        sort_pages(result)
        return result

    except Exception as e:
        logger.error(f"Error processing content to tree: {str(e)}")
        return []


def _update_ancestor_pages(tree_nodes, target_node, page_idx):
    """
    更新目标节点祖先节点的页码信息
    """

    def find_and_update_ancestors(nodes, target, page_idx, ancestors=[]):
        for node in nodes:
            if isinstance(node, dict) and "chunk_id" in node:
                current_ancestors = ancestors + [node]
                if node == target:
                    # 找到目标节点，更新所有祖先节点的页码
                    for ancestor in ancestors:
                        if page_idx not in ancestor.get("pages", []):
                            ancestor["pages"].append(page_idx)
                    return True
                elif "children" in node:
                    child_tree_nodes = [child for child in node["children"] if
                                        isinstance(child, dict) and "chunk_id" in child]
                    if find_and_update_ancestors(child_tree_nodes, target, page_idx, current_ancestors):
                        return True
        return False
def get_tree_file_path(output_dir: str, file_md5: str, backend: str, parse_method: str) -> str:
    """
    获取树形结构文件路径
    """
    if backend.startswith("pipeline"):
        parse_dir = os.path.join(output_dir, file_md5, parse_method)
    else:
        parse_dir = os.path.join(output_dir, file_md5, "vlm")

    return os.path.join(parse_dir, f"{file_md5}_tree_structure.json")
# 添加清理相关的API端点
@app.get("/cleanup")
async def manual_cleanup_endpoint():
    """手动执行文件清理的API端点"""
    try:
        result = cleanup_manager.cleanup_expired_folders()
        return {
            "success": True,
            "message": "清理完成",
            "result": result
        }
    except Exception as e:
        logger.error(f"手动清理失败: {e}")
        return {
            "success": False,
            "message": f"清理失败: {str(e)}"
        }


@app.get("/cleanup/status")
async def cleanup_status():
    """获取清理任务状态"""
    base_dir = Path("/home/output")

    if not base_dir.exists():
        return {
            "base_dir": str(base_dir),
            "exists": False,
            "folders": []
        }

    folders_info = []
    for item in base_dir.iterdir():
        if item.is_dir():
            age_hours = cleanup_manager.get_folder_age(item) / 3600
            is_expired = age_hours > cleanup_manager.max_age_hours

            folders_info.append({
                "name": item.name,
                "age_hours": round(age_hours, 2),
                "is_expired": is_expired,
                "expires_in_hours": round(max(0, cleanup_manager.max_age_hours - age_hours), 2)
            })

    return {
        "base_dir": str(base_dir),
        "exists": True,
        "max_age_hours": cleanup_manager.max_age_hours,
        "total_folders": len(folders_info),
        "expired_folders": sum(1 for f in folders_info if f["is_expired"]),
        "folders": folders_info
    }


@click.command(context_settings=dict(ignore_unknown_options=True, allow_extra_args=True))
@click.pass_context
@click.option('--host', default='127.0.0.1', help='Server host (default: 127.0.0.1)')
@click.option('--port', default=8000, type=int, help='Server port (default: 8000)')
@click.option('--reload', is_flag=True, help='Enable auto-reload (development mode)')
def main(ctx, host, port, reload, **kwargs):
    kwargs.update(arg_parse(ctx))

    # 将配置参数存储到应用状态中
    app.state.config = kwargs

    """启动MinerU FastAPI服务器的命令行入口"""
    print(f"Start MinerU FastAPI Service: http://{host}:{port}")
    print("The API documentation can be accessed at the following address:")
    print(f"- Swagger UI: http://{host}:{port}/docs (使用本地文件)")
    print(f"- ReDoc: http://{host}:{port}/redoc")
    print(f"- Cleanup Status: http://{host}:{port}/cleanup/status")
    print(f"- Manual Cleanup: http://{host}:{port}/cleanup")

    uvicorn.run(
        "mineru.cli.fast_api:app",
        host=host,
        port=port,
        reload=reload
    )


if __name__ == "__main__":
    main()