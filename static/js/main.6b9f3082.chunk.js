(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";var a=n(19),r=n(0),c=n.n(r),o=n(8),i=(n(32),function(e){var t=e.src,n=e.alt,r=Object(a.a)(e,["src","alt"]);return c.a.createElement("img",Object.assign({src:Object(o.b)(t),alt:n},r))});i.defaultProps={alt:""};var l=i;t.a=l},27:function(e,t,n){e.exports=n(47)},32:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(18),i=n(5),l=n(7),u=n(12),s=(n(33),function(e){var t=e.links;return c.a.createElement("nav",{className:"nav"},t&&t.map(function(e){return c.a.createElement(i.c,{className:"nav__link",activeClassName:"nav__link--active",key:e.name,to:e.to,strict:!0},e.name)}))}),m=(n(42),function(e){var t=e.variant,n=void 0===t?"light":t,a=e.logo,r=e.navigation;return c.a.createElement("header",{className:"header header--theme-".concat(n)},c.a.createElement("div",{className:"container container--wide"},c.a.createElement("main",{className:"header__main"},c.a.createElement(s,{links:r}),c.a.createElement(i.b,{to:"/"},c.a.createElement(u.a,Object.assign({className:"logo"},a))))))}),f=n(17),v=(n(43),function(e){var t=e.config,n=function(e){return c.a.createElement(i.b,{key:e.name,className:"nav-bottom__link",to:e.to},e.name)};return c.a.createElement("nav",{className:"nav-bottom"},Object.entries(t).map(function(e){var t=Object(f.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"nav-bottom__group"},c.a.createElement("h5",{className:"nav-bottom__group-title"},a),r.map(n))}))}),h=(n(44),function(e){var t=e.variant,n=void 0===t?"light":t,a=e.navigation,r=e.copyright;return c.a.createElement("footer",{className:"footer footer--theme-".concat(n)},c.a.createElement("div",{className:"container container--normal"},c.a.createElement("main",{className:"footer__main"},c.a.createElement(v,{config:a}),c.a.createElement("p",{className:"copyright"},r))))}),d=n(9),E=(n(45),Object(l.e)(function(e){var t=e.children,n="/"===e.location.pathname?"gray":"light",a=Object(r.useContext)(d.a).template,o=a.header,i=a.footer;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,Object.assign({variant:n},o)),t,c.a.createElement(h,Object.assign({variant:n},i)))})),b=function(e){var t=e.routes,n=e.fallback,a=void 0===n?null:n;return c.a.createElement(r.Suspense,{fallback:a},c.a.createElement(l.c,null,t.map(function(e){return c.a.createElement(l.a,Object.assign({key:e.path},e))})))},p=Object(r.lazy)(function(){return n.e(3).then(n.bind(null,54))}),g=[{path:"/",exact:!0,render:(a=p,function(e){return c.a.createElement(a,e)})}],j=function(){return c.a.createElement("main",{className:"app"},c.a.createElement(E,null,c.a.createElement(b,{routes:g})))},O=n(22),w=n(23),k=n(25),N=n(24),y=n(26),_=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(k.a)(this,Object(N.a)(t).call(this,e))).state={error:!1,info:null},n}return Object(y.a)(t,e),Object(w.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.info;return t?c.a.createElement("div",{className:"error-boundary"},c.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},c.a.createElement("summary",null,"Something went wrong"),c.a.createElement("p",null,t.toString()),c.a.createElement("hr",null),c.a.createElement("p",null,n.componentStack))):this.props.children}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S,C=n(8),x=(n(46),function(e){var t=e.data;return c.a.createElement(_,null,c.a.createElement(d.b,{value:t},c.a.createElement(i.a,{basename:"."},c.a.createElement(j,null))))}),W=document.getElementById("root");S="data.json",fetch(Object(C.b)(S)).then(function(e){return e.json()}).then(function(e){Object(o.render)(c.a.createElement(x,{data:e}),W)}).catch(console.error),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});n(0);var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".".concat("/");return e.startsWith("http")?e:t.concat(e)},r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join(" ").replace(/\s+/g," ").trim()}},9:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o});var a=n(0),r=n.n(a),c=Object(a.createContext)(),o=function(e){var t=e.value,n=e.children;return r.a.createElement(c.Provider,{value:t},n)}}},[[27,1,2]]]);
//# sourceMappingURL=main.6b9f3082.chunk.js.map