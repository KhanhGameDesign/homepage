"use strict";
! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ResizeSensor = t()
}("undefined" != typeof window ? window : this, function() {
    if ("undefined" == typeof window) return null;
    var e = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(),
        t = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || function(t) {
            return e.setTimeout(t, 20)
        };

    function n(e, t) {
        var n = Object.prototype.toString.call(e),
            i = "[object Array]" === n || "[object NodeList]" === n || "[object HTMLCollection]" === n || "[object Object]" === n || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements,
            o = 0,
            r = e.length;
        if (i)
            for (; o < r; o++) t(e[o]);
        else t(e)
    }

    function i(e) {
        if (!e.getBoundingClientRect) return {
            width: e.offsetWidth,
            height: e.offsetHeight
        };
        var t = e.getBoundingClientRect();
        return {
            width: Math.round(t.width),
            height: Math.round(t.height)
        }
    }

    function o(e, t) {
        Object.keys(t).forEach(function(n) {
            e.style[n] = t[n]
        })
    }
    var r = function(e, s) {
        function d(e, n) {
            if (e)
                if (e.resizedAttached) e.resizedAttached.add(n);
                else {
                    e.resizedAttached = new function() {
                        var e, t, n = [];
                        this.add = function(e) {
                            n.push(e)
                        }, this.call = function(i) {
                            for (e = 0, t = n.length; e < t; e++) n[e].call(this, i)
                        }, this.remove = function(i) {
                            var o = [];
                            for (e = 0, t = n.length; e < t; e++) n[e] !== i && o.push(n[e]);
                            n = o
                        }, this.length = function() {
                            return n.length
                        }
                    }, e.resizedAttached.add(n), e.resizeSensor = document.createElement("div"), e.resizeSensor.dir = "ltr", e.resizeSensor.className = "resize-sensor";
                    var r = {
                            pointerEvents: "none",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            right: "0px",
                            bottom: "0px",
                            overflow: "hidden",
                            zIndex: "-1",
                            visibility: "hidden",
                            maxWidth: "100%"
                        },
                        s = {
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            transition: "0s"
                        };
                    o(e.resizeSensor, r);
                    var d = document.createElement("div");
                    d.className = "resize-sensor-expand", o(d, r);
                    var c = document.createElement("div");
                    o(c, s), d.appendChild(c);
                    var a = document.createElement("div");
                    a.className = "resize-sensor-shrink", o(a, r);
                    var f, h, u = document.createElement("div");
                    o(u, s), o(u, {
                        width: "200%",
                        height: "200%"
                    }), a.appendChild(u), e.resizeSensor.appendChild(d), e.resizeSensor.appendChild(a), e.appendChild(e.resizeSensor);
                    var l = i(e),
                        p = 0,
                        v = 0,
                        m = !0,
                        z = 0,
                        w = function() {
                            if (m) {
                                if (0 === e.offsetWidth && 0 === e.offsetHeight) return void(z || (z = t(function() {
                                    z = 0, w()
                                })));
                                m = !1
                            }
                            var n, i;
                            n = e.offsetWidth, i = e.offsetHeight, c.style.width = n + 10 + "px", c.style.height = i + 10 + "px", d.scrollLeft = n + 10, d.scrollTop = i + 10, a.scrollLeft = n + 10, a.scrollTop = i + 10
                        };
                    e.resizeSensor.resetSensor = w;
                    var g = function() {
                            h = 0, f && (p = l.width, v = l.height, e.resizedAttached && e.resizedAttached.call(l))
                        },
                        y = function() {
                            l = i(e), (f = l.width !== p || l.height !== v) && !h && (h = t(g)), w()
                        },
                        S = function(e, t, n) {
                            e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
                        };
                    S(d, "scroll", y), S(a, "scroll", y), t(w)
                }
        }
        n(e, function(e) {
            d(e, s)
        }), this.detach = function(t) {
            r.detach(e, t)
        }, this.reset = function() {
            e.resizeSensor.resetSensor()
        }
    };
    if (r.reset = function(e) {
            n(e, function(e) {
                e.resizeSensor.resetSensor()
            })
        }, r.detach = function(e, t) {
            n(e, function(e) {
                e && (e.resizedAttached && "function" == typeof t && (e.resizedAttached.remove(t), e.resizedAttached.length()) || e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached))
            })
        }, "undefined" != typeof MutationObserver) {
        var s = new MutationObserver(function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    for (var n = e[t].addedNodes, i = 0; i < n.length; i++) n[i].resizeSensor && r.reset(n[i])
        });
        document.addEventListener("DOMContentLoaded", function(e) {
            s.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        })
    }
    return r
});