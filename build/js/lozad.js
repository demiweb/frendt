(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(t,e,r){
/*! lozad.js - v1.14.0 - 2019-10-19
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
t.exports=function(){"use strict";var t="undefined"!=typeof document&&document.documentMode,e={rootMargin:"0px",threshold:0,load:function(e){if("picture"===e.nodeName.toLowerCase()){var r=document.createElement("img");t&&e.getAttribute("data-iesrc")&&(r.src=e.getAttribute("data-iesrc")),e.getAttribute("data-alt")&&(r.alt=e.getAttribute("data-alt")),e.append(r)}if("video"===e.nodeName.toLowerCase()&&!e.getAttribute("data-src")&&e.children){for(var a=e.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);e.load()}if(e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")),e.getAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset")),e.getAttribute("data-background-image"))e.style.backgroundImage="url('"+e.getAttribute("data-background-image").split(",").join("'),url('")+"')";else if(e.getAttribute("data-background-image-set")){var n=e.getAttribute("data-background-image-set").split(","),d=n[0].substr(0,n[0].indexOf(" "))||n[0];d=-1===d.indexOf("url(")?"url("+d+")":d,1===n.length?e.style.backgroundImage=d:e.setAttribute("style",(e.getAttribute("style")||"")+"background-image: "+d+"; background-image: -webkit-image-set("+n+"); background-image: image-set("+n+")")}e.getAttribute("data-toggle-class")&&e.classList.toggle(e.getAttribute("data-toggle-class"))},loaded:function(){}};function r(t){t.setAttribute("data-loaded",!0)}var a=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var t,o,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},e,n),s=d.root,u=d.rootMargin,g=d.threshold,c=d.load,l=d.loaded,b=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(b=new IntersectionObserver((t=c,o=l,function(e,i){e.forEach((function(e){(0<e.intersectionRatio||e.isIntersecting)&&(i.unobserve(e.target),a(e.target)||(t(e.target),r(e.target),o(e.target)))}))}),{root:s,rootMargin:u,threshold:g})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(i,s),e=0;e<t.length;e++)a(t[e])||(b?b.observe(t[e]):(c(t[e]),r(t[e]),l(t[e])))},triggerLoad:function(t){a(t)||(c(t),r(t),l(t))},observer:b}}}()}}]);
//# sourceMappingURL=lozad.js.map