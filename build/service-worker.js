"use strict";var precacheConfig=[["/index.html","4de7f3b86c6fd7d84f491481a89b122b"],["/static/css/main.d5d2b358.css","d59e7dca6fa9fea57eb8f34da86e9835"],["/static/js/main.eb9ebc58.js","45cb282baf35ae448f684255ccb224ba"],["/static/media/ComicwoxBrandmarkBlack.ad6f88b0.jpg","ad6f88b0135686bcdaa3b44bbccbe35a"],["/static/media/ComicwoxTransparent.50cc20aa.png","50cc20aac7a5690bebf3e3d10036331f"],["/static/media/ComicwoxTransparentmark.ce4f64f1.png","ce4f64f1960ee55f80255d7195ab6bc4"],["/static/media/ComicwoxTransparentv2.abf3008e.png","abf3008ed680e16c708a80ad41d3390a"],["/static/media/Comicwoxbg4.d35038f1.jpg","d35038f16c26c2a76ec789d260727c1b"],["/static/media/Montserrat-Bold.88932dad.ttf","88932dadc42e1bba93b21a76de60ef7a"],["/static/media/Poppins-Bold.7940efc4.ttf","7940efc40d8e3b477e16cc41b0287139"],["/static/media/Poppins-Medium.a4e11dda.ttf","a4e11dda40531debd374e4c8b1dcc7f4"],["/static/media/Poppins-Regular.731a28a4.ttf","731a28a413d642522667a2de8681ff35"],["/static/media/bg1.78f0bdcd.jpg","78f0bdcdd5227260b37d82926e7eb48c"],["/static/media/bg11.53aed41f.jpg","53aed41f40a6fa824ac645cb6b75c1b9"],["/static/media/bg2.74aac19c.jpg","74aac19c60ee48a07ddd5f499f83c89a"],["/static/media/bg22.cdbb82a9.jpg","cdbb82a95ac5b52ba8d2e992d1c78501"],["/static/media/comicCover.2283858a.jpg","2283858ad720296c180b9eff4c722545"],["/static/media/comicWallpaper.6b8190bf.jpg","6b8190bffe304b96bd64cb2c62a9ee44"],["/static/media/exit.65b00001.svg","65b000010b5730503beb9287292140cb"],["/static/media/placeholder.0ee963f0.jpg","0ee963f0763b0dcf800e345f4f220586"],["/static/media/thirdside.00a55a0f.jpg","00a55a0f3d490f80cbde6a66b5bcbb44"],["/static/media/ulofyu.5c593177.jpg","5c5931774039bf938da62e30145e47a4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});