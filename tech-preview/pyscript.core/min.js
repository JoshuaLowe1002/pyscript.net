const e=(e,t=document)=>[...t.querySelectorAll(e)],t=(e,t=document)=>{const r=(new XPathEvaluator).createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),n=[];for(let e=0,{snapshotLength:t}=r;e<t;e++)n.push(r.snapshotItem(e));return n},r="object"==typeof self?self:globalThis,n=e=>((e,t)=>{const n=(t,r)=>(e.set(r,t),t),s=o=>{if(e.has(o))return e.get(o);const[a,i]=t[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:e,message:t}=i;return n(new r[e](t),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new r[a](i),o)};return s})(new Map,e)(0),s="",{toString:o}={},{keys:a}=Object,i=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const r=o.call(e).slice(8,-1);switch(r){case"Array":return[1,s];case"Object":return[2,s];case"Date":return[3,s];case"RegExp":return[4,s];case"Map":return[5,s];case"Set":return[6,s]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},c=([e,t])=>0===e&&("function"===t||"symbol"===t),l=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const s=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},o=n=>{if(r.has(n))return r.get(n);let[l,u]=i(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return s([-1],n)}return s([l,t],n)}case 1:{if(u)return s([u,[...n]],n);const e=[],t=s([l,e],n);for(const t of n)e.push(o(t));return t}case 2:{if(u)switch(u){case"BigInt":return s([u,n.toString()],n);case"Boolean":case"Number":case"String":return s([u,n.valueOf()],n)}if(t&&"toJSON"in n)return o(n.toJSON());const r=[],p=s([l,r],n);for(const t of a(n))!e&&c(i(n[t]))||r.push([o(t),o(n[t])]);return p}case 3:return s([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return s([l,{source:e,flags:t}],n)}case 5:{const t=[],r=s([l,t],n);for(const[r,s]of n)(e||!c(i(r))&&!c(i(s)))&&t.push([o(r),o(s)]);return r}case 6:{const t=[],r=s([l,t],n);for(const r of n)!e&&c(i(r))||t.push(o(r));return r}}const{message:p}=n;return s([l,{name:u,message:p}],n)};return o})(!(t||r),!!t,new Map,n)(e),n},{parse:u,stringify:p}=JSON,f={json:!0,lossy:!0};var d=Object.freeze({__proto__:null,parse:e=>n(u(e)),stringify:e=>p(l(e,f))}),h=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,"+encodeURIComponent('onmessage=({data:b})=>(Atomics.wait(b,0),postMessage("ok"))'));r.onmessage=t,r.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const w="eef159e0-b39b-4e0e-b711-43432daf4928",{Int32Array:y,Map:g,SharedArrayBuffer:m,Uint16Array:b}=globalThis,{BYTES_PER_ELEMENT:v}=y,{BYTES_PER_ELEMENT:$}=b,{isArray:_}=Array,{notify:j,wait:A,waitAsync:E}=Atomics,{fromCharCode:S}=String,k=(e,t)=>e?(E||h)(t,0):(A(t,0),{value:{then:e=>e()}}),M=new WeakSet,P=new WeakMap;let R=0;const O=(e,{parse:t,stringify:r}=JSON)=>{if(!P.has(e)){const n=(t,...r)=>e.postMessage({[w]:r},{transfer:t});P.set(e,new Proxy(new g,{get:(r,s)=>"then"===s?null:(...r)=>{const o=R++;let a=new m(v);const i=new y(a);let c=[];M.has(r.at(-1)||c)&&M.delete(c=r.pop()),n(c,o,a,s,r);const l=e instanceof Worker;return k(l,i).value.then((()=>{const e=i[0];if(!e)return;const r=$*e;return a=new m(r+r%v),n([],o,a),k(l,new y(a)).value.then((()=>t(S(...new b(a).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new g;e.addEventListener("message",(async({data:e})=>{const s=e?.[w];if(_(s)){const[e,o,...a]=s,i=new y(o);if(a.length){const[s,o]=a;if(!t.has(s))throw new Error(`Unsupported action: ${s}`);{const a=r(await t.get(s)(...o));a&&(n.set(e,a),i[0]=a.length)}}else{const t=n.get(e);n.delete(e);for(let e=new b(o),r=0;r<t.length;r++)e[r]=t.charCodeAt(r)}j(i,0)}}))}return!!t.set(n,s)}}))}return P.get(e)},W=e=>O(e,d);W.transfer=O.transfer=(...e)=>(M.add(e),e);const{isArray:x}=Array,{assign:T,create:B,defineProperties:I,defineProperty:F}=Object,{all:G,resolve:L}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),N=(e,t=location.href)=>new URL(e,t).href,U=e=>e.arrayBuffer(),J=e=>e.json(),C=e=>e.text();var z=new WeakMap,q=(...e)=>function t(r,n){const s=z.get(t),o=new Worker(URL.createObjectURL(new Blob(['const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[l,u]=o(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return i([-1],n)}return i([l,t],n)}case 1:{if(u)return i([u,[...n]],n);const e=[],t=i([l,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(u)switch(u){case"BigInt":return i([u,n.toString()],n);case"Boolean":case"Number":case"String":return i([u,n.valueOf()],n)}if(t&&"toJSON"in n)return c(n.toJSON());const r=[],f=i([l,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([l,{source:e,flags:t}],n)}case 5:{const t=[],r=i([l,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([l,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([l,{name:u,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:l}=JSON,u={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>l(i(e,u))}),p=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,"+encodeURIComponent(\'onmessage=({data:b})=>(Atomics.wait(b,0),postMessage("ok"))\'));r.onmessage=t,r.postMessage(e)}))})\n/*! (c) Andrea Giammarchi - ISC */;const d="eef159e0-b39b-4e0e-b711-43432daf4928",{Int32Array:h,Map:w,SharedArrayBuffer:y,Uint16Array:g}=globalThis,{BYTES_PER_ELEMENT:m}=h,{BYTES_PER_ELEMENT:b}=g,{isArray:v}=Array,{notify:$,wait:_,waitAsync:j}=Atomics,{fromCharCode:S}=String,A=(e,t)=>e?(j||p)(t,0):(_(t,0),{value:{then:e=>e()}}),E=new WeakSet,M=new WeakMap;let k=0;const P=(e,{parse:t,stringify:r}=JSON)=>{if(!M.has(e)){const n=(t,...r)=>e.postMessage({[d]:r},{transfer:t});M.set(e,new Proxy(new w,{get:(r,s)=>"then"===s?null:(...r)=>{const o=k++;let a=new y(m);const i=new h(a);let c=[];E.has(r.at(-1)||c)&&E.delete(c=r.pop()),n(c,o,a,s,r);const l=e instanceof Worker;return A(l,i).value.then((()=>{const e=i[0];if(!e)return;const r=b*e;return a=new y(r+r%m),n([],o,a),A(l,new h(a)).value.then((()=>t(S(...new g(a).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new w;e.addEventListener("message",(async({data:e})=>{const s=e?.[d];if(v(s)){const[e,o,...a]=s,i=new h(o);if(a.length){const[s,o]=a;if(!t.has(s))throw new Error(`Unsupported action: ${s}`);{const a=r(await t.get(s)(...o));a&&(n.set(e,a),i[0]=a.length)}}else{const t=n.get(e);n.delete(e);for(let e=new g(o),r=0;r<t.length;r++)e[r]=t.charCodeAt(r)}$(i,0)}}))}return!!t.set(n,s)}}))}return M.get(e)},O=e=>P(e,f);O.transfer=P.transfer=(...e)=>(E.add(e),e);const{isArray:x}=Array,{assign:R,create:B,defineProperties:F,defineProperty:T}=Object,{all:W,resolve:G}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),I=(e,t=location.href)=>new URL(e,t).href;Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const U=e=>e.arrayBuffer(),L=e=>e.json(),N=e=>e.text(),J=e=>e.replace(/^[^\\r\\n]+$/,(e=>e.trim())),z=new WeakMap,C=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return z.set(t,r),t}}},D=e=>{const t=e.split("/");return t.pop(),t.join("/")},q=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},Y=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\\/+/,"/")},V=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},H=new WeakMap,K=(e,t,r)=>W((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${n}, please supply \'to_file\' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(x(n))return n.map((r=>({url:V([e,r]),path:V([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:V([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(I(t,H.get(e))))(r,n).then(U).then((r=>e.writeFile(t,s,r)))))),Q=(e,t)=>e.runPython(J(t)),X=(e,t)=>e.runPythonAsync(J(t)),Z=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var ee={type:"micropython",module:(e="1.20.0-239")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=C();r=r.replace(/\\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await K(this,a,t.fetch),a},setGlobal(e,t,r){const n=`__pyscript_${this.type}_${t}`;globalThis[n]=r,this.run(e,`from js import ${n};${t}=${n};`)},deleteGlobal(e,t){const r=`__pyscript_${this.type}_${t}`;this.run(e,`del ${r};del ${t}`),delete globalThis[r]},run:Q,runAsync:X,writeFile:Z};var te={type:"pyodide",module:(e="0.23.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=C(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await K(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},setGlobal(e,t,r){e.globals.set(t,r)},deleteGlobal(e,t){e.globals.delete(t)},run:Q,runAsync:X,writeFile:Z};const re="ruby-wasm-wasi";var ne={type:re,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await K(this,o,t.fetch),o},setGlobal(e,t,r){const n=`__pyscript_ruby_wasm_wasi_${t}`;globalThis[n]=r,this.run(e,`require "js";$${t}=JS::eval("return ${n}")`)},deleteGlobal(e,t){const r=`__pyscript_ruby_wasm_wasi_${t}`;this.run(e,`$${t}=nil`),delete globalThis[r]},run:(e,t)=>e.eval(J(t)),runAsync:(e,t)=>e.evalAsync(J(t)),writeFile:()=>{throw new Error(`writeFile is not supported in ${re}`)}};var se={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=C(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await K(this,a,r.fetch),a},setGlobal(e,t,r){e.global.set(t,r)},deleteGlobal(e,t){e.global.set(t,void 0)},run:(e,t)=>e.doStringSync(J(t)),runAsync:(e,t)=>e.doString(J(t)),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=Y(e,t),q(e,D(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const oe=new Map,ae=new Map,ie=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=oe.get(r),o=/^https?:\\/\\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{ae.set(t,e);const a=e?.fetch;return a&&H.set(a,o),s(n,e,r)}))}}),ce=e=>{for(const t of[].concat(e.type))oe.set(t,e)};for(const e of[ee,te,ne,se])ce(e);const le=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e);try{new SharedArrayBuffer(4)}catch(e){throw new Error(["Unable to use SharedArrayBuffer due insecure environment.","Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements"].join("\\n"))}let ue,fe,pe;const de=(e,t)=>{addEventListener(e,t||(async t=>{await ue,pe=t,fe(`xworker.on${e}(xworker.event);`,he)}),!!t&&{once:!0})},he={sync:O(self),onerror(){},onmessage(){},onmessageerror(){},postMessage:postMessage.bind(self),get event(){const e=pe;if(!e)throw new Error("Unauthorized event access");return pe=void 0,e}};de("message",(({data:{options:e,code:t,hooks:r}})=>{ue=(async()=>{const{type:n,version:s,config:o,async:a}=e,i=await((e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(L);else if(t.endsWith(".toml"))r=fetch(t).then(N).then(le);else{try{r=JSON.parse(t)}catch(e){r=le(t)}t=I("./config.txt")}return G(r).then((r=>ie[e](r,t)))})(((e,t="")=>`${e}@${t}`.replace(/@$/,""))(n,s),o),c=B(oe.get(n)),l="run"+(a?"Async":"");if(r){const{beforeRun:e,beforeRunAsync:t,afterRun:n,afterRunAsync:s}=r,o=n||s,a=e||t;if(o){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${r}\\n${o}`)}if(a){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${a}\\n${r}`)}}return c.setGlobal(i,"xworker",he),fe=c[l].bind(c,i),fe(t),i})(),de("error"),de("message"),de("messageerror")}));\n'],{type:"application/javascript"})),{type:"module"}),{postMessage:a}=o;if(e.length){const[t,r]=e;(n=T({},n||{type:t,version:r})).type||(n.type=t)}n?.config&&(n.config=N(n.config));const i=fetch(r).then(C).then((e=>a.call(o,{options:n,code:e,hooks:s})));return I(o,{postMessage:{value:(e,...t)=>i.then((()=>a.call(o,e,...t)))},sync:{value:W(o)}})};Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const D=e=>e.replace(/^[^\r\n]+$/,(e=>e.trim())),X=new WeakMap,Y=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return X.set(t,r),t}}},V=e=>{const t=e.split("/");return t.pop(),t.join("/")},K=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},H=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\/+/,"/")},Q=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Z=new WeakMap,ee=(e,t,r)=>G((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(x(n))return n.map((r=>({url:Q([e,r]),path:Q([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:Q([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(N(t,Z.get(e))))(r,n).then(U).then((r=>e.writeFile(t,s,r)))))),te=(e,t)=>e.runPython(D(t)),re=(e,t)=>e.runPythonAsync(D(t)),ne=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var se={type:"micropython",module:(e="1.20.0-239")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Y();r=r.replace(/\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await ee(this,a,t.fetch),a},setGlobal(e,t,r){const n=`__pyscript_${this.type}_${t}`;globalThis[n]=r,this.run(e,`from js import ${n};${t}=${n};`)},deleteGlobal(e,t){const r=`__pyscript_${this.type}_${t}`;this.run(e,`del ${r};del ${t}`),delete globalThis[r]},run:te,runAsync:re,writeFile:ne};var oe={type:"pyodide",module:(e="0.23.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Y(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await ee(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},setGlobal(e,t,r){e.globals.set(t,r)},deleteGlobal(e,t){e.globals.delete(t)},run:te,runAsync:re,writeFile:ne};const ae="ruby-wasm-wasi";var ie={type:ae,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await ee(this,o,t.fetch),o},setGlobal(e,t,r){const n=`__pyscript_ruby_wasm_wasi_${t}`;globalThis[n]=r,this.run(e,`require "js";$${t}=JS::eval("return ${n}")`)},deleteGlobal(e,t){const r=`__pyscript_ruby_wasm_wasi_${t}`;this.run(e,`$${t}=nil`),delete globalThis[r]},run:(e,t)=>e.eval(D(t)),runAsync:(e,t)=>e.evalAsync(D(t)),writeFile:()=>{throw new Error(`writeFile is not supported in ${ae}`)}};var ce={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Y(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await ee(this,a,r.fetch),a},setGlobal(e,t,r){e.global.set(t,r)},deleteGlobal(e,t){e.global.set(t,void 0)},run:(e,t)=>e.doStringSync(D(t)),runAsync:(e,t)=>e.doString(D(t)),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=H(e,t),K(e,V(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const le=new Map,ue=new Map,pe=[],fe=[],de=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=le.get(r),o=/^https?:\/\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{ue.set(t,e);const a=e?.fetch;return a&&Z.set(a,o),s(n,e,r)}))}}),he=e=>{for(const t of[].concat(e.type))le.set(t,e),pe.push(`script[type="${t}"]`),fe.push(`${t}-`)};for(const e of[se,oe,ie,ce])he(e);const we=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),ye=(e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(J);else if(t.endsWith(".toml"))r=fetch(t).then(C).then(we);else{try{r=JSON.parse(t)}catch(e){r=we(t)}t=N("./config.txt")}return L(r).then((r=>de[e](r,t)))},ge=(e,t="")=>`${e}@${t}`.replace(/@$/,""),me=(e,t)=>{const r=(e=>{let t=e;for(;t.parentNode;)t=t.parentNode;return t})(e);return r.getElementById(t)||((e,t=document)=>t.querySelector(e))(t,r)},be=new WeakMap,ve={get(){let e=be.get(this);return e||(e=document.createElement(`${this.type}-script`),be.set(this,e),Ee(this)),e},set(e){"string"==typeof e?be.set(this,me(this,e)):(be.set(this,e),Ee(this))}},$e=new WeakMap,_e=new Map,je=(e,t)=>{const r=e?.value;return r?t+r:""},Ae=(e,t,r,n,s)=>{if(!_e.has(t)){const o={interpreter:ye(r,s),queue:L(),XWorker:q(e,n)};_e.set(t,o),_e.has(e)||_e.set(e,o)}return _e.get(t)},Ee=async e=>{if($e.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{async:t,config:r,env:n,target:s,version:o},src:a,type:i}=e,c=o?.value,l=ge(i,c),u=je(s,"");let p=je(r,"|");const f=je(n,"")||`${l}${p}`;p=p.slice(1),p&&(p=N(p));const d=Ae(i,f,l,c,p);$e.set(F(e,"target",ve),d),u&&be.set(e,me(e,u));const h=a?fetch(a).then(C):e.textContent;d.queue=d.queue.then((()=>(async(e,t,r,n)=>{const s=le.get(e.type);s.experimental&&console.warn(`The ${e.type} interpreter is experimental`);const[o,a]=await G([$e.get(e).interpreter,t]);try{return F(document,"currentScript",{configurable:!0,get:()=>e}),s.setGlobal(o,"XWorker",r),s[n?"runAsync":"run"](o,a)}finally{delete document.currentScript,s.deleteGlobal(o,"XWorker")}})(e,h,d.XWorker,!!t)))}};F(globalThis,"pyscript",{value:{env:new Proxy(B(null),{get:(e,t)=>Se(t)})}});const Se=async e=>{if(_e.has(e)){const{interpreter:t,queue:r}=_e.get(e);return(await G([t,r]))[0]}const t=_e.size?`Available interpreters are: ${[..._e.keys()].map((e=>`"${e}"`)).join(", ")}.`:"There are no interpreters in this page.";throw new Error(`The interpreter "${e}" was not found. ${t}`)},ke=async e=>{const{type:r,currentTarget:n}=e;for(let{name:s,value:o,ownerElement:a}of t(`./@*[${fe.map((e=>`name()="${e}${r}"`)).join(" or ")}]`,n)){s=s.slice(0,-(r.length+1));const t=await Se(a.getAttribute(`${s}-env`)||s),n=le.get(s);try{n.setGlobal(t,"event",e),n.run(t,o)}finally{n.deleteGlobal(t,"event")}}},Me=e=>{for(let{name:r,ownerElement:n}of t(`.//@*[${fe.map((e=>`starts-with(name(),"${e}")`)).join(" or ")}]`,e))r=r.slice(r.lastIndexOf("-")+1),"env"!==r&&n.addEventListener(r,ke)},Pe=[],Re=new Map,Oe=new Map,We=new Map,xe=e=>{for(const t of Pe)if(e.matches(t)){const r=Oe.get(t),{resolve:n}=We.get(r),{options:s,known:o}=Te.get(r);if(!o.has(e)){o.add(e);const{interpreter:t,version:a,config:i,env:c,onRuntimeReady:l}=s,u=ge(t,a),p=c||`${u}${i?`|${i}`:""}`,{interpreter:f,XWorker:d}=Ae(t,p,u,a,i);f.then((o=>{if(!Re.has(p)){const a=B(le.get(t)),{onBeforeRun:i,onBeforeRunAsync:c,onAfterRun:l,onAfterRunAsync:f,codeBeforeRunWorker:h,codeBeforeRunWorkerAsync:w,codeAfterRunWorker:y,codeAfterRunWorkerAsync:g}=s;for(const[t,[r,n]]of[["run",[i,l]]]){const s=a[t];a[t]=function(t,o){r&&r.call(this,m,e);const a=s.call(this,t,o);return n&&n.call(this,m,e),a}}for(const[t,[r,n]]of[["runAsync",[c,f]]]){const s=a[t];a[t]=async function(t,o){r&&await r.call(this,m,e);const a=await s.call(this,t,o);return n&&await n.call(this,m,e),a}}z.set(d,{beforeRun:h,beforeRunAsync:w,afterRun:y,afterRunAsync:g}),a.setGlobal(o,"XWorker",d);const m={type:r,interpreter:o,XWorker:d,io:X.get(o),config:structuredClone(ue.get(u)),run:a.run.bind(a,o),runAsync:a.runAsync.bind(a,o)};Re.set(p,m),n(m)}l?.(Re.get(p),e)}))}}},Te=new Map,Be=(t,r)=>{if(le.has(t)||Te.has(t))throw new Error(`<script type="${t}"> already registered`);if(!le.has(r?.interpreter))throw new Error("Unspecified interpreter");le.set(t,le.get(r?.interpreter)),Ie(t);const n=[`script[type="${t}"]`,`${t}-script`];for(const e of n)Oe.set(e,t);Pe.push(...n),fe.push(`${t}-`),Te.set(t,{options:T({env:t},r),known:new WeakSet}),Me(document),e(n.join(",")).forEach(xe)},Ie=e=>(We.has(e)||We.set(e,Promise.withResolvers()),We.get(e).promise),Fe=q(),Ge=pe.join(","),Le=new MutationObserver((t=>{for(const{type:r,target:n,attributeName:s,addedNodes:o}of t)if("attributes"!==r){for(const t of o)if(1===t.nodeType)if(Me(t),t.matches(Ge))Ee(t);else{if(e(Ge,t).forEach(Ee),!Pe.length)continue;xe(t),e(Pe.join(","),t).forEach(xe)}}else{const e=s.lastIndexOf("-")+1;if(e){const t=s.slice(0,e);for(const r of fe)if(t===r){const t=s.slice(e);if("env"!==t){const e=n.hasAttribute(s)?"add":"remove";n[`${e}EventListener`](t,ke)}break}}}})),Ne=e=>(Le.observe(e,{childList:!0,subtree:!0,attributes:!0}),e),{attachShadow:Ue}=Element.prototype;T(Element.prototype,{attachShadow(e){return Ne(Ue.call(this,e))}}),Me(Ne(document)),e(Ge,document).forEach(Ee);export{Fe as XWorker,Be as define,Ie as whenDefined};
