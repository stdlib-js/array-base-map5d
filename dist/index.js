"use strict";var b=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var k=b(function(G,j){
function B(n,r,o,R){var O,s,S,e,x,t,a,v,i,u,f,y,q,c,g,l,p,d,m;for(O=r[4],s=r[3],S=r[2],e=r[1],x=r[0],m=[],u=0;u<x;u++){for(p=n[u],d=[],i=0;i<e;i++){for(g=p[i],l=[],v=0;v<S;v++){for(q=g[v],c=[],a=0;a<s;a++){for(f=q[a],y=[],t=0;t<O;t++)y.push(o.call(R,f[t],[u,i,v,a,t],n));c.push(y)}l.push(c)}d.push(l)}m.push(d)}return m}j.exports=B
});var z=b(function(H,w){
function C(n,r,o,R,O){var s,S,e,x,t,a,v,i,u,f,y,q,c,g,l,p,d,m;if(s=o[4],S=o[3],e=o[2],x=o[1],t=o[0],s<=0||S<=0||e<=0||x<=0||t<=0)return r;for(f=0;f<t;f++)for(d=n[f],m=r[f],u=0;u<x;u++)for(l=d[u],p=m[u],i=0;i<e;i++)for(c=l[i],g=p[i],v=0;v<S;v++)for(y=c[v],q=g[v],a=0;a<s;a++)q[a]=R.call(O,y[a],[f,u,i,v,a],n);return r}w.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=k(),E=z();D(A,"assign",E);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
