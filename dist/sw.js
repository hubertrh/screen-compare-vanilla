if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const l=e=>i(e,r),d={module:{uri:r},exports:c,require:l};s[r]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/cookie-policy-7a4347c2.css",revision:null},{url:"assets/cookiePolicy-dd8e6b53.js",revision:null},{url:"assets/domUtils-94b4f7fa.js",revision:null},{url:"assets/feedback-654e80e2.js",revision:null},{url:"assets/feedback-ff9be988.css",revision:null},{url:"assets/firestore-7a65add7.js",revision:null},{url:"assets/index-70897953.css",revision:null},{url:"assets/main-f8e44050.js",revision:null},{url:"cookie-policy.html",revision:"3be79341052846e0db475cfd675e1bf4"},{url:"feedback.html",revision:"b1bdb03d8e2776dca2441a09b7989c14"},{url:"index.html",revision:"9dc948874d0297322cb2c8ff7bcd06e6"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/light-mode.svg",revision:"990363263e15569dc4108dc7f0b66793"},{url:"icons/dark-mode.svg",revision:"fd2a31db2d2c7ab7b202253e51975978"},{url:"icons/popular-screens-icon.svg",revision:"e73e3d7246cb78f146eeb27c9ebbf11a"},{url:"icons/cross.svg",revision:"99ca84ef8b9878f0095dba76e26e0bbf"},{url:"icons/edit-field.svg",revision:"a0071c6fca91e87156f0f48a1f5c41f8"},{url:"icons/plus.svg",revision:"986aaf23d9926d45a8e58ed8473318f7"},{url:"icons/reset.svg",revision:"8a4ca2771152ee30f41dc5806ae57de9"},{url:"favicons/favicon.svg",revision:"cb08e7d15200e842aabcf0b7ded468e1"},{url:"favicons/favicon.ico",revision:"87f537f4149bd5caed35aca699e20e5a"},{url:"favicons/apple-touch-icon.png",revision:"46d275a3eb74bfb5269d2dc25aa458da"},{url:"favicons/pwa-192x192.png",revision:"8388301d9254c73394bcb0b8086cb442"},{url:"favicons/pwa-512x512.png",revision:"978a92c44c961993f3e73f4600b1ad19"},{url:"manifest.webmanifest",revision:"f8eae2f4126f81e1df88cdf0d98f1cf9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
