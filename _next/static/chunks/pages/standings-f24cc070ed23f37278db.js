_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"20a2":function(e,t,n){e.exports=n("nOHt")},"3bhu":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o),c=n("YFqc"),i=n.n(c),u=n("20a2");function s(e){var t=Object(u.useRouter)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:e.title}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsx)("header",{className:"text-white text-lg",children:Object(r.jsxs)("div",{className:"p-3 flex flex-row items-center",children:[Object(r.jsx)("div",{className:"mr-10",children:Object(r.jsx)(i.a,{href:"/",children:Object(r.jsx)("img",{src:"/shine.png",height:50,width:50})})}),[{route:"/standings",label:"Standings"},{route:"/schedule",label:"Schedule"}].map((function(e){return Object(r.jsx)("div",{className:"mr-10"+(t.pathname==e.route?" font-bold":""),children:Object(r.jsx)(i.a,{href:e.route,children:e.label})},e.label)}))]})})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var l=d[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;"name"===l&&c||!p.has(f)?(p.add(f),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}b.rewind=function(){};var h=b;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},T6KX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/standings",function(){return n("pnL4")}])},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,b=e.children,h=e.replace,y=e.shallow,v=e.scroll,m=e.locale;"string"===typeof b&&(b=a.default.createElement("a",null,b));var g=a.Children.only(b),j=g&&"object"===typeof g&&g.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),O=r(x,2),w=O[0],_=O[1],P=a.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,a.useEffect)((function(){var e=_&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,_,m,t,n]);var M={ref:P,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,h,y,v,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var C="undefined"!==typeof m?m:n&&n.locale,N=(0,c.getDomainLocale)(p,C,n&&n.locales,n&&n.domainLocales);M.href=N||(0,c.addBasePath)((0,c.addLocale)(p,C,n&&n.defaultLocale))}return a.default.cloneElement(g,M)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},pnL4:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return b})),n.d(t,"default",(function(){return h}));var r=n("nKUr"),o=n("rePB"),a=n("sam0"),c=n("YFqc"),i=n.n(c);function u(e){var t=function(e){switch(e){case"fr-qc":return"bg-fr-qc";default:return"flag-icon-"+e}}(e.countryCode),n="from-"+Object(a.a)(e.bingosyncColorPrimary)+" to-"+Object(a.a)(e.bingosyncColorSecondary);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"flex flex-row items-end",children:[Object(r.jsx)("div",{children:Object(r.jsx)("span",{className:"text-lg md:text-xl mr-5 flag-icon "+t})}),Object(r.jsx)(i.a,{href:"/player/"+e.playerName,children:Object(r.jsx)("span",{className:"text-2xl md:text-3xl mx-5 font-bold text-white cursor-pointer",children:e.playerName})}),e.twitchProps&&Object(r.jsxs)("div",{className:"relative h-20 w-20 mx-5",children:[Object(r.jsx)("img",{src:e.twitchProps.twitchProfilePictureUrl}),Object(r.jsx)("img",{src:"/TwitchGlitchPurple.svg",className:"absolute h-5 w-5 bottom-0 left-0"})]}),e.subHeader&&Object(r.jsx)("span",{className:"text-lg md:text-xl font-bold text-white ml-auto",children:e.subHeader})]}),Object(r.jsx)("div",{className:"my-1 md:my-3 h-1 md:h-2 bg-gradient-to-r "+n})]})}function s(e){return Object(r.jsxs)("div",{className:"w-full mx-auto",children:[Object(r.jsx)("div",{className:"w-full text-3xl md:text-5xl font-bold text-center mb-5",children:"Division "+e.division}),Object(r.jsx)("table",{className:"w-full",children:Object(r.jsx)("tbody",{children:e.standings.length>0&&e.standings.map((function(t){var n;return n="string"===typeof t.player?{name:t.player,primaryColor:a.b.Yellow,secondaryColor:a.b.Blue,country:"",division:e.division}:t.player,Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:Object(r.jsx)(u,{playerName:n.name,bingosyncColorPrimary:n.primaryColor,bingosyncColorSecondary:n.secondaryColor,countryCode:n.country,subHeader:t.wins+" - "+(t.totalGames-t.wins)})})},n.name)}))})})]})}var l=n("3bhu"),f=n("20a2");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=!0;function h(e){var t=Object(f.useRouter)();return Object(r.jsxs)("div",{className:" bg-tile-background bg-repeat min-h-screen",children:[!t.query.hideHeader&&Object(r.jsx)(l.a,{title:"Super Mario Sunshine Bingo League - Standings"}),Object(r.jsx)("main",{className:"text-white flex flex-row flex-wrap w-full",children:e.standings.length>0&&e.standings.map((function(e){return Object(r.jsx)("div",{className:"mx-auto my-10",children:Object(r.jsx)(s,p({},e))},e.division)}))})]})}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},sam0:function(e,t,n){"use strict";var r;function o(e){if("string"===typeof e)return"bingosync-"+e;switch(e){case r.Orange:return"bingosync-orange";case r.Red:return"bingosync-red";case r.Blue:return"bingosync-blue";case r.Green:return"bingosync-green";case r.Purple:return"bingosync-purple";case r.Navy:return"bingosync-navy";case r.Teal:return"bingosync-teal";case r.Brown:return"bingosync-brown";case r.Pink:return"bingosync-pink";case r.Yellow:return"bingosync-yellow"}}n.d(t,"a",(function(){return o})),function(e){e[e.Orange=0]="Orange",e[e.Red=1]="Red",e[e.Blue=2]="Blue",e[e.Green=3]="Green",e[e.Purple=4]="Purple",e[e.Navy=5]="Navy",e[e.Teal=6]="Teal",e[e.Brown=7]="Brown",e[e.Pink=8]="Pink",e[e.Yellow=9]="Yellow"}(r||(r={})),t.b=r},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,a.useRef)(),s=(0,a.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=n("q1tI"),c=o(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var u=new Map}},[["T6KX",0,1,2]]]);