if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-78503f86"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/colorworker.0ed47b01.js",revision:"0b1c4cbd0654cf3071e0f3d630b68c51"},{url:"assets/de.58feef74.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/directory-open.4fa36e51.js",revision:"d6952bd540ae5d2b631ce5614451e86d"},{url:"assets/directory-open.f7d7c076.js",revision:"c8285ef3b135a858edb4fe9728a5a1f0"},{url:"assets/en-US.2a124a35.js",revision:"20773e49f3d04e27ece955a4b9cc6ba4"},{url:"assets/file-open.38a61ae8.js",revision:"ee1f95c3d68ef5aa585c9d70fa62a522"},{url:"assets/file-open.73377f9f.js",revision:"ef8971f4918fc289eb0a8fd6e60c2baa"},{url:"assets/file-save.1c3d3b86.js",revision:"853ab6f729ed68fc89a66854d0302964"},{url:"assets/file-save.36107878.js",revision:"372b959bf037e345767e8e0734f9078b"},{url:"assets/filehandling.ad96d245.js",revision:"b63aa7f11c70b9f683fa69de32eadf6e"},{url:"assets/index.726f1989.css",revision:"d5d91fcb20e21fc5688f10b3011167c5"},{url:"assets/index.c6b24df4.js",revision:"fafeebffcd762c0b3ebd7e6384780516"},{url:"assets/install.57f5677e.js",revision:"a7e8168903d9c9cfafcda4067e3c0968"},{url:"assets/monochromeworker.a3227215.js",revision:"812f2513a81b2081d1466784f38f8318"},{url:"assets/preprocessworker.b53406ee.js",revision:"1e911c59fe37ea58bf50dfc77743dbfb"},{url:"assets/preprocessworker.faa146aa.js",revision:"6f3044fb23f22abe9aa86053ef2362fd"},{url:"assets/svgoworker.4755cfed.js",revision:"34bd5f472d3ee8017b4610385f09f2a8"},{url:"assets/vendor.60be3708.js",revision:"9a412907132b2e800cd5f4a6eaa31ff3"},{url:"assets/windowcontrols.a3a3ef90.js",revision:"7c45569638ac6ab8236f8f9c2bcd2ccd"},{url:"index.html",revision:"99b64002cf872142e8cbc9bac474b195"},{url:"./favicon.png",revision:"2e55ffb100a97caa1372b725a7752fac"},{url:"./favicon.svg",revision:"97e6ab4d1284cb42c4a130684ca805a0"},{url:"manifest.webmanifest",revision:"9b238b2e0f538ae3e609910c98be646a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
