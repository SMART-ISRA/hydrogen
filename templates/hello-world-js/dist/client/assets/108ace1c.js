var S=Object.defineProperty,M=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var x=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&x(e,n,t[n]);if(L)for(var n of L(t))y.call(t,n)&&x(e,n,t[n]);return e},b=(e,t)=>M(e,P(t));var v=(e,t)=>{var n={};for(var l in e)u.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&L)for(var l of L(e))t.indexOf(l)<0&&y.call(e,l)&&(n[l]=e[l]);return n};import{R as o,r as a,C as w,j as i,a as E}from"./index.d7056606.js";import{Performance as I}from"./08219994.js";import{Settings as O}from"./62ddaff1.js";import"./49f05f81.js";const W=()=>o.createElement("svg",{style:{height:"2.75em",width:"2.75em",padding:"1em"},viewBox:"0 0 460.775 460.775",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{fill:"black",d:`M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z`})),j=()=>o.createElement("svg",{style:{height:"2.5em",width:"2.5em"},width:"131",height:"130",viewBox:"0 0 131 130",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M64.9548 106.281L27.1377 86.1894L40.0714 79.3723L54.6329 87.1049L66.851 80.6638L52.2895 72.9313L65.2231 66.0979L103.04 86.1894L90.1065 93.0064L76.35 85.6989L64.114 92.1563L77.8884 99.4638L64.9548 106.281Z",fill:"black"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M65.2247 25L105.178 46.2267L90.105 54.1716L76.3488 46.8642L66.2525 52.1924L80.028 59.5005L64.9532 67.446L25 46.2196L40.0734 38.2748L54.6349 46.0073L64.713 40.6944L50.1533 32.9628L65.2247 25ZM54.4262 32.9673L68.9896 40.7008L54.6315 48.27L40.0699 40.5374L29.276 46.2267L64.9569 65.1833L75.7495 59.4947L61.9761 52.1878L76.3518 44.6012L90.1087 51.9088L100.902 46.2196L65.2221 27.2634L54.4262 32.9673Z",fill:"black"}));function z(p){var s=p,{children:e,onClose:t,onOpen:n}=s,l=v(s,["children","onClose","onOpen"]);const c=l.open;return o.createElement("div",{id:"hydrogen-dev-tools","aria-hidden":!0,style:{position:"fixed",zIndex:100,display:"flex",flexDirection:"column",right:0,bottom:0,padding:"1.5em",maxWidth:"100%",flexWrap:"wrap"}},o.createElement("button",{type:"button",style:{position:"relative",background:"white",border:"1px solid",padding:"0em 0.5em 0.25em 1.25em",boxShadow:"10px 10px 0px black",display:"flex",alignItems:"center",color:"black"},onClick:n},o.createElement("div",{style:{textAlign:"left",flex:1}},o.createElement("span",{style:{fontFamily:"monospace",fontWeight:"bold",paddingRight:"0.5em"}},"Dev tools"))," ",c?o.createElement(W,null):o.createElement(j,null)),o.createElement("div",{style:{display:c?"block":"none",position:"relative",top:"-1px",overflow:"scroll",color:"black",background:"white",border:"1px solid",boxShadow:"10px 10px 0px black",maxWidth:"50em",width:"100vw",height:"50vh"}},e))}function A({settings:e}){const[t,n]=a.exports.useState(0),[l,p]=a.exports.useState([]);a.exports.useEffect(()=>{w.subscribe(w.eventNames.PERFORMANCE,({response_start:r,navigation_start:d,first_contentful_paint:f,largest_contentful_paint:h,response_end:g,page_load_type:k,url:C,transfer_size:R})=>{p([...l,{ttfb:r-d,fcp:f,lcp:h,duration:g-d,type:`${k} load`,size:R,url:C}])})},[p,l]);const s=D({settings:e,performance:{navigations:l}}),c=s.map((r,d)=>i("div",{style:{display:t===d?"block":"none"},children:r.panel},r.content));return E("div",{style:{display:"flex",height:"100%"},children:[i("div",{style:{borderRight:"1px solid",padding:"1em 0em"},children:s.map(({content:r,icon:d,id:f},h)=>E("button",{type:"button",style:{lineHeight:2,padding:"0em 1.25em",fontWeight:t===h?"bold":"normal",display:"flex",alignItems:"center"},onClick:()=>n(h),children:[i("span",{style:{paddingRight:"0.4em"},children:d}),i("span",{style:{fontFamily:"monospace"},children:r})]},f))}),i("div",{style:{padding:"1.25em",width:"100%"},children:c[t||0]})]})}function D({settings:e,performance:t}){const n={settings:{content:"Settings",panel:i(O,m({},e)),icon:"\u{1F39B}"},performance:{content:"Performance",panel:i(I,m({},t)),icon:"\u23F1"}};return Object.keys(n).map(l=>b(m({},n[l]),{id:l}))}function T({dataFromServer:e}){const[t,n]=a.exports.useState(!1),l=a.exports.useCallback(()=>{n(c=>!c)},[]),[p,s]=a.exports.useState(!1);return a.exports.useEffect(()=>{s(!0)},[]),p?i(z,{open:t,onClose:l,onOpen:l,children:i(A,m({},e))}):null}export{T as DevTools};
//# sourceMappingURL=108ace1c.js.map
