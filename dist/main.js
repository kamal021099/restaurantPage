(()=>{"use strict";var e={d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{k:()=>t}),console.log("hello");let t=document.querySelector("#content"),n=document.createElement("h1");n.textContent="Knead Cake",n.id="logo",t.appendChild(n);let l=document.createElement("div");l.classList.add("tablink-container"),t.appendChild(l);let o=document.createElement("button");o.textContent="Home",o.classList.add("tablink"),l.appendChild(o),o.addEventListener("click",(()=>{let e,n;for(n=document.getElementsByClassName("tablink"),e=0;e<n.length;e++)n[e].style.backgroundColor="";o.style.backgroundColor="red",c.textContent="",function(){let e=document.createElement("div");e.textContent="hey, fudge here",e.classList.add("tab-content"),t.querySelector("#page").appendChild(e)}()}));let a=document.createElement("button");a.textContent="About",a.classList.add("tablink"),l.appendChild(a),a.addEventListener("click",(()=>{let e,n;for(n=document.getElementsByClassName("tablink"),e=0;e<n.length;e++)n[e].style.backgroundColor="";a.style.backgroundColor="red",c.textContent="",function(){let e=document.createElement("div");e.textContent="about",e.classList.add("tab-content"),t.querySelector("#page").appendChild(e)}()}));let d=document.createElement("button");d.textContent="Contact",d.classList.add("tablink"),l.appendChild(d),d.addEventListener("click",(()=>{let e,n;for(n=document.getElementsByClassName("tablink"),e=0;e<n.length;e++)n[e].style.backgroundColor="";d.style.backgroundColor="red",c.textContent="",function(){let e=document.createElement("div");e.textContent="contact",e.classList.add("tab-content"),t.querySelector("#page").appendChild(e)}()}));let c=document.createElement("div");t.appendChild(c),c.id="page"})();