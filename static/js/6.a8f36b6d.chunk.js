(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){"use strict";var n=t(0),c=t.n(n),s=t(12),m=(t(68),function(e){var a=e.images;return c.a.createElement("section",{className:"showcase"},c.a.createElement("div",{className:"container container--normal"},c.a.createElement("div",{className:"showcase__image-list"},a&&a.map(function(e){return c.a.createElement("figure",{key:e.src,className:"showcase__image-wrapper"},c.a.createElement(s.a,Object.assign({className:"showcase__image"},e)))}))))});a.a=m},71:function(e,a,t){"use strict";var n=t(0),c=t.n(n),s=t(3),m=t(11),l=t(22),r=t(10),i=t(16),o=(t(67),Object(m.e)(function(e){var a=e.location.pathname,t=e.nextRef,m=e.prevRef,o=Object(n.useContext)(i.a).template.navigation.sub,u=Object.values(o).filter(function(e){return e.find(function(e){return e.to===a})})[0].slice().reverse(),_=u.findIndex(function(e){return e.to===a}),v=_>0?u[_-1]:null,E=_>1?u[_-2]:null,b=u[_],f=_<u.length-1?u[_+1]:null,N=_<u.length?u[_]:null;return c.a.createElement("nav",{className:"nav-sub"},c.a.createElement("div",{className:"container container--normal"},c.a.createElement("main",{className:"nav-sub__main"},N?c.a.createElement(c.a.Fragment,null,f&&c.a.createElement(s.b,{className:"nav-sub__chevron nav-sub__chevron--right",to:f.to},c.a.createElement("span",{ref:t},c.a.createElement(l.a,{icon:r.e}))),c.a.createElement(s.b,{className:"nav-sub__link nav-sub__link--active nav-sub__link--".concat(b.variant),to:b.to},b.name)):c.a.createElement("div",{className:"stub"}),v?c.a.createElement(c.a.Fragment,null,c.a.createElement(s.b,{className:"nav-sub__link nav-sub__link--roily",to:v.to},v.name),E&&c.a.createElement(s.b,{className:"nav-sub__link nav-sub__link--roily",to:v.to},v.name),c.a.createElement(s.b,{className:"nav-sub__chevron nav-sub__chevron--left",to:v.to},c.a.createElement("span",{ref:m},c.a.createElement(l.a,{icon:r.d})))):c.a.createElement("div",{className:"stub"}))))}));a.a=o},86:function(e,a,t){},87:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(16),m=t(71),l=t(12),r=(t(86),function(e){var a=e.photo,t=e.position,n=e.name,s=e.info;return c.a.createElement("div",{className:"teammate"},c.a.createElement(l.a,{className:"teammate__photo",src:a,alt:n}),c.a.createElement("p",{className:"teammate__position"},t),c.a.createElement("p",{className:"teammate__text teammate__name"},n),c.a.createElement("p",{className:"teammate__text teammate__info"},s))}),i=(t(87),function(e){var a=e.team;return c.a.createElement("section",{className:"team"},c.a.createElement("div",{className:"team__container container"},c.a.createElement("main",{className:"team__main"},a.map(function(e){return c.a.createElement(r,Object.assign({key:e.name},e))}))))}),o=t(69);a.default=function(){var e=Object(n.useContext)(s.a).pages.keyRoles,a=e.team,t=e.showcase.images;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null),c.a.createElement(i,{team:a}),c.a.createElement(o.a,{images:t}))}}}]);
//# sourceMappingURL=6.a8f36b6d.chunk.js.map