(function(t) {
    function e(e) {
        for (var i, o, c = e[0], s = e[1], l = e[2], d = 0, f = []; d < c.length; d++) o = c[d], Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]), r[o] = 0;
        for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
        u && u(e);
        while (f.length) f.shift()();
        return a.push.apply(a, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], i = !0, c = 1; c < n.length; c++) {
                var s = n[c];
                0 !== r[s] && (i = !1)
            }
            i && (a.splice(e--, 1), t = o(o.s = n[0]))
        }
        return t
    }
    var i = {},
        r = {
            app: 0
        },
        a = [];

    function o(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = t, o.c = i, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var l = 0; l < c.length; l++) e(c[l]);
    var u = s;
    a.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "20c9": function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var i = n("2b0e"),
            r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("v-app", [n("v-content", [n("div", {
                    staticClass: "d-flex justify-center align-center flex-wrap",
                    attrs: {
                        id: "main"
                    }
                }, [n("div", {
                    staticClass: "w-100"
                }, [n("GoogleSearch"), n("QuickLinks")], 1)])]), n("AddEditLink")], 1)
            },
            a = [],
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("div", {
                    staticClass: "mx-auto mb-10",
                    attrs: {
                        id: "logo"
                    }
                }), n("div", {
                    staticClass: "mx-auto",
                    attrs: {
                        id: "search"
                    }
                }, [n("form", {
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.onSubmit(e)
                        }
                    }
                }, [n("button", {
                    staticClass: "search-icon-search"
                }, [n("v-icon", [t._v("mdi-magnify")])], 1), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.value,
                        expression: "value"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "",
                        required: ""
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.value = e.target.value)
                        }
                    }
                })])])])
            },
            c = [],
            s = n("99b1"),
            l = n.n(s),
            u = {
                data: function() {
                    return {
                        value: null
                    }
                },
                methods: {
                    onSubmit: function() {
                        l()(this.value) ? window.location.href = this.value : window.location.href = "https://google.com/search?q=" + this.value
                    }
                }
            },
            d = u,
            f = n("2877"),
            m = n("6544"),
            p = n.n(m),
            g = n("132d"),
            h = Object(f["a"])(d, o, c, !1, null, null, null),
            v = h.exports;
        p()(h, {
            VIcon: g["a"]
        });
        /*var b = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "mx-auto mt-10 ",
                    attrs: {
                        id: "quick-links"
                    }
                }, [n("draggable", t._b({
                    staticClass: "d-flex flex-wrap align-center justify-center",
                    attrs: {
                        list: t.links
                    },
                    on: {
                        end: t.onEnd,
                        start: t.onStart
                    }
                }, "draggable", t.dragOptions, !1), [t._l(t.links, (function(t) {
                    return n("ItemLink", {
                        key: t.title,
                        staticClass: "item-draggable",
                        attrs: {
                            tag: "a",
                            href: t.url,
                            item: t
                        }
                    })
                })), t.links.length <= 9 ? n("ItemLink", {
                    staticClass: "cursor-pointer",
                    attrs: {
                        tag: "div",
                        hideMenu: ""
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.toggleDialog("addEditLink")
                        }
                    }
                }, [n("span", {
                    staticClass: "icon-circle mx-auto"
                }, [n("v-icon", {
                    attrs: {
                        size: "25"
                    }
                }, [t._v("mdi-plus")])], 1), n("div", {
                    staticClass: "text-truncate mt-4"
                }, [t._v(" Agregar un acceso directo ")])]) : t._e()], 2)], 1)
            }*/
              var b = "",
            O = [],
            k = (n("a4d3"), n("4de4"), n("4160"), n("e439"), n("dbb4"), n("b64b"), n("159b"), n("ade3")),
            /*y = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("v-card", {
                    staticClass: "mb-5 item-quicklink elevation-0",
                    attrs: {
                        width: "112",
                        height: "112"
                    }
                }, [t.hideMenu ? t._e() : n("span", {
                    staticClass: "ql-menu pa-1",
                    on: {
                        click: t.openDialog
                    }
                }, [n("v-icon", [t._v("mdi-dots-vertical")])], 1), n("v-card", {
                    attrs: {
                        tag: t.tag,
                        href: t.href,
                        elevation: "0",
                        color: "transparent",
                        ripple: !1,
                        height: "112"
                    }
                }, [n("v-card-text", [t._t("default", [n("span", {
                    staticClass: "icon-circle mx-auto"
                }, [n("img", {
                    attrs: {
                        src: "chrome://favicon/size/48/" + t.item.url,
                        width: "20",
                        alt: "image"
                    }
                })]), n("div", {
                    staticClass: "text-truncate mt-4 text-center"
                }, [t._v(" " + t._s(t.item.title) + " ")])])], 2)], 1)], 1)
            },*/
            y = "",
            _ = [],
            j = n("2f62");

        function w(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function L(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? w(Object(n), !0).forEach((function(e) {
                    Object(k["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var x = {
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    },
                    hideMenu: {
                        type: Boolean,
                        default: !1
                    },
                    href: {
                        type: String,
                        default: null
                    },
                    item: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                methods: L({}, Object(j["b"])("home", ["toggleDialog", "_showLink"]), {
                    openDialog: function() {
                        this.toggleDialog("addEditLink"), this._showLink(this.item)
                    }
                })
            },
            C = x,
            P = n("b0af"),
            D = n("99d9"),
            S = Object(f["a"])(C, y, _, !1, null, null, null),
            E = S.exports;
        p()(S, {
            VCard: P["a"],
            VCardText: D["b"],
            VIcon: g["a"]
        });
        var M = n("310e"),
            T = n.n(M);

        function V(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function $(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? V(Object(n), !0).forEach((function(e) {
                    Object(k["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var A = {
                components: {
                    ItemLink: E,
                    draggable: T.a
                },
                data: function() {
                    return {
                        drag: !1
                    }
                },
                computed: $({}, Object(j["c"])({
                    links: function(t) {
                        return t.home.items
                    }
                }), {
                    dragOptions: function() {
                        return {
                            animation: 200,
                            group: "description",
                            disabled: !1,
                            ghostClass: "ghost",
                            draggable: ".item-draggable"
                        }
                    }
                }),
                methods: $({}, Object(j["b"])("home", ["toggleDialog", "_getLinks", "_orderLinks"]), {
                    onStart: function() {
                        this.drag = !0
                    },
                    onEnd: function() {
                        this._orderLinks(this.links), this.drag = !1
                    }
                }),
                created: function() {
                    this._getLinks()
                }
            },
            F = A,
            I = Object(f["a"])(F, b, O, !1, null, null, null),
            q = I.exports;
        p()(I, {
            VIcon: g["a"]
        });
        var J = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("v-dialog", {
                    attrs: {
                        width: "380",
                        persistent: ""
                    },
                    model: {
                        value: t.dialog,
                        callback: function(e) {
                            t.dialog = e
                        },
                        expression: "dialog"
                    }
                }, [n("v-card", {
                    staticClass: "px-6 pb-4"
                }, [n("v-card-title", {
                    staticClass: "px-0 subtitle-1"
                }, [t._v(t._s("add" === t.action ? "Agregar un acceso directo" : "Editar acceso directo"))]), n("v-card-text", {
                    staticClass: "px-0"
                }, [n("form", {
                    attrs: {
                        autocomplete: "off"
                    }
                }, [n("div", {
                    staticClass: "mb-3"
                }, [n("label", {
                    staticClass: "caption",
                    attrs: {
                        for: ""
                    }
                }, [t._v("Nombre")]), n("v-text-field", {
                    attrs: {
                        filled: "",
                        dense: "",
                        "hide-details": ""
                    },
                    model: {
                        value: t.item.title,
                        callback: function(e) {
                            t.$set(t.item, "title", e)
                        },
                        expression: "item.title"
                    }
                })], 1), n("div", {
                    staticClass: "mb-3"
                }, [n("label", {
                    staticClass: "caption",
                    attrs: {
                        for: ""
                    }
                }, [t._v("URL")]), n("v-text-field", {
                    attrs: {
                        filled: "",
                        dense: "",
                        "hide-details": ""
                    },
                    model: {
                        value: t.item.url,
                        callback: function(e) {
                            t.$set(t.item, "url", e)
                        },
                        expression: "item.url"
                    }
                })], 1)])]), n("v-card-actions", {
                    staticClass: "px-0"
                }, [n("v-btn", {
                    staticClass: "btn-dense",
                    attrs: {
                        outlined: "",
                        disabled: "add" === t.action
                    },
                    on: {
                        click: t.remove
                    }
                }, [t._v(" Quitar ")]), n("v-spacer"), n("v-btn", {
                    staticClass: "btn-dense",
                    attrs: {
                        outlined: "",
                        color: "primary"
                    },
                    on: {
                        click: t.cancel
                    }
                }, [t._v("Cancelar")]), n("v-btn", {
                    staticClass: "btn-dense",
                    attrs: {
                        color: "primary",
                        depressed: ""
                    },
                    on: {
                        click: t.save
                    }
                }, [t._v("Listo")])], 1)], 1)], 1)
            },
            N = [];

        function B(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Q(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? B(Object(n), !0).forEach((function(e) {
                    Object(k["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var z = {
                computed: Q({}, Object(j["c"])({
                    dialog: function(t) {
                        return t.home.dialog.addEditLink
                    },
                    action: function(t) {
                        return t.home.action
                    },
                    item: function(t) {
                        return t.home.item
                    }
                })),
                methods: Q({}, Object(j["b"])("home", ["_addLink", "_editLink", "toggleDialog", "_reset", "_deleteLink"]), {
                    save: function() {
                        "add" === this.action ? this._addLink() : this._editLink(), this.closeDialog()
                    },
                    cancel: function() {
                        this.closeDialog()
                    },
                    remove: function() {
                        this._deleteLink(), this.closeDialog()
                    },
                    closeDialog: function() {
                        this.toggleDialog("addEditLink"), this._reset()
                    }
                })
            },
            G = z,
            R = n("8336"),
            U = n("169a"),
            H = n("2fa4"),
            K = n("8654"),
            W = Object(f["a"])(G, J, N, !1, null, null, null),
            X = W.exports;
        p()(W, {
            VBtn: R["a"],
            VCard: P["a"],
            VCardActions: D["a"],
            VCardText: D["b"],
            VCardTitle: D["c"],
            VDialog: U["a"],
            VSpacer: H["a"],
            VTextField: K["a"]
        });
        var Y = {
                name: "App",
                components: {
                    GoogleSearch: v,
                    QuickLinks: q,
                    AddEditLink: X
                },
                methods: {
                    activateDarkMode: function() {
                        this.$vuetify.theme.dark = !0
                    },
                    activateLightMode: function() {
                        this.$vuetify.theme.dark = !1
                    },
                    osTheme: function() {
                        var t = this,
                            e = window.matchMedia("(prefers-color-scheme: dark)"),
                            n = window.matchMedia("(prefers-color-scheme: light)");
                        e.addListener((function(e) {
                            return e.matches && t.activateDarkMode()
                        })), n.addListener((function(e) {
                            return e.matches && t.activateLightMode()
                        })), e.matches ? this.activateDarkMode() : this.activateLightMode()
                    }
                },
                created: function() {
                    this.osTheme()
                }
            },
            Z = Y,
            tt = n("7496"),
            et = n("a75b"),
            nt = Object(f["a"])(Z, r, a, !1, null, null, null),
            it = nt.exports;
        p()(nt, {
            VApp: tt["a"],
            VContent: et["a"]
        });
        n("c975"), n("a434");
        var rt = function(t) {
                var e = {
                    home: {
                        item: {
                            title: null,
                            url: null
                        }
                    }
                };
                return e[t]
            },
            at = {
                dialog: {
                    addEditLink: !1
                },
                action: "add",
                index: -1,
                item: rt("home").item,
                items: []
            },
            ot = {},
            /*ct = {
                _getLinks: function(t) {
                    var e = t.commit;
                    chrome.storage.sync.get(["newTab"], (function(t) {
                        void 0 === t.newTab ? chrome.topSites.get((function(t) {
                            chrome.storage.sync.set({
                                newTab: JSON.stringify(t)
                            }, (function() {
                                e("_getLinks", t)
                            }))
                        })) : e("_getLinks", JSON.parse(t.newTab))
                    }))
                },
                _addLink: function(t) {
                    var e = t.commit;
                    e("_addLink")
                },
                _showLink: function(t, e) {
                    var n = t.commit;
                    n("_showLink", e)
                },
                _editLink: function(t) {
                    var e = t.commit;
                    e("_editLink")
                },
                _deleteLink: function(t) {
                    var e = t.commit;
                    e("_deleteLink")
                },
                _orderLinks: function(t, e) {
                    var n = t.commit;
                    n("_orderLinks", e)
                },
                toggleDialog: function(t, e) {
                    var n = t.commit;
                    n("toggleDialog", e)
                },
                _reset: function(t) {
                    var e = t.commit,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    e("_reset", n)
                }
            },*/
            ct = "",
            st = {
                _getLinks: function(t, e) {
                    t.items = e
                },
                _addLink: function() {
                    at.items.push(at.item), lt(at.items)
                },
                _showLink: function(t, e) {
                    t.action = "edit", t.index = t.items.indexOf(e), t.item = Object.assign(t.item, e)
                },
                _editLink: function(t) {
                    this._vm.$set(t.items, t.index, t.item), lt(t.items)
                },
                _deleteLink: function(t) {
                    t.items.splice(t.index, 1), lt(t.items)
                },
                _orderLinks: function(t, e) {},
                toggleDialog: function(t, e) {
                    t.dialog[e] = !t.dialog[e]
                },
                _reset: function(t, e) {
                    setTimeout((function() {
                        t.action = "add", t.item = rt("home").item, t.index = -1
                    }), 150)
                }
            };

        function lt(t) {
            chrome.storage.sync.set({
                newTab: JSON.stringify(t)
            }, (function() {}))
        }
        var ut = {
            state: at,
            getters: ot,
            actions: ct,
            mutations: st,
            namespaced: !0
        };
        i["a"].use(j["a"]);
        var dt = new j["a"].Store({
                modules: {
                    home: ut
                }
            }),
            ft = n("f309");
        i["a"].use(ft["a"]);
        var mt = new ft["a"]({
            theme: {
                options: {
                    customProperties: !0
                },
                themes: {
                    light: {
                        primary: "#1A73E8",
                        secondary: "#424242",
                        accent: "#82B1FF",
                        error: "#FF5252",
                        info: "#2196F3",
                        success: "#4CAF50",
                        warning: "#FFC107"
                    }
                }
            }
        });
        n("d5e8"), n("5363"), n("20c9");
        i["a"].config.productionTip = !1, new i["a"]({
            store: dt,
            vuetify: mt,
            render: function(t) {
                return t(it)
            }
        }).$mount("#app")
    }
});
//# sourceMappingURL=app.e413b584.js.map