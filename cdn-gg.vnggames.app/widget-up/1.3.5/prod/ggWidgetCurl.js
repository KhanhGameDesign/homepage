! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("ggWidgetCurl", [], e) : "object" == typeof exports ? exports.ggWidgetCurl = e() : t.ggWidgetCurl = e()
}(this, function() {
    return n = [function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e, n) {
        "use strict";
        var n = n(32),
            r = Function.prototype,
            o = r.call,
            r = n && r.bind.bind(o, o);
        t.exports = n ? r : function(t) {
            return function() {
                return o.apply(t, arguments)
            }
        }
    }, function(n, t, e) {
        "use strict";
        ! function(t) {
            function e(t) {
                return t && t.Math === Math && t
            }
            n.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof t && t) || e("object" == typeof this && this) || function() {
                return this
            }() || Function("return this")()
        }.call(this, e(72))
    }, function(t, e, n) {
        "use strict";
        var n = n(62),
            r = n.all;
        t.exports = n.IS_HTMLDDA ? function(t) {
            return "function" == typeof t || t === r
        } : function(t) {
            return "function" == typeof t
        }
    }, function(t, e, n) {
        "use strict";
        n = n(0);
        t.exports = !n(function() {
            return 7 !== Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })
    }, function(t, e, n) {
        "use strict";
        var a = n(2),
            f = n(57).f,
            l = n(19),
            p = n(21),
            d = n(45),
            g = n(85),
            v = n(74);
        t.exports = function(t, e) {
            var n, r, o, i = t.target,
                u = t.global,
                c = t.stat,
                s = u ? a : c ? a[i] || d(i, {}) : (a[i] || {}).prototype;
            if (s)
                for (n in e) {
                    if (r = e[n], o = t.dontCallGetSet ? (o = f(s, n)) && o.value : s[n], !v(u ? n : i + (c ? "." : "#") + n, t.forced) && void 0 !== o) {
                        if (typeof r == typeof o) continue;
                        g(r, o)
                    }(t.sham || o && o.sham) && l(r, "sham", !0), p(s, n, r, t)
                }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2),
            o = n(42),
            i = n(9),
            u = n(52),
            c = n(50),
            n = n(63),
            s = r.Symbol,
            a = o("wks"),
            f = n ? s.for || s : s && s.withoutSetter || u;
        t.exports = function(t) {
            return i(a, t) || (a[t] = c && i(s, t) ? s[t] : f("Symbol." + t)), a[t]
        }
    }, function(t, e, n) {
        "use strict";
        var n = n(32),
            r = Function.prototype.call;
        t.exports = n ? r.bind(r) : function() {
            return r.apply(r, arguments)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(11),
            o = String,
            i = TypeError;
        t.exports = function(t) {
            if (r(t)) return t;
            throw new i(o(t) + " is not an object")
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(17),
            i = r({}.hasOwnProperty);
        t.exports = Object.hasOwn || function(t, e) {
            return i(o(t), e)
        }
    }, , function(t, e, n) {
        "use strict";
        var r = n(3),
            n = n(62),
            o = n.all;
        t.exports = n.IS_HTMLDDA ? function(t) {
            return "object" == typeof t ? null !== t : r(t) || t === o
        } : function(t) {
            return "object" == typeof t ? null !== t : r(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(31);
        t.exports = function(t) {
            return r(t.length)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(65),
            i = n(66),
            u = n(8),
            c = n(38),
            s = TypeError,
            a = Object.defineProperty,
            f = Object.getOwnPropertyDescriptor,
            l = "enumerable",
            p = "configurable",
            d = "writable";
        e.f = r ? i ? function(t, e, n) {
            var r;
            return u(t), e = c(e), u(n), "function" == typeof t && "prototype" === e && "value" in n && d in n && !n[d] && (r = f(t, e)) && r[d] && (t[e] = n.value, n = {
                configurable: (p in n ? n : r)[p],
                enumerable: (l in n ? n : r)[l],
                writable: !1
            }), a(t, e, n)
        } : a : function(t, e, n) {
            if (u(t), e = c(e), u(n), o) try {
                return a(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw new s("Accessors not supported");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(28),
            o = String;
        t.exports = function(t) {
            if ("Symbol" === r(t)) throw new TypeError("Cannot convert a Symbol value to a string");
            return o(t)
        }
    }, function(t, e, n) {
        "use strict";
        var n = n(1),
            r = n({}.toString),
            o = n("".slice);
        t.exports = function(t) {
            return o(r(t), 8, -1)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2),
            o = n(3);
        t.exports = function(t, e) {
            return arguments.length < 2 ? (n = r[t], o(n) ? n : void 0) : r[t] && r[t][e];
            var n
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(24),
            o = Object;
        t.exports = function(t) {
            return o(r(t))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(49),
            o = n(24);
        t.exports = function(t) {
            return r(o(t))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(13),
            i = n(26);
        t.exports = r ? function(t, e, n) {
            return o.f(t, e, i(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        n.r(e), n.d(e, "default", function() {
            return r
        })
    }, function(t, e, n) {
        "use strict";
        var u = n(3),
            c = n(13),
            s = n(84),
            a = n(45);
        t.exports = function(t, e, n, r) {
            var o = (r = r || {}).enumerable,
                i = void 0 !== r.name ? r.name : e;
            if (u(n) && s(n, i, r), r.global) o ? t[e] = n : a(e, n);
            else {
                try {
                    r.unsafe ? t[e] && (o = !0) : delete t[e]
                } catch (t) {}
                o ? t[e] = n : c.f(t, e, {
                    value: n,
                    enumerable: !1,
                    configurable: !r.nonConfigurable,
                    writable: !r.nonWritable
                })
            }
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r, o, i, u, c = n(94),
            s = n(2),
            a = n(11),
            f = n(19),
            l = n(9),
            p = n(44),
            d = n(58),
            n = n(33),
            g = "Object already initialized",
            v = s.TypeError,
            s = s.WeakMap,
            y = c || p.state ? ((i = p.state || (p.state = new s)).get = i.get, i.has = i.has, i.set = i.set, r = function(t, e) {
                if (i.has(t)) throw new v(g);
                return e.facade = t, i.set(t, e), e
            }, o = function(t) {
                return i.get(t) || {}
            }, function(t) {
                return i.has(t)
            }) : (n[u = d("state")] = !0, r = function(t, e) {
                if (l(t, u)) throw new v(g);
                return e.facade = t, f(t, u, e), e
            }, o = function(t) {
                return l(t, u) ? t[u] : {}
            }, function(t) {
                return l(t, u)
            });
        t.exports = {
            set: r,
            get: o,
            has: y,
            enforce: function(t) {
                return y(t) ? o(t) : r(t, {})
            },
            getterFor: function(e) {
                return function(t) {
                    if (a(t) && (t = o(t)).type === e) return t;
                    throw new v("Incompatible receiver, " + e + " required")
                }
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(96);
        t.exports = function(t) {
            t = +t;
            return t != t || 0 == t ? 0 : r(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(25),
            o = TypeError;
        t.exports = function(t) {
            if (r(t)) throw new o("Can't call method on " + t);
            return t
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return null == t
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, , function(t, e, n) {
        "use strict";
        var r = n(60),
            o = n(3),
            i = n(15),
            u = n(6)("toStringTag"),
            c = Object,
            s = "Arguments" === i(function() {
                return arguments
            }());
        t.exports = r ? i : function(t) {
            var e;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(t = c(t), u)) ? e : s ? i(t) : "Object" === (e = i(t)) && o(t.callee) ? "Arguments" : e
        }
    }, function(t, e, n) {
        "use strict";
        n = n(1);
        t.exports = n({}.isPrototypeOf)
    }, function(t, e, n) {
        "use strict";
        var r = n(3),
            o = n(51),
            i = TypeError;
        t.exports = function(t) {
            if (r(t)) return t;
            throw new i(o(t) + " is not a function")
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(23),
            o = Math.min;
        t.exports = function(t) {
            return 0 < t ? o(r(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        "use strict";
        n = n(0);
        t.exports = !n(function() {
            var t = function() {}.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        })
    }, function(t, e, n) {
        "use strict";
        t.exports = {}
    }, function(t, e, n) {
        "use strict";
        var r = n(23),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            t = r(t);
            return t < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function(t, e, n) {
        "use strict";

        function r() {}

        function o(t) {
            t.write(v("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        }
        var i, u = n(8),
            c = n(98),
            s = n(47),
            a = n(33),
            f = n(99),
            l = n(53),
            n = n(58),
            p = "prototype",
            d = "script",
            g = n("IE_PROTO"),
            v = function(t) {
                return "<" + d + ">" + t + "</" + d + ">"
            },
            y = function() {
                try {
                    i = new ActiveXObject("htmlfile")
                } catch (t) {}
                y = "undefined" == typeof document || document.domain && i ? o(i) : (t = l("iframe"), e = "java" + d + ":", t.style.display = "none", f.appendChild(t), t.src = String(e), (e = t.contentWindow.document).open(), e.write(v("document.F=Object")), e.close(), e.F);
                for (var t, e, n = s.length; n--;) delete y[p][s[n]];
                return y()
            };
        a[g] = !0, t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (r[p] = u(t), n = new r, r[p] = null, n[g] = t) : n = y(), void 0 === e ? n : c.f(n, e)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(15);
        t.exports = Array.isArray || function(t) {
            return "Array" === r(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            n = n(59);
        r({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== n
        }, {
            exec: n
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(83),
            o = n(39);
        t.exports = function(t) {
            t = r(t, "string");
            return o(t) ? t : t + ""
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(16),
            o = n(3),
            i = n(29),
            n = n(63),
            u = Object;
        t.exports = n ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            var e = r("Symbol");
            return o(e) && i(e.prototype, u(t))
        }
    }, function(t, e, n) {
        "use strict";
        var r, o, i = n(2),
            n = n(64),
            u = i.process,
            i = i.Deno,
            u = u && u.versions || i && i.version,
            i = u && u.v8;
        !(o = i ? 0 < (r = i.split("."))[0] && r[0] < 4 ? 1 : +(r[0] + r[1]) : o) && n && (!(r = n.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = n.match(/Chrome\/(\d+)/)) && (o = +r[1]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        var r = n(30),
            o = n(25);
        t.exports = function(t, e) {
            t = t[e];
            return o(t) ? void 0 : r(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(43),
            o = n(44);
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: "3.34.0",
            mode: r ? "pure" : "global",
            copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    }, function(t, e, n) {
        "use strict";
        t.exports = !1
    }, function(t, e, n) {
        "use strict";
        var r = n(2),
            n = n(45),
            o = "__core-js_shared__",
            r = r[o] || n(o, {});
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(2),
            o = Object.defineProperty;
        t.exports = function(e, n) {
            try {
                o(r, e, {
                    value: n,
                    configurable: !0,
                    writable: !0
                })
            } catch (t) {
                r[e] = n
            }
            return n
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            n = n(9),
            o = Function.prototype,
            i = r && Object.getOwnPropertyDescriptor,
            n = n(o, "name"),
            u = n && "something" === function() {}.name,
            r = n && (!r || i(o, "name").configurable);
        t.exports = {
            EXISTS: n,
            PROPER: u,
            CONFIGURABLE: r
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, function(t, e) {
        t.exports = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(0),
            i = n(15),
            u = Object,
            c = r("".split);
        t.exports = o(function() {
            return !u("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return "String" === i(t) ? c(t, "") : u(t)
        } : u
    }, function(t, e, n) {
        "use strict";
        var r = n(40),
            o = n(0),
            i = n(2).String;
        t.exports = !!Object.getOwnPropertySymbols && !o(function() {
            var t = Symbol("symbol detection");
            return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
        })
    }, function(t, e, n) {
        "use strict";
        var r = String;
        t.exports = function(t) {
            try {
                return r(t)
            } catch (t) {
                return "Object"
            }
        }
    }, function(t, e, n) {
        "use strict";
        var n = n(1),
            r = 0,
            o = Math.random(),
            i = n(1..toString);
        t.exports = function(t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + i(++r + o, 36)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2),
            n = n(11),
            o = r.document,
            i = n(o) && n(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(67),
            o = n(47).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    }, , function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(20);

        function o(t) {
            t = function(t, e) {
                if ("object" !== Object(r.default)(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 === n) return ("string" === e ? String : Number)(t);
                if (n = n.call(t, e || "default"), "object" !== Object(r.default)(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }(t, "string");
            return "symbol" === Object(r.default)(t) ? t : String(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(7),
            i = n(82),
            u = n(26),
            c = n(18),
            s = n(38),
            a = n(9),
            f = n(65),
            l = Object.getOwnPropertyDescriptor;
        e.f = r ? l : function(t, e) {
            if (t = c(t), e = s(e), f) try {
                return l(t, e)
            } catch (t) {}
            if (a(t, e)) return u(!o(i.f, t, e), t[e])
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(42),
            o = n(52),
            i = r("keys");
        t.exports = function(t) {
            return i[t] || (i[t] = o(t))
        }
    }, function(t, e, n) {
        "use strict";
        var g = n(7),
            r = n(1),
            v = n(14),
            y = n(75),
            o = n(76),
            i = n(42),
            b = n(35),
            x = n(22).get,
            u = n(77),
            n = n(86),
            h = i("native-string-replace", String.prototype.replace),
            m = RegExp.prototype.exec,
            O = m,
            w = r("".charAt),
            S = r("".indexOf),
            j = r("".replace),
            T = r("".slice),
            E = (i = /b*/g, g(m, r = /a/, "a"), g(m, i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
            P = o.BROKEN_CARET,
            R = void 0 !== /()??/.exec("")[1];
        (E || R || P || u || n) && (O = function(t) {
            var e, n, r, o, i, u, c = this,
                s = x(c),
                t = v(t),
                a = s.raw;
            if (a) return a.lastIndex = c.lastIndex, l = g(O, a, t), c.lastIndex = a.lastIndex, l;
            var f = s.groups,
                a = P && c.sticky,
                l = g(y, c),
                s = c.source,
                p = 0,
                d = t;
            if (a && (l = j(l, "y", ""), -1 === S(l, "g") && (l += "g"), d = T(t, c.lastIndex), 0 < c.lastIndex && (!c.multiline || c.multiline && "\n" !== w(t, c.lastIndex - 1)) && (s = "(?: " + s + ")", d = " " + d, p++), e = new RegExp("^(?:" + s + ")", l)), R && (e = new RegExp("^" + s + "$(?!\\s)", l)), E && (n = c.lastIndex), r = g(m, a ? e : c, d), a ? r ? (r.input = T(r.input, p), r[0] = T(r[0], p), r.index = c.lastIndex, c.lastIndex += r[0].length) : c.lastIndex = 0 : E && r && (c.lastIndex = c.global ? r.index + r[0].length : n), R && r && 1 < r.length && g(h, r[0], e, function() {
                    for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
                }), r && f)
                for (r.groups = i = b(null), o = 0; o < f.length; o++) i[(u = f[o])[0]] = r[u[1]];
            return r
        }), t.exports = O
    }, function(t, e, n) {
        "use strict";
        var r = {};
        r[n(6)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
    }, , function(t, e, n) {
        "use strict";
        var r = "object" == typeof document && document.all;
        t.exports = {
            all: r,
            IS_HTMLDDA: void 0 === r && void 0 !== r
        }
    }, function(t, e, n) {
        "use strict";
        n = n(50);
        t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }, function(t, e, n) {
        "use strict";
        t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(0),
            i = n(53);
        t.exports = !r && !o(function() {
            return 7 !== Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            n = n(0);
        t.exports = r && n(function() {
            return 42 !== Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            u = n(9),
            c = n(18),
            s = n(68).indexOf,
            a = n(33),
            f = r([].push);
        t.exports = function(t, e) {
            var n, r = c(t),
                o = 0,
                i = [];
            for (n in r) !u(a, n) && u(r, n) && f(i, n);
            for (; e.length > o;) !u(r, n = e[o++]) || ~s(i, n) || f(i, n);
            return i
        }
    }, function(t, e, n) {
        "use strict";

        function r(c) {
            return function(t, e, n) {
                var r, o = s(t),
                    i = f(o),
                    u = a(n, i);
                if (c && e != e) {
                    for (; u < i;)
                        if ((r = o[u++]) != r) return !0
                } else
                    for (; u < i; u++)
                        if ((c || u in o) && o[u] === e) return c || u || 0;
                return !c && -1
            }
        }
        var s = n(18),
            a = n(34),
            f = n(12);
        t.exports = {
            includes: r(!0),
            indexOf: r(!1)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(67),
            o = n(47);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        "use strict";
        n = n(1);
        t.exports = n([].slice)
    }, function(t, e, n) {
        "use strict";
        var n = n(32),
            r = Function.prototype,
            o = r.apply,
            i = r.call;
        t.exports = "object" == typeof Reflect && Reflect.apply || (n ? i.bind(o) : function() {
            return i.apply(o, arguments)
        })
    }, function(t, e) {
        var n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(3),
            n = n(44),
            i = r(Function.toString);
        o(n.inspectSource) || (n.inspectSource = function(t) {
            return i(t)
        }), t.exports = n.inspectSource
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return (t = s[c(t)]) === f || t !== a && (i(e) ? o(e) : !!e)
        }
        var o = n(0),
            i = n(3),
            u = /#|\.prototype\./,
            c = r.normalize = function(t) {
                return String(t).replace(u, ".").toLowerCase()
            },
            s = r.data = {},
            a = r.NATIVE = "N",
            f = r.POLYFILL = "P";
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(8);
        t.exports = function() {
            var t = r(this),
                e = "";
            return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(2).RegExp,
            n = r(function() {
                var t = o("a", "y");
                return t.lastIndex = 2, null !== t.exec("abcd")
            }),
            i = n || r(function() {
                return !o("a", "y").sticky
            }),
            r = n || r(function() {
                var t = o("^r", "gy");
                return t.lastIndex = 2, null !== t.exec("str")
            });
        t.exports = {
            BROKEN_CARET: r,
            MISSED_STICKY: i,
            UNSUPPORTED_Y: n
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(2).RegExp;
        t.exports = r(function() {
            var t = o(".", "s");
            return !(t.dotAll && t.test("\n") && "s" === t.flags)
        })
    }, , , , function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", function() {
            return o
        });
        var r = n(56);

        function o(t, e, n) {
            return (e = Object(r.a)(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
    }, function(t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !r.call({
                1: 2
            }, 1);
        e.f = i ? function(t) {
            t = o(this, t);
            return !!t && t.enumerable
        } : r
    }, function(t, e, n) {
        "use strict";
        var r = n(7),
            o = n(11),
            i = n(39),
            u = n(41),
            c = n(93),
            n = n(6),
            s = TypeError,
            a = n("toPrimitive");
        t.exports = function(t, e) {
            if (!o(t) || i(t)) return t;
            var n = u(t, a);
            if (n) {
                if (n = r(n, t, e = void 0 === e ? "default" : e), !o(n) || i(n)) return n;
                throw new s("Can't convert object to primitive value")
            }
            return c(t, e = void 0 === e ? "number" : e)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(0),
            i = n(3),
            u = n(9),
            c = n(4),
            s = n(46).CONFIGURABLE,
            a = n(73),
            n = n(22),
            f = n.enforce,
            l = n.get,
            p = String,
            d = Object.defineProperty,
            g = r("".slice),
            v = r("".replace),
            y = r([].join),
            b = c && !o(function() {
                return 8 !== d(function() {}, "length", {
                    value: 8
                }).length
            }),
            x = String(String).split("String"),
            n = t.exports = function(t, e, n) {
                "Symbol(" === g(p(e), 0, 7) && (e = "[" + v(p(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!u(t, "name") || s && t.name !== e) && (c ? d(t, "name", {
                    value: e,
                    configurable: !0
                }) : t.name = e), b && n && u(n, "arity") && t.length !== n.arity && d(t, "length", {
                    value: n.arity
                });
                try {
                    n && u(n, "constructor") && n.constructor ? c && d(t, "prototype", {
                        writable: !1
                    }) : t.prototype && (t.prototype = void 0)
                } catch (t) {}
                n = f(t);
                return u(n, "source") || (n.source = y(x, "string" == typeof e ? e : "")), t
            };
        Function.prototype.toString = n(function() {
            return i(this) && l(this).source || a(this)
        }, "toString")
    }, function(t, e, n) {
        "use strict";
        var s = n(9),
            a = n(95),
            f = n(57),
            l = n(13);
        t.exports = function(t, e, n) {
            for (var r = a(e), o = l.f, i = f.f, u = 0; u < r.length; u++) {
                var c = r[u];
                s(t, c) || n && s(n, c) || o(t, c, i(e, c))
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(2).RegExp;
        t.exports = r(function() {
            var t = o("(?<a>b)", "g");
            return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
        })
    }, , , , , , , function(t, e, n) {
        "use strict";
        var o = n(7),
            i = n(3),
            u = n(11),
            c = TypeError;
        t.exports = function(t, e) {
            var n, r;
            if ("string" === e && i(n = t.toString) && !u(r = o(n, t))) return r;
            if (i(n = t.valueOf) && !u(r = o(n, t))) return r;
            if ("string" !== e && i(n = t.toString) && !u(r = o(n, t))) return r;
            throw new c("Can't convert object to primitive value")
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2),
            n = n(3),
            r = r.WeakMap;
        t.exports = n(r) && /native code/.test(String(r))
    }, function(t, e, n) {
        "use strict";
        var r = n(16),
            o = n(1),
            i = n(54),
            u = n(97),
            c = n(8),
            s = o([].concat);
        t.exports = r("Reflect", "ownKeys") || function(t) {
            var e = i.f(c(t)),
                n = u.f;
            return n ? s(e, n(t)) : e
        }
    }, function(t, e, n) {
        "use strict";
        var r = Math.ceil,
            o = Math.floor;
        t.exports = Math.trunc || function(t) {
            t = +t;
            return (0 < t ? o : r)(t)
        }
    }, function(t, e, n) {
        "use strict";
        e.f = Object.getOwnPropertySymbols
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(66),
            c = n(13),
            s = n(8),
            a = n(18),
            f = n(69);
        e.f = r && !o ? Object.defineProperties : function(t, e) {
            s(t);
            for (var n, r = a(e), o = f(e), i = o.length, u = 0; u < i;) c.f(t, n = o[u++], r[n]);
            return t
        }
    }, function(t, e, n) {
        "use strict";
        n = n(16);
        t.exports = n("document", "documentElement")
    }, , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", function() {
            return i
        });
        var r = n(81);

        function o(e, t) {
            var n, r = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)), r
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    Object(r.default)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
    }, , , , , , , , , function(t, e, n) {
        "use strict";

        function o(t, e) {
            var n = d(arguments),
                r = g(e);
            if (l(r) || void 0 !== t && !p(t)) return n[1] = function(t, e) {
                if (l(r) && (e = s(r, this, v(t), e)), !p(e)) return e
            }, c(y, null, n)
        }

        function i(t, e, n) {
            var r = x(n, e - 1),
                n = x(n, e + 1);
            return b(S, t) && !b(j, n) || b(j, t) && !b(S, r) ? "\\u" + O(h(t, 0), 16) : t
        }
        var r = n(5),
            u = n(16),
            c = n(71),
            s = n(7),
            a = n(1),
            f = n(0),
            l = n(3),
            p = n(39),
            d = n(70),
            g = n(132),
            n = n(50),
            v = String,
            y = u("JSON", "stringify"),
            b = a(/./.exec),
            x = a("".charAt),
            h = a("".charCodeAt),
            m = a("".replace),
            O = a(1..toString),
            w = /[\uD800-\uDFFF]/g,
            S = /^[\uD800-\uDBFF]$/,
            j = /^[\uDC00-\uDFFF]$/,
            T = !n || f(function() {
                var t = u("Symbol")("stringify detection");
                return "[null]" !== y([t]) || "{}" !== y({
                    a: t
                }) || "{}" !== y(Object(t))
            }),
            E = f(function() {
                return '"\\udf06\\ud834"' !== y("\udf06\ud834") || '"\\udead"' !== y("\udead")
            });
        y && r({
            target: "JSON",
            stat: !0,
            arity: 3,
            forced: T || E
        }, {
            stringify: function(t, e, n) {
                var r = d(arguments),
                    r = c(T ? o : y, null, r);
                return E && "string" == typeof r ? m(r, w, i) : r
            }
        })
    }, function(t, e, n) {
        "use strict";
        n(37);
        var r, o = n(5),
            i = n(7),
            u = n(3),
            c = n(8),
            s = n(14),
            n = (r = !1, (n = /[ac]/).exec = function() {
                return r = !0, /./.exec.apply(this, arguments)
            }, !0 === n.test("abc") && r),
            a = /./.test;
        o({
            target: "RegExp",
            proto: !0,
            forced: !n
        }, {
            test: function(t) {
                var e = c(this),
                    t = s(t),
                    n = e.exec;
                return u(n) ? null !== (n = i(n, e, t)) && (c(n), !0) : i(a, e, t)
            }
        })
    }, , , , , , , , , , , , function(t, e, n) {
        "use strict";
        var r = n(1),
            c = n(36),
            s = n(3),
            a = n(15),
            f = n(14),
            l = r([].push);
        t.exports = function(t) {
            if (s(t)) return t;
            if (c(t)) {
                for (var e = t.length, r = [], n = 0; n < e; n++) {
                    var o = t[n];
                    "string" == typeof o ? l(r, o) : "number" != typeof o && "Number" !== a(o) && "String" !== a(o) || l(r, f(o))
                }
                var i = r.length,
                    u = !0;
                return function(t, e) {
                    if (u) return u = !1, e;
                    if (c(this)) return e;
                    for (var n = 0; n < i; n++)
                        if (r[n] === t) return e
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        var r = n(48).default,
            y = (Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.request = function() {
                var t, e, n, r, o, i, u = arguments.length <= 0 ? void 0 : arguments[0],
                    c = arguments.length <= 1 ? void 0 : arguments[1];
                o = ggWidgetUtil.isFunction(arguments.length <= 2 ? void 0 : arguments[2]) ? (t = {}, e = {}, n = arguments.length <= 2 ? void 0 : arguments[2], r = arguments.length <= 3 ? void 0 : arguments[3], arguments.length <= 4 ? void 0 : arguments[4]) : ggWidgetUtil.isFunction(arguments.length <= 3 ? void 0 : arguments[3]) ? (t = arguments.length <= 2 ? void 0 : arguments[2], e = {}, n = arguments.length <= 3 ? void 0 : arguments[3], r = arguments.length <= 4 ? void 0 : arguments[4], arguments.length <= 5 ? void 0 : arguments[5]) : (t = arguments.length <= 2 ? void 0 : arguments[2], e = (arguments.length <= 3 ? void 0 : arguments[3]) || {}, n = arguments.length <= 4 ? void 0 : arguments[4], r = arguments.length <= 5 ? void 0 : arguments[5], arguments.length <= 6 ? void 0 : arguments[6]);
                e = (0, y.default)((0, y.default)({}, b), e);
                var s = (new Date).getTime(),
                    a = e.requestTime,
                    f = function(t) {
                        try {
                            return window.XDomainRequest && /^https?:\/\//i.test(t) ? new window.XDomainRequest : window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
                        } catch (t) {
                            console.error("Exception createXHR: ", t)
                        }
                    }(c),
                    l = window.XDomainRequest && f instanceof window.XDomainRequest;

                function p() {
                    if (ggWidgetUtil.isFunction(n))
                        if ("json" === e.dataType) try {
                            var t = ggWidgetUtil.parseJSON(f.responseText),
                                t = (0, y.default)((0, y.default)({}, t), {}, {
                                    duration: (new Date).getTime() - s
                                });
                            n.call(f, t)
                        } catch (t) {
                            d(t)
                        } else n.call(f, f.responseText)
                }

                function d(t) {
                    var e = {
                            e: t,
                            res: f.responseText
                        },
                        t = (console.error("doError", t), {
                            err: 400,
                            message: "ERROR_REQUEST",
                            data: e,
                            duration: a
                        });
                    ggWidgetUtil.isFunction(r) && r.call(f, t)
                }

                function g() {
                    ggWidgetUtil.isFunction(o) && o.call(f, f.responseText)
                }
                void 0 !== f.onload ? (f.onload = function() {
                    clearTimeout(i), 200 === f.status || l && !ggWidgetUtil.empty(f.responseText) ? p() : d(f), g()
                }, f.onerror = function(t) {
                    clearTimeout(i), console.error("req.onerror", t), d(t), g()
                }) : f.onreadystatechange = function() {
                    console.info("req.onreadystatechange", f.status, f.responseText), 4 === f.readyState && (clearTimeout(i), 200 === f.status ? p() : d(f.status), g())
                };
                f.onabort = function(t) {
                    clearTimeout(i), d(t), g()
                };
                try {
                    var v = ggWidgetUtil.makeParams(t, u);
                    "GET" === (u = l ? "GET" : u) && v && (c.indexOf("?") < 0 && (c += "?"), c += v), ggWidgetUtil.toBoolean(e.credentials) ? (f.open(u, c, !0), f.withCredentials = !0) : f.open(u, c), i = setTimeout(function() {
                        f.abort()
                    }, a), ggWidgetUtil.empty(e.authorization) || f.setRequestHeader("Authorization", e.bearerType + " " + e.authorization), "POST" !== u || l ? f.send(null) : ggWidgetUtil.empty(f.setRequestHeader) || (ggWidgetUtil.empty(e.contentType) ? (f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), f.send(v)) : (f.setRequestHeader("Content-Type", e.contentType), f.send(JSON.stringify(t))))
                } catch (t) {
                    console.error("Exception curl: ", t), d(t), g()
                }
            }, r(n(110))),
            b = (n(37), n(120), n(119), {
                requestTime: 3e4,
                dataType: "json"
            })
    }], r = {}, o.m = n, o.c = r, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 296);

    function o(t) {
        var e;
        return (r[t] || (e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        }, n[t].call(e.exports, e, e.exports, o), e.l = !0, e)).exports
    }
    var n, r
});