"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[447],{447:(t,e,n)=>{n.r(e),n.d(e,{addCommentAction:()=>r,deleteItemAction:()=>a,itemAction:()=>s});var o=n(1387);const a=async t=>{let{request:e,params:n}=t;const a=n.collection,s=await e.formData(),r=`/api/${a}/${n.id}`,i=await fetch(r,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({secret:s.get("secret")})});if(!i.ok){return{error:(await i.json()).message}}return(0,o.V2)(`/${a}`)},s=async t=>{let{request:e,params:n}=t;const a=e.method,s=n.collection,r=function(t){const e={};return Object.keys(t).forEach((n=>{t[n]&&t[n].length>0&&(e[n]=t[n])})),e}(Object.fromEntries(await e.formData()));let i=`/api/${s}`;"PATCH"===a&&(i+=`/${n.id}`);const c=await fetch(i,{method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),m=await c.json();if(!c.ok)return{error:m.message||"something went wrong"};let d=`/${s}`;return d+="PATCH"===a?`/${n.id}`:`/${m.docId}`,(0,o.V2)(d)},r=async t=>{let{request:e,params:n}=t;const o=Object.fromEntries(await e.formData());o.story=n.id;const a=await fetch("/api/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),s=await a.json();return a.ok?{success:"\u05d4\u05ea\u05d2\u05d5\u05d1\u05d4 \u05e0\u05d5\u05e1\u05e4\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"}:{error:s.message||"something went wrong"}}}}]);
//# sourceMappingURL=447.a1640df2.chunk.js.map