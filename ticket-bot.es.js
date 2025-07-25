var R, d, de, P, ne, me, ve, ye, G, K, X, x = {}, ge = [], Ee = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, j = Array.isArray;
function S(t, e) {
  for (var _ in e) t[_] = e[_];
  return t;
}
function Y(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Fe(t, e, _) {
  var n, i, o, l = {};
  for (o in e) o == "key" ? n = e[o] : o == "ref" ? i = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? R.call(arguments, 2) : _), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) l[o] === void 0 && (l[o] = t.defaultProps[o]);
  return L(t, l, n, i, null);
}
function L(t, e, _, n, i) {
  var o = { type: t, props: e, key: _, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++de, __i: -1, __u: 0 };
  return i == null && d.vnode != null && d.vnode(o), o;
}
function z(t) {
  return t.children;
}
function B(t, e) {
  this.props = t, this.context = e;
}
function q(t, e) {
  if (e == null) return t.__ ? q(t.__, t.__i + 1) : null;
  for (var _; e < t.__k.length; e++) if ((_ = t.__k[e]) != null && _.__e != null) return _.__e;
  return typeof t.type == "function" ? q(t) : null;
}
function be(t) {
  var e, _;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((_ = t.__k[e]) != null && _.__e != null) {
      t.__e = t.__c.base = _.__e;
      break;
    }
    return be(t);
  }
}
function re(t) {
  (!t.__d && (t.__d = !0) && P.push(t) && !O.__r++ || ne != d.debounceRendering) && ((ne = d.debounceRendering) || me)(O);
}
function O() {
  for (var t, e, _, n, i, o, l, c = 1; P.length; ) P.length > c && P.sort(ve), t = P.shift(), c = P.length, t.__d && (_ = void 0, i = (n = (e = t).__v).__e, o = [], l = [], e.__P && ((_ = S({}, n)).__v = n.__v + 1, d.vnode && d.vnode(_), Z(e.__P, _, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [i] : null, o, i ?? q(n), !!(32 & n.__u), l), _.__v = n.__v, _.__.__k[_.__i] = _, $e(o, _, l), _.__e != i && be(_)));
  O.__r = 0;
}
function ke(t, e, _, n, i, o, l, c, a, s, f) {
  var r, p, u, b, w, k, m = n && n.__k || ge, v = e.length;
  for (a = He(_, e, m, a, v), r = 0; r < v; r++) (u = _.__k[r]) != null && (p = u.__i == -1 ? x : m[u.__i] || x, u.__i = r, k = Z(t, u, p, i, o, l, c, a, s, f), b = u.__e, u.ref && p.ref != u.ref && (p.ref && ee(p.ref, null, u), f.push(u.ref, u.__c || b, u)), w == null && b != null && (w = b), 4 & u.__u || p.__k === u.__k ? a = we(u, a, t) : typeof u.type == "function" && k !== void 0 ? a = k : b && (a = b.nextSibling), u.__u &= -7);
  return _.__e = w, a;
}
function He(t, e, _, n, i) {
  var o, l, c, a, s, f = _.length, r = f, p = 0;
  for (t.__k = new Array(i), o = 0; o < i; o++) (l = e[o]) != null && typeof l != "boolean" && typeof l != "function" ? (a = o + p, (l = t.__k[o] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? L(null, l, null, null, null) : j(l) ? L(z, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? L(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = t, l.__b = t.__b + 1, c = null, (s = l.__i = xe(l, _, a, r)) != -1 && (r--, (c = _[s]) && (c.__u |= 2)), c == null || c.__v == null ? (s == -1 && (i > f ? p-- : i < f && p++), typeof l.type != "function" && (l.__u |= 4)) : s != a && (s == a - 1 ? p-- : s == a + 1 ? p++ : (s > a ? p-- : p++, l.__u |= 4))) : t.__k[o] = null;
  if (r) for (o = 0; o < f; o++) (c = _[o]) != null && (2 & c.__u) == 0 && (c.__e == n && (n = q(c)), Te(c, c));
  return n;
}
function we(t, e, _) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = 0; n && i < n.length; i++) n[i] && (n[i].__ = t, e = we(n[i], e, _));
    return e;
  }
  t.__e != e && (e && t.type && !_.contains(e) && (e = q(t)), _.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function xe(t, e, _, n) {
  var i, o, l = t.key, c = t.type, a = e[_];
  if (a === null && t.key == null || a && l == a.key && c == a.type && (2 & a.__u) == 0) return _;
  if (n > (a != null && (2 & a.__u) == 0 ? 1 : 0)) for (i = _ - 1, o = _ + 1; i >= 0 || o < e.length; ) {
    if (i >= 0) {
      if ((a = e[i]) && (2 & a.__u) == 0 && l == a.key && c == a.type) return i;
      i--;
    }
    if (o < e.length) {
      if ((a = e[o]) && (2 & a.__u) == 0 && l == a.key && c == a.type) return o;
      o++;
    }
  }
  return -1;
}
function oe(t, e, _) {
  e[0] == "-" ? t.setProperty(e, _ ?? "") : t[e] = _ == null ? "" : typeof _ != "number" || Ee.test(e) ? _ : _ + "px";
}
function U(t, e, _, n, i) {
  var o, l;
  e: if (e == "style") if (typeof _ == "string") t.style.cssText = _;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) _ && e in _ || oe(t.style, e, "");
    if (_) for (e in _) n && _[e] == n[e] || oe(t.style, e, _[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace(ye, "$1")), l = e.toLowerCase(), e = l in t || e == "onFocusOut" || e == "onFocusIn" ? l.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = _, _ ? n ? _.u = n.u : (_.u = G, t.addEventListener(e, o ? X : K, o)) : t.removeEventListener(e, o ? X : K, o);
  else {
    if (i == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = _ ?? "";
      break e;
    } catch {
    }
    typeof _ == "function" || (_ == null || _ === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && _ == 1 ? "" : _));
  }
}
function ie(t) {
  return function(e) {
    if (this.l) {
      var _ = this.l[e.type + t];
      if (e.t == null) e.t = G++;
      else if (e.t < _.u) return;
      return _(d.event ? d.event(e) : e);
    }
  };
}
function Z(t, e, _, n, i, o, l, c, a, s) {
  var f, r, p, u, b, w, k, m, v, A, C, N, E, _e, D, F, Q, $ = e.type;
  if (e.constructor != null) return null;
  128 & _.__u && (a = !!(32 & _.__u), o = [c = e.__e = _.__e]), (f = d.__b) && f(e);
  e: if (typeof $ == "function") try {
    if (m = e.props, v = "prototype" in $ && $.prototype.render, A = (f = $.contextType) && n[f.__c], C = f ? A ? A.props.value : f.__ : n, _.__c ? k = (r = e.__c = _.__c).__ = r.__E : (v ? e.__c = r = new $(m, C) : (e.__c = r = new B(m, C), r.constructor = $, r.render = Ne), A && A.sub(r), r.props = m, r.state || (r.state = {}), r.context = C, r.__n = n, p = r.__d = !0, r.__h = [], r._sb = []), v && r.__s == null && (r.__s = r.state), v && $.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = S({}, r.__s)), S(r.__s, $.getDerivedStateFromProps(m, r.__s))), u = r.props, b = r.state, r.__v = e, p) v && $.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), v && r.componentDidMount != null && r.__h.push(r.componentDidMount);
    else {
      if (v && $.getDerivedStateFromProps == null && m !== u && r.componentWillReceiveProps != null && r.componentWillReceiveProps(m, C), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(m, r.__s, C) === !1 || e.__v == _.__v) {
        for (e.__v != _.__v && (r.props = m, r.state = r.__s, r.__d = !1), e.__e = _.__e, e.__k = _.__k, e.__k.some(function(H) {
          H && (H.__ = e);
        }), N = 0; N < r._sb.length; N++) r.__h.push(r._sb[N]);
        r._sb = [], r.__h.length && l.push(r);
        break e;
      }
      r.componentWillUpdate != null && r.componentWillUpdate(m, r.__s, C), v && r.componentDidUpdate != null && r.__h.push(function() {
        r.componentDidUpdate(u, b, w);
      });
    }
    if (r.context = C, r.props = m, r.__P = t, r.__e = !1, E = d.__r, _e = 0, v) {
      for (r.state = r.__s, r.__d = !1, E && E(e), f = r.render(r.props, r.state, r.context), D = 0; D < r._sb.length; D++) r.__h.push(r._sb[D]);
      r._sb = [];
    } else do
      r.__d = !1, E && E(e), f = r.render(r.props, r.state, r.context), r.state = r.__s;
    while (r.__d && ++_e < 25);
    r.state = r.__s, r.getChildContext != null && (n = S(S({}, n), r.getChildContext())), v && !p && r.getSnapshotBeforeUpdate != null && (w = r.getSnapshotBeforeUpdate(u, b)), F = f, f != null && f.type === z && f.key == null && (F = Se(f.props.children)), c = ke(t, j(F) ? F : [F], e, _, n, i, o, l, c, a, s), r.base = e.__e, e.__u &= -161, r.__h.length && l.push(r), k && (r.__E = r.__ = null);
  } catch (H) {
    if (e.__v = null, a || o != null) if (H.then) {
      for (e.__u |= a ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      o[o.indexOf(c)] = null, e.__e = c;
    } else for (Q = o.length; Q--; ) Y(o[Q]);
    else e.__e = _.__e, e.__k = _.__k;
    d.__e(H, e, _);
  }
  else o == null && e.__v == _.__v ? (e.__k = _.__k, e.__e = _.__e) : c = e.__e = Ie(_.__e, e, _, n, i, o, l, a, s);
  return (f = d.diffed) && f(e), 128 & e.__u ? void 0 : c;
}
function $e(t, e, _) {
  for (var n = 0; n < _.length; n++) ee(_[n], _[++n], _[++n]);
  d.__c && d.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      d.__e(o, i.__v);
    }
  });
}
function Se(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : j(t) ? t.map(Se) : S({}, t);
}
function Ie(t, e, _, n, i, o, l, c, a) {
  var s, f, r, p, u, b, w, k = _.props, m = e.props, v = e.type;
  if (v == "svg" ? i = "http://www.w3.org/2000/svg" : v == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = 0; s < o.length; s++) if ((u = o[s]) && "setAttribute" in u == !!v && (v ? u.localName == v : u.nodeType == 3)) {
      t = u, o[s] = null;
      break;
    }
  }
  if (t == null) {
    if (v == null) return document.createTextNode(m);
    t = document.createElementNS(i, v, m.is && m), c && (d.__m && d.__m(e, o), c = !1), o = null;
  }
  if (v == null) k === m || c && t.data == m || (t.data = m);
  else {
    if (o = o && R.call(t.childNodes), k = _.props || x, !c && o != null) for (k = {}, s = 0; s < t.attributes.length; s++) k[(u = t.attributes[s]).name] = u.value;
    for (s in k) if (u = k[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") r = u;
      else if (!(s in m)) {
        if (s == "value" && "defaultValue" in m || s == "checked" && "defaultChecked" in m) continue;
        U(t, s, null, u, i);
      }
    }
    for (s in m) u = m[s], s == "children" ? p = u : s == "dangerouslySetInnerHTML" ? f = u : s == "value" ? b = u : s == "checked" ? w = u : c && typeof u != "function" || k[s] === u || U(t, s, u, k[s], i);
    if (f) c || r && (f.__html == r.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (r && (t.innerHTML = ""), ke(e.type == "template" ? t.content : t, j(p) ? p : [p], e, _, n, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, o, l, o ? o[0] : _.__k && q(_, 0), c, a), o != null) for (s = o.length; s--; ) Y(o[s]);
    c || (s = "value", v == "progress" && b == null ? t.removeAttribute("value") : b != null && (b !== t[s] || v == "progress" && !b || v == "option" && b != k[s]) && U(t, s, b, k[s], i), s = "checked", w != null && w != t[s] && U(t, s, w, k[s], i));
  }
  return t;
}
function ee(t, e, _) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    d.__e(i, _);
  }
}
function Te(t, e, _) {
  var n, i;
  if (d.unmount && d.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || ee(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (o) {
      d.__e(o, e);
    }
    n.base = n.__P = null;
  }
  if (n = t.__k) for (i = 0; i < n.length; i++) n[i] && Te(n[i], e, _ || typeof t.type != "function");
  _ || Y(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ne(t, e, _) {
  return this.constructor(t, _);
}
function De(t, e, _) {
  var n, i, o, l;
  e == document && (e = document.documentElement), d.__ && d.__(t, e), i = (n = !1) ? null : e.__k, o = [], l = [], Z(e, t = e.__k = Fe(z, null, [t]), i || x, x, e.namespaceURI, i ? null : e.firstChild ? R.call(e.childNodes) : null, o, i ? i.__e : e.firstChild, n, l), $e(o, t, l);
}
R = ge.slice, d = { __e: function(t, e, _, n) {
  for (var i, o, l; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), l = i.__d), l) return i.__E = i;
  } catch (c) {
    t = c;
  }
  throw t;
} }, de = 0, B.prototype.setState = function(t, e) {
  var _;
  _ = this.__s != null && this.__s != this.state ? this.__s : this.__s = S({}, this.state), typeof t == "function" && (t = t(S({}, _), this.props)), t && S(_, t), t != null && this.__v && (e && this._sb.push(e), re(this));
}, B.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), re(this));
}, B.prototype.render = z, P = [], me = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ve = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, O.__r = 0, ye = /(PointerCapture)$|Capture$/i, G = 0, K = ie(!1), X = ie(!0);
var Ue = 0;
function h(t, e, _, n, i, o) {
  e || (e = {});
  var l, c, a = e;
  if ("ref" in a) for (c in a = {}, e) c == "ref" ? l = e[c] : a[c] = e[c];
  var s = { type: t, props: a, key: _, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ue, __i: -1, __u: 0, __source: i, __self: o };
  if (typeof t == "function" && (l = t.defaultProps)) for (c in l) a[c] === void 0 && (a[c] = l[c]);
  return d.vnode && d.vnode(s), s;
}
var I, y, V, le, W = 0, Ce = [], g = d, ce = g.__b, se = g.__r, ae = g.diffed, ue = g.__c, fe = g.unmount, pe = g.__;
function te(t, e) {
  g.__h && g.__h(y, t, W || e), W = 0;
  var _ = y.__H || (y.__H = { __: [], __h: [] });
  return t >= _.__.length && _.__.push({}), _.__[t];
}
function T(t) {
  return W = 1, Le(qe, t);
}
function Le(t, e, _) {
  var n = te(I++, 2);
  if (n.t = t, !n.__c && (n.__ = [qe(void 0, e), function(c) {
    var a = n.__N ? n.__N[0] : n.__[0], s = n.t(a, c);
    a !== s && (n.__N = [s, n.__[1]], n.__c.setState({}));
  }], n.__c = y, !y.__f)) {
    var i = function(c, a, s) {
      if (!n.__c.__H) return !0;
      var f = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      })) return !o || o.call(this, c, a, s);
      var r = n.__c.props !== c;
      return f.forEach(function(p) {
        if (p.__N) {
          var u = p.__[0];
          p.__ = p.__N, p.__N = void 0, u !== p.__[0] && (r = !0);
        }
      }), o && o.call(this, c, a, s) || r;
    };
    y.__f = !0;
    var o = y.shouldComponentUpdate, l = y.componentWillUpdate;
    y.componentWillUpdate = function(c, a, s) {
      if (this.__e) {
        var f = o;
        o = void 0, i(c, a, s), o = f;
      }
      l && l.call(this, c, a, s);
    }, y.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function Be(t, e) {
  var _ = te(I++, 3);
  !g.__s && Pe(_.__H, e) && (_.__ = t, _.u = e, y.__H.__h.push(_));
}
function Me(t, e) {
  var _ = te(I++, 7);
  return Pe(_.__H, e) && (_.__ = t(), _.__H = e, _.__h = t), _.__;
}
function Oe(t, e) {
  return W = 8, Me(function() {
    return t;
  }, e);
}
function We() {
  for (var t; t = Ce.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(M), t.__H.__h.forEach(J), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], g.__e(e, t.__v);
  }
}
g.__b = function(t) {
  y = null, ce && ce(t);
}, g.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), pe && pe(t, e);
}, g.__r = function(t) {
  se && se(t), I = 0;
  var e = (y = t.__c).__H;
  e && (V === y ? (e.__h = [], y.__h = [], e.__.forEach(function(_) {
    _.__N && (_.__ = _.__N), _.u = _.__N = void 0;
  })) : (e.__h.forEach(M), e.__h.forEach(J), e.__h = [], I = 0)), V = y;
}, g.diffed = function(t) {
  ae && ae(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Ce.push(e) !== 1 && le === g.requestAnimationFrame || ((le = g.requestAnimationFrame) || Re)(We)), e.__H.__.forEach(function(_) {
    _.u && (_.__H = _.u), _.u = void 0;
  })), V = y = null;
}, g.__c = function(t, e) {
  e.some(function(_) {
    try {
      _.__h.forEach(M), _.__h = _.__h.filter(function(n) {
        return !n.__ || J(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], g.__e(n, _.__v);
    }
  }), ue && ue(t, e);
}, g.unmount = function(t) {
  fe && fe(t);
  var e, _ = t.__c;
  _ && _.__H && (_.__H.__.forEach(function(n) {
    try {
      M(n);
    } catch (i) {
      e = i;
    }
  }), _.__H = void 0, e && g.__e(e, _.__v));
};
var he = typeof requestAnimationFrame == "function";
function Re(t) {
  var e, _ = function() {
    clearTimeout(n), he && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(_, 35);
  he && (e = requestAnimationFrame(_));
}
function M(t) {
  var e = y, _ = t.__c;
  typeof _ == "function" && (t.__c = void 0, _()), y = e;
}
function J(t) {
  var e = y;
  t.__c = t.__(), y = e;
}
function Pe(t, e) {
  return !t || t.length !== e.length || e.some(function(_, n) {
    return _ !== t[n];
  });
}
function qe(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const je = ({ faq: t }) => {
  const [e, _] = T(!1);
  return /* @__PURE__ */ h("div", { class: "faq-item", children: [
    /* @__PURE__ */ h("div", { class: "faq-question", onClick: () => _(!e), children: [
      /* @__PURE__ */ h("span", { children: t.question }),
      /* @__PURE__ */ h("span", { children: e ? "−" : "+" })
    ] }),
    /* @__PURE__ */ h("div", { class: `faq-answer ${e ? "open" : ""}`, children: /* @__PURE__ */ h("p", { children: t.answer }) })
  ] });
}, ze = ({ apiKey: t, setView: e }) => {
  const [_, n] = T([]), [i, o] = T(!0), [l, c] = T(null);
  return Be(() => {
    (async () => {
      try {
        const s = await fetch("http://localhost:5280/api/faq/", {
          headers: { "X-Api-Key": t }
        });
        if (!s.ok)
          throw new Error("Failed to fetch FAQs. Check your API key or server status.");
        const f = await s.json();
        n(f.data || []);
      } catch (s) {
        c(s.message);
      } finally {
        o(!1);
      }
    })();
  }, [t]), i ? /* @__PURE__ */ h("p", { class: "loading-message", children: "Loading FAQs..." }) : l ? /* @__PURE__ */ h("p", { class: "error-message", children: l }) : /* @__PURE__ */ h("div", { class: "faq-container view-container", children: [
    /* @__PURE__ */ h("h4", { children: "Frequently Asked Questions" }),
    _.map((a) => /* @__PURE__ */ h(je, { faq: a }, a.id)),
    /* @__PURE__ */ h("div", { class: "faq-footer", children: [
      /* @__PURE__ */ h("p", { children: "Can't find an answer?" }),
      /* @__PURE__ */ h("button", { class: "primary-btn", onClick: () => e("ticket"), children: "Create a Ticket" })
    ] })
  ] });
}, Qe = ({ apiKey: t, setView: e }) => {
  const [_, n] = T({ name: "", email: "", phone: "", content: "" }), [i, o] = T(!1), [l, c] = T(null), a = (f) => {
    n({ ..._, [f.target.name]: f.target.value });
  };
  return /* @__PURE__ */ h("div", { class: "ticket-form-container view-container", children: [
    /* @__PURE__ */ h("button", { class: "back-btn", onClick: () => e("faq"), children: "← Back to FAQ" }),
    /* @__PURE__ */ h("h4", { children: "Submit a Support Ticket" }),
    /* @__PURE__ */ h("form", { onSubmit: async (f) => {
      f.preventDefault(), o(!0), c(null);
      try {
        const r = await fetch("http://localhost:5280/api/Ticket/AgencyTicket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": t
          },
          body: JSON.stringify({
            name: _.name,
            email: _.email,
            phoneNumber: _.phone,
            content: _.content
          })
        });
        if (!r.ok) {
          const u = (await r.json().catch(() => null))?.message || "Failed to submit ticket. Please try again.";
          throw new Error(u);
        }
        c({ type: "success", message: "Ticket submitted! We will get back to you shortly." }), setTimeout(() => e("faq"), 2500);
      } catch (r) {
        c({ type: "error", message: r.message });
      } finally {
        o(!1);
      }
    }, children: [
      /* @__PURE__ */ h("input", { type: "text", name: "name", placeholder: "Name", required: !0, onInput: a, value: _.name }),
      /* @__PURE__ */ h("input", { type: "email", name: "email", placeholder: "Email", required: !0, onInput: a, value: _.email }),
      /* @__PURE__ */ h("input", { type: "tel", name: "phone", placeholder: "Phone (Optional)", onInput: a, value: _.phone }),
      /* @__PURE__ */ h("textarea", { name: "content", placeholder: "Describe your issue...", required: !0, onInput: a, value: _.content }),
      /* @__PURE__ */ h("button", { type: "submit", class: "primary-btn", disabled: i, children: i ? "Submitting..." : "Submit Ticket" })
    ] }),
    l && /* @__PURE__ */ h("p", { class: l.type === "error" ? "error-message" : "feedback-message", children: l.message })
  ] });
}, Ve = ({ apiKey: t }) => {
  const [e, _] = T(!1), [n, i] = T("faq"), o = Oe(() => {
    _((l) => !l), e || i("faq");
  }, [e]);
  return e ? /* @__PURE__ */ h("div", { class: `chatbot-window ${e ? "" : "closed"}`, children: [
    /* @__PURE__ */ h("div", { class: "chatbot-header", children: [
      /* @__PURE__ */ h("h3", { children: "Support Center" }),
      /* @__PURE__ */ h("button", { class: "close-btn", onClick: o, "aria-label": "Close Chat", children: "×" })
    ] }),
    /* @__PURE__ */ h("div", { class: "chatbot-body", children: n === "faq" ? /* @__PURE__ */ h(ze, { apiKey: t, setView: i }) : /* @__PURE__ */ h(Qe, { apiKey: t, setView: i }) })
  ] }) : /* @__PURE__ */ h("button", { class: "chat-bubble", onClick: o, "aria-label": "Open Chat", children: "?" });
}, Ae = {
  // The manual init function remains the same
  init: (t) => {
    const { elementId: e, apiKey: _ } = t, n = document.getElementById(e);
    if (!n) {
      console.error(`[TicketBot] Element with ID #${e} not found.`);
      return;
    }
    if (!_) {
      console.error("[TicketBot] API key is required.");
      return;
    }
    De(/* @__PURE__ */ h(Ve, { apiKey: _ }), n);
  }
}, Ke = () => {
  const t = document.currentScript;
  if (!t) {
    const e = document.querySelectorAll('script[src*="ticket-bot"]');
    if (e.length > 0)
      t = e[e.length - 1];
    else
      return;
  }
  try {
    const _ = new URL(t.src).searchParams.get("apiKey");
    if (_) {
      console.log("[TicketBot] Auto-initializing from URL parameter.");
      const n = t.getAttribute("data-element-id") || "chatbot-container";
      if (!document.getElementById(n)) {
        console.error(`[TicketBot] Auto-init failed: Element with ID #${n} not found. Please add <div id="${n}"></div> to your page.`);
        return;
      }
      Ae.init({ elementId: n, apiKey: _ });
    }
  } catch (e) {
    console.error("[TicketBot] Could not parse script URL for auto-initialization.", e);
  }
};
Ke();
window.TicketBot = Ae;
