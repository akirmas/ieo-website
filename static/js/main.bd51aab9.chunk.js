(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{12:function(e,n,t){"use strict";var a=t(14),r=t(0),c=t.n(r),o=t(8),l=(t(40),function(e){var n=e.src,t=e.alt,r=Object(a.a)(e,["src","alt"]);return c.a.createElement("img",Object.assign({src:Object(o.d)(n),alt:t},r))});l.defaultProps={alt:""};var i=l;n.a=i},16:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return o});var a=t(0),r=t.n(a),c=Object(a.createContext)(),o=function(e){var n=e.value,t=e.children;return r.a.createElement(c.Provider,{value:n},t)}},32:function(e,n,t){e.exports=t(63)},40:function(e,n,t){},41:function(e,n,t){},50:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){},62:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(24),o=t(3),l=t(15),i=t(10),u=t(12),m=t(14),s=t(8),d=(t(41),function(e){var n=e.links,t=Object(m.a)(e,["links"]);return r.a.createElement("nav",Object.assign({className:"nav"},t),n&&n.map(function(e){return r.a.createElement("div",{className:"nav__item",key:e.name},r.a.createElement(o.c,{className:"nav__link",activeClassName:Object(s.a)("nav__link--active",e.variant?"nav__link--".concat(e.variant):""),to:e.to,isActive:(n=e.to,function(e,t){var a=t.pathname;if("/"===a)return!1;var r=a.replace(/^\//,"").split("/")[0];return n.startsWith("/".concat(r))})},e.name));var n}))}),f=t(7),b=(t(50),function(e){var n=e.config,t=function(e){return r.a.createElement(r.a.Fragment,null,e.to?r.a.createElement(o.b,{key:e.name,className:"nav-mobile__link",to:e.to},e.name):r.a.createElement("div",{className:"nav-mobile__link"},e.name))};return r.a.createElement("nav",{className:"nav-mobile"},Object.entries(n).map(function(e){var n=Object(f.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{key:a,className:"nav-mobile__group"},r.a.createElement("h5",{className:"nav-mobile__group-title"},a),c.map(t))}))}),v=t(22),p=(t(51),function(e){var n=e.children,t=Object(m.a)(e,["children"]);return r.a.createElement("button",t,n)});p.defaultProps={type:"button"};var E=p,h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(a.useState)(e),t=Object(f.a)(n,2),r=t[0],c=t[1];return{value:r,toggle:Object(a.useCallback)(function(){return c(function(e){return!e})},[]),setTrue:Object(a.useCallback)(function(){return c(!0)},[]),setFalse:Object(a.useCallback)(function(){return c(!1)},[])}},_=function(e){var n=h(e);return{value:n.value,toggle:n.toggle}},g=(t(52),function(e){var n=e.children,t=_(!1),a=t.value,c=t.toggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{className:"mobile-menu-switch",onClick:c},r.a.createElement(v.a,{className:"mobile-menu-switch__icon",icon:a?i.f:i.c,size:"lg"})),r.a.createElement("section",{className:Object(s.a)("mobile-menu","mobile-menu--is-".concat(a?"visible":"hidden")),onClick:c},r.a.createElement(E,{className:"mobile-menu__close"},r.a.createElement(v.a,{icon:i.f,size:"lg"})),n))}),j=t(31),O=(t(56),t(57),function(e){var n=e.config,t=e.isOpen,a=e.onMouseLeave,c=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{key:e.name,to:e.to,className:Object(s.a)("drop-down-menu__link","drop-down-menu__link-".concat(e.submenu?"active":"hidden"))},e.name,e.submenu&&r.a.createElement("div",{className:"drop-down-menu__group drop-down-menu__group-absolute",onClick:a},e.submenu.map(function(e){return r.a.createElement(o.b,{key:e.name,className:"drop-down-menu__link",to:e.to},e.name)}))))};return r.a.createElement("div",{className:"drop-down-menu",onMouseLeave:a},r.a.createElement("div",{className:"container container--wide"},r.a.createElement(j.SlideDown,null,t&&r.a.createElement("main",{className:"drop-down-menu__main"},r.a.createElement("nav",{className:"drop-down-menu__nav"},Object.entries(n).map(function(e){var n=Object(f.a)(e,2),t=n[0],o=n[1];return r.a.createElement("div",{key:t,className:"drop-down-menu__group",onClick:a},o.map(c))})),r.a.createElement(u.a,{className:"drop-down-menu__image",src:"images/drop-down-menu.png"})))))}),k=(t(58),function(e){var n=e.logo,t=e.navigation,a=h(),c=a.value,l=a.setFalse,i=a.setTrue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container container--wide"},r.a.createElement("main",{className:"header__main"},r.a.createElement(g,null,r.a.createElement(b,{config:t.subMobile})),r.a.createElement(d,Object.assign({links:t.main},{onMouseEnter:function(){return i()}})),r.a.createElement(o.b,{to:"/"},r.a.createElement(u.a,Object.assign({className:"header__logo"},n)))))),r.a.createElement(O,Object.assign({isOpen:c,config:t.sub},{onMouseLeave:function(){return l()}})))}),N=(t(59),function(e){var n=e.config,t=function(e){return r.a.createElement(o.b,{key:e.name,className:"nav-bottom__link",to:e.to},e.name)};return r.a.createElement("nav",{className:"nav-bottom"},Object.entries(n).map(function(e){var n=Object(f.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{key:a,className:"nav-bottom__group"},r.a.createElement("h5",{className:"nav-bottom__group-title"},a),c.map(t))}))}),y=(t(60),function(e){var n=e.contacts;return r.a.createElement("div",{className:"social-media"},n.map(function(e){return r.a.createElement("a",{key:e.type,className:"social-media__link",href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{className:"social-media__icon",src:e.icon,alt:e.type}))}))}),w=(t(61),function(e){var n=e.navigation,t=e.contacts;return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container container--wide"},r.a.createElement("main",{className:"footer__main"},r.a.createElement(N,{config:n.sub}),r.a.createElement(y,{contacts:t}))))}),C=t(16),x=function(e){var n=e.children,t=Object(a.useContext)(C.a).template,c=t.header,o=t.footer,l=t.navigation;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,Object.assign({},c,{navigation:l})),r.a.createElement("main",{className:"main"},n),r.a.createElement(w,Object.assign({},o,{navigation:l})))},z=t(11),F=function(e){var n=e.routes,t=e.fallback,c=void 0===t?null:t;return r.a.createElement(a.Suspense,{fallback:c},r.a.createElement(z.c,null,n.map(function(e){return r.a.createElement(z.a,Object.assign({key:e.path},e))})))},S=function(e){return function(n){return r.a.createElement(e,n)}},A=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,98))}),P=Object(a.lazy)(function(){return t.e(4).then(t.bind(null,96))}),M=Object(a.lazy)(function(){return t.e(6).then(t.bind(null,97))}),W=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,95))}),D=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,65))}),L=Object(a.lazy)(function(){return t.e(9).then(t.bind(null,66))}),T=[{path:"/",exact:!0,render:S(P)},{path:"/about/key-roles",render:S(M)},{path:"/contact-us",render:S(D)},{path:"/product/:name",render:S(A)},{path:"/:category?/:name",render:S(W)},{path:"*",render:S(L)}],B=function(){return r.a.createElement("main",{className:"app"},r.a.createElement(x,null,r.a.createElement(F,{routes:T})))},J=t(17),I=t(18),U=t(20),$=t(19),q=t(21),G=function(e){function n(){return Object(J.a)(this,n),Object(U.a)(this,Object($.a)(n).apply(this,arguments))}return Object(q.a)(n,e),Object(I.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(a.Component),H=Object(z.e)(G),K=function(e){function n(e){var t;return Object(J.a)(this,n),(t=Object(U.a)(this,Object($.a)(n).call(this,e))).state={error:!1,info:null},t}return Object(q.a)(n,e),Object(I.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){var e=this.state,n=e.error,t=e.info;return n?r.a.createElement("div",{className:"error-boundary"},r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},r.a.createElement("summary",null,"Something went wrong"),r.a.createElement("p",null,n.toString()),r.a.createElement("hr",null),r.a.createElement("p",null,t.componentStack))):this.props.children}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(62);l.b.add(i.e,i.d);var Q,R=function(e){var n=e.data;return r.a.createElement(K,null,r.a.createElement(C.b,{value:n},r.a.createElement(o.a,{basename:"."},r.a.createElement(H,null,r.a.createElement(B,null)))))},V=document.getElementById("root");Q="data.json",fetch(Object(s.d)(Q)).then(function(e){return e.json()}).then(function(e){Object(c.render)(r.a.createElement(R,{data:e}),V)}).catch(console.error),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,n,t){"use strict";t.d(n,"d",function(){return o}),t.d(n,"a",function(){return l}),t.d(n,"c",function(){return i}),t.d(n,"b",function(){return u});var a=t(7),r=t(0),c=t.n(r),o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".".concat("/");return e.startsWith("http")?e:n.concat(e)},l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.join(" ").replace(/\s+/g," ").trim()},i=function(e,n){return Array.isArray(e)?e.map(function(t,a){return c.a.createElement(r.Fragment,{key:t},t,a<e.length-1&&!n&&c.a.createElement("br",null))}):e},u=function(e,n,t,r){return e.map(function(e){return Object.entries(e).map(function(e){var o=Object(a.a)(e,2),u=o[0],m=o[1];switch(u){case"title":return c.a.createElement("h3",{key:m,className:l("".concat(n,"__title"),t?"".concat(n,"__title--theme-").concat(t):"")},i(m));case"text":return c.a.createElement("div",{className:"".concat(n,"__text-group")},Array.isArray(m)?m.map(function(e){return c.a.createElement("p",{key:e,className:"".concat(n,"__text ").concat(n,"__text--").concat(r)},i(e,r))}):i(m));default:return""}})})}}},[[32,2,3]]]);
//# sourceMappingURL=main.bd51aab9.chunk.js.map