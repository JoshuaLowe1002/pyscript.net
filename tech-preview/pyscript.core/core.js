const e=(e,t=document)=>[...t.querySelectorAll(e)],t=(e,t=document)=>{const r=(new XPathEvaluator).createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),n=[];for(let e=0,{snapshotLength:t}=r;e<t;e++)n.push(r.snapshotItem(e));return n},r="object"==typeof self?self:globalThis,n=e=>((e,t)=>{const n=(t,r)=>(e.set(r,t),t),s=o=>{if(e.has(o))return e.get(o);const[a,i]=t[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:e,message:t}=i;return n(new r[e](t),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new r[a](i),o)};return s})(new Map,e)(0),s="",{toString:o}={},{keys:a}=Object,i=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const r=o.call(e).slice(8,-1);switch(r){case"Array":return[1,s];case"Object":return[2,s];case"Date":return[3,s];case"RegExp":return[4,s];case"Map":return[5,s];case"Set":return[6,s]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},c=([e,t])=>0===e&&("function"===t||"symbol"===t),l=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const s=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},o=n=>{if(r.has(n))return r.get(n);let[l,u]=i(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return s([-1],n)}return s([l,t],n)}case 1:{if(u)return s([u,[...n]],n);const e=[],t=s([l,e],n);for(const t of n)e.push(o(t));return t}case 2:{if(u)switch(u){case"BigInt":return s([u,n.toString()],n);case"Boolean":case"Number":case"String":return s([u,n.valueOf()],n)}if(t&&"toJSON"in n)return o(n.toJSON());const r=[],f=s([l,r],n);for(const t of a(n))!e&&c(i(n[t]))||r.push([o(t),o(n[t])]);return f}case 3:return s([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return s([l,{source:e,flags:t}],n)}case 5:{const t=[],r=s([l,t],n);for(const[r,s]of n)(e||!c(i(r))&&!c(i(s)))&&t.push([o(r),o(s)]);return r}case 6:{const t=[],r=s([l,t],n);for(const r of n)!e&&c(i(r))||t.push(o(r));return r}}const{message:f}=n;return s([l,{name:u,message:f}],n)};return o})(!(t||r),!!t,new Map,n)(e),n},{parse:u,stringify:f}=JSON,p={json:!0,lossy:!0};var d=Object.freeze({__proto__:null,parse:e=>n(u(e)),stringify:e=>f(l(e,p))}),h="dba0d233-ff77-488c-8f92-ef0e9cb3e008",w=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,"+encodeURIComponent("onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))"));r.onmessage=t,r.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:y,Map:g,SharedArrayBuffer:m,Uint16Array:b}=globalThis,{BYTES_PER_ELEMENT:v}=y,{BYTES_PER_ELEMENT:E}=b,{isArray:k}=Array,{notify:P,wait:$,waitAsync:M}=Atomics,{fromCharCode:S}=String,j=(e,t)=>e?(M||w)(t,0):($(t,0),{value:{then:e=>e()}}),A=new WeakSet,x=new WeakMap;let O=0;const _=(e,{parse:t,stringify:r}=JSON)=>{if(!x.has(e)){const n=(t,...r)=>e.postMessage({[h]:r},{transfer:t});x.set(e,new Proxy(new g,{get:(r,s)=>"then"===s?null:(...r)=>{const o=O++;let a=new y(new m(v)),i=[];A.has(r.at(-1)||i)&&A.delete(i=r.pop()),n(i,o,a,s,r);const c=e instanceof Worker;return j(c,a).value.then((()=>{const e=a[0];if(!e)return;const r=E*e;return a=new y(new m(r+r%v)),n([],o,a),j(c,a).value.then((()=>t(S(...new b(a.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new g;e.addEventListener("message",(async e=>{const s=e.data?.[h];if(k(s)){e.stopImmediatePropagation();const[o,a,...i]=s;if(i.length){const[e,s]=i;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const i=r(await t.get(e)(...s));i&&(n.set(o,i),a[0]=i.length)}}else{const e=n.get(o);n.delete(o);for(let t=new b(a.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}P(a,0)}}))}return!!t.set(n,s)}}))}return x.get(e)};_.transfer=(...e)=>(A.add(e),e);const W="object",R="function",T="number",F="string",B="undefined",I="symbol",{defineProperty:L,getOwnPropertyDescriptor:C,getPrototypeOf:G,isExtensible:U,ownKeys:N,preventExtensions:D,set:J,setPrototypeOf:z}=Reflect,q=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},X=(e,t)=>[e,t],V=e=>t=>{const r=typeof t;switch(r){case W:if(null==t)return X("null",t);case R:return e(r,t);case"boolean":case T:case F:case B:case"bigint":return X(r,t);case I:if(K.has(t))return X(r,K.get(t))}throw new Error(`Unable to handle this ${r} type`)},K=new Map(N(Symbol).filter((e=>typeof Symbol[e]===I)).map((e=>[Symbol[e],e]))),Y=e=>{for(const[t,r]of K)if(r===e)return t},H="apply",Q="construct",Z="defineProperty",ee="deleteProperty",te="get",re="getOwnPropertyDescriptor",ne="getPrototypeOf",se="has",oe="isExtensible",ae="ownKeys",ie="preventExtensions",ce="set",le="setPrototypeOf",ue="delete";let fe=0;const pe=new Map,de=new Map,he=new WeakMap;if(globalThis.window===globalThis){const{addEventListener:e}=EventTarget.prototype;L(EventTarget.prototype,"addEventListener",{value(t,r,...n){return n.at(0)?.invoke&&(he.has(this)||he.set(this,new Map),he.get(this).set(t,[].concat(n[0].invoke)),delete n[0].invoke),e.call(this,t,r,...n)}})}const we=V(((e,t)=>{if(!pe.has(t)){let e;for(;de.has(e=fe++););pe.set(t,e),de.set(e,t)}return X(e,pe.get(t))}));var ye=(e,t,r)=>{const{[r]:n}=e,s=new FinalizationRegistry((e=>{n(ue,X(F,e))})),o=([e,t])=>{switch(e){case W:return null==t?globalThis:typeof t===T?de.get(t):t;case R:if(typeof t===F){if(!de.has(t)){const e=function(...e){return e.at(0)instanceof Event&&(e=>{const{currentTarget:t,target:r,type:n}=e;for(const s of he.get(t||r)?.get(n)||[])e[s]()})(...e),n(H,X(R,t),we(this),e.map(we))},r=new WeakRef(e);de.set(t,r),s.register(e,t,r)}return de.get(t).deref()}return de.get(t);case I:return Y(t)}return t},a={[H]:(e,t,r)=>we(e.apply(t,r)),[Q]:(e,t)=>we(new e(...t)),[Z]:(e,t,r)=>we(L(e,t,r)),[ee]:(e,t)=>we(delete e[t]),[ne]:e=>we(G(e)),[te]:(e,t)=>we(e[t]),[re]:(e,t)=>{const r=C(e,t);return r?X(W,q(r,we)):X(B,r)},[se]:(e,t)=>we(t in e),[oe]:e=>we(U(e)),[ae]:e=>X(W,N(e).map(we)),[ie]:e=>we(D(e)),[ce]:(e,t,r)=>we(J(e,t,r)),[le]:(e,t)=>we(z(e,t)),[ue](e){pe.delete(de.get(e)),de.delete(e)}};return e[t]=(e,t,...r)=>{switch(e){case H:r[0]=o(r[0]),r[1]=r[1].map(o);break;case Q:r[0]=r[0].map(o);break;case Z:{const[e,t]=r;r[0]=o(e);const{get:n,set:s,value:a}=t;n&&(t.get=o(n)),s&&(t.set=o(s)),a&&(t.value=o(a));break}default:r=r.map(o)}return a[e](o(t),...r)},{proxy:e,window:globalThis,isWindowProxy:()=>!1}};const ge=e=>typeof e===R?e():e,me=V(((e,t)=>{if(be in t)return ge(t[be]);if(e===R){if(!ke.has(t)){let e;for(;ke.has(e=String(ve++)););Ee.set(t,e),ke.set(e,t)}return X(e,Ee.get(t))}return X(e,t)})),be=Symbol();let ve=0;const Ee=new Map,ke=new Map;var Pe=(e,t,r)=>{const{[t]:n}=e,s=new Map,o=new FinalizationRegistry((e=>{s.delete(e),n(ue,me(e))})),a=e=>{const[t,r]=e;if(!s.has(r)){const n=t===R?$e.bind(e):e,a=new Proxy(n,l),i=new WeakRef(a);s.set(r,i),o.register(a,r,i)}return s.get(r).deref()},i=e=>{const[t,r]=e;switch(t){case W:return typeof r===T?a(e):r;case R:return typeof r===F?ke.get(r):a(e);case I:return Y(r)}return r},c=(e,t,...r)=>i(n(e,ge(t),...r)),l={[H]:(e,t,r)=>c(H,e,me(t),r.map(me)),[Q]:(e,t)=>c(Q,e,t.map(me)),[Z]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===R&&(r.get=me(n)),typeof s===R&&(r.set=me(s)),typeof o===R&&(r.value=me(o)),c(Z,e,me(t),r)},[ee]:(e,t)=>c(ee,e,me(t)),[ne]:e=>c(ne,e),[te]:(e,t)=>t===be?e:c(te,e,me(t)),[re]:(e,t)=>{const r=c(re,e,me(t));return r&&q(r,i)},[se]:(e,t)=>t===be||c(se,e,me(t)),[oe]:e=>c(oe,e),[ae]:e=>c(ae,e).map(i),[ie]:e=>c(ie,e),[ce]:(e,t,r)=>c(ce,e,me(t),me(r)),[le]:(e,t)=>c(le,e,me(t))};return e[r]=(e,t,r,n)=>{switch(e){case H:return i(t).apply(i(r),n.map(i));case ue:{const e=i(t);Ee.delete(ke.get(e)),ke.delete(e)}}},{proxy:e,window:new Proxy([W,null],l),isWindowProxy:e=>typeof e===W&&!!e&&be in e,get global(){return console.warn("Deprecated: please access `window` field instead"),this.window},get isGlobal(){return function(e){return console.warn("Deprecated: please access `isWindowProxy` field instead"),this.isWindowProxy(e)}.bind(this)}}};function $e(){return this}const Me=h+"M",Se=h+"T",je=new WeakMap,Ae=(e,...t)=>{const r=_(e,...t);if(!je.has(r)){const t=e instanceof Worker?ye:Pe;je.set(r,t(r,Me,Se))}return je.get(r)};Ae.transfer=_.transfer;const{isArray:xe}=Array,{assign:Oe,create:_e,defineProperties:We,defineProperty:Re}=Object,{all:Te,resolve:Fe}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Be=(e,t=location.href)=>new URL(e,t).href,Ie=e=>e.arrayBuffer(),Le=e=>e.json(),Ce=e=>e.text();var Ge=(...e)=>function t(r,n){const s=new Worker(URL.createObjectURL(new Blob(['const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[l,u]=o(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return i([-1],n)}return i([l,t],n)}case 1:{if(u)return i([u,[...n]],n);const e=[],t=i([l,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(u)switch(u){case"BigInt":return i([u,n.toString()],n);case"Boolean":case"Number":case"String":return i([u,n.valueOf()],n)}if(t&&"toJSON"in n)return c(n.toJSON());const r=[],f=i([l,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([l,{source:e,flags:t}],n)}case 5:{const t=[],r=i([l,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([l,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([l,{name:u,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:l}=JSON,u={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>l(i(e,u))}),p="dba0d233-ff77-488c-8f92-ef0e9cb3e008",d=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,"+encodeURIComponent("onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))"));r.onmessage=t,r.postMessage(e)}))})\n/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:w,Map:h,SharedArrayBuffer:y,Uint16Array:g}=globalThis,{BYTES_PER_ELEMENT:m}=w,{BYTES_PER_ELEMENT:b}=g,{isArray:v}=Array,{notify:P,wait:E,waitAsync:S}=Atomics,{fromCharCode:j}=String,M=(e,t)=>e?(S||d)(t,0):(E(t,0),{value:{then:e=>e()}}),k=new WeakSet,x=new WeakMap;let A=0;const $=(e,{parse:t,stringify:r}=JSON)=>{if(!x.has(e)){const n=(t,...r)=>e.postMessage({[p]:r},{transfer:t});x.set(e,new Proxy(new h,{get:(r,s)=>"then"===s?null:(...r)=>{const o=A++;let a=new w(new y(m)),i=[];k.has(r.at(-1)||i)&&k.delete(i=r.pop()),n(i,o,a,s,r);const c=e instanceof Worker;return M(c,a).value.then((()=>{const e=a[0];if(!e)return;const r=b*e;return a=new w(new y(r+r%m)),n([],o,a),M(c,a).value.then((()=>t(j(...new g(a.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new h;e.addEventListener("message",(async e=>{const s=e.data?.[p];if(v(s)){e.stopImmediatePropagation();const[o,a,...i]=s;if(i.length){const[e,s]=i;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const i=r(await t.get(e)(...s));i&&(n.set(o,i),a[0]=i.length)}}else{const e=n.get(o);n.delete(o);for(let t=new g(a.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}P(a,0)}}))}return!!t.set(n,s)}}))}return x.get(e)};$.transfer=(...e)=>(k.add(e),e);const _="object",O="function",W="number",R="string",T="undefined",F="symbol",{defineProperty:B,getOwnPropertyDescriptor:G,getPrototypeOf:I,isExtensible:L,ownKeys:U,preventExtensions:N,set:z,setPrototypeOf:D}=Reflect,J=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},C=(e,t)=>[e,t],q=e=>t=>{const r=typeof t;switch(r){case _:if(null==t)return C("null",t);case O:return e(r,t);case"boolean":case W:case R:case T:case"bigint":return C(r,t);case F:if(K.has(t))return C(r,K.get(t))}throw new Error(`Unable to handle this ${r} type`)},K=new Map(U(Symbol).filter((e=>typeof Symbol[e]===F)).map((e=>[Symbol[e],e]))),Y=e=>{for(const[t,r]of K)if(r===e)return t},V="apply",H="construct",Q="defineProperty",X="deleteProperty",Z="get",ee="getOwnPropertyDescriptor",te="getPrototypeOf",re="has",ne="isExtensible",se="ownKeys",oe="preventExtensions",ae="set",ie="setPrototypeOf",ce="delete";let le=0;const ue=new Map,fe=new Map,pe=new WeakMap;if(globalThis.window===globalThis){const{addEventListener:e}=EventTarget.prototype;B(EventTarget.prototype,"addEventListener",{value(t,r,...n){return n.at(0)?.invoke&&(pe.has(this)||pe.set(this,new Map),pe.get(this).set(t,[].concat(n[0].invoke)),delete n[0].invoke),e.call(this,t,r,...n)}})}const de=q(((e,t)=>{if(!ue.has(t)){let e;for(;fe.has(e=le++););ue.set(t,e),fe.set(e,t)}return C(e,ue.get(t))}));var we=(e,t,r)=>{const{[r]:n}=e,s=new FinalizationRegistry((e=>{n(ce,C(R,e))})),o=([e,t])=>{switch(e){case _:return null==t?globalThis:typeof t===W?fe.get(t):t;case O:if(typeof t===R){if(!fe.has(t)){const e=function(...e){return e.at(0)instanceof Event&&(e=>{const{currentTarget:t,target:r,type:n}=e;for(const s of pe.get(t||r)?.get(n)||[])e[s]()})(...e),n(V,C(O,t),de(this),e.map(de))},r=new WeakRef(e);fe.set(t,r),s.register(e,t,r)}return fe.get(t).deref()}return fe.get(t);case F:return Y(t)}return t},a={[V]:(e,t,r)=>de(e.apply(t,r)),[H]:(e,t)=>de(new e(...t)),[Q]:(e,t,r)=>de(B(e,t,r)),[X]:(e,t)=>de(delete e[t]),[te]:e=>de(I(e)),[Z]:(e,t)=>de(e[t]),[ee]:(e,t)=>{const r=G(e,t);return r?C(_,J(r,de)):C(T,r)},[re]:(e,t)=>de(t in e),[ne]:e=>de(L(e)),[se]:e=>C(_,U(e).map(de)),[oe]:e=>de(N(e)),[ae]:(e,t,r)=>de(z(e,t,r)),[ie]:(e,t)=>de(D(e,t)),[ce](e){ue.delete(fe.get(e)),fe.delete(e)}};return e[t]=(e,t,...r)=>{switch(e){case V:r[0]=o(r[0]),r[1]=r[1].map(o);break;case H:r[0]=r[0].map(o);break;case Q:{const[e,t]=r;r[0]=o(e);const{get:n,set:s,value:a}=t;n&&(t.get=o(n)),s&&(t.set=o(s)),a&&(t.value=o(a));break}default:r=r.map(o)}return a[e](o(t),...r)},{proxy:e,window:globalThis,isWindowProxy:()=>!1}};const he=e=>typeof e===O?e():e,ye=q(((e,t)=>{if(ge in t)return he(t[ge]);if(e===O){if(!ve.has(t)){let e;for(;ve.has(e=String(me++)););be.set(t,e),ve.set(e,t)}return C(e,be.get(t))}return C(e,t)})),ge=Symbol();let me=0;const be=new Map,ve=new Map;var Pe=(e,t,r)=>{const{[t]:n}=e,s=new Map,o=new FinalizationRegistry((e=>{s.delete(e),n(ce,ye(e))})),a=e=>{const[t,r]=e;if(!s.has(r)){const n=t===O?Ee.bind(e):e,a=new Proxy(n,l),i=new WeakRef(a);s.set(r,i),o.register(a,r,i)}return s.get(r).deref()},i=e=>{const[t,r]=e;switch(t){case _:return typeof r===W?a(e):r;case O:return typeof r===R?ve.get(r):a(e);case F:return Y(r)}return r},c=(e,t,...r)=>i(n(e,he(t),...r)),l={[V]:(e,t,r)=>c(V,e,ye(t),r.map(ye)),[H]:(e,t)=>c(H,e,t.map(ye)),[Q]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===O&&(r.get=ye(n)),typeof s===O&&(r.set=ye(s)),typeof o===O&&(r.value=ye(o)),c(Q,e,ye(t),r)},[X]:(e,t)=>c(X,e,ye(t)),[te]:e=>c(te,e),[Z]:(e,t)=>t===ge?e:c(Z,e,ye(t)),[ee]:(e,t)=>{const r=c(ee,e,ye(t));return r&&J(r,i)},[re]:(e,t)=>t===ge||c(re,e,ye(t)),[ne]:e=>c(ne,e),[se]:e=>c(se,e).map(i),[oe]:e=>c(oe,e),[ae]:(e,t,r)=>c(ae,e,ye(t),ye(r)),[ie]:(e,t)=>c(ie,e,ye(t))};return e[r]=(e,t,r,n)=>{switch(e){case V:return i(t).apply(i(r),n.map(i));case ce:{const e=i(t);be.delete(ve.get(e)),ve.delete(e)}}},{proxy:e,window:new Proxy([_,null],l),isWindowProxy:e=>typeof e===_&&!!e&&ge in e,get global(){return console.warn("Deprecated: please access `window` field instead"),this.window},get isGlobal(){return function(e){return console.warn("Deprecated: please access `isWindowProxy` field instead"),this.isWindowProxy(e)}.bind(this)}}};function Ee(){return this}const Se=p+"M",je=p+"T",Me=new WeakMap,ke=(e,...t)=>{const r=$(e,...t);if(!Me.has(r)){const t=e instanceof Worker?we:Pe;Me.set(r,t(r,Se,je))}return Me.get(r)};ke.transfer=$.transfer;const{isArray:xe}=Array,{assign:Ae,create:$e,defineProperties:_e,defineProperty:Oe}=Object,{all:We,resolve:Re}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Te=(e,t=location.href)=>new URL(e,t).href;Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Fe=e=>e.arrayBuffer(),Be=e=>e.json(),Ge=e=>e.text(),Ie=e=>e.replace(/^[^\\r\\n]+$/,(e=>e.trim())),Le=new WeakMap,Ue=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Le.set(t,r),t}}},Ne=e=>{const t=e.split("/");return t.pop(),t.join("/")},ze=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},De=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\\/+/,"/")},Je=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Ce=new WeakMap,qe=(e,t,r)=>We((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${n}, please supply \'to_file\' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(xe(n))return n.map((r=>({url:Je([e,r]),path:Je([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:Je([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(Te(t,Ce.get(e))))(r,n).then(Fe).then((r=>e.writeFile(t,s,r)))))),Ke=(e,t)=>e.runPython(Ie(t)),Ye=(e,t)=>e.runPythonAsync(Ie(t)),Ve=(e,t,r)=>e.globals.set(t,r),He=(e,t)=>e.globals.delete(t),Qe=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var Xe={type:"micropython",module:(e="1.20.0-253")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Ue();r=r.replace(/\\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await qe(this,a,t.fetch),a},setGlobal:Ve,deleteGlobal:He,run:Ke,runAsync:Ye,writeFile:Qe};var Ze={type:"pyodide",module:(e="0.23.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Ue(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await qe(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},setGlobal:Ve,deleteGlobal:He,run:Ke,runAsync:Ye,writeFile:Qe};const et="ruby-wasm-wasi";var tt={type:et,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await qe(this,o,t.fetch),o},setGlobal(e,t,r){const n=`__pyscript_ruby_wasm_wasi_${t}`;globalThis[n]=r,this.run(e,`require "js";$${t}=JS::eval("return ${n}")`)},deleteGlobal(e,t){const r=`__pyscript_ruby_wasm_wasi_${t}`;this.run(e,`$${t}=nil`),delete globalThis[r]},run:(e,t)=>e.eval(Ie(t)),runAsync:(e,t)=>e.evalAsync(Ie(t)),writeFile:()=>{throw new Error(`writeFile is not supported in ${et}`)}};var rt={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Ue(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await qe(this,a,r.fetch),a},setGlobal(e,t,r){e.global.set(t,r)},deleteGlobal(e,t){e.global.set(t,void 0)},run:(e,t)=>e.doStringSync(Ie(t)),runAsync:(e,t)=>e.doString(Ie(t)),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=De(e,t),ze(e,Ne(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const nt=new Map,st=new Map,ot=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=nt.get(r),o=/^https?:\\/\\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{st.set(t,e);const a=e?.fetch;return a&&Ce.set(a,o),s(n,e,r)}))}}),at=e=>{for(const t of[].concat(e.type))nt.set(t,e)};for(const e of[Xe,Ze,tt,rt])at(e);const it=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e);try{new SharedArrayBuffer(4)}catch(e){throw new Error(["Unable to use SharedArrayBuffer due insecure environment.","Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements"].join("\\n"))}let ct,lt,ut;const ft=(e,t)=>{addEventListener(e,t||(async t=>{await ct,ut=t,lt(`xworker.on${e}(xworker.event);`,ht)}),!!t&&{once:!0})},{proxy:pt,window:dt,isWindowProxy:wt}=ke(self,f),ht={sync:pt,window:dt,isWindowProxy:wt,onerror(){},onmessage(){},onmessageerror(){},postMessage:postMessage.bind(self),get event(){const e=ut;if(!e)throw new Error("Unauthorized event access");return ut=void 0,e}};ft("message",(({data:{options:e,code:t,hooks:r}})=>{ct=(async()=>{const{type:n,version:s,config:o,async:a}=e,i=await((e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(Be);else if(t.endsWith(".toml"))r=fetch(t).then(Ge).then(it);else{try{r=JSON.parse(t)}catch(e){r=it(t)}t=Te("./config.txt")}return Re(r).then((r=>ot[e](r,t)))})(((e,t="")=>`${e}@${t}`.replace(/@$/,""))(n,s),o),c=$e(nt.get(n)),l="run"+(a?"Async":"");if(r){const{beforeRun:e,beforeRunAsync:t,afterRun:n,afterRunAsync:s}=r,o=n||s,a=e||t;if(o){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${r}\\n${o}`)}if(a){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${a}\\n${r}`)}}return c.setGlobal(i,"xworker",ht),lt=c[l].bind(c,i),lt(t),i})(),ft("error"),ft("message"),ft("messageerror")}));\n'],{type:"application/javascript"})),{type:"module"}),{postMessage:o}=s,a=this instanceof t?void 0:this;if(e.length){const[t,r]=e;(n=Oe({},n||{type:t,version:r})).type||(n.type=t)}n?.config&&(n.config=Be(n.config));const i=fetch(r).then(Ce).then((e=>o.call(s,{options:n,code:e,hooks:a})));return We(s,{postMessage:{value:(e,...t)=>i.then((()=>o.call(s,e,...t)))},sync:{value:Ae(s,d).proxy}})};Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Ue=e=>e.replace(/^[^\r\n]+$/,(e=>e.trim())),Ne=new WeakMap,De=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Ne.set(t,r),t}}},Je=e=>{const t=e.split("/");return t.pop(),t.join("/")},ze=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},qe=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\/+/,"/")},Xe=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Ve=new WeakMap,Ke=(e,t,r)=>Te((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(xe(n))return n.map((r=>({url:Xe([e,r]),path:Xe([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:Xe([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(Be(t,Ve.get(e))))(r,n).then(Ie).then((r=>e.writeFile(t,s,r)))))),Ye=(e,t)=>e.runPython(Ue(t)),He=(e,t)=>e.runPythonAsync(Ue(t)),Qe=(e,t,r)=>e.globals.set(t,r),Ze=(e,t)=>e.globals.delete(t),et=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var tt={type:"micropython",module:(e="1.20.0-253")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=De();r=r.replace(/\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await Ke(this,a,t.fetch),a},setGlobal:Qe,deleteGlobal:Ze,run:Ye,runAsync:He,writeFile:et};var rt={type:"pyodide",module:(e="0.23.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=De(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await Ke(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},setGlobal:Qe,deleteGlobal:Ze,run:Ye,runAsync:He,writeFile:et};const nt="ruby-wasm-wasi";var st={type:nt,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await Ke(this,o,t.fetch),o},setGlobal(e,t,r){const n=`__pyscript_ruby_wasm_wasi_${t}`;globalThis[n]=r,this.run(e,`require "js";$${t}=JS::eval("return ${n}")`)},deleteGlobal(e,t){const r=`__pyscript_ruby_wasm_wasi_${t}`;this.run(e,`$${t}=nil`),delete globalThis[r]},run:(e,t)=>e.eval(Ue(t)),runAsync:(e,t)=>e.evalAsync(Ue(t)),writeFile:()=>{throw new Error(`writeFile is not supported in ${nt}`)}};var ot={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=De(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await Ke(this,a,r.fetch),a},setGlobal(e,t,r){e.global.set(t,r)},deleteGlobal(e,t){e.global.set(t,void 0)},run:(e,t)=>e.doStringSync(Ue(t)),runAsync:(e,t)=>e.doString(Ue(t)),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=qe(e,t),ze(e,Je(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const at=new Map,it=new Map,ct=[],lt=[],ut=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=at.get(r),o=/^https?:\/\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{it.set(t,e);const a=e?.fetch;return a&&Ve.set(a,o),s(n,e,r)}))}}),ft=e=>{for(const t of[].concat(e.type))at.set(t,e),ct.push(`script[type="${t}"]`),lt.push(`${t}-`)};for(const e of[tt,rt,st,ot])ft(e);const pt=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),dt=(e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(Le);else if(t.endsWith(".toml"))r=fetch(t).then(Ce).then(pt);else{try{r=JSON.parse(t)}catch(e){r=pt(t)}t=Be("./config.txt")}return Fe(r).then((r=>ut[e](r,t)))},ht=(e,t="")=>`${e}@${t}`.replace(/@$/,""),wt=(e,t)=>{const r=(e=>{let t=e;for(;t.parentNode;)t=t.parentNode;return t})(e);return r.getElementById(t)||((e,t=document)=>t.querySelector(e))(t,r)},yt=new WeakMap,gt={get(){let e=yt.get(this);return e||(e=document.createElement(`${this.type}-script`),yt.set(this,e),kt(this)),e},set(e){"string"==typeof e?yt.set(this,wt(this,e)):(yt.set(this,e),kt(this))}},mt=new WeakMap,bt=new Map,vt=(e,t)=>{const r=e?.value;return r?t+r:""},Et=(e,t,r,n,s)=>{if(!bt.has(t)){const o={interpreter:dt(r,s),queue:Fe(),XWorker:Ge(e,n)};bt.set(t,o),bt.has(e)||bt.set(e,o)}return bt.get(t)},kt=async e=>{if(mt.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{async:t,config:r,env:n,target:s,version:o},src:a,type:i}=e,c=o?.value,l=ht(i,c),u=vt(s,"");let f=vt(r,"|");const p=vt(n,"")||`${l}${f}`;f=f.slice(1),f&&(f=Be(f));const d=Et(i,p,l,c,f);mt.set(Re(e,"target",gt),d),u&&yt.set(e,wt(e,u));const h=a?fetch(a).then(Ce):e.textContent;d.queue=d.queue.then((()=>(async(e,t,r,n)=>{const s=at.get(e.type);s.experimental&&console.warn(`The ${e.type} interpreter is experimental`);const[o,a]=await Te([mt.get(e).interpreter,t]);try{return Re(document,"currentScript",{configurable:!0,get:()=>e}),s.setGlobal(o,"XWorker",r),s[n?"runAsync":"run"](o,a)}finally{delete document.currentScript,s.deleteGlobal(o,"XWorker")}})(e,h,d.XWorker,!!t)))}};Re(globalThis,"pyscript",{value:{env:new Proxy(_e(null),{get:(e,t)=>Pt(t)})}});const Pt=async e=>{if(bt.has(e)){const{interpreter:t,queue:r}=bt.get(e);return(await Te([t,r]))[0]}const t=bt.size?`Available interpreters are: ${[...bt.keys()].map((e=>`"${e}"`)).join(", ")}.`:"There are no interpreters in this page.";throw new Error(`The interpreter "${e}" was not found. ${t}`)},$t=async e=>{const{type:r,currentTarget:n}=e;for(let{name:s,value:o,ownerElement:a}of t(`./@*[${lt.map((e=>`name()="${e}${r}"`)).join(" or ")}]`,n)){s=s.slice(0,-(r.length+1));const t=await Pt(a.getAttribute(`${s}-env`)||s),n=at.get(s);try{n.setGlobal(t,"event",e),n.run(t,o)}finally{n.deleteGlobal(t,"event")}}},Mt=e=>{for(let{name:r,ownerElement:n}of t(`.//@*[${lt.map((e=>`starts-with(name(),"${e}")`)).join(" or ")}]`,e))r=r.slice(r.lastIndexOf("-")+1),"env"!==r&&n.addEventListener(r,$t)},St=[],jt=new Map,At=new Map,xt=e=>{for(const t of St)if(e.matches(t)){const r=jt.get(t),{resolve:n}=At.get(r),{options:s,known:o}=Ot.get(r);if(!o.has(e)){o.add(e);const{interpreter:t,version:a,config:i,env:c,onRuntimeReady:l}=s,u=ht(t,a),f=c||`${u}${i?`|${i}`:""}`,{interpreter:p,XWorker:d}=Et(t,f,u,a,i);p.then((o=>{const a=_e(at.get(t)),{onBeforeRun:i,onBeforeRunAsync:c,onAfterRun:f,onAfterRunAsync:p,codeBeforeRunWorker:h,codeBeforeRunWorkerAsync:w,codeAfterRunWorker:y,codeAfterRunWorkerAsync:g}=s,m={beforeRun:h?.(),beforeRunAsync:w?.(),afterRun:y?.(),afterRunAsync:g?.()},b=function(...e){return d.apply(m,e)};for(const[t,[r,n]]of[["run",[i,f]]]){const s=a[t];a[t]=function(t,o){r&&r.call(this,v,e);const a=s.call(this,t,o);return n&&n.call(this,v,e),a}}for(const[t,[r,n]]of[["runAsync",[c,p]]]){const s=a[t];a[t]=async function(t,o){r&&await r.call(this,v,e);const a=await s.call(this,t,o);return n&&await n.call(this,v,e),a}}a.setGlobal(o,"XWorker",b);const v={type:r,interpreter:o,XWorker:b,io:Ne.get(o),config:structuredClone(it.get(u)),run:a.run.bind(a,o),runAsync:a.runAsync.bind(a,o)};n(v),l?.(v,e)}))}}},Ot=new Map,_t=(t,r)=>{if(at.has(t)||Ot.has(t))throw new Error(`<script type="${t}"> already registered`);if(!at.has(r?.interpreter))throw new Error("Unspecified interpreter");at.set(t,at.get(r?.interpreter)),Wt(t);const n=[`script[type="${t}"]`,`${t}-script`];for(const e of n)jt.set(e,t);St.push(...n),lt.push(`${t}-`),Ot.set(t,{options:Oe({env:t},r),known:new WeakSet}),Mt(document),e(n.join(",")).forEach(xt)},Wt=e=>(At.has(e)||At.set(e,Promise.withResolvers()),At.get(e).promise),Rt=Ge(),Tt=ct.join(","),Ft=new MutationObserver((t=>{for(const{type:r,target:n,attributeName:s,addedNodes:o}of t)if("attributes"!==r){for(const t of o)if(1===t.nodeType)if(Mt(t),t.matches(Tt))kt(t);else{if(e(Tt,t).forEach(kt),!St.length)continue;xt(t),e(St.join(","),t).forEach(xt)}}else{const e=s.lastIndexOf("-")+1;if(e){const t=s.slice(0,e);for(const r of lt)if(t===r){const t=s.slice(e);if("env"!==t){const e=n.hasAttribute(s)?"add":"remove";n[`${e}EventListener`](t,$t)}break}}}})),Bt=e=>(Ft.observe(e,{childList:!0,subtree:!0,attributes:!0}),e),{attachShadow:It}=Element.prototype;Oe(Element.prototype,{attachShadow(e){return Bt(It.call(this,e))}}),Mt(Bt(document)),e(Tt,document).forEach(kt);export{Rt as XWorker,_t as define,Wt as whenDefined};