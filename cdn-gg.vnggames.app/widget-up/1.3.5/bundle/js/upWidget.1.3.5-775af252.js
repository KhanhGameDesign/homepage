(this["ssoWidget-1.3.5"] = this["ssoWidget-1.3.5"] || []).push([
    ["upWidget.1.3.5-775af252"], {
        "2a7d": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n("3852"),
                i = n("e576");
            for (var a in i)["default"].indexOf(a) < 0 && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }))
            }(a);
            n("bcb9");
            var d = n("2877"),
                o = Object(d["a"])(i["default"], r["render"], r["staticRenderFns"], !1, null, "ae26d06e", null);
            e["default"] = o.exports
        },
        3852: function(t, e, n) {
            "use strict";
            var r = n("6678");
            n.o(r, "render") && n.d(e, "render", (function() {
                return r["render"]
            })), n.o(r, "staticRenderFns") && n.d(e, "staticRenderFns", (function() {
                return r["staticRenderFns"]
            }))
        },
        6678: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticRenderFns = e.render = void 0;
            var r = function() {
                var t = this,
                    e = t._self._c;
                return e("button", {
                    class: {
                        "gg-widget-login-btn": !0, "gt-widget-login-btn__loading": t.loading
                    },
                    attrs: {
                        disabled: t.disabled
                    },
                    on: {
                        click: function(e) {
                            !t.disabled && !t.loading && t.onClick()
                        }
                    }
                }, [t._t("default"), t.loading ? [e("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24"
                    }
                }, [e("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                    }
                }, [e("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "0.75s",
                        repeatCount: "indefinite",
                        type: "rotate",
                        values: "0 12 12;360 12 12"
                    }
                })], 1)])] : t._e()], 2)
            };
            e.render = r;
            var i = [];
            e.staticRenderFns = i
        },
        bcb9: function(t, e, n) {
            "use strict";
            n("d626")
        },
        d626: function(t, e, n) {},
        dfa5: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = {
                name: "Button",
                props: {
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    loading: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    onClick: function() {
                        this.$emit("onClick")
                    }
                }
            };
            e.default = r, t.exports = e.default
        },
        e576: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n("dfa5"),
                i = n.n(r);
            for (var a in r)["default"].indexOf(a) < 0 && function(t) {
                n.d(e, t, (function() {
                    return r[t]
                }))
            }(a);
            e["default"] = i.a
        }
    }
]);