var h=Object.defineProperty,m=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(a,r,e)=>r in a?h(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e,f=(a,r)=>{for(var e in r||(r={}))g.call(r,e)&&u(a,e,r[e]);if(c)for(var e of c(r))v.call(r,e)&&u(a,e,r[e]);return a},s=(a,r)=>m(a,d(r));import{r as w}from"./index.d7056606.js";import{useRouter as x}from"./e29d5461.js";function y(){const a=x();return(r,e={replace:!1,reloadDocument:!1})=>{var t;const l=s(f({},e==null?void 0:e.clientState),{scroll:(t=e==null?void 0:e.scroll)!=null?t:!0});e!=null&&e.replace?a.history.replace(r,l):a.history.push(r,l)}}function D({to:a}){const r=y();return w.exports.useEffect(()=>{a.startsWith("http")?window.location.href=a:r(a)},[]),null}export{D as default};
//# sourceMappingURL=97b0210c.js.map
