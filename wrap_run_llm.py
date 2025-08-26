import os
import re


def insert_runllm_widget(html_content):
    # RunLLM Widget script to be inserted - 使用本地文件
    widget_script = """
    <!-- React 18.3.1 本地文件 -->
    <script type="module" src="./react-18.3.1.esm.js"></script>
    
    <!-- RunLLM Widget 本地脚本 -->
    <script type="module" id="runllm-widget-script" 
           src="./widget-main.js" 
           crossorigin="true" 
           version="stable" 
           runllm-keyboard-shortcut="Mod+j" 
           runllm-name="SGLang Chatbot" 
           runllm-position="BOTTOM_RIGHT" 
           runllm-assistant-id="629" 
           async>
    </script>
    """

    # Find the closing body tag and insert the widget script before it
    return re.sub(r"</body>", f"{widget_script}\n</body>", html_content)


def create_local_widget_main(build_dir):
    """
    创建本地的 widget-main.js 文件，修改其中的导入路径
    """
    widget_main_content = '''import { D as L } from "./main-My2jJ2eg.js";
import "./react-18.3.1.esm.js";
export {
  L as DEFAULT_HIGHLIGHT_COLOR
};'''
    
    widget_main_path = os.path.join(build_dir, "widget-main.js")
    with open(widget_main_path, "w", encoding="utf-8") as f:
        f.write(widget_main_content)
    
    print(f"Created local widget-main.js at: {widget_main_path}")


def copy_dependencies_to_build(build_dir):
    """
    确保依赖文件被复制到构建目录
    """
    dependencies = [
        ("main-My2jJ2eg.js", "main-My2jJ2eg.js"),
        ("react-18.3.1.esm.js", "react-18.3.1.esm.js")
    ]
    
    for src_file, dest_file in dependencies:
        src_path = os.path.join(".", src_file)  # 假设文件在当前目录
        dest_path = os.path.join(build_dir, dest_file)
        
        if os.path.exists(src_path):
            try:
                import shutil
                shutil.copy2(src_path, dest_path)
                print(f"Copied {src_file} to {dest_path}")
            except Exception as e:
                print(f"Warning: Could not copy {src_file}: {e}")
        else:
            print(f"Warning: {src_file} not found in current directory")


def process_html_files(build_dir):
    for root, dirs, files in os.walk(build_dir):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)

                # Read the HTML file
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                # Insert the RunLLM widget
                modified_content = insert_runllm_widget(content)

                # Write back the modified content
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(modified_content)
                
                print(f"Processed: {file_path}")


def main():
    # Get the build directory path
    build_dir = os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "_build", "html"
    )
    
    # Process all HTML files
    if os.path.exists(build_dir):
        print(f"Processing HTML files in: {build_dir}")
        
        # 1. 复制依赖文件到构建目录
        copy_dependencies_to_build(build_dir)
        
        # 2. 创建修改后的 widget-main.js
        create_local_widget_main(build_dir)
        
        # 3. 处理所有HTML文件
        process_html_files(build_dir)
        
        print("All HTML files have been processed with local RunLLM widget!")
    else:
        print(f"Build directory not found: {build_dir}")


if __name__ == "__main__":
    main()
