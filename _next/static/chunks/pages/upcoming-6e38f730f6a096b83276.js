_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(c.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},c=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,c=e.hasQuery,s=void 0!==c&&c;return n||r&&s}},"20a2":function(e,t,n){e.exports=n("nOHt")},"3bhu":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("nKUr"),r=n("g4pe"),c=n.n(r),s=n("YFqc"),o=n.n(s),l=n("20a2");function i(e){var t=Object(l.useRouter)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)("title",{children:e.title}),Object(a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(a.jsx)("header",{className:"text-white text-lg",children:Object(a.jsxs)("div",{className:"p-3 flex flex-row items-center",children:[Object(a.jsx)("div",{className:"mr-10",children:Object(a.jsx)(o.a,{href:"/",children:Object(a.jsx)("img",{src:"/shine.png",height:50,width:50})})}),[{route:"/standings",label:"Standings"},{route:"/upcoming",label:"Upcoming Matches"},{route:"/schedule",label:"Regular Season Schedule"},{route:"/playoffs/bracket",label:"Playoff Bracket"}].map((function(e){return Object(a.jsx)("div",{className:"mr-10"+(t.pathname==e.route?" font-bold":""),children:Object(a.jsx)(o.a,{href:e.route,children:e.label})},e.label)}))]})})]})}},"68r9":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upcoming",function(){return n("9W7L")}])},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(n,r,c):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(a=n("Xuae"))&&a.__esModule?a:{default:a},s=n("lwAK"),o=n("FYa8"),l=n("/0+H");function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var c=!0,s=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){s=!0;var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?c=!1:e.add(o)}switch(r.type){case"title":case"base":t.has(r.type)?c=!1:t.add(r.type);break;case"meta":for(var l=0,i=h.length;l<i;l++){var u=h[l];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?c=!1:n.add(u);else{var d=r.props[u],f=a[u]||new Set;"name"===u&&s||!f.has(d)?(f.add(d),a[u]=f):c=!1}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(s.AmpStateContext),a=(0,r.useContext)(o.HeadManagerContext);return r.default.createElement(c.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},"9W7L":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return s})),n.d(t,"default",(function(){return o}));var a=n("nKUr"),r=n("POt6"),c=(n("q1tI"),n("3bhu")),s=!0;function o(e){return Object(a.jsxs)("div",{className:"bg-tile-background bg-repeat min-h-screen overflow-x-auto",children:[Object(a.jsx)(c.a,{title:"Super Mario Sunshine Bingo League - Upcoming Matches"}),Object(a.jsx)("main",{className:"text-white flex flex-col h-full",children:Object(a.jsx)("div",{className:"sm:w-10/12 sm:mx-auto sm:my-auto",children:e.matches.length>0?Object(a.jsx)(r.a,{matches:e.matches,tableTitle:"Upcoming Matches",forBroadcast:!1}):Object(a.jsx)("div",{className:"text-3xl mx-auto text-center mb-5 font-bold",children:"No matches currently scheduled, check back later!"})})})]})}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},POt6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("nKUr"),r=n("ODXe"),c=n("YFqc"),s=n.n(c),o=n("q1tI"),l=n.n(o),i=n("uh5Q"),u=n("SZEZ");function d(e){return Object(a.jsx)("div",{className:"flex flex-row justify-center",children:e.isExpanded?Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(a.jsx)("path",{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}),Object(a.jsx)("path",{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"})]}):Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(a.jsx)("path",{d:"M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z"}),Object(a.jsx)("path",{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z"})]})})}var h=n("d/a7");function f(e){var t,n,c=e.match,o=e.forBroadcast,f=l.a.useState(!1),m=Object(r.a)(f,2),b=m[0],x=m[1],j=l.a.useCallback((function(){x(!b)}),[b]),p=b||"played"==c.status&&e.forceSpoilers,O="";c.matchTime?(n=Object(a.jsx)(h.a,{matchTime:c.matchTime,forceEst:o,short:o}),Object(i.a)(1e3*c.matchTime)||"scheduled"!==c.status||(O+=" text-gray-400")):n="TBD","played"==c.status?O+=" bg-blue-500":"unscheduled"==c.status?O+=" bg-red-300":"scheduled"==c.status&&(O+=" bg-yellow-500"),o&&(O+=" xl:h-24");var y="text-right"+(p&&c.homePlayer==c.winner?" font-bold bg-yellow-600":""),v="text-left"+(p&&c.awayPlayer==c.winner?" font-bold bg-yellow-600":"");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("tr",{onClick:"played"==c.status?j:void 0,className:"h-8 sm:h-12 lg:h-16 bg-opacity-40 text-center"+O,children:[!o&&Object(a.jsx)("td",{className:"hidden sm:table-cell",children:"played"==c.status&&Object(a.jsx)(d,{isExpanded:p})}),Object(a.jsx)("td",{children:n}),Object(a.jsx)("td",{className:y,children:Object(a.jsx)(s.a,{href:"/player/"+c.homePlayer,children:Object(a.jsx)("span",{className:"cursor-pointer",children:c.homePlayer})})}),Object(a.jsx)("td",{children:"Vs."}),Object(a.jsx)("td",{className:v,children:Object(a.jsx)(s.a,{href:"/player/"+c.awayPlayer,children:Object(a.jsx)("span",{className:"cursor-pointer",children:c.awayPlayer})})}),Object(a.jsx)("td",{className:"hidden sm:table-cell",children:c.division}),Object(a.jsx)("td",{children:null!==(t=c.format)&&void 0!==t?t:"TBD"}),Object(a.jsx)("td",{children:c.channel?"Offline"==c.channel?"Offline":Object(a.jsx)("div",{className:"flex flex-row justify-center",children:Object(a.jsx)(u.a,{channel:c.channel,forBroadcast:o})}):"TBD"})]}),p&&Object(a.jsxs)("tr",{className:"h-16 bg-opacity-40 bg-blue-500",children:[Object(a.jsx)("td",{className:"hidden sm:table-cell"}),Object(a.jsx)("td",{children:"Final Score:"}),Object(a.jsx)("td",{className:y,children:c.homeScore}),Object(a.jsx)("td",{className:"text-center",children:" - "}),Object(a.jsx)("td",{className:v,children:c.awayScore}),Object(a.jsx)("td",{className:"hidden sm:table-cell"}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{children:c.matchVod?Object(a.jsx)("a",{target:"_blank",href:c.matchVod,children:"Match Vod"}):"Offline"===c.channel?"No VOD":"Match VOD Soon"})]})]})}function m(e){var t=e.forBroadcast?"text-5xl":"text-3xl",n=e.forBroadcast?"text-3xl":"text-xs sm:text-sm md:text-lg lg:text-2xl",r=e.forBroadcast?"text-3xl":"text-xs sm:text-sm md:text-lg lg:text-xl";return Object(a.jsxs)("div",{className:"text-white",children:[Object(a.jsx)("div",{className:t+" mx-auto text-center mb-5 font-bold",children:e.tableTitle}),Object(a.jsxs)("table",{className:"w-full mx-auto table-auto sm:table-fixed",children:[Object(a.jsx)("thead",{className:n+" bg-opacity-40 bg-yellow-700",children:Object(a.jsxs)("tr",{children:[!e.forBroadcast&&Object(a.jsx)("th",{className:"hidden sm:w-1/12 sm:table-cell"}),Object(a.jsx)("th",{className:"w-1/12 sm:w-2/12 mx-2",children:"Time"}),Object(a.jsx)("th",{className:"w-3/12 sm:w-2/12 mx-2 text-right",children:e.hideHomeAway?"":"Home"}),Object(a.jsx)("th",{className:"w-1/12"}),Object(a.jsx)("th",{className:"w-3/12 sm:w-2/12 text-left mx-2",children:e.hideHomeAway?"":"Away"}),Object(a.jsx)("th",{className:"w-1/12 mx-2 hidden sm:table-cell",children:"Division"}),Object(a.jsx)("th",{className:"w-2/12 mx-2",children:"Format"}),Object(a.jsx)("th",{className:"w-2/12 mx-2",children:"Channel"})]})}),Object(a.jsx)("tbody",{className:r,children:e.matches.length>0&&e.matches.map((function(t){return Object(a.jsx)(f,{match:t,forceSpoilers:e.forceSpoilers,forBroadcast:e.forBroadcast},t.homePlayer+t.awayPlayer+t.matchTime)}))})]})]})}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),c=n("ZhPi"),s=n("Bnag");e.exports=function(e){return a(e)||r(e)||c(e)||s()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),c=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),o=n("a1gu"),l=n("Nsbk");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){s(n,e);var t=i(n);function n(e){var c;return r(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(a(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}},[["68r9",0,1,2,3]]]);