(() => {
  "use strict";
  var e,
    v = {},
    i = {};
  function a(e) {
    var o = i[e];
    if (void 0 !== o) return o.exports;
    var r = (i[e] = { exports: {} });
    return v[e](r, r.exports, a), r.exports;
  }
  (a.m = v),
    (e = []),
    (a.O = (o, r, u, l) => {
      if (!r) {
        var s = 1 / 0;
        for (n = 0; n < e.length; n++) {
          for (var [r, u, l] = e[n], t = !0, f = 0; f < r.length; f++)
            (!1 & l || s >= l) && Object.keys(a.O).every((d) => a.O[d](r[f]))
              ? r.splice(f--, 1)
              : ((t = !1), l < s && (s = l));
          if (t) {
            e.splice(n--, 1);
            var c = u();
            void 0 !== c && (o = c);
          }
        }
        return o;
      }
      l = l || 0;
      for (var n = e.length; n > 0 && e[n - 1][2] > l; n--) e[n] = e[n - 1];
      e[n] = [r, u, l];
    }),
    (a.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
    (() => {
      var e = { 666: 0 };
      a.O.j = (u) => 0 === e[u];
      var o = (u, l) => {
          var f,
            c,
            [n, s, t] = l,
            _ = 0;
          if (n.some((b) => 0 !== e[b])) {
            for (f in s) a.o(s, f) && (a.m[f] = s[f]);
            if (t) var p = t(a);
          }
          for (u && u(l); _ < n.length; _++)
            a.o(e, (c = n[_])) && e[c] && e[c][0](), (e[c] = 0);
          return a.O(p);
        },
        r = (self.webpackChunkangular_web_component =
          self.webpackChunkangular_web_component || []);
      r.forEach(o.bind(null, 0)), (r.push = o.bind(null, r.push.bind(r)));
    })();
})();
("use strict");
(self.webpackChunkangular_web_component =
  self.webpackChunkangular_web_component || []).push([
  [429],
  {
    583: () => {
      !(function (t) {
        const n = t.performance;
        function i(L) {
          n && n.mark && n.mark(L);
        }
        function o(L, T) {
          n && n.measure && n.measure(L, T);
        }
        i("Zone");
        const c = t.__Zone_symbol_prefix || "__zone_symbol__";
        function a(L) {
          return c + L;
        }
        const p = !0 === t[a("forceDuplicateZoneCheck")];
        if (t.Zone) {
          if (p || "function" != typeof t.Zone.__symbol__)
            throw new Error("Zone already loaded.");
          return t.Zone;
        }
        let d = (() => {
          class L {
            constructor(e, r) {
              (this._parent = e),
                (this._name = r ? r.name || "unnamed" : "<root>"),
                (this._properties = (r && r.properties) || {}),
                (this._zoneDelegate = new v(
                  this,
                  this._parent && this._parent._zoneDelegate,
                  r
                ));
            }
            static assertZonePatched() {
              if (t.Promise !== oe.ZoneAwarePromise)
                throw new Error(
                  "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                );
            }
            static get root() {
              let e = L.current;
              for (; e.parent; ) e = e.parent;
              return e;
            }
            static get current() {
              return U.zone;
            }
            static get currentTask() {
              return re;
            }
            static __load_patch(e, r, k = !1) {
              if (oe.hasOwnProperty(e)) {
                if (!k && p) throw Error("Already loaded patch: " + e);
              } else if (!t["__Zone_disable_" + e]) {
                const C = "Zone:" + e;
                i(C), (oe[e] = r(t, L, z)), o(C, C);
              }
            }
            get parent() {
              return this._parent;
            }
            get name() {
              return this._name;
            }
            get(e) {
              const r = this.getZoneWith(e);
              if (r) return r._properties[e];
            }
            getZoneWith(e) {
              let r = this;
              for (; r; ) {
                if (r._properties.hasOwnProperty(e)) return r;
                r = r._parent;
              }
              return null;
            }
            fork(e) {
              if (!e) throw new Error("ZoneSpec required!");
              return this._zoneDelegate.fork(this, e);
            }
            wrap(e, r) {
              if ("function" != typeof e)
                throw new Error("Expecting function got: " + e);
              const k = this._zoneDelegate.intercept(this, e, r),
                C = this;
              return function () {
                return C.runGuarded(k, this, arguments, r);
              };
            }
            run(e, r, k, C) {
              U = { parent: U, zone: this };
              try {
                return this._zoneDelegate.invoke(this, e, r, k, C);
              } finally {
                U = U.parent;
              }
            }
            runGuarded(e, r = null, k, C) {
              U = { parent: U, zone: this };
              try {
                try {
                  return this._zoneDelegate.invoke(this, e, r, k, C);
                } catch ($) {
                  if (this._zoneDelegate.handleError(this, $)) throw $;
                }
              } finally {
                U = U.parent;
              }
            }
            runTask(e, r, k) {
              if (e.zone != this)
                throw new Error(
                  "A task can only be run in the zone of creation! (Creation: " +
                    (e.zone || J).name +
                    "; Execution: " +
                    this.name +
                    ")"
                );
              if (e.state === x && (e.type === Q || e.type === P)) return;
              const C = e.state != E;
              C && e._transitionTo(E, j), e.runCount++;
              const $ = re;
              (re = e), (U = { parent: U, zone: this });
              try {
                e.type == P &&
                  e.data &&
                  !e.data.isPeriodic &&
                  (e.cancelFn = void 0);
                try {
                  return this._zoneDelegate.invokeTask(this, e, r, k);
                } catch (l) {
                  if (this._zoneDelegate.handleError(this, l)) throw l;
                }
              } finally {
                e.state !== x &&
                  e.state !== h &&
                  (e.type == Q || (e.data && e.data.isPeriodic)
                    ? C && e._transitionTo(j, E)
                    : ((e.runCount = 0),
                      this._updateTaskCount(e, -1),
                      C && e._transitionTo(x, E, x))),
                  (U = U.parent),
                  (re = $);
              }
            }
            scheduleTask(e) {
              if (e.zone && e.zone !== this) {
                let k = this;
                for (; k; ) {
                  if (k === e.zone)
                    throw Error(
                      `can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`
                    );
                  k = k.parent;
                }
              }
              e._transitionTo(X, x);
              const r = [];
              (e._zoneDelegates = r), (e._zone = this);
              try {
                e = this._zoneDelegate.scheduleTask(this, e);
              } catch (k) {
                throw (
                  (e._transitionTo(h, X, x),
                  this._zoneDelegate.handleError(this, k),
                  k)
                );
              }
              return (
                e._zoneDelegates === r && this._updateTaskCount(e, 1),
                e.state == X && e._transitionTo(j, X),
                e
              );
            }
            scheduleMicroTask(e, r, k, C) {
              return this.scheduleTask(new m(I, e, r, k, C, void 0));
            }
            scheduleMacroTask(e, r, k, C, $) {
              return this.scheduleTask(new m(P, e, r, k, C, $));
            }
            scheduleEventTask(e, r, k, C, $) {
              return this.scheduleTask(new m(Q, e, r, k, C, $));
            }
            cancelTask(e) {
              if (e.zone != this)
                throw new Error(
                  "A task can only be cancelled in the zone of creation! (Creation: " +
                    (e.zone || J).name +
                    "; Execution: " +
                    this.name +
                    ")"
                );
              if (e.state === j || e.state === E) {
                e._transitionTo(G, j, E);
                try {
                  this._zoneDelegate.cancelTask(this, e);
                } catch (r) {
                  throw (
                    (e._transitionTo(h, G),
                    this._zoneDelegate.handleError(this, r),
                    r)
                  );
                }
                return (
                  this._updateTaskCount(e, -1),
                  e._transitionTo(x, G),
                  (e.runCount = 0),
                  e
                );
              }
            }
            _updateTaskCount(e, r) {
              const k = e._zoneDelegates;
              -1 == r && (e._zoneDelegates = null);
              for (let C = 0; C < k.length; C++)
                k[C]._updateTaskCount(e.type, r);
            }
          }
          return (L.__symbol__ = a), L;
        })();
        const w = {
          name: "",
          onHasTask: (L, T, e, r) => L.hasTask(e, r),
          onScheduleTask: (L, T, e, r) => L.scheduleTask(e, r),
          onInvokeTask: (L, T, e, r, k, C) => L.invokeTask(e, r, k, C),
          onCancelTask: (L, T, e, r) => L.cancelTask(e, r),
        };
        class v {
          constructor(T, e, r) {
            (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
              (this.zone = T),
              (this._parentDelegate = e),
              (this._forkZS = r && (r && r.onFork ? r : e._forkZS)),
              (this._forkDlgt = r && (r.onFork ? e : e._forkDlgt)),
              (this._forkCurrZone =
                r && (r.onFork ? this.zone : e._forkCurrZone)),
              (this._interceptZS = r && (r.onIntercept ? r : e._interceptZS)),
              (this._interceptDlgt =
                r && (r.onIntercept ? e : e._interceptDlgt)),
              (this._interceptCurrZone =
                r && (r.onIntercept ? this.zone : e._interceptCurrZone)),
              (this._invokeZS = r && (r.onInvoke ? r : e._invokeZS)),
              (this._invokeDlgt = r && (r.onInvoke ? e : e._invokeDlgt)),
              (this._invokeCurrZone =
                r && (r.onInvoke ? this.zone : e._invokeCurrZone)),
              (this._handleErrorZS =
                r && (r.onHandleError ? r : e._handleErrorZS)),
              (this._handleErrorDlgt =
                r && (r.onHandleError ? e : e._handleErrorDlgt)),
              (this._handleErrorCurrZone =
                r && (r.onHandleError ? this.zone : e._handleErrorCurrZone)),
              (this._scheduleTaskZS =
                r && (r.onScheduleTask ? r : e._scheduleTaskZS)),
              (this._scheduleTaskDlgt =
                r && (r.onScheduleTask ? e : e._scheduleTaskDlgt)),
              (this._scheduleTaskCurrZone =
                r && (r.onScheduleTask ? this.zone : e._scheduleTaskCurrZone)),
              (this._invokeTaskZS =
                r && (r.onInvokeTask ? r : e._invokeTaskZS)),
              (this._invokeTaskDlgt =
                r && (r.onInvokeTask ? e : e._invokeTaskDlgt)),
              (this._invokeTaskCurrZone =
                r && (r.onInvokeTask ? this.zone : e._invokeTaskCurrZone)),
              (this._cancelTaskZS =
                r && (r.onCancelTask ? r : e._cancelTaskZS)),
              (this._cancelTaskDlgt =
                r && (r.onCancelTask ? e : e._cancelTaskDlgt)),
              (this._cancelTaskCurrZone =
                r && (r.onCancelTask ? this.zone : e._cancelTaskCurrZone)),
              (this._hasTaskZS = null),
              (this._hasTaskDlgt = null),
              (this._hasTaskDlgtOwner = null),
              (this._hasTaskCurrZone = null);
            const k = r && r.onHasTask;
            (k || (e && e._hasTaskZS)) &&
              ((this._hasTaskZS = k ? r : w),
              (this._hasTaskDlgt = e),
              (this._hasTaskDlgtOwner = this),
              (this._hasTaskCurrZone = T),
              r.onScheduleTask ||
                ((this._scheduleTaskZS = w),
                (this._scheduleTaskDlgt = e),
                (this._scheduleTaskCurrZone = this.zone)),
              r.onInvokeTask ||
                ((this._invokeTaskZS = w),
                (this._invokeTaskDlgt = e),
                (this._invokeTaskCurrZone = this.zone)),
              r.onCancelTask ||
                ((this._cancelTaskZS = w),
                (this._cancelTaskDlgt = e),
                (this._cancelTaskCurrZone = this.zone)));
          }
          fork(T, e) {
            return this._forkZS
              ? this._forkZS.onFork(this._forkDlgt, this.zone, T, e)
              : new d(T, e);
          }
          intercept(T, e, r) {
            return this._interceptZS
              ? this._interceptZS.onIntercept(
                  this._interceptDlgt,
                  this._interceptCurrZone,
                  T,
                  e,
                  r
                )
              : e;
          }
          invoke(T, e, r, k, C) {
            return this._invokeZS
              ? this._invokeZS.onInvoke(
                  this._invokeDlgt,
                  this._invokeCurrZone,
                  T,
                  e,
                  r,
                  k,
                  C
                )
              : e.apply(r, k);
          }
          handleError(T, e) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                T,
                e
              )
            );
          }
          scheduleTask(T, e) {
            let r = e;
            if (this._scheduleTaskZS)
              this._hasTaskZS && r._zoneDelegates.push(this._hasTaskDlgtOwner),
                (r = this._scheduleTaskZS.onScheduleTask(
                  this._scheduleTaskDlgt,
                  this._scheduleTaskCurrZone,
                  T,
                  e
                )),
                r || (r = e);
            else if (e.scheduleFn) e.scheduleFn(e);
            else {
              if (e.type != I) throw new Error("Task is missing scheduleFn.");
              R(e);
            }
            return r;
          }
          invokeTask(T, e, r, k) {
            return this._invokeTaskZS
              ? this._invokeTaskZS.onInvokeTask(
                  this._invokeTaskDlgt,
                  this._invokeTaskCurrZone,
                  T,
                  e,
                  r,
                  k
                )
              : e.callback.apply(r, k);
          }
          cancelTask(T, e) {
            let r;
            if (this._cancelTaskZS)
              r = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                T,
                e
              );
            else {
              if (!e.cancelFn) throw Error("Task is not cancelable");
              r = e.cancelFn(e);
            }
            return r;
          }
          hasTask(T, e) {
            try {
              this._hasTaskZS &&
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  T,
                  e
                );
            } catch (r) {
              this.handleError(T, r);
            }
          }
          _updateTaskCount(T, e) {
            const r = this._taskCounts,
              k = r[T],
              C = (r[T] = k + e);
            if (C < 0)
              throw new Error("More tasks executed then were scheduled.");
            (0 != k && 0 != C) ||
              this.hasTask(this.zone, {
                microTask: r.microTask > 0,
                macroTask: r.macroTask > 0,
                eventTask: r.eventTask > 0,
                change: T,
              });
          }
        }
        class m {
          constructor(T, e, r, k, C, $) {
            if (
              ((this._zone = null),
              (this.runCount = 0),
              (this._zoneDelegates = null),
              (this._state = "notScheduled"),
              (this.type = T),
              (this.source = e),
              (this.data = k),
              (this.scheduleFn = C),
              (this.cancelFn = $),
              !r)
            )
              throw new Error("callback is not defined");
            this.callback = r;
            const l = this;
            this.invoke =
              T === Q && k && k.useG
                ? m.invokeTask
                : function () {
                    return m.invokeTask.call(t, l, this, arguments);
                  };
          }
          static invokeTask(T, e, r) {
            T || (T = this), ee++;
            try {
              return T.runCount++, T.zone.runTask(T, e, r);
            } finally {
              1 == ee && _(), ee--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(x, X);
          }
          _transitionTo(T, e, r) {
            if (this._state !== e && this._state !== r)
              throw new Error(
                `${this.type} '${
                  this.source
                }': can not transition to '${T}', expecting state '${e}'${
                  r ? " or '" + r + "'" : ""
                }, was '${this._state}'.`
              );
            (this._state = T), T == x && (this._zoneDelegates = null);
          }
          toString() {
            return this.data && typeof this.data.handleId < "u"
              ? this.data.handleId.toString()
              : Object.prototype.toString.call(this);
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount,
            };
          }
        }
        const M = a("setTimeout"),
          Z = a("Promise"),
          N = a("then");
        let K,
          B = [],
          H = !1;
        function q(L) {
          if ((K || (t[Z] && (K = t[Z].resolve(0))), K)) {
            let T = K[N];
            T || (T = K.then), T.call(K, L);
          } else t[M](L, 0);
        }
        function R(L) {
          0 === ee && 0 === B.length && q(_), L && B.push(L);
        }
        function _() {
          if (!H) {
            for (H = !0; B.length; ) {
              const L = B;
              B = [];
              for (let T = 0; T < L.length; T++) {
                const e = L[T];
                try {
                  e.zone.runTask(e, null, null);
                } catch (r) {
                  z.onUnhandledError(r);
                }
              }
            }
            z.microtaskDrainDone(), (H = !1);
          }
        }
        const J = { name: "NO ZONE" },
          x = "notScheduled",
          X = "scheduling",
          j = "scheduled",
          E = "running",
          G = "canceling",
          h = "unknown",
          I = "microTask",
          P = "macroTask",
          Q = "eventTask",
          oe = {},
          z = {
            symbol: a,
            currentZoneFrame: () => U,
            onUnhandledError: W,
            microtaskDrainDone: W,
            scheduleMicroTask: R,
            showUncaughtError: () => !d[a("ignoreConsoleErrorUncaughtError")],
            patchEventTarget: () => [],
            patchOnProperties: W,
            patchMethod: () => W,
            bindArguments: () => [],
            patchThen: () => W,
            patchMacroTask: () => W,
            patchEventPrototype: () => W,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => W,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => W,
            wrapWithCurrentZone: () => W,
            filterProperties: () => [],
            attachOriginToPatched: () => W,
            _redefineProperty: () => W,
            patchCallbacks: () => W,
            nativeScheduleMicroTask: q,
          };
        let U = { parent: null, zone: new d(null, null) },
          re = null,
          ee = 0;
        function W() {}
        o("Zone", "Zone"), (t.Zone = d);
      })(
        (typeof window < "u" && window) || (typeof self < "u" && self) || global
      );
      const ue = Object.getOwnPropertyDescriptor,
        pe = Object.defineProperty,
        ve = Object.getPrototypeOf,
        Se = Object.create,
        it = Array.prototype.slice,
        De = "addEventListener",
        Oe = "removeEventListener",
        Ze = Zone.__symbol__(De),
        Ne = Zone.__symbol__(Oe),
        ie = "true",
        ce = "false",
        me = Zone.__symbol__("");
      function Ie(t, n) {
        return Zone.current.wrap(t, n);
      }
      function Le(t, n, i, o, c) {
        return Zone.current.scheduleMacroTask(t, n, i, o, c);
      }
      const A = Zone.__symbol__,
        be = typeof window < "u",
        _e = be ? window : void 0,
        Y = (be && _e) || ("object" == typeof self && self) || global,
        ct = "removeAttribute";
      function Me(t, n) {
        for (let i = t.length - 1; i >= 0; i--)
          "function" == typeof t[i] && (t[i] = Ie(t[i], n + "_" + i));
        return t;
      }
      function Ve(t) {
        return (
          !t ||
          (!1 !== t.writable &&
            !("function" == typeof t.get && typeof t.set > "u"))
        );
      }
      const Fe =
          typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
        we =
          !("nw" in Y) &&
          typeof Y.process < "u" &&
          "[object process]" === {}.toString.call(Y.process),
        je = !we && !Fe && !(!be || !_e.HTMLElement),
        Be =
          typeof Y.process < "u" &&
          "[object process]" === {}.toString.call(Y.process) &&
          !Fe &&
          !(!be || !_e.HTMLElement),
        Pe = {},
        Ue = function (t) {
          if (!(t = t || Y.event)) return;
          let n = Pe[t.type];
          n || (n = Pe[t.type] = A("ON_PROPERTY" + t.type));
          const i = this || t.target || Y,
            o = i[n];
          let c;
          return (
            je && i === _e && "error" === t.type
              ? ((c =
                  o &&
                  o.call(
                    this,
                    t.message,
                    t.filename,
                    t.lineno,
                    t.colno,
                    t.error
                  )),
                !0 === c && t.preventDefault())
              : ((c = o && o.apply(this, arguments)),
                null != c && !c && t.preventDefault()),
            c
          );
        };
      function We(t, n, i) {
        let o = ue(t, n);
        if (
          (!o && i && ue(i, n) && (o = { enumerable: !0, configurable: !0 }),
          !o || !o.configurable)
        )
          return;
        const c = A("on" + n + "patched");
        if (t.hasOwnProperty(c) && t[c]) return;
        delete o.writable, delete o.value;
        const a = o.get,
          p = o.set,
          d = n.slice(2);
        let w = Pe[d];
        w || (w = Pe[d] = A("ON_PROPERTY" + d)),
          (o.set = function (v) {
            let m = this;
            !m && t === Y && (m = Y),
              m &&
                ("function" == typeof m[w] && m.removeEventListener(d, Ue),
                p && p.call(m, null),
                (m[w] = v),
                "function" == typeof v && m.addEventListener(d, Ue, !1));
          }),
          (o.get = function () {
            let v = this;
            if ((!v && t === Y && (v = Y), !v)) return null;
            const m = v[w];
            if (m) return m;
            if (a) {
              let M = a.call(this);
              if (M)
                return (
                  o.set.call(this, M),
                  "function" == typeof v[ct] && v.removeAttribute(n),
                  M
                );
            }
            return null;
          }),
          pe(t, n, o),
          (t[c] = !0);
      }
      function qe(t, n, i) {
        if (n) for (let o = 0; o < n.length; o++) We(t, "on" + n[o], i);
        else {
          const o = [];
          for (const c in t) "on" == c.slice(0, 2) && o.push(c);
          for (let c = 0; c < o.length; c++) We(t, o[c], i);
        }
      }
      const ne = A("originalInstance");
      function ge(t) {
        const n = Y[t];
        if (!n) return;
        (Y[A(t)] = n),
          (Y[t] = function () {
            const c = Me(arguments, t);
            switch (c.length) {
              case 0:
                this[ne] = new n();
                break;
              case 1:
                this[ne] = new n(c[0]);
                break;
              case 2:
                this[ne] = new n(c[0], c[1]);
                break;
              case 3:
                this[ne] = new n(c[0], c[1], c[2]);
                break;
              case 4:
                this[ne] = new n(c[0], c[1], c[2], c[3]);
                break;
              default:
                throw new Error("Arg list too long.");
            }
          }),
          le(Y[t], n);
        const i = new n(function () {});
        let o;
        for (o in i)
          ("XMLHttpRequest" === t && "responseBlob" === o) ||
            (function (c) {
              "function" == typeof i[c]
                ? (Y[t].prototype[c] = function () {
                    return this[ne][c].apply(this[ne], arguments);
                  })
                : pe(Y[t].prototype, c, {
                    set: function (a) {
                      "function" == typeof a
                        ? ((this[ne][c] = Ie(a, t + "." + c)),
                          le(this[ne][c], a))
                        : (this[ne][c] = a);
                    },
                    get: function () {
                      return this[ne][c];
                    },
                  });
            })(o);
        for (o in n)
          "prototype" !== o && n.hasOwnProperty(o) && (Y[t][o] = n[o]);
      }
      function ae(t, n, i) {
        let o = t;
        for (; o && !o.hasOwnProperty(n); ) o = ve(o);
        !o && t[n] && (o = t);
        const c = A(n);
        let a = null;
        if (
          o &&
          (!(a = o[c]) || !o.hasOwnProperty(c)) &&
          ((a = o[c] = o[n]), Ve(o && ue(o, n)))
        ) {
          const d = i(a, c, n);
          (o[n] = function () {
            return d(this, arguments);
          }),
            le(o[n], a);
        }
        return a;
      }
      function lt(t, n, i) {
        let o = null;
        function c(a) {
          const p = a.data;
          return (
            (p.args[p.cbIdx] = function () {
              a.invoke.apply(this, arguments);
            }),
            o.apply(p.target, p.args),
            a
          );
        }
        o = ae(
          t,
          n,
          (a) =>
            function (p, d) {
              const w = i(p, d);
              return w.cbIdx >= 0 && "function" == typeof d[w.cbIdx]
                ? Le(w.name, d[w.cbIdx], w, c)
                : a.apply(p, d);
            }
        );
      }
      function le(t, n) {
        t[A("OriginalDelegate")] = n;
      }
      let Xe = !1,
        Ae = !1;
      function ft() {
        if (Xe) return Ae;
        Xe = !0;
        try {
          const t = _e.navigator.userAgent;
          (-1 !== t.indexOf("MSIE ") ||
            -1 !== t.indexOf("Trident/") ||
            -1 !== t.indexOf("Edge/")) &&
            (Ae = !0);
        } catch {}
        return Ae;
      }
      Zone.__load_patch("ZoneAwarePromise", (t, n, i) => {
        const o = Object.getOwnPropertyDescriptor,
          c = Object.defineProperty,
          p = i.symbol,
          d = [],
          w = !0 === t[p("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
          v = p("Promise"),
          m = p("then"),
          M = "__creationTrace__";
        (i.onUnhandledError = (l) => {
          if (i.showUncaughtError()) {
            const u = l && l.rejection;
            u
              ? console.error(
                  "Unhandled Promise rejection:",
                  u instanceof Error ? u.message : u,
                  "; Zone:",
                  l.zone.name,
                  "; Task:",
                  l.task && l.task.source,
                  "; Value:",
                  u,
                  u instanceof Error ? u.stack : void 0
                )
              : console.error(l);
          }
        }),
          (i.microtaskDrainDone = () => {
            for (; d.length; ) {
              const l = d.shift();
              try {
                l.zone.runGuarded(() => {
                  throw l.throwOriginal ? l.rejection : l;
                });
              } catch (u) {
                N(u);
              }
            }
          });
        const Z = p("unhandledPromiseRejectionHandler");
        function N(l) {
          i.onUnhandledError(l);
          try {
            const u = n[Z];
            "function" == typeof u && u.call(this, l);
          } catch {}
        }
        function B(l) {
          return l && l.then;
        }
        function H(l) {
          return l;
        }
        function K(l) {
          return e.reject(l);
        }
        const q = p("state"),
          R = p("value"),
          _ = p("finally"),
          J = p("parentPromiseValue"),
          x = p("parentPromiseState"),
          X = "Promise.then",
          j = null,
          E = !0,
          G = !1,
          h = 0;
        function I(l, u) {
          return (s) => {
            try {
              z(l, u, s);
            } catch (f) {
              z(l, !1, f);
            }
          };
        }
        const P = function () {
            let l = !1;
            return function (s) {
              return function () {
                l || ((l = !0), s.apply(null, arguments));
              };
            };
          },
          Q = "Promise resolved with itself",
          oe = p("currentTaskTrace");
        function z(l, u, s) {
          const f = P();
          if (l === s) throw new TypeError(Q);
          if (l[q] === j) {
            let g = null;
            try {
              ("object" == typeof s || "function" == typeof s) &&
                (g = s && s.then);
            } catch (b) {
              return (
                f(() => {
                  z(l, !1, b);
                })(),
                l
              );
            }
            if (
              u !== G &&
              s instanceof e &&
              s.hasOwnProperty(q) &&
              s.hasOwnProperty(R) &&
              s[q] !== j
            )
              re(s), z(l, s[q], s[R]);
            else if (u !== G && "function" == typeof g)
              try {
                g.call(s, f(I(l, u)), f(I(l, !1)));
              } catch (b) {
                f(() => {
                  z(l, !1, b);
                })();
              }
            else {
              l[q] = u;
              const b = l[R];
              if (
                ((l[R] = s),
                l[_] === _ && u === E && ((l[q] = l[x]), (l[R] = l[J])),
                u === G && s instanceof Error)
              ) {
                const y =
                  n.currentTask && n.currentTask.data && n.currentTask.data[M];
                y &&
                  c(s, oe, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: y,
                  });
              }
              for (let y = 0; y < b.length; )
                ee(l, b[y++], b[y++], b[y++], b[y++]);
              if (0 == b.length && u == G) {
                l[q] = h;
                let y = s;
                try {
                  throw new Error(
                    "Uncaught (in promise): " +
                      (function a(l) {
                        return l && l.toString === Object.prototype.toString
                          ? ((l.constructor && l.constructor.name) || "") +
                              ": " +
                              JSON.stringify(l)
                          : l
                          ? l.toString()
                          : Object.prototype.toString.call(l);
                      })(s) +
                      (s && s.stack ? "\n" + s.stack : "")
                  );
                } catch (S) {
                  y = S;
                }
                w && (y.throwOriginal = !0),
                  (y.rejection = s),
                  (y.promise = l),
                  (y.zone = n.current),
                  (y.task = n.currentTask),
                  d.push(y),
                  i.scheduleMicroTask();
              }
            }
          }
          return l;
        }
        const U = p("rejectionHandledHandler");
        function re(l) {
          if (l[q] === h) {
            try {
              const u = n[U];
              u &&
                "function" == typeof u &&
                u.call(this, { rejection: l[R], promise: l });
            } catch {}
            l[q] = G;
            for (let u = 0; u < d.length; u++)
              l === d[u].promise && d.splice(u, 1);
          }
        }
        function ee(l, u, s, f, g) {
          re(l);
          const b = l[q],
            y = b
              ? "function" == typeof f
                ? f
                : H
              : "function" == typeof g
              ? g
              : K;
          u.scheduleMicroTask(
            X,
            () => {
              try {
                const S = l[R],
                  D = !!s && _ === s[_];
                D && ((s[J] = S), (s[x] = b));
                const O = u.run(y, void 0, D && y !== K && y !== H ? [] : [S]);
                z(s, !0, O);
              } catch (S) {
                z(s, !1, S);
              }
            },
            s
          );
        }
        const L = function () {},
          T = t.AggregateError;
        class e {
          static toString() {
            return "function ZoneAwarePromise() { [native code] }";
          }
          static resolve(u) {
            return z(new this(null), E, u);
          }
          static reject(u) {
            return z(new this(null), G, u);
          }
          static any(u) {
            if (!u || "function" != typeof u[Symbol.iterator])
              return Promise.reject(new T([], "All promises were rejected"));
            const s = [];
            let f = 0;
            try {
              for (let y of u) f++, s.push(e.resolve(y));
            } catch {
              return Promise.reject(new T([], "All promises were rejected"));
            }
            if (0 === f)
              return Promise.reject(new T([], "All promises were rejected"));
            let g = !1;
            const b = [];
            return new e((y, S) => {
              for (let D = 0; D < s.length; D++)
                s[D].then(
                  (O) => {
                    g || ((g = !0), y(O));
                  },
                  (O) => {
                    b.push(O),
                      f--,
                      0 === f &&
                        ((g = !0), S(new T(b, "All promises were rejected")));
                  }
                );
            });
          }
          static race(u) {
            let s,
              f,
              g = new this((S, D) => {
                (s = S), (f = D);
              });
            function b(S) {
              s(S);
            }
            function y(S) {
              f(S);
            }
            for (let S of u) B(S) || (S = this.resolve(S)), S.then(b, y);
            return g;
          }
          static all(u) {
            return e.allWithCallback(u);
          }
          static allSettled(u) {
            return (
              this && this.prototype instanceof e ? this : e
            ).allWithCallback(u, {
              thenCallback: (f) => ({ status: "fulfilled", value: f }),
              errorCallback: (f) => ({ status: "rejected", reason: f }),
            });
          }
          static allWithCallback(u, s) {
            let f,
              g,
              b = new this((O, V) => {
                (f = O), (g = V);
              }),
              y = 2,
              S = 0;
            const D = [];
            for (let O of u) {
              B(O) || (O = this.resolve(O));
              const V = S;
              try {
                O.then(
                  (F) => {
                    (D[V] = s ? s.thenCallback(F) : F), y--, 0 === y && f(D);
                  },
                  (F) => {
                    s
                      ? ((D[V] = s.errorCallback(F)), y--, 0 === y && f(D))
                      : g(F);
                  }
                );
              } catch (F) {
                g(F);
              }
              y++, S++;
            }
            return (y -= 2), 0 === y && f(D), b;
          }
          constructor(u) {
            const s = this;
            if (!(s instanceof e))
              throw new Error("Must be an instanceof Promise.");
            (s[q] = j), (s[R] = []);
            try {
              const f = P();
              u && u(f(I(s, E)), f(I(s, G)));
            } catch (f) {
              z(s, !1, f);
            }
          }
          get [Symbol.toStringTag]() {
            return "Promise";
          }
          get [Symbol.species]() {
            return e;
          }
          then(u, s) {
            var f;
            let g =
              null === (f = this.constructor) || void 0 === f
                ? void 0
                : f[Symbol.species];
            (!g || "function" != typeof g) && (g = this.constructor || e);
            const b = new g(L),
              y = n.current;
            return (
              this[q] == j ? this[R].push(y, b, u, s) : ee(this, y, b, u, s), b
            );
          }
          catch(u) {
            return this.then(null, u);
          }
          finally(u) {
            var s;
            let f =
              null === (s = this.constructor) || void 0 === s
                ? void 0
                : s[Symbol.species];
            (!f || "function" != typeof f) && (f = e);
            const g = new f(L);
            g[_] = _;
            const b = n.current;
            return (
              this[q] == j ? this[R].push(b, g, u, u) : ee(this, b, g, u, u), g
            );
          }
        }
        (e.resolve = e.resolve),
          (e.reject = e.reject),
          (e.race = e.race),
          (e.all = e.all);
        const r = (t[v] = t.Promise);
        t.Promise = e;
        const k = p("thenPatched");
        function C(l) {
          const u = l.prototype,
            s = o(u, "then");
          if (s && (!1 === s.writable || !s.configurable)) return;
          const f = u.then;
          (u[m] = f),
            (l.prototype.then = function (g, b) {
              return new e((S, D) => {
                f.call(this, S, D);
              }).then(g, b);
            }),
            (l[k] = !0);
        }
        return (
          (i.patchThen = C),
          r &&
            (C(r),
            ae(t, "fetch", (l) =>
              (function $(l) {
                return function (u, s) {
                  let f = l.apply(u, s);
                  if (f instanceof e) return f;
                  let g = f.constructor;
                  return g[k] || C(g), f;
                };
              })(l)
            )),
          (Promise[n.__symbol__("uncaughtPromiseErrors")] = d),
          e
        );
      }),
        Zone.__load_patch("toString", (t) => {
          const n = Function.prototype.toString,
            i = A("OriginalDelegate"),
            o = A("Promise"),
            c = A("Error"),
            a = function () {
              if ("function" == typeof this) {
                const v = this[i];
                if (v)
                  return "function" == typeof v
                    ? n.call(v)
                    : Object.prototype.toString.call(v);
                if (this === Promise) {
                  const m = t[o];
                  if (m) return n.call(m);
                }
                if (this === Error) {
                  const m = t[c];
                  if (m) return n.call(m);
                }
              }
              return n.call(this);
            };
          (a[i] = n), (Function.prototype.toString = a);
          const p = Object.prototype.toString;
          Object.prototype.toString = function () {
            return "function" == typeof Promise && this instanceof Promise
              ? "[object Promise]"
              : p.call(this);
          };
        });
      let Ee = !1;
      if (typeof window < "u")
        try {
          const t = Object.defineProperty({}, "passive", {
            get: function () {
              Ee = !0;
            },
          });
          window.addEventListener("test", t, t),
            window.removeEventListener("test", t, t);
        } catch {
          Ee = !1;
        }
      const ht = { useG: !0 },
        te = {},
        ze = {},
        Ye = new RegExp("^" + me + "(\\w+)(true|false)$"),
        $e = A("propagationStopped");
      function Je(t, n) {
        const i = (n ? n(t) : t) + ce,
          o = (n ? n(t) : t) + ie,
          c = me + i,
          a = me + o;
        (te[t] = {}), (te[t][ce] = c), (te[t][ie] = a);
      }
      function dt(t, n, i, o) {
        const c = (o && o.add) || De,
          a = (o && o.rm) || Oe,
          p = (o && o.listeners) || "eventListeners",
          d = (o && o.rmAll) || "removeAllListeners",
          w = A(c),
          v = "." + c + ":",
          m = "prependListener",
          M = "." + m + ":",
          Z = function (R, _, J) {
            if (R.isRemoved) return;
            const x = R.callback;
            let X;
            "object" == typeof x &&
              x.handleEvent &&
              ((R.callback = (E) => x.handleEvent(E)),
              (R.originalDelegate = x));
            try {
              R.invoke(R, _, [J]);
            } catch (E) {
              X = E;
            }
            const j = R.options;
            return (
              j &&
                "object" == typeof j &&
                j.once &&
                _[a].call(
                  _,
                  J.type,
                  R.originalDelegate ? R.originalDelegate : R.callback,
                  j
                ),
              X
            );
          };
        function N(R, _, J) {
          if (!(_ = _ || t.event)) return;
          const x = R || _.target || t,
            X = x[te[_.type][J ? ie : ce]];
          if (X) {
            const j = [];
            if (1 === X.length) {
              const E = Z(X[0], x, _);
              E && j.push(E);
            } else {
              const E = X.slice();
              for (let G = 0; G < E.length && (!_ || !0 !== _[$e]); G++) {
                const h = Z(E[G], x, _);
                h && j.push(h);
              }
            }
            if (1 === j.length) throw j[0];
            for (let E = 0; E < j.length; E++) {
              const G = j[E];
              n.nativeScheduleMicroTask(() => {
                throw G;
              });
            }
          }
        }
        const B = function (R) {
            return N(this, R, !1);
          },
          H = function (R) {
            return N(this, R, !0);
          };
        function K(R, _) {
          if (!R) return !1;
          let J = !0;
          _ && void 0 !== _.useG && (J = _.useG);
          const x = _ && _.vh;
          let X = !0;
          _ && void 0 !== _.chkDup && (X = _.chkDup);
          let j = !1;
          _ && void 0 !== _.rt && (j = _.rt);
          let E = R;
          for (; E && !E.hasOwnProperty(c); ) E = ve(E);
          if ((!E && R[c] && (E = R), !E || E[w])) return !1;
          const G = _ && _.eventNameToString,
            h = {},
            I = (E[w] = E[c]),
            P = (E[A(a)] = E[a]),
            Q = (E[A(p)] = E[p]),
            oe = (E[A(d)] = E[d]);
          let z;
          _ && _.prepend && (z = E[A(_.prepend)] = E[_.prepend]);
          const e = J
              ? function (s) {
                  if (!h.isExisting)
                    return I.call(
                      h.target,
                      h.eventName,
                      h.capture ? H : B,
                      h.options
                    );
                }
              : function (s) {
                  return I.call(h.target, h.eventName, s.invoke, h.options);
                },
            r = J
              ? function (s) {
                  if (!s.isRemoved) {
                    const f = te[s.eventName];
                    let g;
                    f && (g = f[s.capture ? ie : ce]);
                    const b = g && s.target[g];
                    if (b)
                      for (let y = 0; y < b.length; y++)
                        if (b[y] === s) {
                          b.splice(y, 1),
                            (s.isRemoved = !0),
                            0 === b.length &&
                              ((s.allRemoved = !0), (s.target[g] = null));
                          break;
                        }
                  }
                  if (s.allRemoved)
                    return P.call(
                      s.target,
                      s.eventName,
                      s.capture ? H : B,
                      s.options
                    );
                }
              : function (s) {
                  return P.call(s.target, s.eventName, s.invoke, s.options);
                },
            C =
              _ && _.diff
                ? _.diff
                : function (s, f) {
                    const g = typeof f;
                    return (
                      ("function" === g && s.callback === f) ||
                      ("object" === g && s.originalDelegate === f)
                    );
                  },
            $ = Zone[A("UNPATCHED_EVENTS")],
            l = t[A("PASSIVE_EVENTS")],
            u = function (s, f, g, b, y = !1, S = !1) {
              return function () {
                const D = this || t;
                let O = arguments[0];
                _ && _.transferEventName && (O = _.transferEventName(O));
                let V = arguments[1];
                if (!V) return s.apply(this, arguments);
                if (we && "uncaughtException" === O)
                  return s.apply(this, arguments);
                let F = !1;
                if ("function" != typeof V) {
                  if (!V.handleEvent) return s.apply(this, arguments);
                  F = !0;
                }
                if (x && !x(s, V, D, arguments)) return;
                const fe = Ee && !!l && -1 !== l.indexOf(O),
                  se = (function U(s, f) {
                    return !Ee && "object" == typeof s && s
                      ? !!s.capture
                      : Ee && f
                      ? "boolean" == typeof s
                        ? { capture: s, passive: !0 }
                        : s
                        ? "object" == typeof s && !1 !== s.passive
                          ? Object.assign(Object.assign({}, s), { passive: !0 })
                          : s
                        : { passive: !0 }
                      : s;
                  })(arguments[2], fe);
                if ($)
                  for (let de = 0; de < $.length; de++)
                    if (O === $[de])
                      return fe
                        ? s.call(D, O, V, se)
                        : s.apply(this, arguments);
                const xe = !!se && ("boolean" == typeof se || se.capture),
                  tt = !(!se || "object" != typeof se) && se.once,
                  gt = Zone.current;
                let Ge = te[O];
                Ge || (Je(O, G), (Ge = te[O]));
                const nt = Ge[xe ? ie : ce];
                let Ce,
                  ye = D[nt],
                  rt = !1;
                if (ye) {
                  if (((rt = !0), X))
                    for (let de = 0; de < ye.length; de++)
                      if (C(ye[de], V)) return;
                } else ye = D[nt] = [];
                const ot = D.constructor.name,
                  st = ze[ot];
                st && (Ce = st[O]),
                  Ce || (Ce = ot + f + (G ? G(O) : O)),
                  (h.options = se),
                  tt && (h.options.once = !1),
                  (h.target = D),
                  (h.capture = xe),
                  (h.eventName = O),
                  (h.isExisting = rt);
                const ke = J ? ht : void 0;
                ke && (ke.taskData = h);
                const he = gt.scheduleEventTask(Ce, V, ke, g, b);
                return (
                  (h.target = null),
                  ke && (ke.taskData = null),
                  tt && (se.once = !0),
                  (!Ee && "boolean" == typeof he.options) || (he.options = se),
                  (he.target = D),
                  (he.capture = xe),
                  (he.eventName = O),
                  F && (he.originalDelegate = V),
                  S ? ye.unshift(he) : ye.push(he),
                  y ? D : void 0
                );
              };
            };
          return (
            (E[c] = u(I, v, e, r, j)),
            z &&
              (E[m] = u(
                z,
                M,
                function (s) {
                  return z.call(h.target, h.eventName, s.invoke, h.options);
                },
                r,
                j,
                !0
              )),
            (E[a] = function () {
              const s = this || t;
              let f = arguments[0];
              _ && _.transferEventName && (f = _.transferEventName(f));
              const g = arguments[2],
                b = !!g && ("boolean" == typeof g || g.capture),
                y = arguments[1];
              if (!y) return P.apply(this, arguments);
              if (x && !x(P, y, s, arguments)) return;
              const S = te[f];
              let D;
              S && (D = S[b ? ie : ce]);
              const O = D && s[D];
              if (O)
                for (let V = 0; V < O.length; V++) {
                  const F = O[V];
                  if (C(F, y))
                    return (
                      O.splice(V, 1),
                      (F.isRemoved = !0),
                      0 === O.length &&
                        ((F.allRemoved = !0),
                        (s[D] = null),
                        "string" == typeof f) &&
                        (s[me + "ON_PROPERTY" + f] = null),
                      F.zone.cancelTask(F),
                      j ? s : void 0
                    );
                }
              return P.apply(this, arguments);
            }),
            (E[p] = function () {
              const s = this || t;
              let f = arguments[0];
              _ && _.transferEventName && (f = _.transferEventName(f));
              const g = [],
                b = Ke(s, G ? G(f) : f);
              for (let y = 0; y < b.length; y++) {
                const S = b[y];
                g.push(S.originalDelegate ? S.originalDelegate : S.callback);
              }
              return g;
            }),
            (E[d] = function () {
              const s = this || t;
              let f = arguments[0];
              if (f) {
                _ && _.transferEventName && (f = _.transferEventName(f));
                const g = te[f];
                if (g) {
                  const S = s[g[ce]],
                    D = s[g[ie]];
                  if (S) {
                    const O = S.slice();
                    for (let V = 0; V < O.length; V++) {
                      const F = O[V];
                      this[a].call(
                        this,
                        f,
                        F.originalDelegate ? F.originalDelegate : F.callback,
                        F.options
                      );
                    }
                  }
                  if (D) {
                    const O = D.slice();
                    for (let V = 0; V < O.length; V++) {
                      const F = O[V];
                      this[a].call(
                        this,
                        f,
                        F.originalDelegate ? F.originalDelegate : F.callback,
                        F.options
                      );
                    }
                  }
                }
              } else {
                const g = Object.keys(s);
                for (let b = 0; b < g.length; b++) {
                  const S = Ye.exec(g[b]);
                  let D = S && S[1];
                  D && "removeListener" !== D && this[d].call(this, D);
                }
                this[d].call(this, "removeListener");
              }
              if (j) return this;
            }),
            le(E[c], I),
            le(E[a], P),
            oe && le(E[d], oe),
            Q && le(E[p], Q),
            !0
          );
        }
        let q = [];
        for (let R = 0; R < i.length; R++) q[R] = K(i[R], o);
        return q;
      }
      function Ke(t, n) {
        if (!n) {
          const a = [];
          for (let p in t) {
            const d = Ye.exec(p);
            let w = d && d[1];
            if (w && (!n || w === n)) {
              const v = t[p];
              if (v) for (let m = 0; m < v.length; m++) a.push(v[m]);
            }
          }
          return a;
        }
        let i = te[n];
        i || (Je(n), (i = te[n]));
        const o = t[i[ce]],
          c = t[i[ie]];
        return o ? (c ? o.concat(c) : o.slice()) : c ? c.slice() : [];
      }
      function _t(t, n) {
        const i = t.Event;
        i &&
          i.prototype &&
          n.patchMethod(
            i.prototype,
            "stopImmediatePropagation",
            (o) =>
              function (c, a) {
                (c[$e] = !0), o && o.apply(c, a);
              }
          );
      }
      function Et(t, n, i, o, c) {
        const a = Zone.__symbol__(o);
        if (n[a]) return;
        const p = (n[a] = n[o]);
        (n[o] = function (d, w, v) {
          return (
            w &&
              w.prototype &&
              c.forEach(function (m) {
                const M = `${i}.${o}::` + m,
                  Z = w.prototype;
                try {
                  if (Z.hasOwnProperty(m)) {
                    const N = t.ObjectGetOwnPropertyDescriptor(Z, m);
                    N && N.value
                      ? ((N.value = t.wrapWithCurrentZone(N.value, M)),
                        t._redefineProperty(w.prototype, m, N))
                      : Z[m] && (Z[m] = t.wrapWithCurrentZone(Z[m], M));
                  } else Z[m] && (Z[m] = t.wrapWithCurrentZone(Z[m], M));
                } catch {}
              }),
            p.call(n, d, w, v)
          );
        }),
          t.attachOriginToPatched(n[o], p);
      }
      function Qe(t, n, i) {
        if (!i || 0 === i.length) return n;
        const o = i.filter((a) => a.target === t);
        if (!o || 0 === o.length) return n;
        const c = o[0].ignoreProperties;
        return n.filter((a) => -1 === c.indexOf(a));
      }
      function et(t, n, i, o) {
        t && qe(t, Qe(t, n, i), o);
      }
      function He(t) {
        return Object.getOwnPropertyNames(t)
          .filter((n) => n.startsWith("on") && n.length > 2)
          .map((n) => n.substring(2));
      }
      Zone.__load_patch("util", (t, n, i) => {
        const o = He(t);
        (i.patchOnProperties = qe),
          (i.patchMethod = ae),
          (i.bindArguments = Me),
          (i.patchMacroTask = lt);
        const c = n.__symbol__("BLACK_LISTED_EVENTS"),
          a = n.__symbol__("UNPATCHED_EVENTS");
        t[a] && (t[c] = t[a]),
          t[c] && (n[c] = n[a] = t[c]),
          (i.patchEventPrototype = _t),
          (i.patchEventTarget = dt),
          (i.isIEOrEdge = ft),
          (i.ObjectDefineProperty = pe),
          (i.ObjectGetOwnPropertyDescriptor = ue),
          (i.ObjectCreate = Se),
          (i.ArraySlice = it),
          (i.patchClass = ge),
          (i.wrapWithCurrentZone = Ie),
          (i.filterProperties = Qe),
          (i.attachOriginToPatched = le),
          (i._redefineProperty = Object.defineProperty),
          (i.patchCallbacks = Et),
          (i.getGlobalObjects = () => ({
            globalSources: ze,
            zoneSymbolEventNames: te,
            eventNames: o,
            isBrowser: je,
            isMix: Be,
            isNode: we,
            TRUE_STR: ie,
            FALSE_STR: ce,
            ZONE_SYMBOL_PREFIX: me,
            ADD_EVENT_LISTENER_STR: De,
            REMOVE_EVENT_LISTENER_STR: Oe,
          }));
      });
      const Re = A("zoneTask");
      function Te(t, n, i, o) {
        let c = null,
          a = null;
        i += o;
        const p = {};
        function d(v) {
          const m = v.data;
          return (
            (m.args[0] = function () {
              return v.invoke.apply(this, arguments);
            }),
            (m.handleId = c.apply(t, m.args)),
            v
          );
        }
        function w(v) {
          return a.call(t, v.data.handleId);
        }
        (c = ae(
          t,
          (n += o),
          (v) =>
            function (m, M) {
              if ("function" == typeof M[0]) {
                const Z = {
                    isPeriodic: "Interval" === o,
                    delay:
                      "Timeout" === o || "Interval" === o ? M[1] || 0 : void 0,
                    args: M,
                  },
                  N = M[0];
                M[0] = function () {
                  try {
                    return N.apply(this, arguments);
                  } finally {
                    Z.isPeriodic ||
                      ("number" == typeof Z.handleId
                        ? delete p[Z.handleId]
                        : Z.handleId && (Z.handleId[Re] = null));
                  }
                };
                const B = Le(n, M[0], Z, d, w);
                if (!B) return B;
                const H = B.data.handleId;
                return (
                  "number" == typeof H ? (p[H] = B) : H && (H[Re] = B),
                  H &&
                    H.ref &&
                    H.unref &&
                    "function" == typeof H.ref &&
                    "function" == typeof H.unref &&
                    ((B.ref = H.ref.bind(H)), (B.unref = H.unref.bind(H))),
                  "number" == typeof H || H ? H : B
                );
              }
              return v.apply(t, M);
            }
        )),
          (a = ae(
            t,
            i,
            (v) =>
              function (m, M) {
                const Z = M[0];
                let N;
                "number" == typeof Z
                  ? (N = p[Z])
                  : ((N = Z && Z[Re]), N || (N = Z)),
                  N && "string" == typeof N.type
                    ? "notScheduled" !== N.state &&
                      ((N.cancelFn && N.data.isPeriodic) || 0 === N.runCount) &&
                      ("number" == typeof Z ? delete p[Z] : Z && (Z[Re] = null),
                      N.zone.cancelTask(N))
                    : v.apply(t, M);
              }
          ));
      }
      Zone.__load_patch("legacy", (t) => {
        const n = t[Zone.__symbol__("legacyPatch")];
        n && n();
      }),
        Zone.__load_patch("queueMicrotask", (t, n, i) => {
          i.patchMethod(
            t,
            "queueMicrotask",
            (o) =>
              function (c, a) {
                n.current.scheduleMicroTask("queueMicrotask", a[0]);
              }
          );
        }),
        Zone.__load_patch("timers", (t) => {
          const n = "set",
            i = "clear";
          Te(t, n, i, "Timeout"),
            Te(t, n, i, "Interval"),
            Te(t, n, i, "Immediate");
        }),
        Zone.__load_patch("requestAnimationFrame", (t) => {
          Te(t, "request", "cancel", "AnimationFrame"),
            Te(t, "mozRequest", "mozCancel", "AnimationFrame"),
            Te(t, "webkitRequest", "webkitCancel", "AnimationFrame");
        }),
        Zone.__load_patch("blocking", (t, n) => {
          const i = ["alert", "prompt", "confirm"];
          for (let o = 0; o < i.length; o++)
            ae(
              t,
              i[o],
              (a, p, d) =>
                function (w, v) {
                  return n.current.run(a, t, v, d);
                }
            );
        }),
        Zone.__load_patch("EventTarget", (t, n, i) => {
          (function mt(t, n) {
            n.patchEventPrototype(t, n);
          })(t, i),
            (function pt(t, n) {
              if (Zone[n.symbol("patchEventTarget")]) return;
              const {
                eventNames: i,
                zoneSymbolEventNames: o,
                TRUE_STR: c,
                FALSE_STR: a,
                ZONE_SYMBOL_PREFIX: p,
              } = n.getGlobalObjects();
              for (let w = 0; w < i.length; w++) {
                const v = i[w],
                  Z = p + (v + a),
                  N = p + (v + c);
                (o[v] = {}), (o[v][a] = Z), (o[v][c] = N);
              }
              const d = t.EventTarget;
              d && d.prototype && n.patchEventTarget(t, n, [d && d.prototype]);
            })(t, i);
          const o = t.XMLHttpRequestEventTarget;
          o && o.prototype && i.patchEventTarget(t, i, [o.prototype]);
        }),
        Zone.__load_patch("MutationObserver", (t, n, i) => {
          ge("MutationObserver"), ge("WebKitMutationObserver");
        }),
        Zone.__load_patch("IntersectionObserver", (t, n, i) => {
          ge("IntersectionObserver");
        }),
        Zone.__load_patch("FileReader", (t, n, i) => {
          ge("FileReader");
        }),
        Zone.__load_patch("on_property", (t, n, i) => {
          !(function Tt(t, n) {
            if ((we && !Be) || Zone[t.symbol("patchEvents")]) return;
            const i = n.__Zone_ignore_on_properties;
            let o = [];
            if (je) {
              const c = window;
              o = o.concat([
                "Document",
                "SVGElement",
                "Element",
                "HTMLElement",
                "HTMLBodyElement",
                "HTMLMediaElement",
                "HTMLFrameSetElement",
                "HTMLFrameElement",
                "HTMLIFrameElement",
                "HTMLMarqueeElement",
                "Worker",
              ]);
              const a = (function ut() {
                try {
                  const t = _e.navigator.userAgent;
                  if (-1 !== t.indexOf("MSIE ") || -1 !== t.indexOf("Trident/"))
                    return !0;
                } catch {}
                return !1;
              })()
                ? [{ target: c, ignoreProperties: ["error"] }]
                : [];
              et(c, He(c), i && i.concat(a), ve(c));
            }
            o = o.concat([
              "XMLHttpRequest",
              "XMLHttpRequestEventTarget",
              "IDBIndex",
              "IDBRequest",
              "IDBOpenDBRequest",
              "IDBDatabase",
              "IDBTransaction",
              "IDBCursor",
              "WebSocket",
            ]);
            for (let c = 0; c < o.length; c++) {
              const a = n[o[c]];
              a && a.prototype && et(a.prototype, He(a.prototype), i);
            }
          })(i, t);
        }),
        Zone.__load_patch("customElements", (t, n, i) => {
          !(function yt(t, n) {
            const { isBrowser: i, isMix: o } = n.getGlobalObjects();
            (i || o) &&
              t.customElements &&
              "customElements" in t &&
              n.patchCallbacks(
                n,
                t.customElements,
                "customElements",
                "define",
                [
                  "connectedCallback",
                  "disconnectedCallback",
                  "adoptedCallback",
                  "attributeChangedCallback",
                ]
              );
          })(t, i);
        }),
        Zone.__load_patch("XHR", (t, n) => {
          !(function w(v) {
            const m = v.XMLHttpRequest;
            if (!m) return;
            const M = m.prototype;
            let N = M[Ze],
              B = M[Ne];
            if (!N) {
              const h = v.XMLHttpRequestEventTarget;
              if (h) {
                const I = h.prototype;
                (N = I[Ze]), (B = I[Ne]);
              }
            }
            const H = "readystatechange",
              K = "scheduled";
            function q(h) {
              const I = h.data,
                P = I.target;
              (P[a] = !1), (P[d] = !1);
              const Q = P[c];
              N || ((N = P[Ze]), (B = P[Ne])), Q && B.call(P, H, Q);
              const oe = (P[c] = () => {
                if (P.readyState === P.DONE)
                  if (!I.aborted && P[a] && h.state === K) {
                    const U = P[n.__symbol__("loadfalse")];
                    if (0 !== P.status && U && U.length > 0) {
                      const re = h.invoke;
                      (h.invoke = function () {
                        const ee = P[n.__symbol__("loadfalse")];
                        for (let W = 0; W < ee.length; W++)
                          ee[W] === h && ee.splice(W, 1);
                        !I.aborted && h.state === K && re.call(h);
                      }),
                        U.push(h);
                    } else h.invoke();
                  } else !I.aborted && !1 === P[a] && (P[d] = !0);
              });
              return (
                N.call(P, H, oe),
                P[i] || (P[i] = h),
                E.apply(P, I.args),
                (P[a] = !0),
                h
              );
            }
            function R() {}
            function _(h) {
              const I = h.data;
              return (I.aborted = !0), G.apply(I.target, I.args);
            }
            const J = ae(
                M,
                "open",
                () =>
                  function (h, I) {
                    return (h[o] = 0 == I[2]), (h[p] = I[1]), J.apply(h, I);
                  }
              ),
              X = A("fetchTaskAborting"),
              j = A("fetchTaskScheduling"),
              E = ae(
                M,
                "send",
                () =>
                  function (h, I) {
                    if (!0 === n.current[j] || h[o]) return E.apply(h, I);
                    {
                      const P = {
                          target: h,
                          url: h[p],
                          isPeriodic: !1,
                          args: I,
                          aborted: !1,
                        },
                        Q = Le("XMLHttpRequest.send", R, P, q, _);
                      h &&
                        !0 === h[d] &&
                        !P.aborted &&
                        Q.state === K &&
                        Q.invoke();
                    }
                  }
              ),
              G = ae(
                M,
                "abort",
                () =>
                  function (h, I) {
                    const P = (function Z(h) {
                      return h[i];
                    })(h);
                    if (P && "string" == typeof P.type) {
                      if (null == P.cancelFn || (P.data && P.data.aborted))
                        return;
                      P.zone.cancelTask(P);
                    } else if (!0 === n.current[X]) return G.apply(h, I);
                  }
              );
          })(t);
          const i = A("xhrTask"),
            o = A("xhrSync"),
            c = A("xhrListener"),
            a = A("xhrScheduled"),
            p = A("xhrURL"),
            d = A("xhrErrorBeforeScheduled");
        }),
        Zone.__load_patch("geolocation", (t) => {
          t.navigator &&
            t.navigator.geolocation &&
            (function at(t, n) {
              const i = t.constructor.name;
              for (let o = 0; o < n.length; o++) {
                const c = n[o],
                  a = t[c];
                if (a) {
                  if (!Ve(ue(t, c))) continue;
                  t[c] = ((d) => {
                    const w = function () {
                      return d.apply(this, Me(arguments, i + "." + c));
                    };
                    return le(w, d), w;
                  })(a);
                }
              }
            })(t.navigator.geolocation, [
              "getCurrentPosition",
              "watchPosition",
            ]);
        }),
        Zone.__load_patch("PromiseRejectionEvent", (t, n) => {
          function i(o) {
            return function (c) {
              Ke(t, o).forEach((p) => {
                const d = t.PromiseRejectionEvent;
                if (d) {
                  const w = new d(o, {
                    promise: c.promise,
                    reason: c.rejection,
                  });
                  p.invoke(w);
                }
              });
            };
          }
          t.PromiseRejectionEvent &&
            ((n[A("unhandledPromiseRejectionHandler")] =
              i("unhandledrejection")),
            (n[A("rejectionHandledHandler")] = i("rejectionhandled")));
        });
    },
  },
  (ue) => {
    ue((ue.s = 583));
  },
]);
("use strict");
(self.webpackChunkangular_web_component =
  self.webpackChunkangular_web_component || []).push([
  [179],
  {
    396: () => {
      function X(e) {
        return "function" == typeof e;
      }
      function qr(e) {
        const n = e((r) => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (
          (n.prototype = Object.create(Error.prototype)),
          (n.prototype.constructor = n),
          n
        );
      }
      const Zr = qr(
        (e) =>
          function (n) {
            e(this),
              (this.message = n
                ? `${n.length} errors occurred during unsubscription:\n${n
                    .map((r, o) => `${o + 1}) ${r.toString()}`)
                    .join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = n);
          }
      );
      function Jn(e, t) {
        if (e) {
          const n = e.indexOf(t);
          0 <= n && e.splice(n, 1);
        }
      }
      class it {
        constructor(t) {
          (this.initialTeardown = t),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let t;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: n } = this;
            if (n)
              if (((this._parentage = null), Array.isArray(n)))
                for (const i of n) i.remove(this);
              else n.remove(this);
            const { initialTeardown: r } = this;
            if (X(r))
              try {
                r();
              } catch (i) {
                t = i instanceof Zr ? i.errors : [i];
              }
            const { _finalizers: o } = this;
            if (o) {
              this._finalizers = null;
              for (const i of o)
                try {
                  Wu(i);
                } catch (s) {
                  (t = t ?? []),
                    s instanceof Zr ? (t = [...t, ...s.errors]) : t.push(s);
                }
            }
            if (t) throw new Zr(t);
          }
        }
        add(t) {
          var n;
          if (t && t !== this)
            if (this.closed) Wu(t);
            else {
              if (t instanceof it) {
                if (t.closed || t._hasParent(this)) return;
                t._addParent(this);
              }
              (this._finalizers =
                null !== (n = this._finalizers) && void 0 !== n ? n : []).push(
                t
              );
            }
        }
        _hasParent(t) {
          const { _parentage: n } = this;
          return n === t || (Array.isArray(n) && n.includes(t));
        }
        _addParent(t) {
          const { _parentage: n } = this;
          this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
        }
        _removeParent(t) {
          const { _parentage: n } = this;
          n === t ? (this._parentage = null) : Array.isArray(n) && Jn(n, t);
        }
        remove(t) {
          const { _finalizers: n } = this;
          n && Jn(n, t), t instanceof it && t._removeParent(this);
        }
      }
      it.EMPTY = (() => {
        const e = new it();
        return (e.closed = !0), e;
      })();
      const zu = it.EMPTY;
      function Gu(e) {
        return (
          e instanceof it ||
          (e && "closed" in e && X(e.remove) && X(e.add) && X(e.unsubscribe))
        );
      }
      function Wu(e) {
        X(e) ? e() : e.unsubscribe();
      }
      const zt = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Kr = {
          setTimeout(e, t, ...n) {
            const { delegate: r } = Kr;
            return r?.setTimeout
              ? r.setTimeout(e, t, ...n)
              : setTimeout(e, t, ...n);
          },
          clearTimeout(e) {
            const { delegate: t } = Kr;
            return (t?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function qu(e) {
        Kr.setTimeout(() => {
          const { onUnhandledError: t } = zt;
          if (!t) throw e;
          t(e);
        });
      }
      function Zu() {}
      const pm = Pi("C", void 0, void 0);
      function Pi(e, t, n) {
        return { kind: e, value: t, error: n };
      }
      let Gt = null;
      function Yr(e) {
        if (zt.useDeprecatedSynchronousErrorHandling) {
          const t = !Gt;
          if ((t && (Gt = { errorThrown: !1, error: null }), e(), t)) {
            const { errorThrown: n, error: r } = Gt;
            if (((Gt = null), n)) throw r;
          }
        } else e();
      }
      class Fi extends it {
        constructor(t) {
          super(),
            (this.isStopped = !1),
            t
              ? ((this.destination = t), Gu(t) && t.add(this))
              : (this.destination = Em);
        }
        static create(t, n, r) {
          return new er(t, n, r);
        }
        next(t) {
          this.isStopped
            ? Ri(
                (function mm(e) {
                  return Pi("N", e, void 0);
                })(t),
                this
              )
            : this._next(t);
        }
        error(t) {
          this.isStopped
            ? Ri(
                (function gm(e) {
                  return Pi("E", void 0, e);
                })(t),
                this
              )
            : ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped
            ? Ri(pm, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          try {
            this.destination.error(t);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const Dm = Function.prototype.bind;
      function xi(e, t) {
        return Dm.call(e, t);
      }
      class vm {
        constructor(t) {
          this.partialObserver = t;
        }
        next(t) {
          const { partialObserver: n } = this;
          if (n.next)
            try {
              n.next(t);
            } catch (r) {
              Xr(r);
            }
        }
        error(t) {
          const { partialObserver: n } = this;
          if (n.error)
            try {
              n.error(t);
            } catch (r) {
              Xr(r);
            }
          else Xr(t);
        }
        complete() {
          const { partialObserver: t } = this;
          if (t.complete)
            try {
              t.complete();
            } catch (n) {
              Xr(n);
            }
        }
      }
      class er extends Fi {
        constructor(t, n, r) {
          let o;
          if ((super(), X(t) || !t))
            o = {
              next: t ?? void 0,
              error: n ?? void 0,
              complete: r ?? void 0,
            };
          else {
            let i;
            this && zt.useDeprecatedNextContext
              ? ((i = Object.create(t)),
                (i.unsubscribe = () => this.unsubscribe()),
                (o = {
                  next: t.next && xi(t.next, i),
                  error: t.error && xi(t.error, i),
                  complete: t.complete && xi(t.complete, i),
                }))
              : (o = t);
          }
          this.destination = new vm(o);
        }
      }
      function Xr(e) {
        zt.useDeprecatedSynchronousErrorHandling
          ? (function ym(e) {
              zt.useDeprecatedSynchronousErrorHandling &&
                Gt &&
                ((Gt.errorThrown = !0), (Gt.error = e));
            })(e)
          : qu(e);
      }
      function Ri(e, t) {
        const { onStoppedNotification: n } = zt;
        n && Kr.setTimeout(() => n(e, t));
      }
      const Em = {
          closed: !0,
          next: Zu,
          error: function wm(e) {
            throw e;
          },
          complete: Zu,
        },
        Oi =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function Ku(e) {
        return e;
      }
      let _e = (() => {
        class e {
          constructor(n) {
            n && (this._subscribe = n);
          }
          lift(n) {
            const r = new e();
            return (r.source = this), (r.operator = n), r;
          }
          subscribe(n, r, o) {
            const i = (function Cm(e) {
              return (
                (e && e instanceof Fi) ||
                ((function _m(e) {
                  return e && X(e.next) && X(e.error) && X(e.complete);
                })(e) &&
                  Gu(e))
              );
            })(n)
              ? n
              : new er(n, r, o);
            return (
              Yr(() => {
                const { operator: s, source: a } = this;
                i.add(
                  s
                    ? s.call(i, a)
                    : a
                    ? this._subscribe(i)
                    : this._trySubscribe(i)
                );
              }),
              i
            );
          }
          _trySubscribe(n) {
            try {
              return this._subscribe(n);
            } catch (r) {
              n.error(r);
            }
          }
          forEach(n, r) {
            return new (r = Xu(r))((o, i) => {
              const s = new er({
                next: (a) => {
                  try {
                    n(a);
                  } catch (u) {
                    i(u), s.unsubscribe();
                  }
                },
                error: i,
                complete: o,
              });
              this.subscribe(s);
            });
          }
          _subscribe(n) {
            var r;
            return null === (r = this.source) || void 0 === r
              ? void 0
              : r.subscribe(n);
          }
          [Oi]() {
            return this;
          }
          pipe(...n) {
            return (function Yu(e) {
              return 0 === e.length
                ? Ku
                : 1 === e.length
                ? e[0]
                : function (n) {
                    return e.reduce((r, o) => o(r), n);
                  };
            })(n)(this);
          }
          toPromise(n) {
            return new (n = Xu(n))((r, o) => {
              let i;
              this.subscribe(
                (s) => (i = s),
                (s) => o(s),
                () => r(i)
              );
            });
          }
        }
        return (e.create = (t) => new e(t)), e;
      })();
      function Xu(e) {
        var t;
        return null !== (t = e ?? zt.Promise) && void 0 !== t ? t : Promise;
      }
      const Im = qr(
        (e) =>
          function () {
            e(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      let Qr = (() => {
        class e extends _e {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(n) {
            const r = new Qu(this, this);
            return (r.operator = n), r;
          }
          _throwIfClosed() {
            if (this.closed) throw new Im();
          }
          next(n) {
            Yr(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const r of this.currentObservers) r.next(n);
              }
            });
          }
          error(n) {
            Yr(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = n);
                const { observers: r } = this;
                for (; r.length; ) r.shift().error(n);
              }
            });
          }
          complete() {
            Yr(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: n } = this;
                for (; n.length; ) n.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var n;
            return (
              (null === (n = this.observers) || void 0 === n
                ? void 0
                : n.length) > 0
            );
          }
          _trySubscribe(n) {
            return this._throwIfClosed(), super._trySubscribe(n);
          }
          _subscribe(n) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(n),
              this._innerSubscribe(n)
            );
          }
          _innerSubscribe(n) {
            const { hasError: r, isStopped: o, observers: i } = this;
            return r || o
              ? zu
              : ((this.currentObservers = null),
                i.push(n),
                new it(() => {
                  (this.currentObservers = null), Jn(i, n);
                }));
          }
          _checkFinalizedStatuses(n) {
            const { hasError: r, thrownError: o, isStopped: i } = this;
            r ? n.error(o) : i && n.complete();
          }
          asObservable() {
            const n = new _e();
            return (n.source = this), n;
          }
        }
        return (e.create = (t, n) => new Qu(t, n)), e;
      })();
      class Qu extends Qr {
        constructor(t, n) {
          super(), (this.destination = t), (this.source = n);
        }
        next(t) {
          var n, r;
          null ===
            (r =
              null === (n = this.destination) || void 0 === n
                ? void 0
                : n.next) ||
            void 0 === r ||
            r.call(n, t);
        }
        error(t) {
          var n, r;
          null ===
            (r =
              null === (n = this.destination) || void 0 === n
                ? void 0
                : n.error) ||
            void 0 === r ||
            r.call(n, t);
        }
        complete() {
          var t, n;
          null ===
            (n =
              null === (t = this.destination) || void 0 === t
                ? void 0
                : t.complete) ||
            void 0 === n ||
            n.call(t);
        }
        _subscribe(t) {
          var n, r;
          return null !==
            (r =
              null === (n = this.source) || void 0 === n
                ? void 0
                : n.subscribe(t)) && void 0 !== r
            ? r
            : zu;
        }
      }
      function Wt(e) {
        return (t) => {
          if (
            (function bm(e) {
              return X(e?.lift);
            })(t)
          )
            return t.lift(function (n) {
              try {
                return e(n, this);
              } catch (r) {
                this.error(r);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
      function qt(e, t, n, r, o) {
        return new Sm(e, t, n, r, o);
      }
      class Sm extends Fi {
        constructor(t, n, r, o, i, s) {
          super(t),
            (this.onFinalize = i),
            (this.shouldUnsubscribe = s),
            (this._next = n
              ? function (a) {
                  try {
                    n(a);
                  } catch (u) {
                    t.error(u);
                  }
                }
              : super._next),
            (this._error = o
              ? function (a) {
                  try {
                    o(a);
                  } catch (u) {
                    t.error(u);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = r
              ? function () {
                  try {
                    r();
                  } catch (a) {
                    t.error(a);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var t;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: n } = this;
            super.unsubscribe(),
              !n &&
                (null === (t = this.onFinalize) ||
                  void 0 === t ||
                  t.call(this));
          }
        }
      }
      function cn(e, t) {
        return Wt((n, r) => {
          let o = 0;
          n.subscribe(
            qt(r, (i) => {
              r.next(e.call(t, i, o++));
            })
          );
        });
      }
      function Zt(e) {
        return this instanceof Zt ? ((this.v = e), this) : new Zt(e);
      }
      function Nm(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          t = e[Symbol.asyncIterator];
        return t
          ? t.call(e)
          : ((e = (function tl(e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
              if (n) return n.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && r >= e.length && (e = void 0),
                      { value: e && e[r++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(e)),
            (n = {}),
            r("next"),
            r("throw"),
            r("return"),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n);
        function r(i) {
          n[i] =
            e[i] &&
            function (s) {
              return new Promise(function (a, u) {
                !(function o(i, s, a, u) {
                  Promise.resolve(u).then(function (l) {
                    i({ value: l, done: a });
                  }, s);
                })(a, u, (s = e[i](s)).done, s.value);
              });
            };
        }
      }
      const nl = (e) =>
        e && "number" == typeof e.length && "function" != typeof e;
      function rl(e) {
        return X(e?.then);
      }
      function ol(e) {
        return X(e[Oi]);
      }
      function il(e) {
        return Symbol.asyncIterator && X(e?.[Symbol.asyncIterator]);
      }
      function sl(e) {
        return new TypeError(
          `You provided ${
            null !== e && "object" == typeof e ? "an invalid object" : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      const al = (function Fm() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
      function ul(e) {
        return X(e?.[al]);
      }
      function ll(e) {
        return (function Am(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var o,
            r = n.apply(e, t || []),
            i = [];
          return (
            (o = {}),
            s("next"),
            s("throw"),
            s("return"),
            (o[Symbol.asyncIterator] = function () {
              return this;
            }),
            o
          );
          function s(f) {
            r[f] &&
              (o[f] = function (h) {
                return new Promise(function (p, g) {
                  i.push([f, h, p, g]) > 1 || a(f, h);
                });
              });
          }
          function a(f, h) {
            try {
              !(function u(f) {
                f.value instanceof Zt
                  ? Promise.resolve(f.value.v).then(l, c)
                  : d(i[0][2], f);
              })(r[f](h));
            } catch (p) {
              d(i[0][3], p);
            }
          }
          function l(f) {
            a("next", f);
          }
          function c(f) {
            a("throw", f);
          }
          function d(f, h) {
            f(h), i.shift(), i.length && a(i[0][0], i[0][1]);
          }
        })(this, arguments, function* () {
          const n = e.getReader();
          try {
            for (;;) {
              const { value: r, done: o } = yield Zt(n.read());
              if (o) return yield Zt(void 0);
              yield yield Zt(r);
            }
          } finally {
            n.releaseLock();
          }
        });
      }
      function cl(e) {
        return X(e?.getReader);
      }
      function Dt(e) {
        if (e instanceof _e) return e;
        if (null != e) {
          if (ol(e))
            return (function xm(e) {
              return new _e((t) => {
                const n = e[Oi]();
                if (X(n.subscribe)) return n.subscribe(t);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(e);
          if (nl(e))
            return (function Rm(e) {
              return new _e((t) => {
                for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
                t.complete();
              });
            })(e);
          if (rl(e))
            return (function Om(e) {
              return new _e((t) => {
                e.then(
                  (n) => {
                    t.closed || (t.next(n), t.complete());
                  },
                  (n) => t.error(n)
                ).then(null, qu);
              });
            })(e);
          if (il(e)) return dl(e);
          if (ul(e))
            return (function Lm(e) {
              return new _e((t) => {
                for (const n of e) if ((t.next(n), t.closed)) return;
                t.complete();
              });
            })(e);
          if (cl(e))
            return (function km(e) {
              return dl(ll(e));
            })(e);
        }
        throw sl(e);
      }
      function dl(e) {
        return new _e((t) => {
          (function jm(e, t) {
            var n, r, o, i;
            return (function Mm(e, t, n, r) {
              return new (n || (n = Promise))(function (i, s) {
                function a(c) {
                  try {
                    l(r.next(c));
                  } catch (d) {
                    s(d);
                  }
                }
                function u(c) {
                  try {
                    l(r.throw(c));
                  } catch (d) {
                    s(d);
                  }
                }
                function l(c) {
                  c.done
                    ? i(c.value)
                    : (function o(i) {
                        return i instanceof n
                          ? i
                          : new n(function (s) {
                              s(i);
                            });
                      })(c.value).then(a, u);
                }
                l((r = r.apply(e, t || [])).next());
              });
            })(this, void 0, void 0, function* () {
              try {
                for (n = Nm(e); !(r = yield n.next()).done; )
                  if ((t.next(r.value), t.closed)) return;
              } catch (s) {
                o = { error: s };
              } finally {
                try {
                  r && !r.done && (i = n.return) && (yield i.call(n));
                } finally {
                  if (o) throw o.error;
                }
              }
              t.complete();
            });
          })(e, t).catch((n) => t.error(n));
        });
      }
      function Ot(e, t, n, r = 0, o = !1) {
        const i = t.schedule(function () {
          n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(i), !o)) return i;
      }
      function Jr(e, t, n = 1 / 0) {
        return X(t)
          ? Jr((r, o) => cn((i, s) => t(r, i, o, s))(Dt(e(r, o))), n)
          : ("number" == typeof t && (n = t),
            Wt((r, o) =>
              (function Bm(e, t, n, r, o, i, s, a) {
                const u = [];
                let l = 0,
                  c = 0,
                  d = !1;
                const f = () => {
                    d && !u.length && !l && t.complete();
                  },
                  h = (g) => (l < r ? p(g) : u.push(g)),
                  p = (g) => {
                    i && t.next(g), l++;
                    let v = !1;
                    Dt(n(g, c++)).subscribe(
                      qt(
                        t,
                        (y) => {
                          o?.(y), i ? h(y) : t.next(y);
                        },
                        () => {
                          v = !0;
                        },
                        void 0,
                        () => {
                          if (v)
                            try {
                              for (l--; u.length && l < r; ) {
                                const y = u.shift();
                                s ? Ot(t, s, () => p(y)) : p(y);
                              }
                              f();
                            } catch (y) {
                              t.error(y);
                            }
                        }
                      )
                    );
                  };
                return (
                  e.subscribe(
                    qt(t, h, () => {
                      (d = !0), f();
                    })
                  ),
                  () => {
                    a?.();
                  }
                );
              })(r, o, e, n)
            ));
      }
      const fl = new _e((e) => e.complete());
      function ki(e) {
        return e[e.length - 1];
      }
      function hl(e) {
        return (function $m(e) {
          return e && X(e.schedule);
        })(ki(e))
          ? e.pop()
          : void 0;
      }
      function pl(e, t = 0) {
        return Wt((n, r) => {
          n.subscribe(
            qt(
              r,
              (o) => Ot(r, e, () => r.next(o), t),
              () => Ot(r, e, () => r.complete(), t),
              (o) => Ot(r, e, () => r.error(o), t)
            )
          );
        });
      }
      function gl(e, t = 0) {
        return Wt((n, r) => {
          r.add(e.schedule(() => n.subscribe(r), t));
        });
      }
      function ml(e, t) {
        if (!e) throw new Error("Iterable cannot be null");
        return new _e((n) => {
          Ot(n, t, () => {
            const r = e[Symbol.asyncIterator]();
            Ot(
              n,
              t,
              () => {
                r.next().then((o) => {
                  o.done ? n.complete() : n.next(o.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      function yl(e, t) {
        return t
          ? (function Km(e, t) {
              if (null != e) {
                if (ol(e))
                  return (function zm(e, t) {
                    return Dt(e).pipe(gl(t), pl(t));
                  })(e, t);
                if (nl(e))
                  return (function Wm(e, t) {
                    return new _e((n) => {
                      let r = 0;
                      return t.schedule(function () {
                        r === e.length
                          ? n.complete()
                          : (n.next(e[r++]), n.closed || this.schedule());
                      });
                    });
                  })(e, t);
                if (rl(e))
                  return (function Gm(e, t) {
                    return Dt(e).pipe(gl(t), pl(t));
                  })(e, t);
                if (il(e)) return ml(e, t);
                if (ul(e))
                  return (function qm(e, t) {
                    return new _e((n) => {
                      let r;
                      return (
                        Ot(n, t, () => {
                          (r = e[al]()),
                            Ot(
                              n,
                              t,
                              () => {
                                let o, i;
                                try {
                                  ({ value: o, done: i } = r.next());
                                } catch (s) {
                                  return void n.error(s);
                                }
                                i ? n.complete() : n.next(o);
                              },
                              0,
                              !0
                            );
                        }),
                        () => X(r?.return) && r.return()
                      );
                    });
                  })(e, t);
                if (cl(e))
                  return (function Zm(e, t) {
                    return ml(ll(e), t);
                  })(e, t);
              }
              throw sl(e);
            })(e, t)
          : Dt(e);
      }
      function Dl(...e) {
        const t = hl(e),
          n = (function Um(e, t) {
            return "number" == typeof ki(e) ? e.pop() : t;
          })(e, 1 / 0),
          r = e;
        return r.length
          ? 1 === r.length
            ? Dt(r[0])
            : (function Hm(e = 1 / 0) {
                return Jr(Ku, e);
              })(n)(yl(r, t))
          : fl;
      }
      function ji(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new er({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return Dt(t(...n)).subscribe(r);
      }
      function G(e) {
        for (let t in e) if (e[t] === G) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function q(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(q).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function Hi(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const Xm = G({ __forward_ref__: G });
      function Vi(e) {
        return (
          (e.__forward_ref__ = Vi),
          (e.toString = function () {
            return q(this());
          }),
          e
        );
      }
      function S(e) {
        return (function $i(e) {
          return (
            "function" == typeof e &&
            e.hasOwnProperty(Xm) &&
            e.__forward_ref__ === Vi
          );
        })(e)
          ? e()
          : e;
      }
      function Ui(e) {
        return e && !!e.ɵproviders;
      }
      class C extends Error {
        constructor(t, n) {
          super(eo(t, n)), (this.code = t);
        }
      }
      function eo(e, t) {
        return `NG0${Math.abs(e)}${t ? ": " + t.trim() : ""}`;
      }
      function N(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function to(e, t) {
        throw new C(-201, !1);
      }
      function He(e, t) {
        null == e &&
          (function $(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function z(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Kt(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function no(e) {
        return wl(e, ro) || wl(e, _l);
      }
      function wl(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function El(e) {
        return e && (e.hasOwnProperty(zi) || e.hasOwnProperty(iy))
          ? e[zi]
          : null;
      }
      const ro = G({ ɵprov: G }),
        zi = G({ ɵinj: G }),
        _l = G({ ngInjectableDef: G }),
        iy = G({ ngInjectorDef: G });
      var T = (() => (
        ((T = T || {})[(T.Default = 0)] = "Default"),
        (T[(T.Host = 1)] = "Host"),
        (T[(T.Self = 2)] = "Self"),
        (T[(T.SkipSelf = 4)] = "SkipSelf"),
        (T[(T.Optional = 8)] = "Optional"),
        T
      ))();
      let Gi;
      function Ve(e) {
        const t = Gi;
        return (Gi = e), t;
      }
      function Cl(e, t, n) {
        const r = no(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & T.Optional
          ? null
          : void 0 !== t
          ? t
          : void to(q(e));
      }
      const K = (() =>
          (typeof globalThis < "u" && globalThis) ||
          (typeof global < "u" && global) ||
          (typeof window < "u" && window) ||
          (typeof self < "u" &&
            typeof WorkerGlobalScope < "u" &&
            self instanceof WorkerGlobalScope &&
            self))(),
        tr = {},
        Wi = "__NG_DI_FLAG__",
        oo = "ngTempTokenPath",
        ay = "ngTokenPath",
        uy = /\n/gm,
        ly = "\u0275",
        Il = "__source";
      let nr;
      function dn(e) {
        const t = nr;
        return (nr = e), t;
      }
      function cy(e, t = T.Default) {
        if (void 0 === nr) throw new C(-203, !1);
        return null === nr
          ? Cl(e, void 0, t)
          : nr.get(e, t & T.Optional ? null : void 0, t);
      }
      function O(e, t = T.Default) {
        return (
          (function sy() {
            return Gi;
          })() || cy
        )(S(e), t);
      }
      function rr(e, t = T.Default) {
        return O(e, io(t));
      }
      function io(e) {
        return typeof e > "u" || "number" == typeof e
          ? e
          : 0 |
              (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function qi(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = S(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new C(900, !1);
            let o,
              i = T.Default;
            for (let s = 0; s < r.length; s++) {
              const a = r[s],
                u = dy(a);
              "number" == typeof u
                ? -1 === u
                  ? (o = a.token)
                  : (i |= u)
                : (o = a);
            }
            t.push(O(o, i));
          } else t.push(O(r));
        }
        return t;
      }
      function dy(e) {
        return e[Wi];
      }
      function vt(e) {
        return { toString: e }.toString();
      }
      var st = (() => (
          ((st = st || {})[(st.OnPush = 0)] = "OnPush"),
          (st[(st.Default = 1)] = "Default"),
          st
        ))(),
        at = (() => {
          return (
            ((e = at || (at = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            at
          );
          var e;
        })();
      const wt = {},
        H = [],
        so = G({ ɵcmp: G }),
        Zi = G({ ɵdir: G }),
        Ki = G({ ɵpipe: G }),
        Sl = G({ ɵmod: G }),
        Et = G({ ɵfac: G }),
        ir = G({ __NG_ELEMENT_ID__: G });
      let py = 0;
      function Ml(e) {
        return vt(() => {
          const t = Al(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === st.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              data: e.data || {},
              encapsulation: e.encapsulation || at.Emulated,
              id: "c" + py++,
              styles: e.styles || H,
              _: null,
              schemas: e.schemas || null,
              tView: null,
            };
          Nl(n);
          const r = e.dependencies;
          return (n.directiveDefs = ao(r, !1)), (n.pipeDefs = ao(r, !0)), n;
        });
      }
      function my(e) {
        return U(e) || ye(e);
      }
      function yy(e) {
        return null !== e;
      }
      function fn(e) {
        return vt(() => ({
          type: e.type,
          bootstrap: e.bootstrap || H,
          declarations: e.declarations || H,
          imports: e.imports || H,
          exports: e.exports || H,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Tl(e, t) {
        if (null == e) return wt;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              i = o;
            Array.isArray(o) && ((i = o[1]), (o = o[0])),
              (n[o] = r),
              t && (t[o] = i);
          }
        return n;
      }
      function $e(e) {
        return vt(() => {
          const t = Al(e);
          return Nl(t), t;
        });
      }
      function U(e) {
        return e[so] || null;
      }
      function ye(e) {
        return e[Zi] || null;
      }
      function Ae(e) {
        return e[Ki] || null;
      }
      function Al(e) {
        const t = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: t,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          selectors: e.selectors || H,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Tl(e.inputs, t),
          outputs: Tl(e.outputs),
        };
      }
      function Nl(e) {
        e.features?.forEach((t) => t(e));
      }
      function ao(e, t) {
        if (!e) return null;
        const n = t ? Ae : my;
        return () =>
          ("function" == typeof e ? e() : e).map((r) => n(r)).filter(yy);
      }
      const _t = 0,
        _ = 1,
        x = 2,
        ee = 3,
        Ze = 4,
        Yt = 5,
        De = 6,
        hn = 7,
        ne = 8,
        uo = 9,
        lo = 10,
        L = 11,
        Yi = 12,
        ar = 13,
        Pl = 14,
        pn = 15,
        ve = 16,
        ur = 17,
        gn = 18,
        ut = 19,
        lr = 20,
        Fl = 21,
        Y = 22,
        Xi = 1,
        xl = 2,
        co = 7,
        fo = 8,
        mn = 9,
        Ce = 10;
      function Oe(e) {
        return Array.isArray(e) && "object" == typeof e[Xi];
      }
      function Ke(e) {
        return Array.isArray(e) && !0 === e[Xi];
      }
      function Qi(e) {
        return 0 != (4 & e.flags);
      }
      function cr(e) {
        return e.componentOffset > -1;
      }
      function ho(e) {
        return 1 == (1 & e.flags);
      }
      function Ye(e) {
        return !!e.template;
      }
      function vy(e) {
        return 0 != (256 & e[x]);
      }
      function Xt(e, t) {
        return e.hasOwnProperty(Et) ? e[Et] : null;
      }
      class Ll {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function kl(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = Cy), _y;
      }
      function _y() {
        const e = Bl(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === wt) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function Cy(e, t, n, r) {
        const o = this.declaredInputs[n],
          i =
            Bl(e) ||
            (function Iy(e, t) {
              return (e[jl] = t);
            })(e, { previous: wt, current: null }),
          s = i.current || (i.current = {}),
          a = i.previous,
          u = a[o];
        (s[o] = new Ll(u && u.currentValue, t, a === wt)), (e[r] = t);
      }
      const jl = "__ngSimpleChanges__";
      function Bl(e) {
        return e[jl] || null;
      }
      const Ue = function (e, t, n) {};
      function pe(e) {
        for (; Array.isArray(e); ) e = e[_t];
        return e;
      }
      function Le(e, t) {
        return pe(t[e.index]);
      }
      function $l(e, t) {
        return e.data[t];
      }
      function ke(e, t) {
        const n = t[e];
        return Oe(n) ? n : n[_t];
      }
      function mo(e) {
        return 64 == (64 & e[x]);
      }
      function kt(e, t) {
        return null == t ? null : e[t];
      }
      function Ul(e) {
        e[gn] = 0;
      }
      function es(e, t) {
        e[Yt] += t;
        let n = e,
          r = e[ee];
        for (
          ;
          null !== r && ((1 === t && 1 === n[Yt]) || (-1 === t && 0 === n[Yt]));

        )
          (r[Yt] += t), (n = r), (r = r[ee]);
      }
      const P = { lFrame: Jl(null), bindingsEnabled: !0 };
      function Gl() {
        return P.bindingsEnabled;
      }
      function D() {
        return P.lFrame.lView;
      }
      function B() {
        return P.lFrame.tView;
      }
      function ge() {
        let e = Wl();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Wl() {
        return P.lFrame.currentTNode;
      }
      function lt(e, t) {
        const n = P.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function ts() {
        return P.lFrame.isParent;
      }
      function Dn() {
        return P.lFrame.bindingIndex++;
      }
      function By(e, t) {
        const n = P.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), rs(t);
      }
      function rs(e) {
        P.lFrame.currentDirectiveIndex = e;
      }
      function is(e) {
        P.lFrame.currentQueryIndex = e;
      }
      function Vy(e) {
        const t = e[_];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[De] : null;
      }
      function Xl(e, t, n) {
        if (n & T.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & T.Host ||
              ((o = Vy(i)), null === o || ((i = i[pn]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (P.lFrame = Ql());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function ss(e) {
        const t = Ql(),
          n = e[_];
        (P.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Ql() {
        const e = P.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Jl(e) : t;
      }
      function Jl(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function ec() {
        const e = P.lFrame;
        return (
          (P.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const tc = ec;
      function as() {
        const e = ec();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function be() {
        return P.lFrame.selectedIndex;
      }
      function Qt(e) {
        P.lFrame.selectedIndex = e;
      }
      function yo(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: s,
              ngAfterContentChecked: a,
              ngAfterViewInit: u,
              ngAfterViewChecked: l,
              ngOnDestroy: c,
            } = i;
          s && (e.contentHooks || (e.contentHooks = [])).push(-n, s),
            a &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, a),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, a)),
            u && (e.viewHooks || (e.viewHooks = [])).push(-n, u),
            l &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, l),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, l)),
            null != c && (e.destroyHooks || (e.destroyHooks = [])).push(n, c);
        }
      }
      function Do(e, t, n) {
        nc(e, t, 3, n);
      }
      function vo(e, t, n, r) {
        (3 & e[x]) === n && nc(e, t, n, r);
      }
      function us(e, t) {
        let n = e[x];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[x] = n));
      }
      function nc(e, t, n, r) {
        const i = r ?? -1,
          s = t.length - 1;
        let a = 0;
        for (let u = void 0 !== r ? 65535 & e[gn] : 0; u < s; u++)
          if ("number" == typeof t[u + 1]) {
            if (((a = t[u]), null != r && a >= r)) break;
          } else
            t[u] < 0 && (e[gn] += 65536),
              (a < i || -1 == i) &&
                (Yy(e, n, t, u), (e[gn] = (4294901760 & e[gn]) + u + 2)),
              u++;
      }
      function Yy(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          a = e[o ? -n[r] : n[r]];
        if (o) {
          if (e[x] >> 11 < e[gn] >> 16 && (3 & e[x]) === t) {
            (e[x] += 2048), Ue(4, a, i);
            try {
              i.call(a);
            } finally {
              Ue(5, a, i);
            }
          }
        } else {
          Ue(4, a, i);
          try {
            i.call(a);
          } finally {
            Ue(5, a, i);
          }
        }
      }
      const vn = -1;
      class fr {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function cs(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if ("number" == typeof o) {
            if (0 !== o) break;
            r++;
            const i = n[r++],
              s = n[r++],
              a = n[r++];
            e.setAttribute(t, s, a, i);
          } else {
            const i = o,
              s = n[++r];
            oc(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
          }
        }
        return r;
      }
      function rc(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function oc(e) {
        return 64 === e.charCodeAt(0);
      }
      function hr(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              "number" == typeof o
                ? (n = o)
                : 0 === n ||
                  ic(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function ic(e, t, n, r, o) {
        let i = 0,
          s = e.length;
        if (-1 === t) s = -1;
        else
          for (; i < e.length; ) {
            const a = e[i++];
            if ("number" == typeof a) {
              if (a === t) {
                s = -1;
                break;
              }
              if (a > t) {
                s = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const a = e[i];
          if ("number" == typeof a) break;
          if (a === n) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== s && (e.splice(s, 0, t), (i = s + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      function sc(e) {
        return e !== vn;
      }
      function wo(e) {
        return 32767 & e;
      }
      function Eo(e, t) {
        let n = (function eD(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[pn]), n--;
        return r;
      }
      let ds = !0;
      function _o(e) {
        const t = ds;
        return (ds = e), t;
      }
      const ac = 255,
        uc = 5;
      let tD = 0;
      const ct = {};
      function Co(e, t) {
        const n = lc(e, t);
        if (-1 !== n) return n;
        const r = t[_];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          fs(r.data, e),
          fs(t, null),
          fs(r.blueprint, null));
        const o = hs(e, t),
          i = e.injectorIndex;
        if (sc(o)) {
          const s = wo(o),
            a = Eo(o, t),
            u = a[_].data;
          for (let l = 0; l < 8; l++) t[i + l] = a[s + l] | u[s + l];
        }
        return (t[i + 8] = o), i;
      }
      function fs(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function lc(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function hs(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = mc(o)), null === r)) return vn;
          if ((n++, (o = o[pn]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return vn;
      }
      function ps(e, t, n) {
        !(function nD(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(ir) && (r = n[ir]),
            null == r && (r = n[ir] = tD++);
          const o = r & ac;
          t.data[e + (o >> uc)] |= 1 << o;
        })(e, t, n);
      }
      function cc(e, t, n) {
        if (n & T.Optional || void 0 !== e) return e;
        to();
      }
      function dc(e, t, n, r) {
        if (
          (n & T.Optional && void 0 === r && (r = null),
          !(n & (T.Self | T.Host)))
        ) {
          const o = e[uo],
            i = Ve(void 0);
          try {
            return o ? o.get(t, r, n & T.Optional) : Cl(t, r, n & T.Optional);
          } finally {
            Ve(i);
          }
        }
        return cc(r, 0, n);
      }
      function fc(e, t, n, r = T.Default, o) {
        if (null !== e) {
          if (1024 & t[x]) {
            const s = (function uD(e, t, n, r, o) {
              let i = e,
                s = t;
              for (
                ;
                null !== i && null !== s && 1024 & s[x] && !(256 & s[x]);

              ) {
                const a = hc(i, s, n, r | T.Self, ct);
                if (a !== ct) return a;
                let u = i.parent;
                if (!u) {
                  const l = s[Fl];
                  if (l) {
                    const c = l.get(n, ct, r);
                    if (c !== ct) return c;
                  }
                  (u = mc(s)), (s = s[pn]);
                }
                i = u;
              }
              return o;
            })(e, t, n, r, ct);
            if (s !== ct) return s;
          }
          const i = hc(e, t, n, r, ct);
          if (i !== ct) return i;
        }
        return dc(t, n, r, o);
      }
      function hc(e, t, n, r, o) {
        const i = (function iD(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(ir) ? e[ir] : void 0;
          return "number" == typeof t ? (t >= 0 ? t & ac : sD) : t;
        })(n);
        if ("function" == typeof i) {
          if (!Xl(t, e, r)) return r & T.Host ? cc(o, 0, r) : dc(t, n, r, o);
          try {
            const s = i(r);
            if (null != s || r & T.Optional) return s;
            to();
          } finally {
            tc();
          }
        } else if ("number" == typeof i) {
          let s = null,
            a = lc(e, t),
            u = vn,
            l = r & T.Host ? t[ve][De] : null;
          for (
            (-1 === a || r & T.SkipSelf) &&
            ((u = -1 === a ? hs(e, t) : t[a + 8]),
            u !== vn && gc(r, !1)
              ? ((s = t[_]), (a = wo(u)), (t = Eo(u, t)))
              : (a = -1));
            -1 !== a;

          ) {
            const c = t[_];
            if (pc(i, a, c.data)) {
              const d = oD(a, t, n, s, r, l);
              if (d !== ct) return d;
            }
            (u = t[a + 8]),
              u !== vn && gc(r, t[_].data[a + 8] === l) && pc(i, a, t)
                ? ((s = c), (a = wo(u)), (t = Eo(u, t)))
                : (a = -1);
          }
        }
        return o;
      }
      function oD(e, t, n, r, o, i) {
        const s = t[_],
          a = s.data[e + 8],
          c = (function Io(e, t, n, r, o) {
            const i = e.providerIndexes,
              s = t.data,
              a = 1048575 & i,
              u = e.directiveStart,
              c = i >> 20,
              f = o ? a + c : e.directiveEnd;
            for (let h = r ? a : a + c; h < f; h++) {
              const p = s[h];
              if ((h < u && n === p) || (h >= u && p.type === n)) return h;
            }
            if (o) {
              const h = s[u];
              if (h && Ye(h) && h.type === n) return u;
            }
            return null;
          })(
            a,
            s,
            n,
            null == r ? cr(a) && ds : r != s && 0 != (3 & a.type),
            o & T.Host && i === a
          );
        return null !== c ? Jt(t, s, c, a) : ct;
      }
      function Jt(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function Xy(e) {
            return e instanceof fr;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function Qm(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new C(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function V(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                    null != e &&
                    "function" == typeof e.type
                  ? e.type.name || e.type.toString()
                  : N(e);
              })(i[n])
            );
          const a = _o(s.canSeeViewProviders);
          s.resolving = !0;
          const u = s.injectImpl ? Ve(s.injectImpl) : null;
          Xl(e, r, T.Default);
          try {
            (o = e[n] = s.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function Ky(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const s = kl(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, s);
                  }
                  o &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== u && Ve(u), _o(a), (s.resolving = !1), tc();
          }
        }
        return o;
      }
      function pc(e, t, n) {
        return !!(n[t + (e >> uc)] & (1 << e));
      }
      function gc(e, t) {
        return !(e & T.Self || (e & T.Host && t));
      }
      class wn {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return fc(this._tNode, this._lView, t, io(r), n);
        }
      }
      function sD() {
        return new wn(ge(), D());
      }
      function mc(e) {
        const t = e[_],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[De] : null;
      }
      class A {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = z({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function en(e, t) {
        e.forEach((n) => (Array.isArray(n) ? en(n, t) : t(n)));
      }
      function Dc(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function bo(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      var Ne = (() => (
        ((Ne = Ne || {})[(Ne.Important = 1)] = "Important"),
        (Ne[(Ne.DashCase = 2)] = "DashCase"),
        Ne
      ))();
      const bs = new Map();
      let RD = 0;
      const Ms = "__ngContext__";
      function we(e, t) {
        Oe(t)
          ? ((e[Ms] = t[lr]),
            (function LD(e) {
              bs.set(e[lr], e);
            })(t))
          : (e[Ms] = t);
      }
      let Ts;
      function As(e, t) {
        return Ts(e, t);
      }
      function wr(e) {
        const t = e[ee];
        return Ke(t) ? t[ee] : t;
      }
      function Ns(e) {
        return Bc(e[ar]);
      }
      function Ps(e) {
        return Bc(e[Ze]);
      }
      function Bc(e) {
        for (; null !== e && !Ke(e); ) e = e[Ze];
        return e;
      }
      function Mn(e, t, n, r, o) {
        if (null != r) {
          let i,
            s = !1;
          Ke(r) ? (i = r) : Oe(r) && ((s = !0), (r = r[_t]));
          const a = pe(r);
          0 === e && null !== n
            ? null == o
              ? Gc(t, n, a)
              : tn(t, n, a, o || null, !0)
            : 1 === e && null !== n
            ? tn(t, n, a, o || null, !0)
            : 2 === e
            ? (function js(e, t, n) {
                const r = Po(e, t);
                r &&
                  (function nv(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, a, s)
            : 3 === e && t.destroyNode(a),
            null != i &&
              (function iv(e, t, n, r, o) {
                const i = n[co];
                i !== pe(n) && Mn(t, e, r, i, o);
                for (let a = Ce; a < n.length; a++) {
                  const u = n[a];
                  Er(u[_], u, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function xs(e, t, n) {
        return e.createElement(t, n);
      }
      function Vc(e, t) {
        const n = e[mn],
          r = n.indexOf(t),
          o = t[ee];
        512 & t[x] && ((t[x] &= -513), es(o, -1)), n.splice(r, 1);
      }
      function Rs(e, t) {
        if (e.length <= Ce) return;
        const n = Ce + t,
          r = e[n];
        if (r) {
          const o = r[ur];
          null !== o && o !== e && Vc(o, r), t > 0 && (e[n - 1][Ze] = r[Ze]);
          const i = bo(e, Ce + t);
          !(function ZD(e, t) {
            Er(e, t, t[L], 2, null, null), (t[_t] = null), (t[De] = null);
          })(r[_], r);
          const s = i[ut];
          null !== s && s.detachView(i[_]),
            (r[ee] = null),
            (r[Ze] = null),
            (r[x] &= -65);
        }
        return r;
      }
      function $c(e, t) {
        if (!(128 & t[x])) {
          const n = t[L];
          n.destroyNode && Er(e, t, n, 3, null, null),
            (function XD(e) {
              let t = e[ar];
              if (!t) return Os(e[_], e);
              for (; t; ) {
                let n = null;
                if (Oe(t)) n = t[ar];
                else {
                  const r = t[Ce];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[Ze] && t !== e; )
                    Oe(t) && Os(t[_], t), (t = t[ee]);
                  null === t && (t = e), Oe(t) && Os(t[_], t), (n = t && t[Ze]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Os(e, t) {
        if (!(128 & t[x])) {
          (t[x] &= -65),
            (t[x] |= 128),
            (function tv(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof fr)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const a = o[i[s]],
                          u = i[s + 1];
                        Ue(4, a, u);
                        try {
                          u.call(a);
                        } finally {
                          Ue(5, a, u);
                        }
                      }
                    else {
                      Ue(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        Ue(5, o, i);
                      }
                    }
                  }
                }
            })(e, t),
            (function ev(e, t) {
              const n = e.cleanup,
                r = t[hn];
              let o = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const s = n[i + 3];
                    s >= 0 ? r[(o = s)]() : r[(o = -s)].unsubscribe(), (i += 2);
                  } else {
                    const s = r[(o = n[i + 1])];
                    n[i].call(s);
                  }
              if (null !== r) {
                for (let i = o + 1; i < r.length; i++) (0, r[i])();
                t[hn] = null;
              }
            })(e, t),
            1 === t[_].type && t[L].destroy();
          const n = t[ur];
          if (null !== n && Ke(t[ee])) {
            n !== t[ee] && Vc(n, t);
            const r = t[ut];
            null !== r && r.detachView(e);
          }
          !(function kD(e) {
            bs.delete(e[lr]);
          })(t);
        }
      }
      function Uc(e, t, n) {
        return (function zc(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[_t];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } = e.data[r.directiveStart + o];
              if (i === at.None || i === at.Emulated) return null;
            }
            return Le(r, n);
          }
        })(e, t.parent, n);
      }
      function tn(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function Gc(e, t, n) {
        e.appendChild(t, n);
      }
      function Wc(e, t, n, r, o) {
        null !== r ? tn(e, t, n, r, o) : Gc(e, t, n);
      }
      function Po(e, t) {
        return e.parentNode(t);
      }
      let Ls,
        Vs,
        Kc = function Zc(e, t, n) {
          return 40 & e.type ? Le(e, n) : null;
        };
      function Fo(e, t, n, r) {
        const o = Uc(e, r, t),
          i = t[L],
          a = (function qc(e, t, n) {
            return Kc(e, t, n);
          })(r.parent || t[De], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let u = 0; u < n.length; u++) Wc(i, o, n[u], a, !1);
          else Wc(i, o, n, a, !1);
        void 0 !== Ls && Ls(i, r, t, n, o);
      }
      function xo(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return Le(t, e);
          if (4 & n) return ks(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return xo(e, r);
            {
              const o = e[t.index];
              return Ke(o) ? ks(-1, o) : pe(o);
            }
          }
          if (32 & n) return As(t, e)() || pe(e[t.index]);
          {
            const r = Xc(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : xo(wr(e[ve]), r)
              : xo(e, t.next);
          }
        }
        return null;
      }
      function Xc(e, t) {
        return null !== t ? e[ve][De].projection[t.projection] : null;
      }
      function ks(e, t) {
        const n = Ce + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[_].firstChild;
          if (null !== o) return xo(r, o);
        }
        return t[co];
      }
      function Bs(e, t, n, r, o, i, s) {
        for (; null != n; ) {
          const a = r[n.index],
            u = n.type;
          if (
            (s && 0 === t && (a && we(pe(a), r), (n.flags |= 2)),
            32 != (32 & n.flags))
          )
            if (8 & u) Bs(e, t, n.child, r, o, i, !1), Mn(t, e, o, a, i);
            else if (32 & u) {
              const l = As(n, r);
              let c;
              for (; (c = l()); ) Mn(t, e, o, c, i);
              Mn(t, e, o, a, i);
            } else 16 & u ? Qc(e, t, r, n, o, i) : Mn(t, e, o, a, i);
          n = s ? n.projectionNext : n.next;
        }
      }
      function Er(e, t, n, r, o, i) {
        Bs(n, r, e.firstChild, t, o, i, !1);
      }
      function Qc(e, t, n, r, o, i) {
        const s = n[ve],
          u = s[De].projection[r.projection];
        if (Array.isArray(u))
          for (let l = 0; l < u.length; l++) Mn(t, e, o, u[l], i);
        else Bs(e, t, u, s[ee], o, i, !0);
      }
      function Jc(e, t, n) {
        "" === n
          ? e.removeAttribute(t, "class")
          : e.setAttribute(t, "class", n);
      }
      function ed(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && cs(e, t, r),
          null !== o && Jc(e, t, o),
          null !== i &&
            (function av(e, t, n) {
              e.setAttribute(t, "style", n);
            })(e, t, i);
      }
      const pd = new A("ENVIRONMENT_INITIALIZER"),
        gd = new A("INJECTOR", -1),
        md = new A("INJECTOR_DEF_TYPES");
      class yd {
        get(t, n = tr) {
          if (n === tr) {
            const r = new Error(`NullInjectorError: No provider for ${q(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      function Lv(...e) {
        return { ɵproviders: Dd(0, e), ɵfromNgModule: !0 };
      }
      function Dd(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        return (
          en(t, (i) => {
            const s = i;
            qs(s, n, [], r) && (o || (o = []), o.push(s));
          }),
          void 0 !== o && vd(o, n),
          n
        );
      }
      function vd(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: o } = e[n];
          Zs(o, (i) => {
            t.push(i);
          });
        }
      }
      function qs(e, t, n, r) {
        if (!(e = S(e))) return !1;
        let o = null,
          i = El(e);
        const s = !i && U(e);
        if (i || s) {
          if (s && !s.standalone) return !1;
          o = e;
        } else {
          const u = e.ngModule;
          if (((i = El(u)), !i)) return !1;
          o = u;
        }
        const a = r.has(o);
        if (s) {
          if (a) return !1;
          if ((r.add(o), s.dependencies)) {
            const u =
              "function" == typeof s.dependencies
                ? s.dependencies()
                : s.dependencies;
            for (const l of u) qs(l, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !a) {
              let l;
              r.add(o);
              try {
                en(i.imports, (c) => {
                  qs(c, t, n, r) && (l || (l = []), l.push(c));
                });
              } finally {
              }
              void 0 !== l && vd(l, t);
            }
            if (!a) {
              const l = Xt(o) || (() => new o());
              t.push(
                { provide: o, useFactory: l, deps: H },
                { provide: md, useValue: o, multi: !0 },
                { provide: pd, useValue: () => O(o), multi: !0 }
              );
            }
            const u = i.providers;
            null == u ||
              a ||
              Zs(u, (c) => {
                t.push(c);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Zs(e, t) {
        for (let n of e)
          Ui(n) && (n = n.ɵproviders), Array.isArray(n) ? Zs(n, t) : t(n);
      }
      const kv = G({ provide: String, useValue: G });
      function Ks(e) {
        return null !== e && "object" == typeof e && kv in e;
      }
      function nn(e) {
        return "function" == typeof e;
      }
      const Ys = new A("Set Injector scope."),
        ko = {},
        Bv = {};
      let Xs;
      function jo() {
        return void 0 === Xs && (Xs = new yd()), Xs;
      }
      class rn {}
      class _d extends rn {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Js(t, (s) => this.processProvider(s)),
            this.records.set(gd, An(void 0, this)),
            o.has("environment") && this.records.set(rn, An(void 0, this));
          const i = this.records.get(Ys);
          null != i && "string" == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(md.multi, H, T.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = dn(this),
            r = Ve(void 0);
          try {
            return t();
          } finally {
            dn(n), Ve(r);
          }
        }
        get(t, n = tr, r = T.Default) {
          this.assertNotDestroyed(), (r = io(r));
          const o = dn(this),
            i = Ve(void 0);
          try {
            if (!(r & T.SkipSelf)) {
              let a = this.records.get(t);
              if (void 0 === a) {
                const u =
                  (function zv(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof A)
                    );
                  })(t) && no(t);
                (a = u && this.injectableDefInScope(u) ? An(Qs(t), ko) : null),
                  this.records.set(t, a);
              }
              if (null != a) return this.hydrate(t, a);
            }
            return (r & T.Self ? jo() : this.parent).get(
              t,
              (n = r & T.Optional && n === tr ? null : n)
            );
          } catch (s) {
            if ("NullInjectorError" === s.name) {
              if (((s[oo] = s[oo] || []).unshift(q(t)), o)) throw s;
              return (function fy(e, t, n, r) {
                const o = e[oo];
                throw (
                  (t[Il] && o.unshift(t[Il]),
                  (e.message = (function hy(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && e.charAt(1) == ly
                        ? e.slice(2)
                        : e;
                    let o = q(t);
                    if (Array.isArray(t)) o = t.map(q).join(" -> ");
                    else if ("object" == typeof t) {
                      let i = [];
                      for (let s in t)
                        if (t.hasOwnProperty(s)) {
                          let a = t[s];
                          i.push(
                            s +
                              ":" +
                              ("string" == typeof a ? JSON.stringify(a) : q(a))
                          );
                        }
                      o = `{${i.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
                      uy,
                      "\n  "
                    )}`;
                  })("\n" + e.message, o, n, r)),
                  (e[ay] = o),
                  (e[oo] = null),
                  e)
                );
              })(s, t, "R3InjectorError", this.source);
            }
            throw s;
          } finally {
            Ve(i), dn(o);
          }
        }
        resolveInjectorInitializers() {
          const t = dn(this),
            n = Ve(void 0);
          try {
            const r = this.get(pd.multi, H, T.Self);
            for (const o of r) o();
          } finally {
            dn(t), Ve(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(q(r));
          return `R3Injector[${t.join(", ")}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new C(205, !1);
        }
        processProvider(t) {
          let n = nn((t = S(t))) ? t : S(t && t.provide);
          const r = (function Vv(e) {
            return Ks(e)
              ? An(void 0, e.useValue)
              : An(
                  (function Cd(e, t, n) {
                    let r;
                    if (nn(e)) {
                      const o = S(e);
                      return Xt(o) || Qs(o);
                    }
                    if (Ks(e)) r = () => S(e.useValue);
                    else if (
                      (function Ed(e) {
                        return !(!e || !e.useFactory);
                      })(e)
                    )
                      r = () => e.useFactory(...qi(e.deps || []));
                    else if (
                      (function wd(e) {
                        return !(!e || !e.useExisting);
                      })(e)
                    )
                      r = () => O(S(e.useExisting));
                    else {
                      const o = S(e && (e.useClass || e.provide));
                      if (
                        !(function $v(e) {
                          return !!e.deps;
                        })(e)
                      )
                        return Xt(o) || Qs(o);
                      r = () => new o(...qi(e.deps));
                    }
                    return r;
                  })(e),
                  ko
                );
          })(t);
          if (nn(t) || !0 !== t.multi) this.records.get(n);
          else {
            let o = this.records.get(n);
            o ||
              ((o = An(void 0, ko, !0)),
              (o.factory = () => qi(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === ko && ((n.value = Bv), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function Uv(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = S(t.providedIn);
          return "string" == typeof n
            ? "any" === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function Qs(e) {
        const t = no(e),
          n = null !== t ? t.factory : Xt(e);
        if (null !== n) return n;
        if (e instanceof A) throw new C(204, !1);
        if (e instanceof Function)
          return (function Hv(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function mr(e, t) {
                  const n = [];
                  for (let r = 0; r < e; r++) n.push(t);
                  return n;
                })(t, "?"),
                new C(204, !1))
              );
            const n = (function ry(e) {
              const t = e && (e[ro] || e[_l]);
              return t
                ? ((function oy(e) {
                    if (e.hasOwnProperty("name")) return e.name;
                    ("" + e).match(/^function\s*([^\s(]+)/);
                  })(e),
                  t)
                : null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new C(204, !1);
      }
      function An(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Js(e, t) {
        for (const n of e)
          Array.isArray(n) ? Js(n, t) : n && Ui(n) ? Js(n.ɵproviders, t) : t(n);
      }
      class Gv {}
      class Id {}
      class qv {
        resolveComponentFactory(t) {
          throw (function Wv(e) {
            const t = Error(
              `No component factory found for ${q(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Nn = (() => {
        class e {}
        return (e.NULL = new qv()), e;
      })();
      function Zv() {
        return Pn(ge(), D());
      }
      function Pn(e, t) {
        return new Fn(Le(e, t));
      }
      let Fn = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = Zv), e;
      })();
      class Sd {}
      let Xv = (() => {
        class e {}
        return (
          (e.ɵprov = z({ token: e, providedIn: "root", factory: () => null })),
          e
        );
      })();
      class Bo {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const Qv = new Bo("15.2.3"),
        ea = {},
        ta = "ngOriginalError";
      function na(e) {
        return e[ta];
      }
      class xn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error("ERROR", t),
            n && this._console.error("ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && na(t);
          for (; n && na(n); ) n = na(n);
          return n || null;
        }
      }
      function Ad(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const Nd = "ng-template";
      function lw(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (n && "class" === o) {
            if (((o = e[r]), -1 !== Ad(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && "string" == typeof (o = e[r++]); )
              if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Pd(e) {
        return 4 === e.type && e.value !== Nd;
      }
      function cw(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Nd);
      }
      function dw(e, t, n) {
        let r = 4;
        const o = e.attrs || [],
          i = (function pw(e) {
            for (let t = 0; t < e.length; t++) if (rc(e[t])) return t;
            return e.length;
          })(o);
        let s = !1;
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          if ("number" != typeof u) {
            if (!s)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== u && !cw(e, u, n)) || ("" === u && 1 === t.length))
                ) {
                  if (Xe(r)) return !1;
                  s = !0;
                }
              } else {
                const l = 8 & r ? u : t[++a];
                if (8 & r && null !== e.attrs) {
                  if (!lw(e.attrs, l, n)) {
                    if (Xe(r)) return !1;
                    s = !0;
                  }
                  continue;
                }
                const d = fw(8 & r ? "class" : u, o, Pd(e), n);
                if (-1 === d) {
                  if (Xe(r)) return !1;
                  s = !0;
                  continue;
                }
                if ("" !== l) {
                  let f;
                  f = d > i ? "" : o[d + 1].toLowerCase();
                  const h = 8 & r ? f : null;
                  if ((h && -1 !== Ad(h, l, 0)) || (2 & r && l !== f)) {
                    if (Xe(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !Xe(r) && !Xe(u)) return !1;
            if (s && Xe(u)) continue;
            (s = !1), (r = u | (1 & r));
          }
        }
        return Xe(r) || s;
      }
      function Xe(e) {
        return 0 == (1 & e);
      }
      function fw(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const s = t[o];
            if (s === e) return o;
            if (3 === s || 6 === s) i = !0;
            else {
              if (1 === s || 2 === s) {
                let a = t[++o];
                for (; "string" == typeof a; ) a = t[++o];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function gw(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Fd(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (dw(e, t[r], n)) return !0;
        return !1;
      }
      function xd(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function yw(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = "",
          i = !1;
        for (; n < e.length; ) {
          let s = e[n];
          if ("string" == typeof s)
            if (2 & r) {
              const a = e[++n];
              o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
            } else 8 & r ? (o += "." + s) : 4 & r && (o += " " + s);
          else
            "" !== o && !Xe(s) && ((t += xd(i, o)), (o = "")),
              (r = s),
              (i = i || !Xe(r));
          n++;
        }
        return "" !== o && (t += xd(i, o)), t;
      }
      const F = {};
      function Bt(e) {
        Rd(B(), D(), be() + e, !1);
      }
      function Rd(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[x])) {
            const i = e.preOrderCheckHooks;
            null !== i && Do(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && vo(t, i, 0, n);
          }
        Qt(n);
      }
      function jd(e, t = null, n = null, r) {
        const o = Bd(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function Bd(e, t = null, n = null, r, o = new Set()) {
        const i = [n || H, Lv(e)];
        return (
          (r = r || ("object" == typeof e ? void 0 : q(e))),
          new _d(i, t || jo(), r || null, o)
        );
      }
      let Mt = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return jd({ name: "" }, r, n, "");
            {
              const o = n.name ?? "";
              return jd({ name: o }, n.parent, n.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = tr),
          (e.NULL = new yd()),
          (e.ɵprov = z({ token: e, providedIn: "any", factory: () => O(gd) })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function k(e, t = T.Default) {
        const n = D();
        return null === n ? O(e, t) : fc(ge(), n, S(e), t);
      }
      function Wd(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const i = n[r + 1];
            if (-1 !== i) {
              const s = e.data[i];
              is(n[r]), s.contentQueries(2, t[i], i);
            }
          }
      }
      function Vo(e, t, n, r, o, i, s, a, u, l, c) {
        const d = t.blueprint.slice();
        return (
          (d[_t] = o),
          (d[x] = 76 | r),
          (null !== c || (e && 1024 & e[x])) && (d[x] |= 1024),
          Ul(d),
          (d[ee] = d[pn] = e),
          (d[ne] = n),
          (d[lo] = s || (e && e[lo])),
          (d[L] = a || (e && e[L])),
          (d[Yi] = u || (e && e[Yi]) || null),
          (d[uo] = l || (e && e[uo]) || null),
          (d[De] = i),
          (d[lr] = (function OD() {
            return RD++;
          })()),
          (d[Fl] = c),
          (d[ve] = 2 == t.type ? e[ve] : d),
          d
        );
      }
      function Ln(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function aa(e, t, n, r, o) {
            const i = Wl(),
              s = ts(),
              u = (e.data[t] = (function zw(e, t, n, r, o, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  componentOffset: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tView: null,
                  next: null,
                  prev: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, s ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = u),
              null !== i &&
                (s
                  ? null == i.child && null !== u.parent && (i.child = u)
                  : null === i.next && ((i.next = u), (u.prev = i))),
              u
            );
          })(e, t, n, r, o)),
            (function jy() {
              return P.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const s = (function dr() {
            const e = P.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return lt(i, !0), i;
      }
      function br(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function ua(e, t, n) {
        ss(t);
        try {
          const r = e.viewQuery;
          null !== r && Da(1, r, n);
          const o = e.template;
          null !== o && qd(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Wd(e, t),
            e.staticViewQueries && Da(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function Vw(e, t) {
              for (let n = 0; n < t.length; n++) lE(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[x] &= -5), as();
        }
      }
      function $o(e, t, n, r) {
        const o = t[x];
        if (128 != (128 & o)) {
          ss(t);
          try {
            Ul(t),
              (function Zl(e) {
                return (P.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && qd(e, t, n, 2, r);
            const s = 3 == (3 & o);
            if (s) {
              const l = e.preOrderCheckHooks;
              null !== l && Do(t, l, null);
            } else {
              const l = e.preOrderHooks;
              null !== l && vo(t, l, 0, null), us(t, 0);
            }
            if (
              ((function aE(e) {
                for (let t = Ns(e); null !== t; t = Ps(t)) {
                  if (!t[xl]) continue;
                  const n = t[mn];
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    512 & o[x] || es(o[ee], 1), (o[x] |= 512);
                  }
                }
              })(t),
              (function sE(e) {
                for (let t = Ns(e); null !== t; t = Ps(t))
                  for (let n = Ce; n < t.length; n++) {
                    const r = t[n],
                      o = r[_];
                    mo(r) && $o(o, r, o.template, r[ne]);
                  }
              })(t),
              null !== e.contentQueries && Wd(e, t),
              s)
            ) {
              const l = e.contentCheckHooks;
              null !== l && Do(t, l);
            } else {
              const l = e.contentHooks;
              null !== l && vo(t, l, 1), us(t, 1);
            }
            !(function Bw(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (o < 0) Qt(~o);
                    else {
                      const i = o,
                        s = n[++r],
                        a = n[++r];
                      By(s, i), a(2, t[i]);
                    }
                  }
                } finally {
                  Qt(-1);
                }
            })(e, t);
            const a = e.components;
            null !== a &&
              (function Hw(e, t) {
                for (let n = 0; n < t.length; n++) uE(e, t[n]);
              })(t, a);
            const u = e.viewQuery;
            if ((null !== u && Da(2, u, r), s)) {
              const l = e.viewCheckHooks;
              null !== l && Do(t, l);
            } else {
              const l = e.viewHooks;
              null !== l && vo(t, l, 2), us(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[x] &= -41),
              512 & t[x] && ((t[x] &= -513), es(t[ee], -1));
          } finally {
            as();
          }
        }
      }
      function qd(e, t, n, r, o) {
        const i = be(),
          s = 2 & r;
        try {
          Qt(-1),
            s && t.length > Y && Rd(e, t, Y, !1),
            Ue(s ? 2 : 0, o),
            n(r, o);
        } finally {
          Qt(i), Ue(s ? 3 : 1, o);
        }
      }
      function la(e, t, n) {
        if (Qi(t)) {
          const o = t.directiveEnd;
          for (let i = t.directiveStart; i < o; i++) {
            const s = e.data[i];
            s.contentQueries && s.contentQueries(1, n[i], i);
          }
        }
      }
      function ca(e, t, n) {
        Gl() &&
          ((function Yw(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            cr(n) &&
              (function rE(e, t, n) {
                const r = Le(t, e),
                  o = Zd(n),
                  i = e[lo],
                  s = Uo(
                    e,
                    Vo(
                      e,
                      o,
                      null,
                      n.onPush ? 32 : 16,
                      r,
                      t,
                      i,
                      i.createRenderer(r, n),
                      null,
                      null,
                      null
                    )
                  );
                e[t.index] = s;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || Co(n, t),
              we(r, t);
            const s = n.initialInputs;
            for (let a = o; a < i; a++) {
              const u = e.data[a],
                l = Jt(t, e, a, n);
              we(l, t),
                null !== s && oE(0, a - o, l, u, 0, s),
                Ye(u) && (ke(n.index, t)[ne] = Jt(t, e, a, n));
            }
          })(e, t, n, Le(n, t)),
          64 == (64 & n.flags) && ef(e, t, n));
      }
      function da(e, t, n = Le) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const s = r[i + 1],
              a = -1 === s ? n(t, e) : e[s];
            e[o++] = a;
          }
        }
      }
      function Zd(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = fa(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function fa(e, t, n, r, o, i, s, a, u, l) {
        const c = Y + r,
          d = c + o,
          f = (function $w(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : F);
            return n;
          })(c, d),
          h = "function" == typeof l ? l() : l;
        return (f[_] = {
          type: e,
          blueprint: f,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: t,
          data: f.slice().fill(null, c),
          bindingStartIndex: c,
          expandoStartIndex: d,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof s ? s() : s,
          firstChild: null,
          schemas: u,
          consts: h,
          incompleteFirstPass: !1,
        });
      }
      function Yd(e, t, n, r) {
        for (let o in e)
          if (e.hasOwnProperty(o)) {
            n = null === n ? {} : n;
            const i = e[o];
            null === r
              ? Xd(n, t, o, i)
              : r.hasOwnProperty(o) && Xd(n, t, r[o], i);
          }
        return n;
      }
      function Xd(e, t, n, r) {
        e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
      }
      function Qd(e, t) {
        const n = ke(t, e);
        16 & n[x] || (n[x] |= 32);
      }
      function ha(e, t, n, r) {
        if (Gl()) {
          const o = null === r ? null : { "": -1 },
            i = (function Qw(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let i = 0; i < n.length; i++) {
                  const s = n[i];
                  if (Fd(t, s.selectors, !1))
                    if ((r || (r = []), Ye(s)))
                      if (null !== s.findHostDirectiveDefs) {
                        const a = [];
                        (o = o || new Map()),
                          s.findHostDirectiveDefs(s, a, o),
                          r.unshift(...a, s),
                          pa(e, t, a.length);
                      } else r.unshift(s), pa(e, t, 0);
                    else
                      (o = o || new Map()),
                        s.findHostDirectiveDefs?.(s, r, o),
                        r.push(s);
                }
              return null === r ? null : [r, o];
            })(e, n);
          let s, a;
          null === i ? (s = a = null) : ([s, a] = i),
            null !== s && Jd(e, t, n, s, o, a),
            o &&
              (function Jw(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let o = 0; o < t.length; o += 2) {
                    const i = n[t[o + 1]];
                    if (null == i) throw new C(-301, !1);
                    r.push(t[o], i);
                  }
                }
              })(n, r, o);
        }
        n.mergedAttrs = hr(n.mergedAttrs, n.attrs);
      }
      function Jd(e, t, n, r, o, i) {
        for (let l = 0; l < r.length; l++) ps(Co(n, t), e, r[l].type);
        !(function tE(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let l = 0; l < r.length; l++) {
          const c = r[l];
          c.providersResolver && c.providersResolver(c);
        }
        let s = !1,
          a = !1,
          u = br(e, t, r.length, null);
        for (let l = 0; l < r.length; l++) {
          const c = r[l];
          (n.mergedAttrs = hr(n.mergedAttrs, c.hostAttrs)),
            nE(e, n, t, u, c),
            eE(u, c, o),
            null !== c.contentQueries && (n.flags |= 4),
            (null !== c.hostBindings ||
              null !== c.hostAttrs ||
              0 !== c.hostVars) &&
              (n.flags |= 64);
          const d = c.type.prototype;
          !s &&
            (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
            ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
            (s = !0)),
            !a &&
              (d.ngOnChanges || d.ngDoCheck) &&
              ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                n.index
              ),
              (a = !0)),
            u++;
        }
        !(function Gw(e, t, n) {
          const o = t.directiveEnd,
            i = e.data,
            s = t.attrs,
            a = [];
          let u = null,
            l = null;
          for (let c = t.directiveStart; c < o; c++) {
            const d = i[c],
              f = n ? n.get(d) : null,
              p = f ? f.outputs : null;
            (u = Yd(d.inputs, c, u, f ? f.inputs : null)),
              (l = Yd(d.outputs, c, l, p));
            const g = null === u || null === s || Pd(t) ? null : iE(u, c, s);
            a.push(g);
          }
          null !== u &&
            (u.hasOwnProperty("class") && (t.flags |= 8),
            u.hasOwnProperty("style") && (t.flags |= 16)),
            (t.initialInputs = a),
            (t.inputs = u),
            (t.outputs = l);
        })(e, n, i);
      }
      function ef(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          s = (function Hy() {
            return P.lFrame.currentDirectiveIndex;
          })();
        try {
          Qt(i);
          for (let a = r; a < o; a++) {
            const u = e.data[a],
              l = t[a];
            rs(a),
              (null !== u.hostBindings ||
                0 !== u.hostVars ||
                null !== u.hostAttrs) &&
                Xw(u, l);
          }
        } finally {
          Qt(-1), rs(s);
        }
      }
      function Xw(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function pa(e, t, n) {
        (t.componentOffset = n),
          (e.components || (e.components = [])).push(t.index);
      }
      function eE(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Ye(t) && (n[""] = e);
        }
      }
      function nE(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Xt(o.type)),
          s = new fr(i, Ye(o), k);
        (e.blueprint[r] = s),
          (n[r] = s),
          (function Zw(e, t, n, r, o) {
            const i = o.hostBindings;
            if (i) {
              let s = e.hostBindingOpCodes;
              null === s && (s = e.hostBindingOpCodes = []);
              const a = ~t.index;
              (function Kw(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ("number" == typeof n && n < 0) return n;
                }
                return 0;
              })(s) != a && s.push(a),
                s.push(n, r, i);
            }
          })(e, t, r, br(e, n, o.hostVars, F), o);
      }
      function oE(e, t, n, r, o, i) {
        const s = i[t];
        if (null !== s) {
          const a = r.setInput;
          for (let u = 0; u < s.length; ) {
            const l = s[u++],
              c = s[u++],
              d = s[u++];
            null !== a ? r.setInput(n, d, l, c) : (n[c] = d);
          }
        }
      }
      function iE(e, t, n) {
        let r = null,
          o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (0 !== i)
            if (5 !== i) {
              if ("number" == typeof i) break;
              if (e.hasOwnProperty(i)) {
                null === r && (r = []);
                const s = e[i];
                for (let a = 0; a < s.length; a += 2)
                  if (s[a] === t) {
                    r.push(i, s[a + 1], n[o + 1]);
                    break;
                  }
              }
              o += 2;
            } else o += 2;
          else o += 4;
        }
        return r;
      }
      function tf(e, t, n, r) {
        return [e, !0, !1, t, null, 0, r, n, null, null];
      }
      function uE(e, t) {
        const n = ke(t, e);
        if (mo(n)) {
          const r = n[_];
          48 & n[x] ? $o(r, n, r.template, n[ne]) : n[Yt] > 0 && ma(n);
        }
      }
      function ma(e) {
        for (let r = Ns(e); null !== r; r = Ps(r))
          for (let o = Ce; o < r.length; o++) {
            const i = r[o];
            if (mo(i))
              if (512 & i[x]) {
                const s = i[_];
                $o(s, i, s.template, i[ne]);
              } else i[Yt] > 0 && ma(i);
          }
        const n = e[_].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = ke(n[r], e);
            mo(o) && o[Yt] > 0 && ma(o);
          }
      }
      function lE(e, t) {
        const n = ke(t, e),
          r = n[_];
        (function cE(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          ua(r, n, n[ne]);
      }
      function Uo(e, t) {
        return e[ar] ? (e[Pl][Ze] = t) : (e[ar] = t), (e[Pl] = t), t;
      }
      function ya(e) {
        for (; e; ) {
          e[x] |= 32;
          const t = wr(e);
          if (vy(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function zo(e, t, n, r = !0) {
        const o = t[lo];
        o.begin && o.begin();
        try {
          $o(e, t, e.template, n);
        } catch (s) {
          throw (r && sf(t, s), s);
        } finally {
          o.end && o.end();
        }
      }
      function Da(e, t, n) {
        is(0), t(e, n);
      }
      function nf(e) {
        return e[hn] || (e[hn] = []);
      }
      function rf(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function sf(e, t) {
        const n = e[uo],
          r = n ? n.get(xn, null) : null;
        r && r.handleError(t);
      }
      function va(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const s = n[i++],
            a = n[i++],
            u = t[s],
            l = e.data[s];
          null !== l.setInput ? l.setInput(u, o, r, a) : (u[a] = o);
        }
      }
      function Tt(e, t, n) {
        const r = (function go(e, t) {
          return pe(t[e]);
        })(t, e);
        !(function Hc(e, t, n) {
          e.setValue(t, n);
        })(e[L], r, n);
      }
      function Go(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const a = t[s];
            "number" == typeof a
              ? (i = a)
              : 1 == i
              ? (o = Hi(o, a))
              : 2 == i && (r = Hi(r, a + ": " + t[++s] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function Wo(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(pe(i)), Ke(i)))
            for (let a = Ce; a < i.length; a++) {
              const u = i[a],
                l = u[_].firstChild;
              null !== l && Wo(u[_], u, l, r);
            }
          const s = n.type;
          if (8 & s) Wo(e, t, n.child, r);
          else if (32 & s) {
            const a = As(n, t);
            let u;
            for (; (u = a()); ) r.push(u);
          } else if (16 & s) {
            const a = Xc(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
              const u = wr(t[ve]);
              Wo(u[_], u, a, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      class Sr {
        get rootNodes() {
          const t = this._lView,
            n = t[_];
          return Wo(n, t, n.firstChild, []);
        }
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[ne];
        }
        set context(t) {
          this._lView[ne] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[x]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[ee];
            if (Ke(t)) {
              const n = t[fo],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Rs(t, r), bo(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          $c(this._lView[_], this._lView);
        }
        onDestroy(t) {
          !(function Kd(e, t, n, r) {
            const o = nf(t);
            null === n
              ? o.push(r)
              : (o.push(n), e.firstCreatePass && rf(e).push(r, o.length - 1));
          })(this._lView[_], this._lView, null, t);
        }
        markForCheck() {
          ya(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[x] &= -65;
        }
        reattach() {
          this._lView[x] |= 64;
        }
        detectChanges() {
          zo(this._lView[_], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new C(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function YD(e, t) {
              Er(e, t, t[L], 2, null, null);
            })(this._lView[_], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new C(902, !1);
          this._appRef = t;
        }
      }
      class dE extends Sr {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          zo(t[_], t, t[ne], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class af extends Nn {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = U(t);
          return new Mr(n, this.ngModule);
        }
      }
      function uf(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class hE {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = io(r);
          const o = this.injector.get(t, ea, r);
          return o !== ea || n === ea ? o : this.parentInjector.get(t, n, r);
        }
      }
      class Mr extends Id {
        get inputs() {
          return uf(this.componentDef.inputs);
        }
        get outputs() {
          return uf(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function Dw(e) {
              return e.map(yw).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, o) {
          let i = (o = o || this.ngModule) instanceof rn ? o : o?.injector;
          i &&
            null !== this.componentDef.getStandaloneInjector &&
            (i = this.componentDef.getStandaloneInjector(i) || i);
          const s = i ? new hE(t, i) : t,
            a = s.get(Sd, null);
          if (null === a) throw new C(407, !1);
          const u = s.get(Xv, null),
            l = a.createRenderer(null, this.componentDef),
            c = this.componentDef.selectors[0][0] || "div",
            d = r
              ? (function Uw(e, t, n) {
                  return e.selectRootElement(t, n === at.ShadowDom);
                })(l, r, this.componentDef.encapsulation)
              : xs(
                  l,
                  c,
                  (function fE(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null;
                  })(c)
                ),
            f = this.componentDef.onPush ? 288 : 272,
            h = fa(0, null, null, 1, 0, null, null, null, null, null),
            p = Vo(null, h, null, f, null, null, a, l, u, s, null);
          let g, v;
          ss(p);
          try {
            const y = this.componentDef;
            let E,
              m = null;
            y.findHostDirectiveDefs
              ? ((E = []),
                (m = new Map()),
                y.findHostDirectiveDefs(y, E, m),
                E.push(y))
              : (E = [y]);
            const b = (function gE(e, t) {
                const n = e[_],
                  r = Y;
                return (e[r] = t), Ln(n, r, 2, "#host", null);
              })(p, d),
              W = (function mE(e, t, n, r, o, i, s, a) {
                const u = o[_];
                !(function yE(e, t, n, r) {
                  for (const o of e)
                    t.mergedAttrs = hr(t.mergedAttrs, o.hostAttrs);
                  null !== t.mergedAttrs &&
                    (Go(t, t.mergedAttrs, !0), null !== n && ed(r, n, t));
                })(r, e, t, s);
                const l = i.createRenderer(t, n),
                  c = Vo(
                    o,
                    Zd(n),
                    null,
                    n.onPush ? 32 : 16,
                    o[e.index],
                    e,
                    i,
                    l,
                    a || null,
                    null,
                    null
                  );
                return (
                  u.firstCreatePass && pa(u, e, r.length - 1),
                  Uo(o, c),
                  (o[e.index] = c)
                );
              })(b, d, y, E, p, a, l);
            (v = $l(h, Y)),
              d &&
                (function vE(e, t, n, r) {
                  if (r) cs(e, n, ["ng-version", Qv.full]);
                  else {
                    const { attrs: o, classes: i } = (function vw(e) {
                      const t = [],
                        n = [];
                      let r = 1,
                        o = 2;
                      for (; r < e.length; ) {
                        let i = e[r];
                        if ("string" == typeof i)
                          2 === o
                            ? "" !== i && t.push(i, e[++r])
                            : 8 === o && n.push(i);
                        else {
                          if (!Xe(o)) break;
                          o = i;
                        }
                        r++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    o && cs(e, n, o),
                      i && i.length > 0 && Jc(e, n, i.join(" "));
                  }
                })(l, y, d, r),
              void 0 !== n &&
                (function wE(e, t, n) {
                  const r = (e.projection = []);
                  for (let o = 0; o < t.length; o++) {
                    const i = n[o];
                    r.push(null != i ? Array.from(i) : null);
                  }
                })(v, this.ngContentSelectors, n),
              (g = (function DE(e, t, n, r, o, i) {
                const s = ge(),
                  a = o[_],
                  u = Le(s, o);
                Jd(a, o, s, n, null, r);
                for (let c = 0; c < n.length; c++)
                  we(Jt(o, a, s.directiveStart + c, s), o);
                ef(a, o, s), u && we(u, o);
                const l = Jt(o, a, s.directiveStart + s.componentOffset, s);
                if (((e[ne] = o[ne] = l), null !== i))
                  for (const c of i) c(l, t);
                return la(a, s, e), l;
              })(W, y, E, m, p, [EE])),
              ua(h, p, null);
          } finally {
            as();
          }
          return new pE(this.componentType, g, Pn(v, p), p, v);
        }
      }
      class pE extends Gv {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new dE(o)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[t])) {
            const i = this._rootLView;
            va(i[_], i, o, t, n), Qd(i, this._tNode.index);
          }
        }
        get injector() {
          return new wn(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function EE() {
        const e = ge();
        yo(D()[_], e);
      }
      function Ee(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function _a(e, t, n) {
        const r = D();
        return (
          Ee(r, Dn(), t) &&
            (function Be(e, t, n, r, o, i, s, a) {
              const u = Le(t, n);
              let c,
                l = t.inputs;
              !a && null != l && (c = l[r])
                ? (va(e, n, c, r, o), cr(t) && Qd(n, t.index))
                : 3 & t.type &&
                  ((r = (function Ww(e) {
                    return "class" === e
                      ? "className"
                      : "for" === e
                      ? "htmlFor"
                      : "formaction" === e
                      ? "formAction"
                      : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                      ? "readOnly"
                      : "tabindex" === e
                      ? "tabIndex"
                      : e;
                  })(r)),
                  (o = null != s ? s(o, t.value || "", r) : o),
                  i.setProperty(u, r, o));
            })(
              B(),
              (function Q() {
                const e = P.lFrame;
                return $l(e.tView, e.selectedIndex);
              })(),
              r,
              e,
              t,
              r[L],
              n,
              !1
            ),
          _a
        );
      }
      function Ca(e, t, n, r, o) {
        const s = o ? "class" : "style";
        va(e, n, t.inputs[s], s, r);
      }
      function Qe(e, t, n, r) {
        const o = D(),
          i = B(),
          s = Y + e,
          a = o[L],
          u = i.firstCreatePass
            ? (function jE(e, t, n, r, o, i) {
                const s = t.consts,
                  u = Ln(t, e, 2, r, kt(s, o));
                return (
                  ha(t, n, u, kt(s, i)),
                  null !== u.attrs && Go(u, u.attrs, !1),
                  null !== u.mergedAttrs && Go(u, u.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, u),
                  u
                );
              })(s, i, o, t, n, r)
            : i.data[s],
          l = (o[s] = xs(
            a,
            t,
            (function Zy() {
              return P.lFrame.currentNamespace;
            })()
          )),
          c = ho(u);
        return (
          lt(u, !0),
          ed(a, l, u),
          32 != (32 & u.flags) && Fo(i, o, l, u),
          0 ===
            (function Ny() {
              return P.lFrame.elementDepthCount;
            })() && we(l, o),
          (function Py() {
            P.lFrame.elementDepthCount++;
          })(),
          c && (ca(i, o, u), la(i, u, o)),
          null !== r && da(o, u),
          Qe
        );
      }
      function Je() {
        let e = ge();
        ts()
          ? (function ns() {
              P.lFrame.isParent = !1;
            })()
          : ((e = e.parent), lt(e, !1));
        const t = e;
        !(function Fy() {
          P.lFrame.elementDepthCount--;
        })();
        const n = B();
        return (
          n.firstCreatePass && (yo(n, e), Qi(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Qy(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            Ca(n, t, D(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Jy(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Ca(n, t, D(), t.stylesWithoutHost, !1),
          Je
        );
      }
      function Sa(e) {
        return !!e && "function" == typeof e.then;
      }
      const VE = function Mf(e) {
        return !!e && "function" == typeof e.subscribe;
      };
      function Ma(e, t, n, r) {
        const o = D(),
          i = B(),
          s = ge();
        return (
          (function Af(e, t, n, r, o, i, s) {
            const a = ho(r),
              l = e.firstCreatePass && rf(e),
              c = t[ne],
              d = nf(t);
            let f = !0;
            if (3 & r.type || s) {
              const g = Le(r, t),
                v = s ? s(g) : g,
                y = d.length,
                E = s ? (b) => s(pe(b[r.index])) : r.index;
              let m = null;
              if (
                (!s &&
                  a &&
                  (m = (function $E(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const s = o[i];
                        if (s === n && o[i + 1] === r) {
                          const a = t[hn],
                            u = o[i + 2];
                          return a.length > u ? a[u] : null;
                        }
                        "string" == typeof s && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== m)
              )
                ((m.__ngLastListenerFn__ || m).__ngNextListenerFn__ = i),
                  (m.__ngLastListenerFn__ = i),
                  (f = !1);
              else {
                i = Pf(r, t, c, i, !1);
                const b = n.listen(v, o, i);
                d.push(i, b), l && l.push(o, E, y, y + 1);
              }
            } else i = Pf(r, t, c, i, !1);
            const h = r.outputs;
            let p;
            if (f && null !== h && (p = h[o])) {
              const g = p.length;
              if (g)
                for (let v = 0; v < g; v += 2) {
                  const W = t[p[v]][p[v + 1]].subscribe(i),
                    se = d.length;
                  d.push(i, W), l && l.push(o, r.index, se, -(se + 1));
                }
            }
          })(i, o, o[L], s, e, t, r),
          Ma
        );
      }
      function Nf(e, t, n, r) {
        try {
          return Ue(6, t, n), !1 !== n(r);
        } catch (o) {
          return sf(e, o), !1;
        } finally {
          Ue(7, t, n);
        }
      }
      function Pf(e, t, n, r, o) {
        return function i(s) {
          if (s === Function) return r;
          ya(e.componentOffset > -1 ? ke(e.index, t) : t);
          let u = Nf(t, n, r, s),
            l = i.__ngNextListenerFn__;
          for (; l; ) (u = Nf(t, n, l, s) && u), (l = l.__ngNextListenerFn__);
          return o && !1 === u && (s.preventDefault(), (s.returnValue = !1)), u;
        };
      }
      function Ff(e = 1) {
        return (function $y(e) {
          return (P.lFrame.contextLView = (function Uy(e, t) {
            for (; e > 0; ) (t = t[pn]), e--;
            return t;
          })(e, P.lFrame.contextLView))[ne];
        })(e);
      }
      function At(e, t = "") {
        const n = D(),
          r = B(),
          o = e + Y,
          i = r.firstCreatePass ? Ln(r, o, 1, t, null) : r.data[o],
          s = (n[o] = (function Fs(e, t) {
            return e.createText(t);
          })(n[L], t));
        Fo(r, n, s, i), lt(i, !1);
      }
      function Xo(e) {
        return an("", e, ""), Xo;
      }
      function an(e, t, n) {
        const r = D(),
          o = (function jn(e, t, n, r) {
            return Ee(e, Dn(), n) ? t + N(n) + r : F;
          })(r, e, t, n);
        return o !== F && Tt(r, be(), o), an;
      }
      const Zn = "en-US";
      let Ih = Zn;
      class Kn {}
      class FC {}
      class Yh extends Kn {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new af(this));
          const r = (function Re(e, t) {
            const n = e[Sl] || null;
            if (!n && !0 === t)
              throw new Error(
                `Type ${q(e)} does not have '\u0275mod' property.`
              );
            return n;
          })(t);
          (this._bootstrapComponents = (function St(e) {
            return e instanceof Function ? e() : e;
          })(r.bootstrap)),
            (this._r3Injector = Bd(
              t,
              n,
              [
                { provide: Kn, useValue: this },
                { provide: Nn, useValue: this.componentFactoryResolver },
              ],
              q(t),
              new Set(["environment"])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Ba extends FC {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new Yh(this.moduleType, t);
        }
      }
      function Va(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const gt = class uI extends Qr {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            s = r;
          if (t && "object" == typeof t) {
            const u = t;
            (o = u.next?.bind(u)),
              (i = u.error?.bind(u)),
              (s = u.complete?.bind(u));
          }
          this.__isAsync && ((i = Va(i)), o && (o = Va(o)), s && (s = Va(s)));
          const a = super.subscribe({ next: o, error: i, complete: s });
          return t instanceof it && t.add(a), a;
        }
      };
      let Nt = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = fI), e;
      })();
      const cI = Nt,
        dI = class extends cI {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tView,
              o = Vo(
                this._declarationLView,
                r,
                t,
                16,
                null,
                r.declTNode,
                null,
                null,
                null,
                null,
                n || null
              );
            o[ur] = this._declarationLView[this._declarationTContainer.index];
            const s = this._declarationLView[ut];
            return (
              null !== s && (o[ut] = s.createEmbeddedView(r)),
              ua(r, o, t),
              new Sr(o)
            );
          }
        };
      function fI() {
        return (function ni(e, t) {
          return 4 & e.type ? new dI(t, e, Pn(e, t)) : null;
        })(ge(), D());
      }
      let mt = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = hI), e;
      })();
      function hI() {
        return (function dp(e, t) {
          let n;
          const r = t[e.index];
          if (Ke(r)) n = r;
          else {
            let o;
            if (8 & e.type) o = pe(r);
            else {
              const i = t[L];
              o = i.createComment("");
              const s = Le(e, t);
              tn(
                i,
                Po(i, s),
                o,
                (function rv(e, t) {
                  return e.nextSibling(t);
                })(i, s),
                !1
              );
            }
            (t[e.index] = n = tf(r, t, o, e)), Uo(t, n);
          }
          return new lp(n, e, t);
        })(ge(), D());
      }
      const pI = mt,
        lp = class extends pI {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Pn(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new wn(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = hs(this._hostTNode, this._hostLView);
            if (sc(t)) {
              const n = Eo(t, this._hostLView),
                r = wo(t);
              return new wn(n[_].data[r + 8], n);
            }
            return new wn(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = cp(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - Ce;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            "number" == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const s = t.createEmbeddedView(n || {}, i);
            return this.insert(s, o), s;
          }
          createComponent(t, n, r, o, i) {
            const s =
              t &&
              !(function gr(e) {
                return "function" == typeof e;
              })(t);
            let a;
            if (s) a = n;
            else {
              const d = n || {};
              (a = d.index),
                (r = d.injector),
                (o = d.projectableNodes),
                (i = d.environmentInjector || d.ngModuleRef);
            }
            const u = s ? t : new Mr(U(t)),
              l = r || this.parentInjector;
            if (!i && null == u.ngModule) {
              const f = (s ? l : this.parentInjector).get(rn, null);
              f && (i = f);
            }
            const c = u.create(l, o, void 0, i);
            return this.insert(c.hostView, a), c;
          }
          insert(t, n) {
            const r = t._lView,
              o = r[_];
            if (
              (function Ay(e) {
                return Ke(e[ee]);
              })(r)
            ) {
              const c = this.indexOf(t);
              if (-1 !== c) this.detach(c);
              else {
                const d = r[ee],
                  f = new lp(d, d[De], d[ee]);
                f.detach(f.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              s = this._lContainer;
            !(function QD(e, t, n, r) {
              const o = Ce + r,
                i = n.length;
              r > 0 && (n[o - 1][Ze] = t),
                r < i - Ce
                  ? ((t[Ze] = n[o]), Dc(n, Ce + r, t))
                  : (n.push(t), (t[Ze] = null)),
                (t[ee] = n);
              const s = t[ur];
              null !== s &&
                n !== s &&
                (function JD(e, t) {
                  const n = e[mn];
                  t[ve] !== t[ee][ee][ve] && (e[xl] = !0),
                    null === n ? (e[mn] = [t]) : n.push(t);
                })(s, t);
              const a = t[ut];
              null !== a && a.insertView(e), (t[x] |= 64);
            })(o, r, s, i);
            const a = ks(i, s),
              u = r[L],
              l = Po(u, s[co]);
            return (
              null !== l &&
                (function KD(e, t, n, r, o, i) {
                  (r[_t] = o), (r[De] = t), Er(e, r, n, 1, o, i);
                })(o, s[De], u, r, l, a),
              t.attachToViewContainerRef(),
              Dc(Ua(s), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = cp(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Rs(this._lContainer, n);
            r && (bo(Ua(this._lContainer), n), $c(r[_], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Rs(this._lContainer, n);
            return r && null != bo(Ua(this._lContainer), n) ? new Sr(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function cp(e) {
        return e[fo];
      }
      function Ua(e) {
        return e[fo] || (e[fo] = []);
      }
      function oi(...e) {}
      const Op = new A("Application Initializer");
      let ii = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = oi),
              (this.reject = oi),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const i = this.appInits[o]();
                if (Sa(i)) n.push(i);
                else if (VE(i)) {
                  const s = new Promise((a, u) => {
                    i.subscribe({ complete: a, error: u });
                  });
                  n.push(s);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(Op, 8));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const jr = new A("AppId", {
        providedIn: "root",
        factory: function Lp() {
          return `${Ja()}${Ja()}${Ja()}`;
        },
      });
      function Ja() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const kp = new A("Platform Initializer"),
        eu = new A("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown",
        }),
        Pt = new A("LocaleId", {
          providedIn: "root",
          factory: () =>
            rr(Pt, T.Optional | T.SkipSelf) ||
            (function GI() {
              return (typeof $localize < "u" && $localize.locale) || Zn;
            })(),
        }),
        YI = (() => Promise.resolve(0))();
      function tu(e) {
        typeof Zone > "u"
          ? YI.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class me {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new gt(!1)),
            (this.onMicrotaskEmpty = new gt(!1)),
            (this.onStable = new gt(!1)),
            (this.onError = new gt(!1)),
            typeof Zone > "u")
          )
            throw new C(908, !1);
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function XI() {
              let e = K.requestAnimationFrame,
                t = K.cancelAnimationFrame;
              if (typeof Zone < "u" && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function eb(e) {
              const t = () => {
                !(function JI(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(K, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                ru(e),
                                (e.isCheckStableRunning = !0),
                                nu(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    ru(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, s, a) => {
                  try {
                    return Hp(e), n.invokeTask(o, i, s, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Vp(e);
                  }
                },
                onInvoke: (n, r, o, i, s, a, u) => {
                  try {
                    return Hp(e), n.invoke(o, i, s, a, u);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), Vp(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ("microTask" == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          ru(e),
                          nu(e))
                        : "macroTask" == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (
                  n.handleError(o, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!me.isInAngularZone()) throw new C(909, !1);
        }
        static assertNotInAngularZone() {
          if (me.isInAngularZone()) throw new C(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            s = i.scheduleEventTask("NgZoneEvent: " + o, t, QI, oi, oi);
          try {
            return i.runTask(s, n, r);
          } finally {
            i.cancelTask(s);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const QI = {};
      function nu(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function ru(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Hp(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Vp(e) {
        e._nesting--, nu(e);
      }
      class tb {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new gt()),
            (this.onMicrotaskEmpty = new gt()),
            (this.onStable = new gt()),
            (this.onError = new gt());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      const $p = new A(""),
        si = new A("");
      let su,
        ou = (() => {
          class e {
            constructor(n, r, o) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                su ||
                  ((function nb(e) {
                    su = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      me.assertNotInAngularZone(),
                        tu(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                tu(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (s) => s.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o });
            }
            whenStable(n, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(O(me), O(iu), O(si));
            }),
            (e.ɵprov = z({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        iu = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return su?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = z({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            })),
            e
          );
        })();
      const Ft = !1;
      let Vt = null;
      const Up = new A("AllowMultipleToken"),
        au = new A("PlatformDestroyListeners"),
        rb = new A("appBootstrapListener");
      function Gp(e, t, n = []) {
        const r = `Platform: ${t}`,
          o = new A(r);
        return (i = []) => {
          let s = uu();
          if (!s || s.injector.get(Up, !1)) {
            const a = [...n, ...i, { provide: o, useValue: !0 }];
            e
              ? e(a)
              : (function sb(e) {
                  if (Vt && !Vt.get(Up, !1)) throw new C(400, !1);
                  Vt = e;
                  const t = e.get(qp);
                  (function zp(e) {
                    const t = e.get(kp, null);
                    t && t.forEach((n) => n());
                  })(e);
                })(
                  (function Wp(e = [], t) {
                    return Mt.create({
                      name: t,
                      providers: [
                        { provide: Ys, useValue: "platform" },
                        { provide: au, useValue: new Set([() => (Vt = null)]) },
                        ...e,
                      ],
                    });
                  })(a, r)
                );
          }
          return (function ub(e) {
            const t = uu();
            if (!t) throw new C(401, !1);
            return t;
          })();
        };
      }
      function uu() {
        return Vt?.get(qp) ?? null;
      }
      let qp = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const o = (function Kp(e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new tb()
                      : ("zone.js" === e ? void 0 : e) || new me(t)),
                  n
                );
              })(
                r?.ngZone,
                (function Zp(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection:
                      !(!e || !e.ngZoneRunCoalescing) || !1,
                  };
                })(r)
              ),
              i = [{ provide: me, useValue: o }];
            return o.run(() => {
              const s = Mt.create({
                  providers: i,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                a = n.create(s),
                u = a.injector.get(xn, null);
              if (!u) throw new C(402, !1);
              return (
                o.runOutsideAngular(() => {
                  const l = o.onError.subscribe({
                    next: (c) => {
                      u.handleError(c);
                    },
                  });
                  a.onDestroy(() => {
                    ui(this._modules, a), l.unsubscribe();
                  });
                }),
                (function Yp(e, t, n) {
                  try {
                    const r = n();
                    return Sa(r)
                      ? r.catch((o) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(o)), o)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(u, o, () => {
                  const l = a.injector.get(ii);
                  return (
                    l.runInitializers(),
                    l.donePromise.then(
                      () => (
                        (function bh(e) {
                          He(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (Ih = e.toLowerCase().replace(/_/g, "-"));
                        })(a.injector.get(Pt, Zn) || Zn),
                        this._moduleDoBootstrap(a),
                        a
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const o = Xp({}, r);
            return (function ob(e, t, n) {
              const r = new Ba(n);
              return Promise.resolve(r);
            })(0, 0, n).then((i) => this.bootstrapModuleFactory(i, o));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(ai);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((o) => r.bootstrap(o));
            else {
              if (!n.instance.ngDoBootstrap) throw new C(-403, !1);
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new C(404, !1);
            this._modules.slice().forEach((r) => r.destroy()),
              this._destroyListeners.forEach((r) => r());
            const n = this._injector.get(au, null);
            n && (n.forEach((r) => r()), n.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(Mt));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      function Xp(e, t) {
        return Array.isArray(t) ? t.reduce(Xp, e) : { ...e, ...t };
      }
      let ai = (() => {
        class e {
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          constructor(n, r, o) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const i = new _e((a) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    a.next(this._stable), a.complete();
                  });
              }),
              s = new _e((a) => {
                let u;
                this._zone.runOutsideAngular(() => {
                  u = this._zone.onStable.subscribe(() => {
                    me.assertNotInAngularZone(),
                      tu(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), a.next(!0));
                      });
                  });
                });
                const l = this._zone.onUnstable.subscribe(() => {
                  me.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        a.next(!1);
                      }));
                });
                return () => {
                  u.unsubscribe(), l.unsubscribe();
                };
              });
            this.isStable = Dl(
              i,
              s.pipe(
                (function Ym(e = {}) {
                  const {
                    connector: t = () => new Qr(),
                    resetOnError: n = !0,
                    resetOnComplete: r = !0,
                    resetOnRefCountZero: o = !0,
                  } = e;
                  return (i) => {
                    let s,
                      a,
                      u,
                      l = 0,
                      c = !1,
                      d = !1;
                    const f = () => {
                        a?.unsubscribe(), (a = void 0);
                      },
                      h = () => {
                        f(), (s = u = void 0), (c = d = !1);
                      },
                      p = () => {
                        const g = s;
                        h(), g?.unsubscribe();
                      };
                    return Wt((g, v) => {
                      l++, !d && !c && f();
                      const y = (u = u ?? t());
                      v.add(() => {
                        l--, 0 === l && !d && !c && (a = ji(p, o));
                      }),
                        y.subscribe(v),
                        !s &&
                          l > 0 &&
                          ((s = new er({
                            next: (E) => y.next(E),
                            error: (E) => {
                              (d = !0), f(), (a = ji(h, n, E)), y.error(E);
                            },
                            complete: () => {
                              (c = !0), f(), (a = ji(h, r)), y.complete();
                            },
                          })),
                          Dt(g).subscribe(s));
                    })(i);
                  };
                })()
              )
            );
          }
          bootstrap(n, r) {
            const o = n instanceof Id;
            if (!this._injector.get(ii).done) {
              !o &&
                (function sr(e) {
                  const t = U(e) || ye(e) || Ae(e);
                  return null !== t && t.standalone;
                })(n);
              throw new C(405, Ft);
            }
            let s;
            (s = o ? n : this._injector.get(Nn).resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const a = (function ib(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(Kn),
              l = s.create(Mt.NULL, [], r || s.selector, a),
              c = l.location.nativeElement,
              d = l.injector.get($p, null);
            return (
              d?.registerApplication(c),
              l.onDestroy(() => {
                this.detachView(l.hostView),
                  ui(this.components, l),
                  d?.unregisterApplication(c);
              }),
              this._loadComponent(l),
              l
            );
          }
          tick() {
            if (this._runningTick) throw new C(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            ui(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n);
            const r = this._injector.get(rb, []);
            r.push(...this._bootstrapListeners), r.forEach((o) => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => ui(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new C(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(me), O(rn), O(xn));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function ui(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let eg = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = cb), e;
      })();
      function cb(e) {
        return (function db(e, t, n) {
          if (cr(e) && !n) {
            const r = ke(e.index, t);
            return new Sr(r, r);
          }
          return 47 & e.type ? new Sr(t[ve], t) : null;
        })(ge(), D(), 16 == (16 & e));
      }
      const Ib = Gp(null, "core", []);
      let bb = (() => {
          class e {
            constructor(n) {}
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(O(ai));
            }),
            (e.ɵmod = fn({ type: e })),
            (e.ɵinj = Kt({})),
            e
          );
        })(),
        hu = null;
      function fi() {
        return hu;
      }
      class Tb {}
      const yt = new A("DocumentToken");
      function Dg(e, t) {
        t = encodeURIComponent(t);
        for (const n of e.split(";")) {
          const r = n.indexOf("="),
            [o, i] = -1 == r ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
          if (o.trim() === t) return decodeURIComponent(i);
        }
        return null;
      }
      let Cg = (() => {
        class e {
          constructor(n, r) {
            (this._viewContainer = n),
              (this._context = new v0()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = r);
          }
          set ngIf(n) {
            (this._context.$implicit = this._context.ngIf = n),
              this._updateView();
          }
          set ngIfThen(n) {
            Ig("ngIfThen", n),
              (this._thenTemplateRef = n),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(n) {
            Ig("ngIfElse", n),
              (this._elseTemplateRef = n),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(k(mt), k(Nt));
          }),
          (e.ɵdir = $e({
            type: e,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
            standalone: !0,
          })),
          e
        );
      })();
      class v0 {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Ig(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${q(t)}'.`
          );
      }
      let z0 = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = fn({ type: e })),
          (e.ɵinj = Kt({})),
          e
        );
      })();
      class Ag {}
      class ES extends Tb {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class Nu extends ES {
        static makeCurrent() {
          !(function Mb(e) {
            hu || (hu = e);
          })(new Nu());
        }
        onAndCancel(t, n, r) {
          return (
            t.addEventListener(n, r, !1),
            () => {
              t.removeEventListener(n, r, !1);
            }
          );
        }
        dispatchEvent(t, n) {
          t.dispatchEvent(n);
        }
        remove(t) {
          t.parentNode && t.parentNode.removeChild(t);
        }
        createElement(t, n) {
          return (n = n || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, n) {
          return "window" === n
            ? window
            : "document" === n
            ? t
            : "body" === n
            ? t.body
            : null;
        }
        getBaseHref(t) {
          const n = (function _S() {
            return (
              (Ur = Ur || document.querySelector("base")),
              Ur ? Ur.getAttribute("href") : null
            );
          })();
          return null == n
            ? null
            : (function CS(e) {
                (Ii = Ii || document.createElement("a")),
                  Ii.setAttribute("href", e);
                const t = Ii.pathname;
                return "/" === t.charAt(0) ? t : `/${t}`;
              })(n);
        }
        resetBaseElement() {
          Ur = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(t) {
          return Dg(document.cookie, t);
        }
      }
      let Ii,
        Ur = null;
      const Rg = new A("TRANSITION_ID"),
        bS = [
          {
            provide: Op,
            useFactory: function IS(e, t, n) {
              return () => {
                n.get(ii).donePromise.then(() => {
                  const r = fi(),
                    o = t.querySelectorAll(`style[ng-transition="${e}"]`);
                  for (let i = 0; i < o.length; i++) r.remove(o[i]);
                });
              };
            },
            deps: [Rg, yt, Mt],
            multi: !0,
          },
        ];
      let MS = (() => {
        class e {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const bi = new A("EventManagerPlugins");
      let Si = (() => {
        class e {
          constructor(n, r) {
            (this._zone = r),
              (this._eventNameToPlugin = new Map()),
              n.forEach((o) => {
                o.manager = this;
              }),
              (this._plugins = n.slice().reverse());
          }
          addEventListener(n, r, o) {
            return this._findPluginFor(r).addEventListener(n, r, o);
          }
          addGlobalEventListener(n, r, o) {
            return this._findPluginFor(r).addGlobalEventListener(n, r, o);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(n) {
            const r = this._eventNameToPlugin.get(n);
            if (r) return r;
            const o = this._plugins;
            for (let i = 0; i < o.length; i++) {
              const s = o[i];
              if (s.supports(n)) return this._eventNameToPlugin.set(n, s), s;
            }
            throw new Error(`No event manager plugin found for event ${n}`);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(bi), O(me));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Og {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, n, r) {
          const o = fi().getGlobalEventTarget(this._doc, t);
          if (!o)
            throw new Error(`Unsupported event target ${o} for event ${n}`);
          return this.addEventListener(o, n, r);
        }
      }
      let Lg = (() => {
          class e {
            constructor() {
              this.usageCount = new Map();
            }
            addStyles(n) {
              for (const r of n)
                1 === this.changeUsageCount(r, 1) && this.onStyleAdded(r);
            }
            removeStyles(n) {
              for (const r of n)
                0 === this.changeUsageCount(r, -1) && this.onStyleRemoved(r);
            }
            onStyleRemoved(n) {}
            onStyleAdded(n) {}
            getAllStyles() {
              return this.usageCount.keys();
            }
            changeUsageCount(n, r) {
              const o = this.usageCount;
              let i = o.get(n) ?? 0;
              return (i += r), i > 0 ? o.set(n, i) : o.delete(n), i;
            }
            ngOnDestroy() {
              for (const n of this.getAllStyles()) this.onStyleRemoved(n);
              this.usageCount.clear();
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = z({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        zr = (() => {
          class e extends Lg {
            constructor(n) {
              super(),
                (this.doc = n),
                (this.styleRef = new Map()),
                (this.hostNodes = new Set()),
                this.resetHostNodes();
            }
            onStyleAdded(n) {
              for (const r of this.hostNodes) this.addStyleToHost(r, n);
            }
            onStyleRemoved(n) {
              const r = this.styleRef;
              r.get(n)?.forEach((i) => i.remove()), r.delete(n);
            }
            ngOnDestroy() {
              super.ngOnDestroy(), this.styleRef.clear(), this.resetHostNodes();
            }
            addHost(n) {
              this.hostNodes.add(n);
              for (const r of this.getAllStyles()) this.addStyleToHost(n, r);
            }
            removeHost(n) {
              this.hostNodes.delete(n);
            }
            addStyleToHost(n, r) {
              const o = this.doc.createElement("style");
              (o.textContent = r), n.appendChild(o);
              const i = this.styleRef.get(r);
              i ? i.push(o) : this.styleRef.set(r, [o]);
            }
            resetHostNodes() {
              const n = this.hostNodes;
              n.clear(), n.add(this.doc.head);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(O(yt));
            }),
            (e.ɵprov = z({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const Pu = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        Fu = /%COMP%/g,
        Bg = new A("RemoveStylesOnCompDestory", {
          providedIn: "root",
          factory: () => !1,
        });
      function Hg(e, t) {
        return t.flat(100).map((n) => n.replace(Fu, e));
      }
      function Vg(e) {
        return (t) => {
          if ("__ngUnwrap__" === t) return e;
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      let xu = (() => {
        class e {
          constructor(n, r, o, i) {
            (this.eventManager = n),
              (this.sharedStylesHost = r),
              (this.appId = o),
              (this.removeStylesOnCompDestory = i),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Ru(n));
          }
          createRenderer(n, r) {
            if (!n || !r) return this.defaultRenderer;
            const o = this.getOrCreateRenderer(n, r);
            return (
              o instanceof zg
                ? o.applyToHost(n)
                : o instanceof Ou && o.applyStyles(),
              o
            );
          }
          getOrCreateRenderer(n, r) {
            const o = this.rendererByCompId;
            let i = o.get(r.id);
            if (!i) {
              const s = this.eventManager,
                a = this.sharedStylesHost,
                u = this.removeStylesOnCompDestory;
              switch (r.encapsulation) {
                case at.Emulated:
                  i = new zg(s, a, r, this.appId, u);
                  break;
                case at.ShadowDom:
                  return new RS(s, a, n, r);
                default:
                  i = new Ou(s, a, r, u);
              }
              (i.onDestroy = () => o.delete(r.id)), o.set(r.id, i);
            }
            return i;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          begin() {}
          end() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(Si), O(zr), O(jr), O(Bg));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Ru {
        constructor(t) {
          (this.eventManager = t),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(t, n) {
          return n
            ? document.createElementNS(Pu[n] || n, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, n) {
          (Ug(t) ? t.content : t).appendChild(n);
        }
        insertBefore(t, n, r) {
          t && (Ug(t) ? t.content : t).insertBefore(n, r);
        }
        removeChild(t, n) {
          t && t.removeChild(n);
        }
        selectRootElement(t, n) {
          let r = "string" == typeof t ? document.querySelector(t) : t;
          if (!r)
            throw new Error(`The selector "${t}" did not match any elements`);
          return n || (r.textContent = ""), r;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, n, r, o) {
          if (o) {
            n = o + ":" + n;
            const i = Pu[o];
            i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r);
          } else t.setAttribute(n, r);
        }
        removeAttribute(t, n, r) {
          if (r) {
            const o = Pu[r];
            o ? t.removeAttributeNS(o, n) : t.removeAttribute(`${r}:${n}`);
          } else t.removeAttribute(n);
        }
        addClass(t, n) {
          t.classList.add(n);
        }
        removeClass(t, n) {
          t.classList.remove(n);
        }
        setStyle(t, n, r, o) {
          o & (Ne.DashCase | Ne.Important)
            ? t.style.setProperty(n, r, o & Ne.Important ? "important" : "")
            : (t.style[n] = r);
        }
        removeStyle(t, n, r) {
          r & Ne.DashCase ? t.style.removeProperty(n) : (t.style[n] = "");
        }
        setProperty(t, n, r) {
          t[n] = r;
        }
        setValue(t, n) {
          t.nodeValue = n;
        }
        listen(t, n, r) {
          return "string" == typeof t
            ? this.eventManager.addGlobalEventListener(t, n, Vg(r))
            : this.eventManager.addEventListener(t, n, Vg(r));
        }
      }
      function Ug(e) {
        return "TEMPLATE" === e.tagName && void 0 !== e.content;
      }
      class RS extends Ru {
        constructor(t, n, r, o) {
          super(t),
            (this.sharedStylesHost = n),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = Hg(o.id, o.styles);
          for (const s of i) {
            const a = document.createElement("style");
            (a.textContent = s), this.shadowRoot.appendChild(a);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        appendChild(t, n) {
          return super.appendChild(this.nodeOrShadowRoot(t), n);
        }
        insertBefore(t, n, r) {
          return super.insertBefore(this.nodeOrShadowRoot(t), n, r);
        }
        removeChild(t, n) {
          return super.removeChild(this.nodeOrShadowRoot(t), n);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class Ou extends Ru {
        constructor(t, n, r, o, i = r.id) {
          super(t),
            (this.sharedStylesHost = n),
            (this.removeStylesOnCompDestory = o),
            (this.rendererUsageCount = 0),
            (this.styles = Hg(i, r.styles));
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles),
            this.rendererUsageCount++;
        }
        destroy() {
          this.removeStylesOnCompDestory &&
            (this.sharedStylesHost.removeStyles(this.styles),
            this.rendererUsageCount--,
            0 === this.rendererUsageCount && this.onDestroy?.());
        }
      }
      class zg extends Ou {
        constructor(t, n, r, o, i) {
          const s = o + "-" + r.id;
          super(t, n, r, i, s),
            (this.contentAttr = (function PS(e) {
              return "_ngcontent-%COMP%".replace(Fu, e);
            })(s)),
            (this.hostAttr = (function FS(e) {
              return "_nghost-%COMP%".replace(Fu, e);
            })(s));
        }
        applyToHost(t) {
          this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, n) {
          const r = super.createElement(t, n);
          return super.setAttribute(r, this.contentAttr, ""), r;
        }
      }
      let OS = (() => {
        class e extends Og {
          constructor(n) {
            super(n);
          }
          supports(n) {
            return !0;
          }
          addEventListener(n, r, o) {
            return (
              n.addEventListener(r, o, !1),
              () => this.removeEventListener(n, r, o)
            );
          }
          removeEventListener(n, r, o) {
            return n.removeEventListener(r, o);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(yt));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Gg = ["alt", "control", "meta", "shift"],
        LS = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        kS = {
          alt: (e) => e.altKey,
          control: (e) => e.ctrlKey,
          meta: (e) => e.metaKey,
          shift: (e) => e.shiftKey,
        };
      let jS = (() => {
        class e extends Og {
          constructor(n) {
            super(n);
          }
          supports(n) {
            return null != e.parseEventName(n);
          }
          addEventListener(n, r, o) {
            const i = e.parseEventName(r),
              s = e.eventCallback(i.fullKey, o, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => fi().onAndCancel(n, i.domEventName, s));
          }
          static parseEventName(n) {
            const r = n.toLowerCase().split("."),
              o = r.shift();
            if (0 === r.length || ("keydown" !== o && "keyup" !== o))
              return null;
            const i = e._normalizeKey(r.pop());
            let s = "",
              a = r.indexOf("code");
            if (
              (a > -1 && (r.splice(a, 1), (s = "code.")),
              Gg.forEach((l) => {
                const c = r.indexOf(l);
                c > -1 && (r.splice(c, 1), (s += l + "."));
              }),
              (s += i),
              0 != r.length || 0 === i.length)
            )
              return null;
            const u = {};
            return (u.domEventName = o), (u.fullKey = s), u;
          }
          static matchEventFullKeyCode(n, r) {
            let o = LS[n.key] || n.key,
              i = "";
            return (
              r.indexOf("code.") > -1 && ((o = n.code), (i = "code.")),
              !(null == o || !o) &&
                ((o = o.toLowerCase()),
                " " === o ? (o = "space") : "." === o && (o = "dot"),
                Gg.forEach((s) => {
                  s !== o && (0, kS[s])(n) && (i += s + ".");
                }),
                (i += o),
                i === r)
            );
          }
          static eventCallback(n, r, o) {
            return (i) => {
              e.matchEventFullKeyCode(i, n) && o.runGuarded(() => r(i));
            };
          }
          static _normalizeKey(n) {
            return "esc" === n ? "escape" : n;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(yt));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const $S = Gp(Ib, "browser", [
          { provide: eu, useValue: "browser" },
          {
            provide: kp,
            useValue: function BS() {
              Nu.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: yt,
            useFactory: function VS() {
              return (
                (function dv(e) {
                  Vs = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        Zg = new A(""),
        Kg = [
          {
            provide: si,
            useClass: class SS {
              addToWindow(t) {
                (K.getAngularTestability = (r, o = !0) => {
                  const i = t.findTestabilityInTree(r, o);
                  if (null == i)
                    throw new Error("Could not find testability for element.");
                  return i;
                }),
                  (K.getAllAngularTestabilities = () =>
                    t.getAllTestabilities()),
                  (K.getAllAngularRootElements = () => t.getAllRootElements()),
                  K.frameworkStabilizers || (K.frameworkStabilizers = []),
                  K.frameworkStabilizers.push((r) => {
                    const o = K.getAllAngularTestabilities();
                    let i = o.length,
                      s = !1;
                    const a = function (u) {
                      (s = s || u), i--, 0 == i && r(s);
                    };
                    o.forEach(function (u) {
                      u.whenStable(a);
                    });
                  });
              }
              findTestabilityInTree(t, n, r) {
                return null == n
                  ? null
                  : t.getTestability(n) ??
                      (r
                        ? fi().isShadowRoot(n)
                          ? this.findTestabilityInTree(t, n.host, !0)
                          : this.findTestabilityInTree(t, n.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: $p, useClass: ou, deps: [me, iu, si] },
          { provide: ou, useClass: ou, deps: [me, iu, si] },
        ],
        Yg = [
          { provide: Ys, useValue: "root" },
          {
            provide: xn,
            useFactory: function HS() {
              return new xn();
            },
            deps: [],
          },
          { provide: bi, useClass: OS, multi: !0, deps: [yt, me, eu] },
          { provide: bi, useClass: jS, multi: !0, deps: [yt] },
          { provide: xu, useClass: xu, deps: [Si, zr, jr, Bg] },
          { provide: Sd, useExisting: xu },
          { provide: Lg, useExisting: zr },
          { provide: zr, useClass: zr, deps: [yt] },
          { provide: Si, useClass: Si, deps: [bi, me] },
          { provide: Ag, useClass: MS, deps: [] },
          [],
        ];
      let US = (() => {
        class e {
          constructor(n) {}
          static withServerTransition(n) {
            return {
              ngModule: e,
              providers: [
                { provide: jr, useValue: n.appId },
                { provide: Rg, useExisting: jr },
                bS,
              ],
            };
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(Zg, 12));
          }),
          (e.ɵmod = fn({ type: e })),
          (e.ɵinj = Kt({ providers: [...Yg, ...Kg], imports: [z0, bb] })),
          e
        );
      })();
      typeof window < "u" && window;
      const Jg = { now: () => (Jg.delegate || Date).now(), delegate: void 0 };
      class XS extends Qr {
        constructor(t = 1 / 0, n = 1 / 0, r = Jg) {
          super(),
            (this._bufferSize = t),
            (this._windowTime = n),
            (this._timestampProvider = r),
            (this._buffer = []),
            (this._infiniteTimeWindow = !0),
            (this._infiniteTimeWindow = n === 1 / 0),
            (this._bufferSize = Math.max(1, t)),
            (this._windowTime = Math.max(1, n));
        }
        next(t) {
          const {
            isStopped: n,
            _buffer: r,
            _infiniteTimeWindow: o,
            _timestampProvider: i,
            _windowTime: s,
          } = this;
          n || (r.push(t), !o && r.push(i.now() + s)),
            this._trimBuffer(),
            super.next(t);
        }
        _subscribe(t) {
          this._throwIfClosed(), this._trimBuffer();
          const n = this._innerSubscribe(t),
            { _infiniteTimeWindow: r, _buffer: o } = this,
            i = o.slice();
          for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2)
            t.next(i[s]);
          return this._checkFinalizedStatuses(t), n;
        }
        _trimBuffer() {
          const {
              _bufferSize: t,
              _timestampProvider: n,
              _buffer: r,
              _infiniteTimeWindow: o,
            } = this,
            i = (o ? 1 : 2) * t;
          if ((t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o)) {
            const s = n.now();
            let a = 0;
            for (let u = 1; u < r.length && r[u] <= s; u += 2) a = u;
            a && r.splice(0, a + 1);
          }
        }
      }
      const Mi = {
        schedule(e, t) {
          const n = setTimeout(e, t);
          return () => clearTimeout(n);
        },
        scheduleBeforeRender(e) {
          if (typeof window > "u") return Mi.schedule(e, 0);
          if (typeof window.requestAnimationFrame > "u")
            return Mi.schedule(e, 16);
          const t = window.requestAnimationFrame(e);
          return () => window.cancelAnimationFrame(t);
        },
      };
      let ju;
      function aM(e, t, n) {
        let r = n;
        return (
          (function eM(e) {
            return !!e && e.nodeType === Node.ELEMENT_NODE;
          })(e) &&
            t.some(
              (o, i) =>
                !(
                  "*" === o ||
                  !(function nM(e, t) {
                    if (!ju) {
                      const n = Element.prototype;
                      ju =
                        n.matches ||
                        n.matchesSelector ||
                        n.mozMatchesSelector ||
                        n.msMatchesSelector ||
                        n.oMatchesSelector ||
                        n.webkitMatchesSelector;
                    }
                    return e.nodeType === Node.ELEMENT_NODE && ju.call(e, t);
                  })(e, o) ||
                  ((r = i), 0)
                )
            ),
          r
        );
      }
      class lM {
        constructor(t, n) {
          this.componentFactory = n.get(Nn).resolveComponentFactory(t);
        }
        create(t) {
          return new cM(this.componentFactory, t);
        }
      }
      class cM {
        constructor(t, n) {
          (this.componentFactory = t),
            (this.injector = n),
            (this.eventEmitters = new XS(1)),
            (this.events = this.eventEmitters.pipe(
              (function QS(e, t) {
                return Wt((n, r) => {
                  let o = null,
                    i = 0,
                    s = !1;
                  const a = () => s && !o && r.complete();
                  n.subscribe(
                    qt(
                      r,
                      (u) => {
                        o?.unsubscribe();
                        let l = 0;
                        const c = i++;
                        Dt(e(u, c)).subscribe(
                          (o = qt(
                            r,
                            (d) => r.next(t ? t(u, d, c, l++) : d),
                            () => {
                              (o = null), a();
                            }
                          ))
                        );
                      },
                      () => {
                        (s = !0), a();
                      }
                    )
                  );
                });
              })((r) => Dl(...r))
            )),
            (this.componentRef = null),
            (this.viewChangeDetectorRef = null),
            (this.inputChanges = null),
            (this.hasInputChanges = !1),
            (this.implementsOnChanges = !1),
            (this.scheduledChangeDetectionFn = null),
            (this.scheduledDestroyFn = null),
            (this.initialInputValues = new Map()),
            (this.unchangedInputs = new Set(
              this.componentFactory.inputs.map(({ propName: r }) => r)
            )),
            (this.ngZone = this.injector.get(me)),
            (this.elementZone =
              typeof Zone > "u" ? null : this.ngZone.run(() => Zone.current));
        }
        connect(t) {
          this.runInZone(() => {
            if (null !== this.scheduledDestroyFn)
              return (
                this.scheduledDestroyFn(), void (this.scheduledDestroyFn = null)
              );
            null === this.componentRef && this.initializeComponent(t);
          });
        }
        disconnect() {
          this.runInZone(() => {
            null === this.componentRef ||
              null !== this.scheduledDestroyFn ||
              (this.scheduledDestroyFn = Mi.schedule(() => {
                null !== this.componentRef &&
                  (this.componentRef.destroy(),
                  (this.componentRef = null),
                  (this.viewChangeDetectorRef = null));
              }, 10));
          });
        }
        getInputValue(t) {
          return this.runInZone(() =>
            null === this.componentRef
              ? this.initialInputValues.get(t)
              : this.componentRef.instance[t]
          );
        }
        setInputValue(t, n) {
          this.runInZone(() => {
            null !== this.componentRef
              ? ((function rM(e, t) {
                  return e === t || (e != e && t != t);
                })(n, this.getInputValue(t)) &&
                  (void 0 !== n || !this.unchangedInputs.has(t))) ||
                (this.recordInputChange(t, n),
                this.unchangedInputs.delete(t),
                (this.hasInputChanges = !0),
                (this.componentRef.instance[t] = n),
                this.scheduleDetectChanges())
              : this.initialInputValues.set(t, n);
          });
        }
        initializeComponent(t) {
          const n = Mt.create({ providers: [], parent: this.injector }),
            r = (function sM(e, t) {
              const n = e.childNodes,
                r = t.map(() => []);
              let o = -1;
              t.some((i, s) => "*" === i && ((o = s), !0));
              for (let i = 0, s = n.length; i < s; ++i) {
                const a = n[i],
                  u = aM(a, t, o);
                -1 !== u && r[u].push(a);
              }
              return r;
            })(t, this.componentFactory.ngContentSelectors);
          (this.componentRef = this.componentFactory.create(n, r, t)),
            (this.viewChangeDetectorRef = this.componentRef.injector.get(eg)),
            (this.implementsOnChanges = (function tM(e) {
              return "function" == typeof e;
            })(this.componentRef.instance.ngOnChanges)),
            this.initializeInputs(),
            this.initializeOutputs(this.componentRef),
            this.detectChanges(),
            this.injector.get(ai).attachView(this.componentRef.hostView);
        }
        initializeInputs() {
          this.componentFactory.inputs.forEach(({ propName: t }) => {
            this.initialInputValues.has(t) &&
              this.setInputValue(t, this.initialInputValues.get(t));
          }),
            this.initialInputValues.clear();
        }
        initializeOutputs(t) {
          const n = this.componentFactory.outputs.map(
            ({ propName: r, templateName: o }) =>
              t.instance[r].pipe(cn((s) => ({ name: o, value: s })))
          );
          this.eventEmitters.next(n);
        }
        callNgOnChanges(t) {
          if (!this.implementsOnChanges || null === this.inputChanges) return;
          const n = this.inputChanges;
          (this.inputChanges = null), t.instance.ngOnChanges(n);
        }
        markViewForCheck(t) {
          this.hasInputChanges &&
            ((this.hasInputChanges = !1), t.markForCheck());
        }
        scheduleDetectChanges() {
          this.scheduledChangeDetectionFn ||
            (this.scheduledChangeDetectionFn = Mi.scheduleBeforeRender(() => {
              (this.scheduledChangeDetectionFn = null), this.detectChanges();
            }));
        }
        recordInputChange(t, n) {
          if (!this.implementsOnChanges) return;
          null === this.inputChanges && (this.inputChanges = {});
          const r = this.inputChanges[t];
          if (r) return void (r.currentValue = n);
          const o = this.unchangedInputs.has(t),
            i = o ? void 0 : this.getInputValue(t);
          this.inputChanges[t] = new Ll(i, n, o);
        }
        detectChanges() {
          null !== this.componentRef &&
            (this.callNgOnChanges(this.componentRef),
            this.markViewForCheck(this.viewChangeDetectorRef),
            this.componentRef.changeDetectorRef.detectChanges());
        }
        runInZone(t) {
          return this.elementZone && Zone.current !== this.elementZone
            ? this.ngZone.run(t)
            : t();
        }
      }
      class dM extends HTMLElement {
        constructor() {
          super(...arguments), (this.ngElementEventsSubscription = null);
        }
      }
      class Ti {}
      class Bu {}
      class Rt {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  "string" == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split("\n").forEach((n) => {
                            const r = n.indexOf(":");
                            if (r > 0) {
                              const o = n.slice(0, r),
                                i = o.toLowerCase(),
                                s = n.slice(r + 1).trim();
                              this.maybeSetNormalizedName(o, i),
                                this.headers.has(i)
                                  ? this.headers.get(i).push(s)
                                  : this.headers.set(i, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((n) => {
                            let r = t[n];
                            const o = n.toLowerCase();
                            "string" == typeof r && (r = [r]),
                              r.length > 0 &&
                                (this.headers.set(o, r),
                                this.maybeSetNormalizedName(n, o));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const n = this.headers.get(t.toLowerCase());
          return n && n.length > 0 ? n[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, n) {
          return this.clone({ name: t, value: n, op: "a" });
        }
        set(t, n) {
          return this.clone({ name: t, value: n, op: "s" });
        }
        delete(t, n) {
          return this.clone({ name: t, value: n, op: "d" });
        }
        maybeSetNormalizedName(t, n) {
          this.normalizedNames.has(n) || this.normalizedNames.set(n, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Rt
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((n) => {
              this.headers.set(n, t.headers.get(n)),
                this.normalizedNames.set(n, t.normalizedNames.get(n));
            });
        }
        clone(t) {
          const n = new Rt();
          return (
            (n.lazyInit =
              this.lazyInit && this.lazyInit instanceof Rt
                ? this.lazyInit
                : this),
            (n.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            n
          );
        }
        applyUpdate(t) {
          const n = t.name.toLowerCase();
          switch (t.op) {
            case "a":
            case "s":
              let r = t.value;
              if (("string" == typeof r && (r = [r]), 0 === r.length)) return;
              this.maybeSetNormalizedName(t.name, n);
              const o = ("a" === t.op ? this.headers.get(n) : void 0) || [];
              o.push(...r), this.headers.set(n, o);
              break;
            case "d":
              const i = t.value;
              if (i) {
                let s = this.headers.get(n);
                if (!s) return;
                (s = s.filter((a) => -1 === i.indexOf(a))),
                  0 === s.length
                    ? (this.headers.delete(n), this.normalizedNames.delete(n))
                    : this.headers.set(n, s);
              } else this.headers.delete(n), this.normalizedNames.delete(n);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((n) =>
              t(this.normalizedNames.get(n), this.headers.get(n))
            );
        }
      }
      class mM {
        encodeKey(t) {
          return em(t);
        }
        encodeValue(t) {
          return em(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      const DM = /%(\d[a-f0-9])/gi,
        vM = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function em(e) {
        return encodeURIComponent(e).replace(DM, (t, n) => vM[n] ?? t);
      }
      function Ai(e) {
        return `${e}`;
      }
      class Ut {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new mM()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function yM(e, t) {
              const n = new Map();
              return (
                e.length > 0 &&
                  e
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((o) => {
                      const i = o.indexOf("="),
                        [s, a] =
                          -1 == i
                            ? [t.decodeKey(o), ""]
                            : [
                                t.decodeKey(o.slice(0, i)),
                                t.decodeValue(o.slice(i + 1)),
                              ],
                        u = n.get(s) || [];
                      u.push(a), n.set(s, u);
                    }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((n) => {
                  const r = t.fromObject[n],
                    o = Array.isArray(r) ? r.map(Ai) : [Ai(r)];
                  this.map.set(n, o);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const n = this.map.get(t);
          return n ? n[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, n) {
          return this.clone({ param: t, value: n, op: "a" });
        }
        appendAll(t) {
          const n = [];
          return (
            Object.keys(t).forEach((r) => {
              const o = t[r];
              Array.isArray(o)
                ? o.forEach((i) => {
                    n.push({ param: r, value: i, op: "a" });
                  })
                : n.push({ param: r, value: o, op: "a" });
            }),
            this.clone(n)
          );
        }
        set(t, n) {
          return this.clone({ param: t, value: n, op: "s" });
        }
        delete(t, n) {
          return this.clone({ param: t, value: n, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const n = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((r) => n + "=" + this.encoder.encodeValue(r))
                  .join("&");
              })
              .filter((t) => "" !== t)
              .join("&")
          );
        }
        clone(t) {
          const n = new Ut({ encoder: this.encoder });
          return (
            (n.cloneFrom = this.cloneFrom || this),
            (n.updates = (this.updates || []).concat(t)),
            n
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case "a":
                  case "s":
                    const n =
                      ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                    n.push(Ai(t.value)), this.map.set(t.param, n);
                    break;
                  case "d":
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let r = this.map.get(t.param) || [];
                      const o = r.indexOf(Ai(t.value));
                      -1 !== o && r.splice(o, 1),
                        r.length > 0
                          ? this.map.set(t.param, r)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class wM {
        constructor() {
          this.map = new Map();
        }
        set(t, n) {
          return this.map.set(t, n), this;
        }
        get(t) {
          return (
            this.map.has(t) || this.map.set(t, t.defaultValue()),
            this.map.get(t)
          );
        }
        delete(t) {
          return this.map.delete(t), this;
        }
        has(t) {
          return this.map.has(t);
        }
        keys() {
          return this.map.keys();
        }
      }
      function tm(e) {
        return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer;
      }
      function nm(e) {
        return typeof Blob < "u" && e instanceof Blob;
      }
      function rm(e) {
        return typeof FormData < "u" && e instanceof FormData;
      }
      class Gr {
        constructor(t, n, r, o) {
          let i;
          if (
            ((this.url = n),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = t.toUpperCase()),
            (function EM(e) {
              switch (e) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || o
              ? ((this.body = void 0 !== r ? r : null), (i = o))
              : (i = r),
            i &&
              ((this.reportProgress = !!i.reportProgress),
              (this.withCredentials = !!i.withCredentials),
              i.responseType && (this.responseType = i.responseType),
              i.headers && (this.headers = i.headers),
              i.context && (this.context = i.context),
              i.params && (this.params = i.params)),
            this.headers || (this.headers = new Rt()),
            this.context || (this.context = new wM()),
            this.params)
          ) {
            const s = this.params.toString();
            if (0 === s.length) this.urlWithParams = n;
            else {
              const a = n.indexOf("?");
              this.urlWithParams =
                n + (-1 === a ? "?" : a < n.length - 1 ? "&" : "") + s;
            }
          } else (this.params = new Ut()), (this.urlWithParams = n);
        }
        serializeBody() {
          return null === this.body
            ? null
            : tm(this.body) ||
              nm(this.body) ||
              rm(this.body) ||
              (function _M(e) {
                return (
                  typeof URLSearchParams < "u" && e instanceof URLSearchParams
                );
              })(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof Ut
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || rm(this.body)
            ? null
            : nm(this.body)
            ? this.body.type || null
            : tm(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Ut
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(t = {}) {
          const n = t.method || this.method,
            r = t.url || this.url,
            o = t.responseType || this.responseType,
            i = void 0 !== t.body ? t.body : this.body,
            s =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            a =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let u = t.headers || this.headers,
            l = t.params || this.params;
          const c = t.context ?? this.context;
          return (
            void 0 !== t.setHeaders &&
              (u = Object.keys(t.setHeaders).reduce(
                (d, f) => d.set(f, t.setHeaders[f]),
                u
              )),
            t.setParams &&
              (l = Object.keys(t.setParams).reduce(
                (d, f) => d.set(f, t.setParams[f]),
                l
              )),
            new Gr(n, r, i, {
              params: l,
              headers: u,
              context: c,
              reportProgress: a,
              responseType: o,
              withCredentials: s,
            })
          );
        }
      }
      var ce = (() => (
        ((ce = ce || {})[(ce.Sent = 0)] = "Sent"),
        (ce[(ce.UploadProgress = 1)] = "UploadProgress"),
        (ce[(ce.ResponseHeader = 2)] = "ResponseHeader"),
        (ce[(ce.DownloadProgress = 3)] = "DownloadProgress"),
        (ce[(ce.Response = 4)] = "Response"),
        (ce[(ce.User = 5)] = "User"),
        ce
      ))();
      class Hu {
        constructor(t, n = 200, r = "OK") {
          (this.headers = t.headers || new Rt()),
            (this.status = void 0 !== t.status ? t.status : n),
            (this.statusText = t.statusText || r),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Vu extends Hu {
        constructor(t = {}) {
          super(t), (this.type = ce.ResponseHeader);
        }
        clone(t = {}) {
          return new Vu({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class Ni extends Hu {
        constructor(t = {}) {
          super(t),
            (this.type = ce.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new Ni({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class om extends Hu {
        constructor(t) {
          super(t, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${t.url || "(unknown url)"}`
                : `Http failure response for ${t.url || "(unknown url)"}: ${
                    t.status
                  } ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function $u(e, t) {
        return {
          body: t,
          headers: e.headers,
          context: e.context,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      let im = (() => {
        class e {
          constructor(n) {
            this.handler = n;
          }
          request(n, r, o = {}) {
            let i;
            if (n instanceof Gr) i = n;
            else {
              let u, l;
              (u = o.headers instanceof Rt ? o.headers : new Rt(o.headers)),
                o.params &&
                  (l =
                    o.params instanceof Ut
                      ? o.params
                      : new Ut({ fromObject: o.params })),
                (i = new Gr(n, r, void 0 !== o.body ? o.body : null, {
                  headers: u,
                  context: o.context,
                  params: l,
                  reportProgress: o.reportProgress,
                  responseType: o.responseType || "json",
                  withCredentials: o.withCredentials,
                }));
            }
            const s = (function hM(...e) {
              return yl(e, hl(e));
            })(i).pipe(
              (function pM(e, t) {
                return X(t) ? Jr(e, t, 1) : Jr(e, 1);
              })((u) => this.handler.handle(u))
            );
            if (n instanceof Gr || "events" === o.observe) return s;
            const a = s.pipe(
              (function gM(e, t) {
                return Wt((n, r) => {
                  let o = 0;
                  n.subscribe(qt(r, (i) => e.call(t, i, o++) && r.next(i)));
                });
              })((u) => u instanceof Ni)
            );
            switch (o.observe || "body") {
              case "body":
                switch (i.responseType) {
                  case "arraybuffer":
                    return a.pipe(
                      cn((u) => {
                        if (null !== u.body && !(u.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return u.body;
                      })
                    );
                  case "blob":
                    return a.pipe(
                      cn((u) => {
                        if (null !== u.body && !(u.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return u.body;
                      })
                    );
                  case "text":
                    return a.pipe(
                      cn((u) => {
                        if (null !== u.body && "string" != typeof u.body)
                          throw new Error("Response is not a string.");
                        return u.body;
                      })
                    );
                  default:
                    return a.pipe(cn((u) => u.body));
                }
              case "response":
                return a;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${o.observe}}`
                );
            }
          }
          delete(n, r = {}) {
            return this.request("DELETE", n, r);
          }
          get(n, r = {}) {
            return this.request("GET", n, r);
          }
          head(n, r = {}) {
            return this.request("HEAD", n, r);
          }
          jsonp(n, r) {
            return this.request("JSONP", n, {
              params: new Ut().append(r, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(n, r = {}) {
            return this.request("OPTIONS", n, r);
          }
          patch(n, r, o = {}) {
            return this.request("PATCH", n, $u(o, r));
          }
          post(n, r, o = {}) {
            return this.request("POST", n, $u(o, r));
          }
          put(n, r, o = {}) {
            return this.request("PUT", n, $u(o, r));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(Ti));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function sm(e, t) {
        return t(e);
      }
      function CM(e, t) {
        return (n, r) => t.intercept(n, { handle: (o) => e(o, r) });
      }
      const bM = new A("HTTP_INTERCEPTORS"),
        Wr = new A("HTTP_INTERCEPTOR_FNS");
      function SM() {
        let e = null;
        return (t, n) => (
          null === e &&
            (e = (rr(bM, { optional: !0 }) ?? []).reduceRight(CM, sm)),
          e(t, n)
        );
      }
      let am = (() => {
        class e extends Ti {
          constructor(n, r) {
            super(),
              (this.backend = n),
              (this.injector = r),
              (this.chain = null);
          }
          handle(n) {
            if (null === this.chain) {
              const r = Array.from(new Set(this.injector.get(Wr)));
              this.chain = r.reduceRight(
                (o, i) =>
                  (function IM(e, t, n) {
                    return (r, o) => n.runInContext(() => t(r, (i) => e(i, o)));
                  })(o, i, this.injector),
                sm
              );
            }
            return this.chain(n, (r) => this.backend.handle(r));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(Bu), O(rn));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const NM = /^\)\]\}',?\n/;
      let lm = (() => {
        class e {
          constructor(n) {
            this.xhrFactory = n;
          }
          handle(n) {
            if ("JSONP" === n.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
              );
            return new _e((r) => {
              const o = this.xhrFactory.build();
              if (
                (o.open(n.method, n.urlWithParams),
                n.withCredentials && (o.withCredentials = !0),
                n.headers.forEach((h, p) => o.setRequestHeader(h, p.join(","))),
                n.headers.has("Accept") ||
                  o.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*"
                  ),
                !n.headers.has("Content-Type"))
              ) {
                const h = n.detectContentTypeHeader();
                null !== h && o.setRequestHeader("Content-Type", h);
              }
              if (n.responseType) {
                const h = n.responseType.toLowerCase();
                o.responseType = "json" !== h ? h : "text";
              }
              const i = n.serializeBody();
              let s = null;
              const a = () => {
                  if (null !== s) return s;
                  const h = o.statusText || "OK",
                    p = new Rt(o.getAllResponseHeaders()),
                    g =
                      (function PM(e) {
                        return "responseURL" in e && e.responseURL
                          ? e.responseURL
                          : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                          ? e.getResponseHeader("X-Request-URL")
                          : null;
                      })(o) || n.url;
                  return (
                    (s = new Vu({
                      headers: p,
                      status: o.status,
                      statusText: h,
                      url: g,
                    })),
                    s
                  );
                },
                u = () => {
                  let { headers: h, status: p, statusText: g, url: v } = a(),
                    y = null;
                  204 !== p &&
                    (y = typeof o.response > "u" ? o.responseText : o.response),
                    0 === p && (p = y ? 200 : 0);
                  let E = p >= 200 && p < 300;
                  if ("json" === n.responseType && "string" == typeof y) {
                    const m = y;
                    y = y.replace(NM, "");
                    try {
                      y = "" !== y ? JSON.parse(y) : null;
                    } catch (b) {
                      (y = m), E && ((E = !1), (y = { error: b, text: y }));
                    }
                  }
                  E
                    ? (r.next(
                        new Ni({
                          body: y,
                          headers: h,
                          status: p,
                          statusText: g,
                          url: v || void 0,
                        })
                      ),
                      r.complete())
                    : r.error(
                        new om({
                          error: y,
                          headers: h,
                          status: p,
                          statusText: g,
                          url: v || void 0,
                        })
                      );
                },
                l = (h) => {
                  const { url: p } = a(),
                    g = new om({
                      error: h,
                      status: o.status || 0,
                      statusText: o.statusText || "Unknown Error",
                      url: p || void 0,
                    });
                  r.error(g);
                };
              let c = !1;
              const d = (h) => {
                  c || (r.next(a()), (c = !0));
                  let p = { type: ce.DownloadProgress, loaded: h.loaded };
                  h.lengthComputable && (p.total = h.total),
                    "text" === n.responseType &&
                      o.responseText &&
                      (p.partialText = o.responseText),
                    r.next(p);
                },
                f = (h) => {
                  let p = { type: ce.UploadProgress, loaded: h.loaded };
                  h.lengthComputable && (p.total = h.total), r.next(p);
                };
              return (
                o.addEventListener("load", u),
                o.addEventListener("error", l),
                o.addEventListener("timeout", l),
                o.addEventListener("abort", l),
                n.reportProgress &&
                  (o.addEventListener("progress", d),
                  null !== i &&
                    o.upload &&
                    o.upload.addEventListener("progress", f)),
                o.send(i),
                r.next({ type: ce.Sent }),
                () => {
                  o.removeEventListener("error", l),
                    o.removeEventListener("abort", l),
                    o.removeEventListener("load", u),
                    o.removeEventListener("timeout", l),
                    n.reportProgress &&
                      (o.removeEventListener("progress", d),
                      null !== i &&
                        o.upload &&
                        o.upload.removeEventListener("progress", f)),
                    o.readyState !== o.DONE && o.abort();
                }
              );
            });
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(Ag));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Uu = new A("XSRF_ENABLED"),
        cm = new A("XSRF_COOKIE_NAME", {
          providedIn: "root",
          factory: () => "XSRF-TOKEN",
        }),
        dm = new A("XSRF_HEADER_NAME", {
          providedIn: "root",
          factory: () => "X-XSRF-TOKEN",
        });
      class fm {}
      let RM = (() => {
        class e {
          constructor(n, r, o) {
            (this.doc = n),
              (this.platform = r),
              (this.cookieName = o),
              (this.lastCookieString = ""),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          getToken() {
            if ("server" === this.platform) return null;
            const n = this.doc.cookie || "";
            return (
              n !== this.lastCookieString &&
                (this.parseCount++,
                (this.lastToken = Dg(n, this.cookieName)),
                (this.lastCookieString = n)),
              this.lastToken
            );
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(O(yt), O(eu), O(cm));
          }),
          (e.ɵprov = z({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function OM(e, t) {
        const n = e.url.toLowerCase();
        if (
          !rr(Uu) ||
          "GET" === e.method ||
          "HEAD" === e.method ||
          n.startsWith("http://") ||
          n.startsWith("https://")
        )
          return t(e);
        const r = rr(fm).getToken(),
          o = rr(dm);
        return (
          null != r &&
            !e.headers.has(o) &&
            (e = e.clone({ headers: e.headers.set(o, r) })),
          t(e)
        );
      }
      var ie = (() => (
        ((ie = ie || {})[(ie.Interceptors = 0)] = "Interceptors"),
        (ie[(ie.LegacyInterceptors = 1)] = "LegacyInterceptors"),
        (ie[(ie.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
        (ie[(ie.NoXsrfProtection = 3)] = "NoXsrfProtection"),
        (ie[(ie.JsonpSupport = 4)] = "JsonpSupport"),
        (ie[(ie.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
        ie
      ))();
      function Qn(e, t) {
        return { ɵkind: e, ɵproviders: t };
      }
      function LM(...e) {
        const t = [
          im,
          lm,
          am,
          { provide: Ti, useExisting: am },
          { provide: Bu, useExisting: lm },
          { provide: Wr, useValue: OM, multi: !0 },
          { provide: Uu, useValue: !0 },
          { provide: fm, useClass: RM },
        ];
        for (const n of e) t.push(...n.ɵproviders);
        return (function Ov(e) {
          return { ɵproviders: e };
        })(t);
      }
      const hm = new A("LEGACY_INTERCEPTOR_FN");
      let jM = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = fn({ type: e })),
            (e.ɵinj = Kt({
              providers: [
                LM(
                  Qn(ie.LegacyInterceptors, [
                    { provide: hm, useFactory: SM },
                    { provide: Wr, useExisting: hm, multi: !0 },
                  ])
                ),
              ],
            })),
            e
          );
        })(),
        BM = (() => {
          class e {
            constructor(n) {
              this.httpClient = n;
            }
            getStarWarsData() {
              return this.httpClient.get("https://swapi.dev/api/starships/9/");
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(O(im));
            }),
            (e.ɵprov = z({ token: e, factory: e.ɵfac, providedIn: "root" })),
            e
          );
        })();
      function HM(e, t) {
        if (
          (1 & e &&
            (Qe(0, "div")(1, "h2", 2),
            At(2, "DATA"),
            Je(),
            Qe(3, "p"),
            At(4),
            Je(),
            Qe(5, "p"),
            At(6),
            Je(),
            Qe(7, "p"),
            At(8),
            Je(),
            Qe(9, "p"),
            At(10),
            Je()()),
          2 & e)
        ) {
          const n = Ff();
          Bt(4),
            an("Name: ", n.starWarsData.name, ""),
            Bt(2),
            an("Model: ", n.starWarsData.model, ""),
            Bt(2),
            an("Cargo capacity: ", n.starWarsData.cargo_capacity, ""),
            Bt(2),
            an("Length: ", n.starWarsData.length, "");
        }
      }
      let VM = (() => {
          class e {
            constructor(n) {
              (this.apiService = n),
                (this.textBtn = "Default text"),
                (this.clickEvent = new gt()),
                (this.title = "angular-web-component"),
                (this.data = "data from web component"),
                (this.starWarsData = null);
            }
            ngOnInit() {
              this.apiService.getStarWarsData().subscribe((n) => {
                console.log(n), (this.starWarsData = n);
              });
            }
            onClickBtn() {
              this.clickEvent.emit(this.data);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(k(BM));
            }),
            (e.ɵcmp = Ml({
              type: e,
              selectors: [["app-root"]],
              inputs: { textBtn: "textBtn" },
              outputs: { clickEvent: "clickEvent" },
              decls: 7,
              vars: 3,
              consts: [
                [3, "click"],
                [4, "ngIf"],
                [1, "title"],
              ],
              template: function (n, r) {
                1 & n &&
                  (Qe(0, "h1"),
                  At(1, "Micro frontend test"),
                  Je(),
                  Qe(2, "p"),
                  At(3),
                  Je(),
                  Qe(4, "button", 0),
                  Ma("click", function () {
                    return r.onClickBtn();
                  }),
                  At(5),
                  Je(),
                  (function If(e, t, n, r, o, i, s, a) {
                    const u = D(),
                      l = B(),
                      c = e + Y,
                      d = l.firstCreatePass
                        ? (function OE(e, t, n, r, o, i, s, a, u) {
                            const l = t.consts,
                              c = Ln(t, e, 4, s || null, kt(l, a));
                            ha(t, n, c, kt(l, u)), yo(t, c);
                            const d = (c.tView = fa(
                              2,
                              c,
                              r,
                              o,
                              i,
                              t.directiveRegistry,
                              t.pipeRegistry,
                              null,
                              t.schemas,
                              l
                            ));
                            return (
                              null !== t.queries &&
                                (t.queries.template(t, c),
                                (d.queries = t.queries.embeddedTView(c))),
                              c
                            );
                          })(c, l, u, t, n, r, o, i, s)
                        : l.data[c];
                    lt(d, !1);
                    const f = u[L].createComment("");
                    Fo(l, u, f, d),
                      we(f, u),
                      Uo(u, (u[c] = tf(f, u, f, d))),
                      ho(d) && ca(l, u, d),
                      null != s && da(u, d, a);
                  })(6, HM, 11, 4, "div", 1)),
                  2 & n &&
                    (Bt(3),
                    Xo(r.title),
                    Bt(2),
                    Xo(r.textBtn),
                    Bt(1),
                    _a("ngIf", r.starWarsData));
              },
              dependencies: [Cg],
              styles: [".title[_ngcontent-%COMP%]{color:red}"],
            })),
            e
          );
        })(),
        $M = (() => {
          class e {
            constructor(n) {
              this.injector = n;
              const r = (function fM(e, t) {
                const n = (function iM(e, t) {
                    return t.get(Nn).resolveComponentFactory(e).inputs;
                  })(e, t.injector),
                  r = t.strategyFactory || new lM(e, t.injector),
                  o = (function oM(e) {
                    const t = {};
                    return (
                      e.forEach(({ propName: n, templateName: r }) => {
                        t[
                          (function JS(e) {
                            return e.replace(
                              /[A-Z]/g,
                              (t) => `-${t.toLowerCase()}`
                            );
                          })(r)
                        ] = n;
                      }),
                      t
                    );
                  })(n);
                class i extends dM {
                  get ngElementStrategy() {
                    if (!this._ngElementStrategy) {
                      const a = (this._ngElementStrategy = r.create(
                        this.injector || t.injector
                      ));
                      n.forEach(({ propName: u }) => {
                        if (!this.hasOwnProperty(u)) return;
                        const l = this[u];
                        delete this[u], a.setInputValue(u, l);
                      });
                    }
                    return this._ngElementStrategy;
                  }
                  constructor(a) {
                    super(), (this.injector = a);
                  }
                  attributeChangedCallback(a, u, l, c) {
                    this.ngElementStrategy.setInputValue(o[a], l);
                  }
                  connectedCallback() {
                    let a = !1;
                    this.ngElementStrategy.events &&
                      (this.subscribeToEvents(), (a = !0)),
                      this.ngElementStrategy.connect(this),
                      a || this.subscribeToEvents();
                  }
                  disconnectedCallback() {
                    this._ngElementStrategy &&
                      this._ngElementStrategy.disconnect(),
                      this.ngElementEventsSubscription &&
                        (this.ngElementEventsSubscription.unsubscribe(),
                        (this.ngElementEventsSubscription = null));
                  }
                  subscribeToEvents() {
                    this.ngElementEventsSubscription =
                      this.ngElementStrategy.events.subscribe((a) => {
                        const u = new CustomEvent(a.name, { detail: a.value });
                        this.dispatchEvent(u);
                      });
                  }
                }
                return (
                  (i.observedAttributes = Object.keys(o)),
                  n.forEach(({ propName: s }) => {
                    Object.defineProperty(i.prototype, s, {
                      get() {
                        return this.ngElementStrategy.getInputValue(s);
                      },
                      set(a) {
                        this.ngElementStrategy.setInputValue(s, a);
                      },
                      configurable: !0,
                      enumerable: !0,
                    });
                  }),
                  i
                );
              })(VM, { injector: n });
              customElements.define("element-widget", r);
            }
            ngDoBootstrap() {}
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(O(Mt));
            }),
            (e.ɵmod = fn({ type: e })),
            (e.ɵinj = Kt({ imports: [US, jM] })),
            e
          );
        })();
      $S()
        .bootstrapModule($M)
        .catch((e) => console.error(e));
    },
  },
  (X) => {
    X((X.s = 396));
  },
]);
