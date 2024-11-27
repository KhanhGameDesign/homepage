(function(e, t) {
    "object" === typeof exports && "object" === typeof module ? module.exports = t() : "function" === typeof define && define.amd ? define("ggSdkUP", [], t) : "object" === typeof exports ? exports["ggSdkUP"] = t() : e["ggSdkUP"] = t()
})(this, (function() {
    return function(e) {
        function t(t) {
            for (var n, r, i = t[0], a = t[1], s = 0, u = []; s < i.length; s++) r = i[s], Object.prototype.hasOwnProperty.call(o, r) && o[r] && u.push(o[r][0]), o[r] = 0;
            for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            l && l(t);
            while (u.length) u.shift()()
        }
        var n = {},
            r = {
                ggSdkUP: 0
            },
            o = {
                ggSdkUP: 0
            };

        function i(e) {
            return a.p + "bundle/js/" + ({}[e] || e) + ".js"
        }

        function a(t) {
            if (n[t]) return n[t].exports;
            var r = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(r.exports, r, r.exports, a), r.l = !0, r.exports
        }
        a.e = function(e) {
            var t = [],
                n = {
                    "upWidget.1.3.5-7d520390": 1,
                    "upWidget.1.3.5-531a280e": 1,
                    "upWidget.1.3.5-775af252": 1,
                    "upWidget.1.3.5-097ce9e6": 1,
                    "upWidget.1.3.5-6a868382": 1,
                    "upWidget.1.3.5-9fb4cfe8": 1,
                    "upWidget.1.3.5-bff80d78": 1,
                    "upWidget.1.3.5-d8d6bc40": 1,
                    "upWidget.1.3.5-1ed2fe9a": 1,
                    "upWidget.1.3.5-3fbb13db": 1,
                    "upWidget.1.3.5-8b8ba2aa": 1
                };
            r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise((function(t, n) {
                for (var o = "bundle/css/" + ({}[e] || e) + ".css", i = a.p + o, s = document.getElementsByTagName("link"), u = 0; u < s.length; u++) {
                    var c = s[u],
                        l = c.getAttribute("data-href") || c.getAttribute("href");
                    if ("stylesheet" === c.rel && (l === o || l === i)) return t()
                }
                var f = document.getElementsByTagName("style");
                for (u = 0; u < f.length; u++) {
                    c = f[u], l = c.getAttribute("data-href");
                    if (l === o || l === i) return t()
                }
                var d = document.createElement("link");
                d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function(t) {
                    var o = t && t.target && t.target.src || i,
                        a = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                    a.code = "CSS_CHUNK_LOAD_FAILED", a.request = o, delete r[e], d.parentNode.removeChild(d), n(a)
                }, d.href = i;
                var p = document.getElementsByTagName("head")[0];
                p.appendChild(d)
            })).then((function() {
                r[e] = 0
            })));
            var s = o[e];
            if (0 !== s)
                if (s) t.push(s[2]);
                else {
                    var u = new Promise((function(t, n) {
                        s = o[e] = [t, n]
                    }));
                    t.push(s[2] = u);
                    var c, l = document.createElement("script");
                    l.charset = "utf-8", l.timeout = 120, a.nc && l.setAttribute("nonce", a.nc), l.src = i(e);
                    var f = new Error;
                    c = function(t) {
                        l.onerror = l.onload = null, clearTimeout(d);
                        var n = o[e];
                        if (0 !== n) {
                            if (n) {
                                var r = t && ("load" === t.type ? "missing" : t.type),
                                    i = t && t.target && t.target.src;
                                f.message = "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")", f.name = "ChunkLoadError", f.type = r, f.request = i, n[1](f)
                            }
                            o[e] = void 0
                        }
                    };
                    var d = setTimeout((function() {
                        c({
                            type: "timeout",
                            target: l
                        })
                    }), 12e4);
                    l.onerror = l.onload = c, document.head.appendChild(l)
                }
            return Promise.all(t)
        }, a.m = e, a.c = n, a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, a.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function(e, t) {
            if (1 & t && (e = a(e)), 8 & t) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (a.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) a.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, a.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            } : function() {
                return e
            };
            return a.d(t, "a", t), t
        }, a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, a.p = "https://cdn-gg.vnggames.app/widget-up/1.3.5/", a.oe = function(e) {
            throw console.error(e), e
        };
        var s = this["ssoWidget-1.3.5"] = this["ssoWidget-1.3.5"] || [],
            u = s.push.bind(s);
        s.push = t, s = s.slice();
        for (var c = 0; c < s.length; c++) t(s[c]);
        var l = u;
        return a(a.s = "b519")
    }({
        "00ee": function(e, t, n) {
            "use strict";
            var r = n("b622"),
                o = r("toStringTag"),
                i = {};
            i[o] = "z", e.exports = "[object z]" === String(i)
        },
        "0366": function(e, t, n) {
            "use strict";
            var r = n("4625"),
                o = n("59ed"),
                i = n("40d5"),
                a = r(r.bind);
            e.exports = function(e, t) {
                return o(e), void 0 === t ? e : i ? a(e, t) : function() {
                    return e.apply(t, arguments)
                }
            }
        },
        "04f8": function(e, t, n) {
            "use strict";
            var r = n("2d00"),
                o = n("d039"),
                i = n("da84"),
                a = i.String;
            e.exports = !!Object.getOwnPropertySymbols && !o((function() {
                var e = Symbol("symbol detection");
                return !a(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        },
        "06c5": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("6b75");

            function o(e, t) {
                if (e) {
                    if ("string" === typeof e) return Object(r["a"])(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(r["a"])(e, t) : void 0
                }
            }
        },
        "06cf": function(e, t, n) {
            "use strict";
            var r = n("83ab"),
                o = n("c65b"),
                i = n("d1e7"),
                a = n("5c6c"),
                s = n("fc6a"),
                u = n("a04b"),
                c = n("1a2d"),
                l = n("0cfb"),
                f = Object.getOwnPropertyDescriptor;
            t.f = r ? f : function(e, t) {
                if (e = s(e), t = u(t), l) try {
                    return f(e, t)
                } catch (n) {}
                if (c(e, t)) return a(!o(i.f, e, t), e[t])
            }
        },
        "07fa": function(e, t, n) {
            "use strict";
            var r = n("50c4");
            e.exports = function(e) {
                return r(e.length)
            }
        },
        "08ec": function(e, t, n) {
            "use strict";
            var r = n("dbce").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.changeLanguage = a, Object.defineProperty(t, "i18n", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "updateResources", {
                enumerable: !0,
                get: function() {
                    return o.updateResources
                }
            });
            var o = r(n("12cb")),
                i = n("5fb0");

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.DEFAULT_LANGUAGE;
                o.default.language !== e && o.default.changeLanguage(e)
            }
        },
        "0b42": function(e, t, n) {
            "use strict";
            var r = n("e8b5"),
                o = n("68ee"),
                i = n("861d"),
                a = n("b622"),
                s = a("species"),
                u = Array;
            e.exports = function(e) {
                var t;
                return r(e) && (t = e.constructor, o(t) && (t === u || r(t.prototype)) ? t = void 0 : i(t) && (t = t[s], null === t && (t = void 0))), void 0 === t ? u : t
            }
        },
        "0cfb": function(e, t, n) {
            "use strict";
            var r = n("83ab"),
                o = n("d039"),
                i = n("cc12");
            e.exports = !r && !o((function() {
                return 7 !== Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        "0d26": function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = Error,
                i = r("".replace),
                a = function(e) {
                    return String(new o(e).stack)
                }("zxcasd"),
                s = /\n\s*at [^:]*:[^\n]*/,
                u = s.test(a);
            e.exports = function(e, t) {
                if (u && "string" == typeof e && !o.prepareStackTrace)
                    while (t--) e = i(e, s, "");
                return e
            }
        },
        "0d51": function(e, t, n) {
            "use strict";
            var r = String;
            e.exports = function(e) {
                try {
                    return r(e)
                } catch (t) {
                    return "Object"
                }
            }
        },
        "12cb": function(e, t, n) {
            "use strict";
            var r = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.updateLocale = p, t.updateResources = v, t.default = void 0, n("d3b7"), n("159b"), n("b64b"), n("d9e2"), n("caad"), n("2532"), n("99af"), n("e9c4");
            var o = r(n("ade3")),
                i = r(n("5530")),
                a = r(n("2b0e")),
                s = r(n("5f34")),
                u = r(n("16e8")),
                c = r(n("d2a3")),
                l = n("5fb0");
            var f = "user-profile",
                d = {
                    ns: [f],
                    fallbackLng: l.DEFAULT_LANGUAGE,
                    defaultNS: f,
                    debug: !1,
                    supportedLngs: l.LANGUAGE_SUPPORTED,
                    load: "currentOnly",
                    interpolation: {
                        escapeValue: !1
                    },
                    detection: {
                        order: ["querystring", "cookie", "sessionStorage", "localStorage", "htmlTag", "navigator"],
                        lookupQuerystring: "lang",
                        lookupLocalStorage: "lang",
                        excludeCacheFor: ["cimode"],
                        lookupSessionStorage: "__gg_locale",
                        lookupCookie: "__gg_locale",
                        cookieDomain: ggWidgetUtil.getWildcardDomain(),
                        cookieOptions: {
                            path: "/",
                            domain: ggWidgetUtil.getWildcardDomain()
                        },
                        htmlTag: window.document ? window.document.head : void 0
                    }
                };

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.DEFAULT_LANGUAGE;
                s.default.changeLanguage(e || l.DEFAULT_LANGUAGE)
            }

            function v(e) {
                try {
                    var t = s.default.options.defaultNS;
                    return Object.keys(e).forEach((function(n) {
                        var r = e[n];
                        if (!ggWidgetUtil.isObject(r)) throw new Error("Invalid locale object: ".concat(n));
                        Object.keys(r).forEach((function(r) {
                            var i = e[n][r];
                            if (!ggWidgetUtil.includes(l.LANGUAGE_SUPPORTED, r)) throw new Error("Invalid language: ".concat(r, " - language must be one of ").concat(JSON.stringify(l.LANGUAGE_SUPPORTED)));
                            if (ggWidgetUtil.empty(i)) throw new Error("Invalid locale data: [".concat(r, "] ").concat(n));
                            s.default.addResourceBundle(r, t, (0, o.default)({}, n, i), !0, !0)
                        }))
                    })), {
                        status: "SUCCESS"
                    }
                } catch (n) {
                    return console.error(n), {
                        status: "ERROR",
                        error: n
                    }
                }
            }
            d = (0, i.default)((0, i.default)({}, d), {}, {
                resources: {
                    en: (0, o.default)({}, f, n("cd85")("./".concat(f, ".json"))),
                    vi: (0, o.default)({}, f, n("1f5f")("./".concat(f, ".json"))),
                    th: (0, o.default)({}, f, n("a3d4")("./".concat(f, ".json"))),
                    id: (0, o.default)({}, f, n("6a17")("./".concat(f, ".json"))),
                    "zh-CN": (0, o.default)({}, f, n("f854")("./".concat(f, ".json")))
                }
            }), s.default.use(u.default).init(d), a.default.use(c.default, {
                i18next: s.default,
                rerenderOn: ["initialized", "languageChanged", "loaded"]
            });
            var h = s.default;
            t.default = h
        },
        "13d2": function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = n("d039"),
                i = n("1626"),
                a = n("1a2d"),
                s = n("83ab"),
                u = n("5e77").CONFIGURABLE,
                c = n("8925"),
                l = n("69f3"),
                f = l.enforce,
                d = l.get,
                p = String,
                v = Object.defineProperty,
                h = r("".slice),
                g = r("".replace),
                m = r([].join),
                y = s && !o((function() {
                    return 8 !== v((function() {}), "length", {
                        value: 8
                    }).length
                })),
                b = String(String).split("String"),
                _ = e.exports = function(e, t, n) {
                    "Symbol(" === h(p(t), 0, 7) && (t = "[" + g(p(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!a(e, "name") || u && e.name !== t) && (s ? v(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), y && n && a(n, "arity") && e.length !== n.arity && v(e, "length", {
                        value: n.arity
                    });
                    try {
                        n && a(n, "constructor") && n.constructor ? s && v(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (o) {}
                    var r = f(e);
                    return a(r, "source") || (r.source = m(b, "string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = _((function() {
                return i(this) && d(this).source || c(this)
            }), "toString")
        },
        "14d9": function(e, t, n) {
            "use strict";
            var r = n("23e7"),
                o = n("7b0b"),
                i = n("07fa"),
                a = n("3a34"),
                s = n("3511"),
                u = n("d039"),
                c = u((function() {
                    return 4294967297 !== [].push.call({
                        length: 4294967296
                    }, 1)
                })),
                l = function() {
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).push()
                    } catch (e) {
                        return e instanceof TypeError
                    }
                },
                f = c || !l();
            r({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: f
            }, {
                push: function(e) {
                    var t = o(this),
                        n = i(t),
                        r = arguments.length;
                    s(n + r);
                    for (var u = 0; u < r; u++) t[n] = arguments[u], n++;
                    return a(t, n), n
                }
            })
        },
        "159b": function(e, t, n) {
            "use strict";
            var r = n("da84"),
                o = n("fdbc"),
                i = n("785a"),
                a = n("17c2"),
                s = n("9112"),
                u = function(e) {
                    if (e && e.forEach !== a) try {
                        s(e, "forEach", a)
                    } catch (t) {
                        e.forEach = a
                    }
                };
            for (var c in o) o[c] && u(r[c] && r[c].prototype);
            u(i)
        },
        1626: function(e, t, n) {
            "use strict";
            var r = n("8ea1"),
                o = r.all;
            e.exports = r.IS_HTMLDDA ? function(e) {
                return "function" == typeof e || e === o
            } : function(e) {
                return "function" == typeof e
            }
        },
        "16e8": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return S
            }));
            var r = n("d4ec"),
                o = n("bee2"),
                i = [],
                a = i.forEach,
                s = i.slice;

            function u(e) {
                return a.call(s.call(arguments, 1), (function(t) {
                    if (t)
                        for (var n in t) void 0 === e[n] && (e[n] = t[n])
                })), e
            }
            var c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                l = function(e, t, n) {
                    var r = n || {};
                    r.path = r.path || "/";
                    var o = encodeURIComponent(t),
                        i = "".concat(e, "=").concat(o);
                    if (r.maxAge > 0) {
                        var a = r.maxAge - 0;
                        if (Number.isNaN(a)) throw new Error("maxAge should be a Number");
                        i += "; Max-Age=".concat(Math.floor(a))
                    }
                    if (r.domain) {
                        if (!c.test(r.domain)) throw new TypeError("option domain is invalid");
                        i += "; Domain=".concat(r.domain)
                    }
                    if (r.path) {
                        if (!c.test(r.path)) throw new TypeError("option path is invalid");
                        i += "; Path=".concat(r.path)
                    }
                    if (r.expires) {
                        if ("function" !== typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
                        i += "; Expires=".concat(r.expires.toUTCString())
                    }
                    if (r.httpOnly && (i += "; HttpOnly"), r.secure && (i += "; Secure"), r.sameSite) {
                        var s = "string" === typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite;
                        switch (s) {
                            case !0:
                                i += "; SameSite=Strict";
                                break;
                            case "lax":
                                i += "; SameSite=Lax";
                                break;
                            case "strict":
                                i += "; SameSite=Strict";
                                break;
                            case "none":
                                i += "; SameSite=None";
                                break;
                            default:
                                throw new TypeError("option sameSite is invalid")
                        }
                    }
                    return i
                },
                f = {
                    create: function(e, t, n, r) {
                        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            path: "/",
                            sameSite: "strict"
                        };
                        n && (o.expires = new Date, o.expires.setTime(o.expires.getTime() + 60 * n * 1e3)), r && (o.domain = r), document.cookie = l(e, encodeURIComponent(t), o)
                    },
                    read: function(e) {
                        for (var t = "".concat(e, "="), n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                            var o = n[r];
                            while (" " === o.charAt(0)) o = o.substring(1, o.length);
                            if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                        }
                        return null
                    },
                    remove: function(e) {
                        this.create(e, "", -1)
                    }
                },
                d = {
                    name: "cookie",
                    lookup: function(e) {
                        var t;
                        if (e.lookupCookie && "undefined" !== typeof document) {
                            var n = f.read(e.lookupCookie);
                            n && (t = n)
                        }
                        return t
                    },
                    cacheUserLanguage: function(e, t) {
                        t.lookupCookie && "undefined" !== typeof document && f.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
                    }
                },
                p = {
                    name: "querystring",
                    lookup: function(e) {
                        var t;
                        if ("undefined" !== typeof window) {
                            var n = window.location.search;
                            !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
                            for (var r = n.substring(1), o = r.split("&"), i = 0; i < o.length; i++) {
                                var a = o[i].indexOf("=");
                                if (a > 0) {
                                    var s = o[i].substring(0, a);
                                    s === e.lookupQuerystring && (t = o[i].substring(a + 1))
                                }
                            }
                        }
                        return t
                    }
                },
                v = null,
                h = function() {
                    if (null !== v) return v;
                    try {
                        v = "undefined" !== window && null !== window.localStorage;
                        var e = "i18next.translate.boo";
                        window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e)
                    } catch (t) {
                        v = !1
                    }
                    return v
                },
                g = {
                    name: "localStorage",
                    lookup: function(e) {
                        var t;
                        if (e.lookupLocalStorage && h()) {
                            var n = window.localStorage.getItem(e.lookupLocalStorage);
                            n && (t = n)
                        }
                        return t
                    },
                    cacheUserLanguage: function(e, t) {
                        t.lookupLocalStorage && h() && window.localStorage.setItem(t.lookupLocalStorage, e)
                    }
                },
                m = null,
                y = function() {
                    if (null !== m) return m;
                    try {
                        m = "undefined" !== window && null !== window.sessionStorage;
                        var e = "i18next.translate.boo";
                        window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e)
                    } catch (t) {
                        m = !1
                    }
                    return m
                },
                b = {
                    name: "sessionStorage",
                    lookup: function(e) {
                        var t;
                        if (e.lookupSessionStorage && y()) {
                            var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                            n && (t = n)
                        }
                        return t
                    },
                    cacheUserLanguage: function(e, t) {
                        t.lookupSessionStorage && y() && window.sessionStorage.setItem(t.lookupSessionStorage, e)
                    }
                },
                _ = {
                    name: "navigator",
                    lookup: function(e) {
                        var t = [];
                        if ("undefined" !== typeof navigator) {
                            if (navigator.languages)
                                for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                            navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language)
                        }
                        return t.length > 0 ? t : void 0
                    }
                },
                O = {
                    name: "htmlTag",
                    lookup: function(e) {
                        var t, n = e.htmlTag || ("undefined" !== typeof document ? document.documentElement : null);
                        return n && "function" === typeof n.getAttribute && (t = n.getAttribute("lang")), t
                    }
                },
                w = {
                    name: "path",
                    lookup: function(e) {
                        var t;
                        if ("undefined" !== typeof window) {
                            var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                            if (n instanceof Array)
                                if ("number" === typeof e.lookupFromPathIndex) {
                                    if ("string" !== typeof n[e.lookupFromPathIndex]) return;
                                    t = n[e.lookupFromPathIndex].replace("/", "")
                                } else t = n[0].replace("/", "")
                        }
                        return t
                    }
                },
                k = {
                    name: "subdomain",
                    lookup: function(e) {
                        var t = "number" === typeof e.lookupFromSubdomainIndex ? e.lookupFromSubdomainIndex + 1 : 1,
                            n = "undefined" !== typeof window && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
                        if (n) return n[t]
                    }
                };

            function x() {
                return {
                    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                    lookupQuerystring: "lng",
                    lookupCookie: "i18next",
                    lookupLocalStorage: "i18nextLng",
                    lookupSessionStorage: "i18nextLng",
                    caches: ["localStorage"],
                    excludeCacheFor: ["cimode"],
                    convertDetectedLanguage: function(e) {
                        return e
                    }
                }
            }
            var S = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object(r["default"])(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n)
                }
                return Object(o["default"])(e, [{
                    key: "init",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.services = e || {
                            languageUtils: {}
                        }, this.options = u(t, this.options || {}, x()), "string" === typeof this.options.convertDetectedLanguage && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(e) {
                            return e.replace("-", "_")
                        }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(d), this.addDetector(p), this.addDetector(g), this.addDetector(b), this.addDetector(_), this.addDetector(O), this.addDetector(w), this.addDetector(k)
                    }
                }, {
                    key: "addDetector",
                    value: function(e) {
                        this.detectors[e.name] = e
                    }
                }, {
                    key: "detect",
                    value: function(e) {
                        var t = this;
                        e || (e = this.options.order);
                        var n = [];
                        return e.forEach((function(e) {
                            if (t.detectors[e]) {
                                var r = t.detectors[e].lookup(t.options);
                                r && "string" === typeof r && (r = [r]), r && (n = n.concat(r))
                            }
                        })), n = n.map((function(e) {
                            return t.options.convertDetectedLanguage(e)
                        })), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                    }
                }, {
                    key: "cacheUserLanguage",
                    value: function(e, t) {
                        var n = this;
                        t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((function(t) {
                            n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options)
                        })))
                    }
                }]), e
            }();
            S.type = "languageDetector"
        },
        1780: function(e) {
            e.exports = JSON.parse('{"label.gg":"Email hoặc số điện thoại","label.gg_dim":"Email/phone","label.email":"Email","label.email_dim":"Email","label.phone_number":"Số điện thoại","label.phone_number_dim":"Phone","label.zing":"Zing ID","label.zing_dim":"ZingID","label.apple":"Apple","label.apple_dim":"Apple","label.google":"Google","label.google_dim":"Google","label.facebook":"Facebook","label.facebook_dim":"Facebook","label.guest":"Chơi ngay","label.guest_dim":"Chơi ngay","label.guest_email":"Chơi ngay","label.guest_email_dim":"Chơi ngay","label.guest_phone_number":"Chơi ngay","label.guest_phone_number_dim":"Chơi ngay","label.protected_guest":"Chơi ngay","label.protected_guest_dim":"Chơi ngay","label.role_id":"Role ID","label.role_id_dim":"Role ID","label.error":"Lỗi","title":"Đăng nhập","subtitle":"Một tài khoản cho tất cả sản phẩm VNGGames","error.errorInput":"Thông tin cấu hình không chính xác.","button.ok":"ok","callbackError":"Đăng nhập không thành công.","or":"Hoặc sử dụng","orByGame":"Hoặc sử dụng Chơi ngay để đăng nhập","gameList.title":"Đăng nhập","gameList.subtitle":"Chọn game và đăng nhập bằng tài khoản \\"Chơi Ngay\\"","gameList.subtitle.mobile":"Đăng nhập bằng tài khoản \\"Chơi Ngay\\"","gameList.placeholder":"Tìm game bạn đang chơi","gameList.searchNotFound":"Không tìm thấy trò chơi bạn cần tìm","button.back":"Quay lại","button.continue":"Tiếp tục","AccountCenter":"Trung tâm tài khoản","Logout":"Đăng xuất","Territory":"Lãnh thổ","button.login":"Đăng nhập","userProfile.gameNotPlay":"Bạn chưa chơi game này hoặc chưa có nhân vật trong game.","userProfile.loginSource":"Nguồn đăng nhập từ tài khoản {{loginMethod}} của \\"{{gameName}}\\""}')
        },
        "17c2": function(e, t, n) {
            "use strict";
            var r = n("b727").forEach,
                o = n("a640"),
                i = o("forEach");
            e.exports = i ? [].forEach : function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        },
        "1a2d": function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = n("7b0b"),
                i = r({}.hasOwnProperty);
            e.exports = Object.hasOwn || function(e, t) {
                return i(o(e), t)
            }
        },
        "1be4": function(e, t, n) {
            "use strict";
            var r = n("d066");
            e.exports = r("document", "documentElement")
        },
        "1d80": function(e, t, n) {
            "use strict";
            var r = n("7234"),
                o = TypeError;
            e.exports = function(e) {
                if (r(e)) throw new o("Can't call method on " + e);
                return e
            }
        },
        "1dde": function(e, t, n) {
            "use strict";
            var r = n("d039"),
                o = n("b622"),
                i = n("2d00"),
                a = o("species");
            e.exports = function(e) {
                return i >= 51 || !r((function() {
                    var t = [],
                        n = t.constructor = {};
                    return n[a] = function() {
                        return {
                            foo: 1
                        }
                    }, 1 !== t[e](Boolean).foo
                }))
            }
        },
        "1f5f": function(e, t, n) {
            var r = {
                "./user-profile.json": "1780"
            };

            function o(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }, o.resolve = i, e.exports = o, o.id = "1f5f"
        },
        "23cb": function(e, t, n) {
            "use strict";
            var r = n("5926"),
                o = Math.max,
                i = Math.min;
            e.exports = function(e, t) {
                var n = r(e);
                return n < 0 ? o(n + t, 0) : i(n, t)
            }
        },
        "23e7": function(e, t, n) {
            "use strict";
            var r = n("da84"),
                o = n("06cf").f,
                i = n("9112"),
                a = n("cb2d"),
                s = n("6374"),
                u = n("e893"),
                c = n("94ca");
            e.exports = function(e, t) {
                var n, l, f, d, p, v, h = e.target,
                    g = e.global,
                    m = e.stat;
                if (l = g ? r : m ? r[h] || s(h, {}) : (r[h] || {}).prototype, l)
                    for (f in t) {
                        if (p = t[f], e.dontCallGetSet ? (v = o(l, f), d = v && v.value) : d = l[f], n = c(g ? f : h + (m ? "." : "#") + f, e.forced), !n && void 0 !== d) {
                            if (typeof p == typeof d) continue;
                            u(p, d)
                        }(e.sham || d && d.sham) && i(p, "sham", !0), a(l, f, p, e)
                    }
            }
        },
        "241c": function(e, t, n) {
            "use strict";
            var r = n("ca84"),
                o = n("7839"),
                i = o.concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return r(e, i)
            }
        },
        2532: function(e, t, n) {
            "use strict";
            var r = n("23e7"),
                o = n("e330"),
                i = n("5a34"),
                a = n("1d80"),
                s = n("577e"),
                u = n("ab13"),
                c = o("".indexOf);
            r({
                target: "String",
                proto: !0,
                forced: !u("includes")
            }, {
                includes: function(e) {
                    return !!~c(s(a(this)), s(i(e)), arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        "2b0e": function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    n.d(t, "EffectScope", (function() {
                        return Pt
                    })), n.d(t, "computed", (function() {
                        return gt
                    })), n.d(t, "customRef", (function() {
                        return st
                    })), n.d(t, "default", (function() {
                        return oi
                    })), n.d(t, "defineAsyncComponent", (function() {
                        return tr
                    })), n.d(t, "defineComponent", (function() {
                        return yr
                    })), n.d(t, "del", (function() {
                        return Ge
                    })), n.d(t, "effectScope", (function() {
                        return Ct
                    })), n.d(t, "getCurrentInstance", (function() {
                        return ge
                    })), n.d(t, "getCurrentScope", (function() {
                        return Tt
                    })), n.d(t, "h", (function() {
                        return Fn
                    })), n.d(t, "inject", (function() {
                        return It
                    })), n.d(t, "isProxy", (function() {
                        return qe
                    })), n.d(t, "isReactive", (function() {
                        return ze
                    })), n.d(t, "isReadonly", (function() {
                        return Je
                    })), n.d(t, "isRef", (function() {
                        return Xe
                    })), n.d(t, "isShallow", (function() {
                        return We
                    })), n.d(t, "markRaw", (function() {
                        return Ze
                    })), n.d(t, "mergeDefaults", (function() {
                        return xn
                    })), n.d(t, "nextTick", (function() {
                        return Qn
                    })), n.d(t, "onActivated", (function() {
                        return lr
                    })), n.d(t, "onBeforeMount", (function() {
                        return or
                    })), n.d(t, "onBeforeUnmount", (function() {
                        return ur
                    })), n.d(t, "onBeforeUpdate", (function() {
                        return ar
                    })), n.d(t, "onDeactivated", (function() {
                        return fr
                    })), n.d(t, "onErrorCaptured", (function() {
                        return gr
                    })), n.d(t, "onMounted", (function() {
                        return ir
                    })), n.d(t, "onRenderTracked", (function() {
                        return pr
                    })), n.d(t, "onRenderTriggered", (function() {
                        return vr
                    })), n.d(t, "onScopeDispose", (function() {
                        return Nt
                    })), n.d(t, "onServerPrefetch", (function() {
                        return dr
                    })), n.d(t, "onUnmounted", (function() {
                        return cr
                    })), n.d(t, "onUpdated", (function() {
                        return sr
                    })), n.d(t, "provide", (function() {
                        return At
                    })), n.d(t, "proxyRefs", (function() {
                        return it
                    })), n.d(t, "reactive", (function() {
                        return Ve
                    })), n.d(t, "readonly", (function() {
                        return dt
                    })), n.d(t, "ref", (function() {
                        return et
                    })), n.d(t, "set", (function() {
                        return Ue
                    })), n.d(t, "shallowReactive", (function() {
                        return He
                    })), n.d(t, "shallowReadonly", (function() {
                        return ht
                    })), n.d(t, "shallowRef", (function() {
                        return tt
                    })), n.d(t, "toRaw", (function() {
                        return Ye
                    })), n.d(t, "toRef", (function() {
                        return ct
                    })), n.d(t, "toRefs", (function() {
                        return ut
                    })), n.d(t, "triggerRef", (function() {
                        return rt
                    })), n.d(t, "unref", (function() {
                        return ot
                    })), n.d(t, "useAttrs", (function() {
                        return On
                    })), n.d(t, "useCssModule", (function() {
                        return Xn
                    })), n.d(t, "useCssVars", (function() {
                        return er
                    })), n.d(t, "useListeners", (function() {
                        return wn
                    })), n.d(t, "useSlots", (function() {
                        return _n
                    })), n.d(t, "version", (function() {
                        return mr
                    })), n.d(t, "watch", (function() {
                        return jt
                    })), n.d(t, "watchEffect", (function() {
                        return Ot
                    })), n.d(t, "watchPostEffect", (function() {
                        return wt
                    })), n.d(t, "watchSyncEffect", (function() {
                        return kt
                    }));
                    var r = Object.freeze({}),
                        o = Array.isArray;

                    function i(e) {
                        return void 0 === e || null === e
                    }

                    function a(e) {
                        return void 0 !== e && null !== e
                    }

                    function s(e) {
                        return !0 === e
                    }

                    function u(e) {
                        return !1 === e
                    }

                    function c(e) {
                        return "string" === typeof e || "number" === typeof e || "symbol" === typeof e || "boolean" === typeof e
                    }

                    function l(e) {
                        return "function" === typeof e
                    }

                    function f(e) {
                        return null !== e && "object" === typeof e
                    }
                    var d = Object.prototype.toString;

                    function p(e) {
                        return "[object Object]" === d.call(e)
                    }

                    function v(e) {
                        return "[object RegExp]" === d.call(e)
                    }

                    function h(e) {
                        var t = parseFloat(String(e));
                        return t >= 0 && Math.floor(t) === t && isFinite(e)
                    }

                    function g(e) {
                        return a(e) && "function" === typeof e.then && "function" === typeof e.catch
                    }

                    function m(e) {
                        return null == e ? "" : Array.isArray(e) || p(e) && e.toString === d ? JSON.stringify(e, null, 2) : String(e)
                    }

                    function y(e) {
                        var t = parseFloat(e);
                        return isNaN(t) ? e : t
                    }

                    function b(e, t) {
                        for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                        return t ? function(e) {
                            return n[e.toLowerCase()]
                        } : function(e) {
                            return n[e]
                        }
                    }
                    b("slot,component", !0);
                    var _ = b("key,ref,slot,slot-scope,is");

                    function O(e, t) {
                        var n = e.length;
                        if (n) {
                            if (t === e[n - 1]) return void(e.length = n - 1);
                            var r = e.indexOf(t);
                            if (r > -1) return e.splice(r, 1)
                        }
                    }
                    var w = Object.prototype.hasOwnProperty;

                    function k(e, t) {
                        return w.call(e, t)
                    }

                    function x(e) {
                        var t = Object.create(null);
                        return function(n) {
                            var r = t[n];
                            return r || (t[n] = e(n))
                        }
                    }
                    var S = /-(\w)/g,
                        j = x((function(e) {
                            return e.replace(S, (function(e, t) {
                                return t ? t.toUpperCase() : ""
                            }))
                        })),
                        E = x((function(e) {
                            return e.charAt(0).toUpperCase() + e.slice(1)
                        })),
                        P = /\B([A-Z])/g,
                        C = x((function(e) {
                            return e.replace(P, "-$1").toLowerCase()
                        }));

                    function L(e, t) {
                        function n(n) {
                            var r = arguments.length;
                            return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
                        }
                        return n._length = e.length, n
                    }

                    function T(e, t) {
                        return e.bind(t)
                    }
                    var N = Function.prototype.bind ? T : L;

                    function A(e, t) {
                        t = t || 0;
                        var n = e.length - t,
                            r = new Array(n);
                        while (n--) r[n] = e[n + t];
                        return r
                    }

                    function D(e, t) {
                        for (var n in t) e[n] = t[n];
                        return e
                    }

                    function I(e) {
                        for (var t = {}, n = 0; n < e.length; n++) e[n] && D(t, e[n]);
                        return t
                    }

                    function R(e, t, n) {}
                    var $ = function(e, t, n) {
                            return !1
                        },
                        F = function(e) {
                            return e
                        };

                    function M(e, t) {
                        if (e === t) return !0;
                        var n = f(e),
                            r = f(t);
                        if (!n || !r) return !n && !r && String(e) === String(t);
                        try {
                            var o = Array.isArray(e),
                                i = Array.isArray(t);
                            if (o && i) return e.length === t.length && e.every((function(e, n) {
                                return M(e, t[n])
                            }));
                            if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                            if (o || i) return !1;
                            var a = Object.keys(e),
                                s = Object.keys(t);
                            return a.length === s.length && a.every((function(n) {
                                return M(e[n], t[n])
                            }))
                        } catch (u) {
                            return !1
                        }
                    }

                    function U(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (M(e[n], t)) return n;
                        return -1
                    }

                    function G(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0, e.apply(this, arguments))
                        }
                    }

                    function B(e, t) {
                        return e === t ? 0 === e && 1 / e !== 1 / t : e === e || t === t
                    }
                    var V = "data-server-rendered",
                        H = ["component", "directive", "filter"],
                        K = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch", "renderTracked", "renderTriggered"],
                        z = {
                            optionMergeStrategies: Object.create(null),
                            silent: !1,
                            productionTip: !1,
                            devtools: !1,
                            performance: !1,
                            errorHandler: null,
                            warnHandler: null,
                            ignoredElements: [],
                            keyCodes: Object.create(null),
                            isReservedTag: $,
                            isReservedAttr: $,
                            isUnknownElement: $,
                            getTagNamespace: R,
                            parsePlatformTagName: F,
                            mustUseProp: $,
                            async: !0,
                            _lifecycleHooks: K
                        },
                        W = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

                    function J(e) {
                        var t = (e + "").charCodeAt(0);
                        return 36 === t || 95 === t
                    }

                    function q(e, t, n, r) {
                        Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !!r,
                            writable: !0,
                            configurable: !0
                        })
                    }
                    var Y = new RegExp("[^".concat(W.source, ".$_\\d]"));

                    function Z(e) {
                        if (!Y.test(e)) {
                            var t = e.split(".");
                            return function(e) {
                                for (var n = 0; n < t.length; n++) {
                                    if (!e) return;
                                    e = e[t[n]]
                                }
                                return e
                            }
                        }
                    }
                    var Q = "__proto__" in {},
                        X = "undefined" !== typeof window,
                        ee = X && window.navigator.userAgent.toLowerCase(),
                        te = ee && /msie|trident/.test(ee),
                        ne = ee && ee.indexOf("msie 9.0") > 0,
                        re = ee && ee.indexOf("edge/") > 0;
                    ee && ee.indexOf("android");
                    var oe = ee && /iphone|ipad|ipod|ios/.test(ee);
                    ee && /chrome\/\d+/.test(ee), ee && /phantomjs/.test(ee);
                    var ie, ae = ee && ee.match(/firefox\/(\d+)/),
                        se = {}.watch,
                        ue = !1;
                    if (X) try {
                        var ce = {};
                        Object.defineProperty(ce, "passive", {
                            get: function() {
                                ue = !0
                            }
                        }), window.addEventListener("test-passive", null, ce)
                    } catch (ou) {}
                    var le = function() {
                            return void 0 === ie && (ie = !X && "undefined" !== typeof e && (e["process"] && "server" === e["process"].env.VUE_ENV)), ie
                        },
                        fe = X && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

                    function de(e) {
                        return "function" === typeof e && /native code/.test(e.toString())
                    }
                    var pe, ve = "undefined" !== typeof Symbol && de(Symbol) && "undefined" !== typeof Reflect && de(Reflect.ownKeys);
                    pe = "undefined" !== typeof Set && de(Set) ? Set : function() {
                        function e() {
                            this.set = Object.create(null)
                        }
                        return e.prototype.has = function(e) {
                            return !0 === this.set[e]
                        }, e.prototype.add = function(e) {
                            this.set[e] = !0
                        }, e.prototype.clear = function() {
                            this.set = Object.create(null)
                        }, e
                    }();
                    var he = null;

                    function ge() {
                        return he && {
                            proxy: he
                        }
                    }

                    function me(e) {
                        void 0 === e && (e = null), e || he && he._scope.off(), he = e, e && e._scope.on()
                    }
                    var ye = function() {
                            function e(e, t, n, r, o, i, a, s) {
                                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
                            }
                            return Object.defineProperty(e.prototype, "child", {
                                get: function() {
                                    return this.componentInstance
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e
                        }(),
                        be = function(e) {
                            void 0 === e && (e = "");
                            var t = new ye;
                            return t.text = e, t.isComment = !0, t
                        };

                    function _e(e) {
                        return new ye(void 0, void 0, void 0, String(e))
                    }

                    function Oe(e) {
                        var t = new ye(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
                    }
                    var we = 0,
                        ke = [],
                        xe = function() {
                            for (var e = 0; e < ke.length; e++) {
                                var t = ke[e];
                                t.subs = t.subs.filter((function(e) {
                                    return e
                                })), t._pending = !1
                            }
                            ke.length = 0
                        },
                        Se = function() {
                            function e() {
                                this._pending = !1, this.id = we++, this.subs = []
                            }
                            return e.prototype.addSub = function(e) {
                                this.subs.push(e)
                            }, e.prototype.removeSub = function(e) {
                                this.subs[this.subs.indexOf(e)] = null, this._pending || (this._pending = !0, ke.push(this))
                            }, e.prototype.depend = function(t) {
                                e.target && e.target.addDep(this)
                            }, e.prototype.notify = function(e) {
                                var t = this.subs.filter((function(e) {
                                    return e
                                }));
                                for (var n = 0, r = t.length; n < r; n++) {
                                    var o = t[n];
                                    0, o.update()
                                }
                            }, e
                        }();
                    Se.target = null;
                    var je = [];

                    function Ee(e) {
                        je.push(e), Se.target = e
                    }

                    function Pe() {
                        je.pop(), Se.target = je[je.length - 1]
                    }
                    var Ce = Array.prototype,
                        Le = Object.create(Ce),
                        Te = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
                    Te.forEach((function(e) {
                        var t = Ce[e];
                        q(Le, e, (function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var o, i = t.apply(this, n),
                                a = this.__ob__;
                            switch (e) {
                                case "push":
                                case "unshift":
                                    o = n;
                                    break;
                                case "splice":
                                    o = n.slice(2);
                                    break
                            }
                            return o && a.observeArray(o), a.dep.notify(), i
                        }))
                    }));
                    var Ne = Object.getOwnPropertyNames(Le),
                        Ae = {},
                        De = !0;

                    function Ie(e) {
                        De = e
                    }
                    var Re = {
                            notify: R,
                            depend: R,
                            addSub: R,
                            removeSub: R
                        },
                        $e = function() {
                            function e(e, t, n) {
                                if (void 0 === t && (t = !1), void 0 === n && (n = !1), this.value = e, this.shallow = t, this.mock = n, this.dep = n ? Re : new Se, this.vmCount = 0, q(e, "__ob__", this), o(e)) {
                                    if (!n)
                                        if (Q) e.__proto__ = Le;
                                        else
                                            for (var r = 0, i = Ne.length; r < i; r++) {
                                                var a = Ne[r];
                                                q(e, a, Le[a])
                                            }
                                    t || this.observeArray(e)
                                } else {
                                    var s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) {
                                        a = s[r];
                                        Me(e, a, Ae, void 0, t, n)
                                    }
                                }
                            }
                            return e.prototype.observeArray = function(e) {
                                for (var t = 0, n = e.length; t < n; t++) Fe(e[t], !1, this.mock)
                            }, e
                        }();

                    function Fe(e, t, n) {
                        return e && k(e, "__ob__") && e.__ob__ instanceof $e ? e.__ob__ : !De || !n && le() || !o(e) && !p(e) || !Object.isExtensible(e) || e.__v_skip || Xe(e) || e instanceof ye ? void 0 : new $e(e, t, n)
                    }

                    function Me(e, t, n, r, i, a) {
                        var s = new Se,
                            u = Object.getOwnPropertyDescriptor(e, t);
                        if (!u || !1 !== u.configurable) {
                            var c = u && u.get,
                                l = u && u.set;
                            c && !l || n !== Ae && 2 !== arguments.length || (n = e[t]);
                            var f = !i && Fe(n, !1, a);
                            return Object.defineProperty(e, t, {
                                enumerable: !0,
                                configurable: !0,
                                get: function() {
                                    var t = c ? c.call(e) : n;
                                    return Se.target && (s.depend(), f && (f.dep.depend(), o(t) && Be(t))), Xe(t) && !i ? t.value : t
                                },
                                set: function(t) {
                                    var r = c ? c.call(e) : n;
                                    if (B(r, t)) {
                                        if (l) l.call(e, t);
                                        else {
                                            if (c) return;
                                            if (!i && Xe(r) && !Xe(t)) return void(r.value = t);
                                            n = t
                                        }
                                        f = !i && Fe(t, !1, a), s.notify()
                                    }
                                }
                            }), s
                        }
                    }

                    function Ue(e, t, n) {
                        if (!Je(e)) {
                            var r = e.__ob__;
                            return o(e) && h(t) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), r && !r.shallow && r.mock && Fe(n, !1, !0), n) : t in e && !(t in Object.prototype) ? (e[t] = n, n) : e._isVue || r && r.vmCount ? n : r ? (Me(r.value, t, n, void 0, r.shallow, r.mock), r.dep.notify(), n) : (e[t] = n, n)
                        }
                    }

                    function Ge(e, t) {
                        if (o(e) && h(t)) e.splice(t, 1);
                        else {
                            var n = e.__ob__;
                            e._isVue || n && n.vmCount || Je(e) || k(e, t) && (delete e[t], n && n.dep.notify())
                        }
                    }

                    function Be(e) {
                        for (var t = void 0, n = 0, r = e.length; n < r; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), o(t) && Be(t)
                    }

                    function Ve(e) {
                        return Ke(e, !1), e
                    }

                    function He(e) {
                        return Ke(e, !0), q(e, "__v_isShallow", !0), e
                    }

                    function Ke(e, t) {
                        if (!Je(e)) {
                            Fe(e, t, le());
                            0
                        }
                    }

                    function ze(e) {
                        return Je(e) ? ze(e["__v_raw"]) : !(!e || !e.__ob__)
                    }

                    function We(e) {
                        return !(!e || !e.__v_isShallow)
                    }

                    function Je(e) {
                        return !(!e || !e.__v_isReadonly)
                    }

                    function qe(e) {
                        return ze(e) || Je(e)
                    }

                    function Ye(e) {
                        var t = e && e["__v_raw"];
                        return t ? Ye(t) : e
                    }

                    function Ze(e) {
                        return Object.isExtensible(e) && q(e, "__v_skip", !0), e
                    }
                    var Qe = "__v_isRef";

                    function Xe(e) {
                        return !(!e || !0 !== e.__v_isRef)
                    }

                    function et(e) {
                        return nt(e, !1)
                    }

                    function tt(e) {
                        return nt(e, !0)
                    }

                    function nt(e, t) {
                        if (Xe(e)) return e;
                        var n = {};
                        return q(n, Qe, !0), q(n, "__v_isShallow", t), q(n, "dep", Me(n, "value", e, null, t, le())), n
                    }

                    function rt(e) {
                        e.dep && e.dep.notify()
                    }

                    function ot(e) {
                        return Xe(e) ? e.value : e
                    }

                    function it(e) {
                        if (ze(e)) return e;
                        for (var t = {}, n = Object.keys(e), r = 0; r < n.length; r++) at(t, e, n[r]);
                        return t
                    }

                    function at(e, t, n) {
                        Object.defineProperty(e, n, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                var e = t[n];
                                if (Xe(e)) return e.value;
                                var r = e && e.__ob__;
                                return r && r.dep.depend(), e
                            },
                            set: function(e) {
                                var r = t[n];
                                Xe(r) && !Xe(e) ? r.value = e : t[n] = e
                            }
                        })
                    }

                    function st(e) {
                        var t = new Se,
                            n = e((function() {
                                t.depend()
                            }), (function() {
                                t.notify()
                            })),
                            r = n.get,
                            o = n.set,
                            i = {
                                get value() {
                                    return r()
                                },
                                set value(e) {
                                    o(e)
                                }
                            };
                        return q(i, Qe, !0), i
                    }

                    function ut(e) {
                        var t = o(e) ? new Array(e.length) : {};
                        for (var n in e) t[n] = ct(e, n);
                        return t
                    }

                    function ct(e, t, n) {
                        var r = e[t];
                        if (Xe(r)) return r;
                        var o = {
                            get value() {
                                var r = e[t];
                                return void 0 === r ? n : r
                            },
                            set value(n) {
                                e[t] = n
                            }
                        };
                        return q(o, Qe, !0), o
                    }
                    var lt = "__v_rawToReadonly",
                        ft = "__v_rawToShallowReadonly";

                    function dt(e) {
                        return pt(e, !1)
                    }

                    function pt(e, t) {
                        if (!p(e)) return e;
                        if (Je(e)) return e;
                        var n = t ? ft : lt,
                            r = e[n];
                        if (r) return r;
                        var o = Object.create(Object.getPrototypeOf(e));
                        q(e, n, o), q(o, "__v_isReadonly", !0), q(o, "__v_raw", e), Xe(e) && q(o, Qe, !0), (t || We(e)) && q(o, "__v_isShallow", !0);
                        for (var i = Object.keys(e), a = 0; a < i.length; a++) vt(o, e, i[a], t);
                        return o
                    }

                    function vt(e, t, n, r) {
                        Object.defineProperty(e, n, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                var e = t[n];
                                return r || !p(e) ? e : dt(e)
                            },
                            set: function() {}
                        })
                    }

                    function ht(e) {
                        return pt(e, !0)
                    }

                    function gt(e, t) {
                        var n, r, o = l(e);
                        o ? (n = e, r = R) : (n = e.get, r = e.set);
                        var i = le() ? null : new xr(he, n, R, {
                            lazy: !0
                        });
                        var a = {
                            effect: i,
                            get value() {
                                return i ? (i.dirty && i.evaluate(), Se.target && i.depend(), i.value) : n()
                            },
                            set value(e) {
                                r(e)
                            }
                        };
                        return q(a, Qe, !0), q(a, "__v_isReadonly", o), a
                    }
                    var mt = "watcher",
                        yt = "".concat(mt, " callback"),
                        bt = "".concat(mt, " getter"),
                        _t = "".concat(mt, " cleanup");

                    function Ot(e, t) {
                        return Et(e, null, t)
                    }

                    function wt(e, t) {
                        return Et(e, null, {
                            flush: "post"
                        })
                    }

                    function kt(e, t) {
                        return Et(e, null, {
                            flush: "sync"
                        })
                    }
                    var xt, St = {};

                    function jt(e, t, n) {
                        return Et(e, t, n)
                    }

                    function Et(e, t, n) {
                        var i = void 0 === n ? r : n,
                            a = i.immediate,
                            s = i.deep,
                            u = i.flush,
                            c = void 0 === u ? "pre" : u;
                        i.onTrack, i.onTrigger;
                        var f, d, p = he,
                            v = function(e, t, n) {
                                return void 0 === n && (n = null), Un(e, null, n, p, t)
                            },
                            h = !1,
                            g = !1;
                        if (Xe(e) ? (f = function() {
                                return e.value
                            }, h = We(e)) : ze(e) ? (f = function() {
                                return e.__ob__.dep.depend(), e
                            }, s = !0) : o(e) ? (g = !0, h = e.some((function(e) {
                                return ze(e) || We(e)
                            })), f = function() {
                                return e.map((function(e) {
                                    return Xe(e) ? e.value : ze(e) ? _r(e) : l(e) ? v(e, bt) : void 0
                                }))
                            }) : f = l(e) ? t ? function() {
                                return v(e, bt)
                            } : function() {
                                if (!p || !p._isDestroyed) return d && d(), v(e, mt, [y])
                            } : R, t && s) {
                            var m = f;
                            f = function() {
                                return _r(m())
                            }
                        }
                        var y = function(e) {
                            d = b.onStop = function() {
                                v(e, _t)
                            }
                        };
                        if (le()) return y = R, t ? a && v(t, yt, [f(), g ? [] : void 0, y]) : f(), R;
                        var b = new xr(he, f, R, {
                            lazy: !0
                        });
                        b.noRecurse = !t;
                        var _ = g ? [] : St;
                        return b.run = function() {
                                if (b.active)
                                    if (t) {
                                        var e = b.get();
                                        (s || h || (g ? e.some((function(e, t) {
                                            return B(e, _[t])
                                        })) : B(e, _))) && (d && d(), v(t, yt, [e, _ === St ? void 0 : _, y]), _ = e)
                                    } else b.get()
                            }, "sync" === c ? b.update = b.run : "post" === c ? (b.post = !0, b.update = function() {
                                return no(b)
                            }) : b.update = function() {
                                if (p && p === he && !p._isMounted) {
                                    var e = p._preWatchers || (p._preWatchers = []);
                                    e.indexOf(b) < 0 && e.push(b)
                                } else no(b)
                            }, t ? a ? b.run() : _ = b.get() : "post" === c && p ? p.$once("hook:mounted", (function() {
                                return b.get()
                            })) : b.get(),
                            function() {
                                b.teardown()
                            }
                    }
                    var Pt = function() {
                        function e(e) {
                            void 0 === e && (e = !1), this.detached = e, this.active = !0, this.effects = [], this.cleanups = [], this.parent = xt, !e && xt && (this.index = (xt.scopes || (xt.scopes = [])).push(this) - 1)
                        }
                        return e.prototype.run = function(e) {
                            if (this.active) {
                                var t = xt;
                                try {
                                    return xt = this, e()
                                } finally {
                                    xt = t
                                }
                            } else 0
                        }, e.prototype.on = function() {
                            xt = this
                        }, e.prototype.off = function() {
                            xt = this.parent
                        }, e.prototype.stop = function(e) {
                            if (this.active) {
                                var t = void 0,
                                    n = void 0;
                                for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].teardown();
                                for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
                                if (this.scopes)
                                    for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
                                if (!this.detached && this.parent && !e) {
                                    var r = this.parent.scopes.pop();
                                    r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
                                }
                                this.parent = void 0, this.active = !1
                            }
                        }, e
                    }();

                    function Ct(e) {
                        return new Pt(e)
                    }

                    function Lt(e, t) {
                        void 0 === t && (t = xt), t && t.active && t.effects.push(e)
                    }

                    function Tt() {
                        return xt
                    }

                    function Nt(e) {
                        xt && xt.cleanups.push(e)
                    }

                    function At(e, t) {
                        he && (Dt(he)[e] = t)
                    }

                    function Dt(e) {
                        var t = e._provided,
                            n = e.$parent && e.$parent._provided;
                        return n === t ? e._provided = Object.create(n) : t
                    }

                    function It(e, t, n) {
                        void 0 === n && (n = !1);
                        var r = he;
                        if (r) {
                            var o = r.$parent && r.$parent._provided;
                            if (o && e in o) return o[e];
                            if (arguments.length > 1) return n && l(t) ? t.call(r) : t
                        } else 0
                    }
                    var Rt = x((function(e) {
                        var t = "&" === e.charAt(0);
                        e = t ? e.slice(1) : e;
                        var n = "~" === e.charAt(0);
                        e = n ? e.slice(1) : e;
                        var r = "!" === e.charAt(0);
                        return e = r ? e.slice(1) : e, {
                            name: e,
                            once: n,
                            capture: r,
                            passive: t
                        }
                    }));

                    function $t(e, t) {
                        function n() {
                            var e = n.fns;
                            if (!o(e)) return Un(e, null, arguments, t, "v-on handler");
                            for (var r = e.slice(), i = 0; i < r.length; i++) Un(r[i], null, arguments, t, "v-on handler")
                        }
                        return n.fns = e, n
                    }

                    function Ft(e, t, n, r, o, a) {
                        var u, c, l, f;
                        for (u in e) c = e[u], l = t[u], f = Rt(u), i(c) || (i(l) ? (i(c.fns) && (c = e[u] = $t(c, a)), s(f.once) && (c = e[u] = o(f.name, c, f.capture)), n(f.name, c, f.capture, f.passive, f.params)) : c !== l && (l.fns = c, e[u] = l));
                        for (u in t) i(e[u]) && (f = Rt(u), r(f.name, t[u], f.capture))
                    }

                    function Mt(e, t, n) {
                        var r;
                        e instanceof ye && (e = e.data.hook || (e.data.hook = {}));
                        var o = e[t];

                        function u() {
                            n.apply(this, arguments), O(r.fns, u)
                        }
                        i(o) ? r = $t([u]) : a(o.fns) && s(o.merged) ? (r = o, r.fns.push(u)) : r = $t([o, u]), r.merged = !0, e[t] = r
                    }

                    function Ut(e, t, n) {
                        var r = t.options.props;
                        if (!i(r)) {
                            var o = {},
                                s = e.attrs,
                                u = e.props;
                            if (a(s) || a(u))
                                for (var c in r) {
                                    var l = C(c);
                                    Gt(o, u, c, l, !0) || Gt(o, s, c, l, !1)
                                }
                            return o
                        }
                    }

                    function Gt(e, t, n, r, o) {
                        if (a(t)) {
                            if (k(t, n)) return e[n] = t[n], o || delete t[n], !0;
                            if (k(t, r)) return e[n] = t[r], o || delete t[r], !0
                        }
                        return !1
                    }

                    function Bt(e) {
                        for (var t = 0; t < e.length; t++)
                            if (o(e[t])) return Array.prototype.concat.apply([], e);
                        return e
                    }

                    function Vt(e) {
                        return c(e) ? [_e(e)] : o(e) ? Kt(e) : void 0
                    }

                    function Ht(e) {
                        return a(e) && a(e.text) && u(e.isComment)
                    }

                    function Kt(e, t) {
                        var n, r, u, l, f = [];
                        for (n = 0; n < e.length; n++) r = e[n], i(r) || "boolean" === typeof r || (u = f.length - 1, l = f[u], o(r) ? r.length > 0 && (r = Kt(r, "".concat(t || "", "_").concat(n)), Ht(r[0]) && Ht(l) && (f[u] = _e(l.text + r[0].text), r.shift()), f.push.apply(f, r)) : c(r) ? Ht(l) ? f[u] = _e(l.text + r) : "" !== r && f.push(_e(r)) : Ht(r) && Ht(l) ? f[u] = _e(l.text + r.text) : (s(e._isVList) && a(r.tag) && i(r.key) && a(t) && (r.key = "__vlist".concat(t, "_").concat(n, "__")), f.push(r)));
                        return f
                    }

                    function zt(e, t) {
                        var n, r, i, s, u = null;
                        if (o(e) || "string" === typeof e)
                            for (u = new Array(e.length), n = 0, r = e.length; n < r; n++) u[n] = t(e[n], n);
                        else if ("number" === typeof e)
                            for (u = new Array(e), n = 0; n < e; n++) u[n] = t(n + 1, n);
                        else if (f(e))
                            if (ve && e[Symbol.iterator]) {
                                u = [];
                                var c = e[Symbol.iterator](),
                                    l = c.next();
                                while (!l.done) u.push(t(l.value, u.length)), l = c.next()
                            } else
                                for (i = Object.keys(e), u = new Array(i.length), n = 0, r = i.length; n < r; n++) s = i[n], u[n] = t(e[s], s, n);
                        return a(u) || (u = []), u._isVList = !0, u
                    }

                    function Wt(e, t, n, r) {
                        var o, i = this.$scopedSlots[e];
                        i ? (n = n || {}, r && (n = D(D({}, r), n)), o = i(n) || (l(t) ? t() : t)) : o = this.$slots[e] || (l(t) ? t() : t);
                        var a = n && n.slot;
                        return a ? this.$createElement("template", {
                            slot: a
                        }, o) : o
                    }

                    function Jt(e) {
                        return To(this.$options, "filters", e, !0) || F
                    }

                    function qt(e, t) {
                        return o(e) ? -1 === e.indexOf(t) : e !== t
                    }

                    function Yt(e, t, n, r, o) {
                        var i = z.keyCodes[t] || n;
                        return o && r && !z.keyCodes[t] ? qt(o, r) : i ? qt(i, e) : r ? C(r) !== t : void 0 === e
                    }

                    function Zt(e, t, n, r, i) {
                        if (n)
                            if (f(n)) {
                                o(n) && (n = I(n));
                                var a = void 0,
                                    s = function(o) {
                                        if ("class" === o || "style" === o || _(o)) a = e;
                                        else {
                                            var s = e.attrs && e.attrs.type;
                                            a = r || z.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                                        }
                                        var u = j(o),
                                            c = C(o);
                                        if (!(u in a) && !(c in a) && (a[o] = n[o], i)) {
                                            var l = e.on || (e.on = {});
                                            l["update:".concat(o)] = function(e) {
                                                n[o] = e
                                            }
                                        }
                                    };
                                for (var u in n) s(u)
                            } else;
                        return e
                    }

                    function Qt(e, t) {
                        var n = this._staticTrees || (this._staticTrees = []),
                            r = n[e];
                        return r && !t || (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, this._c, this), en(r, "__static__".concat(e), !1)), r
                    }

                    function Xt(e, t, n) {
                        return en(e, "__once__".concat(t).concat(n ? "_".concat(n) : ""), !0), e
                    }

                    function en(e, t, n) {
                        if (o(e))
                            for (var r = 0; r < e.length; r++) e[r] && "string" !== typeof e[r] && tn(e[r], "".concat(t, "_").concat(r), n);
                        else tn(e, t, n)
                    }

                    function tn(e, t, n) {
                        e.isStatic = !0, e.key = t, e.isOnce = n
                    }

                    function nn(e, t) {
                        if (t)
                            if (p(t)) {
                                var n = e.on = e.on ? D({}, e.on) : {};
                                for (var r in t) {
                                    var o = n[r],
                                        i = t[r];
                                    n[r] = o ? [].concat(o, i) : i
                                }
                            } else;
                        return e
                    }

                    function rn(e, t, n, r) {
                        t = t || {
                            $stable: !n
                        };
                        for (var i = 0; i < e.length; i++) {
                            var a = e[i];
                            o(a) ? rn(a, t, n) : a && (a.proxy && (a.fn.proxy = !0), t[a.key] = a.fn)
                        }
                        return r && (t.$key = r), t
                    }

                    function on(e, t) {
                        for (var n = 0; n < t.length; n += 2) {
                            var r = t[n];
                            "string" === typeof r && r && (e[t[n]] = t[n + 1])
                        }
                        return e
                    }

                    function an(e, t) {
                        return "string" === typeof e ? t + e : e
                    }

                    function sn(e) {
                        e._o = Xt, e._n = y, e._s = m, e._l = zt, e._t = Wt, e._q = M, e._i = U, e._m = Qt, e._f = Jt, e._k = Yt, e._b = Zt, e._v = _e, e._e = be, e._u = rn, e._g = nn, e._d = on, e._p = an
                    }

                    function un(e, t) {
                        if (!e || !e.length) return {};
                        for (var n = {}, r = 0, o = e.length; r < o; r++) {
                            var i = e[r],
                                a = i.data;
                            if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== t && i.fnContext !== t || !a || null == a.slot)(n.default || (n.default = [])).push(i);
                            else {
                                var s = a.slot,
                                    u = n[s] || (n[s] = []);
                                "template" === i.tag ? u.push.apply(u, i.children || []) : u.push(i)
                            }
                        }
                        for (var c in n) n[c].every(cn) && delete n[c];
                        return n
                    }

                    function cn(e) {
                        return e.isComment && !e.asyncFactory || " " === e.text
                    }

                    function ln(e) {
                        return e.isComment && e.asyncFactory
                    }

                    function fn(e, t, n, o) {
                        var i, a = Object.keys(n).length > 0,
                            s = t ? !!t.$stable : !a,
                            u = t && t.$key;
                        if (t) {
                            if (t._normalized) return t._normalized;
                            if (s && o && o !== r && u === o.$key && !a && !o.$hasNormal) return o;
                            for (var c in i = {}, t) t[c] && "$" !== c[0] && (i[c] = dn(e, n, c, t[c]))
                        } else i = {};
                        for (var l in n) l in i || (i[l] = pn(n, l));
                        return t && Object.isExtensible(t) && (t._normalized = i), q(i, "$stable", s), q(i, "$key", u), q(i, "$hasNormal", a), i
                    }

                    function dn(e, t, n, r) {
                        var i = function() {
                            var t = he;
                            me(e);
                            var n = arguments.length ? r.apply(null, arguments) : r({});
                            n = n && "object" === typeof n && !o(n) ? [n] : Vt(n);
                            var i = n && n[0];
                            return me(t), n && (!i || 1 === n.length && i.isComment && !ln(i)) ? void 0 : n
                        };
                        return r.proxy && Object.defineProperty(t, n, {
                            get: i,
                            enumerable: !0,
                            configurable: !0
                        }), i
                    }

                    function pn(e, t) {
                        return function() {
                            return e[t]
                        }
                    }

                    function vn(e) {
                        var t = e.$options,
                            n = t.setup;
                        if (n) {
                            var r = e._setupContext = hn(e);
                            me(e), Ee();
                            var o = Un(n, null, [e._props || He({}), r], e, "setup");
                            if (Pe(), me(), l(o)) t.render = o;
                            else if (f(o))
                                if (e._setupState = o, o.__sfc) {
                                    var i = e._setupProxy = {};
                                    for (var a in o) "__sfc" !== a && at(i, o, a)
                                } else
                                    for (var a in o) J(a) || at(e, o, a);
                            else 0
                        }
                    }

                    function hn(e) {
                        return {
                            get attrs() {
                                if (!e._attrsProxy) {
                                    var t = e._attrsProxy = {};
                                    q(t, "_v_attr_proxy", !0), gn(t, e.$attrs, r, e, "$attrs")
                                }
                                return e._attrsProxy
                            },
                            get listeners() {
                                if (!e._listenersProxy) {
                                    var t = e._listenersProxy = {};
                                    gn(t, e.$listeners, r, e, "$listeners")
                                }
                                return e._listenersProxy
                            },
                            get slots() {
                                return yn(e)
                            },
                            emit: N(e.$emit, e),
                            expose: function(t) {
                                t && Object.keys(t).forEach((function(n) {
                                    return at(e, t, n)
                                }))
                            }
                        }
                    }

                    function gn(e, t, n, r, o) {
                        var i = !1;
                        for (var a in t) a in e ? t[a] !== n[a] && (i = !0) : (i = !0, mn(e, a, r, o));
                        for (var a in e) a in t || (i = !0, delete e[a]);
                        return i
                    }

                    function mn(e, t, n, r) {
                        Object.defineProperty(e, t, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                return n[r][t]
                            }
                        })
                    }

                    function yn(e) {
                        return e._slotsProxy || bn(e._slotsProxy = {}, e.$scopedSlots), e._slotsProxy
                    }

                    function bn(e, t) {
                        for (var n in t) e[n] = t[n];
                        for (var n in e) n in t || delete e[n]
                    }

                    function _n() {
                        return kn().slots
                    }

                    function On() {
                        return kn().attrs
                    }

                    function wn() {
                        return kn().listeners
                    }

                    function kn() {
                        var e = he;
                        return e._setupContext || (e._setupContext = hn(e))
                    }

                    function xn(e, t) {
                        var n = o(e) ? e.reduce((function(e, t) {
                            return e[t] = {}, e
                        }), {}) : e;
                        for (var r in t) {
                            var i = n[r];
                            i ? o(i) || l(i) ? n[r] = {
                                type: i,
                                default: t[r]
                            } : i.default = t[r] : null === i && (n[r] = {
                                default: t[r]
                            })
                        }
                        return n
                    }

                    function Sn(e) {
                        e._vnode = null, e._staticTrees = null;
                        var t = e.$options,
                            n = e.$vnode = t._parentVnode,
                            o = n && n.context;
                        e.$slots = un(t._renderChildren, o), e.$scopedSlots = n ? fn(e.$parent, n.data.scopedSlots, e.$slots) : r, e._c = function(t, n, r, o) {
                            return Dn(e, t, n, r, o, !1)
                        }, e.$createElement = function(t, n, r, o) {
                            return Dn(e, t, n, r, o, !0)
                        };
                        var i = n && n.data;
                        Me(e, "$attrs", i && i.attrs || r, null, !0), Me(e, "$listeners", t._parentListeners || r, null, !0)
                    }
                    var jn = null;

                    function En(e) {
                        sn(e.prototype), e.prototype.$nextTick = function(e) {
                            return Qn(e, this)
                        }, e.prototype._render = function() {
                            var e, t = this,
                                n = t.$options,
                                r = n.render,
                                i = n._parentVnode;
                            i && t._isMounted && (t.$scopedSlots = fn(t.$parent, i.data.scopedSlots, t.$slots, t.$scopedSlots), t._slotsProxy && bn(t._slotsProxy, t.$scopedSlots)), t.$vnode = i;
                            try {
                                me(t), jn = t, e = r.call(t._renderProxy, t.$createElement)
                            } catch (ou) {
                                Mn(ou, t, "render"), e = t._vnode
                            } finally {
                                jn = null, me()
                            }
                            return o(e) && 1 === e.length && (e = e[0]), e instanceof ye || (e = be()), e.parent = i, e
                        }
                    }

                    function Pn(e, t) {
                        return (e.__esModule || ve && "Module" === e[Symbol.toStringTag]) && (e = e.default), f(e) ? t.extend(e) : e
                    }

                    function Cn(e, t, n, r, o) {
                        var i = be();
                        return i.asyncFactory = e, i.asyncMeta = {
                            data: t,
                            context: n,
                            children: r,
                            tag: o
                        }, i
                    }

                    function Ln(e, t) {
                        if (s(e.error) && a(e.errorComp)) return e.errorComp;
                        if (a(e.resolved)) return e.resolved;
                        var n = jn;
                        if (n && a(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), s(e.loading) && a(e.loadingComp)) return e.loadingComp;
                        if (n && !a(e.owners)) {
                            var r = e.owners = [n],
                                o = !0,
                                u = null,
                                c = null;
                            n.$on("hook:destroyed", (function() {
                                return O(r, n)
                            }));
                            var l = function(e) {
                                    for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
                                    e && (r.length = 0, null !== u && (clearTimeout(u), u = null), null !== c && (clearTimeout(c), c = null))
                                },
                                d = G((function(n) {
                                    e.resolved = Pn(n, t), o ? r.length = 0 : l(!0)
                                })),
                                p = G((function(t) {
                                    a(e.errorComp) && (e.error = !0, l(!0))
                                })),
                                v = e(d, p);
                            return f(v) && (g(v) ? i(e.resolved) && v.then(d, p) : g(v.component) && (v.component.then(d, p), a(v.error) && (e.errorComp = Pn(v.error, t)), a(v.loading) && (e.loadingComp = Pn(v.loading, t), 0 === v.delay ? e.loading = !0 : u = setTimeout((function() {
                                u = null, i(e.resolved) && i(e.error) && (e.loading = !0, l(!1))
                            }), v.delay || 200)), a(v.timeout) && (c = setTimeout((function() {
                                c = null, i(e.resolved) && p(null)
                            }), v.timeout)))), o = !1, e.loading ? e.loadingComp : e.resolved
                        }
                    }

                    function Tn(e) {
                        if (o(e))
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t];
                                if (a(n) && (a(n.componentOptions) || ln(n))) return n
                            }
                    }
                    var Nn = 1,
                        An = 2;

                    function Dn(e, t, n, r, i, a) {
                        return (o(n) || c(n)) && (i = r, r = n, n = void 0), s(a) && (i = An), In(e, t, n, r, i)
                    }

                    function In(e, t, n, r, i) {
                        if (a(n) && a(n.__ob__)) return be();
                        if (a(n) && a(n.is) && (t = n.is), !t) return be();
                        var s, u;
                        if (o(r) && l(r[0]) && (n = n || {}, n.scopedSlots = {
                                default: r[0]
                            }, r.length = 0), i === An ? r = Vt(r) : i === Nn && (r = Bt(r)), "string" === typeof t) {
                            var c = void 0;
                            u = e.$vnode && e.$vnode.ns || z.getTagNamespace(t), s = z.isReservedTag(t) ? new ye(z.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !a(c = To(e.$options, "components", t)) ? new ye(t, n, r, void 0, void 0, e) : vo(c, n, e, r, t)
                        } else s = vo(t, n, e, r);
                        return o(s) ? s : a(s) ? (a(u) && Rn(s, u), a(n) && $n(n), s) : be()
                    }

                    function Rn(e, t, n) {
                        if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), a(e.children))
                            for (var r = 0, o = e.children.length; r < o; r++) {
                                var u = e.children[r];
                                a(u.tag) && (i(u.ns) || s(n) && "svg" !== u.tag) && Rn(u, t, n)
                            }
                    }

                    function $n(e) {
                        f(e.style) && _r(e.style), f(e.class) && _r(e.class)
                    }

                    function Fn(e, t, n) {
                        return Dn(he, e, t, n, 2, !0)
                    }

                    function Mn(e, t, n) {
                        Ee();
                        try {
                            if (t) {
                                var r = t;
                                while (r = r.$parent) {
                                    var o = r.$options.errorCaptured;
                                    if (o)
                                        for (var i = 0; i < o.length; i++) try {
                                            var a = !1 === o[i].call(r, e, t, n);
                                            if (a) return
                                        } catch (ou) {
                                            Gn(ou, r, "errorCaptured hook")
                                        }
                                }
                            }
                            Gn(e, t, n)
                        } finally {
                            Pe()
                        }
                    }

                    function Un(e, t, n, r, o) {
                        var i;
                        try {
                            i = n ? e.apply(t, n) : e.call(t), i && !i._isVue && g(i) && !i._handled && (i.catch((function(e) {
                                return Mn(e, r, o + " (Promise/async)")
                            })), i._handled = !0)
                        } catch (ou) {
                            Mn(ou, r, o)
                        }
                        return i
                    }

                    function Gn(e, t, n) {
                        if (z.errorHandler) try {
                            return z.errorHandler.call(null, e, t, n)
                        } catch (ou) {
                            ou !== e && Bn(ou, null, "config.errorHandler")
                        }
                        Bn(e, t, n)
                    }

                    function Bn(e, t, n) {
                        if (!X || "undefined" === typeof console) throw e;
                        console.error(e)
                    }
                    var Vn, Hn = !1,
                        Kn = [],
                        zn = !1;

                    function Wn() {
                        zn = !1;
                        var e = Kn.slice(0);
                        Kn.length = 0;
                        for (var t = 0; t < e.length; t++) e[t]()
                    }
                    if ("undefined" !== typeof Promise && de(Promise)) {
                        var Jn = Promise.resolve();
                        Vn = function() {
                            Jn.then(Wn), oe && setTimeout(R)
                        }, Hn = !0
                    } else if (te || "undefined" === typeof MutationObserver || !de(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Vn = "undefined" !== typeof setImmediate && de(setImmediate) ? function() {
                        setImmediate(Wn)
                    } : function() {
                        setTimeout(Wn, 0)
                    };
                    else {
                        var qn = 1,
                            Yn = new MutationObserver(Wn),
                            Zn = document.createTextNode(String(qn));
                        Yn.observe(Zn, {
                            characterData: !0
                        }), Vn = function() {
                            qn = (qn + 1) % 2, Zn.data = String(qn)
                        }, Hn = !0
                    }

                    function Qn(e, t) {
                        var n;
                        if (Kn.push((function() {
                                if (e) try {
                                    e.call(t)
                                } catch (ou) {
                                    Mn(ou, t, "nextTick")
                                } else n && n(t)
                            })), zn || (zn = !0, Vn()), !e && "undefined" !== typeof Promise) return new Promise((function(e) {
                            n = e
                        }))
                    }

                    function Xn(e) {
                        if (void 0 === e && (e = "$style"), !he) return r;
                        var t = he[e];
                        return t || r
                    }

                    function er(e) {
                        if (X) {
                            var t = he;
                            t && wt((function() {
                                var n = t.$el,
                                    r = e(t, t._setupProxy);
                                if (n && 1 === n.nodeType) {
                                    var o = n.style;
                                    for (var i in r) o.setProperty("--".concat(i), r[i])
                                }
                            }))
                        }
                    }

                    function tr(e) {
                        l(e) && (e = {
                            loader: e
                        });
                        var t = e.loader,
                            n = e.loadingComponent,
                            r = e.errorComponent,
                            o = e.delay,
                            i = void 0 === o ? 200 : o,
                            a = e.timeout,
                            s = (e.suspensible, e.onError);
                        var u = null,
                            c = 0,
                            f = function() {
                                return c++, u = null, d()
                            },
                            d = function() {
                                var e;
                                return u || (e = u = t().catch((function(e) {
                                    if (e = e instanceof Error ? e : new Error(String(e)), s) return new Promise((function(t, n) {
                                        var r = function() {
                                                return t(f())
                                            },
                                            o = function() {
                                                return n(e)
                                            };
                                        s(e, r, o, c + 1)
                                    }));
                                    throw e
                                })).then((function(t) {
                                    return e !== u && u ? u : (t && (t.__esModule || "Module" === t[Symbol.toStringTag]) && (t = t.default), t)
                                })))
                            };
                        return function() {
                            var e = d();
                            return {
                                component: e,
                                delay: i,
                                timeout: a,
                                error: r,
                                loading: n
                            }
                        }
                    }

                    function nr(e) {
                        return function(t, n) {
                            if (void 0 === n && (n = he), n) return rr(n, e, t)
                        }
                    }

                    function rr(e, t, n) {
                        var r = e.$options;
                        r[t] = ko(r[t], n)
                    }
                    var or = nr("beforeMount"),
                        ir = nr("mounted"),
                        ar = nr("beforeUpdate"),
                        sr = nr("updated"),
                        ur = nr("beforeDestroy"),
                        cr = nr("destroyed"),
                        lr = nr("activated"),
                        fr = nr("deactivated"),
                        dr = nr("serverPrefetch"),
                        pr = nr("renderTracked"),
                        vr = nr("renderTriggered"),
                        hr = nr("errorCaptured");

                    function gr(e, t) {
                        void 0 === t && (t = he), hr(e, t)
                    }
                    var mr = "2.7.15";

                    function yr(e) {
                        return e
                    }
                    var br = new pe;

                    function _r(e) {
                        return Or(e, br), br.clear(), e
                    }

                    function Or(e, t) {
                        var n, r, i = o(e);
                        if (!(!i && !f(e) || e.__v_skip || Object.isFrozen(e) || e instanceof ye)) {
                            if (e.__ob__) {
                                var a = e.__ob__.dep.id;
                                if (t.has(a)) return;
                                t.add(a)
                            }
                            if (i) {
                                n = e.length;
                                while (n--) Or(e[n], t)
                            } else if (Xe(e)) Or(e.value, t);
                            else {
                                r = Object.keys(e), n = r.length;
                                while (n--) Or(e[r[n]], t)
                            }
                        }
                    }
                    var wr, kr = 0,
                        xr = function() {
                            function e(e, t, n, r, o) {
                                Lt(this, xt && !xt._vm ? xt : e ? e._scope : void 0), (this.vm = e) && o && (e._watcher = this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++kr, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new pe, this.newDepIds = new pe, this.expression = "", l(t) ? this.getter = t : (this.getter = Z(t), this.getter || (this.getter = R)), this.value = this.lazy ? void 0 : this.get()
                            }
                            return e.prototype.get = function() {
                                var e;
                                Ee(this);
                                var t = this.vm;
                                try {
                                    e = this.getter.call(t, t)
                                } catch (ou) {
                                    if (!this.user) throw ou;
                                    Mn(ou, t, 'getter for watcher "'.concat(this.expression, '"'))
                                } finally {
                                    this.deep && _r(e), Pe(), this.cleanupDeps()
                                }
                                return e
                            }, e.prototype.addDep = function(e) {
                                var t = e.id;
                                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
                            }, e.prototype.cleanupDeps = function() {
                                var e = this.deps.length;
                                while (e--) {
                                    var t = this.deps[e];
                                    this.newDepIds.has(t.id) || t.removeSub(this)
                                }
                                var n = this.depIds;
                                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
                            }, e.prototype.update = function() {
                                this.lazy ? this.dirty = !0 : this.sync ? this.run() : no(this)
                            }, e.prototype.run = function() {
                                if (this.active) {
                                    var e = this.get();
                                    if (e !== this.value || f(e) || this.deep) {
                                        var t = this.value;
                                        if (this.value = e, this.user) {
                                            var n = 'callback for watcher "'.concat(this.expression, '"');
                                            Un(this.cb, this.vm, [e, t], this.vm, n)
                                        } else this.cb.call(this.vm, e, t)
                                    }
                                }
                            }, e.prototype.evaluate = function() {
                                this.value = this.get(), this.dirty = !1
                            }, e.prototype.depend = function() {
                                var e = this.deps.length;
                                while (e--) this.deps[e].depend()
                            }, e.prototype.teardown = function() {
                                if (this.vm && !this.vm._isBeingDestroyed && O(this.vm._scope.effects, this), this.active) {
                                    var e = this.deps.length;
                                    while (e--) this.deps[e].removeSub(this);
                                    this.active = !1, this.onStop && this.onStop()
                                }
                            }, e
                        }();

                    function Sr(e) {
                        e._events = Object.create(null), e._hasHookEvent = !1;
                        var t = e.$options._parentListeners;
                        t && Cr(e, t)
                    }

                    function jr(e, t) {
                        wr.$on(e, t)
                    }

                    function Er(e, t) {
                        wr.$off(e, t)
                    }

                    function Pr(e, t) {
                        var n = wr;
                        return function r() {
                            var o = t.apply(null, arguments);
                            null !== o && n.$off(e, r)
                        }
                    }

                    function Cr(e, t, n) {
                        wr = e, Ft(t, n || {}, jr, Er, Pr, e), wr = void 0
                    }

                    function Lr(e) {
                        var t = /^hook:/;
                        e.prototype.$on = function(e, n) {
                            var r = this;
                            if (o(e))
                                for (var i = 0, a = e.length; i < a; i++) r.$on(e[i], n);
                            else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
                            return r
                        }, e.prototype.$once = function(e, t) {
                            var n = this;

                            function r() {
                                n.$off(e, r), t.apply(n, arguments)
                            }
                            return r.fn = t, n.$on(e, r), n
                        }, e.prototype.$off = function(e, t) {
                            var n = this;
                            if (!arguments.length) return n._events = Object.create(null), n;
                            if (o(e)) {
                                for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
                                return n
                            }
                            var a, s = n._events[e];
                            if (!s) return n;
                            if (!t) return n._events[e] = null, n;
                            var u = s.length;
                            while (u--)
                                if (a = s[u], a === t || a.fn === t) {
                                    s.splice(u, 1);
                                    break
                                }
                            return n
                        }, e.prototype.$emit = function(e) {
                            var t = this,
                                n = t._events[e];
                            if (n) {
                                n = n.length > 1 ? A(n) : n;
                                for (var r = A(arguments, 1), o = 'event handler for "'.concat(e, '"'), i = 0, a = n.length; i < a; i++) Un(n[i], t, r, t, o)
                            }
                            return t
                        }
                    }
                    var Tr = null;

                    function Nr(e) {
                        var t = Tr;
                        return Tr = e,
                            function() {
                                Tr = t
                            }
                    }

                    function Ar(e) {
                        var t = e.$options,
                            n = t.parent;
                        if (n && !t.abstract) {
                            while (n.$options.abstract && n.$parent) n = n.$parent;
                            n.$children.push(e)
                        }
                        e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._provided = n ? n._provided : Object.create(null), e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                    }

                    function Dr(e) {
                        e.prototype._update = function(e, t) {
                            var n = this,
                                r = n.$el,
                                o = n._vnode,
                                i = Nr(n);
                            n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), i(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n);
                            var a = n;
                            while (a && a.$vnode && a.$parent && a.$vnode === a.$parent._vnode) a.$parent.$el = a.$el, a = a.$parent
                        }, e.prototype.$forceUpdate = function() {
                            var e = this;
                            e._watcher && e._watcher.update()
                        }, e.prototype.$destroy = function() {
                            var e = this;
                            if (!e._isBeingDestroyed) {
                                Ur(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                                var t = e.$parent;
                                !t || t._isBeingDestroyed || e.$options.abstract || O(t.$children, e), e._scope.stop(), e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Ur(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                            }
                        }
                    }

                    function Ir(e, t, n) {
                        var r;
                        e.$el = t, e.$options.render || (e.$options.render = be), Ur(e, "beforeMount"), r = function() {
                            e._update(e._render(), n)
                        };
                        var o = {
                            before: function() {
                                e._isMounted && !e._isDestroyed && Ur(e, "beforeUpdate")
                            }
                        };
                        new xr(e, r, R, o, !0), n = !1;
                        var i = e._preWatchers;
                        if (i)
                            for (var a = 0; a < i.length; a++) i[a].run();
                        return null == e.$vnode && (e._isMounted = !0, Ur(e, "mounted")), e
                    }

                    function Rr(e, t, n, o, i) {
                        var a = o.data.scopedSlots,
                            s = e.$scopedSlots,
                            u = !!(a && !a.$stable || s !== r && !s.$stable || a && e.$scopedSlots.$key !== a.$key || !a && e.$scopedSlots.$key),
                            c = !!(i || e.$options._renderChildren || u),
                            l = e.$vnode;
                        e.$options._parentVnode = o, e.$vnode = o, e._vnode && (e._vnode.parent = o), e.$options._renderChildren = i;
                        var f = o.data.attrs || r;
                        e._attrsProxy && gn(e._attrsProxy, f, l.data && l.data.attrs || r, e, "$attrs") && (c = !0), e.$attrs = f, n = n || r;
                        var d = e.$options._parentListeners;
                        if (e._listenersProxy && gn(e._listenersProxy, n, d || r, e, "$listeners"), e.$listeners = e.$options._parentListeners = n, Cr(e, n, d), t && e.$options.props) {
                            Ie(!1);
                            for (var p = e._props, v = e.$options._propKeys || [], h = 0; h < v.length; h++) {
                                var g = v[h],
                                    m = e.$options.props;
                                p[g] = No(g, m, t, e)
                            }
                            Ie(!0), e.$options.propsData = t
                        }
                        c && (e.$slots = un(i, o.context), e.$forceUpdate())
                    }

                    function $r(e) {
                        while (e && (e = e.$parent))
                            if (e._inactive) return !0;
                        return !1
                    }

                    function Fr(e, t) {
                        if (t) {
                            if (e._directInactive = !1, $r(e)) return
                        } else if (e._directInactive) return;
                        if (e._inactive || null === e._inactive) {
                            e._inactive = !1;
                            for (var n = 0; n < e.$children.length; n++) Fr(e.$children[n]);
                            Ur(e, "activated")
                        }
                    }

                    function Mr(e, t) {
                        if ((!t || (e._directInactive = !0, !$r(e))) && !e._inactive) {
                            e._inactive = !0;
                            for (var n = 0; n < e.$children.length; n++) Mr(e.$children[n]);
                            Ur(e, "deactivated")
                        }
                    }

                    function Ur(e, t, n, r) {
                        void 0 === r && (r = !0), Ee();
                        var o = he,
                            i = Tt();
                        r && me(e);
                        var a = e.$options[t],
                            s = "".concat(t, " hook");
                        if (a)
                            for (var u = 0, c = a.length; u < c; u++) Un(a[u], e, n || null, e, s);
                        e._hasHookEvent && e.$emit("hook:" + t), r && (me(o), i && i.on()), Pe()
                    }
                    var Gr = [],
                        Br = [],
                        Vr = {},
                        Hr = !1,
                        Kr = !1,
                        zr = 0;

                    function Wr() {
                        zr = Gr.length = Br.length = 0, Vr = {}, Hr = Kr = !1
                    }
                    var Jr = 0,
                        qr = Date.now;
                    if (X && !te) {
                        var Yr = window.performance;
                        Yr && "function" === typeof Yr.now && qr() > document.createEvent("Event").timeStamp && (qr = function() {
                            return Yr.now()
                        })
                    }
                    var Zr = function(e, t) {
                        if (e.post) {
                            if (!t.post) return 1
                        } else if (t.post) return -1;
                        return e.id - t.id
                    };

                    function Qr() {
                        var e, t;
                        for (Jr = qr(), Kr = !0, Gr.sort(Zr), zr = 0; zr < Gr.length; zr++) e = Gr[zr], e.before && e.before(), t = e.id, Vr[t] = null, e.run();
                        var n = Br.slice(),
                            r = Gr.slice();
                        Wr(), to(n), Xr(r), xe(), fe && z.devtools && fe.emit("flush")
                    }

                    function Xr(e) {
                        var t = e.length;
                        while (t--) {
                            var n = e[t],
                                r = n.vm;
                            r && r._watcher === n && r._isMounted && !r._isDestroyed && Ur(r, "updated")
                        }
                    }

                    function eo(e) {
                        e._inactive = !1, Br.push(e)
                    }

                    function to(e) {
                        for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Fr(e[t], !0)
                    }

                    function no(e) {
                        var t = e.id;
                        if (null == Vr[t] && (e !== Se.target || !e.noRecurse)) {
                            if (Vr[t] = !0, Kr) {
                                var n = Gr.length - 1;
                                while (n > zr && Gr[n].id > e.id) n--;
                                Gr.splice(n + 1, 0, e)
                            } else Gr.push(e);
                            Hr || (Hr = !0, Qn(Qr))
                        }
                    }

                    function ro(e) {
                        var t = e.$options.provide;
                        if (t) {
                            var n = l(t) ? t.call(e) : t;
                            if (!f(n)) return;
                            for (var r = Dt(e), o = ve ? Reflect.ownKeys(n) : Object.keys(n), i = 0; i < o.length; i++) {
                                var a = o[i];
                                Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(n, a))
                            }
                        }
                    }

                    function oo(e) {
                        var t = io(e.$options.inject, e);
                        t && (Ie(!1), Object.keys(t).forEach((function(n) {
                            Me(e, n, t[n])
                        })), Ie(!0))
                    }

                    function io(e, t) {
                        if (e) {
                            for (var n = Object.create(null), r = ve ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                                var i = r[o];
                                if ("__ob__" !== i) {
                                    var a = e[i].from;
                                    if (a in t._provided) n[i] = t._provided[a];
                                    else if ("default" in e[i]) {
                                        var s = e[i].default;
                                        n[i] = l(s) ? s.call(t) : s
                                    } else 0
                                }
                            }
                            return n
                        }
                    }

                    function ao(e, t, n, i, a) {
                        var u, c = this,
                            l = a.options;
                        k(i, "_uid") ? (u = Object.create(i), u._original = i) : (u = i, i = i._original);
                        var f = s(l._compiled),
                            d = !f;
                        this.data = e, this.props = t, this.children = n, this.parent = i, this.listeners = e.on || r, this.injections = io(l.inject, i), this.slots = function() {
                            return c.$slots || fn(i, e.scopedSlots, c.$slots = un(n, i)), c.$slots
                        }, Object.defineProperty(this, "scopedSlots", {
                            enumerable: !0,
                            get: function() {
                                return fn(i, e.scopedSlots, this.slots())
                            }
                        }), f && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = fn(i, e.scopedSlots, this.$slots)), l._scopeId ? this._c = function(e, t, n, r) {
                            var a = Dn(u, e, t, n, r, d);
                            return a && !o(a) && (a.fnScopeId = l._scopeId, a.fnContext = i), a
                        } : this._c = function(e, t, n, r) {
                            return Dn(u, e, t, n, r, d)
                        }
                    }

                    function so(e, t, n, i, s) {
                        var u = e.options,
                            c = {},
                            l = u.props;
                        if (a(l))
                            for (var f in l) c[f] = No(f, l, t || r);
                        else a(n.attrs) && co(c, n.attrs), a(n.props) && co(c, n.props);
                        var d = new ao(n, c, s, i, e),
                            p = u.render.call(null, d._c, d);
                        if (p instanceof ye) return uo(p, n, d.parent, u, d);
                        if (o(p)) {
                            for (var v = Vt(p) || [], h = new Array(v.length), g = 0; g < v.length; g++) h[g] = uo(v[g], n, d.parent, u, d);
                            return h
                        }
                    }

                    function uo(e, t, n, r, o) {
                        var i = Oe(e);
                        return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), i
                    }

                    function co(e, t) {
                        for (var n in t) e[j(n)] = t[n]
                    }

                    function lo(e) {
                        return e.name || e.__name || e._componentTag
                    }
                    sn(ao.prototype);
                    var fo = {
                            init: function(e, t) {
                                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                                    var n = e;
                                    fo.prepatch(n, n)
                                } else {
                                    var r = e.componentInstance = ho(e, Tr);
                                    r.$mount(t ? e.elm : void 0, t)
                                }
                            },
                            prepatch: function(e, t) {
                                var n = t.componentOptions,
                                    r = t.componentInstance = e.componentInstance;
                                Rr(r, n.propsData, n.listeners, t, n.children)
                            },
                            insert: function(e) {
                                var t = e.context,
                                    n = e.componentInstance;
                                n._isMounted || (n._isMounted = !0, Ur(n, "mounted")), e.data.keepAlive && (t._isMounted ? eo(n) : Fr(n, !0))
                            },
                            destroy: function(e) {
                                var t = e.componentInstance;
                                t._isDestroyed || (e.data.keepAlive ? Mr(t, !0) : t.$destroy())
                            }
                        },
                        po = Object.keys(fo);

                    function vo(e, t, n, r, o) {
                        if (!i(e)) {
                            var u = n.$options._base;
                            if (f(e) && (e = u.extend(e)), "function" === typeof e) {
                                var c;
                                if (i(e.cid) && (c = e, e = Ln(c, u), void 0 === e)) return Cn(c, t, n, r, o);
                                t = t || {}, ni(e), a(t.model) && yo(e.options, t);
                                var l = Ut(t, e, o);
                                if (s(e.options.functional)) return so(e, l, t, n, r);
                                var d = t.on;
                                if (t.on = t.nativeOn, s(e.options.abstract)) {
                                    var p = t.slot;
                                    t = {}, p && (t.slot = p)
                                }
                                go(t);
                                var v = lo(e.options) || o,
                                    h = new ye("vue-component-".concat(e.cid).concat(v ? "-".concat(v) : ""), t, void 0, void 0, void 0, n, {
                                        Ctor: e,
                                        propsData: l,
                                        listeners: d,
                                        tag: o,
                                        children: r
                                    }, c);
                                return h
                            }
                        }
                    }

                    function ho(e, t) {
                        var n = {
                                _isComponent: !0,
                                _parentVnode: e,
                                parent: t
                            },
                            r = e.data.inlineTemplate;
                        return a(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n)
                    }

                    function go(e) {
                        for (var t = e.hook || (e.hook = {}), n = 0; n < po.length; n++) {
                            var r = po[n],
                                o = t[r],
                                i = fo[r];
                            o === i || o && o._merged || (t[r] = o ? mo(i, o) : i)
                        }
                    }

                    function mo(e, t) {
                        var n = function(n, r) {
                            e(n, r), t(n, r)
                        };
                        return n._merged = !0, n
                    }

                    function yo(e, t) {
                        var n = e.model && e.model.prop || "value",
                            r = e.model && e.model.event || "input";
                        (t.attrs || (t.attrs = {}))[n] = t.model.value;
                        var i = t.on || (t.on = {}),
                            s = i[r],
                            u = t.model.callback;
                        a(s) ? (o(s) ? -1 === s.indexOf(u) : s !== u) && (i[r] = [u].concat(s)) : i[r] = u
                    }
                    var bo = R,
                        _o = z.optionMergeStrategies;

                    function Oo(e, t, n) {
                        if (void 0 === n && (n = !0), !t) return e;
                        for (var r, o, i, a = ve ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < a.length; s++) r = a[s], "__ob__" !== r && (o = e[r], i = t[r], n && k(e, r) ? o !== i && p(o) && p(i) && Oo(o, i) : Ue(e, r, i));
                        return e
                    }

                    function wo(e, t, n) {
                        return n ? function() {
                            var r = l(t) ? t.call(n, n) : t,
                                o = l(e) ? e.call(n, n) : e;
                            return r ? Oo(r, o) : o
                        } : t ? e ? function() {
                            return Oo(l(t) ? t.call(this, this) : t, l(e) ? e.call(this, this) : e)
                        } : t : e
                    }

                    function ko(e, t) {
                        var n = t ? e ? e.concat(t) : o(t) ? t : [t] : e;
                        return n ? xo(n) : n
                    }

                    function xo(e) {
                        for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                        return t
                    }

                    function So(e, t, n, r) {
                        var o = Object.create(e || null);
                        return t ? D(o, t) : o
                    }
                    _o.data = function(e, t, n) {
                        return n ? wo(e, t, n) : t && "function" !== typeof t ? e : wo(e, t)
                    }, K.forEach((function(e) {
                        _o[e] = ko
                    })), H.forEach((function(e) {
                        _o[e + "s"] = So
                    })), _o.watch = function(e, t, n, r) {
                        if (e === se && (e = void 0), t === se && (t = void 0), !t) return Object.create(e || null);
                        if (!e) return t;
                        var i = {};
                        for (var a in D(i, e), t) {
                            var s = i[a],
                                u = t[a];
                            s && !o(s) && (s = [s]), i[a] = s ? s.concat(u) : o(u) ? u : [u]
                        }
                        return i
                    }, _o.props = _o.methods = _o.inject = _o.computed = function(e, t, n, r) {
                        if (!e) return t;
                        var o = Object.create(null);
                        return D(o, e), t && D(o, t), o
                    }, _o.provide = function(e, t) {
                        return e ? function() {
                            var n = Object.create(null);
                            return Oo(n, l(e) ? e.call(this) : e), t && Oo(n, l(t) ? t.call(this) : t, !1), n
                        } : t
                    };
                    var jo = function(e, t) {
                        return void 0 === t ? e : t
                    };

                    function Eo(e, t) {
                        var n = e.props;
                        if (n) {
                            var r, i, a, s = {};
                            if (o(n)) {
                                r = n.length;
                                while (r--) i = n[r], "string" === typeof i && (a = j(i), s[a] = {
                                    type: null
                                })
                            } else if (p(n))
                                for (var u in n) i = n[u], a = j(u), s[a] = p(i) ? i : {
                                    type: i
                                };
                            else 0;
                            e.props = s
                        }
                    }

                    function Po(e, t) {
                        var n = e.inject;
                        if (n) {
                            var r = e.inject = {};
                            if (o(n))
                                for (var i = 0; i < n.length; i++) r[n[i]] = {
                                    from: n[i]
                                };
                            else if (p(n))
                                for (var a in n) {
                                    var s = n[a];
                                    r[a] = p(s) ? D({
                                        from: a
                                    }, s) : {
                                        from: s
                                    }
                                } else 0
                        }
                    }

                    function Co(e) {
                        var t = e.directives;
                        if (t)
                            for (var n in t) {
                                var r = t[n];
                                l(r) && (t[n] = {
                                    bind: r,
                                    update: r
                                })
                            }
                    }

                    function Lo(e, t, n) {
                        if (l(t) && (t = t.options), Eo(t, n), Po(t, n), Co(t), !t._base && (t.extends && (e = Lo(e, t.extends, n)), t.mixins))
                            for (var r = 0, o = t.mixins.length; r < o; r++) e = Lo(e, t.mixins[r], n);
                        var i, a = {};
                        for (i in e) s(i);
                        for (i in t) k(e, i) || s(i);

                        function s(r) {
                            var o = _o[r] || jo;
                            a[r] = o(e[r], t[r], n, r)
                        }
                        return a
                    }

                    function To(e, t, n, r) {
                        if ("string" === typeof n) {
                            var o = e[t];
                            if (k(o, n)) return o[n];
                            var i = j(n);
                            if (k(o, i)) return o[i];
                            var a = E(i);
                            if (k(o, a)) return o[a];
                            var s = o[n] || o[i] || o[a];
                            return s
                        }
                    }

                    function No(e, t, n, r) {
                        var o = t[e],
                            i = !k(n, e),
                            a = n[e],
                            s = $o(Boolean, o.type);
                        if (s > -1)
                            if (i && !k(o, "default")) a = !1;
                            else if ("" === a || a === C(e)) {
                            var u = $o(String, o.type);
                            (u < 0 || s < u) && (a = !0)
                        }
                        if (void 0 === a) {
                            a = Ao(r, o, e);
                            var c = De;
                            Ie(!0), Fe(a), Ie(c)
                        }
                        return a
                    }

                    function Ao(e, t, n) {
                        if (k(t, "default")) {
                            var r = t.default;
                            return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : l(r) && "Function" !== Io(t.type) ? r.call(e) : r
                        }
                    }
                    var Do = /^\s*function (\w+)/;

                    function Io(e) {
                        var t = e && e.toString().match(Do);
                        return t ? t[1] : ""
                    }

                    function Ro(e, t) {
                        return Io(e) === Io(t)
                    }

                    function $o(e, t) {
                        if (!o(t)) return Ro(t, e) ? 0 : -1;
                        for (var n = 0, r = t.length; n < r; n++)
                            if (Ro(t[n], e)) return n;
                        return -1
                    }
                    var Fo = {
                        enumerable: !0,
                        configurable: !0,
                        get: R,
                        set: R
                    };

                    function Mo(e, t, n) {
                        Fo.get = function() {
                            return this[t][n]
                        }, Fo.set = function(e) {
                            this[t][n] = e
                        }, Object.defineProperty(e, n, Fo)
                    }

                    function Uo(e) {
                        var t = e.$options;
                        if (t.props && Go(e, t.props), vn(e), t.methods && qo(e, t.methods), t.data) Bo(e);
                        else {
                            var n = Fe(e._data = {});
                            n && n.vmCount++
                        }
                        t.computed && Ko(e, t.computed), t.watch && t.watch !== se && Yo(e, t.watch)
                    }

                    function Go(e, t) {
                        var n = e.$options.propsData || {},
                            r = e._props = He({}),
                            o = e.$options._propKeys = [],
                            i = !e.$parent;
                        i || Ie(!1);
                        var a = function(i) {
                            o.push(i);
                            var a = No(i, t, n, e);
                            Me(r, i, a), i in e || Mo(e, "_props", i)
                        };
                        for (var s in t) a(s);
                        Ie(!0)
                    }

                    function Bo(e) {
                        var t = e.$options.data;
                        t = e._data = l(t) ? Vo(t, e) : t || {}, p(t) || (t = {});
                        var n = Object.keys(t),
                            r = e.$options.props,
                            o = (e.$options.methods, n.length);
                        while (o--) {
                            var i = n[o];
                            0, r && k(r, i) || J(i) || Mo(e, "_data", i)
                        }
                        var a = Fe(t);
                        a && a.vmCount++
                    }

                    function Vo(e, t) {
                        Ee();
                        try {
                            return e.call(t, t)
                        } catch (ou) {
                            return Mn(ou, t, "data()"), {}
                        } finally {
                            Pe()
                        }
                    }
                    var Ho = {
                        lazy: !0
                    };

                    function Ko(e, t) {
                        var n = e._computedWatchers = Object.create(null),
                            r = le();
                        for (var o in t) {
                            var i = t[o],
                                a = l(i) ? i : i.get;
                            0, r || (n[o] = new xr(e, a || R, R, Ho)), o in e || zo(e, o, i)
                        }
                    }

                    function zo(e, t, n) {
                        var r = !le();
                        l(n) ? (Fo.get = r ? Wo(t) : Jo(n), Fo.set = R) : (Fo.get = n.get ? r && !1 !== n.cache ? Wo(t) : Jo(n.get) : R, Fo.set = n.set || R), Object.defineProperty(e, t, Fo)
                    }

                    function Wo(e) {
                        return function() {
                            var t = this._computedWatchers && this._computedWatchers[e];
                            if (t) return t.dirty && t.evaluate(), Se.target && t.depend(), t.value
                        }
                    }

                    function Jo(e) {
                        return function() {
                            return e.call(this, this)
                        }
                    }

                    function qo(e, t) {
                        e.$options.props;
                        for (var n in t) e[n] = "function" !== typeof t[n] ? R : N(t[n], e)
                    }

                    function Yo(e, t) {
                        for (var n in t) {
                            var r = t[n];
                            if (o(r))
                                for (var i = 0; i < r.length; i++) Zo(e, n, r[i]);
                            else Zo(e, n, r)
                        }
                    }

                    function Zo(e, t, n, r) {
                        return p(n) && (r = n, n = n.handler), "string" === typeof n && (n = e[n]), e.$watch(t, n, r)
                    }

                    function Qo(e) {
                        var t = {
                                get: function() {
                                    return this._data
                                }
                            },
                            n = {
                                get: function() {
                                    return this._props
                                }
                            };
                        Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Ue, e.prototype.$delete = Ge, e.prototype.$watch = function(e, t, n) {
                            var r = this;
                            if (p(t)) return Zo(r, e, t, n);
                            n = n || {}, n.user = !0;
                            var o = new xr(r, e, t, n);
                            if (n.immediate) {
                                var i = 'callback for immediate watcher "'.concat(o.expression, '"');
                                Ee(), Un(t, r, [o.value], r, i), Pe()
                            }
                            return function() {
                                o.teardown()
                            }
                        }
                    }
                    var Xo = 0;

                    function ei(e) {
                        e.prototype._init = function(e) {
                            var t = this;
                            t._uid = Xo++, t._isVue = !0, t.__v_skip = !0, t._scope = new Pt(!0), t._scope._vm = !0, e && e._isComponent ? ti(t, e) : t.$options = Lo(ni(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, Ar(t), Sr(t), Sn(t), Ur(t, "beforeCreate", void 0, !1), oo(t), Uo(t), ro(t), Ur(t, "created"), t.$options.el && t.$mount(t.$options.el)
                        }
                    }

                    function ti(e, t) {
                        var n = e.$options = Object.create(e.constructor.options),
                            r = t._parentVnode;
                        n.parent = t.parent, n._parentVnode = r;
                        var o = r.componentOptions;
                        n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
                    }

                    function ni(e) {
                        var t = e.options;
                        if (e.super) {
                            var n = ni(e.super),
                                r = e.superOptions;
                            if (n !== r) {
                                e.superOptions = n;
                                var o = ri(e);
                                o && D(e.extendOptions, o), t = e.options = Lo(n, e.extendOptions), t.name && (t.components[t.name] = e)
                            }
                        }
                        return t
                    }

                    function ri(e) {
                        var t, n = e.options,
                            r = e.sealedOptions;
                        for (var o in n) n[o] !== r[o] && (t || (t = {}), t[o] = n[o]);
                        return t
                    }

                    function oi(e) {
                        this._init(e)
                    }

                    function ii(e) {
                        e.use = function(e) {
                            var t = this._installedPlugins || (this._installedPlugins = []);
                            if (t.indexOf(e) > -1) return this;
                            var n = A(arguments, 1);
                            return n.unshift(this), l(e.install) ? e.install.apply(e, n) : l(e) && e.apply(null, n), t.push(e), this
                        }
                    }

                    function ai(e) {
                        e.mixin = function(e) {
                            return this.options = Lo(this.options, e), this
                        }
                    }

                    function si(e) {
                        e.cid = 0;
                        var t = 1;
                        e.extend = function(e) {
                            e = e || {};
                            var n = this,
                                r = n.cid,
                                o = e._Ctor || (e._Ctor = {});
                            if (o[r]) return o[r];
                            var i = lo(e) || lo(n.options);
                            var a = function(e) {
                                this._init(e)
                            };
                            return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, a.options = Lo(n.options, e), a["super"] = n, a.options.props && ui(a), a.options.computed && ci(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, H.forEach((function(e) {
                                a[e] = n[e]
                            })), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = D({}, a.options), o[r] = a, a
                        }
                    }

                    function ui(e) {
                        var t = e.options.props;
                        for (var n in t) Mo(e.prototype, "_props", n)
                    }

                    function ci(e) {
                        var t = e.options.computed;
                        for (var n in t) zo(e.prototype, n, t[n])
                    }

                    function li(e) {
                        H.forEach((function(t) {
                            e[t] = function(e, n) {
                                return n ? ("component" === t && p(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && l(n) && (n = {
                                    bind: n,
                                    update: n
                                }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                            }
                        }))
                    }

                    function fi(e) {
                        return e && (lo(e.Ctor.options) || e.tag)
                    }

                    function di(e, t) {
                        return o(e) ? e.indexOf(t) > -1 : "string" === typeof e ? e.split(",").indexOf(t) > -1 : !!v(e) && e.test(t)
                    }

                    function pi(e, t) {
                        var n = e.cache,
                            r = e.keys,
                            o = e._vnode;
                        for (var i in n) {
                            var a = n[i];
                            if (a) {
                                var s = a.name;
                                s && !t(s) && vi(n, i, r, o)
                            }
                        }
                    }

                    function vi(e, t, n, r) {
                        var o = e[t];
                        !o || r && o.tag === r.tag || o.componentInstance.$destroy(), e[t] = null, O(n, t)
                    }
                    ei(oi), Qo(oi), Lr(oi), Dr(oi), En(oi);
                    var hi = [String, RegExp, Array],
                        gi = {
                            name: "keep-alive",
                            abstract: !0,
                            props: {
                                include: hi,
                                exclude: hi,
                                max: [String, Number]
                            },
                            methods: {
                                cacheVNode: function() {
                                    var e = this,
                                        t = e.cache,
                                        n = e.keys,
                                        r = e.vnodeToCache,
                                        o = e.keyToCache;
                                    if (r) {
                                        var i = r.tag,
                                            a = r.componentInstance,
                                            s = r.componentOptions;
                                        t[o] = {
                                            name: fi(s),
                                            tag: i,
                                            componentInstance: a
                                        }, n.push(o), this.max && n.length > parseInt(this.max) && vi(t, n[0], n, this._vnode), this.vnodeToCache = null
                                    }
                                }
                            },
                            created: function() {
                                this.cache = Object.create(null), this.keys = []
                            },
                            destroyed: function() {
                                for (var e in this.cache) vi(this.cache, e, this.keys)
                            },
                            mounted: function() {
                                var e = this;
                                this.cacheVNode(), this.$watch("include", (function(t) {
                                    pi(e, (function(e) {
                                        return di(t, e)
                                    }))
                                })), this.$watch("exclude", (function(t) {
                                    pi(e, (function(e) {
                                        return !di(t, e)
                                    }))
                                }))
                            },
                            updated: function() {
                                this.cacheVNode()
                            },
                            render: function() {
                                var e = this.$slots.default,
                                    t = Tn(e),
                                    n = t && t.componentOptions;
                                if (n) {
                                    var r = fi(n),
                                        o = this,
                                        i = o.include,
                                        a = o.exclude;
                                    if (i && (!r || !di(i, r)) || a && r && di(a, r)) return t;
                                    var s = this,
                                        u = s.cache,
                                        c = s.keys,
                                        l = null == t.key ? n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "") : t.key;
                                    u[l] ? (t.componentInstance = u[l].componentInstance, O(c, l), c.push(l)) : (this.vnodeToCache = t, this.keyToCache = l), t.data.keepAlive = !0
                                }
                                return t || e && e[0]
                            }
                        },
                        mi = {
                            KeepAlive: gi
                        };

                    function yi(e) {
                        var t = {
                            get: function() {
                                return z
                            }
                        };
                        Object.defineProperty(e, "config", t), e.util = {
                            warn: bo,
                            extend: D,
                            mergeOptions: Lo,
                            defineReactive: Me
                        }, e.set = Ue, e.delete = Ge, e.nextTick = Qn, e.observable = function(e) {
                            return Fe(e), e
                        }, e.options = Object.create(null), H.forEach((function(t) {
                            e.options[t + "s"] = Object.create(null)
                        })), e.options._base = e, D(e.options.components, mi), ii(e), ai(e), si(e), li(e)
                    }
                    yi(oi), Object.defineProperty(oi.prototype, "$isServer", {
                        get: le
                    }), Object.defineProperty(oi.prototype, "$ssrContext", {
                        get: function() {
                            return this.$vnode && this.$vnode.ssrContext
                        }
                    }), Object.defineProperty(oi, "FunctionalRenderContext", {
                        value: ao
                    }), oi.version = mr;
                    var bi = b("style,class"),
                        _i = b("input,textarea,option,select,progress"),
                        Oi = function(e, t, n) {
                            return "value" === n && _i(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
                        },
                        wi = b("contenteditable,draggable,spellcheck"),
                        ki = b("events,caret,typing,plaintext-only"),
                        xi = function(e, t) {
                            return Ci(t) || "false" === t ? "false" : "contenteditable" === e && ki(t) ? t : "true"
                        },
                        Si = b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),
                        ji = "http://www.w3.org/1999/xlink",
                        Ei = function(e) {
                            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
                        },
                        Pi = function(e) {
                            return Ei(e) ? e.slice(6, e.length) : ""
                        },
                        Ci = function(e) {
                            return null == e || !1 === e
                        };

                    function Li(e) {
                        var t = e.data,
                            n = e,
                            r = e;
                        while (a(r.componentInstance)) r = r.componentInstance._vnode, r && r.data && (t = Ti(r.data, t));
                        while (a(n = n.parent)) n && n.data && (t = Ti(t, n.data));
                        return Ni(t.staticClass, t.class)
                    }

                    function Ti(e, t) {
                        return {
                            staticClass: Ai(e.staticClass, t.staticClass),
                            class: a(e.class) ? [e.class, t.class] : t.class
                        }
                    }

                    function Ni(e, t) {
                        return a(e) || a(t) ? Ai(e, Di(t)) : ""
                    }

                    function Ai(e, t) {
                        return e ? t ? e + " " + t : e : t || ""
                    }

                    function Di(e) {
                        return Array.isArray(e) ? Ii(e) : f(e) ? Ri(e) : "string" === typeof e ? e : ""
                    }

                    function Ii(e) {
                        for (var t, n = "", r = 0, o = e.length; r < o; r++) a(t = Di(e[r])) && "" !== t && (n && (n += " "), n += t);
                        return n
                    }

                    function Ri(e) {
                        var t = "";
                        for (var n in e) e[n] && (t && (t += " "), t += n);
                        return t
                    }
                    var $i = {
                            svg: "http://www.w3.org/2000/svg",
                            math: "http://www.w3.org/1998/Math/MathML"
                        },
                        Fi = b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                        Mi = b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                        Ui = function(e) {
                            return Fi(e) || Mi(e)
                        };

                    function Gi(e) {
                        return Mi(e) ? "svg" : "math" === e ? "math" : void 0
                    }
                    var Bi = Object.create(null);

                    function Vi(e) {
                        if (!X) return !0;
                        if (Ui(e)) return !1;
                        if (e = e.toLowerCase(), null != Bi[e]) return Bi[e];
                        var t = document.createElement(e);
                        return e.indexOf("-") > -1 ? Bi[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Bi[e] = /HTMLUnknownElement/.test(t.toString())
                    }
                    var Hi = b("text,number,password,search,email,tel,url");

                    function Ki(e) {
                        if ("string" === typeof e) {
                            var t = document.querySelector(e);
                            return t || document.createElement("div")
                        }
                        return e
                    }

                    function zi(e, t) {
                        var n = document.createElement(e);
                        return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n
                    }

                    function Wi(e, t) {
                        return document.createElementNS($i[e], t)
                    }

                    function Ji(e) {
                        return document.createTextNode(e)
                    }

                    function qi(e) {
                        return document.createComment(e)
                    }

                    function Yi(e, t, n) {
                        e.insertBefore(t, n)
                    }

                    function Zi(e, t) {
                        e.removeChild(t)
                    }

                    function Qi(e, t) {
                        e.appendChild(t)
                    }

                    function Xi(e) {
                        return e.parentNode
                    }

                    function ea(e) {
                        return e.nextSibling
                    }

                    function ta(e) {
                        return e.tagName
                    }

                    function na(e, t) {
                        e.textContent = t
                    }

                    function ra(e, t) {
                        e.setAttribute(t, "")
                    }
                    var oa = Object.freeze({
                            __proto__: null,
                            createElement: zi,
                            createElementNS: Wi,
                            createTextNode: Ji,
                            createComment: qi,
                            insertBefore: Yi,
                            removeChild: Zi,
                            appendChild: Qi,
                            parentNode: Xi,
                            nextSibling: ea,
                            tagName: ta,
                            setTextContent: na,
                            setStyleScope: ra
                        }),
                        ia = {
                            create: function(e, t) {
                                aa(t)
                            },
                            update: function(e, t) {
                                e.data.ref !== t.data.ref && (aa(e, !0), aa(t))
                            },
                            destroy: function(e) {
                                aa(e, !0)
                            }
                        };

                    function aa(e, t) {
                        var n = e.data.ref;
                        if (a(n)) {
                            var r = e.context,
                                i = e.componentInstance || e.elm,
                                s = t ? null : i,
                                u = t ? void 0 : i;
                            if (l(n)) Un(n, r, [s], r, "template ref function");
                            else {
                                var c = e.data.refInFor,
                                    f = "string" === typeof n || "number" === typeof n,
                                    d = Xe(n),
                                    p = r.$refs;
                                if (f || d)
                                    if (c) {
                                        var v = f ? p[n] : n.value;
                                        t ? o(v) && O(v, i) : o(v) ? v.includes(i) || v.push(i) : f ? (p[n] = [i], sa(r, n, p[n])) : n.value = [i]
                                    } else if (f) {
                                    if (t && p[n] !== i) return;
                                    p[n] = u, sa(r, n, s)
                                } else if (d) {
                                    if (t && n.value !== i) return;
                                    n.value = s
                                } else 0
                            }
                        }
                    }

                    function sa(e, t, n) {
                        var r = e._setupState;
                        r && k(r, t) && (Xe(r[t]) ? r[t].value = n : r[t] = n)
                    }
                    var ua = new ye("", {}, []),
                        ca = ["create", "activate", "update", "remove", "destroy"];

                    function la(e, t) {
                        return e.key === t.key && e.asyncFactory === t.asyncFactory && (e.tag === t.tag && e.isComment === t.isComment && a(e.data) === a(t.data) && fa(e, t) || s(e.isAsyncPlaceholder) && i(t.asyncFactory.error))
                    }

                    function fa(e, t) {
                        if ("input" !== e.tag) return !0;
                        var n, r = a(n = e.data) && a(n = n.attrs) && n.type,
                            o = a(n = t.data) && a(n = n.attrs) && n.type;
                        return r === o || Hi(r) && Hi(o)
                    }

                    function da(e, t, n) {
                        var r, o, i = {};
                        for (r = t; r <= n; ++r) o = e[r].key, a(o) && (i[o] = r);
                        return i
                    }

                    function pa(e) {
                        var t, n, r = {},
                            u = e.modules,
                            l = e.nodeOps;
                        for (t = 0; t < ca.length; ++t)
                            for (r[ca[t]] = [], n = 0; n < u.length; ++n) a(u[n][ca[t]]) && r[ca[t]].push(u[n][ca[t]]);

                        function f(e) {
                            return new ye(l.tagName(e).toLowerCase(), {}, [], void 0, e)
                        }

                        function d(e, t) {
                            function n() {
                                0 === --n.listeners && p(e)
                            }
                            return n.listeners = t, n
                        }

                        function p(e) {
                            var t = l.parentNode(e);
                            a(t) && l.removeChild(t, e)
                        }

                        function v(e, t, n, r, o, i, u) {
                            if (a(e.elm) && a(i) && (e = i[u] = Oe(e)), e.isRootInsert = !o, !h(e, t, n, r)) {
                                var c = e.data,
                                    f = e.children,
                                    d = e.tag;
                                a(d) ? (e.elm = e.ns ? l.createElementNS(e.ns, d) : l.createElement(d, e), k(e), _(e, f, t), a(c) && w(e, t), y(n, e.elm, r)) : s(e.isComment) ? (e.elm = l.createComment(e.text), y(n, e.elm, r)) : (e.elm = l.createTextNode(e.text), y(n, e.elm, r))
                            }
                        }

                        function h(e, t, n, r) {
                            var o = e.data;
                            if (a(o)) {
                                var i = a(e.componentInstance) && o.keepAlive;
                                if (a(o = o.hook) && a(o = o.init) && o(e, !1), a(e.componentInstance)) return g(e, t), y(n, e.elm, r), s(i) && m(e, t, n, r), !0
                            }
                        }

                        function g(e, t) {
                            a(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, O(e) ? (w(e, t), k(e)) : (aa(e), t.push(e))
                        }

                        function m(e, t, n, o) {
                            var i, s = e;
                            while (s.componentInstance)
                                if (s = s.componentInstance._vnode, a(i = s.data) && a(i = i.transition)) {
                                    for (i = 0; i < r.activate.length; ++i) r.activate[i](ua, s);
                                    t.push(s);
                                    break
                                }
                            y(n, e.elm, o)
                        }

                        function y(e, t, n) {
                            a(e) && (a(n) ? l.parentNode(n) === e && l.insertBefore(e, t, n) : l.appendChild(e, t))
                        }

                        function _(e, t, n) {
                            if (o(t)) {
                                0;
                                for (var r = 0; r < t.length; ++r) v(t[r], n, e.elm, null, !0, t, r)
                            } else c(e.text) && l.appendChild(e.elm, l.createTextNode(String(e.text)))
                        }

                        function O(e) {
                            while (e.componentInstance) e = e.componentInstance._vnode;
                            return a(e.tag)
                        }

                        function w(e, n) {
                            for (var o = 0; o < r.create.length; ++o) r.create[o](ua, e);
                            t = e.data.hook, a(t) && (a(t.create) && t.create(ua, e), a(t.insert) && n.push(e))
                        }

                        function k(e) {
                            var t;
                            if (a(t = e.fnScopeId)) l.setStyleScope(e.elm, t);
                            else {
                                var n = e;
                                while (n) a(t = n.context) && a(t = t.$options._scopeId) && l.setStyleScope(e.elm, t), n = n.parent
                            }
                            a(t = Tr) && t !== e.context && t !== e.fnContext && a(t = t.$options._scopeId) && l.setStyleScope(e.elm, t)
                        }

                        function x(e, t, n, r, o, i) {
                            for (; r <= o; ++r) v(n[r], i, e, t, !1, n, r)
                        }

                        function S(e) {
                            var t, n, o = e.data;
                            if (a(o))
                                for (a(t = o.hook) && a(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) r.destroy[t](e);
                            if (a(t = e.children))
                                for (n = 0; n < e.children.length; ++n) S(e.children[n])
                        }

                        function j(e, t, n) {
                            for (; t <= n; ++t) {
                                var r = e[t];
                                a(r) && (a(r.tag) ? (E(r), S(r)) : p(r.elm))
                            }
                        }

                        function E(e, t) {
                            if (a(t) || a(e.data)) {
                                var n, o = r.remove.length + 1;
                                for (a(t) ? t.listeners += o : t = d(e.elm, o), a(n = e.componentInstance) && a(n = n._vnode) && a(n.data) && E(n, t), n = 0; n < r.remove.length; ++n) r.remove[n](e, t);
                                a(n = e.data.hook) && a(n = n.remove) ? n(e, t) : t()
                            } else p(e.elm)
                        }

                        function P(e, t, n, r, o) {
                            var s, u, c, f, d = 0,
                                p = 0,
                                h = t.length - 1,
                                g = t[0],
                                m = t[h],
                                y = n.length - 1,
                                b = n[0],
                                _ = n[y],
                                O = !o;
                            while (d <= h && p <= y) i(g) ? g = t[++d] : i(m) ? m = t[--h] : la(g, b) ? (L(g, b, r, n, p), g = t[++d], b = n[++p]) : la(m, _) ? (L(m, _, r, n, y), m = t[--h], _ = n[--y]) : la(g, _) ? (L(g, _, r, n, y), O && l.insertBefore(e, g.elm, l.nextSibling(m.elm)), g = t[++d], _ = n[--y]) : la(m, b) ? (L(m, b, r, n, p), O && l.insertBefore(e, m.elm, g.elm), m = t[--h], b = n[++p]) : (i(s) && (s = da(t, d, h)), u = a(b.key) ? s[b.key] : C(b, t, d, h), i(u) ? v(b, r, e, g.elm, !1, n, p) : (c = t[u], la(c, b) ? (L(c, b, r, n, p), t[u] = void 0, O && l.insertBefore(e, c.elm, g.elm)) : v(b, r, e, g.elm, !1, n, p)), b = n[++p]);
                            d > h ? (f = i(n[y + 1]) ? null : n[y + 1].elm, x(e, f, n, p, y, r)) : p > y && j(t, d, h)
                        }

                        function C(e, t, n, r) {
                            for (var o = n; o < r; o++) {
                                var i = t[o];
                                if (a(i) && la(e, i)) return o
                            }
                        }

                        function L(e, t, n, o, u, c) {
                            if (e !== t) {
                                a(t.elm) && a(o) && (t = o[u] = Oe(t));
                                var f = t.elm = e.elm;
                                if (s(e.isAsyncPlaceholder)) a(t.asyncFactory.resolved) ? A(e.elm, t, n) : t.isAsyncPlaceholder = !0;
                                else if (s(t.isStatic) && s(e.isStatic) && t.key === e.key && (s(t.isCloned) || s(t.isOnce))) t.componentInstance = e.componentInstance;
                                else {
                                    var d, p = t.data;
                                    a(p) && a(d = p.hook) && a(d = d.prepatch) && d(e, t);
                                    var v = e.children,
                                        h = t.children;
                                    if (a(p) && O(t)) {
                                        for (d = 0; d < r.update.length; ++d) r.update[d](e, t);
                                        a(d = p.hook) && a(d = d.update) && d(e, t)
                                    }
                                    i(t.text) ? a(v) && a(h) ? v !== h && P(f, v, h, n, c) : a(h) ? (a(e.text) && l.setTextContent(f, ""), x(f, null, h, 0, h.length - 1, n)) : a(v) ? j(v, 0, v.length - 1) : a(e.text) && l.setTextContent(f, "") : e.text !== t.text && l.setTextContent(f, t.text), a(p) && a(d = p.hook) && a(d = d.postpatch) && d(e, t)
                                }
                            }
                        }

                        function T(e, t, n) {
                            if (s(n) && a(e.parent)) e.parent.data.pendingInsert = t;
                            else
                                for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
                        }
                        var N = b("attrs,class,staticClass,staticStyle,key");

                        function A(e, t, n, r) {
                            var o, i = t.tag,
                                u = t.data,
                                c = t.children;
                            if (r = r || u && u.pre, t.elm = e, s(t.isComment) && a(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                            if (a(u) && (a(o = u.hook) && a(o = o.init) && o(t, !0), a(o = t.componentInstance))) return g(t, n), !0;
                            if (a(i)) {
                                if (a(c))
                                    if (e.hasChildNodes())
                                        if (a(o = u) && a(o = o.domProps) && a(o = o.innerHTML)) {
                                            if (o !== e.innerHTML) return !1
                                        } else {
                                            for (var l = !0, f = e.firstChild, d = 0; d < c.length; d++) {
                                                if (!f || !A(f, c[d], n, r)) {
                                                    l = !1;
                                                    break
                                                }
                                                f = f.nextSibling
                                            }
                                            if (!l || f) return !1
                                        }
                                else _(t, c, n);
                                if (a(u)) {
                                    var p = !1;
                                    for (var v in u)
                                        if (!N(v)) {
                                            p = !0, w(t, n);
                                            break
                                        }!p && u["class"] && _r(u["class"])
                                }
                            } else e.data !== t.text && (e.data = t.text);
                            return !0
                        }
                        return function(e, t, n, o) {
                            if (!i(t)) {
                                var u = !1,
                                    c = [];
                                if (i(e)) u = !0, v(t, c);
                                else {
                                    var d = a(e.nodeType);
                                    if (!d && la(e, t)) L(e, t, c, null, null, o);
                                    else {
                                        if (d) {
                                            if (1 === e.nodeType && e.hasAttribute(V) && (e.removeAttribute(V), n = !0), s(n) && A(e, t, c)) return T(t, c, !0), e;
                                            e = f(e)
                                        }
                                        var p = e.elm,
                                            h = l.parentNode(p);
                                        if (v(t, c, p._leaveCb ? null : h, l.nextSibling(p)), a(t.parent)) {
                                            var g = t.parent,
                                                m = O(t);
                                            while (g) {
                                                for (var y = 0; y < r.destroy.length; ++y) r.destroy[y](g);
                                                if (g.elm = t.elm, m) {
                                                    for (var b = 0; b < r.create.length; ++b) r.create[b](ua, g);
                                                    var _ = g.data.hook.insert;
                                                    if (_.merged)
                                                        for (var w = _.fns.slice(1), k = 0; k < w.length; k++) w[k]()
                                                } else aa(g);
                                                g = g.parent
                                            }
                                        }
                                        a(h) ? j([e], 0, 0) : a(e.tag) && S(e)
                                    }
                                }
                                return T(t, c, u), t.elm
                            }
                            a(e) && S(e)
                        }
                    }
                    var va = {
                        create: ha,
                        update: ha,
                        destroy: function(e) {
                            ha(e, ua)
                        }
                    };

                    function ha(e, t) {
                        (e.data.directives || t.data.directives) && ga(e, t)
                    }

                    function ga(e, t) {
                        var n, r, o, i = e === ua,
                            a = t === ua,
                            s = ya(e.data.directives, e.context),
                            u = ya(t.data.directives, t.context),
                            c = [],
                            l = [];
                        for (n in u) r = s[n], o = u[n], r ? (o.oldValue = r.value, o.oldArg = r.arg, _a(o, "update", t, e), o.def && o.def.componentUpdated && l.push(o)) : (_a(o, "bind", t, e), o.def && o.def.inserted && c.push(o));
                        if (c.length) {
                            var f = function() {
                                for (var n = 0; n < c.length; n++) _a(c[n], "inserted", t, e)
                            };
                            i ? Mt(t, "insert", f) : f()
                        }
                        if (l.length && Mt(t, "postpatch", (function() {
                                for (var n = 0; n < l.length; n++) _a(l[n], "componentUpdated", t, e)
                            })), !i)
                            for (n in s) u[n] || _a(s[n], "unbind", e, e, a)
                    }
                    var ma = Object.create(null);

                    function ya(e, t) {
                        var n, r, o = Object.create(null);
                        if (!e) return o;
                        for (n = 0; n < e.length; n++) {
                            if (r = e[n], r.modifiers || (r.modifiers = ma), o[ba(r)] = r, t._setupState && t._setupState.__sfc) {
                                var i = r.def || To(t, "_setupState", "v-" + r.name);
                                r.def = "function" === typeof i ? {
                                    bind: i,
                                    update: i
                                } : i
                            }
                            r.def = r.def || To(t.$options, "directives", r.name, !0)
                        }
                        return o
                    }

                    function ba(e) {
                        return e.rawName || "".concat(e.name, ".").concat(Object.keys(e.modifiers || {}).join("."))
                    }

                    function _a(e, t, n, r, o) {
                        var i = e.def && e.def[t];
                        if (i) try {
                            i(n.elm, e, n, r, o)
                        } catch (ou) {
                            Mn(ou, n.context, "directive ".concat(e.name, " ").concat(t, " hook"))
                        }
                    }
                    var Oa = [ia, va];

                    function wa(e, t) {
                        var n = t.componentOptions;
                        if ((!a(n) || !1 !== n.Ctor.options.inheritAttrs) && (!i(e.data.attrs) || !i(t.data.attrs))) {
                            var r, o, u, c = t.elm,
                                l = e.data.attrs || {},
                                f = t.data.attrs || {};
                            for (r in (a(f.__ob__) || s(f._v_attr_proxy)) && (f = t.data.attrs = D({}, f)), f) o = f[r], u = l[r], u !== o && ka(c, r, o, t.data.pre);
                            for (r in (te || re) && f.value !== l.value && ka(c, "value", f.value), l) i(f[r]) && (Ei(r) ? c.removeAttributeNS(ji, Pi(r)) : wi(r) || c.removeAttribute(r))
                        }
                    }

                    function ka(e, t, n, r) {
                        r || e.tagName.indexOf("-") > -1 ? xa(e, t, n) : Si(t) ? Ci(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : wi(t) ? e.setAttribute(t, xi(t, n)) : Ei(t) ? Ci(n) ? e.removeAttributeNS(ji, Pi(t)) : e.setAttributeNS(ji, t, n) : xa(e, t, n)
                    }

                    function xa(e, t, n) {
                        if (Ci(n)) e.removeAttribute(t);
                        else {
                            if (te && !ne && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                                var r = function(t) {
                                    t.stopImmediatePropagation(), e.removeEventListener("input", r)
                                };
                                e.addEventListener("input", r), e.__ieph = !0
                            }
                            e.setAttribute(t, n)
                        }
                    }
                    var Sa = {
                        create: wa,
                        update: wa
                    };

                    function ja(e, t) {
                        var n = t.elm,
                            r = t.data,
                            o = e.data;
                        if (!(i(r.staticClass) && i(r.class) && (i(o) || i(o.staticClass) && i(o.class)))) {
                            var s = Li(t),
                                u = n._transitionClasses;
                            a(u) && (s = Ai(s, Di(u))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s)
                        }
                    }
                    var Ea, Pa = {
                            create: ja,
                            update: ja
                        },
                        Ca = "__r",
                        La = "__c";

                    function Ta(e) {
                        if (a(e[Ca])) {
                            var t = te ? "change" : "input";
                            e[t] = [].concat(e[Ca], e[t] || []), delete e[Ca]
                        }
                        a(e[La]) && (e.change = [].concat(e[La], e.change || []), delete e[La])
                    }

                    function Na(e, t, n) {
                        var r = Ea;
                        return function o() {
                            var i = t.apply(null, arguments);
                            null !== i && Ia(e, o, n, r)
                        }
                    }
                    var Aa = Hn && !(ae && Number(ae[1]) <= 53);

                    function Da(e, t, n, r) {
                        if (Aa) {
                            var o = Jr,
                                i = t;
                            t = i._wrapper = function(e) {
                                if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document) return i.apply(this, arguments)
                            }
                        }
                        Ea.addEventListener(e, t, ue ? {
                            capture: n,
                            passive: r
                        } : n)
                    }

                    function Ia(e, t, n, r) {
                        (r || Ea).removeEventListener(e, t._wrapper || t, n)
                    }

                    function Ra(e, t) {
                        if (!i(e.data.on) || !i(t.data.on)) {
                            var n = t.data.on || {},
                                r = e.data.on || {};
                            Ea = t.elm || e.elm, Ta(n), Ft(n, r, Da, Ia, Na, t.context), Ea = void 0
                        }
                    }
                    var $a, Fa = {
                        create: Ra,
                        update: Ra,
                        destroy: function(e) {
                            return Ra(e, ua)
                        }
                    };

                    function Ma(e, t) {
                        if (!i(e.data.domProps) || !i(t.data.domProps)) {
                            var n, r, o = t.elm,
                                u = e.data.domProps || {},
                                c = t.data.domProps || {};
                            for (n in (a(c.__ob__) || s(c._v_attr_proxy)) && (c = t.data.domProps = D({}, c)), u) n in c || (o[n] = "");
                            for (n in c) {
                                if (r = c[n], "textContent" === n || "innerHTML" === n) {
                                    if (t.children && (t.children.length = 0), r === u[n]) continue;
                                    1 === o.childNodes.length && o.removeChild(o.childNodes[0])
                                }
                                if ("value" === n && "PROGRESS" !== o.tagName) {
                                    o._value = r;
                                    var l = i(r) ? "" : String(r);
                                    Ua(o, l) && (o.value = l)
                                } else if ("innerHTML" === n && Mi(o.tagName) && i(o.innerHTML)) {
                                    $a = $a || document.createElement("div"), $a.innerHTML = "<svg>".concat(r, "</svg>");
                                    var f = $a.firstChild;
                                    while (o.firstChild) o.removeChild(o.firstChild);
                                    while (f.firstChild) o.appendChild(f.firstChild)
                                } else if (r !== u[n]) try {
                                    o[n] = r
                                } catch (ou) {}
                            }
                        }
                    }

                    function Ua(e, t) {
                        return !e.composing && ("OPTION" === e.tagName || Ga(e, t) || Ba(e, t))
                    }

                    function Ga(e, t) {
                        var n = !0;
                        try {
                            n = document.activeElement !== e
                        } catch (ou) {}
                        return n && e.value !== t
                    }

                    function Ba(e, t) {
                        var n = e.value,
                            r = e._vModifiers;
                        if (a(r)) {
                            if (r.number) return y(n) !== y(t);
                            if (r.trim) return n.trim() !== t.trim()
                        }
                        return n !== t
                    }
                    var Va = {
                            create: Ma,
                            update: Ma
                        },
                        Ha = x((function(e) {
                            var t = {},
                                n = /;(?![^(]*\))/g,
                                r = /:(.+)/;
                            return e.split(n).forEach((function(e) {
                                if (e) {
                                    var n = e.split(r);
                                    n.length > 1 && (t[n[0].trim()] = n[1].trim())
                                }
                            })), t
                        }));

                    function Ka(e) {
                        var t = za(e.style);
                        return e.staticStyle ? D(e.staticStyle, t) : t
                    }

                    function za(e) {
                        return Array.isArray(e) ? I(e) : "string" === typeof e ? Ha(e) : e
                    }

                    function Wa(e, t) {
                        var n, r = {};
                        if (t) {
                            var o = e;
                            while (o.componentInstance) o = o.componentInstance._vnode, o && o.data && (n = Ka(o.data)) && D(r, n)
                        }(n = Ka(e.data)) && D(r, n);
                        var i = e;
                        while (i = i.parent) i.data && (n = Ka(i.data)) && D(r, n);
                        return r
                    }
                    var Ja, qa = /^--/,
                        Ya = /\s*!important$/,
                        Za = function(e, t, n) {
                            if (qa.test(t)) e.style.setProperty(t, n);
                            else if (Ya.test(n)) e.style.setProperty(C(t), n.replace(Ya, ""), "important");
                            else {
                                var r = Xa(t);
                                if (Array.isArray(n))
                                    for (var o = 0, i = n.length; o < i; o++) e.style[r] = n[o];
                                else e.style[r] = n
                            }
                        },
                        Qa = ["Webkit", "Moz", "ms"],
                        Xa = x((function(e) {
                            if (Ja = Ja || document.createElement("div").style, e = j(e), "filter" !== e && e in Ja) return e;
                            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Qa.length; n++) {
                                var r = Qa[n] + t;
                                if (r in Ja) return r
                            }
                        }));

                    function es(e, t) {
                        var n = t.data,
                            r = e.data;
                        if (!(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))) {
                            var o, s, u = t.elm,
                                c = r.staticStyle,
                                l = r.normalizedStyle || r.style || {},
                                f = c || l,
                                d = za(t.data.style) || {};
                            t.data.normalizedStyle = a(d.__ob__) ? D({}, d) : d;
                            var p = Wa(t, !0);
                            for (s in f) i(p[s]) && Za(u, s, "");
                            for (s in p) o = p[s], o !== f[s] && Za(u, s, null == o ? "" : o)
                        }
                    }
                    var ts = {
                            create: es,
                            update: es
                        },
                        ns = /\s+/;

                    function rs(e, t) {
                        if (t && (t = t.trim()))
                            if (e.classList) t.indexOf(" ") > -1 ? t.split(ns).forEach((function(t) {
                                return e.classList.add(t)
                            })) : e.classList.add(t);
                            else {
                                var n = " ".concat(e.getAttribute("class") || "", " ");
                                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                            }
                    }

                    function os(e, t) {
                        if (t && (t = t.trim()))
                            if (e.classList) t.indexOf(" ") > -1 ? t.split(ns).forEach((function(t) {
                                return e.classList.remove(t)
                            })) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
                            else {
                                var n = " ".concat(e.getAttribute("class") || "", " "),
                                    r = " " + t + " ";
                                while (n.indexOf(r) >= 0) n = n.replace(r, " ");
                                n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class")
                            }
                    }

                    function is(e) {
                        if (e) {
                            if ("object" === typeof e) {
                                var t = {};
                                return !1 !== e.css && D(t, as(e.name || "v")), D(t, e), t
                            }
                            return "string" === typeof e ? as(e) : void 0
                        }
                    }
                    var as = x((function(e) {
                            return {
                                enterClass: "".concat(e, "-enter"),
                                enterToClass: "".concat(e, "-enter-to"),
                                enterActiveClass: "".concat(e, "-enter-active"),
                                leaveClass: "".concat(e, "-leave"),
                                leaveToClass: "".concat(e, "-leave-to"),
                                leaveActiveClass: "".concat(e, "-leave-active")
                            }
                        })),
                        ss = X && !ne,
                        us = "transition",
                        cs = "animation",
                        ls = "transition",
                        fs = "transitionend",
                        ds = "animation",
                        ps = "animationend";
                    ss && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ls = "WebkitTransition", fs = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (ds = "WebkitAnimation", ps = "webkitAnimationEnd"));
                    var vs = X ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
                        return e()
                    };

                    function hs(e) {
                        vs((function() {
                            vs(e)
                        }))
                    }

                    function gs(e, t) {
                        var n = e._transitionClasses || (e._transitionClasses = []);
                        n.indexOf(t) < 0 && (n.push(t), rs(e, t))
                    }

                    function ms(e, t) {
                        e._transitionClasses && O(e._transitionClasses, t), os(e, t)
                    }

                    function ys(e, t, n) {
                        var r = _s(e, t),
                            o = r.type,
                            i = r.timeout,
                            a = r.propCount;
                        if (!o) return n();
                        var s = o === us ? fs : ps,
                            u = 0,
                            c = function() {
                                e.removeEventListener(s, l), n()
                            },
                            l = function(t) {
                                t.target === e && ++u >= a && c()
                            };
                        setTimeout((function() {
                            u < a && c()
                        }), i + 1), e.addEventListener(s, l)
                    }
                    var bs = /\b(transform|all)(,|$)/;

                    function _s(e, t) {
                        var n, r = window.getComputedStyle(e),
                            o = (r[ls + "Delay"] || "").split(", "),
                            i = (r[ls + "Duration"] || "").split(", "),
                            a = Os(o, i),
                            s = (r[ds + "Delay"] || "").split(", "),
                            u = (r[ds + "Duration"] || "").split(", "),
                            c = Os(s, u),
                            l = 0,
                            f = 0;
                        t === us ? a > 0 && (n = us, l = a, f = i.length) : t === cs ? c > 0 && (n = cs, l = c, f = u.length) : (l = Math.max(a, c), n = l > 0 ? a > c ? us : cs : null, f = n ? n === us ? i.length : u.length : 0);
                        var d = n === us && bs.test(r[ls + "Property"]);
                        return {
                            type: n,
                            timeout: l,
                            propCount: f,
                            hasTransform: d
                        }
                    }

                    function Os(e, t) {
                        while (e.length < t.length) e = e.concat(e);
                        return Math.max.apply(null, t.map((function(t, n) {
                            return ws(t) + ws(e[n])
                        })))
                    }

                    function ws(e) {
                        return 1e3 * Number(e.slice(0, -1).replace(",", "."))
                    }

                    function ks(e, t) {
                        var n = e.elm;
                        a(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
                        var r = is(e.data.transition);
                        if (!i(r) && !a(n._enterCb) && 1 === n.nodeType) {
                            var o = r.css,
                                s = r.type,
                                u = r.enterClass,
                                c = r.enterToClass,
                                d = r.enterActiveClass,
                                p = r.appearClass,
                                v = r.appearToClass,
                                h = r.appearActiveClass,
                                g = r.beforeEnter,
                                m = r.enter,
                                b = r.afterEnter,
                                _ = r.enterCancelled,
                                O = r.beforeAppear,
                                w = r.appear,
                                k = r.afterAppear,
                                x = r.appearCancelled,
                                S = r.duration,
                                j = Tr,
                                E = Tr.$vnode;
                            while (E && E.parent) j = E.context, E = E.parent;
                            var P = !j._isMounted || !e.isRootInsert;
                            if (!P || w || "" === w) {
                                var C = P && p ? p : u,
                                    L = P && h ? h : d,
                                    T = P && v ? v : c,
                                    N = P && O || g,
                                    A = P && l(w) ? w : m,
                                    D = P && k || b,
                                    I = P && x || _,
                                    R = y(f(S) ? S.enter : S);
                                0;
                                var $ = !1 !== o && !ne,
                                    F = js(A),
                                    M = n._enterCb = G((function() {
                                        $ && (ms(n, T), ms(n, L)), M.cancelled ? ($ && ms(n, C), I && I(n)) : D && D(n), n._enterCb = null
                                    }));
                                e.data.show || Mt(e, "insert", (function() {
                                    var t = n.parentNode,
                                        r = t && t._pending && t._pending[e.key];
                                    r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), A && A(n, M)
                                })), N && N(n), $ && (gs(n, C), gs(n, L), hs((function() {
                                    ms(n, C), M.cancelled || (gs(n, T), F || (Ss(R) ? setTimeout(M, R) : ys(n, s, M)))
                                }))), e.data.show && (t && t(), A && A(n, M)), $ || F || M()
                            }
                        }
                    }

                    function xs(e, t) {
                        var n = e.elm;
                        a(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
                        var r = is(e.data.transition);
                        if (i(r) || 1 !== n.nodeType) return t();
                        if (!a(n._leaveCb)) {
                            var o = r.css,
                                s = r.type,
                                u = r.leaveClass,
                                c = r.leaveToClass,
                                l = r.leaveActiveClass,
                                d = r.beforeLeave,
                                p = r.leave,
                                v = r.afterLeave,
                                h = r.leaveCancelled,
                                g = r.delayLeave,
                                m = r.duration,
                                b = !1 !== o && !ne,
                                _ = js(p),
                                O = y(f(m) ? m.leave : m);
                            0;
                            var w = n._leaveCb = G((function() {
                                n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), b && (ms(n, c), ms(n, l)), w.cancelled ? (b && ms(n, u), h && h(n)) : (t(), v && v(n)), n._leaveCb = null
                            }));
                            g ? g(k) : k()
                        }

                        function k() {
                            w.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), d && d(n), b && (gs(n, u), gs(n, l), hs((function() {
                                ms(n, u), w.cancelled || (gs(n, c), _ || (Ss(O) ? setTimeout(w, O) : ys(n, s, w)))
                            }))), p && p(n, w), b || _ || w())
                        }
                    }

                    function Ss(e) {
                        return "number" === typeof e && !isNaN(e)
                    }

                    function js(e) {
                        if (i(e)) return !1;
                        var t = e.fns;
                        return a(t) ? js(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
                    }

                    function Es(e, t) {
                        !0 !== t.data.show && ks(t)
                    }
                    var Ps = X ? {
                            create: Es,
                            activate: Es,
                            remove: function(e, t) {
                                !0 !== e.data.show ? xs(e, t) : t()
                            }
                        } : {},
                        Cs = [Sa, Pa, Fa, Va, ts, Ps],
                        Ls = Cs.concat(Oa),
                        Ts = pa({
                            nodeOps: oa,
                            modules: Ls
                        });
                    ne && document.addEventListener("selectionchange", (function() {
                        var e = document.activeElement;
                        e && e.vmodel && Ms(e, "input")
                    }));
                    var Ns = {
                        inserted: function(e, t, n, r) {
                            "select" === n.tag ? (r.elm && !r.elm._vOptions ? Mt(n, "postpatch", (function() {
                                Ns.componentUpdated(e, t, n)
                            })) : As(e, t, n.context), e._vOptions = [].map.call(e.options, Rs)) : ("textarea" === n.tag || Hi(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", $s), e.addEventListener("compositionend", Fs), e.addEventListener("change", Fs), ne && (e.vmodel = !0)))
                        },
                        componentUpdated: function(e, t, n) {
                            if ("select" === n.tag) {
                                As(e, t, n.context);
                                var r = e._vOptions,
                                    o = e._vOptions = [].map.call(e.options, Rs);
                                if (o.some((function(e, t) {
                                        return !M(e, r[t])
                                    }))) {
                                    var i = e.multiple ? t.value.some((function(e) {
                                        return Is(e, o)
                                    })) : t.value !== t.oldValue && Is(t.value, o);
                                    i && Ms(e, "change")
                                }
                            }
                        }
                    };

                    function As(e, t, n) {
                        Ds(e, t, n), (te || re) && setTimeout((function() {
                            Ds(e, t, n)
                        }), 0)
                    }

                    function Ds(e, t, n) {
                        var r = t.value,
                            o = e.multiple;
                        if (!o || Array.isArray(r)) {
                            for (var i, a, s = 0, u = e.options.length; s < u; s++)
                                if (a = e.options[s], o) i = U(r, Rs(a)) > -1, a.selected !== i && (a.selected = i);
                                else if (M(Rs(a), r)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
                            o || (e.selectedIndex = -1)
                        }
                    }

                    function Is(e, t) {
                        return t.every((function(t) {
                            return !M(t, e)
                        }))
                    }

                    function Rs(e) {
                        return "_value" in e ? e._value : e.value
                    }

                    function $s(e) {
                        e.target.composing = !0
                    }

                    function Fs(e) {
                        e.target.composing && (e.target.composing = !1, Ms(e.target, "input"))
                    }

                    function Ms(e, t) {
                        var n = document.createEvent("HTMLEvents");
                        n.initEvent(t, !0, !0), e.dispatchEvent(n)
                    }

                    function Us(e) {
                        return !e.componentInstance || e.data && e.data.transition ? e : Us(e.componentInstance._vnode)
                    }
                    var Gs = {
                            bind: function(e, t, n) {
                                var r = t.value;
                                n = Us(n);
                                var o = n.data && n.data.transition,
                                    i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                                r && o ? (n.data.show = !0, ks(n, (function() {
                                    e.style.display = i
                                }))) : e.style.display = r ? i : "none"
                            },
                            update: function(e, t, n) {
                                var r = t.value,
                                    o = t.oldValue;
                                if (!r !== !o) {
                                    n = Us(n);
                                    var i = n.data && n.data.transition;
                                    i ? (n.data.show = !0, r ? ks(n, (function() {
                                        e.style.display = e.__vOriginalDisplay
                                    })) : xs(n, (function() {
                                        e.style.display = "none"
                                    }))) : e.style.display = r ? e.__vOriginalDisplay : "none"
                                }
                            },
                            unbind: function(e, t, n, r, o) {
                                o || (e.style.display = e.__vOriginalDisplay)
                            }
                        },
                        Bs = {
                            model: Ns,
                            show: Gs
                        },
                        Vs = {
                            name: String,
                            appear: Boolean,
                            css: Boolean,
                            mode: String,
                            type: String,
                            enterClass: String,
                            leaveClass: String,
                            enterToClass: String,
                            leaveToClass: String,
                            enterActiveClass: String,
                            leaveActiveClass: String,
                            appearClass: String,
                            appearActiveClass: String,
                            appearToClass: String,
                            duration: [Number, String, Object]
                        };

                    function Hs(e) {
                        var t = e && e.componentOptions;
                        return t && t.Ctor.options.abstract ? Hs(Tn(t.children)) : e
                    }

                    function Ks(e) {
                        var t = {},
                            n = e.$options;
                        for (var r in n.propsData) t[r] = e[r];
                        var o = n._parentListeners;
                        for (var r in o) t[j(r)] = o[r];
                        return t
                    }

                    function zs(e, t) {
                        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
                            props: t.componentOptions.propsData
                        })
                    }

                    function Ws(e) {
                        while (e = e.parent)
                            if (e.data.transition) return !0
                    }

                    function Js(e, t) {
                        return t.key === e.key && t.tag === e.tag
                    }
                    var qs = function(e) {
                            return e.tag || ln(e)
                        },
                        Ys = function(e) {
                            return "show" === e.name
                        },
                        Zs = {
                            name: "transition",
                            props: Vs,
                            abstract: !0,
                            render: function(e) {
                                var t = this,
                                    n = this.$slots.default;
                                if (n && (n = n.filter(qs), n.length)) {
                                    0;
                                    var r = this.mode;
                                    0;
                                    var o = n[0];
                                    if (Ws(this.$vnode)) return o;
                                    var i = Hs(o);
                                    if (!i) return o;
                                    if (this._leaving) return zs(e, o);
                                    var a = "__transition-".concat(this._uid, "-");
                                    i.key = null == i.key ? i.isComment ? a + "comment" : a + i.tag : c(i.key) ? 0 === String(i.key).indexOf(a) ? i.key : a + i.key : i.key;
                                    var s = (i.data || (i.data = {})).transition = Ks(this),
                                        u = this._vnode,
                                        l = Hs(u);
                                    if (i.data.directives && i.data.directives.some(Ys) && (i.data.show = !0), l && l.data && !Js(i, l) && !ln(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                                        var f = l.data.transition = D({}, s);
                                        if ("out-in" === r) return this._leaving = !0, Mt(f, "afterLeave", (function() {
                                            t._leaving = !1, t.$forceUpdate()
                                        })), zs(e, o);
                                        if ("in-out" === r) {
                                            if (ln(i)) return u;
                                            var d, p = function() {
                                                d()
                                            };
                                            Mt(s, "afterEnter", p), Mt(s, "enterCancelled", p), Mt(f, "delayLeave", (function(e) {
                                                d = e
                                            }))
                                        }
                                    }
                                    return o
                                }
                            }
                        },
                        Qs = D({
                            tag: String,
                            moveClass: String
                        }, Vs);
                    delete Qs.mode;
                    var Xs = {
                        props: Qs,
                        beforeMount: function() {
                            var e = this,
                                t = this._update;
                            this._update = function(n, r) {
                                var o = Nr(e);
                                e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, o(), t.call(e, n, r)
                            }
                        },
                        render: function(e) {
                            for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], a = Ks(this), s = 0; s < o.length; s++) {
                                var u = o[s];
                                if (u.tag)
                                    if (null != u.key && 0 !== String(u.key).indexOf("__vlist")) i.push(u), n[u.key] = u, (u.data || (u.data = {})).transition = a;
                                    else;
                            }
                            if (r) {
                                var c = [],
                                    l = [];
                                for (s = 0; s < r.length; s++) {
                                    u = r[s];
                                    u.data.transition = a, u.data.pos = u.elm.getBoundingClientRect(), n[u.key] ? c.push(u) : l.push(u)
                                }
                                this.kept = e(t, null, c), this.removed = l
                            }
                            return e(t, null, i)
                        },
                        updated: function() {
                            var e = this.prevChildren,
                                t = this.moveClass || (this.name || "v") + "-move";
                            e.length && this.hasMove(e[0].elm, t) && (e.forEach(eu), e.forEach(tu), e.forEach(nu), this._reflow = document.body.offsetHeight, e.forEach((function(e) {
                                if (e.data.moved) {
                                    var n = e.elm,
                                        r = n.style;
                                    gs(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(fs, n._moveCb = function e(r) {
                                        r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(fs, e), n._moveCb = null, ms(n, t))
                                    })
                                }
                            })))
                        },
                        methods: {
                            hasMove: function(e, t) {
                                if (!ss) return !1;
                                if (this._hasMove) return this._hasMove;
                                var n = e.cloneNode();
                                e._transitionClasses && e._transitionClasses.forEach((function(e) {
                                    os(n, e)
                                })), rs(n, t), n.style.display = "none", this.$el.appendChild(n);
                                var r = _s(n);
                                return this.$el.removeChild(n), this._hasMove = r.hasTransform
                            }
                        }
                    };

                    function eu(e) {
                        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
                    }

                    function tu(e) {
                        e.data.newPos = e.elm.getBoundingClientRect()
                    }

                    function nu(e) {
                        var t = e.data.pos,
                            n = e.data.newPos,
                            r = t.left - n.left,
                            o = t.top - n.top;
                        if (r || o) {
                            e.data.moved = !0;
                            var i = e.elm.style;
                            i.transform = i.WebkitTransform = "translate(".concat(r, "px,").concat(o, "px)"), i.transitionDuration = "0s"
                        }
                    }
                    var ru = {
                        Transition: Zs,
                        TransitionGroup: Xs
                    };
                    oi.config.mustUseProp = Oi, oi.config.isReservedTag = Ui, oi.config.isReservedAttr = bi, oi.config.getTagNamespace = Gi, oi.config.isUnknownElement = Vi, D(oi.options.directives, Bs), D(oi.options.components, ru), oi.prototype.__patch__ = X ? Ts : R, oi.prototype.$mount = function(e, t) {
                        return e = e && X ? Ki(e) : void 0, Ir(this, e, t)
                    }, X && setTimeout((function() {
                        z.devtools && fe && fe.emit("init", oi)
                    }), 0)
                }.call(this, n("c8ba"))
        },
        "2b1d": function(e) {
            e.exports = JSON.parse('{"label.gg":"Email or phone","label.gg_dim":"Email/phone","label.email":"Email","label.email_dim":"Email","label.phone_number":"Phone Number","label.phone_number_dim":"Phone","label.zing":"Zing ID","label.zing_dim":"ZingID","label.apple":"Apple","label.apple_dim":"Apple","label.google":"Google","label.google_dim":"Google","label.facebook":"Facebook","label.facebook_dim":"Facebook","label.guest":"Play now","label.guest_dim":"Play now","label.guest_email":"Play now","label.guest_email_dim":"Play now","label.guest_phone_number":"Play now","label.guest_phone_number_dim":"Play now","label.protected_guest":"Play now","label.protected_guest_dim":"Play now","label.role_id":"Role ID","label.role_id_dim":"Role ID","label.error":"Error","title":"Log in","subtitle":"One account for all VNGGames","error.errorInput":"Incorrect configuration.","button.ok":"ok","callbackError":"Authenticate failed.","or":"Or use","orByGame":"Or use Play Now to log in","gameList.title":"Log In","gameList.subtitle":"Select a game and log in with your \\"Play Now\\" account","gameList.subtitle.mobile":"Log in with your \\"Play Now\\" account","gameList.placeholder":"Find the game you are playing","gameList.searchNotFound":"No game found that you are looking for","button.back":"Back","button.continue":"Continue","AccountCenter":"Account Center","Logout":"Logout","Territory":"Territory","button.login":"Login","userProfile.gameNotPlay":"You haven\'t played this game yet or don\'t have a character in the game.","userProfile.loginSource":"Login source from {{loginMethod}} account of \\"{{gameName}}\\""}')
        },
        "2ba4": function(e, t, n) {
            "use strict";
            var r = n("40d5"),
                o = Function.prototype,
                i = o.apply,
                a = o.call;
            e.exports = "object" == typeof Reflect && Reflect.apply || (r ? a.bind(i) : function() {
                return a.apply(i, arguments)
            })
        },
        "2d00": function(e, t, n) {
            "use strict";
            var r, o, i = n("da84"),
                a = n("342f"),
                s = i.process,
                u = i.Deno,
                c = s && s.versions || u && u.version,
                l = c && c.v8;
            l && (r = l.split("."), o = r[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && a && (r = a.match(/Edge\/(\d+)/), (!r || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/), r && (o = +r[1]))), e.exports = o
        },
        "342f": function(e, t, n) {
            "use strict";
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        },
        3511: function(e, t, n) {
            "use strict";
            var r = TypeError,
                o = 9007199254740991;
            e.exports = function(e) {
                if (e > o) throw r("Maximum allowed index exceeded");
                return e
            }
        },
        "37e8": function(e, t, n) {
            "use strict";
            var r = n("83ab"),
                o = n("aed9"),
                i = n("9bf2"),
                a = n("825a"),
                s = n("fc6a"),
                u = n("df75");
            t.f = r && !o ? Object.defineProperties : function(e, t) {
                a(e);
                var n, r = s(t),
                    o = u(t),
                    c = o.length,
                    l = 0;
                while (c > l) i.f(e, n = o[l++], r[n]);
                return e
            }
        },
        "3a34": function(e, t, n) {
            "use strict";
            var r = n("83ab"),
                o = n("e8b5"),
                i = TypeError,
                a = Object.getOwnPropertyDescriptor,
                s = r && ! function() {
                    if (void 0 !== this) return !0;
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).length = 1
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }();
            e.exports = s ? function(e, t) {
                if (o(e) && !a(e, "length").writable) throw new i("Cannot set read only .length");
                return e.length = t
            } : function(e, t) {
                return e.length = t
            }
        },
        "3a9b": function(e, t, n) {
            "use strict";
            var r = n("e330");
            e.exports = r({}.isPrototypeOf)
        },
        "3bbe": function(e, t, n) {
            "use strict";
            var r = n("1626"),
                o = String,
                i = TypeError;
            e.exports = function(e) {
                if ("object" == typeof e || r(e)) return e;
                throw new i("Can't set " + o(e) + " as a prototype")
            }
        },
        "3ca3": function(e, t, n) {
            "use strict";
            var r = n("6547").charAt,
                o = n("577e"),
                i = n("69f3"),
                a = n("c6d2"),
                s = n("4754"),
                u = "String Iterator",
                c = i.set,
                l = i.getterFor(u);
            a(String, "String", (function(e) {
                c(this, {
                    type: u,
                    string: o(e),
                    index: 0
                })
            }), (function() {
                var e, t = l(this),
                    n = t.string,
                    o = t.index;
                return o >= n.length ? s(void 0, !0) : (e = r(n, o), t.index += e.length, s(e, !1))
            }))
        },
        "3f8c": function(e, t, n) {
            "use strict";
            e.exports = {}
        },
        "40d5": function(e, t, n) {
            "use strict";
            var r = n("d039");
            e.exports = !r((function() {
                var e = function() {}.bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }))
        },
        4360: function(e, t, n) {
            "use strict";
            var r = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.dispatch = void 0, n("d3b7"), n("159b"), n("b64b");
            var o = r(n("5530")),
                i = r(n("48e5")),
                a = new i.default({
                    state: {
                        loadingFunc: {},
                        error: null
                    },
                    mutations: {
                        ADD_LOADING_FUNCTION: function(e, t) {
                            e.loadingFunc = (0, o.default)((0, o.default)({}, e.loadingFunc), t)
                        },
                        ADD_ERROR: function(e, t) {
                            e.error = (0, o.default)((0, o.default)({}, e.error), t)
                        }
                    },
                    actions: {
                        addLoadingFunc: function(e, t) {
                            var n = e.commit;
                            n("ADD_LOADING_FUNCTION", t)
                        },
                        addError: function(e, t) {
                            var n = e.commit;
                            n("ADD_ERROR", t)
                        }
                    }
                }),
                s = ["pageshow", "pagehide", "load"];
            a.subscribe((function(e) {
                var t = e.loadingFunc,
                    n = function() {
                        Object.keys(t).forEach((function(e) {
                            var n = t[e];
                            ggWidgetUtil.isFunction(n) && n()
                        }))
                    };
                s.forEach((function(e) {
                    window.removeEventListener(e, n)
                })), s.forEach((function(e) {
                    window.addEventListener(e, n)
                }))
            })), a.subscribe((function(e) {
                var t = e.error;
                if (!ggWidgetUtil.empty(t)) {
                    var n = ggWidgetUtil.get(window.widgetSdkConfig, "config.onError");
                    ggWidgetUtil.isFunction(n) && n(t), console.error({
                        error: t
                    })
                }
            }));
            var u = function() {
                a.dispatch.apply(a, arguments)
            };
            t.dispatch = u
        },
        "44ad": function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = n("d039"),
                i = n("c6b6"),
                a = Object,
                s = r("".split);
            e.exports = o((function() {
                return !a("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" === i(e) ? s(e, "") : a(e)
            } : a
        },
        "44d2": function(e, t, n) {
            "use strict";
            var r = n("b622"),
                o = n("7c73"),
                i = n("9bf2").f,
                a = r("unscopables"),
                s = Array.prototype;
            void 0 === s[a] && i(s, a, {
                configurable: !0,
                value: o(null)
            }), e.exports = function(e) {
                s[a][e] = !0
            }
        },
        "44e7": function(e, t, n) {
            "use strict";
            var r = n("861d"),
                o = n("c6b6"),
                i = n("b622"),
                a = i("match");
            e.exports = function(e) {
                var t;
                return r(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" === o(e))
            }
        },
        4625: function(e, t, n) {
            "use strict";
            var r = n("c6b6"),
                o = n("e330");
            e.exports = function(e) {
                if ("Function" === r(e)) return o(e)
            }
        },
        4754: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return {
                    value: e,
                    done: t
                }
            }
        },
        "485a": function(e, t, n) {
            "use strict";
            var r = n("c65b"),
                o = n("1626"),
                i = n("861d"),
                a = TypeError;
            e.exports = function(e, t) {
                var n, s;
                if ("string" === t && o(n = e.toString) && !i(s = r(n, e))) return s;
                if (o(n = e.valueOf) && !i(s = r(n, e))) return s;
                if ("string" !== t && o(n = e.toString) && !i(s = r(n, e))) return s;
                throw new a("Can't convert object to primitive value")
            }
        },
        "48e5": function(e, t, n) {
            "use strict";
            var r = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("14d9"), n("d3b7"), n("159b");
            var o = r(n("d4ec")),
                i = r(n("bee2")),
                a = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, o.default)(this, e), this.state = t.state || {}, this.mutations = t.mutations || {}, this.actions = t.actions || {}, this.subscribers = [], this.commit = this.commit.bind(this)
                    }
                    return (0, i.default)(e, [{
                        key: "subscribe",
                        value: function(e) {
                            this.subscribers.push(e)
                        }
                    }, {
                        key: "commit",
                        value: function(e, t) {
                            "function" === typeof this.mutations[e] && (this.mutations[e](this.state, t), this.notifySubscribers())
                        }
                    }, {
                        key: "dispatch",
                        value: function(e, t) {
                            "function" === typeof this.actions[e] && this.actions[e]({
                                commit: this.commit
                            }, t)
                        }
                    }, {
                        key: "notifySubscribers",
                        value: function() {
                            var e = this;
                            this.subscribers.forEach((function(t) {
                                t(e.state)
                            }))
                        }
                    }]), e
                }();
            t.default = a, e.exports = t.default
        },
        "4d64": function(e, t, n) {
            "use strict";
            var r = n("fc6a"),
                o = n("23cb"),
                i = n("07fa"),
                a = function(e) {
                    return function(t, n, a) {
                        var s, u = r(t),
                            c = i(u),
                            l = o(a, c);
                        if (e && n !== n) {
                            while (c > l)
                                if (s = u[l++], s !== s) return !0
                        } else
                            for (; c > l; l++)
                                if ((e || l in u) && u[l] === n) return e || l || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: a(!0),
                indexOf: a(!1)
            }
        },
        "4ea4": function(e, t) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = n, e.exports.__esModule = !0, e.exports["default"] = e.exports
        },
        "50c4": function(e, t, n) {
            "use strict";
            var r = n("5926"),
                o = Math.min;
            e.exports = function(e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0
            }
        },
        "53ca": function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        5530: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return i
            }));
            var r = n("ade3");

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        Object(r["default"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
        },
        5692: function(e, t, n) {
            "use strict";
            var r = n("c430"),
                o = n("c6cd");
            (e.exports = function(e, t) {
                return o[e] || (o[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.34.0",
                mode: r ? "pure" : "global",
                copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        "56ef": function(e, t, n) {
            "use strict";
            var r = n("d066"),
                o = n("e330"),
                i = n("241c"),
                a = n("7418"),
                s = n("825a"),
                u = o([].concat);
            e.exports = r("Reflect", "ownKeys") || function(e) {
                var t = i.f(s(e)),
                    n = a.f;
                return n ? u(t, n(e)) : t
            }
        },
        "577e": function(e, t, n) {
            "use strict";
            var r = n("f5df"),
                o = String;
            e.exports = function(e) {
                if ("Symbol" === r(e)) throw new TypeError("Cannot convert a Symbol value to a string");
                return o(e)
            }
        },
        5926: function(e, t, n) {
            "use strict";
            var r = n("b42e");
            e.exports = function(e) {
                var t = +e;
                return t !== t || 0 === t ? 0 : r(t)
            }
        },
        "59ed": function(e, t, n) {
            "use strict";
            var r = n("1626"),
                o = n("0d51"),
                i = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw new i(o(e) + " is not a function")
            }
        },
        "5a34": function(e, t, n) {
            "use strict";
            var r = n("44e7"),
                o = TypeError;
            e.exports = function(e) {
                if (r(e)) throw new o("The method doesn't accept regular expressions");
                return e
            }
        },
        "5c6c": function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        "5e77": function(e, t, n) {
            "use strict";
            var r = n("83ab"),
                o = n("1a2d"),
                i = Function.prototype,
                a = r && Object.getOwnPropertyDescriptor,
                s = o(i, "name"),
                u = s && "something" === function() {}.name,
                c = s && (!r || r && a(i, "name").configurable);
            e.exports = {
                EXISTS: s,
                PROPER: u,
                CONFIGURABLE: c
            }
        },
        "5f34": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "changeLanguage", (function() {
                return Re
            })), n.d(t, "createInstance", (function() {
                return Le
            })), n.d(t, "default", (function() {
                return Ce
            })), n.d(t, "dir", (function() {
                return Te
            })), n.d(t, "exists", (function() {
                return Me
            })), n.d(t, "getFixedT", (function() {
                return $e
            })), n.d(t, "hasLoadedNamespace", (function() {
                return Ge
            })), n.d(t, "init", (function() {
                return Ne
            })), n.d(t, "loadLanguages", (function() {
                return Ve
            })), n.d(t, "loadNamespaces", (function() {
                return Be
            })), n.d(t, "loadResources", (function() {
                return Ae
            })), n.d(t, "reloadResources", (function() {
                return De
            })), n.d(t, "setDefaultNamespace", (function() {
                return Ue
            })), n.d(t, "t", (function() {
                return Fe
            })), n.d(t, "use", (function() {
                return Ie
            }));
            var r = n("53ca"),
                o = n("d4ec"),
                i = n("bee2");

            function a(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function s(e, t) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, s(e, t)
            }

            function u(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && s(e, t)
            }

            function c(e, t) {
                if (t && ("object" === Object(r["a"])(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return a(e)
            }

            function l(e) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, l(e)
            }
            var f = n("ade3");

            function d(e) {
                if (Array.isArray(e)) return e
            }
            var p = n("db90"),
                v = n("06c5");

            function h() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function g(e) {
                return d(e) || Object(p["a"])(e) || Object(v["a"])(e) || h()
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        Object(f["default"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = {
                    type: "logger",
                    log: function(e) {
                        this.output("log", e)
                    },
                    warn: function(e) {
                        this.output("warn", e)
                    },
                    error: function(e) {
                        this.output("error", e)
                    },
                    output: function(e, t) {
                        console && console[e] && console[e].apply(console, t)
                    }
                },
                _ = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Object(o["default"])(this, e), this.init(t, n)
                    }
                    return Object(i["default"])(e, [{
                        key: "init",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.prefix = t.prefix || "i18next:", this.logger = e || b, this.options = t, this.debug = t.debug
                        }
                    }, {
                        key: "setDebug",
                        value: function(e) {
                            this.debug = e
                        }
                    }, {
                        key: "log",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "log", "", !0)
                        }
                    }, {
                        key: "warn",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "warn", "", !0)
                        }
                    }, {
                        key: "error",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "error", "")
                        }
                    }, {
                        key: "deprecate",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                        }
                    }, {
                        key: "forward",
                        value: function(e, t, n, r) {
                            return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
                        }
                    }, {
                        key: "create",
                        value: function(t) {
                            return new e(this.logger, y(y({}, {
                                prefix: "".concat(this.prefix, ":").concat(t, ":")
                            }), this.options))
                        }
                    }, {
                        key: "clone",
                        value: function(t) {
                            return t = t || this.options, t.prefix = t.prefix || this.prefix, new e(this.logger, t)
                        }
                    }]), e
                }(),
                O = new _,
                w = function() {
                    function e() {
                        Object(o["default"])(this, e), this.observers = {}
                    }
                    return Object(i["default"])(e, [{
                        key: "on",
                        value: function(e, t) {
                            var n = this;
                            return e.split(" ").forEach((function(e) {
                                n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                            })), this
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                                return e !== t
                            })) : delete this.observers[e])
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            if (this.observers[e]) {
                                var o = [].concat(this.observers[e]);
                                o.forEach((function(e) {
                                    e.apply(void 0, n)
                                }))
                            }
                            if (this.observers["*"]) {
                                var i = [].concat(this.observers["*"]);
                                i.forEach((function(t) {
                                    t.apply(t, [e].concat(n))
                                }))
                            }
                        }
                    }]), e
                }();

            function k() {
                var e, t, n = new Promise((function(n, r) {
                    e = n, t = r
                }));
                return n.resolve = e, n.reject = t, n
            }

            function x(e) {
                return null == e ? "" : "" + e
            }

            function S(e, t, n) {
                e.forEach((function(e) {
                    t[e] && (n[e] = t[e])
                }))
            }

            function j(e, t, n) {
                function r(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                }

                function o() {
                    return !e || "string" === typeof e
                }
                var i = "string" !== typeof t ? [].concat(t) : t.split(".");
                while (i.length > 1) {
                    if (o()) return {};
                    var a = r(i.shift());
                    !e[a] && n && (e[a] = new n), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {}
                }
                return o() ? {} : {
                    obj: e,
                    k: r(i.shift())
                }
            }

            function E(e, t, n) {
                var r = j(e, t, Object),
                    o = r.obj,
                    i = r.k;
                o[i] = n
            }

            function P(e, t, n, r) {
                var o = j(e, t, Object),
                    i = o.obj,
                    a = o.k;
                i[a] = i[a] || [], r && (i[a] = i[a].concat(n)), r || i[a].push(n)
            }

            function C(e, t) {
                var n = j(e, t),
                    r = n.obj,
                    o = n.k;
                if (r) return r[o]
            }

            function L(e, t, n) {
                var r = C(e, n);
                return void 0 !== r ? r : C(t, n)
            }

            function T(e, t, n) {
                for (var r in t) "__proto__" !== r && "constructor" !== r && (r in e ? "string" === typeof e[r] || e[r] instanceof String || "string" === typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : T(e[r], t[r], n) : e[r] = t[r]);
                return e
            }

            function N(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var A = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function D(e) {
                return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                    return A[e]
                })) : e
            }
            var I = "undefined" !== typeof window && window.navigator && "undefined" === typeof window.navigator.userAgentData && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
                R = [" ", ",", "?", "!", ";"];

            function $(e, t, n) {
                t = t || "", n = n || "";
                var r = R.filter((function(e) {
                    return t.indexOf(e) < 0 && n.indexOf(e) < 0
                }));
                if (0 === r.length) return !0;
                var o = new RegExp("(".concat(r.map((function(e) {
                        return "?" === e ? "\\?" : e
                    })).join("|"), ")")),
                    i = !o.test(e);
                if (!i) {
                    var a = e.indexOf(n);
                    a > 0 && !o.test(e.substring(0, a)) && (i = !0)
                }
                return i
            }

            function F(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                if (e) {
                    if (e[t]) return e[t];
                    for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
                        if (!o) return;
                        if ("string" === typeof o[r[i]] && i + 1 < r.length) return;
                        if (void 0 === o[r[i]]) {
                            var a = 2,
                                s = r.slice(i, i + a).join(n),
                                u = o[s];
                            while (void 0 === u && r.length > i + a) a++, s = r.slice(i, i + a).join(n), u = o[s];
                            if (void 0 === u) return;
                            if (null === u) return null;
                            if (t.endsWith(s)) {
                                if ("string" === typeof u) return u;
                                if (s && "string" === typeof u[s]) return u[s]
                            }
                            var c = r.slice(i + a).join(n);
                            return c ? F(u, c, n) : void 0
                        }
                        o = o[r[i]]
                    }
                    return o
                }
            }

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        Object(f["default"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function G(e) {
                var t = B();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }

            function B() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var V = function(e) {
                    u(n, e);
                    var t = G(n);

                    function n(e) {
                        var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        return Object(o["default"])(this, n), r = t.call(this), I && w.call(a(r)), r.data = e || {}, r.options = i, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), void 0 === r.options.ignoreJSONStructure && (r.options.ignoreJSONStructure = !0), r
                    }
                    return Object(i["default"])(n, [{
                        key: "addNamespaces",
                        value: function(e) {
                            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                        }
                    }, {
                        key: "removeNamespaces",
                        value: function(e) {
                            var t = this.options.ns.indexOf(e);
                            t > -1 && this.options.ns.splice(t, 1)
                        }
                    }, {
                        key: "getResource",
                        value: function(e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                                i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure,
                                a = [e, t];
                            n && "string" !== typeof n && (a = a.concat(n)), n && "string" === typeof n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (a = e.split("."));
                            var s = C(this.data, a);
                            return s || !i || "string" !== typeof n ? s : F(this.data && this.data[e] && this.data[e][t], n, o)
                        }
                    }, {
                        key: "addResource",
                        value: function(e, t, n, r) {
                            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                    silent: !1
                                },
                                i = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
                                a = [e, t];
                            n && (a = a.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (a = e.split("."), r = t, t = a[1]), this.addNamespaces(t), E(this.data, a, r), o.silent || this.emit("added", e, t, n, r)
                        }
                    }, {
                        key: "addResources",
                        value: function(e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                silent: !1
                            };
                            for (var o in n) "string" !== typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
                                silent: !0
                            });
                            r.silent || this.emit("added", e, t, n)
                        }
                    }, {
                        key: "addResourceBundle",
                        value: function(e, t, n, r, o) {
                            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                    silent: !1
                                },
                                a = [e, t];
                            e.indexOf(".") > -1 && (a = e.split("."), r = n, n = t, t = a[1]), this.addNamespaces(t);
                            var s = C(this.data, a) || {};
                            r ? T(s, n, o) : s = U(U({}, s), n), E(this.data, a, s), i.silent || this.emit("added", e, t, n)
                        }
                    }, {
                        key: "removeResourceBundle",
                        value: function(e, t) {
                            this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                        }
                    }, {
                        key: "hasResourceBundle",
                        value: function(e, t) {
                            return void 0 !== this.getResource(e, t)
                        }
                    }, {
                        key: "getResourceBundle",
                        value: function(e, t) {
                            return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? U(U({}, {}), this.getResource(e, t)) : this.getResource(e, t)
                        }
                    }, {
                        key: "getDataByLanguage",
                        value: function(e) {
                            return this.data[e]
                        }
                    }, {
                        key: "hasLanguageSomeTranslations",
                        value: function(e) {
                            var t = this.getDataByLanguage(e),
                                n = t && Object.keys(t) || [];
                            return !!n.find((function(e) {
                                return t[e] && Object.keys(t[e]).length > 0
                            }))
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return this.data
                        }
                    }]), n
                }(w),
                H = {
                    processors: {},
                    addPostProcessor: function(e) {
                        this.processors[e.name] = e
                    },
                    handle: function(e, t, n, r, o) {
                        var i = this;
                        return e.forEach((function(e) {
                            i.processors[e] && (t = i.processors[e].process(t, n, r, o))
                        })), t
                    }
                };

            function K(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(Object(n), !0).forEach((function(t) {
                        Object(f["default"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function W(e) {
                var t = J();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }

            function J() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var q = {},
                Y = function(e) {
                    u(n, e);
                    var t = W(n);

                    function n(e) {
                        var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object(o["default"])(this, n), r = t.call(this), I && w.call(a(r)), S(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, a(r)), r.options = i, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), r.logger = O.create("translator"), r
                    }
                    return Object(i["default"])(n, [{
                        key: "changeLanguage",
                        value: function(e) {
                            e && (this.language = e)
                        }
                    }, {
                        key: "exists",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                interpolation: {}
                            };
                            if (void 0 === e || null === e) return !1;
                            var n = this.resolve(e, t);
                            return n && void 0 !== n.res
                        }
                    }, {
                        key: "extractFromKey",
                        value: function(e, t) {
                            var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                            void 0 === n && (n = ":");
                            var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                o = t.ns || this.options.defaultNS || [],
                                i = n && e.indexOf(n) > -1,
                                a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !$(e, n, r);
                            if (i && !a) {
                                var s = e.match(this.interpolator.nestingRegexp);
                                if (s && s.length > 0) return {
                                    key: e,
                                    namespaces: o
                                };
                                var u = e.split(n);
                                (n !== r || n === r && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), e = u.join(r)
                            }
                            return "string" === typeof o && (o = [o]), {
                                key: e,
                                namespaces: o
                            }
                        }
                    }, {
                        key: "translate",
                        value: function(e, t, o) {
                            var i = this;
                            if ("object" !== Object(r["a"])(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), "object" === Object(r["a"])(t) && (t = z({}, t)), t || (t = {}), void 0 === e || null === e) return "";
                            Array.isArray(e) || (e = [String(e)]);
                            var a = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
                                s = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                u = this.extractFromKey(e[e.length - 1], t),
                                c = u.key,
                                l = u.namespaces,
                                f = l[l.length - 1],
                                d = t.lng || this.language,
                                p = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                            if (d && "cimode" === d.toLowerCase()) {
                                if (p) {
                                    var v = t.nsSeparator || this.options.nsSeparator;
                                    return a ? {
                                        res: "".concat(f).concat(v).concat(c),
                                        usedKey: c,
                                        exactUsedKey: c,
                                        usedLng: d,
                                        usedNS: f
                                    } : "".concat(f).concat(v).concat(c)
                                }
                                return a ? {
                                    res: c,
                                    usedKey: c,
                                    exactUsedKey: c,
                                    usedLng: d,
                                    usedNS: f
                                } : c
                            }
                            var h = this.resolve(e, t),
                                g = h && h.res,
                                m = h && h.usedKey || c,
                                y = h && h.exactUsedKey || c,
                                b = Object.prototype.toString.apply(g),
                                _ = ["[object Number]", "[object Function]", "[object RegExp]"],
                                O = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                                w = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                k = "string" !== typeof g && "boolean" !== typeof g && "number" !== typeof g;
                            if (w && g && k && _.indexOf(b) < 0 && ("string" !== typeof O || "[object Array]" !== b)) {
                                if (!t.returnObjects && !this.options.returnObjects) {
                                    this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                                    var x = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, g, z(z({}, t), {}, {
                                        ns: l
                                    })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                                    return a ? (h.res = x, h) : x
                                }
                                if (s) {
                                    var S = "[object Array]" === b,
                                        j = S ? [] : {},
                                        E = S ? y : m;
                                    for (var P in g)
                                        if (Object.prototype.hasOwnProperty.call(g, P)) {
                                            var C = "".concat(E).concat(s).concat(P);
                                            j[P] = this.translate(C, z(z({}, t), {
                                                joinArrays: !1,
                                                ns: l
                                            })), j[P] === C && (j[P] = g[P])
                                        }
                                    g = j
                                }
                            } else if (w && "string" === typeof O && "[object Array]" === b) g = g.join(O), g && (g = this.extendTranslation(g, e, t, o));
                            else {
                                var L = !1,
                                    T = !1,
                                    N = void 0 !== t.count && "string" !== typeof t.count,
                                    A = n.hasDefaultValue(t),
                                    D = N ? this.pluralResolver.getSuffix(d, t.count, t) : "",
                                    I = t["defaultValue".concat(D)] || t.defaultValue;
                                !this.isValidLookup(g) && A && (L = !0, g = I), this.isValidLookup(g) || (T = !0, g = c);
                                var R = t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                                    $ = R && T ? void 0 : g,
                                    F = A && I !== g && this.options.updateMissing;
                                if (T || L || F) {
                                    if (this.logger.log(F ? "updateKey" : "missingKey", d, f, c, F ? I : g), s) {
                                        var M = this.resolve(c, z(z({}, t), {}, {
                                            keySeparator: !1
                                        }));
                                        M && M.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                    }
                                    var U = [],
                                        G = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                                    if ("fallback" === this.options.saveMissingTo && G && G[0])
                                        for (var B = 0; B < G.length; B++) U.push(G[B]);
                                    else "all" === this.options.saveMissingTo ? U = this.languageUtils.toResolveHierarchy(t.lng || this.language) : U.push(t.lng || this.language);
                                    var V = function(e, n, r) {
                                        var o = A && r !== g ? r : $;
                                        i.options.missingKeyHandler ? i.options.missingKeyHandler(e, f, n, o, F, t) : i.backendConnector && i.backendConnector.saveMissing && i.backendConnector.saveMissing(e, f, n, o, F, t), i.emit("missingKey", e, f, n, g)
                                    };
                                    this.options.saveMissing && (this.options.saveMissingPlurals && N ? U.forEach((function(e) {
                                        i.pluralResolver.getSuffixes(e, t).forEach((function(n) {
                                            V([e], c + n, t["defaultValue".concat(n)] || I)
                                        }))
                                    })) : V(U, c, I))
                                }
                                g = this.extendTranslation(g, e, t, h, o), T && g === c && this.options.appendNamespaceToMissingKey && (g = "".concat(f, ":").concat(c)), (T || L) && this.options.parseMissingKeyHandler && (g = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(f, ":").concat(c) : c, L ? g : void 0) : this.options.parseMissingKeyHandler(g))
                            }
                            return a ? (h.res = g, h) : g
                        }
                    }, {
                        key: "extendTranslation",
                        value: function(e, t, n, r, o) {
                            var i = this;
                            if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, z(z({}, this.options.interpolation.defaultVariables), n), r.usedLng, r.usedNS, r.usedKey, {
                                resolved: r
                            });
                            else if (!n.skipInterpolation) {
                                n.interpolation && this.interpolator.init(z(z({}, n), {
                                    interpolation: z(z({}, this.options.interpolation), n.interpolation)
                                }));
                                var a, s = "string" === typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                                if (s) {
                                    var u = e.match(this.interpolator.nestingRegexp);
                                    a = u && u.length
                                }
                                var c = n.replace && "string" !== typeof n.replace ? n.replace : n;
                                if (this.options.interpolation.defaultVariables && (c = z(z({}, this.options.interpolation.defaultVariables), c)), e = this.interpolator.interpolate(e, c, n.lng || this.language, n), s) {
                                    var l = e.match(this.interpolator.nestingRegexp),
                                        f = l && l.length;
                                    a < f && (n.nest = !1)
                                }!n.lng && "v1" !== this.options.compatibilityAPI && r && r.res && (n.lng = r.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                                    for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                                    return o && o[0] === r[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])), null) : i.translate.apply(i, r.concat([t]))
                                }), n)), n.interpolation && this.interpolator.reset()
                            }
                            var d = n.postProcess || this.options.postProcess,
                                p = "string" === typeof d ? [d] : d;
                            return void 0 !== e && null !== e && p && p.length && !1 !== n.applyPostProcessor && (e = H.handle(p, e, t, this.options && this.options.postProcessPassResolved ? z({
                                i18nResolved: r
                            }, n) : n, this)), e
                        }
                    }, {
                        key: "resolve",
                        value: function(e) {
                            var t, n, r, o, i, a = this,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return "string" === typeof e && (e = [e]), e.forEach((function(e) {
                                if (!a.isValidLookup(t)) {
                                    var u = a.extractFromKey(e, s),
                                        c = u.key;
                                    n = c;
                                    var l = u.namespaces;
                                    a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                                    var f = void 0 !== s.count && "string" !== typeof s.count,
                                        d = f && !s.ordinal && 0 === s.count && a.pluralResolver.shouldUseIntlApi(),
                                        p = void 0 !== s.context && ("string" === typeof s.context || "number" === typeof s.context) && "" !== s.context,
                                        v = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                    l.forEach((function(e) {
                                        a.isValidLookup(t) || (i = e, !q["".concat(v[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (q["".concat(v[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(v.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((function(n) {
                                            if (!a.isValidLookup(t)) {
                                                o = n;
                                                var i, u = [c];
                                                if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(u, c, n, e, s);
                                                else {
                                                    var l;
                                                    f && (l = a.pluralResolver.getSuffix(n, s.count, s));
                                                    var v = "".concat(a.options.pluralSeparator, "zero");
                                                    if (f && (u.push(c + l), d && u.push(c + v)), p) {
                                                        var h = "".concat(c).concat(a.options.contextSeparator).concat(s.context);
                                                        u.push(h), f && (u.push(h + l), d && u.push(h + v))
                                                    }
                                                }
                                                while (i = u.pop()) a.isValidLookup(t) || (r = i, t = a.getResource(n, e, i, s))
                                            }
                                        })))
                                    }))
                                }
                            })), {
                                res: t,
                                usedKey: n,
                                exactUsedKey: r,
                                usedLng: o,
                                usedNS: i
                            }
                        }
                    }, {
                        key: "isValidLookup",
                        value: function(e) {
                            return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                        }
                    }, {
                        key: "getResource",
                        value: function(e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                        }
                    }], [{
                        key: "hasDefaultValue",
                        value: function(e) {
                            var t = "defaultValue";
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
                            return !1
                        }
                    }]), n
                }(w);

            function Z(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            var Q = function() {
                    function e(t) {
                        Object(o["default"])(this, e), this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = O.create("languageUtils")
                    }
                    return Object(i["default"])(e, [{
                        key: "getScriptPartFromCode",
                        value: function(e) {
                            if (!e || e.indexOf("-") < 0) return null;
                            var t = e.split("-");
                            return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                        }
                    }, {
                        key: "getLanguagePartFromCode",
                        value: function(e) {
                            if (!e || e.indexOf("-") < 0) return e;
                            var t = e.split("-");
                            return this.formatLanguageCode(t[0])
                        }
                    }, {
                        key: "formatLanguageCode",
                        value: function(e) {
                            if ("string" === typeof e && e.indexOf("-") > -1) {
                                var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                    n = e.split("-");
                                return this.options.lowerCaseLng ? n = n.map((function(e) {
                                    return e.toLowerCase()
                                })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Z(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Z(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Z(n[2].toLowerCase()))), n.join("-")
                            }
                            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                        }
                    }, {
                        key: "isSupportedCode",
                        value: function(e) {
                            return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                        }
                    }, {
                        key: "getBestMatchFromCodes",
                        value: function(e) {
                            var t, n = this;
                            return e ? (e.forEach((function(e) {
                                if (!t) {
                                    var r = n.formatLanguageCode(e);
                                    n.options.supportedLngs && !n.isSupportedCode(r) || (t = r)
                                }
                            })), !t && this.options.supportedLngs && e.forEach((function(e) {
                                if (!t) {
                                    var r = n.getLanguagePartFromCode(e);
                                    if (n.isSupportedCode(r)) return t = r;
                                    t = n.options.supportedLngs.find((function(e) {
                                        return e === r ? e : e.indexOf("-") < 0 && r.indexOf("-") < 0 ? void 0 : 0 === e.indexOf(r) ? e : void 0
                                    }))
                                }
                            })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                        }
                    }, {
                        key: "getFallbackCodes",
                        value: function(e, t) {
                            if (!e) return [];
                            if ("function" === typeof e && (e = e(t)), "string" === typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                            if (!t) return e["default"] || [];
                            var n = e[t];
                            return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e["default"]), n || []
                        }
                    }, {
                        key: "toResolveHierarchy",
                        value: function(e, t) {
                            var n = this,
                                r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                o = [],
                                i = function(e) {
                                    e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                                };
                            return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" === typeof e && i(this.formatLanguageCode(e)), r.forEach((function(e) {
                                o.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                            })), o
                        }
                    }]), e
                }(),
                X = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                ee = {
                    1: function(e) {
                        return Number(e > 1)
                    },
                    2: function(e) {
                        return Number(1 != e)
                    },
                    3: function(e) {
                        return 0
                    },
                    4: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    5: function(e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                    },
                    6: function(e) {
                        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                    },
                    7: function(e) {
                        return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    8: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                    },
                    9: function(e) {
                        return Number(e >= 2)
                    },
                    10: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                    },
                    11: function(e) {
                        return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                    },
                    12: function(e) {
                        return Number(e % 10 != 1 || e % 100 == 11)
                    },
                    13: function(e) {
                        return Number(0 !== e)
                    },
                    14: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                    },
                    15: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    16: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                    },
                    17: function(e) {
                        return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                    },
                    18: function(e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                    },
                    19: function(e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                    },
                    20: function(e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                    },
                    21: function(e) {
                        return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                    },
                    22: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                    }
                },
                te = ["v1", "v2", "v3"],
                ne = {
                    zero: 0,
                    one: 1,
                    two: 2,
                    few: 3,
                    many: 4,
                    other: 5
                };

            function re() {
                var e = {};
                return X.forEach((function(t) {
                    t.lngs.forEach((function(n) {
                        e[n] = {
                            numbers: t.nr,
                            plurals: ee[t.fc]
                        }
                    }))
                })), e
            }
            var oe = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object(o["default"])(this, e), this.languageUtils = t, this.options = n, this.logger = O.create("pluralResolver"), this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON || "undefined" !== typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = re()
                }
                return Object(i["default"])(e, [{
                    key: "addRule",
                    value: function(e, t) {
                        this.rules[e] = t
                    }
                }, {
                    key: "getRule",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (this.shouldUseIntlApi()) try {
                            return new Intl.PluralRules(e, {
                                type: t.ordinal ? "ordinal" : "cardinal"
                            })
                        } catch (n) {
                            return
                        }
                        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                    }
                }, {
                    key: "needsPlural",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.getRule(e, t);
                        return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                    }
                }, {
                    key: "getPluralFormsOfKey",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.getSuffixes(e, n).map((function(e) {
                            return "".concat(t).concat(e)
                        }))
                    }
                }, {
                    key: "getSuffixes",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = this.getRule(e, n);
                        return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((function(e, t) {
                            return ne[e] - ne[t]
                        })).map((function(e) {
                            return "".concat(t.options.prepend).concat(e)
                        })) : r.numbers.map((function(r) {
                            return t.getSuffix(e, r, n)
                        })) : []
                    }
                }, {
                    key: "getSuffix",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = this.getRule(e, n);
                        return r ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(r.select(t)) : this.getSuffixRetroCompatible(r, t) : (this.logger.warn("no plural rule found for: ".concat(e)), "")
                    }
                }, {
                    key: "getSuffixRetroCompatible",
                    value: function(e, t) {
                        var n = this,
                            r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                            o = e.numbers[r];
                        this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                        var i = function() {
                            return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                        };
                        return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" === typeof o ? "_plural_".concat(o.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                    }
                }, {
                    key: "shouldUseIntlApi",
                    value: function() {
                        return !te.includes(this.options.compatibilityJSON)
                    }
                }]), e
            }();

            function ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ie(Object(n), !0).forEach((function(t) {
                        Object(f["default"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function se(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
                    o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    i = L(e, t, n);
                return !i && o && "string" === typeof n && (i = F(e, n, r), void 0 === i && (i = F(t, n, r))), i
            }
            var ue = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(o["default"])(this, e), this.logger = O.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) {
                        return e
                    }, this.init(t)
                }
                return Object(i["default"])(e, [{
                    key: "init",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.interpolation || (e.interpolation = {
                            escapeValue: !0
                        });
                        var t = e.interpolation;
                        this.escape = void 0 !== t.escape ? t.escape : D, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? N(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? N(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? N(t.nestingPrefix) : t.nestingPrefixEscaped || N("$t("), this.nestingSuffix = t.nestingSuffix ? N(t.nestingSuffix) : t.nestingSuffixEscaped || N(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.options && this.init(this.options)
                    }
                }, {
                    key: "resetRegExp",
                    value: function() {
                        var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                        this.regexp = new RegExp(e, "g");
                        var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                        this.regexpUnescape = new RegExp(t, "g");
                        var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                        this.nestingRegexp = new RegExp(n, "g")
                    }
                }, {
                    key: "interpolate",
                    value: function(e, t, n, r) {
                        var o, i, a, s = this,
                            u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                        function c(e) {
                            return e.replace(/\$/g, "$$$$")
                        }
                        var l = function(e) {
                            if (e.indexOf(s.formatSeparator) < 0) {
                                var o = se(t, u, e, s.options.keySeparator, s.options.ignoreJSONStructure);
                                return s.alwaysFormat ? s.format(o, void 0, n, ae(ae(ae({}, r), t), {}, {
                                    interpolationkey: e
                                })) : o
                            }
                            var i = e.split(s.formatSeparator),
                                a = i.shift().trim(),
                                c = i.join(s.formatSeparator).trim();
                            return s.format(se(t, u, a, s.options.keySeparator, s.options.ignoreJSONStructure), c, n, ae(ae(ae({}, r), t), {}, {
                                interpolationkey: a
                            }))
                        };
                        this.resetRegExp();
                        var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler,
                            d = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables,
                            p = [{
                                regex: this.regexpUnescape,
                                safeValue: function(e) {
                                    return c(e)
                                }
                            }, {
                                regex: this.regexp,
                                safeValue: function(e) {
                                    return s.escapeValue ? c(s.escape(e)) : c(e)
                                }
                            }];
                        return p.forEach((function(t) {
                            a = 0;
                            while (o = t.regex.exec(e)) {
                                var n = o[1].trim();
                                if (i = l(n), void 0 === i)
                                    if ("function" === typeof f) {
                                        var u = f(e, o, r);
                                        i = "string" === typeof u ? u : ""
                                    } else if (r && Object.prototype.hasOwnProperty.call(r, n)) i = "";
                                else {
                                    if (d) {
                                        i = o[0];
                                        continue
                                    }
                                    s.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(e)), i = ""
                                } else "string" === typeof i || s.useRawValueToEscape || (i = x(i));
                                var c = t.safeValue(i);
                                if (e = e.replace(o[0], c), d ? (t.regex.lastIndex += i.length, t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0, a++, a >= s.maxReplaces) break
                            }
                        })), e
                    }
                }, {
                    key: "nest",
                    value: function(e, t) {
                        var n, r, o, i = this,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

                        function s(e, t) {
                            var n = this.nestingOptionsSeparator;
                            if (e.indexOf(n) < 0) return e;
                            var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
                                i = "{".concat(r[1]);
                            e = r[0], i = this.interpolate(i, o);
                            var a = i.match(/'/g),
                                s = i.match(/"/g);
                            (a && a.length % 2 === 0 && !s || s.length % 2 !== 0) && (i = i.replace(/'/g, '"'));
                            try {
                                o = JSON.parse(i), t && (o = ae(ae({}, t), o))
                            } catch (u) {
                                return this.logger.warn("failed parsing options string in nesting for key ".concat(e), u), "".concat(e).concat(n).concat(i)
                            }
                            return delete o.defaultValue, e
                        }
                        while (n = this.nestingRegexp.exec(e)) {
                            var u = [];
                            o = ae({}, a), o = o.replace && "string" !== typeof o.replace ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
                            var c = !1;
                            if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                var l = n[1].split(this.formatSeparator).map((function(e) {
                                    return e.trim()
                                }));
                                n[1] = l.shift(), u = l, c = !0
                            }
                            if (r = t(s.call(this, n[1].trim(), o), o), r && n[0] === e && "string" !== typeof r) return r;
                            "string" !== typeof r && (r = x(r)), r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), r = ""), c && (r = u.reduce((function(e, t) {
                                return i.format(e, t, a.lng, ae(ae({}, a), {}, {
                                    interpolationkey: n[1].trim()
                                }))
                            }), r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0
                        }
                        return e
                    }
                }]), e
            }();

            function ce(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ce(Object(n), !0).forEach((function(t) {
                        Object(f["default"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function fe(e) {
                var t = e.toLowerCase().trim(),
                    n = {};
                if (e.indexOf("(") > -1) {
                    var r = e.split("(");
                    t = r[0].toLowerCase().trim();
                    var o = r[1].substring(0, r[1].length - 1);
                    if ("currency" === t && o.indexOf(":") < 0) n.currency || (n.currency = o.trim());
                    else if ("relativetime" === t && o.indexOf(":") < 0) n.range || (n.range = o.trim());
                    else {
                        var i = o.split(";");
                        i.forEach((function(e) {
                            if (e) {
                                var t = e.split(":"),
                                    r = g(t),
                                    o = r[0],
                                    i = r.slice(1),
                                    a = i.join(":").trim().replace(/^'+|'+$/g, "");
                                n[o.trim()] || (n[o.trim()] = a), "false" === a && (n[o.trim()] = !1), "true" === a && (n[o.trim()] = !0), isNaN(a) || (n[o.trim()] = parseInt(a, 10))
                            }
                        }))
                    }
                }
                return {
                    formatName: t,
                    formatOptions: n
                }
            }

            function de(e) {
                var t = {};
                return function(n, r, o) {
                    var i = r + JSON.stringify(o),
                        a = t[i];
                    return a || (a = e(r, o), t[i] = a), a(n)
                }
            }
            var pe = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(o["default"])(this, e), this.logger = O.create("formatter"), this.options = t, this.formats = {
                        number: de((function(e, t) {
                            var n = new Intl.NumberFormat(e, le({}, t));
                            return function(e) {
                                return n.format(e)
                            }
                        })),
                        currency: de((function(e, t) {
                            var n = new Intl.NumberFormat(e, le(le({}, t), {}, {
                                style: "currency"
                            }));
                            return function(e) {
                                return n.format(e)
                            }
                        })),
                        datetime: de((function(e, t) {
                            var n = new Intl.DateTimeFormat(e, le({}, t));
                            return function(e) {
                                return n.format(e)
                            }
                        })),
                        relativetime: de((function(e, t) {
                            var n = new Intl.RelativeTimeFormat(e, le({}, t));
                            return function(e) {
                                return n.format(e, t.range || "day")
                            }
                        })),
                        list: de((function(e, t) {
                            var n = new Intl.ListFormat(e, le({}, t));
                            return function(e) {
                                return n.format(e)
                            }
                        }))
                    }, this.init(t)
                }
                return Object(i["default"])(e, [{
                    key: "init",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                interpolation: {}
                            },
                            n = t.interpolation;
                        this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        this.formats[e.toLowerCase().trim()] = t
                    }
                }, {
                    key: "addCached",
                    value: function(e, t) {
                        this.formats[e.toLowerCase().trim()] = de(t)
                    }
                }, {
                    key: "format",
                    value: function(e, t, n) {
                        var r = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            i = t.split(this.formatSeparator),
                            a = i.reduce((function(e, t) {
                                var i = fe(t),
                                    a = i.formatName,
                                    s = i.formatOptions;
                                if (r.formats[a]) {
                                    var u = e;
                                    try {
                                        var c = o && o.formatParams && o.formatParams[o.interpolationkey] || {},
                                            l = c.locale || c.lng || o.locale || o.lng || n;
                                        u = r.formats[a](e, l, le(le(le({}, s), o), c))
                                    } catch (f) {
                                        r.logger.warn(f)
                                    }
                                    return u
                                }
                                return r.logger.warn("there was no format function for ".concat(a)), e
                            }), e);
                        return a
                    }
                }]), e
            }();

            function ve(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function he(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(Object(n), !0).forEach((function(t) {
                        Object(f["default"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ge(e) {
                var t = me();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }

            function me() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function ye(e, t) {
                void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--)
            }
            var be = function(e) {
                u(n, e);
                var t = ge(n);

                function n(e, r, i) {
                    var s, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return Object(o["default"])(this, n), s = t.call(this), I && w.call(a(s)), s.backend = e, s.store = r, s.services = i, s.languageUtils = i.languageUtils, s.options = u, s.logger = O.create("backendConnector"), s.waitingReads = [], s.maxParallelReads = u.maxParallelReads || 10, s.readingCalls = 0, s.maxRetries = u.maxRetries >= 0 ? u.maxRetries : 5, s.retryTimeout = u.retryTimeout >= 1 ? u.retryTimeout : 350, s.state = {}, s.queue = [], s.backend && s.backend.init && s.backend.init(i, u.backend, u), s
                }
                return Object(i["default"])(n, [{
                    key: "queueLoad",
                    value: function(e, t, n, r) {
                        var o = this,
                            i = {},
                            a = {},
                            s = {},
                            u = {};
                        return e.forEach((function(e) {
                            var r = !0;
                            t.forEach((function(t) {
                                var s = "".concat(e, "|").concat(t);
                                !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? void 0 === a[s] && (a[s] = !0) : (o.state[s] = 1, r = !1, void 0 === a[s] && (a[s] = !0), void 0 === i[s] && (i[s] = !0), void 0 === u[t] && (u[t] = !0)))
                            })), r || (s[e] = !0)
                        })), (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
                            pending: a,
                            pendingCount: Object.keys(a).length,
                            loaded: {},
                            errors: [],
                            callback: r
                        }), {
                            toLoad: Object.keys(i),
                            pending: Object.keys(a),
                            toLoadLanguages: Object.keys(s),
                            toLoadNamespaces: Object.keys(u)
                        }
                    }
                }, {
                    key: "loaded",
                    value: function(e, t, n) {
                        var r = e.split("|"),
                            o = r[0],
                            i = r[1];
                        t && this.emit("failedLoading", o, i, t), n && this.store.addResourceBundle(o, i, n), this.state[e] = t ? -1 : 2;
                        var a = {};
                        this.queue.forEach((function(n) {
                            P(n.loaded, [o], i), ye(n, e), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach((function(e) {
                                a[e] || (a[e] = {});
                                var t = n.loaded[e];
                                t.length && t.forEach((function(t) {
                                    void 0 === a[e][t] && (a[e][t] = !0)
                                }))
                            })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                        })), this.emit("loaded", a), this.queue = this.queue.filter((function(e) {
                            return !e.done
                        }))
                    }
                }, {
                    key: "read",
                    value: function(e, t, n) {
                        var r = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
                            a = arguments.length > 5 ? arguments[5] : void 0;
                        if (!e.length) return a(null, {});
                        if (this.readingCalls >= this.maxParallelReads) this.waitingReads.push({
                            lng: e,
                            ns: t,
                            fcName: n,
                            tried: o,
                            wait: i,
                            callback: a
                        });
                        else {
                            this.readingCalls++;
                            var s = function(s, u) {
                                    if (r.readingCalls--, r.waitingReads.length > 0) {
                                        var c = r.waitingReads.shift();
                                        r.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback)
                                    }
                                    s && u && o < r.maxRetries ? setTimeout((function() {
                                        r.read.call(r, e, t, n, o + 1, 2 * i, a)
                                    }), i) : a(s, u)
                                },
                                u = this.backend[n].bind(this.backend);
                            if (2 !== u.length) return u(e, t, s);
                            try {
                                var c = u(e, t);
                                c && "function" === typeof c.then ? c.then((function(e) {
                                    return s(null, e)
                                }))["catch"](s) : s(null, c)
                            } catch (l) {
                                s(l)
                            }
                        }
                    }
                }, {
                    key: "prepareLoading",
                    value: function(e, t) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                        "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" === typeof t && (t = [t]);
                        var i = this.queueLoad(e, t, r, o);
                        if (!i.toLoad.length) return i.pending.length || o(), null;
                        i.toLoad.forEach((function(e) {
                            n.loadOne(e)
                        }))
                    }
                }, {
                    key: "load",
                    value: function(e, t, n) {
                        this.prepareLoading(e, t, {}, n)
                    }
                }, {
                    key: "reload",
                    value: function(e, t, n) {
                        this.prepareLoading(e, t, {
                            reload: !0
                        }, n)
                    }
                }, {
                    key: "loadOne",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = e.split("|"),
                            o = r[0],
                            i = r[1];
                        this.read(o, i, "read", void 0, void 0, (function(r, a) {
                            r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r), !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a), t.loaded(e, r, a)
                        }))
                    }
                }, {
                    key: "saveMissing",
                    value: function(e, t, n, r, o) {
                        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function() {};
                        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                        else if (void 0 !== n && null !== n && "" !== n) {
                            if (this.backend && this.backend.create) {
                                var s = he(he({}, i), {}, {
                                        isUpdate: o
                                    }),
                                    u = this.backend.create.bind(this.backend);
                                if (u.length < 6) try {
                                    var c;
                                    c = 5 === u.length ? u(e, t, n, r, s) : u(e, t, n, r), c && "function" === typeof c.then ? c.then((function(e) {
                                        return a(null, e)
                                    }))["catch"](a) : a(null, c)
                                } catch (l) {
                                    a(l)
                                } else u(e, t, n, r, a, s)
                            }
                            e && e[0] && this.store.addResource(e[0], t, n, r)
                        }
                    }
                }]), n
            }(w);

            function _e() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !0,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(e) {
                        var t = {};
                        if ("object" === Object(r["a"])(e[1]) && (t = e[1]), "string" === typeof e[1] && (t.defaultValue = e[1]), "string" === typeof e[2] && (t.tDescription = e[2]), "object" === Object(r["a"])(e[2]) || "object" === Object(r["a"])(e[3])) {
                            var n = e[3] || e[2];
                            Object.keys(n).forEach((function(e) {
                                t[e] = n[e]
                            }))
                        }
                        return t
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: function(e, t, n, r) {
                            return e
                        },
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !0
                    }
                }
            }

            function Oe(e) {
                return "string" === typeof e.ns && (e.ns = [e.ns]), "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
            }

            function we(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? we(Object(n), !0).forEach((function(t) {
                        Object(f["default"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : we(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function xe(e) {
                var t = Se();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }

            function Se() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function je() {}

            function Ee(e) {
                var t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
                t.forEach((function(t) {
                    "function" === typeof e[t] && (e[t] = e[t].bind(e))
                }))
            }
            var Pe = function(e) {
                u(n, e);
                var t = xe(n);

                function n() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments.length > 1 ? arguments[1] : void 0;
                    if (Object(o["default"])(this, n), e = t.call(this), I && w.call(a(e)), e.options = Oe(r), e.services = {}, e.logger = O, e.modules = {
                            external: []
                        }, Ee(a(e)), i && !e.isInitialized && !r.isClone) {
                        if (!e.options.initImmediate) return e.init(r, i), c(e, a(e));
                        setTimeout((function() {
                            e.init(r, i)
                        }), 0)
                    }
                    return e
                }
                return Object(i["default"])(n, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        "function" === typeof t && (n = t, t = {}), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" === typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
                        var r = _e();

                        function o(e) {
                            return e ? "function" === typeof e ? new e : e : null
                        }
                        if (this.options = ke(ke(ke({}, r), this.options), Oe(t)), "v1" !== this.options.compatibilityAPI && (this.options.interpolation = ke(ke({}, r.interpolation), this.options.interpolation)), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator), !this.options.isClone) {
                            var i;
                            this.modules.logger ? O.init(o(this.modules.logger), this.options) : O.init(null, this.options), this.modules.formatter ? i = this.modules.formatter : "undefined" !== typeof Intl && (i = pe);
                            var a = new Q(this.options);
                            this.store = new V(this.options.resources, this.options);
                            var s = this.services;
                            s.logger = O, s.resourceStore = this.store, s.languageUtils = a, s.pluralResolver = new oe(a, {
                                prepend: this.options.pluralSeparator,
                                compatibilityJSON: this.options.compatibilityJSON,
                                simplifyPluralSuffix: this.options.simplifyPluralSuffix
                            }), !i || this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format || (s.formatter = o(i), s.formatter.init(s, this.options), this.options.interpolation.format = s.formatter.format.bind(s.formatter)), s.interpolator = new ue(this.options), s.utils = {
                                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                            }, s.backendConnector = new be(o(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", (function(t) {
                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                e.emit.apply(e, [t].concat(r))
                            })), this.modules.languageDetector && (s.languageDetector = o(this.modules.languageDetector), s.languageDetector.init && s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = o(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new Y(this.services, this.options), this.translator.on("*", (function(t) {
                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                e.emit.apply(e, [t].concat(r))
                            })), this.modules.external.forEach((function(t) {
                                t.init && t.init(e)
                            }))
                        }
                        if (this.format = this.options.interpolation.format, n || (n = je), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                            var u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            u.length > 0 && "dev" !== u[0] && (this.options.lng = u[0])
                        }
                        this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                        var c = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                        c.forEach((function(t) {
                            e[t] = function() {
                                var n;
                                return (n = e.store)[t].apply(n, arguments)
                            }
                        }));
                        var l = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                        l.forEach((function(t) {
                            e[t] = function() {
                                var n;
                                return (n = e.store)[t].apply(n, arguments), e
                            }
                        }));
                        var f = k(),
                            d = function() {
                                var t = function(t, r) {
                                    e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), f.resolve(r), n(t, r)
                                };
                                if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
                                e.changeLanguage(e.options.lng, t)
                            };
                        return this.options.resources || !this.options.initImmediate ? d() : setTimeout(d, 0), f
                    }
                }, {
                    key: "loadResources",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : je,
                            r = n,
                            o = "string" === typeof e ? e : this.language;
                        if ("function" === typeof e && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
                            if (o && "cimode" === o.toLowerCase()) return r();
                            var i = [],
                                a = function(e) {
                                    if (e) {
                                        var n = t.services.languageUtils.toResolveHierarchy(e);
                                        n.forEach((function(e) {
                                            i.indexOf(e) < 0 && i.push(e)
                                        }))
                                    }
                                };
                            if (o) a(o);
                            else {
                                var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                s.forEach((function(e) {
                                    return a(e)
                                }))
                            }
                            this.options.preload && this.options.preload.forEach((function(e) {
                                return a(e)
                            })), this.services.backendConnector.load(i, this.options.ns, (function(e) {
                                e || t.resolvedLanguage || !t.language || t.setResolvedLanguage(t.language), r(e)
                            }))
                        } else r(null)
                    }
                }, {
                    key: "reloadResources",
                    value: function(e, t, n) {
                        var r = k();
                        return e || (e = this.languages), t || (t = this.options.ns), n || (n = je), this.services.backendConnector.reload(e, t, (function(e) {
                            r.resolve(), n(e)
                        })), r
                    }
                }, {
                    key: "use",
                    value: function(e) {
                        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && H.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
                    }
                }, {
                    key: "setResolvedLanguage",
                    value: function(e) {
                        if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                            for (var t = 0; t < this.languages.length; t++) {
                                var n = this.languages[t];
                                if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                                    this.resolvedLanguage = n;
                                    break
                                }
                            }
                    }
                }, {
                    key: "changeLanguage",
                    value: function(e, t) {
                        var n = this;
                        this.isLanguageChangingTo = e;
                        var r = k();
                        this.emit("languageChanging", e);
                        var o = function(e) {
                                n.language = e, n.languages = n.services.languageUtils.toResolveHierarchy(e), n.resolvedLanguage = void 0, n.setResolvedLanguage(e)
                            },
                            i = function(e, i) {
                                i ? (o(i), n.translator.changeLanguage(i), n.isLanguageChangingTo = void 0, n.emit("languageChanged", i), n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0, r.resolve((function() {
                                    return n.t.apply(n, arguments)
                                })), t && t(e, (function() {
                                    return n.t.apply(n, arguments)
                                }))
                            },
                            a = function(t) {
                                e || t || !n.services.languageDetector || (t = []);
                                var r = "string" === typeof t ? t : n.services.languageUtils.getBestMatchFromCodes(t);
                                r && (n.language || o(r), n.translator.language || n.translator.changeLanguage(r), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage && n.services.languageDetector.cacheUserLanguage(r)), n.loadResources(r, (function(e) {
                                    i(e, r)
                                }))
                            };
                        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e) : a(this.services.languageDetector.detect()), r
                    }
                }, {
                    key: "getFixedT",
                    value: function(e, t, n) {
                        var o = this,
                            i = function e(t, i) {
                                var a;
                                if ("object" !== Object(r["a"])(i)) {
                                    for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) u[c - 2] = arguments[c];
                                    a = o.options.overloadTranslationOptionHandler([t, i].concat(u))
                                } else a = ke({}, i);
                                a.lng = a.lng || e.lng, a.lngs = a.lngs || e.lngs, a.ns = a.ns || e.ns, a.keyPrefix = a.keyPrefix || n || e.keyPrefix;
                                var l, f = o.options.keySeparator || ".";
                                return l = a.keyPrefix && Array.isArray(t) ? t.map((function(e) {
                                    return "".concat(a.keyPrefix).concat(f).concat(e)
                                })) : a.keyPrefix ? "".concat(a.keyPrefix).concat(f).concat(t) : t, o.t(l, a)
                            };
                        return "string" === typeof e ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = n, i
                    }
                }, {
                    key: "t",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).translate.apply(e, arguments)
                    }
                }, {
                    key: "exists",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).exists.apply(e, arguments)
                    }
                }, {
                    key: "setDefaultNamespace",
                    value: function(e) {
                        this.options.defaultNS = e
                    }
                }, {
                    key: "hasLoadedNamespace",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                        var r = n.lng || this.resolvedLanguage || this.languages[0],
                            o = !!this.options && this.options.fallbackLng,
                            i = this.languages[this.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        var a = function(e, n) {
                            var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                            return -1 === r || 2 === r
                        };
                        if (n.precheck) {
                            var s = n.precheck(this, a);
                            if (void 0 !== s) return s
                        }
                        return !!this.hasResourceBundle(r, e) || (!(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!a(r, e) || o && !a(i, e)))
                    }
                }, {
                    key: "loadNamespaces",
                    value: function(e, t) {
                        var n = this,
                            r = k();
                        return this.options.ns ? ("string" === typeof e && (e = [e]), e.forEach((function(e) {
                            n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                        })), this.loadResources((function(e) {
                            r.resolve(), t && t(e)
                        })), r) : (t && t(), Promise.resolve())
                    }
                }, {
                    key: "loadLanguages",
                    value: function(e, t) {
                        var n = k();
                        "string" === typeof e && (e = [e]);
                        var r = this.options.preload || [],
                            o = e.filter((function(e) {
                                return r.indexOf(e) < 0
                            }));
                        return o.length ? (this.options.preload = r.concat(o), this.loadResources((function(e) {
                            n.resolve(), t && t(e)
                        })), n) : (t && t(), Promise.resolve())
                    }
                }, {
                    key: "dir",
                    value: function(e) {
                        if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
                        var t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
                            n = this.services && this.services.languageUtils || new Q(_e());
                        return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
                    }
                }, {
                    key: "cloneInstance",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : je,
                            o = ke(ke(ke({}, this.options), t), {
                                isClone: !0
                            }),
                            i = new n(o);
                        void 0 === t.debug && void 0 === t.prefix || (i.logger = i.logger.clone(t));
                        var a = ["store", "services", "language"];
                        return a.forEach((function(t) {
                            i[t] = e[t]
                        })), i.services = ke({}, this.services), i.services.utils = {
                            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                        }, i.translator = new Y(i.services, i.options), i.translator.on("*", (function(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            i.emit.apply(i, [e].concat(n))
                        })), i.init(o, r), i.translator.options = i.options, i.translator.backendConnector.services.utils = {
                            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                        }, i
                    }
                }, {
                    key: "toJSON",
                    value: function() {
                        return {
                            options: this.options,
                            store: this.store,
                            language: this.language,
                            languages: this.languages,
                            resolvedLanguage: this.resolvedLanguage
                        }
                    }
                }]), n
            }(w);
            Object(f["default"])(Pe, "createInstance", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return new Pe(e, t)
            }));
            var Ce = Pe.createInstance();
            Ce.createInstance = Pe.createInstance;
            var Le = Ce.createInstance,
                Te = Ce.dir,
                Ne = Ce.init,
                Ae = Ce.loadResources,
                De = Ce.reloadResources,
                Ie = Ce.use,
                Re = Ce.changeLanguage,
                $e = Ce.getFixedT,
                Fe = Ce.t,
                Me = Ce.exists,
                Ue = Ce.setDefaultNamespace,
                Ge = Ce.hasLoadedNamespace,
                Be = Ce.loadNamespaces,
                Ve = Ce.loadLanguages
        },
        "5fb0": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LOGIN_METHODS = t.TERRITORIES = t.METHOD_LOGIN = t.METHOD_LOGIN_ENUM = t.GAME_DISPLAY_TYPE = t.DEFAULT_LANGUAGE = t.LANGUAGE_SUPPORTED = t.SDK_MODE = t.SDK_TYPE = t.CALLBACK_TYPE = t.LOGIN_TYPE = void 0;
            var r = {
                BUTTON: "button",
                LINK: "link",
                SOCIAL: "social"
            };
            t.LOGIN_TYPE = r;
            var o = {
                REDIRECT: "REDIRECT"
            };
            t.CALLBACK_TYPE = o;
            var i = {
                REDIRECT: "REDIRECT"
            };
            t.SDK_TYPE = i;
            var a = {
                GAME_SITE: "GAME_SITE",
                PORTAL: "PORTAL"
            };
            t.SDK_MODE = a;
            var s = ["en", "vi", "th", "id", "zh-CN"];
            t.LANGUAGE_SUPPORTED = s;
            var u = "en";
            t.DEFAULT_LANGUAGE = u;
            var c = {
                GRID: "GRID",
                LIST: "LIST"
            };
            t.GAME_DISPLAY_TYPE = c;
            var l = {
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
            };
            t.METHOD_LOGIN_ENUM = l;
            var f = {
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
            };
            t.METHOD_LOGIN = f;
            var d = {
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
            t.TERRITORIES = d;
            var p = {
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
            };
            t.LOGIN_METHODS = p
        },
        6374: function(e, t, n) {
            "use strict";
            var r = n("da84"),
                o = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    o(r, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        },
        6547: function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = n("5926"),
                i = n("577e"),
                a = n("1d80"),
                s = r("".charAt),
                u = r("".charCodeAt),
                c = r("".slice),
                l = function(e) {
                    return function(t, n) {
                        var r, l, f = i(a(t)),
                            d = o(n),
                            p = f.length;
                        return d < 0 || d >= p ? e ? "" : void 0 : (r = u(f, d), r < 55296 || r > 56319 || d + 1 === p || (l = u(f, d + 1)) < 56320 || l > 57343 ? e ? s(f, d) : r : e ? c(f, d, d + 2) : l - 56320 + (r - 55296 << 10) + 65536)
                    }
                };
            e.exports = {
                codeAt: l(!1),
                charAt: l(!0)
            }
        },
        "65f0": function(e, t, n) {
            "use strict";
            var r = n("0b42");
            e.exports = function(e, t) {
                return new(r(e))(0 === t ? 0 : t)
            }
        },
        "68ee": function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = n("d039"),
                i = n("1626"),
                a = n("f5df"),
                s = n("d066"),
                u = n("8925"),
                c = function() {},
                l = [],
                f = s("Reflect", "construct"),
                d = /^\s*(?:class|function)\b/,
                p = r(d.exec),
                v = !d.test(c),
                h = function(e) {
                    if (!i(e)) return !1;
                    try {
                        return f(c, l, e), !0
                    } catch (t) {
                        return !1
                    }
                },
                g = function(e) {
                    if (!i(e)) return !1;
                    switch (a(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return v || !!p(d, u(e))
                    } catch (t) {
                        return !0
                    }
                };
            g.sham = !0, e.exports = !f || o((function() {
                var e;
                return h(h.call) || !h(Object) || !h((function() {
                    e = !0
                })) || e
            })) ? g : h
        },
        "69f3": function(e, t, n) {
            "use strict";
            var r, o, i, a = n("cdce"),
                s = n("da84"),
                u = n("861d"),
                c = n("9112"),
                l = n("1a2d"),
                f = n("c6cd"),
                d = n("f772"),
                p = n("d012"),
                v = "Object already initialized",
                h = s.TypeError,
                g = s.WeakMap,
                m = function(e) {
                    return i(e) ? o(e) : r(e, {})
                },
                y = function(e) {
                    return function(t) {
                        var n;
                        if (!u(t) || (n = o(t)).type !== e) throw new h("Incompatible receiver, " + e + " required");
                        return n
                    }
                };
            if (a || f.state) {
                var b = f.state || (f.state = new g);
                b.get = b.get, b.has = b.has, b.set = b.set, r = function(e, t) {
                    if (b.has(e)) throw new h(v);
                    return t.facade = e, b.set(e, t), t
                }, o = function(e) {
                    return b.get(e) || {}
                }, i = function(e) {
                    return b.has(e)
                }
            } else {
                var _ = d("state");
                p[_] = !0, r = function(e, t) {
                    if (l(e, _)) throw new h(v);
                    return t.facade = e, c(e, _, t), t
                }, o = function(e) {
                    return l(e, _) ? e[_] : {}
                }, i = function(e) {
                    return l(e, _)
                }
            }
            e.exports = {
                set: r,
                get: o,
                has: i,
                enforce: m,
                getterFor: y
            }
        },
        "6a17": function(e, t, n) {
            var r = {
                "./user-profile.json": "a6ea"
            };

            function o(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }, o.resolve = i, e.exports = o, o.id = "6a17"
        },
        "6b75": function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        "6f19": function(e, t, n) {
            "use strict";
            var r = n("9112"),
                o = n("0d26"),
                i = n("b980"),
                a = Error.captureStackTrace;
            e.exports = function(e, t, n, s) {
                i && (a ? a(e, t) : r(e, "stack", o(n, s)))
            }
        },
        7037: function(e, t) {
            function n(t) {
                return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.__esModule = !0, e.exports["default"] = e.exports, n(t)
            }
            e.exports = n, e.exports.__esModule = !0, e.exports["default"] = e.exports
        },
        7156: function(e, t, n) {
            "use strict";
            var r = n("1626"),
                o = n("861d"),
                i = n("d2bb");
            e.exports = function(e, t, n) {
                var a, s;
                return i && r(a = t.constructor) && a !== n && o(s = a.prototype) && s !== n.prototype && i(e, s), e
            }
        },
        7234: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return null === e || void 0 === e
            }
        },
        7282: function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = n("59ed");
            e.exports = function(e, t, n) {
                try {
                    return r(o(Object.getOwnPropertyDescriptor(e, t)[n]))
                } catch (i) {}
            }
        },
        7418: function(e, t, n) {
            "use strict";
            t.f = Object.getOwnPropertySymbols
        },
        7839: function(e, t, n) {
            "use strict";
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        "785a": function(e, t, n) {
            "use strict";
            var r = n("cc12"),
                o = r("span").classList,
                i = o && o.constructor && o.constructor.prototype;
            e.exports = i === Object.prototype ? void 0 : i
        },
        "7b0b": function(e, t, n) {
            "use strict";
            var r = n("1d80"),
                o = Object;
            e.exports = function(e) {
                return o(r(e))
            }
        },
        "7c73": function(e, t, n) {
            "use strict";
            var r, o = n("825a"),
                i = n("37e8"),
                a = n("7839"),
                s = n("d012"),
                u = n("1be4"),
                c = n("cc12"),
                l = n("f772"),
                f = ">",
                d = "<",
                p = "prototype",
                v = "script",
                h = l("IE_PROTO"),
                g = function() {},
                m = function(e) {
                    return d + v + f + e + d + "/" + v + f
                },
                y = function(e) {
                    e.write(m("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                },
                b = function() {
                    var e, t = c("iframe"),
                        n = "java" + v + ":";
                    return t.style.display = "none", u.appendChild(t), t.src = String(n), e = t.contentWindow.document, e.open(), e.write(m("document.F=Object")), e.close(), e.F
                },
                _ = function() {
                    try {
                        r = new ActiveXObject("htmlfile")
                    } catch (t) {}
                    _ = "undefined" != typeof document ? document.domain && r ? y(r) : b() : y(r);
                    var e = a.length;
                    while (e--) delete _[p][a[e]];
                    return _()
                };
            s[h] = !0, e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (g[p] = o(e), n = new g, g[p] = null, n[h] = e) : n = _(), void 0 === t ? n : i.f(n, t)
            }
        },
        "825a": function(e, t, n) {
            "use strict";
            var r = n("861d"),
                o = String,
                i = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw new i(o(e) + " is not an object")
            }
        },
        "83ab": function(e, t, n) {
            "use strict";
            var r = n("d039");
            e.exports = !r((function() {
                return 7 !== Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        8418: function(e, t, n) {
            "use strict";
            var r = n("a04b"),
                o = n("9bf2"),
                i = n("5c6c");
            e.exports = function(e, t, n) {
                var a = r(t);
                a in e ? o.f(e, a, i(0, n)) : e[a] = n
            }
        },
        "861d": function(e, t, n) {
            "use strict";
            var r = n("1626"),
                o = n("8ea1"),
                i = o.all;
            e.exports = o.IS_HTMLDDA ? function(e) {
                return "object" == typeof e ? null !== e : r(e) || e === i
            } : function(e) {
                return "object" == typeof e ? null !== e : r(e)
            }
        },
        8925: function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = n("1626"),
                i = n("c6cd"),
                a = r(Function.toString);
            o(i.inspectSource) || (i.inspectSource = function(e) {
                return a(e)
            }), e.exports = i.inspectSource
        },
        "8ea1": function(e, t, n) {
            "use strict";
            var r = "object" == typeof document && document.all,
                o = "undefined" == typeof r && void 0 !== r;
            e.exports = {
                all: r,
                IS_HTMLDDA: o
            }
        },
        "90e3": function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = 0,
                i = Math.random(),
                a = r(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36)
            }
        },
        9112: function(e, t, n) {
            "use strict";
            var r = n("83ab"),
                o = n("9bf2"),
                i = n("5c6c");
            e.exports = r ? function(e, t, n) {
                return o.f(e, t, i(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        "94ca": function(e, t, n) {
            "use strict";
            var r = n("d039"),
                o = n("1626"),
                i = /#|\.prototype\./,
                a = function(e, t) {
                    var n = u[s(e)];
                    return n === l || n !== c && (o(t) ? r(t) : !!t)
                },
                s = a.normalize = function(e) {
                    return String(e).replace(i, ".").toLowerCase()
                },
                u = a.data = {},
                c = a.NATIVE = "N",
                l = a.POLYFILL = "P";
            e.exports = a
        },
        "99af": function(e, t, n) {
            "use strict";
            var r = n("23e7"),
                o = n("d039"),
                i = n("e8b5"),
                a = n("861d"),
                s = n("7b0b"),
                u = n("07fa"),
                c = n("3511"),
                l = n("8418"),
                f = n("65f0"),
                d = n("1dde"),
                p = n("b622"),
                v = n("2d00"),
                h = p("isConcatSpreadable"),
                g = v >= 51 || !o((function() {
                    var e = [];
                    return e[h] = !1, e.concat()[0] !== e
                })),
                m = function(e) {
                    if (!a(e)) return !1;
                    var t = e[h];
                    return void 0 !== t ? !!t : i(e)
                },
                y = !g || !d("concat");
            r({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: y
            }, {
                concat: function(e) {
                    var t, n, r, o, i, a = s(this),
                        d = f(a, 0),
                        p = 0;
                    for (t = -1, r = arguments.length; t < r; t++)
                        if (i = -1 === t ? a : arguments[t], m(i))
                            for (o = u(i), c(p + o), n = 0; n < o; n++, p++) n in i && l(d, p, i[n]);
                        else c(p + 1), l(d, p++, i);
                    return d.length = p, d
                }
            })
        },
        "9bf2": function(e, t, n) {
            "use strict";
            var r = n("83ab"),
                o = n("0cfb"),
                i = n("aed9"),
                a = n("825a"),
                s = n("a04b"),
                u = TypeError,
                c = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                f = "enumerable",
                d = "configurable",
                p = "writable";
            t.f = r ? i ? function(e, t, n) {
                if (a(e), t = s(t), a(n), "function" === typeof e && "prototype" === t && "value" in n && p in n && !n[p]) {
                    var r = l(e, t);
                    r && r[p] && (e[t] = n.value, n = {
                        configurable: d in n ? n[d] : r[d],
                        enumerable: f in n ? n[f] : r[f],
                        writable: !1
                    })
                }
                return c(e, t, n)
            } : c : function(e, t, n) {
                if (a(e), t = s(t), a(n), o) try {
                    return c(e, t, n)
                } catch (r) {}
                if ("get" in n || "set" in n) throw new u("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        a04b: function(e, t, n) {
            "use strict";
            var r = n("c04e"),
                o = n("d9b5");
            e.exports = function(e) {
                var t = r(e, "string");
                return o(t) ? t : t + ""
            }
        },
        a38e: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("53ca");

            function o(e, t) {
                if ("object" !== Object(r["a"])(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== Object(r["a"])(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }

            function i(e) {
                var t = o(e, "string");
                return "symbol" === Object(r["a"])(t) ? t : String(t)
            }
        },
        a3d4: function(e, t, n) {
            var r = {
                "./user-profile.json": "c2f9"
            };

            function o(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }, o.resolve = i, e.exports = o, o.id = "a3d4"
        },
        a640: function(e, t, n) {
            "use strict";
            var r = n("d039");
            e.exports = function(e, t) {
                var n = [][e];
                return !!n && r((function() {
                    n.call(null, t || function() {
                        return 1
                    }, 1)
                }))
            }
        },
        a6ea: function(e) {
            e.exports = JSON.parse('{"label.gg":"Alamat email atau nomor telepon","label.gg_dim":"Email/phone","label.email":"Email","label.email_dim":"Email","label.phone_number":"Nomor Telepon","label.phone_number_dim":"Telepon","label.zing":"Zing ID","label.zing_dim":"ZingID","label.apple":"Apple","label.apple_dim":"Apple","label.google":"Google","label.google_dim":"Google","label.facebook":"Facebook","label.facebook_dim":"Facebook","label.protected_guest":"Main sekarang","label.protected_guest_dim":"Tamu","label.role_id":"ID peran (Role ID)","label.role_id_dim":"Role ID","label.error":"Kesalahan","title":"Masuk","subtitle":"Satu akun untuk seluruh VNGGames","error.errorInput":"Konfigurasi salah.","button.ok":"ok","callbackError":"Autentikasi gagal.","or":"Atau gunakan","orByGame":"Atau gunakan \'Main Sekarang\' untuk masuk","gameList.title":"Masuk","gameList.subtitle":"Pilih game dan masuk dengan akun \\"Main Sekarang\\" Anda","gameList.subtitle.mobile":"Masuk dengan akun \\"Main Sekarang\\" Anda","gameList.placeholder":"Cari game yang sedang Anda mainkan","gameList.searchNotFound":"Tidak ditemukan game yang Anda cari","button.back":"Kembali","button.continue":"Lanjut","AccountCenter":"Pusat Akun","Logout":"Keluar","Territory":"Wilayah","button.login":"Masuk","userProfile.gameNotPlay":"Anda belum pernah bermain game ini atau tidak memiliki karakter dalam game ini.","userProfile.loginSource":"Sumber login dari akun {{loginMethod}} di \\"{{gameName}}\\""}')
        },
        ab13: function(e, t, n) {
            "use strict";
            var r = n("b622"),
                o = r("match");
            e.exports = function(e) {
                var t = /./;
                try {
                    "/./" [e](t)
                } catch (n) {
                    try {
                        return t[o] = !1, "/./" [e](t)
                    } catch (r) {}
                }
                return !1
            }
        },
        ab36: function(e, t, n) {
            "use strict";
            var r = n("861d"),
                o = n("9112");
            e.exports = function(e, t) {
                r(t) && "cause" in t && o(e, "cause", t.cause)
            }
        },
        ade3: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return o
            }));
            var r = n("a38e");

            function o(e, t, n) {
                return t = Object(r["a"])(t), t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        ae93: function(e, t, n) {
            "use strict";
            var r, o, i, a = n("d039"),
                s = n("1626"),
                u = n("861d"),
                c = n("7c73"),
                l = n("e163"),
                f = n("cb2d"),
                d = n("b622"),
                p = n("c430"),
                v = d("iterator"),
                h = !1;
            [].keys && (i = [].keys(), "next" in i ? (o = l(l(i)), o !== Object.prototype && (r = o)) : h = !0);
            var g = !u(r) || a((function() {
                var e = {};
                return r[v].call(e) !== e
            }));
            g ? r = {} : p && (r = c(r)), s(r[v]) || f(r, v, (function() {
                return this
            })), e.exports = {
                IteratorPrototype: r,
                BUGGY_SAFARI_ITERATORS: h
            }
        },
        aeb0: function(e, t, n) {
            "use strict";
            var r = n("9bf2").f;
            e.exports = function(e, t, n) {
                n in e || r(e, n, {
                    configurable: !0,
                    get: function() {
                        return t[n]
                    },
                    set: function(e) {
                        t[n] = e
                    }
                })
            }
        },
        aed9: function(e, t, n) {
            "use strict";
            var r = n("83ab"),
                o = n("d039");
            e.exports = r && o((function() {
                return 42 !== Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        b041: function(e, t, n) {
            "use strict";
            var r = n("00ee"),
                o = n("f5df");
            e.exports = r ? {}.toString : function() {
                return "[object " + o(this) + "]"
            }
        },
        b42e: function(e, t, n) {
            "use strict";
            var r = Math.ceil,
                o = Math.floor;
            e.exports = Math.trunc || function(e) {
                var t = +e;
                return (t > 0 ? o : r)(t)
            }
        },
        b519: function(e, t, n) {
            "use strict";
            n("d3b7"), n("3ca3"), n("ddb0"), n("d9e2");
            var r = n("5fb0"),
                o = n("08ec"),
                i = n("4360");
            var a = function() {},
                s = function() {},
                u = function() {},
                c = function() {},
                l = function() {},
                f = ggWidgetUtil.get(window.widgetSdkConfig, "config.userProfile", {});

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.DEFAULT_LANGUAGE,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                n.e("upWidget.1.3.5-7d520390").then(n.t.bind(null, "ba2e", 7)).then((function(n) {
                    var o = window.widgetSdkConfig.config.type;
                    switch (o) {
                        case r.SDK_TYPE.REDIRECT:
                            n.openDialogWidgetHub(e, window.widgetSdkConfig.config);
                            break
                    }
                    l = n.toggleLoading, ggWidgetUtil.doTracking({
                        sdkType: o,
                        action: "init",
                        clientId: ggWidgetUtil.get(window.widgetSdkConfig, "config.clientId", 0),
                        callback: t
                    })
                }))
            }

            function p(e) {
                var t = e.lang,
                    n = void 0 === t ? r.DEFAULT_LANGUAGE : t,
                    o = e.element,
                    a = void 0 === o ? null : o,
                    s = e.callback,
                    u = void 0 === s ? function() {} : s;
                if (!ggWidgetUtil.empty(window.widgetSdkConfig.config)) {
                    var c = window.widgetSdkConfig.config.type;
                    switch (c) {
                        case r.SDK_TYPE.REDIRECT:
                            d(n, a, u);
                            break;
                        default:
                            throw (0, i.dispatch)("addError", {
                                type: "DO_AUTHENTICATION",
                                error: "Invalid SDK type - [".concat(c, "]. Please review the integration documentation.")
                            }), new Error("Invalid SDK type. Please review the integration documentation.")
                    }
                }
            }!ggWidgetUtil.empty(f) && f.enable && (ggWidgetUtil.empty(f.serviceId) || ggWidgetUtil.empty(f.ssoUri) || n.e("upWidget.1.3.5-5c19e016").then(n.t.bind(null, "226f", 7)).then((function(e) {
                a = e.renderUserProfile, s = e.getUserProfile, u = e.updateLocale, c = e.updateExtendData, ggWidgetUtil.empty(null === f || void 0 === f ? void 0 : f.locales) || e.updateLocale(f.locales), setTimeout((function() {
                    ggWidgetUtil.isFunction(null === f || void 0 === f ? void 0 : f.onReady) && f.onReady()
                }), 50)
            }))), e.exports = {
                doChangeLanguage: o.changeLanguage,
                doAuthentication: p,
                doToggleLoading: function() {
                    return l.apply(void 0, arguments)
                },
                onUpdateExtendData: function() {
                    return c.apply(void 0, arguments)
                },
                onGetUserProfile: function() {
                    return s.apply(void 0, arguments)
                },
                onUpdateLocale: function() {
                    return u.apply(void 0, arguments)
                },
                doRenderUserProfile: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.DEFAULT_LANGUAGE,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                    a(e, ggWidgetUtil.get(window.widgetSdkConfig, "config.userProfile", {}), t, n)
                }
            }
        },
        b622: function(e, t, n) {
            "use strict";
            var r = n("da84"),
                o = n("5692"),
                i = n("1a2d"),
                a = n("90e3"),
                s = n("04f8"),
                u = n("fdbf"),
                c = r.Symbol,
                l = o("wks"),
                f = u ? c["for"] || c : c && c.withoutSetter || a;
            e.exports = function(e) {
                return i(l, e) || (l[e] = s && i(c, e) ? c[e] : f("Symbol." + e)), l[e]
            }
        },
        b64b: function(e, t, n) {
            "use strict";
            var r = n("23e7"),
                o = n("7b0b"),
                i = n("df75"),
                a = n("d039"),
                s = a((function() {
                    i(1)
                }));
            r({
                target: "Object",
                stat: !0,
                forced: s
            }, {
                keys: function(e) {
                    return i(o(e))
                }
            })
        },
        b727: function(e, t, n) {
            "use strict";
            var r = n("0366"),
                o = n("e330"),
                i = n("44ad"),
                a = n("7b0b"),
                s = n("07fa"),
                u = n("65f0"),
                c = o([].push),
                l = function(e) {
                    var t = 1 === e,
                        n = 2 === e,
                        o = 3 === e,
                        l = 4 === e,
                        f = 6 === e,
                        d = 7 === e,
                        p = 5 === e || f;
                    return function(v, h, g, m) {
                        for (var y, b, _ = a(v), O = i(_), w = s(O), k = r(h, g), x = 0, S = m || u, j = t ? S(v, w) : n || d ? S(v, 0) : void 0; w > x; x++)
                            if ((p || x in O) && (y = O[x], b = k(y, x, _), e))
                                if (t) j[x] = b;
                                else if (b) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return y;
                            case 6:
                                return x;
                            case 2:
                                c(j, y)
                        } else switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                c(j, y)
                        }
                        return f ? -1 : o || l ? l : j
                    }
                };
            e.exports = {
                forEach: l(0),
                map: l(1),
                filter: l(2),
                some: l(3),
                every: l(4),
                find: l(5),
                findIndex: l(6),
                filterReject: l(7)
            }
        },
        b980: function(e, t, n) {
            "use strict";
            var r = n("d039"),
                o = n("5c6c");
            e.exports = !r((function() {
                var e = new Error("a");
                return !("stack" in e) || (Object.defineProperty(e, "stack", o(1, 7)), 7 !== e.stack)
            }))
        },
        bee2: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return i
            }));
            var r = n("a38e");

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Object(r["a"])(o.key), o)
                }
            }

            function i(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
        },
        c04e: function(e, t, n) {
            "use strict";
            var r = n("c65b"),
                o = n("861d"),
                i = n("d9b5"),
                a = n("dc4a"),
                s = n("485a"),
                u = n("b622"),
                c = TypeError,
                l = u("toPrimitive");
            e.exports = function(e, t) {
                if (!o(e) || i(e)) return e;
                var n, u = a(e, l);
                if (u) {
                    if (void 0 === t && (t = "default"), n = r(u, e, t), !o(n) || i(n)) return n;
                    throw new c("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), s(e, t)
            }
        },
        c2f9: function(e) {
            e.exports = JSON.parse('{"label.gg":"อีเมลหรือหมายเลขโทรศัพท์","label.gg_dim":"อีเมลหรือหมายเลขโทรศัพท์","label.email":"อีเมล","label.email_dim":"อีเมล","label.phone_number":"หมายเลขโทรศัพท์","label.phone_number_dim":"โทรศัพท์","label.zing":"Zing ID","label.zing_dim":"ZingID","label.apple":"Apple","label.apple_dim":"Apple","label.google":"Google","label.google_dim":"Google","label.facebook":"Facebook","label.facebook_dim":"Facebook","label.protected_guest":"เล่นเดี๋ยวนี้","label.protected_guest_dim":"เล่นเดี๋ยวนี้","label.role_id":"รหัสบทบาท (Role ID)","label.role_id_dim":"Role ID","label.error":"ข้อผิดพลาด","title":"เข้าสู่ระบบ","subtitle":"บัญชีเดียวสำหรับทุก VNGGames","error.errorInput":"การกำหนดค่าไม่ถูกต้อง","button.ok":"ตกลง","callbackError":"การตรวจสอบสิทธิ์ล้มเหลว","or":"หรือใช้","orByGame":"หรือใช้ \'เล่นเดี๋ยวนี้\' เพื่อเข้าสู่ระบบ","gameList.title":"เข้าสู่ระบบ","gameList.subtitle":"เลือกเกมและเข้าสู่ระบบด้วยบัญชี \\"เล่นเลย\\" ของคุณ","gameList.subtitle.mobile":"เข้าสู่ระบบด้วยบัญชี \\"เล่นเลย\\" ของคุณ","gameList.placeholder":"ค้นหาเกมที่คุณกำลังเล่น","gameList.searchNotFound":"ไม่พบเกมที่คุณกำลังค้นหา","button.back":"ย้อนกลับ","button.continue":"ดำเนินการต่อ","AccountCenter":"ศูนย์บัญชี","Logout":"ออกจากระบบ","Territory":"บริเวณ","button.login":"เข้าสู่ระบบ","userProfile.gameNotPlay":"คุณยังไม่ได้เล่นเกมนี้หรือไม่มีตัวละครในเกม","userProfile.loginSource":"แหล่งเข้าสู่ระบบจากบัญชี {{loginMethod}} ของ \\"{{gameName}}\\""}')
        },
        c430: function(e, t, n) {
            "use strict";
            e.exports = !1
        },
        c473: function(e) {
            e.exports = JSON.parse('{"label.gg":"电子邮件或电话","label.gg_dim":"电子邮件/电话","label.email":"电子邮件","label.email_dim":"电子邮件","label.phone_number":"电话号码","label.phone_number_dim":"电话","label.zing":"Zing ID","label.zing_dim":"Zing ID","label.apple":"Apple","label.apple_dim":"Apple","label.google":"Google","label.google_dim":"Google","label.facebook":"Facebook","label.facebook_dim":"Facebook","label.protected_guest":"立即开始","label.protected_guest_dim":"立即开始","label.role_id":"角色 ID","label.role_id_dim":"角色 ID","label.error":"错误","title":"登录","subtitle":"VNGGames 的通用帐户","error.errorInput":"配置不正确。","button.ok":"确定","callbackError":"验证失败。","or":"或者使用","orByGame":"或使用“立即玩”登录","gameList.title":"登录","gameList.subtitle":"选择游戏并使用“立即玩”帐户登录","gameList.subtitle.mobile":"使用“立即玩”帐户登录","gameList.placeholder":"查找您正在玩的游戏","gameList.searchNotFound":"未找到您要找的游戏","button.back":"返回","button.continue":"继续","AccountCenter":"账户中心","Logout":"退出","Territory":"领地","button.login":"登录","userProfile.gameNotPlay":"您尚未玩过此游戏或在游戏中没有角色。","userProfile.loginSource":"来自{{loginMethod}}帐户的登录来源 \\"{{gameName}}\\""}')
        },
        c65b: function(e, t, n) {
            "use strict";
            var r = n("40d5"),
                o = Function.prototype.call;
            e.exports = r ? o.bind(o) : function() {
                return o.apply(o, arguments)
            }
        },
        c6b6: function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = r({}.toString),
                i = r("".slice);
            e.exports = function(e) {
                return i(o(e), 8, -1)
            }
        },
        c6cd: function(e, t, n) {
            "use strict";
            var r = n("da84"),
                o = n("6374"),
                i = "__core-js_shared__",
                a = r[i] || o(i, {});
            e.exports = a
        },
        c6d2: function(e, t, n) {
            "use strict";
            var r = n("23e7"),
                o = n("c65b"),
                i = n("c430"),
                a = n("5e77"),
                s = n("1626"),
                u = n("dcc3"),
                c = n("e163"),
                l = n("d2bb"),
                f = n("d44e"),
                d = n("9112"),
                p = n("cb2d"),
                v = n("b622"),
                h = n("3f8c"),
                g = n("ae93"),
                m = a.PROPER,
                y = a.CONFIGURABLE,
                b = g.IteratorPrototype,
                _ = g.BUGGY_SAFARI_ITERATORS,
                O = v("iterator"),
                w = "keys",
                k = "values",
                x = "entries",
                S = function() {
                    return this
                };
            e.exports = function(e, t, n, a, v, g, j) {
                u(n, t, a);
                var E, P, C, L = function(e) {
                        if (e === v && I) return I;
                        if (!_ && e && e in A) return A[e];
                        switch (e) {
                            case w:
                                return function() {
                                    return new n(this, e)
                                };
                            case k:
                                return function() {
                                    return new n(this, e)
                                };
                            case x:
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this)
                        }
                    },
                    T = t + " Iterator",
                    N = !1,
                    A = e.prototype,
                    D = A[O] || A["@@iterator"] || v && A[v],
                    I = !_ && D || L(v),
                    R = "Array" === t && A.entries || D;
                if (R && (E = c(R.call(new e)), E !== Object.prototype && E.next && (i || c(E) === b || (l ? l(E, b) : s(E[O]) || p(E, O, S)), f(E, T, !0, !0), i && (h[T] = S))), m && v === k && D && D.name !== k && (!i && y ? d(A, "name", k) : (N = !0, I = function() {
                        return o(D, this)
                    })), v)
                    if (P = {
                            values: L(k),
                            keys: g ? I : L(w),
                            entries: L(x)
                        }, j)
                        for (C in P)(_ || N || !(C in A)) && p(A, C, P[C]);
                    else r({
                        target: t,
                        proto: !0,
                        forced: _ || N
                    }, P);
                return i && !j || A[O] === I || p(A, O, I, {
                    name: v
                }), h[t] = I, P
            }
        },
        c8ba: function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (r) {
                "object" === typeof window && (n = window)
            }
            e.exports = n
        },
        ca84: function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = n("1a2d"),
                i = n("fc6a"),
                a = n("4d64").indexOf,
                s = n("d012"),
                u = r([].push);
            e.exports = function(e, t) {
                var n, r = i(e),
                    c = 0,
                    l = [];
                for (n in r) !o(s, n) && o(r, n) && u(l, n);
                while (t.length > c) o(r, n = t[c++]) && (~a(l, n) || u(l, n));
                return l
            }
        },
        caad: function(e, t, n) {
            "use strict";
            var r = n("23e7"),
                o = n("4d64").includes,
                i = n("d039"),
                a = n("44d2"),
                s = i((function() {
                    return !Array(1).includes()
                }));
            r({
                target: "Array",
                proto: !0,
                forced: s
            }, {
                includes: function(e) {
                    return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), a("includes")
        },
        cb2d: function(e, t, n) {
            "use strict";
            var r = n("1626"),
                o = n("9bf2"),
                i = n("13d2"),
                a = n("6374");
            e.exports = function(e, t, n, s) {
                s || (s = {});
                var u = s.enumerable,
                    c = void 0 !== s.name ? s.name : t;
                if (r(n) && i(n, c, s), s.global) u ? e[t] = n : a(t, n);
                else {
                    try {
                        s.unsafe ? e[t] && (u = !0) : delete e[t]
                    } catch (l) {}
                    u ? e[t] = n : o.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !s.nonConfigurable,
                        writable: !s.nonWritable
                    })
                }
                return e
            }
        },
        cc12: function(e, t, n) {
            "use strict";
            var r = n("da84"),
                o = n("861d"),
                i = r.document,
                a = o(i) && o(i.createElement);
            e.exports = function(e) {
                return a ? i.createElement(e) : {}
            }
        },
        cd85: function(e, t, n) {
            var r = {
                "./user-profile.json": "2b1d"
            };

            function o(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }, o.resolve = i, e.exports = o, o.id = "cd85"
        },
        cdce: function(e, t, n) {
            "use strict";
            var r = n("da84"),
                o = n("1626"),
                i = r.WeakMap;
            e.exports = o(i) && /native code/.test(String(i))
        },
        d012: function(e, t, n) {
            "use strict";
            e.exports = {}
        },
        d039: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (t) {
                    return !0
                }
            }
        },
        d066: function(e, t, n) {
            "use strict";
            var r = n("da84"),
                o = n("1626"),
                i = function(e) {
                    return o(e) ? e : void 0
                };
            e.exports = function(e, t) {
                return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
            }
        },
        d1e7: function(e, t, n) {
            "use strict";
            var r = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                i = o && !r.call({
                    1: 2
                }, 1);
            t.f = i ? function(e) {
                var t = o(this, e);
                return !!t && t.enumerable
            } : r
        },
        d2a3: function(e, t, n) {
            "use strict";

            function r(e, {
                i18next: t,
                rerenderOn: n = ["languageChanged", "loaded", "added", "removed"]
            }) {
                const r = t.t.bind(t),
                    o = e.observable({
                        lastI18nChange: new Date
                    }),
                    i = () => o.lastI18nChange = new Date,
                    a = () => o.lastI18nChange;

                function s(e, n) {
                    return e ? t.getFixedT(e, n) : n ? t.getFixedT(null, n) : r
                }

                function u(e) {
                    const n = t.options.nsSeparator;
                    return "string" === typeof n && e.includes(n)
                }

                function c(e, n) {
                    let r, o, i;
                    if (e.i18nOptions) {
                        let a, s;
                        ({
                            lng: r,
                            namespaces: s = t.options.defaultNS,
                            keyPrefix: i,
                            messages: a
                        } = e.i18nOptions), a && n(a), o = "string" === typeof s ? [s] : s, o && t.loadNamespaces(o)
                    }
                    return {
                        lng: r,
                        ns: o,
                        keyPrefix: i
                    }
                }
                n.forEach(e => {
                    var n;
                    switch (e) {
                        case "added":
                        case "removed":
                            null === (n = t.store) || void 0 === n || n.on(e, i);
                            break;
                        default:
                            t.on(e, i);
                            break
                    }
                }), e.mixin({
                    beforeCreate() {
                        var e, n;
                        const r = this.$options;
                        if (!r.__i18n && !r.i18nOptions) return void(this.__translate = void 0);
                        const o = this.$options.name,
                            i = (Math.random() * 10 ** 8 | 0).toString(),
                            a = [o, i].filter(e => !!e).join("-");
                        this.__bundles = [];
                        const l = e => {
                            Object.entries(e).forEach(([e, n]) => {
                                t.addResourceBundle(e, a, n, !0, !1), this.__bundles.push([e, a])
                            })
                        };
                        null === (e = r.__i18n) || void 0 === e || e.forEach(e => {
                            l(JSON.parse(e))
                        });
                        let {
                            lng: f,
                            ns: d,
                            keyPrefix: p
                        } = c(r, l);
                        (null === (n = this.__bundles) || void 0 === n ? void 0 : n.length) && (d = [a].concat(null !== d && void 0 !== d ? d : []));
                        const v = s(f, d);
                        this.__translate = (e, t) => !p || u(e) ? v(e, t) : v(p + "." + e, t)
                    },
                    destroyed() {
                        var e;
                        null === (e = this.__bundles) || void 0 === e || e.forEach(([e, n]) => t.removeResourceBundle(e, n))
                    }
                }), e.prototype.$t = function(e, n) {
                    var o;
                    return a(), t.isInitialized ? (null !== (o = null === this || void 0 === this ? void 0 : this.__translate) && void 0 !== o ? o : r)(e, n) : e
                }, e.prototype.$i18next = "function" === typeof Proxy ? new Proxy(t, {
                    get(e, t) {
                        return a(), Reflect.get(e, t)
                    }
                }) : t;
                const l = new RegExp("{\\s*([a-z0-9\\-]+)\\s*}", "gi"),
                    f = {
                        functional: !0,
                        props: {
                            translation: {
                                type: String,
                                required: !0
                            }
                        },
                        render(e, t) {
                            const n = t._v,
                                r = t.props.translation,
                                o = [];
                            let i, a = 0;
                            while (null !== (i = l.exec(r))) {
                                o.push(n(r.substring(a, i.index)));
                                const e = t.scopedSlots[i[1]];
                                if (e) {
                                    const t = e({});
                                    null === t || void 0 === t || t.forEach(e => o.push(e))
                                } else o.push(n(i[0]));
                                a = l.lastIndex
                            }
                            return o.push(n(r.substring(a))), o
                        }
                    };
                e.component("i18next", f)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r
        },
        d2bb: function(e, t, n) {
            "use strict";
            var r = n("7282"),
                o = n("825a"),
                i = n("3bbe");
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var e, t = !1,
                    n = {};
                try {
                    e = r(Object.prototype, "__proto__", "set"), e(n, []), t = n instanceof Array
                } catch (a) {}
                return function(n, r) {
                    return o(n), i(r), t ? e(n, r) : n.__proto__ = r, n
                }
            }() : void 0)
        },
        d3b7: function(e, t, n) {
            "use strict";
            var r = n("00ee"),
                o = n("cb2d"),
                i = n("b041");
            r || o(Object.prototype, "toString", i, {
                unsafe: !0
            })
        },
        d44e: function(e, t, n) {
            "use strict";
            var r = n("9bf2").f,
                o = n("1a2d"),
                i = n("b622"),
                a = i("toStringTag");
            e.exports = function(e, t, n) {
                e && !n && (e = e.prototype), e && !o(e, a) && r(e, a, {
                    configurable: !0,
                    value: t
                })
            }
        },
        d4ec: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.r(t), n.d(t, "default", (function() {
                return r
            }))
        },
        d9b5: function(e, t, n) {
            "use strict";
            var r = n("d066"),
                o = n("1626"),
                i = n("3a9b"),
                a = n("fdbf"),
                s = Object;
            e.exports = a ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                var t = r("Symbol");
                return o(t) && i(t.prototype, s(e))
            }
        },
        d9e2: function(e, t, n) {
            "use strict";
            var r = n("23e7"),
                o = n("da84"),
                i = n("2ba4"),
                a = n("e5cb"),
                s = "WebAssembly",
                u = o[s],
                c = 7 !== new Error("e", {
                    cause: 7
                }).cause,
                l = function(e, t) {
                    var n = {};
                    n[e] = a(e, t, c), r({
                        global: !0,
                        constructor: !0,
                        arity: 1,
                        forced: c
                    }, n)
                },
                f = function(e, t) {
                    if (u && u[e]) {
                        var n = {};
                        n[e] = a(s + "." + e, t, c), r({
                            target: s,
                            stat: !0,
                            constructor: !0,
                            arity: 1,
                            forced: c
                        }, n)
                    }
                };
            l("Error", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            })), l("EvalError", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            })), l("RangeError", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            })), l("ReferenceError", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            })), l("SyntaxError", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            })), l("TypeError", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            })), l("URIError", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            })), f("CompileError", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            })), f("LinkError", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            })), f("RuntimeError", (function(e) {
                return function(t) {
                    return i(e, this, arguments)
                }
            }))
        },
        da84: function(e, t, n) {
            "use strict";
            (function(t) {
                var n = function(e) {
                    return e && e.Math === Math && e
                };
                e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || n("object" == typeof this && this) || function() {
                    return this
                }() || Function("return this")()
            }).call(this, n("c8ba"))
        },
        db90: function(e, t, n) {
            "use strict";

            function r(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        dbce: function(e, t, n) {
            var r = n("7037")["default"];

            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (o = function(e) {
                    return e ? n : t
                })(e)
            }

            function i(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != r(e) && "function" != typeof e) return {
                    default: e
                };
                var n = o(t);
                if (n && n.has(e)) return n.get(e);
                var i = {
                        __proto__: null
                    },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                        u && (u.get || u.set) ? Object.defineProperty(i, s, u) : i[s] = e[s]
                    }
                return i["default"] = e, n && n.set(e, i), i
            }
            e.exports = i, e.exports.__esModule = !0, e.exports["default"] = e.exports
        },
        dc4a: function(e, t, n) {
            "use strict";
            var r = n("59ed"),
                o = n("7234");
            e.exports = function(e, t) {
                var n = e[t];
                return o(n) ? void 0 : r(n)
            }
        },
        dcc3: function(e, t, n) {
            "use strict";
            var r = n("ae93").IteratorPrototype,
                o = n("7c73"),
                i = n("5c6c"),
                a = n("d44e"),
                s = n("3f8c"),
                u = function() {
                    return this
                };
            e.exports = function(e, t, n, c) {
                var l = t + " Iterator";
                return e.prototype = o(r, {
                    next: i(+!c, n)
                }), a(e, l, !1, !0), s[l] = u, e
            }
        },
        ddb0: function(e, t, n) {
            "use strict";
            var r = n("da84"),
                o = n("fdbc"),
                i = n("785a"),
                a = n("e260"),
                s = n("9112"),
                u = n("d44e"),
                c = n("b622"),
                l = c("iterator"),
                f = a.values,
                d = function(e, t) {
                    if (e) {
                        if (e[l] !== f) try {
                            s(e, l, f)
                        } catch (r) {
                            e[l] = f
                        }
                        if (u(e, t, !0), o[t])
                            for (var n in a)
                                if (e[n] !== a[n]) try {
                                    s(e, n, a[n])
                                } catch (r) {
                                    e[n] = a[n]
                                }
                    }
                };
            for (var p in o) d(r[p] && r[p].prototype, p);
            d(i, "DOMTokenList")
        },
        df75: function(e, t, n) {
            "use strict";
            var r = n("ca84"),
                o = n("7839");
            e.exports = Object.keys || function(e) {
                return r(e, o)
            }
        },
        e163: function(e, t, n) {
            "use strict";
            var r = n("1a2d"),
                o = n("1626"),
                i = n("7b0b"),
                a = n("f772"),
                s = n("e177"),
                u = a("IE_PROTO"),
                c = Object,
                l = c.prototype;
            e.exports = s ? c.getPrototypeOf : function(e) {
                var t = i(e);
                if (r(t, u)) return t[u];
                var n = t.constructor;
                return o(n) && t instanceof n ? n.prototype : t instanceof c ? l : null
            }
        },
        e177: function(e, t, n) {
            "use strict";
            var r = n("d039");
            e.exports = !r((function() {
                function e() {}
                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            }))
        },
        e260: function(e, t, n) {
            "use strict";
            var r = n("fc6a"),
                o = n("44d2"),
                i = n("3f8c"),
                a = n("69f3"),
                s = n("9bf2").f,
                u = n("c6d2"),
                c = n("4754"),
                l = n("c430"),
                f = n("83ab"),
                d = "Array Iterator",
                p = a.set,
                v = a.getterFor(d);
            e.exports = u(Array, "Array", (function(e, t) {
                p(this, {
                    type: d,
                    target: r(e),
                    index: 0,
                    kind: t
                })
            }), (function() {
                var e = v(this),
                    t = e.target,
                    n = e.index++;
                if (!t || n >= t.length) return e.target = void 0, c(void 0, !0);
                switch (e.kind) {
                    case "keys":
                        return c(n, !1);
                    case "values":
                        return c(t[n], !1)
                }
                return c([n, t[n]], !1)
            }), "values");
            var h = i.Arguments = i.Array;
            if (o("keys"), o("values"), o("entries"), !l && f && "values" !== h.name) try {
                s(h, "name", {
                    value: "values"
                })
            } catch (g) {}
        },
        e267: function(e, t, n) {
            "use strict";
            var r = n("e330"),
                o = n("e8b5"),
                i = n("1626"),
                a = n("c6b6"),
                s = n("577e"),
                u = r([].push);
            e.exports = function(e) {
                if (i(e)) return e;
                if (o(e)) {
                    for (var t = e.length, n = [], r = 0; r < t; r++) {
                        var c = e[r];
                        "string" == typeof c ? u(n, c) : "number" != typeof c && "Number" !== a(c) && "String" !== a(c) || u(n, s(c))
                    }
                    var l = n.length,
                        f = !0;
                    return function(e, t) {
                        if (f) return f = !1, t;
                        if (o(this)) return t;
                        for (var r = 0; r < l; r++)
                            if (n[r] === e) return t
                    }
                }
            }
        },
        e330: function(e, t, n) {
            "use strict";
            var r = n("40d5"),
                o = Function.prototype,
                i = o.call,
                a = r && o.bind.bind(i, i);
            e.exports = r ? a : function(e) {
                return function() {
                    return i.apply(e, arguments)
                }
            }
        },
        e391: function(e, t, n) {
            "use strict";
            var r = n("577e");
            e.exports = function(e, t) {
                return void 0 === e ? arguments.length < 2 ? "" : t : r(e)
            }
        },
        e5cb: function(e, t, n) {
            "use strict";
            var r = n("d066"),
                o = n("1a2d"),
                i = n("9112"),
                a = n("3a9b"),
                s = n("d2bb"),
                u = n("e893"),
                c = n("aeb0"),
                l = n("7156"),
                f = n("e391"),
                d = n("ab36"),
                p = n("6f19"),
                v = n("83ab"),
                h = n("c430");
            e.exports = function(e, t, n, g) {
                var m = "stackTraceLimit",
                    y = g ? 2 : 1,
                    b = e.split("."),
                    _ = b[b.length - 1],
                    O = r.apply(null, b);
                if (O) {
                    var w = O.prototype;
                    if (!h && o(w, "cause") && delete w.cause, !n) return O;
                    var k = r("Error"),
                        x = t((function(e, t) {
                            var n = f(g ? t : e, void 0),
                                r = g ? new O(e) : new O;
                            return void 0 !== n && i(r, "message", n), p(r, x, r.stack, 2), this && a(w, this) && l(r, this, x), arguments.length > y && d(r, arguments[y]), r
                        }));
                    if (x.prototype = w, "Error" !== _ ? s ? s(x, k) : u(x, k, {
                            name: !0
                        }) : v && m in O && (c(x, O, m), c(x, O, "prepareStackTrace")), u(x, O), !h) try {
                        w.name !== _ && i(w, "name", _), w.constructor = x
                    } catch (S) {}
                    return x
                }
            }
        },
        e893: function(e, t, n) {
            "use strict";
            var r = n("1a2d"),
                o = n("56ef"),
                i = n("06cf"),
                a = n("9bf2");
            e.exports = function(e, t, n) {
                for (var s = o(t), u = a.f, c = i.f, l = 0; l < s.length; l++) {
                    var f = s[l];
                    r(e, f) || n && r(n, f) || u(e, f, c(t, f))
                }
            }
        },
        e8b5: function(e, t, n) {
            "use strict";
            var r = n("c6b6");
            e.exports = Array.isArray || function(e) {
                return "Array" === r(e)
            }
        },
        e9c4: function(e, t, n) {
            "use strict";
            var r = n("23e7"),
                o = n("d066"),
                i = n("2ba4"),
                a = n("c65b"),
                s = n("e330"),
                u = n("d039"),
                c = n("1626"),
                l = n("d9b5"),
                f = n("f36a"),
                d = n("e267"),
                p = n("04f8"),
                v = String,
                h = o("JSON", "stringify"),
                g = s(/./.exec),
                m = s("".charAt),
                y = s("".charCodeAt),
                b = s("".replace),
                _ = s(1..toString),
                O = /[\uD800-\uDFFF]/g,
                w = /^[\uD800-\uDBFF]$/,
                k = /^[\uDC00-\uDFFF]$/,
                x = !p || u((function() {
                    var e = o("Symbol")("stringify detection");
                    return "[null]" !== h([e]) || "{}" !== h({
                        a: e
                    }) || "{}" !== h(Object(e))
                })),
                S = u((function() {
                    return '"\\udf06\\ud834"' !== h("\udf06\ud834") || '"\\udead"' !== h("\udead")
                })),
                j = function(e, t) {
                    var n = f(arguments),
                        r = d(t);
                    if (c(r) || void 0 !== e && !l(e)) return n[1] = function(e, t) {
                        if (c(r) && (t = a(r, this, v(e), t)), !l(t)) return t
                    }, i(h, null, n)
                },
                E = function(e, t, n) {
                    var r = m(n, t - 1),
                        o = m(n, t + 1);
                    return g(w, e) && !g(k, o) || g(k, e) && !g(w, r) ? "\\u" + _(y(e, 0), 16) : e
                };
            h && r({
                target: "JSON",
                stat: !0,
                arity: 3,
                forced: x || S
            }, {
                stringify: function(e, t, n) {
                    var r = f(arguments),
                        o = i(x ? j : h, null, r);
                    return S && "string" == typeof o ? b(o, O, E) : o
                }
            })
        },
        f36a: function(e, t, n) {
            "use strict";
            var r = n("e330");
            e.exports = r([].slice)
        },
        f5df: function(e, t, n) {
            "use strict";
            var r = n("00ee"),
                o = n("1626"),
                i = n("c6b6"),
                a = n("b622"),
                s = a("toStringTag"),
                u = Object,
                c = "Arguments" === i(function() {
                    return arguments
                }()),
                l = function(e, t) {
                    try {
                        return e[t]
                    } catch (n) {}
                };
            e.exports = r ? i : function(e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = l(t = u(e), s)) ? n : c ? i(t) : "Object" === (r = i(t)) && o(t.callee) ? "Arguments" : r
            }
        },
        f772: function(e, t, n) {
            "use strict";
            var r = n("5692"),
                o = n("90e3"),
                i = r("keys");
            e.exports = function(e) {
                return i[e] || (i[e] = o(e))
            }
        },
        f854: function(e, t, n) {
            var r = {
                "./user-profile.json": "c473"
            };

            function o(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }, o.resolve = i, e.exports = o, o.id = "f854"
        },
        fc6a: function(e, t, n) {
            "use strict";
            var r = n("44ad"),
                o = n("1d80");
            e.exports = function(e) {
                return r(o(e))
            }
        },
        fdbc: function(e, t, n) {
            "use strict";
            e.exports = {
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
        },
        fdbf: function(e, t, n) {
            "use strict";
            var r = n("04f8");
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }
    })
}));