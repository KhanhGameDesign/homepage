(this["ssoWidget-1.3.5"] = this["ssoWidget-1.3.5"] || []).push([
    ["upWidget.1.3.5-5c19e016"], {
        "00b4": function(e, t, n) {
            "use strict";
            n("ac1f");
            var o = n("23e7"),
                r = n("c65b"),
                i = n("1626"),
                a = n("825a"),
                c = n("577e"),
                s = function() {
                    var e = !1,
                        t = /[ac]/;
                    return t.exec = function() {
                        return e = !0, /./.exec.apply(this, arguments)
                    }, !0 === t.test("abc") && e
                }(),
                u = /./.test;
            o({
                target: "RegExp",
                proto: !0,
                forced: !s
            }, {
                test: function(e) {
                    var t = a(this),
                        n = c(e),
                        o = t.exec;
                    if (!i(o)) return r(u, t, n);
                    var s = r(o, t, n);
                    return null !== s && (a(s), !0)
                }
            })
        },
        "107c": function(e, t, n) {
            "use strict";
            var o = n("d039"),
                r = n("da84"),
                i = r.RegExp;
            e.exports = o((function() {
                var e = i("(?<a>b)", "g");
                return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
            }))
        },
        1566: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("d3b7"), n("3ca3"), n("ddb0"), n("99af");
            var o = n("dde5"),
                r = n("4360"),
                i = {
                    name: "UserProfileLayout",
                    components: {
                        Button: function() {
                            return n.e("upWidget.1.3.5-775af252").then(n.bind(null, "2a7d"))
                        },
                        UserProfile: function() {
                            return n.e("upWidget.1.3.5-531a280e").then(n.bind(null, "1689"))
                        }
                    },
                    props: {
                        onLogout: {
                            type: Function,
                            default: function() {}
                        },
                        callback: {
                            type: Function,
                            default: function() {}
                        }
                    },
                    data: function() {
                        return {
                            isLoading: !0,
                            userInfo: {},
                            extendData: []
                        }
                    },
                    computed: {
                        clientId: function() {
                            return ggWidgetUtil.get(window.widgetSdkConfig, "config.clientId", 0)
                        }
                    },
                    mounted: function() {
                        var e = this;
                        (0, r.dispatch)("addLoadingFunc", {
                            userProfile: function() {
                                return e.isLoading = !1
                            }
                        }), setTimeout((function() {
                            e.onGetUserProfile()
                        }), 100)
                    },
                    methods: {
                        empty: ggWidgetUtil.empty,
                        onLogin: function() {
                            var e = this;
                            widgetHub.doAuthentication({
                                lang: this.$i18next.language,
                                callback: function() {
                                    e.isLoading = !1
                                }
                            })
                        },
                        onBtnLoginClicked: function() {
                            this.isLoading = !0, ggWidgetUtil.doTracking({
                                sdkType: "USER_PROFILE",
                                action: "login",
                                clientId: this.clientId,
                                callback: this.onLogin
                            })
                        },
                        onBtnLogoutClicked: function(e) {
                            var t = this;
                            ggWidgetUtil.doTracking({
                                sdkType: "USER_PROFILE",
                                action: "logout",
                                clientId: this.clientId,
                                callback: function() {
                                    (0, o.doLogout)({
                                        data: {
                                            ggid: t.userInfo.ggId
                                        },
                                        onSuccess: function() {
                                            t.onLogout(e)
                                        },
                                        onError: function(e) {
                                            console.error({
                                                error: e
                                            });
                                            var n = e.err,
                                                o = e.message,
                                                i = e.data.res;
                                            ggWidgetUtil.doTrackingError({
                                                sdkType: "USER_PROFILE",
                                                action: "logout",
                                                clientId: t.clientId,
                                                error: "[".concat(o, ":").concat(n, "] - ").concat(i)
                                            }), (0, r.dispatch)("addError", {
                                                type: "LOG_OUT",
                                                error: "[".concat(o, ":").concat(n, "] - ").concat(i)
                                            })
                                        }
                                    }), t.userInfo = {}
                                }
                            })
                        },
                        onUpdateExtendData: function(e) {
                            this.extendData = e
                        },
                        onGetUserProfile: function() {
                            var e = this;
                            this.userInfo = {}, this.isLoading = !0, (0, o.getUserInfo)({
                                onSuccess: function(t) {
                                    e.userInfo = t, e.isLoading = !1, e.$nextTick((function() {
                                        ggWidgetUtil.isFunction(e.callback) && e.callback({
                                            type: "USER_PROFILE_LOADED"
                                        })
                                    }))
                                },
                                onError: function(t) {
                                    console.error({
                                        error: t
                                    });
                                    var n = t.err,
                                        o = t.message,
                                        r = t.data.res;
                                    e.isLoading = !1, e.$nextTick((function() {
                                        ggWidgetUtil.isFunction(e.callback) && e.callback({
                                            type: "BUTTON_LOGIN"
                                        })
                                    })), ggWidgetUtil.doTrackingError({
                                        sdkType: "USER_PROFILE",
                                        action: "userInfo",
                                        clientId: ggWidgetUtil.get(window.widgetSdkConfig, "config.clientId", 0),
                                        error: "[".concat(o, ":").concat(n, "] - ").concat(r)
                                    }), console.error("[".concat(o, ":").concat(n, "] - ").concat(r))
                                }
                            })
                        }
                    }
                };
            t.default = i, e.exports = t.default
        },
        "226f": function(e, t, n) {
            "use strict";
            var o = n("dbce").default,
                r = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.renderUserProfile = u;
            var i = r(n("2b0e"));
            n("ddfe");
            var a = r(n("9e0c")),
                c = o(n("08ec")),
                s = n("5fb0");

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.DEFAULT_LANGUAGE,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                f({
                    lang: e,
                    config: t,
                    element: n,
                    callback: o
                })
            }
            var l = function() {},
                d = function() {};

            function f(e) {
                var t = e.element,
                    n = void 0 === t ? "gg-widget" : t,
                    o = e.lang,
                    r = void 0 === o ? s.DEFAULT_LANGUAGE : o,
                    u = e.config,
                    f = void 0 === u ? {} : u,
                    h = e.callback,
                    p = void 0 === h ? function() {} : h,
                    v = e.connectedCallback,
                    g = void 0 === v ? function() {} : v,
                    b = e.disconnectedCallback,
                    _ = void 0 === b ? function() {} : b;
                document.querySelector(n) instanceof HTMLElement && ((0, c.changeLanguage)(r), a.default.i18next = c.default, ggWidgetUtil.empty(f.customCSS) || ggWidgetUtil.addStyleTag("style-".concat(f.clientId), f.customCSS), i.default.customElement(n, a.default, {
                    props: ["onLogout", "callback"],
                    beforeCreateVueInstance: function(e) {
                        return ggWidgetUtil.isFunction(f.onLogout) || (f.onLogout = function() {}), e.propsData.onLogout = f.onLogout, e.propsData.callback = p, e
                    },
                    vueInstanceCreatedCallback: function() {
                        var e = document.querySelector(this.tagName.toLowerCase()).getVueInstance(),
                            t = e.onGetUserProfile,
                            n = e.onUpdateExtendData;
                        l = t, d = n
                    },
                    connectedCallback: g,
                    disconnectedCallback: _
                }))
            }
            e.exports.updateLocale = c.updateResources, e.exports.getUserProfile = function() {
                return l.apply(void 0, arguments)
            }, e.exports.updateExtendData = function() {
                return d.apply(void 0, arguments)
            }
        },
        2877: function(e, t, n) {
            "use strict";

            function o(e, t, n, o, r, i, a, c) {
                var s, u = "function" === typeof e ? e.options : e;
                if (t && (u.render = t, u.staticRenderFns = n, u._compiled = !0), o && (u.functional = !0), i && (u._scopeId = "data-v-" + i), a ? (s = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                    }, u._ssrRegister = s) : r && (s = c ? function() {
                        r.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : r), s)
                    if (u.functional) {
                        u._injectStyles = s;
                        var l = u.render;
                        u.render = function(e, t) {
                            return s.call(t), l(e, t)
                        }
                    } else {
                        var d = u.beforeCreate;
                        u.beforeCreate = d ? [].concat(d, s) : [s]
                    }
                return {
                    exports: e,
                    options: u
                }
            }
            n.d(t, "a", (function() {
                return o
            }))
        },
        "6dd8": function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    var n = function() {
                            if ("undefined" !== typeof Map) return Map;

                            function e(e, t) {
                                var n = -1;
                                return e.some((function(e, o) {
                                    return e[0] === t && (n = o, !0)
                                })), n
                            }
                            return function() {
                                function t() {
                                    this.__entries__ = []
                                }
                                return Object.defineProperty(t.prototype, "size", {
                                    get: function() {
                                        return this.__entries__.length
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), t.prototype.get = function(t) {
                                    var n = e(this.__entries__, t),
                                        o = this.__entries__[n];
                                    return o && o[1]
                                }, t.prototype.set = function(t, n) {
                                    var o = e(this.__entries__, t);
                                    ~o ? this.__entries__[o][1] = n : this.__entries__.push([t, n])
                                }, t.prototype.delete = function(t) {
                                    var n = this.__entries__,
                                        o = e(n, t);
                                    ~o && n.splice(o, 1)
                                }, t.prototype.has = function(t) {
                                    return !!~e(this.__entries__, t)
                                }, t.prototype.clear = function() {
                                    this.__entries__.splice(0)
                                }, t.prototype.forEach = function(e, t) {
                                    void 0 === t && (t = null);
                                    for (var n = 0, o = this.__entries__; n < o.length; n++) {
                                        var r = o[n];
                                        e.call(t, r[1], r[0])
                                    }
                                }, t
                            }()
                        }(),
                        o = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
                        r = function() {
                            return "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")()
                        }(),
                        i = function() {
                            return "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function(e) {
                                return setTimeout((function() {
                                    return e(Date.now())
                                }), 1e3 / 60)
                            }
                        }(),
                        a = 2;

                    function c(e, t) {
                        var n = !1,
                            o = !1,
                            r = 0;

                        function c() {
                            n && (n = !1, e()), o && u()
                        }

                        function s() {
                            i(c)
                        }

                        function u() {
                            var e = Date.now();
                            if (n) {
                                if (e - r < a) return;
                                o = !0
                            } else n = !0, o = !1, setTimeout(s, t);
                            r = e
                        }
                        return u
                    }
                    var s = 20,
                        u = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                        l = "undefined" !== typeof MutationObserver,
                        d = function() {
                            function e() {
                                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = c(this.refresh.bind(this), s)
                            }
                            return e.prototype.addObserver = function(e) {
                                ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                            }, e.prototype.removeObserver = function(e) {
                                var t = this.observers_,
                                    n = t.indexOf(e);
                                ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                            }, e.prototype.refresh = function() {
                                var e = this.updateObservers_();
                                e && this.refresh()
                            }, e.prototype.updateObservers_ = function() {
                                var e = this.observers_.filter((function(e) {
                                    return e.gatherActive(), e.hasActive()
                                }));
                                return e.forEach((function(e) {
                                    return e.broadcastActive()
                                })), e.length > 0
                            }, e.prototype.connect_ = function() {
                                o && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                            }, e.prototype.disconnect_ = function() {
                                o && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                            }, e.prototype.onTransitionEnd_ = function(e) {
                                var t = e.propertyName,
                                    n = void 0 === t ? "" : t,
                                    o = u.some((function(e) {
                                        return !!~n.indexOf(e)
                                    }));
                                o && this.refresh()
                            }, e.getInstance = function() {
                                return this.instance_ || (this.instance_ = new e), this.instance_
                            }, e.instance_ = null, e
                        }(),
                        f = function(e, t) {
                            for (var n = 0, o = Object.keys(t); n < o.length; n++) {
                                var r = o[n];
                                Object.defineProperty(e, r, {
                                    value: t[r],
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                })
                            }
                            return e
                        },
                        h = function(e) {
                            var t = e && e.ownerDocument && e.ownerDocument.defaultView;
                            return t || r
                        },
                        p = T(0, 0, 0, 0);

                    function v(e) {
                        return parseFloat(e) || 0
                    }

                    function g(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        return t.reduce((function(t, n) {
                            var o = e["border-" + n + "-width"];
                            return t + v(o)
                        }), 0)
                    }

                    function b(e) {
                        for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, r = t; o < r.length; o++) {
                            var i = r[o],
                                a = e["padding-" + i];
                            n[i] = v(a)
                        }
                        return n
                    }

                    function _(e) {
                        var t = e.getBBox();
                        return T(0, 0, t.width, t.height)
                    }

                    function y(e) {
                        var t = e.clientWidth,
                            n = e.clientHeight;
                        if (!t && !n) return p;
                        var o = h(e).getComputedStyle(e),
                            r = b(o),
                            i = r.left + r.right,
                            a = r.top + r.bottom,
                            c = v(o.width),
                            s = v(o.height);
                        if ("border-box" === o.boxSizing && (Math.round(c + i) !== t && (c -= g(o, "left", "right") + i), Math.round(s + a) !== n && (s -= g(o, "top", "bottom") + a)), !w(e)) {
                            var u = Math.round(c + i) - t,
                                l = Math.round(s + a) - n;
                            1 !== Math.abs(u) && (c -= u), 1 !== Math.abs(l) && (s -= l)
                        }
                        return T(r.left, r.top, c, s)
                    }
                    var m = function() {
                        return "undefined" !== typeof SVGGraphicsElement ? function(e) {
                            return e instanceof h(e).SVGGraphicsElement
                        } : function(e) {
                            return e instanceof h(e).SVGElement && "function" === typeof e.getBBox
                        }
                    }();

                    function w(e) {
                        return e === h(e).document.documentElement
                    }

                    function E(e) {
                        return o ? m(e) ? _(e) : y(e) : p
                    }

                    function C(e) {
                        var t = e.x,
                            n = e.y,
                            o = e.width,
                            r = e.height,
                            i = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                            a = Object.create(i.prototype);
                        return f(a, {
                            x: t,
                            y: n,
                            width: o,
                            height: r,
                            top: n,
                            right: t + o,
                            bottom: r + n,
                            left: t
                        }), a
                    }

                    function T(e, t, n, o) {
                        return {
                            x: e,
                            y: t,
                            width: n,
                            height: o
                        }
                    }
                    var O = function() {
                            function e(e) {
                                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = T(0, 0, 0, 0), this.target = e
                            }
                            return e.prototype.isActive = function() {
                                var e = E(this.target);
                                return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                            }, e.prototype.broadcastRect = function() {
                                var e = this.contentRect_;
                                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                            }, e
                        }(),
                        x = function() {
                            function e(e, t) {
                                var n = C(t);
                                f(this, {
                                    target: e,
                                    contentRect: n
                                })
                            }
                            return e
                        }(),
                        k = function() {
                            function e(e, t, o) {
                                if (this.activeObservations_ = [], this.observations_ = new n, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                                this.callback_ = e, this.controller_ = t, this.callbackCtx_ = o
                            }
                            return e.prototype.observe = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof h(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) || (t.set(e, new O(e)), this.controller_.addObserver(this), this.controller_.refresh())
                                }
                            }, e.prototype.unobserve = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof h(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                                }
                            }, e.prototype.disconnect = function() {
                                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                            }, e.prototype.gatherActive = function() {
                                var e = this;
                                this.clearActive(), this.observations_.forEach((function(t) {
                                    t.isActive() && e.activeObservations_.push(t)
                                }))
                            }, e.prototype.broadcastActive = function() {
                                if (this.hasActive()) {
                                    var e = this.callbackCtx_,
                                        t = this.activeObservations_.map((function(e) {
                                            return new x(e.target, e.broadcastRect())
                                        }));
                                    this.callback_.call(e, t, e), this.clearActive()
                                }
                            }, e.prototype.clearActive = function() {
                                this.activeObservations_.splice(0)
                            }, e.prototype.hasActive = function() {
                                return this.activeObservations_.length > 0
                            }, e
                        }(),
                        L = "undefined" !== typeof WeakMap ? new WeakMap : new n,
                        S = function() {
                            function e(t) {
                                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                var n = d.getInstance(),
                                    o = new k(t, n, this);
                                L.set(this, o)
                            }
                            return e
                        }();
                    ["observe", "unobserve", "disconnect"].forEach((function(e) {
                        S.prototype[e] = function() {
                            var t;
                            return (t = L.get(this))[e].apply(t, arguments)
                        }
                    }));
                    var I = function() {
                        return "undefined" !== typeof r.ResizeObserver ? r.ResizeObserver : S
                    }();
                    t["default"] = I
                }.call(this, n("c8ba"))
        },
        7025: function(e, t) {
            (function() {
                "use strict";
                var e = function(e, t) {
                    var n = function(e) {
                            for (var t = 0, n = e.length; t < n; t++) o(e[t])
                        },
                        o = function(e) {
                            var t = e.target,
                                n = e.attributeName,
                                o = e.oldValue;
                            t.attributeChangedCallback(n, o, t.getAttribute(n))
                        };
                    return function(r, i) {
                        var a = r.constructor.observedAttributes;
                        return a && e(i).then((function() {
                            new t(n).observe(r, {
                                attributes: !0,
                                attributeOldValue: !0,
                                attributeFilter: a
                            });
                            for (var e = 0, i = a.length; e < i; e++) r.hasAttribute(a[e]) && o({
                                target: r,
                                attributeName: a[e],
                                oldValue: null
                            })
                        })), r
                    }
                };

                function t(e, t) {
                    if (e) {
                        if ("string" === typeof e) return n(e, t);
                        var o = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? n(e, t) : void 0
                    }
                }

                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o
                }

                function o(e, n) {
                    var o = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!o) {
                        if (Array.isArray(e) || (o = t(e)) || n && e && "number" === typeof e.length) {
                            o && (e = o);
                            var r = 0,
                                i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, c = !0,
                        s = !1;
                    return {
                        s: function() {
                            o = o.call(e)
                        },
                        n: function() {
                            var e = o.next();
                            return c = e.done, e
                        },
                        e: function(e) {
                            s = !0, a = e
                        },
                        f: function() {
                            try {
                                c || null == o.return || o.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                    }
                }
                var r = !0,
                    i = !1,
                    a = "querySelectorAll",
                    c = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MutationObserver,
                            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ["*"],
                            s = function t(n, i, c, s, u, l) {
                                var d, f = o(n);
                                try {
                                    for (f.s(); !(d = f.n()).done;) {
                                        var h = d.value;
                                        (l || a in h) && (u ? c.has(h) || (c.add(h), s["delete"](h), e(h, u)) : s.has(h) || (s.add(h), c["delete"](h), e(h, u)), l || t(h[a](i), i, c, s, u, r))
                                    }
                                } catch (p) {
                                    f.e(p)
                                } finally {
                                    f.f()
                                }
                            },
                            u = new n((function(e) {
                                if (c.length) {
                                    var t, n = c.join(","),
                                        a = new Set,
                                        u = new Set,
                                        l = o(e);
                                    try {
                                        for (l.s(); !(t = l.n()).done;) {
                                            var d = t.value,
                                                f = d.addedNodes,
                                                h = d.removedNodes;
                                            s(h, n, a, u, i, i), s(f, n, a, u, r, i)
                                        }
                                    } catch (p) {
                                        l.e(p)
                                    } finally {
                                        l.f()
                                    }
                                }
                            })),
                            l = u.observe;
                        return (u.observe = function(e) {
                            return l.call(u, e, {
                                subtree: r,
                                childList: r
                            })
                        })(t), u
                    },
                    s = "querySelectorAll",
                    u = self,
                    l = u.document,
                    d = u.Element,
                    f = u.MutationObserver,
                    h = u.Set,
                    p = u.WeakMap,
                    v = function(e) {
                        return s in e
                    },
                    g = [].filter,
                    b = function(e) {
                        var t = new p,
                            n = function(e) {
                                for (var n = 0, o = e.length; n < o; n++) t["delete"](e[n])
                            },
                            o = function() {
                                for (var e = _.takeRecords(), t = 0, n = e.length; t < n; t++) a(g.call(e[t].removedNodes, v), !1), a(g.call(e[t].addedNodes, v), !0)
                            },
                            r = function(e) {
                                return e.matches || e.webkitMatchesSelector || e.msMatchesSelector
                            },
                            i = function(n, o) {
                                var i;
                                if (o)
                                    for (var a, c = r(n), s = 0, l = u.length; s < l; s++) c.call(n, a = u[s]) && (t.has(n) || t.set(n, new h), i = t.get(n), i.has(a) || (i.add(a), e.handle(n, o, a)));
                                else t.has(n) && (i = t.get(n), t["delete"](n), i.forEach((function(t) {
                                    e.handle(n, o, t)
                                })))
                            },
                            a = function(e) {
                                for (var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = 0, o = e.length; n < o; n++) i(e[n], t)
                            },
                            u = e.query,
                            b = e.root || l,
                            _ = c(i, b, f, u),
                            y = d.prototype.attachShadow;
                        return y && (d.prototype.attachShadow = function(e) {
                            var t = y.call(this, e);
                            return _.observe(t), t
                        }), u.length && a(b[s](u)), {
                            drop: n,
                            flush: o,
                            observer: _,
                            parse: a
                        }
                    },
                    _ = self,
                    y = _.document,
                    m = _.Map,
                    w = _.MutationObserver,
                    E = _.Object,
                    C = _.Set,
                    T = _.WeakMap,
                    O = _.Element,
                    x = _.HTMLElement,
                    k = _.Node,
                    L = _.Error,
                    S = _.TypeError,
                    I = _.Reflect,
                    R = E.defineProperty,
                    M = E.keys,
                    A = E.getOwnPropertyNames,
                    U = E.setPrototypeOf,
                    P = !self.customElements,
                    D = function(e) {
                        for (var t = M(e), n = [], o = new C, r = t.length, i = 0; i < r; i++) {
                            n[i] = e[t[i]];
                            try {
                                delete e[t[i]]
                            } catch (a) {
                                o.add(i)
                            }
                        }
                        return function() {
                            for (var i = 0; i < r; i++) o.has(i) || (e[t[i]] = n[i])
                        }
                    };
                if (P) {
                    var N = function() {
                            var e = this.constructor;
                            if (!j.has(e)) throw new S("Illegal constructor");
                            var t = j.get(e);
                            if (z) return K(z, t);
                            var n = W.call(y, t);
                            return K(U(n, e.prototype), t)
                        },
                        W = y.createElement,
                        j = new m,
                        F = new m,
                        H = new m,
                        q = new m,
                        $ = [],
                        V = function(e, t, n) {
                            var o = H.get(n);
                            if (t && !o.isPrototypeOf(e)) {
                                var r = D(e);
                                z = U(e, o);
                                try {
                                    new o.constructor
                                } finally {
                                    z = null, r()
                                }
                            }
                            var i = "".concat(t ? "" : "dis", "connectedCallback");
                            i in o && e[i]()
                        },
                        G = b({
                            query: $,
                            handle: V
                        }),
                        B = G.parse,
                        z = null,
                        X = function(e) {
                            if (!F.has(e)) {
                                var t, n = new Promise((function(e) {
                                    t = e
                                }));
                                F.set(e, {
                                    $: n,
                                    _: t
                                })
                            }
                            return F.get(e).$
                        },
                        K = e(X, w);
                    self.customElements = {
                        define: function(e, t) {
                            if (q.has(e)) throw new L('the name "'.concat(e, '" has already been used with this registry'));
                            j.set(t, e), H.set(e, t.prototype), q.set(e, t), $.push(e), X(e).then((function() {
                                B(y.querySelectorAll(e))
                            })), F.get(e)._(t)
                        },
                        get: function(e) {
                            return q.get(e)
                        },
                        whenDefined: X
                    }, R(N.prototype = x.prototype, "constructor", {
                        value: N
                    }), self.HTMLElement = N, y.createElement = function(e, t) {
                        var n = t && t.is,
                            o = n ? q.get(n) : q.get(e);
                        return o ? new o : W.call(y, e)
                    }, "isConnected" in k.prototype || R(k.prototype, "isConnected", {
                        configurable: !0,
                        get: function() {
                            return !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED)
                        }
                    })
                } else if (P = !self.customElements.get("extends-br"), P) try {
                    var J = function e() {
                        return self.Reflect.construct(HTMLBRElement, [], e)
                    };
                    J.prototype = HTMLLIElement.prototype;
                    var Y = "extends-br";
                    self.customElements.define("extends-br", J, {
                        extends: "br"
                    }), P = y.createElement("br", {
                        is: Y
                    }).outerHTML.indexOf(Y) < 0;
                    var Q = self.customElements,
                        Z = Q.get,
                        ee = Q.whenDefined;
                    self.customElements.whenDefined = function(e) {
                        var t = this;
                        return ee.call(this, e).then((function(n) {
                            return n || Z.call(t, e)
                        }))
                    }
                } catch (ke) {}
                if (P) {
                    var te = function(e) {
                            var t = ue.get(e);
                            me(t.querySelectorAll(this), e.isConnected)
                        },
                        ne = self.customElements,
                        oe = y.createElement,
                        re = ne.define,
                        ie = ne.get,
                        ae = ne.upgrade,
                        ce = I || {
                            construct: function(e) {
                                return e.call(this)
                            }
                        },
                        se = ce.construct,
                        ue = new T,
                        le = new C,
                        de = new m,
                        fe = new m,
                        he = new m,
                        pe = new m,
                        ve = [],
                        ge = [],
                        be = function(e) {
                            return pe.get(e) || ie.call(ne, e)
                        },
                        _e = function(e, t, n) {
                            var o = he.get(n);
                            if (t && !o.isPrototypeOf(e)) {
                                var r = D(e);
                                xe = U(e, o);
                                try {
                                    new o.constructor
                                } finally {
                                    xe = null, r()
                                }
                            }
                            var i = "".concat(t ? "" : "dis", "connectedCallback");
                            i in o && e[i]()
                        },
                        ye = b({
                            query: ge,
                            handle: _e
                        }),
                        me = ye.parse,
                        we = b({
                            query: ve,
                            handle: function(e, t) {
                                ue.has(e) && (t ? le.add(e) : le["delete"](e), ge.length && te.call(ge, e))
                            }
                        }),
                        Ee = we.parse,
                        Ce = O.prototype.attachShadow;
                    Ce && (O.prototype.attachShadow = function(e) {
                        var t = Ce.call(this, e);
                        return ue.set(this, t), t
                    });
                    var Te = function(e) {
                            if (!fe.has(e)) {
                                var t, n = new Promise((function(e) {
                                    t = e
                                }));
                                fe.set(e, {
                                    $: n,
                                    _: t
                                })
                            }
                            return fe.get(e).$
                        },
                        Oe = e(Te, w),
                        xe = null;
                    A(self).filter((function(e) {
                        return /^HTML.*Element$/.test(e)
                    })).forEach((function(e) {
                        var t = self[e];

                        function n() {
                            var e = this.constructor;
                            if (!de.has(e)) throw new S("Illegal constructor");
                            var n = de.get(e),
                                o = n.is,
                                r = n.tag;
                            if (o) {
                                if (xe) return Oe(xe, o);
                                var i = oe.call(y, r);
                                return i.setAttribute("is", o), Oe(U(i, e.prototype), o)
                            }
                            return se.call(this, t, [], e)
                        }
                        R(n.prototype = t.prototype, "constructor", {
                            value: n
                        }), R(self, e, {
                            value: n
                        })
                    })), y.createElement = function(e, t) {
                        var n = t && t.is;
                        if (n) {
                            var o = pe.get(n);
                            if (o && de.get(o).tag === e) return new o
                        }
                        var r = oe.call(y, e);
                        return n && r.setAttribute("is", n), r
                    }, ne.get = be, ne.whenDefined = Te, ne.upgrade = function(e) {
                        var t = e.getAttribute("is");
                        if (t) {
                            var n = pe.get(t);
                            if (n) return void Oe(U(e, n.prototype), t)
                        }
                        ae.call(ne, e)
                    }, ne.define = function(e, t, n) {
                        if (be(e)) throw new L("'".concat(e, "' has already been defined as a custom element"));
                        var o, r = n && n["extends"];
                        de.set(t, r ? {
                            is: e,
                            tag: r
                        } : {
                            is: "",
                            tag: e
                        }), r ? (o = "".concat(r, '[is="').concat(e, '"]'), he.set(o, t.prototype), pe.set(e, t), ge.push(o)) : (re.apply(ne, arguments), ve.push(o = e)), Te(e).then((function() {
                            r ? (me(y.querySelectorAll(o)), le.forEach(te, [o])) : Ee(y.querySelectorAll(o))
                        })), fe.get(e)._(t)
                    }
                }
            })()
        },
        "726e": function(e, t, n) {
            "use strict";
            var o = n("aac7");
            n.o(o, "render") && n.d(t, "render", (function() {
                return o["render"]
            })), n.o(o, "staticRenderFns") && n.d(t, "staticRenderFns", (function() {
                return o["staticRenderFns"]
            }))
        },
        "75b9": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("1566"),
                r = n.n(o);
            for (var i in o)["default"].indexOf(i) < 0 && function(e) {
                n.d(t, e, (function() {
                    return o[e]
                }))
            }(i);
            t["default"] = r.a
        },
        9263: function(e, t, n) {
            "use strict";
            var o = n("c65b"),
                r = n("e330"),
                i = n("577e"),
                a = n("ad6d"),
                c = n("9f7f"),
                s = n("5692"),
                u = n("7c73"),
                l = n("69f3").get,
                d = n("fce3"),
                f = n("107c"),
                h = s("native-string-replace", String.prototype.replace),
                p = RegExp.prototype.exec,
                v = p,
                g = r("".charAt),
                b = r("".indexOf),
                _ = r("".replace),
                y = r("".slice),
                m = function() {
                    var e = /a/,
                        t = /b*/g;
                    return o(p, e, "a"), o(p, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
                }(),
                w = c.BROKEN_CARET,
                E = void 0 !== /()??/.exec("")[1],
                C = m || E || w || d || f;
            C && (v = function(e) {
                var t, n, r, c, s, d, f, C = this,
                    T = l(C),
                    O = i(e),
                    x = T.raw;
                if (x) return x.lastIndex = C.lastIndex, t = o(v, x, O), C.lastIndex = x.lastIndex, t;
                var k = T.groups,
                    L = w && C.sticky,
                    S = o(a, C),
                    I = C.source,
                    R = 0,
                    M = O;
                if (L && (S = _(S, "y", ""), -1 === b(S, "g") && (S += "g"), M = y(O, C.lastIndex), C.lastIndex > 0 && (!C.multiline || C.multiline && "\n" !== g(O, C.lastIndex - 1)) && (I = "(?: " + I + ")", M = " " + M, R++), n = new RegExp("^(?:" + I + ")", S)), E && (n = new RegExp("^" + I + "$(?!\\s)", S)), m && (r = C.lastIndex), c = o(p, L ? n : C, M), L ? c ? (c.input = y(c.input, R), c[0] = y(c[0], R), c.index = C.lastIndex, C.lastIndex += c[0].length) : C.lastIndex = 0 : m && c && (C.lastIndex = C.global ? c.index + c[0].length : r), E && c && c.length > 1 && o(h, c[0], n, (function() {
                        for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (c[s] = void 0)
                    })), c && k)
                    for (c.groups = d = u(null), s = 0; s < k.length; s++) f = k[s], d[f[0]] = c[f[1]];
                return c
            }), e.exports = v
        },
        "9e0c": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("726e"),
                r = n("75b9");
            for (var i in r)["default"].indexOf(i) < 0 && function(e) {
                n.d(t, e, (function() {
                    return r[e]
                }))
            }(i);
            var a = n("2877"),
                c = Object(a["a"])(r["default"], o["render"], o["staticRenderFns"], !1, null, null, null);
            t["default"] = c.exports
        },
        "9f7f": function(e, t, n) {
            "use strict";
            var o = n("d039"),
                r = n("da84"),
                i = r.RegExp,
                a = o((function() {
                    var e = i("a", "y");
                    return e.lastIndex = 2, null !== e.exec("abcd")
                })),
                c = a || o((function() {
                    return !i("a", "y").sticky
                })),
                s = a || o((function() {
                    var e = i("^r", "gy");
                    return e.lastIndex = 2, null !== e.exec("str")
                }));
            e.exports = {
                BROKEN_CARET: s,
                MISSED_STICKY: c,
                UNSUPPORTED_Y: a
            }
        },
        aac7: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.staticRenderFns = t.render = void 0;
            var o = function() {
                var e = this,
                    t = e._self._c;
                return e.empty(e.userInfo) ? t("Button", {
                    attrs: {
                        loading: e.isLoading
                    },
                    on: {
                        onClick: e.onBtnLoginClicked
                    }
                }, [e._v(" " + e._s(e.$t("button.login")) + " ")]) : t("UserProfile", {
                    attrs: {
                        "user-info": e.userInfo,
                        "extend-data": e.extendData
                    },
                    on: {
                        onLogout: e.onBtnLogoutClicked
                    }
                })
            };
            t.render = o;
            var r = [];
            t.staticRenderFns = r
        },
        ac1f: function(e, t, n) {
            "use strict";
            var o = n("23e7"),
                r = n("9263");
            o({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== r
            }, {
                exec: r
            })
        },
        ad6d: function(e, t, n) {
            "use strict";
            var o = n("825a");
            e.exports = function() {
                var e = o(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
            }
        },
        b775: function(e, t, n) {
            "use strict";
            var o = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.request = c;
            var r = o(n("5530"));
            n("ac1f"), n("00b4"), n("e9c4");
            var i = {
                requestTime: 3e4,
                dataType: "json"
            };

            function a(e) {
                try {
                    return window.XDomainRequest && /^https?:\/\//i.test(e) ? new window.XDomainRequest : window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
                } catch (t) {
                    console.error("Exception createXHR: ", t)
                }
            }

            function c() {
                var e, t, n, o, c, s, u = arguments.length <= 0 ? void 0 : arguments[0],
                    l = arguments.length <= 1 ? void 0 : arguments[1];
                ggWidgetUtil.isFunction(arguments.length <= 2 ? void 0 : arguments[2]) ? (e = {}, t = {}, n = arguments.length <= 2 ? void 0 : arguments[2], o = arguments.length <= 3 ? void 0 : arguments[3], c = arguments.length <= 4 ? void 0 : arguments[4]) : ggWidgetUtil.isFunction(arguments.length <= 3 ? void 0 : arguments[3]) ? (e = arguments.length <= 2 ? void 0 : arguments[2], t = {}, n = arguments.length <= 3 ? void 0 : arguments[3], o = arguments.length <= 4 ? void 0 : arguments[4], c = arguments.length <= 5 ? void 0 : arguments[5]) : (e = arguments.length <= 2 ? void 0 : arguments[2], t = (arguments.length <= 3 ? void 0 : arguments[3]) || {}, n = arguments.length <= 4 ? void 0 : arguments[4], o = arguments.length <= 5 ? void 0 : arguments[5], c = arguments.length <= 6 ? void 0 : arguments[6]), t = (0, r.default)((0, r.default)({}, i), t);
                var d = (new Date).getTime(),
                    f = t.requestTime,
                    h = a(l),
                    p = window.XDomainRequest && h instanceof window.XDomainRequest;

                function v() {
                    if (ggWidgetUtil.isFunction(n))
                        if ("json" === t.dataType) try {
                            var e = ggWidgetUtil.parseJSON(h.responseText);
                            e = (0, r.default)((0, r.default)({}, e), {}, {
                                duration: (new Date).getTime() - d
                            }), n.call(h, e)
                        } catch (o) {
                            g(o)
                        } else n.call(h, h.responseText)
                }

                function g(e) {
                    var t = {
                        e: e,
                        res: h.responseText
                    };
                    console.error("doError", e);
                    var n = {
                        err: 400,
                        message: "ERROR_REQUEST",
                        data: t,
                        duration: f
                    };
                    ggWidgetUtil.isFunction(o) && o.call(h, n)
                }

                function b() {
                    ggWidgetUtil.isFunction(c) && c.call(h, h.responseText)
                }
                "undefined" !== typeof h.onload ? (h.onload = function() {
                    clearTimeout(s), 200 === h.status || p && !ggWidgetUtil.empty(h.responseText) ? v() : g(h), b()
                }, h.onerror = function(e) {
                    clearTimeout(s), console.error("req.onerror", e), g(e), b()
                }) : h.onreadystatechange = function() {
                    console.info("req.onreadystatechange", h.status, h.responseText), 4 === h.readyState && (clearTimeout(s), 200 === h.status ? v() : g(h.status), b())
                }, h.onabort = function(e) {
                    clearTimeout(s), g(e), b()
                };
                try {
                    var _ = ggWidgetUtil.makeParams(e, u);
                    p && (u = "GET"), "GET" === u && _ && (l.indexOf("?") < 0 && (l += "?"), l += _), ggWidgetUtil.toBoolean(t.credentials) ? (h.open(u, l, !0), h.withCredentials = !0) : h.open(u, l), s = setTimeout((function() {
                        h.abort()
                    }), f), ggWidgetUtil.empty(t.authorization) || h.setRequestHeader("Authorization", t.bearerType + " " + t.authorization), "POST" !== u || p ? h.send(null) : ggWidgetUtil.empty(h.setRequestHeader) || (ggWidgetUtil.empty(t.contentType) ? (h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), h.send(_)) : (h.setRequestHeader("Content-Type", t.contentType), h.send(JSON.stringify(e))))
                } catch (y) {
                    console.error("Exception curl: ", y), g(y), b()
                }
            }
        },
        c894: function(e, t, n) {
            "use strict";

            function o(e, t) {
                return e.__proto__ = t, e
            }
            n.r(t), Object.setPrototypeOf = Object.setPrototypeOf || o;
            o.bind(Object);

            function r() {
                return "undefined" !== typeof Symbol && "undefined" !== typeof Reflect && "undefined" !== typeof Proxy && !Object.isSealed(Proxy)
            }
            var i = r(),
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }();

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
            }

            function u(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function l() {
                return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
            }

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("undefined" !== typeof customElements) {
                    if (i) {
                        var n = function(e) {
                            function n(e) {
                                var t;
                                c(this, n);
                                var o = s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)),
                                    i = e ? HTMLElement.call(e) : o;
                                return r.call(i), t = i, s(o, t)
                            }
                            return u(n, e), a(n, null, [{
                                key: "observedAttributes",
                                get: function() {
                                    return t.observedAttributes || []
                                }
                            }]), n
                        }(l);
                        return n.prototype.connectedCallback = d, n.prototype.disconnectedCallback = f, n.prototype.attributeChangedCallback = h, p(e, n), n
                    }
                    var o = function(e) {
                        var t = e ? HTMLElement.call(e) : this;
                        return r.call(t), t
                    };
                    return o.observedAttributes = t.observedAttributes || [], o.prototype = Object.create(HTMLElement.prototype, {
                        constructor: {
                            configurable: !0,
                            writable: !0,
                            value: o
                        }
                    }), o.prototype.connectedCallback = d, o.prototype.disconnectedCallback = f, o.prototype.attributeChangedCallback = h, p(e, o), o
                }

                function r() {
                    !0 === t.shadow && HTMLElement.prototype.attachShadow && this.attachShadow({
                        mode: "open"
                    }), "function" === typeof t.constructorCallback && t.constructorCallback.call(this)
                }

                function d() {
                    "function" === typeof t.connectedCallback && t.connectedCallback.call(this)
                }

                function f() {
                    "function" === typeof t.disconnectedCallback && t.disconnectedCallback.call(this)
                }

                function h(e, n, o) {
                    "function" === typeof t.attributeChangedCallback && t.attributeChangedCallback.call(this, e, n, o)
                }

                function p(e, t) {
                    var n = customElements.get(e);
                    return "undefined" !== typeof n ? n : customElements.define(e, t)
                }
            }
            Object.setPrototypeOf(l.prototype, HTMLElement.prototype), Object.setPrototypeOf(l, HTMLElement);
            var f = /-(\w)/g,
                h = function(e) {
                    return e.replace(f, (function(e, t) {
                        return t ? t.toUpperCase() : ""
                    }))
                },
                p = /([^-])([A-Z])/g,
                v = function(e) {
                    return e.replace(p, "$1-$2").replace(p, "$1-$2").toLowerCase()
                };

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = e.length - t,
                    o = new Array(n);
                while (n--) o[n] = e[n + t];
                return o
            }
            var b = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

            function _(e, t) {
                if (null === e || void 0 === e) return t !== Boolean && void 0;
                var n = e,
                    o = ["true", "false"].indexOf(e) > -1,
                    r = parseFloat(n, 10),
                    i = !isNaN(r) && isFinite(n) && "string" === typeof n && !n.match(/^0+[^.]\d*$/g);
                return t && t !== Boolean && ("undefined" === typeof n ? "undefined" : b(n)) !== t ? n = t(e) : o || t === Boolean ? n = "" === n || ("true" === n || !0 === n) : i && (n = r), n
            }

            function y(e, t) {
                if (e && e.length) e.forEach((function(e) {
                    var n = h(e); - 1 === t.camelCase.indexOf(n) && t.camelCase.push(n)
                }));
                else if (e && "object" === ("undefined" === typeof e ? "undefined" : b(e)))
                    for (var n in e) {
                        var o = h(n); - 1 === t.camelCase.indexOf(o) && t.camelCase.push(o), e[o] && e[o].type && (t.types[n] = [].concat(e[o].type)[0])
                    }
            }

            function m() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {
                        camelCase: [],
                        hyphenate: [],
                        types: {}
                    };
                if (e.mixins && e.mixins.forEach((function(e) {
                        y(e.props, t)
                    })), e.extends && e.extends.props) {
                    var n = e.extends.props;
                    y(n, t)
                }
                return y(e.props, t), t.camelCase.forEach((function(e) {
                    t.hyphenate.push(v(e))
                })), t
            }

            function w(e, t) {
                t.camelCase.forEach((function(n, o) {
                    Object.defineProperty(e, n, {
                        get: function() {
                            return this.__vue_custom_element__[n]
                        },
                        set: function(e) {
                            if ("object" !== ("undefined" === typeof e ? "undefined" : b(e)) && "function" !== typeof e || !this.__vue_custom_element__) {
                                var n = t.types[t.camelCase[o]];
                                this.setAttribute(t.hyphenate[o], _(e, n))
                            } else {
                                var r = t.camelCase[o];
                                this.__vue_custom_element__[r] = e
                            }
                        }
                    })
                }))
            }

            function E(e, t, n) {
                var o = t.propsData || {};
                return n.hyphenate.forEach((function(t, r) {
                    var i = n.camelCase[r],
                        a = e.attributes[t] || e[i],
                        c = null;
                    n.types[i] && (c = n.types[i]), a instanceof Attr ? o[i] = _(a.value, c) : "undefined" !== typeof a && (o[i] = a)
                })), o
            }

            function C(e) {
                var t = {};
                return g(e.attributes).forEach((function(e) {
                    t["vue-slot" === e.nodeName ? "slot" : e.nodeName] = e.nodeValue
                })), t
            }

            function T(e) {
                if (e.childNodes.length) return e.childNodes;
                if (e.content && e.content.childNodes && e.content.childNodes.length) return e.content.childNodes;
                var t = document.createElement("div");
                return t.innerHTML = e.innerHTML, t.childNodes
            }

            function O(e, t, n) {
                var o = T(t),
                    r = g(o).map((function(t) {
                        return "#text" === t.nodeName ? t.nodeValue : e(t.tagName, {
                            attrs: C(t),
                            domProps: {
                                innerHTML: t.innerHTML
                            }
                        })
                    }));
                return n.slot = t.id, e("template", n, r)
            }

            function x() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments[1],
                    n = [];
                return g(e).forEach((function(e) {
                    if ("#text" === e.nodeName) e.nodeValue.trim() && n.push(t("span", e.nodeValue));
                    else if ("#comment" !== e.nodeName) {
                        var o = C(e),
                            r = {
                                attrs: o,
                                domProps: {
                                    innerHTML: "" === e.innerHTML ? e.innerText : e.innerHTML
                                }
                            };
                        o.slot && (r.slot = o.slot, o.slot = void 0);
                        var i = "TEMPLATE" === e.tagName ? O(t, e, r) : t(e.tagName, r);
                        n.push(i)
                    }
                })), n
            }

            function k(e, t) {
                var n = {
                        bubbles: !1,
                        cancelable: !1,
                        detail: t
                    },
                    o = void 0;
                return "function" === typeof window.CustomEvent ? o = new CustomEvent(e, n) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, n.bubbles, n.cancelable, n.detail)), o
            }

            function L(e, t) {
                for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) o[r - 2] = arguments[r];
                var i = k(t, [].concat(o));
                e.dispatchEvent(i)
            }

            function S(e, t, n, o, r) {
                if (e.__vue_custom_element__) return Promise.resolve(e);
                var i = t.util.extend({}, n),
                    a = E(e, i, o),
                    c = t.version && parseInt(t.version.split(".")[0], 10) || 0;

                function s() {
                    this.$emit = function() {
                        for (var t, n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                        L.apply(void 0, [e].concat(o)), this.__proto__ && (t = this.__proto__.$emit).call.apply(t, [this].concat(o))
                    }
                }
                if (i.beforeCreate = [].concat(i.beforeCreate || [], s), i._compiled) {
                    var u = {},
                        l = i._Ctor;
                    l && (u = Object.keys(l).map((function(e) {
                        return l[e]
                    }))[0].options), u.beforeCreate = i.beforeCreate
                }
                var d = void 0;
                if (c >= 2) {
                    var f = e.cloneNode(!0).childNodes;
                    d = {
                        propsData: a,
                        props: o.camelCase,
                        computed: {
                            reactiveProps: function() {
                                var e = this,
                                    t = {};
                                return o.camelCase.forEach((function(n) {
                                    "undefined" !== typeof e[n] && (t[n] = e[n])
                                })), t
                            }
                        },
                        render: function(e) {
                            var t = {
                                props: this.reactiveProps
                            };
                            return e(i, t, x(f, e))
                        }
                    }
                } else if (1 === c) d = i, d.propsData = a;
                else {
                    d = i;
                    var h = {};
                    Object.keys(a).forEach((function(e) {
                        h[e] = {
                            default: a[e]
                        }
                    })), d.props = h
                }
                var p = c >= 2 ? "<div></div>" : ("<div>" + e.innerHTML + "</div>").replace(/vue-slot=/g, "slot=");
                if (r.shadow && e.shadowRoot ? (e.shadowRoot.innerHTML = p, d.el = e.shadowRoot.children[0]) : (e.innerHTML = p, d.el = e.children[0]), r.shadow && r.shadowCss && e.shadowRoot) {
                    var v = document.createElement("style");
                    v.type = "text/css", v.appendChild(document.createTextNode(r.shadowCss)), e.shadowRoot.appendChild(v)
                }
                return w(e, o), "function" === typeof r.beforeCreateVueInstance && (d = r.beforeCreateVueInstance(d) || d), Promise.resolve(d).then((function(n) {
                    return e.__vue_custom_element__ = new t(n), e.__vue_custom_element_props__ = o, e.getVueInstance = function() {
                        var t = e.__vue_custom_element__;
                        return t.$children.length ? t.$children[0] : t
                    }, e.removeAttribute("vce-cloak"), e.setAttribute("vce-ready", ""), L(e, "vce-ready"), e
                }))
            }

            function I(e) {
                e.customElement = function(t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = "function" === typeof n,
                        i = r && {
                            props: o.props || []
                        },
                        a = m(r ? i : n),
                        c = d(t, {
                            constructorCallback: function() {
                                "function" === typeof o.constructorCallback && o.constructorCallback.call(this)
                            },
                            connectedCallback: function() {
                                var i = this,
                                    c = r && n(),
                                    s = c && c.then && "function" === typeof c.then;
                                if ("function" === typeof o.connectedCallback && o.connectedCallback.call(this), r && !s) throw new Error("Async component " + t + " do not returns Promise");
                                this.__detached__ || (s ? c.then((function(t) {
                                    var n = m(t);
                                    S(i, e, t, n, o).then((function() {
                                        "function" === typeof o.vueInstanceCreatedCallback && o.vueInstanceCreatedCallback.call(i)
                                    }))
                                })) : S(this, e, n, a, o).then((function() {
                                    "function" === typeof o.vueInstanceCreatedCallback && o.vueInstanceCreatedCallback.call(i)
                                }))), this.__detached__ = !1
                            },
                            disconnectedCallback: function() {
                                var e = this;
                                this.__detached__ = !0, "function" === typeof o.disconnectedCallback && o.disconnectedCallback.call(this), null !== o.destroyTimeout && setTimeout((function() {
                                    e.__detached__ && e.__vue_custom_element__ && (e.__detached__ = !1, e.__vue_custom_element__.$destroy(!0), delete e.__vue_custom_element__, delete e.__vue_custom_element_props__)
                                }), o.destroyTimeout || 3e3)
                            },
                            attributeChangedCallback: function(e, t, n) {
                                if (this.__vue_custom_element__ && "undefined" !== typeof n) {
                                    var r = h(e);
                                    "function" === typeof o.attributeChangedCallback && o.attributeChangedCallback.call(this, e, t, n);
                                    var i = this.__vue_custom_element_props__.types[r];
                                    this.__vue_custom_element__[r] = _(n, i)
                                }
                            },
                            observedAttributes: a.hyphenate,
                            shadow: !!o.shadow && !!HTMLElement.prototype.attachShadow
                        });
                    return c
                }
            }
            "undefined" !== typeof window && window.Vue && (window.Vue.use(I), I.installed && (I.installed = !1)), t["default"] = I
        },
        dde5: function(e, t, n) {
            "use strict";
            var o = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUserInfo = s, t.doLogout = u, n("d3b7");
            var r = o(n("5530")),
                i = n("b775"),
                a = n("5fb0"),
                c = n("4360");

            function s(e) {
                var t = e.data,
                    n = void 0 === t ? {} : t,
                    o = e.onSuccess,
                    s = e.onError,
                    u = n,
                    l = ggWidgetUtil.get(window.widgetSdkConfig, "config", {}),
                    d = l.userProfile,
                    f = l.mode,
                    h = l.clientId;
                f === a.SDK_MODE.GAME_SITE && (u = (0, r.default)((0, r.default)({}, u), {}, {
                    clientId: h
                })), ggWidgetUtil.wait(300).finally((function() {
                    (0, i.request)("GET", "".concat(d.ssoUri, "/api/v1/users/basic-profile"), u, {
                        credentials: !0
                    }, (function(e) {
                        console.log("User Profile", e), ggWidgetUtil.isFunction(o) && o(e.data), ggWidgetUtil.empty(ggWidgetUtil.get(e.data, "gameAccountInfo")) && f === a.SDK_MODE.GAME_SITE && (0, c.dispatch)("addError", {
                            type: "INVALID_CLIENT_ID",
                            error: "Invalid client id"
                        })
                    }), (function(e) {
                        console.log({
                            error: e
                        }), ggWidgetUtil.isFunction(s) && s(e)
                    }))
                }))
            }

            function u(e) {
                var t = e.data,
                    n = void 0 === t ? {} : t,
                    o = e.onSuccess,
                    r = e.onError;
                (0, i.request)("GET", "".concat(ggWidgetUtil.get(window.widgetSdkConfig, "config.userProfile.ssoUri", ""), "/sso/bridge/sign-out"), n, {
                    credentials: !0
                }, (function(e) {
                    ggWidgetUtil.isFunction(o) && o(e.data)
                }), (function(e) {
                    console.log({
                        error: e
                    }), ggWidgetUtil.isFunction(r) && r(e)
                }))
            }
        },
        ddfe: function(e, t, n) {
            "use strict";
            var o = n("4ea4").default,
                r = o(n("2b0e"));
            n("7025");
            var i = o(n("c894")),
                a = o(n("6dd8"));
            window.ResizeObserver = a.default, r.default.use(i.default), r.default.config.productionTip = !1
        },
        fce3: function(e, t, n) {
            "use strict";
            var o = n("d039"),
                r = n("da84"),
                i = r.RegExp;
            e.exports = o((function() {
                var e = i(".", "s");
                return !(e.dotAll && e.test("\n") && "s" === e.flags)
            }))
        }
    }
]);