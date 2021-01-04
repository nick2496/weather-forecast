(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,'body {\r\n    font-family: monospace;\r\n    font-size: 20px;\r\n    background-image: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80");\r\n    background-position: center center;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: none;\r\n    grid-template-rows: 1fr 2fr;\r\n    margin: auto;\r\n    height: 500px;\r\n    width: 40vw;\r\n}\r\n\r\n#top {\r\n    border: 2px dashed black;\r\n    padding: 10px;\r\n}\r\n\r\n#bottom {\r\n    border: 2px dashed black;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n}\r\n\r\n.temp {\r\n    float: right;\r\n    transform: rotate(90deg);\r\n    transform-origin: right top 50px;\r\n    font-size: 50px;\r\n    color: white;\r\n}\r\n\r\nbutton {\r\n    background-color: #736372;\r\n    color: white;\r\n    font-family: monospace;\r\n    font-size: 20px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\ninput[type="text"] {\r\n    border-radius: 4px;\r\n    width: 150px;\r\n    height: 20px;\r\n}',""]);const i=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],o=0;o<n.length;o++){var s=n[o],c=r.base?s[0]+r.base:s[0],u=e[c]||0,d="".concat(c," ").concat(u);e[c]=u+1;var l=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:d,updater:g(p,r),references:1}),t.push(d)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,d=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function l(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,m=0;function g(n,r){var e,t,o;if(r.singleton){var i=m++;e=f||(f=c(r)),t=l.bind(null,e,i,!1),o=l.bind(null,e,i,!0)}else e=c(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var c=s(n,r),u=0;u<e.length;u++){var d=a(e[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=c}}}}},r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),t=e(426);r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;const o=document.querySelector("button"),i=document.querySelector("#bottom"),a=(document.querySelector("#top"),async n=>{const r=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=REwSrYlYVnhDXZ3iv8yhevyx1irXVk4F&s=${n}`,{mode:"cors"}),e=(await r.json()).data.images.original.url;i.style.background=`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${e}')`});o.addEventListener("click",(async()=>{const n=document.querySelector("form");let r=n.querySelector("#location").value,e=n.querySelector('input[name="tempUnit"]:checked').value;n.reset();const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r}&units=${e}&appid=d5a6321f1fc003fa5677807979b6abd1`,{mode:"cors"}),o=await t.json(),s=(d=o.name,l=o.sys.country,p=o.coord,f=o.visibility,m=o.sys.sunrise,g=o.sys.sunset,h=o.weather[0].description,b=o.wind.speed,y=o.main,{name:d,country:l,coordinates:p,visibility:f,riseStr:new Date(1e3*m).toLocaleTimeString(),setStr:new Date(1e3*g).toLocaleTimeString(),description:h,windSpeed:b,crux:y}),c="metric"===e?"&#8451":"F",u=`\n    <strong> City </strong>: ${s.name} <br>\n    <strong> Country </strong>: ${s.country} <br>\n    <strong> Latitude </strong>: ${s.coordinates.lat} <strong> Longitude </strong>: ${s.coordinates.lon} <br>\n    <strong> Status </strong>: ${s.description} <br>\n    <strong> Visibility </strong>: ${s.visibility} meter <br>\n    <strong> Sunrise </strong>: ${s.riseStr} <strong> Sunset </strong>: ${s.setStr} <br>\n    <strong> Temperature </strong>: ${s.crux.temp} ${c} <br>\n    <strong> Feels like </strong>: ${s.crux.feels_like} ${c} <br>\n    <strong> Minimum Temp </strong>: ${s.crux.temp_min} ${c} <br>\n    <strong> Maximum Temp </strong>: ${s.crux.temp_max} ${c} <br>\n    <strong> Humidity </strong>: ${s.crux.humidity} % <br>\n    <span class="temp"> ${s.crux.temp} ${c} </span> <br>\n    `;var d,l,p,f,m,g,h,b,y;i.innerHTML=u;const v=s.name;a(s.description),(async n=>{const r=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=REwSrYlYVnhDXZ3iv8yhevyx1irXVk4F&s=${n}`,{mode:"cors"}),e=(await r.json()).data.images.original.url;document.body.style.background=`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${e}')`})(v)}))})()})();