!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";function o(e){console.log("::: Running checkForName :::",e);["Picard","Janeway","Kirk","Archer","Georgiou"].includes(e)&&alert("Welcome, Captain!")}function r(e){e.preventDefault();let n=document.getElementById("name").value;Client.checkForName(n),console.log("::: Form Submitted :::"),fetch("http://localhost:8080/test").then(e=>e.json()).then((function(e){document.getElementById("results").innerHTML=e.message}))}t.r(n),t.d(n,"checkForName",(function(){return o})),t.d(n,"handleSubmit",(function(){return r}));t(0),t(1),t(2),t(3),t(4);console.log(o),alert("Webpack working")}]);
//# sourceMappingURL=main.js.map