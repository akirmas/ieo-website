(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{12:function(e,n,t){"use strict";var a=t(14),r=t(0),c=t.n(r),o=t(8),l=(t(41),function(e){var n=e.src,t=e.alt,r=Object(a.a)(e,["src","alt"]);return c.a.createElement("img",Object.assign({src:Object(o.d)(n),alt:t},r))});l.defaultProps={alt:""};var i=l;n.a=i},16:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return o});var a=t(0),r=t.n(a),c=Object(a.createContext)(),o=function(e){var n=e.value,t=e.children;return r.a.createElement(c.Provider,{value:n},t)}},33:function(e,n,t){e.exports=t(64)},41:function(e,n,t){},42:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},53:function(e,n,t){},58:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){},62:function(e,n,t){},63:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(24),o=t(3),l=t(15),i=t(10),u=t(12),s=t(14),m=t(8),f=(t(42),function(e){var n=e.links,t=Object(s.a)(e,["links"]);return r.a.createElement("nav",Object.assign({className:"nav"},t),n&&n.map(function(e){return r.a.createElement("div",{className:"nav__item",key:e.name},r.a.createElement(o.c,{className:"nav__link",activeClassName:Object(m.a)("nav__link--active",e.variant?"nav__link--".concat(e.variant):""),to:e.to,isActive:(n=e.to,function(e,t){var a=t.pathname;if("/"===a)return!1;var r=a.replace(/^\//,"").split("/")[0];return n.startsWith("/".concat(r))})},e.name));var n}))}),d=t(7),v=(t(51),function(e){var n=e.config,t=function(e){return r.a.createElement(o.b,{key:e.name,className:"nav-mobile__link",to:e.to},e.name)};return r.a.createElement("nav",{className:"nav-mobile"},Object.entries(n).map(function(e){var n=Object(d.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{key:a,className:"nav-mobile__group"},r.a.createElement("h5",{className:"nav-mobile__group-title"},a),c.map(t))}))}),b=t(22),p=(t(52),function(e){var n=e.children,t=Object(s.a)(e,["children"]);return r.a.createElement("button",t,n)});p.defaultProps={type:"button"};var E=p,h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(a.useState)(e),t=Object(d.a)(n,2),r=t[0],c=t[1];return{value:r,toggle:Object(a.useCallback)(function(){return c(function(e){return!e})},[]),setTrue:Object(a.useCallback)(function(){return c(!0)},[]),setFalse:Object(a.useCallback)(function(){return c(!1)},[])}},g=function(e){var n=h(e);return{value:n.value,toggle:n.toggle}},_=(t(53),function(e){var n=e.children,t=g(!1),a=t.value,c=t.toggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{className:"mobile-menu-switch",onClick:c},r.a.createElement(b.a,{className:"mobile-menu-switch__icon",icon:a?i.f:i.c,size:"lg"})),r.a.createElement("section",{className:Object(m.a)("mobile-menu","mobile-menu--is-".concat(a?"visible":"hidden")),onClick:c},r.a.createElement(E,{className:"mobile-menu__close"},r.a.createElement(b.a,{icon:i.f,size:"lg"})),n))}),j=t(32),O=(t(57),t(58),function(e){var n=e.config,t=e.isOpen,a=e.onMouseLeave,c=function(e){return r.a.createElement(o.b,{key:e.name,className:"drop-down-menu__link",to:e.to},e.name)};return r.a.createElement("div",{className:"drop-down-menu",onMouseLeave:a},r.a.createElement("div",{className:"container container--wide"},r.a.createElement(j.SlideDown,null,t&&r.a.createElement("main",{className:"drop-down-menu__main"},r.a.createElement("nav",{className:"drop-down-menu__nav"},Object.entries(n).map(function(e){var n=Object(d.a)(e,2),t=n[0],o=n[1];return r.a.createElement("div",{key:t,className:"drop-down-menu__group",onClick:a},o.map(c))})),r.a.createElement(u.a,{className:"drop-down-menu__image",src:"images/drop-down-menu.png"})))))}),k=(t(59),function(e){var n=e.logo,t=e.navigation,a=h(),c=a.value,l=a.setFalse,i=a.setTrue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container container--wide"},r.a.createElement("main",{className:"header__main"},r.a.createElement(_,null,r.a.createElement(v,{config:t.sub})),r.a.createElement(f,Object.assign({links:t.main},{onMouseEnter:function(){return i()}})),r.a.createElement(o.b,{to:"/"},r.a.createElement(u.a,Object.assign({className:"header__logo"},n)))))),r.a.createElement(O,Object.assign({isOpen:c,config:t.sub},{onMouseLeave:function(){return l()}})))}),y=(t(60),function(e){var n=e.config,t=function(e){return r.a.createElement(o.b,{key:e.name,className:"nav-bottom__link",to:e.to},e.name)};return r.a.createElement("nav",{className:"nav-bottom"},Object.entries(n).map(function(e){var n=Object(d.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{key:a,className:"nav-bottom__group"},r.a.createElement("h5",{className:"nav-bottom__group-title"},a),c.map(t))}))}),N=(t(61),function(e){var n=e.contacts;return r.a.createElement("div",{className:"social-media"},n.map(function(e){return r.a.createElement("a",{key:e.type,className:"social-media__link",href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{className:"social-media__icon",src:e.icon,alt:e.type}))}))}),w=(t(62),function(e){var n=e.navigation,t=e.contacts;return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container container--wide"},r.a.createElement("main",{className:"footer__main"},r.a.createElement(y,{config:n.sub}),r.a.createElement(N,{contacts:t}))))}),C=t(16),x=function(e){var n=e.children,t=Object(a.useContext)(C.a).template,c=t.header,o=t.footer,l=t.navigation;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,Object.assign({},c,{navigation:l})),r.a.createElement("main",{className:"main"},n),r.a.createElement(w,Object.assign({},o,{navigation:l})))},z=t(11),S=function(e){var n=e.routes,t=e.fallback,c=void 0===t?null:t;return r.a.createElement(a.Suspense,{fallback:c},r.a.createElement(z.c,null,n.map(function(e){return r.a.createElement(z.a,Object.assign({key:e.path},e))})))},A=function(e){return function(n){return r.a.createElement(e,n)}},F=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,98))}),P=Object(a.lazy)(function(){return t.e(4).then(t.bind(null,97))}),L=Object(a.lazy)(function(){return t.e(6).then(t.bind(null,99))}),M=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,96))}),T=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,66))}),W=Object(a.lazy)(function(){return t.e(9).then(t.bind(null,67))}),D=[{path:"/",exact:!0,render:A(P)},{path:"/about/key-roles",render:A(L)},{path:"/contact-us",render:A(T)},{path:"/product/:name",render:A(F)},{path:"/:category?/:name",render:A(M)},{path:"*",render:A(W)}],B=function(){return r.a.createElement("main",{className:"app"},r.a.createElement(x,null,r.a.createElement(S,{routes:D})))},J=t(17),I=t(18),U=t(20),$=t(19),q=t(21),G=function(e){function n(){return Object(J.a)(this,n),Object(U.a)(this,Object($.a)(n).apply(this,arguments))}return Object(q.a)(n,e),Object(I.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(a.Component),H=Object(z.e)(G),K=function(e){function n(e){var t;return Object(J.a)(this,n),(t=Object(U.a)(this,Object($.a)(n).call(this,e))).state={error:!1,info:null},t}return Object(q.a)(n,e),Object(I.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){var e=this.state,n=e.error,t=e.info;return n?r.a.createElement("div",{className:"error-boundary"},r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},r.a.createElement("summary",null,"Something went wrong"),r.a.createElement("p",null,n.toString()),r.a.createElement("hr",null),r.a.createElement("p",null,t.componentStack))):this.props.children}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(63);l.b.add(i.e,i.d);var Q,R=function(e){var n=e.data;return r.a.createElement(K,null,r.a.createElement(C.b,{value:n},r.a.createElement(o.a,{basename:"."},r.a.createElement(H,null,r.a.createElement(B,null)))))},V=document.getElementById("root");Q="data.json",fetch(Object(m.d)(Q)).then(function(e){return e.json()}).then(function(e){Object(c.render)(r.a.createElement(R,{data:e}),V)}).catch(console.error),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,n,t){"use strict";t.d(n,"d",function(){return o}),t.d(n,"a",function(){return l}),t.d(n,"c",function(){return i}),t.d(n,"b",function(){return s});var a=t(7),r=t(0),c=t.n(r),o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".".concat("/");return e.startsWith("http")?e:n.concat(e)},l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.join(" ").replace(/\s+/g," ").trim()},i=function(e,n){return Array.isArray(e)?e.map(function(t,a){return c.a.createElement(r.Fragment,{key:t},t,a<e.length-1&&!n&&c.a.createElement("br",null))}):e},u=function(e,n,t){return t?c.a.createElement("a",{href:t,onClick:function(){!function(e,n){window.dataLayer.push({event:"click",pageLink:n,pageText:e})}(e,t)},target:"_blank"},i(e,n)):i(e,n)},s=function(e,n,t,r){return e.map(function(e){return Object.entries(e).map(function(o){var s=Object(a.a)(o,2),m=s[0],f=s[1];switch(m){case"title":return c.a.createElement("h3",{key:f,className:l("".concat(n,"__title"),t?"".concat(n,"__title--theme-").concat(t):"")},u(f,r,e.to));case"text":return c.a.createElement("div",{className:"".concat(n,"__text-group")},Array.isArray(f)?f.map(function(e){return c.a.createElement("p",{key:e,className:"".concat(n,"__text ").concat(n,"__text--").concat(r)},i(e,r))}):i(f));default:return""}})})}}},[[33,2,3]]]);
//# sourceMappingURL=main.b35a2a88.chunk.js.map