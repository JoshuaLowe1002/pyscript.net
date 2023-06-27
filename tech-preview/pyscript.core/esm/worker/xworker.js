/* c8 ignore next */
export default () => new Worker(URL.createObjectURL(new Blob(["const e=\"object\"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case\"BigInt\":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r=\"\",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if(\"object\"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case\"Array\":return[1,r];case\"Object\":return[2,r];case\"Date\":return[3,r];case\"RegExp\":return[4,r];case\"Map\":return[5,r];case\"Set\":return[6,r]}return s.includes(\"Array\")?[1,s]:s.includes(\"Error\")?[7,s]:[2,s]},a=([e,t])=>0===e&&(\"function\"===t||\"symbol\"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[l,u]=o(n);switch(l){case 0:{let t=n;switch(u){case\"bigint\":l=8,t=n.toString();break;case\"function\":case\"symbol\":if(e)throw new TypeError(\"unable to serialize \"+u);t=null;break;case\"undefined\":return i([-1],n)}return i([l,t],n)}case 1:{if(u)return i([u,[...n]],n);const e=[],t=i([l,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(u)switch(u){case\"BigInt\":return i([u,n.toString()],n);case\"Boolean\":case\"Number\":case\"String\":return i([u,n.valueOf()],n)}if(t&&\"toJSON\"in n)return c(n.toJSON());const r=[],f=i([l,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([l,{source:e,flags:t}],n)}case 5:{const t=[],r=i([l,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([l,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([l,{name:u,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:l}=JSON,u={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>l(i(e,u))}),p=\"2f6fe6d4-8ba8-424a-83c5-8fadca1ea103\",d=e=>({value:new Promise((t=>{let r=new Worker(\"data:application/javascript,\"+encodeURIComponent(\"onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))\"));r.onmessage=t,r.postMessage(e)}))})\n/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:w,Map:y,SharedArrayBuffer:h,Uint16Array:g}=globalThis,{BYTES_PER_ELEMENT:m}=w,{BYTES_PER_ELEMENT:b}=g,{isArray:v}=Array,{notify:P,wait:E,waitAsync:S}=Atomics,{fromCharCode:j}=String,A=(e,t)=>e?(S||d)(t,0):(E(t,0),{value:{then:e=>e()}}),M=new WeakSet,k=new WeakMap;let x=0;const _=(e,{parse:t,stringify:r}=JSON)=>{if(!k.has(e)){const n=(t,...r)=>e.postMessage({[p]:r},{transfer:t});k.set(e,new Proxy(new y,{has:(e,t)=>\"string\"==typeof t&&!t.startsWith(\"_\"),get:(r,s)=>\"then\"===s?null:(...r)=>{const o=x++;let a=new w(new h(m)),i=[];M.has(r.at(-1)||i)&&M.delete(i=r.pop()),n(i,o,a,s,r);const c=e instanceof Worker;return A(c,a).value.then((()=>{const e=a[0];if(!e)return;const r=b*e;return a=new w(new h(r+r%m)),n([],o,a),A(c,a).value.then((()=>t(j(...new g(a.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new y;e.addEventListener(\"message\",(async e=>{const s=e.data?.[p];if(v(s)){e.stopImmediatePropagation();const[o,a,...i]=s;if(i.length){const[e,s]=i;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const i=r(await t.get(e)(...s));i&&(n.set(o,i),a[0]=i.length)}}else{const e=n.get(o);n.delete(o);for(let t=new g(a.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}P(a,0)}}))}return!!t.set(n,s)}}))}return k.get(e)};_.transfer=(...e)=>(M.add(e),e);const $=\"object\",O=\"function\",W=\"number\",R=\"string\",T=\"undefined\",F=\"symbol\",{defineProperty:B,getOwnPropertyDescriptor:I,getPrototypeOf:G,isExtensible:L,ownKeys:U,preventExtensions:N,set:z,setPrototypeOf:D}=Reflect,J=G(Int8Array),C=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},q=(e,t)=>[e,t],K=e=>t=>{const r=typeof t;switch(r){case $:if(null==t)return q(\"null\",t);case O:return e(r,t);case\"boolean\":case W:case R:case T:case\"bigint\":return q(r,t);case F:if(Y.has(t))return q(r,Y.get(t))}throw new Error(`Unable to handle this ${r} type`)},Y=new Map(U(Symbol).filter((e=>typeof Symbol[e]===F)).map((e=>[Symbol[e],e]))),V=e=>{for(const[t,r]of Y)if(r===e)return t},H=\"apply\",Q=\"construct\",X=\"defineProperty\",Z=\"deleteProperty\",ee=\"get\",te=\"getOwnPropertyDescriptor\",re=\"getPrototypeOf\",ne=\"has\",se=\"isExtensible\",oe=\"ownKeys\",ae=\"preventExtensions\",ie=\"set\",ce=\"setPrototypeOf\",le=\"delete\";let ue=0;const fe=new Map,pe=new Map,de=new WeakMap;if(globalThis.window===globalThis){const{addEventListener:e}=EventTarget.prototype;B(EventTarget.prototype,\"addEventListener\",{value(t,r,...n){return n.at(0)?.invoke&&(de.has(this)||de.set(this,new Map),de.get(this).set(t,[].concat(n[0].invoke)),delete n[0].invoke),e.call(this,t,r,...n)}})}const we=K(((e,t)=>{if(!fe.has(t)){let e;for(;pe.has(e=ue++););fe.set(t,e),pe.set(e,t)}return q(e,fe.get(t))}));var ye=(e,t,r)=>{const{[r]:n}=e,s=new FinalizationRegistry((e=>{n(le,q(R,e))})),o=([e,t])=>{switch(e){case $:if(null==t)return globalThis;if(typeof t===W)return pe.get(t);if(!(t instanceof J))for(const e in t)t[e]=o(t[e]);return t;case O:if(typeof t===R){if(!pe.has(t)){const e=function(...e){return e.at(0)instanceof Event&&(e=>{const{currentTarget:t,target:r,type:n}=e;for(const s of de.get(t||r)?.get(n)||[])e[s]()})(...e),n(H,q(O,t),we(this),e.map(we))},r=new WeakRef(e);pe.set(t,r),s.register(e,t,r)}return pe.get(t).deref()}return pe.get(t);case F:return V(t)}return t},a={[H]:(e,t,r)=>we(e.apply(t,r)),[Q]:(e,t)=>we(new e(...t)),[X]:(e,t,r)=>we(B(e,t,r)),[Z]:(e,t)=>we(delete e[t]),[re]:e=>we(G(e)),[ee]:(e,t)=>we(e[t]),[te]:(e,t)=>{const r=I(e,t);return r?q($,C(r,we)):q(T,r)},[ne]:(e,t)=>we(t in e),[se]:e=>we(L(e)),[oe]:e=>q($,U(e).map(we)),[ae]:e=>we(N(e)),[ie]:(e,t,r)=>we(z(e,t,r)),[ce]:(e,t)=>we(D(e,t)),[le](e){fe.delete(pe.get(e)),pe.delete(e)}};return e[t]=(e,t,...r)=>{switch(e){case H:r[0]=o(r[0]),r[1]=r[1].map(o);break;case Q:r[0]=r[0].map(o);break;case X:{const[e,t]=r;r[0]=o(e);const{get:n,set:s,value:a}=t;n&&(t.get=o(n)),s&&(t.set=o(s)),a&&(t.value=o(a));break}default:r=r.map(o)}return a[e](o(t),...r)},{proxy:e,window:globalThis,isWindowProxy:()=>!1}};let he=0;const ge=new Map,me=new Map,be=Symbol(),ve=e=>typeof e===O?e():e,Pe=e=>typeof e===$&&!!e&&be in e,Ee=\"isArray\",Se=Array[Ee],je=K(((e,t)=>{if(be in t)return ve(t[be]);if(e===O){if(!me.has(t)){let e;for(;me.has(e=String(he++)););ge.set(t,e),me.set(e,t)}return q(e,ge.get(t))}if(!(t instanceof J))for(const e in t)t[e]=je(t[e]);return q(e,t)}));var Ae=(e,t,r)=>{const{[t]:n}=e,s=new Map,o=new FinalizationRegistry((e=>{s.delete(e),n(le,je(e))})),a=e=>{const[t,r]=e;if(!s.has(r)){const n=t===O?Me.bind(e):e,a=new Proxy(n,l),i=new WeakRef(a);s.set(r,i),o.register(a,r,i)}return s.get(r).deref()},i=e=>{const[t,r]=e;switch(t){case $:return typeof r===W?a(e):r;case O:return typeof r===R?me.get(r):a(e);case F:return V(r)}return r},c=(e,t,...r)=>i(n(e,ve(t),...r)),l={[H]:(e,t,r)=>c(H,e,je(t),r.map(je)),[Q]:(e,t)=>c(Q,e,t.map(je)),[X]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===O&&(r.get=je(n)),typeof s===O&&(r.set=je(s)),typeof o===O&&(r.value=je(o)),c(X,e,je(t),r)},[Z]:(e,t)=>c(Z,e,je(t)),[re]:e=>c(re,e),[ee]:(e,t)=>t===be?e:c(ee,e,je(t)),[te]:(e,t)=>{const r=c(te,e,je(t));return r&&C(r,i)},[ne]:(e,t)=>t===be||c(ne,e,je(t)),[se]:e=>c(se,e),[oe]:e=>c(oe,e).map(i),[ae]:e=>c(ae,e),[ie]:(e,t,r)=>c(ie,e,je(t),je(r)),[ce]:(e,t)=>c(ce,e,je(t))};e[r]=(e,t,r,n)=>{switch(e){case H:return i(t).apply(i(r),n.map(i));case le:{const e=i(t);ge.delete(me.get(e)),me.delete(e)}}};const u=new Proxy([$,null],l),f=u.Array[Ee];return B(Array,Ee,{value:e=>Pe(e)?f(e):Se(e)}),{window:u,isWindowProxy:Pe,proxy:e,get global(){return console.warn(\"Deprecated: please access `window` field instead\"),this.window},get isGlobal(){return function(e){return console.warn(\"Deprecated: please access `isWindowProxy` field instead\"),this.isWindowProxy(e)}.bind(this)}}};function Me(){return this}const ke=p+\"M\",xe=p+\"T\",_e=new WeakMap,$e=(e,...t)=>{const r=_(e,...t);if(!_e.has(r)){const t=e instanceof Worker?ye:Ae;_e.set(r,t(r,ke,xe))}return _e.get(r)};$e.transfer=_.transfer;const{isArray:Oe}=Array,{assign:We,create:Re,defineProperties:Te,defineProperty:Fe}=Object,{all:Be,resolve:Ie}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Ge=(e,t=location.href)=>new URL(e,t).href;Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Le=e=>e.arrayBuffer(),Ue=e=>e.json(),Ne=e=>e.text(),ze=e=>e.replace(/^[^\\r\\n]+$/,(e=>e.trim())),De=new WeakMap,Je=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return De.set(t,r),t}}},Ce=e=>{const t=e.split(\"/\");return t.pop(),t.join(\"/\")},qe=(e,t)=>{const r=[];for(const n of t.split(\"/\"))r.push(n),n&&e.mkdir(r.join(\"/\"))},Ke=(e,t)=>{const r=[];for(const e of t.split(\"/\"))switch(e){case\"\":case\".\":break;case\"..\":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join(\"/\").replace(/^\\/+/,\"/\")},Ye=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,\"\"))).filter((e=>\"\"!==e&&\".\"!==e)).join(\"/\");return e[0].startsWith(\"/\")?`/${t}`:t},Ve=new WeakMap,He=(e,t,r)=>Be((e=>{for(const{files:t,to_file:r,from:n=\"\"}of e){if(void 0!==t&&void 0!==r)throw new Error(\"Cannot use 'to_file' and 'files' parameters together!\");if(void 0===t&&void 0===r&&n.endsWith(\"/\"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e=\"\",to_folder:t=\".\",to_file:r,files:n})=>{if(Oe(n))return n.map((r=>({url:Ye([e,r]),path:Ye([t,r])})));const s=r||e.slice(1+e.lastIndexOf(\"/\"));return[{url:e,path:Ye([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(Ge(t,Ve.get(e))))(r,n).then(Le).then((r=>e.writeFile(t,s,r)))))),Qe=(e,t)=>e.runPython(ze(t)),Xe=(e,t,r)=>{e.globals.set(t,r)},Ze=(e,t)=>{e.globals.delete(t)},et=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join(\"/\"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var tt={type:\"micropython\",module:(e=\"1.20.0-268\")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Je();r=r.replace(/\\.m?js$/,\".wasm\");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await He(this,a,t.fetch),a},setGlobal:Xe,deleteGlobal:Ze,run:Qe,async runAsync(...e){return this.run(...e)},writeFile:et};var rt={type:\"pyodide\",module:(e=\"0.23.2\")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Je(),a=r.slice(0,r.lastIndexOf(\"/\")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await He(this,i,t.fetch),t.packages){await i.loadPackage(\"micropip\");const e=await i.pyimport(\"micropip\");await e.install(t.packages),e.destroy()}return i},setGlobal:Xe,deleteGlobal:Ze,run:Qe,runAsync:(e,t)=>e.runPythonAsync(ze(t)),writeFile:et};const nt=\"ruby-wasm-wasi\";var st={type:nt,experimental:!0,module:(e=\"2.0.0\")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf(\"/\"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await He(this,o,t.fetch),o},setGlobal(e,t,r){const n=`__pyscript_ruby_wasm_wasi_${t}`;globalThis[n]=r,this.run(e,`require \"js\";$${t}=JS::eval(\"return ${n}\")`)},deleteGlobal(e,t){const r=`__pyscript_ruby_wasm_wasi_${t}`;this.run(e,`$${t}=nil`),delete globalThis[r]},run:(e,t)=>e.eval(ze(t)),runAsync:(e,t)=>e.evalAsync(ze(t)),writeFile:()=>{throw new Error(`writeFile is not supported in ${nt}`)}};var ot={type:\"wasmoon\",module:(e=\"1.15.0\")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Je(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,\"print\",s),a.global.setField(e,\"printErr\",n)})),r.fetch&&await He(this,a,r.fetch),a},setGlobal(e,t,r){e.global.set(t,r)},deleteGlobal(e,t){e.global.set(t,void 0)},run:(e,t)=>e.doStringSync(ze(t)),runAsync:(e,t)=>e.doString(ze(t)),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=Ke(e,t),qe(e,Ce(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const at=new Map,it=new Map,ct=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split(\"@\"),s=at.get(r),o=/^https?:\\/\\//i.test(n)?n.join(\"@\"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{it.set(t,e);const a=e?.fetch;return a&&Ve.set(a,o),s(n,e,r)}))}}),lt=e=>{for(const t of[].concat(e.type))at.set(t,e)};for(const e of[tt,rt,st,ot])lt(e);const ut=async e=>(await import(\"https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js\")).parse(e);try{new SharedArrayBuffer(4)}catch(e){throw new Error([\"Unable to use SharedArrayBuffer due insecure environment.\",\"Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements\"].join(\"\\n\"))}let ft,pt,dt;const wt=(e,t)=>{addEventListener(e,t||(async t=>{await ft,dt=t,pt(`xworker.on${e}(xworker.event);`,mt)}),!!t&&{once:!0})},{proxy:yt,window:ht,isWindowProxy:gt}=$e(self,f),mt={sync:yt,window:ht,isWindowProxy:gt,onerror(){},onmessage(){},onmessageerror(){},postMessage:postMessage.bind(self),get event(){const e=dt;if(!e)throw new Error(\"Unauthorized event access\");return dt=void 0,e}};wt(\"message\",(({data:{options:e,code:t,hooks:r}})=>{ft=(async()=>{const{type:n,version:s,config:o,async:a}=e,i=await((e,t)=>{let r={};if(t)if(t.endsWith(\".json\"))r=fetch(t).then(Ue);else if(t.endsWith(\".toml\"))r=fetch(t).then(Ne).then(ut);else{try{r=JSON.parse(t)}catch(e){r=ut(t)}t=Ge(\"./config.txt\")}return Ie(r).then((r=>ct[e](r,t)))})(((e,t=\"\")=>`${e}@${t}`.replace(/@$/,\"\"))(n,s),o),c=Re(at.get(n)),l=\"run\"+(a?\"Async\":\"\");if(r){const{beforeRun:e,beforeRunAsync:t,afterRun:n,afterRunAsync:s}=r,o=n||s,a=e||t;if(o){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${r}\\n${o}`)}if(a){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${a}\\n${r}`)}}return c.setGlobal(i,\"xworker\",mt),pt=c[l].bind(c,i),pt(t),i})(),wt(\"error\"),wt(\"message\"),wt(\"messageerror\")}));\n"],{type:'application/javascript'})),{type:'module'});