(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(17),s=t(12),i=t(8),l=(t(48),function(e){var a=e.images,t=e.slideshow,l=void 0===t||t,m=e.delay,u=void 0===m?5e3:m,o=Object(r.useState)(a[0]),d=Object(n.a)(o,2),_=d[0],f=d[1],E=function(e){return Object.is(e,_)},p=Object(r.useCallback)(function(e,a){var t=e.findIndex(function(e){return Object.is(e,a)});return e[t===e.length-1?0:t+1]},[]);Object(r.useEffect)(function(){if(l){var e=setInterval(function(){f(p(a,_))},u);return function(){return clearInterval(e)}}},[a,_,u,l,p]);return c.a.createElement("div",{className:"image-slider"},c.a.createElement("figure",{className:"image-slider__preview"},a.map(function(e){return c.a.createElement(s.a,Object.assign({key:e.src,className:Object(i.a)("image-slider__image","image-slider__image--is-".concat(E(e)?"active":"hidden"))},e))})),c.a.createElement("div",{className:"image-slider__controls"},a.map(function(e){return c.a.createElement("div",{key:e.src,className:Object(i.a)("image-slider__control",E(e)?"image-slider__control--is-active":""),onClick:function(){return f(e)}})})))}),m=(t(49),function(e){var a=e.title,t=e.text;return c.a.createElement("section",{className:"who-we-are"},c.a.createElement("main",{className:"who-we-are__main"},c.a.createElement("h2",{className:"who-we-are__title"},a),c.a.createElement("p",{className:"who-we-are__text"},t)))}),u=(t(50),function(e){var a=e.card;return c.a.createElement("div",{className:"product-card"},c.a.createElement("h4",{className:"product-card__title"},a.title),c.a.createElement(s.a,{className:"product-card__image",src:a.image,alt:a.title}),c.a.createElement("p",{className:"product-card__text"},a.text))}),o=(t(51),function(e){var a=e.title,t=e.cards;return c.a.createElement("section",{className:"useful-products"},c.a.createElement("div",{className:"container container--normal"},c.a.createElement("header",{className:"useful-products__header"},c.a.createElement("h3",{className:"useful-products__title"},a)),c.a.createElement("main",{className:"useful-products__main"},t.map(function(e){return c.a.createElement(u,Object.assign({key:e.title},{card:e}))}))))}),d=(t(52),function(e){var a=e.card;return c.a.createElement("div",{className:"expertise-card"},c.a.createElement("main",{className:"expertise-card__main expertise-card__main--theme-".concat(a.variant)},c.a.createElement("h4",{className:"expertise-card__title"},a.title),c.a.createElement("figure",{className:"expertise-card__picture"},c.a.createElement(s.a,{className:"expertise-card__image",src:a.image,alt:a.title}))),c.a.createElement("footer",{className:"expertise-card__footer"},c.a.createElement("p",{className:"expertise-card__text"},a.text)))}),_=(t(53),function(e){var a=e.title,t=e.cards;return c.a.createElement("section",{className:"expertise-areas"},c.a.createElement("div",{className:"container container--normal"},c.a.createElement("header",{className:"expertise-areas__header"},c.a.createElement("h3",{className:"expertise-areas__title"},a)),c.a.createElement("main",{className:"expertise-areas__main"},t.map(function(e){return c.a.createElement(d,Object.assign({key:e.title},{card:e}))}))))}),f=t(9);a.default=function(){var e=Object(r.useContext)(f.a).pages.home,a=e.mainSlider,t=e.whoWeAre,n=e.usefulProducts,s=e.expertiseAreas;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l,{images:a}),c.a.createElement(m,t),c.a.createElement(o,n),c.a.createElement(_,s))}}}]);
//# sourceMappingURL=3.57902324.chunk.js.map