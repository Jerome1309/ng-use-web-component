(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          ":root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}._name_18err_1{font-weight:700;color:orange}"
        )
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const u of o.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = t(l);
    fetch(l.href, o);
  }
})();
function cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _n = {},
  fc = {
    get exports() {
      return _n;
    },
    set exports(e) {
      _n = e;
    },
  },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gt = Symbol.for("react.element"),
  dc = Symbol.for("react.portal"),
  pc = Symbol.for("react.fragment"),
  mc = Symbol.for("react.strict_mode"),
  hc = Symbol.for("react.profiler"),
  vc = Symbol.for("react.provider"),
  yc = Symbol.for("react.context"),
  gc = Symbol.for("react.forward_ref"),
  wc = Symbol.for("react.suspense"),
  Sc = Symbol.for("react.memo"),
  kc = Symbol.for("react.lazy"),
  Vu = Symbol.iterator;
function Ec(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vu && e[Vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qi = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bi = Object.assign,
  es = {};
function lt(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = es),
    (this.updater = t || qi);
}
lt.prototype.isReactComponent = {};
lt.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
lt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ns() {}
ns.prototype = lt.prototype;
function Ko(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = es),
    (this.updater = t || qi);
}
var Yo = (Ko.prototype = new ns());
Yo.constructor = Ko;
bi(Yo, lt.prototype);
Yo.isPureReactComponent = !0;
var Wu = Array.isArray,
  ts = Object.prototype.hasOwnProperty,
  Xo = { current: null },
  rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, n, t) {
  var r,
    l = {},
    o = null,
    u = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (u = n.ref),
    n.key !== void 0 && (o = "" + n.key),
    n))
      ts.call(n, r) && !rs.hasOwnProperty(r) && (l[r] = n[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = t;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) l[r] === void 0 && (l[r] = i[r]);
  return {
    $$typeof: Gt,
    type: e,
    key: o,
    ref: u,
    props: l,
    _owner: Xo.current,
  };
}
function Cc(e, n) {
  return {
    $$typeof: Gt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Go(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gt;
}
function _c(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Hu = /\/+/g;
function _l(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? _c("" + e.key)
    : n.toString(36);
}
function kr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (o) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gt:
          case dc:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (l = l(u)),
      (e = r === "" ? "." + _l(u, 0) : r),
      Wu(l)
        ? ((t = ""),
          e != null && (t = e.replace(Hu, "$&/") + "/"),
          kr(l, n, t, "", function (c) {
            return c;
          }))
        : l != null &&
          (Go(l) &&
            (l = Cc(
              l,
              t +
                (!l.key || (u && u.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Hu, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), Wu(e)))
    for (var i = 0; i < e.length; i++) {
      o = e[i];
      var s = r + _l(o, i);
      u += kr(o, n, t, s, l);
    }
  else if (((s = Ec(e)), typeof s == "function"))
    for (e = s.call(e), i = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + _l(o, i++)), (u += kr(o, n, t, s, l));
  else if (o === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function tr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, "", "", function (o) {
      return n.call(t, o, l++);
    }),
    r
  );
}
function xc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Er = { transition: null },
  Pc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Xo,
  };
T.Children = {
  map: tr,
  forEach: function (e, n, t) {
    tr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      tr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Go(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = lt;
T.Fragment = pc;
T.Profiler = hc;
T.PureComponent = Ko;
T.StrictMode = mc;
T.Suspense = wc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pc;
T.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bi({}, e.props),
    l = e.key,
    o = e.ref,
    u = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((o = n.ref), (u = Xo.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (s in n)
      ts.call(n, s) &&
        !rs.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: Gt, type: e.type, key: l, ref: o, props: r, _owner: u };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: yc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ls;
T.createFactory = function (e) {
  var n = ls.bind(null, e);
  return (n.type = e), n;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: gc, render: e };
};
T.isValidElement = Go;
T.lazy = function (e) {
  return { $$typeof: kc, _payload: { _status: -1, _result: e }, _init: xc };
};
T.memo = function (e, n) {
  return { $$typeof: Sc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function (e) {
  var n = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = n;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, n) {
  return ue.current.useCallback(e, n);
};
T.useContext = function (e) {
  return ue.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
T.useEffect = function (e, n) {
  return ue.current.useEffect(e, n);
};
T.useId = function () {
  return ue.current.useId();
};
T.useImperativeHandle = function (e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function (e, n) {
  return ue.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function (e, n) {
  return ue.current.useLayoutEffect(e, n);
};
T.useMemo = function (e, n) {
  return ue.current.useMemo(e, n);
};
T.useReducer = function (e, n, t) {
  return ue.current.useReducer(e, n, t);
};
T.useRef = function (e) {
  return ue.current.useRef(e);
};
T.useState = function (e) {
  return ue.current.useState(e);
};
T.useSyncExternalStore = function (e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function () {
  return ue.current.useTransition();
};
T.version = "18.2.0";
(function (e) {
  e.exports = T;
})(fc);
const Nc = cc(_n);
var Zl = {},
  Jl = {},
  zc = {
    get exports() {
      return Jl;
    },
    set exports(e) {
      Jl = e;
    },
  },
  ye = {},
  ql = {},
  Tc = {
    get exports() {
      return ql;
    },
    set exports(e) {
      ql = e;
    },
  },
  os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(C, N) {
    var z = C.length;
    C.push(N);
    e: for (; 0 < z; ) {
      var H = (z - 1) >>> 1,
        X = C[H];
      if (0 < l(X, N)) (C[H] = N), (C[z] = X), (z = H);
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var N = C[0],
      z = C.pop();
    if (z !== N) {
      C[0] = z;
      e: for (var H = 0, X = C.length, er = X >>> 1; H < er; ) {
        var hn = 2 * (H + 1) - 1,
          Cl = C[hn],
          vn = hn + 1,
          nr = C[vn];
        if (0 > l(Cl, z))
          vn < X && 0 > l(nr, Cl)
            ? ((C[H] = nr), (C[vn] = z), (H = vn))
            : ((C[H] = Cl), (C[hn] = z), (H = hn));
        else if (vn < X && 0 > l(nr, z)) (C[H] = nr), (C[vn] = z), (H = vn);
        else break e;
      }
    }
    return N;
  }
  function l(C, N) {
    var z = C.sortIndex - N.sortIndex;
    return z !== 0 ? z : C.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var u = Date,
      i = u.now();
    e.unstable_now = function () {
      return u.now() - i;
    };
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    S = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= C)
        r(c), (N.sortIndex = N.expirationTime), n(s, N);
      else break;
      N = t(c);
    }
  }
  function v(C) {
    if (((S = !1), d(C), !w))
      if (t(s) !== null) (w = !0), kl(E);
      else {
        var N = t(c);
        N !== null && El(v, N.startTime - C);
      }
  }
  function E(C, N) {
    (w = !1), S && ((S = !1), f(P), (P = -1)), (g = !0);
    var z = p;
    try {
      for (
        d(N), h = t(s);
        h !== null && (!(h.expirationTime > N) || (C && !xe()));

      ) {
        var H = h.callback;
        if (typeof H == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var X = H(h.expirationTime <= N);
          (N = e.unstable_now()),
            typeof X == "function" ? (h.callback = X) : h === t(s) && r(s),
            d(N);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var er = !0;
      else {
        var hn = t(c);
        hn !== null && El(v, hn.startTime - N), (er = !1);
      }
      return er;
    } finally {
      (h = null), (p = z), (g = !1);
    }
  }
  var _ = !1,
    x = null,
    P = -1,
    W = 5,
    L = -1;
  function xe() {
    return !(e.unstable_now() - L < W);
  }
  function it() {
    if (x !== null) {
      var C = e.unstable_now();
      L = C;
      var N = !0;
      try {
        N = x(!0, C);
      } finally {
        N ? st() : ((_ = !1), (x = null));
      }
    } else _ = !1;
  }
  var st;
  if (typeof a == "function")
    st = function () {
      a(it);
    };
  else if (typeof MessageChannel < "u") {
    var Au = new MessageChannel(),
      ac = Au.port2;
    (Au.port1.onmessage = it),
      (st = function () {
        ac.postMessage(null);
      });
  } else
    st = function () {
      I(it, 0);
    };
  function kl(C) {
    (x = C), _ || ((_ = !0), st());
  }
  function El(C, N) {
    P = I(function () {
      C(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), kl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var z = p;
      p = N;
      try {
        return C();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, N) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var z = p;
      p = C;
      try {
        return N();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (C, N, z) {
      var H = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? H + z : H))
          : (z = H),
        C)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = z + X),
        (C = {
          id: m++,
          callback: N,
          priorityLevel: C,
          startTime: z,
          expirationTime: X,
          sortIndex: -1,
        }),
        z > H
          ? ((C.sortIndex = z),
            n(c, C),
            t(s) === null &&
              C === t(c) &&
              (S ? (f(P), (P = -1)) : (S = !0), El(v, z - H)))
          : ((C.sortIndex = X), n(s, C), w || g || ((w = !0), kl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (C) {
      var N = p;
      return function () {
        var z = p;
        p = N;
        try {
          return C.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(os);
(function (e) {
  e.exports = os;
})(Tc);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var us = _n,
  ve = ql;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var is = new Set(),
  Rt = {};
function Ln(e, n) {
  Jn(e, n), Jn(e + "Capture", n);
}
function Jn(e, n) {
  for (Rt[e] = n, e = 0; e < n.length; e++) is.add(n[e]);
}
var He = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bl = Object.prototype.hasOwnProperty,
  Lc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bu = {},
  Qu = {};
function Rc(e) {
  return bl.call(Qu, e)
    ? !0
    : bl.call(Bu, e)
    ? !1
    : Lc.test(e)
    ? (Qu[e] = !0)
    : ((Bu[e] = !0), !1);
}
function Oc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Dc(e, n, t, r) {
  if (n === null || typeof n > "u" || Oc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ie(e, n, t, r, l, o, u) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = o),
    (this.removeEmptyString = u);
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    b[e] = new ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  b[n] = new ie(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  b[e] = new ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  b[e] = new ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    b[e] = new ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  b[e] = new ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  b[e] = new ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  b[e] = new ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  b[e] = new ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zo = /[\-:]([a-z])/g;
function Jo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Zo, Jo);
    b[n] = new ie(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Zo, Jo);
    b[n] = new ie(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Zo, Jo);
  b[n] = new ie(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qo(e, n, t, r) {
  var l = b.hasOwnProperty(n) ? b[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Dc(n, t, l, r) && (t = null),
    r || l === null
      ? Rc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ye = us.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  bo = Symbol.for("react.strict_mode"),
  eo = Symbol.for("react.profiler"),
  ss = Symbol.for("react.provider"),
  as = Symbol.for("react.context"),
  eu = Symbol.for("react.forward_ref"),
  no = Symbol.for("react.suspense"),
  to = Symbol.for("react.suspense_list"),
  nu = Symbol.for("react.memo"),
  Ge = Symbol.for("react.lazy"),
  cs = Symbol.for("react.offscreen"),
  Ku = Symbol.iterator;
function at(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ku && e[Ku]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  xl;
function gt(e) {
  if (xl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      xl = (n && n[1]) || "";
    }
  return (
    `
` +
    xl +
    e
  );
}
var Pl = !1;
function Nl(e, n) {
  if (!e || Pl) return "";
  Pl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          u = l.length - 1,
          i = o.length - 1;
        1 <= u && 0 <= i && l[u] !== o[i];

      )
        i--;
      for (; 1 <= u && 0 <= i; u--, i--)
        if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if ((u--, i--, 0 > i || l[u] !== o[i])) {
                var s =
                  `
` + l[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= u && 0 <= i);
          break;
        }
    }
  } finally {
    (Pl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? gt(e) : "";
}
function Mc(e) {
  switch (e.tag) {
    case 5:
      return gt(e.type);
    case 16:
      return gt("Lazy");
    case 13:
      return gt("Suspense");
    case 19:
      return gt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function ro(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case Dn:
      return "Portal";
    case eo:
      return "Profiler";
    case bo:
      return "StrictMode";
    case no:
      return "Suspense";
    case to:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case as:
        return (e.displayName || "Context") + ".Consumer";
      case ss:
        return (e._context.displayName || "Context") + ".Provider";
      case eu:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case nu:
        return (
          (n = e.displayName || null), n !== null ? n : ro(e.type) || "Memo"
        );
      case Ge:
        (n = e._payload), (e = e._init);
        try {
          return ro(e(n));
        } catch {}
    }
  return null;
}
function Fc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ro(n);
    case 8:
      return n === bo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function cn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fs(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Ic(e) {
  var n = fs(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      o = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (u) {
          (r = "" + u), o.call(this, u);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Ic(e));
}
function ds(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = fs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Dr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function lo(e, n) {
  var t = n.checked;
  return A({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Yu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = cn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function ps(e, n) {
  (n = n.checked), n != null && qo(e, "checked", n, !1);
}
function oo(e, n) {
  ps(e, n);
  var t = cn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? uo(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && uo(e, n.type, cn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Xu(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function uo(e, n, t) {
  (n !== "number" || Dr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var wt = Array.isArray;
function Qn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + cn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function io(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Gu(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (wt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: cn(t) };
}
function ms(e, n) {
  var t = cn(n.value),
    r = cn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Zu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function hs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function so(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? hs(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var or,
  vs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        or = or || document.createElement("div"),
          or.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Ot(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Et = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Et).forEach(function (e) {
  jc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Et[n] = Et[e]);
  });
});
function ys(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (Et.hasOwnProperty(e) && Et[e])
    ? ("" + n).trim()
    : n + "px";
}
function gs(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = ys(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Uc = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ao(e, n) {
  if (n) {
    if (Uc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function co(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fo = null;
function tu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var po = null,
  Kn = null,
  Yn = null;
function Ju(e) {
  if ((e = qt(e))) {
    if (typeof po != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = al(n)), po(e.stateNode, e.type, n));
  }
}
function ws(e) {
  Kn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Kn = e);
}
function Ss() {
  if (Kn) {
    var e = Kn,
      n = Yn;
    if (((Yn = Kn = null), Ju(e), n)) for (e = 0; e < n.length; e++) Ju(n[e]);
  }
}
function ks(e, n) {
  return e(n);
}
function Es() {}
var zl = !1;
function Cs(e, n, t) {
  if (zl) return e(n, t);
  zl = !0;
  try {
    return ks(e, n, t);
  } finally {
    (zl = !1), (Kn !== null || Yn !== null) && (Es(), Ss());
  }
}
function Dt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = al(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var mo = !1;
if (He)
  try {
    var ct = {};
    Object.defineProperty(ct, "passive", {
      get: function () {
        mo = !0;
      },
    }),
      window.addEventListener("test", ct, ct),
      window.removeEventListener("test", ct, ct);
  } catch {
    mo = !1;
  }
function $c(e, n, t, r, l, o, u, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (m) {
    this.onError(m);
  }
}
var Ct = !1,
  Mr = null,
  Fr = !1,
  ho = null,
  Ac = {
    onError: function (e) {
      (Ct = !0), (Mr = e);
    },
  };
function Vc(e, n, t, r, l, o, u, i, s) {
  (Ct = !1), (Mr = null), $c.apply(Ac, arguments);
}
function Wc(e, n, t, r, l, o, u, i, s) {
  if ((Vc.apply(this, arguments), Ct)) {
    if (Ct) {
      var c = Mr;
      (Ct = !1), (Mr = null);
    } else throw Error(y(198));
    Fr || ((Fr = !0), (ho = c));
  }
}
function Rn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function _s(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function qu(e) {
  if (Rn(e) !== e) throw Error(y(188));
}
function Hc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Rn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return qu(l), e;
        if (o === r) return qu(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = o);
    else {
      for (var u = !1, i = l.child; i; ) {
        if (i === t) {
          (u = !0), (t = l), (r = o);
          break;
        }
        if (i === r) {
          (u = !0), (r = l), (t = o);
          break;
        }
        i = i.sibling;
      }
      if (!u) {
        for (i = o.child; i; ) {
          if (i === t) {
            (u = !0), (t = o), (r = l);
            break;
          }
          if (i === r) {
            (u = !0), (r = o), (t = l);
            break;
          }
          i = i.sibling;
        }
        if (!u) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function xs(e) {
  return (e = Hc(e)), e !== null ? Ps(e) : null;
}
function Ps(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ps(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ns = ve.unstable_scheduleCallback,
  bu = ve.unstable_cancelCallback,
  Bc = ve.unstable_shouldYield,
  Qc = ve.unstable_requestPaint,
  B = ve.unstable_now,
  Kc = ve.unstable_getCurrentPriorityLevel,
  ru = ve.unstable_ImmediatePriority,
  zs = ve.unstable_UserBlockingPriority,
  Ir = ve.unstable_NormalPriority,
  Yc = ve.unstable_LowPriority,
  Ts = ve.unstable_IdlePriority,
  ol = null,
  Ie = null;
function Xc(e) {
  if (Ie && typeof Ie.onCommitFiberRoot == "function")
    try {
      Ie.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Le = Math.clz32 ? Math.clz32 : Jc,
  Gc = Math.log,
  Zc = Math.LN2;
function Jc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gc(e) / Zc) | 0)) | 0;
}
var ur = 64,
  ir = 4194304;
function St(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function jr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    u = t & 268435455;
  if (u !== 0) {
    var i = u & ~l;
    i !== 0 ? (r = St(i)) : ((o &= u), o !== 0 && (r = St(o)));
  } else (u = t & ~l), u !== 0 ? (r = St(u)) : o !== 0 && (r = St(o));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (o = n & -n), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Le(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function qc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bc(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var u = 31 - Le(o),
      i = 1 << u,
      s = l[u];
    s === -1
      ? (!(i & t) || i & r) && (l[u] = qc(i, n))
      : s <= n && (e.expiredLanes |= i),
      (o &= ~i);
  }
}
function vo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ls() {
  var e = ur;
  return (ur <<= 1), !(ur & 4194240) && (ur = 64), e;
}
function Tl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Zt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Le(n)),
    (e[n] = t);
}
function ef(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Le(t),
      o = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
  }
}
function lu(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Le(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var O = 0;
function Rs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Os,
  ou,
  Ds,
  Ms,
  Fs,
  yo = !1,
  sr = [],
  nn = null,
  tn = null,
  rn = null,
  Mt = new Map(),
  Ft = new Map(),
  Je = [],
  nf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ei(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      Mt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ft.delete(n.pointerId);
  }
}
function ft(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      n !== null && ((n = qt(n)), n !== null && ou(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function tf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (nn = ft(nn, e, n, t, r, l)), !0;
    case "dragenter":
      return (tn = ft(tn, e, n, t, r, l)), !0;
    case "mouseover":
      return (rn = ft(rn, e, n, t, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Mt.set(o, ft(Mt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Ft.set(o, ft(Ft.get(o) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Is(e) {
  var n = wn(e.target);
  if (n !== null) {
    var t = Rn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = _s(t)), n !== null)) {
          (e.blockedOn = n),
            Fs(e.priority, function () {
              Ds(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = go(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (fo = r), t.target.dispatchEvent(r), (fo = null);
    } else return (n = qt(t)), n !== null && ou(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function ni(e, n, t) {
  Cr(e) && t.delete(n);
}
function rf() {
  (yo = !1),
    nn !== null && Cr(nn) && (nn = null),
    tn !== null && Cr(tn) && (tn = null),
    rn !== null && Cr(rn) && (rn = null),
    Mt.forEach(ni),
    Ft.forEach(ni);
}
function dt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    yo ||
      ((yo = !0),
      ve.unstable_scheduleCallback(ve.unstable_NormalPriority, rf)));
}
function It(e) {
  function n(l) {
    return dt(l, e);
  }
  if (0 < sr.length) {
    dt(sr[0], e);
    for (var t = 1; t < sr.length; t++) {
      var r = sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nn !== null && dt(nn, e),
      tn !== null && dt(tn, e),
      rn !== null && dt(rn, e),
      Mt.forEach(n),
      Ft.forEach(n),
      t = 0;
    t < Je.length;
    t++
  )
    (r = Je[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Je.length && ((t = Je[0]), t.blockedOn === null); )
    Is(t), t.blockedOn === null && Je.shift();
}
var Xn = Ye.ReactCurrentBatchConfig,
  Ur = !0;
function lf(e, n, t, r) {
  var l = O,
    o = Xn.transition;
  Xn.transition = null;
  try {
    (O = 1), uu(e, n, t, r);
  } finally {
    (O = l), (Xn.transition = o);
  }
}
function of(e, n, t, r) {
  var l = O,
    o = Xn.transition;
  Xn.transition = null;
  try {
    (O = 4), uu(e, n, t, r);
  } finally {
    (O = l), (Xn.transition = o);
  }
}
function uu(e, n, t, r) {
  if (Ur) {
    var l = go(e, n, t, r);
    if (l === null) $l(e, n, r, $r, t), ei(e, r);
    else if (tf(l, e, n, t, r)) r.stopPropagation();
    else if ((ei(e, r), n & 4 && -1 < nf.indexOf(e))) {
      for (; l !== null; ) {
        var o = qt(l);
        if (
          (o !== null && Os(o),
          (o = go(e, n, t, r)),
          o === null && $l(e, n, r, $r, t),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else $l(e, n, r, null, t);
  }
}
var $r = null;
function go(e, n, t, r) {
  if ((($r = null), (e = tu(r)), (e = wn(e)), e !== null))
    if (((n = Rn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = _s(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return ($r = e), null;
}
function js(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kc()) {
        case ru:
          return 1;
        case zs:
          return 4;
        case Ir:
        case Yc:
          return 16;
        case Ts:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var be = null,
  iu = null,
  _r = null;
function Us() {
  if (_r) return _r;
  var e,
    n = iu,
    t = n.length,
    r,
    l = "value" in be ? be.value : be.textContent,
    o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var u = t - e;
  for (r = 1; r <= u && n[t - r] === l[o - r]; r++);
  return (_r = l.slice(e, 1 < r ? 1 - r : void 0));
}
function xr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function ti() {
  return !1;
}
function ge(e) {
  function n(t, r, l, o, u) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = u),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ar
        : ti),
      (this.isPropagationStopped = ti),
      this
    );
  }
  return (
    A(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    n
  );
}
var ot = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  su = ge(ot),
  Jt = A({}, ot, { view: 0, detail: 0 }),
  uf = ge(Jt),
  Ll,
  Rl,
  pt,
  ul = A({}, Jt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: au,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pt &&
            (pt && e.type === "mousemove"
              ? ((Ll = e.screenX - pt.screenX), (Rl = e.screenY - pt.screenY))
              : (Rl = Ll = 0),
            (pt = e)),
          Ll);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Rl;
    },
  }),
  ri = ge(ul),
  sf = A({}, ul, { dataTransfer: 0 }),
  af = ge(sf),
  cf = A({}, Jt, { relatedTarget: 0 }),
  Ol = ge(cf),
  ff = A({}, ot, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  df = ge(ff),
  pf = A({}, ot, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mf = ge(pf),
  hf = A({}, ot, { data: 0 }),
  li = ge(hf),
  vf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  yf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = gf[e]) ? !!n[e] : !1;
}
function au() {
  return wf;
}
var Sf = A({}, Jt, {
    key: function (e) {
      if (e.key) {
        var n = vf[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = xr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? yf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: au,
    charCode: function (e) {
      return e.type === "keypress" ? xr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? xr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kf = ge(Sf),
  Ef = A({}, ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  oi = ge(Ef),
  Cf = A({}, Jt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au,
  }),
  _f = ge(Cf),
  xf = A({}, ot, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pf = ge(xf),
  Nf = A({}, ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zf = ge(Nf),
  Tf = [9, 13, 27, 32],
  cu = He && "CompositionEvent" in window,
  _t = null;
He && "documentMode" in document && (_t = document.documentMode);
var Lf = He && "TextEvent" in window && !_t,
  $s = He && (!cu || (_t && 8 < _t && 11 >= _t)),
  ui = String.fromCharCode(32),
  ii = !1;
function As(e, n) {
  switch (e) {
    case "keyup":
      return Tf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function Rf(e, n) {
  switch (e) {
    case "compositionend":
      return Vs(n);
    case "keypress":
      return n.which !== 32 ? null : ((ii = !0), ui);
    case "textInput":
      return (e = n.data), e === ui && ii ? null : e;
    default:
      return null;
  }
}
function Of(e, n) {
  if (Fn)
    return e === "compositionend" || (!cu && As(e, n))
      ? ((e = Us()), (_r = iu = be = null), (Fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return $s && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Df = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function si(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Df[e.type] : n === "textarea";
}
function Ws(e, n, t, r) {
  ws(r),
    (n = Ar(n, "onChange")),
    0 < n.length &&
      ((t = new su("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var xt = null,
  jt = null;
function Mf(e) {
  bs(e, 0);
}
function il(e) {
  var n = Un(e);
  if (ds(n)) return e;
}
function Ff(e, n) {
  if (e === "change") return n;
}
var Hs = !1;
if (He) {
  var Dl;
  if (He) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var ai = document.createElement("div");
      ai.setAttribute("oninput", "return;"),
        (Ml = typeof ai.oninput == "function");
    }
    Dl = Ml;
  } else Dl = !1;
  Hs = Dl && (!document.documentMode || 9 < document.documentMode);
}
function ci() {
  xt && (xt.detachEvent("onpropertychange", Bs), (jt = xt = null));
}
function Bs(e) {
  if (e.propertyName === "value" && il(jt)) {
    var n = [];
    Ws(n, jt, e, tu(e)), Cs(Mf, n);
  }
}
function If(e, n, t) {
  e === "focusin"
    ? (ci(), (xt = n), (jt = t), xt.attachEvent("onpropertychange", Bs))
    : e === "focusout" && ci();
}
function jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return il(jt);
}
function Uf(e, n) {
  if (e === "click") return il(n);
}
function $f(e, n) {
  if (e === "input" || e === "change") return il(n);
}
function Af(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Oe = typeof Object.is == "function" ? Object.is : Af;
function Ut(e, n) {
  if (Oe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!bl.call(n, l) || !Oe(e[l], n[l])) return !1;
  }
  return !0;
}
function fi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function di(e, n) {
  var t = fi(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = fi(t);
  }
}
function Qs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Qs(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Ks() {
  for (var e = window, n = Dr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Dr(e.document);
  }
  return n;
}
function fu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Vf(e) {
  var n = Ks(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Qs(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && fu(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = di(t, o));
        var u = di(t, r);
        l &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(n), e.extend(u.node, u.offset))
            : (n.setEnd(u.node, u.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Wf = He && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  wo = null,
  Pt = null,
  So = !1;
function pi(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  So ||
    In == null ||
    In !== Dr(r) ||
    ((r = In),
    "selectionStart" in r && fu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pt && Ut(Pt, r)) ||
      ((Pt = r),
      (r = Ar(wo, "onSelect")),
      0 < r.length &&
        ((n = new su("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = In))));
}
function cr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var jn = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Fl = {},
  Ys = {};
He &&
  ((Ys = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete jn.animationend.animation,
    delete jn.animationiteration.animation,
    delete jn.animationstart.animation),
  "TransitionEvent" in window || delete jn.transitionend.transition);
function sl(e) {
  if (Fl[e]) return Fl[e];
  if (!jn[e]) return e;
  var n = jn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Ys) return (Fl[e] = n[t]);
  return e;
}
var Xs = sl("animationend"),
  Gs = sl("animationiteration"),
  Zs = sl("animationstart"),
  Js = sl("transitionend"),
  qs = new Map(),
  mi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dn(e, n) {
  qs.set(e, n), Ln(n, [e]);
}
for (var Il = 0; Il < mi.length; Il++) {
  var jl = mi[Il],
    Hf = jl.toLowerCase(),
    Bf = jl[0].toUpperCase() + jl.slice(1);
  dn(Hf, "on" + Bf);
}
dn(Xs, "onAnimationEnd");
dn(Gs, "onAnimationIteration");
dn(Zs, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Js, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
Ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));
function hi(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Wc(r, n, void 0, e), (e.currentTarget = null);
}
function bs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u],
            s = i.instance,
            c = i.currentTarget;
          if (((i = i.listener), s !== o && l.isPropagationStopped())) break e;
          hi(l, i, c), (o = s);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((i = r[u]),
            (s = i.instance),
            (c = i.currentTarget),
            (i = i.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          hi(l, i, c), (o = s);
        }
    }
  }
  if (Fr) throw ((e = ho), (Fr = !1), (ho = null), e);
}
function M(e, n) {
  var t = n[xo];
  t === void 0 && (t = n[xo] = new Set());
  var r = e + "__bubble";
  t.has(r) || (ea(n, e, 2, !1), t.add(r));
}
function Ul(e, n, t) {
  var r = 0;
  n && (r |= 4), ea(t, e, r, n);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function $t(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      is.forEach(function (t) {
        t !== "selectionchange" && (Qf.has(t) || Ul(t, !1, e), Ul(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[fr] || ((n[fr] = !0), Ul("selectionchange", !1, n));
  }
}
function ea(e, n, t, r) {
  switch (js(n)) {
    case 1:
      var l = lf;
      break;
    case 4:
      l = of;
      break;
    default:
      l = uu;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !mo ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function $l(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var s = u.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = u.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            u = u.return;
          }
        for (; i !== null; ) {
          if (((u = wn(i)), u === null)) return;
          if (((s = u.tag), s === 5 || s === 6)) {
            r = o = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  Cs(function () {
    var c = o,
      m = tu(t),
      h = [];
    e: {
      var p = qs.get(e);
      if (p !== void 0) {
        var g = su,
          w = e;
        switch (e) {
          case "keypress":
            if (xr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = kf;
            break;
          case "focusin":
            (w = "focus"), (g = Ol);
            break;
          case "focusout":
            (w = "blur"), (g = Ol);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ol;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ri;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = _f;
            break;
          case Xs:
          case Gs:
          case Zs:
            g = df;
            break;
          case Js:
            g = Pf;
            break;
          case "scroll":
            g = uf;
            break;
          case "wheel":
            g = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = oi;
        }
        var S = (n & 4) !== 0,
          I = !S && e === "scroll",
          f = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Dt(a, f)), v != null && S.push(At(a, v, d)))),
            I)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new g(p, w, null, t, m)), h.push({ event: p, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            t !== fo &&
            (w = t.relatedTarget || t.fromElement) &&
            (wn(w) || w[Be]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = t.relatedTarget || t.toElement),
              (g = c),
              (w = w ? wn(w) : null),
              w !== null &&
                ((I = Rn(w)), w !== I || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((S = ri),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = oi),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (I = g == null ? p : Un(g)),
            (d = w == null ? p : Un(w)),
            (p = new S(v, a + "leave", g, t, m)),
            (p.target = I),
            (p.relatedTarget = d),
            (v = null),
            wn(m) === c &&
              ((S = new S(f, a + "enter", w, t, m)),
              (S.target = d),
              (S.relatedTarget = I),
              (v = S)),
            (I = v),
            g && w)
          )
            n: {
              for (S = g, f = w, a = 0, d = S; d; d = On(d)) a++;
              for (d = 0, v = f; v; v = On(v)) d++;
              for (; 0 < a - d; ) (S = On(S)), a--;
              for (; 0 < d - a; ) (f = On(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break n;
                (S = On(S)), (f = On(f));
              }
              S = null;
            }
          else S = null;
          g !== null && vi(h, p, g, S, !1),
            w !== null && I !== null && vi(h, I, w, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? Un(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var E = Ff;
        else if (si(p))
          if (Hs) E = $f;
          else {
            E = jf;
            var _ = If;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Uf);
        if (E && (E = E(e, c))) {
          Ws(h, E, t, m);
          break e;
        }
        _ && _(e, p, c),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            uo(p, "number", p.value);
      }
      switch (((_ = c ? Un(c) : window), e)) {
        case "focusin":
          (si(_) || _.contentEditable === "true") &&
            ((In = _), (wo = c), (Pt = null));
          break;
        case "focusout":
          Pt = wo = In = null;
          break;
        case "mousedown":
          So = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (So = !1), pi(h, t, m);
          break;
        case "selectionchange":
          if (Wf) break;
        case "keydown":
        case "keyup":
          pi(h, t, m);
      }
      var x;
      if (cu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Fn
          ? As(e, t) && (P = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P &&
        ($s &&
          t.locale !== "ko" &&
          (Fn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Fn && (x = Us())
            : ((be = m),
              (iu = "value" in be ? be.value : be.textContent),
              (Fn = !0))),
        (_ = Ar(c, P)),
        0 < _.length &&
          ((P = new li(P, e, null, t, m)),
          h.push({ event: P, listeners: _ }),
          x ? (P.data = x) : ((x = Vs(t)), x !== null && (P.data = x)))),
        (x = Lf ? Rf(e, t) : Of(e, t)) &&
          ((c = Ar(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new li("onBeforeInput", "beforeinput", null, t, m)),
            h.push({ event: m, listeners: c }),
            (m.data = x)));
    }
    bs(h, n);
  });
}
function At(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ar(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Dt(e, t)),
      o != null && r.unshift(At(e, o, l)),
      (o = Dt(e, n)),
      o != null && r.push(At(e, o, l))),
      (e = e.return);
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vi(e, n, t, r, l) {
  for (var o = n._reactName, u = []; t !== null && t !== r; ) {
    var i = t,
      s = i.alternate,
      c = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 &&
      c !== null &&
      ((i = c),
      l
        ? ((s = Dt(t, o)), s != null && u.unshift(At(t, s, i)))
        : l || ((s = Dt(t, o)), s != null && u.push(At(t, s, i)))),
      (t = t.return);
  }
  u.length !== 0 && e.push({ event: n, listeners: u });
}
var Kf = /\r\n?/g,
  Yf = /\u0000|\uFFFD/g;
function yi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kf,
      `
`
    )
    .replace(Yf, "");
}
function dr(e, n, t) {
  if (((n = yi(n)), yi(e) !== n && t)) throw Error(y(425));
}
function Vr() {}
var ko = null,
  Eo = null;
function Co(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var _o = typeof setTimeout == "function" ? setTimeout : void 0,
  Xf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gi = typeof Promise == "function" ? Promise : void 0,
  Gf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof gi < "u"
      ? function (e) {
          return gi.resolve(null).then(e).catch(Zf);
        }
      : _o;
function Zf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), It(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  It(n);
}
function ln(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function wi(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ut = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + ut,
  Vt = "__reactProps$" + ut,
  Be = "__reactContainer$" + ut,
  xo = "__reactEvents$" + ut,
  Jf = "__reactListeners$" + ut,
  qf = "__reactHandles$" + ut;
function wn(e) {
  var n = e[Fe];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Be] || t[Fe])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = wi(e); e !== null; ) {
          if ((t = e[Fe])) return t;
          e = wi(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function qt(e) {
  return (
    (e = e[Fe] || e[Be]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function al(e) {
  return e[Vt] || null;
}
var Po = [],
  $n = -1;
function pn(e) {
  return { current: e };
}
function F(e) {
  0 > $n || ((e.current = Po[$n]), (Po[$n] = null), $n--);
}
function D(e, n) {
  $n++, (Po[$n] = e.current), (e.current = n);
}
var fn = {},
  re = pn(fn),
  ce = pn(!1),
  xn = fn;
function qn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in t) l[o] = n[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Wr() {
  F(ce), F(re);
}
function Si(e, n, t) {
  if (re.current !== fn) throw Error(y(168));
  D(re, n), D(ce, t);
}
function na(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Fc(e) || "Unknown", l));
  return A({}, t, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn),
    (xn = re.current),
    D(re, e),
    D(ce, ce.current),
    !0
  );
}
function ki(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = na(e, n, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(ce),
      F(re),
      D(re, e))
    : F(ce),
    D(ce, t);
}
var $e = null,
  cl = !1,
  Vl = !1;
function ta(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function bf(e) {
  (cl = !0), ta(e);
}
function mn() {
  if (!Vl && $e !== null) {
    Vl = !0;
    var e = 0,
      n = O;
    try {
      var t = $e;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (cl = !1);
    } catch (l) {
      throw ($e !== null && ($e = $e.slice(e + 1)), Ns(ru, mn), l);
    } finally {
      (O = n), (Vl = !1);
    }
  }
  return null;
}
var An = [],
  Vn = 0,
  Br = null,
  Qr = 0,
  we = [],
  Se = 0,
  Pn = null,
  Ae = 1,
  Ve = "";
function yn(e, n) {
  (An[Vn++] = Qr), (An[Vn++] = Br), (Br = e), (Qr = n);
}
function ra(e, n, t) {
  (we[Se++] = Ae), (we[Se++] = Ve), (we[Se++] = Pn), (Pn = e);
  var r = Ae;
  e = Ve;
  var l = 32 - Le(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var o = 32 - Le(n) + l;
  if (30 < o) {
    var u = l - (l % 5);
    (o = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (l -= u),
      (Ae = (1 << (32 - Le(n) + l)) | (t << l) | r),
      (Ve = o + e);
  } else (Ae = (1 << o) | (t << l) | r), (Ve = e);
}
function du(e) {
  e.return !== null && (yn(e, 1), ra(e, 1, 0));
}
function pu(e) {
  for (; e === Br; )
    (Br = An[--Vn]), (An[Vn] = null), (Qr = An[--Vn]), (An[Vn] = null);
  for (; e === Pn; )
    (Pn = we[--Se]),
      (we[Se] = null),
      (Ve = we[--Se]),
      (we[Se] = null),
      (Ae = we[--Se]),
      (we[Se] = null);
}
var he = null,
  me = null,
  j = !1,
  Te = null;
function la(e, n) {
  var t = ke(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function Ei(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (he = e), (me = ln(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (he = e), (me = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Pn !== null ? { id: Ae, overflow: Ve } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = ke(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (he = e),
            (me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function No(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zo(e) {
  if (j) {
    var n = me;
    if (n) {
      var t = n;
      if (!Ei(e, n)) {
        if (No(e)) throw Error(y(418));
        n = ln(t.nextSibling);
        var r = he;
        n && Ei(e, n)
          ? la(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (j = !1), (he = e));
      }
    } else {
      if (No(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (j = !1), (he = e);
    }
  }
}
function Ci(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  he = e;
}
function pr(e) {
  if (e !== he) return !1;
  if (!j) return Ci(e), (j = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !Co(e.type, e.memoizedProps))),
    n && (n = me))
  ) {
    if (No(e)) throw (oa(), Error(y(418)));
    for (; n; ) la(e, n), (n = ln(n.nextSibling));
  }
  if ((Ci(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              me = ln(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else me = he ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function oa() {
  for (var e = me; e; ) e = ln(e.nextSibling);
}
function bn() {
  (me = he = null), (j = !1);
}
function mu(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var ed = Ye.ReactCurrentBatchConfig;
function Ne(e, n) {
  if (e && e.defaultProps) {
    (n = A({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Kr = pn(null),
  Yr = null,
  Wn = null,
  hu = null;
function vu() {
  hu = Wn = Yr = null;
}
function yu(e) {
  var n = Kr.current;
  F(Kr), (e._currentValue = n);
}
function To(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Gn(e, n) {
  (Yr = e),
    (hu = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ae = !0), (e.firstContext = null));
}
function Ce(e) {
  var n = e._currentValue;
  if (hu !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Wn === null)) {
      if (Yr === null) throw Error(y(308));
      (Wn = e), (Yr.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return n;
}
var Sn = null;
function gu(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function ua(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), gu(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Qe(e, r)
  );
}
function Qe(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Ze = !1;
function wu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ia(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Qe(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), gu(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Qe(e, t)
  );
}
function Pr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), lu(e, t);
  }
}
function _i(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      o = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var u = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        o === null ? (l = o = u) : (o = o.next = u), (t = t.next);
      } while (t !== null);
      o === null ? (l = o = n) : (o = o.next = n);
    } else l = o = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Xr(e, n, t, r) {
  var l = e.updateQueue;
  Ze = !1;
  var o = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i,
      c = s.next;
    (s.next = null), u === null ? (o = c) : (u.next = c), (u = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (i = m.lastBaseUpdate),
      i !== u &&
        (i === null ? (m.firstBaseUpdate = c) : (i.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (u = 0), (m = c = s = null), (i = o);
    do {
      var p = i.lane,
        g = i.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var w = e,
            S = i;
          switch (((p = n), (g = t), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == "function" ? w.call(g, h, p) : w),
                p == null)
              )
                break e;
              h = A({}, h, p);
              break e;
            case 2:
              Ze = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [i]) : p.push(i));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          m === null ? ((c = m = g), (s = h)) : (m = m.next = g),
          (u |= p);
      if (((i = i.next), i === null)) {
        if (((i = l.shared.pending), i === null)) break;
        (p = i),
          (i = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (u |= l.lane), (l = l.next);
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    (zn |= u), (e.lanes = u), (e.memoizedState = h);
  }
}
function xi(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var sa = new us.Component().refs;
function Lo(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : A({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = sn(e),
      o = We(r, l);
    (o.payload = n),
      t != null && (o.callback = t),
      (n = on(e, o, l)),
      n !== null && (Re(n, e, l, r), Pr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = sn(e),
      o = We(r, l);
    (o.tag = 1),
      (o.payload = n),
      t != null && (o.callback = t),
      (n = on(e, o, l)),
      n !== null && (Re(n, e, l, r), Pr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = oe(),
      r = sn(e),
      l = We(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = on(e, l, r)),
      n !== null && (Re(n, e, r, t), Pr(n, e, r));
  },
};
function Pi(e, n, t, r, l, o, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, u)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Ut(t, r) || !Ut(l, o)
      : !0
  );
}
function aa(e, n, t) {
  var r = !1,
    l = fn,
    o = n.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ce(o))
      : ((l = fe(n) ? xn : re.current),
        (r = n.contextTypes),
        (o = (r = r != null) ? qn(e, l) : fn)),
    (n = new n(t, o)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = fl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    n
  );
}
function Ni(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && fl.enqueueReplaceState(n, n.state, null);
}
function Ro(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = sa), wu(e);
  var o = n.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ce(o))
    : ((o = fe(n) ? xn : re.current), (l.context = qn(e, o))),
    (l.state = e.memoizedState),
    (o = n.getDerivedStateFromProps),
    typeof o == "function" && (Lo(e, n, o, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && fl.enqueueReplaceState(l, l.state, null),
      Xr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === o
        ? n.ref
        : ((n = function (u) {
            var i = l.refs;
            i === sa && (i = l.refs = {}),
              u === null ? delete i[o] : (i[o] = u);
          }),
          (n._stringRef = o),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function zi(e) {
  var n = e._init;
  return n(e._payload);
}
function ca(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = an(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function u(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Xl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Mn
      ? m(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Ge &&
            zi(E) === a.type))
      ? ((v = l(a, d.props)), (v.ref = mt(f, a, d)), (v.return = f), v)
      : ((v = Or(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = mt(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Gl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function m(f, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Cn(d, f.mode, v, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Xl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (d = Or(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = mt(f, null, a)),
            (d.return = f),
            d
          );
        case Dn:
          return (a = Gl(a, f.mode, d)), (a.return = f), a;
        case Ge:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (wt(a) || at(a))
        return (a = Cn(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : i(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === E ? s(f, a, d, v) : null;
        case Dn:
          return d.key === E ? c(f, a, d, v) : null;
        case Ge:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (wt(d) || at(d)) return E !== null ? null : m(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), i(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case Dn:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case Ge:
          var _ = v._init;
          return g(f, a, d, _(v._payload), E);
      }
      if (wt(v) || at(v)) return (f = f.get(d) || null), m(a, f, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (
      var E = null, _ = null, x = a, P = (a = 0), W = null;
      x !== null && P < d.length;
      P++
    ) {
      x.index > P ? ((W = x), (x = null)) : (W = x.sibling);
      var L = p(f, x, d[P], v);
      if (L === null) {
        x === null && (x = W);
        break;
      }
      e && x && L.alternate === null && n(f, x),
        (a = o(L, a, P)),
        _ === null ? (E = L) : (_.sibling = L),
        (_ = L),
        (x = W);
    }
    if (P === d.length) return t(f, x), j && yn(f, P), E;
    if (x === null) {
      for (; P < d.length; P++)
        (x = h(f, d[P], v)),
          x !== null &&
            ((a = o(x, a, P)), _ === null ? (E = x) : (_.sibling = x), (_ = x));
      return j && yn(f, P), E;
    }
    for (x = r(f, x); P < d.length; P++)
      (W = g(x, f, P, d[P], v)),
        W !== null &&
          (e && W.alternate !== null && x.delete(W.key === null ? P : W.key),
          (a = o(W, a, P)),
          _ === null ? (E = W) : (_.sibling = W),
          (_ = W));
    return (
      e &&
        x.forEach(function (xe) {
          return n(f, xe);
        }),
      j && yn(f, P),
      E
    );
  }
  function S(f, a, d, v) {
    var E = at(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var _ = (E = null), x = a, P = (a = 0), W = null, L = d.next();
      x !== null && !L.done;
      P++, L = d.next()
    ) {
      x.index > P ? ((W = x), (x = null)) : (W = x.sibling);
      var xe = p(f, x, L.value, v);
      if (xe === null) {
        x === null && (x = W);
        break;
      }
      e && x && xe.alternate === null && n(f, x),
        (a = o(xe, a, P)),
        _ === null ? (E = xe) : (_.sibling = xe),
        (_ = xe),
        (x = W);
    }
    if (L.done) return t(f, x), j && yn(f, P), E;
    if (x === null) {
      for (; !L.done; P++, L = d.next())
        (L = h(f, L.value, v)),
          L !== null &&
            ((a = o(L, a, P)), _ === null ? (E = L) : (_.sibling = L), (_ = L));
      return j && yn(f, P), E;
    }
    for (x = r(f, x); !L.done; P++, L = d.next())
      (L = g(x, f, P, L.value, v)),
        L !== null &&
          (e && L.alternate !== null && x.delete(L.key === null ? P : L.key),
          (a = o(L, a, P)),
          _ === null ? (E = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        x.forEach(function (it) {
          return n(f, it);
        }),
      j && yn(f, P),
      E
    );
  }
  function I(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Mn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (((E = d.type), E === Mn)) {
                  if (_.tag === 7) {
                    t(f, _.sibling),
                      (a = l(_, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Ge &&
                    zi(E) === _.type)
                ) {
                  t(f, _.sibling),
                    (a = l(_, d.props)),
                    (a.ref = mt(f, _, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                t(f, _);
                break;
              } else n(f, _);
              _ = _.sibling;
            }
            d.type === Mn
              ? ((a = Cn(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Or(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = mt(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return u(f);
        case Dn:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = Gl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return u(f);
        case Ge:
          return (_ = d._init), I(f, a, _(d._payload), v);
      }
      if (wt(d)) return w(f, a, d, v);
      if (at(d)) return S(f, a, d, v);
      mr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Xl(d, f.mode, v)), (a.return = f), (f = a)),
        u(f))
      : t(f, a);
  }
  return I;
}
var et = ca(!0),
  fa = ca(!1),
  bt = {},
  je = pn(bt),
  Wt = pn(bt),
  Ht = pn(bt);
function kn(e) {
  if (e === bt) throw Error(y(174));
  return e;
}
function Su(e, n) {
  switch ((D(Ht, n), D(Wt, e), D(je, bt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : so(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = so(n, e));
  }
  F(je), D(je, n);
}
function nt() {
  F(je), F(Wt), F(Ht);
}
function da(e) {
  kn(Ht.current);
  var n = kn(je.current),
    t = so(n, e.type);
  n !== t && (D(Wt, e), D(je, t));
}
function ku(e) {
  Wt.current === e && (F(je), F(Wt));
}
var U = pn(0);
function Gr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Wl = [];
function Eu() {
  for (var e = 0; e < Wl.length; e++)
    Wl[e]._workInProgressVersionPrimary = null;
  Wl.length = 0;
}
var Nr = Ye.ReactCurrentDispatcher,
  Hl = Ye.ReactCurrentBatchConfig,
  Nn = 0,
  $ = null,
  K = null,
  G = null,
  Zr = !1,
  Nt = !1,
  Bt = 0,
  nd = 0;
function ee() {
  throw Error(y(321));
}
function Cu(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Oe(e[t], n[t])) return !1;
  return !0;
}
function _u(e, n, t, r, l, o) {
  if (
    ((Nn = o),
    ($ = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? od : ud),
    (e = t(r, l)),
    Nt)
  ) {
    o = 0;
    do {
      if (((Nt = !1), (Bt = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (G = K = null),
        (n.updateQueue = null),
        (Nr.current = id),
        (e = t(r, l));
    } while (Nt);
  }
  if (
    ((Nr.current = Jr),
    (n = K !== null && K.next !== null),
    (Nn = 0),
    (G = K = $ = null),
    (Zr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function xu() {
  var e = Bt !== 0;
  return (Bt = 0), e;
}
function Me() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return G === null ? ($.memoizedState = G = e) : (G = G.next = e), G;
}
function _e() {
  if (K === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var n = G === null ? $.memoizedState : G.next;
  if (n !== null) (G = n), (K = e);
  else {
    if (e === null) throw Error(y(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      G === null ? ($.memoizedState = G = e) : (G = G.next = e);
  }
  return G;
}
function Qt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Bl(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var u = l.next;
      (l.next = o.next), (o.next = u);
    }
    (r.baseQueue = l = o), (t.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var i = (u = null),
      s = null,
      c = o;
    do {
      var m = c.lane;
      if ((Nn & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((i = s = h), (u = r)) : (s = s.next = h),
          ($.lanes |= m),
          (zn |= m);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (u = r) : (s.next = i),
      Oe(r, n.memoizedState) || (ae = !0),
      (n.memoizedState = r),
      (n.baseState = u),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), ($.lanes |= o), (zn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Ql(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var u = (l = l.next);
    do (o = e(o, u.action)), (u = u.next);
    while (u !== l);
    Oe(o, n.memoizedState) || (ae = !0),
      (n.memoizedState = o),
      n.baseQueue === null && (n.baseState = o),
      (t.lastRenderedState = o);
  }
  return [o, r];
}
function pa() {}
function ma(e, n) {
  var t = $,
    r = _e(),
    l = n(),
    o = !Oe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ae = !0)),
    (r = r.queue),
    Pu(ya.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || o || (G !== null && G.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Kt(9, va.bind(null, t, r, l, n), void 0, null),
      Z === null)
    )
      throw Error(y(349));
    Nn & 30 || ha(t, n, l);
  }
  return l;
}
function ha(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = $.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        ($.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function va(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), ga(n) && wa(e);
}
function ya(e, n, t) {
  return t(function () {
    ga(n) && wa(e);
  });
}
function ga(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Oe(e, t);
  } catch {
    return !0;
  }
}
function wa(e) {
  var n = Qe(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function Ti(e) {
  var n = Me();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = ld.bind(null, $, e)),
    [n.memoizedState, e]
  );
}
function Kt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = $.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        ($.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Sa() {
  return _e().memoizedState;
}
function zr(e, n, t, r) {
  var l = Me();
  ($.flags |= e),
    (l.memoizedState = Kt(1 | n, t, void 0, r === void 0 ? null : r));
}
function dl(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var u = K.memoizedState;
    if (((o = u.destroy), r !== null && Cu(r, u.deps))) {
      l.memoizedState = Kt(n, t, o, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Kt(1 | n, t, o, r));
}
function Li(e, n) {
  return zr(8390656, 8, e, n);
}
function Pu(e, n) {
  return dl(2048, 8, e, n);
}
function ka(e, n) {
  return dl(4, 2, e, n);
}
function Ea(e, n) {
  return dl(4, 4, e, n);
}
function Ca(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function _a(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), dl(4, 4, Ca.bind(null, n, e), t)
  );
}
function Nu() {}
function xa(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Cu(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Pa(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Cu(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Na(e, n, t) {
  return Nn & 21
    ? (Oe(t, n) || ((t = Ls()), ($.lanes |= t), (zn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ae = !0)), (e.memoizedState = t));
}
function td(e, n) {
  var t = O;
  (O = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), n();
  } finally {
    (O = t), (Hl.transition = r);
  }
}
function za() {
  return _e().memoizedState;
}
function rd(e, n, t) {
  var r = sn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ta(e))
  )
    La(n, t);
  else if (((t = ua(e, n, t, r)), t !== null)) {
    var l = oe();
    Re(t, e, r, l), Ra(t, n, r);
  }
}
function ld(e, n, t) {
  var r = sn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ta(e)) La(n, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = n.lastRenderedReducer), o !== null)
    )
      try {
        var u = n.lastRenderedState,
          i = o(u, t);
        if (((l.hasEagerState = !0), (l.eagerState = i), Oe(i, u))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), gu(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = ua(e, n, l, r)),
      t !== null && ((l = oe()), Re(t, e, r, l), Ra(t, n, r));
  }
}
function Ta(e) {
  var n = e.alternate;
  return e === $ || (n !== null && n === $);
}
function La(e, n) {
  Nt = Zr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Ra(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), lu(e, t);
  }
}
var Jr = {
    readContext: Ce,
    useCallback: ee,
    useContext: ee,
    useEffect: ee,
    useImperativeHandle: ee,
    useInsertionEffect: ee,
    useLayoutEffect: ee,
    useMemo: ee,
    useReducer: ee,
    useRef: ee,
    useState: ee,
    useDebugValue: ee,
    useDeferredValue: ee,
    useTransition: ee,
    useMutableSource: ee,
    useSyncExternalStore: ee,
    useId: ee,
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: Ce,
    useCallback: function (e, n) {
      return (Me().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ce,
    useEffect: Li,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        zr(4194308, 4, Ca.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return zr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return zr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Me();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = Me();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = rd.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Me();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Ti,
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      return (Me().memoizedState = e);
    },
    useTransition: function () {
      var e = Ti(!1),
        n = e[0];
      return (e = td.bind(null, e[1])), (Me().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = $,
        l = Me();
      if (j) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), Z === null)) throw Error(y(349));
        Nn & 30 || ha(r, n, t);
      }
      l.memoizedState = t;
      var o = { value: t, getSnapshot: n };
      return (
        (l.queue = o),
        Li(ya.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Kt(9, va.bind(null, r, o, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Me(),
        n = Z.identifierPrefix;
      if (j) {
        var t = Ve,
          r = Ae;
        (t = (r & ~(1 << (32 - Le(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Bt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = nd++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  ud = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: Pu,
    useImperativeHandle: _a,
    useInsertionEffect: ka,
    useLayoutEffect: Ea,
    useMemo: Pa,
    useReducer: Bl,
    useRef: Sa,
    useState: function () {
      return Bl(Qt);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var n = _e();
      return Na(n, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Qt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: pa,
    useSyncExternalStore: ma,
    useId: za,
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: Pu,
    useImperativeHandle: _a,
    useInsertionEffect: ka,
    useLayoutEffect: Ea,
    useMemo: Pa,
    useReducer: Ql,
    useRef: Sa,
    useState: function () {
      return Ql(Qt);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var n = _e();
      return K === null ? (n.memoizedState = e) : Na(n, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Qt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: pa,
    useSyncExternalStore: ma,
    useId: za,
    unstable_isNewReconciler: !1,
  };
function tt(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Mc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Kl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Oo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var sd = typeof WeakMap == "function" ? WeakMap : Map;
function Oa(e, n, t) {
  (t = We(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      br || ((br = !0), (Wo = r)), Oo(e, n);
    }),
    t
  );
}
function Da(e, n, t) {
  (t = We(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Oo(e, n);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        Oo(e, n),
          typeof r != "function" &&
            (un === null ? (un = new Set([this])) : un.add(this));
        var u = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    t
  );
}
function Ri(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Ed.bind(null, e, n, t)), n.then(e, e));
}
function Oi(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Di(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = We(-1, 1)), (n.tag = 2), on(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var ad = Ye.ReactCurrentOwner,
  ae = !1;
function le(e, n, t, r) {
  n.child = e === null ? fa(n, null, t, r) : et(n, e.child, t, r);
}
function Mi(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return (
    Gn(n, l),
    (r = _u(e, n, t, r, o, l)),
    (t = xu()),
    e !== null && !ae
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, n, l))
      : (j && t && du(n), (n.flags |= 1), le(e, n, r, l), n.child)
  );
}
function Fi(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" &&
      !Fu(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = o), Ma(e, n, o, r, l))
      : ((e = Or(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var u = o.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Ut), t(u, r) && e.ref === n.ref)
    )
      return Ke(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = an(o, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ma(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ut(o, r) && e.ref === n.ref)
      if (((ae = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ae = !0);
      else return (n.lanes = e.lanes), Ke(e, n, l);
  }
  return Do(e, n, t, r, l);
}
function Fa(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Bn, pe),
        (pe |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          D(Bn, pe),
          (pe |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : t),
        D(Bn, pe),
        (pe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t),
      D(Bn, pe),
      (pe |= r);
  return le(e, n, l, t), n.child;
}
function Ia(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Do(e, n, t, r, l) {
  var o = fe(t) ? xn : re.current;
  return (
    (o = qn(n, o)),
    Gn(n, l),
    (t = _u(e, n, t, r, o, l)),
    (r = xu()),
    e !== null && !ae
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, n, l))
      : (j && r && du(n), (n.flags |= 1), le(e, n, t, l), n.child)
  );
}
function Ii(e, n, t, r, l) {
  if (fe(t)) {
    var o = !0;
    Hr(n);
  } else o = !1;
  if ((Gn(n, l), n.stateNode === null))
    Tr(e, n), aa(n, t, r), Ro(n, t, r, l), (r = !0);
  else if (e === null) {
    var u = n.stateNode,
      i = n.memoizedProps;
    u.props = i;
    var s = u.context,
      c = t.contextType;
    typeof c == "object" && c !== null
      ? (c = Ce(c))
      : ((c = fe(t) ? xn : re.current), (c = qn(n, c)));
    var m = t.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((i !== r || s !== c) && Ni(n, u, r, c)),
      (Ze = !1);
    var p = n.memoizedState;
    (u.state = p),
      Xr(n, r, u, l),
      (s = n.memoizedState),
      i !== r || p !== s || ce.current || Ze
        ? (typeof m == "function" && (Lo(n, t, m, r), (s = n.memoizedState)),
          (i = Ze || Pi(n, t, i, r, p, s, c))
            ? (h ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (u.props = r),
          (u.state = s),
          (u.context = c),
          (r = i))
        : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (u = n.stateNode),
      ia(e, n),
      (i = n.memoizedProps),
      (c = n.type === n.elementType ? i : Ne(n.type, i)),
      (u.props = c),
      (h = n.pendingProps),
      (p = u.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = Ce(s))
        : ((s = fe(t) ? xn : re.current), (s = qn(n, s)));
    var g = t.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((i !== h || p !== s) && Ni(n, u, r, s)),
      (Ze = !1),
      (p = n.memoizedState),
      (u.state = p),
      Xr(n, r, u, l);
    var w = n.memoizedState;
    i !== h || p !== w || ce.current || Ze
      ? (typeof g == "function" && (Lo(n, t, g, r), (w = n.memoizedState)),
        (c = Ze || Pi(n, t, c, r, p, w, s) || !1)
          ? (m ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, w, s),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, w, s)),
            typeof u.componentDidUpdate == "function" && (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (u.props = r),
        (u.state = w),
        (u.context = s),
        (r = c))
      : (typeof u.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Mo(e, n, t, r, o, l);
}
function Mo(e, n, t, r, l, o) {
  Ia(e, n);
  var u = (n.flags & 128) !== 0;
  if (!r && !u) return l && ki(n, t, !1), Ke(e, n, o);
  (r = n.stateNode), (ad.current = n);
  var i =
    u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && u
      ? ((n.child = et(n, e.child, null, o)), (n.child = et(n, null, i, o)))
      : le(e, n, i, o),
    (n.memoizedState = r.state),
    l && ki(n, t, !0),
    n.child
  );
}
function ja(e) {
  var n = e.stateNode;
  n.pendingContext
    ? Si(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && Si(e, n.context, !1),
    Su(e, n.containerInfo);
}
function ji(e, n, t, r, l) {
  return bn(), mu(l), (n.flags |= 256), le(e, n, t, r), n.child;
}
var Fo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Io(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ua(e, n, t) {
  var r = n.pendingProps,
    l = U.current,
    o = !1,
    u = (n.flags & 128) !== 0,
    i;
  if (
    ((i = u) ||
      (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    i
      ? ((o = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(U, l & 1),
    e === null)
  )
    return (
      zo(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          o
            ? ((r = n.mode),
              (o = n.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = u))
                : (o = hl(u, r, 0, null)),
              (e = Cn(e, r, t, null)),
              (o.return = n),
              (e.return = n),
              (o.sibling = e),
              (n.child = o),
              (n.child.memoizedState = Io(t)),
              (n.memoizedState = Fo),
              e)
            : zu(n, u))
    );
  if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
    return cd(e, n, u, r, i, l, t);
  if (o) {
    (o = r.fallback), (u = n.mode), (l = e.child), (i = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = an(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      i !== null ? (o = an(i, o)) : ((o = Cn(o, u, t, null)), (o.flags |= 2)),
      (o.return = n),
      (r.return = n),
      (r.sibling = o),
      (n.child = r),
      (r = o),
      (o = n.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? Io(t)
          : {
              baseLanes: u.baseLanes | t,
              cachePool: null,
              transitions: u.transitions,
            }),
      (o.memoizedState = u),
      (o.childLanes = e.childLanes & ~t),
      (n.memoizedState = Fo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = an(o, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function zu(e, n) {
  return (
    (n = hl({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function hr(e, n, t, r) {
  return (
    r !== null && mu(r),
    et(n, e.child, null, t),
    (e = zu(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function cd(e, n, t, r, l, o, u) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Kl(Error(y(422)))), hr(e, n, u, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((o = r.fallback),
        (l = n.mode),
        (r = hl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Cn(o, l, u, null)),
        (o.flags |= 2),
        (r.return = n),
        (o.return = n),
        (r.sibling = o),
        (n.child = r),
        n.mode & 1 && et(n, e.child, null, u),
        (n.child.memoizedState = Io(u)),
        (n.memoizedState = Fo),
        o);
  if (!(n.mode & 1)) return hr(e, n, u, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
    return (r = i), (o = Error(y(419))), (r = Kl(o, r, void 0)), hr(e, n, u, r);
  }
  if (((i = (u & e.childLanes) !== 0), ae || i)) {
    if (((r = Z), r !== null)) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | u) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Qe(e, l), Re(r, e, l, -1));
    }
    return Mu(), (r = Kl(Error(y(421)))), hr(e, n, u, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Cd.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = o.treeContext),
      (me = ln(l.nextSibling)),
      (he = n),
      (j = !0),
      (Te = null),
      e !== null &&
        ((we[Se++] = Ae),
        (we[Se++] = Ve),
        (we[Se++] = Pn),
        (Ae = e.id),
        (Ve = e.overflow),
        (Pn = n)),
      (n = zu(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Ui(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), To(e.return, n, t);
}
function Yl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((o.isBackwards = n),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = t),
      (o.tailMode = l));
}
function $a(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((le(e, n, r.children, t), (r = U.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ui(e, t, n);
        else if (e.tag === 19) Ui(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(U, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Gr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Yl(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Yl(n, !0, t, null, o);
        break;
      case "together":
        Yl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Tr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ke(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (zn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = an(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = an(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function fd(e, n, t) {
  switch (n.tag) {
    case 3:
      ja(n), bn();
      break;
    case 5:
      da(n);
      break;
    case 1:
      fe(n.type) && Hr(n);
      break;
    case 4:
      Su(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      D(Kr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(U, U.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Ua(e, n, t)
          : (D(U, U.current & 1),
            (e = Ke(e, n, t)),
            e !== null ? e.sibling : null);
      D(U, U.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return $a(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Fa(e, n, t);
  }
  return Ke(e, n, t);
}
var Aa, jo, Va, Wa;
Aa = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
jo = function () {};
Va = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), kn(je.current);
    var o = null;
    switch (t) {
      case "input":
        (l = lo(e, l)), (r = lo(e, r)), (o = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = io(e, l)), (r = io(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vr);
    }
    ao(t, r);
    var u;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var i = l[c];
          for (u in i) i.hasOwnProperty(u) && (t || (t = {}), (t[u] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Rt.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((i = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== i && (s != null || i != null))
      )
        if (c === "style")
          if (i) {
            for (u in i)
              !i.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (t || (t = {}), (t[u] = ""));
            for (u in s)
              s.hasOwnProperty(u) &&
                i[u] !== s[u] &&
                (t || (t = {}), (t[u] = s[u]));
          } else t || (o || (o = []), o.push(c, t)), (t = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (i = i ? i.__html : void 0),
              s != null && i !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Rt.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && M("scroll", e),
                  o || i === s || (o = []))
                : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Wa = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function ht(e, n) {
  if (!j)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function dd(e, n, t) {
  var r = n.pendingProps;
  switch ((pu(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(n), null;
    case 1:
      return fe(n.type) && Wr(), ne(n), null;
    case 3:
      return (
        (r = n.stateNode),
        nt(),
        F(ce),
        F(re),
        Eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Te !== null && (Qo(Te), (Te = null)))),
        jo(e, n),
        ne(n),
        null
      );
    case 5:
      ku(n);
      var l = kn(Ht.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Va(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return ne(n), null;
        }
        if (((e = kn(je.current)), pr(n))) {
          (r = n.stateNode), (t = n.type);
          var o = n.memoizedProps;
          switch (((r[Fe] = n), (r[Vt] = o), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kt.length; l++) M(kt[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Yu(r, o), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              Gu(r, o), M("invalid", r);
          }
          ao(t, o), (l = null);
          for (var u in o)
            if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, i, e),
                    (l = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, i, e),
                    (l = ["children", "" + i]))
                : Rt.hasOwnProperty(u) &&
                  i != null &&
                  u === "onScroll" &&
                  M("scroll", r);
            }
          switch (t) {
            case "input":
              lr(r), Xu(r, o, !0);
              break;
            case "textarea":
              lr(r), Zu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Vr);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (u = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = hs(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(t, { is: r.is }))
                : ((e = u.createElement(t)),
                  t === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, t)),
            (e[Fe] = n),
            (e[Vt] = r),
            Aa(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((u = co(t, r)), t)) {
              case "dialog":
                M("cancel", e), M("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kt.length; l++) M(kt[l], e);
                l = r;
                break;
              case "source":
                M("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (l = r);
                break;
              case "details":
                M("toggle", e), (l = r);
                break;
              case "input":
                Yu(e, r), (l = lo(e, r)), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                Gu(e, r), (l = io(e, r)), M("invalid", e);
                break;
              default:
                l = r;
            }
            ao(t, l), (i = l);
            for (o in i)
              if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style"
                  ? gs(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && vs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Ot(e, s)
                    : typeof s == "number" && Ot(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Rt.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && M("scroll", e)
                      : s != null && qo(e, o, s, u));
              }
            switch (t) {
              case "input":
                lr(e), Xu(e, r, !1);
                break;
              case "textarea":
                lr(e), Zu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return ne(n), null;
    case 6:
      if (e && n.stateNode != null) Wa(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = kn(Ht.current)), kn(je.current), pr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Fe] = n),
            (o = r.nodeValue !== t) && ((e = he), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Fe] = n),
            (n.stateNode = r);
      }
      return ne(n), null;
    case 13:
      if (
        (F(U),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (j && me !== null && n.mode & 1 && !(n.flags & 128))
          oa(), bn(), (n.flags |= 98560), (o = !1);
        else if (((o = pr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = n.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Fe] = n;
          } else
            bn(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          ne(n), (o = !1);
        } else Te !== null && (Qo(Te), (Te = null)), (o = !0);
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || U.current & 1 ? Y === 0 && (Y = 3) : Mu())),
          n.updateQueue !== null && (n.flags |= 4),
          ne(n),
          null);
    case 4:
      return (
        nt(), jo(e, n), e === null && $t(n.stateNode.containerInfo), ne(n), null
      );
    case 10:
      return yu(n.type._context), ne(n), null;
    case 17:
      return fe(n.type) && Wr(), ne(n), null;
    case 19:
      if ((F(U), (o = n.memoizedState), o === null)) return ne(n), null;
      if (((r = (n.flags & 128) !== 0), (u = o.rendering), u === null))
        if (r) ht(o, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((u = Gr(e)), u !== null)) {
                for (
                  n.flags |= 128,
                    ht(o, !1),
                    r = u.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (o = t),
                    (e = r),
                    (o.flags &= 14680066),
                    (u = o.alternate),
                    u === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = u.childLanes),
                        (o.lanes = u.lanes),
                        (o.child = u.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = u.memoizedProps),
                        (o.memoizedState = u.memoizedState),
                        (o.updateQueue = u.updateQueue),
                        (o.type = u.type),
                        (e = u.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return D(U, (U.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            B() > rt &&
            ((n.flags |= 128), (r = !0), ht(o, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gr(u)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              ht(o, !0),
              o.tail === null && o.tailMode === "hidden" && !u.alternate && !j)
            )
              return ne(n), null;
          } else
            2 * B() - o.renderingStartTime > rt &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), ht(o, !1), (n.lanes = 4194304));
        o.isBackwards
          ? ((u.sibling = n.child), (n.child = u))
          : ((t = o.last),
            t !== null ? (t.sibling = u) : (n.child = u),
            (o.last = u));
      }
      return o.tail !== null
        ? ((n = o.tail),
          (o.rendering = n),
          (o.tail = n.sibling),
          (o.renderingStartTime = B()),
          (n.sibling = null),
          (t = U.current),
          D(U, r ? (t & 1) | 2 : t & 1),
          n)
        : (ne(n), null);
    case 22:
    case 23:
      return (
        Du(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? pe & 1073741824 && (ne(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : ne(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function pd(e, n) {
  switch ((pu(n), n.tag)) {
    case 1:
      return (
        fe(n.type) && Wr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        nt(),
        F(ce),
        F(re),
        Eu(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return ku(n), null;
    case 13:
      if ((F(U), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        bn();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return F(U), null;
    case 4:
      return nt(), null;
    case 10:
      return yu(n.type._context), null;
    case 22:
    case 23:
      return Du(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  te = !1,
  md = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Hn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        V(e, n, r);
      }
    else t.current = null;
}
function Uo(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var $i = !1;
function hd(e, n) {
  if (((ko = Ur), (e = Ks()), fu(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var u = 0,
            i = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          n: for (;;) {
            for (
              var g;
              h !== t || (l !== 0 && h.nodeType !== 3) || (i = u + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = u + r),
                h.nodeType === 3 && (u += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (p = h), (h = g);
            for (;;) {
              if (h === e) break n;
              if (
                (p === t && ++c === l && (i = u),
                p === o && ++m === r && (s = u),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = g;
          }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Eo = { focusedElem: e, selectionRange: t }, Ur = !1, k = n; k !== null; )
    if (((n = k), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (k = e);
    else
      for (; k !== null; ) {
        n = k;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    I = w.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? S : Ne(n.type, S),
                      I
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          V(n, n.return, v);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (k = e);
          break;
        }
        k = n.return;
      }
  return (w = $i), ($i = !1), w;
}
function zt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Uo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function $o(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Ha(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Ha(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Fe], delete n[Vt], delete n[xo], delete n[Jf], delete n[qf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ba(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ai(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ba(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ao(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Vr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ao(e, n, t), e = e.sibling; e !== null; ) Ao(e, n, t), (e = e.sibling);
}
function Vo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vo(e, n, t), e = e.sibling; e !== null; ) Vo(e, n, t), (e = e.sibling);
}
var J = null,
  ze = !1;
function Xe(e, n, t) {
  for (t = t.child; t !== null; ) Qa(e, n, t), (t = t.sibling);
}
function Qa(e, n, t) {
  if (Ie && typeof Ie.onCommitFiberUnmount == "function")
    try {
      Ie.onCommitFiberUnmount(ol, t);
    } catch {}
  switch (t.tag) {
    case 5:
      te || Hn(t, n);
    case 6:
      var r = J,
        l = ze;
      (J = null),
        Xe(e, n, t),
        (J = r),
        (ze = l),
        J !== null &&
          (ze
            ? ((e = J),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : J.removeChild(t.stateNode));
      break;
    case 18:
      J !== null &&
        (ze
          ? ((e = J),
            (t = t.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, t)
              : e.nodeType === 1 && Al(e, t),
            It(e))
          : Al(J, t.stateNode));
      break;
    case 4:
      (r = J),
        (l = ze),
        (J = t.stateNode.containerInfo),
        (ze = !0),
        Xe(e, n, t),
        (J = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !te &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            u = o.destroy;
          (o = o.tag),
            u !== void 0 && (o & 2 || o & 4) && Uo(t, n, u),
            (l = l.next);
        } while (l !== r);
      }
      Xe(e, n, t);
      break;
    case 1:
      if (
        !te &&
        (Hn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (i) {
          V(t, n, i);
        }
      Xe(e, n, t);
      break;
    case 21:
      Xe(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((te = (r = te) || t.memoizedState !== null), Xe(e, n, t), (te = r))
        : Xe(e, n, t);
      break;
    default:
      Xe(e, n, t);
  }
}
function Vi(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new md()),
      n.forEach(function (r) {
        var l = _d.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function Pe(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e,
          u = n,
          i = u;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (J = i.stateNode), (ze = !1);
              break e;
            case 3:
              (J = i.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (J = i.stateNode.containerInfo), (ze = !0);
              break e;
          }
          i = i.return;
        }
        if (J === null) throw Error(y(160));
        Qa(o, u, l), (J = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        V(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Ka(n, e), (n = n.sibling);
}
function Ka(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(n, e), De(e), r & 4)) {
        try {
          zt(3, e, e.return), pl(3, e);
        } catch (S) {
          V(e, e.return, S);
        }
        try {
          zt(5, e, e.return);
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 1:
      Pe(n, e), De(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (
        (Pe(n, e),
        De(e),
        r & 512 && t !== null && Hn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ot(l, "");
        } catch (S) {
          V(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          u = t !== null ? t.memoizedProps : o,
          i = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            i === "input" && o.type === "radio" && o.name != null && ps(l, o),
              co(i, u);
            var c = co(i, o);
            for (u = 0; u < s.length; u += 2) {
              var m = s[u],
                h = s[u + 1];
              m === "style"
                ? gs(l, h)
                : m === "dangerouslySetInnerHTML"
                ? vs(l, h)
                : m === "children"
                ? Ot(l, h)
                : qo(l, m, h, c);
            }
            switch (i) {
              case "input":
                oo(l, o);
                break;
              case "textarea":
                ms(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Qn(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qn(l, !!o.multiple, o.defaultValue, !0)
                      : Qn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Vt] = o;
          } catch (S) {
            V(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Pe(n, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Pe(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          It(n.containerInfo);
        } catch (S) {
          V(e, e.return, S);
        }
      break;
    case 4:
      Pe(n, e), De(e);
      break;
    case 13:
      Pe(n, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ru = B())),
        r & 4 && Vi(e);
      break;
    case 22:
      if (
        ((m = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((te = (c = te) || m), Pe(n, e), (te = c)) : Pe(n, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (k = e, m = e.child; m !== null; ) {
            for (h = k = m; k !== null; ) {
              switch (((p = k), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zt(4, p, p.return);
                  break;
                case 1:
                  Hn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      V(r, t, S);
                    }
                  }
                  break;
                case 5:
                  Hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Hi(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (k = g)) : Hi(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((i = h.stateNode),
                      (s = h.memoizedProps.style),
                      (u =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (i.style.display = ys("display", u)));
              } catch (S) {
                V(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (S) {
                V(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Pe(n, e), De(e), r & 4 && Vi(e);
      break;
    case 21:
      break;
    default:
      Pe(n, e), De(e);
  }
}
function De(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ba(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ot(l, ""), (r.flags &= -33));
          var o = Ai(e);
          Vo(e, o, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            i = Ai(e);
          Ao(e, i, u);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function vd(e, n, t) {
  (k = e), Ya(e);
}
function Ya(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      o = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || vr;
      if (!u) {
        var i = l.alternate,
          s = (i !== null && i.memoizedState !== null) || te;
        i = vr;
        var c = te;
        if (((vr = u), (te = s) && !c))
          for (k = l; k !== null; )
            (u = k),
              (s = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Bi(l)
                : s !== null
                ? ((s.return = u), (k = s))
                : Bi(l);
        for (; o !== null; ) (k = o), Ya(o), (o = o.sibling);
        (k = l), (vr = i), (te = c);
      }
      Wi(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (k = o)) : Wi(e);
  }
}
function Wi(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              te || pl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !te)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Ne(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = n.updateQueue;
              o !== null && xi(n, o, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                xi(n, u, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && It(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        te || (n.flags & 512 && $o(n));
      } catch (p) {
        V(n, n.return, p);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Hi(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Bi(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            pl(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var o = n.return;
          try {
            $o(n);
          } catch (s) {
            V(n, o, s);
          }
          break;
        case 5:
          var u = n.return;
          try {
            $o(n);
          } catch (s) {
            V(n, u, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var i = n.sibling;
    if (i !== null) {
      (i.return = n.return), (k = i);
      break;
    }
    k = n.return;
  }
}
var yd = Math.ceil,
  qr = Ye.ReactCurrentDispatcher,
  Tu = Ye.ReactCurrentOwner,
  Ee = Ye.ReactCurrentBatchConfig,
  R = 0,
  Z = null,
  Q = null,
  q = 0,
  pe = 0,
  Bn = pn(0),
  Y = 0,
  Yt = null,
  zn = 0,
  ml = 0,
  Lu = 0,
  Tt = null,
  se = null,
  Ru = 0,
  rt = 1 / 0,
  Ue = null,
  br = !1,
  Wo = null,
  un = null,
  yr = !1,
  en = null,
  el = 0,
  Lt = 0,
  Ho = null,
  Lr = -1,
  Rr = 0;
function oe() {
  return R & 6 ? B() : Lr !== -1 ? Lr : (Lr = B());
}
function sn(e) {
  return e.mode & 1
    ? R & 2 && q !== 0
      ? q & -q
      : ed.transition !== null
      ? (Rr === 0 && (Rr = Ls()), Rr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : js(e.type))),
        e)
    : 1;
}
function Re(e, n, t, r) {
  if (50 < Lt) throw ((Lt = 0), (Ho = null), Error(y(185)));
  Zt(e, t, r),
    (!(R & 2) || e !== Z) &&
      (e === Z && (!(R & 2) && (ml |= t), Y === 4 && qe(e, q)),
      de(e, r),
      t === 1 && R === 0 && !(n.mode & 1) && ((rt = B() + 500), cl && mn()));
}
function de(e, n) {
  var t = e.callbackNode;
  bc(e, n);
  var r = jr(e, e === Z ? q : 0);
  if (r === 0)
    t !== null && bu(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && bu(t), n === 1))
      e.tag === 0 ? bf(Qi.bind(null, e)) : ta(Qi.bind(null, e)),
        Gf(function () {
          !(R & 6) && mn();
        }),
        (t = null);
    else {
      switch (Rs(r)) {
        case 1:
          t = ru;
          break;
        case 4:
          t = zs;
          break;
        case 16:
          t = Ir;
          break;
        case 536870912:
          t = Ts;
          break;
        default:
          t = Ir;
      }
      t = nc(t, Xa.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Xa(e, n) {
  if (((Lr = -1), (Rr = 0), R & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (Zn() && e.callbackNode !== t) return null;
  var r = jr(e, e === Z ? q : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = nl(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var o = Za();
    (Z !== e || q !== n) && ((Ue = null), (rt = B() + 500), En(e, n));
    do
      try {
        Sd();
        break;
      } catch (i) {
        Ga(e, i);
      }
    while (1);
    vu(),
      (qr.current = o),
      (R = l),
      Q !== null ? (n = 0) : ((Z = null), (q = 0), (n = Y));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = vo(e)), l !== 0 && ((r = l), (n = Bo(e, l)))), n === 1)
    )
      throw ((t = Yt), En(e, 0), qe(e, r), de(e, B()), t);
    if (n === 6) qe(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !gd(l) &&
          ((n = nl(e, r)),
          n === 2 && ((o = vo(e)), o !== 0 && ((r = o), (n = Bo(e, o)))),
          n === 1))
      )
        throw ((t = Yt), En(e, 0), qe(e, r), de(e, B()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          gn(e, se, Ue);
          break;
        case 3:
          if (
            (qe(e, r), (r & 130023424) === r && ((n = Ru + 500 - B()), 10 < n))
          ) {
            if (jr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = _o(gn.bind(null, e, se, Ue), n);
            break;
          }
          gn(e, se, Ue);
          break;
        case 4:
          if ((qe(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Le(r);
            (o = 1 << u), (u = n[u]), u > l && (l = u), (r &= ~o);
          }
          if (
            ((r = l),
            (r = B() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * yd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _o(gn.bind(null, e, se, Ue), r);
            break;
          }
          gn(e, se, Ue);
          break;
        case 5:
          gn(e, se, Ue);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return de(e, B()), e.callbackNode === t ? Xa.bind(null, e) : null;
}
function Bo(e, n) {
  var t = Tt;
  return (
    e.current.memoizedState.isDehydrated && (En(e, n).flags |= 256),
    (e = nl(e, n)),
    e !== 2 && ((n = se), (se = t), n !== null && Qo(n)),
    e
  );
}
function Qo(e) {
  se === null ? (se = e) : se.push.apply(se, e);
}
function gd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function qe(e, n) {
  for (
    n &= ~Lu,
      n &= ~ml,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Le(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Qi(e) {
  if (R & 6) throw Error(y(327));
  Zn();
  var n = jr(e, 0);
  if (!(n & 1)) return de(e, B()), null;
  var t = nl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = vo(e);
    r !== 0 && ((n = r), (t = Bo(e, r)));
  }
  if (t === 1) throw ((t = Yt), En(e, 0), qe(e, n), de(e, B()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    gn(e, se, Ue),
    de(e, B()),
    null
  );
}
function Ou(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    (R = t), R === 0 && ((rt = B() + 500), cl && mn());
  }
}
function Tn(e) {
  en !== null && en.tag === 0 && !(R & 6) && Zn();
  var n = R;
  R |= 1;
  var t = Ee.transition,
    r = O;
  try {
    if (((Ee.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ee.transition = t), (R = n), !(R & 6) && mn();
  }
}
function Du() {
  (pe = Bn.current), F(Bn);
}
function En(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Xf(t)), Q !== null))
    for (t = Q.return; t !== null; ) {
      var r = t;
      switch ((pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Wr();
          break;
        case 3:
          nt(), F(ce), F(re), Eu();
          break;
        case 5:
          ku(r);
          break;
        case 4:
          nt();
          break;
        case 13:
          F(U);
          break;
        case 19:
          F(U);
          break;
        case 10:
          yu(r.type._context);
          break;
        case 22:
        case 23:
          Du();
      }
      t = t.return;
    }
  if (
    ((Z = e),
    (Q = e = an(e.current, null)),
    (q = pe = n),
    (Y = 0),
    (Yt = null),
    (Lu = ml = zn = 0),
    (se = Tt = null),
    Sn !== null)
  ) {
    for (n = 0; n < Sn.length; n++)
      if (((t = Sn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          o = t.pending;
        if (o !== null) {
          var u = o.next;
          (o.next = l), (r.next = u);
        }
        t.pending = r;
      }
    Sn = null;
  }
  return e;
}
function Ga(e, n) {
  do {
    var t = Q;
    try {
      if ((vu(), (Nr.current = Jr), Zr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Zr = !1;
      }
      if (
        ((Nn = 0),
        (G = K = $ = null),
        (Nt = !1),
        (Bt = 0),
        (Tu.current = null),
        t === null || t.return === null)
      ) {
        (Y = 1), (Yt = n), (Q = null);
        break;
      }
      e: {
        var o = e,
          u = t.return,
          i = t,
          s = n;
        if (
          ((n = q),
          (i.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            m = i,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Oi(u);
          if (g !== null) {
            (g.flags &= -257),
              Di(g, u, i, o, n),
              g.mode & 1 && Ri(o, c, n),
              (n = g),
              (s = c);
            var w = n.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (n.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Ri(o, c, n), Mu();
              break e;
            }
            s = Error(y(426));
          }
        } else if (j && i.mode & 1) {
          var I = Oi(u);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              Di(I, u, i, o, n),
              mu(tt(s, i));
            break e;
          }
        }
        (o = s = tt(s, i)),
          Y !== 4 && (Y = 2),
          Tt === null ? (Tt = [o]) : Tt.push(o),
          (o = u);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (n &= -n), (o.lanes |= n);
              var f = Oa(o, s, n);
              _i(o, f);
              break e;
            case 1:
              i = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (un === null || !un.has(d))))
              ) {
                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                var v = Da(o, i, n);
                _i(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qa(t);
    } catch (E) {
      (n = E), Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Za() {
  var e = qr.current;
  return (qr.current = Jr), e === null ? Jr : e;
}
function Mu() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    Z === null || (!(zn & 268435455) && !(ml & 268435455)) || qe(Z, q);
}
function nl(e, n) {
  var t = R;
  R |= 2;
  var r = Za();
  (Z !== e || q !== n) && ((Ue = null), En(e, n));
  do
    try {
      wd();
      break;
    } catch (l) {
      Ga(e, l);
    }
  while (1);
  if ((vu(), (R = t), (qr.current = r), Q !== null)) throw Error(y(261));
  return (Z = null), (q = 0), Y;
}
function wd() {
  for (; Q !== null; ) Ja(Q);
}
function Sd() {
  for (; Q !== null && !Bc(); ) Ja(Q);
}
function Ja(e) {
  var n = ec(e.alternate, e, pe);
  (e.memoizedProps = e.pendingProps),
    n === null ? qa(e) : (Q = n),
    (Tu.current = null);
}
function qa(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = pd(t, n)), t !== null)) {
        (t.flags &= 32767), (Q = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (Q = null);
        return;
      }
    } else if (((t = dd(t, n, pe)), t !== null)) {
      Q = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  Y === 0 && (Y = 5);
}
function gn(e, n, t) {
  var r = O,
    l = Ee.transition;
  try {
    (Ee.transition = null), (O = 1), kd(e, n, t, r);
  } finally {
    (Ee.transition = l), (O = r);
  }
  return null;
}
function kd(e, n, t, r) {
  do Zn();
  while (en !== null);
  if (R & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = t.lanes | t.childLanes;
  if (
    (ef(e, o),
    e === Z && ((Q = Z = null), (q = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      yr ||
      ((yr = !0),
      nc(Ir, function () {
        return Zn(), null;
      })),
    (o = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || o)
  ) {
    (o = Ee.transition), (Ee.transition = null);
    var u = O;
    O = 1;
    var i = R;
    (R |= 4),
      (Tu.current = null),
      hd(e, t),
      Ka(t, e),
      Vf(Eo),
      (Ur = !!ko),
      (Eo = ko = null),
      (e.current = t),
      vd(t),
      Qc(),
      (R = i),
      (O = u),
      (Ee.transition = o);
  } else e.current = t;
  if (
    (yr && ((yr = !1), (en = e), (el = l)),
    (o = e.pendingLanes),
    o === 0 && (un = null),
    Xc(t.stateNode),
    de(e, B()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw ((br = !1), (e = Wo), (Wo = null), e);
  return (
    el & 1 && e.tag !== 0 && Zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ho ? Lt++ : ((Lt = 0), (Ho = e))) : (Lt = 0),
    mn(),
    null
  );
}
function Zn() {
  if (en !== null) {
    var e = Rs(el),
      n = Ee.transition,
      t = O;
    try {
      if (((Ee.transition = null), (O = 16 > e ? 16 : e), en === null))
        var r = !1;
      else {
        if (((e = en), (en = null), (el = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, k = e.current; k !== null; ) {
          var o = k,
            u = o.child;
          if (k.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (k = c; k !== null; ) {
                  var m = k;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zt(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (k = h);
                  else
                    for (; k !== null; ) {
                      m = k;
                      var p = m.sibling,
                        g = m.return;
                      if ((Ha(m), m === c)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (k = p);
                        break;
                      }
                      k = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var I = S.sibling;
                    (S.sibling = null), (S = I);
                  } while (S !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (k = u);
          else
            e: for (; k !== null; ) {
              if (((o = k), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zt(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (k = f);
                break e;
              }
              k = o.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          u = k;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null) (d.return = u), (k = d);
          else
            e: for (u = a; k !== null; ) {
              if (((i = k), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, i);
                  }
                } catch (E) {
                  V(i, i.return, E);
                }
              if (i === u) {
                k = null;
                break e;
              }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (k = v);
                break e;
              }
              k = i.return;
            }
        }
        if (
          ((R = l), mn(), Ie && typeof Ie.onPostCommitFiberRoot == "function")
        )
          try {
            Ie.onPostCommitFiberRoot(ol, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = t), (Ee.transition = n);
    }
  }
  return !1;
}
function Ki(e, n, t) {
  (n = tt(t, n)),
    (n = Oa(e, n, 1)),
    (e = on(e, n, 1)),
    (n = oe()),
    e !== null && (Zt(e, 1, n), de(e, n));
}
function V(e, n, t) {
  if (e.tag === 3) Ki(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Ki(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (un === null || !un.has(r)))
        ) {
          (e = tt(t, e)),
            (e = Da(n, e, 1)),
            (n = on(n, e, 1)),
            (e = oe()),
            n !== null && (Zt(n, 1, e), de(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Ed(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = oe()),
    (e.pingedLanes |= e.suspendedLanes & t),
    Z === e &&
      (q & t) === t &&
      (Y === 4 || (Y === 3 && (q & 130023424) === q && 500 > B() - Ru)
        ? En(e, 0)
        : (Lu |= t)),
    de(e, n);
}
function ba(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = ir), (ir <<= 1), !(ir & 130023424) && (ir = 4194304))
      : (n = 1));
  var t = oe();
  (e = Qe(e, n)), e !== null && (Zt(e, n, t), de(e, t));
}
function Cd(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), ba(e, t);
}
function _d(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), ba(e, t);
}
var ec;
ec = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || ce.current) ae = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (ae = !1), fd(e, n, t);
      ae = !!(e.flags & 131072);
    }
  else (ae = !1), j && n.flags & 1048576 && ra(n, Qr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Tr(e, n), (e = n.pendingProps);
      var l = qn(n, re.current);
      Gn(n, t), (l = _u(null, n, r, e, l, t));
      var o = xu();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            fe(r) ? ((o = !0), Hr(n)) : (o = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            wu(n),
            (l.updater = fl),
            (n.stateNode = l),
            (l._reactInternals = n),
            Ro(n, r, e, t),
            (n = Mo(null, n, r, !0, o, t)))
          : ((n.tag = 0), j && o && du(n), le(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Tr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Pd(r)),
          (e = Ne(r, e)),
          l)
        ) {
          case 0:
            n = Do(null, n, r, e, t);
            break e;
          case 1:
            n = Ii(null, n, r, e, t);
            break e;
          case 11:
            n = Mi(null, n, r, e, t);
            break e;
          case 14:
            n = Fi(null, n, r, Ne(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Ne(r, l)),
        Do(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Ne(r, l)),
        Ii(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((ja(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (o = n.memoizedState),
          (l = o.element),
          ia(e, n),
          Xr(n, r, null, t);
        var u = n.memoizedState;
        if (((r = u.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (n.updateQueue.baseState = o),
            (n.memoizedState = o),
            n.flags & 256)
          ) {
            (l = tt(Error(y(423)), n)), (n = ji(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = tt(Error(y(424)), n)), (n = ji(e, n, r, t, l));
            break e;
          } else
            for (
              me = ln(n.stateNode.containerInfo.firstChild),
                he = n,
                j = !0,
                Te = null,
                t = fa(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((bn(), r === l)) {
            n = Ke(e, n, t);
            break e;
          }
          le(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        da(n),
        e === null && zo(n),
        (r = n.type),
        (l = n.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (u = l.children),
        Co(r, l) ? (u = null) : o !== null && Co(r, o) && (n.flags |= 32),
        Ia(e, n),
        le(e, n, u, t),
        n.child
      );
    case 6:
      return e === null && zo(n), null;
    case 13:
      return Ua(e, n, t);
    case 4:
      return (
        Su(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = et(n, null, r, t)) : le(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Ne(r, l)),
        Mi(e, n, r, l, t)
      );
    case 7:
      return le(e, n, n.pendingProps, t), n.child;
    case 8:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (o = n.memoizedProps),
          (u = l.value),
          D(Kr, r._currentValue),
          (r._currentValue = u),
          o !== null)
        )
          if (Oe(o.value, u)) {
            if (o.children === l.children && !ce.current) {
              n = Ke(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var i = o.dependencies;
              if (i !== null) {
                u = o.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = We(-1, t & -t)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= t),
                      (s = o.alternate),
                      s !== null && (s.lanes |= t),
                      To(o.return, t, n),
                      (i.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) u = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (((u = o.return), u === null)) throw Error(y(341));
                (u.lanes |= t),
                  (i = u.alternate),
                  i !== null && (i.lanes |= t),
                  To(u, t, n),
                  (u = o.sibling);
              } else u = o.child;
              if (u !== null) u.return = o;
              else
                for (u = o; u !== null; ) {
                  if (u === n) {
                    u = null;
                    break;
                  }
                  if (((o = u.sibling), o !== null)) {
                    (o.return = u.return), (u = o);
                    break;
                  }
                  u = u.return;
                }
              o = u;
            }
        le(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Gn(n, t),
        (l = Ce(l)),
        (r = r(l)),
        (n.flags |= 1),
        le(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Ne(r, n.pendingProps)),
        (l = Ne(r.type, l)),
        Fi(e, n, r, l, t)
      );
    case 15:
      return Ma(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Ne(r, l)),
        Tr(e, n),
        (n.tag = 1),
        fe(r) ? ((e = !0), Hr(n)) : (e = !1),
        Gn(n, t),
        aa(n, r, l),
        Ro(n, r, l, t),
        Mo(null, n, r, !0, e, t)
      );
    case 19:
      return $a(e, n, t);
    case 22:
      return Fa(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function nc(e, n) {
  return Ns(e, n);
}
function xd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ke(e, n, t, r) {
  return new xd(e, n, t, r);
}
function Fu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pd(e) {
  if (typeof e == "function") return Fu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === eu)) return 11;
    if (e === nu) return 14;
  }
  return 2;
}
function an(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = ke(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Or(e, n, t, r, l, o) {
  var u = 2;
  if (((r = e), typeof e == "function")) Fu(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case Mn:
        return Cn(t.children, l, o, n);
      case bo:
        (u = 8), (l |= 8);
        break;
      case eo:
        return (
          (e = ke(12, t, n, l | 2)), (e.elementType = eo), (e.lanes = o), e
        );
      case no:
        return (e = ke(13, t, n, l)), (e.elementType = no), (e.lanes = o), e;
      case to:
        return (e = ke(19, t, n, l)), (e.elementType = to), (e.lanes = o), e;
      case cs:
        return hl(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ss:
              u = 10;
              break e;
            case as:
              u = 9;
              break e;
            case eu:
              u = 11;
              break e;
            case nu:
              u = 14;
              break e;
            case Ge:
              (u = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = ke(u, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n
  );
}
function Cn(e, n, t, r) {
  return (e = ke(7, e, r, n)), (e.lanes = t), e;
}
function hl(e, n, t, r) {
  return (
    (e = ke(22, e, r, n)),
    (e.elementType = cs),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xl(e, n, t) {
  return (e = ke(6, e, null, n)), (e.lanes = t), e;
}
function Gl(e, n, t) {
  return (
    (n = ke(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Nd(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Tl(0)),
    (this.expirationTimes = Tl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Tl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Iu(e, n, t, r, l, o, u, i, s) {
  return (
    (e = new Nd(e, n, t, i, s)),
    n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
    (o = ke(3, null, null, n)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wu(o),
    e
  );
}
function zd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function tc(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (fe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (fe(t)) return na(e, t, n);
  }
  return n;
}
function rc(e, n, t, r, l, o, u, i, s) {
  return (
    (e = Iu(t, r, !0, e, l, o, u, i, s)),
    (e.context = tc(null)),
    (t = e.current),
    (r = oe()),
    (l = sn(t)),
    (o = We(r, l)),
    (o.callback = n ?? null),
    on(t, o, l),
    (e.current.lanes = l),
    Zt(e, l, r),
    de(e, r),
    e
  );
}
function vl(e, n, t, r) {
  var l = n.current,
    o = oe(),
    u = sn(l);
  return (
    (t = tc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = We(o, u)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = on(l, n, u)),
    e !== null && (Re(e, l, u, o), Pr(e, l, u)),
    u
  );
}
function tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yi(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function ju(e, n) {
  Yi(e, n), (e = e.alternate) && Yi(e, n);
}
function Td() {
  return null;
}
var lc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Uu(e) {
  this._internalRoot = e;
}
yl.prototype.render = Uu.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  vl(e, n, null, null);
};
yl.prototype.unmount = Uu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Tn(function () {
      vl(null, e, null, null);
    }),
      (n[Be] = null);
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Ms();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < Je.length && n !== 0 && n < Je[t].priority; t++);
    Je.splice(t, 0, e), t === 0 && Is(e);
  }
};
function $u(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Xi() {}
function Ld(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = tl(u);
        o.call(c);
      };
    }
    var u = rc(n, r, e, 0, null, !1, !1, "", Xi);
    return (
      (e._reactRootContainer = u),
      (e[Be] = u.current),
      $t(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      u
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var c = tl(s);
      i.call(c);
    };
  }
  var s = Iu(e, 0, !1, null, null, !1, !1, "", Xi);
  return (
    (e._reactRootContainer = s),
    (e[Be] = s.current),
    $t(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      vl(n, s, t, r);
    }),
    s
  );
}
function wl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var s = tl(u);
        i.call(s);
      };
    }
    vl(n, u, e, l);
  } else u = Ld(t, n, e, l, r);
  return tl(u);
}
Os = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = St(n.pendingLanes);
        t !== 0 &&
          (lu(n, t | 1), de(n, B()), !(R & 6) && ((rt = B() + 500), mn()));
      }
      break;
    case 13:
      Tn(function () {
        var r = Qe(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }),
        ju(e, 1);
  }
};
ou = function (e) {
  if (e.tag === 13) {
    var n = Qe(e, 134217728);
    if (n !== null) {
      var t = oe();
      Re(n, e, 134217728, t);
    }
    ju(e, 134217728);
  }
};
Ds = function (e) {
  if (e.tag === 13) {
    var n = sn(e),
      t = Qe(e, n);
    if (t !== null) {
      var r = oe();
      Re(t, e, n, r);
    }
    ju(e, n);
  }
};
Ms = function () {
  return O;
};
Fs = function (e, n) {
  var t = O;
  try {
    return (O = e), n();
  } finally {
    O = t;
  }
};
po = function (e, n, t) {
  switch (n) {
    case "input":
      if ((oo(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = al(r);
            if (!l) throw Error(y(90));
            ds(r), oo(r, l);
          }
        }
      }
      break;
    case "textarea":
      ms(e, t);
      break;
    case "select":
      (n = t.value), n != null && Qn(e, !!t.multiple, n, !1);
  }
};
ks = Ou;
Es = Tn;
var Rd = { usingClientEntryPoint: !1, Events: [qt, Un, al, ws, Ss, Ou] },
  vt = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Od = {
    bundleType: vt.bundleType,
    version: vt.version,
    rendererPackageName: vt.rendererPackageName,
    rendererConfig: vt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ye.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vt.findFiberByHostInstance || Td,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (ol = gr.inject(Od)), (Ie = gr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
ye.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$u(n)) throw Error(y(200));
  return zd(e, n, null, t);
};
ye.createRoot = function (e, n) {
  if (!$u(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = lc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Iu(e, 1, !1, null, null, t, !1, r, l)),
    (e[Be] = n.current),
    $t(e.nodeType === 8 ? e.parentNode : e),
    new Uu(n)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = xs(n)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Tn(e);
};
ye.hydrate = function (e, n, t) {
  if (!gl(n)) throw Error(y(200));
  return wl(null, e, n, !0, t);
};
ye.hydrateRoot = function (e, n, t) {
  if (!$u(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    o = "",
    u = lc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
    (n = rc(n, null, e, 1, t ?? null, l, !1, o, u)),
    (e[Be] = n.current),
    $t(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new yl(n);
};
ye.render = function (e, n, t) {
  if (!gl(n)) throw Error(y(200));
  return wl(null, e, n, !1, t);
};
ye.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tn(function () {
        wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Be] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = Ou;
ye.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!gl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return wl(e, n, t, !1, r);
};
ye.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  n(), (e.exports = ye);
})(zc);
var Gi = Jl;
(Zl.createRoot = Gi.createRoot), (Zl.hydrateRoot = Gi.hydrateRoot);
const rl = Symbol.for("r2wc.reactRender"),
  Zi = Symbol.for("r2wc.shouldRender"),
  wr = Symbol.for("r2wc.root");
function Dd(e = "") {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Md(e = "") {
  return e.replace(/-([a-z0-9])/g, function (n) {
    return n[1].toUpperCase();
  });
}
var Ji = {
  expando: function (e, n, t) {
    Object.defineProperty(e, n, {
      enumerable: !0,
      get: function () {
        return t;
      },
      set: function (r) {
        (t = r), this[rl]();
      },
    }),
      e[rl]();
  },
};
function Fd(e, n, t, r = {}) {
  var l = { isConnected: "isConnected" in HTMLElement.prototype },
    o = !1,
    u = function () {
      var c = Reflect.construct(HTMLElement, arguments, this.constructor);
      return (
        typeof r.shadow == "string"
          ? c.attachShadow({ mode: r.shadow })
          : r.shadow &&
            (console.warn(
              'Specifying the "shadow" option as a boolean is deprecated and will be removed in a future version.'
            ),
            c.attachShadow({ mode: "open" })),
        c
      );
    },
    i = Object.create(HTMLElement.prototype);
  i.constructor = u;
  var s = new Proxy(i, {
    has: function (c, m) {
      return m in e.propTypes || m in i;
    },
    set: function (c, m, h, p) {
      return (
        o && (l[m] = !0),
        typeof m == "symbol" || l[m] || m in c
          ? (e.propTypes && m in e.propTypes && Ji.expando(p, m, h),
            Reflect.set(c, m, h, p))
          : (Ji.expando(p, m, h), !0)
      );
    },
    getOwnPropertyDescriptor: function (c, m) {
      var h = Reflect.getOwnPropertyDescriptor(c, m);
      if (h) return h;
      if (m in e.propTypes)
        return {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: void 0,
        };
    },
  });
  return (
    (u.prototype = s),
    (i.connectedCallback = function () {
      (this[Zi] = !0), this[rl]();
    }),
    (i.disconnectedCallback = function () {
      typeof t.createRoot == "function"
        ? this[wr].unmount()
        : t.unmountComponentAtNode(this);
    }),
    (i[rl] = function () {
      if (this[Zi] === !0) {
        var c = {};
        Object.keys(this).forEach(function (p) {
          l[p] !== !1 && (c[p] = this[p]);
        }, this),
          (o = !0);
        const m = r.shadow ? this.shadowRoot : this,
          h = n.createElement(e, c);
        typeof t.createRoot == "function"
          ? (this[wr] || (this[wr] = t.createRoot(m)), this[wr].render(h))
          : t.render(h, m),
          (o = !1);
      }
    }),
    e.propTypes &&
      ((u.observedAttributes = r.dashStyleAttributes
        ? Object.keys(e.propTypes).map(function (c) {
            return Dd(c);
          })
        : Object.keys(e.propTypes)),
      (i.attributeChangedCallback = function (c, m, h) {
        var p = r.dashStyleAttributes ? Md(c) : c;
        this[p] = h;
      })),
    u
  );
}
var Xt = {},
  Id = {
    get exports() {
      return Xt;
    },
    set exports(e) {
      Xt = e;
    },
  },
  Sl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = _n,
  Ud = Symbol.for("react.element"),
  $d = Symbol.for("react.fragment"),
  Ad = Object.prototype.hasOwnProperty,
  Vd = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wd = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, n, t) {
  var r,
    l = {},
    o = null,
    u = null;
  t !== void 0 && (o = "" + t),
    n.key !== void 0 && (o = "" + n.key),
    n.ref !== void 0 && (u = n.ref);
  for (r in n) Ad.call(n, r) && !Wd.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Ud,
    type: e,
    key: o,
    ref: u,
    props: l,
    _owner: Vd.current,
  };
}
Sl.Fragment = $d;
Sl.jsx = oc;
Sl.jsxs = oc;
(function (e) {
  e.exports = Sl;
})(Id);
const Hd = Xt.Fragment,
  Sr = Xt.jsx,
  yt = Xt.jsxs,
  Bd = "_name_18err_1",
  Qd = { name: Bd },
  uc = (e) => {
    const [n, t] = _n.useState();
    _n.useEffect(() => {
      (async () => {
        const u = await r();
        t(u);
      })();
    }, []);
    const r = async () =>
        (await fetch("https://swapi.dev/api/starships/9/")).json(),
      l = () => {
        e.btn("data from webcomponent");
      };
    return yt("div", {
      children: [
        Sr("h1", { children: "React web component" }),
        Sr("h2", { children: e.title }),
        n &&
          yt(Hd, {
            children: [
              yt("p", {
                children: [
                  "Name: ",
                  Sr("span", { className: Qd.name, children: n.name }),
                ],
              }),
              yt("p", { children: ["Model: ", n.model] }),
              yt("p", { children: ["Length: ", n.length] }),
            ],
          }),
        Sr("button", { onClick: l, children: "Click me" }),
      ],
    });
  };
var ll = {},
  Kd = {
    get exports() {
      return ll;
    },
    set exports(e) {
      ll = e;
    },
  },
  Yd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Xd = Yd,
  Gd = Xd;
function ic() {}
function sc() {}
sc.resetWarningCache = ic;
var Zd = function () {
  function e(r, l, o, u, i, s) {
    if (s !== Gd) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function n() {
    return e;
  }
  var t = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: n,
    element: e,
    elementType: e,
    instanceOf: n,
    node: e,
    objectOf: n,
    oneOf: n,
    oneOfType: n,
    shape: n,
    exact: n,
    checkPropTypes: sc,
    resetWarningCache: ic,
  };
  return (t.PropTypes = t), t;
};
Kd.exports = Zd();
uc.propTypes = { title: ll.string, btn: ll.func };
customElements.define("react-starwars", Fd(uc, Nc, Zl));
