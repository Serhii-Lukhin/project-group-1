(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();new Swiper(".swiper",{slidesPerView:1,spaceBetween:18,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:4}}});const b=document.querySelectorAll('a[href*="#"]');for(let t of b)t.addEventListener("click",function(o){o.preventDefault();const s=t.getAttribute("href").substr(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})});let i=0;const A="review-prev",L="review-next",h="review-slidebar",g="review-slidebar-wrapper",w="review-slidebar-status-point",l="review-ssp-active",c=document.querySelector("."+A),d=document.querySelector("."+L),m=document.querySelector("."+h),u=document.querySelector("."+g),f=document.querySelectorAll("."+w);c.addEventListener("click",function(){v("prev"),p(-1)});d.addEventListener("click",function(){v("next"),p(1)});const B=t=>{i==0?c.setAttribute("style","display:none"):c.removeAttribute("style"),i==-t?d.setAttribute("style","display:none"):d.removeAttribute("style")},p=t=>{let o=document.querySelector("."+l);f.forEach(function(s,n,e){s==o&&(s.classList.remove(l),e[n+t].classList.add(l))})},v=t=>{let o=m.offsetWidth+28,s=m.offsetWidth,n=u.offsetWidth-s-28;t=="prev"?(i+=o,i>0&&(i=0)):t=="next"&&(i-=o,i<-n&&(i=-n));let e="transform: translateX("+i+"px)";u.setAttribute("style",e),B(n)};window.addEventListener("resize",function(){u.removeAttribute("style"),document.querySelector("."+l).classList.remove(l),f[0].classList.add(l),c.setAttribute("style","display:none"),d.removeAttribute("style"),i=0});(()=>{const t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const r=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};o.addEventListener("click",n),s.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const y=document.querySelector(".made-cover"),S=document.querySelector("#made-player"),E=S.getAttribute("src");y.addEventListener("click",function(){y.setAttribute("style","opacity: 0; pointer-events: none;"),S.setAttribute("src",E+"&autoplay=1")});document.addEventListener("click",function(t){console.log(t.target);let s=t.target.dataset.modal;document.querySelector("#"+s).classList.toggle("is-hidden")});