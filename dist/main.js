!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=(()=>{const e=e=>{let t=document.querySelector(".tabs-contents"),n=document.querySelector(".active-tab");null!=n&&n.classList.remove("active-tab"),e.classList.add("active-tab"),document.querySelector("body").style.background='url("dist/table.jpeg")',document.querySelector("body").style.backgroundRepeat="no-repeat",document.querySelector("body").style.backgroundSize="100% 100%",t.innerHTML="",t.innerHTML='<h2> Welcome to,</h2><br>\n        <h3>The IceHut</h3><br>\n        The IceHut is a Restaurant, bar and ice-cream parlor located in Antartica.\n        We have awesome recipes and the most talented chefs in town!(&#128039;)<div class="review">\n        <img src="dist/penguin.jpg" alt="Penguin">\n        <div class="review-title">Our customer review:</div>\n        <div class="review-name">Bob</div>\n        <div class="review-sub">Local Penguin, Happy customer</div>\n        <div class="review-text"><i>"penguin noises"</i></div>\n        <div class="review-translate">(Translation: I don\'t know bro, I don\'t speak penguin)</div>\n        </div>'};return{addTab:()=>{let t=document.querySelector(".tabs-headings"),n=document.createElement("div");n.classList.add("head"),n.innerHTML="Home",n.id="Home",n.addEventListener("click",()=>{e(n)}),t.appendChild(n),e(n)}}})(),i=(()=>{const e=e=>{let t=document.querySelector(".tabs-contents"),n=document.querySelector(".active-tab");document.querySelector("body").style.background="none",null!=n&&n.classList.remove("active-tab"),e.classList.add("active-tab"),t.innerHTML="",t.innerHTML="<h3> About </h3><br> vitae iaculis ex imperdiet. Nullam sed iaculis diam. \n        Quisque sapien quam, pharetra in dignissim ac, \n        lacinia sed tortor. Vivamus eget purus non leo mattis luctus. \n        Nunc bibendum velit a porttitor eleifend. \n        Morbi varius sapien quis enim sagittis, in efficitur justo blandit. \n        Donec rutrum accumsan velit, ut placerat mauris varius vel. "};return{addTab:()=>{let t=document.querySelector(".tabs-headings"),n=document.createElement("div");n.classList.add("head"),n.innerHTML="About",n.id="About",n.addEventListener("click",()=>{e(n)}),t.appendChild(n)}}})(),r=(()=>{const e=e=>{let t=document.querySelector(".tabs-contents"),n=document.querySelector(".active-tab");document.querySelector("body").style.background="black",null!=n&&n.classList.remove("active-tab"),e.classList.add("active-tab"),t.innerHTML="",t.innerHTML="<h3> Menu </h3><br>\n        tortor, blandit feugiat mauris turpis sit amet risus. \n        Donec laoreet lacus eget ante efficitur, sit amet pretium turpis \n        vulputate."};return{addTab:()=>{let t=document.querySelector(".tabs-headings"),n=document.createElement("div");n.classList.add("head"),n.innerHTML="Menu",n.id="Menu",n.addEventListener("click",()=>{e(n)}),t.appendChild(n)}}})();(()=>{const e=document.querySelector(".container");return{init:()=>{(()=>{let t=document.createElement("h1");t.innerHTML="IceHut",t.style.color="rgb(100, 100, 255)",e.appendChild(t)})(),(()=>{let t=document.createElement("div");t.classList.add("tabs-container");let n=document.createElement("div");n.classList.add("tabs-headings");let c=document.createElement("div");c.classList.add("tabs-contents"),t.appendChild(n),t.appendChild(c),e.appendChild(t),a.addTab(c),r.addTab(c),i.addTab(c)})()}}})().init()}]);