"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [762], {
        179: function(e, i, t) {
            function n(e) {
                var i = e.src,
                    t = e.width,
                    n = e.quality;
                return "".concat(i, "?w=").concat(t, "&q=").concat(n || 75)
            }
            t.r(i), t.d(i, {
                default: function() {
                    return n
                }
            })
        },
        6805: function(e, i, t) {
            t.d(i, {
                G: function() {
                    return r
                },
                U: function() {
                    return c
                }
            });
            var n, o, a = t(6687),
                s = t(44),
                d = t(1299),
                c = (n = (0, a._)(function(e) {
                    var i, t, n, o, a;
                    return (0, s.Jh)(this, function(s) {
                        return n = (i = e.request).data, o = null === (t = window) || void 0 === t ? void 0 : t.dataLayer, (a = (0, d.ej)("ah-uuid")) || (a = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function(e) {
                            return (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
                        }), (0, d.d8)("ah-uuid", a)), n.device_id = a, o.push(n), [2, {
                            requestId: i.id,
                            data: "success"
                        }]
                    })
                }), function(e) {
                    return n.apply(this, arguments)
                }),
                r = (o = (0, a._)(function(e) {
                    var i, t;
                    return (0, s.Jh)(this, function(n) {
                        return i = e.request, console.log(null === (t = window) || void 0 === t ? void 0 : t.dataLayer), [2, {
                            requestId: i.id,
                            data: "success"
                        }]
                    })
                }), function(e) {
                    return o.apply(this, arguments)
                })
        },
        6367: function(e, i, t) {
            t.d(i, {
                m: function() {
                    return M
                }
            });
            var n, o, a, s, d = t(6687),
                c = t(5029),
                r = t(8965),
                l = t(44),
                u = t(7437);

            function m() {
                return (m = (0, d._)(function(e, i) {
                    var t, n, o, a, s, d, r, u, m, h, g, p;
                    return (0, l.Jh)(this, function(l) {
                        switch (l.label) {
                            case 0:
                                i.headers = (0, c._)({
                                    apiKey: "fIEz+ZPhmBbTDIDNkuz6YXmMhUD8sqtvzZL+0059g3E="
                                }, i.headers), (null == i ? void 0 : null === (t = i.body) || void 0 === t ? void 0 : t.webshopRoleToken) && (i.headers.Authorization = "Bearer ".concat(null == i ? void 0 : null === (n = i.body) || void 0 === n ? void 0 : n.webshopRoleToken)), l.label = 1;
                            case 1:
                                return l.trys.push([1, 9, , 10]), [4, function(e, i) {
                                    return v.apply(this, arguments)
                                }("".concat("https://ah.vnggames.com").concat(e), i)];
                            case 2:
                                if ((o = l.sent()).ok) return [3, 7];
                                a = "", l.label = 3;
                            case 3:
                                return l.trys.push([3, 5, , 6]), [4, o.text()];
                            case 4:
                                return a = l.sent(), [3, 6];
                            case 5:
                                return l.sent(), a = "n/a", [3, 6];
                            case 6:
                                throw {
                                    status: o.status,
                                    code: o.statusText,
                                    message: a
                                };
                            case 7:
                                return [4, o.json()];
                            case 8:
                                if ((s = l.sent()).ero) throw {
                                    status: 400,
                                    code: s.ero.code,
                                    message: s.ero.message
                                };
                                return [2, {
                                    status: 200,
                                    data: s.data
                                }];
                            case 9:
                                if (r = (d = l.sent()).cause) throw "".concat(null !== (u = null == r ? void 0 : r.errno) && void 0 !== u ? u : 500, " - ").concat(null !== (m = null == r ? void 0 : r.code) && void 0 !== m ? m : "n/a", " - ").concat(null !== (h = null == r ? void 0 : r.message) && void 0 !== h ? h : "n/a");
                                throw "".concat(null !== (g = null == d ? void 0 : d.status) && void 0 !== g ? g : "n/a", " - ").concat(null !== (p = null == d ? void 0 : d.code) && void 0 !== p ? p : "n/a", " - ").concat(d.message);
                            case 10:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function v() {
                return (v = (0, d._)(function(e, i) {
                    var t, n, o, a, s, d, u;
                    return (0, l.Jh)(this, function(l) {
                        return t = i.method, n = i.params, o = i.headers, a = i.body, s = i.revalidate, n && Object.keys(n).length > 0 && ("GET" === t || "DELETE" === t) && (d = new URLSearchParams(n).toString(), e += "?".concat(d)), u = {
                            method: t,
                            headers: o ? new Headers(o) : void 0
                        }, void 0 != i.revalidate && (u.next = {
                            revalidate: s
                        }), "POST" !== t && "PUT" !== t && "PATCH" !== t || !a || (u.body = JSON.stringify(a), o && o["Content-Type"] || (u.headers = new Headers((0, r._)((0, c._)({}, o), {
                            "Content-Type": "application/json"
                        })))), [2, fetch(e, u)]
                    })
                })).apply(this, arguments)
            }
            var h = (n = (0, d._)(function(e) {
                    return (0, l.Jh)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [3, 2];
                            case 1:
                                return [2, i.sent().default];
                            case 2:
                                return [4, function(e, i) {
                                    return m.apply(this, arguments)
                                }("/api/v1/broadcast/items/suggest", {
                                    method: "POST",
                                    body: e,
                                    revalidate: 0
                                })];
                            case 3:
                                return [2, i.sent().data]
                        }
                    })
                }), function(e) {
                    return n.apply(this, arguments)
                }),
                g = function(e) {
                    var i = e.width;
                    return i < 768 ? "mobile" : i < 1024 ? "tablet" : "pc"
                },
                p = t(1801);
            (o = s || (s = {})).HOVER = "gtm-hover-event", o.CLICK_REDIRECT = "gtm-click-redirect-event", o.CLICK_READ_MORE = "gtm-click-read-more-event", o.CLICK_COLLAPSE = "gtm-click-collapse-event", o.CLICK_EXTEND_CONTENT = "gtm-click-extend-content-event", o.CLICK_SHORTEN_CONTENT = "gtm-click-shorten-content-event", o.CLICK_CLOSE = "gtm-click-close-event";
            var f = function(e) {
                    return JSON.stringify(e)
                },
                x = t(7042);
            t(2265);
            var j = t(6691),
                w = t.n(j),
                C = function(e) {
                    var i, t = e.itemId,
                        n = e.title,
                        o = e.desc,
                        a = e.link,
                        d = e.img,
                        c = e.greeting,
                        r = e.cta,
                        l = e.appIcon,
                        m = e.action,
                        v = e.ggId,
                        h = e.deviceConfig,
                        g = void 0 === h ? {
                            position: "middle-left"
                        } : h;
                    return (0, u.jsxs)("div", {
                        className: (0, x.Z)(["um-card-wrapper"].concat((0, p._)((null == g ? void 0 : null === (i = g.position) || void 0 === i ? void 0 : i.split("-")) || []))),
                        children: [(0, u.jsxs)("div", {
                            className: "um-card-content-wrapper",
                            "data-id": s.HOVER,
                            "t-id": t,
                            children: [(0, u.jsx)(w(), {
                                src: d,
                                alt: "um-banner",
                                className: "um-card-banner",
                                width: 272,
                                height: 272,
                                priority: !0
                            }), (0, u.jsx)("div", {
                                className: "um-card-content-container",
                                children: (0, u.jsxs)("div", {
                                    className: "um-card-content",
                                    children: [(0, u.jsx)(w(), {
                                        src: void 0 === l ? "https://cdn.omnirise.com/cms/logo_rewards_c7faeb41bf.svg" : l,
                                        alt: "um-logo",
                                        className: "um-card-logo",
                                        width: 22,
                                        height: 22,
                                        priority: !0
                                    }), (0, u.jsx)("p", {
                                        className: "um-card-name",
                                        children: "".concat(void 0 === c ? "Bạn ơi" : c, ",")
                                    }), (0, u.jsx)("div", {
                                        className: "um-card-title",
                                        children: n
                                    }), (0, u.jsx)("div", {
                                        className: "um-card-desc",
                                        children: o
                                    }), (0, u.jsxs)("div", {
                                        className: "um-card-button-link",
                                        children: [(0, u.jsxs)("button", {
                                            "data-action": m,
                                            "data-href": a,
                                            "data-ggid": v,
                                            className: "um-card-button",
                                            "data-id": s.CLICK_REDIRECT,
                                            "t-id": t,
                                            children: [(0, u.jsx)("p", {
                                                className: "",
                                                children: void 0 === r ? "Truy cập ngay" : r
                                            }), (0, u.jsx)("div", {
                                                className: "um-card-button-arrow",
                                                children: (0, u.jsx)(w(), {
                                                    src: "".concat("https://ah.vnggames.com", "/assets/icons/arrow-right.svg"),
                                                    alt: "arrow-right",
                                                    width: 16,
                                                    height: 16
                                                })
                                            })]
                                        }), (0, u.jsx)("div", {
                                            className: "um-card-read-more",
                                            style: {
                                                color: "white"
                                            },
                                            "data-id": s.CLICK_EXTEND_CONTENT,
                                            "t-id": t,
                                            children: "Xem th\xeam"
                                        })]
                                    })]
                                })
                            })]
                        }), (0, u.jsx)("div", {
                            className: "um-card-button-transform",
                            "data-id": s.CLICK_COLLAPSE,
                            "t-id": t,
                            children: (0, u.jsx)(w(), {
                                src: "".concat("https://ah.vnggames.com", "/assets/icons/arrow-left-not-line.svg"),
                                alt: "collapse-btn",
                                width: 20,
                                height: 20
                            })
                        })]
                    })
                },
                N = t(6840),
                k = function(e) {
                    var i, t = e.itemId,
                        n = e.link,
                        o = e.img,
                        a = e.action,
                        d = e.ggId,
                        c = e.deviceConfig,
                        r = void 0 === c ? {
                            position: "middle-left"
                        } : c;
                    return (0, u.jsx)("div", {
                        className: (0, x.Z)(["um-image-only-wrapper"].concat((0, p._)((null == r ? void 0 : null === (i = r.position) || void 0 === i ? void 0 : i.split("-")) || [])), (0, N._)({}, "".concat(null == r ? void 0 : r.size), !!(null == r ? void 0 : r.size))),
                        children: (0, u.jsxs)("div", {
                            className: "um-image-only-content-wrapper",
                            children: [(0, u.jsx)("button", {
                                "data-action": a,
                                "data-href": n,
                                "data-ggid": d,
                                className: "um-image-only-image-container",
                                "data-id": "".concat(s.CLICK_REDIRECT, " ").concat(s.HOVER),
                                "t-id": t,
                                children: (0, u.jsx)(w(), {
                                    src: o,
                                    alt: "um-banner",
                                    width: 176,
                                    height: 176,
                                    className: "um-image-only-banner",
                                    priority: !0
                                })
                            }), (0, u.jsx)("div", {
                                className: "um-image-only-close-btn",
                                "data-id": s.CLICK_CLOSE,
                                "t-id": t,
                                children: (0, u.jsx)(w(), {
                                    src: "".concat("https://ah.vnggames.com", "/assets/icons/close-icon.svg"),
                                    alt: "close-icon",
                                    className: "um-image-only-close-icon",
                                    width: 16,
                                    height: 16,
                                    priority: !0
                                })
                            })]
                        })
                    })
                },
                I = function(e) {
                    var i, t = e.itemId,
                        n = e.title,
                        o = e.desc,
                        a = e.img,
                        d = e.link,
                        c = e.smallStyle,
                        r = e.horizontalStyle,
                        l = e.action,
                        m = e.ggId,
                        v = e.deviceConfig,
                        h = void 0 === v ? {
                            position: "middle-left"
                        } : v;
                    return (0, u.jsx)("div", {
                        className: (0, x.Z)(["um-modal-wrapper", void 0 !== r && r ? "horizontal" : "vertical", void 0 !== c && c ? "small" : ""].concat((0, p._)((null == h ? void 0 : null === (i = h.position) || void 0 === i ? void 0 : i.split("-")) || []))),
                        children: (0, u.jsx)("div", {
                            className: "um-modal-background",
                            children: (0, u.jsxs)("div", {
                                className: "um-modal-container",
                                children: [(0, u.jsx)("button", {
                                    className: "um-modal-cta",
                                    "data-action": l,
                                    "data-href": d,
                                    "data-ggid": m,
                                    "data-id": "".concat(s.CLICK_REDIRECT, " ").concat(s.HOVER),
                                    "t-id": t,
                                    children: (0, u.jsxs)("div", {
                                        className: "um-modal-card",
                                        children: [(0, u.jsx)(w(), {
                                            src: a,
                                            alt: "um-banner",
                                            className: "um-modal-banner",
                                            width: 172,
                                            height: 172,
                                            priority: !0
                                        }), (0, u.jsxs)("div", {
                                            className: "um-modal-content",
                                            children: [(0, u.jsx)("p", {
                                                className: "um-modal-name",
                                                children: n
                                            }), (0, u.jsx)("p", {
                                                className: "um-modal-desc",
                                                children: o
                                            })]
                                        })]
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "um-modal-button-close",
                                    "data-id": s.CLICK_CLOSE,
                                    "t-id": t,
                                    children: (0, u.jsx)(w(), {
                                        src: "".concat("https://ah.vnggames.com", "/assets/icons/close-icon.svg"),
                                        alt: "close-btn",
                                        width: 20,
                                        height: 20
                                    })
                                })]
                            })
                        })
                    })
                },
                L = function() {
                    return (0, u.jsx)("svg", {
                        width: "25",
                        height: "24",
                        viewBox: "0 0 25 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, u.jsx)("path", {
                            d: "M4.57992 15.0003L11.0999 8.48033C11.8699 7.71033 13.1299 7.71033 13.8999 8.48033L20.4199 15.0003",
                            stroke: "#1C1817",
                            strokeWidth: "2",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                b = function() {
                    return (0, u.jsx)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, u.jsx)("g", {
                            id: "vuesax/linear/arrow-right",
                            children: (0, u.jsxs)("g", {
                                id: "arrow-right",
                                children: [(0, u.jsx)("path", {
                                    id: "Vector",
                                    d: "M9.62 3.95337L13.6667 8.00004L9.62 12.0467",
                                    stroke: "#F05C22",
                                    strokeWidth: "1.5",
                                    strokeMiterlimit: "10",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0, u.jsx)("path", {
                                    id: "Vector_2",
                                    d: "M2.33333 8H13.5533",
                                    stroke: "#F05C22",
                                    strokeWidth: "1.5",
                                    strokeMiterlimit: "10",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            })
                        })
                    })
                },
                y = function() {
                    return (0, u.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: [(0, u.jsx)("path", {
                            d: "M14 2L2 14",
                            stroke: "#E9E4E2",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, u.jsx)("path", {
                            d: "M2 2L14 14",
                            stroke: "#E9E4E2",
                            strokeWidth: "2.25",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                _ = function() {
                    return (0, u.jsxs)("svg", {
                        width: "25",
                        height: "24",
                        viewBox: "0 0 25 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, u.jsx)("path", {
                            d: "M4.70361 20L11.813 12.8906",
                            stroke: "#37312F",
                            strokeWidth: "0.971503",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, u.jsx)("path", {
                            d: "M11.8916 18.4374L11.8916 12.8125L6.26658 12.8125",
                            stroke: "#37312F",
                            strokeWidth: "0.971503",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, u.jsx)("path", {
                            d: "M20.7041 4L13.5947 11.1094",
                            stroke: "#37312F",
                            strokeWidth: "0.971503",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, u.jsx)("path", {
                            d: "M13.5161 5.56262L13.5161 11.1875L19.1411 11.1875",
                            stroke: "#37312F",
                            strokeWidth: "0.971503",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                E = function(e, i) {
                    var t = new URL(e);
                    return "".concat(t.origin).concat(t.pathname).concat(t.search ? "".concat(t.search, "&").concat(i) : "?".concat(i))
                },
                T = function(e) {
                    var i, t = e.itemId,
                        n = e.siteUrl,
                        o = e.width,
                        a = e.height,
                        d = e.ggId,
                        l = e.loggedIn,
                        m = e.autoOpen,
                        v = e.imgSrc,
                        h = e.navigationLinks,
                        g = void 0 === h ? [] : h,
                        f = e.transformLayout,
                        j = void 0 === f ? ["collapsable"] : f,
                        C = e.deviceConfig,
                        N = void 0 === C ? {
                            position: "middle-left"
                        } : C,
                        k = e.webshopRoleToken,
                        I = new URLSearchParams((0, c._)({
                            isMicrosite: "true"
                        }, k ? {
                            webshopRoleToken: encodeURIComponent(k)
                        } : {})),
                        T = function() {
                            if (0 === g.length) return (0, u.jsx)(u.Fragment, {});
                            var e = g.map(function(e, i) {
                                return (0, u.jsx)("div", {
                                    className: "um-micro-site-button-wrapper",
                                    children: (0, u.jsxs)("a", {
                                        href: e.ctaUrl,
                                        className: (0, x.Z)(["um-micro-site-button", 0 !== i ? "second" : ""]),
                                        target: "_blank",
                                        "data-id": s.CLICK_REDIRECT,
                                        "t-id": t,
                                        children: [(0, u.jsx)("p", {
                                            children: e.ctaText
                                        }), (0, u.jsx)("div", {
                                            className: "um-micro-site-button-arrow",
                                            children: (0, u.jsx)(b, {})
                                        })]
                                    })
                                }, i)
                            });
                            return (0, u.jsx)("div", {
                                className: "um-micro-site-button-bar",
                                children: e
                            })
                        }();
                    j.length > 1 && (j = j.filter(function(e) {
                        return "expandable" !== e
                    }));
                    var R = E(n, I.toString()),
                        O = {
                            isexpand: "".concat(m && j.includes("expandable"))
                        };
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("script", {
                            id: "um-micro-site-state",
                            type: "application/json",
                            children: JSON.stringify({
                                loggedIn: l,
                                siteUrl: R,
                                autoOpen: m,
                                ggId: d
                            })
                        }), (0, u.jsxs)("div", (0, r._)((0, c._)({
                            className: (0, x.Z)(["um-micro-site-wrapper"].concat((0, p._)((null == N ? void 0 : null === (i = N.position) || void 0 === i ? void 0 : i.split("-")) || []), [j]))
                        }, O), {
                            children: [(0, u.jsx)("button", {
                                className: "um-micro-site-image-container",
                                "data-id": "".concat(s.CLICK_EXTEND_CONTENT, " ").concat(s.HOVER),
                                "t-id": t,
                                children: (0, u.jsx)(w(), {
                                    src: v,
                                    alt: "um-banner",
                                    className: "um-micro-site-image-banner bounce-animation",
                                    width: 188,
                                    height: 188,
                                    priority: !0
                                })
                            }), (0, u.jsx)("div", {
                                className: "um-micro-site-button-transform",
                                "data-id": s.CLICK_COLLAPSE,
                                "t-id": t,
                                children: (0, u.jsx)("div", {
                                    className: "um-micro-site-transform-icon",
                                    children: (0, u.jsx)(L, {})
                                })
                            }), (0, u.jsx)("div", {
                                className: "um-micro-site-button-expand",
                                "data-id": s.CLICK_SHORTEN_CONTENT,
                                "t-id": t,
                                children: (0, u.jsx)("div", {
                                    className: "um-micro-site-expand-icon",
                                    children: (0, u.jsx)(_, {})
                                })
                            }), (0, u.jsxs)("div", {
                                className: "um-micro-site-content",
                                children: [(0, u.jsx)("div", {
                                    className: "um-micro-site-button-close",
                                    "data-id": s.CLICK_CLOSE,
                                    "t-id": t,
                                    children: (0, u.jsx)("div", {
                                        className: "um-micro-site-close-icon",
                                        children: (0, u.jsx)(y, {})
                                    })
                                }), (0, u.jsx)("div", {
                                    className: "um-micro-site-iframe-container",
                                    style: {
                                        height: a,
                                        width: o
                                    },
                                    children: (0, u.jsx)("iframe", {
                                        title: "um-micro-site-iframe",
                                        className: "um-micro-site-iframe",
                                        src: R,
                                        allow: "clipboard-write"
                                    })
                                }), T]
                            })]
                        }))]
                    })
                },
                R = t(4332),
                O = function(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "card";
                    if (!e) return null;
                    var t = (0, R.uS)(e);
                    return i.includes("modal") && (i = "modal"), {
                        html: t,
                        script: "".concat("https://ah.vnggames.com", "/assets/static/service/").concat(i, ".js"),
                        css: "".concat("https://ah.vnggames.com", "/assets/static/styles/").concat(i, ".css")
                    }
                },
                S = function(e) {
                    var i, t = e.itemId,
                        n = e.title,
                        o = e.desc,
                        a = e.link,
                        d = e.img,
                        c = e.greeting,
                        r = e.cta,
                        l = e.appIcon,
                        m = e.deviceConfig,
                        v = void 0 === m ? {
                            position: "middle-left"
                        } : m,
                        h = (0, u.jsxs)("div", {
                            className: "um-slide-card-button-link",
                            children: [(0, u.jsxs)("a", {
                                href: a,
                                className: "um-slide-card-button",
                                target: "_blank",
                                "data-id": s.CLICK_REDIRECT,
                                "t-id": t,
                                children: [(0, u.jsx)("p", {
                                    className: "",
                                    children: void 0 === r ? "Truy cập ngay" : r
                                }), (0, u.jsx)("div", {
                                    className: "um-slide-card-button-arrow",
                                    children: (0, u.jsx)(b, {})
                                })]
                            }), (0, u.jsx)("div", {
                                className: "um-slide-card-read-more",
                                "data-id": s.CLICK_EXTEND_CONTENT,
                                "t-id": t,
                                children: "Xem th\xeam"
                            })]
                        });
                    return (0, u.jsx)("div", {
                        className: (0, x.Z)(["um-slide-card-wrapper"].concat((0, p._)((null == v ? void 0 : null === (i = v.position) || void 0 === i ? void 0 : i.split("-")) || []))),
                        children: (0, u.jsxs)("div", {
                            className: "um-slide-card-content-wrapper",
                            "data-id": s.HOVER,
                            "t-id": t,
                            children: [(0, u.jsxs)("div", {
                                className: "um-slide-card-header",
                                children: [(0, u.jsx)(w(), {
                                    src: d,
                                    alt: "um-banner",
                                    width: 108,
                                    height: 108,
                                    className: "um-slide-card-banner",
                                    priority: !0
                                }), (0, u.jsx)("div", {
                                    className: "um-slide-card-content-container",
                                    children: (0, u.jsxs)("div", {
                                        className: "um-slide-card-content-header",
                                        children: [(0, u.jsx)(w(), {
                                            src: void 0 === l ? "https://cdn.omnirise.com/cms/logo_rewards_c7faeb41bf.svg" : l,
                                            alt: "um-logo",
                                            className: "um-slide-card-logo",
                                            width: 22,
                                            height: 22,
                                            priority: !0
                                        }), (0, u.jsx)("p", {
                                            className: "um-slide-card-name",
                                            children: "".concat(void 0 === c ? "Bạn ơi" : c, ",")
                                        }), (0, u.jsx)("div", {
                                            className: "um-slide-card-title",
                                            children: n
                                        }), h]
                                    })
                                })]
                            }), (0, u.jsx)("div", {
                                className: "um-slide-card-collapse",
                                children: (0, u.jsx)("div", {
                                    className: "um-slide-card-content-container",
                                    children: (0, u.jsxs)("div", {
                                        className: "um-slide-card-footer",
                                        children: [(0, u.jsx)("div", {
                                            className: "um-slide-card-desc",
                                            children: o
                                        }), h]
                                    })
                                })
                            })]
                        })
                    })
                },
                U = function(e) {
                    var i = e.items,
                        t = e.deviceConfig;
                    return "card" !== (void 0 === t ? {
                        layout: "card"
                    } : t).layout ? (0, u.jsx)(u.Fragment, {}) : (0, u.jsxs)("div", {
                        className: "um-ach-swiper-container",
                        children: [(0, u.jsx)("div", {
                            className: "um-slide-card-button-transform",
                            "data-id": s.CLICK_COLLAPSE,
                            "t-id": "slider",
                            children: (0, u.jsx)(w(), {
                                src: "".concat("https://ah.vnggames.com", "/assets/icons/arrow-left-not-line.svg"),
                                alt: "collapse-btn",
                                width: 20,
                                height: 20
                            })
                        }), (0, u.jsx)("div", {
                            className: "um-swiper-pagination"
                        }), (0, u.jsx)("div", {
                            className: "swiper-wrapper um-swiper-slide-wrapper",
                            children: (void 0 === i ? [] : i).map(function(e, i) {
                                var t, n, o, a, s, d, c;
                                return (0, u.jsxs)("div", {
                                    className: "swiper-slide um-swiper-slide-container",
                                    children: [(0, u.jsx)("script", {
                                        id: "tracking-data-".concat(e.itemId),
                                        type: "application/json",
                                        children: f({
                                            item: e
                                        })
                                    }), (0, u.jsx)(S, {
                                        itemId: e.itemId,
                                        appIcon: null == e ? void 0 : null === (t = e.content) || void 0 === t ? void 0 : t.appIcon,
                                        title: null == e ? void 0 : null === (n = e.content) || void 0 === n ? void 0 : n.title,
                                        desc: null == e ? void 0 : null === (o = e.content) || void 0 === o ? void 0 : o.description,
                                        link: null == e ? void 0 : null === (a = e.content) || void 0 === a ? void 0 : a.ctaUrl,
                                        img: null == e ? void 0 : null === (s = e.content) || void 0 === s ? void 0 : s.media,
                                        greeting: null == e ? void 0 : null === (d = e.content) || void 0 === d ? void 0 : d.greeting,
                                        cta: null == e ? void 0 : null === (c = e.content) || void 0 === c ? void 0 : c.ctaText,
                                        deviceConfig: null == e ? void 0 : e.deviceConfig
                                    })]
                                }, i)
                            })
                        })]
                    })
                },
                K = t(6805),
                D = t(1299),
                M = (a = (0, d._)(function(e) {
                    var i, t, n, o, a, s, d, m, v, p, x, j, w, N, L, b, y, _, E, R;
                    return (0, l.Jh)(this, function(l) {
                        switch (l.label) {
                            case 0:
                                if (i = e.request, n = void 0 === (t = e.clientId) ? "" : t, s = null == i ? void 0 : i.data, d = {
                                        clientId: n,
                                        deviceType: g(null == s ? void 0 : s.deviceData),
                                        ggId: null == s ? void 0 : null === (o = s.params) || void 0 === o ? void 0 : o.ggId,
                                        webshopRoleToken: null == s ? void 0 : s.webshopRoleToken
                                    }, v = null == s ? void 0 : null === (a = s.params) || void 0 === a ? void 0 : a.suggestedItem) return [3, 2];
                                return [4, h(d)];
                            case 1:
                                v = l.sent(), l.label = 2;
                            case 2:
                                var S, M, P, H, q, z, A, F, J, V, W, B, X, Z, G, Y, Q, $, ee, ei, et, en, eo, ea, es, ed, ec, er, el, eu, em;
                                if (j = (S = p = (null == (m = v) ? void 0 : m.items[0]) || {}, M = s, P = m, en = null == S ? void 0 : S.itemType, eo = null == S ? void 0 : S.content, ea = null == S ? void 0 : null === (q = S.deviceConfig) || void 0 === q ? void 0 : q.ctaType, es = null == M ? void 0 : null === (z = M.params) || void 0 === z ? void 0 : z.step, ed = null == P ? void 0 : null === (A = P.userInfo) || void 0 === A ? void 0 : A.loggedIn, ec = (null == P ? void 0 : null === (F = P.userInfo) || void 0 === F ? void 0 : F.ggId) || (null == M ? void 0 : null === (J = M.params) || void 0 === J ? void 0 : J.ggId), er = null == S ? void 0 : null === (W = S.deviceConfig) || void 0 === W ? void 0 : null === (V = W.siteProperties) || void 0 === V ? void 0 : V.autoOpen, el = null == S ? void 0 : null === (X = S.deviceConfig) || void 0 === X ? void 0 : null === (B = X.siteProperties) || void 0 === B ? void 0 : B.transformLayout, eu = (H = null == S ? void 0 : null === (Z = S.deviceConfig) || void 0 === Z ? void 0 : Z.layout, "slider" === en ? "slider" : "micro-site" === ea && ((null == el ? void 0 : el.includes("expandable")) || 2 === es || er) ? "micro-site" : H), em = void 0, "slider" === en && (em = (0, u.jsx)(U, {
                                        items: null == S ? void 0 : S.items,
                                        deviceConfig: null == S ? void 0 : S.deviceConfig
                                    })), eo && ("card" === eu && (em = (0, u.jsx)(C, {
                                        itemId: S.itemId,
                                        appIcon: eo.appIcon,
                                        title: eo.title,
                                        desc: eo.description,
                                        link: eo.ctaUrl,
                                        img: eo.media,
                                        greeting: eo.greeting,
                                        cta: eo.ctaText,
                                        deviceConfig: null == S ? void 0 : S.deviceConfig,
                                        action: ea,
                                        ggId: ec
                                    })), "image-only" === eu && (em = (0, u.jsx)(k, {
                                        itemId: S.itemId,
                                        link: eo.ctaUrl,
                                        img: eo.media,
                                        deviceConfig: null == S ? void 0 : S.deviceConfig,
                                        action: ea,
                                        ggId: ec
                                    })), (null == eu ? void 0 : eu.includes("modal")) && (em = (0, u.jsx)(I, {
                                        itemId: S.itemId,
                                        title: eo.title,
                                        desc: eo.description,
                                        img: eo.media,
                                        link: eo.ctaUrl,
                                        smallStyle: (null == S ? void 0 : null === (G = S.deviceConfig) || void 0 === G ? void 0 : G.size) === "sm",
                                        horizontalStyle: null == eu ? void 0 : eu.includes("horizontal"),
                                        deviceConfig: null == S ? void 0 : S.deviceConfig,
                                        action: ea,
                                        ggId: ec
                                    })), "micro-site" === eu && (em = (0, u.jsx)(T, {
                                        itemId: S.itemId,
                                        deviceConfig: null == S ? void 0 : S.deviceConfig,
                                        siteUrl: eo.ctaUrl,
                                        width: "".concat((null == S ? void 0 : null === (Q = S.deviceConfig) || void 0 === Q ? void 0 : null === (Y = Q.siteProperties) || void 0 === Y ? void 0 : Y.width) || (null == M ? void 0 : null === ($ = M.deviceData) || void 0 === $ ? void 0 : $.width) / 4, "px"),
                                        height: "".concat((null == S ? void 0 : null === (ei = S.deviceConfig) || void 0 === ei ? void 0 : null === (ee = ei.siteProperties) || void 0 === ee ? void 0 : ee.height) || (null == M ? void 0 : null === (et = M.deviceData) || void 0 === et ? void 0 : et.height) / 2, "px"),
                                        ggId: ec,
                                        loggedIn: ed,
                                        autoOpen: er,
                                        navigationLinks: eo.navigationLinks,
                                        transformLayout: el,
                                        imgSrc: eo.media,
                                        webshopRoleToken: null == M ? void 0 : M.webshopRoleToken
                                    }))), x = {
                                        layoutUI: em,
                                        layout: eu,
                                        step: es,
                                        loggedIn: ed,
                                        action: ea,
                                        content: eo,
                                        ggId: ec
                                    }).layoutUI, w = x.layout, N = x.step, L = x.loggedIn, b = x.action, y = x.content, _ = x.ggId, !j) return [2, {
                                    requestId: i.id,
                                    data: {
                                        type: "no-item-found"
                                    }
                                }];
                                return E = (0, u.jsxs)(u.Fragment, {
                                    children: [!N && "micro-site" === b && (0, u.jsx)("script", {
                                        id: "um-suggested-item",
                                        type: "application/json",
                                        children: JSON.stringify(m)
                                    }), (0, u.jsx)("script", {
                                        id: "tracking-data-".concat(p.itemId),
                                        type: "application/json",
                                        children: f({
                                            item: p
                                        })
                                    }), j]
                                }), s.lang && (0, D.k6)("NEXT_LOCALE", s.lang, 365), R = O(E, w), (0, K.U)({
                                    request: (0, r._)((0, c._)({}, i), {
                                        data: {
                                            event: "event_tracking",
                                            event_name: "Render_UI",
                                            ggid: _,
                                            client_id: n,
                                            content_id: p.itemId,
                                            data_info: s
                                        }
                                    })
                                }), [2, {
                                    requestId: i.id,
                                    data: (0, r._)((0, c._)({}, R), {
                                        keepUi: 2 === N && !1 === L && "micro-site" === b,
                                        type: "ui",
                                        content: y,
                                        layout: w,
                                        trackingData: {
                                            clientId: n,
                                            ggId: _
                                        }
                                    })
                                }]
                        }
                    })
                }), function(e) {
                    return a.apply(this, arguments)
                })
        },
        1299: function(e, i, t) {
            function n(e, i) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                    n = "";
                if (t) {
                    var o = new Date;
                    o.setTime(o.getTime() + 864e5 * t), n = "; expires=".concat(o.toUTCString())
                }
                document.cookie = "".concat(e, "=").concat(i || "").concat(n, ";domain=.vnggames.com; path=/; SameSite=None; Secure")
            }

            function o(e) {
                for (var i = "".concat(e, "="), t = document.cookie.split(";"), n = 0; n < t.length; n += 1) {
                    for (var o = t[n];
                        " " === o.charAt(0);) o = o.substring(1, o.length);
                    if (0 === o.indexOf(i)) return o.substring(i.length, o.length)
                }
                return null
            }

            function a(e, i) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                    n = "";
                if (t) {
                    var o = new Date;
                    o.setTime(o.getTime() + 864e5 * t), n = "; expires=".concat(o.toUTCString())
                }
                document.cookie = "".concat(e, "=").concat(i || "").concat(n, ";domain=.").concat(new URL("https://ah.vnggames.com").hostname.split(".").slice(-2).join("."), "; path=/; SameSite=None; Secure")
            }
            t.d(i, {
                ej: function() {
                    return o
                },
                d8: function() {
                    return n
                },
                k6: function() {
                    return a
                }
            })
        }
    }
]);