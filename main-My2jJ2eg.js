import * as N from "./react-18.3.1.esm.js";
import _e, { useState as P, Fragment as Li, createContext as An, useContext as Nt, useRef as J, useEffect as W, useMemo as Oi, useCallback as H, useLayoutEffect as tn, useId as bc, forwardRef as se, cloneElement as Fi, Children as xc, createElement as wc, Suspense as Cc, lazy as Sc } from "./react-18.3.1.esm.js";
import * as _c from "./react-dom-18.3.1.esm.js";
import Mi, { createPortal as jc } from "./react-dom-18.3.1.esm.js";
function Ec(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s && Object.defineProperty(e, o, s.get ? s : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Bo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var er = { exports: {} }, gn = {};
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ws;
function Tc() {
  if (ws) return gn;
  ws = 1;
  var e = _e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, u) {
    var d, f = {}, m = null, p = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (d in l) r.call(l, d) && !s.hasOwnProperty(d) && (f[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: a, key: m, ref: p, props: f, _owner: o.current };
  }
  return gn.Fragment = n, gn.jsx = i, gn.jsxs = i, gn;
}
var yn = {}, Cs;
function Rc() {
  if (Cs) return yn;
  Cs = 1;
  var e = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return e.NODE_ENV !== "production" && function() {
    var t = _e, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, v = "@@iterator";
    function w(h) {
      if (h === null || typeof h != "object")
        return null;
      var T = g && h[g] || h[v];
      return typeof T == "function" ? T : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(h) {
      {
        for (var T = arguments.length, L = new Array(T > 1 ? T - 1 : 0), z = 1; z < T; z++)
          L[z - 1] = arguments[z];
        C("error", h, L);
      }
    }
    function C(h, T, L) {
      {
        var z = S.ReactDebugCurrentFrame, te = z.getStackAddendum();
        te !== "" && (T += "%s", L = L.concat([te]));
        var re = L.map(function(Q) {
          return String(Q);
        });
        re.unshift("Warning: " + T), Function.prototype.apply.call(console[h], console, re);
      }
    }
    var _ = !1, x = !1, E = !1, j = !1, $ = !1, I;
    I = Symbol.for("react.module.reference");
    function O(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === o || h === i || $ || h === s || h === d || h === f || j || h === y || _ || x || E || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === m || h.$$typeof === a || h.$$typeof === l || h.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === I || h.getModuleId !== void 0));
    }
    function B(h, T, L) {
      var z = h.displayName;
      if (z)
        return z;
      var te = T.displayName || T.name || "";
      return te !== "" ? L + "(" + te + ")" : L;
    }
    function G(h) {
      return h.displayName || "Context";
    }
    function F(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            var T = h;
            return G(T) + ".Consumer";
          case a:
            var L = h;
            return G(L._context) + ".Provider";
          case u:
            return B(h, h.render, "ForwardRef");
          case m:
            var z = h.displayName || null;
            return z !== null ? z : F(h.type) || "Memo";
          case p: {
            var te = h, re = te._payload, Q = te._init;
            try {
              return F(Q(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, Y = 0, V, ee, D, A, U, X, ne;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function pe() {
      {
        if (Y === 0) {
          V = console.log, ee = console.info, D = console.warn, A = console.error, U = console.group, X = console.groupCollapsed, ne = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        Y++;
      }
    }
    function ae() {
      {
        if (Y--, Y === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, h, {
              value: V
            }),
            info: q({}, h, {
              value: ee
            }),
            warn: q({}, h, {
              value: D
            }),
            error: q({}, h, {
              value: A
            }),
            group: q({}, h, {
              value: U
            }),
            groupCollapsed: q({}, h, {
              value: X
            }),
            groupEnd: q({}, h, {
              value: ne
            })
          });
        }
        Y < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = S.ReactCurrentDispatcher, Le;
    function Oe(h, T, L) {
      {
        if (Le === void 0)
          try {
            throw Error();
          } catch (te) {
            var z = te.stack.trim().match(/\n( *(at )?)/);
            Le = z && z[1] || "";
          }
        return `
` + Le + h;
      }
    }
    var We = !1, Je;
    {
      var ke = typeof WeakMap == "function" ? WeakMap : Map;
      Je = new ke();
    }
    function lt(h, T) {
      if (!h || We)
        return "";
      {
        var L = Je.get(h);
        if (L !== void 0)
          return L;
      }
      var z;
      We = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = me.current, me.current = null, pe();
      try {
        if (T) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (Ae) {
              z = Ae;
            }
            Reflect.construct(h, [], Q);
          } else {
            try {
              Q.call();
            } catch (Ae) {
              z = Ae;
            }
            h.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ae) {
            z = Ae;
          }
          h();
        }
      } catch (Ae) {
        if (Ae && z && typeof Ae.stack == "string") {
          for (var Z = Ae.stack.split(`
`), ce = z.stack.split(`
`), fe = Z.length - 1, he = ce.length - 1; fe >= 1 && he >= 0 && Z[fe] !== ce[he]; )
            he--;
          for (; fe >= 1 && he >= 0; fe--, he--)
            if (Z[fe] !== ce[he]) {
              if (fe !== 1 || he !== 1)
                do
                  if (fe--, he--, he < 0 || Z[fe] !== ce[he]) {
                    var De = `
` + Z[fe].replace(" at new ", " at ");
                    return h.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", h.displayName)), typeof h == "function" && Je.set(h, De), De;
                  }
                while (fe >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        We = !1, me.current = re, ae(), Error.prepareStackTrace = te;
      }
      var Dt = h ? h.displayName || h.name : "", Tt = Dt ? Oe(Dt) : "";
      return typeof h == "function" && Je.set(h, Tt), Tt;
    }
    function de(h, T, L) {
      return lt(h, !1);
    }
    function ut(h) {
      var T = h.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ze(h, T, L) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return lt(h, ut(h));
      if (typeof h == "string")
        return Oe(h);
      switch (h) {
        case d:
          return Oe("Suspense");
        case f:
          return Oe("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case u:
            return de(h.render);
          case m:
            return Ze(h.type, T, L);
          case p: {
            var z = h, te = z._payload, re = z._init;
            try {
              return Ze(re(te), T, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, Qe = {}, $e = S.ReactDebugCurrentFrame;
    function et(h) {
      if (h) {
        var T = h._owner, L = Ze(h.type, h._source, T ? T.type : null);
        $e.setExtraStackFrame(L);
      } else
        $e.setExtraStackFrame(null);
    }
    function Lt(h, T, L, z, te) {
      {
        var re = Function.call.bind(Re);
        for (var Q in h)
          if (re(h, Q)) {
            var Z = void 0;
            try {
              if (typeof h[Q] != "function") {
                var ce = Error((z || "React class") + ": " + L + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              Z = h[Q](T, Q, z, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fe) {
              Z = fe;
            }
            Z && !(Z instanceof Error) && (et(te), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", L, Q, typeof Z), et(null)), Z instanceof Error && !(Z.message in Qe) && (Qe[Z.message] = !0, et(te), b("Failed %s type: %s", L, Z.message), et(null));
          }
      }
    }
    var Ot = Array.isArray;
    function Fe(h) {
      return Ot(h);
    }
    function cn(h) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, L = T && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return L;
      }
    }
    function Dn(h) {
      try {
        return yt(h), !1;
      } catch {
        return !0;
      }
    }
    function yt(h) {
      return "" + h;
    }
    function ln(h) {
      if (Dn(h))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cn(h)), yt(h);
    }
    var Bn = S.ReactCurrentOwner, Hn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, un, zn;
    function Vn(h) {
      if (Re.call(h, "ref")) {
        var T = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Et(h) {
      if (Re.call(h, "key")) {
        var T = Object.getOwnPropertyDescriptor(h, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Wn(h, T) {
      typeof h.ref == "string" && Bn.current;
    }
    function Un(h, T) {
      {
        var L = function() {
          un || (un = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function Qr(h, T) {
      {
        var L = function() {
          zn || (zn = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var dn = function(h, T, L, z, te, re, Q) {
      var Z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: h,
        key: T,
        ref: L,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: re
      };
      return Z._store = {}, Object.defineProperty(Z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(Z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(Z.props), Object.freeze(Z)), Z;
    };
    function Yn(h, T, L, z, te) {
      {
        var re, Q = {}, Z = null, ce = null;
        L !== void 0 && (ln(L), Z = "" + L), Et(T) && (ln(T.key), Z = "" + T.key), Vn(T) && (ce = T.ref, Wn(T, te));
        for (re in T)
          Re.call(T, re) && !Hn.hasOwnProperty(re) && (Q[re] = T[re]);
        if (h && h.defaultProps) {
          var fe = h.defaultProps;
          for (re in fe)
            Q[re] === void 0 && (Q[re] = fe[re]);
        }
        if (Z || ce) {
          var he = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Z && Un(Q, he), ce && Qr(Q, he);
        }
        return dn(h, Z, ce, te, z, Bn.current, Q);
      }
    }
    var fn = S.ReactCurrentOwner, Gn = S.ReactDebugCurrentFrame;
    function Me(h) {
      if (h) {
        var T = h._owner, L = Ze(h.type, h._source, T ? T.type : null);
        Gn.setExtraStackFrame(L);
      } else
        Gn.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function vt(h) {
      return typeof h == "object" && h !== null && h.$$typeof === n;
    }
    function Xn() {
      {
        if (fn.current) {
          var h = F(fn.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Mt(h) {
      return "";
    }
    var pn = {};
    function mn(h) {
      {
        var T = Xn();
        if (!T) {
          var L = typeof h == "string" ? h : h.displayName || h.name;
          L && (T = `

Check the top-level render call using <` + L + ">.");
        }
        return T;
      }
    }
    function Kn(h, T) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var L = mn(T);
        if (pn[L])
          return;
        pn[L] = !0;
        var z = "";
        h && h._owner && h._owner !== fn.current && (z = " It was passed a child from " + F(h._owner.type) + "."), Me(h), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, z), Me(null);
      }
    }
    function qn(h, T) {
      {
        if (typeof h != "object")
          return;
        if (Fe(h))
          for (var L = 0; L < h.length; L++) {
            var z = h[L];
            vt(z) && Kn(z, T);
          }
        else if (vt(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var te = w(h);
          if (typeof te == "function" && te !== h.entries)
            for (var re = te.call(h), Q; !(Q = re.next()).done; )
              vt(Q.value) && Kn(Q.value, T);
        }
      }
    }
    function eo(h) {
      {
        var T = h.type;
        if (T == null || typeof T == "string")
          return;
        var L;
        if (typeof T == "function")
          L = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === m))
          L = T.propTypes;
        else
          return;
        if (L) {
          var z = F(T);
          Lt(L, h.props, "prop", z, h);
        } else if (T.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var te = F(T);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hn(h) {
      {
        for (var T = Object.keys(h.props), L = 0; L < T.length; L++) {
          var z = T[L];
          if (z !== "children" && z !== "key") {
            Me(h), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), Me(null);
            break;
          }
        }
        h.ref !== null && (Me(h), b("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var Jn = {};
    function Zn(h, T, L, z, te, re) {
      {
        var Q = O(h);
        if (!Q) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Mt();
          ce ? Z += ce : Z += Xn();
          var fe;
          h === null ? fe = "null" : Fe(h) ? fe = "array" : h !== void 0 && h.$$typeof === n ? (fe = "<" + (F(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof h, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, Z);
        }
        var he = Yn(h, T, L, te, re);
        if (he == null)
          return he;
        if (Q) {
          var De = T.children;
          if (De !== void 0)
            if (z)
              if (Fe(De)) {
                for (var Dt = 0; Dt < De.length; Dt++)
                  qn(De[Dt], h);
                Object.freeze && Object.freeze(De);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qn(De, h);
        }
        if (Re.call(T, "key")) {
          var Tt = F(h), Ae = Object.keys(T).filter(function(vc) {
            return vc !== "key";
          }), ro = Ae.length > 0 ? "{key: someKey, " + Ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Jn[Tt + ro]) {
            var yc = Ae.length > 0 ? "{" + Ae.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ro, Tt, yc, Tt), Jn[Tt + ro] = !0;
          }
        }
        return h === o ? hn(he) : eo(he), he;
      }
    }
    function to(h, T, L) {
      return Zn(h, T, L, !0);
    }
    function no(h, T, L) {
      return Zn(h, T, L, !1);
    }
    var Qn = no, M = to;
    yn.Fragment = o, yn.jsx = Qn, yn.jsxs = M;
  }(), yn;
}
var Ss;
function Ac() {
  if (Ss) return er.exports;
  Ss = 1;
  var e = {};
  return e.NODE_ENV === "production" ? er.exports = Tc() : er.exports = Rc(), er.exports;
}
var c = Ac();
const kc = /* @__PURE__ */ Bo(c), eg = /* @__PURE__ */ Ec({ __proto__: null, default: kc }, [c]);
var Bt = {}, _s;
function $c() {
  if (_s) return Bt;
  _s = 1;
  var e = {}, t = Mi;
  if (e.NODE_ENV === "production")
    Bt.createRoot = t.createRoot, Bt.hydrateRoot = t.hydrateRoot;
  else {
    var n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Bt.createRoot = function(r, o) {
      n.usingClientEntryPoint = !0;
      try {
        return t.createRoot(r, o);
      } finally {
        n.usingClientEntryPoint = !1;
      }
    }, Bt.hydrateRoot = function(r, o, s) {
      n.usingClientEntryPoint = !0;
      try {
        return t.hydrateRoot(r, o, s);
      } finally {
        n.usingClientEntryPoint = !1;
      }
    };
  }
  return Bt;
}
var Pc = $c();
const Nc = /* @__PURE__ */ Bo(Pc);
var nt = function() {
  return nt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, nt.apply(this, arguments);
};
function Di(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ic(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var dr = "right-scroll-bar-position", fr = "width-before-scroll-bar", Lc = "with-scroll-bars-hidden", Oc = "--removed-body-scroll-bar-size";
function oo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Fc(e, t) {
  var n = P(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Mc = typeof window < "u" ? N.useLayoutEffect : N.useEffect, js = /* @__PURE__ */ new WeakMap();
function Dc(e, t) {
  var n = Fc(null, function(r) {
    return e.forEach(function(o) {
      return oo(o, r);
    });
  });
  return Mc(function() {
    var r = js.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || oo(a, null);
      }), s.forEach(function(a) {
        o.has(a) || oo(a, i);
      });
    }
    js.set(n, e);
  }, [e]), n;
}
function Bc(e) {
  return e;
}
function Hc(e, t) {
  t === void 0 && (t = Bc);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var l = function() {
        var d = i;
        i = [], d.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function zc(e) {
  e === void 0 && (e = {});
  var t = Hc(null);
  return t.options = nt({ async: !0, ssr: !1 }, e), t;
}
var Bi = function(e) {
  var t = e.sideCar, n = Di(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return N.createElement(r, nt({}, n));
};
Bi.isSideCarExport = !0;
function Vc(e, t) {
  return e.useMedium(t), Bi;
}
var Hi = zc(), so = function() {
}, _r = N.forwardRef(function(e, t) {
  var n = N.useRef(null), r = N.useState({
    onScrollCapture: so,
    onWheelCapture: so,
    onTouchMoveCapture: so
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, m = e.sideCar, p = e.noIsolation, y = e.inert, g = e.allowPinchZoom, v = e.as, w = v === void 0 ? "div" : v, S = e.gapMode, b = Di(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, _ = Dc([n, t]), x = nt(nt({}, b), o);
  return N.createElement(
    N.Fragment,
    null,
    d && N.createElement(C, { sideCar: Hi, removeScrollBar: u, shards: f, noIsolation: p, inert: y, setCallbacks: s, allowPinchZoom: !!g, lockRef: n, gapMode: S }),
    i ? N.cloneElement(N.Children.only(a), nt(nt({}, x), { ref: _ })) : N.createElement(w, nt({}, x, { className: l, ref: _ }), a)
  );
});
_r.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
_r.classNames = {
  fullWidth: fr,
  zeroRight: dr
};
var Wc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Uc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Wc();
  return t && e.setAttribute("nonce", t), e;
}
function Yc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Gc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Xc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Uc()) && (Yc(t, n), Gc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Kc = function() {
  var e = Xc();
  return function(t, n) {
    N.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, zi = function() {
  var e = Kc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, qc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, io = function(e) {
  return parseInt(e || "", 10) || 0;
}, Jc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [io(n), io(r), io(o)];
}, Zc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return qc;
  var t = Jc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Qc = zi(), Gt = "data-scroll-locked", el = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Lc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Gt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(dr, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(fr, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(dr, " .").concat(dr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(fr, " .").concat(fr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Gt, `] {
    `).concat(Oc, ": ").concat(a, `px;
  }
`);
}, Es = function() {
  var e = parseInt(document.body.getAttribute(Gt) || "0", 10);
  return isFinite(e) ? e : 0;
}, tl = function() {
  N.useEffect(function() {
    return document.body.setAttribute(Gt, (Es() + 1).toString()), function() {
      var e = Es() - 1;
      e <= 0 ? document.body.removeAttribute(Gt) : document.body.setAttribute(Gt, e.toString());
    };
  }, []);
}, nl = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  tl();
  var s = N.useMemo(function() {
    return Zc(o);
  }, [o]);
  return N.createElement(Qc, { styles: el(s, !t, o, n ? "" : "!important") });
}, wo = !1;
if (typeof window < "u")
  try {
    var tr = Object.defineProperty({}, "passive", {
      get: function() {
        return wo = !0, !0;
      }
    });
    window.addEventListener("test", tr, tr), window.removeEventListener("test", tr, tr);
  } catch {
    wo = !1;
  }
var Ht = wo ? { passive: !1 } : !1, rl = function(e) {
  return e.tagName === "TEXTAREA";
}, Vi = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !rl(e) && n[t] === "visible")
  );
}, ol = function(e) {
  return Vi(e, "overflowY");
}, sl = function(e) {
  return Vi(e, "overflowX");
}, Ts = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Wi(e, r);
    if (o) {
      var s = Ui(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, il = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, al = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Wi = function(e, t) {
  return e === "v" ? ol(t) : sl(t);
}, Ui = function(e, t) {
  return e === "v" ? il(t) : al(t);
}, cl = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ll = function(e, t, n, r, o) {
  var s = cl(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, d = i > 0, f = 0, m = 0;
  do {
    var p = Ui(e, a), y = p[0], g = p[1], v = p[2], w = g - v - s * y;
    (y || w) && Wi(e, a) && (f += w, m += y), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(m) < 1) && (u = !0), u;
}, nr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Rs = function(e) {
  return [e.deltaX, e.deltaY];
}, As = function(e) {
  return e && "current" in e ? e.current : e;
}, ul = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dl = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fl = 0, zt = [];
function pl(e) {
  var t = N.useRef([]), n = N.useRef([0, 0]), r = N.useRef(), o = N.useState(fl++)[0], s = N.useState(zi)[0], i = N.useRef(e);
  N.useEffect(function() {
    i.current = e;
  }, [e]), N.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Ic([e.lockRef.current], (e.shards || []).map(As), !0).filter(Boolean);
      return g.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = N.useCallback(function(g, v) {
    if ("touches" in g && g.touches.length === 2)
      return !i.current.allowPinchZoom;
    var w = nr(g), S = n.current, b = "deltaX" in g ? g.deltaX : S[0] - w[0], C = "deltaY" in g ? g.deltaY : S[1] - w[1], _, x = g.target, E = Math.abs(b) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && E === "h" && x.type === "range")
      return !1;
    var j = Ts(E, x);
    if (!j)
      return !0;
    if (j ? _ = E : (_ = E === "v" ? "h" : "v", j = Ts(E, x)), !j)
      return !1;
    if (!r.current && "changedTouches" in g && (b || C) && (r.current = _), !_)
      return !0;
    var $ = r.current || _;
    return ll($, v, g, $ === "h" ? b : C);
  }, []), l = N.useCallback(function(g) {
    var v = g;
    if (!(!zt.length || zt[zt.length - 1] !== s)) {
      var w = "deltaY" in v ? Rs(v) : nr(v), S = t.current.filter(function(_) {
        return _.name === v.type && (_.target === v.target || v.target === _.shadowParent) && ul(_.delta, w);
      })[0];
      if (S && S.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!S) {
        var b = (i.current.shards || []).map(As).filter(Boolean).filter(function(_) {
          return _.contains(v.target);
        }), C = b.length > 0 ? a(v, b[0]) : !i.current.noIsolation;
        C && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = N.useCallback(function(g, v, w, S) {
    var b = { name: g, delta: v, target: w, should: S, shadowParent: ml(w) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== b;
      });
    }, 1);
  }, []), d = N.useCallback(function(g) {
    n.current = nr(g), r.current = void 0;
  }, []), f = N.useCallback(function(g) {
    u(g.type, Rs(g), g.target, a(g, e.lockRef.current));
  }, []), m = N.useCallback(function(g) {
    u(g.type, nr(g), g.target, a(g, e.lockRef.current));
  }, []);
  N.useEffect(function() {
    return zt.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, Ht), document.addEventListener("touchmove", l, Ht), document.addEventListener("touchstart", d, Ht), function() {
      zt = zt.filter(function(g) {
        return g !== s;
      }), document.removeEventListener("wheel", l, Ht), document.removeEventListener("touchmove", l, Ht), document.removeEventListener("touchstart", d, Ht);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return N.createElement(
    N.Fragment,
    null,
    y ? N.createElement(s, { styles: dl(o) }) : null,
    p ? N.createElement(nl, { gapMode: e.gapMode }) : null
  );
}
function ml(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const hl = Vc(Hi, pl);
var Yi = N.forwardRef(function(e, t) {
  return N.createElement(_r, nt({}, e, { ref: t, sideCar: hl }));
});
Yi.classNames = _r.classNames;
function rt(e) {
  return Object.keys(e);
}
function ao(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Ho(e, t) {
  const n = { ...e }, r = t;
  return ao(e) && ao(t) && Object.keys(t).forEach((o) => {
    ao(r[o]) && o in e ? n[o] = Ho(n[o], r[o]) : n[o] = r[o];
  }), n;
}
function gl(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function yl(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function vl(e) {
  const t = yl(e);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function co(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function Gi(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0")
      return `0${e}`;
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? co(o) : o;
    }
    if (typeof r == "string") {
      if (r === "" || r.startsWith("calc(") || r.startsWith("clamp(") || r.includes("rgba("))
        return r;
      if (r.includes(","))
        return r.split(",").map((s) => n(s)).join(",");
      if (r.includes(" "))
        return r.split(" ").map((s) => n(s)).join(" ");
      if (r.includes(e))
        return t ? co(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const s = `${Number(o) / 16}${e}`;
        return t ? co(s) : s;
      }
    }
    return r;
  }
  return n;
}
const R = Gi("rem", { shouldScale: !0 }), ks = Gi("em");
function jr(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function Xi(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function Ki(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== Li : !1;
}
function kn(e) {
  const t = An(null);
  return [({ children: o, value: s }) => /* @__PURE__ */ c.jsx(t.Provider, { value: s, children: o }), () => {
    const o = Nt(t);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function bl(e = null) {
  const t = An(e);
  return [({ children: o, value: s }) => /* @__PURE__ */ c.jsx(t.Provider, { value: s, children: o }), () => Nt(t)];
}
const xl = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function $n(e) {
  return xl[e];
}
const wl = () => {
};
function Cl(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || wl : (n) => {
    var r;
    n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
  };
}
function Ie(e, t = "size", n = !0) {
  if (e !== void 0)
    return Xi(e) ? n ? R(e) : e : `var(--${t}-${e})`;
}
function Er(e) {
  return Ie(e, "mantine-spacing");
}
function it(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : Ie(e, "mantine-radius");
}
function ot(e) {
  return Ie(e, "mantine-font-size");
}
function Sl(e) {
  return Ie(e, "mantine-line-height", !1);
}
function zo(e) {
  if (e)
    return Ie(e, "mantine-shadow", !1);
}
function qi() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function At(e) {
  const t = J(e);
  return W(() => {
    t.current = e;
  }), Oi(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Tr(e, t) {
  const n = At(e), r = J(0);
  return W(() => () => window.clearTimeout(r.current), []), H(
    (...o) => {
      window.clearTimeout(r.current), r.current = window.setTimeout(() => n(...o), t);
    },
    [n, t]
  );
}
const $s = ["mousedown", "touchstart"];
function _l(e, t, n) {
  const r = J();
  return W(() => {
    const o = (s) => {
      const { target: i } = s ?? {};
      if (Array.isArray(n)) {
        const a = (i == null ? void 0 : i.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(i) && i.tagName !== "HTML";
        n.every((u) => !!u && !s.composedPath().includes(u)) && !a && e();
      } else r.current && !r.current.contains(i) && e();
    };
    return (t || $s).forEach((s) => document.addEventListener(s, o)), () => {
      (t || $s).forEach((s) => document.removeEventListener(s, o));
    };
  }, [r, e, n]), r;
}
function jl(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function El(e, t) {
  return typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function Ji(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = P(
    n ? t : El(e)
  ), s = J();
  return W(() => {
    if ("matchMedia" in window)
      return s.current = window.matchMedia(e), o(s.current.matches), jl(s.current, (i) => o(i.matches));
  }, [e]), r;
}
function Tl(e, t) {
  return Ji("(prefers-color-scheme: dark)", e === "dark", t) ? "dark" : "light";
}
const Pn = typeof document < "u" ? tn : W;
function Kt(e, t) {
  const n = J(!1);
  W(
    () => () => {
      n.current = !1;
    },
    []
  ), W(() => {
    if (n.current)
      return e();
    n.current = !0;
  }, t);
}
function Zi({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = J(), r = () => {
    var o;
    n.current && "focus" in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Kt(() => {
    let o = -1;
    const s = (i) => {
      i.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", s), e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", s);
    };
  }, [e, t]), r;
}
function Rl(e, t = "body > :not(script)") {
  const n = qi(), r = Array.from(
    document.querySelectorAll(t)
  ).map((o) => {
    var l;
    if ((l = o == null ? void 0 : o.shadowRoot) != null && l.contains(e) || o.contains(e))
      return;
    const s = o.getAttribute("aria-hidden"), i = o.getAttribute("data-hidden"), a = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", n), s === null || s === "false" ? o.setAttribute("aria-hidden", "true") : !i && !a && o.setAttribute("data-hidden", s), {
      node: o,
      ariaHidden: i || null
    };
  });
  return () => {
    r.forEach((o) => {
      !o || n !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"));
    });
  };
}
var Al = {};
const kl = /input|select|textarea|button|object/, Qi = "a, input, select, textarea, button, object, [tabindex]";
function $l(e) {
  return Al.NODE_ENV === "test" ? !1 : e.style.display === "none";
}
function Pl(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if ($l(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function ea(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Co(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(ea(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (kl.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && Pl(e);
}
function ta(e) {
  const t = ea(e);
  return (Number.isNaN(t) || t >= 0) && Co(e);
}
function Nl(e) {
  return Array.from(e.querySelectorAll(Qi)).filter(ta);
}
function Il(e, t) {
  const n = Nl(e);
  if (!n.length) {
    t.preventDefault();
    return;
  }
  const r = n[t.shiftKey ? 0 : n.length - 1], o = e.getRootNode();
  let s = r === o.activeElement || e === o.activeElement;
  const i = o.activeElement;
  if (i.tagName === "INPUT" && i.getAttribute("type") === "radio" && (s = n.filter(
    (d) => d.getAttribute("type") === "radio" && d.getAttribute("name") === i.getAttribute("name")
  ).includes(r)), !s)
    return;
  t.preventDefault();
  const l = n[t.shiftKey ? n.length - 1 : 0];
  l && l.focus();
}
var Ps = {};
function Ll(e = !0) {
  const t = J(), n = J(null), r = (s) => {
    let i = s.querySelector("[data-autofocus]");
    if (!i) {
      const a = Array.from(s.querySelectorAll(Qi));
      i = a.find(ta) || a.find(Co) || null, !i && Co(s) && (i = s);
    }
    i ? i.focus({ preventScroll: !0 }) : Ps.NODE_ENV === "development" && console.warn(
      "[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node",
      s
    );
  }, o = H(
    (s) => {
      if (e) {
        if (s === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = Rl(s), t.current !== s && (s ? (setTimeout(() => {
          s.getRootNode() ? r(s) : Ps.NODE_ENV === "development" && console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", s);
        }), t.current = s) : t.current = null);
      }
    },
    [e]
  );
  return W(() => {
    if (!e)
      return;
    t.current && setTimeout(() => r(t.current));
    const s = (i) => {
      i.key === "Tab" && t.current && Il(t.current, i);
    };
    return document.addEventListener("keydown", s), () => {
      document.removeEventListener("keydown", s), n.current && n.current();
    };
  }, [e]), o;
}
const Ol = _e.useId || (() => {
});
function Fl() {
  const e = Ol();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Rr(e) {
  const t = Fl(), [n, r] = P(t);
  return Pn(() => {
    r(qi());
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
}
function So(e, t, n) {
  W(() => (window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)), [e, t]);
}
function Vo(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function Ml(...e) {
  return (t) => {
    e.forEach((n) => Vo(n, t));
  };
}
function at(...e) {
  return H(Ml(...e), e);
}
function Dl({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {
  }
}) {
  const [o, s] = P(
    t !== void 0 ? t : n
  ), i = (a, ...l) => {
    s(a), r == null || r(a, ...l);
  };
  return e !== void 0 ? [e, r, !0] : [o, i, !1];
}
function Wo(e, t) {
  return Ji("(prefers-reduced-motion: reduce)", e, t);
}
const Bl = (e) => e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e, Hl = ({
  axis: e,
  target: t,
  parent: n,
  alignment: r,
  offset: o,
  isList: s
}) => {
  if (!t || !n && typeof document > "u")
    return 0;
  const i = !!n, l = (n || document.body).getBoundingClientRect(), u = t.getBoundingClientRect(), d = (f) => u[f] - l[f];
  if (e === "y") {
    const f = d("top");
    if (f === 0)
      return 0;
    if (r === "start") {
      const p = f - o;
      return p <= u.height * (s ? 0 : 1) || !s ? p : 0;
    }
    const m = i ? l.height : window.innerHeight;
    if (r === "end") {
      const p = f + o - m + u.height;
      return p >= -u.height * (s ? 0 : 1) || !s ? p : 0;
    }
    return r === "center" ? f - m / 2 + u.height / 2 : 0;
  }
  if (e === "x") {
    const f = d("left");
    if (f === 0)
      return 0;
    if (r === "start") {
      const p = f - o;
      return p <= u.width || !s ? p : 0;
    }
    const m = i ? l.width : window.innerWidth;
    if (r === "end") {
      const p = f + o - m + u.width;
      return p >= -u.width || !s ? p : 0;
    }
    return r === "center" ? f - m / 2 + u.width / 2 : 0;
  }
  return 0;
}, zl = ({ axis: e, parent: t }) => {
  if (!t && typeof document > "u")
    return 0;
  const n = e === "y" ? "scrollTop" : "scrollLeft";
  if (t)
    return t[n];
  const { body: r, documentElement: o } = document;
  return r[n] + o[n];
}, Vl = ({ axis: e, parent: t, distance: n }) => {
  if (!t && typeof document > "u")
    return;
  const r = e === "y" ? "scrollTop" : "scrollLeft";
  if (t)
    t[r] = n;
  else {
    const { body: o, documentElement: s } = document;
    o[r] = n, s[r] = n;
  }
};
function Wl({
  duration: e = 1250,
  axis: t = "y",
  onScrollFinish: n,
  easing: r = Bl,
  offset: o = 0,
  cancelable: s = !0,
  isList: i = !1
} = {}) {
  const a = J(0), l = J(0), u = J(!1), d = J(null), f = J(null), m = Wo(), p = () => {
    a.current && cancelAnimationFrame(a.current);
  }, y = H(
    ({ alignment: v = "start" } = {}) => {
      u.current = !1, a.current && p();
      const w = zl({ parent: d.current, axis: t }) ?? 0, S = Hl({
        parent: d.current,
        target: f.current,
        axis: t,
        alignment: v,
        offset: o,
        isList: i
      }) - (d.current ? 0 : w);
      function b() {
        l.current === 0 && (l.current = performance.now());
        const _ = performance.now() - l.current, x = m || e === 0 ? 1 : _ / e, E = w + S * r(x);
        Vl({
          parent: d.current,
          axis: t,
          distance: E
        }), !u.current && x < 1 ? a.current = requestAnimationFrame(b) : (typeof n == "function" && n(), l.current = 0, a.current = 0, p());
      }
      b();
    },
    [t, e, r, i, o, n, m]
  ), g = () => {
    s && (u.current = !0);
  };
  return So("wheel", g, {
    passive: !0
  }), So("touchmove", g, {
    passive: !0
  }), W(() => p, []), {
    scrollableRef: d,
    targetRef: f,
    scrollIntoView: y,
    cancel: p
  };
}
function Ul(e) {
  const t = e.toLowerCase().split("+").map((s) => s.trim()), n = {
    alt: t.includes("alt"),
    ctrl: t.includes("ctrl"),
    meta: t.includes("meta"),
    mod: t.includes("mod"),
    shift: t.includes("shift")
  }, r = ["alt", "ctrl", "meta", "shift", "mod"], o = t.find((s) => !r.includes(s));
  return {
    ...n,
    key: o
  };
}
function Yl(e, t) {
  const { alt: n, ctrl: r, meta: o, mod: s, shift: i, key: a } = e, { altKey: l, ctrlKey: u, metaKey: d, shiftKey: f, key: m } = t;
  if (n !== l)
    return !1;
  if (s) {
    if (!u && !d)
      return !1;
  } else if (r !== u || o !== d)
    return !1;
  return i !== f ? !1 : !!(a && (m.toLowerCase() === a.toLowerCase() || t.code.replace("Key", "").toLowerCase() === a.toLowerCase()));
}
function Gl(e) {
  return (t) => Yl(Ul(e), t);
}
function Xl(e, t, n = !1) {
  return e.target instanceof HTMLElement ? (n || !e.target.isContentEditable) && !t.includes(e.target.tagName) : !0;
}
function Kl(e, t = ["INPUT", "TEXTAREA", "SELECT"], n = !1) {
  W(() => {
    const r = (o) => {
      e.forEach(([s, i, a = { preventDefault: !0 }]) => {
        Gl(s)(o) && Xl(o, t, n) && (a.preventDefault && o.preventDefault(), i(o));
      });
    };
    return document.documentElement.addEventListener("keydown", r), () => document.documentElement.removeEventListener("keydown", r);
  }, [e]);
}
function ql(e = !1, t) {
  const { onOpen: n, onClose: r } = {}, [o, s] = P(e), i = H(() => {
    s((u) => u || (n == null || n(), !0));
  }, [n]), a = H(() => {
    s((u) => u && (r == null || r(), !1));
  }, [r]), l = H(() => {
    o ? a() : i();
  }, [a, i, o]);
  return [o, { open: i, close: a, toggle: l }];
}
var lo = {};
function Jl() {
  return typeof process < "u" && lo && lo.NODE_ENV ? lo.NODE_ENV : "development";
}
function tg(e) {
  return e;
}
function na(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = na(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = na(e)) && (r && (r += " "), r += t);
  return r;
}
const Zl = {};
function Ql(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = Te(t[r], o) : t[r] = o;
    });
  }), t;
}
function Uo({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const s = (Array.isArray(t) ? t : [t]).map(
    (i) => typeof i == "function" ? i(e, n, r) : i || Zl
  );
  return Ql(s);
}
function _o({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((s, i) => typeof i == "function" ? { ...s, ...i(e, n, r) } : { ...s, ...i }, {});
}
const Yo = An(null);
function It() {
  const e = Nt(Yo);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function eu() {
  return It().cssVariablesResolver;
}
function tu() {
  return It().classNamesPrefix;
}
function Ar() {
  return It().getStyleNonce;
}
function nu() {
  return It().withStaticClasses;
}
function ru() {
  return It().headless;
}
function ou() {
  var e;
  return (e = It().stylesTransform) == null ? void 0 : e.sx;
}
function su() {
  var e;
  return (e = It().stylesTransform) == null ? void 0 : e.styles;
}
function iu(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function au(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const i = t.split("");
    t = [
      i[0],
      i[0],
      i[1],
      i[1],
      i[2],
      i[2]
    ].join("");
  }
  if (t.length === 8) {
    const i = parseInt(t.slice(6, 8), 16) / 255;
    return {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
      a: i
    };
  }
  const n = parseInt(t, 16), r = n >> 16 & 255, o = n >> 8 & 255, s = n & 255;
  return {
    r,
    g: o,
    b: s,
    a: 1
  };
}
function cu(e) {
  const [t, n, r, o] = e.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function lu(e) {
  const t = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, n = e.match(t);
  if (!n)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const r = parseInt(n[1], 10), o = parseInt(n[2], 10) / 100, s = parseInt(n[3], 10) / 100, i = n[5] ? parseFloat(n[5]) : void 0, a = (1 - Math.abs(2 * s - 1)) * o, l = r / 60, u = a * (1 - Math.abs(l % 2 - 1)), d = s - a / 2;
  let f, m, p;
  return l >= 0 && l < 1 ? (f = a, m = u, p = 0) : l >= 1 && l < 2 ? (f = u, m = a, p = 0) : l >= 2 && l < 3 ? (f = 0, m = a, p = u) : l >= 3 && l < 4 ? (f = 0, m = u, p = a) : l >= 4 && l < 5 ? (f = u, m = 0, p = a) : (f = a, m = 0, p = u), {
    r: Math.round((f + d) * 255),
    g: Math.round((m + d) * 255),
    b: Math.round((p + d) * 255),
    a: i || 1
  };
}
function Go(e) {
  return iu(e) ? au(e) : e.startsWith("rgb") ? cu(e) : e.startsWith("hsl") ? lu(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function rr(e, t) {
  if (e.startsWith("var("))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: s } = Go(e), i = 1 - t, a = (l) => Math.round(l * i);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${s})`;
}
function En(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function uo(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function uu(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function du(e) {
  if (e.startsWith("oklch("))
    return (uu(e) || 0) / 100;
  const { r: t, g: n, b: r } = Go(e), o = t / 255, s = n / 255, i = r / 255, a = uo(o), l = uo(s), u = uo(i);
  return 0.2126 * a + 0.7152 * l + 0.0722 * u;
}
function vn(e, t = 0.179) {
  return e.startsWith("var(") ? !1 : du(e) > t;
}
function Nn({
  color: e,
  theme: t,
  colorScheme: n
}) {
  if (typeof e != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`
    );
  if (e === "bright")
    return {
      color: e,
      value: n === "dark" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: vn(
        n === "dark" ? t.white : t.black,
        t.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  if (e === "dimmed")
    return {
      color: e,
      value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: vn(
        n === "dark" ? t.colors.dark[2] : t.colors.gray[6],
        t.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  if (e === "white" || e === "black")
    return {
      color: e,
      value: e === "white" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: vn(
        e === "white" ? t.white : t.black,
        t.luminanceThreshold
      ),
      variable: `--mantine-color-${e}`
    };
  const [r, o] = e.split("."), s = o ? Number(o) : void 0, i = r in t.colors;
  if (i) {
    const a = s !== void 0 ? t.colors[r][s] : t.colors[r][En(t, n || "light")];
    return {
      color: r,
      value: a,
      shade: s,
      isThemeColor: i,
      isLight: vn(a, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${s}` : `--mantine-color-${r}-filled`
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: i,
    isLight: vn(e, t.luminanceThreshold),
    shade: s,
    variable: void 0
  };
}
function hr(e, t) {
  const n = Nn({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function jo(e, t) {
  const n = {
    from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
  }, r = hr(n.from, t), o = hr(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function tt(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const s = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${s}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/") ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`) : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: o } = Go(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const Vt = tt, fu = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r,
  autoContrast: o
}) => {
  const s = Nn({ color: e, theme: t }), i = typeof o == "boolean" ? o : t.autoContrast;
  if (n === "filled") {
    const a = i && s.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return s.isThemeColor ? s.shade === void 0 ? {
      background: `var(--mantine-color-${e}-filled)`,
      hover: `var(--mantine-color-${e}-filled-hover)`,
      color: a,
      border: `${R(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${s.color}-${s.shade})`,
      hover: `var(--mantine-color-${s.color}-${s.shade === 9 ? 8 : s.shade + 1})`,
      color: a,
      border: `${R(1)} solid transparent`
    } : {
      background: e,
      hover: rr(e, 0.1),
      color: a,
      border: `${R(1)} solid transparent`
    };
  }
  if (n === "light") {
    if (s.isThemeColor) {
      if (s.shade === void 0)
        return {
          background: `var(--mantine-color-${e}-light)`,
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${R(1)} solid transparent`
        };
      const a = t.colors[s.color][s.shade];
      return {
        background: tt(a, 0.1),
        hover: tt(a, 0.12),
        color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
        border: `${R(1)} solid transparent`
      };
    }
    return {
      background: tt(e, 0.1),
      hover: tt(e, 0.12),
      color: e,
      border: `${R(1)} solid transparent`
    };
  }
  if (n === "outline")
    return s.isThemeColor ? s.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${e}-outline-hover)`,
      color: `var(--mantine-color-${e}-outline)`,
      border: `${R(1)} solid var(--mantine-color-${e}-outline)`
    } : {
      background: "transparent",
      hover: tt(t.colors[s.color][s.shade], 0.05),
      color: `var(--mantine-color-${s.color}-${s.shade})`,
      border: `${R(1)} solid var(--mantine-color-${s.color}-${s.shade})`
    } : {
      background: "transparent",
      hover: tt(e, 0.05),
      color: e,
      border: `${R(1)} solid ${e}`
    };
  if (n === "subtle") {
    if (s.isThemeColor) {
      if (s.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${R(1)} solid transparent`
        };
      const a = t.colors[s.color][s.shade];
      return {
        background: "transparent",
        hover: tt(a, 0.12),
        color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
        border: `${R(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: tt(e, 0.12),
      color: e,
      border: `${R(1)} solid transparent`
    };
  }
  return n === "transparent" ? s.isThemeColor ? s.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${e}-light-color)`,
    border: `${R(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
    border: `${R(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: e,
    border: `${R(1)} solid transparent`
  } : n === "white" ? s.isThemeColor ? s.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: rr(t.white, 0.01),
    color: `var(--mantine-color-${e}-filled)`,
    border: `${R(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: rr(t.white, 0.01),
    color: `var(--mantine-color-${s.color}-${s.shade})`,
    border: `${R(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: rr(t.white, 0.01),
    color: e,
    border: `${R(1)} solid transparent`
  } : n === "gradient" ? {
    background: jo(r, t),
    hover: jo(r, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${R(1)} solid var(--mantine-color-default-border)`
  } : {};
}, pu = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
}, Ns = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Xo = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: pu,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: fu,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: Ns,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Ns,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: R(34), lineHeight: "1.3" },
      h2: { fontSize: R(26), lineHeight: "1.35" },
      h3: { fontSize: R(22), lineHeight: "1.4" },
      h4: { fontSize: R(18), lineHeight: "1.45" },
      h5: { fontSize: R(16), lineHeight: "1.5" },
      h6: { fontSize: R(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: R(12),
    sm: R(14),
    md: R(16),
    lg: R(18),
    xl: R(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: R(2),
    sm: R(4),
    md: R(8),
    lg: R(16),
    xl: R(32)
  },
  spacing: {
    xs: R(10),
    sm: R(12),
    md: R(16),
    lg: R(20),
    xl: R(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), 0 ${R(1)} ${R(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${R(10)} ${R(
      15
    )} ${R(-5)}, rgba(0, 0, 0, 0.04) 0 ${R(7)} ${R(7)} ${R(-5)}`,
    md: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${R(20)} ${R(
      25
    )} ${R(-5)}, rgba(0, 0, 0, 0.04) 0 ${R(10)} ${R(10)} ${R(-5)}`,
    lg: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${R(28)} ${R(
      23
    )} ${R(-7)}, rgba(0, 0, 0, 0.04) 0 ${R(12)} ${R(12)} ${R(-7)}`,
    xl: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${R(36)} ${R(
      28
    )} ${R(-7)}, rgba(0, 0, 0, 0.04) 0 ${R(17)} ${R(17)} ${R(-7)}`
  },
  other: {},
  components: {}
};
function Is(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function mu({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const r = window.localStorage.getItem(e);
        return Is(r) ? r : n;
      } catch {
        return n;
      }
    },
    set: (n) => {
      try {
        window.localStorage.setItem(e, n);
      } catch (r) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          r
        );
      }
    },
    subscribe: (n) => {
      t = (r) => {
        r.storageArea === window.localStorage && r.key === e && Is(r.newValue) && n(r.newValue);
      }, window.addEventListener("storage", t);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", t);
    },
    clear: () => {
      window.localStorage.removeItem(e);
    }
  };
}
const hu = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Ls = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function fo(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Os(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(hu);
  if (typeof e.primaryShade == "object" && (!fo(e.primaryShade.dark) || !fo(e.primaryShade.light)))
    throw new Error(Ls);
  if (typeof e.primaryShade == "number" && !fo(e.primaryShade))
    throw new Error(Ls);
}
function gu(e, t) {
  var r;
  if (!t)
    return Os(e), e;
  const n = Ho(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), Os(n), n;
}
const Ko = An(null), yu = () => Nt(Ko) || Xo;
function jt() {
  const e = Nt(Ko);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function ra({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = yu(), o = Oi(
    () => gu(n ? r : Xo, e),
    [e, r, n]
  );
  return /* @__PURE__ */ c.jsx(Ko.Provider, { value: o, children: t });
}
ra.displayName = "@mantine/core/MantineThemeProvider";
function vu() {
  const e = jt(), t = Ar(), n = rt(e.breakpoints).reduce((r, o) => {
    const s = e.breakpoints[o].includes("px"), i = vl(e.breakpoints[o]), a = s ? `${i - 0.1}px` : ks(i - 0.1), l = s ? `${i}px` : ks(i);
    return `${r}@media (max-width: ${a}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${l}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ c.jsx(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: n }
    }
  );
}
function po(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("");
}
function bn(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function bu(e, t) {
  const n = po(e.variables), r = n ? bn(t, n) : "", o = po(e.dark), s = po(e.light), i = o ? bn(t === ":host" ? `${t}([data-mantine-color-scheme="dark"])` : `${t}[data-mantine-color-scheme="dark"]`, o) : "", a = s ? bn(t === ":host" ? `${t}([data-mantine-color-scheme="light"])` : `${t}[data-mantine-color-scheme="light"]`, s) : "";
  return `${r}${i}${a}`;
}
function xu({ color: e, theme: t, autoContrast: n }) {
  return t.autoContrast && Nn({ color: e || t.primaryColor, theme: t }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function Fs(e, t) {
  return xu({
    color: e.colors[e.primaryColor][En(e, t)],
    theme: e,
    autoContrast: null
  });
}
function or({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0
}) {
  if (!e.colors[t])
    return {};
  if (n === "light") {
    const a = En(e, "light"), l = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${a})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${a === 9 ? 8 : a + 1})`,
      [`--mantine-color-${r}-light`]: Vt(e.colors[t][a], 0.1),
      [`--mantine-color-${r}-light-hover`]: Vt(e.colors[t][a], 0.12),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${a})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${a})`,
      [`--mantine-color-${r}-outline-hover`]: Vt(e.colors[t][a], 0.05)
    };
    return o ? {
      [`--mantine-color-${r}-0`]: e.colors[t][0],
      [`--mantine-color-${r}-1`]: e.colors[t][1],
      [`--mantine-color-${r}-2`]: e.colors[t][2],
      [`--mantine-color-${r}-3`]: e.colors[t][3],
      [`--mantine-color-${r}-4`]: e.colors[t][4],
      [`--mantine-color-${r}-5`]: e.colors[t][5],
      [`--mantine-color-${r}-6`]: e.colors[t][6],
      [`--mantine-color-${r}-7`]: e.colors[t][7],
      [`--mantine-color-${r}-8`]: e.colors[t][8],
      [`--mantine-color-${r}-9`]: e.colors[t][9],
      ...l
    } : l;
  }
  const s = En(e, "dark"), i = {
    [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
    [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
    [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${s === 9 ? 8 : s + 1})`,
    [`--mantine-color-${r}-light`]: Vt(
      e.colors[t][Math.max(0, s - 2)],
      0.15
    ),
    [`--mantine-color-${r}-light-hover`]: Vt(
      e.colors[t][Math.max(0, s - 2)],
      0.2
    ),
    [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(s - 5, 0)})`,
    [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(s - 4, 0)})`,
    [`--mantine-color-${r}-outline-hover`]: Vt(
      e.colors[t][Math.max(s - 4, 0)],
      0.05
    )
  };
  return o ? {
    [`--mantine-color-${r}-0`]: e.colors[t][0],
    [`--mantine-color-${r}-1`]: e.colors[t][1],
    [`--mantine-color-${r}-2`]: e.colors[t][2],
    [`--mantine-color-${r}-3`]: e.colors[t][3],
    [`--mantine-color-${r}-4`]: e.colors[t][4],
    [`--mantine-color-${r}-5`]: e.colors[t][5],
    [`--mantine-color-${r}-6`]: e.colors[t][6],
    [`--mantine-color-${r}-7`]: e.colors[t][7],
    [`--mantine-color-${r}-8`]: e.colors[t][8],
    [`--mantine-color-${r}-9`]: e.colors[t][9],
    ...i
  } : i;
}
function wu(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function Wt(e, t, n) {
  rt(t).forEach(
    (r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] })
  );
}
const oa = (e) => {
  const t = En(e, "light"), n = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : R(e.defaultRadius), r = {
    variables: {
      "--mantine-scale": e.scale.toString(),
      "--mantine-cursor-type": e.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": e.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": e.white,
      "--mantine-color-black": e.black,
      "--mantine-line-height": e.lineHeights.md,
      "--mantine-font-family": e.fontFamily,
      "--mantine-font-family-monospace": e.fontFamilyMonospace,
      "--mantine-font-family-headings": e.headings.fontFamily,
      "--mantine-heading-font-weight": e.headings.fontWeight,
      "--mantine-heading-text-wrap": e.headings.textWrap,
      "--mantine-radius-default": n,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": Fs(e, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": e.black,
      "--mantine-color-body": e.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${t})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": Fs(e, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  Wt(r.variables, e.breakpoints, "breakpoint"), Wt(r.variables, e.spacing, "spacing"), Wt(r.variables, e.fontSizes, "font-size"), Wt(r.variables, e.lineHeights, "line-height"), Wt(r.variables, e.shadows, "shadow"), Wt(r.variables, e.radius, "radius"), e.colors[e.primaryColor].forEach((s, i) => {
    r.variables[`--mantine-primary-color-${i}`] = `var(--mantine-color-${e.primaryColor}-${i})`;
  }), rt(e.colors).forEach((s) => {
    const i = e.colors[s];
    if (wu(i)) {
      Object.assign(
        r.light,
        or({
          theme: e,
          name: i.name,
          color: i.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        r.dark,
        or({
          theme: e,
          name: i.name,
          color: i.dark,
          colorScheme: "dark",
          withColorValues: !0
        })
      );
      return;
    }
    i.forEach((a, l) => {
      r.variables[`--mantine-color-${s}-${l}`] = a;
    }), Object.assign(
      r.light,
      or({
        theme: e,
        color: s,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      r.dark,
      or({
        theme: e,
        color: s,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const o = e.headings.sizes;
  return rt(o).forEach((s) => {
    r.variables[`--mantine-${s}-font-size`] = o[s].fontSize, r.variables[`--mantine-${s}-line-height`] = o[s].lineHeight, r.variables[`--mantine-${s}-font-weight`] = o[s].fontWeight || e.headings.fontWeight;
  }), r;
};
function Cu({ theme: e, generator: t }) {
  const n = oa(e), r = t == null ? void 0 : t(e);
  return r ? Ho(n, r) : n;
}
const mo = oa(Xo);
function Su(e) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return rt(e.variables).forEach((n) => {
    mo.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
  }), rt(e.light).forEach((n) => {
    mo.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
  }), rt(e.dark).forEach((n) => {
    mo.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
  }), t;
}
function _u(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function sa({
  cssVariablesSelector: e,
  deduplicateCssVariables: t
}) {
  const n = jt(), r = Ar(), o = eu(), s = Cu({ theme: n, generator: o }), i = e === ":root" && t, a = i ? Su(s) : s, l = bu(a, e);
  return l ? /* @__PURE__ */ c.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: {
        __html: `${l}${i ? "" : _u(e)}`
      }
    }
  ) : null;
}
sa.displayName = "@mantine/CssVariables";
function ju() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
  };
}
function Ut(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function Eu({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = J(), [s, i] = P(() => e.get(t)), a = r || s, l = H(
    (d) => {
      r || (Ut(d, n), i(d), e.set(d));
    },
    [e.set, a, r]
  ), u = H(() => {
    i(t), Ut(t, n), e.clear();
  }, [e.clear, t]);
  return W(() => (e.subscribe(l), e.unsubscribe), [e.subscribe, e.unsubscribe]), Pn(() => {
    Ut(e.get(t), n);
  }, []), W(() => {
    var f;
    if (r)
      return Ut(r, n), () => {
      };
    r === void 0 && Ut(s, n), o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const d = (m) => {
      s === "auto" && Ut(m.matches ? "dark" : "light", n);
    };
    return (f = o.current) == null || f.addEventListener("change", d), () => {
      var m;
      return (m = o.current) == null ? void 0 : m.removeEventListener("change", d);
    };
  }, [s, r]), { colorScheme: a, setColorScheme: l, clearColorScheme: u };
}
function Tu({
  respectReducedMotion: e,
  getRootElement: t
}) {
  Pn(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
ju();
function ia({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: s = !0,
  withCssVariables: i = !0,
  cssVariablesSelector: a = ":root",
  classNamesPrefix: l = "mantine",
  colorSchemeManager: u = mu(),
  defaultColorScheme: d = "light",
  getRootElement: f = () => document.documentElement,
  cssVariablesResolver: m,
  forceColorScheme: p,
  stylesTransform: y
}) {
  const { colorScheme: g, setColorScheme: v, clearColorScheme: w } = Eu({
    defaultColorScheme: d,
    forceColorScheme: p,
    manager: u,
    getRootElement: f
  });
  return Tu({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: f
  }), /* @__PURE__ */ c.jsx(
    Yo.Provider,
    {
      value: {
        colorScheme: g,
        setColorScheme: v,
        clearColorScheme: w,
        getRootElement: f,
        classNamesPrefix: l,
        getStyleNonce: n,
        cssVariablesResolver: m,
        cssVariablesSelector: a,
        withStaticClasses: r,
        stylesTransform: y
      },
      children: /* @__PURE__ */ c.jsxs(ra, { theme: e, children: [
        i && /* @__PURE__ */ c.jsx(
          sa,
          {
            cssVariablesSelector: a,
            deduplicateCssVariables: s
          }
        ),
        o && /* @__PURE__ */ c.jsx(vu, {}),
        t
      ] })
    }
  );
}
ia.displayName = "@mantine/core/MantineProvider";
const Ru = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Au({ theme: e, options: t, unstyled: n }) {
  return Te(
    (t == null ? void 0 : t.focusable) && !n && (e.focusClassName || Ru[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function ku({
  selector: e,
  stylesCtx: t,
  options: n,
  props: r,
  theme: o
}) {
  return Uo({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t
  })[e];
}
function Ms({
  selector: e,
  stylesCtx: t,
  theme: n,
  classNames: r,
  props: o
}) {
  return Uo({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function $u({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function Pu({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function Nu({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r
}) {
  return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`);
}
function Iu({
  themeName: e,
  theme: t,
  selector: n,
  props: r,
  stylesCtx: o
}) {
  return e.map(
    (s) => {
      var i, a;
      return (a = Uo({
        theme: t,
        classNames: (i = t.components[s]) == null ? void 0 : i.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : a[n];
    }
  );
}
function Lu({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function Ou({
  theme: e,
  options: t,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: s,
  classes: i,
  unstyled: a,
  className: l,
  rootSelector: u,
  props: d,
  stylesCtx: f,
  withStaticClasses: m,
  headless: p,
  transformedStyles: y
}) {
  return Te(
    Au({ theme: e, options: t, unstyled: a || p }),
    Iu({ theme: e, themeName: n, selector: r, props: d, stylesCtx: f }),
    Lu({ options: t, classes: i, selector: r, unstyled: a }),
    Ms({ selector: r, stylesCtx: f, theme: e, classNames: s, props: d }),
    Ms({ selector: r, stylesCtx: f, theme: e, classNames: y, props: d }),
    ku({ selector: r, stylesCtx: f, options: t, props: d, theme: e }),
    $u({ rootSelector: u, selector: r, className: l }),
    Pu({ selector: r, classes: i, unstyled: a || p }),
    m && !p && Nu({
      themeName: n,
      classNamesPrefix: o,
      selector: r,
      withStaticClass: t == null ? void 0 : t.withStaticClass
    }),
    t == null ? void 0 : t.className
  );
}
function Fu({
  theme: e,
  themeName: t,
  props: n,
  stylesCtx: r,
  selector: o
}) {
  return t.map(
    (s) => {
      var i;
      return _o({
        theme: e,
        styles: (i = e.components[s]) == null ? void 0 : i.styles,
        props: n,
        stylesCtx: r
      })[o];
    }
  ).reduce((s, i) => ({ ...s, ...i }), {});
}
function Eo({ style: e, theme: t }) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Eo({ style: r, theme: t }) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Mu(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...jr(n[r]) };
  }), t), {});
}
function Du({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: s,
  themeName: i,
  headless: a
}) {
  var l;
  return (l = Mu([
    a ? {} : t == null ? void 0 : t(n, r, o),
    ...i.map((u) => {
      var d, f, m;
      return (m = (f = (d = n.components) == null ? void 0 : d[u]) == null ? void 0 : f.vars) == null ? void 0 : m.call(f, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o)
  ])) == null ? void 0 : l[s];
}
function Bu({
  theme: e,
  themeName: t,
  selector: n,
  options: r,
  props: o,
  stylesCtx: s,
  rootSelector: i,
  styles: a,
  style: l,
  vars: u,
  varsResolver: d,
  headless: f,
  withStylesTransform: m
}) {
  return {
    ...!m && Fu({ theme: e, themeName: t, props: o, stylesCtx: s, selector: n }),
    ...!m && _o({ theme: e, styles: a, props: o, stylesCtx: s })[n],
    ...!m && _o({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: s })[n],
    ...Du({ theme: e, props: o, stylesCtx: s, vars: u, varsResolver: d, selector: n, themeName: t, headless: f }),
    ...i === n ? Eo({ style: l, theme: e }) : null,
    ...Eo({ style: r == null ? void 0 : r.style, theme: e })
  };
}
function Hu({ props: e, stylesCtx: t, themeName: n }) {
  var i;
  const r = jt(), o = (i = su()) == null ? void 0 : i();
  return {
    getTransformedStyles: (a) => o ? [
      ...a.map(
        (u) => o(u, { props: e, theme: r, ctx: t })
      ),
      ...n.map(
        (u) => {
          var d;
          return o((d = r.components[u]) == null ? void 0 : d.styles, { props: e, theme: r, ctx: t });
        }
      )
    ].filter(Boolean) : [],
    withStylesTransform: !!o
  };
}
function ue({
  name: e,
  classes: t,
  props: n,
  stylesCtx: r,
  className: o,
  style: s,
  rootSelector: i = "root",
  unstyled: a,
  classNames: l,
  styles: u,
  vars: d,
  varsResolver: f
}) {
  const m = jt(), p = tu(), y = nu(), g = ru(), v = (Array.isArray(e) ? e : [e]).filter((b) => b), { withStylesTransform: w, getTransformedStyles: S } = Hu({
    props: n,
    stylesCtx: r,
    themeName: v
  });
  return (b, C) => ({
    className: Ou({
      theme: m,
      options: C,
      themeName: v,
      selector: b,
      classNamesPrefix: p,
      classNames: l,
      classes: t,
      unstyled: a,
      className: o,
      rootSelector: i,
      props: n,
      stylesCtx: r,
      withStaticClasses: y,
      headless: g,
      transformedStyles: S([C == null ? void 0 : C.styles, u])
    }),
    style: Bu({
      theme: m,
      themeName: v,
      selector: b,
      options: C,
      props: n,
      stylesCtx: r,
      rootSelector: i,
      styles: u,
      style: s,
      vars: d,
      varsResolver: f,
      headless: g,
      withStylesTransform: w
    })
  });
}
function Ds(e) {
  const t = document.createElement("style");
  return t.setAttribute("data-mantine-styles", "inline"), t.innerHTML = "*, *::before, *::after {transition: none !important;}", t.setAttribute("data-mantine-disable-transition", "true"), e && t.setAttribute("nonce", e), document.head.appendChild(t), () => document.querySelectorAll("[data-mantine-disable-transition]").forEach((r) => r.remove());
}
function zu({ keepTransitions: e } = {}) {
  const t = J(), n = J(), r = Nt(Yo), o = Ar(), s = J(o == null ? void 0 : o());
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  const i = (f) => {
    r.setColorScheme(f), t.current = e ? () => {
    } : Ds(s.current), window.clearTimeout(n.current), n.current = window.setTimeout(() => {
      var m;
      (m = t.current) == null || m.call(t);
    }, 10);
  }, a = () => {
    r.clearColorScheme(), t.current = e ? () => {
    } : Ds(s.current), window.clearTimeout(n.current), n.current = window.setTimeout(() => {
      var f;
      (f = t.current) == null || f.call(t);
    }, 10);
  }, l = Tl("light", { getInitialValueInEffect: !1 }), u = r.colorScheme === "auto" ? l : r.colorScheme, d = H(
    () => i(u === "light" ? "dark" : "light"),
    [i, u]
  );
  return W(
    () => () => {
      var f;
      (f = t.current) == null || f.call(t), window.clearTimeout(n.current);
    },
    []
  ), {
    colorScheme: r.colorScheme,
    setColorScheme: i,
    clearColorScheme: a,
    toggleColorScheme: d
  };
}
function K(e, t, n) {
  var i;
  const r = jt(), o = (i = r.components[e]) == null ? void 0 : i.defaultProps, s = typeof o == "function" ? o(r) : o;
  return { ...t, ...s, ...jr(n) };
}
function ho(e) {
  return rt(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${gl(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function Vu({ selector: e, styles: t, media: n, container: r }) {
  const o = t ? ho(t) : "", s = Array.isArray(n) ? n.map((a) => `@media${a.query}{${e}{${ho(a.styles)}}}`) : [], i = Array.isArray(r) ? r.map(
    (a) => `@container ${a.query}{${e}{${ho(a.styles)}}}`
  ) : [];
  return `${o ? `${e}{${o}}` : ""}${s.join("")}${i.join("")}`.trim();
}
function aa(e) {
  const t = Ar();
  return /* @__PURE__ */ c.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: Vu(e) }
    }
  );
}
function qo(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: s,
    ml: i,
    mr: a,
    me: l,
    ms: u,
    p: d,
    px: f,
    py: m,
    pt: p,
    pb: y,
    pl: g,
    pr: v,
    pe: w,
    ps: S,
    bd: b,
    bg: C,
    c: _,
    opacity: x,
    ff: E,
    fz: j,
    fw: $,
    lts: I,
    ta: O,
    lh: B,
    fs: G,
    tt: F,
    td: q,
    w: Y,
    miw: V,
    maw: ee,
    h: D,
    mih: A,
    mah: U,
    bgsz: X,
    bgp: ne,
    bgr: ie,
    bga: pe,
    pos: ae,
    top: me,
    left: Le,
    bottom: Oe,
    right: We,
    inset: Je,
    display: ke,
    flex: lt,
    hiddenFrom: de,
    visibleFrom: ut,
    lightHidden: Ze,
    darkHidden: Re,
    sx: Qe,
    ...$e
  } = e;
  return { styleProps: jr({
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: s,
    ml: i,
    mr: a,
    me: l,
    ms: u,
    p: d,
    px: f,
    py: m,
    pt: p,
    pb: y,
    pl: g,
    pr: v,
    pe: w,
    ps: S,
    bd: b,
    bg: C,
    c: _,
    opacity: x,
    ff: E,
    fz: j,
    fw: $,
    lts: I,
    ta: O,
    lh: B,
    fs: G,
    tt: F,
    td: q,
    w: Y,
    miw: V,
    maw: ee,
    h: D,
    mih: A,
    mah: U,
    bgsz: X,
    bgp: ne,
    bgr: ie,
    bga: pe,
    pos: ae,
    top: me,
    left: Le,
    bottom: Oe,
    right: We,
    inset: Je,
    display: ke,
    flex: lt,
    hiddenFrom: de,
    visibleFrom: ut,
    lightHidden: Ze,
    darkHidden: Re,
    sx: Qe
  }), rest: $e };
}
const Wu = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};
function Jo(e, t) {
  const n = Nn({ color: e, theme: t });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.variable ? `var(${n.variable})` : n.color;
}
function Uu(e, t) {
  const n = Nn({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : Jo(e, t);
}
function Yu(e, t) {
  if (typeof e == "number")
    return R(e);
  if (typeof e == "string") {
    const [n, r, ...o] = e.split(" ").filter((i) => i.trim() !== "");
    let s = `${R(n)}`;
    return r && (s += ` ${r}`), o.length > 0 && (s += ` ${Jo(o.join(" "), t)}`), s.trim();
  }
  return e;
}
const Bs = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function Gu(e) {
  return typeof e == "string" && e in Bs ? Bs[e] : e;
}
const Xu = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Ku(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "string" && Xu.includes(e) ? `var(--mantine-${e}-font-size)` : typeof e == "number" || typeof e == "string" ? R(e) : e;
}
function qu(e) {
  return e;
}
const Ju = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Zu(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : typeof e == "string" && Ju.includes(e) ? `var(--mantine-${e}-line-height)` : e;
}
function Qu(e) {
  return typeof e == "number" ? R(e) : e;
}
function ed(e, t) {
  if (typeof e == "number")
    return R(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing))
      return R(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const go = {
  color: Jo,
  textColor: Uu,
  fontSize: Ku,
  spacing: ed,
  identity: qu,
  size: Qu,
  lineHeight: Zu,
  fontFamily: Gu,
  border: Yu
};
function Hs(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function td({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, s) => Number(Hs(o)) - Number(Hs(s))).map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function nd(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function rd(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function od(e) {
  return typeof e == "object" && e !== null ? rt(e).filter((t) => t !== "base") : [];
}
function sd(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function ca({
  styleProps: e,
  data: t,
  theme: n
}) {
  return td(
    rt(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx")
          return r;
        const s = t[o], i = Array.isArray(s.property) ? s.property : [s.property], a = rd(e[o]);
        if (!nd(e[o]))
          return i.forEach((u) => {
            r.inlineStyles[u] = go[s.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const l = od(e[o]);
        return i.forEach((u) => {
          a && (r.styles[u] = go[s.type](a, n)), l.forEach((d) => {
            const f = `(min-width: ${n.breakpoints[d]})`;
            r.media[f] = {
              ...r.media[f],
              [u]: go[s.type](
                sd(e[o], d),
                n
              )
            };
          });
        }), r;
      },
      {
        hasResponsiveStyles: !1,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
function la() {
  return `__m__-${bc().replace(/:/g, "")}`;
}
function ua(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function id(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[ua(n)] = e[n]), t;
  }, {});
}
function da(e) {
  return e ? typeof e == "string" ? { [ua(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...da(n) }),
    {}
  ) : id(e) : null;
}
function To(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...To(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function ad({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = To(t, e), s = To(n, e);
  return { ...o, ...s, ...r };
}
const fa = se(
  ({
    component: e,
    style: t,
    __vars: n,
    className: r,
    variant: o,
    mod: s,
    size: i,
    hiddenFrom: a,
    visibleFrom: l,
    lightHidden: u,
    darkHidden: d,
    renderRoot: f,
    __size: m,
    ...p
  }, y) => {
    var j;
    const g = jt(), v = e || "div", { styleProps: w, rest: S } = qo(p), b = ou(), C = (j = b == null ? void 0 : b()) == null ? void 0 : j(w.sx), _ = la(), x = ca({
      styleProps: w,
      theme: g,
      data: Wu
    }), E = {
      ref: y,
      style: ad({
        theme: g,
        style: t,
        vars: n,
        styleProps: x.inlineStyles
      }),
      className: Te(r, C, {
        [_]: x.hasResponsiveStyles,
        "mantine-light-hidden": u,
        "mantine-dark-hidden": d,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${l}`]: l
      }),
      "data-variant": o,
      "data-size": Xi(i) ? void 0 : i || void 0,
      size: m,
      ...da(s),
      ...S
    };
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      x.hasResponsiveStyles && /* @__PURE__ */ c.jsx(
        aa,
        {
          selector: `.${_}`,
          styles: x.styles,
          media: x.media
        }
      ),
      typeof f == "function" ? f(E) : /* @__PURE__ */ c.jsx(v, { ...E })
    ] });
  }
);
fa.displayName = "@mantine/core/Box";
const k = fa;
function pa(e) {
  return e;
}
function le(e) {
  const t = se(e);
  return t.extend = pa, t.withProps = (n) => {
    const r = se((o, s) => /* @__PURE__ */ c.jsx(t, { ...n, ...o, ref: s }));
    return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r;
  }, t;
}
function He(e) {
  const t = se(e);
  return t.withProps = (n) => {
    const r = se((o, s) => /* @__PURE__ */ c.jsx(t, { ...n, ...o, ref: s }));
    return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r;
  }, t.extend = pa, t;
}
const cd = An({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Zo() {
  return Nt(cd);
}
const [ld, ze] = kn(
  "ScrollArea.Root component was not found in tree"
);
function qt(e, t) {
  const n = At(t);
  Pn(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
const ud = se((e, t) => {
  const { style: n, ...r } = e, o = ze(), [s, i] = P(0), [a, l] = P(0), u = !!(s && a);
  return qt(o.scrollbarX, () => {
    var f;
    const d = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(d), l(d);
  }), qt(o.scrollbarY, () => {
    var f;
    const d = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(d), i(d);
  }), u ? /* @__PURE__ */ c.jsx("div", { ...r, ref: t, style: { ...n, width: s, height: a } }) : null;
}), dd = se((e, t) => {
  const n = ze(), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ c.jsx(ud, { ...e, ref: t }) : null;
}), fd = {
  scrollHideDelay: 1e3,
  type: "hover"
}, ma = se((e, t) => {
  const n = K("ScrollAreaRoot", fd, e), { type: r, scrollHideDelay: o, scrollbars: s, ...i } = n, [a, l] = P(null), [u, d] = P(null), [f, m] = P(null), [p, y] = P(null), [g, v] = P(null), [w, S] = P(0), [b, C] = P(0), [_, x] = P(!1), [E, j] = P(!1), $ = at(t, (I) => l(I));
  return /* @__PURE__ */ c.jsx(
    ld,
    {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: m,
        scrollbarX: p,
        onScrollbarXChange: y,
        scrollbarXEnabled: _,
        onScrollbarXEnabledChange: x,
        scrollbarY: g,
        onScrollbarYChange: v,
        scrollbarYEnabled: E,
        onScrollbarYEnabledChange: j,
        onCornerWidthChange: S,
        onCornerHeightChange: C
      },
      children: /* @__PURE__ */ c.jsx(
        k,
        {
          ...i,
          ref: $,
          __vars: {
            "--sa-corner-width": s !== "xy" ? "0px" : `${w}px`,
            "--sa-corner-height": s !== "xy" ? "0px" : `${b}px`
          }
        }
      )
    }
  );
});
ma.displayName = "@mantine/core/ScrollAreaRoot";
function ha(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function kr(e) {
  const t = ha(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function ga(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function pd(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function zs(e, t, n = "ltr") {
  const r = kr(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, i = t.content - t.viewport, a = s - r, l = n === "ltr" ? [0, i] : [i * -1, 0], u = pd(e, l);
  return ga([0, i], [0, a])(u);
}
function md(e, t, n, r = "ltr") {
  const o = kr(n), s = o / 2, i = t || s, a = o - i, l = n.scrollbar.paddingStart + i, u = n.scrollbar.size - n.scrollbar.paddingEnd - a, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return ga([l, u], f)(e);
}
function ya(e, t) {
  return e > 0 && e < t;
}
function gr(e) {
  return e ? parseInt(e, 10) : 0;
}
function kt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [hd, va] = kn(
  "ScrollAreaScrollbar was not found in tree"
), ba = se((e, t) => {
  const {
    sizes: n,
    hasThumb: r,
    onThumbChange: o,
    onThumbPointerUp: s,
    onThumbPointerDown: i,
    onThumbPositionChange: a,
    onDragScroll: l,
    onWheelScroll: u,
    onResize: d,
    ...f
  } = e, m = ze(), [p, y] = P(null), g = at(t, (j) => y(j)), v = J(null), w = J(""), { viewport: S } = m, b = n.content - n.viewport, C = At(u), _ = At(a), x = Tr(d, 10), E = (j) => {
    if (v.current) {
      const $ = j.clientX - v.current.left, I = j.clientY - v.current.top;
      l({ x: $, y: I });
    }
  };
  return W(() => {
    const j = ($) => {
      const I = $.target;
      (p == null ? void 0 : p.contains(I)) && C($, b);
    };
    return document.addEventListener("wheel", j, { passive: !1 }), () => document.removeEventListener("wheel", j, { passive: !1 });
  }, [S, p, b, C]), W(_, [n, _]), qt(p, x), qt(m.content, x), /* @__PURE__ */ c.jsx(
    hd,
    {
      value: {
        scrollbar: p,
        hasThumb: r,
        onThumbChange: At(o),
        onThumbPointerUp: At(s),
        onThumbPositionChange: _,
        onThumbPointerDown: At(i)
      },
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ...f,
          ref: g,
          "data-mantine-scrollbar": !0,
          style: { position: "absolute", ...f.style },
          onPointerDown: kt(e.onPointerDown, (j) => {
            j.preventDefault(), j.button === 0 && (j.target.setPointerCapture(j.pointerId), v.current = p.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", document.body.style.pointerEvents = "none", E(j));
          }),
          onPointerMove: kt(e.onPointerMove, E),
          onPointerUp: kt(e.onPointerUp, (j) => {
            j.preventDefault();
            const $ = j.target;
            $.hasPointerCapture(j.pointerId) && $.releasePointerCapture(j.pointerId), document.body.style.webkitUserSelect = w.current, document.body.style.pointerEvents = "auto", v.current = null;
          })
        }
      )
    }
  );
}), gd = se(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e, i = ze(), [a, l] = P(), u = J(null), d = at(t, u, i.onScrollbarXChange);
    return W(() => {
      u.current && l(getComputedStyle(u.current));
    }, [u]), /* @__PURE__ */ c.jsx(
      ba,
      {
        "data-orientation": "horizontal",
        ...s,
        ref: d,
        sizes: n,
        style: {
          ...o,
          "--sa-thumb-width": `${kr(n)}px`
        },
        onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
        onDragScroll: (f) => e.onDragScroll(f.x),
        onWheelScroll: (f, m) => {
          if (i.viewport) {
            const p = i.viewport.scrollLeft + f.deltaX;
            e.onWheelScroll(p), ya(p, m) && f.preventDefault();
          }
        },
        onResize: () => {
          u.current && i.viewport && a && r({
            content: i.viewport.scrollWidth,
            viewport: i.viewport.offsetWidth,
            scrollbar: {
              size: u.current.clientWidth,
              paddingStart: gr(a.paddingLeft),
              paddingEnd: gr(a.paddingRight)
            }
          });
        }
      }
    );
  }
), yd = se(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e, i = ze(), [a, l] = P(), u = J(null), d = at(t, u, i.onScrollbarYChange);
    return W(() => {
      u.current && l(window.getComputedStyle(u.current));
    }, []), /* @__PURE__ */ c.jsx(
      ba,
      {
        ...s,
        "data-orientation": "vertical",
        ref: d,
        sizes: n,
        style: {
          "--sa-thumb-height": `${kr(n)}px`,
          ...o
        },
        onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
        onDragScroll: (f) => e.onDragScroll(f.y),
        onWheelScroll: (f, m) => {
          if (i.viewport) {
            const p = i.viewport.scrollTop + f.deltaY;
            e.onWheelScroll(p), ya(p, m) && f.preventDefault();
          }
        },
        onResize: () => {
          u.current && i.viewport && a && r({
            content: i.viewport.scrollHeight,
            viewport: i.viewport.offsetHeight,
            scrollbar: {
              size: u.current.clientHeight,
              paddingStart: gr(a.paddingTop),
              paddingEnd: gr(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), Qo = se((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = Zo(), s = ze(), i = J(null), a = J(0), [l, u] = P({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = ha(l.viewport, l.content), f = {
    ...r,
    sizes: l,
    onSizesChange: u,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (p) => {
      i.current = p;
    },
    onThumbPointerUp: () => {
      a.current = 0;
    },
    onThumbPointerDown: (p) => {
      a.current = p;
    }
  }, m = (p, y) => md(p, a.current, l, y);
  return n === "horizontal" ? /* @__PURE__ */ c.jsx(
    gd,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && i.current) {
          const p = s.viewport.scrollLeft, y = zs(p, l, o);
          i.current.style.transform = `translate3d(${y}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        s.viewport && (s.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        s.viewport && (s.viewport.scrollLeft = m(p, o));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ c.jsx(
    yd,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && i.current) {
          const p = s.viewport.scrollTop, y = zs(p, l);
          l.scrollbar.size === 0 ? i.current.style.opacity = "0" : i.current.style.opacity = "1", i.current.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        s.viewport && (s.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        s.viewport && (s.viewport.scrollTop = m(p));
      }
    }
  ) : null;
}), xa = se(
  (e, t) => {
    const n = ze(), { forceMount: r, ...o } = e, [s, i] = P(!1), a = e.orientation === "horizontal", l = Tr(() => {
      if (n.viewport) {
        const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
        i(a ? u : d);
      }
    }, 10);
    return qt(n.viewport, l), qt(n.content, l), r || s ? /* @__PURE__ */ c.jsx(
      Qo,
      {
        "data-state": s ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), vd = se(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ze(), [s, i] = P(!1);
    return W(() => {
      const { scrollArea: a } = o;
      let l = 0;
      if (a) {
        const u = () => {
          window.clearTimeout(l), i(!0);
        }, d = () => {
          l = window.setTimeout(() => i(!1), o.scrollHideDelay);
        };
        return a.addEventListener("pointerenter", u), a.addEventListener("pointerleave", d), () => {
          window.clearTimeout(l), a.removeEventListener("pointerenter", u), a.removeEventListener("pointerleave", d);
        };
      }
    }, [o.scrollArea, o.scrollHideDelay]), n || s ? /* @__PURE__ */ c.jsx(
      xa,
      {
        "data-state": s ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), bd = se(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ze(), s = e.orientation === "horizontal", [i, a] = P("hidden"), l = Tr(() => a("idle"), 100);
    return W(() => {
      if (i === "idle") {
        const u = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(u);
      }
    }, [i, o.scrollHideDelay]), W(() => {
      const { viewport: u } = o, d = s ? "scrollLeft" : "scrollTop";
      if (u) {
        let f = u[d];
        const m = () => {
          const p = u[d];
          f !== p && (a("scrolling"), l()), f = p;
        };
        return u.addEventListener("scroll", m), () => u.removeEventListener("scroll", m);
      }
    }, [o.viewport, s, l]), n || i !== "hidden" ? /* @__PURE__ */ c.jsx(
      Qo,
      {
        "data-state": i === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: kt(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: kt(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), Vs = se(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ze(), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o, a = e.orientation === "horizontal";
    return W(() => (a ? s(!0) : i(!0), () => {
      a ? s(!1) : i(!1);
    }), [a, s, i]), o.type === "hover" ? /* @__PURE__ */ c.jsx(vd, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ c.jsx(bd, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ c.jsx(xa, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ c.jsx(Qo, { ...r, ref: t }) : null;
  }
);
function xd(e, t = () => {
}) {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== s.left, a = n.top !== s.top;
    (i || a) && t(), n = s, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const wd = se((e, t) => {
  const { style: n, ...r } = e, o = ze(), s = va(), { onThumbPositionChange: i } = s, a = at(t, (d) => s.onThumbChange(d)), l = J(), u = Tr(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return W(() => {
    const { viewport: d } = o;
    if (d) {
      const f = () => {
        if (u(), !l.current) {
          const m = xd(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", f), () => d.removeEventListener("scroll", f);
    }
  }, [o.viewport, u, i]), /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-state": s.hasThumb ? "visible" : "hidden",
      ...r,
      ref: a,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...n
      },
      onPointerDownCapture: kt(e.onPointerDownCapture, (d) => {
        const m = d.target.getBoundingClientRect(), p = d.clientX - m.left, y = d.clientY - m.top;
        s.onThumbPointerDown({ x: p, y });
      }),
      onPointerUp: kt(e.onPointerUp, s.onThumbPointerUp)
    }
  );
}), Ws = se(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = va();
    return n || o.hasThumb ? /* @__PURE__ */ c.jsx(wd, { ref: t, ...r }) : null;
  }
), wa = se(
  ({ children: e, style: t, ...n }, r) => {
    const o = ze(), s = at(r, o.onViewportChange);
    return /* @__PURE__ */ c.jsx(
      k,
      {
        ...n,
        ref: s,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...t
        },
        children: /* @__PURE__ */ c.jsx("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange, children: e })
      }
    );
  }
);
wa.displayName = "@mantine/core/ScrollAreaViewport";
var es = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const Ca = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Cd = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": R(t)
  }
}), In = le((e, t) => {
  const n = K("ScrollArea", Ca, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    scrollbarSize: l,
    vars: u,
    type: d,
    scrollHideDelay: f,
    viewportProps: m,
    viewportRef: p,
    onScrollPositionChange: y,
    children: g,
    offsetScrollbars: v,
    scrollbars: w,
    onBottomReached: S,
    onTopReached: b,
    ...C
  } = n, [_, x] = P(!1), E = ue({
    name: "ScrollArea",
    props: n,
    classes: es,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: u,
    varsResolver: Cd
  });
  return /* @__PURE__ */ c.jsxs(
    ma,
    {
      type: d === "never" ? "always" : d,
      scrollHideDelay: f,
      ref: t,
      scrollbars: w,
      ...E("root"),
      ...C,
      children: [
        /* @__PURE__ */ c.jsx(
          wa,
          {
            ...m,
            ...E("viewport", { style: m == null ? void 0 : m.style }),
            ref: p,
            "data-offset-scrollbars": v === !0 ? "xy" : v || void 0,
            "data-scrollbars": w || void 0,
            onScroll: (j) => {
              var B;
              (B = m == null ? void 0 : m.onScroll) == null || B.call(m, j), y == null || y({ x: j.currentTarget.scrollLeft, y: j.currentTarget.scrollTop });
              const { scrollTop: $, scrollHeight: I, clientHeight: O } = j.currentTarget;
              $ - (I - O) === 0 && (S == null || S()), $ === 0 && (b == null || b());
            },
            children: g
          }
        ),
        (w === "xy" || w === "x") && /* @__PURE__ */ c.jsx(
          Vs,
          {
            ...E("scrollbar"),
            orientation: "horizontal",
            "data-hidden": d === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => x(!0),
            onMouseLeave: () => x(!1),
            children: /* @__PURE__ */ c.jsx(Ws, { ...E("thumb") })
          }
        ),
        (w === "xy" || w === "y") && /* @__PURE__ */ c.jsx(
          Vs,
          {
            ...E("scrollbar"),
            orientation: "vertical",
            "data-hidden": d === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => x(!0),
            onMouseLeave: () => x(!1),
            children: /* @__PURE__ */ c.jsx(Ws, { ...E("thumb") })
          }
        ),
        /* @__PURE__ */ c.jsx(
          dd,
          {
            ...E("corner"),
            "data-hovered": _ || void 0,
            "data-hidden": d === "never" || void 0
          }
        )
      ]
    }
  );
});
In.displayName = "@mantine/core/ScrollArea";
const ts = le((e, t) => {
  const {
    children: n,
    classNames: r,
    styles: o,
    scrollbarSize: s,
    scrollHideDelay: i,
    type: a,
    dir: l,
    offsetScrollbars: u,
    viewportRef: d,
    onScrollPositionChange: f,
    unstyled: m,
    variant: p,
    viewportProps: y,
    scrollbars: g,
    style: v,
    vars: w,
    ...S
  } = K("ScrollAreaAutosize", Ca, e);
  return /* @__PURE__ */ c.jsx(k, { ...S, ref: t, style: [{ display: "flex", overflow: "auto" }, v], children: /* @__PURE__ */ c.jsx(k, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ c.jsx(
    In,
    {
      classNames: r,
      styles: o,
      scrollHideDelay: i,
      scrollbarSize: s,
      type: a,
      dir: l,
      offsetScrollbars: u,
      viewportRef: d,
      onScrollPositionChange: f,
      unstyled: m,
      variant: p,
      viewportProps: y,
      vars: w,
      scrollbars: g,
      children: n
    }
  ) }) });
});
In.classes = es;
ts.displayName = "@mantine/core/ScrollAreaAutosize";
ts.classes = es;
In.Autosize = ts;
var Sa = { root: "m_87cf2631" };
const Sd = {
  __staticSelector: "UnstyledButton"
}, Ln = He(
  (e, t) => {
    const n = K("UnstyledButton", Sd, e), {
      className: r,
      component: o = "button",
      __staticSelector: s,
      unstyled: i,
      classNames: a,
      styles: l,
      style: u,
      ...d
    } = n, f = ue({
      name: s,
      props: n,
      classes: Sa,
      className: r,
      style: u,
      classNames: a,
      styles: l,
      unstyled: i
    });
    return /* @__PURE__ */ c.jsx(
      k,
      {
        ...f("root", { focusable: !0 }),
        component: o,
        ref: t,
        type: o === "button" ? "button" : void 0,
        ...d
      }
    );
  }
);
Ln.classes = Sa;
Ln.displayName = "@mantine/core/UnstyledButton";
var _a = { root: "m_515a97f8" };
const _d = {}, ns = le((e, t) => {
  const n = K("VisuallyHidden", _d, e), { classNames: r, className: o, style: s, styles: i, unstyled: a, vars: l, ...u } = n, d = ue({
    name: "VisuallyHidden",
    classes: _a,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a
  });
  return /* @__PURE__ */ c.jsx(k, { component: "span", ref: t, ...d("root"), ...u });
});
ns.classes = _a;
ns.displayName = "@mantine/core/VisuallyHidden";
var ja = { root: "m_1b7284a3" };
const jd = {}, Ed = (e, { radius: t, shadow: n }) => ({
  root: {
    "--paper-radius": t === void 0 ? void 0 : it(t),
    "--paper-shadow": zo(n)
  }
}), rs = He((e, t) => {
  const n = K("Paper", jd, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    withBorder: l,
    vars: u,
    radius: d,
    shadow: f,
    variant: m,
    mod: p,
    ...y
  } = n, g = ue({
    name: "Paper",
    props: n,
    classes: ja,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: u,
    varsResolver: Ed
  });
  return /* @__PURE__ */ c.jsx(
    k,
    {
      ref: t,
      mod: [{ "data-with-border": l }, p],
      ...g("root"),
      variant: m,
      ...y
    }
  );
});
rs.classes = ja;
rs.displayName = "@mantine/core/Paper";
function nn(e) {
  return Ea(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  var t;
  return (t = (Ea(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ea(e) {
  return e instanceof Node || e instanceof Ne(e).Node;
}
function Se(e) {
  return e instanceof Element || e instanceof Ne(e).Element;
}
function st(e) {
  return e instanceof HTMLElement || e instanceof Ne(e).HTMLElement;
}
function Us(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
}
function On(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Td(e) {
  return ["table", "td", "th"].includes(nn(e));
}
function $r(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function os(e) {
  const t = ss(), n = Se(e) ? Xe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Rd(e) {
  let t = wt(e);
  for (; st(t) && !Jt(t); ) {
    if (os(t))
      return t;
    if ($r(t))
      return null;
    t = wt(t);
  }
  return null;
}
function ss() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Jt(e) {
  return ["html", "body", "#document"].includes(nn(e));
}
function Xe(e) {
  return Ne(e).getComputedStyle(e);
}
function Pr(e) {
  return Se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function wt(e) {
  if (nn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Us(e) && e.host || // Fallback.
    mt(e)
  );
  return Us(t) ? t.host : t;
}
function Ta(e) {
  const t = wt(e);
  return Jt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : st(t) && On(t) ? t : Ta(t);
}
function Tn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ta(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ne(o);
  if (s) {
    const a = Ro(i);
    return t.concat(i, i.visualViewport || [], On(o) ? o : [], a && n ? Tn(a) : []);
  }
  return t.concat(o, Tn(o, [], n));
}
function Ro(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const Pe = Math.min, we = Math.max, yr = Math.round, sr = Math.floor, Ct = (e) => ({
  x: e,
  y: e
}), Ad = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kd = {
  start: "end",
  end: "start"
};
function Ao(e, t, n) {
  return we(e, Pe(t, n));
}
function ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ke(e) {
  return e.split("-")[0];
}
function rn(e) {
  return e.split("-")[1];
}
function is(e) {
  return e === "x" ? "y" : "x";
}
function as(e) {
  return e === "y" ? "height" : "width";
}
function pt(e) {
  return ["top", "bottom"].includes(Ke(e)) ? "y" : "x";
}
function cs(e) {
  return is(pt(e));
}
function $d(e, t, n) {
  n === void 0 && (n = !1);
  const r = rn(e), o = cs(e), s = as(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = vr(i)), [i, vr(i)];
}
function Pd(e) {
  const t = vr(e);
  return [ko(e), t, ko(t)];
}
function ko(e) {
  return e.replace(/start|end/g, (t) => kd[t]);
}
function Nd(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function Id(e, t, n, r) {
  const o = rn(e);
  let s = Nd(Ke(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(ko)))), s;
}
function vr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ad[t]);
}
function Ld(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ls(e) {
  return typeof e != "number" ? Ld(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Ys(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = pt(t), i = cs(t), a = as(i), l = Ke(t), u = s === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (rn(t)) {
    case "start":
      p[i] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      p[i] += m * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const Od = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Ys(u, r, l), m = r, p = {}, y = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: v,
      fn: w
    } = a[g], {
      x: S,
      y: b,
      data: C,
      reset: _
    } = await w({
      x: d,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: p,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = S ?? d, f = b ?? f, p = {
      ...p,
      [v]: {
        ...p[v],
        ...C
      }
    }, _ && y <= 50 && (y++, typeof _ == "object" && (_.placement && (m = _.placement), _.rects && (u = _.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: d,
      y: f
    } = Ys(u, m, l)), g = -1);
  }
  return {
    x: d,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: p
  };
};
async function us(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = ft(t, e), y = ls(p), v = a[m ? f === "floating" ? "reference" : "floating" : f], w = Zt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), S = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), C = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = Zt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: S,
    offsetParent: b,
    strategy: l
  }) : S);
  return {
    top: (w.top - _.top + y.top) / C.y,
    bottom: (_.bottom - w.bottom + y.bottom) / C.y,
    left: (w.left - _.left + y.left) / C.x,
    right: (_.right - w.right + y.right) / C.x
  };
}
const Fd = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: d = 0
    } = ft(e, t) || {};
    if (u == null)
      return {};
    const f = ls(d), m = {
      x: n,
      y: r
    }, p = cs(o), y = as(p), g = await i.getDimensions(u), v = p === "y", w = v ? "top" : "left", S = v ? "bottom" : "right", b = v ? "clientHeight" : "clientWidth", C = s.reference[y] + s.reference[p] - m[p] - s.floating[y], _ = m[p] - s.reference[p], x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let E = x ? x[b] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(x))) && (E = a.floating[b] || s.floating[y]);
    const j = C / 2 - _ / 2, $ = E / 2 - g[y] / 2 - 1, I = Pe(f[w], $), O = Pe(f[S], $), B = I, G = E - g[y] - O, F = E / 2 - g[y] / 2 + j, q = Ao(B, F, G), Y = !l.arrow && rn(o) != null && F !== q && s.reference[y] / 2 - (F < B ? I : O) - g[y] / 2 < 0, V = Y ? F < B ? F - B : F - G : 0;
    return {
      [p]: m[p] + V,
      data: {
        [p]: q,
        centerOffset: F - q - V,
        ...Y && {
          alignmentOffset: V
        }
      },
      reset: Y
    };
  }
}), Md = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: g = !0,
        ...v
      } = ft(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = Ke(o), S = pt(a), b = Ke(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = m || (b || !g ? [vr(a)] : Pd(a)), x = y !== "none";
      !m && x && _.push(...Id(a, g, y, C));
      const E = [a, ..._], j = await us(t, v), $ = [];
      let I = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && $.push(j[w]), f) {
        const F = $d(o, i, C);
        $.push(j[F[0]], j[F[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: $
      }], !$.every((F) => F <= 0)) {
        var O, B;
        const F = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1, q = E[F];
        if (q)
          return {
            data: {
              index: F,
              overflows: I
            },
            reset: {
              placement: q
            }
          };
        let Y = (B = I.filter((V) => V.overflows[0] <= 0).sort((V, ee) => V.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!Y)
          switch (p) {
            case "bestFit": {
              var G;
              const V = (G = I.filter((ee) => {
                if (x) {
                  const D = pt(ee.placement);
                  return D === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((ee) => [ee.placement, ee.overflows.filter((D) => D > 0).reduce((D, A) => D + A, 0)]).sort((ee, D) => ee[1] - D[1])[0]) == null ? void 0 : G[0];
              V && (Y = V);
              break;
            }
            case "initialPlacement":
              Y = a;
              break;
          }
        if (o !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
function Ra(e) {
  const t = Pe(...e.map((s) => s.left)), n = Pe(...e.map((s) => s.top)), r = we(...e.map((s) => s.right)), o = we(...e.map((s) => s.bottom));
  return {
    x: t,
    y: n,
    width: r - t,
    height: o - n
  };
}
function Dd(e) {
  const t = e.slice().sort((o, s) => o.y - s.y), n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    !r || s.y - r.y > r.height / 2 ? n.push([s]) : n[n.length - 1].push(s), r = s;
  }
  return n.map((o) => Zt(Ra(o)));
}
const Bd = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: n,
        elements: r,
        rects: o,
        platform: s,
        strategy: i
      } = t, {
        padding: a = 2,
        x: l,
        y: u
      } = ft(e, t), d = Array.from(await (s.getClientRects == null ? void 0 : s.getClientRects(r.reference)) || []), f = Dd(d), m = Zt(Ra(d)), p = ls(a);
      function y() {
        if (f.length === 2 && f[0].left > f[1].right && l != null && u != null)
          return f.find((v) => l > v.left - p.left && l < v.right + p.right && u > v.top - p.top && u < v.bottom + p.bottom) || m;
        if (f.length >= 2) {
          if (pt(n) === "y") {
            const I = f[0], O = f[f.length - 1], B = Ke(n) === "top", G = I.top, F = O.bottom, q = B ? I.left : O.left, Y = B ? I.right : O.right, V = Y - q, ee = F - G;
            return {
              top: G,
              bottom: F,
              left: q,
              right: Y,
              width: V,
              height: ee,
              x: q,
              y: G
            };
          }
          const v = Ke(n) === "left", w = we(...f.map((I) => I.right)), S = Pe(...f.map((I) => I.left)), b = f.filter((I) => v ? I.left === S : I.right === w), C = b[0].top, _ = b[b.length - 1].bottom, x = S, E = w, j = E - x, $ = _ - C;
          return {
            top: C,
            bottom: _,
            left: x,
            right: E,
            width: j,
            height: $,
            x,
            y: C
          };
        }
        return m;
      }
      const g = await s.getElementRects({
        reference: {
          getBoundingClientRect: y
        },
        floating: r.floating,
        strategy: i
      });
      return o.reference.x !== g.reference.x || o.reference.y !== g.reference.y || o.reference.width !== g.reference.width || o.reference.height !== g.reference.height ? {
        reset: {
          rects: g
        }
      } : {};
    }
  };
};
async function Hd(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Ke(n), a = rn(n), l = pt(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, d = s && l ? -1 : 1, f = ft(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: y
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return a && typeof y == "number" && (p = a === "end" ? y * -1 : y), l ? {
    x: p * d,
    y: m * u
  } : {
    x: m * u,
    y: p * d
  };
}
const zd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await Hd(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, Vd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x: w,
              y: S
            } = v;
            return {
              x: w,
              y: S
            };
          }
        },
        ...l
      } = ft(e, t), u = {
        x: n,
        y: r
      }, d = await us(t, l), f = pt(Ke(o)), m = is(f);
      let p = u[m], y = u[f];
      if (s) {
        const v = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", S = p + d[v], b = p - d[w];
        p = Ao(S, p, b);
      }
      if (i) {
        const v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", S = y + d[v], b = y - d[w];
        y = Ao(S, y, b);
      }
      const g = a.fn({
        ...t,
        [m]: p,
        [f]: y
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, Wd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = ft(e, t), d = {
        x: n,
        y: r
      }, f = pt(o), m = is(f);
      let p = d[m], y = d[f];
      const g = ft(a, t), v = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const b = m === "y" ? "height" : "width", C = s.reference[m] - s.floating[b] + v.mainAxis, _ = s.reference[m] + s.reference[b] - v.mainAxis;
        p < C ? p = C : p > _ && (p = _);
      }
      if (u) {
        var w, S;
        const b = m === "y" ? "width" : "height", C = ["top", "left"].includes(Ke(o)), _ = s.reference[f] - s.floating[b] + (C && ((w = i.offset) == null ? void 0 : w[f]) || 0) + (C ? 0 : v.crossAxis), x = s.reference[f] + s.reference[b] + (C ? 0 : ((S = i.offset) == null ? void 0 : S[f]) || 0) - (C ? v.crossAxis : 0);
        y < _ ? y = _ : y > x && (y = x);
      }
      return {
        [m]: p,
        [f]: y
      };
    }
  };
}, Ud = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: s
      } = t, {
        apply: i = () => {
        },
        ...a
      } = ft(e, t), l = await us(t, a), u = Ke(n), d = rn(n), f = pt(n) === "y", {
        width: m,
        height: p
      } = r.floating;
      let y, g;
      u === "top" || u === "bottom" ? (y = u, g = d === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = u, y = d === "end" ? "top" : "bottom");
      const v = p - l.top - l.bottom, w = m - l.left - l.right, S = Pe(p - l[y], v), b = Pe(m - l[g], w), C = !t.middlewareData.shift;
      let _ = S, x = b;
      if (f ? x = d || C ? Pe(b, w) : w : _ = d || C ? Pe(S, v) : v, C && !d) {
        const j = we(l.left, 0), $ = we(l.right, 0), I = we(l.top, 0), O = we(l.bottom, 0);
        f ? x = m - 2 * (j !== 0 || $ !== 0 ? j + $ : we(l.left, l.right)) : _ = p - 2 * (I !== 0 || O !== 0 ? I + O : we(l.top, l.bottom));
      }
      await i({
        ...t,
        availableWidth: x,
        availableHeight: _
      });
      const E = await o.getDimensions(s.floating);
      return m !== E.width || p !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Aa(e) {
  const t = Xe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = st(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = yr(n) !== s || yr(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function ds(e) {
  return Se(e) ? e : e.contextElement;
}
function Xt(e) {
  const t = ds(e);
  if (!st(t))
    return Ct(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Aa(t);
  let i = (s ? yr(n.width) : n.width) / r, a = (s ? yr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Yd = /* @__PURE__ */ Ct(0);
function ka(e) {
  const t = Ne(e);
  return !ss() || !t.visualViewport ? Yd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ne(e) ? !1 : t;
}
function Pt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = ds(e);
  let i = Ct(1);
  t && (r ? Se(r) && (i = Xt(r)) : i = Xt(e));
  const a = Gd(s, n, r) ? ka(s) : Ct(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (s) {
    const m = Ne(s), p = r && Se(r) ? Ne(r) : r;
    let y = m, g = Ro(y);
    for (; g && r && p !== y; ) {
      const v = Xt(g), w = g.getBoundingClientRect(), S = Xe(g), b = w.left + (g.clientLeft + parseFloat(S.paddingLeft)) * v.x, C = w.top + (g.clientTop + parseFloat(S.paddingTop)) * v.y;
      l *= v.x, u *= v.y, d *= v.x, f *= v.y, l += b, u += C, y = Ne(g), g = Ro(y);
    }
  }
  return Zt({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Xd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = mt(r), a = t ? $r(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ct(1);
  const d = Ct(0), f = st(r);
  if ((f || !f && !s) && ((nn(r) !== "body" || On(i)) && (l = Pr(r)), st(r))) {
    const m = Pt(r);
    u = Xt(r), d.x = m.x + r.clientLeft, d.y = m.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y
  };
}
function Kd(e) {
  return Array.from(e.getClientRects());
}
function $a(e) {
  return Pt(mt(e)).left + Pr(e).scrollLeft;
}
function qd(e) {
  const t = mt(e), n = Pr(e), r = e.ownerDocument.body, o = we(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = we(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + $a(e);
  const a = -n.scrollTop;
  return Xe(r).direction === "rtl" && (i += we(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Jd(e, t) {
  const n = Ne(e), r = mt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = ss();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function Zd(e, t) {
  const n = Pt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = st(e) ? Xt(e) : Ct(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function Gs(e, t, n) {
  let r;
  if (t === "viewport")
    r = Jd(e, n);
  else if (t === "document")
    r = qd(mt(e));
  else if (Se(t))
    r = Zd(t, n);
  else {
    const o = ka(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Zt(r);
}
function Pa(e, t) {
  const n = wt(e);
  return n === t || !Se(n) || Jt(n) ? !1 : Xe(n).position === "fixed" || Pa(n, t);
}
function Qd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Tn(e, [], !1).filter((a) => Se(a) && nn(a) !== "body"), o = null;
  const s = Xe(e).position === "fixed";
  let i = s ? wt(e) : e;
  for (; Se(i) && !Jt(i); ) {
    const a = Xe(i), l = os(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || On(i) && !l && Pa(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = wt(i);
  }
  return t.set(e, r), r;
}
function ef(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? $r(t) ? [] : Qd(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, d) => {
    const f = Gs(t, d, o);
    return u.top = we(f.top, u.top), u.right = Pe(f.right, u.right), u.bottom = Pe(f.bottom, u.bottom), u.left = we(f.left, u.left), u;
  }, Gs(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function tf(e) {
  const {
    width: t,
    height: n
  } = Aa(e);
  return {
    width: t,
    height: n
  };
}
function nf(e, t, n) {
  const r = st(t), o = mt(t), s = n === "fixed", i = Pt(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ct(0);
  if (r || !r && !s)
    if ((nn(t) !== "body" || On(o)) && (a = Pr(t)), r) {
      const f = Pt(t, !0, s, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = $a(o));
  const u = i.left + a.scrollLeft - l.x, d = i.top + a.scrollTop - l.y;
  return {
    x: u,
    y: d,
    width: i.width,
    height: i.height
  };
}
function yo(e) {
  return Xe(e).position === "static";
}
function Xs(e, t) {
  return !st(e) || Xe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Na(e, t) {
  const n = Ne(e);
  if ($r(e))
    return n;
  if (!st(e)) {
    let o = wt(e);
    for (; o && !Jt(o); ) {
      if (Se(o) && !yo(o))
        return o;
      o = wt(o);
    }
    return n;
  }
  let r = Xs(e, t);
  for (; r && Td(r) && yo(r); )
    r = Xs(r, t);
  return r && Jt(r) && yo(r) && !os(r) ? n : r || Rd(e) || n;
}
const rf = async function(e) {
  const t = this.getOffsetParent || Na, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: nf(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function of(e) {
  return Xe(e).direction === "rtl";
}
const sf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xd,
  getDocumentElement: mt,
  getClippingRect: ef,
  getOffsetParent: Na,
  getElementRects: rf,
  getClientRects: Kd,
  getDimensions: tf,
  getScale: Xt,
  isElement: Se,
  isRTL: of
};
function af(e, t) {
  let n = null, r;
  const o = mt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const {
      left: u,
      top: d,
      width: f,
      height: m
    } = e.getBoundingClientRect();
    if (a || t(), !f || !m)
      return;
    const p = sr(d), y = sr(o.clientWidth - (u + f)), g = sr(o.clientHeight - (d + m)), v = sr(u), S = {
      rootMargin: -p + "px " + -y + "px " + -g + "px " + -v + "px",
      threshold: we(0, Pe(1, l)) || 1
    };
    let b = !0;
    function C(_) {
      const x = _[0].intersectionRatio;
      if (x !== l) {
        if (!b)
          return i();
        x ? i(!1, x) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, S);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function cf(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = ds(e), d = o || s ? [...u ? Tn(u) : [], ...Tn(t)] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const f = u && a ? af(u, n) : null;
  let m = -1, p = null;
  i && (p = new ResizeObserver((w) => {
    let [S] = w;
    S && S.target === u && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var b;
      (b = p) == null || b.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let y, g = l ? Pt(e) : null;
  l && v();
  function v() {
    const w = Pt(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, y = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    d.forEach((S) => {
      o && S.removeEventListener("scroll", n), s && S.removeEventListener("resize", n);
    }), f == null || f(), (w = p) == null || w.disconnect(), p = null, l && cancelAnimationFrame(y);
  };
}
const lf = zd, uf = Vd, df = Md, ff = Ud, Ks = Fd, pf = Bd, mf = Wd, hf = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: sf,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Od(e, t, {
    ...o,
    platform: s
  });
};
var pr = typeof document < "u" ? tn : W;
function br(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!br(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !br(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ia(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qs(e, t) {
  const n = Ia(e);
  return Math.round(t * n) / n;
}
function Js(e) {
  const t = N.useRef(e);
  return pr(() => {
    t.current = e;
  }), t;
}
function gf(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: u
  } = e, [d, f] = N.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, p] = N.useState(r);
  br(m, r) || p(r);
  const [y, g] = N.useState(null), [v, w] = N.useState(null), S = N.useCallback((V) => {
    V !== x.current && (x.current = V, g(V));
  }, []), b = N.useCallback((V) => {
    V !== E.current && (E.current = V, w(V));
  }, []), C = s || y, _ = i || v, x = N.useRef(null), E = N.useRef(null), j = N.useRef(d), $ = l != null, I = Js(l), O = Js(o), B = N.useCallback(() => {
    if (!x.current || !E.current)
      return;
    const V = {
      placement: t,
      strategy: n,
      middleware: m
    };
    O.current && (V.platform = O.current), hf(x.current, E.current, V).then((ee) => {
      const D = {
        ...ee,
        isPositioned: !0
      };
      G.current && !br(j.current, D) && (j.current = D, _c.flushSync(() => {
        f(D);
      }));
    });
  }, [m, t, n, O]);
  pr(() => {
    u === !1 && j.current.isPositioned && (j.current.isPositioned = !1, f((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [u]);
  const G = N.useRef(!1);
  pr(() => (G.current = !0, () => {
    G.current = !1;
  }), []), pr(() => {
    if (C && (x.current = C), _ && (E.current = _), C && _) {
      if (I.current)
        return I.current(C, _, B);
      B();
    }
  }, [C, _, B, I, $]);
  const F = N.useMemo(() => ({
    reference: x,
    floating: E,
    setReference: S,
    setFloating: b
  }), [S, b]), q = N.useMemo(() => ({
    reference: C,
    floating: _
  }), [C, _]), Y = N.useMemo(() => {
    const V = {
      position: n,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return V;
    const ee = qs(q.floating, d.x), D = qs(q.floating, d.y);
    return a ? {
      ...V,
      transform: "translate(" + ee + "px, " + D + "px)",
      ...Ia(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: ee,
      top: D
    };
  }, [n, a, q.floating, d.x, d.y]);
  return N.useMemo(() => ({
    ...d,
    update: B,
    refs: F,
    elements: q,
    floatingStyles: Y
  }), [d, B, F, q, Y]);
}
const yf = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Ks({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ks({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, vf = (e, t) => ({
  ...lf(e),
  options: [e, t]
}), bf = (e, t) => ({
  ...uf(e),
  options: [e, t]
}), Zs = (e, t) => ({
  ...mf(e),
  options: [e, t]
}), Qs = (e, t) => ({
  ...df(e),
  options: [e, t]
}), xf = (e, t) => ({
  ...ff(e),
  options: [e, t]
}), ei = (e, t) => ({
  ...pf(e),
  options: [e, t]
}), wf = (e, t) => ({
  ...yf(e),
  options: [e, t]
});
var fs = {};
const La = {
  ...N
}, Cf = La.useInsertionEffect, Sf = Cf || ((e) => e());
function _f(e) {
  const t = N.useRef(() => {
    if (fs.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Sf(() => {
    t.current = e;
  }), N.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var $o = typeof document < "u" ? tn : W;
let ti = !1, jf = 0;
const ni = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + jf++
);
function Ef() {
  const [e, t] = N.useState(() => ti ? ni() : void 0);
  return $o(() => {
    e == null && t(ni());
  }, []), N.useEffect(() => {
    ti = !0;
  }, []), e;
}
const Tf = La.useId, Rf = Tf || Ef;
let Po;
fs.NODE_ENV !== "production" && (Po = /* @__PURE__ */ new Set());
function Af() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = Po) != null && e.has(o))) {
    var s;
    (s = Po) == null || s.add(o), console.error(o);
  }
}
function kf() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const $f = /* @__PURE__ */ N.createContext(null), Pf = /* @__PURE__ */ N.createContext(null), Nf = () => {
  var e;
  return ((e = N.useContext($f)) == null ? void 0 : e.id) || null;
}, If = () => N.useContext(Pf);
function Lf(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Rf(), s = N.useRef({}), [i] = N.useState(() => kf()), a = Nf() != null;
  if (fs.NODE_ENV !== "production") {
    const p = r.reference;
    p && !Se(p) && Af("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, u] = N.useState(r.reference), d = _f((p, y, g) => {
    s.current.openEvent = p ? y : void 0, i.emit("openchange", {
      open: p,
      event: y,
      reason: g,
      nested: a
    }), n == null || n(p, y, g);
  }), f = N.useMemo(() => ({
    setPositionReference: u
  }), []), m = N.useMemo(() => ({
    reference: l || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [l, r.reference, r.floating]);
  return N.useMemo(() => ({
    dataRef: s,
    open: t,
    onOpenChange: d,
    elements: m,
    events: i,
    floatingId: o,
    refs: f
  }), [t, d, m, i, o, f]);
}
function Of(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Lf({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [s, i] = N.useState(null), [a, l] = N.useState(null), d = (o == null ? void 0 : o.reference) || s, f = N.useRef(null), m = If();
  $o(() => {
    d && (f.current = d);
  }, [d]);
  const p = gf({
    ...e,
    elements: {
      ...o,
      ...a && {
        reference: a
      }
    }
  }), y = N.useCallback((b) => {
    const C = Se(b) ? {
      getBoundingClientRect: () => b.getBoundingClientRect(),
      contextElement: b
    } : b;
    l(C), p.refs.setReference(C);
  }, [p.refs]), g = N.useCallback((b) => {
    (Se(b) || b === null) && (f.current = b, i(b)), (Se(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    b !== null && !Se(b)) && p.refs.setReference(b);
  }, [p.refs]), v = N.useMemo(() => ({
    ...p.refs,
    setReference: g,
    setPositionReference: y,
    domReference: f
  }), [p.refs, g, y]), w = N.useMemo(() => ({
    ...p.elements,
    domReference: d
  }), [p.elements, d]), S = N.useMemo(() => ({
    ...p,
    ...r,
    refs: v,
    elements: w,
    nodeId: t
  }), [p, v, w, t, r]);
  return $o(() => {
    r.dataRef.current.floatingContext = S;
    const b = m == null ? void 0 : m.nodesRef.current.find((C) => C.id === t);
    b && (b.context = S);
  }), N.useMemo(() => ({
    ...p,
    context: S,
    refs: v,
    elements: w
  }), [p, v, w, S]);
}
function Ff(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"), o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function ri(e, t, n, r) {
  return e === "center" || r === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function oi(e, t, n, r, o) {
  return e === "center" || r === "center" ? { left: t } : e === "end" ? { [o === "ltr" ? "right" : "left"]: n } : e === "start" ? { [o === "ltr" ? "left" : "right"]: n } : {};
}
const Mf = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Df({
  position: e,
  arrowSize: t,
  arrowOffset: n,
  arrowRadius: r,
  arrowPosition: o,
  arrowX: s,
  arrowY: i,
  dir: a
}) {
  const [l, u = "center"] = e.split("-"), d = {
    width: t,
    height: t,
    transform: "rotate(45deg)",
    position: "absolute",
    [Mf[l]]: r
  }, f = -t / 2;
  return l === "left" ? {
    ...d,
    ...ri(u, i, n, o),
    right: f,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : l === "right" ? {
    ...d,
    ...ri(u, i, n, o),
    left: f,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : l === "top" ? {
    ...d,
    ...oi(u, s, n, o, a),
    bottom: f,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : l === "bottom" ? {
    ...d,
    ...oi(u, s, n, o, a),
    top: f,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Oa = se(
  ({
    position: e,
    arrowSize: t,
    arrowOffset: n,
    arrowRadius: r,
    arrowPosition: o,
    visible: s,
    arrowX: i,
    arrowY: a,
    style: l,
    ...u
  }, d) => {
    const { dir: f } = Zo();
    return s ? /* @__PURE__ */ c.jsx(
      "div",
      {
        ...u,
        ref: d,
        style: {
          ...l,
          ...Df({
            position: e,
            arrowSize: t,
            arrowOffset: n,
            arrowRadius: r,
            arrowPosition: o,
            dir: f,
            arrowX: i,
            arrowY: a
          })
        }
      }
    ) : null;
  }
);
Oa.displayName = "@mantine/core/FloatingArrow";
const [Bf, Fa] = kn(
  "Popover component was not found in the tree"
);
function Nr({
  children: e,
  active: t = !0,
  refProp: n = "ref",
  innerRef: r
}) {
  const o = Ll(t), s = at(o, r);
  return Ki(e) ? Fi(e, { [n]: s }) : e;
}
function Ma(e) {
  return /* @__PURE__ */ c.jsx(ns, { tabIndex: -1, "data-autofocus": !0, ...e });
}
Nr.displayName = "@mantine/core/FocusTrap";
Ma.displayName = "@mantine/core/FocusTrapInitialFocus";
Nr.InitialFocus = Ma;
function Hf(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const zf = {}, Da = se((e, t) => {
  const { children: n, target: r, ...o } = K("Portal", zf, e), [s, i] = P(!1), a = J(null);
  return Pn(() => (i(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : Hf(o), Vo(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !s || !a.current ? null : jc(/* @__PURE__ */ c.jsx(c.Fragment, { children: n }), a.current);
});
Da.displayName = "@mantine/core/Portal";
function ps({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ c.jsx(Da, { ...n, children: t }) : /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
}
ps.displayName = "@mantine/core/OptionalPortal";
const xn = (e) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${R(e === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), ir = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${R(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${R(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${R(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${R(-30)}` },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${R(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${R(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${R(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${R(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...xn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...xn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...xn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...xn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...xn("top"),
    common: { transformOrigin: "top right" }
  }
}, si = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Vf({
  transition: e,
  state: t,
  duration: n,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r
  };
  return typeof e == "string" ? e in ir ? {
    transitionProperty: ir[e].transitionProperty,
    ...o,
    ...ir[e].common,
    ...ir[e][si[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[si[t]]
  };
}
function Wf({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: s,
  onEntered: i,
  onExited: a,
  enterDelay: l,
  exitDelay: u
}) {
  const d = jt(), f = Wo(), m = d.respectReducedMotion ? f : !1, [p, y] = P(m ? 0 : e), [g, v] = P(r ? "entered" : "exited"), w = J(-1), S = J(-1), b = J(-1), C = (x) => {
    const E = x ? o : s, j = x ? i : a;
    window.clearTimeout(w.current);
    const $ = m ? 0 : x ? e : t;
    y($), $ === 0 ? (typeof E == "function" && E(), typeof j == "function" && j(), v(x ? "entered" : "exited")) : b.current = requestAnimationFrame(() => {
      Mi.flushSync(() => {
        v(x ? "pre-entering" : "pre-exiting");
      }), b.current = requestAnimationFrame(() => {
        typeof E == "function" && E(), v(x ? "entering" : "exiting"), w.current = window.setTimeout(() => {
          typeof j == "function" && j(), v(x ? "entered" : "exited");
        }, $);
      });
    });
  }, _ = (x) => {
    if (window.clearTimeout(S.current), typeof (x ? l : u) != "number") {
      C(x);
      return;
    }
    S.current = window.setTimeout(
      () => {
        C(x);
      },
      x ? l : u
    );
  };
  return Kt(() => {
    _(r);
  }, [r]), W(
    () => () => {
      window.clearTimeout(w.current), cancelAnimationFrame(b.current);
    },
    []
  ), {
    transitionDuration: p,
    transitionStatus: g,
    transitionTimingFunction: n || "ease"
  };
}
function on({
  keepMounted: e,
  transition: t = "fade",
  duration: n = 250,
  exitDuration: r = n,
  mounted: o,
  children: s,
  timingFunction: i = "ease",
  onExit: a,
  onEntered: l,
  onEnter: u,
  onExited: d,
  enterDelay: f,
  exitDelay: m
}) {
  const { transitionDuration: p, transitionStatus: y, transitionTimingFunction: g } = Wf({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: i,
    onExit: a,
    onEntered: l,
    onEnter: u,
    onExited: d,
    enterDelay: f,
    exitDelay: m
  });
  return p === 0 ? o ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s({}) }) : e ? s({ display: "none" }) : null : y === "exited" ? e ? s({ display: "none" }) : null : /* @__PURE__ */ c.jsx(c.Fragment, { children: s(
    Vf({
      transition: t,
      duration: p,
      state: y,
      timingFunction: g
    })
  ) });
}
on.displayName = "@mantine/core/Transition";
var Ba = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Uf = {}, ms = le((e, t) => {
  var v, w, S, b;
  const n = K("PopoverDropdown", Uf, e), {
    className: r,
    style: o,
    vars: s,
    children: i,
    onKeyDownCapture: a,
    variant: l,
    classNames: u,
    styles: d,
    ...f
  } = n, m = Fa(), p = Zi({
    opened: m.opened,
    shouldReturnFocus: m.returnFocus
  }), y = m.withRoles ? {
    "aria-labelledby": m.getTargetId(),
    id: m.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = at(t, m.floating);
  return m.disabled ? null : /* @__PURE__ */ c.jsx(ps, { ...m.portalProps, withinPortal: m.withinPortal, children: /* @__PURE__ */ c.jsx(
    on,
    {
      mounted: m.opened,
      ...m.transitionProps,
      transition: ((v = m.transitionProps) == null ? void 0 : v.transition) || "fade",
      duration: ((w = m.transitionProps) == null ? void 0 : w.duration) ?? 150,
      keepMounted: m.keepMounted,
      exitDuration: typeof ((S = m.transitionProps) == null ? void 0 : S.exitDuration) == "number" ? m.transitionProps.exitDuration : (b = m.transitionProps) == null ? void 0 : b.duration,
      children: (C) => /* @__PURE__ */ c.jsx(Nr, { active: m.trapFocus, innerRef: g, children: /* @__PURE__ */ c.jsxs(
        k,
        {
          ...y,
          ...f,
          variant: l,
          onKeyDownCapture: Cl(m.onClose, {
            active: m.closeOnEscape,
            onTrigger: p,
            onKeyDown: a
          }),
          "data-position": m.placement,
          "data-fixed": m.floatingStrategy === "fixed" || void 0,
          ...m.getStyles("dropdown", {
            className: r,
            props: n,
            classNames: u,
            styles: d,
            style: [
              {
                ...C,
                zIndex: m.zIndex,
                top: m.y ?? 0,
                left: m.x ?? 0,
                width: m.width === "target" ? void 0 : R(m.width)
              },
              o
            ]
          }),
          children: [
            i,
            /* @__PURE__ */ c.jsx(
              Oa,
              {
                ref: m.arrowRef,
                arrowX: m.arrowX,
                arrowY: m.arrowY,
                visible: m.withArrow,
                position: m.placement,
                arrowSize: m.arrowSize,
                arrowRadius: m.arrowRadius,
                arrowOffset: m.arrowOffset,
                arrowPosition: m.arrowPosition,
                ...m.getStyles("arrow", {
                  props: n,
                  classNames: u,
                  styles: d
                })
              }
            )
          ]
        }
      ) })
    }
  ) });
});
ms.classes = Ba;
ms.displayName = "@mantine/core/PopoverDropdown";
const Yf = {
  refProp: "ref",
  popupType: "dialog"
}, Ha = le((e, t) => {
  const { children: n, refProp: r, popupType: o, ...s } = K(
    "PopoverTarget",
    Yf,
    e
  );
  if (!Ki(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const i = s, a = Fa(), l = at(a.reference, n.ref, t), u = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return Fi(n, {
    ...i,
    ...u,
    ...a.targetProps,
    className: Te(a.targetProps.className, i.className, n.props.className),
    [r]: l,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
Ha.displayName = "@mantine/core/PopoverTarget";
function Gf({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, s] = P(0);
  W(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return cf(
        t.refs.reference.current,
        t.refs.floating.current,
        t.update
      );
  }, [
    t.refs.reference.current,
    t.refs.floating.current,
    e,
    o,
    n
  ]), Kt(() => {
    t.update();
  }, r), Kt(() => {
    s((i) => i + 1);
  }, [e]);
}
function Xf(e) {
  if (e === void 0)
    return { shift: !0, flip: !0 };
  const t = { ...e };
  return e.shift === void 0 && (t.shift = !0), e.flip === void 0 && (t.flip = !0), t;
}
function Kf(e, t) {
  const n = Xf(e.middlewares), r = [vf(e.offset)];
  return n.shift && r.push(
    bf(
      typeof n.shift == "boolean" ? { limiter: Zs(), padding: 5 } : { limiter: Zs(), padding: 5, ...n.shift }
    )
  ), n.flip && r.push(
    typeof n.flip == "boolean" ? Qs() : Qs(n.flip)
  ), n.inline && r.push(
    typeof n.inline == "boolean" ? ei() : ei(n.inline)
  ), r.push(wf({ element: e.arrowRef, padding: e.arrowOffset })), (n.size || e.width === "target") && r.push(
    xf({
      ...typeof n.size == "boolean" ? {} : n.size,
      apply({ rects: o, availableWidth: s, availableHeight: i }) {
        var u;
        const l = ((u = t().refs.floating.current) == null ? void 0 : u.style) ?? {};
        n.size && Object.assign(l, {
          maxWidth: `${s}px`,
          maxHeight: `${i}px`
        }), e.width === "target" && Object.assign(l, {
          width: `${o.reference.width}px`
        });
      }
    })
  ), r;
}
function qf(e) {
  const [t, n] = Dl({
    value: e.opened,
    defaultValue: e.defaultOpened,
    finalValue: !1,
    onChange: e.onChange
  }), r = () => {
    var i;
    t && ((i = e.onClose) == null || i.call(e), n(!1));
  }, o = () => {
    var i, a;
    t ? ((i = e.onClose) == null || i.call(e), n(!1)) : ((a = e.onOpen) == null || a.call(e), n(!0));
  }, s = Of({
    strategy: e.strategy,
    placement: e.position,
    middleware: Kf(e, () => s)
  });
  return Gf({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: s
  }), Kt(() => {
    var i;
    (i = e.onPositionChange) == null || i.call(e, s.placement);
  }, [s.placement]), Kt(() => {
    var i, a;
    e.opened ? (a = e.onOpen) == null || a.call(e) : (i = e.onClose) == null || i.call(e);
  }, [e.opened]), {
    floating: s,
    controlled: typeof e.opened == "boolean",
    opened: t,
    onClose: r,
    onToggle: o
  };
}
const Jf = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: !0, shift: !0, inline: !1 },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: !0,
  withinPortal: !0,
  closeOnEscape: !0,
  trapFocus: !1,
  withRoles: !0,
  returnFocus: !1,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: $n("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, Zf = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : it(t),
    "--popover-shadow": zo(n)
  }
});
function $t(e) {
  var Re, Qe, $e, et, Lt, Ot;
  const t = K("Popover", Jf, e), {
    children: n,
    position: r,
    offset: o,
    onPositionChange: s,
    positionDependencies: i,
    opened: a,
    transitionProps: l,
    width: u,
    middlewares: d,
    withArrow: f,
    arrowSize: m,
    arrowOffset: p,
    arrowRadius: y,
    arrowPosition: g,
    unstyled: v,
    classNames: w,
    styles: S,
    closeOnClickOutside: b,
    withinPortal: C,
    portalProps: _,
    closeOnEscape: x,
    clickOutsideEvents: E,
    trapFocus: j,
    onClose: $,
    onOpen: I,
    onChange: O,
    zIndex: B,
    radius: G,
    shadow: F,
    id: q,
    defaultOpened: Y,
    __staticSelector: V,
    withRoles: ee,
    disabled: D,
    returnFocus: A,
    variant: U,
    keepMounted: X,
    vars: ne,
    floatingStrategy: ie,
    ...pe
  } = t, ae = ue({
    name: V,
    props: t,
    classes: Ba,
    classNames: w,
    styles: S,
    unstyled: v,
    rootSelector: "dropdown",
    vars: ne,
    varsResolver: Zf
  }), me = J(null), [Le, Oe] = P(null), [We, Je] = P(null), { dir: ke } = Zo(), lt = Rr(q), de = qf({
    middlewares: d,
    width: u,
    position: Ff(ke, r),
    offset: typeof o == "number" ? o + (f ? m / 2 : 0) : o,
    arrowRef: me,
    arrowOffset: p,
    onPositionChange: s,
    positionDependencies: i,
    opened: a,
    defaultOpened: Y,
    onChange: O,
    onOpen: I,
    onClose: $,
    strategy: ie
  });
  _l(() => b && de.onClose(), E, [
    Le,
    We
  ]);
  const ut = H(
    (Fe) => {
      Oe(Fe), de.floating.refs.setReference(Fe);
    },
    [de.floating.refs.setReference]
  ), Ze = H(
    (Fe) => {
      Je(Fe), de.floating.refs.setFloating(Fe);
    },
    [de.floating.refs.setFloating]
  );
  return /* @__PURE__ */ c.jsx(
    Bf,
    {
      value: {
        returnFocus: A,
        disabled: D,
        controlled: de.controlled,
        reference: ut,
        floating: Ze,
        x: de.floating.x,
        y: de.floating.y,
        arrowX: ($e = (Qe = (Re = de.floating) == null ? void 0 : Re.middlewareData) == null ? void 0 : Qe.arrow) == null ? void 0 : $e.x,
        arrowY: (Ot = (Lt = (et = de.floating) == null ? void 0 : et.middlewareData) == null ? void 0 : Lt.arrow) == null ? void 0 : Ot.y,
        opened: de.opened,
        arrowRef: me,
        transitionProps: l,
        width: u,
        withArrow: f,
        arrowSize: m,
        arrowOffset: p,
        arrowRadius: y,
        arrowPosition: g,
        placement: de.floating.placement,
        trapFocus: j,
        withinPortal: C,
        portalProps: _,
        zIndex: B,
        radius: G,
        shadow: F,
        closeOnEscape: x,
        onClose: de.onClose,
        onToggle: de.onToggle,
        getTargetId: () => `${lt}-target`,
        getDropdownId: () => `${lt}-dropdown`,
        withRoles: ee,
        targetProps: pe,
        __staticSelector: V,
        classNames: w,
        styles: S,
        unstyled: v,
        variant: U,
        keepMounted: X,
        getStyles: ae,
        floatingStrategy: ie
      },
      children: n
    }
  );
}
$t.Target = Ha;
$t.Dropdown = ms;
$t.displayName = "@mantine/core/Popover";
$t.extend = (e) => e;
var Ye = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const Qf = se(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsxs(k, { component: "span", className: Te(Ye.barsLoader, e), ...t, ref: n, children: [
  /* @__PURE__ */ c.jsx("span", { className: Ye.bar }),
  /* @__PURE__ */ c.jsx("span", { className: Ye.bar }),
  /* @__PURE__ */ c.jsx("span", { className: Ye.bar })
] })), ep = se(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsxs(k, { component: "span", className: Te(Ye.dotsLoader, e), ...t, ref: n, children: [
  /* @__PURE__ */ c.jsx("span", { className: Ye.dot }),
  /* @__PURE__ */ c.jsx("span", { className: Ye.dot }),
  /* @__PURE__ */ c.jsx("span", { className: Ye.dot })
] })), tp = se(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(k, { component: "span", className: Te(Ye.ovalLoader, e), ...t, ref: n })), za = {
  bars: Qf,
  oval: tp,
  dots: ep
}, np = {
  loaders: za,
  type: "oval"
}, rp = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": Ie(t, "loader-size"),
    "--loader-color": n ? hr(n, e) : void 0
  }
}), St = le((e, t) => {
  const n = K("Loader", np, e), {
    size: r,
    color: o,
    type: s,
    vars: i,
    className: a,
    style: l,
    classNames: u,
    styles: d,
    unstyled: f,
    loaders: m,
    variant: p,
    children: y,
    ...g
  } = n, v = ue({
    name: "Loader",
    props: n,
    classes: Ye,
    className: a,
    style: l,
    classNames: u,
    styles: d,
    unstyled: f,
    vars: i,
    varsResolver: rp
  });
  return y ? /* @__PURE__ */ c.jsx(k, { ...v("root"), ref: t, ...g, children: y }) : /* @__PURE__ */ c.jsx(
    k,
    {
      ...v("root"),
      ref: t,
      component: m[s],
      variant: p,
      size: r,
      ...g
    }
  );
});
St.defaultLoaders = za;
St.classes = Ye;
St.displayName = "@mantine/core/Loader";
var Ir = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const ii = {
  orientation: "horizontal"
}, op = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": R(t) }
}), hs = le((e, t) => {
  const n = K("ActionIconGroup", ii, e), {
    className: r,
    style: o,
    classNames: s,
    styles: i,
    unstyled: a,
    orientation: l,
    vars: u,
    borderWidth: d,
    variant: f,
    mod: m,
    ...p
  } = K("ActionIconGroup", ii, e), y = ue({
    name: "ActionIconGroup",
    props: n,
    classes: Ir,
    className: r,
    style: o,
    classNames: s,
    styles: i,
    unstyled: a,
    vars: u,
    varsResolver: op,
    rootSelector: "group"
  });
  return /* @__PURE__ */ c.jsx(
    k,
    {
      ...y("group"),
      ref: t,
      variant: f,
      mod: [{ "data-orientation": l }, m],
      role: "group",
      ...p
    }
  );
});
hs.classes = Ir;
hs.displayName = "@mantine/core/ActionIconGroup";
const sp = {}, ip = (e, { size: t, radius: n, variant: r, gradient: o, color: s, autoContrast: i }) => {
  const a = e.variantColorResolver({
    color: s || e.primaryColor,
    theme: e,
    gradient: o,
    variant: r || "filled",
    autoContrast: i
  });
  return {
    root: {
      "--ai-size": Ie(t, "ai-size"),
      "--ai-radius": n === void 0 ? void 0 : it(n),
      "--ai-bg": s || r ? a.background : void 0,
      "--ai-hover": s || r ? a.hover : void 0,
      "--ai-hover-color": s || r ? a.hoverColor : void 0,
      "--ai-color": a.color,
      "--ai-bd": s || r ? a.border : void 0
    }
  };
}, Lr = He((e, t) => {
  const n = K("ActionIcon", sp, e), {
    className: r,
    unstyled: o,
    variant: s,
    classNames: i,
    styles: a,
    style: l,
    loading: u,
    loaderProps: d,
    size: f,
    color: m,
    radius: p,
    __staticSelector: y,
    gradient: g,
    vars: v,
    children: w,
    disabled: S,
    "data-disabled": b,
    autoContrast: C,
    mod: _,
    ...x
  } = n, E = ue({
    name: ["ActionIcon", y],
    props: n,
    className: r,
    style: l,
    classes: Ir,
    classNames: i,
    styles: a,
    unstyled: o,
    vars: v,
    varsResolver: ip
  });
  return /* @__PURE__ */ c.jsxs(
    Ln,
    {
      ...E("root", { active: !S && !u && !b }),
      ...x,
      unstyled: o,
      variant: s,
      size: f,
      disabled: S || u,
      ref: t,
      mod: [{ loading: u, disabled: S || b }, _],
      children: [
        /* @__PURE__ */ c.jsx(on, { mounted: !!u, transition: "slide-down", duration: 150, children: (j) => /* @__PURE__ */ c.jsx(k, { component: "span", ...E("loader", { style: j }), "aria-hidden": !0, children: /* @__PURE__ */ c.jsx(St, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...d }) }) }),
        /* @__PURE__ */ c.jsx(k, { component: "span", mod: { loading: u }, ...E("icon"), children: w })
      ]
    }
  );
});
Lr.classes = Ir;
Lr.displayName = "@mantine/core/ActionIcon";
Lr.Group = hs;
const Va = se(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) => /* @__PURE__ */ c.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n,
      children: /* @__PURE__ */ c.jsx(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  )
);
Va.displayName = "@mantine/core/CloseIcon";
var Wa = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const ap = {
  variant: "subtle"
}, cp = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": Ie(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : it(n),
    "--cb-icon-size": R(r)
  }
}), Or = He((e, t) => {
  const n = K("CloseButton", ap, e), {
    iconSize: r,
    children: o,
    vars: s,
    radius: i,
    className: a,
    classNames: l,
    style: u,
    styles: d,
    unstyled: f,
    "data-disabled": m,
    disabled: p,
    variant: y,
    icon: g,
    mod: v,
    ...w
  } = n, S = ue({
    name: "CloseButton",
    props: n,
    className: a,
    style: u,
    classes: Wa,
    classNames: l,
    styles: d,
    unstyled: f,
    vars: s,
    varsResolver: cp
  });
  return /* @__PURE__ */ c.jsxs(
    Ln,
    {
      ref: t,
      ...w,
      unstyled: f,
      variant: y,
      disabled: p,
      mod: [{ disabled: p || m }, v],
      ...S("root", { variant: y, active: !p && !m }),
      children: [
        g || /* @__PURE__ */ c.jsx(Va, {}),
        o
      ]
    }
  );
});
Or.classes = Wa;
Or.displayName = "@mantine/core/CloseButton";
function lp(e) {
  return xc.toArray(e).filter(Boolean);
}
var Ua = { root: "m_4081bf90" };
const up = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, dp = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: s, wrap: i }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": Er(r),
    "--group-align": o,
    "--group-justify": s,
    "--group-wrap": i
  }
}), Ge = le((e, t) => {
  const n = K("Group", up, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    children: l,
    gap: u,
    align: d,
    justify: f,
    wrap: m,
    grow: p,
    preventGrowOverflow: y,
    vars: g,
    variant: v,
    __size: w,
    mod: S,
    ...b
  } = n, C = lp(l), _ = C.length, x = Er(u ?? "md"), j = { childWidth: `calc(${100 / _}% - (${x} - ${x} / ${_}))` }, $ = ue({
    name: "Group",
    props: n,
    stylesCtx: j,
    className: o,
    style: s,
    classes: Ua,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: g,
    varsResolver: dp
  });
  return /* @__PURE__ */ c.jsx(
    k,
    {
      ...$("root"),
      ref: t,
      variant: v,
      mod: [{ grow: p }, S],
      size: w,
      ...b,
      children: C
    }
  );
});
Ge.classes = Ua;
Ge.displayName = "@mantine/core/Group";
var Ya = { root: "m_9814e45f" };
const fp = {
  zIndex: $n("modal")
}, pp = (e, { gradient: t, color: n, backgroundOpacity: r, blur: o, radius: s, zIndex: i }) => ({
  root: {
    "--overlay-bg": t || (n !== void 0 || r !== void 0) && tt(n || "#000", r ?? 0.6) || void 0,
    "--overlay-filter": o ? `blur(${R(o)})` : void 0,
    "--overlay-radius": s === void 0 ? void 0 : it(s),
    "--overlay-z-index": i == null ? void 0 : i.toString()
  }
}), gs = He((e, t) => {
  const n = K("Overlay", fp, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    fixed: u,
    center: d,
    children: f,
    radius: m,
    zIndex: p,
    gradient: y,
    blur: g,
    color: v,
    backgroundOpacity: w,
    mod: S,
    ...b
  } = n, C = ue({
    name: "Overlay",
    props: n,
    classes: Ya,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: pp
  });
  return /* @__PURE__ */ c.jsx(k, { ref: t, ...C("root"), mod: [{ center: d, fixed: u }, S], ...b, children: f });
});
gs.classes = Ya;
gs.displayName = "@mantine/core/Overlay";
const [mp, ht] = kn(
  "ModalBase component was not found in tree"
);
function hp({ opened: e, transitionDuration: t }) {
  const [n, r] = P(e), o = J(), i = Wo() ? 0 : t;
  return W(() => (e ? (r(!0), window.clearTimeout(o.current)) : i === 0 ? r(!1) : o.current = window.setTimeout(() => r(!1), i), () => window.clearTimeout(o.current)), [e, i]), n;
}
function gp({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: o,
  onClose: s,
  returnFocus: i
}) {
  const a = Rr(e), [l, u] = P(!1), [d, f] = P(!1), m = typeof (t == null ? void 0 : t.duration) == "number" ? t == null ? void 0 : t.duration : 200, p = hp({ opened: n, transitionDuration: m });
  return So(
    "keydown",
    (y) => {
      var g;
      y.key === "Escape" && o && n && ((g = y.target) == null ? void 0 : g.getAttribute("data-mantine-stop-propagation")) !== "true" && s();
    },
    { capture: !0 }
  ), Zi({ opened: n, shouldReturnFocus: r && i }), {
    _id: a,
    titleMounted: l,
    bodyMounted: d,
    shouldLockScroll: p,
    setTitleMounted: u,
    setBodyMounted: f
  };
}
const yp = se(
  ({
    keepMounted: e,
    opened: t,
    onClose: n,
    id: r,
    transitionProps: o,
    trapFocus: s,
    closeOnEscape: i,
    returnFocus: a,
    closeOnClickOutside: l,
    withinPortal: u,
    portalProps: d,
    lockScroll: f,
    children: m,
    zIndex: p,
    shadow: y,
    padding: g,
    __vars: v,
    unstyled: w,
    removeScrollProps: S,
    ...b
  }, C) => {
    const { _id: _, titleMounted: x, bodyMounted: E, shouldLockScroll: j, setTitleMounted: $, setBodyMounted: I } = gp({ id: r, transitionProps: o, opened: t, trapFocus: s, closeOnEscape: i, onClose: n, returnFocus: a }), { key: O, ...B } = S || {};
    return /* @__PURE__ */ c.jsx(ps, { ...d, withinPortal: u, children: /* @__PURE__ */ c.jsx(
      mp,
      {
        value: {
          opened: t,
          onClose: n,
          closeOnClickOutside: l,
          transitionProps: { ...o, keepMounted: e },
          getTitleId: () => `${_}-title`,
          getBodyId: () => `${_}-body`,
          titleMounted: x,
          bodyMounted: E,
          setTitleMounted: $,
          setBodyMounted: I,
          trapFocus: s,
          closeOnEscape: i,
          zIndex: p,
          unstyled: w
        },
        children: /* @__PURE__ */ c.jsx(
          Yi,
          {
            enabled: j && f,
            ...B,
            children: /* @__PURE__ */ c.jsx(
              k,
              {
                ref: C,
                ...b,
                __vars: {
                  ...v,
                  "--mb-z-index": (p || $n("modal")).toString(),
                  "--mb-shadow": zo(y),
                  "--mb-padding": Er(g)
                },
                children: m
              }
            )
          },
          O
        )
      }
    ) });
  }
);
function vp() {
  const e = ht();
  return W(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []), e.getBodyId();
}
var Qt = { title: "m_615af6c9", header: "m_b5489c3c", inner: "m_60c222c7", content: "m_fd1ab0aa", close: "m_606cb269", body: "m_5df29311" };
const Ga = se(
  ({ className: e, ...t }, n) => {
    const r = vp(), o = ht();
    return /* @__PURE__ */ c.jsx(
      k,
      {
        ref: n,
        ...t,
        id: r,
        className: Te({ [Qt.body]: !o.unstyled }, e)
      }
    );
  }
);
Ga.displayName = "@mantine/core/ModalBaseBody";
const Xa = se(
  ({ className: e, onClick: t, ...n }, r) => {
    const o = ht();
    return /* @__PURE__ */ c.jsx(
      Or,
      {
        ref: r,
        ...n,
        onClick: (s) => {
          o.onClose(), t == null || t(s);
        },
        className: Te({ [Qt.close]: !o.unstyled }, e),
        unstyled: o.unstyled
      }
    );
  }
);
Xa.displayName = "@mantine/core/ModalBaseCloseButton";
const bp = se(
  ({ transitionProps: e, className: t, innerProps: n, onKeyDown: r, style: o, ...s }, i) => {
    const a = ht();
    return /* @__PURE__ */ c.jsx(
      on,
      {
        mounted: a.opened,
        transition: "pop",
        ...a.transitionProps,
        ...e,
        children: (l) => /* @__PURE__ */ c.jsx(
          "div",
          {
            ...n,
            className: Te({ [Qt.inner]: !a.unstyled }, n.className),
            children: /* @__PURE__ */ c.jsx(Nr, { active: a.opened && a.trapFocus, innerRef: i, children: /* @__PURE__ */ c.jsx(
              rs,
              {
                ...s,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                "aria-describedby": a.bodyMounted ? a.getBodyId() : void 0,
                "aria-labelledby": a.titleMounted ? a.getTitleId() : void 0,
                style: [o, l],
                className: Te({ [Qt.content]: !a.unstyled }, t),
                unstyled: a.unstyled,
                children: s.children
              }
            ) })
          }
        )
      }
    );
  }
), Ka = se(
  ({ className: e, ...t }, n) => {
    const r = ht();
    return /* @__PURE__ */ c.jsx(
      k,
      {
        component: "header",
        ref: n,
        className: Te({ [Qt.header]: !r.unstyled }, e),
        ...t
      }
    );
  }
);
Ka.displayName = "@mantine/core/ModalBaseHeader";
const xp = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function wp(e) {
  const t = ht();
  return { ...xp, ...t.transitionProps, ...e };
}
const qa = se(
  ({ onClick: e, transitionProps: t, style: n, ...r }, o) => {
    const s = ht(), i = wp(t);
    return /* @__PURE__ */ c.jsx(on, { mounted: s.opened, ...i, transition: "fade", children: (a) => /* @__PURE__ */ c.jsx(
      gs,
      {
        ref: o,
        fixed: !0,
        style: [n, a],
        zIndex: s.zIndex,
        unstyled: s.unstyled,
        onClick: (l) => {
          e == null || e(l), s.closeOnClickOutside && s.onClose();
        },
        ...r
      }
    ) });
  }
);
qa.displayName = "@mantine/core/ModalBaseOverlay";
function Cp() {
  const e = ht();
  return W(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []), e.getTitleId();
}
const Ja = se(
  ({ className: e, ...t }, n) => {
    const r = Cp(), o = ht();
    return /* @__PURE__ */ c.jsx(
      k,
      {
        component: "h2",
        ref: n,
        className: Te({ [Qt.title]: !o.unstyled }, e),
        ...t,
        id: r
      }
    );
  }
);
Ja.displayName = "@mantine/core/ModalBaseTitle";
function Sp({ children: e }) {
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: e });
}
const [_p, Fr] = bl({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var Ve = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const ai = {}, jp = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${ot(t)} - ${R(2)})`
  }
}), Mr = le((e, t) => {
  const n = K("InputDescription", ai, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    size: u,
    __staticSelector: d,
    __inheritStyles: f = !0,
    variant: m,
    ...p
  } = K("InputDescription", ai, n), y = Fr(), g = ue({
    name: ["InputWrapper", d],
    props: n,
    classes: Ve,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    rootSelector: "description",
    vars: l,
    varsResolver: jp
  }), v = f && (y == null ? void 0 : y.getStyles) || g;
  return /* @__PURE__ */ c.jsx(
    k,
    {
      component: "p",
      ref: t,
      variant: m,
      size: u,
      ...v("description", y != null && y.getStyles ? { className: o, style: s } : void 0),
      ...p
    }
  );
});
Mr.classes = Ve;
Mr.displayName = "@mantine/core/InputDescription";
const Ep = {}, Tp = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${ot(t)} - ${R(2)})`
  }
}), Dr = le((e, t) => {
  const n = K("InputError", Ep, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    size: u,
    __staticSelector: d,
    __inheritStyles: f = !0,
    variant: m,
    ...p
  } = n, y = ue({
    name: ["InputWrapper", d],
    props: n,
    classes: Ve,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    rootSelector: "error",
    vars: l,
    varsResolver: Tp
  }), g = Fr(), v = f && (g == null ? void 0 : g.getStyles) || y;
  return /* @__PURE__ */ c.jsx(
    k,
    {
      component: "p",
      ref: t,
      variant: m,
      size: u,
      ...v("error", g != null && g.getStyles ? { className: o, style: s } : void 0),
      ...p
    }
  );
});
Dr.classes = Ve;
Dr.displayName = "@mantine/core/InputError";
const ci = {
  labelElement: "label"
}, Rp = (e, { size: t }) => ({
  label: {
    "--input-label-size": ot(t),
    "--input-asterisk-color": void 0
  }
}), Br = le((e, t) => {
  const n = K("InputLabel", ci, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    labelElement: u,
    size: d,
    required: f,
    htmlFor: m,
    onMouseDown: p,
    children: y,
    __staticSelector: g,
    variant: v,
    mod: w,
    ...S
  } = K("InputLabel", ci, n), b = ue({
    name: ["InputWrapper", g],
    props: n,
    classes: Ve,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    rootSelector: "label",
    vars: l,
    varsResolver: Rp
  }), C = Fr(), _ = (C == null ? void 0 : C.getStyles) || b;
  return /* @__PURE__ */ c.jsxs(
    k,
    {
      ..._("label", C != null && C.getStyles ? { className: o, style: s } : void 0),
      component: u,
      variant: v,
      size: d,
      ref: t,
      htmlFor: u === "label" ? m : void 0,
      mod: [{ required: f }, w],
      onMouseDown: (x) => {
        p == null || p(x), !x.defaultPrevented && x.detail > 1 && x.preventDefault();
      },
      ...S,
      children: [
        y,
        f && /* @__PURE__ */ c.jsx("span", { ..._("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
Br.classes = Ve;
Br.displayName = "@mantine/core/InputLabel";
const li = {}, ys = le((e, t) => {
  const n = K("InputPlaceholder", li, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    __staticSelector: u,
    variant: d,
    error: f,
    mod: m,
    ...p
  } = K("InputPlaceholder", li, n), y = ue({
    name: ["InputPlaceholder", u],
    props: n,
    classes: Ve,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ c.jsx(
    k,
    {
      ...y("placeholder"),
      mod: [{ error: !!f }, m],
      component: "span",
      variant: d,
      ref: t,
      ...p
    }
  );
});
ys.classes = Ve;
ys.displayName = "@mantine/core/InputPlaceholder";
function Ap(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((l) => l === "input"), o = e.slice(0, r), s = e.slice(r + 1), i = t && o.includes("description") || n && o.includes("error");
  return { offsetBottom: t && s.includes("description") || n && s.includes("error"), offsetTop: i };
}
const kp = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, $p = (e, { size: t }) => ({
  label: {
    "--input-label-size": ot(t),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${ot(t)} - ${R(2)})`
  },
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${ot(t)} - ${R(2)})`
  }
}), vs = le((e, t) => {
  const n = K("InputWrapper", kp, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    size: u,
    variant: d,
    __staticSelector: f,
    inputContainer: m,
    inputWrapperOrder: p,
    label: y,
    error: g,
    description: v,
    labelProps: w,
    descriptionProps: S,
    errorProps: b,
    labelElement: C,
    children: _,
    withAsterisk: x,
    id: E,
    required: j,
    __stylesApiProps: $,
    mod: I,
    ...O
  } = n, B = ue({
    name: ["InputWrapper", f],
    props: $ || n,
    classes: Ve,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: $p
  }), G = {
    size: u,
    variant: d,
    __staticSelector: f
  }, F = Rr(E), q = typeof x == "boolean" ? x : j, Y = (b == null ? void 0 : b.id) || `${F}-error`, V = (S == null ? void 0 : S.id) || `${F}-description`, ee = F, D = !!g && typeof g != "boolean", A = !!v, U = `${D ? Y : ""} ${A ? V : ""}`, X = U.trim().length > 0 ? U.trim() : void 0, ne = (w == null ? void 0 : w.id) || `${F}-label`, ie = y && /* @__PURE__ */ c.jsx(
    Br,
    {
      labelElement: C,
      id: ne,
      htmlFor: ee,
      required: q,
      ...G,
      ...w,
      children: y
    },
    "label"
  ), pe = A && /* @__PURE__ */ c.jsx(
    Mr,
    {
      ...S,
      ...G,
      size: (S == null ? void 0 : S.size) || G.size,
      id: (S == null ? void 0 : S.id) || V,
      children: v
    },
    "description"
  ), ae = /* @__PURE__ */ c.jsx(Li, { children: m(_) }, "input"), me = D && /* @__PURE__ */ wc(
    Dr,
    {
      ...b,
      ...G,
      size: (b == null ? void 0 : b.size) || G.size,
      key: "error",
      id: (b == null ? void 0 : b.id) || Y
    },
    g
  ), Le = p.map((Oe) => {
    switch (Oe) {
      case "label":
        return ie;
      case "input":
        return ae;
      case "description":
        return pe;
      case "error":
        return me;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ c.jsx(
    _p,
    {
      value: {
        getStyles: B,
        describedBy: X,
        inputId: ee,
        labelId: ne,
        ...Ap(p, { hasDescription: A, hasError: D })
      },
      children: /* @__PURE__ */ c.jsx(
        k,
        {
          ref: t,
          variant: d,
          size: u,
          mod: [{ error: !!g }, I],
          ...B("root"),
          ...O,
          children: Le
        }
      )
    }
  );
});
vs.classes = Ve;
vs.displayName = "@mantine/core/InputWrapper";
const Pp = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Np = (e, t, n) => ({
  wrapper: {
    "--input-margin-top": n.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": n.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Ie(t.size, "input-height"),
    "--input-fz": ot(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : it(t.radius),
    "--input-left-section-width": t.leftSectionWidth !== void 0 ? R(t.leftSectionWidth) : void 0,
    "--input-right-section-width": t.rightSectionWidth !== void 0 ? R(t.rightSectionWidth) : void 0,
    "--input-padding-y": t.multiline ? Ie(t.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": t.leftSectionPointerEvents,
    "--input-right-section-pointer-events": t.rightSectionPointerEvents
  }
}), qe = He((e, t) => {
  const n = K("Input", Pp, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    required: l,
    __staticSelector: u,
    __stylesApiProps: d,
    size: f,
    wrapperProps: m,
    error: p,
    disabled: y,
    leftSection: g,
    leftSectionProps: v,
    leftSectionWidth: w,
    rightSection: S,
    rightSectionProps: b,
    rightSectionWidth: C,
    rightSectionPointerEvents: _,
    leftSectionPointerEvents: x,
    variant: E,
    vars: j,
    pointer: $,
    multiline: I,
    radius: O,
    id: B,
    withAria: G,
    withErrorStyles: F,
    mod: q,
    inputSize: Y,
    ...V
  } = n, { styleProps: ee, rest: D } = qo(V), A = Fr(), U = { offsetBottom: A == null ? void 0 : A.offsetBottom, offsetTop: A == null ? void 0 : A.offsetTop }, X = ue({
    name: ["Input", u],
    props: d || n,
    classes: Ve,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    stylesCtx: U,
    rootSelector: "wrapper",
    vars: j,
    varsResolver: Np
  }), ne = G ? {
    required: l,
    disabled: y,
    "aria-invalid": !!p,
    "aria-describedby": A == null ? void 0 : A.describedBy,
    id: (A == null ? void 0 : A.inputId) || B
  } : {};
  return /* @__PURE__ */ c.jsxs(
    k,
    {
      ...X("wrapper"),
      ...ee,
      ...m,
      mod: [
        {
          error: !!p && F,
          pointer: $,
          disabled: y,
          multiline: I,
          "data-with-right-section": !!S,
          "data-with-left-section": !!g
        },
        q
      ],
      variant: E,
      size: f,
      children: [
        g && /* @__PURE__ */ c.jsx(
          "div",
          {
            ...v,
            "data-position": "left",
            ...X("section", {
              className: v == null ? void 0 : v.className,
              style: v == null ? void 0 : v.style
            }),
            children: g
          }
        ),
        /* @__PURE__ */ c.jsx(
          k,
          {
            component: "input",
            ...D,
            ...ne,
            ref: t,
            required: l,
            mod: { disabled: y, error: !!p && F },
            variant: E,
            __size: Y,
            ...X("input")
          }
        ),
        S && /* @__PURE__ */ c.jsx(
          "div",
          {
            ...b,
            "data-position": "right",
            ...X("section", {
              className: b == null ? void 0 : b.className,
              style: b == null ? void 0 : b.style
            }),
            children: S
          }
        )
      ]
    }
  );
});
qe.classes = Ve;
qe.Wrapper = vs;
qe.Label = Br;
qe.Error = Dr;
qe.Description = Mr;
qe.Placeholder = ys;
qe.displayName = "@mantine/core/Input";
function Ip(e, t, n) {
  const r = K(e, t, n), {
    label: o,
    description: s,
    error: i,
    required: a,
    classNames: l,
    styles: u,
    className: d,
    unstyled: f,
    __staticSelector: m,
    __stylesApiProps: p,
    errorProps: y,
    labelProps: g,
    descriptionProps: v,
    wrapperProps: w,
    id: S,
    size: b,
    style: C,
    inputContainer: _,
    inputWrapperOrder: x,
    withAsterisk: E,
    variant: j,
    vars: $,
    mod: I,
    ...O
  } = r, { styleProps: B, rest: G } = qo(O), F = {
    label: o,
    description: s,
    error: i,
    required: a,
    classNames: l,
    className: d,
    __staticSelector: m,
    __stylesApiProps: p || r,
    errorProps: y,
    labelProps: g,
    descriptionProps: v,
    unstyled: f,
    styles: u,
    size: b,
    style: C,
    inputContainer: _,
    inputWrapperOrder: x,
    withAsterisk: E,
    variant: j,
    id: S,
    mod: I,
    ...w
  };
  return {
    ...G,
    classNames: l,
    styles: u,
    unstyled: f,
    wrapperProps: { ...F, ...B },
    inputProps: {
      required: a,
      classNames: l,
      styles: u,
      unstyled: f,
      size: b,
      __staticSelector: m,
      __stylesApiProps: p || r,
      error: i,
      variant: j,
      id: S
    }
  };
}
const Lp = {
  __staticSelector: "InputBase",
  withAria: !0
}, sn = He((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = Ip("InputBase", Lp, e);
  return /* @__PURE__ */ c.jsx(qe.Wrapper, { ...r, children: /* @__PURE__ */ c.jsx(qe, { ...n, ...o, ref: t }) });
});
sn.classes = { ...qe.classes, ...qe.Wrapper.classes };
sn.displayName = "@mantine/core/InputBase";
const Op = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" }
};
var Za = { root: "m_8bffd616" };
const Fp = {}, Rn = He((e, t) => {
  const n = K("Flex", Fp, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    gap: u,
    rowGap: d,
    columnGap: f,
    align: m,
    justify: p,
    wrap: y,
    direction: g,
    ...v
  } = n, w = ue({
    name: "Flex",
    classes: Za,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: l
  }), S = jt(), b = la(), C = ca({
    styleProps: { gap: u, rowGap: d, columnGap: f, align: m, justify: p, wrap: y, direction: g },
    theme: S,
    data: Op
  });
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    C.hasResponsiveStyles && /* @__PURE__ */ c.jsx(
      aa,
      {
        selector: `.${b}`,
        styles: C.styles,
        media: C.media
      }
    ),
    /* @__PURE__ */ c.jsx(
      k,
      {
        ref: t,
        ...w("root", {
          className: b,
          style: jr(C.inlineStyles)
        }),
        ...v
      }
    )
  ] });
});
Rn.classes = Za;
Rn.displayName = "@mantine/core/Flex";
var Qa = { root: "m_66836ed3", wrapper: "m_a5d60502", body: "m_667c2793", title: "m_6a03f287", label: "m_698f4f23", icon: "m_667f2a6a", message: "m_7fa78076", closeButton: "m_87f54839" };
const Mp = {}, Dp = (e, { radius: t, color: n, variant: r, autoContrast: o }) => {
  const s = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    variant: r || "light",
    autoContrast: o
  });
  return {
    root: {
      "--alert-radius": t === void 0 ? void 0 : it(t),
      "--alert-bg": n || r ? s.background : void 0,
      "--alert-color": s.color,
      "--alert-bd": n || r ? s.border : void 0
    }
  };
}, xr = le((e, t) => {
  const n = K("Alert", Mp, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    radius: u,
    color: d,
    title: f,
    children: m,
    id: p,
    icon: y,
    withCloseButton: g,
    onClose: v,
    closeButtonLabel: w,
    variant: S,
    autoContrast: b,
    ...C
  } = n, _ = ue({
    name: "Alert",
    classes: Qa,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: Dp
  }), x = Rr(p), E = f && `${x}-title` || void 0, j = `${x}-body`;
  return /* @__PURE__ */ c.jsx(
    k,
    {
      id: x,
      ..._("root", { variant: S }),
      variant: S,
      ref: t,
      ...C,
      role: "alert",
      "aria-describedby": j,
      "aria-labelledby": E,
      children: /* @__PURE__ */ c.jsxs("div", { ..._("wrapper"), children: [
        y && /* @__PURE__ */ c.jsx("div", { ..._("icon"), children: y }),
        /* @__PURE__ */ c.jsxs("div", { ..._("body"), children: [
          f && /* @__PURE__ */ c.jsx("div", { ..._("title"), "data-with-close-button": g || void 0, children: /* @__PURE__ */ c.jsx("span", { id: E, ..._("label"), children: f }) }),
          m && /* @__PURE__ */ c.jsx("div", { id: j, ..._("message"), "data-variant": S, children: m })
        ] }),
        g && /* @__PURE__ */ c.jsx(
          Or,
          {
            ..._("closeButton"),
            onClick: v,
            variant: "transparent",
            size: 16,
            iconSize: 16,
            "aria-label": w,
            unstyled: a
          }
        )
      ] })
    }
  );
});
xr.classes = Qa;
xr.displayName = "@mantine/core/Alert";
var ec = { root: "m_b6d8b162" };
function Bp(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const Hp = {
  inherit: !1
}, zp = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: s }) => ({
  root: {
    "--text-fz": ot(o),
    "--text-lh": Sl(o),
    "--text-gradient": t === "gradient" ? jo(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": s ? hr(s, e) : void 0
  }
}), oe = He((e, t) => {
  const n = K("Text", Hp, e), {
    lineClamp: r,
    truncate: o,
    inline: s,
    inherit: i,
    gradient: a,
    span: l,
    __staticSelector: u,
    vars: d,
    className: f,
    style: m,
    classNames: p,
    styles: y,
    unstyled: g,
    variant: v,
    mod: w,
    size: S,
    ...b
  } = n, C = ue({
    name: ["Text", u],
    props: n,
    classes: ec,
    className: f,
    style: m,
    classNames: p,
    styles: y,
    unstyled: g,
    vars: d,
    varsResolver: zp
  });
  return /* @__PURE__ */ c.jsx(
    k,
    {
      ...C("root", { focusable: !0 }),
      ref: t,
      component: l ? "span" : "p",
      variant: v,
      mod: [
        {
          "data-truncate": Bp(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": s,
          "data-inherit": i
        },
        w
      ],
      size: S,
      ...b
    }
  );
});
oe.classes = ec;
oe.displayName = "@mantine/core/Text";
var tc = { root: "m_849cf0da" };
const Vp = {
  underline: "hover"
}, Fn = He((e, t) => {
  const { underline: n, className: r, unstyled: o, mod: s, ...i } = K(
    "Anchor",
    Vp,
    e
  );
  return /* @__PURE__ */ c.jsx(
    oe,
    {
      component: "a",
      ref: t,
      className: Te({ [tc.root]: !o }, r),
      ...i,
      mod: [{ underline: n }, s],
      __staticSelector: "Anchor",
      unstyled: o
    }
  );
});
Fn.classes = tc;
Fn.displayName = "@mantine/core/Anchor";
var Hr = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const ui = {
  orientation: "horizontal"
}, Wp = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": R(t) }
}), bs = le((e, t) => {
  const n = K("ButtonGroup", ui, e), {
    className: r,
    style: o,
    classNames: s,
    styles: i,
    unstyled: a,
    orientation: l,
    vars: u,
    borderWidth: d,
    variant: f,
    mod: m,
    ...p
  } = K("ButtonGroup", ui, e), y = ue({
    name: "ButtonGroup",
    props: n,
    classes: Hr,
    className: r,
    style: o,
    classNames: s,
    styles: i,
    unstyled: a,
    vars: u,
    varsResolver: Wp,
    rootSelector: "group"
  });
  return /* @__PURE__ */ c.jsx(
    k,
    {
      ...y("group"),
      ref: t,
      variant: f,
      mod: [{ "data-orientation": l }, m],
      role: "group",
      ...p
    }
  );
});
bs.classes = Hr;
bs.displayName = "@mantine/core/ButtonGroup";
const Up = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${R(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, Yp = {}, Gp = (e, { radius: t, color: n, gradient: r, variant: o, size: s, justify: i, autoContrast: a }) => {
  const l = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    gradient: r,
    variant: o || "filled",
    autoContrast: a
  });
  return {
    root: {
      "--button-justify": i,
      "--button-height": Ie(s, "button-height"),
      "--button-padding-x": Ie(s, "button-padding-x"),
      "--button-fz": s != null && s.includes("compact") ? ot(s.replace("compact-", "")) : ot(s),
      "--button-radius": t === void 0 ? void 0 : it(t),
      "--button-bg": n || o ? l.background : void 0,
      "--button-hover": n || o ? l.hover : void 0,
      "--button-color": l.color,
      "--button-bd": n || o ? l.border : void 0,
      "--button-hover-color": n || o ? l.hoverColor : void 0
    }
  };
}, en = He((e, t) => {
  const n = K("Button", Yp, e), {
    style: r,
    vars: o,
    className: s,
    color: i,
    disabled: a,
    children: l,
    leftSection: u,
    rightSection: d,
    fullWidth: f,
    variant: m,
    radius: p,
    loading: y,
    loaderProps: g,
    gradient: v,
    classNames: w,
    styles: S,
    unstyled: b,
    "data-disabled": C,
    autoContrast: _,
    mod: x,
    ...E
  } = n, j = ue({
    name: "Button",
    props: n,
    classes: Hr,
    className: s,
    style: r,
    classNames: w,
    styles: S,
    unstyled: b,
    vars: o,
    varsResolver: Gp
  }), $ = !!u, I = !!d;
  return /* @__PURE__ */ c.jsxs(
    Ln,
    {
      ref: t,
      ...j("root", { active: !a && !y && !C }),
      unstyled: b,
      variant: m,
      disabled: a || y,
      mod: [
        {
          disabled: a || C,
          loading: y,
          block: f,
          "with-left-section": $,
          "with-right-section": I
        },
        x
      ],
      ...E,
      children: [
        /* @__PURE__ */ c.jsx(on, { mounted: !!y, transition: Up, duration: 150, children: (O) => /* @__PURE__ */ c.jsx(k, { component: "span", ...j("loader", { style: O }), "aria-hidden": !0, children: /* @__PURE__ */ c.jsx(
          St,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...g
          }
        ) }) }),
        /* @__PURE__ */ c.jsxs("span", { ...j("inner"), children: [
          u && /* @__PURE__ */ c.jsx(k, { component: "span", ...j("section"), mod: { position: "left" }, children: u }),
          /* @__PURE__ */ c.jsx(k, { component: "span", mod: { loading: y }, ...j("label"), children: l }),
          d && /* @__PURE__ */ c.jsx(k, { component: "span", ...j("section"), mod: { position: "right" }, children: d })
        ] })
      ]
    }
  );
});
en.classes = Hr;
en.displayName = "@mantine/core/Button";
en.Group = bs;
const Xp = {
  multiple: !1
}, nc = se(
  (e, t) => {
    const {
      onChange: n,
      children: r,
      multiple: o,
      accept: s,
      name: i,
      form: a,
      resetRef: l,
      disabled: u,
      capture: d,
      inputProps: f,
      ...m
    } = K("FileButton", Xp, e), p = J(), y = () => {
      var w;
      !u && ((w = p.current) == null || w.click());
    }, g = (w) => {
      n(o ? Array.from(w.currentTarget.files) : w.currentTarget.files[0] || null);
    };
    return Vo(l, () => {
      p.current.value = "";
    }), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      r({ onClick: y, ...m }),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          style: { display: "none" },
          type: "file",
          accept: s,
          multiple: o,
          onChange: g,
          ref: at(t, p),
          name: i,
          form: a,
          capture: d,
          ...f
        }
      )
    ] });
  }
);
nc.displayName = "@mantine/core/FileButton";
var rc = { root: "m_9e117634" };
const Kp = {}, qp = (e, { radius: t, fit: n }) => ({
  root: {
    "--image-radius": t === void 0 ? void 0 : it(t),
    "--image-object-fit": n
  }
}), _t = He((e, t) => {
  const n = K("Image", Kp, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    onError: u,
    src: d,
    radius: f,
    fit: m,
    fallbackSrc: p,
    mod: y,
    ...g
  } = n, [v, w] = P(!d);
  W(() => w(!d), [d]);
  const S = ue({
    name: "Image",
    classes: rc,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: qp
  });
  return v && p ? /* @__PURE__ */ c.jsx(
    k,
    {
      component: "img",
      ref: t,
      src: p,
      ...S("root"),
      onError: u,
      mod: ["fallback", y],
      ...g
    }
  ) : /* @__PURE__ */ c.jsx(
    k,
    {
      component: "img",
      ref: t,
      ...S("root"),
      src: d,
      onError: (b) => {
        u == null || u(b), w(!0);
      },
      mod: y,
      ...g
    }
  );
});
_t.classes = rc;
_t.displayName = "@mantine/core/Image";
function No() {
  return No = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, No.apply(null, arguments);
}
function Jp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var Zp = tn, Qp = function(t) {
  var n = N.useRef(t);
  return Zp(function() {
    n.current = t;
  }), n;
}, di = function(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t.current = n;
}, em = function(t, n) {
  var r = J();
  return H(function(o) {
    t.current = o, r.current && di(r.current, null), r.current = n, n && di(n, o);
  }, [n]);
}, fi = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, tm = function(t) {
  Object.keys(fi).forEach(function(n) {
    t.style.setProperty(n, fi[n], "important");
  });
}, pi = tm, je = null, mi = function(t, n) {
  var r = t.scrollHeight;
  return n.sizingStyle.boxSizing === "border-box" ? r + n.borderSize : r - n.paddingSize;
};
function nm(e, t, n, r) {
  n === void 0 && (n = 1), r === void 0 && (r = 1 / 0), je || (je = document.createElement("textarea"), je.setAttribute("tabindex", "-1"), je.setAttribute("aria-hidden", "true"), pi(je)), je.parentNode === null && document.body.appendChild(je);
  var o = e.paddingSize, s = e.borderSize, i = e.sizingStyle, a = i.boxSizing;
  Object.keys(i).forEach(function(m) {
    var p = m;
    je.style[p] = i[p];
  }), pi(je), je.value = t;
  var l = mi(je, e);
  je.value = t, l = mi(je, e), je.value = "x";
  var u = je.scrollHeight - o, d = u * n;
  a === "border-box" && (d = d + o + s), l = Math.max(d, l);
  var f = u * r;
  return a === "border-box" && (f = f + o + s), l = Math.min(f, l), [l, u];
}
var hi = function() {
}, rm = function(t, n) {
  return t.reduce(function(r, o) {
    return r[o] = n[o], r;
  }, {});
}, om = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
], sm = !!document.documentElement.currentStyle, im = function(t) {
  var n = window.getComputedStyle(t);
  if (n === null)
    return null;
  var r = rm(om, n), o = r.boxSizing;
  if (o === "")
    return null;
  sm && o === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), i = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: s,
    borderSize: i
  };
}, am = im;
function oc(e, t, n) {
  var r = Qp(n);
  N.useLayoutEffect(function() {
    var o = function(i) {
      return r.current(i);
    };
    if (e)
      return e.addEventListener(t, o), function() {
        return e.removeEventListener(t, o);
      };
  }, []);
}
var cm = function(t) {
  oc(window, "resize", t);
}, lm = function(t) {
  oc(document.fonts, "loadingdone", t);
}, um = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], dm = function(t, n) {
  var r = t.cacheMeasurements, o = t.maxRows, s = t.minRows, i = t.onChange, a = i === void 0 ? hi : i, l = t.onHeightChange, u = l === void 0 ? hi : l, d = Jp(t, um), f = d.value !== void 0, m = N.useRef(null), p = em(m, n), y = N.useRef(0), g = N.useRef(), v = function() {
    var b = m.current, C = r && g.current ? g.current : am(b);
    if (C) {
      g.current = C;
      var _ = nm(C, b.value || b.placeholder || "x", s, o), x = _[0], E = _[1];
      y.current !== x && (y.current = x, b.style.setProperty("height", x + "px", "important"), u(x, {
        rowHeight: E
      }));
    }
  }, w = function(b) {
    f || v(), a(b);
  };
  return N.useLayoutEffect(v), cm(v), lm(v), /* @__PURE__ */ N.createElement("textarea", No({}, d, {
    onChange: w,
    ref: p
  }));
}, fm = /* @__PURE__ */ N.forwardRef(dm);
const pm = {}, zr = le((e, t) => {
  const { autosize: n, maxRows: r, minRows: o, __staticSelector: s, resize: i, ...a } = K(
    "Textarea",
    pm,
    e
  ), l = n && Jl() !== "test", u = l ? { maxRows: r, minRows: o } : {};
  return /* @__PURE__ */ c.jsx(
    sn,
    {
      component: l ? fm : "textarea",
      ref: t,
      ...a,
      __staticSelector: s || "Textarea",
      multiline: !0,
      "data-no-overflow": n && r === void 0 || void 0,
      __vars: { "--input-resize": i },
      ...u
    }
  );
});
zr.classes = sn.classes;
zr.displayName = "@mantine/core/Textarea";
const [mm, an] = kn(
  "Modal component was not found in tree"
);
var gt = { root: "m_9df02822", content: "m_54c44539", inner: "m_1f958f16", header: "m_d0e2b9cd" };
const hm = {}, Vr = le((e, t) => {
  const n = K("ModalBody", hm, e), { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n, u = an();
  return /* @__PURE__ */ c.jsx(
    Ga,
    {
      ref: t,
      ...u.getStyles("body", { classNames: r, style: s, styles: i, className: o }),
      ...l
    }
  );
});
Vr.classes = gt;
Vr.displayName = "@mantine/core/ModalBody";
const gm = {}, Wr = le((e, t) => {
  const n = K("ModalCloseButton", gm, e), { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n, u = an();
  return /* @__PURE__ */ c.jsx(
    Xa,
    {
      ref: t,
      ...u.getStyles("close", { classNames: r, style: s, styles: i, className: o }),
      ...l
    }
  );
});
Wr.classes = gt;
Wr.displayName = "@mantine/core/ModalCloseButton";
const ym = {}, Ur = le((e, t) => {
  const n = K("ModalContent", ym, e), { classNames: r, className: o, style: s, styles: i, vars: a, children: l, ...u } = n, d = an(), f = d.scrollAreaComponent || Sp;
  return /* @__PURE__ */ c.jsx(
    bp,
    {
      ...d.getStyles("content", { className: o, style: s, styles: i, classNames: r }),
      innerProps: d.getStyles("inner", { className: o, style: s, styles: i, classNames: r }),
      "data-full-screen": d.fullScreen || void 0,
      "data-modal-content": !0,
      ref: t,
      ...u,
      children: /* @__PURE__ */ c.jsx(
        f,
        {
          style: {
            maxHeight: d.fullScreen ? "100dvh" : `calc(100dvh - (${R(d.yOffset)} * 2))`
          },
          children: l
        }
      )
    }
  );
});
Ur.classes = gt;
Ur.displayName = "@mantine/core/ModalContent";
const vm = {}, Yr = le((e, t) => {
  const n = K("ModalHeader", vm, e), { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n, u = an();
  return /* @__PURE__ */ c.jsx(
    Ka,
    {
      ref: t,
      ...u.getStyles("header", { classNames: r, style: s, styles: i, className: o }),
      ...l
    }
  );
});
Yr.classes = gt;
Yr.displayName = "@mantine/core/ModalHeader";
const bm = {}, Gr = le((e, t) => {
  const n = K("ModalOverlay", bm, e), { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n, u = an();
  return /* @__PURE__ */ c.jsx(
    qa,
    {
      ref: t,
      ...u.getStyles("overlay", { classNames: r, style: s, styles: i, className: o }),
      ...l
    }
  );
});
Gr.classes = gt;
Gr.displayName = "@mantine/core/ModalOverlay";
const xm = {
  __staticSelector: "Modal",
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: $n("modal"),
  transitionProps: { duration: 200, transition: "pop" },
  yOffset: "5dvh"
}, wm = (e, { radius: t, size: n, yOffset: r, xOffset: o }) => ({
  root: {
    "--modal-radius": t === void 0 ? void 0 : it(t),
    "--modal-size": Ie(n, "modal-size"),
    "--modal-y-offset": R(r),
    "--modal-x-offset": R(o)
  }
}), Xr = le((e, t) => {
  const n = K("ModalRoot", xm, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    yOffset: u,
    scrollAreaComponent: d,
    radius: f,
    fullScreen: m,
    centered: p,
    xOffset: y,
    __staticSelector: g,
    ...v
  } = n, w = ue({
    name: g,
    classes: gt,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: wm
  });
  return /* @__PURE__ */ c.jsx(mm, { value: { yOffset: u, scrollAreaComponent: d, getStyles: w, fullScreen: m }, children: /* @__PURE__ */ c.jsx(
    yp,
    {
      ref: t,
      ...w("root"),
      "data-full-screen": m || void 0,
      "data-centered": p || void 0,
      unstyled: a,
      ...v
    }
  ) });
});
Xr.classes = gt;
Xr.displayName = "@mantine/core/ModalRoot";
const Cm = {}, Kr = le((e, t) => {
  const n = K("ModalTitle", Cm, e), { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n, u = an();
  return /* @__PURE__ */ c.jsx(
    Ja,
    {
      ref: t,
      ...u.getStyles("title", { classNames: r, style: s, styles: i, className: o }),
      ...l
    }
  );
});
Kr.classes = gt;
Kr.displayName = "@mantine/core/ModalTitle";
const Sm = {
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: $n("modal"),
  transitionProps: { duration: 200, transition: "fade-down" },
  withOverlay: !0,
  withCloseButton: !0
}, ct = le((e, t) => {
  const {
    title: n,
    withOverlay: r,
    overlayProps: o,
    withCloseButton: s,
    closeButtonProps: i,
    children: a,
    radius: l,
    ...u
  } = K("Modal", Sm, e), d = !!n || s;
  return /* @__PURE__ */ c.jsxs(Xr, { ref: t, radius: l, ...u, children: [
    r && /* @__PURE__ */ c.jsx(Gr, { ...o }),
    /* @__PURE__ */ c.jsxs(Ur, { radius: l, children: [
      d && /* @__PURE__ */ c.jsxs(Yr, { children: [
        n && /* @__PURE__ */ c.jsx(Kr, { children: n }),
        s && /* @__PURE__ */ c.jsx(Wr, { ...i })
      ] }),
      /* @__PURE__ */ c.jsx(Vr, { children: a })
    ] })
  ] });
});
ct.classes = gt;
ct.displayName = "@mantine/core/Modal";
ct.Root = Xr;
ct.Overlay = Gr;
ct.Content = Ur;
ct.Body = Vr;
ct.Header = Yr;
ct.Title = Kr;
ct.CloseButton = Wr;
var sc = { root: "m_6d731127" };
const _m = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, jm = (e, { gap: t, align: n, justify: r }) => ({
  root: {
    "--stack-gap": Er(t),
    "--stack-align": n,
    "--stack-justify": r
  }
}), Mn = le((e, t) => {
  const n = K("Stack", _m, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: l,
    align: u,
    justify: d,
    gap: f,
    variant: m,
    ...p
  } = n, y = ue({
    name: "Stack",
    props: n,
    classes: sc,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: jm
  });
  return /* @__PURE__ */ c.jsx(k, { ref: t, ...y("root"), variant: m, ...p });
});
Mn.classes = sc;
Mn.displayName = "@mantine/core/Stack";
const Em = {}, qr = le((e, t) => {
  const n = K("TextInput", Em, e);
  return /* @__PURE__ */ c.jsx(sn, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
qr.classes = sn.classes;
qr.displayName = "@mantine/core/TextInput";
const Ue = /* @__PURE__ */ new Map(), wn = { current: null };
function Tm(e, t) {
  const [n, r] = P(() => {
    try {
      const i = window.localStorage.getItem(e);
      return i ? JSON.parse(i) : t;
    } catch (i) {
      return console.error("Error reading from localStorage:", i), t;
    }
  }), o = H(
    (i) => {
      var a;
      (a = Ue.get(e)) == null || a.forEach((l) => l(i));
    },
    [e]
  ), s = H(
    (i) => {
      try {
        r((a) => {
          const l = i instanceof Function ? i(a) : i;
          return window.localStorage.setItem(e, JSON.stringify(l)), o(l), window.dispatchEvent(
            new StorageEvent("storage", { key: e, newValue: JSON.stringify(l) })
          ), l;
        });
      } catch (a) {
        console.error("Error writing to localStorage:", a);
      }
    },
    [e, o]
  );
  return W(() => {
    const i = (a) => {
      r(
        (l) => JSON.stringify(l) !== JSON.stringify(a) ? a : l
      );
    };
    return Ue.has(e) || Ue.set(e, []), Ue.get(e).push(i), wn.current || (wn.current = setInterval(() => {
      Ue.forEach((a, l) => {
        var u;
        try {
          const d = window.localStorage.getItem(l);
          if (d) {
            const f = JSON.parse(d);
            (u = Ue.get(l)) == null || u.forEach((m) => m(f));
          }
        } catch (d) {
          console.error("Error in localStorage polling:", d);
        }
      });
    }, 500)), () => {
      var a, l;
      Ue.set(
        e,
        ((a = Ue.get(e)) == null ? void 0 : a.filter((u) => u !== i)) || []
      ), ((l = Ue.get(e)) == null ? void 0 : l.length) === 0 && Ue.delete(e), Ue.size === 0 && wn.current && (clearInterval(wn.current), wn.current = null);
    };
  }, [e]), [n, s];
}
const Rm = "_searchIconContainer_18cy8_67", Am = "_labelContainer_18cy8_77", km = "_userText_18cy8_83", ge = {
  "exchange-list": "_exchange-list_18cy8_1",
  "exchange-container": "_exchange-container_18cy8_6",
  "exchange-input-text": "_exchange-input-text_18cy8_11",
  "exchange-divider": "_exchange-divider_18cy8_16",
  "exchange-input-container": "_exchange-input-container_18cy8_21",
  "exchange-output-container": "_exchange-output-container_18cy8_27",
  "exchange-output-content": "_exchange-output-content_18cy8_32",
  "avatar-text": "_avatar-text_18cy8_39",
  "user-avatar": "_user-avatar_18cy8_45",
  "assistant-avatar": "_assistant-avatar_18cy8_56",
  searchIconContainer: Rm,
  labelContainer: Am,
  userText: km,
  "message-loading-text": "_message-loading-text_18cy8_94",
  "message-loading-text-dark": "_message-loading-text-dark_18cy8_100",
  "feedback-container": "_feedback-container_18cy8_106",
  "feedback-container-dark": "_feedback-container-dark_18cy8_115",
  "ask-person-container": "_ask-person-container_18cy8_123",
  "feedback-container-selected": "_feedback-container-selected_18cy8_144",
  "feedback-container-dark-selected": "_feedback-container-dark-selected_18cy8_149",
  "feedback-logo": "_feedback-logo_18cy8_154",
  "ask-a-person-text": "_ask-a-person-text_18cy8_159"
}, $m = "_logoTypeFill_1dwf8_1", Pm = "_logoTypeFillDark_1dwf8_5", Nm = "_noFill_1dwf8_9", xe = {
  logoTypeFill: $m,
  logoTypeFillDark: Pm,
  noFill: Nm,
  "feedback-logo-color": "_feedback-logo-color_1dwf8_13",
  "feedback-logo-color-dark": "_feedback-logo-color-dark_1dwf8_17"
}, Im = ({ className: e }) => /* @__PURE__ */ c.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ c.jsx(
  "path",
  {
    d: "M14.1672 1.66668H16.3922C16.8638 1.65834 17.3221 1.82346 17.68 2.1307C18.038 2.43793 18.2706 2.8659 18.3338 3.33335V9.16668C18.2706 9.63413 18.038 10.0621 17.68 10.3693C17.3221 10.6766 16.8638 10.8417 16.3922 10.8333H14.1672M8.33385 12.5V15.8333C8.33385 16.4964 8.59724 17.1323 9.06608 17.6011C9.53492 18.07 10.1708 18.3333 10.8338 18.3333L14.1672 10.8333V1.66668H4.76718C4.36524 1.66214 3.9752 1.80301 3.66893 2.06334C3.36265 2.32368 3.16078 2.68593 3.10051 3.08335L1.95051 10.5833C1.91426 10.8222 1.93037 11.0661 1.99773 11.2981C2.06509 11.5302 2.1821 11.7448 2.34063 11.9271C2.49917 12.1094 2.69545 12.2551 2.91587 12.354C3.13629 12.4529 3.37559 12.5028 3.61718 12.5H8.33385Z",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: xe[e]
  }
) }), Lm = ({ className: e }) => /* @__PURE__ */ c.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "19", height: "20", viewBox: "0 0 19 20", fill: "none", children: /* @__PURE__ */ c.jsx(
  "path",
  {
    d: "M5.83366 18.3333H3.33366C2.89163 18.3333 2.46771 18.1577 2.15515 17.8451C1.84259 17.5326 1.66699 17.1087 1.66699 16.6666V10.8333C1.66699 10.3913 1.84259 9.96734 2.15515 9.65478C2.46771 9.34222 2.89163 9.16663 3.33366 9.16663H5.83366M11.667 7.49996V4.16663C11.667 3.50358 11.4036 2.8677 10.9348 2.39886C10.4659 1.93002 9.83003 1.66663 9.16699 1.66663L5.83366 9.16663V18.3333H15.2337C15.6356 18.3378 16.0256 18.197 16.3319 17.9366C16.6382 17.6763 16.8401 17.314 16.9003 16.9166L18.0503 9.41663C18.0866 9.17776 18.0705 8.93386 18.0031 8.70184C17.9357 8.46981 17.8187 8.2552 17.6602 8.07289C17.5017 7.89057 17.3054 7.7449 17.085 7.64597C16.8645 7.54705 16.6252 7.49722 16.3837 7.49996H11.667Z",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: xe[e]
  }
) }), Om = {
  recaptchaSiteKey: "6LfESacpAAAAAIAiwrVpFehgscJonmg1gKhpKg2e"
};
function Jr() {
  return Om;
}
function Fm(e) {
  if (!/^[0-9a-zA-Z-]+$/.test(e))
    throw new Error(
      `[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`
    );
}
const Mm = typeof window < "u" ? tn : W;
function ve(e, t) {
  Mm(() => {
    if (e)
      return window.addEventListener(e, t), () => window.removeEventListener(e, t);
  }, [e]);
}
function Dm(e, t) {
  e && Fm(e), ve(
    `mantine-form:${e}:set-field-value`,
    (n) => t.setFieldValue(n.detail.path, n.detail.value)
  ), ve(
    `mantine-form:${e}:set-values`,
    (n) => t.setValues(n.detail)
  ), ve(
    `mantine-form:${e}:set-initial-values`,
    (n) => t.setInitialValues(n.detail)
  ), ve(
    `mantine-form:${e}:set-errors`,
    (n) => t.setErrors(n.detail)
  ), ve(
    `mantine-form:${e}:set-field-error`,
    (n) => t.setFieldError(n.detail.path, n.detail.error)
  ), ve(
    `mantine-form:${e}:clear-field-error`,
    (n) => t.clearFieldError(n.detail)
  ), ve(`mantine-form:${e}:clear-errors`, t.clearErrors), ve(`mantine-form:${e}:reset`, t.reset), ve(`mantine-form:${e}:validate`, t.validate), ve(
    `mantine-form:${e}:validate-field`,
    (n) => t.validateField(n.detail)
  ), ve(
    `mantine-form:${e}:reorder-list-item`,
    (n) => t.reorderListItem(n.detail.path, n.detail.payload)
  ), ve(
    `mantine-form:${e}:remove-list-item`,
    (n) => t.removeListItem(n.detail.path, n.detail.index)
  ), ve(
    `mantine-form:${e}:insert-list-item`,
    (n) => t.insertListItem(n.detail.path, n.detail.item, n.detail.index)
  ), ve(
    `mantine-form:${e}:set-dirty`,
    (n) => t.setDirty(n.detail)
  ), ve(
    `mantine-form:${e}:set-touched`,
    (n) => t.setTouched(n.detail)
  ), ve(
    `mantine-form:${e}:reset-dirty`,
    (n) => t.resetDirty(n.detail)
  ), ve(`mantine-form:${e}:reset-touched`, t.resetTouched);
}
function Bm(e) {
  return (t) => {
    if (!t)
      e(t);
    else if (typeof t == "function")
      e(t);
    else if (typeof t == "object" && "nativeEvent" in t) {
      const { currentTarget: n } = t;
      n instanceof HTMLInputElement ? n.type === "checkbox" ? e(n.checked) : e(n.value) : (n instanceof HTMLTextAreaElement || n instanceof HTMLSelectElement) && e(n.value);
    } else
      e(t);
  };
}
function Io(e) {
  return e === null || typeof e != "object" ? {} : Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r != null && r !== !1 && (t[n] = r), t;
  }, {});
}
function Hm(e) {
  const [t, n] = P(Io(e)), r = J(t), o = H((l) => {
    n((u) => {
      const d = Io(typeof l == "function" ? l(u) : l);
      return r.current = d, d;
    });
  }, []), s = H(() => o({}), []), i = H(
    (l) => {
      r.current[l] !== void 0 && o((u) => {
        const d = { ...u };
        return delete d[l], d;
      });
    },
    [t]
  ), a = H(
    (l, u) => {
      u == null || u === !1 ? i(l) : r.current[l] !== u && o((d) => ({ ...d, [l]: u }));
    },
    [t]
  );
  return {
    errorsState: t,
    setErrors: o,
    clearErrors: s,
    setFieldError: a,
    clearFieldError: i
  };
}
function Lo(e, t) {
  if (t === null || typeof t != "object")
    return {};
  const n = { ...t };
  return Object.keys(t).forEach((r) => {
    r.includes(`${String(e)}.`) && delete n[r];
  }), n;
}
function gi(e, t) {
  const n = e.substring(t.length + 1).split(".")[0];
  return parseInt(n, 10);
}
function yi(e, t, n, r) {
  if (t === void 0)
    return n;
  const o = `${String(e)}`;
  let s = n;
  r === -1 && (s = Lo(`${o}.${t}`, s));
  const i = { ...s }, a = /* @__PURE__ */ new Set();
  return Object.entries(s).filter(([l]) => {
    if (!l.startsWith(`${o}.`))
      return !1;
    const u = gi(l, o);
    return Number.isNaN(u) ? !1 : u >= t;
  }).forEach(([l, u]) => {
    const d = gi(l, o), f = l.replace(
      `${o}.${d}`,
      `${o}.${d + r}`
    );
    i[f] = u, a.add(f), a.has(l) || delete i[l];
  }), i;
}
function zm(e, { from: t, to: n }, r) {
  const o = `${e}.${t}`, s = `${e}.${n}`, i = { ...r };
  return Object.keys(r).every((a) => {
    let l, u;
    if (a.startsWith(o) && (l = a, u = a.replace(o, s)), a.startsWith(s) && (l = a.replace(s, o), u = a), l && u) {
      const d = i[l], f = i[u];
      return f === void 0 ? delete i[l] : i[l] = f, d === void 0 ? delete i[u] : i[u] = d, !1;
    }
    return !0;
  }), i;
}
function vi(e, t, n) {
  typeof n.value == "object" && (n.value = Yt(n.value)), !n.enumerable || n.get || n.set || !n.configurable || !n.writable || t === "__proto__" ? Object.defineProperty(e, t, n) : e[t] = n.value;
}
function Yt(e) {
  if (typeof e != "object") return e;
  var t = 0, n, r, o, s = Object.prototype.toString.call(e);
  if (s === "[object Object]" ? o = Object.create(e.__proto__ || null) : s === "[object Array]" ? o = Array(e.length) : s === "[object Set]" ? (o = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    o.add(Yt(i));
  })) : s === "[object Map]" ? (o = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    o.set(Yt(a), Yt(i));
  })) : s === "[object Date]" ? o = /* @__PURE__ */ new Date(+e) : s === "[object RegExp]" ? o = new RegExp(e.source, e.flags) : s === "[object DataView]" ? o = new e.constructor(Yt(e.buffer)) : s === "[object ArrayBuffer]" ? o = e.slice(0) : s.slice(-6) === "Array]" && (o = new e.constructor(e)), o) {
    for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      vi(o, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
      Object.hasOwnProperty.call(o, n = r[t]) && o[n] === e[n] || vi(o, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return o || e;
}
function ic(e) {
  return typeof e != "string" ? [] : e.split(".");
}
function Ce(e, t) {
  const n = ic(e);
  if (n.length === 0 || typeof t != "object" || t === null)
    return;
  let r = t[n[0]];
  for (let o = 1; o < n.length && r !== void 0; o += 1)
    r = r[n[o]];
  return r;
}
function Zr(e, t, n) {
  const r = ic(e);
  if (r.length === 0)
    return n;
  const o = Yt(n);
  if (r.length === 1)
    return o[r[0]] = t, o;
  let s = o[r[0]];
  for (let i = 1; i < r.length - 1; i += 1) {
    if (s === void 0)
      return o;
    s = s[r[i]];
  }
  return s[r[r.length - 1]] = t, o;
}
function Vm(e, { from: t, to: n }, r) {
  const o = Ce(e, r);
  if (!Array.isArray(o))
    return r;
  const s = [...o], i = o[t];
  return s.splice(t, 1), s.splice(n, 0, i), Zr(e, s, r);
}
function Wm(e, t, n, r) {
  const o = Ce(e, r);
  if (!Array.isArray(o))
    return r;
  const s = [...o];
  return s.splice(typeof n == "number" ? n : s.length, 0, t), Zr(e, s, r);
}
function Um(e, t, n) {
  const r = Ce(e, n);
  return Array.isArray(r) ? Zr(
    e,
    r.filter((o, s) => s !== t),
    n
  ) : n;
}
function Ym({
  $values: e,
  $errors: t,
  $status: n
}) {
  const r = H((i, a) => {
    n.clearFieldDirty(i), t.setErrors((l) => zm(i, a, l)), e.setValues({
      values: Vm(i, a, e.refValues.current),
      updateState: !0
    });
  }, []), o = H((i, a) => {
    n.clearFieldDirty(i), t.setErrors((l) => yi(i, a, l, -1)), e.setValues({
      values: Um(i, a, e.refValues.current),
      updateState: !0
    });
  }, []), s = H((i, a, l) => {
    n.clearFieldDirty(i), t.setErrors((u) => yi(i, l, u, 1)), e.setValues({
      values: Wm(i, a, l, e.refValues.current),
      updateState: !0
    });
  }, []);
  return { reorderListItem: r, removeListItem: o, insertListItem: s };
}
var vo, bi;
function Gm() {
  return bi || (bi = 1, vo = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, o, s;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (o = r; o-- !== 0; )
          if (!e(t[o], n[o])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (s = Object.keys(t), r = s.length, r !== Object.keys(n).length) return !1;
      for (o = r; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, s[o])) return !1;
      for (o = r; o-- !== 0; ) {
        var i = s[o];
        if (!e(t[i], n[i])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), vo;
}
var Xm = Gm();
const ar = /* @__PURE__ */ Bo(Xm);
function Cn(e, t) {
  const n = Object.keys(e);
  if (typeof t == "string") {
    const r = n.filter((o) => o.startsWith(`${t}.`));
    return e[t] || r.some((o) => e[o]) || !1;
  }
  return n.some((r) => e[r]);
}
function Km({
  initialDirty: e,
  initialTouched: t,
  mode: n,
  $values: r
}) {
  const [o, s] = P(t), [i, a] = P(e), l = J(t), u = J(e), d = H((x) => {
    const E = typeof x == "function" ? x(l.current) : x;
    l.current = E, n === "controlled" && s(E);
  }, []), f = H(
    (x, E = !1) => {
      const j = typeof x == "function" ? x(u.current) : x;
      u.current = j, (n === "controlled" || E) && a(j);
    },
    []
  ), m = H(() => d({}), []), p = (x) => {
    const E = x ? { ...x, ...r.refValues.current } : r.refValues.current;
    r.setValuesSnapshot(E), f({});
  }, y = H((x, E) => {
    d((j) => Cn(j, x) === E ? j : { ...j, [x]: E });
  }, []), g = H((x, E, j) => {
    f(($) => Cn($, x) === E ? $ : { ...$, [x]: E }, j);
  }, []), v = H((x, E) => {
    const j = Cn(u.current, x), $ = !ar(Ce(x, r.getValuesSnapshot()), E), I = Lo(x, u.current);
    I[x] = $, f(I, j !== $);
  }, []), w = H(
    (x) => Cn(l.current, x),
    []
  ), S = H(
    (x) => f((E) => {
      if (typeof x != "string")
        return E;
      const j = Lo(x, E);
      return delete j[x], ar(j, E) ? E : j;
    }),
    []
  ), b = H((x) => {
    if (x) {
      const j = Ce(x, u.current);
      if (typeof j == "boolean")
        return j;
      const $ = Ce(x, r.refValues.current), I = Ce(x, r.valuesSnapshot.current);
      return !ar($, I);
    }
    return Object.keys(u.current).length > 0 ? Cn(u.current) : !ar(r.refValues.current, r.valuesSnapshot.current);
  }, []), C = H(() => u.current, []), _ = H(() => l.current, []);
  return {
    touchedState: o,
    dirtyState: i,
    touchedRef: l,
    dirtyRef: u,
    setTouched: d,
    setDirty: f,
    resetDirty: p,
    resetTouched: m,
    isTouched: w,
    setFieldTouched: y,
    setFieldDirty: g,
    setTouchedState: s,
    setDirtyState: a,
    clearFieldDirty: S,
    isDirty: b,
    getDirty: C,
    getTouched: _,
    setCalculatedFieldDirty: v
  };
}
function qm({
  initialValues: e,
  onValuesChange: t,
  mode: n
}) {
  const r = J(!1), [o, s] = P(e || {}), i = J(o), a = J(o), l = H(
    ({
      values: g,
      subscribers: v,
      updateState: w = !0,
      mergeWithPreviousValues: S = !0
    }) => {
      const b = i.current, C = g instanceof Function ? g(i.current) : g, _ = S ? { ...b, ...C } : C;
      i.current = _, w && s(_), t == null || t(_, b), v == null || v.filter(Boolean).forEach((x) => x({ updatedValues: _, previousValues: b }));
    },
    [t]
  ), u = H(
    (g) => {
      var S;
      const v = Ce(g.path, i.current), w = g.value instanceof Function ? g.value(v) : g.value;
      if (v !== w) {
        const b = i.current, C = Zr(g.path, w, i.current);
        l({ values: C, updateState: g.updateState }), (S = g.subscribers) == null || S.filter(Boolean).forEach(
          (_) => _({ path: g.path, updatedValues: C, previousValues: b })
        );
      }
    },
    [l]
  ), d = H((g) => {
    a.current = g;
  }, []), f = H(
    (g, v) => {
      r.current || (r.current = !0, l({ values: g, updateState: n === "controlled" }), d(g), v());
    },
    [l]
  ), m = H(() => {
    l({
      values: a.current,
      updateState: !0,
      mergeWithPreviousValues: !1
    });
  }, [l]), p = H(() => i.current, []), y = H(() => a.current, []);
  return {
    initialized: r,
    stateValues: o,
    refValues: i,
    valuesSnapshot: a,
    setValues: l,
    setFieldValue: u,
    resetValues: m,
    setValuesSnapshot: d,
    initialize: f,
    getValues: p,
    getValuesSnapshot: y
  };
}
function Jm({
  $status: e
}) {
  const t = J(
    {}
  ), n = H((o, s) => {
    W(() => (t.current[o] = t.current[o] || [], t.current[o].push(s), () => {
      t.current[o] = t.current[o].filter((i) => i !== s);
    }), [s]);
  }, []), r = H((o) => t.current[o] ? t.current[o].map(
    (s) => (i) => s({
      previousValue: Ce(o, i.previousValues),
      value: Ce(o, i.updatedValues),
      touched: e.isTouched(o),
      dirty: e.isDirty(o)
    })
  ) : [], []);
  return {
    subscribers: t,
    watch: n,
    getFieldSubscribers: r
  };
}
function xi(e, t) {
  return e ? `${e}-${t.toString()}` : t.toString();
}
function wi(e) {
  const t = Io(e);
  return { hasErrors: Object.keys(t).length > 0, errors: t };
}
function Oo(e, t, n = "", r = {}) {
  return typeof e != "object" || e === null ? r : Object.keys(e).reduce((o, s) => {
    const i = e[s], a = `${n === "" ? "" : `${n}.`}${s}`, l = Ce(a, t);
    let u = !1;
    return typeof i == "function" && (o[a] = i(l, t, a)), typeof i == "object" && Array.isArray(l) && (u = !0, l.forEach(
      (d, f) => Oo(i, t, `${a}.${f}`, o)
    )), typeof i == "object" && typeof l == "object" && l !== null && (u || Oo(i, t, a, o)), o;
  }, r);
}
function Fo(e, t) {
  return wi(typeof e == "function" ? e(t) : Oo(e, t));
}
function cr(e, t, n) {
  if (typeof e != "string")
    return { hasError: !1, error: null };
  const r = Fo(t, n), o = Object.keys(r.errors).find(
    (s) => e.split(".").every((i, a) => i === s.split(".")[a])
  );
  return { hasError: !!o, error: o ? r.errors[o] : null };
}
const Zm = "__MANTINE_FORM_INDEX__";
function Ci(e, t) {
  return t ? typeof t == "boolean" ? t : Array.isArray(t) ? t.includes(e.replace(/[.][0-9]/g, `.${Zm}`)) : !1 : !1;
}
function Qm({
  name: e,
  mode: t = "controlled",
  initialValues: n,
  initialErrors: r = {},
  initialDirty: o = {},
  initialTouched: s = {},
  clearInputErrorOnChange: i = !0,
  validateInputOnChange: a = !1,
  validateInputOnBlur: l = !1,
  onValuesChange: u,
  transformValues: d = (p) => p,
  enhanceGetInputProps: f,
  validate: m
} = {}) {
  const p = Hm(r), y = qm({ initialValues: n, onValuesChange: u, mode: t }), g = Km({ initialDirty: o, initialTouched: s, $values: y, mode: t }), v = Ym({ $values: y, $errors: p, $status: g }), w = Jm({ $status: g }), [S, b] = P(0), [C, _] = P({}), x = H(() => {
    y.resetValues(), p.clearErrors(), g.resetDirty(), g.resetTouched(), t === "uncontrolled" && b((A) => A + 1);
  }, []), E = H((A) => {
    y.initialize(A, () => t === "uncontrolled" && b((U) => U + 1));
  }, []), j = H(
    (A, U, X) => {
      const ne = Ci(A, a), ie = U instanceof Function ? U(Ce(A, y.refValues.current)) : U;
      g.setCalculatedFieldDirty(A, ie), g.setFieldTouched(A, !0), !ne && i && p.clearFieldError(A), y.setFieldValue({
        path: A,
        value: U,
        updateState: t === "controlled",
        subscribers: [
          ...w.getFieldSubscribers(A),
          ne ? (pe) => {
            const ae = cr(A, m, pe.updatedValues);
            ae.hasError ? p.setFieldError(A, ae.error) : p.clearFieldError(A);
          } : null,
          (X == null ? void 0 : X.forceUpdate) !== !1 && t !== "controlled" ? () => _((pe) => ({
            ...pe,
            [A]: (pe[A] || 0) + 1
          })) : null
        ]
      });
    },
    [u, m]
  ), $ = H(
    (A) => {
      const U = y.refValues.current;
      y.setValues({ values: A, updateState: t === "controlled" }), i && p.clearErrors(), t === "uncontrolled" && b((X) => X + 1), Object.keys(w.subscribers.current).forEach((X) => {
        const ne = Ce(X, y.refValues.current), ie = Ce(X, U);
        ne !== ie && w.getFieldSubscribers(X).forEach((pe) => pe({ previousValues: U, updatedValues: y.refValues.current }));
      });
    },
    [u, i]
  ), I = H(() => {
    const A = Fo(m, y.refValues.current);
    return p.setErrors(A.errors), A;
  }, [m]), O = H(
    (A) => {
      const U = cr(A, m, y.refValues.current);
      return U.hasError ? p.setFieldError(A, U.error) : p.clearFieldError(A), U;
    },
    [m]
  ), B = (A, { type: U = "input", withError: X = !0, withFocus: ne = !0, ...ie } = {}) => {
    const ae = { onChange: Bm(
      (me) => j(A, me, { forceUpdate: !1 })
    ), "data-path": xi(e, A) };
    return X && (ae.error = p.errorsState[A]), U === "checkbox" ? ae[t === "controlled" ? "checked" : "defaultChecked"] = Ce(
      A,
      y.refValues.current
    ) : ae[t === "controlled" ? "value" : "defaultValue"] = Ce(
      A,
      y.refValues.current
    ), ne && (ae.onFocus = () => g.setFieldTouched(A, !0), ae.onBlur = () => {
      if (Ci(A, l)) {
        const me = cr(A, m, y.refValues.current);
        me.hasError ? p.setFieldError(A, me.error) : p.clearFieldError(A);
      }
    }), Object.assign(
      ae,
      f == null ? void 0 : f({
        inputProps: ae,
        field: A,
        options: { type: U, withError: X, withFocus: ne, ...ie },
        form: D
      })
    );
  }, G = (A, U) => (X) => {
    X == null || X.preventDefault();
    const ne = I();
    ne.hasErrors ? U == null || U(ne.errors, y.refValues.current, X) : A == null || A(d(y.refValues.current), X);
  }, F = (A) => d(A || y.refValues.current), q = H((A) => {
    A.preventDefault(), x();
  }, []), Y = H(
    (A) => A ? !cr(A, m, y.refValues.current).hasError : !Fo(m, y.refValues.current).hasErrors,
    [m]
  ), V = (A) => `${S}-${A}-${C[A] || 0}`, ee = H(
    (A) => document.querySelector(`[data-path="${xi(e, A)}"]`),
    []
  ), D = {
    watch: w.watch,
    initialized: y.initialized.current,
    values: y.stateValues,
    getValues: y.getValues,
    setInitialValues: y.setValuesSnapshot,
    initialize: E,
    setValues: $,
    setFieldValue: j,
    errors: p.errorsState,
    setErrors: p.setErrors,
    setFieldError: p.setFieldError,
    clearFieldError: p.clearFieldError,
    clearErrors: p.clearErrors,
    resetDirty: g.resetDirty,
    setTouched: g.setTouched,
    setDirty: g.setDirty,
    isTouched: g.isTouched,
    resetTouched: g.resetTouched,
    isDirty: g.isDirty,
    getTouched: g.getTouched,
    getDirty: g.getDirty,
    reorderListItem: v.reorderListItem,
    insertListItem: v.insertListItem,
    removeListItem: v.removeListItem,
    reset: x,
    validate: I,
    validateField: O,
    getInputProps: B,
    onSubmit: G,
    onReset: q,
    isValid: Y,
    getTransformedValues: F,
    key: V,
    getInputNode: ee
  };
  return Dm(e, D), D;
}
const e1 = ({ className: e }) => /* @__PURE__ */ c.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "44",
    height: "44",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "#2c3e50",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: e,
    children: [
      /* @__PURE__ */ c.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ c.jsx(
        "path",
        {
          d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",
          strokeWidth: "0",
          fill: "currentColor"
        }
      )
    ]
  }
), t1 = ({ className: e }) => /* @__PURE__ */ c.jsx(
  "svg",
  {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M5.60227 10.9247L4.19034 9.52273L7.13352 6.57955H0.75V4.51136H7.13352L4.19034 1.56818L5.60227 0.166193L10.9815 5.54545L5.60227 10.9247Z",
        fill: "white"
      }
    )
  }
), n1 = "_successMessageContainer_8s1st_1", r1 = "_successMessageText_8s1st_11", o1 = "_rightSection_8s1st_23", s1 = "_cancelText_8s1st_30", i1 = "_errorText_8s1st_41", Sn = {
  successMessageContainer: n1,
  successMessageText: r1,
  rightSection: o1,
  cancelText: s1,
  errorText: i1
}, ac = ({
  setShowEmailCapture: e,
  sendSupportRequest: t,
  emailValue: n = ""
}) => {
  const [r, o] = _e.useState(!1), s = Qm({
    initialValues: {
      email: n,
      notes: ""
    },
    validate: {
      email: (a) => /^\S+@\S+$/.test(a) ? null : !0
    }
  }), i = () => {
    if (s.validate().hasErrors) {
      o(!1);
      return;
    }
    o(!0), t == null || t(s.values.email, s.values.notes);
  };
  return /* @__PURE__ */ c.jsx(Rn, { children: r ? /* @__PURE__ */ c.jsx(Rn, { className: Sn.successMessageContainer, children: /* @__PURE__ */ c.jsxs(oe, { className: Sn.successMessageText, children: [
    "👍 ",
    /* @__PURE__ */ c.jsxs("b", { children: [
      "Thanks ",
      s.values.email,
      "!"
    ] }),
    " — A person will follow-up with you soon."
  ] }) }) : /* @__PURE__ */ c.jsxs(k, { style: { display: "flex", flexDirection: "column", width: "100%" }, children: [
    /* @__PURE__ */ c.jsxs(k, { style: { display: "flex", flexDirection: "row", width: "100%" }, children: [
      /* @__PURE__ */ c.jsx(
        qr,
        {
          placeholder: "your@email.com",
          error: "",
          style: { width: "100%", height: "48px" },
          styles: {
            root: {
              display: "flex",
              padding: "8px 12px 8px 0px",
              alignItems: "center",
              gap: "16px",
              flex: "1 0 0px"
            },
            wrapper: {
              width: "100%",
              alignItems: "center"
            },
            input: {
              color: "var(--primary, #0A40FF)",
              width: "100%",
              border: "2px solid var(--runllmsearch-primary-color, #0a40ff)",
              borderRadius: "63px",
              padding: "8px 12px 8px 24px",
              height: "48px",
              marginRight: "16px",
              fontSize: "14px"
            }
          },
          ...s.getInputProps("email"),
          rightSection: /* @__PURE__ */ c.jsx(
            k,
            {
              onClick: i,
              style: {
                backgroundColor: r ? "green" : "#0a40ff",
                width: "42px",
                height: "32px",
                padding: "6px 14px",
                marginRight: "16px",
                borderRadius: "100px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              },
              children: r ? /* @__PURE__ */ c.jsx(e1, {}) : /* @__PURE__ */ c.jsx(t1, {})
            }
          ),
          rightSectionProps: {
            className: Sn.rightSection
          }
        }
      ),
      /* @__PURE__ */ c.jsx(oe, { className: Sn.cancelText, onClick: () => e(!1), children: "cancel" })
    ] }),
    s.errors.email && /* @__PURE__ */ c.jsx(oe, { className: Sn.errorText, children: "Invalid email address" }),
    s.values.email && /* @__PURE__ */ c.jsx(
      zr,
      {
        placeholder: "Add your notes ...",
        style: { marginTop: "16px" },
        styles: {
          input: {
            color: "var(--primary, #0A40FF)",
            display: "flex",
            width: "100%",
            padding: "12px 22px",
            alignItems: "center",
            gap: "16px",
            border: "2px solid var(--primary, #0A40FF)",
            borderRadius: "4px",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "140%"
          }
        },
        ...s.getInputProps("notes")
      }
    )
  ] }) });
}, a1 = "_text_u54w2_1", c1 = "_sourcesStack_u54w2_8", Si = {
  text: a1,
  sourcesStack: c1
};
var Be = /* @__PURE__ */ ((e) => (e.User = "user", e.Assistant = "assistant", e))(Be || {}), jn = /* @__PURE__ */ ((e) => (e.Initialized = "initialized", e))(jn || {}), Ee = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.CHAT_RETRIEVAL = "chat_retrieval", e.CHAT_CLASSIFICATION = "chat_classification", e.CHAT_GENERATION_STARTS = "chat_generation_starts", e.CHAT_GENERATION_IN_PROGRESS = "chat_generation_in_progress", e.CHAT_GENERATION_FINISHED = "chat_generation_finished", e.CHAT_SOURCES = "chat_sources", e.CHAT_EXPLANATION = "chat_explanation", e.CHAT_PRE_GENERATION_SOURCES = "chat_pre_generation_sources", e.CHAT_ACTION_STATUS = "chat_action_status", e.SERVER_NON_STREAMING_CHAT = "server_non_streaming_chat", e.CLIENT_CHAT = "client_chat", e))(Ee || {});
function l1(e) {
  return e.replace("http://", "ws://").replace("https://", "wss://");
}
const u1 = (e) => new Promise((t, n) => {
  const r = new FileReader();
  r.onloadend = () => {
    if (r.result && typeof r.result == "string") {
      const o = r.result.split(",")[1];
      t(o);
    } else
      n(new Error("Failed to read the file."));
  }, r.onerror = () => {
    n(new Error("Failed to read the file."));
  }, r.readAsDataURL(e);
}), d1 = async (e) => ({
  name: e.name,
  type: e.type,
  contentBase64: await u1(e)
});
function _i(e) {
  return `runllm-chat-session-history-${e}`;
}
function bo(e) {
  return `runllm-chat-token-${e}`;
}
function mr(e) {
  return `runllm-chat-user-id-${e}`;
}
const f1 = ({
  size: e = 20,
  className: t,
  color: n = "var(--primary, #0A40FF)"
}) => /* @__PURE__ */ c.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: t,
    children: /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M11.8371 1.70576C12.0556 2.96705 12.1937 4.24095 12.2505 5.51976C12.2924 6.75265 12.4126 7.98163 12.6105 9.19926C12.8395 10.4695 13.2035 12.1375 13.6119 12.069C14.0104 12.0022 14.278 10.1443 14.5005 9.50815C15.017 8.03113 15.6358 7.32809 16.0031 7.0654C16.2816 6.8662 17.0342 6.52867 17.4487 6.89659C17.5393 6.96902 17.605 7.06785 17.6369 7.17936C17.6687 7.29087 17.6651 7.40953 17.6264 7.51886C17.26 8.32733 16.9509 9.16062 16.7016 10.0125C15.8971 13.0657 16.1208 13.7321 15.4912 15.6208C14.9348 17.2899 14.2681 18.4118 12.4451 19.2818C10.6004 20.1623 8.97025 20.2834 7.20616 19.3639C6.09897 18.7867 5.45546 18.1713 4.12783 15.3722C3.16419 13.3405 3.44929 13.9035 2.5511 11.9299C1.65324 9.95716 1.1996 9.57346 0.345657 7.83101C0.120499 7.37159 -0.317951 6.46719 0.372848 6.07942C1.1513 5.64244 1.70886 6.58109 1.82043 6.76087C2.74711 8.25411 2.73903 8.53417 3.66487 9.85272C4.02415 10.3644 4.66269 11.154 4.81012 11.0838C5.05517 10.9671 4.03377 8.73054 3.19282 6.31706C2.95213 5.62627 2.8463 5.28804 2.48364 4.358C2.38726 4.11086 1.88781 2.76599 2.74895 2.44939C3.55691 2.15232 4.0157 3.00114 4.21812 3.41854C5.00981 5.05099 5.23741 5.60125 5.64874 6.64915C5.96089 7.44438 6.91145 9.47058 7.17892 9.45012C7.54234 9.42233 6.86148 6.87221 6.56444 5.81623C6.12709 4.51568 5.82112 3.17459 5.65112 1.81304C5.60827 1.49556 5.45963 0.156984 6.29103 0.0156976C7.29809 -0.155443 7.639 1.11523 7.8407 1.76184C8.39606 3.54223 8.49656 4.15008 8.8811 5.57408C9.11881 6.45436 9.62299 8.71389 9.88035 8.66829C10.1878 8.6138 10.0384 6.82892 9.96835 6.06475C9.82007 4.66338 9.79371 3.25179 9.88959 1.84586C9.94319 0.981687 10.2301 0.365594 10.7586 0.317354C11.5196 0.247915 11.7795 1.32726 11.8371 1.70576Z",
        fill: n
      }
    )
  }
), p1 = ({
  size: e = 16,
  color: t = "currentColor",
  className: n
}) => /* @__PURE__ */ c.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    children: /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M6 9l6 6 6-6",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), m1 = ({
  size: e = 16,
  color: t = "currentColor",
  className: n
}) => /* @__PURE__ */ c.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    children: /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M18 15l-6-6-6 6",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var cc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ji = _e.createContext && /* @__PURE__ */ _e.createContext(cc), h1 = ["attr", "size", "title"];
function g1(e, t) {
  if (e == null) return {};
  var n = y1(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      r = s[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function y1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wr.apply(this, arguments);
}
function Ei(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ei(Object(n), !0).forEach(function(r) {
      v1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ei(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function v1(e, t, n) {
  return t = b1(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function b1(e) {
  var t = x1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function x1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lc(e) {
  return e && e.map((t, n) => /* @__PURE__ */ _e.createElement(t.tag, Cr({
    key: n
  }, t.attr), lc(t.child)));
}
function uc(e) {
  return (t) => /* @__PURE__ */ _e.createElement(w1, wr({
    attr: Cr({}, e.attr)
  }, t), lc(e.child));
}
function w1(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: s
    } = e, i = g1(e, h1), a = o || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ _e.createElement("svg", wr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, i, {
      className: l,
      style: Cr(Cr({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ _e.createElement("title", null, s), e.children);
  };
  return ji !== void 0 ? /* @__PURE__ */ _e.createElement(ji.Consumer, null, (n) => t(n)) : t(cc);
}
function C1(e) {
  return uc({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "6 9 12 15 18 9" }, child: [] }] })(e);
}
function S1(e) {
  return uc({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "18 15 12 9 6 15" }, child: [] }] })(e);
}
const Ti = ({
  actionStatus: e,
  content: t,
  initiallyOpen: n = !0,
  isDarkMode: r,
  color: o
}) => {
  const [s, i] = P(n), a = (m) => {
    for (let p = m.length - 1; p >= 0; p--)
      if (m[p].type === "action_start" && !l(m, p))
        return p;
    return -1;
  }, l = (m, p) => {
    if (m[p].type !== "action_start" || p === 0)
      return !1;
    for (let y = p - 1; y >= 0; y--)
      if (m[y].type === "action_start")
        return m[p].action_type === m[y].action_type;
    return !1;
  }, u = (m, p, y) => {
    const g = m[p], v = m[y];
    if (g.action_type !== v.action_type)
      return !1;
    for (let w = p + 1; w < m.length; w++) {
      const S = m[w];
      if ((S.type === "action_start" || S.type === "action_event") && S.action_type === v.action_type)
        return !1;
    }
    return !0;
  }, d = (m, p) => {
    if (t)
      return !1;
    const y = m[p], g = a(m);
    return y.type === "action_start" && p === g ? !0 : g !== -1 ? u(
      m,
      p,
      g
    ) : !1;
  }, f = (m) => m.map((p, y) => {
    const { user_message: g } = p, v = p.type === "action_event" || l(m, y), w = d(m, y), S = w ? r ? "white" : "black" : r ? "#9CA3AF" : "#6B7280", b = p.emoji || "", C = w ? p.present_tense_action_message || "" : p.past_tense_action_message || "";
    return {
      key: y,
      isSubbullet: v,
      textColor: S,
      emoji: b,
      actionMessage: C,
      description: g,
      isLastItem: y === m.length - 1
    };
  });
  return /* @__PURE__ */ c.jsxs("div", { children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: "flex items-center gap-0.5 w-full text-left focus:outline-none",
        onClick: () => i((m) => !m),
        "aria-expanded": s,
        style: {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 0",
          marginTop: "8px",
          background: "transparent",
          border: "none",
          outline: "none"
        },
        children: [
          s ? /* @__PURE__ */ c.jsx(
            S1,
            {
              className: "w-4 h-4 transition-transform duration-200",
              style: { color: r ? "#9CA3AF" : "#6B7280" }
            }
          ) : /* @__PURE__ */ c.jsx(
            C1,
            {
              className: "w-4 h-4 transition-transform duration-200",
              style: { color: r ? "#9CA3AF" : "#6B7280" }
            }
          ),
          /* @__PURE__ */ c.jsxs("span", { className: "text-sm", style: { color: r ? "#9CA3AF" : "#6B7280" }, children: [
            /* @__PURE__ */ c.jsx("span", { style: { fontWeight: "bold" }, children: "Reasoning" }),
            " ",
            /* @__PURE__ */ c.jsx("span", { role: "img", "aria-label": "robot", children: "🤖" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        style: {
          transition: "all 0.3s ease",
          overflow: "hidden",
          maxHeight: s ? "1000px" : "0px"
        },
        children: s && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx("div", { style: { marginLeft: "16px" }, children: f(e).map((m) => /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "text-sm",
              style: { marginBottom: m.isLastItem ? "0px" : "8px" },
              children: m.isSubbullet ? (
                // Subbullet: "• Description"
                /* @__PURE__ */ c.jsxs("span", { style: { color: m.textColor, marginLeft: "24px" }, children: [
                  "• ",
                  m.description
                ] })
              ) : (
                // Main bullet: "Category — Description"
                /* @__PURE__ */ c.jsxs("span", { style: { color: m.textColor }, children: [
                  m.emoji,
                  " ",
                  /* @__PURE__ */ c.jsx("span", { className: "font-bold", children: m.actionMessage }),
                  " —",
                  " ",
                  m.description
                ] })
              )
            },
            m.key
          )) }),
          !t && /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: "text-sm",
              style: {
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: r ? "#9CA3AF" : "#6B7280",
                marginTop: "8px",
                marginLeft: "16px",
                marginBottom: "8px"
              },
              children: [
                /* @__PURE__ */ c.jsx(
                  St,
                  {
                    type: "dots",
                    styles: {
                      root: { "--loader-color": o }
                    }
                  }
                ),
                /* @__PURE__ */ c.jsx("span", { className: "animate-pulse", children: "Working..." })
              ]
            }
          )
        ] })
      }
    )
  ] });
}, Ri = Sc(() => import("./MDXContent-B1FcmAKn.js")), _1 = [
  [
    "Swimming through the data...",
    "Filtering out noise...",
    "Fact-checking rigorously",
    "Trimming the excess..."
  ],
  [
    "Evaluating question...",
    "Finding relevant data...",
    "Focusing on the essentials...",
    "Improving clarity..."
  ],
  [
    "Compiling request...",
    "Scanning databases...",
    "Filtering relevant data...",
    "Keeping it simple..."
  ],
  [
    "Cross-referencing sources...",
    "Distilling the key points...",
    "Avoiding any guesswork...",
    "Cutting to the chase..."
  ],
  [
    "Validating user intent",
    "Executing proprietary algorithms...",
    "Stamping out hallucinations...",
    "Reducing wordiness..."
  ],
  [
    "Scrutinizing sources...",
    "Weeding out the clutter...",
    "Asking the experts...",
    "Polishing until it shines..."
  ],
  [
    "Condensing information...",
    "Double-checking the facts...",
    "Keeping it grounded...",
    "Eliminating fluff..."
  ]
], Ai = "Note: I wasn’t able to find highly relevant data sources, but above are a few potentially relevant links.";
function j1(e) {
  const t = _1[2];
  return e === jn.Initialized ? t[0] : e === Ee.CHAT_RETRIEVAL ? t[1] : e === Ee.CHAT_CLASSIFICATION ? t[2] : e === Ee.CHAT_GENERATION_STARTS ? t[3] : "";
}
const E1 = ({
  assistantId: e,
  exchange: t,
  avatar: n,
  name: r,
  color: o,
  serverAddress: s,
  sessionId: i,
  isDarkMode: a,
  supportEmail: l,
  disableAskAPerson: u,
  isAnnouncement: d,
  askAPersonButtonText: f
}) => {
  const { recaptchaSiteKey: m } = Jr(), p = t.content || t.error || "", y = t.sources ?? "", g = t.explanation ?? {}, v = j1(t.loadingStage), w = t.action_status ?? [], [S, b] = P(!0), [C, _] = P(!1), [x, E] = P(!1), [j] = P(() => localStorage.getItem(mr(e))), [$, I] = P(""), [O, B] = P(null);
  W(() => {
    var A;
    const D = localStorage.getItem("runllm-user-context");
    if (D)
      try {
        const U = JSON.parse(D);
        B(((A = U == null ? void 0 : U.user) == null ? void 0 : A.email) || null);
      } catch (U) {
        console.error("Error parsing localStorage data:", U);
      }
  }, []);
  const G = async (D, A) => {
    var U;
    try {
      (U = window.grecaptcha) == null || U.execute(m, { action: "submit" }).then((X) => {
        fetch(
          `${s}/api/pipeline/${e}/chat/${D}/public/feedback${j ? `?chat_user_id=${j}` : ""}`,
          {
            method: "POST",
            headers: {
              "x-recaptcha-token": X,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ action: A })
          }
        ).then((ne) => ne.json()).then((ne) => console.log(ne)).catch((ne) => console.error(ne));
      });
    } catch (X) {
      console.error("Failed to send feedback:", X);
    }
  }, F = async (D, A, U) => {
    var X;
    try {
      (X = window.grecaptcha) == null || X.execute(m, { action: "submit" }).then((ne) => {
        fetch(`${s}/api/pipeline/${e}/chat/public/email`, {
          method: "POST",
          headers: {
            "x-recaptcha-token": ne,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: D,
            session_id: A,
            notes: U
          })
        }).then((ie) => ie.json()).then((ie) => console.log(ie)).catch((ie) => console.error(ie));
      });
    } catch (ne) {
      console.error("Failed to send support request:", ne);
    }
  }, q = (D) => {
    D !== "upvote" && D !== "downvote" || (I(D === $ ? "" : D), G(t.id, D));
  }, Y = a ? "feedback-container-dark" : "feedback-container", V = (D) => {
    const A = D.match(/\[(.*)\]\((.*)\)/);
    return A ? { title: A[1], url: A[2] } : null;
  }, ee = () => {
    E((D) => !D);
  };
  return /* @__PURE__ */ c.jsxs(
    k,
    {
      className: ge["exchange-output-container"],
      style: {
        backgroundColor: a ? "#111" : "white"
      },
      children: [
        /* @__PURE__ */ c.jsxs(k, { className: ge.labelContainer, children: [
          n,
          /* @__PURE__ */ c.jsx(
            oe,
            {
              className: ge.userText,
              style: {
                color: a ? "white" : "black",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: "bold"
              },
              children: r || "Assistant"
            }
          )
        ] }),
        /* @__PURE__ */ c.jsx(k, { className: ge["exchange-output-content"], children: /* @__PURE__ */ c.jsx(Cc, { fallback: /* @__PURE__ */ c.jsx(St, { type: "dots", styles: { root: { "--loader-color": o } } }), children: p ? /* @__PURE__ */ c.jsxs(
          k,
          {
            style: {
              display: "flex",
              flexDirection: "column",
              maxWidth: "800px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              marginTop: "-8px"
            },
            children: [
              t.action_status && t.action_status.length > 0 ? /* @__PURE__ */ c.jsxs(k, { children: [
                /* @__PURE__ */ c.jsx(
                  Ti,
                  {
                    actionStatus: t.action_status,
                    content: p,
                    initiallyOpen: !0,
                    color: o,
                    isDarkMode: a
                  }
                ),
                /* @__PURE__ */ c.jsx(k, { style: { fontFamily: "'Inter', sans-serif", fontSize: "16px" }, children: /* @__PURE__ */ c.jsx(Ri, { mdxString: p, isDarkMode: a }) })
              ] }) : /* @__PURE__ */ c.jsx(k, { style: { fontFamily: "'Inter', sans-serif", fontSize: "16px" }, children: /* @__PURE__ */ c.jsx(Ri, { mdxString: p, isDarkMode: a }) }),
              y && /* @__PURE__ */ c.jsxs(
                Mn,
                {
                  className: Si.sourcesStack,
                  style: {
                    backgroundColor: a ? "#2a2a2a" : "#f9fafb"
                  },
                  children: [
                    /* @__PURE__ */ c.jsxs(
                      Ge,
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          alignSelf: "stretch"
                        },
                        children: [
                          /* @__PURE__ */ c.jsx(
                            oe,
                            {
                              component: "span",
                              className: Si.text,
                              style: {
                                color: a ? "white" : "black"
                              },
                              children: "Sources"
                            }
                          ),
                          Object.keys(g).length > 0 && /* @__PURE__ */ c.jsx(
                            k,
                            {
                              onClick: ee,
                              style: {
                                cursor: "pointer",
                                color: a ? "#4A80E0" : "#0a40ff",
                                display: "flex",
                                alignItems: "center"
                              },
                              children: x ? /* @__PURE__ */ c.jsx(m1, { size: 16 }) : /* @__PURE__ */ c.jsx(p1, { size: 16 })
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      k,
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch"
                        },
                        children: y.split(`
`).map((D, A) => {
                          if (D === Ai)
                            return /* @__PURE__ */ c.jsx(
                              oe,
                              {
                                className: "text",
                                style: {
                                  padding: "0px 0px 8px 0px",
                                  justifyContent: "center",
                                  alignItems: "flex-start",
                                  color: a ? "white" : "black",
                                  fontSize: "13px",
                                  fontFamily: "'Inter', sans-serif"
                                },
                                children: D
                              },
                              A
                            );
                          const U = V(D), X = Object.keys(g).find(
                            (ae) => U && U.url.includes(ae)
                          ), pe = y.split(`
`).filter((ae) => ae.trim() && ae !== Ai).findIndex((ae) => ae === D);
                          return U && /* @__PURE__ */ c.jsx(k, { children: /* @__PURE__ */ c.jsxs(k, { style: { display: "flex", alignItems: "baseline", gap: "4px" }, children: [
                            /* @__PURE__ */ c.jsxs(
                              oe,
                              {
                                style: {
                                  fontWeight: "bold",
                                  color: "black",
                                  fontSize: "13px",
                                  fontFamily: "'Inter', sans-serif",
                                  lineHeight: 1
                                },
                                children: [
                                  pe,
                                  "."
                                ]
                              }
                            ),
                            /* @__PURE__ */ c.jsxs(k, { style: { flex: 1 }, children: [
                              /* @__PURE__ */ c.jsx(
                                oe,
                                {
                                  style: {
                                    fontWeight: "bold",
                                    color: "black",
                                    fontSize: "13px",
                                    fontFamily: "'Inter', sans-serif",
                                    display: "inline",
                                    lineHeight: 1
                                  },
                                  children: U.title
                                }
                              ),
                              /* @__PURE__ */ c.jsx(
                                oe,
                                {
                                  style: {
                                    color: "rgba(0, 0, 0, 0.4)",
                                    fontSize: "13px",
                                    fontFamily: "'Inter', sans-serif",
                                    display: "inline"
                                  },
                                  children: " — "
                                }
                              ),
                              /* @__PURE__ */ c.jsx(
                                Fn,
                                {
                                  href: U.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  style: {
                                    color: "rgba(0, 0, 0, 0.4)",
                                    textDecoration: "underline",
                                    fontSize: "13px",
                                    fontFamily: "'Inter', sans-serif"
                                  },
                                  children: U.url
                                }
                              ),
                              x && X && /* @__PURE__ */ c.jsxs(
                                oe,
                                {
                                  mt: "xs",
                                  style: {
                                    color: a ? "white" : "black",
                                    fontSize: "13px",
                                    fontFamily: "'Inter', sans-serif",
                                    marginTop: "8px"
                                  },
                                  children: [
                                    /* @__PURE__ */ c.jsx("span", { style: { fontWeight: 700 }, children: "Why this?" }),
                                    " ",
                                    g[X]
                                  ]
                                }
                              )
                            ] })
                          ] }) }, A);
                        })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ c.jsxs(k, { style: { display: "flex", flexDirection: "row", gap: "8px" }, children: [
                !d && !t.is_assistant_update && S && !t.error && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                  /* @__PURE__ */ c.jsx(
                    k,
                    {
                      onClick: () => q("upvote"),
                      className: `${ge[Y]} ${$ === "upvote" ? ge[`${Y}-selected`] : ""}`,
                      children: /* @__PURE__ */ c.jsx(
                        k,
                        {
                          className: ge["feedback-logo"],
                          style: { color: a ? "white" : "black" },
                          children: /* @__PURE__ */ c.jsx(
                            Lm,
                            {
                              className: a ? "feedback-logo-color-dark" : "feedback-logo-color"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    k,
                    {
                      onClick: () => q("downvote"),
                      className: `${ge[Y]} ${$ === "downvote" ? ge[`${Y}-selected`] : ""}`,
                      children: /* @__PURE__ */ c.jsx(
                        k,
                        {
                          className: ge["feedback-logo"],
                          style: { color: a ? "white" : "black" },
                          children: /* @__PURE__ */ c.jsx(
                            Im,
                            {
                              className: a ? "feedback-logo-color-dark" : "feedback-logo-color"
                            }
                          )
                        }
                      )
                    }
                  )
                ] }),
                l && !C && !u && /* @__PURE__ */ c.jsxs(
                  k,
                  {
                    className: `${ge["feedback-container"]} ${ge["ask-person-container"]}`,
                    onClick: () => {
                      _(!0), b(!1);
                    },
                    children: [
                      /* @__PURE__ */ c.jsx(oe, { className: ge["ask-a-person-text"], children: f ?? "Ask a person" }),
                      /* @__PURE__ */ c.jsx(
                        f1,
                        {
                          size: 20,
                          className: a ? "feedback-logo-color-dark" : "feedback-logo-color"
                        }
                      )
                    ]
                  }
                )
              ] }),
              C && /* @__PURE__ */ c.jsx(
                ac,
                {
                  emailValue: O || "",
                  setShowEmailCapture: () => {
                    _(!1), b(!0);
                  },
                  sendSupportRequest: (D, A) => {
                    if (!i) {
                      console.error("Session ID is not available.");
                      return;
                    }
                    F(D, i, A);
                  }
                }
              )
            ]
          }
        ) : w && w.length > 0 ? /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsx(
          Ti,
          {
            actionStatus: w,
            content: "",
            color: o,
            initiallyOpen: !0,
            isDarkMode: a
          }
        ) }) : /* @__PURE__ */ c.jsxs(Ge, { gap: 8, children: [
          /* @__PURE__ */ c.jsx(St, { type: "dots", styles: { root: { "--loader-color": o } } }),
          v && /* @__PURE__ */ c.jsx(
            oe,
            {
              className: ge[`message-loading-text${a ? "-dark" : ""}`],
              children: v
            }
          )
        ] }) }) })
      ]
    }
  );
}, T1 = "_attachmentWrapper_jhh7n_1", R1 = "_imagePreviewContainer_jhh7n_9", ki = {
  attachmentWrapper: T1,
  imagePreviewContainer: R1
}, dc = ({ color: e = "black" }) => /* @__PURE__ */ c.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", children: /* @__PURE__ */ c.jsx(
  "path",
  {
    d: "M17 11.6667C17 12.1382 16.8127 12.5903 16.4793 12.9237C16.1459 13.2571 15.6937 13.4444 15.2222 13.4444H4.55556L1 17V2.77778C1 2.30628 1.1873 1.8541 1.5207 1.5207C1.8541 1.1873 2.30628 1 2.77778 1H15.2222C15.6937 1 16.1459 1.1873 16.4793 1.5207C16.8127 1.8541 17 2.30628 17 2.77778V11.6667Z",
    stroke: e,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    className: xe.noFill
  }
) }), fc = ({ color: e, size: t, stroke: n }) => /* @__PURE__ */ c.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t || "16",
    height: t || "16",
    viewBox: "0 0 16 16",
    fill: "none",
    children: /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M14.2933 7.36678L8.16667 13.4934C7.4161 14.244 6.39812 14.6657 5.33667 14.6657C4.27521 14.6657 3.25723 14.244 2.50667 13.4934C1.7561 12.7429 1.33444 11.7249 1.33444 10.6634C1.33444 9.60199 1.7561 8.58401 2.50667 7.83344L8.63333 1.70678C9.13371 1.2064 9.81236 0.925293 10.52 0.925293C11.2276 0.925293 11.9063 1.2064 12.4067 1.70678C12.907 2.20715 13.1882 2.88581 13.1882 3.59344C13.1882 4.30108 12.907 4.97973 12.4067 5.48011L6.27333 11.6068C6.02315 11.857 5.68382 11.9975 5.33 11.9975C4.97618 11.9975 4.63685 11.857 4.38667 11.6068C4.13648 11.3566 3.99593 11.0173 3.99593 10.6634C3.99593 10.3096 4.13648 9.9703 4.38667 9.72011L10.0467 4.06678",
        stroke: e || "#0A40FF",
        strokeWidth: n || "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), pc = ({ color: e, size: t, stroke: n }) => /* @__PURE__ */ c.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t || "48",
    height: t || "48",
    viewBox: "0 0 48 48",
    fill: "none",
    children: [
      /* @__PURE__ */ c.jsxs("g", { clipPath: "url(#clip0_96_99)", children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M28 6V14C28 14.5304 28.2107 15.0391 28.5858 15.4142C28.9609 15.7893 29.4696 16 30 16H38",
            stroke: e || "black",
            strokeWidth: n || "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M34 42H14C12.9391 42 11.9217 41.5786 11.1716 40.8284C10.4214 40.0783 10 39.0609 10 38V10C10 8.93913 10.4214 7.92172 11.1716 7.17157C11.9217 6.42143 12.9391 6 14 6H28L38 16V38C38 39.0609 37.5786 40.0783 36.8284 40.8284C36.0783 41.5786 35.0609 42 34 42Z",
            stroke: e || "black",
            strokeWidth: n || "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M18 18H20",
            stroke: e || "black",
            strokeWidth: n || "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M18 26H30",
            stroke: e || "black",
            strokeWidth: n || "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M18 34H30",
            stroke: e || "black",
            strokeWidth: n || "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ] }),
      /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx("clipPath", { id: "clip0_96_99", children: /* @__PURE__ */ c.jsx("rect", { width: "48", height: "48", fill: "white" }) }) })
    ]
  }
), A1 = ({ input: e, isDarkMode: t }) => {
  var o;
  const n = (o = e.files) == null ? void 0 : o.filter((s) => s instanceof File), r = (s) => s.type === "text/plain";
  return /* @__PURE__ */ c.jsxs(
    k,
    {
      className: ge["exchange-input-container"],
      style: {
        backgroundColor: t ? "rgba(256, 256, 256, 0.1)" : "rgba(238, 238, 238, 0.4)"
      },
      children: [
        /* @__PURE__ */ c.jsxs(k, { className: ge.labelContainer, children: [
          /* @__PURE__ */ c.jsx(dc, { color: t ? "#777" : "#999" }),
          /* @__PURE__ */ c.jsx(
            oe,
            {
              className: ge.userText,
              style: {
                color: t ? "white" : "black",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: "bold"
              },
              children: "You"
            }
          )
        ] }),
        /* @__PURE__ */ c.jsx(
          k,
          {
            className: ge["exchange-input-text"],
            style: {
              color: t ? "#D2D2D2" : "#222",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px"
            },
            children: e.content
          }
        ),
        n && n.length > 0 && /* @__PURE__ */ c.jsxs(
          k,
          {
            style: {
              paddingLeft: "24px"
            },
            children: [
              /* @__PURE__ */ c.jsxs(k, { style: { display: "flex", flexDirection: "row", gap: "2px", alignItems: "center" }, children: [
                /* @__PURE__ */ c.jsx(fc, { size: 10, color: t ? "white" : "black" }),
                /* @__PURE__ */ c.jsxs(
                  oe,
                  {
                    style: { color: t ? "white" : "black", fontSize: "11px", fontWeight: 600 },
                    children: [
                      n.length,
                      " Attachment",
                      n.length > 1 ? "s" : ""
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsx(k, { className: ki.attachmentWrapper, children: n.map((s, i) => /* @__PURE__ */ c.jsx(
                k,
                {
                  onClick: () => window.open(URL.createObjectURL(s), "_blank"),
                  className: ki.imagePreviewContainer,
                  children: r(s) ? /* @__PURE__ */ c.jsxs(
                    k,
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "8px"
                      },
                      children: [
                        /* @__PURE__ */ c.jsx(pc, { size: 48, color: "black" }),
                        /* @__PURE__ */ c.jsx(
                          oe,
                          {
                            style: {
                              maxWidth: "150px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              color: "var(--gray-mid, #999)",
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "140%"
                            },
                            children: s.name
                          }
                        )
                      ]
                    }
                  ) : /* @__PURE__ */ c.jsx(
                    _t,
                    {
                      src: URL.createObjectURL(s),
                      alt: `Preview ${i}`,
                      fit: "contain",
                      width: 48,
                      height: 48,
                      style: {
                        cursor: "pointer",
                        border: "2px solid",
                        borderColor: t ? "#666666" : "#EEEEEE"
                      }
                    }
                  )
                },
                i
              )) })
            ]
          }
        )
      ]
    }
  );
}, mc = _e.forwardRef(
  ({
    assistantId: e,
    history: t,
    assistantAvatar: n,
    name: r,
    color: o,
    serverAddress: s,
    setShowEmailCapture: i,
    sessionId: a,
    isDarkMode: l,
    supportEmail: u,
    disableAskAPerson: d,
    askAPersonButtonText: f
  }, m) => /* @__PURE__ */ c.jsx(k, { className: ge["exchange-list"], children: t.map((p, y) => /* @__PURE__ */ c.jsx(
    k,
    {
      className: ge["exchange-container"],
      ref: y === t.length - 1 ? m : void 0,
      children: p.by === Be.User ? /* @__PURE__ */ c.jsx(A1, { input: p, isDarkMode: l }) : /* @__PURE__ */ c.jsx(
        E1,
        {
          assistantId: e,
          sessionId: a,
          exchange: p,
          avatar: n,
          name: r,
          color: o,
          serverAddress: s,
          setShowEmailCapture: (g) => {
            i(g);
          },
          supportEmail: u,
          isDarkMode: l,
          disableAskAPerson: d,
          isAnnouncement: p.isAnnouncement,
          askAPersonButtonText: f
        }
      )
    },
    `${p.id}-${p.by}`
  )) })
);
mc.displayName = "ChatList";
const Mo = ({ width: e, height: t }) => /* @__PURE__ */ c.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: t,
    viewBox: "0 0 59 48",
    fill: "none",
    children: [
      /* @__PURE__ */ c.jsx(
        "path",
        {
          id: "RunLLMGradientLogoPath",
          style: { fill: "url(#paint0_linear_441_8734)" },
          d: "M41.536 22.7133L28.8684 8.9527C27.7464 7.7345 28.615 5.75942 30.2799 5.75942H33.3057C33.8413 5.75942 34.3553 5.98288 34.7172 6.37934L49.7084 22.6629C50.3888 23.3981 50.3743 24.5298 49.6867 25.2578L31.1485 44.7851C29.9976 45.9961 30.859 48 32.5384 48H35.2311C35.7596 48 36.259 47.7838 36.6209 47.4017L57.584 25.3155C58.2717 24.5875 58.2789 23.4558 57.6057 22.7205L37.2579 0.619913C36.896 0.223457 36.3821 0 35.8464 0H17.1346C15.4697 0 14.601 1.96786 15.723 3.19327L33.6893 22.7133C34.3625 23.4414 34.3625 24.5586 33.6893 25.2867L18.6474 41.6207C18.2855 42.0171 17.7716 42.2406 17.2359 42.2406H15.2525C13.5876 42.2406 12.719 40.2727 13.841 39.0473L26.5158 25.2795C27.189 24.5514 27.189 23.4269 26.5158 22.6989L5.98708 0.612705C5.62515 0.223457 5.11844 0 4.58278 0H1.91897C0.246845 0 -0.62179 1.98228 0.514674 3.20048L18.6619 22.7277C19.3351 23.4558 19.3423 24.5803 18.6619 25.3083L0.710117 44.8067C-0.41187 46.0249 0.456765 48 2.12165 48H19.7911C20.3268 48 20.8407 47.7765 21.2027 47.3801L41.5432 25.2867C42.2164 24.5586 42.2164 23.4414 41.5432 22.7133H41.536Z"
        }
      ),
      /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsxs(
        "linearGradient",
        {
          id: "paint0_linear_441_8734",
          x1: "10.0363",
          y1: "0",
          x2: "33.2427",
          y2: "0",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ c.jsx("stop", { stopColor: "#0A40FF" }),
            /* @__PURE__ */ c.jsx("stop", { offset: "1", stopColor: "#00C2FF" })
          ]
        }
      ) })
    ]
  }
);
var dt = /* @__PURE__ */ ((e) => (e.TOP_RIGHT = "TOP_RIGHT", e.TOP_LEFT = "TOP_LEFT", e.BOTTOM_RIGHT = "BOTTOM_RIGHT", e.BOTTOM_LEFT = "BOTTOM_LEFT", e))(dt || {}), xs = /* @__PURE__ */ ((e) => (e.slack = "slack", e.discord = "discord", e.discourse = "discourse", e.brand = "brand", e))(xs || {});
const k1 = "_modalBody_1s9iv_1", $1 = "_searchBody_1s9iv_6", P1 = "_chatContainer_1s9iv_39", N1 = "_inputWrapper_1s9iv_44", I1 = "_titleText_1s9iv_83", L1 = "_iconAttachmentContainer_1s9iv_146", O1 = "_searchEntry_1s9iv_155", F1 = "_titleButton_1s9iv_169", M1 = "_iconButton_1s9iv_192", D1 = "_iconButtonIcon_1s9iv_210", B1 = "_shareBanner_1s9iv_215", H1 = "_x_1s9iv_221", z1 = "_check_1s9iv_232", ye = {
  modalBody: k1,
  searchBody: $1,
  chatContainer: P1,
  inputWrapper: N1,
  titleText: I1,
  iconAttachmentContainer: L1,
  searchEntry: O1,
  "algolia-docsearch-suggestion--highlight": "_algolia-docsearch-suggestion--highlight_1s9iv_161",
  titleButton: F1,
  iconButton: M1,
  iconButtonIcon: D1,
  shareBanner: B1,
  x: H1,
  check: z1
};
function V1(e, t, n) {
  var d;
  const { recaptchaSiteKey: r } = Jr(), o = !!((d = window.grecaptcha) != null && d.execute), [s, i] = P(null), [a, l] = P(!0);
  return W(() => {
    var f;
    o && t !== void 0 && n !== void 0 && (i(null), l(!0), (f = window.grecaptcha) == null || f.execute(r, { action: "submit" }).then((m) => {
      fetch(`${e}/api/pipeline/${n}/session/${t}/share/public`, {
        method: "GET",
        headers: {
          "x-recaptcha-token": m,
          cors: "no-cors",
          "Access-Control-Allow-Origin": "*"
        }
      }).then((p) => p.json()).then((p) => {
        p && i(p.id);
      }).catch((p) => {
        console.log(`Error fetching share link: ${p}`);
      }).finally(() => {
        l(!1);
      });
    }));
  }, [o, t, n, r, e]), {
    shareLink: s,
    shareChat: () => {
      var f;
      (f = window.grecaptcha) == null || f.execute(r, { action: "submit" }).then((m) => {
        fetch(`${e}/api/pipeline/${n}/session/${t}/share/public`, {
          method: "POST",
          headers: {
            "x-recaptcha-token": m,
            "Content-Type": "application/json"
          }
        }).then((p) => p.json()).then((p) => {
          p && i(p.id), l(!1);
        });
      });
    },
    shareLinkLoading: a
  };
}
const $i = ({ className: e, size: t, stroke: n, color: r }) => /* @__PURE__ */ c.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t || "24",
    height: t || "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r || "black",
    strokeWidth: n || "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `${e} icon icon-tabler icons-tabler-outline icon-tabler-check`,
    children: [
      /* @__PURE__ */ c.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ c.jsx("path", { d: "M5 12l5 5l10 -10" })
    ]
  }
), W1 = ({
  className: e = "",
  size: t = 24,
  stroke: n = 2,
  color: r = null
}) => {
  const o = "var(--primary, #0A40FF)";
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      className: e,
      xmlns: "http://www.w3.org/2000/svg",
      width: t || "24",
      height: t || "24",
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            stroke: r || o,
            strokeWidth: n || "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            stroke: r || o,
            strokeWidth: n || "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}, Pi = ({
  className: e = "",
  size: t = 24,
  stroke: n = 2,
  color: r = null
}) => /* @__PURE__ */ c.jsxs(
  "svg",
  {
    className: e,
    xmlns: "http://www.w3.org/2000/svg",
    width: t || "24",
    height: t || "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r || "black",
    children: [
      /* @__PURE__ */ c.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18", strokeWidth: n || "2" }),
      /* @__PURE__ */ c.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18", strokeWidth: n || "2" })
    ]
  }
), U1 = ({
  className: e = "",
  size: t = 16,
  stroke: n = 2,
  color: r = null
}) => /* @__PURE__ */ c.jsx(
  "svg",
  {
    width: t || "24",
    height: t || "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: /* @__PURE__ */ c.jsx("polyline", { points: "15 6 9 12 15 18", stroke: r || "#999", strokeWidth: n || "2" })
  }
), Y1 = ({
  className: e = "",
  size: t = 16,
  stroke: n = 2,
  color: r = null
}) => /* @__PURE__ */ c.jsx(
  "svg",
  {
    width: t || "24",
    height: t || "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: /* @__PURE__ */ c.jsx("polyline", { points: "9 6 15 12 9 18", stroke: r || "#999", strokeWidth: n || "2" })
  }
);
function hc(e, t) {
  return {
    [e]: {
      url: "https://mcp.runllm.com/mcp/",
      headers: {
        "assistant-name": t
      }
    }
  };
}
function G1(e, t) {
  const n = btoa(JSON.stringify(hc(e, t)));
  return `cursor://anysphere.cursor-deeplink/mcp/install?name=${e}&config=${n}`;
}
const lr = ({
  expandOnHover: e,
  onMouseEnter: t,
  onMouseLeave: n,
  ...r
}) => {
  const { children: o, ...s } = r, [i, a] = P(!1), [l, u] = P(0), d = J(null);
  return tn(() => {
    d.current && u(d.current.scrollWidth);
  }, [o]), /* @__PURE__ */ c.jsx(
    en,
    {
      ...s,
      onMouseEnter: (f) => {
        a(!0), t == null || t(f);
      },
      onMouseLeave: (f) => {
        a(!1), n == null || n(f);
      },
      style: {
        padding: e && !i ? "6px 8px" : "6px 16px"
      },
      styles: {
        section: {
          marginInlineEnd: e && !i ? 0 : void 0
        }
      },
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          style: {
            display: "inline-block",
            overflow: "hidden",
            width: e && !i ? 0 : l,
            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            verticalAlign: "middle"
          },
          children: /* @__PURE__ */ c.jsx("div", { ref: d, style: { whiteSpace: "nowrap" }, children: o })
        }
      )
    }
  );
}, gc = ({ color: e, size: t, stroke: n }) => /* @__PURE__ */ c.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t || "16",
    height: t || "16",
    viewBox: "0 0 16 16",
    fill: "none",
    children: [
      /* @__PURE__ */ c.jsx(
        "path",
        {
          d: "M2 4H3.33333H14",
          stroke: e || "#C40D0D",
          strokeWidth: n || "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ c.jsx(
        "path",
        {
          d: "M5.33334 4.00016V2.66683C5.33334 2.31321 5.47382 1.97407 5.72387 1.72402C5.97392 1.47397 6.31305 1.3335 6.66668 1.3335H9.33334C9.68697 1.3335 10.0261 1.47397 10.2762 1.72402C10.5262 1.97407 10.6667 2.31321 10.6667 2.66683V4.00016M12.6667 4.00016V13.3335C12.6667 13.6871 12.5262 14.0263 12.2762 14.2763C12.0261 14.5264 11.687 14.6668 11.3333 14.6668H4.66668C4.31305 14.6668 3.97392 14.5264 3.72387 14.2763C3.47382 14.0263 3.33334 13.6871 3.33334 13.3335V4.00016H12.6667Z",
          stroke: e || "#C40D0D",
          strokeWidth: n || "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ c.jsx(
        "path",
        {
          d: "M6.66666 7.3335V11.3335",
          stroke: e || "#C40D0D",
          strokeWidth: n || "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ c.jsx(
        "path",
        {
          d: "M9.33334 7.3335V11.3335",
          stroke: e || "#C40D0D",
          strokeWidth: n || "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), X1 = (e) => {
  if (!e) return null;
  try {
    const t = new URL(`/chat/${e}`, "https://app.runllm.com");
    return t.origin !== "https://app.runllm.com" || !t.pathname.startsWith("/chat/") ? null : t.href;
  } catch {
    return null;
  }
}, K1 = ({
  logo: e,
  title: t,
  isDarkMode: n,
  serverAddress: r,
  assistantId: o,
  sessionId: s,
  mcpDisplayName: i,
  mcpEndpointName: a,
  onClearChat: l,
  disclaimer: u
}) => {
  const [d, f] = P(!1), [m, p] = P(!0), [y, g] = P(!1), [v, w] = P(() => localStorage.getItem("runllm-cursor-button-hovered") === "true"), [S, b] = P(() => localStorage.getItem("runllm-widget-visited") === "true"), [C, _] = P(!S), x = () => {
    v || (localStorage.setItem("runllm-cursor-button-hovered", "true"), w(!0));
  }, E = () => {
    const D = !C;
    _(D), !D && !S && (localStorage.setItem("runllm-widget-visited", "true"), b(!0));
  }, { shareLink: j, shareChat: $, shareLinkLoading: I } = V1(
    r,
    s,
    o
  ), O = X1(j), B = i && a ? /* @__PURE__ */ c.jsx(
    lr,
    {
      className: ye.titleButton,
      variant: "subtle",
      size: "sm",
      leftSection: y ? /* @__PURE__ */ c.jsx($i, { size: 16, stroke: 3, color: "green" }) : /* @__PURE__ */ c.jsx("img", { src: "/src/icons/mcp.png", width: 16, height: 16 }),
      onClick: async () => {
        await navigator.clipboard.writeText(
          JSON.stringify(hc(i, a))
        ), g(!0), setTimeout(() => {
          g(!1);
        }, 2e3);
      },
      expandOnHover: !0,
      children: "Copy MCP Config"
    }
  ) : null, G = i && a ? /* @__PURE__ */ c.jsx(
    lr,
    {
      className: ye.titleButton,
      variant: "subtle",
      size: "sm",
      leftSection: /* @__PURE__ */ c.jsx("img", { src: "/src/icons/cursor.png", width: 16, height: 16 }),
      onClick: () => {
        window.open(G1(i, a), "_blank");
      },
      onMouseEnter: x,
      expandOnHover: !0,
      children: "Open in Cursor"
    }
  ) : null, F = /* @__PURE__ */ c.jsx(
    lr,
    {
      className: ye.titleButton,
      variant: "subtle",
      size: "sm",
      leftSection: /* @__PURE__ */ c.jsx(gc, { color: "var(--gray-mid, #999)", size: 16 }),
      onClick: l,
      tabIndex: -1,
      expandOnHover: !0,
      children: "Clear Chat"
    }
  ), q = /* @__PURE__ */ c.jsx(
    lr,
    {
      disabled: I,
      className: ye.titleButton,
      variant: "subtle",
      size: "sm",
      onClick: () => f(!d),
      leftSection: /* @__PURE__ */ c.jsx(W1, { size: 16, stroke: 3, color: "var(--gray-mid, #999)" }),
      expandOnHover: !0,
      children: "Share Link"
    }
  ), Y = /* @__PURE__ */ c.jsx(
    "div",
    {
      onClick: E,
      style: {
        cursor: "pointer",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: C ? /* @__PURE__ */ c.jsx(Y1, { size: 24, color: "var(--gray-mid, #999)" }) : /* @__PURE__ */ c.jsx(U1, { size: 24, color: "var(--primary, #0a40ff)" })
    }
  ), V = /* @__PURE__ */ c.jsx(k, { className: ye.shareBanner, children: /* @__PURE__ */ c.jsx(Rn, { justify: "flex-start", children: /* @__PURE__ */ c.jsxs(Mn, { gap: "4px", children: [
    /* @__PURE__ */ c.jsx(oe, { style: { fontSize: "14px", color: n ? "white" : "black" }, fw: 700, children: "Make this public?" }),
    /* @__PURE__ */ c.jsxs(oe, { style: { fontSize: "14px", color: n ? "white" : "black" }, children: [
      "This will generate a URL anyone can view publicly, without needing to log in. ",
      /* @__PURE__ */ c.jsx("br", {}),
      "You cannot make this chat private after this change."
    ] }),
    /* @__PURE__ */ c.jsxs(Ge, { mt: "8px", gap: "8px", justify: "flex-start", children: [
      /* @__PURE__ */ c.jsxs(
        en,
        {
          className: `${ye.iconButton} ${ye.x}`,
          variant: "outline",
          size: "sm",
          style: { fontSize: "12px" },
          disabled: I,
          onClick: () => f(!1),
          children: [
            /* @__PURE__ */ c.jsx(
              Pi,
              {
                className: ye.iconButtonIcon,
                color: "var(--mantine-color-dimmed)",
                stroke: 3,
                size: 16
              }
            ),
            "Cancel"
          ]
        }
      ),
      /* @__PURE__ */ c.jsxs(
        en,
        {
          className: `${ye.iconButton} ${ye.check}`,
          variant: "outline",
          size: "sm",
          style: { fontSize: "12px" },
          loading: I,
          disabled: I,
          onClick: $,
          children: [
            /* @__PURE__ */ c.jsx(
              $i,
              {
                className: ye.iconButtonIcon,
                color: "var(--primary, #0A40FF)",
                stroke: 3,
                size: 16
              }
            ),
            "Yes, share"
          ]
        }
      )
    ] })
  ] }) }) }), ee = u && m ? /* @__PURE__ */ c.jsxs(
    k,
    {
      style: {
        width: "800px",
        backgroundColor: "#fff6",
        padding: "8px 24px 8px 24px",
        fontSize: "small",
        fontWeight: 400,
        lineHeight: "140%",
        color: "#999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ c.jsx(
          "span",
          {
            dangerouslySetInnerHTML: { __html: u },
            style: { textAlign: "center", marginRight: "20px" }
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => p(!1),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#999",
              padding: "0",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              position: "absolute",
              right: "34px"
            },
            "aria-label": "Close disclaimer",
            children: /* @__PURE__ */ c.jsx(Pi, { size: 16, color: "#999" })
          }
        )
      ]
    }
  ) : null;
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs(
      k,
      {
        style: {
          width: "800px",
          height: "64px",
          padding: "16px 24px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ c.jsxs(Ge, { justify: "flex-start", gap: 8, children: [
            e,
            /* @__PURE__ */ c.jsx(oe, { className: ye.titleText, style: { color: n ? "white" : "black" }, children: t })
          ] }),
          /* @__PURE__ */ c.jsxs(Ge, { justify: "flex-end", gap: 8, children: [
            Y,
            C && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              G,
              B,
              q,
              F
            ] }),
            !C && F
          ] })
        ]
      }
    ),
    u && m && /* @__PURE__ */ c.jsx(
      k,
      {
        style: {
          width: "800px",
          height: "1px",
          backgroundColor: n ? "#333" : "#f9fafb",
          margin: "0"
        }
      }
    ),
    ee,
    d && j && /* @__PURE__ */ c.jsx(Ge, { justify: "flex-end", p: "0 24px", children: /* @__PURE__ */ c.jsxs(oe, { c: "var(--mantine-color-dimmed)", style: { fontSize: "13px" }, span: !0, children: [
      "This chat is public:",
      " ",
      O ? /* @__PURE__ */ c.jsxs(Fn, { style: { fontSize: "13px" }, href: O, target: "_blank", children: [
        "https...",
        j.substring(j.length - 10, j.length)
      ] }) : /* @__PURE__ */ c.jsx("span", { style: { color: "red" }, children: "Invalid share link" })
    ] }) }),
    d && s && !I && !j && V
  ] });
}, q1 = "runllm-widget", J1 = "runllm-widget-script", Sr = "shadow-div", Z1 = "_attachmentPreviewArea_13szz_1", Q1 = "_attachmentTitle_13szz_15", eh = "_imagePreviewRow_13szz_23", th = "_imagePreview_13szz_23", nh = "_fileNameText_13szz_38", rh = "_deleteText_13szz_46", oh = "_selectedImage_13szz_55", sh = "_imagePreviewContainer_13szz_61", bt = {
  attachmentPreviewArea: Z1,
  attachmentTitle: Q1,
  imagePreviewRow: eh,
  imagePreview: th,
  fileNameText: nh,
  deleteText: rh,
  selectedImage: oh,
  imagePreviewContainer: sh
}, ih = ({
  files: e,
  onRemoveFile: t,
  isDarkMode: n
}) => {
  const [r, o] = P(null), s = (a) => {
    o(a);
  }, i = (a, l) => {
    const d = a.type === "text/plain" ? /* @__PURE__ */ c.jsx(pc, { size: 48 }) : /* @__PURE__ */ c.jsx(
      _t,
      {
        className: bt.imagePreview,
        src: URL.createObjectURL(a),
        alt: `Preview ${l}`,
        fit: "contain",
        style: { borderRadius: "4px" }
      }
    );
    return /* @__PURE__ */ c.jsx(
      k,
      {
        className: `${bt.imagePreviewContainer} ${r === l ? bt.selectedImage : ""}`,
        onClick: () => s(l),
        children: d
      },
      l
    );
  };
  return /* @__PURE__ */ c.jsxs(
    k,
    {
      className: bt.attachmentPreviewArea,
      style: { backgroundColor: n ? "#444444" : "#EEEEEE" },
      children: [
        /* @__PURE__ */ c.jsx(oe, { className: bt.attachmentTitle, children: "Attachments" }),
        /* @__PURE__ */ c.jsx(k, { className: bt.imagePreviewRow, children: e.map((a, l) => /* @__PURE__ */ c.jsxs(_e.Fragment, { children: [
          i(a, l),
          r === l && /* @__PURE__ */ c.jsxs(k, { style: { display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ c.jsx(
              oe,
              {
                className: bt.fileNameText,
                style: {
                  maxWidth: "250px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: a.name
              }
            ),
            /* @__PURE__ */ c.jsxs(
              k,
              {
                style: { display: "flex", flexDirection: "row", cursor: "pointer" },
                onClick: (u) => {
                  u.stopPropagation(), o(null), t(l);
                },
                children: [
                  /* @__PURE__ */ c.jsx(gc, {}),
                  /* @__PURE__ */ c.jsx(oe, { className: bt.deleteText, children: "Remove" })
                ]
              }
            )
          ] })
        ] }, l)) })
      ]
    }
  );
}, ah = ({ className: e }) => /* @__PURE__ */ c.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: e,
    children: [
      /* @__PURE__ */ c.jsx("polyline", { points: "4 17 10 11 4 5" }),
      /* @__PURE__ */ c.jsx("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
    ]
  }
), ch = async (e) => await fetch(`https://${e.applicationId}-dsn.algolia.net/1/indexes/*/queries`, {
  method: "POST",
  headers: {
    "X-Algolia-API-Key": e.apiKey ?? "",
    "X-Algolia-Application-Id": e.applicationId ?? ""
  },
  body: JSON.stringify({
    requests: [
      {
        query: e.query,
        indexName: e.indexName,
        attributesToSnippet: [
          "hierarchy.lvl1:10",
          "hierarchy.lvl2:10",
          "hierarchy.lvl3:10",
          "hierarchy.lvl4:10",
          "hierarchy.lvl5:10",
          "hierarchy.lvl6:10"
        ],
        facetFilters: JSON.parse(e.filters ?? "")
      }
    ]
  })
}), lh = ({ color: e }) => /* @__PURE__ */ c.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [
  /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
      fill: e ?? "#0A40FF"
    }
  ),
  /* @__PURE__ */ c.jsx("path", { d: "M10 8L16 12L10 16V8Z", fill: "white" })
] });
function xt(e, t = 1) {
  if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)) {
    const n = parseInt(e.slice(1, 3), 16), r = parseInt(e.slice(3, 5), 16), o = parseInt(e.slice(5, 7), 16);
    return `rgba(${n}, ${r}, ${o}, ${t})`;
  } else if (/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(e)) {
    const n = e.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
    if (!n)
      return console.warn("Invalid highlight color passed into RunLLM Chat Widget. Using default brand"), e;
    const r = parseInt(n[1], 10), o = parseInt(n[2], 10), s = parseInt(n[3], 10);
    return `rgba(${r}, ${o}, ${s}, ${t})`;
  }
  return e;
}
function uh(e) {
  const [t, n] = P(0), r = () => {
    const i = JSON.parse(localStorage.getItem("runllm-usage-ts") || "[]");
    let a = 0;
    if (i.length > 0) {
      const l = e * 24 * 60 * 60 * 1e3, u = Date.now() - l;
      for (; i.length > 0 && i[0] < u; )
        i.shift();
      localStorage.setItem("runllm-usage-ts", JSON.stringify(i)), a = i.length;
    }
    return n(a), a;
  };
  return {
    userUsageCount: t,
    computeUserUsage: r,
    addUserUsage: () => {
      const i = JSON.parse(localStorage.getItem("runllm-usage-ts") || "[]");
      return i.push(Date.now()), localStorage.setItem("runllm-usage-ts", JSON.stringify(i)), r();
    },
    removeUserUsage: () => {
      const i = JSON.parse(localStorage.getItem("runllm-usage-ts") || "[]");
      return i.pop(), localStorage.setItem("runllm-usage-ts", JSON.stringify(i)), r();
    }
  };
}
const dh = ({ isDarkMode: e = !1 }) => /* @__PURE__ */ c.jsxs("svg", { width: "77", height: "12", viewBox: "0 0 77 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ c.jsx(
    "path",
    {
      className: e ? xe.logoTypeFillDark : xe.logoTypeFill,
      d: "M24.7939 9.24454C25.4269 10.3392 26.1057 10.1084 26.1057 10.8653C26.1057 11.2353 25.8902 11.3592 25.2266 11.3592H22.6504C22.1566 11.3592 21.9105 11.2353 21.9105 10.8653C21.9105 10.2628 22.7132 10.1101 22.2041 9.16817L21.4319 7.79521C21.2164 7.39469 20.9686 7.28607 20.3983 7.19273C19.8892 7.13163 19.4564 7.10109 19.4564 7.54743V8.61152C19.4564 10.4936 20.49 10.0303 20.49 10.8636C20.49 11.2336 20.2745 11.3575 19.5803 11.3575H16.7563C16.0928 11.3575 15.8467 11.2336 15.8467 10.8636C15.8467 10.0303 16.9108 10.4936 16.9108 8.61152V3.42683C16.9108 1.29695 15.8467 1.9758 15.8467 1.05087C15.8467 0.680896 16.0928 0.557007 16.7563 0.557007H20.3814C23.6517 0.557007 25.303 2.2083 25.303 4.05985C25.303 5.41755 24.7005 6.48164 23.482 7.00605L24.7939 9.24285V9.24454ZM22.7268 4.27709C22.7268 2.76495 21.6932 1.59225 20.2897 1.59225C19.5651 1.59225 19.4564 1.68389 19.4564 2.00804V5.52616C19.4564 5.9742 19.9809 6.12864 20.6139 6.20501C22.1566 6.42054 22.7285 5.3259 22.7285 4.27709H22.7268Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      className: e ? xe.logoTypeFillDark : xe.logoTypeFill,
      d: "M33.8561 6.43749V8.92207C33.8561 10.0337 34.7505 9.83172 34.7505 10.2798C34.7505 10.5258 34.5655 10.6956 34.1956 10.9128C33.7017 11.1606 32.6987 11.5 32.2354 11.5C31.7721 11.5 31.5718 11.2522 31.526 10.5428L31.5107 10.2492C30.9083 11.0519 29.9681 11.4983 29.1348 11.4983C27.4071 11.4983 26.5433 10.2645 26.5433 8.38238L26.528 6.43749C26.528 5.51256 25.8186 5.54311 25.8186 5.0798C25.8186 4.84899 25.9425 4.7251 26.3125 4.55539C26.9455 4.26179 28.3337 3.80017 28.5968 3.80017C28.8751 3.80017 28.982 3.98516 28.982 4.32458L28.9668 6.43749V8.28904C28.9668 9.35313 29.2145 9.98616 30.0156 9.98616C30.7555 9.97088 31.4344 9.1376 31.4344 7.93435V6.43749C31.4344 5.51256 30.7097 5.54311 30.7097 5.0798C30.7097 4.84899 30.8336 4.7251 31.2036 4.55539C31.8366 4.26179 33.2401 3.80017 33.4862 3.80017C33.7645 3.80017 33.8714 3.98516 33.8714 4.32458L33.8561 6.43749Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      className: e ? xe.logoTypeFillDark : xe.logoTypeFill,
      d: "M43.9606 9.53808C44.1608 10.48 44.7633 10.3408 44.7633 10.9263C44.7633 11.281 44.485 11.3591 44.0539 11.3591H41.6321C41.1688 11.3591 40.8922 11.2505 40.8922 10.9111C40.8922 10.3714 41.7102 10.3866 41.4947 9.38365L41.0008 7.00768C40.8158 6.15913 40.507 5.32584 39.6737 5.34112C38.949 5.34112 38.3771 6.00469 38.3771 7.08406V9.16642C38.3771 10.5699 39.1323 10.1847 39.1323 10.9246C39.1323 11.2793 38.8692 11.3574 38.4229 11.3574H35.923C35.4597 11.3574 35.1831 11.2488 35.1831 10.9094C35.1831 10.1847 35.9553 10.5699 35.9553 9.16642V6.31187C35.9553 5.92662 35.7245 5.69412 35.4767 5.47858C35.3375 5.36997 35.1831 5.24778 35.1831 5C35.1831 4.72167 35.3223 4.59948 35.6922 4.42977C36.2947 4.15144 37.4657 3.81202 37.7288 3.79674C38.0071 3.79674 38.114 3.98173 38.114 4.32115V5.07637C38.6843 4.22781 39.5651 3.79504 40.5511 3.79504C42.4179 3.79504 43.0034 5.07637 43.4056 6.94319L43.9606 9.53469V9.53808Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      className: e ? xe.logoTypeFillDark : xe.logoTypeFill,
      d: "M54.0221 8.67432C53.9916 9.58398 53.8982 10.217 53.776 10.665C53.6521 11.1589 53.3908 11.3592 52.4642 11.3592H46.6787C46.0151 11.3592 45.769 11.2353 45.769 10.8653C45.769 9.94037 46.8331 10.6175 46.8331 8.48934V3.30465C46.8331 1.42255 45.7996 1.88586 45.7996 1.05258C45.7996 0.682605 46.0151 0.558716 46.7092 0.558716H49.5332C50.1968 0.558716 50.4429 0.682605 50.4429 1.05258C50.4429 1.88586 49.3788 1.42255 49.3788 3.30465V9.55343C49.3788 10.032 49.5943 10.2476 50.5057 10.2476L51.0606 10.2323C52.0025 10.2323 52.3572 9.58398 52.8969 8.45879C53.16 7.93438 53.3755 7.81049 53.6521 7.87159C54.0068 7.96493 54.0374 8.19574 54.0221 8.67432Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      className: e ? xe.logoTypeFillDark : xe.logoTypeFill,
      d: "M62.5978 8.67432C62.5672 9.58398 62.4739 10.217 62.3517 10.665C62.2278 11.1589 61.9665 11.3592 61.0398 11.3592H55.2544C54.5908 11.3592 54.3447 11.2353 54.3447 10.8653C54.3447 9.94037 55.4088 10.6175 55.4088 8.48934V3.30465C55.4088 1.42255 54.3753 1.88586 54.3753 1.05258C54.3753 0.682605 54.5908 0.558716 55.2849 0.558716H58.1089C58.7725 0.558716 59.0186 0.682605 59.0186 1.05258C59.0186 1.88586 57.9545 1.42255 57.9545 3.30465V9.55343C57.9545 10.032 58.17 10.2476 59.0814 10.2476L59.6363 10.2323C60.5782 10.2323 60.9329 9.58398 61.4726 8.45879C61.7357 7.93438 61.9512 7.81049 62.2278 7.87159C62.5825 7.96493 62.6131 8.19574 62.5978 8.67432Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      className: e ? xe.logoTypeFillDark : xe.logoTypeFill,
      d: "M75.1527 8.9221C75.2138 10.3884 76.2643 9.9251 76.2643 10.8653C76.2643 11.2353 76.0488 11.3592 75.3699 11.3592H72.6545C72.0062 11.3592 71.7602 11.2353 71.7602 10.8653C71.7602 10.0015 72.6698 10.3103 72.6545 8.9221L72.5629 3.64577L69.4928 10.2492C69.3536 10.5428 69.2145 10.665 68.8598 10.7431C68.5051 10.8212 68.3048 10.682 68.2115 10.4495L65.3722 3.73741L65.2025 9.38372C65.1719 10.3562 65.9747 10.3562 65.9747 10.9111C65.9747 11.2658 65.7439 11.3439 65.2653 11.3439H63.7379C63.1676 11.3439 62.9827 11.2353 62.9827 10.8958C62.9827 10.3867 63.8618 10.3562 63.9093 9.38372L64.2334 2.70387C64.2793 1.59226 63.3085 1.77894 63.3085 1.05258C63.3085 0.682605 63.5393 0.558716 64.1112 0.558716H66.1783C66.5025 0.558716 66.718 0.697879 66.8572 0.99148L69.5267 7.16219L72.4118 1.00675C72.5663 0.697879 72.7665 0.558716 73.0907 0.558716H75.0509C75.6211 0.558716 75.8689 0.682605 75.8689 1.05258C75.8689 1.77725 74.8964 1.57699 74.9422 2.70387L75.1578 8.9221H75.1527Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      className: e ? xe.logoTypeFillDark : xe.logoTypeFill,
      d: "M10.3405 5.67833L7.18685 2.23817C6.90753 1.93362 7.12378 1.43986 7.53825 1.43986H8.29152C8.42487 1.43986 8.55282 1.49572 8.64292 1.59483L12.375 5.66572C12.5444 5.84953 12.5408 6.13245 12.3696 6.31446L7.7545 11.1963C7.46797 11.499 7.68242 12 8.1005 12H8.77087C8.90242 12 9.02676 11.9459 9.11687 11.8504L14.3357 6.32888C14.5069 6.14687 14.5087 5.86394 14.3411 5.68013L9.27545 0.154978C9.18535 0.0558642 9.0574 0 8.92405 0H4.26569C3.85121 0 3.63496 0.491966 3.91428 0.798318L8.38703 5.67833C8.55462 5.86034 8.55462 6.13966 8.38703 6.32167L4.64232 10.4052C4.55222 10.5043 4.42427 10.5601 4.29092 10.5601H3.79715C3.38267 10.5601 3.16642 10.0682 3.44574 9.76183L6.60117 6.31987C6.76877 6.13786 6.76877 5.85674 6.60117 5.67473L1.4905 0.153176C1.40039 0.0558642 1.27425 0 1.14089 0H0.477731C0.0614527 0 -0.154796 0.49557 0.128129 0.80012L4.64593 5.68193C4.81352 5.86394 4.81532 6.14507 4.64593 6.32708L0.176785 11.2017C-0.102536 11.5062 0.113713 12 0.528189 12H4.92705C5.0604 12 5.18835 11.9441 5.27845 11.845L10.3423 6.32167C10.5099 6.13966 10.5099 5.86034 10.3423 5.67833H10.3405Z"
    }
  )
] }), fh = "_icon_1nb9m_21", Rt = {
  icon: fh
}, ph = ({ className: e }) => /* @__PURE__ */ c.jsx(
  "svg",
  {
    className: e,
    fill: "none",
    height: "37",
    viewBox: "0 0 36 37",
    width: "36",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ c.jsx(
      "path",
      {
        className: "path",
        d: "M30.4954 6.75769C28.1302 5.67483 25.6332 4.90661 23.0684 4.47266C22.7174 5.10009 22.3998 5.74563 22.117 6.40658C19.3849 5.99489 16.6065 5.99489 13.8744 6.40658C13.5914 5.7457 13.2739 5.10016 12.923 4.47266C10.3565 4.91027 7.8579 5.68032 5.49029 6.76335C0.789966 13.7176 -0.484217 20.4991 0.152875 27.1843C2.9055 29.218 5.98647 30.7647 9.26187 31.7572C9.99939 30.7652 10.652 29.7129 11.2128 28.6114C10.1477 28.2135 9.11963 27.7227 8.14059 27.1446C8.39826 26.9577 8.65026 26.7652 8.89377 26.5783C11.7426 27.918 14.8519 28.6127 17.9999 28.6127C21.148 28.6127 24.2573 27.918 27.1061 26.5783C27.3524 26.7794 27.6044 26.9719 27.8593 27.1446C26.8783 27.7237 25.8484 28.2154 24.7814 28.6142C25.3415 29.7152 25.9942 30.7667 26.7323 31.7572C30.0105 30.7687 33.0939 29.2227 35.847 27.1871C36.5945 19.4344 34.57 12.7152 30.4954 6.75769ZM12.0198 23.0729C10.2444 23.0729 8.77768 21.4618 8.77768 19.4797C8.77768 17.4976 10.1934 15.8723 12.0141 15.8723C13.8348 15.8723 15.2902 17.4976 15.259 19.4797C15.2279 21.4618 13.8291 23.0729 12.0198 23.0729ZM23.9801 23.0729C22.2019 23.0729 20.7408 21.4618 20.7408 19.4797C20.7408 17.4976 22.1566 15.8723 23.9801 15.8723C25.8036 15.8723 27.2477 17.4976 27.2165 19.4797C27.1854 21.4618 25.7894 23.0729 23.9801 23.0729Z",
        fill: "#5462EA"
      }
    )
  }
), mh = ({ className: e }) => /* @__PURE__ */ c.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -1 104 106", className: `${e}`, children: [
  /* @__PURE__ */ c.jsx(
    "path",
    {
      fill: "#231f20",
      d: "M51.87 0C23.71 0 0 22.83 0 51v52.81l51.86-.05c28.16 0 51-23.71 51-51.87S80 0 51.87 0Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      fill: "#fff9ae",
      d: "M52.37 19.74a31.62 31.62 0 0 0-27.79 46.67l-5.72 18.4 20.54-4.64a31.61 31.61 0 1 0 13-60.43Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      fill: "#00aeef",
      d: "M77.45 32.12a31.6 31.6 0 0 1-38.05 48l-20.54 4.7 20.91-2.47a31.6 31.6 0 0 0 37.68-50.23Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      fill: "#00a94f",
      d: "M71.63 26.29A31.6 31.6 0 0 1 38.8 78l-19.94 6.82 20.54-4.65a31.6 31.6 0 0 0 32.23-53.88Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      fill: "#f15d22",
      d: "M26.47 67.11a31.61 31.61 0 0 1 51-35 31.61 31.61 0 0 0-52.89 34.3l-5.72 18.4Z"
    }
  ),
  /* @__PURE__ */ c.jsx(
    "path",
    {
      fill: "#e31b23",
      d: "M24.58 66.41a31.61 31.61 0 0 1 47.05-40.12 31.61 31.61 0 0 0-49 39.63l-3.76 18.9Z"
    }
  )
] }), hh = "_slackFill1_17qdk_1", gh = "_slackFill2_17qdk_5", yh = "_slackFill3_17qdk_9", vh = "_slackFill4_17qdk_13", bh = "_slackFill5_17qdk_17", _n = {
  slackFill1: hh,
  slackFill2: gh,
  slackFill3: yh,
  slackFill4: vh,
  slackFill5: bh
}, ur = ({ className: e }) => /* @__PURE__ */ c.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    className: e,
    children: [
      /* @__PURE__ */ c.jsxs("g", { "clip-path": "url(#clip0_1766_915)", children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M5.1401 15.1181C5.1401 16.4977 4.02514 17.6126 2.64561 17.6126C1.26608 17.6126 0.151123 16.4977 0.151123 15.1181C0.151123 13.7386 1.26608 12.6237 2.64561 12.6237H5.1401V15.1181ZM6.38734 15.1181C6.38734 13.7386 7.5023 12.6237 8.88183 12.6237C10.2614 12.6237 11.3763 13.7386 11.3763 15.1181V21.3544C11.3763 22.7339 10.2614 23.8489 8.88183 23.8489C7.5023 23.8489 6.38734 22.7339 6.38734 21.3544V15.1181Z",
            fill: "#E01E5A",
            className: _n.slackFill1
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M8.88169 5.10232C7.50216 5.10232 6.3872 3.98736 6.3872 2.60783C6.3872 1.2283 7.50216 0.113342 8.88169 0.113342C10.2612 0.113342 11.3762 1.2283 11.3762 2.60783V5.10232H8.88169ZM8.88169 6.36846C10.2612 6.36846 11.3762 7.48342 11.3762 8.86295C11.3762 10.2425 10.2612 11.3574 8.88169 11.3574H2.62657C1.24704 11.3574 0.13208 10.2425 0.13208 8.86295C0.13208 7.48342 1.24704 6.36846 2.62657 6.36846H8.88169Z",
            fill: "#36C5F0",
            className: _n.slackFill2
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M18.8788 8.86295C18.8788 7.48342 19.9938 6.36846 21.3733 6.36846C22.7528 6.36846 23.8678 7.48342 23.8678 8.86295C23.8678 10.2425 22.7528 11.3574 21.3733 11.3574H18.8788V8.86295ZM17.6316 8.86295C17.6316 10.2425 16.5166 11.3574 15.1371 11.3574C13.7575 11.3574 12.6426 10.2425 12.6426 8.86295V2.60783C12.6426 1.2283 13.7575 0.113342 15.1371 0.113342C16.5166 0.113342 17.6316 1.2283 17.6316 2.60783V8.86295Z",
            fill: "#2EB67D",
            className: _n.slackFill3
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M15.1371 18.8599C16.5166 18.8599 17.6316 19.9748 17.6316 21.3544C17.6316 22.7339 16.5166 23.8489 15.1371 23.8489C13.7575 23.8489 12.6426 22.7339 12.6426 21.3544V18.8599H15.1371ZM15.1371 17.6126C13.7575 17.6126 12.6426 16.4977 12.6426 15.1181C12.6426 13.7386 13.7575 12.6237 15.1371 12.6237H21.3922C22.7717 12.6237 23.8867 13.7386 23.8867 15.1181C23.8867 16.4977 22.7717 17.6126 21.3922 17.6126H15.1371Z",
            fill: "#ECB22E",
            className: _n.slackFill4
          }
        )
      ] }),
      /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx("clipPath", { id: "clip0_1766_915", children: /* @__PURE__ */ c.jsx("rect", { width: "24", height: "24", fill: "white", className: _n.slackFill5 }) }) })
    ]
  }
), xh = (e) => /^https?:\/\//i.test(e) ? e : `https://${e}`, wh = ({ communityType: e, brandLogo: t }) => {
  let n = /* @__PURE__ */ c.jsx(ur, { className: Rt.icon });
  switch (e) {
    case "discord":
      n = /* @__PURE__ */ c.jsx(ph, { className: Rt.icon });
      break;
    case "discourse":
      n = /* @__PURE__ */ c.jsx(mh, { className: Rt.icon });
      break;
    case "slack":
      n = /* @__PURE__ */ c.jsx(ur, { className: Rt.icon });
      break;
    case "brand":
      n = t ? /* @__PURE__ */ c.jsx(_t, { src: t, className: Rt.icon, alt: "Brand Community Logo" }) : /* @__PURE__ */ c.jsx(ur, { className: Rt.icon });
      break;
    default:
      n = /* @__PURE__ */ c.jsx(ur, { className: Rt.icon });
  }
  return n;
}, Ch = ({
  communityUrl: e,
  communityType: t,
  brandLogo: n,
  buttonText: r
}) => /* @__PURE__ */ c.jsx(
  "a",
  {
    href: xh(e),
    target: "_blank",
    rel: "noopener noreferrer",
    title: r ?? "Join our community",
    style: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "4px 16px",
      gap: "6px",
      width: "48px",
      height: "24px",
      background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), rgba(0, 0, 0, 0.07)",
      borderRadius: "200px",
      flex: "none",
      order: 2,
      flexGrow: 0,
      textDecoration: "none"
    },
    children: /* @__PURE__ */ c.jsx(wh, { communityType: t, brandLogo: n })
  }
), Sh = ({ isDarkMode: e, config: t, portalRoot: n }) => {
  const { brandLogo: r, communityUrl: o, communityType: s } = t, i = !!(o && s);
  return /* @__PURE__ */ c.jsx(Mn, { gap: 0, children: /* @__PURE__ */ c.jsx(
    k,
    {
      style: {
        height: "56px",
        background: e ? "var(--gray-dark, #1a1a1a)" : "var(--gray-light, #eee)",
        padding: "16px 24px"
      },
      children: /* @__PURE__ */ c.jsxs(Ge, { justify: "space-between", w: "100%", align: "center", children: [
        /* @__PURE__ */ c.jsxs(Ge, { gap: 4, align: "center", children: [
          /* @__PURE__ */ c.jsx(
            oe,
            {
              fz: 11,
              c: "var(--gray-mid, rgba(0, 0, 0, 0.40))",
              style: { textDecoration: "none" },
              children: "Powered by"
            }
          ),
          /* @__PURE__ */ c.jsx(
            Fn,
            {
              href: "https://runllm.com",
              target: "_blank",
              rel: "noopener noreferrer",
              title: "Visit RunLLM website",
              style: { textDecoration: "none" },
              children: /* @__PURE__ */ c.jsx(dh, { isDarkMode: e })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs(Ge, { gap: "md", align: "center", children: [
          /* @__PURE__ */ c.jsxs(
            $t,
            {
              width: 250,
              position: "bottom",
              clickOutsideEvents: ["mouseup", "touchend"],
              portalProps: { target: n },
              zIndex: 1e4,
              children: [
                /* @__PURE__ */ c.jsx($t.Target, { children: /* @__PURE__ */ c.jsx(
                  oe,
                  {
                    style: {
                      color: "var(--gray-mid, rgba(0, 0, 0, 0.40))",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140%",
                      cursor: "pointer"
                    },
                    children: "reCAPTCHA"
                  }
                ) }),
                /* @__PURE__ */ c.jsx($t.Dropdown, { style: { backgroundColor: "var(--mantine-color-body)" }, children: /* @__PURE__ */ c.jsxs(
                  oe,
                  {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140%",
                      color: "var(--gray-mid, rgba(0, 0, 0, 0.40))"
                    },
                    children: [
                      "Protected by reCAPTCHA. Google",
                      " ",
                      /* @__PURE__ */ c.jsx("a", { href: "https://policies.google.com/privacy", target: "_blank", children: "Privacy Policy" }),
                      " ",
                      "and",
                      " ",
                      /* @__PURE__ */ c.jsx("a", { href: "https://policies.google.com/terms", target: "_blank", children: "Terms of Service" }),
                      " ",
                      "apply."
                    ]
                  }
                ) })
              ]
            }
          ),
          i && /* @__PURE__ */ c.jsx(
            Ch,
            {
              communityUrl: o,
              communityType: s,
              brandLogo: r,
              buttonText: t.joinCommunityText
            }
          )
        ] })
      ] })
    }
  ) });
}, be = [];
for (let e = 0; e < 256; ++e)
  be.push((e + 256).toString(16).slice(1));
function _h(e, t = 0) {
  return (be[e[t + 0]] + be[e[t + 1]] + be[e[t + 2]] + be[e[t + 3]] + "-" + be[e[t + 4]] + be[e[t + 5]] + "-" + be[e[t + 6]] + be[e[t + 7]] + "-" + be[e[t + 8]] + be[e[t + 9]] + "-" + be[e[t + 10]] + be[e[t + 11]] + be[e[t + 12]] + be[e[t + 13]] + be[e[t + 14]] + be[e[t + 15]]).toLowerCase();
}
let xo;
const jh = new Uint8Array(16);
function Eh() {
  if (!xo) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    xo = crypto.getRandomValues.bind(crypto);
  }
  return xo(jh);
}
const Th = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ni = { randomUUID: Th };
function Rh(e, t, n) {
  var o;
  if (Ni.randomUUID && !e)
    return Ni.randomUUID();
  e = e || {};
  const r = e.random ?? ((o = e.rng) == null ? void 0 : o.call(e)) ?? Eh();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, _h(r);
}
const Ah = 3, kh = (e, t) => {
  var d;
  const n = !!((d = window.grecaptcha) != null && d.execute), { recaptchaSiteKey: r } = Jr(), [o, s] = P(() => {
    const f = localStorage.getItem(bo(t));
    return f ? JSON.parse(f) : void 0;
  }), [i, a] = P(0), l = H(
    (f) => {
      f === void 0 ? localStorage.removeItem(bo(t)) : localStorage.setItem(bo(t), JSON.stringify(f)), s(f);
    },
    [t]
  );
  return { fetchAccessToken: H(async () => {
    var f;
    try {
      if (i >= Ah || o && o.exp_timestamp_sec > Date.now() / 1e3 + 60)
        return o;
      if (!n)
        return a(i + 1), o;
      const m = await ((f = window.grecaptcha) == null ? void 0 : f.execute(r, {
        action: "submit"
      }));
      if (!m)
        return a(i + 1), o;
      const p = await fetch(`${e}/api/pipeline/${t}/chat/token/v1/public`, {
        method: "POST",
        headers: {
          "x-recaptcha-token": m,
          "Content-Type": "application/json"
        }
      });
      if (!p.ok) {
        const g = await p.text();
        return a(i + 1), console.log(`Error fetching token: ${g}`), o;
      }
      const y = await p.json();
      return l(y), a(0), y;
    } catch (m) {
      return a(i + 1), console.log(`Error fetching token: ${m}`), o;
    }
  }, [
    o,
    n,
    r,
    e,
    t,
    l,
    i
  ]) };
}, $h = 3, Ph = 1800, Nh = (e, t, n, r) => {
  const { fetchAccessToken: o } = kh(e, t), [s, i] = P("initial"), [a, l] = P(0), [u, d] = P(3e3), [f, m] = P(
    Date.now() / 1e3
  ), p = H(() => {
    l(0), d(3e3);
  }, []), y = J(null), g = J([]), v = l1(e), w = H(
    async (b, C) => {
      var $;
      if (i("connecting"), (($ = y.current) == null ? void 0 : $.readyState) === WebSocket.OPEN) return;
      const _ = await o();
      if (!_) {
        i("error");
        return;
      }
      const x = encodeURIComponent(_.token), E = `${v}/api/pipeline/${b}/chat/ws?chat_source=web&token=${x}&chat_user_id=${C}`, j = new WebSocket(E);
      return j.onopen = () => {
        i("open"), p(), g.current.forEach((I) => j.send(I)), g.current = [];
      }, j.onclose = () => {
        i("closed");
      }, j.onerror = () => {
        i("error"), j.close();
      }, j.onmessage = (I) => {
        const O = JSON.parse(I.data);
        r(O);
      }, y.current = j, j;
    },
    [v, o, p, r]
  );
  W(() => () => {
    y.current && y.current.close();
  }, []), W(() => {
    s === "closed" && a < $h && Date.now() / 1e3 - f < Ph && setTimeout(() => {
      l(a + 1), d(u * 2), w(t, n);
    }, u);
  }, [
    s,
    a,
    t,
    n,
    w,
    u,
    f
  ]);
  const S = H(
    (b) => {
      var C;
      ((C = y.current) == null ? void 0 : C.readyState) === WebSocket.OPEN ? y.current.send(b) : (g.current.push(b), m(Date.now() / 1e3), w(t, n));
    },
    [y, g, w, t, n]
  );
  return {
    status: s,
    sendWebSocketMessage: S
  };
};
function Ih(e) {
  if (!e.buffered_contents || e.buffered_contents.length === 0)
    return !0;
  const t = e.buffered_contents;
  for (let n = 0; n < t.length - 1; n++)
    if (t[n].streaming_index !== t[n + 1].streaming_index - 1)
      return !1;
  return e.last_streaming_index === void 0 ? t[0].streaming_index === 0 : t[0].streaming_index === e.last_streaming_index + 1;
}
function Lh(e) {
  return e.buffered_contents && e.buffered_contents.length > 0 && (e.buffered_contents.forEach((t) => {
    e.content += t.content;
  }), e.last_streaming_index = e.buffered_contents[e.buffered_contents.length - 1].streaming_index, e.buffered_contents = []), e;
}
function Oh(e, t) {
  if (e.buffered_contents === void 0 && (e.buffered_contents = []), e.last_streaming_index === void 0 || t.streaming_index > e.last_streaming_index || e.buffered_contents.some((r) => r.streaming_index !== t.streaming_index)) {
    const r = [];
    let o = !1;
    e.buffered_contents.forEach((s) => {
      s.streaming_index < t.streaming_index || o ? r.push(s) : (r.push(t), r.push(s), o = !0);
    }), o || r.push(t), e.buffered_contents = r;
  }
  return Ih(e) ? Lh(e) : e;
}
const Fh = (e, t, n, r) => {
  const [o, s] = P(""), [i, a] = P(() => {
    const C = localStorage.getItem(_i(t));
    if (C)
      try {
        return JSON.parse(C).filter((x) => !!x.content).map((x) => {
          if (x.action_status && !Array.isArray(x.action_status) || Array.isArray(x.action_status) && x.action_status.length > 0 && typeof x.action_status[0] == "string") {
            const E = { ...x };
            return delete E.action_status, E;
          }
          return x;
        });
      } catch (_) {
        return console.error("Error parsing stored history:", _), [];
      }
    return [];
  }), [l, u] = P(Date.now()), d = H(
    (C) => {
      localStorage.setItem(_i(t), JSON.stringify(C)), u(Date.now());
    },
    [t]
  ), [f] = P(() => {
    var x;
    const C = localStorage.getItem("runllm-user-context");
    if (C)
      try {
        const E = JSON.parse(C);
        if ((x = E.user) != null && x.email)
          return localStorage.setItem(mr(t), E.user.email), E.user.email;
      } catch (E) {
        console.error("Error parsing user context:", E);
      }
    const _ = localStorage.getItem(mr(t));
    if (!_) {
      const E = Rh();
      return localStorage.setItem(mr(t), E), E;
    }
    return _;
  }), m = i[i.length - 1], p = i.map((C) => C.session_id).filter((C) => C !== void 0)[0], y = (m == null ? void 0 : m.by) === Be.Assistant && (m == null ? void 0 : m.loadingStage) !== void 0 && [
    jn.Initialized,
    Ee.CHAT_RETRIEVAL,
    Ee.CHAT_CLASSIFICATION,
    Ee.CHAT_GENERATION_STARTS,
    Ee.CHAT_GENERATION_IN_PROGRESS
  ].includes(m == null ? void 0 : m.loadingStage), g = H(
    (C) => {
      a((_) => {
        var I;
        const x = [..._], E = C.data.type;
        if (E === Ee.SERVER_NON_STREAMING_CHAT) {
          const O = C.data.server_non_streaming_chat;
          if (!O)
            return d(x), x;
          const B = x.length > 0 ? x[x.length - 1] : null;
          return O.is_assistant_update && (B != null && B.is_assistant_update) ? (B.content += `
${O.content}`, d(x), x) : (x.push({
            id: O.chat_id,
            session_id: O.session_id,
            created_at: Date.now() / 1e3,
            by: Be.Assistant,
            content: O.content,
            loadingStage: E,
            buffered_contents: [],
            is_assistant_update: O.is_assistant_update
          }), d(x), x);
        }
        if (E === Ee.ERROR) {
          const O = ((I = C.data.error) == null ? void 0 : I.message) ?? "An unexpected error occurred.";
          s(`Encountered an error chatting with assistant: ${O}`);
          const B = x.filter(
            (G) => G.by === Be.Assistant && G.id === -1
          )[0];
          return B ? (B.error = O, d(x), x) : (x.push({
            id: -1,
            session_id: -1,
            created_at: Date.now() / 1e3,
            by: Be.Assistant,
            content: "",
            error: O,
            loadingStage: E,
            buffered_contents: []
          }), d(x), x);
        }
        const j = C.data.server_streaming_chat;
        if (!x || !j)
          return d(x), x;
        const $ = x.filter(
          (O) => O.by === Be.Assistant && (O.id === -1 || O.id === j.chat_id) && !O.error
        )[0];
        if (!$)
          return x.push({
            id: j.chat_id,
            session_id: j.session_id,
            created_at: Date.now() / 1e3,
            by: Be.Assistant,
            content: j.content,
            loadingStage: E,
            buffered_contents: [],
            is_assistant_update: j.is_assistant_update
          }), d(x), x;
        if ($.id === -1 && ($.id = j.chat_id, $.session_id = j.session_id), E === Ee.CHAT_SOURCES)
          $.sources = j.content;
        else if (E === Ee.CHAT_EXPLANATION)
          $.explanation = JSON.parse(j.content);
        else if (E === Ee.CHAT_ACTION_STATUS) {
          $.action_status || ($.action_status = []);
          try {
            const O = JSON.parse(j.content), B = $.action_status || [];
            B.some(
              (F) => F.type === O.type && F.action_type === O.action_type && F.user_message === O.user_message
            ) || ($.action_status = [...B, O]);
          } catch (O) {
            console.error("Error parsing action status data:", O, "Content:", j.content);
          }
        } else
          Oh($, j);
        return $.loadingStage = E, (E === Ee.CHAT_GENERATION_FINISHED || Date.now() - l > 500) && d(x), x;
      });
    },
    [d, l]
  ), { status: v, sendWebSocketMessage: w } = Nh(
    e,
    t,
    f,
    g
  ), S = H(
    (C, _) => {
      const x = {
        id: -1,
        created_at: Date.now() / 1e3,
        session_id: p,
        content: C,
        by: Be.User,
        loadingStage: jn.Initialized,
        files: _
      }, E = {
        id: -1,
        created_at: Date.now() / 1e3,
        session_id: p,
        content: "",
        by: Be.Assistant,
        loadingStage: jn.Initialized,
        files: _
      }, j = [...i, x, E];
      d(j), a(j), r(), Promise.all((_ ?? []).map(async ($) => d1($))).then(
        ($) => {
          const I = JSON.stringify({
            route: "chat_session",
            data: {
              type: Ee.CLIENT_CHAT,
              client_chat: {
                session_id: p,
                content: C,
                files: $,
                deployment_parameters: {
                  page_title: document.title,
                  url: window.location.href,
                  page_content: document.body.innerText
                }
              }
            }
          });
          w(I);
        }
      );
    },
    [p, i, r, w, d]
  );
  return W(() => {
    n();
  }, [n]), {
    status: v,
    sessionId: p,
    history: i,
    handleNewMessage: S,
    isGenerating: y,
    error: o,
    reset: () => {
      a([]), d([]), s("");
    }
  };
};
function Mh(e, t, n) {
  W(() => (window.addEventListener("runllm-close", t), () => window.removeEventListener("runllm-close", t)), [t]), W(() => {
    const r = (o) => {
      const s = o.detail;
      s && (e(), n(s));
    };
    return window.addEventListener("runllm-send-message", r), () => window.removeEventListener("runllm-send-message", r);
  }, [n, e]), W(() => (window.addEventListener("runllm-open", e), () => window.removeEventListener("runllm-open", e)), [e]);
}
const Dh = "mod+k", Bh = (e, t) => {
  let n;
  return (r) => {
    clearTimeout(n), n = setTimeout(() => e(r), t);
  };
}, Hh = ({
  config: e,
  opened: t,
  open: n,
  close: r,
  shadowDOMRoot: o,
  isDarkMode: s
}) => {
  var Qn;
  const {
    assistantId: i,
    brandLogo: a,
    name: l,
    communityUrl: u,
    communityType: d,
    highlightColor: f,
    serverAddress: m,
    mcpDisplayName: p,
    mcpEndpointName: y,
    keyboardShortcut: g = Dh
  } = e, v = i, w = !!e.algoliaApiKey, [S, b] = P(!1), [C, _] = P(""), [x, E] = P(!0), [j, $] = P(!1), [I, O] = P(void 0), [B, G] = P(!w), [F, q] = P(void 0), [Y, V] = P(0), [ee, D] = P(!1), [A, U] = P(""), [X, ne] = P([]), [ie, pe] = P([]), [ae, me] = P(!1), { scrollIntoView: Le, targetRef: Oe, scrollableRef: We } = Wl({
    duration: 200,
    offset: 60,
    cancelable: !0,
    // This allows user to interrupt the auto-scroll
    onScrollFinish: () => me(!1)
  }), Je = () => {
    if (!We.current) return;
    const { scrollTop: M, scrollHeight: h, clientHeight: T } = We.current;
    Math.abs(h - M - T) < 10 || me(!0);
  };
  W(() => {
    X.length > 0 && !ae && t && B && Le({ alignment: "end" });
  }, [X, ae, Le]);
  const ke = _e.useRef(null), lt = o.getElementById(Sr) ?? void 0, { recaptchaSiteKey: de } = Jr(), ut = H(() => {
    var M;
    E(!0), (M = ke == null ? void 0 : ke.current) == null || M.focus();
  }, []), Ze = H(() => {
    var M;
    E(!1), (M = ke == null ? void 0 : ke.current) == null || M.blur();
  }, []), Re = e.usageLimit || 0, Qe = e.usageLimitPeriod || 0, $e = Qe > 0, { userUsageCount: et, addUserUsage: Lt, removeUserUsage: Ot, computeUserUsage: Fe } = uh(Qe);
  W(() => {
    Fe();
  }, [Fe]);
  const { history: cn, handleNewMessage: Dn, isGenerating: yt, error: ln, reset: Bn, sessionId: Hn } = Fh(
    m,
    v,
    ut,
    Ze
  );
  W(() => {
    ne(cn);
  }, [cn]);
  const { setColorScheme: un } = zu();
  W(() => {
    un(s ? "dark" : "light");
  }, [s, un]);
  const zn = () => {
    t && F && F.length > 0 && Y < F.length && V(Y + 1);
  }, [Vn, Et] = Tm(
    "search-widget-context",
    {
      opened: t,
      isGenerating: yt,
      hasUnseenUpdates: !1,
      lastGenerationTimestamp: Date.now()
    }
  );
  W(() => {
    if (Vn.isGenerating && !yt) {
      const M = localStorage.getItem("search-widget-context"), h = M ? JSON.parse(M).opened : t;
      Et((T) => ({
        ...T,
        isGenerating: !1,
        hasUnseenUpdates: !h,
        lastGenerationTimestamp: Date.now()
      }));
    } else !Vn.isGenerating && yt && Et((M) => ({
      ...M,
      isGenerating: !0
    }));
  }, [yt, Et]), W(() => {
    const M = localStorage.getItem("search-widget-context");
    if (M)
      try {
        JSON.parse(M).opened !== t && Et((T) => ({
          ...T,
          opened: t,
          hasUnseenUpdates: t ? !1 : T.hasUnseenUpdates
        }));
      } catch (h) {
        console.error("Error parsing localStorage:", h);
      }
  }, [t, Et]);
  const Wn = H(() => {
    const M = localStorage.getItem("search-widget-context");
    if (M)
      try {
        const h = JSON.parse(M);
        h.opened = !0, h.hasUnseenUpdates = !1, localStorage.setItem("search-widget-context", JSON.stringify(h));
      } catch (h) {
        console.error("Error in handleOpen:", h);
      }
    n();
  }, [n]), Un = H(() => {
    const M = localStorage.getItem("search-widget-context");
    if (M)
      try {
        const h = JSON.parse(M);
        h.opened = !1, localStorage.setItem("search-widget-context", JSON.stringify(h));
      } catch (h) {
        console.error("Error in onClose:", h);
      }
    V(0), G(!w), r();
  }, [r, w]), Qr = () => {
    t && Y > 0 && V(Y - 1);
  }, dn = (M) => {
    B || (M === 0 ? (G(!0), mn()) : F && (window.location.href = F[M - 1].url));
  };
  Kl([
    ["esc", r],
    [g, Wn],
    ["ArrowDown", zn],
    ["ArrowUp", Qr],
    [
      "Enter",
      () => {
        dn(Y);
      }
    ]
  ]);
  const Yn = Bh((M) => {
    ee || (D(!0), ch({
      query: M,
      applicationId: e.algoliaApplicationId ?? "",
      apiKey: e.algoliaApiKey ?? "",
      indexName: e.algoliaIndexName ?? "",
      filters: e.algoliaFilters ?? ""
    }).then(async (h) => {
      if (h.ok)
        h.json().then((T) => {
          var L, z, te;
          q(
            (te = (z = (L = T == null ? void 0 : T.results) == null ? void 0 : L[0]) == null ? void 0 : z.hits) == null ? void 0 : te.filter(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (re) => {
                var Q, Z, ce;
                return !!((ce = (Z = (Q = re == null ? void 0 : re._highlightResult) == null ? void 0 : Q.hierarchy) == null ? void 0 : Z.lvl1) != null && ce.value);
              }
            )
          );
        });
      else {
        const T = await h.text();
        U(T);
      }
      D(!1);
    }));
  }, 300), fn = (M) => {
    _(M.target.value), B || Yn(M.target.value);
  }, Gn = (M) => {
    me(!1), _(M.target.value), B || Yn(M.target.value);
  };
  Mh(Wn, Un, (M) => {
    Dn(M, []), G(!0);
  });
  const Me = !!((Qn = window.grecaptcha) != null && Qn.execute), Ft = !!(u && d), vt = X.length > 0, Xn = vt && ie.length > 0 ? "calc(50vh - 150px)" : "50vh", Mt = J(null), pn = () => {
    var M;
    (M = Mt.current) == null || M.call(Mt);
  }, mn = async () => {
    const M = $e ? Lt() : 0;
    if ((!$e || $e && M <= Re) && C && C.length > 0 && Me && !S) {
      b(!0);
      try {
        const h = C;
        _("");
        const T = ie;
        pe([]), Dn(h, T);
      } catch (h) {
        Ot(), console.error(h);
      } finally {
        b(!1);
      }
    } else if ($e && M > Re) {
      b(!0);
      const h = (d || xs.slack).replace(
        /\b\w/g,
        (ce) => ce.toUpperCase()
      ), L = Ft ? `Looks like you've hit your query limit, but the fun doesn't have to stop here. Why don't you keep the momentum going and hop on over to [our ${h} community](${((ce) => /^https?:\/\//i.test(ce) ? ce : `https://${ce}`)(u)})?` : "Unfortunately, it looks like you've hit your query limit. Why don't you take a breather and come back later?", z = e.usageLimitMessage ? e.usageLimitMessage : `# Whoa, you're on a roll.
${L}`, te = [...cn];
      te.push({
        id: -1,
        created_at: -1,
        by: Be.User,
        content: C
      }), te.push({
        id: -1,
        created_at: -1,
        by: Be.Assistant,
        content: ""
      });
      let re = 0;
      const Q = 10, Z = setInterval(() => {
        const ce = [...te], fe = ce[ce.length - 1];
        fe.content += z.slice(re, re + Q), re += Q, ne(ce), re >= z.length && clearInterval(Z);
      }, 100);
      _("");
    }
  };
  W(() => {
    var M;
    Me && ((M = window.grecaptcha) == null || M.execute(de, { action: "submit" }).then((h) => {
      fetch(`${m}/api/pipeline/${v}/public`, {
        method: "GET",
        headers: {
          "x-recaptcha-token": h,
          "Content-Type": "application/json"
        }
      }).then((T) => T.json()).then((T) => {
        const z = T.support_email ?? void 0;
        z && z.length > 0 && O(z);
      }).catch((T) => {
        console.error("Error fetching pipeline info:", T);
      });
    }));
  }, [v, Me, de, m]), W(() => {
    if (!document.getElementById("runllm-recaptcha") && t) {
      const M = document.createElement("script");
      M.src = `https://www.google.com/recaptcha/api.js?render=${de}`, M.id = "runllm-recaptcha", document.body.appendChild(M);
      const h = document.createElement("style");
      h.id = "runllm-recaptcha-styleoverride", h.textContent = " .grecaptcha-badge { visibility: hidden !important;} ", document.head.appendChild(h);
    }
  }, [de, t]);
  const Kn = a ? /* @__PURE__ */ c.jsx(_t, { fit: "contain", src: a, h: 24, w: 24, alt: "RunLLM Chat Widget Brand Logo" }) : /* @__PURE__ */ c.jsx(Mo, { width: "24", height: "20" }), qn = (M) => {
    M && pe((h) => [...h, M]), pn(), ut();
  }, eo = (M) => {
    const h = ie.filter((T, L) => L !== M);
    pe(h), pn(), ut();
  }, hn = !Me || S || yt, Jn = /* @__PURE__ */ c.jsxs(k, { className: ye.searchBody, children: [
    /* @__PURE__ */ c.jsx(
      qr,
      {
        size: "lg",
        leftSection: a ? /* @__PURE__ */ c.jsx(_t, { src: a, width: "20px", height: "20px" }) : /* @__PURE__ */ c.jsx(Mo, { width: "20px", height: "20px" }),
        value: C,
        onChange: fn,
        placeholder: `Search or ask about ${l}...`,
        style: {
          // Only have a border radius on the top, but not the bottom.
          borderRadius: "16px 16px 0px 0px",
          // Separate the search/ask input from the results.
          borderBottom: "2px solid rgba(0, 0, 0, .07)"
        },
        styles: {
          section: {
            padding: "0px 8px 0px 24px"
          },
          input: {
            border: "0px",
            "&:focus": {
              outline: "none",
              boxShadow: "none"
            }
          }
        }
      }
    ),
    /* @__PURE__ */ c.jsxs(k, { py: "8px", children: [
      /* @__PURE__ */ c.jsxs(
        k,
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            // We need to do this dynamically because the highlight color is not in the CSS.
            backgroundColor: Y === 0 ? xt(f ?? Do, 0.07) : void 0
          },
          className: ye.searchEntry,
          onMouseEnter: () => V(0),
          onClick: () => dn(0),
          children: [
            /* @__PURE__ */ c.jsxs(k, { style: { display: "flex", alignItems: "center", color: f, gap: "4px" }, children: [
              /* @__PURE__ */ c.jsx(ah, {}),
              /* @__PURE__ */ c.jsxs(oe, { fw: 700, children: [
                "Chat with ",
                l,
                " AI"
              ] })
            ] }),
            C && C.length > 0 && /* @__PURE__ */ c.jsxs(oe, { children: [
              '"',
              C,
              '"'
            ] })
          ]
        }
      ),
      A && A.length > 0 && /* @__PURE__ */ c.jsxs(
        xr,
        {
          variant: "light",
          color: "red",
          title: "An unexpected error occurred",
          radius: "lg",
          mt: "8px",
          style: { borderRadius: "0px" },
          children: [
            /* @__PURE__ */ c.jsxs(oe, { mb: "8px", children: [
              "If the error persists, please",
              " ",
              /* @__PURE__ */ c.jsx("a", { style: { textDecoration: "none", color: "red" }, href: "mailto:support@runllm.com", children: "contact the RunLLM support team" }),
              "."
            ] }),
            /* @__PURE__ */ c.jsx("pre", { children: A })
          ]
        }
      ),
      F && F.length > 0 && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(oe, { fz: "12px", c: "rgba(0, 0, 0, 0.4)", fw: 700, mt: "8px", mb: "4px", ml: "16px", children: "Search" }),
        F.map((M, h) => /* @__PURE__ */ c.jsx(
          k,
          {
            style: {
              backgroundColor: Y === h + 1 ? xt(f ?? Do, 0.07) : void 0
            },
            className: ye.searchEntry,
            onMouseEnter: () => V(h + 1),
            onClick: () => dn(h + 1),
            children: /* @__PURE__ */ c.jsx(
              oe,
              {
                fz: "16px",
                fw: 400,
                dangerouslySetInnerHTML: {
                  __html: M._highlightResult.hierarchy.lvl1.value.replace(
                    "algolia-docsearch-suggestion--highlight",
                    ye["algolia-docsearch-suggestion--highlight"]
                  )
                }
              }
            )
          },
          h
        ))
      ] })
    ] })
  ] }), Zn = /* @__PURE__ */ c.jsx(
    k,
    {
      onMouseEnter: () => E(!0),
      onMouseLeave: () => E(!1),
      children: /* @__PURE__ */ c.jsx(
        nc,
        {
          resetRef: Mt,
          disabled: !Me || S,
          onChange: (M) => {
            qn(M);
            const h = document.querySelector('input[type="file"]');
            h && (h.value = "");
          },
          accept: "image/png,image/jpeg,text/plain",
          children: (M) => /* @__PURE__ */ c.jsx(
            k,
            {
              className: ye.iconAttachmentContainer,
              ...M,
              style: {
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ c.jsx(
                fc,
                {
                  color: C.length > 0 || x ? f : "rgba(0, 0, 0, 0.07)",
                  size: 20
                }
              )
            }
          )
        }
      )
    }
  ), to = /* @__PURE__ */ c.jsx(
    k,
    {
      style: {
        display: "flex",
        alignItems: "center",
        height: "100%"
      },
      children: /* @__PURE__ */ c.jsx(Lr, { onClick: mn, size: "24px", disabled: hn, bg: "transparent", children: /* @__PURE__ */ c.jsx(
        lh,
        {
          color: hn ? "rgba(0, 0, 0, 0.07)" : C.length > 0 ? f : "rgba(0, 0, 0, 0.07)"
        }
      ) })
    }
  ), no = /* @__PURE__ */ c.jsxs(k, { className: ye.modalBody, children: [
    /* @__PURE__ */ c.jsx(
      K1,
      {
        assistantId: i,
        serverAddress: m,
        isDarkMode: s,
        logo: Kn,
        title: `Ask ${l || "Assistant"}`,
        sessionId: Hn,
        mcpDisplayName: p,
        mcpEndpointName: y,
        onClearChat: Bn,
        disclaimer: e.disclaimer,
        hasHistory: vt
      }
    ),
    I && j ? /* @__PURE__ */ c.jsx(ac, { setShowEmailCapture: $ }) : /* @__PURE__ */ c.jsxs(k, { className: ye.chatContainer, children: [
      vt && !ln && X.length > 0 && /* @__PURE__ */ c.jsx(
        In.Autosize,
        {
          mah: Xn,
          viewportRef: We,
          onScrollCapture: Je,
          className: "scroll-area",
          children: /* @__PURE__ */ c.jsx(
            mc,
            {
              assistantId: i,
              sessionId: Hn,
              history: X,
              assistantAvatar: /* @__PURE__ */ c.jsx(dc, { color: f }),
              name: l ?? "RunLLM",
              color: f,
              serverAddress: m,
              setShowEmailCapture: (M) => {
                $(M);
              },
              isDarkMode: s,
              supportEmail: I,
              disableAskAPerson: e.disableAskAPerson,
              askAPersonButtonText: e.askAPersonButtonText,
              ref: Oe
            }
          )
        }
      ),
      ie && ie.length > 0 && /* @__PURE__ */ c.jsx(k, { mt: 16, children: /* @__PURE__ */ c.jsx(
        ih,
        {
          isDarkMode: s,
          files: ie,
          onRemoveFile: (M) => eo(M)
        }
      ) })
    ] }),
    ln && /* @__PURE__ */ c.jsx(xr, { color: "#C40D0D", variant: "light", title: "An unexpected error has occurred.", mb: "16px", children: /* @__PURE__ */ c.jsxs(k, { style: { fontWeight: 500 }, children: [
      "Sorry, we encountered an error processing your request. Please",
      " ",
      /* @__PURE__ */ c.jsx(
        "a",
        {
          style: { textDecoration: "none", color: "#C40D0D" },
          href: "mailto:support@aqueducthq.com",
          children: "contact RunLLM"
        }
      ),
      " ",
      "for support."
    ] }) }),
    !j && !($e && et > Re && Ft) && /* @__PURE__ */ c.jsx(k, { px: "24px", pb: "16px", h: "100%", children: /* @__PURE__ */ c.jsx(k, { style: { display: "flex", width: "100%", height: "100%" }, children: /* @__PURE__ */ c.jsx(k, { className: ye.inputWrapper, children: /* @__PURE__ */ c.jsx(
      zr,
      {
        variant: "unstyled",
        autosize: !0,
        minRows: 1,
        maxRows: 6,
        disabled: S,
        leftSection: Zn,
        rightSection: to,
        onFocus: () => E(!0),
        onBlur: () => E(!1),
        styles: {
          root: {
            width: "100%",
            height: "100%"
          },
          wrapper: {
            width: "100%",
            height: "48px",
            borderRadius: "4px",
            border: x ? `2px solid ${f}` : "2px solid rgba(0, 0, 0, 0.07)",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "12px 8px 12px 8px",
            gap: "8px",
            boxSizing: "border-box"
          },
          input: {
            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: C.length > 0 || x ? "rgba(0, 0, 0, 1.0)" : "rgba(0, 0, 0, 0.4)",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            flex: 1
          }
        },
        ref: ke,
        placeholder: vt ? "Ask a follow-up question..." : `Ask ${l || "AI"} a question...`,
        value: C,
        onChange: Gn,
        onKeyDown: (M) => {
          M.key === "Enter" && C.length > 0 && !hn && !M.shiftKey && mn(), M.stopPropagation();
        }
      }
    ) }) }) })
  ] });
  return /* @__PURE__ */ c.jsxs(
    ct,
    {
      opened: t,
      onClose: () => {
        me(!1), Un();
      },
      withCloseButton: !1,
      zIndex: 9999,
      withinPortal: !1,
      styles: {
        root: { overflowY: "auto", maxHeight: "90vh", "--modal-size": "800px" },
        body: { padding: 0 }
      },
      children: [
        B ? no : Jn,
        /* @__PURE__ */ c.jsx(Sh, { config: e, isDarkMode: s, portalRoot: lt }),
        /* @__PURE__ */ c.jsx("div", { className: "g-recaptcha", "data-sitekey": de, "data-size": "invisible" })
      ]
    }
  );
}, zh = ({
  style: e,
  brandLogo: t,
  highlightColor: n,
  open: r,
  isDarkMode: o,
  searchIsEnabled: s,
  buttonText: i
}) => {
  const [a, l] = _e.useState(!1), u = () => {
    r();
  };
  let d = "#FFFFFF";
  o && (d = "#222222");
  const f = "#0a40ff", m = `linear-gradient(90deg, ${xt(n ?? f, 0.1)} 0%, ${xt(n ?? f, 0)} 95%), ${d}`, p = `linear-gradient(90deg, ${xt(n ?? f, 0.3)} 5%, ${xt(n ?? f, 0)} 100%), ${d}`, y = `3px solid ${xt(n ?? f, 0.4)}`, g = `3px solid ${xt(n ?? f, 1)}`, v = {
    borderRadius: "54px",
    background: a ? p : m,
    border: a ? g : y,
    cursor: "pointer",
    color: n,
    "@media (max-width: 768px)": {
      display: "none"
    },
    transition: "all 0.5s ease",
    boxShadow: "0px 3px 26.25px 0px rgba(10, 64, 255, 0.11)",
    padding: "12px 24px"
  }, w = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, S = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px"
  }, b = {
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 1,
    color: a ? `${n}` : o ? "#EEEEEE" : "#000000"
  }, C = i ?? `Ask ${s ? "or Search" : "AI"}`;
  return /* @__PURE__ */ c.jsx(
    k,
    {
      onMouseEnter: () => {
        l(!0);
      },
      onMouseLeave: () => {
        l(!1);
      },
      style: {
        ...e,
        ...v,
        position: "fixed",
        zIndex: 9999,
        cursor: "pointer"
      },
      onClick: u,
      children: /* @__PURE__ */ c.jsx(k, { style: w, children: /* @__PURE__ */ c.jsxs(k, { style: S, children: [
        t ? /* @__PURE__ */ c.jsx(_t, { w: 20, h: 20, src: t, alt: "brand logo" }) : /* @__PURE__ */ c.jsx(Mo, { width: "24", height: "24" }),
        /* @__PURE__ */ c.jsx(oe, { style: b, children: C })
      ] }) })
    }
  );
}, Vh = {
  fontFamily: "Inter, sans-serif",
  headings: {
    sizes: {
      h1: { fontSize: "26px", fontWeight: "700" },
      h2: { fontSize: "18px", fontWeight: "700" }
    }
  },
  lineHeights: {
    xs: "12px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px"
  },
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px"
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px"
  }
}, Wh = {
  [dt.TOP_RIGHT]: { top: "64px", right: "16px" },
  [dt.TOP_LEFT]: { top: "64px", left: "16px" },
  [dt.BOTTOM_RIGHT]: { bottom: "64px", right: "64px" },
  [dt.BOTTOM_LEFT]: { bottom: "64px", left: "32px" }
}, Uh = (e, t, n) => {
  const r = { ...Wh[e] };
  return t !== void 0 && (e === dt.TOP_LEFT || e === dt.BOTTOM_LEFT ? r.left = t : r.right = t), n !== void 0 && (e === dt.TOP_LEFT || e === dt.TOP_RIGHT ? r.top = n : r.bottom = n), r;
};
function Yh(e, t, n) {
  if (t === void 0)
    return e;
  for (const [r, o] of Object.entries(t))
    if (n.startsWith(r))
      return o === "" || o === void 0 ? void 0 : o;
  return e;
}
const Gh = ({ config: e, shadowDOMRoot: t }) => {
  const n = Uh(e.position, e.positionX, e.positionY), [r, { open: o, close: s }] = ql(!1), i = t.getElementById(Sr) ?? void 0, { assistantRoutingConfig: a, hideFloatingButton: l, ...u } = e, [d, f] = P(
    u.assistantId
  ), m = !1, [p, y] = P(!1), [g, v] = P(window.location.href);
  W(() => {
    const b = setInterval(() => {
      v(window.location.href);
    }, 500);
    return () => clearInterval(b);
  }, []), W(() => (window.addEventListener("runllm-open", o), () => window.removeEventListener("runllm-open", o)), [o]), W(() => {
    const S = Yh(
      e.assistantId,
      e.assistantRoutingConfig,
      g
    );
    f(S);
  }, [g, f, e.assistantId, e.assistantRoutingConfig]), W(() => {
  }, [m]);
  let w;
  if (d !== void 0) {
    const S = { ...u, assistantId: d };
    w = /* @__PURE__ */ c.jsx(
      Hh,
      {
        config: S,
        shadowDOMRoot: t,
        opened: r,
        open: o,
        close: s,
        isDarkMode: p
      }
    );
  }
  return /* @__PURE__ */ c.jsxs(
    ia,
    {
      withCssVariables: !0,
      cssVariablesSelector: `#${Sr}`,
      getRootElement: () => i,
      theme: Vh,
      children: [
        !l && d !== void 0 && /* @__PURE__ */ c.jsx(
          zh,
          {
            style: { ...n },
            brandLogo: e.brandLogo,
            buttonText: e.floatingButtonText,
            highlightColor: e.highlightColor,
            open: o,
            isDarkMode: p,
            searchIsEnabled: !!e.algoliaApiKey
          }
        ),
        w
      ]
    }
  );
}, Do = "#0A40FF";
function Xh() {
  const e = document.currentScript ?? document.getElementById(J1), t = e.getAttribute("runllm-server-address") ?? "https://api.runllm.com", n = e.getAttribute("runllm-assistant-id");
  let r;
  n && (r = Number(n), (!Number.isSafeInteger(r) || r < 0) && (console.error("Invalid assistant ID: ", n), r = void 0));
  let o;
  const s = e.getAttribute("runllm-assistant-routing-config") ?? "";
  s && (o = JSON.parse(s));
  const i = e.getAttribute("runllm-position") ?? "BOTTOM_RIGHT", a = e.getAttribute("runllm-position-x") ?? void 0, l = e.getAttribute("runllm-position-y") ?? void 0, u = e.getAttribute("runllm-keyboard-shortcut") ?? "Mod+k", d = e.getAttribute("runllm-theme-color") ?? Do, f = e.getAttribute("runllm-brand-logo") ?? void 0, m = e.getAttribute("runllm-name") ?? void 0, p = e.getAttribute("runllm-preset") ?? void 0, y = e.getAttribute("runllm-support-email") ?? void 0, g = e.getAttribute("src") ?? "", v = e.getAttribute("runllm-floating-button-text") ?? void 0, w = e.getAttribute("runllm-join-community-text") ?? void 0, S = e.getAttribute("runllm-algolia-api-key") ?? void 0, b = e.getAttribute("runllm-algolia-application-id") ?? void 0, C = e.getAttribute("runllm-algolia-filters") ?? void 0, _ = e.getAttribute("runllm-algolia-index-name") ?? void 0, x = e.getAttribute("runllm-slack-community-url") ?? void 0, E = x ?? e.getAttribute("runllm-community-url") ?? void 0, j = x ? xs.slack : e.getAttribute("runllm-community-type"), $ = e.getAttribute("runllm-disable-ask-a-person") === "true", I = e.getAttribute("runllm-ask-a-person-button-text") ?? void 0, O = e.getAttribute("runllm-per-user-usage-limit");
  let B;
  O && (B = Number(O), (!Number.isSafeInteger(B) || B < 0) && (console.error("Invalid per-user usage limit: ", O), B = void 0));
  const G = e.getAttribute("runllm-usage-limit-effective-days");
  let F;
  G && (F = Number(G), (!Number.isSafeInteger(F) || F < 0) && (console.error("Invalid usage limit effective days: ", G), F = void 0));
  const q = e.getAttribute("runllm-usage-limit-message"), Y = e.getAttribute("runllm-hide-trigger-button") === "true", V = e.getAttribute("runllm-disclaimer") ?? void 0, ee = e.getAttribute("runllm-mcp-display-name") ?? void 0, D = e.getAttribute("runllm-mcp-endpoint-name") ?? void 0;
  return {
    serverAddress: t,
    assistantId: r,
    assistantRoutingConfig: o,
    keyboardShortcut: u,
    highlightColor: d,
    brandLogo: f,
    communityUrl: E,
    communityType: j,
    name: m,
    position: i,
    positionX: a,
    positionY: l,
    preset: p,
    supportEmail: y,
    root: g,
    algoliaApiKey: S,
    algoliaApplicationId: b,
    algoliaFilters: C,
    algoliaIndexName: _,
    usageLimit: B,
    usageLimitPeriod: F,
    usageLimitMessage: q,
    disableAskAPerson: $,
    askAPersonButtonText: I,
    floatingButtonText: v,
    joinCommunityText: w,
    hideFloatingButton: Y,
    disclaimer: V,
    mcpDisplayName: ee,
    mcpEndpointName: D
  };
}
function Kh(e) {
  const t = document.createElement("div");
  return t.setAttribute("id", q1), e !== "mkdocs" && (t.style.setProperty("position", "fixed", "important"), t.style.setProperty("z-index", "9999", "important")), document.body.appendChild(t), t;
}
function qh(e) {
  return e ? e.includes("run-llm-search-widget.es.js") ? e.replace("run-llm-search-widget.es.js", "main.css") : `${e}/main.css` : "https://widget.runllm.com/main.css";
}
function Jh(e, t) {
  const n = e.attachShadow({ mode: "closed" }), r = document.createElement("link");
  r.setAttribute("rel", "stylesheet"), r.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
  ), n.appendChild(r);
  const o = qh(t.root), s = document.createElement("link");
  s.setAttribute("rel", "stylesheet"), s.setAttribute("href", o), n.appendChild(s);
  const i = document.createElement("div");
  i.setAttribute("id", Sr), n.appendChild(i), Nc.createRoot(i).render(
    /* @__PURE__ */ c.jsx(_e.StrictMode, { children: /* @__PURE__ */ c.jsx(Gh, { shadowDOMRoot: n, config: t }) })
  );
}
function Ii() {
  window.runllm = {
    open: async () => {
      window.dispatchEvent(new CustomEvent("runllm-open"));
    },
    close: async () => {
      window.dispatchEvent(new CustomEvent("runllm-close"));
    },
    sendMessage: async (n) => {
      window.dispatchEvent(new CustomEvent("runllm-send-message", { detail: n }));
    }
  };
  const e = Xh(), t = Kh(e.preset);
  Jh(t, e);
}
document.readyState !== "loading" ? Ii() : window.addEventListener("DOMContentLoaded", () => {
  Ii();
});
export {
  k as B,
  Do as D,
  $i as I,
  oe as T,
  ue as a,
  Bo as b,
  tg as c,
  Te as d,
  le as f,
  hr as g,
  c as j,
  eg as r,
  K as u
};
