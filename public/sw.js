if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>i(e,n),o={module:{uri:n},exports:r,require:t};a[n]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(s(...e),r)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0GmKL5v9eANu0r-mFzbA5/_buildManifest.js",revision:"e78779bf2c9f2fc50203297cc2853868"},{url:"/_next/static/0GmKL5v9eANu0r-mFzbA5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-719fb9ebe85fa441.js",revision:"719fb9ebe85fa441"},{url:"/_next/static/chunks/1bfc9850-0d5c8938bb949433.js",revision:"0d5c8938bb949433"},{url:"/_next/static/chunks/252f366e-66d2403034a12ea2.js",revision:"66d2403034a12ea2"},{url:"/_next/static/chunks/512-57d3df0562bc55f1.js",revision:"57d3df0562bc55f1"},{url:"/_next/static/chunks/651.412a32fde78b36e0.js",revision:"412a32fde78b36e0"},{url:"/_next/static/chunks/78e521c3-9cbfbf1484ca81f2.js",revision:"9cbfbf1484ca81f2"},{url:"/_next/static/chunks/893-2c38f09eac34bad7.js",revision:"2c38f09eac34bad7"},{url:"/_next/static/chunks/927-428721297a331f82.js",revision:"428721297a331f82"},{url:"/_next/static/chunks/95b64a6e-8f0a61bb307ee191.js",revision:"8f0a61bb307ee191"},{url:"/_next/static/chunks/d0447323-b1db897f98ec8188.js",revision:"b1db897f98ec8188"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-2c38d3d28e1db1d4.js",revision:"2c38d3d28e1db1d4"},{url:"/_next/static/chunks/pages/_app-a2ff90d5b4e1464b.js",revision:"a2ff90d5b4e1464b"},{url:"/_next/static/chunks/pages/_error-b53b8f599aff85eb.js",revision:"b53b8f599aff85eb"},{url:"/_next/static/chunks/pages/certificates-79cf4723a372ee8d.js",revision:"79cf4723a372ee8d"},{url:"/_next/static/chunks/pages/contact-4a00d6891a49b040.js",revision:"4a00d6891a49b040"},{url:"/_next/static/chunks/pages/index-5826ecf612443a64.js",revision:"5826ecf612443a64"},{url:"/_next/static/chunks/pages/portfolio-242bb690728ae177.js",revision:"242bb690728ae177"},{url:"/_next/static/chunks/pages/skills-17ace8c98a7df45a.js",revision:"17ace8c98a7df45a"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-e6f4d62a0ca7fa93.js",revision:"e6f4d62a0ca7fa93"},{url:"/_next/static/media/Vuebank_image.1b5c0ff8.jpg",revision:"a683bc208d2bff3880755e7eb4020c71"},{url:"/_next/static/media/cert-1.a01a8a6a.png",revision:"6cd3f81d47128db1482a9b6b0e040b32"},{url:"/_next/static/media/cert-2.8ad8c289.png",revision:"e488252262564ce5d69cde277ac2c691"},{url:"/_next/static/media/cert-3.30848c9b.png",revision:"933e0cf7d7717f798ffa87f4da1618a3"},{url:"/_next/static/media/cert-4.50dc22bc.png",revision:"7c2a22d691c7cc98971646c18b771144"},{url:"/_next/static/media/cert-7.a70d44b1.png",revision:"825f53195c33467174a10c261e4ab1a7"},{url:"/_next/static/media/cert-8.5a146ca6.png",revision:"c01af3d753d5ec46ff8f957bfb73a5d3"},{url:"/_next/static/media/cert-9.499d20c8.jpg",revision:"b5ca4b3f8125af66e21361493a57a6c3"},{url:"/_next/static/media/header-cert.cc257bfd.jpg",revision:"19556c1898aa800ddaeb7b58885493a8"},{url:"/_next/static/media/header-port.810743be.jpg",revision:"65859f9868bd0ca26caddae8cb8f6d22"},{url:"/_next/static/media/project-barber.7a79a2ac.jpg",revision:"90ef32b0c22cdead802e54c465a51b63"},{url:"/_next/static/media/project-chefsbook.9ff9a7a0.jpg",revision:"3ba298a32577d3d4903a31d1267e01c4"},{url:"/_next/static/media/project-elementor.4b4e0a9b.jpg",revision:"ea44bee4cd146e6b2adee1104c95b0ce"},{url:"/_next/static/media/project-first-hair.e3394339.jpg",revision:"f4110ab5f40b275603767a56f95f81e8"},{url:"/_next/static/media/project-noir.98e95968.jpg",revision:"292bdee5a08e49d9d6a58745d1e40ebb"},{url:"/_next/static/media/project-restaurant.890d3fc3.jpg",revision:"390486cbe0c2fb78a8f47cff2126d895"},{url:"/_next/static/media/project-webshop.367833f3.jpg",revision:"f4f71e016af345920245ca4c5fe776a7"},{url:"/_next/static/media/psmi.5eefc9cf.png",revision:"99e6259efbb659c9dc9555378adfd9f5"},{url:"/_next/static/media/skills-header.d2a29db9.jpg",revision:"92704c32dab0848a3bb7750022c4b101"},{url:"/_next/static/media/slide-1.0a8c36eb.jpg",revision:"42e1bc6ac72082133a1ea13c4d90ffb3"},{url:"/favicon.ico",revision:"34d03725e047751f36d357a64f0a92bd"},{url:"/img/Vuebank_image.jpg",revision:"a683bc208d2bff3880755e7eb4020c71"},{url:"/img/and-logo.png",revision:"dc83ba2d2454b5fa6a000b3d060b60b4"},{url:"/img/and-logo.svg",revision:"87ae2c0239f2400a52f6fc29cf531627"},{url:"/img/cert-1.png",revision:"6cd3f81d47128db1482a9b6b0e040b32"},{url:"/img/cert-2.png",revision:"e488252262564ce5d69cde277ac2c691"},{url:"/img/cert-3.png",revision:"933e0cf7d7717f798ffa87f4da1618a3"},{url:"/img/cert-4.png",revision:"7c2a22d691c7cc98971646c18b771144"},{url:"/img/cert-5.png",revision:"76a52d560e3adfc92ba75b7424bf9c8e"},{url:"/img/cert-6.jpg",revision:"7f1aa2119e70a65598fc5f4c3e6b1adb"},{url:"/img/cert-7.png",revision:"825f53195c33467174a10c261e4ab1a7"},{url:"/img/cert-8.png",revision:"c01af3d753d5ec46ff8f957bfb73a5d3"},{url:"/img/cert-9.jpg",revision:"b5ca4b3f8125af66e21361493a57a6c3"},{url:"/img/cog3.svg",revision:"a2162b537014b34dfe4b7fa49a901db5"},{url:"/img/decoration-1.svg",revision:"f2d1bb2011af2e6d129b5335bb11ca3a"},{url:"/img/decoration-2.svg",revision:"ad3467da5e80f77eae2cd1a4b2c0f288"},{url:"/img/decoration-3.svg",revision:"85ebdeab83c12a0ec3f328f1e8fb4ae4"},{url:"/img/decoration-4.svg",revision:"b8d27f2581d2e8d29d6950bca1aa9a90"},{url:"/img/decoration-5.svg",revision:"3a73557859f78d74d5eb7b0a91561d46"},{url:"/img/decoration-6.svg",revision:"5e796204f96b556c4a4313214f72b305"},{url:"/img/flag-en.png",revision:"5c825e798d82fb321ddcbbef0992c80f"},{url:"/img/flag-en.svg",revision:"db68882cbf4beac3f3ee3923f1a91b82"},{url:"/img/flag-nl.svg",revision:"ebcd669e6540a2f9500d9af1847d37f2"},{url:"/img/header-cert.jpg",revision:"19556c1898aa800ddaeb7b58885493a8"},{url:"/img/header-port.jpg",revision:"65859f9868bd0ca26caddae8cb8f6d22"},{url:"/img/huurbuur-logo.png",revision:"b73718a79d44b3467a6f64fecc1fc37c"},{url:"/img/image-1.jpg",revision:"ee1b21b6c9b06f624521c8c8325096f6"},{url:"/img/image-portfolio-eye.jpg",revision:"c23f8e4f08722ed7fa4f4d9f09d32b27"},{url:"/img/it-context-logo.png",revision:"8003036782f41ebd1d9e2a25a5e268a9"},{url:"/img/logo-itcontext.png",revision:"35cafadaf42158b5e985d42bce704b86"},{url:"/img/logo.svg",revision:"d75b7340b2e2fa6b75ed555612606410"},{url:"/img/me-2.png",revision:"f87a32c314bbabb9935851a15434dc78"},{url:"/img/michal_antczak.png",revision:"56bc2ada537e2d27ad04c592b966a695"},{url:"/img/next-logo.png",revision:"fbcc97fe9c4e6f9a56b41a299e38f305"},{url:"/img/og_image.jpg",revision:"4663880f96d60c13c9c42339cfd39f1f"},{url:"/img/project-barber.jpg",revision:"90ef32b0c22cdead802e54c465a51b63"},{url:"/img/project-chefsbook.jpg",revision:"3ba298a32577d3d4903a31d1267e01c4"},{url:"/img/project-elementor.jpg",revision:"ea44bee4cd146e6b2adee1104c95b0ce"},{url:"/img/project-first-hair.jpg",revision:"f4110ab5f40b275603767a56f95f81e8"},{url:"/img/project-itcontext.jpg",revision:"4a80961ef2fde3a57ece80505bf37a0f"},{url:"/img/project-noir.jpg",revision:"292bdee5a08e49d9d6a58745d1e40ebb"},{url:"/img/project-restaurant.jpg",revision:"390486cbe0c2fb78a8f47cff2126d895"},{url:"/img/project-resume.jpg",revision:"7733b28f934af4fd911ae8d101bb9f63"},{url:"/img/project-webshop.jpg",revision:"f4f71e016af345920245ca4c5fe776a7"},{url:"/img/psmi.png",revision:"99e6259efbb659c9dc9555378adfd9f5"},{url:"/img/sap-logo-svg.svg",revision:"723827e558eaea61ef4e2741e9fcd8f4"},{url:"/img/skills-header.jpg",revision:"92704c32dab0848a3bb7750022c4b101"},{url:"/img/slide-1.jpg",revision:"42e1bc6ac72082133a1ea13c4d90ffb3"},{url:"/img/slide-2.jpg",revision:"112ee093f514fdd1da85c61543b6bc03"},{url:"/img/typescript-logo.png",revision:"de67947ca874ad4f75db38b01f061a84"},{url:"/img/webpack-logo.png",revision:"c500a3801d8356a86da86a06c3d13a4d"},{url:"/logo-navigation.png",revision:"ac7355cb34ba882483b547c17835f431"},{url:"/logo.png",revision:"afa4d032c875e122e0af5c561c9ab63e"},{url:"/logo.svg",revision:"d75b7340b2e2fa6b75ed555612606410"},{url:"/logo192.png",revision:"afa4d032c875e122e0af5c561c9ab63e"},{url:"/logo512.png",revision:"45a93ce6fae1692ed8783fa4bf2f738d"},{url:"/manifest.json",revision:"0827677952344037c40dca9dc73e9324"},{url:"/robots.txt",revision:"c7380234510f8486ce528f8762afe2ff"},{url:"/sitemap.xml",revision:"faebbf7e675d972372d1008be9044ef0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
