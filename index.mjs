// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.3-esm/index.mjs";function s(e,r,s,n){var d,i,o;if(e<=0)return r;for(d=t(r,0),i=2*n,s*=2,o=1;o<=e;o++)d[i]=o,d[i+1]=0,i+=s;return r}function n(e,t,n){return s(e,t,n,r(e,n))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
