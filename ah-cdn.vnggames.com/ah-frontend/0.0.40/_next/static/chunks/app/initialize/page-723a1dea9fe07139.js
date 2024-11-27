(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        7998: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 4244, 23)), Promise.resolve().then(n.bind(n, 406)), Promise.resolve().then(n.bind(n, 3434))
        },
        406: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n(6687),
                i = n(44),
                s = n(2753),
                a = n(2265),
                o = n(6805),
                u = {
                    "render-ui": n(6367).m,
                    tracking: o.U,
                    "check-tracking-data": o.G
                },
                c = function(e) {
                    var t = e.searchParams;
                    return (0, a.useEffect)(function() {
                        var e, n = t.clientId,
                            a = new URL(document.referrer).origin,
                            o = (e = (0, r._)(function(e) {
                                var t;
                                return (0, i.Jh)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (r.trys.push([0, 2, , 3]), !(e.event in u)) throw Error("Wrong Event");
                                            return [4, (0, u[e.event])({
                                                request: e,
                                                clientId: n,
                                                domain: a
                                            })];
                                        case 1:
                                            return [2, r.sent()];
                                        case 2:
                                            throw t = r.sent(), Error("\n\n______".concat(t, "______\n"));
                                        case 3:
                                            return [2]
                                    }
                                })
                            }), function(t) {
                                return e.apply(this, arguments)
                            });
                        s.P.getInstance().setOnRequestHandler(o)
                    }, []), null
                }
        },
        3434: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(2753),
                i = n(2265);
            t.default = function() {
                return (0, i.useEffect)(function() {
                    r.P.getInstance().init(window.parent, new URL(document.referrer).origin)
                }, []), null
            }
        },
        2753: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return h
                }
            });
            var r = n(2977),
                i = n(8449),
                s = n(6687),
                a = n(5029),
                o = n(44),
                u = function(e) {
                    for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = n.length, i = 0; i < e; i++) t += n.charAt(Math.floor(Math.random() * r));
                    return t
                },
                c = function() {
                    function e(t, n) {
                        (0, r._)(this, e), this.requestHandlers = new Map, this.targetWindow = t, this.targetDomain = n, window.addEventListener("message", this.handleMessage.bind(this))
                    }
                    var t = e.prototype;
                    return t.sendRequest = function(e) {
                        var t = this;
                        return new Promise(function(n, r) {
                            var i = u(24),
                                s = (0, a._)({
                                    type: "request",
                                    id: i
                                }, e);
                            t.requestHandlers.set(i, {
                                resolve: n,
                                reject: r
                            }), t.targetWindow.postMessage(s, t.targetDomain)
                        })
                    }, t.setOnRequestHandler = function(e) {
                        this.listenHandlers = e
                    }, t.handleMessage = function(e) {
                        var t = this;
                        return (0, s._)(function() {
                            var n, r, i, s;
                            return (0, o.Jh)(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.source !== t.targetWindow) return [2];
                                        if (!(n = e.data)) return [3, 3];
                                        if ("response" !== n.type) return [3, 1];
                                        return (r = t.requestHandlers.get(n.requestId)) && (n.error ? r.reject(n.error) : r.resolve(n.data), t.requestHandlers.delete(n.requestId)), [3, 3];
                                    case 1:
                                        return [4, t.listenHandlers(n)];
                                    case 2:
                                        i = o.sent(), s = (0, a._)({
                                            type: "response"
                                        }, i), t.targetWindow.postMessage(s, t.targetDomain), o.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })()
                    }, t.cleanup = function() {
                        window.removeEventListener("message", this.handleMessage.bind(this))
                    }, e
                }(),
                h = function() {
                    function e() {
                        (0, r._)(this, e), this.initialized = !1, this.completionHandlers = []
                    }
                    var t = e.prototype;
                    return t.init = function(e, t) {
                        if (this.targetDomain && this.targetWindow && (e !== this.targetWindow || t !== this.targetDomain)) throw Error("Cannot initialize with different target");
                        this.targetWindow = e, this.targetDomain = t, this.handler = new c(e, t), this.initializeIfNeed(function() {})
                    }, t.initializeIfNeed = function(e) {
                        var t = this;
                        if (!this.handler) throw Error("Not initialized");
                        this.initialized ? e() : (this.completionHandlers.push(e), 1 === this.completionHandlers.length && this.handler.sendRequest({
                            event: "___ping___"
                        }).then(function() {
                            t.initialized = !0, t.completionHandlers.forEach(function(e) {
                                return e()
                            }), t.completionHandlers = []
                        }))
                    }, t.setOnRequestHandler = function(e) {
                        if (!this.handler) throw Error("Not initialized");
                        this.handler.setOnRequestHandler(e)
                    }, t.sendRequest = function(e) {
                        var t = this;
                        return new Promise(function(n, r) {
                            t.initializeIfNeed(function() {
                                t.handler.sendRequest(e).then(function(e) {
                                    n(e)
                                }).catch(function(e) {
                                    r(e)
                                })
                            })
                        })
                    }, t.cleanup = function() {
                        var e;
                        null === (e = this.handler) || void 0 === e || e.cleanup()
                    }, e.getInstance = function() {
                        return e.instance || (e.instance = new e), e.instance
                    }, (0, i._)(e, [{
                        key: "clientDomain",
                        get: function() {
                            return this.targetDomain
                        }
                    }]), e
                }()
        }
    },
    function(e) {
        e.O(0, [387, 244, 762, 971, 864, 744], function() {
            return e(e.s = 7998)
        }), _N_E = e.O()
    }
]);