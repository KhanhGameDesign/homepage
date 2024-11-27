! function() {
    "use strict";
    var t = [, function(t, e, r) {
            r.r(e), r.d(e, {
                ui: function() {
                    return u
                }
            });
            var n = r(2);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function i(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(r), !0).forEach((function(e) {
                        c(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function c(t, e, r) {
                var n;
                return n = function(t, e) {
                    if ("object" != o(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != o(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string"), (e = "symbol" == o(n) ? n : String(n)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var u = function(t, e) {
                n.SdkHandler.getInstance().sendRequest({
                    event: "render-ui",
                    data: a(a({}, t), {}, {
                        deviceData: {
                            width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                            height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
                            isPortrait: window.matchMedia("(orientation: portrait)").matches
                        }
                    })
                }).then((function(r) {
                    if (!document.querySelector('link[href="'.concat(r.css, '"]'))) {
                        var n = document.createElement("link");
                        n.href = r.css, n.rel = "stylesheet", document.head.appendChild(n)
                    }
                    var o = document.querySelector("#um-ui");
                    o && o.remove();
                    var i = document.createElement("div");
                    i.id = "um-ui", i.innerHTML = r.html, document.body.appendChild(i);
                    var a = document.querySelector('script[src="'.concat(r.script, '"]'));
                    a && a.remove();
                    var c = document.createElement("script");
                    if (c.src = r.script, document.head.appendChild(c), r.trackingData) {
                        r.trackingData.ggid = t.params.ggid;
                        var u = document.createElement("script");
                        u.id = "um-tracking-data", u.type = "application/json", u.textContent = JSON.stringify(r.trackingData), document.body.appendChild(u)
                    }
                    e && e()
                })).catch((function(t) {
                    e && e(t)
                }))
            }
        }, function(t, e, r) {
            r.r(e), r.d(e, {
                SdkHandler: function() {
                    return s
                }
            });
            var n = r(3);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function i() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                i = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    a = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    c = "function" == typeof Symbol ? Symbol : {},
                    u = c.iterator || "@@iterator",
                    l = c.asyncIterator || "@@asyncIterator",
                    s = c.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function h(t, e, r, n) {
                    var o = e && e.prototype instanceof b ? e : b,
                        i = Object.create(o.prototype),
                        c = new D(n || []);
                    return a(i, "_invoke", {
                        value: L(t, r, c)
                    }), i
                }

                function p(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = h;
                var y = "suspendedStart",
                    d = "suspendedYield",
                    v = "executing",
                    m = "completed",
                    g = {};

                function b() {}

                function w() {}

                function O() {}
                var j = {};
                f(j, u, (function() {
                    return this
                }));
                var P = Object.getPrototypeOf,
                    E = P && P(P(T([])));
                E && E !== r && n.call(E, u) && (j = E);
                var x = O.prototype = b.prototype = Object.create(j);

                function S(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function k(t, e) {
                    function r(i, a, c, u) {
                        var l = p(t[i], t, a);
                        if ("throw" !== l.type) {
                            var s = l.arg,
                                f = s.value;
                            return f && "object" == o(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                r("next", t, c, u)
                            }), (function(t) {
                                r("throw", t, c, u)
                            })) : e.resolve(f).then((function(t) {
                                s.value = t, c(s)
                            }), (function(t) {
                                return r("throw", t, c, u)
                            }))
                        }
                        u(l.arg)
                    }
                    var i;
                    a(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function L(e, r, n) {
                    var o = y;
                    return function(i, a) {
                        if (o === v) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var c = n.delegate;
                            if (c) {
                                var u = _(c, n);
                                if (u) {
                                    if (u === g) continue;
                                    return u
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === y) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = v;
                            var l = p(e, r, n);
                            if ("normal" === l.type) {
                                if (o = n.done ? m : d, l.arg === g) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (o = m, n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function _(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), g;
                    var i = p(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, g;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g)
                }

                function H(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function N(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function D(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(H, this), this.reset(!0)
                }

                function T(e) {
                    if (e || "" === e) {
                        var r = e[u];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var i = -1,
                                a = function r() {
                                    for (; ++i < e.length;)
                                        if (n.call(e, i)) return r.value = e[i], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(o(e) + " is not iterable")
                }
                return w.prototype = O, a(x, "constructor", {
                    value: O,
                    configurable: !0
                }), a(O, "constructor", {
                    value: w,
                    configurable: !0
                }), w.displayName = f(O, s, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, O) : (t.__proto__ = O, f(t, s, "GeneratorFunction")), t.prototype = Object.create(x), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, S(k.prototype), f(k.prototype, l, (function() {
                    return this
                })), e.AsyncIterator = k, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new k(h(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, S(x), f(x, s, "Generator"), f(x, u, (function() {
                    return this
                })), f(x, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = T, D.prototype = {
                    constructor: D,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(N), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return c.type = "throw", c.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                c = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var u = n.call(a, "catchLoc"),
                                    l = n.call(a, "finallyLoc");
                                if (u && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), N(r), g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    N(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), g
                    }
                }, e
            }

            function a(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function c(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, l(n.key), n)
                }
            }

            function u(t, e, r) {
                return (e = l(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function l(t) {
                var e = function(t, e) {
                    if ("object" != o(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != o(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == o(e) ? e : String(e)
            }
            var s = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), u(this, "initialized", !1), u(this, "completionHandlers", [])
                }
                var e, r, o;
                return e = t, r = [{
                    key: "init",
                    value: function(t, e) {
                        if (this.targetDomain && this.targetWindow && (t !== this.targetWindow || e !== this.targetDomain)) throw new Error("Cannot initialize with different target");
                        this.targetWindow = t, this.targetDomain = e, this.handler = new n.PostMessageHandler(t, e), this.initializeIfNeed((function() {}))
                    }
                }, {
                    key: "initializeIfNeed",
                    value: function(t) {
                        var e = this;
                        if (!this.handler) throw new Error("Not initialized");
                        this.initialized ? t() : (this.completionHandlers.push(t), 1 === this.completionHandlers.length && this.handler.setOnRequestHandler(function() {
                            var t, r = (t = i().mark((function t(r) {
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("___ping___" !== r.event) {
                                                t.next = 7;
                                                break
                                            }
                                            return e.initialized = !0, e.completionHandlers.forEach((function(t) {
                                                return t()
                                            })), e.completionHandlers = [], t.abrupt("return", {
                                                requestId: r.id,
                                                data: "___pong___"
                                            });
                                        case 7:
                                            throw new Error("Ping pong is required");
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })), function() {
                                var e = this,
                                    r = arguments;
                                return new Promise((function(n, o) {
                                    var i = t.apply(e, r);

                                    function c(t) {
                                        a(i, n, o, c, u, "next", t)
                                    }

                                    function u(t) {
                                        a(i, n, o, c, u, "throw", t)
                                    }
                                    c(void 0)
                                }))
                            });
                            return function(t) {
                                return r.apply(this, arguments)
                            }
                        }()))
                    }
                }, {
                    key: "setOnRequestHandler",
                    value: function(t) {
                        var e = this;
                        this.initializeIfNeed((function() {
                            e.handler.setOnRequestHandler(t)
                        }))
                    }
                }, {
                    key: "sendRequest",
                    value: function(t) {
                        var e = this;
                        return new Promise((function(r, n) {
                            e.initializeIfNeed((function() {
                                e.handler.sendRequest(t).then((function(t) {
                                    r(t)
                                })).catch((function(t) {
                                    n(t)
                                }))
                            }))
                        }))
                    }
                }, {
                    key: "cleanup",
                    value: function() {
                        var t;
                        null === (t = this.handler) || void 0 === t || t.cleanup()
                    }
                }], o = [{
                    key: "getInstance",
                    value: function() {
                        return t.instance || (t.instance = new t), t.instance
                    }
                }], r && c(e.prototype, r), o && c(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        }, function(t, e, r) {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function o() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                o = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    i = r.hasOwnProperty,
                    a = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    c = "function" == typeof Symbol ? Symbol : {},
                    u = c.iterator || "@@iterator",
                    l = c.asyncIterator || "@@asyncIterator",
                    s = c.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function h(t, e, r, n) {
                    var o = e && e.prototype instanceof b ? e : b,
                        i = Object.create(o.prototype),
                        c = new D(n || []);
                    return a(i, "_invoke", {
                        value: L(t, r, c)
                    }), i
                }

                function p(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = h;
                var y = "suspendedStart",
                    d = "suspendedYield",
                    v = "executing",
                    m = "completed",
                    g = {};

                function b() {}

                function w() {}

                function O() {}
                var j = {};
                f(j, u, (function() {
                    return this
                }));
                var P = Object.getPrototypeOf,
                    E = P && P(P(T([])));
                E && E !== r && i.call(E, u) && (j = E);
                var x = O.prototype = b.prototype = Object.create(j);

                function S(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function k(t, e) {
                    function r(o, a, c, u) {
                        var l = p(t[o], t, a);
                        if ("throw" !== l.type) {
                            var s = l.arg,
                                f = s.value;
                            return f && "object" == n(f) && i.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                r("next", t, c, u)
                            }), (function(t) {
                                r("throw", t, c, u)
                            })) : e.resolve(f).then((function(t) {
                                s.value = t, c(s)
                            }), (function(t) {
                                return r("throw", t, c, u)
                            }))
                        }
                        u(l.arg)
                    }
                    var o;
                    a(this, "_invoke", {
                        value: function(t, n) {
                            function i() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return o = o ? o.then(i, i) : i()
                        }
                    })
                }

                function L(e, r, n) {
                    var o = y;
                    return function(i, a) {
                        if (o === v) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var c = n.delegate;
                            if (c) {
                                var u = _(c, n);
                                if (u) {
                                    if (u === g) continue;
                                    return u
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === y) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = v;
                            var l = p(e, r, n);
                            if ("normal" === l.type) {
                                if (o = n.done ? m : d, l.arg === g) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (o = m, n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function _(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), g;
                    var i = p(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, g;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g)
                }

                function H(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function N(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function D(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(H, this), this.reset(!0)
                }

                function T(e) {
                    if (e || "" === e) {
                        var r = e[u];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                a = function r() {
                                    for (; ++o < e.length;)
                                        if (i.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(n(e) + " is not iterable")
                }
                return w.prototype = O, a(x, "constructor", {
                    value: O,
                    configurable: !0
                }), a(O, "constructor", {
                    value: w,
                    configurable: !0
                }), w.displayName = f(O, s, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, O) : (t.__proto__ = O, f(t, s, "GeneratorFunction")), t.prototype = Object.create(x), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, S(k.prototype), f(k.prototype, l, (function() {
                    return this
                })), e.AsyncIterator = k, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new k(h(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, S(x), f(x, s, "Generator"), f(x, u, (function() {
                    return this
                })), f(x, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = T, D.prototype = {
                    constructor: D,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(N), !e)
                            for (var r in this) "t" === r.charAt(0) && i.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function n(n, o) {
                            return c.type = "throw", c.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                c = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var u = i.call(a, "catchLoc"),
                                    l = i.call(a, "finallyLoc");
                                if (u && l) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), N(r), g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    N(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), g
                    }
                }, e
            }

            function i(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function a(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(r), !0).forEach((function(e) {
                        l(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, s(n.key), n)
                }
            }

            function l(t, e, r) {
                return (e = s(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function s(t) {
                var e = function(t, e) {
                    if ("object" != n(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(t, e || "default");
                        if ("object" != n(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == n(e) ? e : String(e)
            }
            r.r(e), r.d(e, {
                PostMessageHandler: function() {
                    return h
                },
                generateRandomString: function() {
                    return f
                }
            });
            var f = function(t) {
                    for (var e = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < t; n++) e += r.charAt(Math.floor(62 * Math.random()));
                    return e
                },
                h = function() {
                    function t(e, r) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), l(this, "requestHandlers", new Map), this.targetWindow = e, this.targetDomain = r, window.addEventListener("message", this.handleMessage.bind(this))
                    }
                    var e, r, n, a, s;
                    return e = t, r = [{
                        key: "sendRequest",
                        value: function(t) {
                            var e = this;
                            return new Promise((function(r, n) {
                                var o = f(24),
                                    i = c({
                                        type: "request",
                                        id: o
                                    }, t);
                                e.requestHandlers.set(o, {
                                    resolve: r,
                                    reject: n
                                }), e.targetWindow.postMessage(i, e.targetDomain)
                            }))
                        }
                    }, {
                        key: "setOnRequestHandler",
                        value: function(t) {
                            this.listenHandlers = t
                        }
                    }, {
                        key: "handleMessage",
                        value: (a = o().mark((function t(e) {
                            var r, n, i, a;
                            return o().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.source === this.targetWindow) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        if (!(r = e.data)) {
                                            t.next = 14;
                                            break
                                        }
                                        if ("response" !== r.type) {
                                            t.next = 9;
                                            break
                                        }(n = this.requestHandlers.get(r.requestId)) && (r.error ? n.reject(r.error) : n.resolve(r.data), this.requestHandlers.delete(r.requestId)), t.next = 14;
                                        break;
                                    case 9:
                                        return t.next = 11, this.listenHandlers(r);
                                    case 11:
                                        i = t.sent, a = c({
                                            type: "response"
                                        }, i), this.targetWindow.postMessage(a, this.targetDomain);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })), s = function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, n) {
                                var o = a.apply(t, e);

                                function c(t) {
                                    i(o, r, n, c, u, "next", t)
                                }

                                function u(t) {
                                    i(o, r, n, c, u, "throw", t)
                                }
                                c(void 0)
                            }))
                        }, function(t) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "cleanup",
                        value: function() {
                            window.removeEventListener("message", this.handleMessage.bind(this))
                        }
                    }], r && u(e.prototype, r), n && u(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }()
        }, function(t, e, r) {
            r.r(e), r.d(e, {
                init: function() {
                    return c
                }
            });
            var n = r(2);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function i(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(t, e, r) {
                var n;
                return n = function(t, e) {
                    if ("object" != o(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != o(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string"), (e = "symbol" == o(n) ? n : String(n)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var c = function(t) {
                var e, r;
                window.actionHub.config = t;
                var o = document.createElement("iframe"),
                    c = new URLSearchParams(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? i(Object(r), !0).forEach((function(e) {
                                a(t, e, r[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }))
                        }
                        return t
                    }({}, t));
                o.id = "utm-tracking-platform", o.src = "".concat(window.actionHub.staticPath, "/initialize?").concat(c), o.height = "0px", o.width = "0px", o.style.border = "none", o.style.display = "none", o.style.opacity = "0", document.body.appendChild(o), o.contentWindow && (n.SdkHandler.getInstance().init(o.contentWindow, window.actionHub.staticPath), null === (e = (r = window.actionHub).tracking) || void 0 === e || e.call(r, {
                    event: "event_tracking",
                    event_name: "SDK_Loaded",
                    device_id: "Null",
                    ggid: "Null",
                    client_id: t.clientId,
                    content_id: "Null",
                    data_info: {
                        domain: window.location.hostname,
                        version: window.actionHub.version
                    }
                }))
            }
        }, function(t, e, r) {
            r.r(e), r.d(e, {
                checkTrackingData: function() {
                    return i
                },
                tracking: function() {
                    return o
                }
            });
            var n = r(2),
                o = function(t, e) {
                    n.SdkHandler.getInstance().sendRequest({
                        event: "tracking",
                        data: t
                    }).then((function() {
                        null == e || e()
                    })).catch((function(t) {
                        null == e || e(t)
                    }))
                },
                i = function() {
                    n.SdkHandler.getInstance().sendRequest({
                        event: "check-tracking-data",
                        data: {}
                    })
                }
        }],
        e = {};

    function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var i = e[n] = {
            exports: {}
        };
        return t[n](i, i.exports, r), i.exports
    }
    r.d = function(t, e) {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var n = {};
    ! function() {
        r.r(n);
        var t = r(1),
            e = r(4),
            o = r(5);
        ! function(r, n) {
            var i = {
                ui: t.ui,
                init: e.init,
                tracking: o.tracking,
                checkTrackingData: o.checkTrackingData,
                staticPath: "https://ah.vnggames.com",
                version: null !== (n = "1.11.0") ? n : "n/a"
            };
            r.actionHub = i
        }(window)
    }()
}();