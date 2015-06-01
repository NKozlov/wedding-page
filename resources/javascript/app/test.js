!function (e) {
    "use strict";
    if (/localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}/.test(e.location.hostname)) {
        var t = e.document, n = t.createElement("link"), i = "DEBUG — " + t.title;
        n.rel = "icon", n.href = "/debug.ico", t.getElementsByTagName("head")[0].appendChild(n), t.title = i, console && console.info && console.info(i)
    }
}(window), !function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) {
            throw new Error("jQuery requires a window with a document");
        }
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length, n = rt.type(e);
        return "function" === n || rt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (rt.isFunction(t)) {
            return rt.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
        }
        if (t.nodeType) {
            return rt.grep(e, function (e) {
                return e === t !== n
            });
        }
        if ("string" == typeof t) {
            if (pt.test(t)) {
                return rt.filter(t, e, n);
            }
            t = rt.filter(t, e)
        }
        return rt.grep(e, function (e) {
            return rt.inArray(e, t) >= 0 !== n
        })
    }

    function r(e, t) {
        do {
            e = e[t];
        } while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = bt[e] = {};
        return rt.each(e.match(wt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) :
                (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), rt.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Et, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? rt.parseJSON(n) : n
                } catch (r) {
                }
                rt.data(e, t, n)
            } else {
                n = void 0
            }
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !rt.isEmptyObject(e[t])) && "toJSON" !== t) {
                return !1;
            }
        }
        return !0
    }

    function c(e, t, n, i) {
        if (rt.acceptData(e)) {
            var r, o, a = rt.expando, s = e.nodeType, l = s ? rt.cache : e, u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) {
                return u || (u = s ? e[a] = Y.pop() || rt.guid++ : a), l[u] ||
                (l[u] = s ? {} : {toJSON: rt.noop}), ("object" == typeof t || "function" == typeof t) &&
                (i ? l[u] = rt.extend(l[u], t) : l[u].data = rt.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n &&
                (o[rt.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[rt.camelCase(t)])) : r = o, r
            }
        }
    }

    function d(e, t, n) {
        if (rt.acceptData(e)) {
            var i, r, o = e.nodeType, a = o ? rt.cache : e, s = o ? e[rt.expando] : rt.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in i ? t = [t] : (t = rt.camelCase(t), t = t in i ? [t] : t.split(" ")), r =
                            t.length;
                    for (; r--;) {
                        delete i[t[r]];
                    }
                    if (n ? !u(i) : !rt.isEmptyObject(i)) {
                        return
                    }
                }
                (n || (delete a[s].data, u(a[s]))) && (o ? rt.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function f() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (e) {
        }
    }

    function g(e) {
        var t = Wt.split("|"), n = e.createDocumentFragment();
        if (n.createElement) {
            for (; t.length;) {
                n.createElement(t.pop());
            }
        }
        return n
    }

    function m(e, t) {
        var n, i, r = 0, o = typeof e.getElementsByTagName !== St ? e.getElementsByTagName(t || "*") :
                typeof e.querySelectorAll !== St ? e.querySelectorAll(t || "*") : void 0;
        if (!o) {
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) {
                !t || rt.nodeName(i, t) ? o.push(i) : rt.merge(o, m(i, t));
            }
        }
        return void 0 === t || t && rt.nodeName(e, t) ? rt.merge([e], o) : o
    }

    function v(e) {
        Mt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return rt.nodeName(e, "table") && rt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ?
        e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function w(e) {
        return e.type = (null !== rt.find.attr(e, "type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Xt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) {
            rt._data(n, "globalEval", !t || rt._data(t[i], "globalEval"))
        }
    }

    function T(e, t) {
        if (1 === t.nodeType && rt.hasData(e)) {
            var n, i, r, o = rt._data(e), a = rt._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) {
                    for (i = 0, r = s[n].length; r > i; i++) {
                        rt.event.add(t, n, s[n][i])
                    }
                }
            }
            a.data && (a.data = rt.extend({}, a.data))
        }
    }

    function S(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[rt.expando]) {
                r = rt._data(t);
                for (i in r.events) {
                    rt.removeEvent(t, i, r.handle);
                }
                t.removeAttribute(rt.expando)
            }
            "script" === n && t.text !== e.text ? (w(t).text = e.text, b(t)) : "object" === n ?
                    (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !rt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) :
                    "input" === n && Mt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) :
                            "option" === n ? t.defaultSelected = t.selected = e.defaultSelected :
                            ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, n) {
        var i, r = rt(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display :
                rt.css(r[0], "display");
        return r.detach(), o
    }

    function E(e) {
        var t = ht, n = Zt[e];
        return n || (n = C(e, t), "none" !== n && n || (Jt = (Jt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t =
                (Jt[0].contentWindow || Jt[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Jt.detach()), Zt[e] = n), n
    }

    function k(e, t) {
        return {
            get: function () {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function L(e, t) {
        if (t in e) {
            return t;
        }
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = fn.length; r--;) {
            if (t = fn[r] + n, t in e) {
                return t;
            }
        }
        return i
    }

    function N(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) {
            i = e[a], i.style && (o[a] = rt._data(i, "olddisplay"), n = i.style.display, t ?
                    (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Nt(i) && (o[a] = rt._data(i, "olddisplay", E(i.nodeName)))) :
                    (r = Nt(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
        }
        for (a = 0; s > a; a++) {
            i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        }
        return e
    }

    function A(e, t, n) {
        var i = un.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function M(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) {
            "margin" === n &&
            (a += rt.css(e, n + Lt[o], !0, r)), i ?
                    ("content" === n && (a -= rt.css(e, "padding" + Lt[o], !0, r)), "margin" !== n && (a -= rt.css(e, "border" + Lt[o] + "Width", !0, r))) :
                    (a += rt.css(e, "padding" + Lt[o], !0, r), "padding" !== n && (a += rt.css(e, "border" + Lt[o] + "Width", !0, r)));
        }
        return a
    }

    function D(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = en(e), a = nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = tn(e, t, o), (0 > r || null == r) && (r = e.style[t]), rn.test(r)) {
                return r;
            }
            i = a && (nt.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + M(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function P(e, t, n, i, r) {
        return new P.prototype.init(e, t, n, i, r)
    }

    function H() {
        return setTimeout(function () {
            hn = void 0
        }), hn = rt.now()
    }

    function _(e, t) {
        var n, i = {height: e}, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) {
            n = Lt[r], i["margin" + n] = i["padding" + n] = e;
        }
        return t && (i.opacity = i.width = e), i
    }

    function j(e, t, n) {
        for (var i, r = (bn[t] || []).concat(bn["*"]), o = 0, a = r.length; a > o; o++) {
            if (i = r[o].call(n, t, e)) {
                return i
            }
        }
    }

    function W(e, t, n) {
        var i, r, o, a, s, l, u, c, d = this, p = {}, f = e.style, h = e.nodeType && Nt(e), g = rt._data(e, "fxshow");
        n.queue || (s = rt._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, rt.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = rt.css(e, "display"), c =
                "none" === u ? rt._data(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === rt.css(e, "float") &&
        (nt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow &&
        (f.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t) {
            if (r = t[i], mn.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) {
                        continue;
                    }
                    h = !0
                }
                p[i] = g && g[i] || rt.style(e, i)
            } else {
                u = void 0;
            }
        }
        if (rt.isEmptyObject(p)) {
            "inline" === ("none" === u ? E(e.nodeName) : u) && (f.display = u);
        } else {
            g ? "hidden"in g && (h = g.hidden) : g = rt._data(e, "fxshow", {}), o && (g.hidden = !h), h ? rt(e).show() : d.done(function () {
                rt(e).hide()
            }), d.done(function () {
                var t;
                rt._removeData(e, "fxshow");
                for (t in p) {
                    rt.style(e, t, p[t])
                }
            });
            for (i in p) {
                a = j(h ? g[i] : 0, i, d), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
    }

    function O(e, t) {
        var n, i, r, o, a;
        for (n in e) {
            if (i = rt.camelCase(n), r = t[i], o = e[n], rt.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a =
                            rt.cssHooks[i], a && "expand"in a) {
                o = a.expand(o), delete e[i];
                for (n in o) {
                    n in e || (e[n] = o[n], t[n] = r)
                }
            } else {
                t[i] = r
            }
        }
    }

    function I(e, t, n) {
        var i, r, o = 0, a = wn.length, s = rt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r) {
                return !1;
            }
            for (var t = hn || H(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a;
                    a++) {
                u.tweens[a].run(o);
            }
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: rt.extend({}, t),
            opts: rt.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: hn || H(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = rt.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (r) {
                    return this;
                }
                for (r = !0; i > n; n++) {
                    u.tweens[n].run(1);
                }
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (O(c, u.opts.specialEasing); a > o; o++) {
            if (i = wn[o].call(u, e, c, u.opts)) {
                return i;
            }
        }
        return rt.map(c, j, u), rt.isFunction(u.opts.start) && u.opts.start.call(e, u), rt.fx.timer(rt.extend(l,
                {elem: e, anim: u, queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done,
                u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function F(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(wt) || [];
            if (rt.isFunction(n)) {
                for (; i = o[r++];) {
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
        }
    }

    function R(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, rt.each(e[s] || [], function (e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }

        var o = {}, a = e === $n;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function B(e, t) {
        var n, i, r = rt.ajaxSettings.flatOptions || {};
        for (i in t) {
            void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        }
        return n && rt.extend(!0, e, n), e
    }

    function q(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        }
        if (r) {
            for (a in s) {
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
            }
        }
        if (l[0]in n) {
            o = l[0];
        } else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, i) {
        var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) {
            for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a];
            }
        }
        for (o = c.shift(); o;) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o =
                            c.shift()) {
                if ("*" === o) {
                    o = l;
                } else if ("*" !== l && l !== o) {
                    if (a = u[l + " " + o] || u["* " + o], !a) {
                        for (r in u) {
                            if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                        }
                    }
                    if (a !== !0) {
                        if (a && e["throws"]) {
                            t = a(t);
                        } else {
                            try {
                                t = a(t)
                            } catch (d) {
                                return {state: "parsererror", error: a ? d : "No conversion from " + l + " to " + o}
                            }
                        }
                    }
                }
            }
        }
        return {state: "success", data: t}
    }

    function $(e, t, n, i) {
        var r;
        if (rt.isArray(t)) {
            rt.each(t, function (t, r) {
                n || Yn.test(e) ? i(e, r) : $(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
        } else if (n || "object" !== rt.type(t)) {
            i(e, t);
        } else {
            for (r in t) {
                $(e + "[" + r + "]", t[r], n, i)
            }
        }
    }

    function V() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function G() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function X(e) {
        return rt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var Y = [], U = Y.slice, K = Y.concat, Q = Y.push, J = Y.indexOf, Z = {}, et = Z.toString, tt = Z.hasOwnProperty, nt = {}, it = "1.11.2", rt = function (e,
            t) {
        return new rt.fn.init(e, t)
    }, ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, st = /-([\da-z])/gi, lt = function (e, t) {
        return t.toUpperCase()
    };
    rt.fn = rt.prototype = {
        jquery: it, constructor: rt, selector: "", length: 0, toArray: function () {
            return U.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : U.call(this)
        }, pushStack: function (e) {
            var t = rt.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return rt.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(rt.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(U.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Q, sort: Y.sort, splice: Y.splice
    }, rt.extend = rt.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || rt.isFunction(a) || (a = {}), s === l && (a = this, s--);
                l > s; s++) {
            if (null != (r = arguments[s])) {
                for (i in r) {
                    e = a[i], n = r[i], a !== n && (u && n && (rt.isPlainObject(n) || (t = rt.isArray(n))) ?
                            (t ? (t = !1, o = e && rt.isArray(e) ? e : []) : o = e && rt.isPlainObject(e) ? e : {}, a[i] = rt.extend(u, o, n)) :
                    void 0 !== n && (a[i] = n));
                }
            }
        }
        return a
    }, rt.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === rt.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === rt.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !rt.isArray(e) && e - parseFloat(e) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) {
                return !1;
            }
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== rt.type(e) || e.nodeType || rt.isWindow(e)) {
                return !1;
            }
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (n) {
                return !1
            }
            if (nt.ownLast) {
                for (t in e) {
                    return tt.call(e, t);
                }
            }
            for (t in e) {
                ;
            }
            return void 0 === t || tt.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && rt.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(at, "ms-").replace(st, lt)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, i) {
            var r, o = 0, a = e.length, s = n(e);
            if (i) {
                if (s) {
                    for (; a > o && (r = t.apply(e[o], i), r !== !1); o++) {
                        ;
                    }
                } else {
                    for (o in e) {
                        if (r = t.apply(e[o], i), r === !1) {
                            break
                        }
                    }
                }
            } else if (s) {
                for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++) {
                    ;
                }
            } else {
                for (o in e) {
                    if (r = t.call(e[o], o, e[o]), r === !1) {
                        break;
                    }
                }
            }
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ot, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? rt.merge(i, "string" == typeof e ? [e] : e) : Q.call(i, e)), i
        }, inArray: function (e, t, n) {
            var i;
            if (t) {
                if (J) {
                    return J.call(t, e, n);
                }
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) {
                e[r++] = t[i++];
            }
            if (n !== n) {
                for (; void 0 !== t[i];) {
                    e[r++] = t[i++];
                }
            }
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) {
                i = !t(e[o], o), i !== s && r.push(e[o]);
            }
            return r
        }, map: function (e, t, i) {
            var r, o = 0, a = e.length, s = n(e), l = [];
            if (s) {
                for (; a > o; o++) {
                    r = t(e[o], o, i), null != r && l.push(r);
                }
            } else {
                for (o in e) {
                    r = t(e[o], o, i), null != r && l.push(r);
                }
            }
            return K.apply([], l)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), rt.isFunction(e) ? (n = U.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(U.call(arguments)))
            }, i.guid = e.guid = e.guid || rt.guid++, i) : void 0
        }, now: function () {
            return +new Date
        }, support: nt
    }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function (e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, d, f, h, g;
            if ((t ? t.ownerDocument || t : R) !== P && D(t), t = t || P, n = n || [], s = t.nodeType, "string" != typeof e || !e ||
                    1 !== s && 9 !== s && 11 !== s) {
                return n;
            }
            if (!i && _) {
                if (11 !== s && (r = yt.exec(e))) {
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) {
                                return n;
                            }
                            if (o.id === a) {
                                return n.push(o), n
                            }
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a) {
                            return n.push(o), n
                        }
                    } else {
                        if (r[2]) {
                            return J.apply(n, t.getElementsByTagName(e)), n;
                        }
                        if ((a = r[3]) && x.getElementsByClassName) {
                            return J.apply(n, t.getElementsByClassName(a)), n
                        }
                    }
                }
                if (x.qsa && (!j || !j.test(e))) {
                    if (f = d = F, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = E(e), (d = t.getAttribute("id")) ? f = d.replace(bt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length;
                                l--;) {
                            u[l] = f + p(u[l]);
                        }
                        h = wt.test(e) && c(t.parentNode) || t, g = u.join(",")
                    }
                    if (g) {
                        try {
                            return J.apply(n, h.querySelectorAll(g)), n
                        } catch (m) {
                        } finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
            }
            return L(e.replace(lt, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[F] = !0, e
        }

        function r(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) {
                T.attrHandle[n[i]] = t
            }
        }

        function a(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) {
                return i;
            }
            if (n) {
                for (; n = n.nextSibling;) {
                    if (n === t) {
                        return -1;
                    }
                }
            }
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) {
                        n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    }
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {
        }

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) {
                i += e[t].value;
            }
            return i
        }

        function f(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, o = q++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];) {
                    if (1 === t.nodeType || r) {
                        return e(t, n, o)
                    }
                }
            } : function (t, n, a) {
                var s, l, u = [B, o];
                if (a) {
                    for (; t = t[i];) {
                        if ((1 === t.nodeType || r) && e(t, n, a)) {
                            return !0
                        }
                    }
                } else {
                    for (; t = t[i];) {
                        if (1 === t.nodeType || r) {
                            if (l = t[F] || (t[F] = {}), (s = l[i]) && s[0] === B && s[1] === o) {
                                return u[2] = s[2];
                            }
                            if (l[i] = u, u[2] = e(t, n, a)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) {
                    if (!e[r](t, n, i)) {
                        return !1;
                    }
                }
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) {
                t(e, n[r], i);
            }
            return i
        }

        function m(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++) {
                (o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
            }
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, a)), i(function (i, a, s, l) {
                var u, c, d, p = [], f = [], h = a.length, v = i || g(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? v : m(v, p, e, s, l), w = n ?
                        o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, w, s, l), r) {
                    for (u = m(w, f), r(u, [], s, l), c = u.length; c--;) {
                        (d = u[c]) && (w[f[c]] = !(y[f[c]] = d));
                    }
                }
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = w.length; c--;) {
                                (d = w[c]) && u.push(y[c] = d);
                            }
                            o(null, w = [], u, l)
                        }
                        for (c = w.length; c--;) {
                            (d = w[c]) && (u = o ? et(i, d) : p[c]) > -1 && (i[u] = !(a[u] = d))
                        }
                    }
                } else {
                    w = m(w === a ? w.splice(h, w.length) : w), o ? o(null, a, w, l) : J.apply(a, w)
                }
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = f(function (e) {
                return e === t
            }, a, !0), u = f(function (e) {
                return et(t, e) > -1
            }, a, !0), c = [function (e, n, i) {
                var r = !o && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null, r
            }]; r > s; s++) {
                if (n = T.relative[e[s].type]) {
                    c = [f(h(c), n)];
                } else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                        for (i = ++s; r > i && !T.relative[e[i].type]; i++) {
                            ;
                        }
                        return v(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(lt, "$1"), n,
                                i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                    }
                    c.push(n)
                }
            }
            return h(c)
        }

        function w(e, n) {
            var r = n.length > 0, o = e.length > 0, a = function (i, a, s, l, u) {
                var c, d, p, f = 0, h = "0", g = i && [], v = [], y = N, w = i || o && T.find.TAG("*", u), b = B +=
                        null == y ? 1 : Math.random() || .1, x = w.length;
                for (u && (N = a !== P && a); h !== x && null != (c = w[h]); h++) {
                    if (o && c) {
                        for (d = 0; p = e[d++];) {
                            if (p(c, a, s)) {
                                l.push(c);
                                break
                            }
                        }
                        u && (B = b)
                    }
                    r && ((c = !p && c) && f--, i && g.push(c))
                }
                if (f += h, r && h !== f) {
                    for (d = 0; p = n[d++];) {
                        p(g, v, a, s);
                    }
                    if (i) {
                        if (f > 0) {
                            for (; h--;) {
                                g[h] || v[h] || (v[h] = K.call(l));
                            }
                        }
                        v = m(v)
                    }
                    J.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return u && (B = b, N = y), g
            };
            return r ? i(a) : a
        }

        var b, x, T, S, C, E, k, L, N, A, M, D, P, H, _, j, W, O, I, F = "sizzle" +
                1 * new Date, R = e.document, B = 0, q = 0, z = n(), $ = n(), V = n(), G = function (e, t) {
            return e === t && (M = !0), 0
        }, X = 1 << 31, Y = {}.hasOwnProperty, U = [], K = U.pop, Q = U.push, J = U.push, Z = U.slice, et = function (e, t) {
            for (var n = 0, i = e.length; i > n; n++) {
                if (e[n] === t) {
                    return n;
                }
            }
            return -1
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = it.replace("w",
                "w#"), ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt +
                "))|)" + nt + "*\\]", at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot +
                ")*)|.*)\\)|)", st = new RegExp(nt + "+", "g"), lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$",
                "g"), ut = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), dt = new RegExp("=" + nt +
                "*([^\\]'\"]*?)" + nt + "*\\]", "g"), pt = new RegExp(at), ft = new RegExp("^" + rt + "$"), ht = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + at),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt +
                    "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + tt + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, gt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, wt = /[+~]/, bt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" +
                nt + "?|(" + nt + ")|.)", "ig"), Tt = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, St = function () {
            D()
        };
        try {
            J.apply(U = Z.call(R.childNodes), R.childNodes), U[R.childNodes.length].nodeType
        } catch (Ct) {
            J = {
                apply: U.length ? function (e, t) {
                    Q.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) {
                        ;
                    }
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : R;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, H = i.documentElement, n = i.defaultView, n && n !== n.top &&
            (n.addEventListener ? n.addEventListener("unload", St, !1) : n.attachEvent && n.attachEvent("onunload", St)), _ = !C(i), x.attributes =
                    r(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = r(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = vt.test(i.getElementsByClassName), x.getById = r(function (e) {
                return H.appendChild(e).id = F, !i.getElementsByName || !i.getElementsByName(F).length
            }), x.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(xt, Tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(xt, Tt);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = x.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) {
                        1 === n.nodeType && i.push(n);
                    }
                    return i
                }
                return o
            }, T.find.CLASS = x.getElementsByClassName && function (e, t) {
                        return _ ? t.getElementsByClassName(e) : void 0
                    }, W = [], j = [], (x.qsa = vt.test(i.querySelectorAll)) && (r(function (e) {
                H.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F +
                        "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length &&
                j.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length ||
                j.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + F + "-]").length ||
                j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || j.push(".#.+[+~]")
            }), r(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length &&
                j.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length ||
                j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (x.matchesSelector = vt.test(O = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) &&
            r(function (e) {
                x.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), W.push("!=", at)
            }), j = j.length && new RegExp(j.join("|")), W = W.length && new RegExp(W.join("|")), t = vt.test(H.compareDocumentPosition), I =
                    t || vt.test(H.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                        return e === i ||
                                !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t) {
                            for (; t = t.parentNode;) {
                                if (t === e) {
                                    return !0;
                                }
                            }
                        }
                        return !1
                    }, G = t ? function (e, t) {
                if (e === t) {
                    return M = !0, 0;
                }
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n ||
                !x.sortDetached && t.compareDocumentPosition(e) === n ?
                        e === i || e.ownerDocument === R && I(R, e) ? -1 : t === i || t.ownerDocument === R && I(R, t) ? 1 : A ? et(A, e) - et(A, t) : 0 :
                        4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) {
                    return M = !0, 0;
                }
                var n, r = 0, o = e.parentNode, s = t.parentNode, l = [e], u = [t];
                if (!o || !s) {
                    return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : A ? et(A, e) - et(A, t) : 0;
                }
                if (o === s) {
                    return a(e, t);
                }
                for (n = e; n = n.parentNode;) {
                    l.unshift(n);
                }
                for (n = t; n = n.parentNode;) {
                    u.unshift(n);
                }
                for (; l[r] === u[r];) {
                    r++;
                }
                return r ? a(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
            }, i) : P
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== P && D(e), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !_ || W && W.test(n) || j && j.test(n))) {
                try {
                    var i = O.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return i
                    }
                } catch (r) {
                }
            }
            return t(n, P, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== P && D(e), I(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== P && D(e);
            var n = T.attrHandle[t.toLowerCase()], i = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== i ? i : x.attributes || !_ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, r = 0;
            if (M = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(G), M) {
                for (; t = e[r++];) {
                    t === e[r] && (i = n.push(r));
                }
                for (; i--;) {
                    e.splice(n[i], 1)
                }
            }
            return A = null, e
        }, S = t.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) {
                        return e.textContent;
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += S(e)
                    }
                } else if (3 === r || 4 === r) {
                    return e.nodeValue
                }
            } else {
                for (; t = e[i++];) {
                    n += S(t);
                }
            }
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}},
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, Tt), "~=" === e[2] &&
                    (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ?
                            (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] =
                                    +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" :
                    n && pt.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) &&
                    (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xt, Tt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && z(e, function (e) {
                                return t.test("string" == typeof e.className && e.className ||
                                        "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                }, ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) :
                                "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i :
                                        "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 :
                                                "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, d, p, f, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l &&
                                !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];) {
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) {
                                            return !1;
                                        }
                                    }
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (c = m[F] || (m[F] = {}), u = c[e] || [], f = u[0] === B && u[1], p = u[0] === B && u[2], d = f && m.childNodes[f];
                                        d = ++f && d && d[g] || (p = f = 0) || h.pop();) {
                                    if (1 === d.nodeType && ++p && d === t) {
                                        c[e] = [B, f, p];
                                        break
                                    }
                                }
                            } else if (y && (u = (t[F] || (t[F] = {}))[e]) && u[0] === B) {
                                p = u[1];
                            } else {
                                for (;
                                        (d = ++f && d && d[g] || (p = f = 0) || h.pop()) &&
                                        ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p ||
                                        (y && ((d[F] || (d[F] = {}))[e] = [B, p]), d !== t));) {
                                    ;
                                }
                            }
                            return p -= r, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) {
                            i = et(e, r[a]), e[i] = !(t[i] = r[a])
                        }
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = k(e.replace(lt, "$1"));
                    return r[F] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;) {
                            (o = a[s]) && (e[s] = !(t[s] = o))
                        }
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return e = e.replace(xt, Tt), function (t) {
                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, Tt).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                return n = n.toLowerCase(), n === e ||
                                0 === n.indexOf(e + "-");
                            }
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === H
                }, focus: function (e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeType < 6) {
                            return !1;
                        }
                    }
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return mt.test(e.nodeName)
                }, input: function (e) {
                    return gt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (e, t) {
                    return [t - 1]
                }), eq: u(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: u(function (e, t) {
                    for (var n = 0; t > n; n += 2) {
                        e.push(n);
                    }
                    return e
                }), odd: u(function (e, t) {
                    for (var n = 1; t > n; n += 2) {
                        e.push(n);
                    }
                    return e
                }), lt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) {
                        e.push(i);
                    }
                    return e
                }), gt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) {
                        e.push(i);
                    }
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) {
            T.pseudos[b] = s(b);
        }
        for (b in{submit: !0, reset: !0}) {
            T.pseudos[b] = l(b);
        }
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function (e, n) {
            var i, r, o, a, s, l, u, c = $[e + " "];
            if (c) {
                return n ? 0 : c.slice(0);
            }
            for (s = e, l = [], u = T.preFilter; s;) {
                (!i || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ct.exec(s)) &&
                (i = r.shift(), o.push({value: i, type: r[0].replace(lt, " ")}), s = s.slice(i.length));
                for (a in T.filter) {
                    !(r = ht[a].exec(s)) || u[a] && !(r = u[a](r)) ||
                    (i = r.shift(), o.push({value: i, type: a, matches: r}), s = s.slice(i.length));
                }
                if (!i) {
                    break
                }
            }
            return n ? s.length : s ? t.error(e) : $(e, l).slice(0)
        }, k = t.compile = function (e, t) {
            var n, i = [], r = [], o = V[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) {
                    o = y(t[n]), o[F] ? i.push(o) : r.push(o);
                }
                o = V(e, w(r, i)), o.selector = e
            }
            return o
        }, L = t.select = function (e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e, d = !i && E(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(xt, Tt), t) || [])[0], !t) {
                        return n;
                    }
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = ht.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !T.relative[s = a.type]);) {
                    if ((l = T.find[s]) &&
                            (i = l(a.matches[0].replace(xt, Tt), wt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && p(o), !e) {
                            return J.apply(n, i), n;
                        }
                        break
                    }
                }
            }
            return (u || k(e, d))(i, t, !_, n, wt.test(e) && c(t.parentNode) || t), n
        }, x.sortStable = F.split("").sort(G).join("") === F, x.detectDuplicates = !!M, D(), x.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains =
            ut.contains;
    var ct = rt.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pt = /^.[^:#\[\.,]*$/;
    rt.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? rt.find.matchesSelector(i, e) ? [i] : [] :
                rt.find.matches(e, rt.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
    }, rt.fn.extend({
        find: function (e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e) {
                return this.pushStack(rt(e).filter(function () {
                    for (t = 0; r > t; t++) {
                        if (rt.contains(i[t], this)) {
                            return !0
                        }
                    }
                }));
            }
            for (t = 0; r > t; t++) {
                rt.find(e, i[t], n);
            }
            return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && ct.test(e) ? rt(e) : e || [], !1).length
        }
    });
    var ft, ht = e.document, gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, mt = rt.fn.init = function (e, t) {
        var n, i;
        if (!e) {
            return this;
        }
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !n || !n[1] && t) {
                return !t ||
                t.jquery ? (t || ft).find(e) : this.constructor(t).find(e);
            }
            if (n[1]) {
                if (t = t instanceof rt ? t[0] : t, rt.merge(this, rt.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), dt.test(n[1]) &&
                        rt.isPlainObject(t)) {
                    for (n in t) {
                        rt.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    }
                }
                return this
            }
            if (i = ht.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2]) {
                    return ft.find(e);
                }
                this.length = 1, this[0] = i
            }
            return this.context = ht, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? "undefined" != typeof ft.ready ? ft.ready(e) : e(rt) :
                (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
    };
    mt.prototype = rt.fn, ft = rt(ht);
    var vt = /^(?:parents|prev(?:Until|All))/, yt = {children: !0, contents: !0, next: !0, prev: !0};
    rt.extend({
        dir: function (e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) {
                1 === r.nodeType && i.push(r), r = r[t];
            }
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e);
            }
            return n
        }
    }), rt.fn.extend({
        has: function (e) {
            var t, n = rt(e, this), i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++) {
                    if (rt.contains(this, n[t])) {
                        return !0
                    }
                }
            })
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ct.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; r > i; i++) {
                for (n = this[i];
                        n && n !== t; n = n.parentNode) {
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
                }
            }
            return this.pushStack(o.length > 1 ? rt.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? rt.inArray(this[0], rt(e)) : rt.inArray(e.jquery ? e[0] : e, this) :
                    this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), rt.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return rt.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return rt.dir(e, "parentNode", n)
        }, next: function (e) {
            return r(e, "nextSibling")
        }, prev: function (e) {
            return r(e, "previousSibling")
        }, nextAll: function (e) {
            return rt.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return rt.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return rt.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return rt.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return rt.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return rt.sibling(e.firstChild)
        }, contents: function (e) {
            return rt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : rt.merge([], e.childNodes)
        }
    }, function (e, t) {
        rt.fn[e] = function (n, i) {
            var r = rt.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 &&
            (yt[e] || (r = rt.unique(r)), vt.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var wt = /\S+/g, bt = {};
    rt.Callbacks = function (e) {
        e = "string" == typeof e ? bt[e] || o(e) : rt.extend({}, e);
        var t, n, i, r, a, s, l = [], u = !e.once && [], c = function (o) {
            for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++) {
                if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            }
            t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
        }, d = {
            add: function () {
                if (l) {
                    var i = l.length;
                    !function o(t) {
                        rt.each(t, function (t, n) {
                            var i = rt.type(n);
                            "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    }(arguments), t ? r = l.length : n && (s = i, c(n))
                }
                return this
            }, remove: function () {
                return l && rt.each(arguments, function (e, n) {
                    for (var i; (i = rt.inArray(n, l, i)) > -1;) {
                        l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
                    }
                }), this
            }, has: function (e) {
                return e ? rt.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], r = 0, this
            }, disable: function () {
                return l = u = n = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = void 0, n || d.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (e, n) {
                return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return d
    }, rt.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                ["notify", "progress", rt.Callbacks("memory")]], n = "pending", i = {
                state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return rt.Deferred(function (n) {
                        rt.each(t, function (t, o) {
                            var a = rt.isFunction(e[t]) && e[t];
                            r[o[1]](function () {
                                var e = a && a.apply(this, arguments);
                                e && rt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) :
                                        n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? rt.extend(e, i) : i
                }
            }, r = {};
            return i.pipe = i.then, rt.each(t, function (e, o) {
                var a = o[2], s = o[3];
                i[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        }, when: function (e) {
            var t, n, i, r = 0, o = U.call(arguments), a = o.length, s = 1 !== a || e && rt.isFunction(e.promise) ? a : 0, l = 1 === s ? e :
                    rt.Deferred(), u = function (e, n, i) {
                return function (r) {
                    n[e] = this, i[e] = arguments.length > 1 ? U.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (a > 1) {
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) {
                    o[r] && rt.isFunction(o[r].promise) ?
                            o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
                }
            }
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var xt;
    rt.fn.ready = function (e) {
        return rt.ready.promise().done(e), this
    }, rt.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? rt.readyWait++ : rt.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--rt.readyWait : !rt.isReady) {
                if (!ht.body) {
                    return setTimeout(rt.ready);
                }
                rt.isReady = !0, e !== !0 && --rt.readyWait > 0 ||
                (xt.resolveWith(ht, [rt]), rt.fn.triggerHandler && (rt(ht).triggerHandler("ready"), rt(ht).off("ready")))
            }
        }
    }), rt.ready.promise = function (t) {
        if (!xt) {
            if (xt = rt.Deferred(), "complete" === ht.readyState) {
                setTimeout(rt.ready);
            } else if (ht.addEventListener) {
                ht.addEventListener("DOMContentLoaded",
                        s, !1), e.addEventListener("load", s, !1);
            } else {
                ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && ht.documentElement
                } catch (i) {
                }
                n && n.doScroll && !function r() {
                    if (!rt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        a(), rt.ready()
                    }
                }()
            }
        }
        return xt.promise(t)
    };
    var Tt, St = "undefined";
    for (Tt in rt(nt)) {
        break;
    }
    nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, rt(function () {
        var e, t, n, i;
        n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== St &&
        (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e &&
        (n.style.zoom = 1)), n.removeChild(i))
    }), function () {
        var e = ht.createElement("div");
        if (null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                nt.deleteExpando = !1
            }
        }
        e = null
    }(), rt.acceptData = function (e) {
        var t = rt.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Et = /([A-Z])/g;
    rt.extend({
        cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (e) {
            return e = e.nodeType ? rt.cache[e[rt.expando]] : e[rt.expando], !!e && !u(e)
        }, data: function (e, t, n) {
            return c(e, t, n)
        }, removeData: function (e, t) {
            return d(e, t)
        }, _data: function (e, t, n) {
            return c(e, t, n, !0)
        }, _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), rt.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) {
                        a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(o, i, r[i])));
                    }
                    rt._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                rt.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                rt.data(this, e, t)
            }) : o ? l(o, e, rt.data(o, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                rt.removeData(this, e)
            })
        }
    }), rt.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = rt._data(e, t), n && (!i || rt.isArray(n) ? i = rt._data(e, t, rt.makeArray(n)) : i.push(n)), i || []) :
                    void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = rt.queue(e, t), i = n.length, r = n.shift(), o = rt._queueHooks(e, t), a = function () {
                rt.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return rt._data(e, n) || rt._data(e, n, {
                        empty: rt.Callbacks("once memory").add(function () {
                            rt._removeData(e, t + "queue"), rt._removeData(e, n)
                        })
                    })
        }
    }), rt.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? rt.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = rt.queue(this, e, t);
                rt._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && rt.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                rt.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = rt.Deferred(), o = this, a = this.length, s = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
                n = rt._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            }
            return s(), r.promise(t)
        }
    });
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Lt = ["Top", "Right", "Bottom", "Left"], Nt = function (e, t) {
        return e = t || e, "none" === rt.css(e, "display") || !rt.contains(e.ownerDocument, e)
    }, At = rt.access = function (e, t, n, i, r, o, a) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === rt.type(n)) {
            r = !0;
            for (s in n) {
                rt.access(e, t, s, n[s], !0, o, a)
            }
        } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(rt(e), n)
                })), t)) {
            for (; l > s; s++) {
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            }
        }
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }, Mt = /^(?:checkbox|radio)$/i;
    !function () {
        var e = ht.createElement("input"), t = ht.createElement("div"), n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody =
                        !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone =
                        "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked =
                        !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked =
                        !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML =
                        "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent =
                        !0, t.attachEvent && (t.attachEvent("onclick", function () {
                    nt.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                nt.deleteExpando = !1
            }
        }
    }(), function () {
        var t, n, i = ht.createElement("div");
        for (t in{submit: !0, change: !0, focusin: !0}) {
            n = "on" + t, (nt[t + "Bubbles"] = n in e) ||
            (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
        }
        i = null
    }();
    var Dt = /^(?:input|select|textarea)$/i, Pt = /^key/, Ht = /^(?:mouse|pointer|contextmenu)|click/, _t = /^(?:focusinfocus|focusoutblur)$/, jt = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, l, u, c, d, p, f, h, g, m = rt._data(e);
            if (m) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (a = m.events) || (a = m.events = {}), (c =
                        m.handle) || (c = m.handle = function (e) {
                    return typeof rt === St || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                }, c.elem = e), t = (t || "").match(wt) || [""], s = t.length; s--;) {
                    o = jt.exec(t[s]) || [], f = g = o[1], h =
                            (o[2] || "").split(".").sort(), f &&
                    (u = rt.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = rt.event.special[f] || {}, d = rt.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && rt.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 ||
                    (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add &&
                    (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), rt.event.global[f] =
                            !0);
                }
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, u, c, d, p, f, h, g, m = rt.hasData(e) && rt._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(wt) || [""], u = t.length; u--;) {
                    if (s = jt.exec(t[u]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = rt.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], s =
                                s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) {
                            a = p[o], !r && g !== a.origType ||
                            n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) ||
                            (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                        }
                        l && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || rt.removeEvent(e, f, m.handle), delete c[f])
                    } else {
                        for (f in c) {
                            rt.event.remove(e, f + t[u], n, i, !0);
                        }
                    }
                }
                rt.isEmptyObject(c) && (delete m.handle, rt._removeData(e, "events"))
            }
        },
        trigger: function (t, n, i, r) {
            var o, a, s, l, u, c, d, p = [i || ht], f = tt.call(t, "type") ? t.type : t, h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !_t.test(f + rt.event.triggered) &&
                    (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t =
                            t[rt.expando] ? t : new rt.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re =
                            t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n =
                            null == n ? [t] : rt.makeArray(n, [t]), u = rt.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !rt.isWindow(i)) {
                    for (l = u.delegateType || f, _t.test(l + f) || (s = s.parentNode); s; s = s.parentNode) {
                        p.push(s), c = s;
                    }
                    c === (i.ownerDocument || ht) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = p[d++]) && !t.isPropagationStopped();) {
                    t.type = d > 1 ? l : u.bindType || f, o =
                            (rt._data(s, "events") || {})[t.type] && rt._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply &&
                    rt.acceptData(s) &&
                    (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                }
                if (t.type = f, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && rt.acceptData(i) && a && i[f] &&
                        !rt.isWindow(i)) {
                    c = i[a], c && (i[a] = null), rt.event.triggered = f;
                    try {
                        i[f]()
                    } catch (g) {
                    }
                    rt.event.triggered = void 0, c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = rt.event.fix(e);
            var t, n, i, r, o, a = [], s = U.call(arguments), l = (rt._data(this, "events") || {})[e.type] || [], u = rt.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = rt.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped();) {
                    for (e.currentTarget = r.elem, o = 0;
                            (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();) {
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
                        (e.handleObj = i, e.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n &&
                        (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    }
                }
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type)) {
                for (; l != this; l = l.parentNode || this) {
                    if (1 === l.nodeType &&
                            (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], o = 0; s > o; o++) {
                            i = t[o], n = i.selector + " ", void 0 === r[n] &&
                            (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length), r[n] && r.push(i);
                        }
                        r.length && a.push({elem: l, handlers: r})
                    }
                }
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[rt.expando]) {
                return e;
            }
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Ht.test(r) ? this.mouseHooks : Pt.test(r) ? this.keyHooks : {}), i =
                    a.props ? this.props.concat(a.props) : this.props, e = new rt.Event(o), t = i.length; t--;) {
                n = i[t], e[n] = o[n];
            }
            return e.target || (e.target = o.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ?
                    a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ht, r = i.documentElement, n = i.body, e.pageX =
                        t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY =
                        t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a &&
                (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== h() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return rt.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = rt.extend(new rt.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            i ? rt.event.trigger(r, null, t) : rt.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, rt.removeEvent = ht.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === St && (e[i] = null), e.detachEvent(i, n))
    }, rt.Event = function (e, t) {
        return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented =
                e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && rt.extend(this, t), this.timeStamp =
                e && e.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(e, t)
    }, rt.Event.prototype = {
        isDefaultPrevented: f, isPropagationStopped: f, isImmediatePropagationStopped: f, preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }, stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (e, t) {
        rt.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return (!r || r !== i && !rt.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (rt.event.special.submit = {
        setup: function () {
            return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = rt.nodeName(t, "input") || rt.nodeName(t, "button") ? t.form : void 0;
                n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), rt._data(n, "submitBubbles", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && rt.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (rt.event.special.change = {
        setup: function () {
            return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), rt.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, e, !0)
            })), !1) : void rt.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Dt.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
                }), rt._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) :
                    void 0
        }, teardown: function () {
            return rt.event.remove(this, "._change"), !Dt.test(this.nodeName)
        }
    }), nt.focusinBubbles || rt.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            rt.event.simulate(t, e.target, rt.event.fix(e), !0)
        };
        rt.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = rt._data(i, t);
                r || i.addEventListener(e, n, !0), rt._data(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = rt._data(i, t) - 1;
                r ? rt._data(i, t, r) : (i.removeEventListener(e, n, !0), rt._removeData(i, t))
            }
        }
    }), rt.fn.extend({
        on: function (e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) {
                    this.on(o, t, n, e[o], r);
                }
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i ===
                    !1) {
                i = f;
            } else if (!i) {
                return this;
            }
            return 1 === r && (a = i, i = function (e) {
                return rt().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = rt.guid++)), this.each(function () {
                rt.event.add(this, e, i, n, t)
            })
        }, one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj, rt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType,
                        i.selector, i.handler), this;
            }
            if ("object" == typeof e) {
                for (r in e) {
                    this.off(r, t, e[r]);
                }
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function () {
                rt.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                rt.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? rt.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Wt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ot = / jQuery\d+="(?:null|\d+)"/g, It = new RegExp("<(?:" +
            Wt + ")[\\s/>]",
            "i"), Ft = /^\s+/, Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Bt = /<([\w:]+)/, qt = /<tbody/i, zt = /<|&#?\w+;/, $t = /<(?:script|style|link)/i, Vt = /checked\s*(?:[^=]|=\s*.checked.)/i, Gt = /^$|\/(?:java|ecma)script/i, Xt = /^true\/(.*)/, Yt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ut = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Kt = g(ht), Qt = Kt.appendChild(ht.createElement("div"));
    Ut.optgroup = Ut.option, Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead, Ut.th = Ut.td, rt.extend({
        clone: function (e, t, n) {
            var i, r, o, a, s, l = rt.contains(e.ownerDocument, e);
            if (nt.html5Clone || rt.isXMLDoc(e) || !It.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) :
                            (Qt.innerHTML = e.outerHTML, Qt.removeChild(o = Qt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked ||
                    1 !== e.nodeType && 11 !== e.nodeType || rt.isXMLDoc(e))) {
                for (i = m(o), s = m(e), a = 0; null != (r = s[a]); ++a) {
                    i[a] && S(r, i[a]);
                }
            }
            if (t) {
                if (n) {
                    for (s = s || m(e), i = i || m(o), a = 0; null != (r = s[a]); a++) {
                        T(r, i[a]);
                    }
                } else {
                    T(e, o);
                }
            }
            return i = m(o, "script"), i.length > 0 && x(i, !l && m(e, "script")), i = s = r = null, o
        }, buildFragment: function (e, t, n, i) {
            for (var r, o, a, s, l, u, c, d = e.length, p = g(t), f = [], h = 0; d > h; h++) {
                if (o = e[h], o || 0 === o) {
                    if ("object" === rt.type(o)) {
                        rt.merge(f,
                                o.nodeType ? [o] : o);
                    } else if (zt.test(o)) {
                        for (s = s || p.appendChild(t.createElement("div")), l = (Bt.exec(o) || ["", ""])[1].toLowerCase(), c =
                                Ut[l] || Ut._default, s.innerHTML =
                                c[1] + o.replace(Rt, "<$1></$2>") + c[2], r = c[0]; r--;) {
                            s = s.lastChild;
                        }
                        if (!nt.leadingWhitespace && Ft.test(o) && f.push(t.createTextNode(Ft.exec(o)[0])), !nt.tbody) {
                            for (o =
                                    "table" !== l || qt.test(o) ? "<table>" !== c[1] || qt.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length;
                                    r--;) {
                                rt.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                            }
                        }
                        for (rt.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) {
                            s.removeChild(s.firstChild);
                        }
                        s = p.lastChild
                    } else {
                        f.push(t.createTextNode(o));
                    }
                }
            }
            for (s && p.removeChild(s), nt.appendChecked || rt.grep(m(f, "input"), v), h = 0; o = f[h++];) {
                if ((!i || -1 === rt.inArray(o, i)) &&
                        (a = rt.contains(o.ownerDocument, o), s = m(p.appendChild(o), "script"), a && x(s), n)) {
                    for (r = 0; o = s[r++];) {
                        Gt.test(o.type || "") &&
                        n.push(o);
                    }
                }
            }
            return s = null, p
        }, cleanData: function (e, t) {
            for (var n, i, r, o, a = 0, s = rt.expando, l = rt.cache, u = nt.deleteExpando, c = rt.event.special; null != (n = e[a]); a++) {
                if ((t ||
                        rt.acceptData(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events) {
                        for (i in o.events) {
                            c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
                        }
                    }
                    l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== St ? n.removeAttribute(s) : n[s] = null, Y.push(r))
                }
            }
        }
    }), rt.fn.extend({
        text: function (e) {
            return At(this, function (e) {
                return void 0 === e ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, i = e ? rt.filter(e, this) : this, r = 0; null != (n = i[r]); r++) {
                t || 1 !== n.nodeType || rt.cleanData(m(n)), n.parentNode &&
                (t && rt.contains(n.ownerDocument, n) && x(m(n, "script")), n.parentNode.removeChild(n));
            }
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && rt.cleanData(m(e, !1)); e.firstChild;) {
                    e.removeChild(e.firstChild);
                }
                e.options && rt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return rt.clone(this, e, t)
            })
        }, html: function (e) {
            return At(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e) {
                    return 1 === t.nodeType ? t.innerHTML.replace(Ot, "") : void 0;
                }
                if (!("string" != typeof e || $t.test(e) || !nt.htmlSerialize && It.test(e) || !nt.leadingWhitespace && Ft.test(e) ||
                        Ut[(Bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Rt, "<$1></$2>");
                    try {
                        for (; i > n; n++) {
                            t = this[n] || {}, 1 === t.nodeType && (rt.cleanData(m(t, !1)), t.innerHTML = e);
                        }
                        t = 0
                    } catch (r) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, rt.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = K.apply([], e);
            var n, i, r, o, a, s, l = 0, u = this.length, c = this, d = u - 1, p = e[0], f = rt.isFunction(p);
            if (f || u > 1 && "string" == typeof p && !nt.checkClone && Vt.test(p)) {
                return this.each(function (n) {
                    var i = c.eq(n);
                    f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
                });
            }
            if (u && (s = rt.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = rt.map(m(s, "script"), w), r = o.length; u > l; l++) {
                    i = s, l !== d &&
                    (i = rt.clone(i, !0, !0), r && rt.merge(o, m(i, "script"))), t.call(this[l], i, l);
                }
                if (r) {
                    for (a = o[o.length - 1].ownerDocument, rt.map(o, b), l = 0; r > l; l++) {
                        i = o[l], Gt.test(i.type || "") && !rt._data(i, "globalEval") &&
                        rt.contains(a, i) &&
                        (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Yt, "")));
                    }
                }
                s = n = null
            }
            return this
        }
    }), rt.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        rt.fn[e] = function (e) {
            for (var n, i = 0, r = [], o = rt(e), a = o.length - 1; a >= i; i++) {
                n = i === a ? this : this.clone(!0), rt(o[i])[t](n), Q.apply(r, n.get());
            }
            return this.pushStack(r)
        }
    });
    var Jt, Zt = {};
    !function () {
        var e;
        nt.shrinkWrapBlocks = function () {
            if (null != e) {
                return e;
            }
            e = !1;
            var t, n, i;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== St &&
            (t.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width =
                    "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/, rn = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"), on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tn = function (e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n &&
        ("" !== a || rt.contains(e.ownerDocument, e) || (a = rt.style(e, t)), rn.test(a) && nn.test(t) &&
        (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth =
                o)), void 0 === a ? a : a + ""
    }) : ht.documentElement.currentStyle && (en = function (e) {
        return e.currentStyle
    }, tn = function (e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) &&
        (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a =
                s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    }), !function () {
        function t() {
            var t, n, i, r;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText =
                    "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o =
                    a = !1, l = !0, e.getComputedStyle &&
            (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {width: "4px"}).width, r =
                    t.appendChild(ht.createElement("div")), r.style.cssText = t.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight =
                    r.style.width = "0", t.style.width = "1px", l =
                    !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(r)), t.innerHTML =
                    "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText =
                    "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s &&
            (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
        }

        var n, i, r, o, a, s, l;
        n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r =
                n.getElementsByTagName("a")[0], (i = r && r.style) &&
        (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip =
                "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing =
                "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
            reliableHiddenOffsets: function () {
                return null == s && t(), s
            }, boxSizingReliable: function () {
                return null == a && t(), a
            }, pixelPosition: function () {
                return null == o && t(), o
            }, reliableMarginRight: function () {
                return null == l && t(), l
            }
        }))
    }(), rt.swap = function (e, t, n, i) {
        var r, o, a = {};
        for (o in t) {
            a[o] = e.style[o], e.style[o] = t[o];
        }
        r = n.apply(e, i || []);
        for (o in t) {
            e.style[o] = a[o];
        }
        return r
    };
    var an = /alpha\([^)]*\)/i, sn = /opacity\s*=\s*([^)]*)/, ln = /^(none|table(?!-c[ea]).+)/, un = new RegExp("^(" + kt + ")(.*)$",
            "i"), cn = new RegExp("^([+-])=(" + kt + ")", "i"), dn = {position: "absolute", visibility: "hidden", display: "block"}, pn = {
        letterSpacing: "0",
        fontWeight: "400"
    }, fn = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": nt.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = rt.camelCase(t), l = e.style;
                if (t = rt.cssProps[s] || (rt.cssProps[s] = L(l, s)), a = rt.cssHooks[t] || rt.cssHooks[s], void 0 === n) {
                    return a && "get"in a &&
                    void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                }
                if (o = typeof n, "string" === o && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)), o = "number"), null != n &&
                        n === n && ("number" !== o || rt.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") ||
                        (l[t] = "inherit"), !(a && "set"in a && void 0 === (n = a.set(e, n, i))))) {
                    try {
                        l[t] = n
                    } catch (u) {
                    }
                }
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = rt.camelCase(t);
            return t = rt.cssProps[s] || (rt.cssProps[s] = L(e.style, s)), a = rt.cssHooks[t] || rt.cssHooks[s], a && "get"in a &&
            (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, i)), "normal" === o && t in pn && (o = pn[t]), "" === n || n ?
                    (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
        }
    }), rt.each(["height", "width"], function (e, t) {
        rt.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? ln.test(rt.css(e, "display")) && 0 === e.offsetWidth ? rt.swap(e, dn, function () {
                    return D(e, t, i)
                }) : D(e, t, i) : void 0
            }, set: function (e, n, i) {
                var r = i && en(e);
                return A(e, n, i ? M(e, t, i, nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), nt.opacity || (rt.cssHooks.opacity = {
        get: function (e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, i = e.currentStyle, r = rt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === rt.trim(o.replace(an, "")) && n.removeAttribute &&
            (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
        }
    }), rt.cssHooks.marginRight = k(nt.reliableMarginRight, function (e, t) {
        return t ? rt.swap(e, {display: "inline-block"}, tn, [e, "marginRight"]) : void 0
    }), rt.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        rt.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) {
                    r[e + Lt[i] + t] = o[i] || o[i - 2] || o[0];
                }
                return r
            }
        }, nn.test(e) || (rt.cssHooks[e + t].set = A)
    }), rt.fn.extend({
        css: function (e, t) {
            return At(this, function (e, t, n) {
                var i, r, o = {}, a = 0;
                if (rt.isArray(t)) {
                    for (i = en(e), r = t.length; r > a; a++) {
                        o[t[a]] = rt.css(e, t[a], !1, i);
                    }
                    return o
                }
                return void 0 !== n ? rt.style(e, t, n) : rt.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return N(this, !0)
        }, hide: function () {
            return N(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Nt(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = P, P.prototype = {
        constructor: P, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit =
                    o || (rt.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = P.propHooks[this.prop];
            return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now =
                    (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) :
                    P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) :
                        e.elem[e.prop]
            }, set: function (e) {
                rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) :
                        e.elem.style && (null != e.elem.style[rt.cssProps[e.prop]] || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) :
                                e.elem[e.prop] = e.now
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, rt.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, rt.fx = P.prototype.init, rt.fx.step = {};
    var hn, gn, mn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"), yn = /queueHooks$/, wn = [W], bn = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), i = n.cur(), r = vn.exec(t), o = r && r[3] || (rt.cssNumber[e] ? "" : "px"), a = (rt.cssNumber[e] ||
                    "px" !== o && +i) && vn.exec(rt.css(n.elem, e)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], r = r || [], a = +i || 1;
                do {
                    s = s || ".5", a /= s, rt.style(n.elem, e, a + o);
                } while (s !== (s = n.cur() / i) && 1 !== s && --l)
            }
            return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
        }]
    };
    rt.Animation = rt.extend(I, {
        tweener: function (e, t) {
            rt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++) {
                n = e[i], bn[n] = bn[n] || [], bn[n].unshift(t)
            }
        }, prefilter: function (e, t) {
            t ? wn.unshift(e) : wn.push(e)
        }
    }), rt.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? rt.extend({}, e) :
        {complete: n || !n && t || rt.isFunction(e) && e, duration: e, easing: n && t || t && !rt.isFunction(t) && t};
        return i.duration = rt.fx.off ? 0 :
                "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, (null == i.queue ||
        i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
        }, i
    }, rt.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Nt).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = rt.isEmptyObject(e), o = rt.speed(t, n, i), a = function () {
                var t = I(this, rt.extend({}, e), o);
                (r || rt._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = rt.timers, a = rt._data(this);
                if (r) {
                    a[r] && a[r].stop && i(a[r]);
                } else {
                    for (r in a) {
                        a[r] && a[r].stop && yn.test(r) && i(a[r]);
                    }
                }
                for (r = o.length; r--;) {
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                }
                (t || !n) && rt.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = rt._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = rt.timers, a = i ? i.length : 0;
                for (n.finish = !0, rt.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                }
                for (t = 0; a > t; t++) {
                    i[t] && i[t].finish && i[t].finish.call(this);
                }
                delete n.finish
            })
        }
    }), rt.each(["toggle", "show", "hide"], function (e, t) {
        var n = rt.fn[t];
        rt.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, i, r)
        }
    }), rt.each({
        slideDown: _("show"),
        slideUp: _("hide"),
        slideToggle: _("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        rt.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), rt.timers = [], rt.fx.tick = function () {
        var e, t = rt.timers, n = 0;
        for (hn = rt.now(); n < t.length; n++) {
            e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        }
        t.length || rt.fx.stop(), hn = void 0
    }, rt.fx.timer = function (e) {
        rt.timers.push(e), e() ? rt.fx.start() : rt.timers.pop()
    }, rt.fx.interval = 13, rt.fx.start = function () {
        gn || (gn = setInterval(rt.fx.tick, rt.fx.interval))
    }, rt.fx.stop = function () {
        clearInterval(gn), gn = null
    }, rt.fx.speeds = {slow: 600, fast: 200, _default: 400}, rt.fn.delay = function (e, t) {
        return e = rt.fx ? rt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var e, t, n, i, r;
        t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i =
                t.getElementsByTagName("a")[0], n = ht.createElement("select"), r = n.appendChild(ht.createElement("option")), e =
                t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style =
                /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected =
                r.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !r.disabled, e =
                ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type",
                "radio"), nt.radioValue = "t" === e.value
    }();
    var xn = /\r/g;
    rt.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = rt.isFunction(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, rt(this).val()) : e, null == r ? r = "" :
                        "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function (e) {
                            return null == e ? "" : e + ""
                        })), t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, r, "value") ||
                (this.value = r))
            })) : r ? (t = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n :
                    (n = r.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)) : void 0
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = rt.find.attr(e, "value");
                    return null != t ? t : rt.trim(rt.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 :
                            i.length, l = 0 > r ? s : o ? r : 0; s > l; l++) {
                        if (n = i[l], !(!n.selected && l !== r ||
                                (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) ||
                                n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
                            if (t = rt(n).val(), o) {
                                return t;
                            }
                            a.push(t)
                        }
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = rt.makeArray(t), a = r.length; a--;) {
                        if (i = r[a], rt.inArray(rt.valHooks.option.get(i), o) >= 0) {
                            try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            }
                        } else {
                            i.selected = !1;
                        }
                    }
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function () {
        rt.valHooks[this] = {
            set: function (e, t) {
                return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (rt.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tn, Sn, Cn = rt.expr.attrHandle, En = /^(?:checked|selected)$/i, kn = nt.getSetAttribute, Ln = nt.input;
    rt.fn.extend({
        attr: function (e, t) {
            return At(this, rt.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                rt.removeAttr(this, e)
            })
        }
    }), rt.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === St ? rt.prop(e, t, n) :
                    (1 === o && rt.isXMLDoc(e) || (t = t.toLowerCase(), i = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? Sn : Tn)), void 0 === n ?
                            i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = rt.find.attr(e, t), null == r ? void 0 : r) :
                            null !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void rt.removeAttr(e, t)) :
                    void 0
        }, removeAttr: function (e, t) {
            var n, i, r = 0, o = t && t.match(wt);
            if (o && 1 === e.nodeType) {
                for (; n = o[r++];) {
                    i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ?
                            Ln && kn || !En.test(n) ? e[i] = !1 : e[rt.camelCase("default-" + n)] = e[i] = !1 : rt.attr(e, n, ""), e.removeAttribute(kn ? n : i)
                }
            }
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!nt.radioValue && "radio" === t && rt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Sn = {
        set: function (e, t, n) {
            return t === !1 ? rt.removeAttr(e, n) :
                    Ln && kn || !En.test(n) ? e.setAttribute(!kn && rt.propFix[n] || n, n) : e[rt.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Cn[t] || rt.find.attr;
        Cn[t] = Ln && kn || !En.test(t) ? function (e, t, i) {
            var r, o;
            return i || (o = Cn[t], Cn[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Cn[t] = o), r
        } : function (e, t, n) {
            return n ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ln && kn || (rt.attrHooks.value = {
        set: function (e, t, n) {
            return rt.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n)
        }
    }), kn || (Tn = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Cn.id = Cn.name = Cn.coords = function (e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, rt.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        }, set: Tn.set
    }, rt.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Tn.set(e, "" === t ? !1 : t, n)
        }
    }, rt.each(["width", "height"], function (e, t) {
        rt.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (rt.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Nn = /^(?:input|select|textarea|button|object)$/i, An = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function (e, t) {
            return At(this, rt.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = rt.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {
                }
            })
        }
    }), rt.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var i, r, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !rt.isXMLDoc(e), o && (t = rt.propFix[t] || t, r = rt.propHooks[t]), void 0 !== n ?
                    r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = rt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Nn.test(e.nodeName) || An.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || rt.each(["href", "src"], function (e, t) {
        rt.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (rt.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
            function () {
                rt.propFix[this.toLowerCase()] = this
            }), nt.enctype || (rt.propFix.enctype = "encoding");
    var Mn = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, a, s = 0, l = this.length, u = "string" == typeof e && e;
            if (rt.isFunction(e)) {
                return this.each(function (t) {
                    rt(this).addClass(e.call(this, t, this.className))
                });
            }
            if (u) {
                for (t = (e || "").match(wt) || []; l > s; s++) {
                    if (n = this[s], i =
                                    1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mn, " ") : " ")) {
                        for (o = 0; r = t[o++];) {
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        }
                        a = rt.trim(i), n.className !== a && (n.className = a)
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, a, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (rt.isFunction(e)) {
                return this.each(function (t) {
                    rt(this).removeClass(e.call(this, t, this.className))
                });
            }
            if (u) {
                for (t = (e || "").match(wt) || []; l > s; s++) {
                    if (n = this[s], i =
                                    1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mn, " ") : "")) {
                        for (o = 0; r = t[o++];) {
                            for (; i.indexOf(" " + r + " ") >= 0;) {
                                i = i.replace(" " + r + " ", " ");
                            }
                        }
                        a = e ? rt.trim(i) : "", n.className !== a && (n.className = a)
                    }
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(rt.isFunction(e) ? function (n) {
                rt(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n) {
                    for (var t, i = 0, r = rt(this), o = e.match(wt) || []; t = o[i++];) {
                        r.hasClass(t) ? r.removeClass(t) :
                                r.addClass(t);
                    }
                } else {
                    (n === St || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className =
                            this.className || e === !1 ? "" : rt._data(this, "__className__") || "")
                }
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) {
                if (1 === this[n].nodeType &&
                        (" " + this[n].className + " ").replace(Mn, " ").indexOf(t) >= 0) {
                    return !0;
                }
            }
            return !1
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
            function (e, t) {
                rt.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), rt.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dn = rt.now(), Pn = /\?/, Hn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) {
            return e.JSON.parse(t + "");
        }
        var n, i = null, r = rt.trim(t + "");
        return r && !rt.trim(r.replace(Hn, function (e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + t)
    }, rt.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) {
            return null;
        }
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) :
                    (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + t), n
    };
    var _n, jn, Wn = /#.*$/, On = /([?&])_=[^&]*/, In = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rn = /^(?:GET|HEAD)$/, Bn = /^\/\//, qn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, zn = {}, $n = {}, Vn = "*/".concat("*");
    try {
        jn = location.href
    } catch (Gn) {
        jn = ht.createElement("a"), jn.href = "", jn = jn.href
    }
    _n = qn.exec(jn.toLowerCase()) || [], rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jn,
            type: "GET",
            isLocal: Fn.test(_n[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {"*": Vn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"},
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": rt.parseJSON, "text xml": rt.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? B(B(e, rt.ajaxSettings), t) : B(rt.ajaxSettings, e)
        },
        ajaxPrefilter: F(zn),
        ajaxTransport: F($n),
        ajax: function (e, t) {
            function n(e, t, n, i) {
                var r, c, v, y, b, T = t;
                2 !== w && (w = 2, s && clearTimeout(s), u = void 0, a = i || "", x.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n &&
                (y = q(d, x, n)), y = z(d, y, x, r), r ? (d.ifModified &&
                (b = x.getResponseHeader("Last-Modified"), b && (rt.lastModified[o] = b), b = x.getResponseHeader("etag"), b && (rt.etag[o] = b)), 204 === e ||
                "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, r = !v)) :
                        (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || T) + "", r ? h.resolveWith(p, [c, T, x]) :
                        h.rejectWith(p, [x, T, v]), x.statusCode(m), m = void 0, l &&
                f.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? c : v]), g.fireWith(p, [x, T]), l &&
                (f.trigger("ajaxComplete", [x, d]), --rt.active || rt.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, a, s, l, u, c, d = rt.ajaxSetup({}, t), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? rt(p) :
                    rt.event, h = rt.Deferred(), g = rt.Callbacks("once memory"), m = d.statusCode || {}, v = {}, y = {}, w = 0, b = "canceled", x = {
                readyState: 0, getResponseHeader: function (e) {
                    var t;
                    if (2 === w) {
                        if (!c) {
                            for (c = {}; t = In.exec(a);) {
                                c[t[1].toLowerCase()] = t[2];
                            }
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                }, getAllResponseHeaders: function () {
                    return 2 === w ? a : null
                }, setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return w || (e = y[n] = y[n] || e, v[e] = t), this
                }, overrideMimeType: function (e) {
                    return w || (d.mimeType = e), this
                }, statusCode: function (e) {
                    var t;
                    if (e) {
                        if (2 > w) {
                            for (t in e) {
                                m[t] = [m[t], e[t]];
                            }
                        } else {
                            x.always(e[x.status]);
                        }
                    }
                    return this
                }, abort: function (e) {
                    var t = e || b;
                    return u && u.abort(t), n(0, t), this
                }
            };
            if (h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url =
                            ((e || d.url || jn) + "").replace(Wn, "").replace(Bn, _n[1] + "//"), d.type =
                            t.method || t.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(wt) || [""], null ==
                    d.crossDomain && (i = qn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === _n[1] && i[2] === _n[2] &&
                    (i[3] || ("http:" === i[1] ? "80" : "443")) === (_n[3] || ("http:" === _n[1] ? "80" : "443")))), d.data && d.processData &&
                    "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)), R(zn, d, t, x), 2 === w) {
                return x;
            }
            l = rt.event && d.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent =
                    !Rn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Pn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 &&
            (d.url = On.test(o) ? o.replace(On, "$1_=" + Dn++) : o + (Pn.test(o) ? "&" : "?") + "_=" + Dn++)), d.ifModified &&
            (rt.lastModified[o] && x.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] &&
            x.setRequestHeader("If-None-Match", rt.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) &&
            x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept",
                    d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") :
                            d.accepts["*"]);
            for (r in d.headers) {
                x.setRequestHeader(r, d.headers[r]);
            }
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === w)) {
                return x.abort();
            }
            b = "abort";
            for (r in{success: 1, error: 1, complete: 1}) {
                x[r](d[r]);
            }
            if (u = R($n, d, t, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, u.send(v, n)
                } catch (T) {
                    if (!(2 > w)) {
                        throw T;
                    }
                    n(-1, T)
                }
            } else {
                n(-1, "No Transport");
            }
            return x
        },
        getJSON: function (e, t, n) {
            return rt.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return rt.get(e, void 0, t, "script")
        }
    }), rt.each(["get", "post"], function (e, t) {
        rt[t] = function (e, n, i, r) {
            return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax({url: e, type: t, dataType: r, data: n, success: i})
        }
    }), rt._evalUrl = function (e) {
        return rt.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, rt.fn.extend({
        wrapAll: function (e) {
            if (rt.isFunction(e)) {
                return this.each(function (t) {
                    rt(this).wrapAll(e.call(this, t))
                });
            }
            if (this[0]) {
                var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) {
                        e = e.firstChild;
                    }
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return this.each(rt.isFunction(e) ? function (t) {
                rt(this).wrapInner(e.call(this, t))
            } : function () {
                var t = rt(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = rt.isFunction(e);
            return this.each(function (n) {
                rt(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || rt.css(e, "display"))
    }, rt.expr.filters.visible = function (e) {
        return !rt.expr.filters.hidden(e)
    };
    var Xn = /%20/g, Yn = /\[\]$/, Un = /\r?\n/g, Kn = /^(?:submit|button|image|reset|file)$/i, Qn = /^(?:input|select|textarea|keygen)/i;
    rt.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            t = rt.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery && !rt.isPlainObject(e)) {
            rt.each(e, function () {
                r(this.name, this.value)
            });
        } else {
            for (n in e) {
                $(n, e[n], t, r);
            }
        }
        return i.join("&").replace(Xn, "+")
    }, rt.fn.extend({
        serialize: function () {
            return rt.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = rt.prop(this, "elements");
                return e ? rt.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !rt(this).is(":disabled") && Qn.test(this.nodeName) && !Kn.test(e) && (this.checked || !Mt.test(e))
            }).map(function (e, t) {
                var n = rt(this).val();
                return null == n ? null : rt.isArray(n) ? rt.map(n, function (e) {
                    return {name: t.name, value: e.replace(Un, "\r\n")}
                }) : {name: t.name, value: n.replace(Un, "\r\n")}
            }).get()
        }
    }), rt.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || G()
    } : V;
    var Jn = 0, Zn = {}, ei = rt.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Zn) {
            Zn[e](void 0, !0)
        }
    }), nt.cors = !!ei && "withCredentials"in ei, ei = nt.ajax = !!ei, ei && rt.ajaxTransport(function (e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function (n, i) {
                    var r, o = e.xhr(), a = ++Jn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) {
                        for (r in e.xhrFields) {
                            o[r] = e.xhrFields[r];
                        }
                    }
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] ||
                    (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) {
                        void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    }
                    o.send(e.hasContent && e.data || null), t = function (n, r) {
                        var s, l, u;
                        if (t && (r || 4 === o.readyState)) {
                            if (delete Zn[a], t = void 0, o.onreadystatechange = rt.noop, r) {
                                4 !== o.readyState &&
                                o.abort();
                            } else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        }
                        u && i(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t : t()
                }, abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), rt.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return rt.globalEval(e), e
            }
        }
    }), rt.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), rt.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = ht.head || rt("head")[0] || ht.documentElement;
            return {
                send: function (i, r) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload =
                            t.onreadystatechange = function (e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) &&
                                (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                            }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ti = [], ni = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = ti.pop() || rt.expando + "_" + Dn++;
            return this[e] = !0, e
        }
    }), rt.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" :
                "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ?
                (r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + r) :
                t.jsonp !== !1 && (t.url += (Pn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                    return a || rt.error(r + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
                    a = arguments
                }, i.always(function () {
                    e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, ti.push(r)), a && rt.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
    }), rt.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) {
            return null;
        }
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var i = dt.exec(e), r = !n && [];
        return i ? [t.createElement(i[1])] : (i = rt.buildFragment([e], t, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
    };
    var ii = rt.fn.load;
    rt.fn.load = function (e, t, n) {
        if ("string" != typeof e && ii) {
            return ii.apply(this, arguments);
        }
        var i, r, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (i = rt.trim(e.slice(s, e.length)), e = e.slice(0, s)), rt.isFunction(t) ? (n = t, t = void 0) :
        t && "object" == typeof t && (o = "POST"), a.length > 0 && rt.ajax({url: e, type: o, dataType: "html", data: t}).done(function (e) {
            r = arguments, a.html(i ? rt("<div>").append(rt.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
                    a.each(n, r || [e.responseText, t, e])
                }), this
    }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        rt.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), rt.expr.filters.animated = function (e) {
        return rt.grep(rt.timers, function (t) {
            return e === t.elem
        }).length
    };
    var ri = e.document.documentElement;
    rt.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, u, c = rt.css(e, "position"), d = rt(e), p = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = rt.css(e, "top"), l = rt.css(e, "left"), u =
                    ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l]) > -1, u ? (i = d.position(), a = i.top, r = i.left) :
                    (a = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(t) && (t = t.call(e, n, s)), null != t.top &&
            (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using"in t ? t.using.call(e, p) : d.css(p)
        }
    }, rt.fn.extend({
        offset: function (e) {
            if (arguments.length) {
                return void 0 === e ? this : this.each(function (t) {
                    rt.offset.setOffset(this, e, t)
                });
            }
            var t, n, i = {top: 0, left: 0}, r = this[0], o = r && r.ownerDocument;
            return o ? (t = o.documentElement, rt.contains(t, r) ? (typeof r.getBoundingClientRect !== St && (i = r.getBoundingClientRect()), n = X(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, i = this[0];
                return "fixed" === rt.css(i, "position") ? t = i.getBoundingClientRect() :
                        (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (n = e.offset()), n.top +=
                                rt.css(e[0], "borderTopWidth", !0), n.left += rt.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - rt.css(i, "marginTop", !0), left: t.left - n.left - rt.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || ri; e && !rt.nodeName(e, "html") && "static" === rt.css(e, "position");) {
                    e = e.offsetParent;
                }
                return e || ri
            })
        }
    }), rt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = /Y/.test(t);
        rt.fn[e] = function (i) {
            return At(this, function (e, i, r) {
                var o = X(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] :
                        void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), rt.each(["top", "left"], function (e, t) {
        rt.cssHooks[t] = k(nt.pixelPosition, function (e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? rt(e).position()[t] + "px" : n) : void 0
        })
    }), rt.each({Height: "height", Width: "width"}, function (e, t) {
        rt.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            rt.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), a = n || (i === !0 || r === !0 ? "margin" : "border");
                return At(this, function (t, n, i) {
                    var r;
                    return rt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ?
                            (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) :
                            void 0 === i ? rt.css(t, n, a) : rt.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), rt.fn.size = function () {
        return this.length
    }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return rt
    });
    var oi = e.jQuery, ai = e.$;
    return rt.noConflict = function (t) {
        return e.$ === rt && (e.$ = ai), t && e.jQuery === rt && (e.jQuery = oi), rt
    }, typeof t === St && (e.jQuery = e.$ = rt), rt
});
var Swiper = function (e, t) {
    "use strict";
    function n(e, t) {
        return document.querySelectorAll ? (t || document).querySelectorAll(e) : jQuery(e, t)
    }

    function i(e) {
        return "[object Array]" === Object.prototype.toString.apply(e) ? !0 : !1
    }

    function r() {
        var e = P - j;
        return t.freeMode && (e = P - j), t.slidesPerView > A.slides.length && !t.centeredSlides && (e = 0), 0 > e && (e = 0), e
    }

    function o() {
        function e(e) {
            var n, i, r = function () {
                "undefined" != typeof A && null !== A && (void 0 !== A.imagesLoaded && A.imagesLoaded++, A.imagesLoaded === A.imagesToLoad.length &&
                (A.reInit(), t.onImagesReady && A.fireCallback(t.onImagesReady, A)))
            };
            e.complete ? r() : (i = e.currentSrc || e.getAttribute("src"), i ? (n = new Image, n.onload = r, n.onerror = r, n.src = i) : r())
        }

        var i = A.h.addEventListener, r = "wrapper" === t.eventTarget ? A.wrapper : A.container;
        if (A.browser.ie10 || A.browser.ie11 ?
                        (i(r, A.touchEvents.touchStart, g), i(document, A.touchEvents.touchMove, m), i(document, A.touchEvents.touchEnd, v)) :
                        (A.support.touch && (i(r, "touchstart", g), i(r, "touchmove", m), i(r, "touchend", v)), t.simulateTouch &&
                        (i(r, "mousedown", g), i(document, "mousemove", m), i(document, "mouseup", v))), t.autoResize &&
                i(window, "resize", A.resizeFix), a(), A._wheelEvent = !1, t.mousewheelControl) {
            if (void 0 !== document.onmousewheel && (A._wheelEvent = "mousewheel"), !A._wheelEvent) {
                try {
                    new WheelEvent("wheel"), A._wheelEvent = "wheel"
                } catch (o) {
                }
            }
            A._wheelEvent || (A._wheelEvent = "DOMMouseScroll"), A._wheelEvent && i(A.container, A._wheelEvent, u)
        }
        if (t.keyboardControl && i(document, "keydown", l), t.updateOnImagesReady) {
            A.imagesToLoad = n("img", A.container);
            for (var s = 0; s < A.imagesToLoad.length; s++) {
                e(A.imagesToLoad[s])
            }
        }
    }

    function a() {
        var e, i = A.h.addEventListener;
        if (t.preventLinks) {
            var r = n("a", A.container);
            for (e = 0; e < r.length; e++) {
                i(r[e], "click", f)
            }
        }
        if (t.releaseFormElements) {
            var o = n("input, textarea, select", A.container);
            for (e = 0; e < o.length; e++) {
                i(o[e], A.touchEvents.touchStart, h, !0), A.support.touch && t.simulateTouch && i(o[e], "mousedown", h, !0)
            }
        }
        if (t.onSlideClick) {
            for (e = 0; e < A.slides.length; e++) {
                i(A.slides[e], "click", c);
            }
        }
        if (t.onSlideTouch) {
            for (e = 0; e < A.slides.length; e++) {
                i(A.slides[e], A.touchEvents.touchStart, d)
            }
        }
    }

    function s() {
        var e, i = A.h.removeEventListener;
        if (t.onSlideClick) {
            for (e = 0; e < A.slides.length; e++) {
                i(A.slides[e], "click", c);
            }
        }
        if (t.onSlideTouch) {
            for (e = 0; e < A.slides.length; e++) {
                i(A.slides[e], A.touchEvents.touchStart, d);
            }
        }
        if (t.releaseFormElements) {
            var r = n("input, textarea, select", A.container);
            for (e = 0; e < r.length; e++) {
                i(r[e], A.touchEvents.touchStart, h, !0), A.support.touch && t.simulateTouch && i(r[e], "mousedown", h, !0)
            }
        }
        if (t.preventLinks) {
            var o = n("a", A.container);
            for (e = 0; e < o.length; e++) {
                i(o[e], "click", f)
            }
        }
    }

    function l(e) {
        var t = e.keyCode || e.charCode;
        if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)) {
            if (37 === t || 39 === t || 38 === t || 40 === t) {
                for (var n = !1, i = A.h.getOffset(A.container), r = A.h.windowScroll().left, o = A.h.windowScroll().top, a = A.h.windowWidth(), s = A.h.windowHeight(), l = [[i.left,
                    i.top], [i.left + A.width, i.top], [i.left, i.top + A.height], [i.left + A.width, i.top + A.height]], u = 0; u < l.length; u++) {
                    var c = l[u];
                    c[0] >= r && c[0] <= r + a && c[1] >= o && c[1] <= o + s && (n = !0)
                }
                if (!n) {
                    return
                }
            }
            F ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 39 === t && A.swipeNext(), 37 === t && A.swipePrev()) :
                    ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && A.swipeNext(), 38 === t &&
                    A.swipePrev())
        }
    }

    function u(e) {
        var n = A._wheelEvent, i = 0;
        if (e.detail) {
            i = -e.detail;
        } else if ("mousewheel" === n) {
            if (t.mousewheelControlForceToAxis) {
                if (F) {
                    if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) {
                        return;
                    }
                    i = e.wheelDeltaX
                } else {
                    if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) {
                        return;
                    }
                    i = e.wheelDeltaY
                }
            } else {
                i = e.wheelDelta;
            }
        } else if ("DOMMouseScroll" === n) {
            i = -e.detail;
        } else if ("wheel" === n) {
            if (t.mousewheelControlForceToAxis) {
                if (F) {
                    if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) {
                        return;
                    }
                    i = -e.deltaX
                } else {
                    if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) {
                        return;
                    }
                    i = -e.deltaY
                }
            } else {
                i = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
            }
        }
        if (t.freeMode) {
            var o = A.getWrapperTranslate() + i;
            if (o > 0 && (o = 0), o < -r() && (o = -r()), A.setWrapperTransition(0), A.setWrapperTranslate(o), A.updateActiveSlide(o), 0 === o ||
                    o === -r()) {
                return
            }
        } else {
            (new Date).getTime() - X > 60 && (0 > i ? A.swipeNext() : A.swipePrev()), X = (new Date).getTime();
        }
        return t.autoplay && A.stopAutoplay(!0), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
    }

    function c(e) {
        A.allowSlideClick && (p(e), A.fireCallback(t.onSlideClick, A, e))
    }

    function d(e) {
        p(e), A.fireCallback(t.onSlideTouch, A, e)
    }

    function p(e) {
        if (e.currentTarget) {
            A.clickedSlide = e.currentTarget;
        } else {
            var n = e.srcElement;
            do {
                if (n.className.indexOf(t.slideClass) > -1) {
                    break;
                }
                n = n.parentNode
            } while (n);
            A.clickedSlide = n
        }
        A.clickedSlideIndex = A.slides.indexOf(A.clickedSlide), A.clickedSlideLoopIndex = A.clickedSlideIndex - (A.loopedSlides || 0)
    }

    function f(e) {
        return A.allowLinks ? void 0 :
                (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.preventLinksPropagation && "stopPropagation"in e && e.stopPropagation(), !1)
    }

    function h(e) {
        return e.stopPropagation ? e.stopPropagation() : e.returnValue = !1, !1
    }

    function g(e) {
        if (t.preventLinks && (A.allowLinks = !0), A.isTouched || t.onlyExternal) {
            return !1;
        }
        var n = e.target || e.srcElement;
        document.activeElement && document.activeElement !== document.body && document.activeElement !== n && document.activeElement.blur();
        var i = "input select textarea".split(" ");
        if (t.noSwiping && n && w(n)) {
            return !1;
        }
        if (Z = !1, A.isTouched = !0, J = "touchstart" === e.type, !J && "which"in e && 3 === e.which) {
            return A.isTouched = !1, !1;
        }
        if (!J || 1 === e.targetTouches.length) {
            A.callPlugins("onTouchStartBegin"), !J && !A.isAndroid && i.indexOf(n.tagName.toLowerCase()) < 0 &&
            (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
            var r = J ? e.targetTouches[0].pageX : e.pageX || e.clientX, o = J ? e.targetTouches[0].pageY : e.pageY || e.clientY;
            A.touches.startX = A.touches.currentX = r, A.touches.startY = A.touches.currentY = o, A.touches.start =
                    A.touches.current = F ? r : o, A.setWrapperTransition(0), A.positions.start =
                    A.positions.current = A.getWrapperTranslate(), A.setWrapperTranslate(A.positions.start), A.times.start = (new Date).getTime(), _ =
                    void 0, t.moveStartThreshold > 0 && (U = !1), t.onTouchStart && A.fireCallback(t.onTouchStart, A, e), A.callPlugins("onTouchStartEnd")
        }
    }

    function m(e) {
        if (A.isTouched && !t.onlyExternal && (!J || "mousemove" !== e.type)) {
            var n = J ? e.targetTouches[0].pageX : e.pageX || e.clientX, i = J ? e.targetTouches[0].pageY : e.pageY || e.clientY;
            if ("undefined" == typeof _ && F && (_ = !!(_ || Math.abs(i - A.touches.startY) > Math.abs(n - A.touches.startX))), "undefined" != typeof _ || F ||
                    (_ = !!(_ || Math.abs(i - A.touches.startY) < Math.abs(n - A.touches.startX))), _) {
                return void(A.isTouched = !1);
            }
            if (F) {
                if (!t.swipeToNext && n < A.touches.startX || !t.swipeToPrev && n > A.touches.startX) {
                    return
                }
            } else if (!t.swipeToNext && i < A.touches.startY || !t.swipeToPrev && i > A.touches.startY) {
                return;
            }
            if (e.assignedToSwiper) {
                return void(A.isTouched = !1);
            }
            if (e.assignedToSwiper = !0, t.preventLinks && (A.allowLinks = !1), t.onSlideClick && (A.allowSlideClick = !1), t.autoplay &&
                    A.stopAutoplay(!0), !J || 1 === e.touches.length) {
                if (A.isMoved || (A.callPlugins("onTouchMoveStart"), t.loop && (A.fixLoop(), A.positions.start = A.getWrapperTranslate()), t.onTouchMoveStart &&
                        A.fireCallback(t.onTouchMoveStart, A)), A.isMoved = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, A.touches.current =
                                F ? n : i, A.positions.current = (A.touches.current - A.touches.start) * t.touchRatio + A.positions.start, A.positions.current >
                        0 && t.onResistanceBefore && A.fireCallback(t.onResistanceBefore, A, A.positions.current), A.positions.current < -r() &&
                        t.onResistanceAfter && A.fireCallback(t.onResistanceAfter, A, Math.abs(A.positions.current + r())), t.resistance &&
                        "100%" !== t.resistance) {
                    var o;
                    if (A.positions.current > 0 &&
                            (o = 1 - A.positions.current / j / 2, A.positions.current = .5 > o ? j / 2 : A.positions.current * o), A.positions.current < -r()) {
                        var a = (A.touches.current - A.touches.start) * t.touchRatio + (r() + A.positions.start);
                        o = (j + a) / j;
                        var s = A.positions.current - a * (1 - o) / 2, l = -r() - j / 2;
                        A.positions.current = l > s || 0 >= o ? l : s
                    }
                }
                if (t.resistance && "100%" === t.resistance &&
                        (A.positions.current > 0 && (!t.freeMode || t.freeModeFluid) && (A.positions.current = 0), A.positions.current < -r() &&
                        (!t.freeMode || t.freeModeFluid) && (A.positions.current = -r())), !t.followFinger) {
                    return;
                }
                if (t.moveStartThreshold) {
                    if (Math.abs(A.touches.current - A.touches.start) > t.moveStartThreshold || U) {
                        if (!U) {
                            return U = !0, void(A.touches.start = A.touches.current);
                        }
                        A.setWrapperTranslate(A.positions.current)
                    } else {
                        A.positions.current = A.positions.start;
                    }
                } else {
                    A.setWrapperTranslate(A.positions.current);
                }
                return (t.freeMode || t.watchActiveIndex) && A.updateActiveSlide(A.positions.current), t.grabCursor &&
                (A.container.style.cursor = "move", A.container.style.cursor = "grabbing", A.container.style.cursor = "-moz-grabbin", A.container.style.cursor =
                        "-webkit-grabbing"), K || (K = A.touches.current), Q || (Q = (new Date).getTime()), A.velocity =
                        (A.touches.current - K) / ((new Date).getTime() - Q) / 2, Math.abs(A.touches.current - K) < 2 && (A.velocity = 0), K =
                        A.touches.current, Q = (new Date).getTime(), A.callPlugins("onTouchMoveEnd"), t.onTouchMove && A.fireCallback(t.onTouchMove, A, e), !1
            }
        }
    }

    function v(e) {
        if (_ && A.swipeReset(), !t.onlyExternal && A.isTouched) {
            A.isTouched = !1, t.grabCursor &&
            (A.container.style.cursor = "move", A.container.style.cursor = "grab", A.container.style.cursor = "-moz-grab", A.container.style.cursor =
                    "-webkit-grab"), A.positions.current || 0 === A.positions.current || (A.positions.current = A.positions.start), t.followFinger &&
            A.setWrapperTranslate(A.positions.current), A.times.end = (new Date).getTime(), A.touches.diff =
                    A.touches.current - A.touches.start, A.touches.abs = Math.abs(A.touches.diff), A.positions.diff =
                    A.positions.current - A.positions.start, A.positions.abs = Math.abs(A.positions.diff);
            var n = A.positions.diff, i = A.positions.abs, o = A.times.end - A.times.start;
            5 > i && 300 > o && A.allowLinks === !1 && (t.freeMode || 0 === i || A.swipeReset(), t.preventLinks && (A.allowLinks = !0), t.onSlideClick &&
            (A.allowSlideClick = !0)), setTimeout(function () {
                "undefined" != typeof A && null !== A && (t.preventLinks && (A.allowLinks = !0), t.onSlideClick && (A.allowSlideClick = !0))
            }, 100);
            var a = r();
            if (!A.isMoved && t.freeMode) {
                return A.isMoved = !1, t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e), void A.callPlugins("onTouchEnd");
            }
            if (!A.isMoved || A.positions.current > 0 || A.positions.current < -a) {
                return A.swipeReset(), t.onTouchEnd &&
                A.fireCallback(t.onTouchEnd, A, e), void A.callPlugins("onTouchEnd");
            }
            if (A.isMoved = !1, t.freeMode) {
                if (t.freeModeFluid) {
                    var s, l = 1e3 * t.momentumRatio, u = A.velocity * l, c = A.positions.current + u, d = !1, p = 20 * Math.abs(A.velocity) *
                            t.momentumBounceRatio;
                    -a > c && (t.momentumBounce && A.support.transitions ? (-p > c + a && (c = -a - p), s = -a, d = !0, Z = !0) : c = -a), c > 0 &&
                    (t.momentumBounce && A.support.transitions ? (c > p && (c = p), s = 0, d = !0, Z = !0) : c = 0), 0 !== A.velocity &&
                    (l = Math.abs((c - A.positions.current) / A.velocity)), A.setWrapperTranslate(c), A.setWrapperTransition(l), t.momentumBounce && d &&
                    A.wrapperTransitionEnd(function () {
                        Z && (t.onMomentumBounce &&
                        A.fireCallback(t.onMomentumBounce, A), A.callPlugins("onMomentumBounce"), A.setWrapperTranslate(s), A.setWrapperTransition(300))
                    }), A.updateActiveSlide(c)
                }
                return (!t.freeModeFluid || o >= 300) && A.updateActiveSlide(A.positions.current), t.onTouchEnd &&
                A.fireCallback(t.onTouchEnd, A, e), void A.callPlugins("onTouchEnd")
            }
            H = 0 > n ? "toNext" : "toPrev", "toNext" === H && 300 >= o && (30 > i || !t.shortSwipes ? A.swipeReset() : A.swipeNext(!0, !0)), "toPrev" === H &&
            300 >= o && (30 > i || !t.shortSwipes ? A.swipeReset() : A.swipePrev(!0, !0));
            var f = 0;
            if ("auto" === t.slidesPerView) {
                for (var h, g = Math.abs(A.getWrapperTranslate()), m = 0, v = 0; v < A.slides.length; v++) {
                    if (h =
                                    F ? A.slides[v].getWidth(!0, t.roundLengths) : A.slides[v].getHeight(!0, t.roundLengths), m += h, m > g) {
                        f = h;
                        break
                    }
                }
                f > j && (f = j)
            } else {
                f = D * t.slidesPerView;
            }
            "toNext" === H && o > 300 && (i >= f * t.longSwipesRatio ? A.swipeNext(!0, !0) : A.swipeReset()), "toPrev" === H && o > 300 &&
            (i >= f * t.longSwipesRatio ? A.swipePrev(!0, !0) : A.swipeReset()), t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e), A.callPlugins("onTouchEnd")
        }
    }

    function y(e, t) {
        return e && e.getAttribute("class") && e.getAttribute("class").indexOf(t) > -1
    }

    function w(e) {
        var n = !1;
        do {
            y(e, t.noSwipingClass) && (n = !0), e = e.parentElement;
        } while (!n && e.parentElement && !y(e, t.wrapperClass));
        return !n && y(e, t.wrapperClass) && y(e, t.noSwipingClass) && (n = !0), n
    }

    function b(e, t) {
        var n, i = document.createElement("div");
        return i.innerHTML = t, n = i.firstChild, n.className += " " + e, n.outerHTML
    }

    function x(e, n, i) {
        function r() {
            var o = +new Date, d = o - a;
            s += l * d / (1e3 / 60), c = "toNext" === u ? s > e : e > s, c ?
                    (A.setWrapperTranslate(Math.ceil(s)), A._DOMAnimating = !0, window.setTimeout(function () {
                        r()
                    }, 1e3 / 60)) : (t.onSlideChangeEnd && ("to" === n ? i.runCallbacks === !0 && A.fireCallback(t.onSlideChangeEnd, A, u) :
                    A.fireCallback(t.onSlideChangeEnd, A, u)), A.setWrapperTranslate(e), A._DOMAnimating = !1)
        }

        var o = "to" === n && i.speed >= 0 ? i.speed : t.speed, a = +new Date;
        if (A.support.transitions || !t.DOMAnimation) {
            A.setWrapperTranslate(e), A.setWrapperTransition(o);
        } else {
            var s = A.getWrapperTranslate(), l = Math.ceil((e - s) / o * (1e3 / 60)), u = s > e ? "toNext" : "toPrev", c = "toNext" === u ? s > e : e > s;
            if (A._DOMAnimating) {
                return;
            }
            r()
        }
        A.updateActiveSlide(e), t.onSlideNext && "next" === n && i.runCallbacks === !0 && A.fireCallback(t.onSlideNext, A, e), t.onSlidePrev && "prev" === n &&
        i.runCallbacks === !0 && A.fireCallback(t.onSlidePrev, A, e), t.onSlideReset && "reset" === n && i.runCallbacks === !0 &&
        A.fireCallback(t.onSlideReset, A, e), "next" !== n && "prev" !== n && "to" !== n || i.runCallbacks !== !0 || T(n)
    }

    function T(e) {
        if (A.callPlugins("onSlideChangeStart"), t.onSlideChangeStart) {
            if (t.queueStartCallbacks && A.support.transitions) {
                if (A._queueStartCallbacks) {
                    return;
                }
                A._queueStartCallbacks = !0, A.fireCallback(t.onSlideChangeStart, A, e), A.wrapperTransitionEnd(function () {
                    A._queueStartCallbacks = !1
                })
            } else {
                A.fireCallback(t.onSlideChangeStart, A, e);
            }
        }
        if (t.onSlideChangeEnd) {
            if (A.support.transitions) {
                if (t.queueEndCallbacks) {
                    if (A._queueEndCallbacks) {
                        return;
                    }
                    A._queueEndCallbacks = !0, A.wrapperTransitionEnd(function (n) {
                        A.fireCallback(t.onSlideChangeEnd, n, e)
                    })
                } else {
                    A.wrapperTransitionEnd(function (n) {
                        A.fireCallback(t.onSlideChangeEnd, n, e)
                    });
                }
            } else {
                t.DOMAnimation || setTimeout(function () {
                    A.fireCallback(t.onSlideChangeEnd, A, e)
                }, 10)
            }
        }
    }

    function S() {
        var e = A.paginationButtons;
        if (e) {
            for (var t = 0; t < e.length; t++) {
                A.h.removeEventListener(e[t], "click", E)
            }
        }
    }

    function C() {
        var e = A.paginationButtons;
        if (e) {
            for (var t = 0; t < e.length; t++) {
                A.h.addEventListener(e[t], "click", E)
            }
        }
    }

    function E(e) {
        for (var n, i = e.target || e.srcElement, r = A.paginationButtons, o = 0; o < r.length; o++) {
            i === r[o] && (n = o);
        }
        t.autoplay && A.stopAutoplay(!0), A.swipeTo(n)
    }

    function k() {
        et = setTimeout(function () {
            t.loop ? (A.fixLoop(), A.swipeNext(!0, !0)) :
            A.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearTimeout(et), et = void 0) : A.swipeTo(0)), A.wrapperTransitionEnd(function () {
                "undefined" != typeof et && k()
            })
        }, t.autoplay)
    }

    function L() {
        A.calcSlides(), t.loader.slides.length > 0 && 0 === A.slides.length && A.loadSlides(), t.loop && A.createLoop(), A.init(), o(), t.pagination &&
        A.createPagination(!0), t.loop || t.initialSlide > 0 ? A.swipeTo(t.initialSlide, 0, !1) : A.updateActiveSlide(0), t.autoplay &&
        A.startAutoplay(), A.centerIndex = A.activeIndex, t.onSwiperCreated && A.fireCallback(t.onSwiperCreated, A), A.callPlugins("onSwiperCreated")
    }

    if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
        var N = HTMLElement.prototype;
        N.__defineGetter__ && N.__defineGetter__("outerHTML", function () {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    if (window.getComputedStyle || (window.getComputedStyle = function (e) {
                return this.el = e, this.getPropertyValue = function (t) {
                    var n = /(\-([a-z]){1})/g;
                    return "float" === t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function () {
                        return arguments[2].toUpperCase()
                    })), e.currentStyle[t] ? e.currentStyle[t] : null
                }, this
            }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
                for (var n = t || 0, i = this.length; i > n; n++) {
                    if (this[n] === e) {
                        return n;
                    }
                }
                return -1
            }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof e && (e.nodeType || 0 !== n(e).length)) {
        var A = this;
        A.touches = {start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0}, A.positions =
        {start: 0, abs: 0, diff: 0, current: 0}, A.times = {start: 0, end: 0}, A.id = (new Date).getTime(), A.container =
                e.nodeType ? e : n(e)[0], A.isTouched = !1, A.isMoved = !1, A.activeIndex = 0, A.centerIndex = 0, A.activeLoaderIndex = 0, A.activeLoopIndex =
                0, A.previousIndex = null, A.velocity = 0, A.snapGrid = [], A.slidesGrid = [], A.imagesToLoad = [], A.imagesLoaded = 0, A.wrapperLeft =
                0, A.wrapperRight = 0, A.wrapperTop = 0, A.wrapperBottom = 0, A.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
        var M, D, P, H, _, j, W = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: !0,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: .5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            roundLengths: !1,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1},
            swipeToPrev: !0,
            swipeToNext: !0,
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        t = t || {};
        for (var O in W) {
            if (O in t && "object" == typeof t[O]) {
                for (var I in W[O]) {
                    I in t[O] || (t[O][I] = W[O][I]);
                }
            } else {
                O in t || (t[O] = W[O]);
            }
        }
        A.params = t, t.scrollContainer && (t.freeMode = !0, t.freeModeFluid = !0), t.loop && (t.resistance = "100%");
        var F = "horizontal" === t.mode, R = ["mousedown", "mousemove", "mouseup"];
        A.browser.ie10 && (R = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), A.browser.ie11 &&
        (R = ["pointerdown", "pointermove", "pointerup"]), A.touchEvents = {
            touchStart: A.support.touch || !t.simulateTouch ? "touchstart" : R[0],
            touchMove: A.support.touch || !t.simulateTouch ? "touchmove" : R[1],
            touchEnd: A.support.touch || !t.simulateTouch ? "touchend" : R[2]
        };
        for (var B = A.container.childNodes.length - 1; B >= 0;
                B--) {
            if (A.container.childNodes[B].className) {
                for (var q = A.container.childNodes[B].className.split(/\s+/), z = 0; z < q.length; z++) {
                    q[z] ===
                    t.wrapperClass && (M = A.container.childNodes[B]);
                }
            }
        }
        A.wrapper = M, A._extendSwiperSlide = function (e) {
            return e.append = function () {
                return t.loop ? e.insertAfter(A.slides.length - A.loopedSlides) : (A.wrapper.appendChild(e), A.reInit()), e
            }, e.prepend = function () {
                return t.loop ? (A.wrapper.insertBefore(e, A.slides[A.loopedSlides]), A.removeLoopedSlides(), A.calcSlides(), A.createLoop()) :
                        A.wrapper.insertBefore(e, A.wrapper.firstChild), A.reInit(), e
            }, e.insertAfter = function (n) {
                if ("undefined" == typeof n) {
                    return !1;
                }
                var i;
                return t.loop ? (i = A.slides[n + 1 + A.loopedSlides], i ? A.wrapper.insertBefore(e, i) :
                        A.wrapper.appendChild(e), A.removeLoopedSlides(), A.calcSlides(), A.createLoop()) :
                        (i = A.slides[n + 1], A.wrapper.insertBefore(e, i)), A.reInit(), e
            }, e.clone = function () {
                return A._extendSwiperSlide(e.cloneNode(!0))
            }, e.remove = function () {
                A.wrapper.removeChild(e), A.reInit()
            }, e.html = function (t) {
                return "undefined" == typeof t ? e.innerHTML : (e.innerHTML = t, e)
            }, e.index = function () {
                for (var t, n = A.slides.length - 1; n >= 0; n--) {
                    e === A.slides[n] && (t = n);
                }
                return t
            }, e.isActive = function () {
                return e.index() === A.activeIndex ? !0 : !1
            }, e.swiperSlideDataStorage || (e.swiperSlideDataStorage = {}), e.getData = function (t) {
                return e.swiperSlideDataStorage[t]
            }, e.setData = function (t, n) {
                return e.swiperSlideDataStorage[t] = n, e
            }, e.data = function (t, n) {
                return "undefined" == typeof n ? e.getAttribute("data-" + t) : (e.setAttribute("data-" + t, n), e)
            }, e.getWidth = function (t, n) {
                return A.h.getWidth(e, t, n)
            }, e.getHeight = function (t, n) {
                return A.h.getHeight(e, t, n)
            }, e.getOffset = function () {
                return A.h.getOffset(e)
            }, e
        }, A.calcSlides = function (e) {
            var n = A.slides ? A.slides.length : !1;
            A.slides = [], A.displaySlides = [];
            for (var i = 0; i < A.wrapper.childNodes.length;
                    i++) {
                if (A.wrapper.childNodes[i].className) {
                    for (var r = A.wrapper.childNodes[i].className, o = r.split(/\s+/), l = 0; l < o.length;
                            l++) {
                        o[l] === t.slideClass && A.slides.push(A.wrapper.childNodes[i]);
                    }
                }
            }
            for (i = A.slides.length - 1; i >= 0; i--) {
                A._extendSwiperSlide(A.slides[i]);
            }
            n !== !1 && (n !== A.slides.length || e) &&
            (s(), a(), A.updateActiveSlide(), A.params.pagination && A.createPagination(), A.callPlugins("numberOfSlidesChanged"))
        }, A.createSlide = function (e, n, i) {
            n = n || A.params.slideClass, i = i || t.slideElement;
            var r = document.createElement(i);
            return r.innerHTML = e || "", r.className = n, A._extendSwiperSlide(r)
        }, A.appendSlide = function (e, t, n) {
            return e ? e.nodeType ? A._extendSwiperSlide(e).append() : A.createSlide(e, t, n).append() : void 0
        }, A.prependSlide = function (e, t, n) {
            return e ? e.nodeType ? A._extendSwiperSlide(e).prepend() : A.createSlide(e, t, n).prepend() : void 0
        }, A.insertSlideAfter = function (e, t, n, i) {
            return "undefined" == typeof e ? !1 : t.nodeType ? A._extendSwiperSlide(t).insertAfter(e) : A.createSlide(t, n, i).insertAfter(e)
        }, A.removeSlide = function (e) {
            if (A.slides[e]) {
                if (t.loop) {
                    if (!A.slides[e + A.loopedSlides]) {
                        return !1;
                    }
                    A.slides[e + A.loopedSlides].remove(), A.removeLoopedSlides(), A.calcSlides(), A.createLoop()
                } else {
                    A.slides[e].remove();
                }
                return !0
            }
            return !1
        }, A.removeLastSlide = function () {
            return A.slides.length > 0 ?
                    (t.loop ? (A.slides[A.slides.length - 1 - A.loopedSlides].remove(), A.removeLoopedSlides(), A.calcSlides(), A.createLoop()) :
                            A.slides[A.slides.length - 1].remove(), !0) : !1
        }, A.removeAllSlides = function () {
            for (var e = A.slides.length, t = A.slides.length - 1; t >= 0; t--) {
                A.slides[t].remove(), t === e - 1 && A.setWrapperTranslate(0)
            }
        }, A.getSlide = function (e) {
            return A.slides[e]
        }, A.getLastSlide = function () {
            return A.slides[A.slides.length - 1]
        }, A.getFirstSlide = function () {
            return A.slides[0]
        }, A.activeSlide = function () {
            return A.slides[A.activeIndex]
        }, A.fireCallback = function () {
            var e = arguments[0];
            if ("[object Array]" === Object.prototype.toString.call(e)) {
                for (var n = 0; n < e.length; n++) {
                    "function" == typeof e[n] &&
                    e[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            } else {
                "[object String]" === Object.prototype.toString.call(e) ?
                t["on" + e] && A.fireCallback(t["on" + e], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) :
                        e(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
        }, A.addCallback = function (e, t) {
            var n, r = this;
            return r.params["on" + e] ? i(this.params["on" + e]) ? this.params["on" + e].push(t) : "function" == typeof this.params["on" + e] ?
                    (n = this.params["on" + e], this.params["on" + e] = [], this.params["on" + e].push(n), this.params["on" + e].push(t)) : void 0 :
                    (this.params["on" + e] = [], this.params["on" + e].push(t))
        }, A.removeCallbacks = function (e) {
            A.params["on" + e] && (A.params["on" + e] = null)
        };
        var $ = [];
        for (var V in A.plugins) {
            if (t[V]) {
                var G = A.plugins[V](A, t[V]);
                G && $.push(G)
            }
        }
        A.callPlugins = function (e, t) {
            t || (t = {});
            for (var n = 0; n < $.length; n++) {
                e in $[n] && $[n][e](t)
            }
        }, !A.browser.ie10 && !A.browser.ie11 || t.onlyExternal || A.wrapper.classList.add("swiper-wp8-" + (F ? "horizontal" : "vertical")), t.freeMode &&
        (A.container.className += " swiper-free-mode"), A.initialized = !1, A.init = function (e, n) {
            var i = A.h.getWidth(A.container, !1, t.roundLengths), r = A.h.getHeight(A.container, !1, t.roundLengths);
            if (i !== A.width || r !== A.height || e) {
                A.width = i, A.height = r;
                var o, a, s, l, u, c, d;
                j = F ? i : r;
                var p = A.wrapper;
                if (e && A.calcSlides(n), "auto" === t.slidesPerView) {
                    var f = 0, h = 0;
                    t.slidesOffset > 0 &&
                    (p.style.paddingLeft = "", p.style.paddingRight = "", p.style.paddingTop = "", p.style.paddingBottom = ""), p.style.width =
                            "", p.style.height = "", t.offsetPxBefore > 0 &&
                    (F ? A.wrapperLeft = t.offsetPxBefore : A.wrapperTop = t.offsetPxBefore), t.offsetPxAfter > 0 &&
                    (F ? A.wrapperRight = t.offsetPxAfter : A.wrapperBottom = t.offsetPxAfter), t.centeredSlides && (F ?
                            (A.wrapperLeft = (j - this.slides[0].getWidth(!0, t.roundLengths)) / 2, A.wrapperRight =
                                    (j - A.slides[A.slides.length - 1].getWidth(!0, t.roundLengths)) / 2) :
                            (A.wrapperTop = (j - A.slides[0].getHeight(!0, t.roundLengths)) / 2, A.wrapperBottom =
                                    (j - A.slides[A.slides.length - 1].getHeight(!0, t.roundLengths)) / 2)), F ?
                            (A.wrapperLeft >= 0 && (p.style.paddingLeft = A.wrapperLeft + "px"), A.wrapperRight >= 0 &&
                            (p.style.paddingRight = A.wrapperRight + "px")) :
                            (A.wrapperTop >= 0 && (p.style.paddingTop = A.wrapperTop + "px"), A.wrapperBottom >= 0 &&
                            (p.style.paddingBottom = A.wrapperBottom + "px")), c = 0;
                    var g = 0;
                    for (A.snapGrid = [], A.slidesGrid = [], s = 0, d = 0; d < A.slides.length; d++) {
                        o = A.slides[d].getWidth(!0, t.roundLengths), a = A.slides[d].getHeight(!0, t.roundLengths), t.calculateHeight && (s = Math.max(s, a));
                        var m = F ? o : a;
                        if (t.centeredSlides) {
                            var v = d === A.slides.length - 1 ? 0 : A.slides[d + 1].getWidth(!0, t.roundLengths), y = d === A.slides.length - 1 ? 0 :
                                    A.slides[d + 1].getHeight(!0, t.roundLengths), w = F ? v : y;
                            if (m > j) {
                                if (t.slidesPerViewFit) {
                                    A.snapGrid.push(c + A.wrapperLeft), A.snapGrid.push(c + m - j + A.wrapperLeft);
                                } else {
                                    for (var b = 0;
                                            b <= Math.floor(m / (j + A.wrapperLeft)); b++) {
                                        A.snapGrid.push(0 === b ? c + A.wrapperLeft : c + A.wrapperLeft + j * b);
                                    }
                                }
                                A.slidesGrid.push(c + A.wrapperLeft)
                            } else {
                                A.snapGrid.push(g), A.slidesGrid.push(g);
                            }
                            g += m / 2 + w / 2
                        } else {
                            if (m > j) {
                                if (t.slidesPerViewFit) {
                                    A.snapGrid.push(c), A.snapGrid.push(c + m - j);
                                } else if (0 !== j) {
                                    for (var x = 0;
                                            x <= Math.floor(m / j); x++) {
                                        A.snapGrid.push(c + j * x);
                                    }
                                } else {
                                    A.snapGrid.push(c);
                                }
                            } else {
                                A.snapGrid.push(c);
                            }
                            A.slidesGrid.push(c)
                        }
                        c += m, f += o, h += a
                    }
                    t.calculateHeight && (A.height = s), F ? (P = f + A.wrapperRight + A.wrapperLeft, t.cssWidthAndHeight && "height" !== t.cssWidthAndHeight ||
                    (p.style.width = f + "px"), t.cssWidthAndHeight && "width" !== t.cssWidthAndHeight || (p.style.height = A.height + "px")) :
                            (t.cssWidthAndHeight && "height" !== t.cssWidthAndHeight || (p.style.width = A.width + "px"), t.cssWidthAndHeight &&
                            "width" !== t.cssWidthAndHeight || (p.style.height = h + "px"), P = h + A.wrapperTop + A.wrapperBottom)
                } else if (t.scrollContainer) {
                    p.style.width = "", p.style.height = "", l = A.slides[0].getWidth(!0, t.roundLengths), u =
                            A.slides[0].getHeight(!0, t.roundLengths), P = F ? l : u, p.style.width = l + "px", p.style.height = u + "px", D = F ? l : u;
                } else {
                    if (t.calculateHeight) {
                        for (s = 0, u = 0, F || (A.container.style.height = ""), p.style.height = "", d = 0; d < A.slides.length; d++) {
                            A.slides[d].style.height =
                                    "", s = Math.max(A.slides[d].getHeight(!0), s), F || (u += A.slides[d].getHeight(!0));
                        }
                        a = s, A.height = a, F ? u = a : (j = a, A.container.style.height = j + "px")
                    } else {
                        a = F ? A.height : A.height / t.slidesPerView, t.roundLengths && (a = Math.ceil(a)), u = F ? A.height : A.slides.length * a;
                    }
                    for (o = F ? A.width / t.slidesPerView : A.width, t.roundLengths && (o = Math.ceil(o)), l = F ? A.slides.length * o : A.width, D =
                            F ? o : a, t.offsetSlidesBefore > 0 &&
                    (F ? A.wrapperLeft = D * t.offsetSlidesBefore : A.wrapperTop = D * t.offsetSlidesBefore), t.offsetSlidesAfter > 0 &&
                    (F ? A.wrapperRight = D * t.offsetSlidesAfter : A.wrapperBottom = D * t.offsetSlidesAfter), t.offsetPxBefore > 0 &&
                    (F ? A.wrapperLeft = t.offsetPxBefore : A.wrapperTop = t.offsetPxBefore), t.offsetPxAfter > 0 &&
                    (F ? A.wrapperRight = t.offsetPxAfter : A.wrapperBottom = t.offsetPxAfter), t.centeredSlides &&
                    (F ? (A.wrapperLeft = (j - D) / 2, A.wrapperRight = (j - D) / 2) : (A.wrapperTop = (j - D) / 2, A.wrapperBottom = (j - D) / 2)), F ?
                            (A.wrapperLeft > 0 && (p.style.paddingLeft = A.wrapperLeft + "px"), A.wrapperRight > 0 &&
                            (p.style.paddingRight = A.wrapperRight + "px")) :
                            (A.wrapperTop > 0 && (p.style.paddingTop = A.wrapperTop + "px"), A.wrapperBottom > 0 &&
                            (p.style.paddingBottom = A.wrapperBottom + "px")), P =
                            F ? l + A.wrapperRight + A.wrapperLeft : u + A.wrapperTop + A.wrapperBottom, parseFloat(l) > 0 &&
                    (!t.cssWidthAndHeight || "height" === t.cssWidthAndHeight) && (p.style.width = l + "px"), parseFloat(u) > 0 &&
                    (!t.cssWidthAndHeight || "width" === t.cssWidthAndHeight) && (p.style.height = u + "px"), c = 0, A.snapGrid = [], A.slidesGrid = [], d = 0;
                            d < A.slides.length; d++) {
                        A.snapGrid.push(c), A.slidesGrid.push(c), c += D, parseFloat(o) > 0 &&
                        (!t.cssWidthAndHeight || "height" === t.cssWidthAndHeight) && (A.slides[d].style.width = o + "px"), parseFloat(a) > 0 &&
                        (!t.cssWidthAndHeight || "width" === t.cssWidthAndHeight) && (A.slides[d].style.height = a + "px")
                    }
                }
                A.initialized ? (A.callPlugins("onInit"), t.onInit && A.fireCallback(t.onInit, A)) :
                        (A.callPlugins("onFirstInit"), t.onFirstInit && A.fireCallback(t.onFirstInit, A)), A.initialized = !0
            }
        }, A.reInit = function (e) {
            A.init(!0, e)
        }, A.resizeFix = function (e) {
            A.callPlugins("beforeResizeFix"), A.init(t.resizeReInit || e), t.freeMode ?
            A.getWrapperTranslate() < -r() && (A.setWrapperTransition(0), A.setWrapperTranslate(-r())) :
                    (A.swipeTo(t.loop ? A.activeLoopIndex : A.activeIndex, 0, !1), t.autoplay &&
                    (A.support.transitions && "undefined" != typeof et ? "undefined" != typeof et && (clearTimeout(et), et = void 0, A.startAutoplay()) :
                    "undefined" != typeof tt && (clearInterval(tt), tt = void 0, A.startAutoplay()))), A.callPlugins("afterResizeFix")
        }, A.destroy = function (e) {
            var n = A.h.removeEventListener, i = "wrapper" === t.eventTarget ? A.wrapper : A.container;
            if (A.browser.ie10 || A.browser.ie11 ?
                            (n(i, A.touchEvents.touchStart, g), n(document, A.touchEvents.touchMove, m), n(document, A.touchEvents.touchEnd, v)) :
                            (A.support.touch && (n(i, "touchstart", g), n(i, "touchmove", m), n(i, "touchend", v)), t.simulateTouch &&
                            (n(i, "mousedown", g), n(document, "mousemove", m), n(document, "mouseup", v))), t.autoResize &&
                    n(window, "resize", A.resizeFix), s(), t.paginationClickable && S(), t.mousewheelControl && A._wheelEvent &&
                    n(A.container, A._wheelEvent, u), t.keyboardControl && n(document, "keydown", l), t.autoplay && A.stopAutoplay(), e) {
                A.wrapper.removeAttribute("style");
                for (var r = 0; r < A.slides.length; r++) {
                    A.slides[r].removeAttribute("style")
                }
            }
            A.callPlugins("onDestroy"), window.jQuery && window.jQuery(A.container).data("swiper") &&
            window.jQuery(A.container).removeData("swiper"), window.Zepto && window.Zepto(A.container).data("swiper") &&
            window.Zepto(A.container).removeData("swiper"), A = null
        }, A.disableKeyboardControl = function () {
            t.keyboardControl = !1, A.h.removeEventListener(document, "keydown", l)
        }, A.enableKeyboardControl = function () {
            t.keyboardControl = !0, A.h.addEventListener(document, "keydown", l)
        };
        var X = (new Date).getTime();
        if (A.disableMousewheelControl = function () {
                    return A._wheelEvent ? (t.mousewheelControl = !1, A.h.removeEventListener(A.container, A._wheelEvent, u), !0) : !1
                }, A.enableMousewheelControl = function () {
                    return A._wheelEvent ? (t.mousewheelControl = !0, A.h.addEventListener(A.container, A._wheelEvent, u), !0) : !1
                }, t.grabCursor) {
            var Y = A.container.style;
            Y.cursor = "move", Y.cursor = "grab", Y.cursor = "-moz-grab", Y.cursor = "-webkit-grab"
        }
        A.allowSlideClick = !0, A.allowLinks = !0;
        var U, K, Q, J = !1, Z = !0;
        A.swipeNext = function (e, n) {
            "undefined" == typeof e && (e = !0), !n && t.loop && A.fixLoop(), !n && t.autoplay && A.stopAutoplay(!0), A.callPlugins("onSwipeNext");
            var i = A.getWrapperTranslate().toFixed(2), o = i;
            if ("auto" === t.slidesPerView) {
                for (var a = 0; a < A.snapGrid.length; a++) {
                    if (-i >= A.snapGrid[a].toFixed(2) && -i < A.snapGrid[a + 1].toFixed(2)) {
                        o = -A.snapGrid[a + 1];
                        break
                    }
                }
            } else {
                var s = D * t.slidesPerGroup;
                o = -(Math.floor(Math.abs(i) / Math.floor(s)) * s + s)
            }
            return o < -r() && (o = -r()), o === i ? !1 : (x(o, "next", {runCallbacks: e}), !0)
        }, A.swipePrev = function (e, n) {
            "undefined" == typeof e && (e = !0), !n && t.loop && A.fixLoop(), !n && t.autoplay && A.stopAutoplay(!0), A.callPlugins("onSwipePrev");
            var i, r = Math.ceil(A.getWrapperTranslate());
            if ("auto" === t.slidesPerView) {
                i = 0;
                for (var o = 1; o < A.snapGrid.length; o++) {
                    if (-r === A.snapGrid[o]) {
                        i = -A.snapGrid[o - 1];
                        break
                    }
                    if (-r > A.snapGrid[o] && -r < A.snapGrid[o + 1]) {
                        i = -A.snapGrid[o];
                        break
                    }
                }
            } else {
                var a = D * t.slidesPerGroup;
                i = -(Math.ceil(-r / a) - 1) * a
            }
            return i > 0 && (i = 0), i === r ? !1 : (x(i, "prev", {runCallbacks: e}), !0)
        }, A.swipeReset = function (e) {
            "undefined" == typeof e && (e = !0), A.callPlugins("onSwipeReset");
            var n, i = A.getWrapperTranslate(), o = D * t.slidesPerGroup;
            if (-r(), "auto" === t.slidesPerView) {
                n = 0;
                for (var a = 0; a < A.snapGrid.length; a++) {
                    if (-i === A.snapGrid[a]) {
                        return;
                    }
                    if (-i >= A.snapGrid[a] && -i < A.snapGrid[a + 1]) {
                        n = A.positions.diff > 0 ? -A.snapGrid[a + 1] : -A.snapGrid[a];
                        break
                    }
                }
                -i >= A.snapGrid[A.snapGrid.length - 1] && (n = -A.snapGrid[A.snapGrid.length - 1]), i <= -r() && (n = -r())
            } else {
                n = 0 > i ? Math.round(i / o) * o : 0, i <= -r() && (n = -r());
            }
            return t.scrollContainer && (n = 0 > i ? i : 0), n < -r() && (n = -r()), t.scrollContainer && j > D && (n = 0), n === i ? !1 :
                    (x(n, "reset", {runCallbacks: e}), !0)
        }, A.swipeTo = function (e, n, i) {
            e = parseInt(e, 10), A.callPlugins("onSwipeTo", {index: e, speed: n}), t.loop && (e += A.loopedSlides);
            var o = A.getWrapperTranslate();
            if (!(e > A.slides.length - 1 || 0 > e)) {
                var a;
                return a = "auto" === t.slidesPerView ? -A.slidesGrid[e] : -e * D, a < -r() && (a = -r()), a === o ? !1 :
                        ("undefined" == typeof i && (i = !0), x(a, "to", {index: e, speed: n, runCallbacks: i}), !0)
            }
        }, A._queueStartCallbacks = !1, A._queueEndCallbacks = !1, A.updateActiveSlide = function (e) {
            if (A.initialized && 0 !== A.slides.length) {
                A.previousIndex = A.activeIndex, "undefined" == typeof e && (e = A.getWrapperTranslate()), e > 0 && (e = 0);
                var n;
                if ("auto" === t.slidesPerView) {
                    if (A.activeIndex = A.slidesGrid.indexOf(-e), A.activeIndex < 0) {
                        for (n = 0; n < A.slidesGrid.length - 1 && !(-e > A.slidesGrid[n] && -e < A.slidesGrid[n + 1]); n++) {
                            ;
                        }
                        var i = Math.abs(A.slidesGrid[n] + e), r = Math.abs(A.slidesGrid[n + 1] + e);
                        A.activeIndex = r >= i ? n : n + 1
                    }
                } else {
                    A.activeIndex = Math[t.visibilityFullFit ? "ceil" : "round"](-e / D);
                }
                if (A.activeIndex === A.slides.length && (A.activeIndex = A.slides.length - 1), A.activeIndex < 0 &&
                        (A.activeIndex = 0), A.slides[A.activeIndex]) {
                    if (A.calcVisibleSlides(e), A.support.classList) {
                        var o;
                        for (n = 0; n < A.slides.length; n++) {
                            o = A.slides[n], o.classList.remove(t.slideActiveClass), A.visibleSlides.indexOf(o) >= 0 ?
                                    o.classList.add(t.slideVisibleClass) : o.classList.remove(t.slideVisibleClass);
                        }
                        A.slides[A.activeIndex].classList.add(t.slideActiveClass)
                    } else {
                        var a = new RegExp("\\s*" + t.slideActiveClass), s = new RegExp("\\s*" + t.slideVisibleClass);
                        for (n = 0; n < A.slides.length; n++) {
                            A.slides[n].className =
                                    A.slides[n].className.replace(a, "").replace(s, ""), A.visibleSlides.indexOf(A.slides[n]) >= 0 &&
                            (A.slides[n].className += " " + t.slideVisibleClass);
                        }
                        A.slides[A.activeIndex].className += " " + t.slideActiveClass
                    }
                    if (t.loop) {
                        var l = A.loopedSlides;
                        A.activeLoopIndex = A.activeIndex - l, A.activeLoopIndex >= A.slides.length - 2 * l &&
                        (A.activeLoopIndex = A.slides.length - 2 * l - A.activeLoopIndex), A.activeLoopIndex < 0 &&
                        (A.activeLoopIndex = A.slides.length - 2 * l + A.activeLoopIndex), A.activeLoopIndex < 0 && (A.activeLoopIndex = 0)
                    } else {
                        A.activeLoopIndex = A.activeIndex;
                    }
                    t.pagination && A.updatePagination(e)
                }
            }
        }, A.createPagination = function (e) {
            if (t.paginationClickable && A.paginationButtons && S(), A.paginationContainer =
                            t.pagination.nodeType ? t.pagination : n(t.pagination)[0], t.createPagination) {
                var i = "", r = A.slides.length, o = r;
                t.loop && (o -= 2 * A.loopedSlides);
                for (var a = 0; o > a; a++) {
                    i += "<" + t.paginationElement + ' class="' + t.paginationElementClass + '"></' + t.paginationElement + ">";
                }
                A.paginationContainer.innerHTML = i
            }
            A.paginationButtons = n("." + t.paginationElementClass, A.paginationContainer), e ||
            A.updatePagination(), A.callPlugins("onCreatePagination"), t.paginationClickable && C()
        }, A.updatePagination = function (e) {
            if (t.pagination && !(A.slides.length < 1)) {
                var i = n("." + t.paginationActiveClass, A.paginationContainer);
                if (i) {
                    var r = A.paginationButtons;
                    if (0 !== r.length) {
                        for (var o = 0; o < r.length; o++) {
                            r[o].className = t.paginationElementClass;
                        }
                        var a = t.loop ? A.loopedSlides : 0;
                        if (t.paginationAsRange) {
                            A.visibleSlides || A.calcVisibleSlides(e);
                            var s, l = [];
                            for (s = 0; s < A.visibleSlides.length; s++) {
                                var u = A.slides.indexOf(A.visibleSlides[s]) - a;
                                t.loop && 0 > u && (u = A.slides.length - 2 * A.loopedSlides + u), t.loop && u >= A.slides.length - 2 * A.loopedSlides &&
                                (u = A.slides.length - 2 * A.loopedSlides - u, u = Math.abs(u)), l.push(u)
                            }
                            for (s = 0; s < l.length; s++) {
                                r[l[s]] && (r[l[s]].className += " " + t.paginationVisibleClass);
                            }
                            t.loop ? void 0 !== r[A.activeLoopIndex] && (r[A.activeLoopIndex].className += " " + t.paginationActiveClass) :
                            r[A.activeIndex] && (r[A.activeIndex].className += " " + t.paginationActiveClass)
                        } else {
                            t.loop ?
                            r[A.activeLoopIndex] && (r[A.activeLoopIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass) :
                            r[A.activeIndex] && (r[A.activeIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass)
                        }
                    }
                }
            }
        }, A.calcVisibleSlides = function (e) {
            var n = [], i = 0, r = 0, o = 0;
            F && A.wrapperLeft > 0 && (e += A.wrapperLeft), !F && A.wrapperTop > 0 && (e += A.wrapperTop);
            for (var a = 0; a < A.slides.length; a++) {
                i += r, r =
                        "auto" === t.slidesPerView ? F ? A.h.getWidth(A.slides[a], !0, t.roundLengths) : A.h.getHeight(A.slides[a], !0, t.roundLengths) : D, o =
                        i + r;
                var s = !1;
                t.visibilityFullFit ? (i >= -e && -e + j >= o && (s = !0), -e >= i && o >= -e + j && (s = !0)) :
                        (o > -e && -e + j >= o && (s = !0), i >= -e && -e + j > i && (s = !0), -e > i && o > -e + j && (s = !0)), s && n.push(A.slides[a])
            }
            0 === n.length && (n = [A.slides[A.activeIndex]]), A.visibleSlides = n
        };
        var et, tt;
        A.startAutoplay = function () {
            if (A.support.transitions) {
                if ("undefined" != typeof et) {
                    return !1;
                }
                if (!t.autoplay) {
                    return;
                }
                A.callPlugins("onAutoplayStart"), t.onAutoplayStart && A.fireCallback(t.onAutoplayStart, A), k()
            } else {
                if ("undefined" != typeof tt) {
                    return !1;
                }
                if (!t.autoplay) {
                    return;
                }
                A.callPlugins("onAutoplayStart"), t.onAutoplayStart && A.fireCallback(t.onAutoplayStart, A), tt = setInterval(function () {
                    t.loop ? (A.fixLoop(), A.swipeNext(!0, !0)) :
                    A.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearInterval(tt), tt = void 0) : A.swipeTo(0))
                }, t.autoplay)
            }
        }, A.stopAutoplay = function (e) {
            if (A.support.transitions) {
                if (!et) {
                    return;
                }
                et && clearTimeout(et), et = void 0, e && !t.autoplayDisableOnInteraction && A.wrapperTransitionEnd(function () {
                    k()
                }), A.callPlugins("onAutoplayStop"), t.onAutoplayStop && A.fireCallback(t.onAutoplayStop, A)
            } else {
                tt && clearInterval(tt), tt = void 0, A.callPlugins("onAutoplayStop"), t.onAutoplayStop && A.fireCallback(t.onAutoplayStop, A)
            }
        }, A.loopCreated = !1, A.removeLoopedSlides = function () {
            if (A.loopCreated) {
                for (var e = 0; e < A.slides.length; e++) {
                    A.slides[e].getData("looped") === !0 && A.wrapper.removeChild(A.slides[e])
                }
            }
        }, A.createLoop = function () {
            if (0 !== A.slides.length) {
                A.loopedSlides = "auto" === t.slidesPerView ? t.loopedSlides || 1 : t.slidesPerView + t.loopAdditionalSlides, A.loopedSlides >
                A.slides.length && (A.loopedSlides = A.slides.length);
                var e, n = "", i = "", r = "", o = A.slides.length, a = Math.floor(A.loopedSlides / o), s = A.loopedSlides % o;
                for (e = 0; a * o > e; e++) {
                    var l = e;
                    if (e >= o) {
                        var u = Math.floor(e / o);
                        l = e - o * u
                    }
                    r += A.slides[l].outerHTML
                }
                for (e = 0; s > e; e++) {
                    i += b(t.slideDuplicateClass, A.slides[e].outerHTML);
                }
                for (e = o - s; o > e; e++) {
                    n += b(t.slideDuplicateClass, A.slides[e].outerHTML);
                }
                var c = n + r + M.innerHTML + r + i;
                for (M.innerHTML = c, A.loopCreated = !0, A.calcSlides(), e = 0; e < A.slides.length; e++) {
                    (e < A.loopedSlides ||
                    e >= A.slides.length - A.loopedSlides) && A.slides[e].setData("looped", !0);
                }
                A.callPlugins("onCreateLoop")
            }
        }, A.fixLoop = function () {
            var e;
            A.activeIndex < A.loopedSlides ? (e = A.slides.length - 3 * A.loopedSlides + A.activeIndex, A.swipeTo(e, 0, !1)) :
            ("auto" === t.slidesPerView && A.activeIndex >= 2 * A.loopedSlides || A.activeIndex > A.slides.length - 2 * t.slidesPerView) &&
            (e = -A.slides.length + A.activeIndex + A.loopedSlides, A.swipeTo(e, 0, !1))
        }, A.loadSlides = function () {
            var e = "";
            A.activeLoaderIndex = 0;
            for (var n = t.loader.slides, i = t.loader.loadAllSlides ? n.length : t.slidesPerView * (1 + t.loader.surroundGroups), r = 0; i > r; r++) {
                e +=
                        "outer" === t.loader.slidesHTMLType ? n[r] :
                        "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + r + '">' + n[r] + "</" + t.slideElement + ">";
            }
            A.wrapper.innerHTML = e, A.calcSlides(!0), t.loader.loadAllSlides || A.wrapperTransitionEnd(A.reloadSlides, !0)
        }, A.reloadSlides = function () {
            var e = t.loader.slides, n = parseInt(A.activeSlide().data("swiperindex"), 10);
            if (!(0 > n || n > e.length - 1)) {
                A.activeLoaderIndex = n;
                var i = Math.max(0, n - t.slidesPerView * t.loader.surroundGroups), r = Math.min(n + t.slidesPerView * (1 + t.loader.surroundGroups) - 1,
                        e.length - 1);
                if (n > 0) {
                    var o = -D * (n - i);
                    A.setWrapperTranslate(o), A.setWrapperTransition(0)
                }
                var a;
                if ("reload" === t.loader.logic) {
                    A.wrapper.innerHTML = "";
                    var s = "";
                    for (a = i; r >= a; a++) {
                        s += "outer" === t.loader.slidesHTMLType ? e[a] :
                        "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + a + '">' + e[a] + "</" + t.slideElement + ">";
                    }
                    A.wrapper.innerHTML = s
                } else {
                    var l = 1e3, u = 0;
                    for (a = 0; a < A.slides.length; a++) {
                        var c = A.slides[a].data("swiperindex");
                        i > c || c > r ? A.wrapper.removeChild(A.slides[a]) : (l = Math.min(c, l), u = Math.max(c, u))
                    }
                    for (a = i; r >= a; a++) {
                        var d;
                        l > a && (d = document.createElement(t.slideElement), d.className = t.slideClass, d.setAttribute("data-swiperindex", a), d.innerHTML =
                                e[a], A.wrapper.insertBefore(d, A.wrapper.firstChild)), a > u &&
                        (d = document.createElement(t.slideElement), d.className = t.slideClass, d.setAttribute("data-swiperindex", a), d.innerHTML =
                                e[a], A.wrapper.appendChild(d))
                    }
                }
                A.reInit(!0)
            }
        }, L()
    }
};
Swiper.prototype = {
    plugins: {}, wrapperTransitionEnd: function (e, t) {
        "use strict";
        function n(s) {
            if (s.target === o && (e(r), r.params.queueEndCallbacks && (r._queueEndCallbacks = !1), !t)) {
                for (i = 0; i < a.length; i++) {
                    r.h.removeEventListener(o,
                            a[i], n)
                }
            }
        }

        var i, r = this, o = r.wrapper, a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (e) {
            for (i = 0; i < a.length; i++) {
                r.h.addEventListener(o, a[i], n)
            }
        }
    }, getWrapperTranslate: function (e) {
        "use strict";
        var t, n, i, r, o = this.wrapper;
        return "undefined" == typeof e && (e = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ?
                (i = window.getComputedStyle(o, null), window.WebKitCSSMatrix ? r = new WebKitCSSMatrix("none" === i.webkitTransform ? "" : i.webkitTransform) :
                        (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform ||
                                i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = r.toString().split(",")), "x" === e &&
                (n = window.WebKitCSSMatrix ? r.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === e &&
                (n = window.WebKitCSSMatrix ? r.m42 : parseFloat(16 === t.length ? t[13] : t[5]))) :
                ("x" === e && (n = parseFloat(o.style.left, 10) || 0), "y" === e && (n = parseFloat(o.style.top, 10) || 0)), n || 0
    }, setWrapperTranslate: function (e, t, n) {
        "use strict";
        var i, r = this.wrapper.style, o = {x: 0, y: 0, z: 0};
        3 === arguments.length ? (o.x = e, o.y = t, o.z = n) :
                ("undefined" == typeof t && (t = "horizontal" === this.params.mode ? "x" : "y"), o[t] = e), this.support.transforms &&
        this.params.useCSS3Transforms ? (i = this.support.transforms3d ? "translate3d(" + o.x + "px, " + o.y + "px, " + o.z + "px)" :
        "translate(" + o.x + "px, " + o.y + "px)", r.webkitTransform = r.MsTransform = r.msTransform = r.MozTransform = r.OTransform = r.transform = i) :
                (r.left = o.x + "px", r.top = o.y + "px"), this.callPlugins("onSetWrapperTransform", o), this.params.onSetWrapperTransform &&
        this.fireCallback(this.params.onSetWrapperTransform, this, o)
    }, setWrapperTransition: function (e) {
        "use strict";
        var t = this.wrapper.style;
        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration =
                t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e / 1e3 + "s", this.callPlugins("onSetWrapperTransition",
                {duration: e}), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, e)
    }, h: {
        getWidth: function (e, t, n) {
            "use strict";
            var i = window.getComputedStyle(e, null).getPropertyValue("width"), r = parseFloat(i);
            return (isNaN(r) || i.indexOf("%") > 0 || 0 > r) && (r =
                    e.offsetWidth - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) -
                    parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), t && (r +=
                    parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) +
                    parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), n ? Math.ceil(r) : r
        }, getHeight: function (e, t, n) {
            "use strict";
            if (t) {
                return e.offsetHeight;
            }
            var i = window.getComputedStyle(e, null).getPropertyValue("height"), r = parseFloat(i);
            return (isNaN(r) || i.indexOf("%") > 0 || 0 > r) && (r =
                    e.offsetHeight - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) -
                    parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), t && (r +=
                    parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) +
                    parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), n ? Math.ceil(r) : r
        }, getOffset: function (e) {
            "use strict";
            var t = e.getBoundingClientRect(), n = document.body, i = e.clientTop || n.clientTop || 0, r = e.clientLeft || n.clientLeft ||
                    0, o = window.pageYOffset || e.scrollTop, a = window.pageXOffset || e.scrollLeft;
            return document.documentElement && !window.pageYOffset && (o = document.documentElement.scrollTop, a = document.documentElement.scrollLeft), {
                top: t.top + o - i, left: t.left + a - r
            }
        }, windowWidth: function () {
            "use strict";
            return window.innerWidth ? window.innerWidth :
                    document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
        }, windowHeight: function () {
            "use strict";
            return window.innerHeight ? window.innerHeight :
                    document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
        }, windowScroll: function () {
            "use strict";
            return "undefined" != typeof pageYOffset ? {left: window.pageXOffset, top: window.pageYOffset} :
                    document.documentElement ? {left: document.documentElement.scrollLeft, top: document.documentElement.scrollTop} : void 0
        }, addEventListener: function (e, t, n, i) {
            "use strict";
            "undefined" == typeof i && (i = !1), e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
        }, removeEventListener: function (e, t, n, i) {
            "use strict";
            "undefined" == typeof i && (i = !1), e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
        }
    }, setTransform: function (e, t) {
        "use strict";
        var n = e.style;
        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = t
    }, setTranslate: function (e, t) {
        "use strict";
        var n = e.style, i = {x: t.x || 0, y: t.y || 0, z: t.z || 0}, r = this.support.transforms3d ? "translate3d(" + i.x + "px," + i.y + "px," + i.z + "px)" :
        "translate(" + i.x + "px," + i.y + "px)";
        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = r, this.support.transforms ||
        (n.left = i.x + "px", n.top = i.y + "px")
    }, setTransition: function (e, t) {
        "use strict";
        var n = e.style;
        n.webkitTransitionDuration =
                n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = t + "ms"
    }, support: {
        touch: window.Modernizr && Modernizr.touch === !0 || function () {
            "use strict";
            return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
            "use strict";
            var e = document.createElement("div").style;
            return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
        }(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
            "use strict";
            var e = document.createElement("div").style;
            return "transform"in e || "WebkitTransform"in e || "MozTransform"in e || "msTransform"in e || "MsTransform"in e || "OTransform"in e
        }(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
            "use strict";
            var e = document.createElement("div").style;
            return "transition"in e || "WebkitTransition"in e || "MozTransition"in e || "msTransition"in e || "MsTransition"in e || "OTransition"in e
        }(), classList: function () {
            "use strict";
            var e = document.createElement("div");
            return "classList"in e
        }()
    }, browser: {
        ie8: function () {
            "use strict";
            var e = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var t = navigator.userAgent, n = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                null !== n.exec(t) && (e = parseFloat(RegExp.$1))
            }
            return -1 !== e && 9 > e
        }(), ie10: window.navigator.msPointerEnabled, ie11: window.navigator.pointerEnabled
    }
}, (window.jQuery || window.Zepto) && !function (e) {
    "use strict";
    e.fn.swiper = function (t) {
        var n;
        return this.each(function (i) {
            var r = e(this), o = new Swiper(r[0], t);
            i || (n = o), r.data("swiper", o)
        }), n
    }
}(window.jQuery || window.Zepto), "undefined" != typeof module && (module.exports = Swiper), "function" == typeof define && define.amd &&
define([], function () {
    "use strict";
    return Swiper
}), function () {
    var e, t, n, i, r, o, a, s, l, u;
    e = window.device, window.device = {}, n = window.document.documentElement, u = window.navigator.userAgent.toLowerCase(), device.ios = function () {
        return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function () {
        return i("iphone")
    }, device.ipod = function () {
        return i("ipod")
    }, device.ipad = function () {
        return i("ipad")
    }, device.android = function () {
        return i("android")
    }, device.androidPhone = function () {
        return device.android() && i("mobile")
    }, device.androidTablet = function () {
        return device.android() && !i("mobile")
    }, device.blackberry = function () {
        return i("blackberry") || i("bb10") || i("rim")
    }, device.blackberryPhone = function () {
        return device.blackberry() && !i("tablet")
    }, device.blackberryTablet = function () {
        return device.blackberry() && i("tablet")
    }, device.windows = function () {
        return i("windows")
    }, device.windowsPhone = function () {
        return device.windows() && i("phone")
    }, device.windowsTablet = function () {
        return device.windows() && i("touch") && !device.windowsPhone()
    }, device.fxos = function () {
        return (i("(mobile;") || i("(tablet;")) && i("; rv:")
    }, device.fxosPhone = function () {
        return device.fxos() && i("mobile")
    }, device.fxosTablet = function () {
        return device.fxos() && i("tablet")
    }, device.meego = function () {
        return i("meego")
    }, device.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, device.nodeWebkit = function () {
        return "object" == typeof window.process
    }, device.mobile = function () {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() ||
                device.meego()
    }, device.tablet = function () {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.desktop = function () {
        return !device.tablet() && !device.mobile()
    }, device.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, device.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, device.noConflict = function () {
        return window.device = e, this
    }, i = function (e) {
        return -1 !== u.indexOf(e)
    }, o = function (e) {
        var t;
        return t = new RegExp(e, "i"), n.className.match(t)
    }, t = function (e) {
        return o(e) ? void 0 : n.className += " " + e
    }, s = function (e) {
        return o(e) ? n.className = n.className.replace(e, "") : void 0
    }, device.ios() ? device.ipad() ? t("ios ipad tablet") : device.iphone() ? t("ios iphone mobile") : device.ipod() && t("ios ipod mobile") :
            t(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" :
                    device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" :
                            device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" :
                                    device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" :
                                            device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() &&
    t("cordova"), r = function () {
        return device.landscape() ? (s("portrait"), t("landscape")) : (s("landscape"), t("portrait"))
    }, l = "onorientationchange"in window, a = l ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, r, !1) :
            window.attachEvent ? window.attachEvent(a, r) : window[a] = r, r()
}.call(this), !function (e, t) {
    "use strict";
    var n, i, r, o = "._tap", a = "._tapActive", s = "tap", l = "clientX clientY screenX screenY pageX pageY".split(" "), u = {
        count: 0,
        event: 0
    }, c = function (e, n) {
        var i = n.originalEvent, r = t.Event(i);
        r.type = e;
        for (var o = 0, a = l.length; a > o; o++) {
            r[l[o]] = n[l[o]];
        }
        return r
    }, d = function (e) {
        if (e.isTrigger) {
            return !1;
        }
        var n = u.event, i = Math.abs(e.pageX - n.pageX), r = Math.abs(e.pageY - n.pageY), o = Math.max(i, r);
        return e.timeStamp - n.timeStamp < t.tap.TIME_DELTA && o < t.tap.POSITION_DELTA && (!n.touches || 1 === u.count) && h.isTracking
    }, p = function (e) {
        if (!r) {
            return !1;
        }
        var n = Math.abs(e.pageX - r.pageX), i = Math.abs(e.pageY - r.pageY), o = Math.max(n, i);
        return Math.abs(e.timeStamp - r.timeStamp) < 750 && o < t.tap.POSITION_DELTA
    }, f = function (e) {
        if (0 === e.type.indexOf("touch")) {
            e.touches = e.originalEvent.changedTouches;
            for (var t = e.touches[0], n = 0, i = l.length; i > n; n++) {
                e[l[n]] = t[l[n]]
            }
        }
        e.timeStamp = Date.now ? Date.now() : +new Date
    }, h = {
        isEnabled: !1, isTracking: !1, enable: function () {
            h.isEnabled || (h.isEnabled = !0, n = t(e.body).on("touchstart" + o, h.onStart).on("mousedown" + o, h.onStart).on("click" + o, h.onClick))
        }, disable: function () {
            h.isEnabled && (h.isEnabled = !1, n.off(o))
        }, onStart: function (e) {
            e.isTrigger || (f(e), (!t.tap.LEFT_BUTTON_ONLY || e.touches || 1 === e.which) && (e.touches && (u.count = e.touches.length), h.isTracking ||
            (e.touches || !p(e)) &&
            (h.isTracking = !0, u.event = e, e.touches ? (r = e, n.on("touchend" + o + a, h.onEnd).on("touchcancel" + o + a, h.onCancel)) :
                    n.on("mouseup" + o + a, h.onEnd))))
        }, onEnd: function (e) {
            var n;
            e.isTrigger || (f(e), d(e) && (n = c(s, e), i = n, t(u.event.target).trigger(n)), h.onCancel(e))
        }, onCancel: function (e) {
            e && "touchcancel" === e.type && e.preventDefault(), h.isTracking = !1, n.off(a)
        }, onClick: function (e) {
            return !e.isTrigger && i && i.isDefaultPrevented() && i.target === e.target && i.pageX === e.pageX && i.pageY === e.pageY &&
            e.timeStamp - i.timeStamp < 750 ? (i = null, !1) : void 0
        }
    };
    t(e).ready(h.enable), t.tap = {POSITION_DELTA: 10, TIME_DELTA: 400, LEFT_BUTTON_ONLY: !0}
}(document, jQuery), $(function () {
    "use strict";
    var e = $("#products"), t = e.find(".js-control"), n = e.swiper({speed: 700, mode: "horizontal", loop: !0});
    t.on("tap", function () {
        "next" === $(this).data("dir") ? n.swipeNext() : n.swipePrev()
    });
    var i = $(window), r = $("#video"), o = $("#mouse"), a = $("#paralax"), s = $("#vitamins"), l = $("#minerals"), u = $(".js-popup"), c = $(".js-nav-link"), d = !1, p = "b-mouse_hidden";
    $(".js-show-popup").on("tap", function () {
        u.addClass("b-popup_visible"), o.addClass(p)
    }), $(".js-hide-popup").on("tap", function () {
        u.removeClass("b-popup_visible"), $(".js-video")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
    }), u.on("tap", function (e) {
        var t = $(e.target);
        0 === t.closest(".js-popup-inner").length && $(".js-hide-popup").trigger("tap")
    }), i.on("scroll", function () {
        var e = i.scrollTop();
        if (!u.hasClass("b-popup_visible")) {
            var t = !1;
            t = r.length ? e + i.height() > r.offset().top + r.height() : e > 500, o.toggleClass(p, t)
        }
        if (!d && a.length) {
            var n = e + i.height() / 4 - a.offset().top;
            n > 0 && (s.addClass("b-vitamins_animate"), l.addClass("b-minerals_animate"), d = !0)
        }
        var f = c.length - 1;
        c.each(function (t) {
            var n = $(this).data("panel"), r = $("#" + n), o = r.offset().top;
            return e + i.height() / 2 < o ? (f = 0 === t ? 0 : t - 1, !1) : void 0
        }), c.removeClass("b-pages__item_state_active").eq(f).addClass("b-pages__item_state_active")
    }).trigger("scroll"), c.on("click", function () {
        var e = $(this).data("panel");
        $("html,body").animate({scrollTop: $("#" + e).offset().top}, 500, function () {
            i.trigger("scroll")
        })
    }), $(".js-social").on("click", function (e) {
        e.preventDefault();
        var t = $(this), n = t.data("type"), i = $('meta[property="og:url"]').attr("content"), r = $('meta[property="og:title"]').attr("content"), o = $('meta[property="og:description"]').attr("content"), a = $('meta[property="og:image"]').attr("content"), s = "";
        switch (n) {
            case"fb":
                s = "http://www.facebook.com/sharer.php?s=100", s += "&p[title]=" + r, s += "&p[summary]=" + o, s += "&p[url]=" + i, s += "&p[images][0]=" + a;
                break;
            case"vk":
                s = "http://vkontakte.ru/share.php?", s += "url=" + i, s += "&title=" + r, s += "&description=" + o, s += "&image=" + a, s += "&noparse=true";
                break;
            case"ok":
                s = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1", s += "&st.comments=" + o, s += "&st._surl=" + i
        }
        window.open(s, "", "toolbar=0, status=0, width=626, height=436")
    }), $(".js-toggle-menu").on("click", function () {
        $(".js-menu").toggleClass("b-nav__list_active"), $(this).toggleClass("b-nav__open_active")
    }), device.tablet() && $("#viewport").attr("content", "width=1000 minimal-ui")
});