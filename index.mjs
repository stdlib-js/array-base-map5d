// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function o(r,o,s,n){var e,f,t,u,a,i,l,p,d,h,c,m,v,g,j,b,x,y,k;for(e=o[4],f=o[3],t=o[2],u=o[1],a=o[0],k=[],h=0;h<a;h++){for(x=r[h],y=[],d=0;d<u;d++){for(j=x[d],b=[],p=0;p<t;p++){for(v=j[p],g=[],l=0;l<f;l++){for(c=v[l],m=[],i=0;i<e;i++)m.push(s.call(n,c[i],[h,d,p,l,i],r));g.push(m)}b.push(g)}y.push(b)}k.push(y)}return k}function s(r,o,s,n,e){var f,t,u,a,i,l,p,d,h,c,m,v,g,j,b,x,y,k;if(f=s[4],t=s[3],u=s[2],a=s[1],i=s[0],f<=0||t<=0||u<=0||a<=0||i<=0)return o;for(c=0;c<i;c++)for(y=r[c],k=o[c],h=0;h<a;h++)for(b=y[h],x=k[h],d=0;d<u;d++)for(g=b[d],j=x[d],p=0;p<t;p++)for(m=g[p],v=j[p],l=0;l<f;l++)v[l]=n.call(e,m[l],[c,h,d,p,l],r);return o}r(o,"assign",s);export{s as assign,o as default};
//# sourceMappingURL=index.mjs.map