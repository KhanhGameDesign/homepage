! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("widgetHub", [], e) : "object" == typeof exports ? exports.widgetHub = e() : t.widgetHub = e()
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
    }, function(t, e, n) {
        "use strict";

        function r(p) {
            var d = 1 === p,
                g = 2 === p,
                v = 3 === p,
                y = 4 === p,
                h = 6 === p,
                b = 7 === p,
                E = 5 === p || h;
            return function(t, e, n, r) {
                for (var o, i, u = O(t), c = x(u), s = S(c), a = m(e, n), f = 0, e = r || w, l = d ? e(t, s) : g || b ? e(t, 0) : void 0; f < s; f++)
                    if ((E || f in c) && (i = a(o = c[f], f, u), p))
                        if (d) l[f] = i;
                        else if (i) switch (p) {
                    case 3:
                        return !0;
                    case 5:
                        return o;
                    case 6:
                        return f;
                    case 2:
                        T(l, o)
                } else switch (p) {
                    case 4:
                        return !1;
                    case 7:
                        T(l, o)
                }
                return h ? -1 : v || y ? y : l
            }
        }
        var m = n(80),
            o = n(1),
            x = n(49),
            O = n(17),
            S = n(12),
            w = n(104),
            T = o([].push);
        t.exports = {
            forEach: r(0),
            map: r(1),
            filter: r(2),
            some: r(3),
            every: r(4),
            find: r(5),
            findIndex: r(6),
            filterReject: r(7)
        }
    }, function(t, e, n) {
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
            h = n(35),
            b = n(22).get,
            u = n(77),
            n = n(86),
            E = i("native-string-replace", String.prototype.replace),
            m = RegExp.prototype.exec,
            x = m,
            O = r("".charAt),
            S = r("".indexOf),
            w = r("".replace),
            T = r("".slice),
            I = (i = /b*/g, g(m, r = /a/, "a"), g(m, i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
            _ = o.BROKEN_CARET,
            P = void 0 !== /()??/.exec("")[1];
        (I || P || _ || u || n) && (x = function(t) {
            var e, n, r, o, i, u, c = this,
                s = b(c),
                t = v(t),
                a = s.raw;
            if (a) return a.lastIndex = c.lastIndex, l = g(x, a, t), c.lastIndex = a.lastIndex, l;
            var f = s.groups,
                a = _ && c.sticky,
                l = g(y, c),
                s = c.source,
                p = 0,
                d = t;
            if (a && (l = w(l, "y", ""), -1 === S(l, "g") && (l += "g"), d = T(t, c.lastIndex), 0 < c.lastIndex && (!c.multiline || c.multiline && "\n" !== O(t, c.lastIndex - 1)) && (s = "(?: " + s + ")", d = " " + d, p++), e = new RegExp("^(?:" + s + ")", l)), P && (e = new RegExp("^" + s + "$(?!\\s)", l)), I && (n = c.lastIndex), r = g(m, a ? e : c, d), a ? r ? (r.input = T(r.input, p), r[0] = T(r[0], p), r.index = c.lastIndex, c.lastIndex += r[0].length) : c.lastIndex = 0 : I && r && (c.lastIndex = c.global ? r.index + r[0].length : n), P && r && 1 < r.length && g(E, r[0], e, function() {
                    for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
                }), r && f)
                for (r.groups = i = h(null), o = 0; o < f.length; o++) i[(u = f[o])[0]] = r[u[1]];
            return r
        }), t.exports = x
    }, function(t, e, n) {
        "use strict";
        var r = {};
        r[n(6)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
    }, function(t, e, n) {
        "use strict";
        var r = n(60),
            o = n(21),
            n = n(125);
        r || o(Object.prototype, "toString", n, {
            unsafe: !0
        })
    }, function(t, e, n) {
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
    }, , function(t, e) {
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
    }, function(t, e, n) {
        "use strict";
        var r = n(15),
            o = n(1);
        t.exports = function(t) {
            if ("Function" === r(t)) return o(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(6),
            i = n(40),
            u = o("species");
        t.exports = function(e) {
            return 51 <= i || !r(function() {
                var t = [];
                return (t.constructor = {})[u] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(78),
            o = n(30),
            i = n(32),
            u = r(r.bind);
        t.exports = function(t, e) {
            return o(t), void 0 === e ? t : i ? u(t, e) : function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e, n) {
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
            h = c && !o(function() {
                return 8 !== d(function() {}, "length", {
                    value: 8
                }).length
            }),
            b = String(String).split("String"),
            n = t.exports = function(t, e, n) {
                "Symbol(" === g(p(e), 0, 7) && (e = "[" + v(p(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!u(t, "name") || s && t.name !== e) && (c ? d(t, "name", {
                    value: e,
                    configurable: !0
                }) : t.name = e), h && n && u(n, "arity") && t.length !== n.arity && d(t, "length", {
                    value: n.arity
                });
                try {
                    n && u(n, "constructor") && n.constructor ? c && d(t, "prototype", {
                        writable: !1
                    }) : t.prototype && (t.prototype = void 0)
                } catch (t) {}
                n = f(t);
                return u(n, "source") || (n.source = y(b, "string" == typeof e ? e : "")), t
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
    }, function(t, e, n) {
        "use strict";
        var r = n(38),
            o = n(13),
            i = n(26);
        t.exports = function(t, e, n) {
            e = r(e);
            e in t ? o.f(t, e, i(0, n)) : t[e] = n
        }
    }, function(t, e, n) {
        "use strict";

        function r() {}

        function o(t) {
            if (!s(t)) return !1;
            try {
                return d(r, p, t), !0
            } catch (t) {
                return !1
            }
        }

        function i(t) {
            if (!s(t)) return !1;
            switch (a(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            try {
                return y || !!v(g, l(t))
            } catch (t) {
                return !0
            }
        }
        var u = n(1),
            c = n(0),
            s = n(3),
            a = n(28),
            f = n(16),
            l = n(73),
            p = [],
            d = f("Reflect", "construct"),
            g = /^\s*(?:class|function)\b/,
            v = u(g.exec),
            y = !g.test(r);
        i.sham = !0, t.exports = !d || c(function() {
            var t;
            return o(o.call) || !o(Object) || !o(function() {
                t = !0
            }) || t
        }) ? i : o
    }, function(t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function(t, e) {
            var n = [][t];
            return !!n && r(function() {
                n.call(null, e || function() {
                    return 1
                }, 1)
            })
        }
    }, , , , function(t, e, n) {
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
    }, function(t, e, n) {
        "use strict";
        n(37);
        var s = n(78),
            a = n(21),
            f = n(59),
            l = n(0),
            p = n(6),
            d = n(19),
            g = p("species"),
            v = RegExp.prototype;
        t.exports = function(n, t, e, r) {
            var u, o = p(n),
                c = !l(function() {
                    var t = {};
                    return t[o] = function() {
                        return 7
                    }, 7 !== "" [n](t)
                }),
                i = c && !l(function() {
                    var t = !1,
                        e = /a/;
                    return "split" === n && ((e = {
                        constructor: {}
                    }).constructor[g] = function() {
                        return e
                    }, e.flags = "", e[o] = /./ [o]), e.exec = function() {
                        return t = !0, null
                    }, e[o](""), !t
                });
            c && i && !e || (u = s(/./ [o]), i = t(o, "" [n], function(t, e, n, r, o) {
                var t = s(t),
                    i = e.exec;
                return i === f || i === v.exec ? c && !o ? {
                    done: !0,
                    value: u(e, n, r)
                } : {
                    done: !0,
                    value: t(n, e, r)
                } : {
                    done: !1
                }
            }), a(String.prototype, n, i[0]), a(v, o, i[1])), r && d(v[o], "sham", !0)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(7),
            o = n(8),
            i = n(3),
            u = n(15),
            c = n(59),
            s = TypeError;
        t.exports = function(t, e) {
            var n = t.exec;
            if (i(n)) return null !== (n = r(n, t, e)) && o(n), n;
            if ("RegExp" === u(t)) return r(c, t, e);
            throw new s("RegExp#exec called on incompatible receiver")
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(46).PROPER,
            o = n(21),
            i = n(8),
            u = n(14),
            c = n(0),
            s = n(113),
            n = "toString",
            a = RegExp.prototype[n],
            c = c(function() {
                return "/a/b" !== a.call({
                    source: "a",
                    flags: "b"
                })
            }),
            r = r && a.name !== n;
        (c || r) && o(RegExp.prototype, n, function() {
            var t = i(this);
            return "/" + u(t.source) + "/" + u(s(t))
        }, {
            unsafe: !0
        })
    }, function(t, e, n) {
        "use strict";
        var r = TypeError;
        t.exports = function(t) {
            if (9007199254740991 < t) throw r("Maximum allowed index exceeded");
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(127);
        t.exports = function(t, e) {
            return new(r(t))(0 === e ? 0 : e)
        }
    }, function(t, e, n) {
        "use strict";

        function r(e) {
            if (e && e.forEach !== s) try {
                a(e, "forEach", s)
            } catch (t) {
                e.forEach = s
            }
        }
        var o, i = n(2),
            u = n(114),
            c = n(115),
            s = n(129),
            a = n(19);
        for (o in u) u[o] && r(i[o] && i[o].prototype);
        r(c)
    }, , , , , function(t, e, n) {
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
    }, function(t, e, n) {
        "use strict";
        var r = n(112).charAt;
        t.exports = function(t, e, n) {
            return e + (n ? r(t, e).length : 1)
        }
    }, function(t, e, n) {
        "use strict";

        function r(o) {
            return function(t, e) {
                var n, t = u(c(t)),
                    e = i(e),
                    r = t.length;
                return e < 0 || r <= e ? o ? "" : void 0 : (n = a(t, e)) < 55296 || 56319 < n || e + 1 === r || (r = a(t, e + 1)) < 56320 || 57343 < r ? o ? s(t, e) : n : o ? f(t, e, e + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
        var o = n(1),
            i = n(23),
            u = n(14),
            c = n(24),
            s = o("".charAt),
            a = o("".charCodeAt),
            f = o("".slice);
        t.exports = {
            codeAt: r(!1),
            charAt: r(!0)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(7),
            o = n(9),
            i = n(29),
            u = n(75),
            c = RegExp.prototype;
        t.exports = function(t) {
            var e = t.flags;
            return void 0 !== e || "flags" in c || o(t, "flags") || !i(c, t) ? e : r(u, t)
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, function(t, e, n) {
        "use strict";
        n = n(53)("span").classList, n = n && n.constructor && n.constructor.prototype;
        t.exports = n === Object.prototype ? void 0 : n
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            o = n(17),
            i = n(69);
        r({
            target: "Object",
            stat: !0,
            forced: n(0)(function() {
                i(1)
            })
        }, {
            keys: function(t) {
                return i(o(t))
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            i = n(17),
            u = n(12),
            c = n(130),
            s = n(103);
        r({
            target: "Array",
            proto: !0,
            arity: 1,
            forced: n(0)(function() {
                return 4294967297 !== [].push.call({
                    length: 4294967296
                }, 1)
            }) || ! function() {
                try {
                    Object.defineProperty([], "length", {
                        writable: !1
                    }).push()
                } catch (t) {
                    return t instanceof TypeError
                }
            }()
        }, {
            push: function(t) {
                var e = i(this),
                    n = u(e),
                    r = arguments.length;
                s(n + r);
                for (var o = 0; o < r; o++) e[n] = arguments[o], n++;
                return c(e, n), n
            }
        })
    }, , , , , , , function(t, e, n) {
        "use strict";
        var o = n(7),
            r = n(100),
            a = n(8),
            i = n(25),
            f = n(31),
            l = n(14),
            u = n(24),
            p = n(41),
            d = n(111),
            g = n(101);
        r("match", function(r, c, s) {
            return [function(t) {
                var e = u(this),
                    n = i(t) ? void 0 : p(t, r);
                return n ? o(n, t, e) : new RegExp(t)[r](l(e))
            }, function(t) {
                var e = a(this),
                    n = l(t),
                    t = s(c, e, n);
                if (t.done) return t.value;
                if (!e.global) return g(e, n);
                for (var r = e.unicode, o = [], i = e.lastIndex = 0; null !== (u = g(e, n));) {
                    var u = l(u[0]);
                    "" === (o[i] = u) && (e.lastIndex = d(n, f(e.lastIndex), r)), i++
                }
                return 0 === i ? null : o
            }]
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(60),
            o = n(28);
        t.exports = r ? {}.toString : function() {
            return "[object " + o(this) + "]"
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            o = n(0),
            l = n(36),
            p = n(11),
            d = n(17),
            g = n(12),
            v = n(103),
            y = n(87),
            h = n(104),
            i = n(79),
            u = n(6),
            n = n(40),
            b = u("isConcatSpreadable"),
            u = 51 <= n || !o(function() {
                var t = [];
                return t[b] = !1, t.concat()[0] !== t
            });
        r({
            target: "Array",
            proto: !0,
            arity: 1,
            forced: !u || !i("concat")
        }, {
            concat: function(t) {
                for (var e, n, r, o, i, u = d(this), c = h(u, 0), s = 0, a = -1, f = arguments.length; a < f; a++)
                    if (i = void 0, !p(o = r = -1 === a ? u : arguments[a]) || (void 0 !== (i = o[b]) ? !i : !l(o))) v(s + 1), y(c, s++, r);
                    else
                        for (n = g(r), v(s + n), e = 0; e < n; e++, s++) e in r && y(c, s, r[e]);
                return c.length = s, c
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(36),
            o = n(88),
            i = n(11),
            u = n(6)("species"),
            c = Array;
        t.exports = function(t) {
            var e;
            return void 0 === (e = r(t) && (e = t.constructor, o(e) && (e === c || r(e.prototype)) || i(e) && null === (e = e[u])) ? void 0 : e) ? c : e
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            a = n(36),
            f = n(88),
            l = n(11),
            p = n(34),
            d = n(12),
            g = n(18),
            v = n(87),
            o = n(6),
            i = n(79),
            y = n(70),
            n = i("slice"),
            h = o("species"),
            b = Array,
            E = Math.max;
        r({
            target: "Array",
            proto: !0,
            forced: !n
        }, {
            slice: function(t, e) {
                var n, r, o, i = g(this),
                    u = d(i),
                    c = p(t, u),
                    s = p(void 0 === e ? u : e, u);
                if (a(i) && (n = i.constructor, (n = f(n) && (n === b || a(n.prototype)) || l(n) && null === (n = n[h]) ? void 0 : n) === b || void 0 === n)) return y(i, c, s);
                for (r = new(void 0 === n ? b : n)(E(s - c, 0)), o = 0; c < s; c++, o++) c in i && v(r, o, i[c]);
                return r.length = o, r
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(27).forEach,
            n = n(89)("forEach");
        t.exports = n ? [].forEach : function(t) {
            return r(this, t, 1 < arguments.length ? arguments[1] : void 0)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(36),
            i = TypeError,
            u = Object.getOwnPropertyDescriptor,
            n = r && ! function() {
                if (void 0 !== this) return 1;
                try {
                    Object.defineProperty([], "length", {
                        writable: !1
                    }).length = 1
                } catch (t) {
                    return t instanceof TypeError
                }
            }();
        t.exports = n ? function(t, e) {
            if (o(t) && !u(t, "length").writable) throw new i("Cannot set read only .length");
            return t.length = e
        } : function(t, e) {
            return t.length = e
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(f, t, e) {
        "use strict";
        var n = e(48).default,
            l = n(e(110)),
            r = n(e(186)),
            p = e(187),
            d = e(188);

        function g() {
            setTimeout(function() {
                var t = ggWidgetUtil.getAllUrlParams(window.href),
                    e = (window.widgetSdkConfig || {}).config;
                try {
                    if (!ggWidgetUtil.empty(t) && ggWidgetUtil.isFunction(window[e.callback]) && t.cb_type === p.CALLBACK_TYPE.REDIRECT) {
                        var n = t.cb_type,
                            r = t.access_token,
                            o = t.refresh_token,
                            i = t.expires_in,
                            u = t.error,
                            c = t.error_description,
                            s = {
                                cb_type: n
                            },
                            s = ggWidgetUtil.empty(u) ? (0, l.default)((0, l.default)({}, s), {}, {
                                status: "SUCCESS",
                                data: {
                                    access_token: r,
                                    refresh_token: o,
                                    expires_in: i
                                }
                            }) : (0, l.default)((0, l.default)({}, s), {}, {
                                data: {
                                    error: u,
                                    error_description: c
                                }
                            }),
                            a = ggWidgetUtil.get(window.widgetSdkConfig, "config.callback");
                        ggWidgetUtil.isFunction(window[a]) && window[a](ggWidgetUtil.toCamelObj(s));
                        try {
                            window.history.replaceState(null, document.title, window.location.href.split("?")[0])
                        } catch (t) {
                            window.history.pushState(null, document.title, window.location.href.split("?")[0])
                        }
                    }
                } catch (u) {
                    console.error({
                        error: u
                    })
                }
            }, 300)
        }
        window.console = {
            log: function() {},
            warn: function() {},
            error: function() {},
            time: function() {},
            timeEnd: function() {}
        }, window.widgetSdkConfig = {
            staticPath: "https://cdn-gg.vnggames.app/widget-up/1.3.5",
            trackingApiUrl: "https://et.vnggames.app",
            trackingKey: "MTY4MDIzMzM1OTo5YTFhMGExOWIwMzE0ZjdhMWNlNDIyMmExNzE2Y2JjZg==",
            accountCenterUrl: "https://myaccount.vnggames.com",
            config: {}
        };
        n = document.createElement("link");

        function o() {
            var c = window.widgetSdkConfig.config || {},
                t = c || {},
                s = t.type,
                a = t.userProfile;
            (0, r.default)("script", ["".concat(window.widgetSdkConfig.staticPath, "/bundle/js/ggSdkUP.js")], !1, function() {
                var t = window.ggSdkUP,
                    e = t.doAuthentication,
                    n = t.doChangeLanguage,
                    r = t.doToggleLoading,
                    o = t.doRenderUserProfile,
                    i = t.onGetUserProfile,
                    u = t.onUpdateLocale,
                    t = t.onUpdateExtendData;
                f.exports.doAuthentication = e, f.exports.doChangeLanguage = n, s === p.SDK_TYPE.REDIRECT && (f.exports.doToggleLoading = r), g(), !ggWidgetUtil.empty(a) && a.enable && (ggWidgetUtil.empty(a.serviceId) || ggWidgetUtil.empty(a.ssoUri) ? (0, d.dispatch)("addError", {
                    type: "INIT_SDK",
                    error: "Invalid userProfile configuration - Please check integration documentation"
                }) : (f.exports.doRenderUserProfile = o, f.exports.onGetUserProfile = i, f.exports.doUpdateLocale = u, f.exports.doUpdateExtendData = t)), setTimeout(function() {
                    ggWidgetUtil.isFunction(null == c ? void 0 : c.onReady) && c.onReady()
                }, 50)
            })
        }
        n.as = "image", n.rel = "preload", n.href = "https://cdn-gg.vnggames.app/logo/client_logo_vnggames.com.png", window.document.head.appendChild(n), (0, r.default)("link", ["https://cdn-gg.vnggames.app/common/font-face.css"], !0), (0, r.default)("script", ["https://cdn-gg.vnggames.app/widget-up/1.3.5/prod/ggWidgetUtil.js", "https://cdn-gg.vnggames.app/widget-up/1.3.5/prod/ggWidgetCurl.js", "".concat(window.widgetSdkConfig.staticPath, "/bundle/js/ResizeSensor.js")], !0, function(t) {
            t ? console.error({
                resp: t
            }) : ggWidgetUtil.isFunction(window.widgetHubInit) ? (window.widgetHubInit(), o()) : (0, d.dispatch)("addError", {
                type: "INIT_SDK",
                error: "INVALID initial function. Please following integration documentation"
            })
        }), f.exports = {
            init: function(t) {
                var e = t.mode,
                    n = t.clientId;
                ggWidgetUtil.empty(p.SDK_MODE[e]) ? (0, d.dispatch)("addError", {
                    type: "INIT_SDK",
                    error: "Invalid sdk mode - Please check integration documentation."
                }) : e === p.SDK_MODE.GAME_SITE && ggWidgetUtil.empty(n) ? (0, d.dispatch)("addError", {
                    type: "INIT_SDK",
                    error: "Invalid clientId - Please check integration documentation for ".concat(e)
                }) : (window.widgetSdkConfig.config = (0, l.default)((0, l.default)({}, t), {}, {
                    type: p.SDK_TYPE.REDIRECT
                }), ggWidgetUtil.getMetadataInfo(t.clientId))
            },
            loginMethods: p.METHOD_LOGIN_ENUM,
            sdkMode: p.SDK_MODE,
            updateConfig: o
        }
    }, function(t, e, n) {
        "use strict";

        function f(t) {
            return "function" == typeof t && null !== Object.prototype.toString.call(t).match(/function/i)
        }

        function l(t) {
            var e = /(?:\/)[^\/\?#]+(?=[^\/]*$)/.exec(t)[0],
                t = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?((\/\w+)*\/)?([\w\-\.]+[^#?\s]+)?(\?([^#]*))?(#(.*))?/g.exec(t);
            return e = null !== t ? "".concat(t[4], "-").concat(e) : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.isFunction = f, e.default = function t(e, n) {
            var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            var o = 3 < arguments.length ? arguments[3] : void 0;
            var i = window.document;

            function u() {
                n.shift(), t(e, n, r, o)
            }
            var c = Array.prototype.slice.call(i.head.getElementsByTagName(e)); {
                var s, a;
                0 === n.length ? f(o) && o() : (s = "".concat(n[0]).concat(r ? "" : "?ts=".concat((new Date).getTime())), a = l(s), (!c.some(function(t) {
                    return t.id === a
                }) || !r) && ((c = i.createElement(e)).id = a, "link" === e ? (c.href = s, c.rel = "stylesheet", c.type = "text/css") : "script" === e && (c.src = s), window.document.head.appendChild(c), f(o)) ? c.onload = u : u())
            }
        }, n(37), n(124), n(61), n(102), n(126), n(128)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LOGIN_METHODS = e.TERRITORIES = e.METHOD_LOGIN = e.METHOD_LOGIN_ENUM = e.GAME_DISPLAY_TYPE = e.DEFAULT_LANGUAGE = e.LANGUAGE_SUPPORTED = e.SDK_MODE = e.SDK_TYPE = e.CALLBACK_TYPE = e.LOGIN_TYPE = void 0;
        var r = {
                BUTTON: "button",
                LINK: "link",
                SOCIAL: "social"
            },
            r = (e.LOGIN_TYPE = r, e.CALLBACK_TYPE = {
                REDIRECT: "REDIRECT"
            }, e.SDK_TYPE = {
                REDIRECT: "REDIRECT"
            }, e.SDK_MODE = {
                GAME_SITE: "GAME_SITE",
                PORTAL: "PORTAL"
            }, e.LANGUAGE_SUPPORTED = ["en", "vi", "th", "id", "zh-CN"], e.DEFAULT_LANGUAGE = "en", e.GAME_DISPLAY_TYPE = {
                GRID: "GRID",
                LIST: "LIST"
            }, e.METHOD_LOGIN_ENUM = {
                GG: "GG",
                EMAIL: "EMAIL",
                PHONE_NUMBER: "PHONE_NUMBER",
                GUEST: "GUEST",
                GUEST_EMAIL: "GUEST_EMAIL",
                GUEST_PHONE_NUMBER: "GUEST_PHONE_NUMBER",
                ZING: "ZING",
                FACEBOOK: "FACEBOOK",
                GOOGLE: "GOOGLE",
                APPLE: "APPLE",
                PROTECTED_GUEST: "PROTECTED_GUEST",
                ROLE_ID: "ROLE_ID",
                GUEST_GAMES: "GUEST_GAMES"
            }, {
                GG: {
                    provider: "gg",
                    type: r.BUTTON,
                    value: 0
                },
                EMAIL: {
                    provider: "email",
                    type: r.BUTTON,
                    value: 64
                },
                PHONE_NUMBER: {
                    provider: "phone_number",
                    type: r.BUTTON,
                    value: 32
                },
                GUEST: {
                    provider: "guest",
                    type: r.LINK,
                    value: 0
                },
                GUEST_EMAIL: {
                    provider: "guest_email",
                    type: r.LINK,
                    value: 64
                },
                GUEST_PHONE_NUMBER: {
                    provider: "guest_phone_number",
                    type: r.LINK,
                    value: 32
                },
                ZING: {
                    provider: "zing",
                    type: r.BUTTON,
                    value: 2
                },
                FACEBOOK: {
                    provider: "facebook",
                    type: r.SOCIAL,
                    value: 8
                },
                GOOGLE: {
                    provider: "google",
                    type: r.SOCIAL,
                    value: 4
                },
                APPLE: {
                    provider: "apple",
                    type: r.SOCIAL,
                    value: 1
                },
                PROTECTED_GUEST: {
                    provider: "protected_guest",
                    type: r.LINK,
                    value: 16
                },
                GUEST_GAMES: {
                    provider: "protected_guest",
                    type: r.LINK,
                    value: 16
                },
                ROLE_ID: {
                    provider: "role_id",
                    type: r.LINK,
                    value: 0
                }
            });
        e.METHOD_LOGIN = r, e.TERRITORIES = {
            VN: "Viet Nam",
            ID: "Indonesia",
            MY: "Malaysia",
            PH: "Philippines",
            TW: "Taiwan",
            MO: "Macau",
            HK: "Hong Kong",
            TH: "Thailand",
            SG: "Singapore"
        };
        e.LOGIN_METHODS = {
            0: "UNKNOWN",
            1: {
                name: "EMAIL"
            },
            2: {
                name: "PHONE_NUMBER"
            },
            3: {
                name: "USERNAME"
            },
            4: {
                name: "FACEBOOK"
            },
            5: {
                name: "GOOGLE"
            },
            6: {
                name: "APPLE"
            },
            7: {
                name: "ZING"
            },
            8: {
                name: "PROTECTED_GUEST"
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(48).default,
            o = (Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.dispatch = void 0, n(61), n(105), n(116), r(n(110))),
            i = new(r(n(189)).default)({
                state: {
                    loadingFunc: {},
                    error: null
                },
                mutations: {
                    ADD_LOADING_FUNCTION: function(t, e) {
                        t.loadingFunc = (0, o.default)((0, o.default)({}, t.loadingFunc), e)
                    },
                    ADD_ERROR: function(t, e) {
                        t.error = (0, o.default)((0, o.default)({}, t.error), e)
                    }
                },
                actions: {
                    addLoadingFunc: function(t, e) {
                        (0, t.commit)("ADD_LOADING_FUNCTION", e)
                    },
                    addError: function(t, e) {
                        (0, t.commit)("ADD_ERROR", e)
                    }
                }
            }),
            u = ["pageshow", "pagehide", "load"];
        i.subscribe(function(t) {
            function e() {
                Object.keys(n).forEach(function(t) {
                    t = n[t];
                    ggWidgetUtil.isFunction(t) && t()
                })
            }
            var n = t.loadingFunc;
            u.forEach(function(t) {
                window.removeEventListener(t, e)
            }), u.forEach(function(t) {
                window.addEventListener(t, e)
            })
        }), i.subscribe(function(t) {
            var e, t = t.error;
            ggWidgetUtil.empty(t) || (e = ggWidgetUtil.get(window.widgetSdkConfig, "config.onError"), ggWidgetUtil.isFunction(e) && e(t), console.error({
                error: t
            }))
        });
        e.dispatch = function() {
            i.dispatch.apply(i, arguments)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(48).default,
            o = (Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, n(117), n(61), n(105), r(n(190))),
            i = r(n(191));
        e.default = function() {
            function e() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                (0, o.default)(this, e), this.state = t.state || {}, this.mutations = t.mutations || {}, this.actions = t.actions || {}, this.subscribers = [], this.commit = this.commit.bind(this)
            }
            return (0, i.default)(e, [{
                key: "subscribe",
                value: function(t) {
                    this.subscribers.push(t)
                }
            }, {
                key: "commit",
                value: function(t, e) {
                    "function" == typeof this.mutations[t] && (this.mutations[t](this.state, e), this.notifySubscribers())
                }
            }, {
                key: "dispatch",
                value: function(t, e) {
                    "function" == typeof this.actions[t] && this.actions[t]({
                        commit: this.commit
                    }, e)
                }
            }, {
                key: "notifySubscribers",
                value: function() {
                    var e = this;
                    this.subscribers.forEach(function(t) {
                        t(e.state)
                    })
                }
            }]), e
        }(), t.exports = e.default
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        n.r(e), n.d(e, "default", function() {
            return r
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", function() {
            return i
        });
        var o = n(56);

        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Object(o.a)(r.key), r)
            }
        }

        function i(t, e, n) {
            return e && r(t.prototype, e), n && r(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t
        }
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
    }, o.p = "", o(o.s = 185);

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