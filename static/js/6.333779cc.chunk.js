(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){"use strict";var n=t(0),c=t.n(n),s=t(3),m=t(11),l=t(22),r=t(10),i=t(16),o=(t(67),Object(m.e)(function(e){var a=e.location.pathname,t=Object(n.useContext)(i.a).template.navigation.sub,m=Object.values(t).filter(function(e){return e.find(function(e){return e.to===a})})[0].slice().reverse(),o=m.findIndex(function(e){return e.to===a}),u=o>0?m[o-1]:null,_=o>1?m[o-2]:null,v=m[o],E=o<m.length-1?m[o+1]:null,b=o<m.length?m[o]:null;return c.a.createElement("nav",{className:"nav-sub"},c.a.createElement("div",{className:"container container--normal"},c.a.createElement("main",{className:"nav-sub__main"},b?c.a.createElement(c.a.Fragment,null,E&&c.a.createElement(s.b,{className:"nav-sub__chevron nav-sub__chevron--right",to:E.to},c.a.createElement(l.a,{icon:r.e})),c.a.createElement(s.b,{className:"nav-sub__link nav-sub__link--active nav-sub__link--".concat(v.variant),to:v.to},v.name)):c.a.createElement("div",{className:"stub"}),u?c.a.createElement(c.a.Fragment,null,c.a.createElement(s.b,{className:"nav-sub__link nav-sub__link--roily",to:u.to},u.name),_&&c.a.createElement(s.b,{className:"nav-sub__link nav-sub__link--roily",to:u.to},u.name),c.a.createElement(s.b,{className:"nav-sub__chevron nav-sub__chevron--left",to:u.to},c.a.createElement(l.a,{icon:r.d}))):c.a.createElement("div",{className:"stub"}))))}));a.a=o},70:function(e,a,t){"use strict";var n=t(0),c=t.n(n),s=t(12),m=(t(68),function(e){var a=e.images;return c.a.createElement("section",{className:"showcase"},c.a.createElement("div",{className:"container container--normal"},c.a.createElement("div",{className:"showcase__image-list"},a&&a.map(function(e){return c.a.createElement("figure",{key:e.src,className:"showcase__image-wrapper"},c.a.createElement(s.a,Object.assign({className:"showcase__image"},e)))}))))});a.a=m},85:function(e,a,t){},86:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(16),m=t(69),l=t(12),r=(t(85),function(e){var a=e.photo,t=e.position,n=e.name,s=e.info;return c.a.createElement("div",{className:"teammate"},c.a.createElement(l.a,{className:"teammate__photo",src:a,alt:n}),c.a.createElement("p",{className:"teammate__position"},t),c.a.createElement("p",{className:"teammate__text teammate__name"},n),c.a.createElement("p",{className:"teammate__text teammate__info"},s))}),i=(t(86),function(e){var a=e.team;return c.a.createElement("section",{className:"team"},c.a.createElement("div",{className:"team__container container"},c.a.createElement("main",{className:"team__main"},a.map(function(e){return c.a.createElement(r,Object.assign({key:e.name},e))}))))}),o=t(70);a.default=function(){var e=Object(n.useContext)(s.a).pages.keyRoles,a=e.team,t=e.showcase.images;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null),c.a.createElement(i,{team:a}),c.a.createElement(o.a,{images:t}))}}}]);
//# sourceMappingURL=6.333779cc.chunk.js.map