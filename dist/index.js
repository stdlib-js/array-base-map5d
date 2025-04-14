"use strict";var b=function(f,r){return function(){return r||f((r={exports:{}}).exports,r),r.exports}};var k=b(function(G,j){
function B(f,r,n,R){var O,s,S,e,x,o,a,v,i,u,t,y,q,c,g,l,p,d,m;for(O=r[4],s=r[3],S=r[2],e=r[1],x=r[0],m=[],u=0;u<x;u++){for(p=f[u],d=[],i=0;i<e;i++){for(g=p[i],l=[],v=0;v<S;v++){for(q=g[v],c=[],a=0;a<s;a++){for(t=q[a],y=[],o=0;o<O;o++)y.push(n.call(R,t[o],[u,i,v,a,o],f));c.push(y)}l.push(c)}d.push(l)}m.push(d)}return m}j.exports=B
});var z=b(function(H,w){
function C(f,r,n,R,O){var s,S,e,x,o,a,v,i,u,t,y,q,c,g,l,p,d,m;if(s=n[4],S=n[3],e=n[2],x=n[1],o=n[0],s<=0||S<=0||e<=0||x<=0||o<=0)return r;for(t=0;t<o;t++)for(d=f[t],m=r[t],u=0;u<x;u++)for(l=d[u],p=m[u],i=0;i<e;i++)for(c=l[i],g=p[i],v=0;v<S;v++)for(y=c[v],q=g[v],a=0;a<s;a++)q[a]=R.call(O,y[a],[t,u,i,v,a],f);return r}w.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=k(),E=z();D(A,"assign",E);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
