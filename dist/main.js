(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\r\n    font-family: monospace;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: none;\r\n    grid-template-rows: 1fr 2fr;\r\n    margin: auto;\r\n    height: 500px;\r\n    width: 40vw;\r\n}\r\n\r\n#left {\r\n    border: 2px dashed black;\r\n    padding: 10px;\r\n}\r\n\r\n#right {\r\n    border: 2px dashed black;\r\n    padding: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.temp {\r\n    float: right;\r\n    transform: rotate(90deg);\r\n    transform-origin: right top 50px;\r\n    font-size: 50px;\r\n    color: white;\r\n}\r\n\r\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var s=e[o],c=n.base?s[0]+n.base:s[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var d=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:l,updater:g(p,n),references:1}),r.push(l)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function g(e,n){var t,r,o;if(n.singleton){var i=m++;t=f||(f=c(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=c(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var c=s(e,n),u=0;u<t.length;u++){var l=a(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=document.querySelector("button"),i=document.querySelector("#right"),a=(document.querySelector("#left"),async e=>{const n=await fetch(`http://api.giphy.com/v1/gifs/translate?api_key=REwSrYlYVnhDXZ3iv8yhevyx1irXVk4F&s=${e}`,{mode:"cors"}),t=(await n.json()).data.images.original.url;i.style.background=`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${t}')`});o.addEventListener("click",(async()=>{const e=document.querySelector("form");let n=e.querySelector("#location").value,t=e.querySelector('input[name="tempUnit"]:checked').value;e.reset();const r=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&units=${t}&appid=d5a6321f1fc003fa5677807979b6abd1`,{mode:"cors"}),o=await r.json(),s=(l=o.name,d=o.sys.country,p=o.coord,f=o.visibility,m=o.sys.sunrise,g=o.sys.sunset,h=o.weather[0].description,v=o.wind.speed,y=o.main,{name:l,country:d,coordinates:p,visibility:f,riseStr:new Date(1e3*m).toLocaleTimeString(),setStr:new Date(1e3*g).toLocaleTimeString(),description:h,windSpeed:v,crux:y}),c="metric"===t?"&#8451":"F",u=`\n    <strong> City </strong>: ${s.name} <br>\n    <strong> Country </strong>: ${s.country} <br>\n    <strong> Latitude </strong>: ${s.coordinates.lat} <strong> Longitude </strong>: ${s.coordinates.lon} <br>\n    <strong> Status </strong>: ${s.description} <br>\n    <strong> Visibility </strong>: ${s.visibility} meter <br>\n    <strong> Sunrise </strong>: ${s.riseStr} <strong> Sunset </strong>: ${s.setStr} <br>\n    <strong> Temperature </strong>: ${s.crux.temp} ${c} <br>\n    <strong> Feels like </strong>: ${s.crux.feels_like} ${c} <br>\n    <strong> Minimum Temp </strong>: ${s.crux.temp_min} ${c} <br>\n    <strong> Maximum Temp </strong>: ${s.crux.temp_max} ${c} <br>\n    <strong> Humidity </strong>: ${s.crux.humidity} % <br>\n    <span class="temp"> ${s.crux.temp} ${c} </span> <br>\n    `;var l,d,p,f,m,g,h,v,y;i.innerHTML=u;const b=s.name;a(s.description),(async e=>{const n=await fetch(`http://api.giphy.com/v1/gifs/translate?api_key=REwSrYlYVnhDXZ3iv8yhevyx1irXVk4F&s=${e}`,{mode:"cors"}),t=(await n.json()).data.images.original.url;document.body.style.background=`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${t}')`})(b)}))})()})();