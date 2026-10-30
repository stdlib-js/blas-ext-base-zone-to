"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=u(function(h,s){
var T=require('@stdlib/strided-base-reinterpret-complex128/dist');function j(e,r,i,z){var n,a,t;if(e<=0)return r;for(n=T(r,0),a=z*2,i*=2,t=1;t<=e;t++)n[a]=t,n[a+1]=0,a+=i;return r}s.exports=j
});var f=u(function(k,q){
var m=require('@stdlib/strided-base-stride2offset/dist'),x=o();function l(e,r,i){return x(e,r,i,m(e,i))}q.exports=l
});var y=u(function(A,p){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=f(),_=o();R(c,"ndarray",_);p.exports=c
});var w=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=y(),v,d=E(w(__dirname,"./native.js"));O(d)?v=b:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
