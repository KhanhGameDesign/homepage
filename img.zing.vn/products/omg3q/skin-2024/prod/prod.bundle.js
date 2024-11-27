! function(t) {
    function e(e) {
        for (var i, n, l = e[0], p = e[1], o = e[2], u = 0, d = []; u < l.length; u++) n = l[u], Object.prototype.hasOwnProperty.call(r, n) && r[n] && d.push(r[n][0]), r[n] = 0;
        for (i in p) Object.prototype.hasOwnProperty.call(p, i) && (t[i] = p[i]);
        for (c && c(e); d.length;) d.shift()();
        return s.push.apply(s, o || []), a()
    }

    function a() {
        for (var t, e = 0; e < s.length; e++) {
            for (var a = s[e], i = !0, l = 1; l < a.length; l++) {
                var p = a[l];
                0 !== r[p] && (i = !1)
            }
            i && (s.splice(e--, 1), t = n(n.s = a[0]))
        }
        return t
    }
    var i = {},
        r = {
            1: 0
        },
        s = [];

    function n(e) {
        if (i[e]) return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = t, n.c = i, n.d = function(t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(a, i, function(e) {
                return t[e]
            }.bind(null, i));
        return a
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "./";
    var l = window.webpackJsonp = window.webpackJsonp || [],
        p = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var o = 0; o < l.length; o++) e(l[o]);
    var c = p;
    s.push([95, 0]), a()
}([, , , , function(t, e) {
    t.exports = Twig
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, a) {
    "use strict";
    var i = {};

    function r({
        swiper: t,
        extendParams: e,
        on: a
    }) {
        e({
            debugger: !1
        }), a("init", (() => {
            t.params.debugger
        })), a("click", ((t, e) => {
            t.params.debugger
        })), a("tap", ((t, e) => {
            t.params.debugger
        })), a("doubleTap", ((t, e) => {
            t.params.debugger && console.log("doubleTap")
        })), a("sliderMove", ((t, e) => {
            t.params.debugger
        })), a("slideChange", (() => {
            t.params.debugger
        })), a("slideChangeTransitionStart", (() => {
            t.params.debugger
        })), a("slideChangeTransitionEnd", (() => {
            t.params.debugger
        })), a("transitionStart", (() => {
            t.params.debugger
        })), a("transitionEnd", (() => {
            t.params.debugger
        })), a("fromEdge", (() => {
            t.params.debugger
        })), a("reachBeginning", (() => {
            t.params.debugger
        })), a("reachEnd", (() => {
            t.params.debugger
        }))
    }
    $.fn.initSwiper = function(t) {
        var e = $.extend({
                isNested: !1,
                isSync: !1,
                isRenderBullet: !1,
                isSwiperAnimation: !1,
                swiperOptions: {
                    centeredSlides: !0,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 5e3
                    },
                    lazy: {
                        loadPrevNext: !0
                    },
                    followFinger: !1,
                    spaceBetween: 0
                },
                nestedOptions: {},
                syncOptions: {},
                onInit: function() {},
                onChange: function(t = function() {}) {
                    t()
                },
                before: function() {},
                after: function() {},
                debug: !1
            }, t),
            a = {};
        if (e.debug && (a = {
                modules: [r],
                debugger: !0
            }), 0 == $(this).length) return;
        let s = "#" + $(this).attr("id");
        e.before(), null != i[s.substr(1)] && ("function" == typeof i[s.substr(1)].destroy() && i[s.substr(1)].destroy(), delete i[s.substr(1)]);
        var n = {};
        if (e.isRenderBullet) {
            var l = $(this).attr("id");
            n = {
                renderBullet: function(t, e) {
                    var a = "",
                        i = t + 1,
                        r = $("#" + l + " .swiper-wrapper").children(".swiper-slide").eq(t).attr("data-swiper-name"),
                        s = $("#" + l + " .swiper-wrapper").children(".swiper-slide").eq(t).attr("data-swiper-code");
                    return r && (i = r), s && (a = s + " swiper-pagination-bullet--" + s), '<span class="' + e + " " + a + '">' + i + "</span>"
                }
            }
        }
        e.isNested && $(this).find(".swiper").each((function() {
            void 0 === $(this).attr("data-swiper-isSync") && $(this).initSwiper(e.nestedOptions)
        }));
        var p = {};
        if (e.isSync) {
            l = $(this).attr("id");
            var o = $(this).attr("data-sync-with");
            $("#" + o).initSwiper({ ...e.syncOptions,
                swiperOptions: {
                    watchOverflow: !0,
                    centeredSlides: !0,
                    centeredSlidesBounds: !0,
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !0,
                    scrollbar: {
                        el: ".swiper-scrollbar-" + o,
                        hide: !0
                    },
                    ...e.syncOptions.swiperOptions
                },
                after: function() {}
            }), p = {
                slideToClickedSlide: !0,
                watchOverflow: !0,
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                preventInteractionOnTransition: !0,
                thumbs: {
                    swiper: i[o]
                }
            }
        }
        var c = new SwiperAnimation;
        const u = new Swiper(s, { ...e.swiperOptions,
            ...p,
            on: {
                afterInit: function() {
                    e.isSwiperAnimation && null != c.animations && c.init(this).animate(), c.init(this).animate(), e.onInit()
                },
                slideChangeTransitionStart: function() {
                    e.onChange(), e.isSwiperAnimation && null != c.animations && c.init(this).animate(), c.init(this).animate()
                },
                ...e.swiperOptions.on
            },
            pagination: {
                el: ".swiper-pagination--" + s.substr(1),
                clickable: !0,
                ...e.swiperOptions.pagination,
                ...n
            },
            navigation: {
                nextEl: ".swiper-button-next--" + s.substr(1),
                prevEl: ".swiper-button-prev--" + s.substr(1),
                ...e.swiperOptions.navigation
            },
            ...a
        });
        return i[s.substr(1)] = u, e.after(), u
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, a) {
    "use strict";
    var i = {
            widthTriggerScale: 9999,
            widthDesktopSafe: 1620,
            widthDesktop: 2e3,
            widthMobile: 768,
            heightDesktop: 1e3,
            heightMobile: 1e3,
            func: {
                isMobile: function() {
                    var t = $(window).innerWidth(),
                        e = $(window).innerHeight();
                    return t <= i.widthMobile || t < e
                }
            }
        },
        r = i;
    $.fn.scalePlatform = function(t) {
        var e = {
                obj: $(this),
                designSafe: {
                    desktop: r.widthTriggerScale,
                    mobile: r.widthTriggerScale
                },
                designWidth: {
                    desktop: r.widthDesktop,
                    mobile: r.widthMobile
                },
                designHeight: {
                    desktop: r.heightDesktop,
                    mobile: r.heightMobile
                },
                mode: "",
                elScale: {
                    desktop: ".scaleDesktop",
                    mobile: ".scaleMobile"
                },
                dataScale: "data-scale-ratio",
                dataDevice: "data-device-type",
                dataDisplay: {
                    desktop: "data-desktop-display",
                    mobile: "data-mobile-display"
                },
                dataOrigin: {
                    desktop: "data-desktop-origin",
                    mobile: "data-mobile-origin"
                },
                rescaleForParent: !0,
                deviceHeightStyleTag: {
                    fix: "fixDeviceHeight",
                    max: "maxDeviceHeight"
                },
                deviceHeightStyleVar: "--sr-device-height",
                deviceScaleRatioStyleVar: "--sr-scale-ratio"
            },
            a = $.extend(e, t),
            i = ($(a.obj).attr("style", ""), $(a.obj).parent().attr("style", ""), $(a.elScale.desktop + " , " + a.elScale.mobile).each((function() {
                $(this).attr("style", "")
            })), $(a.obj).parent().attr(a.dataScale, 1), $(window).outerWidth()),
            s = $(window).innerHeight(),
            n = (t = i, e = s) => t < 999 && t <= e,
            l = n() ? i / a.designWidth.mobile : i / a.designWidth.desktop;
        if (0 != a.deviceHeightStyleTag && $("#deviceHeightStyleTag").length < 1) {
            var p = "calc(100vh * " + 1 / l + ")",
                o = $(`\n            <style id="deviceHeightStyleTag">\n                .${a.deviceHeightStyleTag.max} {\n                    max-height: ${p}\n                }\n                .${a.deviceHeightStyleTag.fix} {\n                    height: ${p}\n                }\n            </style>\n        `);
            $("html > head").append(o)
        }
        if (0 != a.deviceHeightStyleVar && $("#deviceHeightStyleVar").length < 1) {
            p = "calc(100vh * " + 1 / l + ")", o = $(`\n            <style id="deviceHeightStyleVar">\n                :root {\n                    ${a.deviceHeightStyleVar}: ${p};\n                    ${a.deviceScaleRatioStyleVar}: ${l}\n                }\n            </style>\n        `);
            $("html > head").append(o)
        }
        if ($(a.elScale.desktop + " , " + a.elScale.mobile).each((function() {
                (n() && $(this).hasClass(a.elScale.mobile.replace(".", "")) || !n() && $(this).hasClass(a.elScale.desktop.replace(".", ""))) && $(this).css({
                    transform: "scale(" + l + ")",
                    marginLeft: "0px",
                    transformOrigin: (t = t()) => t && null != $(this).attr(a.dataOrigin.mobile) ? $(this).attr(a.dataOrigin.mobile) : null != $(this).attr(a.dataOrigin.desktop) ? $(this).attr(a.dataOrigin.desktop) : "top left"
                })
            })), a.rescaleForParent) {
            var c = {
                height: a.obj.outerHeight()
            }.height * l;
            $(a.obj).parent().css({
                height: c + "px"
            })
        }
        $(a.obj).parent().attr(a.dataScale, l), $(a.obj).parent().attr(a.dataDevice, n() ? "mobile" : "desktop")
    }
}, , function(t, e, a) {
    t.exports = a(186)
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:8ea2046d1b5671b5a628906c576b640167abb21aa95bb7bdae8c3ae9433e65075dcf9b7ce6bb43151b37297224c509c2edeb89ec3fa128bb27e861fbc3e95c3d:header.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_header"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div\r\n\t\t\tclass="section__background">\r\n\t\t\t\r\n\t\t\t<img data-src="mainsite_2024/header/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="mainsite_2024/header/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t\r\n\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\r\n\t\t\t\t<div class="desktop-flex appinfo text-center flex-middle">\r\n\t\t\t\t\t<div class="flex-middle flex-column desktop">\r\n\t\t\t\t\t\t<a href="#" class="iconapp appinfo__item">\r\n\t\t\t\t\t\t\t<img data-src="mainsite_2024/header/images/icon-app.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle flex-column desktop">\r\n\t\t\t\t\t\t<p class="appinfo__item qr__code">\r\n\t\t\t\t\t\t\t<img data-src="mainsite_2024/header/images/qrcode.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle gap-10 flex-column">\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item appstore">\r\n\t\t\t\t\t\t\t<span>appstore</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item ggplay">\r\n\t\t\t\t\t\t\t<span>ggplay</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle gap-10 flex-column">\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item apk">\r\n\t\t\t\t\t\t\t<span>apk</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item zingid">\r\n\t\t\t\t\t\t\t<span>zingid</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle flex-column">\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item nhapcode">\r\n\t\t\t\t\t\t\t<span>nhapcode</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle flex-column">\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item napthe">\r\n\t\t\t\t\t\t\t<span>napthe</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_header"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div\r\n\t\t\tclass="section__background">\r\n\t\t\t\r\n\t\t\t<img data-src="mainsite_2024/header/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="mainsite_2024/header/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t\r\n\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\r\n\t\t\t\t<div class="desktop-flex appinfo text-center flex-middle">\r\n\t\t\t\t\t<div class="flex-middle flex-column desktop">\r\n\t\t\t\t\t\t<a href="#" class="iconapp appinfo__item">\r\n\t\t\t\t\t\t\t<img data-src="mainsite_2024/header/images/icon-app.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle flex-column desktop">\r\n\t\t\t\t\t\t<p class="appinfo__item qr__code">\r\n\t\t\t\t\t\t\t<img data-src="mainsite_2024/header/images/qrcode.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle gap-10 flex-column">\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item appstore">\r\n\t\t\t\t\t\t\t<span>appstore</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item ggplay">\r\n\t\t\t\t\t\t\t<span>ggplay</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle gap-10 flex-column">\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item apk">\r\n\t\t\t\t\t\t\t<span>apk</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item zingid">\r\n\t\t\t\t\t\t\t<span>zingid</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle flex-column">\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item nhapcode">\r\n\t\t\t\t\t\t\t<span>nhapcode</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="flex-middle flex-column">\r\n\t\t\t\t\t\t<a href="#" class="appinfo__item napthe">\r\n\t\t\t\t\t\t\t<span>napthe</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, , function(t, e) {
    t.exports = $, jQuery
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:87849166571316058526e3d28c6ada5cc25bc7886f0b9c8aff30f41cd333b2f566f1bc850458aca937d51d77ab4472fe8fd9fc0de4a4df64c56b3541c259aad6:header_sub.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_header_sub"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="mainsite_2024/header_sub/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="mainsite_2024/header_sub/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '"></div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_header_sub"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="mainsite_2024/header_sub/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="mainsite_2024/header_sub/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '"></div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_header_sub rendered", {}, (function(t, e) {
        $("#" + e)
    }))
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:46162d26e67e73e23bd5f4bdb82a088a16a2cb17ad73dd3632e4c70d03bb992b188fbd534b112e06bbfe36fd057ec2975340ce4dac0e14a507980c0be851b0bb:char.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_char"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="title">\r\n\t\t\t\t\t<img alt="" data-src="mainsite_2024/char/images/title.png" class="desktop lazyload">\r\n\t\t\t\t\t<img alt="" data-src="mainsite_2024/char/images/title-mb.png" class="mobile lazyload">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="section--3__content">\r\n\t\t\t\t\t<div id="blockHomeChar" class="characters characters--blockHomeChar char">\r\n\t\t\t\t\t\t<ul class="characters_tab">\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper1" class="tab-main active">Ngô</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper2" class="tab-main">Thục</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper3" class="tab-main">Ngụy</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper4" class="tab-main">Quần</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper5" class="tab-main">Danh<br>Tướng</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper1" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper1">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tChu du\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/ngo/ngo-chudu-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/ngo/ngo-chudu-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTôn sách\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/ngo/ngo-tonsach-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/ngo/ngo-tonsach-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper2" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper2">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tGia Cát Lượng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/thuc/thuc-gcl-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/thuc/thuc-gcl-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTriệu Vân\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/thuc/thuc-gcl-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/thuc/thuc-gcl-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper3" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper3">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTrương Liêu\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/nguy/nguy-truonglieu-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/nguy/nguy-truonglieu-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-thaikim" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTư Mã Ý\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/nguy/nguy-tumay-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/nguy/nguy-tumay-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-thaikim" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper4" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper4">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tLữ Bố\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/quan/quan-lubo-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/quan/quan-lubo-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTả Từ\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/quan/quan-tatu-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/quan/quan-tatu-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper5" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper5">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tThủy Kính\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/danhtuong/tuong-thuykinh-kim.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/danhtuong/tuong-thuykinh-kim-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-thuykinh-kim" class="level-1">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-thuykinh-thaikim" class="level-1">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tLữ Linh Khởi\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/danhtuong/tuong-lulinh-kim.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/danhtuong/tuong-lulinh-kim-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-lulinh-kim" class="level-1">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-lulinh-thaikim" class="level-1">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tBàng Đức\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/danhtuong/tuong-bangduc-kim.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/danhtuong/tuong-bangduc-kim-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-bangduc-kim" class="level-1">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-bangduc-thaikim" class="level-1">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="charpage">\r\n\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper1" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Chu Du</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/ngo-chudu.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Tôn Sách</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/ngo-tonsach.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper1"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper1"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper2" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Gia Cát Lượng</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/thuc-giacatluong.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Triệu Vân</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/thuc-trieuvan.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper2"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper2"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper3" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Trương Liêu</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/nguy-truonglieu.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Tư Mã Ý</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/nguy-tumay.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper3"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper3"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper4" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Lữ Bố</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/quan-lubo.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Tả Từ</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/quan-tatu.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper4"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper4"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper5" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Thủy Kính</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/tuong-thuykinh.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Lữ Linh Khởi</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/tuong-lulinhkhoi.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Bàng Đức</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/tuong-bangduc.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper5"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper5"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_char"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="title">\r\n\t\t\t\t\t<img alt="" data-src="mainsite_2024/char/images/title.png" class="desktop lazyload">\r\n\t\t\t\t\t<img alt="" data-src="mainsite_2024/char/images/title-mb.png" class="mobile lazyload">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="section--3__content">\r\n\t\t\t\t\t<div id="blockHomeChar" class="characters characters--blockHomeChar char">\r\n\t\t\t\t\t\t<ul class="characters_tab">\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper1" class="tab-main active">Ngô</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper2" class="tab-main">Thục</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper3" class="tab-main">Ngụy</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper4" class="tab-main">Quần</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" data-href="#blockHomeCharSwiper5" class="tab-main">Danh<br>Tướng</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper1" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper1">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tChu du\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/ngo/ngo-chudu-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/ngo/ngo-chudu-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-chudu-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTôn sách\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/ngo/ngo-tonsach-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/ngo/ngo-tonsach-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/ngo/ngo-tonsach-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper2" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper2">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tGia Cát Lượng\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/thuc/thuc-gcl-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/thuc/thuc-gcl-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-gcl-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTriệu Vân\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/thuc/thuc-gcl-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/thuc/thuc-gcl-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/thuc/thuc-trieuvan-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper3" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper3">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTrương Liêu\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/nguy/nguy-truonglieu-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/nguy/nguy-truonglieu-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-truonglieu-thaikim" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTư Mã Ý\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/nguy/nguy-tumay-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/nguy/nguy-tumay-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/nguy/nguy-tumay-thaikim" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper4" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper4">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tLữ Bố\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/quan/quan-lubo-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/quan/quan-lubo-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-chan" class="level-1">Đỏ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-lubo-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tTả Từ\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/quan/quan-tatu-chan.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/quan/quan-tatu-chan-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-chan" class="level-2">Chân</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-kim" class="level-3">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-amkim" class="level-4">Ám Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-tukim" class="level-5">Tử Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-thaikim" class="level-6">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/quan/quan-tatu-chan" class="level-7">Bàn Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t<div id="blockHomeCharSwiper5" class="swiper characters_list" data-sync-with="blockHomeCharPageSwiper5">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tThủy Kính\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/danhtuong/tuong-thuykinh-kim.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/danhtuong/tuong-thuykinh-kim-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-thuykinh-kim" class="level-1">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-thuykinh-thaikim" class="level-1">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tLữ Linh Khởi\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/danhtuong/tuong-lulinh-kim.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/danhtuong/tuong-lulinh-kim-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-lulinh-kim" class="level-1">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-lulinh-thaikim" class="level-1">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t<div class="char_name">\r\n\t\t\t\t\t\t\t\t\t\tBàng Đức\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char_group-level">\r\n\t\t\t\t\t\t\t\t\t\t<div class="char_thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="mainsite_2024/char/images/danhtuong/tuong-bangduc-kim.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="mainsite_2024/char/images/danhtuong/tuong-bangduc-kim-mb.png" alt="char-1">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="group-level-paging">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-bangduc-kim" class="level-1">Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="#" data-img="mainsite_2024/char/images/danhtuong/tuong-bangduc-thaikim" class="level-1">Thái Kim</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="charpage">\r\n\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper1" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Chu Du</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/ngo-chudu.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Tôn Sách</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/ngo-tonsach.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper1"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper1"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper2" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Gia Cát Lượng</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/thuc-giacatluong.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Triệu Vân</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/thuc-trieuvan.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper2"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper2"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper3" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Trương Liêu</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/nguy-truonglieu.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Tư Mã Ý</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/nguy-tumay.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper3"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper3"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper4" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Lữ Bố</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/quan-lubo.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Tả Từ</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/quan-tatu.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper4"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper4"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="charpage_list">\r\n\t\t\t\t\t\t\t\t<div thumbsSlider="" id="blockHomeCharPageSwiper5" class="content-swip">\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Thủy Kính</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/tuong-thuykinh.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Lữ Linh Khởi</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/tuong-lulinhkhoi.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="charpage_item">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="paging-name">Bàng Đức</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="mainsite_2024/char/images/paging/tuong-bangduc.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-prev swiper-button-prev--blockHomeCharPageSwiper5"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="swiper-button-next swiper-button-next--blockHomeCharPageSwiper5"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e, a) {
    "use strict";
    a.r(e);
    a(32);
    $(document).on("mainsite_2024_char rendered", {}, (function(t, e) {
        $("#" + e)
    }))
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:150db8f185712431549aacb666237fa1206882d4e55800caddf33a7db4317295601f7de34bb18ac33cde4f45b9f330be7b08057ac6a00a37d1f1990ff656e7e4:news_event.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.set",
                key: "urlDetail",
                expression: [{
                    type: "Twig.expression.type.string",
                    value: "#urlDetail"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.set",
                key: "data",
                expression: [{
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "list"
                }, {
                    type: "Twig.expression.type.array.start",
                    value: "[",
                    match: ["["]
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "revelation_2023_mainsite/news_event/images/banner.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Chao don su kien moi trong nam 2023"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Cái bẫy ở chỗ em là người code từng dòng của sản phẩm đó, dĩ nhiên em sử dụng được tốt. Nhưng nếu cho 1 user ở bên ngoài vào thử, mọi chuyện sẽ hoàn toàn khác. Lúc đó em mới thấy 1 sản phẩm tốt không phải chỉ tốt ở khâu code, mà còn phải hoàn chỉnh cả UI/UX."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !0
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 82624164,
                    match: ["82624164", null]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catCode"
                }, {
                    type: "Twig.expression.type.string",
                    value: "tin-tuc"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catTitle"
                }, {
                    type: "Twig.expression.type.string",
                    value: "ข่าวสาร"
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "revelation_2023_mainsite/news_event/images/banner.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Chao don su kien moi trong nam 2023 Offline fan Hello Cafe 2024"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Một ví dụ rất hay xảy ra là khi các bạn UI UX Designer làm xong phần design, đưa cho coder thì bạn coder hay comment là design như thế này khó quá, không thể làm được và yêu cầu thay đổi design để code dễ hơn."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !0
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 52357532,
                    match: ["52357532", null]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catCode"
                }, {
                    type: "Twig.expression.type.string",
                    value: "huong-dan"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catTitle"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Guide"
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "revelation_2023_mainsite/news_event/images/banner.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#external"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Chao don su kien moi trong nam 2023 Offline fan Hello Cafe 2024"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Các bạn lập trình viên trẻ hoặc quen làm bên outsource thường rơi vào cái bẫy là code sao cho nó chạy được thôi. Bạn coder sử dụng được thì user nghiễm nhiên cũng sử dụng được."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !0
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 43962914,
                    match: ["43962914", null]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catCode"
                }, {
                    type: "Twig.expression.type.string",
                    value: "su-kien"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catTitle"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Events"
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "revelation_2023_mainsite/news_event/images/banner.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Chao don su kien moi trong nam 2023 Offline fan Hello Cafe 2024"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Coder phải hiểu và làm chủ sản phẩm thì cái anh ta code ra mới chất lượng được. Điều này là rất quan trọng cho mọi developer muốn phát triển lên."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 38943271,
                    match: ["38943271", null]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catCode"
                }, {
                    type: "Twig.expression.type.string",
                    value: "su-kien"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catTitle"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Events"
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "revelation_2023_mainsite/news_event/images/banner.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#external"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Chao don su kien moi trong nam 2023 Offline fan Hello Cafe 2024"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Yếu tố quan trọng nhất của 2 người đầu tiên này là commitment (sự cam kết) : họ bắt buộc phải sẵn sàng đi với team đến cuối cùng. Nếu họ có đủ mọi yếu tố, nhưng chỉ muốn tham gia team như 1 công việc part-time, hãy chọn người khác."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 25310144,
                    match: ["25310144", null]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catCode"
                }, {
                    type: "Twig.expression.type.string",
                    value: "tin-tuc"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "catTitle"
                }, {
                    type: "Twig.expression.type.string",
                    value: "News"
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.array.end",
                    value: "]",
                    match: ["]"]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_news_event"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="title">\r\n\t\t\t\t\t<img data-src="mainsite_2024/news_event/images/title.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="mainsite_2024/news_event/images/title-m.png" class="mobile lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="block__main">\r\n\r\n\t\t\t\t\t<div class="block__main--banner">\r\n\t\t\t\t\t\t<div id="homeBanner" class="banner banner--homeBanner">\r\n\t\t\t\t\t\t\t<div id="blockBannerSwiper" class="swiper banner_list">\r\n\t\t\t\t\t\t\t\t<ul class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#link" class="banner_item__thumbnail" title="Hoạt động Long Môn Chiến">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Hoạt động Long Môn Chiến">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#link" class="banner_item__thumbnail" title="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="banner_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="banner_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="banner_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t<div class="swiper-pagination swiper-pagination--blockBannerSwiper"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class="desktop-flex group-support">\r\n\t\t\t\t\t\t\t<li><a href="#" class="btn-guide">Hướng dẫn nạp thẻ</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" class="btn-policy">Điều khoản</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" class="btn-support">Hỗ trợ</a></li>\r\n\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="block__main--news">\r\n\t\t\t\t\t\t<div id="blockNews" class="news news--blockNews">\r\n\t\t\t\t\t\t\t<div class="news_tab">\r\n\t\t\t\t\t\t\t\t<ul class="tab">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item active" data-params="" data-block-name="tin-tuc" data-shorturl="" data-viewall="/tin-tuc/tin-tuc.1.html">\r\n\t\t\t\t\t\t\t\t\t\t\tTin tức\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\tSự kiện\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\tTính năng\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\tHướng dẫn\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="news_list">\r\n\t\t\t\t\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "data",
                            match: ["data"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "list"
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "length",
                            match: ["|length", "length"]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 0,
                            match: ["0", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: ">",
                            precidence: 8,
                            associativity: "leftToRight",
                            operator: ">"
                        }],
                        output: [{
                            type: "raw",
                            value: "\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t"
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.for",
                                keyVar: null,
                                valueVar: "item",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "data",
                                    match: ["data"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "list"
                                }, {
                                    type: "Twig.expression.type.slice",
                                    value: "slice",
                                    match: ["[0:4]", "0:4"],
                                    params: [0, 4]
                                }],
                                output: [{
                                    type: "raw",
                                    value: "\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "img",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "thumbnail"
                                        }, {
                                            type: "Twig.expression.type.null",
                                            value: null
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "!=",
                                            precidence: 9,
                                            associativity: "leftToRight",
                                            operator: "!="
                                        }, {
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "thumbnail"
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: "http://placehold.it/600x350"
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "?",
                                            precidence: 16,
                                            associativity: "rightToLeft",
                                            operator: "?"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "urlDetail",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "site",
                                            match: ["site"]
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: "/tin-tuc"
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "~",
                                            precidence: 6,
                                            associativity: "leftToRight",
                                            operator: "~"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "link",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "linkExternal"
                                        }, {
                                            type: "Twig.expression.type.null",
                                            value: null
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "!=",
                                            precidence: 9,
                                            associativity: "leftToRight",
                                            operator: "!="
                                        }, {
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "linkExternal"
                                        }, {
                                            type: "Twig.expression.type.variable",
                                            value: "urlDetail",
                                            match: ["urlDetail"]
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: "/"
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "~",
                                            precidence: 6,
                                            associativity: "leftToRight",
                                            operator: "~"
                                        }, {
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "catCode"
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "~",
                                            precidence: 6,
                                            associativity: "leftToRight",
                                            operator: "~"
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: "/"
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "~",
                                            precidence: 6,
                                            associativity: "leftToRight",
                                            operator: "~"
                                        }, {
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "linkSeo"
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "~",
                                            precidence: 6,
                                            associativity: "leftToRight",
                                            operator: "~"
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: ".html"
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "~",
                                            precidence: 6,
                                            associativity: "leftToRight",
                                            operator: "~"
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "?",
                                            precidence: 16,
                                            associativity: "rightToLeft",
                                            operator: "?"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "target",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "isNewTab"
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: "target=_blank"
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: ""
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "?",
                                            precidence: 16,
                                            associativity: "rightToLeft",
                                            operator: "?"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "robotFlow",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "linkExternal"
                                        }, {
                                            type: "Twig.expression.type.null",
                                            value: null
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "!=",
                                            precidence: 9,
                                            associativity: "leftToRight",
                                            operator: "!="
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: "rel=nofollow"
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: ""
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "?",
                                            precidence: 16,
                                            associativity: "rightToLeft",
                                            operator: "?"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "isHot",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "isHot"
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: "isHot"
                                        }, {
                                            type: "Twig.expression.type.string",
                                            value: ""
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "?",
                                            precidence: 16,
                                            associativity: "rightToLeft",
                                            operator: "?"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: '\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="news_item__time">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="date">05</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="month">12</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="news_item '
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "isHot",
                                        match: ["isHot"]
                                    }]
                                }, {
                                    type: "raw",
                                    value: '">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="'
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "link",
                                        match: ["link"]
                                    }]
                                }, {
                                    type: "raw",
                                    value: '" '
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "target",
                                        match: ["target"]
                                    }]
                                }, {
                                    type: "raw",
                                    value: " "
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "robotFlow",
                                        match: ["robotFlow"]
                                    }]
                                }, {
                                    type: "raw",
                                    value: ' class="news_item__title news_item__title-news" data-hot="Hot!" data-cate="" title="'
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "title"
                                    }]
                                }, {
                                    type: "raw",
                                    value: '">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "title"
                                    }, {
                                        type: "Twig.expression.type.slice",
                                        value: "slice",
                                        match: ["[0:35]", "0:35"],
                                        params: [0, 35]
                                    }]
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.if",
                                        stack: [{
                                            type: "Twig.expression.type.variable",
                                            value: "item",
                                            match: ["item"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "title"
                                        }, {
                                            type: "Twig.expression.type.filter",
                                            value: "length",
                                            match: ["|length", "length"]
                                        }, {
                                            type: "Twig.expression.type.number",
                                            value: 35,
                                            match: ["35", null]
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: ">",
                                            precidence: 8,
                                            associativity: "leftToRight",
                                            operator: ">"
                                        }],
                                        output: [{
                                            type: "raw",
                                            value: "...\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: '\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="news_item__content">Chủ Nhân làm nhiệm vụ để nhận 4 loại búa, mỗi nhiệm vụ nhận 1 búa, khi các Chủ Nhân góp đủ số lượng búa sẽ...</p>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t'
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t"
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href="/tin-tuc/tin-tuc.1.html" class="desktop viewall viewAll">\r\n\t\t\t\t\t\t\t\t<span>Xem thêm +</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href="/tin-tuc/tin-tuc.1.html" class="mobile viewall viewAll">\r\n\t\t\t\t\t\t\t\t<span>+</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ul class="mobile-flex group-support">\r\n\t\t\t\t\t\t<li><a href="#" class="btn-guide">Hướng dẫn nạp thẻ</a></li>\r\n\t\t\t\t\t\t<li><a href="#" class="btn-policy">Điều khoản</a></li>\r\n\t\t\t\t\t\t<li><a href="#" class="btn-support">Hỗ trợ</a></li>\r\n\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.set",
            key: "urlDetail",
            expression: [{
                type: "Twig.expression.type.string",
                value: "#urlDetail"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.set",
            key: "data",
            expression: [{
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "list"
            }, {
                type: "Twig.expression.type.array.start",
                value: "[",
                match: ["["]
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "revelation_2023_mainsite/news_event/images/banner.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Chao don su kien moi trong nam 2023"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Cái bẫy ở chỗ em là người code từng dòng của sản phẩm đó, dĩ nhiên em sử dụng được tốt. Nhưng nếu cho 1 user ở bên ngoài vào thử, mọi chuyện sẽ hoàn toàn khác. Lúc đó em mới thấy 1 sản phẩm tốt không phải chỉ tốt ở khâu code, mà còn phải hoàn chỉnh cả UI/UX."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !0
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 82624164,
                match: ["82624164", null]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catCode"
            }, {
                type: "Twig.expression.type.string",
                value: "tin-tuc"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catTitle"
            }, {
                type: "Twig.expression.type.string",
                value: "ข่าวสาร"
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "revelation_2023_mainsite/news_event/images/banner.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Chao don su kien moi trong nam 2023 Offline fan Hello Cafe 2024"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Một ví dụ rất hay xảy ra là khi các bạn UI UX Designer làm xong phần design, đưa cho coder thì bạn coder hay comment là design như thế này khó quá, không thể làm được và yêu cầu thay đổi design để code dễ hơn."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !0
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 52357532,
                match: ["52357532", null]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catCode"
            }, {
                type: "Twig.expression.type.string",
                value: "huong-dan"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catTitle"
            }, {
                type: "Twig.expression.type.string",
                value: "Guide"
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "revelation_2023_mainsite/news_event/images/banner.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: "#external"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Chao don su kien moi trong nam 2023 Offline fan Hello Cafe 2024"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Các bạn lập trình viên trẻ hoặc quen làm bên outsource thường rơi vào cái bẫy là code sao cho nó chạy được thôi. Bạn coder sử dụng được thì user nghiễm nhiên cũng sử dụng được."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !0
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 43962914,
                match: ["43962914", null]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catCode"
            }, {
                type: "Twig.expression.type.string",
                value: "su-kien"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catTitle"
            }, {
                type: "Twig.expression.type.string",
                value: "Events"
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "revelation_2023_mainsite/news_event/images/banner.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Chao don su kien moi trong nam 2023 Offline fan Hello Cafe 2024"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Coder phải hiểu và làm chủ sản phẩm thì cái anh ta code ra mới chất lượng được. Điều này là rất quan trọng cho mọi developer muốn phát triển lên."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 38943271,
                match: ["38943271", null]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catCode"
            }, {
                type: "Twig.expression.type.string",
                value: "su-kien"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catTitle"
            }, {
                type: "Twig.expression.type.string",
                value: "Events"
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "revelation_2023_mainsite/news_event/images/banner.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: "#external"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Chao don su kien moi trong nam 2023 Offline fan Hello Cafe 2024"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Yếu tố quan trọng nhất của 2 người đầu tiên này là commitment (sự cam kết) : họ bắt buộc phải sẵn sàng đi với team đến cuối cùng. Nếu họ có đủ mọi yếu tố, nhưng chỉ muốn tham gia team như 1 công việc part-time, hãy chọn người khác."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 25310144,
                match: ["25310144", null]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catCode"
            }, {
                type: "Twig.expression.type.string",
                value: "tin-tuc"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "catTitle"
            }, {
                type: "Twig.expression.type.string",
                value: "News"
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.array.end",
                value: "]",
                match: ["]"]
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_news_event"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="title">\r\n\t\t\t\t\t<img data-src="mainsite_2024/news_event/images/title.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="mainsite_2024/news_event/images/title-m.png" class="mobile lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="block__main">\r\n\r\n\t\t\t\t\t<div class="block__main--banner">\r\n\t\t\t\t\t\t<div id="homeBanner" class="banner banner--homeBanner">\r\n\t\t\t\t\t\t\t<div id="blockBannerSwiper" class="swiper banner_list">\r\n\t\t\t\t\t\t\t\t<ul class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#link" class="banner_item__thumbnail" title="Hoạt động Long Môn Chiến">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Hoạt động Long Môn Chiến">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#link" class="banner_item__thumbnail" title="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="banner_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="banner_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="banner_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" data-src="mainsite_2024/news_event/images/banner.jpg" alt="Nâng tầm công lực với Tuyệt Học Giang Hồ">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t<div class="swiper-pagination swiper-pagination--blockBannerSwiper"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class="desktop-flex group-support">\r\n\t\t\t\t\t\t\t<li><a href="#" class="btn-guide">Hướng dẫn nạp thẻ</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" class="btn-policy">Điều khoản</a></li>\r\n\t\t\t\t\t\t\t<li><a href="#" class="btn-support">Hỗ trợ</a></li>\r\n\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="block__main--news">\r\n\t\t\t\t\t\t<div id="blockNews" class="news news--blockNews">\r\n\t\t\t\t\t\t\t<div class="news_tab">\r\n\t\t\t\t\t\t\t\t<ul class="tab">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item active" data-params="" data-block-name="tin-tuc" data-shorturl="" data-viewall="/tin-tuc/tin-tuc.1.html">\r\n\t\t\t\t\t\t\t\t\t\t\tTin tức\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\tSự kiện\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\tTính năng\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\tHướng dẫn\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="news_list">\r\n\t\t\t\t\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "data",
                        match: ["data"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "list"
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "length",
                        match: ["|length", "length"]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 0,
                        match: ["0", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: ">",
                        precidence: 8,
                        associativity: "leftToRight",
                        operator: ">"
                    }],
                    output: [{
                        type: "raw",
                        value: "\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t"
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.for",
                            keyVar: null,
                            valueVar: "item",
                            expression: [{
                                type: "Twig.expression.type.variable",
                                value: "data",
                                match: ["data"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "list"
                            }, {
                                type: "Twig.expression.type.slice",
                                value: "slice",
                                match: ["[0:4]", "0:4"],
                                params: [0, 4]
                            }],
                            output: [{
                                type: "raw",
                                value: "\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "img",
                                    expression: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "thumbnail"
                                    }, {
                                        type: "Twig.expression.type.null",
                                        value: null
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "!=",
                                        precidence: 9,
                                        associativity: "leftToRight",
                                        operator: "!="
                                    }, {
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "thumbnail"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "http://placehold.it/600x350"
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "?",
                                        precidence: 16,
                                        associativity: "rightToLeft",
                                        operator: "?"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "urlDetail",
                                    expression: [{
                                        type: "Twig.expression.type.variable",
                                        value: "site",
                                        match: ["site"]
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "/tin-tuc"
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "~",
                                        precidence: 6,
                                        associativity: "leftToRight",
                                        operator: "~"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "link",
                                    expression: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "linkExternal"
                                    }, {
                                        type: "Twig.expression.type.null",
                                        value: null
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "!=",
                                        precidence: 9,
                                        associativity: "leftToRight",
                                        operator: "!="
                                    }, {
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "linkExternal"
                                    }, {
                                        type: "Twig.expression.type.variable",
                                        value: "urlDetail",
                                        match: ["urlDetail"]
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "/"
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "~",
                                        precidence: 6,
                                        associativity: "leftToRight",
                                        operator: "~"
                                    }, {
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "catCode"
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "~",
                                        precidence: 6,
                                        associativity: "leftToRight",
                                        operator: "~"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "/"
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "~",
                                        precidence: 6,
                                        associativity: "leftToRight",
                                        operator: "~"
                                    }, {
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "linkSeo"
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "~",
                                        precidence: 6,
                                        associativity: "leftToRight",
                                        operator: "~"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: ".html"
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "~",
                                        precidence: 6,
                                        associativity: "leftToRight",
                                        operator: "~"
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "?",
                                        precidence: 16,
                                        associativity: "rightToLeft",
                                        operator: "?"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "target",
                                    expression: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "isNewTab"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "target=_blank"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: ""
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "?",
                                        precidence: 16,
                                        associativity: "rightToLeft",
                                        operator: "?"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "robotFlow",
                                    expression: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "linkExternal"
                                    }, {
                                        type: "Twig.expression.type.null",
                                        value: null
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "!=",
                                        precidence: 9,
                                        associativity: "leftToRight",
                                        operator: "!="
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "rel=nofollow"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: ""
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "?",
                                        precidence: 16,
                                        associativity: "rightToLeft",
                                        operator: "?"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t\t\t\t\t\t\t\t\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "isHot",
                                    expression: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "isHot"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "isHot"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: ""
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "?",
                                        precidence: 16,
                                        associativity: "rightToLeft",
                                        operator: "?"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: '\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="news_item__time">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="date">05</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="month">12</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="news_item '
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "isHot",
                                    match: ["isHot"]
                                }]
                            }, {
                                type: "raw",
                                value: '">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "link",
                                    match: ["link"]
                                }]
                            }, {
                                type: "raw",
                                value: '" '
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "target",
                                    match: ["target"]
                                }]
                            }, {
                                type: "raw",
                                value: " "
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "robotFlow",
                                    match: ["robotFlow"]
                                }]
                            }, {
                                type: "raw",
                                value: ' class="news_item__title news_item__title-news" data-hot="Hot!" data-cate="" title="'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "title"
                                }]
                            }, {
                                type: "raw",
                                value: '">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "title"
                                }, {
                                    type: "Twig.expression.type.slice",
                                    value: "slice",
                                    match: ["[0:35]", "0:35"],
                                    params: [0, 35]
                                }]
                            }, {
                                type: "raw",
                                value: "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.if",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "title"
                                    }, {
                                        type: "Twig.expression.type.filter",
                                        value: "length",
                                        match: ["|length", "length"]
                                    }, {
                                        type: "Twig.expression.type.number",
                                        value: 35,
                                        match: ["35", null]
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: ">",
                                        precidence: 8,
                                        associativity: "leftToRight",
                                        operator: ">"
                                    }],
                                    output: [{
                                        type: "raw",
                                        value: "...\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: '\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="news_item__content">Chủ Nhân làm nhiệm vụ để nhận 4 loại búa, mỗi nhiệm vụ nhận 1 búa, khi các Chủ Nhân góp đủ số lượng búa sẽ...</p>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t'
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t"
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href="/tin-tuc/tin-tuc.1.html" class="desktop viewall viewAll">\r\n\t\t\t\t\t\t\t\t<span>Xem thêm +</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href="/tin-tuc/tin-tuc.1.html" class="mobile viewall viewAll">\r\n\t\t\t\t\t\t\t\t<span>+</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ul class="mobile-flex group-support">\r\n\t\t\t\t\t\t<li><a href="#" class="btn-guide">Hướng dẫn nạp thẻ</a></li>\r\n\t\t\t\t\t\t<li><a href="#" class="btn-policy">Điều khoản</a></li>\r\n\t\t\t\t\t\t<li><a href="#" class="btn-support">Hỗ trợ</a></li>\r\n\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, , function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:010ab1aaaf314c52cec3bfc9205f9b47e588b86262a60c90dc21076dcdd7d1d2691161ec99c4e209205e4b196fa2e5f56a80d218d47980e665d269ac8ec50bf5:follow.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_follow"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="mainsite_2024/follow/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="mainsite_2024/follow/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="tagline">\r\n\t\t\t\t\t<img class="title" src="mainsite_2024/follow/images/tagline-th.png" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="group__social">\r\n\t\t\t\t\t<a href="#" class="group__social--facebook">facebook</a>\r\n\t\t\t\t\t<a href="#" class="group__social--group">group</a>\r\n\t\t\t\t\t<a href="#" class="group__social--line">line</a>\r\n\t\t\t\t\t<a href="#" class="group__social--whatsapp">whatsapp</a>\r\n\t\t\t\t\t<a href="#" class="group__social--youtube">youtube</a>\r\n\t\t\t\t\t<a href="#" class="group__social--tiktok">tiktok</a>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="frame__fanpage">\r\n\t\t\t\t\t<div class="content__fanpage">\r\n\t\t\t\t\t\t<span class="icon__decor"></span>\r\n\t\t\t\t\t\t<div class="fb-like-box fanpage" data-href="https://www.facebook.com/kiemtheorigin" data-width="500" data-height="580" data-colorscheme="light" data-show-faces="false" data-header="true" data-stream="true" data-show-border="false"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_follow"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="mainsite_2024/follow/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="mainsite_2024/follow/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="tagline">\r\n\t\t\t\t\t<img class="title" src="mainsite_2024/follow/images/tagline-th.png" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="group__social">\r\n\t\t\t\t\t<a href="#" class="group__social--facebook">facebook</a>\r\n\t\t\t\t\t<a href="#" class="group__social--group">group</a>\r\n\t\t\t\t\t<a href="#" class="group__social--line">line</a>\r\n\t\t\t\t\t<a href="#" class="group__social--whatsapp">whatsapp</a>\r\n\t\t\t\t\t<a href="#" class="group__social--youtube">youtube</a>\r\n\t\t\t\t\t<a href="#" class="group__social--tiktok">tiktok</a>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="frame__fanpage">\r\n\t\t\t\t\t<div class="content__fanpage">\r\n\t\t\t\t\t\t<span class="icon__decor"></span>\r\n\t\t\t\t\t\t<div class="fb-like-box fanpage" data-href="https://www.facebook.com/kiemtheorigin" data-width="500" data-height="580" data-colorscheme="light" data-show-faces="false" data-header="true" data-stream="true" data-show-border="false"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_follow rendered", {}, (function(t, e) {
        $("#" + e)
    }))
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:b8de9c94a75f8d90bb0c3aba3446f4d317dc38026cfd6309426223b00fb1b30ecfb4578f41a732662932fbe42e73288a261d5b0611594426200759ceeca761df:follow_sub.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_follow_sub"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<div\r\n\t\tid="mainsite_2024_follow_sub" class="section--mainsite_2024_follow_sub mainsite_2024_follow_sub scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t<div class="content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="tagline__follow">\r\n\t\t\t\t\t<img class="title__text" src="mainsite_2024/follow_sub/images/tagline.png" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="group__social">\r\n\t\t\t\t\t<a href="#" class="group__social--facebook">facebook</a>\r\n\t\t\t\t\t<a href="#" class="group__social--group">group</a>\r\n\t\t\t\t\t<a href="#" class="group__social--line">line</a>\r\n\t\t\t\t\t<a href="#" class="group__social--whatsapp">whatsapp</a>\r\n\t\t\t\t\t<a href="#" class="group__social--youtube">youtube</a>\r\n\t\t\t\t\t<a href="#" class="group__social--tiktok">tiktok</a>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_follow_sub"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<div\r\n\t\tid="mainsite_2024_follow_sub" class="section--mainsite_2024_follow_sub mainsite_2024_follow_sub scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t<div class="content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="tagline__follow">\r\n\t\t\t\t\t<img class="title__text" src="mainsite_2024/follow_sub/images/tagline.png" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="group__social">\r\n\t\t\t\t\t<a href="#" class="group__social--facebook">facebook</a>\r\n\t\t\t\t\t<a href="#" class="group__social--group">group</a>\r\n\t\t\t\t\t<a href="#" class="group__social--line">line</a>\r\n\t\t\t\t\t<a href="#" class="group__social--whatsapp">whatsapp</a>\r\n\t\t\t\t\t<a href="#" class="group__social--youtube">youtube</a>\r\n\t\t\t\t\t<a href="#" class="group__social--tiktok">tiktok</a>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_follow_sub rendered", {}, (function(t, e) {
        $("#" + e)
    }))
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:f5da148fda9f189c7617b64d43bfd07548c88d846addedb49f2b7ea4e2682cd202882127d0333b350266fa755a9f2ac3e870347ee583d75294fcae6140b65a02:feature.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_feature"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="title__feature">\r\n\t\t\t\t\t<img data-src="mainsite_2024/feature/images/title.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="mainsite_2024/feature/images/title-m.png" class="mobile lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="bg-char">\r\n\t\t\t\t\t<img data-src="mainsite_2024/feature/images/bg-char.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="mainsite_2024/feature/images/bg-char-m.png" class="mobile lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="content__feature">\r\n\t\t\t\t\t<div id="blockFeature" class="swiper feature_list">\r\n\t\t\t\t\t\t<ul class="swiper-wrapper">\r\n\t\t\t\t\t\t\t<li class="swiper-slide feature_slide">\r\n\t\t\t\t\t\t\t\t<div class="feature-item">\r\n\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/feature/images/data.jpg" alt="" class="lazyload">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="swiper-slide feature_slide">\r\n\t\t\t\t\t\t\t\t<div class="feature-item">\r\n\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/feature/images/data.jpg" alt="" class="lazyload">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="swiper-slide feature_slide">\r\n\t\t\t\t\t\t\t\t<div class="feature-item">\r\n\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/feature/images/data.jpg" alt="" class="lazyload">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="swiper-slide feature_slide">\r\n\t\t\t\t\t\t\t\t<div class="feature-item">\r\n\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/feature/images/data.jpg" alt="" class="lazyload">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="swiper-button-prev swiper-button-prev--featureSwiper"></div>\r\n\t\t\t\t\t<div class="swiper-button-next swiper-button-next--featureSwiper"></div>\r\n\t\t\t\t\t<div class="swiper-pagination swiper-pagination--featureSwiper"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_feature"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="title__feature">\r\n\t\t\t\t\t<img data-src="mainsite_2024/feature/images/title.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="mainsite_2024/feature/images/title-m.png" class="mobile lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="bg-char">\r\n\t\t\t\t\t<img data-src="mainsite_2024/feature/images/bg-char.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="mainsite_2024/feature/images/bg-char-m.png" class="mobile lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="content__feature">\r\n\t\t\t\t\t<div id="blockFeature" class="swiper feature_list">\r\n\t\t\t\t\t\t<ul class="swiper-wrapper">\r\n\t\t\t\t\t\t\t<li class="swiper-slide feature_slide">\r\n\t\t\t\t\t\t\t\t<div class="feature-item">\r\n\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/feature/images/data.jpg" alt="" class="lazyload">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="swiper-slide feature_slide">\r\n\t\t\t\t\t\t\t\t<div class="feature-item">\r\n\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/feature/images/data.jpg" alt="" class="lazyload">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="swiper-slide feature_slide">\r\n\t\t\t\t\t\t\t\t<div class="feature-item">\r\n\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/feature/images/data.jpg" alt="" class="lazyload">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="swiper-slide feature_slide">\r\n\t\t\t\t\t\t\t\t<div class="feature-item">\r\n\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/feature/images/data.jpg" alt="" class="lazyload">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="swiper-button-prev swiper-button-prev--featureSwiper"></div>\r\n\t\t\t\t\t<div class="swiper-button-next swiper-button-next--featureSwiper"></div>\r\n\t\t\t\t\t<div class="swiper-pagination swiper-pagination--featureSwiper"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_feature rendered", {}, (function(t, e) {
        $("#" + e);
        $("#blockFeature").length > 0 && $("#blockFeature").initSwiper({
            isRenderBullet: !0,
            swiperOptions: {
                slidesPerView: "auto",
                centeredSlides: !0,
                loop: !0,
                spaceBetween: 0,
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 0,
                    stretch: 520,
                    depth: 300,
                    modifier: 1,
                    slideShadows: !1
                },
                lazy: {
                    loadPrevNext: !0
                },
                autoplay: {
                    delay: 5e3
                },
                breakpoints: {
                    769: {
                        slidesPerView: "auto",
                        effect: "coverflow",
                        coverflowEffect: {
                            rotate: 0,
                            stretch: 715,
                            depth: 300,
                            modifier: 1,
                            slideShadows: !1
                        }
                    }
                },
                navigation: {
                    nextEl: ".swiper-button-next--featureSwiper",
                    prevEl: ".swiper-button-prev--featureSwiper"
                },
                pagination: {
                    el: ".swiper-pagination.swiper-pagination--featureSwiper",
                    clickable: !0
                }
            }
        })
    }))
}, function(t, e, a) {
    a(119);
    var i = (0, a(4).twig)({
        id: "$resolved:31a39b3de35a0676a6c6242cef190a549d045ed270e2c474db198764354ae1894c6a2e4e87bfc754fe19016f806d97768f8fd94428df0701dd94f62bc2401e4a:main_sub_detail_news.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_main_sub_detail_news"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="main">\r\n\t\t\t\t\t<div class="title">\r\n\t\t\t\t\t\t<span class="title__text">News & Events</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="panel">\r\n\t\t\t\t\t\t<div class="panel__loop">\r\n\t\t\t\t\t\t\t<div class="panel__content">\r\n\t\t\t\t\t\t\t\t<div class="subweb">\r\n\r\n\t\t\t\t\t\t\t\t\t<div class="subweb__main">\r\n\t\t\t\t\t\t\t\t\t\t<div class="info">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="info__link">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="home">home</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="next_sub">next_sub</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="info__main">Tin tức</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="next_sub">next_sub</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>News & Events</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="menu-event">\r\n\t\t\t\t\t\t\t\t\t\t\t<span id="subwebBurger" class="midbar2__burger hamburger hamburger--emphatic mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="hamburger-box">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="hamburger-inner">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class="nav-mini">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Quà phúc lợi</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Tiệc mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="sub__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="midbar">\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="midbar__title">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class="midbar__date">10/05/2024</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="subweb__content">\r\n\t\t\t\t\t\t\t\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.include",
                        only: !1,
                        ignoreMissing: !1,
                        stack: [{
                            type: "Twig.expression.type.string",
                            value: "$resolved:edae48a49ce0893c4e7367f78187d506198c69bc56a69b03f97dabfba4a292a730c1f180beb794976ac6dd9a11ffa3e73b3608522a8f486917913914fd29e419:default-compact-wotitle.html.twig"
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="subweb__aside">\r\n\t\t\t\t\t\t\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t\t\t\t\t<div class="miniweb__menu">\r\n\t\t\t\t\t\t\t\t\t\t\t<h2 class="subweb__menutitle">Danh sách sư kiện</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Quà phúc lợi</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Tiệc mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_main_sub_detail_news"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="main">\r\n\t\t\t\t\t<div class="title">\r\n\t\t\t\t\t\t<span class="title__text">News & Events</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="panel">\r\n\t\t\t\t\t\t<div class="panel__loop">\r\n\t\t\t\t\t\t\t<div class="panel__content">\r\n\t\t\t\t\t\t\t\t<div class="subweb">\r\n\r\n\t\t\t\t\t\t\t\t\t<div class="subweb__main">\r\n\t\t\t\t\t\t\t\t\t\t<div class="info">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="info__link">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="home">home</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="next_sub">next_sub</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="info__main">Tin tức</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="next_sub">next_sub</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>News & Events</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="menu-event">\r\n\t\t\t\t\t\t\t\t\t\t\t<span id="subwebBurger" class="midbar2__burger hamburger hamburger--emphatic mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="hamburger-box">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="hamburger-inner">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class="nav-mini">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Quà phúc lợi</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Tiệc mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="sub__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="midbar">\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="midbar__title">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class="midbar__date">10/05/2024</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="subweb__content">\r\n\t\t\t\t\t\t\t\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.include",
                    only: !1,
                    ignoreMissing: !1,
                    stack: [{
                        type: "Twig.expression.type.string",
                        value: "$resolved:edae48a49ce0893c4e7367f78187d506198c69bc56a69b03f97dabfba4a292a730c1f180beb794976ac6dd9a11ffa3e73b3608522a8f486917913914fd29e419:default-compact-wotitle.html.twig"
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="subweb__aside">\r\n\t\t\t\t\t\t\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t\t\t\t\t<div class="miniweb__menu">\r\n\t\t\t\t\t\t\t\t\t\t\t<h2 class="subweb__menutitle">Danh sách sư kiện</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Quà phúc lợi</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Tiệc mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="">Hoàn trả mừng lễ</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:edae48a49ce0893c4e7367f78187d506198c69bc56a69b03f97dabfba4a292a730c1f180beb794976ac6dd9a11ffa3e73b3608522a8f486917913914fd29e419:default-compact-wotitle.html.twig",
        data: [{
            type: "raw",
            value: '<article\r\n\tclass="article">\r\n\r\n\t'
        }, {
            type: "raw",
            value: '\r\n\r\n\t<div class="article__content">\r\n\r\n\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit:\r\n\t\t\t<a href="#" class="">\r\n\t\t\t\tOdio purus venenatis dui\r\n\t\t\t</a>\r\n\t\t\tfermentum fermentum, odio purus venenatis dui, a pulvinar urna turpis hendrerit tortor. Quisque\r\n\t\t\t            fringilla vel felis sed tempor.\r\n\t\t</p>\r\n\r\n\t\t<a href="#" class="hero">\r\n\t\t\tOdio purus venenatis dui\r\n\t\t</a>\r\n\r\n\t\t<h2>H2 | In commodo diam vitae metus iaculis feugiat</h2>\r\n\r\n\t\t<h3>H3 | Morbi malesuada molestie purus sed elementum</h3>\r\n\t\t<h4>H4 | In commodo diam vitae metus iaculis feugiat</h4>\r\n\r\n\t\t<h5>H5 | Morbi malesuada molestie purus sed elementum</h5>\r\n\t\t<h6>H6 | Morbi malesuada molestie purus sed elementum</h6>\r\n\r\n\t\t<p class="caption">caption | Suspendisse dolor ex, ullamcorper ut cursus eu, ornare ac elit.\r\n\t\t</p>\r\n\r\n\t\t<p>Nullam id mi ultrices, pulvinar diam nec, convallis leo.\r\n\t\t</p>\r\n\r\n\t\t<img src="https://img.zing.vn/products/kv/wp3/mainsite/assets/images/sample/axb.svg" alt="Sed tristique erat quis diam viverra, vel vulputate sem condimentum.">\r\n\r\n\t\t<p class="caption">caption | Sed tristique erat quis diam viverra, vel vulputate sem condimentum.</p>\r\n\r\n\t\t<div class="callout">\r\n\t\t\t<p>callout | Curabitur malesuada tristique feugiat. Maecenas eu diam ac nunc pulvinar ullamcorper. Duis sit\r\n\t\t\t\t                amet felis a massa facilisis iaculis et vel libero. Phasellus suscipit nisi ac odio porttitor faucibus.\r\n\t\t\t\t                Cras consequat molestie sodales. Donec sed consequat nisl. Donec rhoncus feugiat mauris, eget viverra\r\n\t\t\t\t                lectus posuere eget. Etiam cursus massa consequat consequat pellentesque. Suspendisse a mattis justo,\r\n\t\t\t\t                nec rutrum est.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\r\n\t\t<img src="https://img.zing.vn/products/kv/wp3/mainsite/assets/images/sample/axb.svg" alt="Sed tristique erat quis diam viverra, vel vulputate sem condimentum." class="float" width="160">\r\n\r\n\t\t<p>Quisque suscipit, neque a mollis commodo, nibh nisi euismod orci, ut sagittis nibh nisi sit amet ipsum. Sed\r\n\t\t\t            condimentum facilisis turpis, vitae cursus tellus sodales quis. Fusce nec bibendum nunc. Duis volutpat\r\n\t\t\t            dictum est vel bibendum. Donec mattis, eros vitae placerat scelerisque, nisl metus pulvinar magna, suscipit\r\n\t\t\t            tempor lacus nibh eget leo. Nullam luctus, lectus vitae efficitur eleifend, risus sem imperdiet sem, id\r\n\t\t\t            tempus nisi augue a magna. Duis et arcu id nisl ultricies aliquet. Vestibulum porta nisi et nunc luctus, ac\r\n\t\t\t            sagittis felis posuere. In vitae consequat quam, et tincidunt erat. Maecenas ullamcorper augue eget leo\r\n\t\t\t            pretium, vel tempor lectus mollis. Mauris vestibulum augue at ex condimentum, at consectetur magna\r\n\t\t\t            convallis. Donec bibendum nisi sed massa posuere gravida. In ornare eleifend ligula elementum blandit.\r\n\t\t</p>\r\n\r\n\t\t<div class="table">\r\n\t\t\t<table>\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Duis</th>\r\n\t\t\t\t\t\t<th>Vestibulum</th>\r\n\t\t\t\t\t\t<th>Sed massa posuere</th>\r\n\t\t\t\t\t\t<th>Elementum</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Duis</td>\r\n\t\t\t\t\t\t<td>Vestibulum</td>\r\n\t\t\t\t\t\t<td>Sed massa posuere</td>\r\n\t\t\t\t\t\t<td>Elementum</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t<td><img src="https://img.zing.vn/products/kv/wp3/mainsite/assets/images/sample/axb.svg" alt="Sed tristique erat quis diam viverra, vel vulputate sem condimentum."></td>\r\n\t\t\t\t\t\t<td>Donec mattis,\r\n\t\t\t\t\t\t\t<strong>strong | eros vitae placerat scelerisque</strong>, nisl metus\r\n\t\t\t\t\t\t\t<a href="#">a\r\n\t\t\t\t\t\t\t\t                            | pulvinar magna</a>.\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>Vestibulum vitae.</li>\r\n\t\t\t\t\t\t\t\t<li>Aliquam tellus est.\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li>Lorem vestibulum interdum.</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Mattis ultrices ante.</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t<td><img src="https://img.zing.vn/products/kv/wp3/mainsite/assets/images/sample/axb.svg" alt="Sed tristique erat quis diam viverra, vel vulputate sem condimentum."></td>\r\n\t\t\t\t\t\t<td>\r\n\r\n\t\t\t\t\t\t\t<p>Risus sem imperdiet sem, id tempus nisi augue a magna.</p>\r\n\r\n\t\t\t\t\t\t\t<div class="callout">callout | Risus sem imperdiet sem, id tempus nisi augue a magna.</div>\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<ul class="numbered">\r\n\t\t\t\t\t\t\t\t<li>Vestibulum vitae.</li>\r\n\t\t\t\t\t\t\t\t<li>Aliquam tellus est.\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li>Lorem vestibulum interdum.</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Mattis ultrices ante.</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t\t<tfoot></tfoot>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\r\n\r\n\t</div>\r\n\r\n\r\n</article>\r\n'
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "raw",
        value: '<article\r\n\tclass="article">\r\n\r\n\t'
    }, {
        type: "raw",
        value: '\r\n\r\n\t<div class="article__content">\r\n\r\n\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit:\r\n\t\t\t<a href="#" class="">\r\n\t\t\t\tOdio purus venenatis dui\r\n\t\t\t</a>\r\n\t\t\tfermentum fermentum, odio purus venenatis dui, a pulvinar urna turpis hendrerit tortor. Quisque\r\n\t\t\t            fringilla vel felis sed tempor.\r\n\t\t</p>\r\n\r\n\t\t<a href="#" class="hero">\r\n\t\t\tOdio purus venenatis dui\r\n\t\t</a>\r\n\r\n\t\t<h2>H2 | In commodo diam vitae metus iaculis feugiat</h2>\r\n\r\n\t\t<h3>H3 | Morbi malesuada molestie purus sed elementum</h3>\r\n\t\t<h4>H4 | In commodo diam vitae metus iaculis feugiat</h4>\r\n\r\n\t\t<h5>H5 | Morbi malesuada molestie purus sed elementum</h5>\r\n\t\t<h6>H6 | Morbi malesuada molestie purus sed elementum</h6>\r\n\r\n\t\t<p class="caption">caption | Suspendisse dolor ex, ullamcorper ut cursus eu, ornare ac elit.\r\n\t\t</p>\r\n\r\n\t\t<p>Nullam id mi ultrices, pulvinar diam nec, convallis leo.\r\n\t\t</p>\r\n\r\n\t\t<img src="https://img.zing.vn/products/kv/wp3/mainsite/assets/images/sample/axb.svg" alt="Sed tristique erat quis diam viverra, vel vulputate sem condimentum.">\r\n\r\n\t\t<p class="caption">caption | Sed tristique erat quis diam viverra, vel vulputate sem condimentum.</p>\r\n\r\n\t\t<div class="callout">\r\n\t\t\t<p>callout | Curabitur malesuada tristique feugiat. Maecenas eu diam ac nunc pulvinar ullamcorper. Duis sit\r\n\t\t\t\t                amet felis a massa facilisis iaculis et vel libero. Phasellus suscipit nisi ac odio porttitor faucibus.\r\n\t\t\t\t                Cras consequat molestie sodales. Donec sed consequat nisl. Donec rhoncus feugiat mauris, eget viverra\r\n\t\t\t\t                lectus posuere eget. Etiam cursus massa consequat consequat pellentesque. Suspendisse a mattis justo,\r\n\t\t\t\t                nec rutrum est.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\r\n\t\t<img src="https://img.zing.vn/products/kv/wp3/mainsite/assets/images/sample/axb.svg" alt="Sed tristique erat quis diam viverra, vel vulputate sem condimentum." class="float" width="160">\r\n\r\n\t\t<p>Quisque suscipit, neque a mollis commodo, nibh nisi euismod orci, ut sagittis nibh nisi sit amet ipsum. Sed\r\n\t\t\t            condimentum facilisis turpis, vitae cursus tellus sodales quis. Fusce nec bibendum nunc. Duis volutpat\r\n\t\t\t            dictum est vel bibendum. Donec mattis, eros vitae placerat scelerisque, nisl metus pulvinar magna, suscipit\r\n\t\t\t            tempor lacus nibh eget leo. Nullam luctus, lectus vitae efficitur eleifend, risus sem imperdiet sem, id\r\n\t\t\t            tempus nisi augue a magna. Duis et arcu id nisl ultricies aliquet. Vestibulum porta nisi et nunc luctus, ac\r\n\t\t\t            sagittis felis posuere. In vitae consequat quam, et tincidunt erat. Maecenas ullamcorper augue eget leo\r\n\t\t\t            pretium, vel tempor lectus mollis. Mauris vestibulum augue at ex condimentum, at consectetur magna\r\n\t\t\t            convallis. Donec bibendum nisi sed massa posuere gravida. In ornare eleifend ligula elementum blandit.\r\n\t\t</p>\r\n\r\n\t\t<div class="table">\r\n\t\t\t<table>\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Duis</th>\r\n\t\t\t\t\t\t<th>Vestibulum</th>\r\n\t\t\t\t\t\t<th>Sed massa posuere</th>\r\n\t\t\t\t\t\t<th>Elementum</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Duis</td>\r\n\t\t\t\t\t\t<td>Vestibulum</td>\r\n\t\t\t\t\t\t<td>Sed massa posuere</td>\r\n\t\t\t\t\t\t<td>Elementum</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t<td><img src="https://img.zing.vn/products/kv/wp3/mainsite/assets/images/sample/axb.svg" alt="Sed tristique erat quis diam viverra, vel vulputate sem condimentum."></td>\r\n\t\t\t\t\t\t<td>Donec mattis,\r\n\t\t\t\t\t\t\t<strong>strong | eros vitae placerat scelerisque</strong>, nisl metus\r\n\t\t\t\t\t\t\t<a href="#">a\r\n\t\t\t\t\t\t\t\t                            | pulvinar magna</a>.\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>Vestibulum vitae.</li>\r\n\t\t\t\t\t\t\t\t<li>Aliquam tellus est.\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li>Lorem vestibulum interdum.</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Mattis ultrices ante.</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t<td><img src="https://img.zing.vn/products/kv/wp3/mainsite/assets/images/sample/axb.svg" alt="Sed tristique erat quis diam viverra, vel vulputate sem condimentum."></td>\r\n\t\t\t\t\t\t<td>\r\n\r\n\t\t\t\t\t\t\t<p>Risus sem imperdiet sem, id tempus nisi augue a magna.</p>\r\n\r\n\t\t\t\t\t\t\t<div class="callout">callout | Risus sem imperdiet sem, id tempus nisi augue a magna.</div>\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<ul class="numbered">\r\n\t\t\t\t\t\t\t\t<li>Vestibulum vitae.</li>\r\n\t\t\t\t\t\t\t\t<li>Aliquam tellus est.\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li>Lorem vestibulum interdum.</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Mattis ultrices ante.</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t\t<tfoot></tfoot>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\r\n\r\n\t</div>\r\n\r\n\r\n</article>\r\n'
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_main_sub_detail_news rendered", {}, (function(t, e) {
        $("#" + e);
        $(".news").each((function() {
            var t = "#" + $(this).attr("id");
            $().vPortal({
                container: t,
                el: {
                    tabContainer: ".news_tab > ul",
                    resultContainer: ".news_list"
                },
                paginationOptions: {}
            })
        })), $("#subwebBurger").each((function() {
            $("#subwebBurger").toggleClassname({
                toggle: [{
                    el: $(".nav-mini"),
                    className: "active"
                }, {
                    el: $("#subwebBurger"),
                    className: "is-active"
                }]
            })
        }))
    }))
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:b991a6ef06d06ee0f012ad8a37e80b9b332fccbf63e6e58ae524d7071a7139a783218655c49f761005b53d9b0c2bd496ff4d6b51750544ad042553c683dbfcbc:main_sub_news.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_main_sub_news"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section\r\n\t\tid="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="main">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div id="homeNews" class="news news--homeNews">\r\n\t\t\t\t\t\t<div class="news_tab">\r\n\t\t\t\t\t\t\t<ul class="tab">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item active">\r\n\t\t\t\t\t\t\t\t\t\tAll\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\tNews\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\tGuide\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="news_list">\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        keyVar: null,
                        valueVar: "i",
                        expression: [{
                            type: "Twig.expression.type.number",
                            value: 1,
                            match: ["1", null]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 8,
                            match: ["8", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "..",
                            precidence: 20,
                            associativity: "leftToRight",
                            operator: ".."
                        }],
                        output: [{
                            type: "raw",
                            value: '\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class="news_item isHot">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="" rel="nofollow" class="news_item__title" title="Hoạt động Long Môn Chiến">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="thumb">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class="sub__thumb" src="mainsite_2024/main_sub_news/images/data.jpg" alt=""/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="gr__title">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="flex_time">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="title__news">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="short__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="news_item__time">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t14/08/2022\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="view-more">Xem thêm</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\r\n\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<input type="hidden" id=\'itemTotal\' value="105">\r\n\t\t\t\t\t\t<input type="hidden" id=\'itemPerPage\' value="6">\r\n\t\t\t\t\t\t<input type="hidden" id=\'currentSection\' value="tin-tuc">\r\n\t\t\t\t\t\t<input type="hidden" id=\'shortUri\' value="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "site",
                        match: ["site"]
                    }]
                }, {
                    type: "raw",
                    value: '/tin-tuc2">\r\n\r\n\t\t\t\t\t\t<div class="news_pagination">\r\n\t\t\t\t\t\t\t<ul class="pagination">\r\n\t\t\t\t\t\t\t\t<li class="first disabled"><a href="#"\r\n                                                                    class="page-link">&lsaquo;&lsaquo;</a></li>\r\n                                                            <li class="prev disabled"><a href="#"\r\n                                                                    class="page-link">&lsaquo;</a></li>\r\n\t\t\t\t\t\t\t\t<li class="page-item active">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="page-link active">1</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="page-item">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="page-link ">2</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="page-item">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="page-link ">3</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="page-item">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="page-link ">4</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="next"><a href="#" class="page-link">&rsaquo;</a>\r\n                                                            </li>\r\n                                                            <li class="last"><a href="#"\r\n                                                                    class="page-link">&rsaquo;&rsaquo;</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_main_sub_news"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section\r\n\t\tid="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="main">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div id="homeNews" class="news news--homeNews">\r\n\t\t\t\t\t\t<div class="news_tab">\r\n\t\t\t\t\t\t\t<ul class="tab">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item active">\r\n\t\t\t\t\t\t\t\t\t\tAll\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\tNews\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="tab__item">\r\n\t\t\t\t\t\t\t\t\t\tGuide\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="news_list">\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.for",
                    keyVar: null,
                    valueVar: "i",
                    expression: [{
                        type: "Twig.expression.type.number",
                        value: 1,
                        match: ["1", null]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 8,
                        match: ["8", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "..",
                        precidence: 20,
                        associativity: "leftToRight",
                        operator: ".."
                    }],
                    output: [{
                        type: "raw",
                        value: '\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class="news_item isHot">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="" rel="nofollow" class="news_item__title" title="Hoạt động Long Môn Chiến">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="thumb">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class="sub__thumb" src="mainsite_2024/main_sub_news/images/data.jpg" alt=""/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="gr__title">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="flex_time">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="title__news">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="short__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="news_item__time">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t14/08/2022\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="view-more">Xem thêm</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\r\n\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<input type="hidden" id=\'itemTotal\' value="105">\r\n\t\t\t\t\t\t<input type="hidden" id=\'itemPerPage\' value="6">\r\n\t\t\t\t\t\t<input type="hidden" id=\'currentSection\' value="tin-tuc">\r\n\t\t\t\t\t\t<input type="hidden" id=\'shortUri\' value="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "site",
                    match: ["site"]
                }]
            }, {
                type: "raw",
                value: '/tin-tuc2">\r\n\r\n\t\t\t\t\t\t<div class="news_pagination">\r\n\t\t\t\t\t\t\t<ul class="pagination">\r\n\t\t\t\t\t\t\t\t<li class="first disabled"><a href="#"\r\n                                                                    class="page-link">&lsaquo;&lsaquo;</a></li>\r\n                                                            <li class="prev disabled"><a href="#"\r\n                                                                    class="page-link">&lsaquo;</a></li>\r\n\t\t\t\t\t\t\t\t<li class="page-item active">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="page-link active">1</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="page-item">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="page-link ">2</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="page-item">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="page-link ">3</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="page-item">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="page-link ">4</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="next"><a href="#" class="page-link">&rsaquo;</a>\r\n                                                            </li>\r\n                                                            <li class="last"><a href="#"\r\n                                                                    class="page-link">&rsaquo;&rsaquo;</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_main_sub_news rendered", {}, (function(t, e) {
        $("#" + e)
    }))
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:9f7ef8daf40a8219d18b2a91193f0b22796e4795c0a1f494d0b683e218114ab0fe9a779f1b8d390d3d0ff36117f179d3883791e8b9e7c63919159609b0a535d6:main_404.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n    "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_main_404"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n    "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n    <section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame"\r\n             data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n        <div class="section__background">\r\n            <img data-src="mainsite_2024/main_404/images/bg.jpg" class="desktop lazyload" alt="">\r\n            <img data-src="mainsite_2024/main_404/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n            <span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n        </div>\r\n        <div class="section__content">\r\n            <div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n                <div class="top__logo">\r\n                    <a href="#" class="logo">\r\n                    <img data-src="mainsite_2024/main_404/images/logo.png" class="lazyload" alt="">\r\n                    </a>                    \r\n                </div>\r\n                <div class="text-main">404</div>\r\n                 <div class="text-sub">\r\n                 <img data-src="mainsite_2024/main_404/images/text-sub.png" class="lazyload" alt="">\r\n                    </a>\r\n                 </div>\r\n                <a href="#" class="back-home">back-home</a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n'
                }]
            }
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n    "
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_main_404"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n    "
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n    <section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame"\r\n             data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n        <div class="section__background">\r\n            <img data-src="mainsite_2024/main_404/images/bg.jpg" class="desktop lazyload" alt="">\r\n            <img data-src="mainsite_2024/main_404/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n            <span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n        </div>\r\n        <div class="section__content">\r\n            <div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n                <div class="top__logo">\r\n                    <a href="#" class="logo">\r\n                    <img data-src="mainsite_2024/main_404/images/logo.png" class="lazyload" alt="">\r\n                    </a>                    \r\n                </div>\r\n                <div class="text-main">404</div>\r\n                 <div class="text-sub">\r\n                 <img data-src="mainsite_2024/main_404/images/text-sub.png" class="lazyload" alt="">\r\n                    </a>\r\n                 </div>\r\n                <a href="#" class="back-home">back-home</a>\r\n            </div>\r\n        </div>\r\n    </section>\r\n'
            }]
        }
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_main_404 rendered", {}, (function(t, e) {
        $("#" + e)
    }))
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:6b6c1887db5c58bfe4d7455b819fba725009d40bde992bbbaebcade1f40cd9db184bd8c58334f8ae40dabbab4383ec2e208b0eb008be147330ab643b4e92e4d1:footer.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_footer"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="mainsite_2024/footer/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="mainsite_2024/footer/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<ul class="list-social">\r\n\t\t\t\t\t<li><a href="#" class="social_fanpage">Facebook</a></li>\r\n\t\t\t\t\t<li><a href="#" class="social_youtube">Youtube</a></li>\r\n\t\t\t\t\t<li><a href="#" class="social_group">Group</a></li>\r\n\t\t\t\t\t<li><a href="#" class="social_tiktok">Tiktok</a></li>\r\n\t\t\t\t\t<li><a href="#" class="social_zalo">Zalo</a></li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<p>Công Ty TNHH Truyền Thông Minh Phương Thịnh<br>\r\nĐịa chỉ: 229 Huỳnh Ngọc Huệ, Phường Hòa Khê, Quận Thanh Khê, Thành Phố Đà Nẵng, Việt Nam.<br>\r\nGiấy phép phê duyệt nội dung số: 1313/QĐ-BTTTT cấp ngày 09/08/2017 do Bộ Thông Tin Và Truyền Thông cấp.\r\n\t\t\t\t</p>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_footer"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="mainsite_2024/footer/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="mainsite_2024/footer/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<ul class="list-social">\r\n\t\t\t\t\t<li><a href="#" class="social_fanpage">Facebook</a></li>\r\n\t\t\t\t\t<li><a href="#" class="social_youtube">Youtube</a></li>\r\n\t\t\t\t\t<li><a href="#" class="social_group">Group</a></li>\r\n\t\t\t\t\t<li><a href="#" class="social_tiktok">Tiktok</a></li>\r\n\t\t\t\t\t<li><a href="#" class="social_zalo">Zalo</a></li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<p>Công Ty TNHH Truyền Thông Minh Phương Thịnh<br>\r\nĐịa chỉ: 229 Huỳnh Ngọc Huệ, Phường Hòa Khê, Quận Thanh Khê, Thành Phố Đà Nẵng, Việt Nam.<br>\r\nGiấy phép phê duyệt nội dung số: 1313/QĐ-BTTTT cấp ngày 09/08/2017 do Bộ Thông Tin Và Truyền Thông cấp.\r\n\t\t\t\t</p>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_footer rendered", {}, (function(t, e) {
        $("#" + e)
    }))
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:4e45d911cc521006d733857bfeb9a9815cf0f9fe615251859cb63913bee0bf7682376d6cabb6d2ba08ad96866845ad30f6e84ad6e9e3ec1d2dc5d3934a7cc9be:float_top.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_float_top"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<div id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="floattop '
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scaleDesktop scaleMobile" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="floattop__background"></div>\r\n\t\t<div class="floattop__content">\r\n\t\t\t<div class="group__nav mobile-flex">\r\n\t\t\t\t<a href="#" class="floattop__nav--group--appicon">\r\n\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-app.png" class="lazyload" alt="">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href="#" class="floattop__nav--group--download">\r\n\t\t\t\t\tTải game\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href="#" class="floattop__nav--group--topup">\r\n\t\t\t\t\tNạp Thẻ\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href="#" class="floattop__nav--group--entercode">\r\n\t\t\t\t\tNhập code\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<a href="#" class="desktop floattop__logo">\r\n\t\t\t\t<img data-src="mainsite_2024/float_top/images/logo.png" class="lazyload" alt="">\r\n\t\t\t</a>\r\n\t\t\t<div id="floatnav" class="floattop__nav floatnav">\r\n\t\t\t\t\r\n\t\t\t\t<ul class="floattop__nav--main">\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-home.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t\t\t\t<span class="mobile">Trang chủ</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tTin tức\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tSự kiện\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tGiới thiệu\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tHướng dẫn\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item dropdown__sub">\r\n\t\t\t\t\t\t\t\tCộng đồng\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<ul class="dropdown">\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tNews\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-fb.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t\tFanpage\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-youtube.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t\tYoutube\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-tiktok.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t\tTiktok\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tNews\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tHỗ trợ\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<span id="navBurger" class="floattop__item floattop__item--burger mobile">burger</span>\r\n\t\t</div>\r\n\t</div>\r\n\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_float_top"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<div id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="floattop '
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scaleDesktop scaleMobile" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="floattop__background"></div>\r\n\t\t<div class="floattop__content">\r\n\t\t\t<div class="group__nav mobile-flex">\r\n\t\t\t\t<a href="#" class="floattop__nav--group--appicon">\r\n\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-app.png" class="lazyload" alt="">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href="#" class="floattop__nav--group--download">\r\n\t\t\t\t\tTải game\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href="#" class="floattop__nav--group--topup">\r\n\t\t\t\t\tNạp Thẻ\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href="#" class="floattop__nav--group--entercode">\r\n\t\t\t\t\tNhập code\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<a href="#" class="desktop floattop__logo">\r\n\t\t\t\t<img data-src="mainsite_2024/float_top/images/logo.png" class="lazyload" alt="">\r\n\t\t\t</a>\r\n\t\t\t<div id="floatnav" class="floattop__nav floatnav">\r\n\t\t\t\t\r\n\t\t\t\t<ul class="floattop__nav--main">\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-home.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t\t\t\t<span class="mobile">Trang chủ</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tTin tức\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tSự kiện\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tGiới thiệu\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tHướng dẫn\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item dropdown__sub">\r\n\t\t\t\t\t\t\t\tCộng đồng\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<ul class="dropdown">\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tNews\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-fb.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t\tFanpage\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-youtube.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t\tYoutube\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\t<img data-src="mainsite_2024/float_top/images/icon-tiktok.png" class="lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t\tTiktok\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tNews\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t<a href="#" class="floatnav__item">\r\n\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="item__menu">\r\n\t\t\t\t\t\t\t<a href="#" class="floattop__nav--main--item">\r\n\t\t\t\t\t\t\t\tHỗ trợ\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<span id="navBurger" class="floattop__item floattop__item--burger mobile">burger</span>\r\n\t\t</div>\r\n\t</div>\r\n\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_float_top rendered", {}, (function(t, e) {
        $("#" + e)
    }))
}, function(t, e, a) {
    var i = (0, a(4).twig)({
        id: "$resolved:584a94108f2f7538ba118e099c80f91667f35def983fe7bf365d896f398fd6dc7621f64cff4372bc3833b01d65758f762d8a8365c1e38ec45ffd38b7258f53e5:float_right.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "mainsite_2024_float_right"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<div id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="floatright '
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '  scaleDesktop desktop" data-desktop-origin="top right" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="floatright__inertia">\r\n\t\t\t<div class="floatright__main active">\r\n\t\t\t\t<div class="floatright__background">\r\n\t\t\t\t\t<img data-src="mainsite_2024/float_right/images/bg-right.png" class="desktop lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="floatright__content">\r\n\t\t\t\t\t<div class="floatright__item floatright__item--qr">\r\n\t\t\t\t\t\t<img src="mainsite_2024/float_right/images/qrcode.png" class="desktop" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a href="" class="floatright__item floatright__item--napthe">napthe</a>\r\n\t\t\t\t\t<a href="" class="floatright__item floatright__item--appstore">appstore</a>\r\n\t\t\t\t\t<a href="" class="floatright__item floatright__item--ggplay">ggplay</a>\r\n\t\t\t\t\t<a href="" class="floatright__item floatright__item--apk">apk</a>\r\n\r\n\t\t\t\t\t<ul class="gr__social">\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--fb">fb</a></li>\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--youtube">youtube</a></li>\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--group">group</a></li>\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--tiktok">tiktok</a></li>\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--zalo">zalo</a></li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t<span id="asideRightToggle" class="floatrightToggle floatright__item floatright__item--toggle">close</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class="scrollTop top">scrolltop</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }, t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "mainsite_2024_float_right"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<div id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="floatright '
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '  scaleDesktop desktop" data-desktop-origin="top right" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="floatright__inertia">\r\n\t\t\t<div class="floatright__main active">\r\n\t\t\t\t<div class="floatright__background">\r\n\t\t\t\t\t<img data-src="mainsite_2024/float_right/images/bg-right.png" class="desktop lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="floatright__content">\r\n\t\t\t\t\t<div class="floatright__item floatright__item--qr">\r\n\t\t\t\t\t\t<img src="mainsite_2024/float_right/images/qrcode.png" class="desktop" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a href="" class="floatright__item floatright__item--napthe">napthe</a>\r\n\t\t\t\t\t<a href="" class="floatright__item floatright__item--appstore">appstore</a>\r\n\t\t\t\t\t<a href="" class="floatright__item floatright__item--ggplay">ggplay</a>\r\n\t\t\t\t\t<a href="" class="floatright__item floatright__item--apk">apk</a>\r\n\r\n\t\t\t\t\t<ul class="gr__social">\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--fb">fb</a></li>\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--youtube">youtube</a></li>\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--group">group</a></li>\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--tiktok">tiktok</a></li>\r\n\t\t\t\t\t\t<li><a href="" class="social__item social__item--zalo">zalo</a></li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t<span id="asideRightToggle" class="floatrightToggle floatright__item floatright__item--toggle">close</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class="scrollTop top">scrolltop</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}, function(t, e, a) {
    "use strict";
    a.r(e)
}, function(t, e) {
    $(document).on("mainsite_2024_float_right rendered", {}, (function(t, e) {
        $("#" + e);
        $("#asideRightToggle").on("click", (function() {
            $(this).toggleClass("close")
        }))
    }))
}, function(t, e) {
    $.fn.toggleClassname = function(t) {
        var e = {
                obj: $(this),
                toggle: [{
                    el: $(this).parent(),
                    className: "active"
                }],
                before: () => {},
                after: () => {}
            },
            a = $.extend(e, t);
        a.obj.on("click", (t => {
            console.log("clicked"), t.preventDefault(), a.before(), a.toggle.forEach((function(t) {
                t.el.hasClass(t.className) ? t.el.removeClass(t.className) : t.el.addClass(t.className)
            })), a.after()
        }))
    }
}, function(t, e) {
    $.fn.universalLink = function(t) {
        var e = $.extend({
                dataAppstore: "data-appstore",
                dataAndroid: "data-ggplay"
            }, t),
            a = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/i),
            i = navigator.userAgent.toLowerCase().indexOf("android") > -1,
            r = "#";
        a ? r = $(this).attr(e.dataAppstore) : i && (r = $(this).attr(e.dataAndroid)), $(this).attr("href", r)
    }
}, function(t, e) {
    $.fn.scrollWatch = function(t) {
        var e = {
                before: () => {},
                options: {
                    watchOnce: !1,
                    watch: "#sectionHeader",
                    scrollThrottle: 20,
                    onElementInView: function() {
                        $(".breadcrumb").removeClass("fixed"), $(".nav").removeClass("fixed")
                    },
                    onElementOutOfView: function() {
                        $(".breadcrumb").addClass("fixed"), $(".nav").addClass("fixed")
                    }
                },
                after: () => {}
            },
            a = $.extend(e, t);
        a.before();
        new ScrollWatch(a.options);
        a.after()
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, a) {
    "use strict";
    a.r(e);
    try {
        ({
            mainsite_2024: {
                header: {
                    header: {
                        html: a(96),
                        scss: a(97),
                        js: a(187),
                        dir: "mainsite_2024/header/header"
                    },
                    header_sub: {
                        html: a(100),
                        scss: a(101),
                        js: a(102),
                        dir: "mainsite_2024/header_sub/header_sub"
                    }
                },
                char: {
                    char: {
                        html: a(103),
                        scss: a(104),
                        js: a(105),
                        dir: "mainsite_2024/char/char"
                    }
                },
                dynamic: {
                    news_event: {
                        html: a(106),
                        scss: a(107),
                        js: a(188),
                        dir: "mainsite_2024/news_event/news_event"
                    }
                },
                content: {
                    follow: {
                        html: a(109),
                        scss: a(110),
                        js: a(111),
                        dir: "mainsite_2024/follow/follow"
                    },
                    follow_sub: {
                        html: a(112),
                        scss: a(113),
                        js: a(114),
                        dir: "mainsite_2024/follow_sub/follow_sub"
                    },
                    feature: {
                        html: a(115),
                        scss: a(116),
                        js: a(117),
                        dir: "mainsite_2024/feature/feature"
                    },
                    main_sub_detail_news: {
                        html: a(118),
                        scss: a(120),
                        js: a(121),
                        dir: "mainsite_2024/main_sub_detail_news/main_sub_detail_news"
                    },
                    main_sub_news: {
                        html: a(122),
                        scss: a(123),
                        js: a(124),
                        dir: "mainsite_2024/main_sub_news/main_sub_news"
                    },
                    main_404: {
                        html: a(125),
                        scss: a(126),
                        js: a(127),
                        dir: "mainsite_2024/main_404/main_404"
                    }
                },
                footer: {
                    footer: {
                        html: a(128),
                        scss: a(129),
                        js: a(130),
                        dir: "mainsite_2024/footer/footer"
                    }
                },
                float: {
                    float_top: {
                        html: a(131),
                        scss: a(132),
                        js: a(133),
                        dir: "mainsite_2024/float_top/float_top"
                    },
                    float_right: {
                        html: a(134),
                        scss: a(135),
                        js: a(136),
                        dir: "mainsite_2024/float_right/float_right"
                    }
                }
            }
        })
    } catch (t) {
        console.log(t)
    }
    var i, r, s, n, l, p, o, c, u, d, g = a(61),
        y = {
            init: function(t) {
                $.extend({
                    on: {
                        update: function() {}
                    }
                }, t);
                return y.initFont(t), !0
            },
            initFont: function(t) {
                var e = {
                    sort: "popularity",
                    families: ["Roboto", "Roboto Condensed", "Roboto Flex", "Barlow", "Barlow Condensed", "Barlow Semi Condensed", "Montserrat", "Philosopher", "Noto Sans", "Sarabun", "Arsenal", "Faustina", "Bai Jamjuree", "Rowdies", "Be Vietnam Pro", "Nunito", "Signika", "Quicksand", "Titillium Web", "Oxygen", "Noto Sans TC"]
                };
                window.fontPickerPrimary = new g.a("AIzaSyBxqeghm6vBR5BLIoXjQG4PCU_A6sGSNTw", "Barlow", { ...e,
                    pickerId: "primary"
                }), window.fontPickerSecondary = new g.a("AIzaSyBxqeghm6vBR5BLIoXjQG4PCU_A6sGSNTw", "Barlow", { ...e,
                    pickerId: "secondary"
                })
            },
            executeFunctions: function() {
                $("[data-block-id]").each((function() {
                    var t = $(this).attr("data-block-id"),
                        e = $(this).attr("id");
                    $(document).trigger(t, [e])
                }))
            }
        },
        m = y,
        v = (a(137), a(93), a(32), a(138), a(139), a(94));
    $.fn.smoothScrollbar = function(t) {
        var e = {
                obj: $(this),
                watches: [{
                    offset: 100,
                    positiveReturn: function() {},
                    negativeReturn: function() {}
                }],
                debug: !1
            },
            a = $.extend(e, t),
            i = $(window).innerWidth(),
            r = $(window).innerHeight();
        if (a.obj.length > 0) {
            $(this).css({
                width: i + "px",
                height: r + "px",
                overflowY: "auto"
            });
            let t = {};
            t.root = v.a.init(a.obj.get(0), {
                alwaysShowTracks: !0,
                damping: .1
            }), t.root.addListener((function(t) {
                a.watches.forEach((e => {
                    t.offset.y >= e.offset ? e.positiveReturn() : e.negativeReturn()
                }))
            }))
        }
    };
    var h = {
        listTab: [],
        init: function() {
            var t = function(t) {
                switch (t) {
                    case 1:
                        $("#blockHomeCharPageSwiper1").length > 0 && (r = $("#blockHomeCharPageSwiper1").initSwiper({
                            swiperOptions: {
                                slidesPerView: "auto",
                                freeMode: !0,
                                lazy: {
                                    loadPrevNext: !0
                                },
                                watchSlidesProgress: !0
                            }
                        })), $("#blockHomeCharSwiper1").length > 0 && (i = $("#blockHomeCharSwiper1").initSwiper({
                            swiperOptions: {
                                slidesPerView: 1,
                                effect: "fade",
                                fadeEffect: {
                                    crossFade: !0
                                },
                                lazy: {
                                    loadPrevNext: !0
                                },
                                thumbs: {
                                    swiper: r
                                }
                            }
                        }));
                        break;
                    case 2:
                        $("#blockHomeCharPageSwiper2").length > 0 && (n = $("#blockHomeCharPageSwiper2").initSwiper({
                            swiperOptions: {
                                slidesPerView: "auto",
                                freeMode: !0,
                                lazy: {
                                    loadPrevNext: !0
                                },
                                watchSlidesProgress: !0
                            }
                        })), $("#blockHomeCharSwiper2").length > 0 && (s = $("#blockHomeCharSwiper2").initSwiper({
                            swiperOptions: {
                                slidesPerView: 1,
                                effect: "fade",
                                fadeEffect: {
                                    crossFade: !0
                                },
                                lazy: {
                                    loadPrevNext: !0
                                },
                                thumbs: {
                                    swiper: n
                                }
                            }
                        }));
                        break;
                    case 3:
                        $("#blockHomeCharPageSwiper3").length > 0 && (p = $("#blockHomeCharPageSwiper3").initSwiper({
                            swiperOptions: {
                                slidesPerView: "auto",
                                freeMode: !0,
                                lazy: {
                                    loadPrevNext: !0
                                },
                                watchSlidesProgress: !0
                            }
                        })), $("#blockHomeCharSwiper3").length > 0 && (l = $("#blockHomeCharSwiper3").initSwiper({
                            swiperOptions: {
                                slidesPerView: 1,
                                effect: "fade",
                                fadeEffect: {
                                    crossFade: !0
                                },
                                lazy: {
                                    loadPrevNext: !0
                                },
                                thumbs: {
                                    swiper: p
                                }
                            }
                        }));
                        break;
                    case 4:
                        $("#blockHomeCharPageSwiper4").length > 0 && (c = $("#blockHomeCharPageSwiper4").initSwiper({
                            swiperOptions: {
                                slidesPerView: "auto",
                                freeMode: !0,
                                lazy: {
                                    loadPrevNext: !0
                                },
                                watchSlidesProgress: !0
                            }
                        })), $("#blockHomeCharSwiper4").length > 0 && (o = $("#blockHomeCharSwiper4").initSwiper({
                            swiperOptions: {
                                slidesPerView: 1,
                                effect: "fade",
                                fadeEffect: {
                                    crossFade: !0
                                },
                                lazy: {
                                    loadPrevNext: !0
                                },
                                thumbs: {
                                    swiper: c
                                }
                            }
                        }));
                        break;
                    case 5:
                        $("#blockHomeCharPageSwiper5").length > 0 && (d = $("#blockHomeCharPageSwiper5").initSwiper({
                            swiperOptions: {
                                slidesPerView: "auto",
                                freeMode: !0,
                                lazy: {
                                    loadPrevNext: !0
                                },
                                watchSlidesProgress: !0
                            }
                        })), $("#blockHomeCharSwiper5").length > 0 && (u = $("#blockHomeCharSwiper5").initSwiper({
                            swiperOptions: {
                                slidesPerView: 1,
                                effect: "fade",
                                fadeEffect: {
                                    crossFade: !0
                                },
                                lazy: {
                                    loadPrevNext: !0
                                },
                                thumbs: {
                                    swiper: d
                                }
                            }
                        }))
                }
            };
            $("#blockHomeChar .characters_list").eq(0).addClass("active"), $("#blockHomeChar .charpage_list").eq(0).addClass("active"), t(1), $("#blockHomeChar .characters_tab li a").on("click", (function() {
                var e = $(this).data("href"),
                    a = $(this).parent().index();
                return console.log(a), void 0 !== i && (i.destroy(), r.destroy(), i = void 0, r = void 0), void 0 !== s && (s.destroy(), n.destroy(), s = void 0, n = void 0), void 0 !== l && (l.destroy(), p.destroy(), l = void 0, p = void 0), void 0 !== o && (o.destroy(), c.destroy(), o = void 0, c = void 0), void 0 !== u && (u.destroy(), d.destroy(), u = void 0, d = void 0), t(a + 1), $("#blockHomeChar .characters_list").removeClass("active"), $("#blockHomeChar .charpage_list").removeClass("active"), $(e).addClass("active"), $("#blockHomeChar .charpage_list").eq(a).addClass("active"), $(".characters_tab li a").removeClass("active"), $(this).addClass("active"), !1
            })), $(".char_group-level").each((function() {
                var t = $(this);
                t.find(".group-level-paging li").eq(0).children().addClass("active"), t.find(".group-level-paging li a").on("click", (function() {
                    t.find(".group-level-paging li a").removeClass("active"), $(this).addClass("active");
                    var e = $(this).data("img") + ".png",
                        a = $(this).data("img") + "-mb.png";
                    return t.find(".char_thumbnail img.desktop").attr("src", e), t.find(".char_thumbnail img.mobile").attr("src", a), !1
                }))
            }))
        }
    };
    window.addEventListener("load", (function() {
        new URL(window.location.href).searchParams.get("admin");
        m.init(), m.executeFunctions(), $("#wrapper").scalePlatform(), $(window).on("resize", (function() {
            $("#wrapper").scalePlatform()
        })), w(), h.init(), $("[data-fancybox]").fancybox({
            caption: function(t, e) {
                return $(this).find("figcaption").html()
            }
        })
    }));
    var w = function() {
        function t() {
            $("#loading").removeClass("active")
        }
        $("#wrapper").scalePlatform(), $(".onelink").each((function() {
            $(".onelink").universalLink()
        })), $(".news").each((function() {
            var t = "#" + $(this).attr("id");
            $().vPortal({
                container: t,
                el: {
                    tabContainer: ".news_tab > ul",
                    resultContainer: ".news_list"
                },
                paginationOptions: {}
            })
        })), $("#navBurger").each((function() {
            $("#navBurger").toggleClassname({
                toggle: [{
                    el: $("#floattop"),
                    className: "active"
                }, {
                    el: $("#floatnav"),
                    className: "active"
                }, {
                    el: $("#navBurger"),
                    className: "is-active"
                }, {
                    el: $("#navBurger"),
                    className: "active"
                }]
            })
        })), $("#subwebBurger").each((function() {
            $("#subwebBurger").toggleClassname({
                toggle: [{
                    el: $(".midbar__menu"),
                    className: "active"
                }, {
                    el: $("#subwebBurger"),
                    className: "is-active"
                }]
            })
        })), $(".dropdown__sub").each((function() {
            $(this).toggleClassname({
                toggle: [{
                    el: $(this).parent().find(".dropdown"),
                    className: "active"
                }]
            })
        })), $("#asideRightToggle").each((function() {
            $(this).toggleClassname({
                toggle: [{
                    el: $(".floatright__main"),
                    className: "active"
                }, {
                    el: $(".floatright .aside"),
                    className: "active"
                }]
            })
        })), $(".scrollTop").each((function() {
            $(this).on("click", (function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 400)
            }))
        })), $("#loading").each((function() {
            t();
            const e = setInterval(t, 7e3);
            setTimeout((() => {
                clearInterval(e)
            }), 7e3)
        }))
    }
}, function(t, e, a) {
    "use strict";
    a.r(e);
    a(98);
    const i = {
        el: {
            scrollFrame: ".scrollFrame",
            frame: [],
            nav: ".scrollFrameControl",
            scrollContainer: "html",
            fullPageWrapper: "body"
        },
        data: {
            totalFrame: 0,
            currentFrame: 0,
            currentFrameId: "",
            aniComplete: !0,
            timeAnimation: 500
        },
        func: {
            getTotalFrame: () => $(i.el.scrollFrame).length,
            getScaleRatio: () => $(i.el.fullPageWrapper).length > 0 ? $(i.el.fullPageWrapper).attr("data-scale-ratio") : 1,
            getFrames: () => {
                $(i.el.scrollFrame).each((function() {
                    i.el.frame.push({
                        el: "#" + $(this).attr("id"),
                        offsetTop: $("#" + $(this).attr("id")).offset().top
                    })
                }))
            },
            getFrameOffset: t => {
                for (let e = 0, a = i.el.frame.length; e < a; e++)
                    if (i.el.frame[e].el === t) return i.el.frame[e].offsetTop;
                return 0
            },
            scrollTo: (t, e) => {
                let a = i.func.getFrameOffset(t);
                null != e && (a += parseInt(e) * i.func.getScaleRatio()), $(i.el.scrollContainer).animate({
                    scrollTop: a
                }, i.data.timeAnimation, "linear", (function() {
                    i.data.aniComplete = !0
                })), i.func.activeNavBullet(t)
            },
            activeNavBullet: t => {
                $(i.el.nav).length > 0 && ($(i.el.nav).removeClass("active"), $(i.el.nav).parent().parent().find('[href="' + t + '"]').addClass("active"))
            },
            isOpeningPopup: () => $("html").hasClass("popup-opened")
        },
        handleMousewheel: () => {
            $(window).on("mousewheel", (function(t) {
                if (!i.func.isOpeningPopup()) {
                    let e = t.deltaY;
                    e < 0 && i.data.aniComplete && i.data.currentFrame + 1 < i.data.totalFrame ? (i.data.currentFrame++, i.data.aniComplete = !1, i.data.currentFrameId = i.el.frame[i.data.currentFrame].el, i.func.scrollTo(i.data.currentFrameId)) : e > 0 && i.data.aniComplete && i.data.currentFrame > 0 && (i.data.currentFrame--, i.data.aniComplete = !1, i.data.currentFrameId = i.el.frame[i.data.currentFrame].el, i.func.scrollTo(i.data.currentFrameId))
                }
            }))
        },
        handleNav: () => {
            $(i.el.nav).length > 0 && $(i.el.nav).on("click", (function(t) {
                t.preventDefault();
                let e = $(this).attr("href");
                $(this).attr("data-fts-selector").length > 0 && (e = "#" + $($(this).attr("data-fts-selector")).attr("id"));
                for (let t = 0, a = i.el.frame.length; t < a; t++) i.el.frame[t].el === e && (i.data.currentFrame = t, i.data.currentFrameId = e);
                var a = $(this).attr("data-scroll-offset");
                i.func.scrollTo(e, a)
            }))
        },
        init: () => {
            $(i.el.scrollContainer).animate({
                scrollTop: 0
            }, i.data.timeAnimation, "linear", (function() {})), i.data.totalFrame = i.func.getTotalFrame(), i.func.getFrames(), i.handleNav()
        }
    };
    var r = i;
    var s = {
        init: function(t) {
            var e = {
                    el: ".scrollwatch-pin",
                    before: () => {},
                    options: {
                        watchOnce: !1,
                        watch: "#sectionHeader",
                        scrollThrottle: 20,
                        onElementInView: function(t) {
                            $(".breadcrumb").removeClass("fixed"), $(".nav").removeClass("fixed")
                        },
                        onElementOutOfView: function(t) {
                            $(".breadcrumb").addClass("fixed"), $(".nav").addClass("fixed")
                        }
                    },
                    after: () => {}
                },
                a = { ...e,
                    ...t,
                    options: { ...e.options,
                        ...t.options
                    }
                };
            a.before();
            const i = {};
            $(a.el).each((function() {
                $(this);
                var t = $(this).attr("id");
                a.options.watch = "#" + t, i[t] = new ScrollWatch(a.options)
            })), a.after()
        }
    };
    $(document).on("mainsite_2024_header rendered", {}, (function(t, e) {
        $("#" + e);
        r.init(), s.init({
            options: {
                onElementInView: function(t) {
                    var e = $(t.el).parents("[data-block-id]").attr("data-block-id");
                    $("[data-fts-selector]").removeClass("active"), $(`[data-fts-selector='[data-block-id="${e}"]']`).addClass("active")
                },
                onElementOutOfView: function(t) {
                    var e = $(t.el).parents("[data-block-id]").attr("data-block-id");
                    $(`[data-fts-selector='[data-block-id="${e}"]']`).removeClass("active")
                }
            }
        })
    }))
}, function(t, e, a) {
    "use strict";
    a.r(e);
    a(93), a(108);
    $.fn.vPortal = function(t) {
        var e = {
                container: "",
                el: {
                    parentContainer: "",
                    tabContainer: "",
                    resultContainer: "",
                    paginationContainer: ".pagination",
                    containerSuffix: " li a",
                    viewAll: ".viewAll",
                    itemTotal: "#itemTotal",
                    itemPerPage: "#itemPerPage",
                    currentSection: "#currentSection",
                    shortUri: "#shortUri"
                },
                data: {
                    startPage: 1,
                    totalPage: 1
                },
                paginationOptions: {},
                before: function() {},
                after: function() {}
            },
            a = { ...e,
                ...t,
                el: { ...e.el,
                    ...t.el
                },
                data: { ...e.data,
                    ...t.data
                }
            };
        if (a.el.parentContainer = a.container + " ", a.before(), $(a.el.parentContainer + a.el.paginationContainer).length > 0) {
            var s = $(a.el.parentContainer + a.el.paginationContainer),
                n = s.attr("data-params");
            null == n && (n = "");
            var l = s.attr("data-type");
            null == l && (l = "json");
            var p = s.attr("data-block-name");
            null == p && (p = "");
            var o = s.attr("data-shorturl");
            null == o && (o = ""), i(a.el, l, o, p, n, a.after(), a.paginationOptions)
        }
        $("body").on("click", a.el.parentContainer + a.el.tabContainer + a.el.containerSuffix, (function(t) {
            t.preventDefault(), "#" != $(this).attr("href") && (window.location.href = $(this).attr("href")), $(a.el.parentContainer + a.el.tabContainer + a.el.containerSuffix).removeClass("active");
            var e = $(this).data("params");
            null == e && (e = "");
            var i = $(this).data("type");
            null == i && (i = "json");
            var s = $(this).data("viewall");
            null == s && (s = "#");
            var n = $(this).data("block-name"),
                l = $(this).data("shorturl");
            return $(this).addClass("active"), r(a.el, 1, "loadTab", i, l, n, e, (function() {
                $(a.el.parentContainer + a.el.viewAll).attr("href", s)
            }), a.paginationOptions), !1
        }))
    };
    var i = function(t, e, a, i, s, n = function() {}, l = {}) {
            var p = $(t.parentContainer + t.itemTotal).val(),
                o = $(t.parentContainer + t.itemPerPage).val(),
                c = ($(t.parentContainer + t.currentSection).val(), p % o > 0 ? 1 : 0),
                u = parseInt(p / o) + c;
            u > 1 ? $(t.parentContainer + t.paginationContainer).twbsPagination({
                startPage: 1,
                totalPages: u,
                visiblePages: 5,
                first: "&laquo;",
                prev: "&lsaquo;",
                next: "&rsaquo;",
                last: "&raquo;",
                paginationClass: "pagination",
                nextClass: "next",
                prevClass: "prev",
                lastClass: "last",
                firstClass: "first",
                initiateStartPageClick: !1,
                onPageClick: function(p, o) {
                    return r(t, o, "paging", e, a, i, s, n(), l), !1
                },
                ...l
            }) : ($(t.parentContainer + t.paginationContainer).empty(), $(t.parentContainer + t.paginationContainer).removeData("twbs-pagination"), $(t.parentContainer + t.paginationContainer).unbind("page"))
        },
        r = function(t, e, a, r, s, n, l = "", p = function() {}, o = {}) {
            var c = s + "/" + n + "." + e + ".html";
            c = "//" + (c = (c = c.replaceAll("///", "/")).replaceAll("//", "/")), l.length > 0 && (c += l), p(), c.indexOf("undefined") < 0 && $.ajax({
                url: c,
                dataType: r,
                success: function(e) {
                    $(t.parentContainer + t.resultContainer).html(e), $("#wrapper").scalePlatform(), "loadTab" == a && ($(t.parentContainer + t.paginationContainer).empty(), $(t.parentContainer + t.paginationContainer).removeData("twbs-pagination"), $(t.parentContainer + t.paginationContainer).unbind("page"), $(t.parentContainer + t.itemTotal).val() > 0 && i(t, r, s, n, l, p(), o)), p()
                }
            })
        };
    $(document).on("mainsite_2024_news_event rendered", {}, (function(t, e) {
        $("#" + e);
        $("#blockBannerSwiper").length > 0 && $("#blockBannerSwiper").initSwiper({
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: !0,
                lazy: {
                    loadPrevNext: !0
                },
                autoplay: {
                    delay: 5e3
                }
            }
        })
    }))
}]);