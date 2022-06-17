import{r as _,C as i}from"./index.d7056606.js";var b=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function C(n){let o={},e,t,r=0,u=n.split(/;\s*/g),a,s;for(;r<u.length;r++)if(t=u[r],e=t.indexOf("="),~e){if(a=t.substring(0,e++).trim(),s=t.substring(e).trim(),s[0]==='"'&&(s=s.substring(1,s.length-1)),~s.indexOf("%"))try{s=decodeURIComponent(s)}catch{}b.has(t=a.toLowerCase())?t==="expires"?o.expires=new Date(s):t==="max-age"?o.maxage=+s:o[t]=s:o[a]=s}else(a=t.trim().toLowerCase())&&(a==="httponly"||a==="secure")&&(o[a]=!0);return o}function T(n,o,e){let t=n+"="+encodeURIComponent(o);return e.expires&&(t+="; Expires="+new Date(e.expires).toUTCString()),e.maxage!=null&&e.maxage>=0&&(t+="; Max-Age="+(e.maxage|0)),e.domain&&(t+="; Domain="+e.domain),e.path&&(t+="; Path="+e.path),e.samesite&&(t+="; SameSite="+e.samesite),(e.secure||e.samesite==="None")&&(t+="; Secure"),e.httponly&&(t+="; HttpOnly"),t}const w="00000000",m="xxxx-4xxx-xxxx-xxxxxxxxxxxx";function h(){let n="";try{const o=window.crypto,e=new Uint16Array(31);o.getRandomValues(e);let t=0;n=m.replace(/[x]/g,(r,...u)=>{const a=e[t]%16,s=r==="x"?a:a&3|8;return t++,s.toString(16)}).toUpperCase()}catch{n=m.replace(/[x]/g,(e,...t)=>{const r=Math.random()*16|0;return(e==="x"?r:r&3|8).toString(16)}).toUpperCase()}return`${v()}-${n}`}function v(){let n=0,o=0;n=new Date().getTime()>>>0;try{o=performance.now()>>>0}catch{o=0}const e=Math.abs(n+o).toString(16).toLowerCase();return w.substr(0,8-e.length)+e}function p(n,o){return Object.entries(n).forEach(([e,t])=>{t&&(o[e]=t)}),o}const f="_shopify_y",x="_shopify_s",k=60*60*24*360*2,D=60*30,O="myshopify.com",P="myshopify.dev";let y=!1,l=0;function $({cookieDomain:n}){return _.exports.useEffect(()=>{try{const o=C(document.cookie),e=o[f]||h(),t=o[x]||h();if(g(f,e,k,n),g(x,t,D,n),i.pushToPageAnalyticsData({shopify:{pageId:h(),userId:e,sessionId:t}}),l=0,!y){y=!0;const r=i.eventNames;i.subscribe(r.PAGE_VIEW,I),i.hasSentFirstPageView()&&I(i.getPageAnalyticsData())}}catch{}}),null}function g(n,o,e,t){const r=T(n,o,{maxage:e,domain:A(t),secure:!0,samesite:"Lax",path:"/"});return document.cookie=r,r}function A(n){const o=location.hostname;return o.indexOf(O)!==-1?`.${o.split(".").slice(-3).join(".")}`:o.indexOf(n)!==-1?`.${n}`:""}function I(n){l+=1;try{M(E(n))}catch(o){console.error(`Error Shopify analytics: ${i.eventNames.PAGE_VIEW}`,o)}}function E(n){return{schema_id:"trekkie_storefront_page_view/1.4",payload:L(n),metadata:{event_created_at_ms:Date.now()}}}function L(n){const o=document.location,e=n.shopify;let t={appClientId:"6167201",hydrogenSubchannelId:e.storefrontId,isPersistentCookie:e.isPersistentCookie,uniqToken:e.userId,visitToken:e.sessionId,microSessionId:e.pageId,microSessionCount:l,url:o.href,path:o.pathname,search:o.search,referrer:document.referrer,title:document.title,shopId:S(e.shopId),currency:e.currency,contentLanguage:e.acceptedLanguage};if(t=p({isMerchantRequest:N()},t),t=p({pageType:e.pageType},t),e.resourceId)try{t=p({resourceType:U(e.resourceId),resourceId:S(e.resourceId)},t)}catch{}return t=p({customerId:e.customerId},t),t}function N(){const n=location.hostname;return n.indexOf(P)!==-1||n==="localhost"}function S(n){return parseInt(n.substring(n.lastIndexOf("/")+1))}function U(n){return n.substring(0,n.lastIndexOf("/")).replace(/.*shopify\//,"").toLowerCase()}const V=500;let d=[],c;function M(n){d.push(n),c&&(clearTimeout(c),c=null),c=setTimeout(()=>{const o={events:d,metadata:{event_sent_at_ms:Date.now()}};d=[],c=null;try{fetch("/__event?shopify",{method:"post",headers:{"cache-control":"no-cache","Content-Type":"application/json"},body:JSON.stringify(o)})}catch{fetch("https://monorail-edge.shopifysvc.com/unstable/produce_batch",{method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify(o)})}},V)}export{$ as ShopifyAnalyticsClient};
//# sourceMappingURL=771028a7.js.map
