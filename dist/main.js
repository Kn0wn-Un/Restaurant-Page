!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=(()=>{const e=e=>{e.innerHTML="",e.innerHTML="<h3> Home </h3><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo sodales, eleifend metus a, tincidunt nunc. \n        Vivamus eget eros consequat, efficitur est a, \n        placerat elit. Aenean vestibulum velit vitae lorem luctus, \n        vitae iaculis ex imperdiet. Nullam sed iaculis diam. \n        Quisque sapien quam, pharetra in dignissim ac, \n        lacinia sed tortor. Vivamus eget purus non leo mattis luctus. \n        Nunc bibendum velit a porttitor eleifend. \n        Morbi varius sapien quis enim sagittis, in efficitur justo blandit. \n        Donec rutrum accumsan velit, ut placerat mauris varius vel. \n        In consectetur, dui id bibendum ultricies, sapien libero venenatis \n        tortor, blandit feugiat mauris turpis sit amet risus. \n        Donec laoreet lacus eget ante efficitur, sit amet pretium turpis \n        vulputate."};return{addTab:t=>{let n=document.querySelector(".tabs-headings"),i=document.createElement("div");i.innerHTML="Home",i.id="Home",i.addEventListener("click",()=>{e(t)}),n.appendChild(i),e(t)}}})(),r=(()=>{const e=e=>{e.innerHTML="",e.innerHTML="<h3> About </h3><br>TEsT 1"};return{addTab:t=>{let n=document.querySelector(".tabs-headings"),i=document.createElement("div");i.innerHTML="About",i.id="About",i.addEventListener("click",()=>{e(t)}),n.appendChild(i)}}})(),u=(()=>{const e=e=>{e.innerHTML="",e.innerHTML="<h3> Menu </h3><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo sodales, eleifend metus a, tincidunt nunc. \n        Vivamus eget eros consequat, efficitur est a, \n        placerat elit. Aenean vestibulum velit vitae lorem luctus, \n        vitae iaculis ex imperdiet. Nullam sed iaculis diam. \n        Quisque sapien quam, pharetra in dignissim ac, \n        lacinia sed tortor. Vivamus eget purus non leo mattis luctus. \n        Nunc bibendum velit a porttitor eleifend. \n        Morbi varius sapien quis enim sagittis, in efficitur justo blandit. \n        Donec rutrum accumsan velit, ut placerat mauris varius vel. \n        In consectetur, dui id bibendum ultricies, sapien libero venenatis \n        tortor, blandit feugiat mauris turpis sit amet risus. \n        Donec laoreet lacus eget ante efficitur, sit amet pretium turpis \n        vulputate."};return{addTab:t=>{let n=document.querySelector(".tabs-headings"),i=document.createElement("div");i.innerHTML="Menu",i.id="Menu",i.addEventListener("click",()=>{e(t)}),n.appendChild(i)}}})();(()=>{const e=document.querySelector(".container");return{init:()=>{(()=>{let t=document.createElement("h1");t.innerHTML="Restaurant Name",e.appendChild(t)})(),(()=>{let t=document.createElement("div");t.classList.add("tabs-container");let n=document.createElement("div");n.classList.add("tabs-headings");let a=document.createElement("div");a.classList.add("tabs-contents"),t.appendChild(n),t.appendChild(a),e.appendChild(t),i.addTab(a),u.addTab(a),r.addTab(a)})()}}})().init()}]);