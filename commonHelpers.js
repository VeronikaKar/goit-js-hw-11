import{i as c,S as u}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const l=document.querySelector(".loader");function d(r,t,s){c.show({iconUrl:r,titleColor:"White",titleSize:"24px",message:t,messageColor:"White",messageSize:"16px",backgroundColor:s,position:"topRight",timeout:3e3})}function f(){l.classList.remove("visually-hidden")}function p(){l.classList.add("visually-hidden")}function h(r){r.innerHTML=""}function m(r){return r.map(t=>`<li class="gallery-item">
    <a href="${t.largeImageURL}" data-lightbox="gallery-link">
      <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
    </a>
    <div class="gallery-info">
      <p><b>Likes:</b> ${t.likes}</p>
      <p><b>Views:</b> ${t.views}</p>
      <p><b>Comments:</b> ${t.comments}</p>
      <p><b>Downloads:</b> ${t.downloads}</p>
    </div></li>
  `).join("")}function y(r){const t="43325485-b0026802577d8a210f4fcd054",n=`https://pixabay.com/api/?${new URLSearchParams({key:t,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const g="/goit-js-hw-11/assets/bi_x-octagon-06de2d57.svg",b=document.querySelector(".form");document.querySelector(".text-input");const a=document.querySelector(".gallery"),L=new u(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"});b.addEventListener("submit",w);function w(r){r.preventDefault();const t=r.currentTarget.search.value.trim();f(),h(a),y(t).then(s=>{if(console.log(s),s.hits.length===0)return d(g,"Sorry, there are no images matching your search query. Please try again!","#ef4040");const n=m(s.hits);a.innerHTML=n,L.refresh()}).catch(s=>{console.error("Error:",s)}).finally(()=>{p()})}
//# sourceMappingURL=commonHelpers.js.map
