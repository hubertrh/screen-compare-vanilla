(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},nd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ns={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(t[l],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new rd;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const id=function(n){const e=Rc(n);return Ns.encodeByteArray(e,!0)},Ir=function(n){return id(n).replace(/\./g,"")},Nc=function(n){try{return Ns.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=()=>Dc().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ad=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nc(n[1]);return e&&JSON.parse(e)},Ds=()=>{try{return sd()||od()||ad()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pc=n=>{var e,t;return(t=(e=Ds())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cd=n=>{const e=Pc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Oc=()=>{var n;return(n=Ds())===null||n===void 0?void 0:n.config},Lc=n=>{var e;return(e=Ds())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ir(JSON.stringify(t)),Ir(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function hd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fd(){const n=oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ps(){try{return typeof indexedDB=="object"}catch{return!1}}function pd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="FirebaseError";class Ue extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gd,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jt.prototype.create)}}class jt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?md(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ue(i,a,r)}}function md(n,e){return n.replace(yd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yd=/\{\$([^}]+)}/g;function vd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ea(s)&&ea(o)){if(!Tr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ea(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wd(n,e){const t=new Ed(n,e);return t.subscribe.bind(t)}class Ed{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");_d(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=bi),i.error===void 0&&(i.error=bi),i.complete===void 0&&(i.complete=bi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _d(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bi(){}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=1e3,Sd=2,kd=4*60*60*1e3,Ad=.5;function Cd(n,e=Td,t=Sd){const r=e*Math.pow(t,n),i=Math.round(Ad*r*(Math.random()-.5)*2);return Math.min(kd,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n){return n&&n._delegate?n._delegate:n}class De{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nd(e))try{this.getOrInitializeService({instanceIdentifier:st})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=st){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=st){return this.instances.has(e)}getOptions(e=st){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=st){return this.component?this.component.multipleInstances?e:st:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rd(n){return n===st?void 0:n}function Nd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const Pd={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Od=N.INFO,Ld={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Md=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ld[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zr{constructor(e){this.name=e,this._logLevel=Od,this._logHandler=Md,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const xd=(n,e)=>e.some(t=>n instanceof t);let ta,na;function Fd(){return ta||(ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ud(){return na||(na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mc=new WeakMap,Qi=new WeakMap,xc=new WeakMap,Ri=new WeakMap,Os=new WeakMap;function Vd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(He(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Mc.set(t,n)}).catch(()=>{}),Os.set(e,n),e}function $d(n){if(Qi.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Qi.set(n,e)}let Yi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Bd(n){Yi=n(Yi)}function qd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ni(this),e,...t);return xc.set(r,e.sort?e.sort():[e]),He(r)}:Ud().includes(n)?function(...e){return n.apply(Ni(this),e),He(Mc.get(this))}:function(...e){return He(n.apply(Ni(this),e))}}function jd(n){return typeof n=="function"?qd(n):(n instanceof IDBTransaction&&$d(n),xd(n,Fd())?new Proxy(n,Yi):n)}function He(n){if(n instanceof IDBRequest)return Vd(n);if(Ri.has(n))return Ri.get(n);const e=jd(n);return e!==n&&(Ri.set(n,e),Os.set(e,n)),e}const Ni=n=>Os.get(n);function zd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=He(o);return r&&o.addEventListener("upgradeneeded",c=>{r(He(o.result),c.oldVersion,c.newVersion,He(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Hd=["get","getKey","getAll","getAllKeys","count"],Kd=["put","add","delete","clear"],Di=new Map;function ra(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Di.get(e))return Di.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Kd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hd.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Di.set(e,s),s}Bd(n=>({...n,get:(e,t,r)=>ra(e,t)||n.get(e,t,r),has:(e,t)=>!!ra(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Wd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Wd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xi="@firebase/app",ia="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new zr("@firebase/app"),Qd="@firebase/app-compat",Yd="@firebase/analytics-compat",Xd="@firebase/analytics",Jd="@firebase/app-check-compat",Zd="@firebase/app-check",ef="@firebase/auth",tf="@firebase/auth-compat",nf="@firebase/database",rf="@firebase/database-compat",sf="@firebase/functions",of="@firebase/functions-compat",af="@firebase/installations",cf="@firebase/installations-compat",uf="@firebase/messaging",lf="@firebase/messaging-compat",hf="@firebase/performance",df="@firebase/performance-compat",ff="@firebase/remote-config",pf="@firebase/remote-config-compat",gf="@firebase/storage",mf="@firebase/storage-compat",yf="@firebase/firestore",vf="@firebase/firestore-compat",wf="firebase",Ef="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="[DEFAULT]",_f={[Xi]:"fire-core",[Qd]:"fire-core-compat",[Xd]:"fire-analytics",[Yd]:"fire-analytics-compat",[Zd]:"fire-app-check",[Jd]:"fire-app-check-compat",[ef]:"fire-auth",[tf]:"fire-auth-compat",[nf]:"fire-rtdb",[rf]:"fire-rtdb-compat",[sf]:"fire-fn",[of]:"fire-fn-compat",[af]:"fire-iid",[cf]:"fire-iid-compat",[uf]:"fire-fcm",[lf]:"fire-fcm-compat",[hf]:"fire-perf",[df]:"fire-perf-compat",[ff]:"fire-rc",[pf]:"fire-rc-compat",[gf]:"fire-gcs",[mf]:"fire-gcs-compat",[yf]:"fire-fst",[vf]:"fire-fst-compat","fire-js":"fire-js",[wf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Map,Zi=new Map;function If(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function We(n){const e=n.name;if(Zi.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,n);for(const t of Sr.values())If(t,n);return!0}function On(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ke=new jt("app","Firebase",Tf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=Ef;function Fc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ji,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ke.create("bad-app-name",{appName:String(i)});if(t||(t=Oc()),!t)throw Ke.create("no-options");const s=Sr.get(i);if(s){if(Tr(t,s.options)&&Tr(r,s.config))return s;throw Ke.create("duplicate-app",{appName:i})}const o=new Dd(i);for(const c of Zi.values())o.addComponent(c);const a=new Sf(t,r,o);return Sr.set(i,a),a}function Ls(n=Ji){const e=Sr.get(n);if(!e&&n===Ji&&Oc())return Fc();if(!e)throw Ke.create("no-app",{appName:n});return e}function Re(n,e,t){var r;let i=(r=_f[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}We(new De(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="firebase-heartbeat-database",Af=1,dn="firebase-heartbeat-store";let Pi=null;function Uc(){return Pi||(Pi=zd(kf,Af,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(dn)}}}).catch(n=>{throw Ke.create("idb-open",{originalErrorMessage:n.message})})),Pi}async function Cf(n){try{return await(await Uc()).transaction(dn).objectStore(dn).get(Vc(n))}catch(e){if(e instanceof Ue)dt.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function sa(n,e){try{const r=(await Uc()).transaction(dn,"readwrite");await r.objectStore(dn).put(e,Vc(n)),await r.done}catch(t){if(t instanceof Ue)dt.warn(t.message);else{const r=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(r.message)}}}function Vc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=1024,Rf=30*24*60*60*1e3;class Nf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Rf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oa(),{heartbeatsToSend:t,unsentEntries:r}=Df(this._heartbeatsCache.heartbeats),i=Ir(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oa(){return new Date().toISOString().substring(0,10)}function Df(n,e=bf){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),aa(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),aa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Pf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ps()?pd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return sa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return sa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function aa(n){return Ir(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n){We(new De("platform-logger",e=>new Gd(e),"PRIVATE")),We(new De("heartbeat",e=>new Nf(e),"PRIVATE")),Re(Xi,ia,n),Re(Xi,ia,"esm2017"),Re("fire-js","")}Of("");var Lf="firebase",Mf="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(Lf,Mf,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Map,$c={activated:!1,tokenObservers:[]},xf={initialized:!1,enabled:!1};function j(n){return es.get(n)||Object.assign({},$c)}function Ff(n,e){return es.set(n,e),es.get(n)}function Hr(){return xf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="https://content-firebaseappcheck.googleapis.com/v1",Uf="exchangeRecaptchaV3Token",Vf="exchangeDebugToken",ca={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},$f=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,r,i,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new hn,await qf(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new hn,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function qf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},le=new jt("appCheck","AppCheck",jf);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n=!1){var e;return n?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function Ms(n){if(!j(n).activated)throw le.create("use-before-activation",{appName:n.name})}function qc(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),i=Math.floor((e-t*3600*24-r*3600)/60),s=e-t*3600*24-r*3600-i*60;let o="";return t&&(o+=tr(t)+"d:"),r&&(o+=tr(r)+"h:"),o+=tr(i)+"m:"+tr(s)+"s",o}function tr(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs({url:n,body:e},t){const r={"Content-Type":"application/json"},i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&(r["X-Firebase-Client"]=h)}const s={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(n,s)}catch(h){throw le.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(o.status!==200)throw le.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(h){throw le.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw le.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const u=Number(c[1])*1e3,l=Date.now();return{token:a.token,expireTimeMillis:l+u,issuedAtTimeMillis:l}}function zf(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${Bc}/projects/${t}/apps/${r}:${Uf}?key=${i}`,body:{recaptcha_v3_token:e}}}function jc(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${Bc}/projects/${t}/apps/${r}:${Vf}?key=${i}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="firebase-app-check-database",Kf=1,fn="firebase-app-check-store",zc="debug-token";let nr=null;function Hc(){return nr||(nr=new Promise((n,e)=>{try{const t=indexedDB.open(Hf,Kf);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(le.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(fn,{keyPath:"compositeKey"})}}}catch(t){e(le.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),nr)}function Gf(n){return Gc(Wc(n))}function Wf(n,e){return Kc(Wc(n),e)}function Qf(n){return Kc(zc,n)}function Yf(){return Gc(zc)}async function Kc(n,e){const r=(await Hc()).transaction(fn,"readwrite"),s=r.objectStore(fn).put({compositeKey:n,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},r.onerror=c=>{var u;a(le.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}async function Gc(n){const t=(await Hc()).transaction(fn,"readonly"),i=t.objectStore(fn).get(n);return new Promise((s,o)=>{i.onsuccess=a=>{const c=a.target.result;s(c?c.value:void 0)},t.onerror=a=>{var c;o(le.create("storage-get",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function Wc(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new zr("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xf(n){if(Ps()){let e;try{e=await Gf(n)}catch(t){pn.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function Oi(n,e){return Ps()?Wf(n,e).catch(t=>{pn.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function Jf(){let n;try{n=await Yf()}catch{}if(n)return n;{const e=Id();return Qf(e).catch(t=>pn.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(){return Hr().enabled}async function Us(){const n=Hr();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Zf(){const n=Dc(),e=Hr();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new hn;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(Jf())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep={error:"UNKNOWN_ERROR"};function tp(n){return Ns.encodeString(JSON.stringify(n),!1)}async function ts(n,e=!1){const t=n.app;Ms(t);const r=j(t);let i=r.token,s;if(i&&!St(i)&&(r.token=void 0,i=void 0),!i){const c=await r.cachedTokenPromise;c&&(St(c)?i=c:await Oi(t,void 0))}if(!e&&i&&St(i))return{token:i.token};let o=!1;if(Fs()){r.exchangeTokenPromise||(r.exchangeTokenPromise=xs(jc(t,await Us()),n.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),o=!0);const c=await r.exchangeTokenPromise;return await Oi(t,c),r.token=c,{token:c.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await j(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?pn.warn(c.message):pn.error(c),s=c}let a;return i?s?St(i)?a={token:i.token,internalError:s}:a=ha(s):(a={token:i.token},r.token=i,await Oi(t,i)):a=ha(s),o&&Xc(t,a),a}async function np(n){const e=n.app;Ms(e);const{provider:t}=j(e);if(Fs()){const r=await Us(),{token:i}=await xs(jc(e,r),n.heartbeatServiceProvider);return{token:i}}else{const{token:r}=await t.getToken();return{token:r}}}function Qc(n,e,t,r){const{app:i}=n,s=j(i),o={next:t,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&St(s.token)){const a=s.token;Promise.resolve().then(()=>{t({token:a.token}),la(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>la(n))}function Yc(n,e){const t=j(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function la(n){const{app:e}=n,t=j(e);let r=t.tokenRefresher;r||(r=rp(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function rp(n){const{app:e}=n;return new Bf(async()=>{const t=j(e);let r;if(t.token?r=await ts(n,!0):r=await ts(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=j(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},ca.RETRIAL_MIN_WAIT,ca.RETRIAL_MAX_WAIT)}function Xc(n,e){const t=j(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function St(n){return n.expireTimeMillis-Date.now()>0}function ha(n){return{token:tp(ep),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=j(this.app);for(const t of e)Yc(this.app,t.next);return Promise.resolve()}}function sp(n,e){return new ip(n,e)}function op(n){return{getToken:e=>ts(n,e),getLimitedUseToken:()=>np(n),addTokenListener:e=>Qc(n,"INTERNAL",e),removeTokenListener:e=>Yc(n.app,e)}}const ap="@firebase/app-check",cp="0.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="https://www.google.com/recaptcha/api.js";function lp(n,e){const t=new hn,r=j(n);r.reCAPTCHAState={initialized:t};const i=hp(n),s=ua(!1);return s?da(n,e,s,i,t):pp(()=>{const o=ua(!1);if(!o)throw new Error("no recaptcha");da(n,e,o,i,t)}),t.promise}function da(n,e,t,r,i){t.ready(()=>{fp(n,e,t,r),i.resolve(t)})}function hp(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function dp(n){Ms(n);const t=await j(n).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const s=j(n).reCAPTCHAState;t.ready(()=>{r(t.execute(s.widgetId,{action:"fire_app_check"}))})})}function fp(n,e,t,r){const i=t.render(r,{sitekey:e,size:"invisible",callback:()=>{j(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{j(n).reCAPTCHAState.succeeded=!1}}),s=j(n);s.reCAPTCHAState=Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:i})}function pp(n){const e=document.createElement("script");e.src=up,e.onload=n,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,r;mp(this._throttleData);const i=await dp(this._app).catch(o=>{throw le.create("recaptcha-error")});if(!(!((e=j(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw le.create("recaptcha-error");let s;try{s=await xs(zf(this._app,i),this._heartbeatServiceProvider)}catch(o){throw!((t=o.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=gp(Number((r=o.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),le.create("throttled",{time:qc(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=On(e,"heartbeat"),lp(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Vs?this._siteKey===e._siteKey:!1}}function gp(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+$f,httpStatus:n};{const t=e?e.backoffCount:0,r=Cd(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function mp(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw le.create("throttled",{time:qc(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n=Ls(),e){n=J(n);const t=On(n,"app-check");if(Hr().initialized||Zf(),Fs()&&Us().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(s.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&s.provider.isEqual(e.provider))return i;throw le.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return vp(n,e.provider,e.isTokenAutoRefreshEnabled),j(n).isTokenAutoRefreshEnabled&&Qc(r,"INTERNAL",()=>{}),r}function vp(n,e,t){const r=Ff(n,Object.assign({},$c));r.activated=!0,r.provider=e,r.cachedTokenPromise=Xf(n).then(i=>(i&&St(i)&&(r.token=i,Xc(n,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=t===void 0?n.automaticDataCollectionEnabled:t,r.provider.initialize(n)}const wp="app-check",fa="app-check-internal";function Ep(){We(new De(wp,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return sp(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(fa).initialize()})),We(new De(fa,n=>{const e=n.getProvider("app-check").getImmediate();return op(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Re(ap,cp)}Ep();function $s(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Jc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _p=Jc,Zc=new jt("auth","Firebase",Jc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new zr("@firebase/auth");function Ip(n,...e){kr.logLevel<=N.WARN&&kr.warn(`Auth (${zt}): ${n}`,...e)}function fr(n,...e){kr.logLevel<=N.ERROR&&kr.error(`Auth (${zt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n,...e){throw Bs(n,...e)}function Ie(n,...e){return Bs(n,...e)}function Tp(n,e,t){const r=Object.assign(Object.assign({},_p()),{[e]:t});return new jt("auth","Firebase",r).create(e,{appName:n.name})}function Bs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zc.create(n,...e)}function A(n,e,...t){if(!n)throw Bs(e,...t)}function Ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fr(e),new Error(e)}function Oe(n,e){n||Ae(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Sp(){return pa()==="http:"||pa()==="https:"}function pa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sp()||hd()||"connection"in navigator)?navigator.onLine:!0}function Ap(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oe(t>e,"Short delay should be less than long delay!"),this.isMobile=ld()||dd()}get(){return kp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n,e){Oe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=new Ln(3e4,6e4);function js(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Mn(n,e,t,r,i={}){return tu(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),eu.fetch()(ru(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function tu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Cp),e);try{const i=new Rp(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw rr(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Tp(n,l,u);Pe(n,l)}}catch(i){if(i instanceof Ue)throw i;Pe(n,"network-request-failed",{message:String(i)})}}async function nu(n,e,t,r,i={}){const s=await Mn(n,e,t,r,i);return"mfaPendingCredential"in s&&Pe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ru(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?qs(n.config,i):`${n.config.apiScheme}://${i}`}class Rp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ie(this.auth,"network-request-failed")),bp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ie(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(n,e){return Mn(n,"POST","/v1/accounts:delete",e)}async function Dp(n,e){return Mn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pp(n,e=!1){const t=J(n),r=await t.getIdToken(e),i=zs(r);A(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:on(Li(i.auth_time)),issuedAtTime:on(Li(i.iat)),expirationTime:on(Li(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Li(n){return Number(n)*1e3}function zs(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return fr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nc(t);return i?JSON.parse(i):(fr("Failed to decode base64 JWT payload"),null)}catch(i){return fr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Op(n){const e=zs(n);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ue&&Lp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Lp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=on(this.lastLoginAt),this.creationTime=on(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(n){var e;const t=n.auth,r=await n.getIdToken(),i=await gn(n,Dp(t,{idToken:r}));A(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Up(s.providerUserInfo):[],a=Fp(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new iu(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function xp(n){const e=J(n);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Up(n){return n.map(e=>{var{providerId:t}=e,r=$s(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,e){const t=await tu(n,{},async()=>{const r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=ru(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Op(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Vp(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new mn;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return Ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n,e){A(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ut{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=$s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new iu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await gn(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pp(this,e)}reload(){return xp(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ar(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gn(this,Np(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,I=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,U=(u=t.createdAt)!==null&&u!==void 0?u:void 0,V=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:H,emailVerified:he,isAnonymous:rt,providerData:it,stsTokenManager:Xt}=t;A(H&&Xt,e,"internal-error");const Ci=mn.fromJSON(this.name,Xt);A(typeof H=="string",e,"internal-error"),Ve(h,e.name),Ve(d,e.name),A(typeof he=="boolean",e,"internal-error"),A(typeof rt=="boolean",e,"internal-error"),Ve(p,e.name),Ve(w,e.name),Ve(_,e.name),Ve(I,e.name),Ve(U,e.name),Ve(V,e.name);const Et=new ut({uid:H,auth:e,email:d,emailVerified:he,displayName:h,isAnonymous:rt,photoURL:w,phoneNumber:p,tenantId:_,stsTokenManager:Ci,createdAt:U,lastLoginAt:V});return it&&Array.isArray(it)&&(Et.providerData=it.map(td=>Object.assign({},td))),I&&(Et._redirectEventId=I),Et}static async _fromIdTokenResponse(e,t,r=!1){const i=new mn;i.updateFromServerResponse(t);const s=new ut({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ar(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Map;function Ce(n){Oe(n instanceof Function,"Expected a class definition");let e=ga.get(n);return e?(Oe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ga.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}su.type="NONE";const ma=su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n,e,t){return`firebase:${n}:${e}:${t}`}class Ct{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pr(this.userKey,i.apiKey,s),this.fullPersistenceKey=pr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ct(Ce(ma),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ce(ma);const o=pr(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=ut._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ct(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ct(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ou(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lu(e))return"Blackberry";if(hu(e))return"Webos";if(Hs(e))return"Safari";if((e.includes("chrome/")||au(e))&&!e.includes("edge/"))return"Chrome";if(uu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ou(n=oe()){return/firefox\//i.test(n)}function Hs(n=oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function au(n=oe()){return/crios\//i.test(n)}function cu(n=oe()){return/iemobile/i.test(n)}function uu(n=oe()){return/android/i.test(n)}function lu(n=oe()){return/blackberry/i.test(n)}function hu(n=oe()){return/webos/i.test(n)}function Kr(n=oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $p(n=oe()){var e;return Kr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bp(){return fd()&&document.documentMode===10}function du(n=oe()){return Kr(n)||uu(n)||hu(n)||lu(n)||/windows phone/i.test(n)||cu(n)}function qp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n,e=[]){let t;switch(n){case"Browser":t=ya(oe());break;case"Worker":t=`${ya(oe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zt}/${r}`}async function pu(n,e){return Mn(n,"GET","/v2/recaptchaConfig",js(n,e))}function va(n){return n!==void 0&&n.enterprise!==void 0}class gu{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function mu(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ie("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",jp().appendChild(r)})}function zp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Hp="https://www.google.com/recaptcha/enterprise.js?render=",Kp="recaptcha-enterprise",Gp="NO_RECAPTCHA";class Wp{constructor(e){this.type=Kp,this.auth=xn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new gu(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;va(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Gp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&va(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}mu(Hp+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wa(this),this.idTokenSubscription=new wa(this),this.beforeStateQueue=new Qp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ce(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ct.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ar(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ap()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?J(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ce(e))})}async initializeRecaptchaConfig(){const e=await pu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new gu(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Wp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ce(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await Ct.create(this,[Ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ip(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xn(n){return J(n)}class wa{constructor(e){this.auth=e,this.observer=null,this.addObserver=wd(t=>this.observer=t)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n,e){const t=On(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Tr(s,e??{}))return i;Pe(i,"already-initialized")}return t.initialize({options:e})}function Jp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ce);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Zp(n,e,t){const r=xn(n);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=yu(e),{host:o,port:a}=eg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tg()}function yu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function eg(n){const e=yu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ea(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ea(o)}}}function Ea(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ae("not implemented")}_getIdTokenResponse(e){return Ae("not implemented")}_linkToIdToken(e,t){return Ae("not implemented")}_getReauthenticationResolver(e){return Ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(n,e){return nu(n,"POST","/v1/accounts:signInWithIdp",js(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="http://localhost";class ft extends vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=$s(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ft(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return bt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,bt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bt(e,t)}buildRequest(){const e={requestUri:ng,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends wu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Fn{constructor(){super("facebook.com")}static credential(e){return ft._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com";$e.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ft._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Be.credential(t,r)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Fn{constructor(){super("github.com")}static credential(e){return ft._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.GITHUB_SIGN_IN_METHOD="github.com";qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Fn{constructor(){super("twitter.com")}static credential(e,t){return ft._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return je.credential(t,r)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(n,e){return nu(n,"POST","/v1/accounts:signUp",js(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ut._fromIdTokenResponse(e,r,i),o=_a(r);return new Qe({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=_a(r);return new Qe({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function _a(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(n){var e;const t=xn(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Qe({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await rg(t,{returnSecureToken:!0}),i=await Qe._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Ue{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Cr(e,t,r,i)}}function Eu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cr._fromErrorAndOperation(n,s,e,r):s})}async function sg(n,e,t=!1){const r=await gn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qe._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function og(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await gn(n,Eu(r,i,e,n),t);A(s.idToken,r,"internal-error");const o=zs(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(n.uid===a,r,"user-mismatch"),Qe._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(n,e,t=!1){const r="signIn",i=await Eu(n,r,e),s=await Qe._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function cg(n,e,t,r){return J(n).onIdTokenChanged(e,t,r)}function ug(n,e,t){return J(n).beforeAuthStateChanged(e,t)}const br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(){const n=oe();return Hs(n)||Kr(n)}const hg=1e3,dg=10;class Iu extends _u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lg()&&qp(),this.fallbackToPolling=du(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Bp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iu.type="LOCAL";const fg=Iu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends _u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tu.type="SESSION";const Su=Tu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Gr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await pg(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ks("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function mg(n){Te().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){return typeof Te().WorkerGlobalScope<"u"&&typeof Te().importScripts=="function"}async function yg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wg(){return ku()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="firebaseLocalStorageDb",Eg=1,Rr="firebaseLocalStorage",Cu="fbase_key";class Un{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wr(n,e){return n.transaction([Rr],e?"readwrite":"readonly").objectStore(Rr)}function _g(){const n=indexedDB.deleteDatabase(Au);return new Un(n).toPromise()}function rs(){const n=indexedDB.open(Au,Eg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Rr,{keyPath:Cu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Rr)?e(r):(r.close(),await _g(),e(await rs()))})})}async function Ia(n,e,t){const r=Wr(n,!0).put({[Cu]:e,value:t});return new Un(r).toPromise()}async function Ig(n,e){const t=Wr(n,!1).get(e),r=await new Un(t).toPromise();return r===void 0?null:r.value}function Ta(n,e){const t=Wr(n,!0).delete(e);return new Un(t).toPromise()}const Tg=800,Sg=3;class bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Sg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ku()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gr._getInstance(wg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yg(),!this.activeServiceWorker)return;this.sender=new gg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rs();return await Ia(e,br,"1"),await Ta(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ia(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ig(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ta(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wr(i,!1).getAll();return new Un(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bu.type="LOCAL";const kg=bu;new Ln(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n,e){return e?Ce(e):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cg(n){return ag(n.auth,new Gs(n),n.bypassAuthState)}function bg(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),og(t,new Gs(n),n.bypassAuthState)}async function Rg(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),sg(t,new Gs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cg;case"linkViaPopup":case"linkViaRedirect":return Rg;case"reauthViaPopup":case"reauthViaRedirect":return bg;default:Pe(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=new Ln(2e3,1e4);class kt extends Ru{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const e=Ks();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ng.get())};e()}}kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="pendingRedirect",gr=new Map;class Pg extends Ru{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=gr.get(this.auth._key());if(!e){try{const r=await Og(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}gr.set(this.auth._key(),e)}return this.bypassAuthState||gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Og(n,e){const t=xg(e),r=Mg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Lg(n,e){gr.set(n._key(),e)}function Mg(n){return Ce(n._redirectPersistence)}function xg(n){return pr(Dg,n.config.apiKey,n.name)}async function Fg(n,e,t=!1){const r=xn(n),i=Ag(r,e),o=await new Pg(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=10*60*1e3;class Vg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$g(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Nu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ie(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ug&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sa(e))}saveEventToCache(e){this.cachedEventUids.add(Sa(e)),this.lastProcessedEventTime=Date.now()}}function Sa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $g(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(n,e={}){return Mn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jg=/^https?/;async function zg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bg(n);for(const t of e)try{if(Hg(t))return}catch{}Pe(n,"unauthorized-domain")}function Hg(n){const e=ns(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!jg.test(t))return!1;if(qg.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Ln(3e4,6e4);function ka(){const n=Te().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Gg(n){return new Promise((e,t)=>{var r,i,s;function o(){ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ka(),t(Ie(n,"network-request-failed"))},timeout:Kg.get()})}if(!((i=(r=Te().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Te().gapi)===null||s===void 0)&&s.load)o();else{const a=zp("iframefcb");return Te()[a]=()=>{gapi.load?o():t(Ie(n,"network-request-failed"))},mu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw mr=null,e})}let mr=null;function Wg(n){return mr=mr||Gg(n),mr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Ln(5e3,15e3),Yg="__/auth/iframe",Xg="emulator/auth/iframe",Jg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function em(n){const e=n.config;A(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qs(e,Xg):`https://${n.config.authDomain}/${Yg}`,r={apiKey:e.apiKey,appName:n.name,v:zt},i=Zg.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Pn(r).slice(1)}`}async function tm(n){const e=await Wg(n),t=Te().gapi;return A(t,n,"internal-error"),e.open({where:document.body,url:em(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ie(n,"network-request-failed"),a=Te().setTimeout(()=>{s(o)},Qg.get());function c(){Te().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rm=500,im=600,sm="_blank",om="http://localhost";class Aa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function am(n,e,t,r=rm,i=im){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nm),{width:r.toString(),height:i.toString(),top:s,left:o}),u=oe().toLowerCase();t&&(a=au(u)?sm:t),ou(u)&&(e=e||om,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,w])=>`${d}${p}=${w},`,"");if($p(u)&&a!=="_self")return cm(e||"",a),new Aa(null);const h=window.open(e||"",a,l);A(h,n,"popup-blocked");try{h.focus()}catch{}return new Aa(h)}function cm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="__/auth/handler",lm="emulator/auth/handler",hm=encodeURIComponent("fac");async function Ca(n,e,t,r,i,s){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:zt,eventId:i};if(e instanceof wu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Fn){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${hm}=${encodeURIComponent(c)}`:"";return`${dm(n)}?${Pn(a).slice(1)}${u}`}function dm({config:n}){return n.emulator?qs(n,lm):`https://${n.authDomain}/${um}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="webStorageSupport";class fm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Su,this._completeRedirectFn=Fg,this._overrideRedirectResult=Lg}async _openPopup(e,t,r,i){var s;Oe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ca(e,t,r,ns(),i);return am(e,o,Ks())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ca(e,t,r,ns(),i);return mg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Oe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await tm(e),r=new Vg(e);return t.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mi,{type:Mi},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mi];o!==void 0&&t(!!o),Pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return du()||Hs()||Kr()}}const pm=fm;var ba="@firebase/auth",Ra="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ym(n){We(new De("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fu(n)},u=new Yp(r,i,s,c);return Jp(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),We(new De("auth-internal",e=>{const t=xn(e.getProvider("auth").getImmediate());return(r=>new gm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(ba,Ra,mm(n)),Re(ba,Ra,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=5*60,wm=Lc("authIdTokenMaxAge")||vm;let Na=null;const Em=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>wm)return;const i=t==null?void 0:t.token;Na!==i&&(Na=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _m(n=Ls()){const e=On(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Xp(n,{popupRedirectResolver:pm,persistence:[kg,fg,Su]}),r=Lc("authTokenSyncURL");if(r){const s=Em(r);ug(t,s,()=>s(t.currentUser)),cg(t,o=>s(o))}const i=Pc("auth");return i&&Zp(t,`http://${i}`),t}ym("Browser");var Im=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Ws=Ws||{},S=Im||self;function Qr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Vn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Tm(n){return Object.prototype.hasOwnProperty.call(n,xi)&&n[xi]||(n[xi]=++Sm)}var xi="closure_uid_"+(1e9*Math.random()>>>0),Sm=0;function km(n,e,t){return n.call.apply(n.bind,arguments)}function Am(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function re(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?re=km:re=Am,re.apply(null,arguments)}function ir(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function W(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ze(){this.s=this.s,this.o=this.o}var Cm=0;Ze.prototype.s=!1;Ze.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Cm!=0)&&Tm(this)};Ze.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Du=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Qs(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Da(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Qr(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function ie(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var bm=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{S.addEventListener("test",()=>{},e),S.removeEventListener("test",()=>{},e)}catch{}return n}();function yn(n){return/^[\s\xa0]*$/.test(n)}function Yr(){var n=S.navigator;return n&&(n=n.userAgent)?n:""}function we(n){return Yr().indexOf(n)!=-1}function Ys(n){return Ys[" "](n),n}Ys[" "]=function(){};function Rm(n,e){var t=_y;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Nm=we("Opera"),Lt=we("Trident")||we("MSIE"),Pu=we("Edge"),is=Pu||Lt,Ou=we("Gecko")&&!(Yr().toLowerCase().indexOf("webkit")!=-1&&!we("Edge"))&&!(we("Trident")||we("MSIE"))&&!we("Edge"),Dm=Yr().toLowerCase().indexOf("webkit")!=-1&&!we("Edge");function Lu(){var n=S.document;return n?n.documentMode:void 0}var ss;e:{var Fi="",Ui=function(){var n=Yr();if(Ou)return/rv:([^\);]+)(\)|;)/.exec(n);if(Pu)return/Edge\/([\d\.]+)/.exec(n);if(Lt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Dm)return/WebKit\/(\S+)/.exec(n);if(Nm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ui&&(Fi=Ui?Ui[1]:""),Lt){var Vi=Lu();if(Vi!=null&&Vi>parseFloat(Fi)){ss=String(Vi);break e}}ss=Fi}var os;if(S.document&&Lt){var Pa=Lu();os=Pa||parseInt(ss,10)||void 0}else os=void 0;var Pm=os;function vn(n,e){if(ie.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ou){e:{try{Ys(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Om[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&vn.$.h.call(this)}}W(vn,ie);var Om={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var $n="closure_listenable_"+(1e6*Math.random()|0),Lm=0;function Mm(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++Lm,this.fa=this.ia=!1}function Xr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Xs(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function xm(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Mu(n){const e={};for(const t in n)e[t]=n[t];return e}const Oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xu(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Oa.length;s++)t=Oa[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Jr(n){this.src=n,this.g={},this.h=0}Jr.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=cs(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Mm(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function as(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Du(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function cs(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Js="closure_lm_"+(1e6*Math.random()|0),$i={};function Fu(n,e,t,r,i){if(r&&r.once)return Vu(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Fu(n,e[s],t,r,i);return null}return t=to(t),n&&n[$n]?n.O(e,t,Vn(r)?!!r.capture:!!r,i):Uu(n,e,t,!1,r,i)}function Uu(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Vn(i)?!!i.capture:!!i,a=eo(n);if(a||(n[Js]=a=new Jr(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=Fm(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)bm||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Bu(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Fm(){function n(t){return e.call(n.src,n.listener,t)}const e=Um;return n}function Vu(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Vu(n,e[s],t,r,i);return null}return t=to(t),n&&n[$n]?n.P(e,t,Vn(r)?!!r.capture:!!r,i):Uu(n,e,t,!0,r,i)}function $u(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)$u(n,e[s],t,r,i);else r=Vn(r)?!!r.capture:!!r,t=to(t),n&&n[$n]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=cs(s,t,r,i),-1<t&&(Xr(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=eo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=cs(e,t,r,i)),(t=-1<n?e[n]:null)&&Zs(t))}function Zs(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[$n])as(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Bu(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=eo(e))?(as(t,n),t.h==0&&(t.src=null,e[Js]=null)):Xr(n)}}}function Bu(n){return n in $i?$i[n]:$i[n]="on"+n}function Um(n,e){if(n.fa)n=!0;else{e=new vn(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Zs(n),n=t.call(r,e)}return n}function eo(n){return n=n[Js],n instanceof Jr?n:null}var Bi="__closure_events_fn_"+(1e9*Math.random()>>>0);function to(n){return typeof n=="function"?n:(n[Bi]||(n[Bi]=function(e){return n.handleEvent(e)}),n[Bi])}function G(){Ze.call(this),this.i=new Jr(this),this.S=this,this.J=null}W(G,Ze);G.prototype[$n]=!0;G.prototype.removeEventListener=function(n,e,t,r){$u(this,n,e,t,r)};function X(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new ie(e,n);else if(e instanceof ie)e.target=e.target||n;else{var i=e;e=new ie(r,n),xu(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=sr(o,r,!0,e)&&i}if(o=e.g=n,i=sr(o,r,!0,e)&&i,i=sr(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=sr(o,r,!1,e)&&i}G.prototype.N=function(){if(G.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Xr(t[r]);delete n.g[e],n.h--}}this.J=null};G.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};G.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function sr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&as(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var no=S.JSON.stringify;class Vm{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function $m(){var n=ro;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Bm{constructor(){this.h=this.g=null}add(e,t){const r=qu.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var qu=new Vm(()=>new qm,n=>n.reset());class qm{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function jm(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function zm(n){S.setTimeout(()=>{throw n},0)}let wn,En=!1,ro=new Bm,ju=()=>{const n=S.Promise.resolve(void 0);wn=()=>{n.then(Hm)}};var Hm=()=>{for(var n;n=$m();){try{n.h.call(n.g)}catch(t){zm(t)}var e=qu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}En=!1};function Zr(n,e){G.call(this),this.h=n||1,this.g=e||S,this.j=re(this.qb,this),this.l=Date.now()}W(Zr,G);m=Zr.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),X(this,"tick"),this.ga&&(io(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function io(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}m.N=function(){Zr.$.N.call(this),io(this),delete this.g};function so(n,e,t){if(typeof n=="function")t&&(n=re(n,t));else if(n&&typeof n.handleEvent=="function")n=re(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(n,e||0)}function zu(n){n.g=so(()=>{n.g=null,n.i&&(n.i=!1,zu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Km extends Ze{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zu(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(n){Ze.call(this),this.h=n,this.g={}}W(_n,Ze);var La=[];function Hu(n,e,t,r){Array.isArray(t)||(t&&(La[0]=t.toString()),t=La);for(var i=0;i<t.length;i++){var s=Fu(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Ku(n){Xs(n.g,function(e,t){this.g.hasOwnProperty(t)&&Zs(e)},n),n.g={}}_n.prototype.N=function(){_n.$.N.call(this),Ku(this)};_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ei(){this.g=!0}ei.prototype.Ea=function(){this.g=!1};function Gm(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Wm(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function At(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ym(n,t)+(r?" "+r:"")})}function Qm(n,e){n.info(function(){return"TIMEOUT: "+e})}ei.prototype.info=function(){};function Ym(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return no(t)}catch{return e}}var yt={},Ma=null;function ti(){return Ma=Ma||new G}yt.Ta="serverreachability";function Gu(n){ie.call(this,yt.Ta,n)}W(Gu,ie);function In(n){const e=ti();X(e,new Gu(e))}yt.STAT_EVENT="statevent";function Wu(n,e){ie.call(this,yt.STAT_EVENT,n),this.stat=e}W(Wu,ie);function ce(n){const e=ti();X(e,new Wu(e,n))}yt.Ua="timingevent";function Qu(n,e){ie.call(this,yt.Ua,n),this.size=e}W(Qu,ie);function Bn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){n()},e)}var ni={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Yu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function oo(){}oo.prototype.h=null;function xa(n){return n.h||(n.h=n.i())}function Xu(){}var qn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ao(){ie.call(this,"d")}W(ao,ie);function co(){ie.call(this,"c")}W(co,ie);var us;function ri(){}W(ri,oo);ri.prototype.g=function(){return new XMLHttpRequest};ri.prototype.i=function(){return{}};us=new ri;function jn(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new _n(this),this.P=Xm,n=is?125:void 0,this.V=new Zr(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ju}function Ju(){this.i=null,this.g="",this.h=!1}var Xm=45e3,ls={},Nr={};m=jn.prototype;m.setTimeout=function(n){this.P=n};function hs(n,e,t){n.L=1,n.v=si(Le(e)),n.s=t,n.S=!0,Zu(n,null)}function Zu(n,e){n.G=Date.now(),zn(n),n.A=Le(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),al(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Ju,n.g=bl(n.l,t?e:null,!n.s),0<n.O&&(n.M=new Km(re(n.Pa,n,n.g),n.O)),Hu(n.U,n.g,"readystatechange",n.nb),e=n.I?Mu(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),In(),Gm(n.j,n.u,n.A,n.m,n.W,n.s)}m.nb=function(n){n=n.target;const e=this.M;e&&Ee(n)==3?e.l():this.Pa(n)};m.Pa=function(n){try{if(n==this.g)e:{const l=Ee(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||is||this.g&&(this.h.h||this.g.ja()||$a(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?In(3):In(2)),ii(this);var t=this.g.da();this.ca=t;t:if(el(this)){var r=$a(this.g);n="";var i=r.length,s=Ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ot(this),an(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,Wm(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yn(a)){var u=a;break t}}u=null}if(t=u)At(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ds(this,t);else{this.i=!1,this.o=3,ce(12),ot(this),an(this);break e}}this.S?(tl(this,l,o),is&&this.i&&l==3&&(Hu(this.U,this.V,"tick",this.mb),this.V.start())):(At(this.j,this.m,o,null),ds(this,o)),l==4&&ot(this),this.i&&!this.J&&(l==4?Sl(this.l,this):(this.i=!1,zn(this)))}else vy(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),ot(this),an(this)}}}catch{}finally{}};function el(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function tl(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=Jm(n,t),i==Nr){e==4&&(n.o=4,ce(14),r=!1),At(n.j,n.m,null,"[Incomplete Response]");break}else if(i==ls){n.o=4,ce(15),At(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else At(n.j,n.m,i,null),ds(n,i);el(n)&&i!=Nr&&i!=ls&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ce(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),go(e),e.M=!0,ce(11))):(At(n.j,n.m,t,"[Invalid Chunked Response]"),ot(n),an(n))}m.mb=function(){if(this.g){var n=Ee(this.g),e=this.g.ja();this.C<e.length&&(ii(this),tl(this,n,e),this.i&&n!=4&&zn(this))}};function Jm(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Nr:(t=Number(e.substring(t,r)),isNaN(t)?ls:(r+=1,r+t>e.length?Nr:(e=e.slice(r,r+t),n.C=r+t,e)))}m.cancel=function(){this.J=!0,ot(this)};function zn(n){n.Y=Date.now()+n.P,nl(n,n.P)}function nl(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Bn(re(n.lb,n),e)}function ii(n){n.B&&(S.clearTimeout(n.B),n.B=null)}m.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Qm(this.j,this.A),this.L!=2&&(In(),ce(17)),ot(this),this.o=2,an(this)):nl(this,this.Y-n)};function an(n){n.l.H==0||n.J||Sl(n.l,n)}function ot(n){ii(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,io(n.V),Ku(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function ds(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||fs(t.i,n))){if(!n.K&&fs(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Or(t),ci(t);else break e;po(t),ce(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Bn(re(t.ib,t),6e3));if(1>=ll(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else at(t,11)}else if((n.K||t.g==n)&&Or(t),!yn(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(uo(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,O(r.I,r.F,_))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Cl(r,r.J?r.pa:null,r.Y),o.K){hl(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(ii(a),zn(a)),r.g=o}else Il(r);0<t.j.length&&ui(t)}else u[0]!="stop"&&u[0]!="close"||at(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?at(t,7):fo(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}In(4)}catch{}}function Zm(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Qr(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function ey(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Qr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function rl(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Qr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=ey(n),r=Zm(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ty(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function lt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof lt){this.h=n.h,Dr(this,n.j),this.s=n.s,this.g=n.g,Pr(this,n.m),this.l=n.l;var e=n.i,t=new Tn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Fa(this,t),this.o=n.o}else n&&(e=String(n).match(il))?(this.h=!1,Dr(this,e[1]||"",!0),this.s=en(e[2]||""),this.g=en(e[3]||"",!0),Pr(this,e[4]),this.l=en(e[5]||"",!0),Fa(this,e[6]||"",!0),this.o=en(e[7]||"")):(this.h=!1,this.i=new Tn(null,this.h))}lt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(tn(e,Ua,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(tn(e,Ua,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(tn(t,t.charAt(0)=="/"?iy:ry,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",tn(t,oy)),n.join("")};function Le(n){return new lt(n)}function Dr(n,e,t){n.j=t?en(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Pr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Fa(n,e,t){e instanceof Tn?(n.i=e,ay(n.i,n.h)):(t||(e=tn(e,sy)),n.i=new Tn(e,n.h))}function O(n,e,t){n.i.set(e,t)}function si(n){return O(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function en(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function tn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,ny),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ny(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ua=/[#\/\?@]/g,ry=/[#\?:]/g,iy=/[#\?]/g,sy=/[#\?@]/g,oy=/#/g;function Tn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function et(n){n.g||(n.g=new Map,n.h=0,n.i&&ty(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}m=Tn.prototype;m.add=function(n,e){et(this),this.i=null,n=Ht(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function sl(n,e){et(n),e=Ht(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function ol(n,e){return et(n),e=Ht(n,e),n.g.has(e)}m.forEach=function(n,e){et(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};m.ta=function(){et(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};m.Z=function(n){et(this);let e=[];if(typeof n=="string")ol(this,n)&&(e=e.concat(this.g.get(Ht(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};m.set=function(n,e){return et(this),this.i=null,n=Ht(this,n),ol(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};m.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function al(n,e,t){sl(n,e),0<t.length&&(n.i=null,n.g.set(Ht(n,e),Qs(t)),n.h+=t.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Ht(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ay(n,e){e&&!n.j&&(et(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(sl(this,r),al(this,i,t))},n)),n.j=e}var cy=class{constructor(n,e){this.g=n,this.map=e}};function cl(n){this.l=n||uy,S.PerformanceNavigationTiming?(n=S.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uy=10;function ul(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ll(n){return n.h?1:n.g?n.g.size:0}function fs(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function uo(n,e){n.g?n.g.add(e):n.h=e}function hl(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}cl.prototype.cancel=function(){if(this.i=dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function dl(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Qs(n.i)}var ly=class{stringify(n){return S.JSON.stringify(n,void 0)}parse(n){return S.JSON.parse(n,void 0)}};function hy(){this.g=new ly}function dy(n,e,t){const r=t||"";try{rl(n,function(i,s){let o=i;Vn(i)&&(o=no(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function fy(n,e){const t=new ei;if(S.Image){const r=new Image;r.onload=ir(or,t,r,"TestLoadImage: loaded",!0,e),r.onerror=ir(or,t,r,"TestLoadImage: error",!1,e),r.onabort=ir(or,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=ir(or,t,r,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function or(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Hn(n){this.l=n.fc||null,this.j=n.ob||!1}W(Hn,oo);Hn.prototype.g=function(){return new oi(this.l,this.j)};Hn.prototype.i=function(n){return function(){return n}}({});function oi(n,e){G.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=lo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}W(oi,G);var lo=0;m=oi.prototype;m.open=function(n,e){if(this.readyState!=lo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Sn(this)};m.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||S).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=lo};m.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fl(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function fl(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}m.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Kn(this):Sn(this),this.readyState==3&&fl(this)}};m.Za=function(n){this.g&&(this.response=this.responseText=n,Kn(this))};m.Ya=function(n){this.g&&(this.response=n,Kn(this))};m.ka=function(){this.g&&Kn(this)};function Kn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Sn(n)}m.setRequestHeader=function(n,e){this.v.append(n,e)};m.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Sn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var py=S.JSON.parse;function F(n){G.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pl,this.L=this.M=!1}W(F,G);var pl="",gy=/^https?$/i,my=["POST","PUT"];m=F.prototype;m.Oa=function(n){this.M=n};m.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():us.g(),this.C=this.u?xa(this.u):xa(us),this.g.onreadystatechange=re(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Va(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=S.FormData&&n instanceof S.FormData,!(0<=Du(my,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yl(this),0<this.B&&((this.L=yy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=re(this.ua,this)):this.A=so(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Va(this,s)}};function yy(n){return Lt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}m.ua=function(){typeof Ws<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function Va(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,gl(n),ai(n)}function gl(n){n.F||(n.F=!0,X(n,"complete"),X(n,"error"))}m.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,X(this,"complete"),X(this,"abort"),ai(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ai(this,!0)),F.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?ml(this):this.kb())};m.kb=function(){ml(this)};function ml(n){if(n.h&&typeof Ws<"u"&&(!n.C[1]||Ee(n)!=4||n.da()!=2)){if(n.v&&Ee(n)==4)so(n.La,0,n);else if(X(n,"readystatechange"),Ee(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(il)[1]||null;!i&&S.self&&S.self.location&&(i=S.self.location.protocol.slice(0,-1)),r=!gy.test(i?i.toLowerCase():"")}t=r}if(t)X(n,"complete"),X(n,"success");else{n.m=6;try{var s=2<Ee(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",gl(n)}}finally{ai(n)}}}}function ai(n,e){if(n.g){yl(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||X(n,"ready");try{t.onreadystatechange=r}catch{}}}function yl(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(S.clearTimeout(n.A),n.A=null)}m.isActive=function(){return!!this.g};function Ee(n){return n.g?n.g.readyState:0}m.da=function(){try{return 2<Ee(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),py(e)}};function $a(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case pl:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function vy(n){const e={};n=(n.g&&2<=Ee(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(yn(n[r]))continue;var t=jm(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}xm(e,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vl(n){let e="";return Xs(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function ho(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=vl(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):O(n,e,t))}function Jt(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function wl(n){this.Ga=0,this.j=[],this.l=new ei,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Jt("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Jt("baseRetryDelayMs",5e3,n),this.hb=Jt("retryDelaySeedMs",1e4,n),this.eb=Jt("forwardChannelMaxRetries",2,n),this.xa=Jt("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new cl(n&&n.concurrentRequestLimit),this.Ja=new hy,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=wl.prototype;m.ra=8;m.H=1;function fo(n){if(El(n),n.H==3){var e=n.W++,t=Le(n.I);if(O(t,"SID",n.K),O(t,"RID",e),O(t,"TYPE","terminate"),Gn(n,t),e=new jn(n,n.l,e),e.L=2,e.v=si(Le(t)),t=!1,S.navigator&&S.navigator.sendBeacon)try{t=S.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&S.Image&&(new Image().src=e.v,t=!0),t||(e.g=bl(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zn(e)}Al(n)}function ci(n){n.g&&(go(n),n.g.cancel(),n.g=null)}function El(n){ci(n),n.u&&(S.clearTimeout(n.u),n.u=null),Or(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&S.clearTimeout(n.m),n.m=null)}function ui(n){if(!ul(n.i)&&!n.m){n.m=!0;var e=n.Na;wn||ju(),En||(wn(),En=!0),ro.add(e,n),n.C=0}}function wy(n,e){return ll(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Bn(re(n.Na,n,e),kl(n,n.C)),n.C++,!0)}m.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new jn(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Mu(s),xu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=_l(this,i,e),t=Le(this.I),O(t,"RID",n),O(t,"CVER",22),this.F&&O(t,"X-HTTP-Session-Id",this.F),Gn(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(vl(s)))+"&"+e:this.o&&ho(t,this.o,s)),uo(this.i,i),this.bb&&O(t,"TYPE","init"),this.P?(O(t,"$req",e),O(t,"SID","null"),i.aa=!0,hs(i,t,null)):hs(i,t,e),this.H=2}}else this.H==3&&(n?Ba(this,n):this.j.length==0||ul(this.i)||Ba(this))};function Ba(n,e){var t;e?t=e.m:t=n.W++;const r=Le(n.I);O(r,"SID",n.K),O(r,"RID",t),O(r,"AID",n.V),Gn(n,r),n.o&&n.s&&ho(r,n.o,n.s),t=new jn(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=_l(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),uo(n.i,t),hs(t,r,e)}function Gn(n,e){n.na&&Xs(n.na,function(t,r){O(e,r,t)}),n.h&&rl({},function(t,r){O(e,r,t)})}function _l(n,e,t){t=Math.min(n.j.length,t);var r=n.h?re(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{dy(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Il(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;wn||ju(),En||(wn(),En=!0),ro.add(e,n),n.A=0}}function po(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Bn(re(n.Ma,n),kl(n,n.A)),n.A++,!0)}m.Ma=function(){if(this.u=null,Tl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Bn(re(this.jb,this),n)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ce(10),ci(this),Tl(this))};function go(n){n.B!=null&&(S.clearTimeout(n.B),n.B=null)}function Tl(n){n.g=new jn(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Le(n.wa);O(e,"RID","rpc"),O(e,"SID",n.K),O(e,"AID",n.V),O(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&O(e,"TO",n.qa),O(e,"TYPE","xmlhttp"),Gn(n,e),n.o&&n.s&&ho(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=si(Le(e)),t.s=null,t.S=!0,Zu(t,n)}m.ib=function(){this.v!=null&&(this.v=null,ci(this),po(this),ce(19))};function Or(n){n.v!=null&&(S.clearTimeout(n.v),n.v=null)}function Sl(n,e){var t=null;if(n.g==e){Or(n),go(n),n.g=null;var r=2}else if(fs(n.i,e))t=e.F,hl(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=ti(),X(r,new Qu(r,t)),ui(n)}else Il(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&wy(n,e)||r==2&&po(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:at(n,5);break;case 4:at(n,10);break;case 3:at(n,6);break;default:at(n,2)}}}function kl(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function at(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=re(n.pb,n);t||(t=new lt("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||Dr(t,"https"),si(t)),fy(t.toString(),r)}else ce(2);n.H=0,n.h&&n.h.za(e),Al(n),El(n)}m.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ce(2)):(this.l.info("Failed to ping google.com"),ce(1))};function Al(n){if(n.H=0,n.ma=[],n.h){const e=dl(n.i);(e.length!=0||n.j.length!=0)&&(Da(n.ma,e),Da(n.ma,n.j),n.i.i.length=0,Qs(n.j),n.j.length=0),n.h.ya()}}function Cl(n,e,t){var r=t instanceof lt?Le(t):new lt(t);if(r.g!="")e&&(r.g=e+"."+r.g),Pr(r,r.m);else{var i=S.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new lt(null);r&&Dr(s,r),e&&(s.g=e),i&&Pr(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&O(r,t,e),O(r,"VER",n.ra),Gn(n,r),r}function bl(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new F(new Hn({ob:!0})):new F(n.va),e.Oa(n.J),e}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function Rl(){}m=Rl.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function Lr(){if(Lt&&!(10<=Number(Pm)))throw Error("Environmental error: no available transport.")}Lr.prototype.g=function(n,e){return new pe(n,e)};function pe(n,e){G.call(this),this.g=new wl(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!yn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Kt(this)}W(pe,G);pe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ce(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Cl(n,null,n.Y),ui(n)};pe.prototype.close=function(){fo(this.g)};pe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=no(n),n=t);e.j.push(new cy(e.fb++,n)),e.H==3&&ui(e)};pe.prototype.N=function(){this.g.h=null,delete this.j,fo(this.g),delete this.g,pe.$.N.call(this)};function Nl(n){ao.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}W(Nl,ao);function Dl(){co.call(this),this.status=1}W(Dl,co);function Kt(n){this.g=n}W(Kt,Rl);Kt.prototype.Ba=function(){X(this.g,"a")};Kt.prototype.Aa=function(n){X(this.g,new Nl(n))};Kt.prototype.za=function(n){X(this.g,new Dl)};Kt.prototype.ya=function(){X(this.g,"b")};function Ey(){this.blockSize=-1}function ye(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}W(ye,Ey);ye.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qi(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}ye.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)qi(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){qi(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){qi(this,r),i=0;break}}this.h=i,this.i+=e};ye.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function P(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var _y={};function mo(n){return-128<=n&&128>n?Rm(n,function(e){return new P([e|0],0>e?-1:0)}):new P([n|0],0>n?-1:0)}function _e(n){if(isNaN(n)||!isFinite(n))return Rt;if(0>n)return Y(_e(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=ps;return new P(e,0)}function Pl(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Y(Pl(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=_e(Math.pow(e,8)),r=Rt,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=_e(Math.pow(e,s)),r=r.R(s).add(_e(o))):(r=r.R(t),r=r.add(_e(o)))}return r}var ps=4294967296,Rt=mo(0),gs=mo(1),qa=mo(16777216);m=P.prototype;m.ea=function(){if(ge(this))return-Y(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:ps+r)*e,e*=ps}return n};m.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(be(this))return"0";if(ge(this))return"-"+Y(this).toString(n);for(var e=_e(Math.pow(n,6)),t=this,r="";;){var i=xr(t,e).g;t=Mr(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,be(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};m.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function be(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function ge(n){return n.h==-1}m.X=function(n){return n=Mr(this,n),ge(n)?-1:be(n)?0:1};function Y(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new P(t,~n.h).add(gs)}m.abs=function(){return ge(this)?Y(this):this};m.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new P(t,t[t.length-1]&-2147483648?-1:0)};function Mr(n,e){return n.add(Y(e))}m.R=function(n){if(be(this)||be(n))return Rt;if(ge(this))return ge(n)?Y(this).R(Y(n)):Y(Y(this).R(n));if(ge(n))return Y(this.R(Y(n)));if(0>this.X(qa)&&0>n.X(qa))return _e(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,ar(t,2*r+2*i),t[2*r+2*i+1]+=s*c,ar(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,ar(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,ar(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new P(t,0)};function ar(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Zt(n,e){this.g=n,this.h=e}function xr(n,e){if(be(e))throw Error("division by zero");if(be(n))return new Zt(Rt,Rt);if(ge(n))return e=xr(Y(n),e),new Zt(Y(e.g),Y(e.h));if(ge(e))return e=xr(n,Y(e)),new Zt(Y(e.g),e.h);if(30<n.g.length){if(ge(n)||ge(e))throw Error("slowDivide_ only works with positive integers.");for(var t=gs,r=e;0>=r.X(n);)t=ja(t),r=ja(r);var i=_t(t,1),s=_t(r,1);for(r=_t(r,2),t=_t(t,2);!be(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=_t(r,1),t=_t(t,1)}return e=Mr(n,i.R(e)),new Zt(i,e)}for(i=Rt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=_e(t),o=s.R(e);ge(o)||0<o.X(n);)t-=r,s=_e(t),o=s.R(e);be(s)&&(s=gs),i=i.add(s),n=Mr(n,o)}return new Zt(i,n)}m.gb=function(n){return xr(this,n).h};m.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new P(t,this.h&n.h)};m.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new P(t,this.h|n.h)};m.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new P(t,this.h^n.h)};function ja(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new P(t,n.h)}function _t(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new P(i,n.h)}Lr.prototype.createWebChannel=Lr.prototype.g;pe.prototype.send=pe.prototype.u;pe.prototype.open=pe.prototype.m;pe.prototype.close=pe.prototype.close;ni.NO_ERROR=0;ni.TIMEOUT=8;ni.HTTP_ERROR=6;Yu.COMPLETE="complete";Xu.EventType=qn;qn.OPEN="a";qn.CLOSE="b";qn.ERROR="c";qn.MESSAGE="d";G.prototype.listen=G.prototype.O;F.prototype.listenOnce=F.prototype.P;F.prototype.getLastError=F.prototype.Sa;F.prototype.getLastErrorCode=F.prototype.Ia;F.prototype.getStatus=F.prototype.da;F.prototype.getResponseJson=F.prototype.Wa;F.prototype.getResponseText=F.prototype.ja;F.prototype.send=F.prototype.ha;F.prototype.setWithCredentials=F.prototype.Oa;ye.prototype.digest=ye.prototype.l;ye.prototype.reset=ye.prototype.reset;ye.prototype.update=ye.prototype.j;P.prototype.add=P.prototype.add;P.prototype.multiply=P.prototype.R;P.prototype.modulo=P.prototype.gb;P.prototype.compare=P.prototype.X;P.prototype.toNumber=P.prototype.ea;P.prototype.toString=P.prototype.toString;P.prototype.getBits=P.prototype.D;P.fromNumber=_e;P.fromString=Pl;var Iy=function(){return new Lr},Ty=function(){return ti()},ji=ni,Sy=Yu,ky=yt,za={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ay=Hn,cr=Xu,Cy=F,by=ye,Nt=P;const Ha="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new zr("@firebase/firestore");function Ka(){return pt.logLevel}function v(n,...e){if(pt.logLevel<=N.DEBUG){const t=e.map(yo);pt.debug(`Firestore (${Gt}): ${n}`,...t)}}function Me(n,...e){if(pt.logLevel<=N.ERROR){const t=e.map(yo);pt.error(`Firestore (${Gt}): ${n}`,...t)}}function Mt(n,...e){if(pt.logLevel<=N.WARN){const t=e.map(yo);pt.warn(`Firestore (${Gt}): ${n}`,...t)}}function yo(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(n="Unexpected state"){const e=`FIRESTORE (${Gt}) INTERNAL ASSERTION FAILED: `+n;throw Me(e),new Error(e)}function M(n,e){n||T()}function C(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ue{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ry{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ee.UNAUTHENTICATED))}shutdown(){}}class Ny{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Dy{constructor(e){this.t=e,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new Ne;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ne,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ne)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(M(typeof r.accessToken=="string"),new Ol(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return M(e===null||typeof e=="string"),new ee(e)}}class Py{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Oy{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new Py(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class My{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(M(typeof t.token=="string"),this.T=t.token,new Ly(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=xy(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function D(n,e){return n<e?-1:n>e?1:0}function xt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return z.fromMillis(Date.now())}static fromDate(e){return z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new z(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.timestamp=e}static fromTimestamp(e){return new k(e)}static min(){return new k(new z(0,0))}static max(){return new k(new z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,r){t===void 0?t=0:t>e.length&&T(),r===void 0?r=e.length-t:r>e.length-t&&T(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class L extends kn{construct(e,t,r){return new L(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new L(t)}static emptyPath(){return new L([])}}const Fy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ne extends kn{construct(e,t,r){return new ne(e,t,r)}static isValidIdentifier(e){return Fy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ne(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ne(t)}static emptyPath(){return new ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(L.fromString(e))}static fromName(e){return new E(L.fromString(e).popFirst(5))}static empty(){return new E(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return L.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new L(e.slice()))}}function Uy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=k.fromTimestamp(r===1e9?new z(t+1,0):new z(t,r));return new Ye(i,E.empty(),e)}function Vy(n){return new Ye(n.readTime,n.key,-1)}class Ye{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ye(k.min(),E.empty(),-1)}static max(){return new Ye(k.max(),E.empty(),-1)}}function $y(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=E.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==By)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,r)=>{t(e)})}static reject(e){return new g((t,r)=>{r(e)})}static waitFor(e){return new g((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=g.resolve(!1);for(const r of e)t=t.next(i=>i?g.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new g((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new g((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Qn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}vo.ct=-1;function li(n){return n==null}function Fr(n){return n===0&&1/n==-1/0}function jy(n){return typeof n=="number"&&Number.isInteger(n)&&!Fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ml(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.comparator=e,this.root=t||Q.EMPTY}insert(e,t){return new x(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Q.BLACK,null,null))}remove(e){return new x(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Q.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ur(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ur(this.root,e,this.comparator,!1)}getReverseIterator(){return new ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ur(this.root,e,this.comparator,!0)}}class ur{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Q{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Q.RED,this.left=i??Q.EMPTY,this.right=s??Q.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Q(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Q.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}Q.EMPTY=null,Q.RED=!0,Q.BLACK=!1;Q.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(n,e,t,r,i){return this}insert(n,e,t){return new Q(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.comparator=e,this.data=new x(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wa(this.data.getIterator())}getIteratorFrom(e){return new Wa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class Wa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.fields=e,e.sort(ne.comparator)}static empty(){return new de([])}unionWith(e){let t=new se(ne.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new de(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xl("Invalid base64 string: "+i):i}}(e);return new ae(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ae.EMPTY_BYTE_STRING=new ae("");const zy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xe(n){if(M(!!n),typeof n=="string"){let e=0;const t=zy.exec(n);if(M(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:B(n.seconds),nanos:B(n.nanos)}}function B(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gt(n){return typeof n=="string"?ae.fromBase64String(n):ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Eo(n){const e=n.mapValue.fields.__previous_value__;return wo(e)?Eo(e):e}function An(n){const e=Xe(n.mapValue.fields.__local_write_time__.timestampValue);return new z(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Cn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wo(n)?4:Ky(n)?9007199254740991:10:T()}function ke(n,e){if(n===e)return!0;const t=mt(n);if(t!==mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return An(n).isEqual(An(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Xe(r.timestampValue),o=Xe(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return gt(r.bytesValue).isEqual(gt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return B(r.geoPointValue.latitude)===B(i.geoPointValue.latitude)&&B(r.geoPointValue.longitude)===B(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return B(r.integerValue)===B(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=B(r.doubleValue),o=B(i.doubleValue);return s===o?Fr(s)===Fr(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return xt(n.arrayValue.values||[],e.arrayValue.values||[],ke);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ga(s)!==Ga(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ke(s[a],o[a])))return!1;return!0}(n,e);default:return T()}}function bn(n,e){return(n.values||[]).find(t=>ke(t,e))!==void 0}function Ft(n,e){if(n===e)return 0;const t=mt(n),r=mt(e);if(t!==r)return D(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=B(i.integerValue||i.doubleValue),a=B(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Qa(n.timestampValue,e.timestampValue);case 4:return Qa(An(n),An(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,s){const o=gt(i),a=gt(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=D(B(i.latitude),B(s.latitude));return o!==0?o:D(B(i.longitude),B(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ft(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===lr.mapValue&&s===lr.mapValue)return 0;if(i===lr.mapValue)return 1;if(s===lr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=Ft(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(n.mapValue,e.mapValue);default:throw T()}}function Qa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=Xe(n),r=Xe(e),i=D(t.seconds,r.seconds);return i!==0?i:D(t.nanos,r.nanos)}function Ut(n){return ms(n)}function ms(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Xe(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?gt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,E.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ms(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ms(r.fields[a])}`;return s+"}"}(n.mapValue):T();var e,t}function Ya(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ys(n){return!!n&&"integerValue"in n}function _o(n){return!!n&&"arrayValue"in n}function Xa(n){return!!n&&"nullValue"in n}function Ja(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yr(n){return!!n&&"mapValue"in n}function cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return vt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=cn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=cn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ky(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!yr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cn(t)}setAll(e){let t=ne.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=cn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());yr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];yr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){vt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ue(cn(this.value))}}function Fl(n){const e=[];return vt(n.fields,(t,r)=>{const i=new ne([t]);if(yr(r)){const s=Fl(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new de(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new te(e,0,k.min(),k.min(),k.min(),ue.empty(),0)}static newFoundDocument(e,t,r,i){return new te(e,1,t,k.min(),r,i,0)}static newNoDocument(e,t){return new te(e,2,t,k.min(),k.min(),ue.empty(),0)}static newUnknownDocument(e,t){return new te(e,3,t,k.min(),k.min(),ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.position=e,this.inclusive=t}}function Za(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),t.key):r=Ft(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ec(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ke(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{}class q extends Ul{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Qy(e,t,r):t==="array-contains"?new Jy(e,r):t==="in"?new Zy(e,r):t==="not-in"?new ev(e,r):t==="array-contains-any"?new tv(e,r):new q(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Yy(e,r):new Xy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ft(t,this.value)):t!==null&&mt(this.value)===mt(t)&&this.matchesComparison(Ft(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ve extends Ul{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new ve(e,t)}matches(e){return Vl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Vl(n){return n.op==="and"}function $l(n){return Wy(n)&&Vl(n)}function Wy(n){for(const e of n.filters)if(e instanceof ve)return!1;return!0}function vs(n){if(n instanceof q)return n.field.canonicalString()+n.op.toString()+Ut(n.value);if($l(n))return n.filters.map(e=>vs(e)).join(",");{const e=n.filters.map(t=>vs(t)).join(",");return`${n.op}(${e})`}}function Bl(n,e){return n instanceof q?function(t,r){return r instanceof q&&t.op===r.op&&t.field.isEqual(r.field)&&ke(t.value,r.value)}(n,e):n instanceof ve?function(t,r){return r instanceof ve&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&Bl(s,r.filters[o]),!0):!1}(n,e):void T()}function ql(n){return n instanceof q?function(e){return`${e.field.canonicalString()} ${e.op} ${Ut(e.value)}`}(n):n instanceof ve?function(e){return e.op.toString()+" {"+e.getFilters().map(ql).join(" ,")+"}"}(n):"Filter"}class Qy extends q{constructor(e,t,r){super(e,t,r),this.key=E.fromName(r.referenceValue)}matches(e){const t=E.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yy extends q{constructor(e,t){super(e,"in",t),this.keys=jl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Xy extends q{constructor(e,t){super(e,"not-in",t),this.keys=jl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function jl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>E.fromName(r.referenceValue))}class Jy extends q{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _o(t)&&bn(t.arrayValue,this.value)}}class Zy extends q{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&bn(this.value.arrayValue,t)}}class ev extends q{constructor(e,t){super(e,"not-in",t)}matches(e){if(bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!bn(this.value.arrayValue,t)}}class tv extends q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_o(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>bn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function tc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new nv(n,e,t,r,i,s,o)}function Io(n){const e=C(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),li(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ut(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ut(r)).join(",")),e.dt=t}return e.dt}function To(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ec(n.startAt,e.startAt)&&ec(n.endAt,e.endAt)}function ws(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function rv(n,e,t,r,i,s,o,a){return new Wt(n,e,t,r,i,s,o,a)}function So(n){return new Wt(n)}function nc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ko(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function hi(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function zl(n){return n.collectionGroup!==null}function Pt(n){const e=C(n);if(e.wt===null){e.wt=[];const t=hi(e),r=ko(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new Dt(t)),e.wt.push(new Dt(ne.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Dt(ne.keyField(),s))}}}return e.wt}function xe(n){const e=C(n);if(!e._t)if(e.limitType==="F")e._t=tc(e.path,e.collectionGroup,Pt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Pt(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Dt(s.field,o))}const r=e.endAt?new Ur(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ur(e.startAt.position,e.startAt.inclusive):null;e._t=tc(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function Es(n,e){e.getFirstInequalityField(),hi(n);const t=n.filters.concat([e]);return new Wt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Vr(n,e,t){return new Wt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function di(n,e){return To(xe(n),xe(e))&&n.limitType===e.limitType}function Hl(n){return`${Io(xe(n))}|lt:${n.limitType}`}function _s(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>ql(r)).join(", ")}]`),li(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ut(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ut(r)).join(",")),`Target(${t})`}(xe(n))}; limitType=${n.limitType})`}function fi(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):E.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of Pt(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Za(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,Pt(t),r)||t.endAt&&!function(i,s,o){const a=Za(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,Pt(t),r))}(n,e)}function iv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kl(n){return(e,t)=>{let r=!1;for(const i of Pt(n)){const s=sv(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function sv(n,e,t){const r=n.field.isKeyField()?E.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ft(a,c):T()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ml(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new x(E.comparator);function Fe(){return ov}const Gl=new x(E.comparator);function nn(...n){let e=Gl;for(const t of n)e=e.insert(t.key,t);return e}function Wl(n){let e=Gl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ct(){return un()}function Ql(){return un()}function un(){return new Qt(n=>n.toString(),(n,e)=>n.isEqual(e))}const av=new x(E.comparator),cv=new se(E.comparator);function b(...n){let e=cv;for(const t of n)e=e.add(t);return e}const uv=new se(D);function lv(){return uv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fr(e)?"-0":e}}function Xl(n){return{integerValue:""+n}}function Jl(n,e){return jy(e)?Xl(e):Yl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this._=void 0}}function hv(n,e,t){return n instanceof $r?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&wo(i)&&(i=Eo(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof Rn?eh(n,e):n instanceof Nn?th(n,e):function(r,i){const s=Zl(r,i),o=rc(s)+rc(r.gt);return ys(s)&&ys(r.gt)?Xl(o):Yl(r.serializer,o)}(n,e)}function dv(n,e,t){return n instanceof Rn?eh(n,e):n instanceof Nn?th(n,e):t}function Zl(n,e){return n instanceof Dn?ys(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class $r extends pi{}class Rn extends pi{constructor(e){super(),this.elements=e}}function eh(n,e){const t=nh(e);for(const r of n.elements)t.some(i=>ke(i,r))||t.push(r);return{arrayValue:{values:t}}}class Nn extends pi{constructor(e){super(),this.elements=e}}function th(n,e){let t=nh(e);for(const r of n.elements)t=t.filter(i=>!ke(i,r));return{arrayValue:{values:t}}}class Dn extends pi{constructor(e,t){super(),this.serializer=e,this.gt=t}}function rc(n){return B(n.integerValue||n.doubleValue)}function nh(n){return _o(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.field=e,this.transform=t}}function pv(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Rn&&r instanceof Rn||t instanceof Nn&&r instanceof Nn?xt(t.elements,r.elements,ke):t instanceof Dn&&r instanceof Dn?ke(t.gt,r.gt):t instanceof $r&&r instanceof $r}(n.transform,e.transform)}class gv{constructor(e,t){this.version=e,this.transformResults=t}}class me{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new me}static exists(e){return new me(void 0,e)}static updateTime(e){return new me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class gi{}function rh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ao(n.key,me.none()):new Yn(n.key,n.data,me.none());{const t=n.data,r=ue.empty();let i=new se(ne.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new tt(n.key,r,new de(i.toArray()),me.none())}}function mv(n,e,t){n instanceof Yn?function(r,i,s){const o=r.value.clone(),a=sc(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof tt?function(r,i,s){if(!vr(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=sc(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ih(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function ln(n,e,t,r){return n instanceof Yn?function(i,s,o,a){if(!vr(i.precondition,s))return o;const c=i.value.clone(),u=oc(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof tt?function(i,s,o,a){if(!vr(i.precondition,s))return o;const c=oc(i.fieldTransforms,a,s),u=s.data;return u.setAll(ih(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return vr(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function yv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Zl(r.transform,i||null);s!=null&&(t===null&&(t=ue.empty()),t.set(r.field,s))}return t||null}function ic(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&xt(t,r,(i,s)=>pv(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yn extends gi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tt extends gi{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ih(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function sc(n,e,t){const r=new Map;M(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,dv(o,a,t[i]))}return r}function oc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,hv(s,o,e))}return r}class Ao extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vv extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ln(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ln(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ql();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=rh(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(k.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),b())}isEqual(e){return this.batchId===e.batchId&&xt(this.mutations,e.mutations,(t,r)=>ic(t,r))&&xt(this.baseMutations,e.baseMutations,(t,r)=>ic(t,r))}}class Co{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){M(e.mutations.length===r.length);let i=av;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Co(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $,R;function Iv(n){switch(n){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function sh(n){if(n===void 0)return Me("GRPC error has no .code"),f.UNKNOWN;switch(n){case $.OK:return f.OK;case $.CANCELLED:return f.CANCELLED;case $.UNKNOWN:return f.UNKNOWN;case $.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case $.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case $.INTERNAL:return f.INTERNAL;case $.UNAVAILABLE:return f.UNAVAILABLE;case $.UNAUTHENTICATED:return f.UNAUTHENTICATED;case $.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case $.NOT_FOUND:return f.NOT_FOUND;case $.ALREADY_EXISTS:return f.ALREADY_EXISTS;case $.PERMISSION_DENIED:return f.PERMISSION_DENIED;case $.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case $.ABORTED:return f.ABORTED;case $.OUT_OF_RANGE:return f.OUT_OF_RANGE;case $.UNIMPLEMENTED:return f.UNIMPLEMENTED;case $.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(R=$||($={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return hr}static getOrCreateInstance(){return hr===null&&(hr=new bo),hr}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let hr=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new Nt([4294967295,4294967295],0);function ac(n){const e=Tv().encode(n),t=new by;return t.update(e),new Uint8Array(t.digest())}function cc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Nt([t,r],0),new Nt([i,s],0)]}class Ro{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new rn(`Invalid padding: ${t}`);if(r<0)throw new rn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new rn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new rn(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Nt.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(Nt.fromNumber(r)));return i.compare(Sv)===1&&(i=new Nt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=ac(e),[r,i]=cc(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ro(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=ac(e),[r,i]=cc(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class rn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Xn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new mi(k.min(),i,new x(D),Fe(),b())}}class Xn{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xn(r,t,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class oh{constructor(e,t){this.targetId=e,this.Vt=t}}class ah{constructor(e,t,r=ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class uc{constructor(){this.St=0,this.Dt=hc(),this.Ct=ae.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=b(),t=b(),r=b();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:T()}}),new Xn(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=hc()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class kv{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Fe(),this.zt=lc(),this.Wt=new x(D)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(ws(o))if(i===0){const a=new E(o.path);this.Yt(r,a,te.newNoDocument(a,k.min()))}else M(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(t=bo.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,p,w,_,I,U;const V={localCacheCount:l,existenceFilterCount:h.count},H=h.unchangedNames;return H&&(V.bloomFilter={applied:u===0,hashCount:(d=H==null?void 0:H.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(_=(w=(p=H==null?void 0:H.bits)===null||p===void 0?void 0:p.bitmap)===null||w===void 0?void 0:w.length)!==null&&_!==void 0?_:0,padding:(U=(I=H==null?void 0:H.bits)===null||I===void 0?void 0:I.padding)!==null&&U!==void 0?U:0}),V}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=gt(s).toUint8Array()}catch(l){if(l instanceof xl)return Mt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Ro(c,o,a)}catch(l){return Mt(l instanceof rn?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&ws(a.target)){const c=new E(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,te.newNoDocument(c,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=b();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new mi(e,t,this.Wt,this.jt,r);return this.jt=Fe(),this.zt=lc(),this.Wt=new x(D),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new uc,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new se(D),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new uc),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function lc(){return new x(E.comparator)}function hc(){return new x(E.comparator)}const Av=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Cv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),bv=(()=>({and:"AND",or:"OR"}))();class Rv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Is(n,e){return n.useProto3Json||li(e)?e:{value:e}}function Br(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ch(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Nv(n,e){return Br(n,e.toTimestamp())}function Se(n){return M(!!n),k.fromTimestamp(function(e){const t=Xe(e);return new z(t.seconds,t.nanos)}(n))}function No(n,e){return function(t){return new L(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function uh(n){const e=L.fromString(n);return M(fh(e)),e}function Ts(n,e){return No(n.databaseId,e.path)}function zi(n,e){const t=uh(e);if(t.get(1)!==n.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new E(lh(t))}function Ss(n,e){return No(n.databaseId,e)}function Dv(n){const e=uh(n);return e.length===4?L.emptyPath():lh(e)}function ks(n){return new L(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function lh(n){return M(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function dc(n,e,t){return{name:Ts(n,e),fields:t.value.mapValue.fields}}function Pv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(M(u===void 0||typeof u=="string"),ae.fromBase64String(u||"")):(M(u===void 0||u instanceof Uint8Array),ae.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:sh(c.code);return new y(u,c.message||"")}(o);t=new ah(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zi(n,r.document.name),s=Se(r.document.updateTime),o=r.document.createTime?Se(r.document.createTime):k.min(),a=new ue({mapValue:{fields:r.document.fields}}),c=te.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new wr(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zi(n,r.document),s=r.readTime?Se(r.readTime):k.min(),o=te.newNoDocument(i,s),a=r.removedTargetIds||[];t=new wr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zi(n,r.document),s=r.removedTargetIds||[];t=new wr([],s,i,null)}else{if(!("filter"in e))return T();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new _v(i,s),a=r.targetId;t=new oh(a,o)}}return t}function Ov(n,e){let t;if(e instanceof Yn)t={update:dc(n,e.key,e.value)};else if(e instanceof Ao)t={delete:Ts(n,e.key)};else if(e instanceof tt)t={update:dc(n,e.key,e.data),updateMask:qv(e.fieldMask)};else{if(!(e instanceof vv))return T();t={verify:Ts(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof $r)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Nn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Dn)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw T()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Nv(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(n,e.precondition)),t}function Lv(n,e){return n&&n.length>0?(M(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?Se(r.updateTime):Se(i);return s.isEqual(k.min())&&(s=Se(i)),new gv(s,r.transformResults||[])}(t,e))):[]}function Mv(n,e){return{documents:[Ss(n,e.path)]}}function xv(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Ss(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ss(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return dh(ve.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:It(l.field),direction:Vv(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Is(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Fv(n){let e=Dv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){M(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=hh(l);return h instanceof ve&&$l(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Dt(Tt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,li(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ur(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ur(d,h)}(t.endAt)),rv(e,i,o,s,a,"F",c,u)}function Uv(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Tt(e.unaryFilter.field);return q.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Tt(e.unaryFilter.field);return q.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tt(e.unaryFilter.field);return q.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Tt(e.unaryFilter.field);return q.create(s,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(n):n.fieldFilter!==void 0?function(e){return q.create(Tt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ve.create(e.compositeFilter.filters.map(t=>hh(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(n):T()}function Vv(n){return Av[n]}function $v(n){return Cv[n]}function Bv(n){return bv[n]}function It(n){return{fieldPath:n.canonicalString()}}function Tt(n){return ne.fromServerFormat(n.fieldPath)}function dh(n){return n instanceof q?function(e){if(e.op==="=="){if(Ja(e.value))return{unaryFilter:{field:It(e.field),op:"IS_NAN"}};if(Xa(e.value))return{unaryFilter:{field:It(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ja(e.value))return{unaryFilter:{field:It(e.field),op:"IS_NOT_NAN"}};if(Xa(e.value))return{unaryFilter:{field:It(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:It(e.field),op:$v(e.op),value:e.value}}}(n):n instanceof ve?function(e){const t=e.getFilters().map(r=>dh(r));return t.length===1?t[0]:{compositeFilter:{op:Bv(e.op),filters:t}}}(n):T()}function qv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function fh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t,r,i,s=k.min(),o=k.min(),a=ae.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ze(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ze(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ze(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ze(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.fe=e}}function zv(n){const e=Fv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.rn=new Kv}addToCollectionParentIndex(e,t){return this.rn.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(Ye.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(Ye.min())}updateCollectionGroup(e,t,r){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class Kv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new se(L.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new se(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Vt(0)}static Mn(){return new Vt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(){this.changes=new Qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?g.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ln(r.mutation,i,de.empty(),z.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,b()).next(()=>r))}getLocalViewOfDocuments(e,t,r=b()){const i=ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=nn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ct();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,b()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Fe();const o=un(),a=un();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof tt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),ln(l.mutation,u,l.mutation.getFieldMask(),z.now())):o.set(u.key,de.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new Wv(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=un();let i=new x((o,a)=>o-a),s=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||de.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||b()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ql();l.forEach(d=>{if(!s.has(d)){const p=rh(t.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):g.resolve(ct());let a=-1,c=s;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?g.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,b())).next(l=>({batchId:a,changes:Wl(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new E(t)).next(r=>{let i=nn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=nn();return this.indexManager.getCollectionParents(e,i).next(o=>g.forEach(o,a=>{const c=function(u,l){return new Wt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,te.newInvalidDocument(u)))});let o=nn();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&ln(u.mutation,c,de.empty(),z.now()),fi(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return g.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:Se(r.createTime)}),g.resolve()}getNamedQuery(e,t){return g.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:zv(r.bundledQuery),readTime:Se(r.readTime)}}(t)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(){this.overlays=new x(E.comparator),this.ls=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ct();return g.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),g.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),g.resolve()}getOverlaysForCollection(e,t,r){const i=ct(),s=t.length+1,o=new E(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new x((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ct(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ct(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return g.resolve(a)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ev(t,r));let s=this.ls.get(t);s===void 0&&(s=b(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.fs=new se(K.ds),this.ws=new se(K._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new K(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new K(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new E(new L([])),r=new K(t,e),i=new K(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new E(new L([])),r=new K(t,e),i=new K(t,e+1);let s=b();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new K(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class K{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return E.comparator(e.key,t.key)||D(e.As,t.As)}static _s(e,t){return D(e.As,t.As)||E.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new se(K.ds)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wv(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new K(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new K(t,0),i=new K(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new se(D);return t.forEach(i=>{const s=new K(i,0),o=new K(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),g.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new K(new E(s),0);let a=new se(D);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),g.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){M(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return g.forEach(t.mutations,i=>{const s=new K(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new K(t,0),i=this.Rs.firstAfterOrEqual(r);return g.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.Ds=e,this.docs=new x(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return g.resolve(r?r.document.mutableCopy():te.newInvalidDocument(t))}getEntries(e,t){let r=Fe();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():te.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Fe();const o=t.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||$y(Vy(l),r)<=0||(i.has(l.key)||fi(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(e,t,r,i){T()}Cs(e,t){return g.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ew(this)}getSize(e){return g.resolve(this.size)}}class ew extends Gv{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),g.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.persistence=e,this.xs=new Qt(t=>Io(t),To),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Do,this.targetCount=0,this.Ms=Vt.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),g.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Vt(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.Fn(t),g.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return g.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),g.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),g.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return g.resolve(r)}containsKey(e,t){return g.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t){this.$s={},this.overlays={},this.Os=new vo(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new tw(this),this.indexManager=new Hv,this.remoteDocumentCache=function(r){return new Zv(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new jv(t),this.qs=new Yv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new Jv(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){v("MemoryPersistence","Starting transaction:",e);const i=new rw(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return g.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class rw extends qy{constructor(e){super(),this.currentSequenceNumber=e}}class Po{constructor(e){this.persistence=e,this.Qs=new Do,this.js=null}static zs(e){return new Po(e)}get Ws(){if(this.js)return this.js;throw T()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),g.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),g.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ws,r=>{const i=E.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,k.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return g.or([()=>g.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=b(),i=b();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Oo(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(nc(t))return g.resolve(null);let r=xe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Vr(t,null,"F"),r=xe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=b(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,Vr(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,r,i){return nc(t)||i.isEqual(k.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(Ka()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_s(t)),this.Wi(e,o,t,Uy(i,-1)))})}ji(e,t){let r=new se(Kl(e));return t.forEach((i,s)=>{fi(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return Ka()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",_s(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ye.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new x(D),this.Yi=new Qt(s=>Io(s),To),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qv(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function ow(n,e,t,r){return new sw(n,e,t,r)}async function ph(n,e){const t=C(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=b();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function aw(n,e){const t=C(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=g.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(w=>{const _=c.docVersions.get(p);M(_!==null),w.version.compareTo(_)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=b();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function gh(n){const e=C(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function cw(n,e){const t=C(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ae.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),i=i.insert(h,p),function(w,_,I){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,l)&&a.push(t.Bs.updateTargetData(s,p))});let c=Fe(),u=b();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(uw(s,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!r.isEqual(k.min())){const l=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function uw(n,e,t){let r=b(),i=b();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Fe();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(k.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function lw(n,e){const t=C(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hw(n,e){const t=C(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,g.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new ze(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function As(n,e,t){const r=C(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Qn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function fc(n,e,t){const r=C(n);let i=k.min(),s=b();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=C(a),h=l.Yi.get(u);return h!==void 0?g.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(r,o,xe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:k.min(),t?s:b())).next(a=>(dw(r,iv(e),a),{documents:a,ir:s})))}function dw(n,e,t){let r=n.Xi.get(e)||k.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}class pc{constructor(){this.activeTargetIds=lv()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fw{constructor(){this.Hr=new pc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new pc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr=null;function Hi(){return dr===null?dr=268435456+Math.round(2147483648*Math.random()):dr++,"0x"+dr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="WebChannelConnection";class yw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=Hi(),a=this.To(e,t);v("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(u=>(v("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Mt("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=gw[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=Hi();return new Promise((o,a)=>{const c=new Cy;c.setWithCredentials(!0),c.listenOnce(Sy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ji.NO_ERROR:const l=c.getResponseJson();v(Z,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case ji.TIMEOUT:v(Z,`RPC '${e}' ${s} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case ji.HTTP_ERROR:const h=c.getStatus();if(v(Z,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const w=function(_){const I=_.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(I)>=0?I:f.UNKNOWN}(p.status);a(new y(w,p.message))}else a(new y(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v(Z,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);v(Z,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Ro(e,t,r){const i=Hi(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Iy(),a=Ty(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new Ay({})),this.Eo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");v(Z,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,p=!1;const w=new mw({ro:I=>{p?v(Z,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(v(Z,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),v(Z,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},oo:()=>h.close()}),_=(I,U,V)=>{I.listen(U,H=>{try{V(H)}catch(he){setTimeout(()=>{throw he},0)}})};return _(h,cr.EventType.OPEN,()=>{p||v(Z,`RPC '${e}' stream ${i} transport opened.`)}),_(h,cr.EventType.CLOSE,()=>{p||(p=!0,v(Z,`RPC '${e}' stream ${i} transport closed`),w.wo())}),_(h,cr.EventType.ERROR,I=>{p||(p=!0,Mt(Z,`RPC '${e}' stream ${i} transport errored:`,I),w.wo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),_(h,cr.EventType.MESSAGE,I=>{var U;if(!p){const V=I.data[0];M(!!V);const H=V,he=H.error||((U=H[0])===null||U===void 0?void 0:U.error);if(he){v(Z,`RPC '${e}' stream ${i} received error:`,he);const rt=he.status;let it=function(Ci){const Et=$[Ci];if(Et!==void 0)return sh(Et)}(rt),Xt=he.message;it===void 0&&(it=f.INTERNAL,Xt="Unknown error status: "+rt+" with message "+he.message),p=!0,w.wo(new y(it,Xt)),h.close()}else v(Z,`RPC '${e}' stream ${i} received:`,V),w._o(V)}}),_(a,ky.STAT_EVENT,I=>{I.stat===za.PROXY?v(Z,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===za.NOPROXY&&v(Z,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function Ki(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){return new Rv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new mh(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(Me(t.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new y(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vw extends yh{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=Pv(this.serializer,e),r=function(i){if(!("targetChange"in i))return k.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?k.min():s.readTime?Se(s.readTime):k.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=ks(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=ws(a)?{documents:Mv(i,a)}:{query:xv(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=ch(i,s.resumeToken);const c=Is(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(k.min())>0){o.readTime=Br(i,s.snapshotVersion.toTimestamp());const c=Is(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=Uv(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=ks(this.serializer),t.removeTarget=e,this.Wo(t)}}class ww extends yh{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(M(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=Lv(e.writeResults,e.commitTime),r=Se(e.commitTime);return this.listener.cu(r,t)}return M(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ks(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ov(this.serializer,r))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(f.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class _w{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Me(t),this.mu=!1):v("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{wt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c.vu.add(4),await Jn(c),c.bu.set("Unknown"),c.vu.delete(4),await vi(c)}(this))})}),this.bu=new _w(r,i)}}async function vi(n){if(wt(n))for(const e of n.Ru)await e(!0)}async function Jn(n){for(const e of n.Ru)await e(!1)}function vh(n,e){const t=C(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),xo(t)?Mo(t):Yt(t).Ko()&&Lo(t,e))}function wh(n,e){const t=C(n),r=Yt(t);t.Au.delete(e),r.Ko()&&Eh(t,e),t.Au.size===0&&(r.Ko()?r.jo():wt(t)&&t.bu.set("Unknown"))}function Lo(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(k.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yt(n).su(e)}function Eh(n,e){n.Vu.qt(e),Yt(n).iu(e)}function Mo(n){n.Vu=new kv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),Yt(n).start(),n.bu.gu()}function xo(n){return wt(n)&&!Yt(n).Uo()&&n.Au.size>0}function wt(n){return C(n).vu.size===0}function _h(n){n.Vu=void 0}async function Tw(n){n.Au.forEach((e,t)=>{Lo(n,e)})}async function Sw(n,e){_h(n),xo(n)?(n.bu.Iu(e),Mo(n)):n.bu.set("Unknown")}async function kw(n,e,t){if(n.bu.set("Online"),e instanceof ah&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qr(n,r)}else if(e instanceof wr?n.Vu.Ht(e):e instanceof oh?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(k.min()))try{const r=await gh(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(ae.EMPTY_BYTE_STRING,u.snapshotVersion)),Eh(i,a);const l=new ze(u.target,a,c,u.sequenceNumber);Lo(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await qr(n,r)}}async function qr(n,e,t){if(!Qn(e))throw e;n.vu.add(1),await Jn(n),n.bu.set("Offline"),t||(t=()=>gh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await vi(n)})}function Ih(n,e){return e().catch(t=>qr(n,t,e))}async function wi(n){const e=C(n),t=Je(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Aw(e);)try{const i=await lw(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,Cw(e,i)}catch(i){await qr(e,i)}Th(e)&&Sh(e)}function Aw(n){return wt(n)&&n.Eu.length<10}function Cw(n,e){n.Eu.push(e);const t=Je(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function Th(n){return wt(n)&&!Je(n).Uo()&&n.Eu.length>0}function Sh(n){Je(n).start()}async function bw(n){Je(n).hu()}async function Rw(n){const e=Je(n);for(const t of n.Eu)e.uu(t.mutations)}async function Nw(n,e,t){const r=n.Eu.shift(),i=Co.from(r,e,t);await Ih(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await wi(n)}async function Dw(n,e){e&&Je(n).ou&&await async function(t,r){if(i=r.code,Iv(i)&&i!==f.ABORTED){const s=t.Eu.shift();Je(t).Qo(),await Ih(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await wi(t)}var i}(n,e),Th(n)&&Sh(n)}async function mc(n,e){const t=C(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=wt(t);t.vu.add(3),await Jn(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await vi(t)}async function Pw(n,e){const t=C(n);e?(t.vu.delete(2),await vi(t)):e||(t.vu.add(2),await Jn(t),t.bu.set("Unknown"))}function Yt(n){return n.Su||(n.Su=function(e,t,r){const i=C(e);return i.fu(),new vw(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:Tw.bind(null,n),ao:Sw.bind(null,n),nu:kw.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),xo(n)?Mo(n):n.bu.set("Unknown")):(await n.Su.stop(),_h(n))})),n.Su}function Je(n){return n.Du||(n.Du=function(e,t,r){const i=C(e);return i.fu(),new ww(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:bw.bind(null,n),ao:Dw.bind(null,n),au:Rw.bind(null,n),cu:Nw.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await wi(n)):(await n.Du.stop(),n.Eu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Fo(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uo(n,e){if(Me("AsyncQueue",`${e}: ${n}`),Qn(n))return new y(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.comparator=e?(t,r)=>e(t,r)||E.comparator(t.key,r.key):(t,r)=>E.comparator(t.key,r.key),this.keyedMap=nn(),this.sortedSet=new x(this.comparator)}static emptySet(e){return new Ot(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ot;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.Cu=new x(E.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):T():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class $t{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new $t(e,t,Ot.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&di(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.Nu=void 0,this.listeners=[]}}class Lw{constructor(){this.queries=new Qt(e=>Hl(e),di),this.onlineState="Unknown",this.ku=new Set}}async function kh(n,e){const t=C(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new Ow),i)try{s.Nu=await t.onListen(r)}catch(o){const a=Uo(o,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&Vo(t)}async function Ah(n,e){const t=C(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function Mw(n,e){const t=C(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Vo(t)}function xw(n,e,t){const r=C(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Vo(n){n.ku.forEach(e=>{e.next()})}class Ch{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $t(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=$t.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.key=e}}class Rh{constructor(e){this.key=e}}class Fw{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=b(),this.mutatedKeys=b(),this.tc=Kl(e),this.ec=new Ot(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new yc,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),p=fi(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?w!==_&&(r.track({type:3,doc:p}),I=!0):this.rc(d,p)||(r.track({type:2,doc:p}),I=!0,(c&&this.tc(p,c)>0||u&&this.tc(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(p?(o=o.add(p),s=_?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,l)=>function(h,d){const p=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return p(h)-p(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new $t(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new yc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=b(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new Rh(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new bh(r))}),t}hc(e){this.Yu=e.ir,this.Zu=b();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return $t.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Uw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Vw{constructor(e){this.key=e,this.fc=!1}}class $w{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Qt(a=>Hl(a),di),this._c=new Map,this.mc=new Set,this.gc=new x(E.comparator),this.yc=new Map,this.Ic=new Do,this.Tc={},this.Ec=new Map,this.Ac=Vt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Bw(n,e){const t=Xw(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await hw(t.localStore,xe(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await qw(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&vh(t.remoteStore,o)}return i}async function qw(n,e,t,r,i){n.Rc=(h,d,p)=>async function(w,_,I,U){let V=_.view.sc(I);V.zi&&(V=await fc(w.localStore,_.query,!1).then(({documents:rt})=>_.view.sc(rt,V)));const H=U&&U.targetChanges.get(_.targetId),he=_.view.applyChanges(V,w.isPrimaryClient,H);return wc(w,_.targetId,he.cc),he.snapshot}(n,h,d,p);const s=await fc(n.localStore,e,!0),o=new Fw(e,s.ir),a=o.sc(s.documents),c=Xn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);wc(n,t,u.cc);const l=new Uw(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function jw(n,e){const t=C(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!di(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await As(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),wh(t.remoteStore,r.targetId),Cs(t,r.targetId)}).catch(Wn)):(Cs(t,r.targetId),await As(t.localStore,r.targetId,!0))}async function zw(n,e,t){const r=Jw(n);try{const i=await function(s,o){const a=C(s),c=z.now(),u=o.reduce((d,p)=>d.add(p.key),b());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Fe(),w=b();return a.Zi.getEntries(d,u).next(_=>{p=_,p.forEach((I,U)=>{U.isValidDocument()||(w=w.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{l=_;const I=[];for(const U of o){const V=yv(U,l.get(U.key).overlayedDocument);V!=null&&I.push(new tt(U.key,V,Fl(V.value.mapValue),me.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(_=>{h=_;const I=_.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,_.batchId,I)})}).then(()=>({batchId:h.batchId,changes:Wl(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new x(D)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,t),await Zn(r,i.changes),await wi(r.remoteStore)}catch(i){const s=Uo(i,"Failed to persist write");t.reject(s)}}async function Nh(n,e){const t=C(n);try{const r=await cw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(M(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?M(o.fc):i.removedDocuments.size>0&&(M(o.fc),o.fc=!1))}),await Zn(t,r,e)}catch(r){await Wn(r)}}function vc(n,e,t){const r=C(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=C(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&Vo(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hw(n,e,t){const r=C(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new x(E.comparator);o=o.insert(s,te.newNoDocument(s,k.min()));const a=b().add(s),c=new mi(k.min(),new Map,new x(D),o,a);await Nh(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),$o(r)}else await As(r.localStore,e,!1).then(()=>Cs(r,e,t)).catch(Wn)}async function Kw(n,e){const t=C(n),r=e.batch.batchId;try{const i=await aw(t.localStore,e);Ph(t,r,null),Dh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zn(t,i)}catch(i){await Wn(i)}}async function Gw(n,e,t){const r=C(n);try{const i=await function(s,o){const a=C(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(M(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);Ph(r,e,t),Dh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zn(r,i)}catch(i){await Wn(i)}}function Dh(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function Ph(n,e,t){const r=C(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Cs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||Oh(n,r)})}function Oh(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(wh(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),$o(n))}function wc(n,e,t){for(const r of t)r instanceof bh?(n.Ic.addReference(r.key,e),Ww(n,r)):r instanceof Rh?(v("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||Oh(n,r.key)):T()}function Ww(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(v("SyncEngine","New document in limbo: "+t),n.mc.add(r),$o(n))}function $o(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new E(L.fromString(e)),r=n.Ac.next();n.yc.set(r,new Vw(t)),n.gc=n.gc.insert(t,r),vh(n.remoteStore,new ze(xe(So(t.path)),r,"TargetPurposeLimboResolution",vo.ct))}}async function Zn(n,e,t){const r=C(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Oo.Li(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const u=C(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>g.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Qn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),p=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,w)}}}(r.localStore,s))}async function Qw(n,e){const t=C(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const r=await ph(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zn(t,r.er)}}function Yw(n,e){const t=C(n),r=t.yc.get(e);if(r&&r.fc)return b().add(r.key);{let i=b();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function Xw(n){const e=C(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hw.bind(null,e),e.dc.nu=Mw.bind(null,e.eventManager),e.dc.Pc=xw.bind(null,e.eventManager),e}function Jw(n){const e=C(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gw.bind(null,e),e}class Ec{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return ow(this.persistence,new iw,e.initialUser,this.serializer)}createPersistence(e){return new nw(Po.zs,this.serializer)}createSharedClientState(e){return new fw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qw.bind(null,this.syncEngine),await Pw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Lw}createDatastore(e){const t=yi(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new yw(i));var i;return function(s,o,a,c){return new Ew(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>vc(this.syncEngine,a,0),o=gc.D()?new gc:new pw,new Iw(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new $w(r,i,s,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=C(e);v("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Jn(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Me("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ee.UNAUTHENTICATED,this.clientId=Ll.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{v("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(v("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Uo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gi(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ph(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function _c(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nE(n);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>mc(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>mc(e.remoteStore,s)),n._onlineComponents=e}function tE(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function nE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!tE(t))throw t;Mt("Error using user provided cache. Falling back to memory cache: "+t),await Gi(n,new Ec)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await Gi(n,new Ec);return n._offlineComponents}async function Mh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await _c(n,n._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await _c(n,new Zw))),n._onlineComponents}function rE(n){return Mh(n).then(e=>e.syncEngine)}async function xh(n){const e=await Mh(n),t=e.eventManager;return t.onListen=Bw.bind(null,e.syncEngine),t.onUnlisten=jw.bind(null,e.syncEngine),t}function iE(n,e,t={}){const r=new Ne;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Lh({next:h=>{s.enqueueAndForget(()=>Ah(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ch(So(o.path),u,{includeMetadataChanges:!0,Ku:!0});return kh(i,l)}(await xh(n),n.asyncQueue,e,t,r)),r.promise}function sE(n,e,t={}){const r=new Ne;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Lh({next:h=>{s.enqueueAndForget(()=>Ah(i,l)),h.fromCache&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ch(o,u,{includeMetadataChanges:!0,Ku:!0});return kh(i,l)}(await xh(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n,e,t){if(!t)throw new y(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oE(n,e,t,r){if(e===!0&&r===!0)throw new y(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tc(n){if(!E.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sc(n){if(E.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ei(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function Bt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ei(n);throw new y(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function aE(n,e){if(e<=0)throw new y(f.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class _i{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kc(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Ry;switch(t.type){case"firstParty":return new Oy(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ic.get(e);t&&(v("ComponentProvider","Removing Datastore"),Ic.delete(e),t.terminate())}(this),Promise.resolve()}}function cE(n,e,t,r={}){var i;const s=(n=Bt(n,_i))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Mt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ee.MOCK_USER;else{a=ud(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ee(u)}n._authCredentials=new Ny(new Ol(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}}class nt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nt(this.firestore,e,this._query)}}class Ge extends nt{constructor(e,t,r){super(e,t,So(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new E(e))}withConverter(e){return new Ge(this.firestore,e,this._path)}}function uE(n,e,...t){if(n=J(n),Uh("collection","path",e),n instanceof _i){const r=L.fromString(e,...t);return Sc(r),new Ge(n,null,r)}{if(!(n instanceof fe||n instanceof Ge))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return Sc(r),new Ge(n.firestore,null,r)}}function lE(n,e,...t){if(n=J(n),arguments.length===1&&(e=Ll.A()),Uh("doc","path",e),n instanceof _i){const r=L.fromString(e,...t);return Tc(r),new fe(n,null,new E(r))}{if(!(n instanceof fe||n instanceof Ge))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return Tc(r),new fe(n.firestore,n instanceof Ge?n.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new mh(this,"async_queue_retry"),this.Xc=()=>{const t=Ki();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Ki();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Ki();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new Ne;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Qn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Me("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=Fo.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&T()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class Ii extends _i{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new hE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vh(this),this._firestoreClient.terminate()}}function dE(n,e){const t=typeof n=="object"?n:Ls(),r=typeof n=="string"?n:e||"(default)",i=On(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cd("firestore");s&&cE(i,...s)}return i}function Ti(n){return n._firestoreClient||Vh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Vh(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,u){return new Hy(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Fh(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new eE(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(ae.fromBase64String(e))}catch(t){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qt(ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=/^__.*__$/;class pE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new tt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yn(e,this.data,t,this.fieldTransforms)}}class $h{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new tt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Bh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class qo{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new qo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return jr(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Bh(this.ca)&&fE.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class gE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||yi(e)}ya(e,t,r,i=!1){return new qo({ca:e,methodName:t,ga:r,path:ne.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qh(n){const e=n._freezeSettings(),t=yi(n._databaseId);return new gE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mE(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);jo("Data must be an object, but it was:",o,r);const a=jh(r,o);let c,u;if(s.merge)c=new de(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=bs(e,h,t);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Hh(l,d)||l.push(d)}c=new de(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new pE(new ue(a),c,u)}class Ai extends ki{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ai}}class yE extends ki{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Dn(e.serializer,Jl(e.serializer,this.Ia));return new fv(e.path,t)}isEqual(e){return this===e}}function vE(n,e,t,r){const i=n.ya(1,e,t);jo("Data must be an object, but it was:",i,r);const s=[],o=ue.empty();vt(r,(c,u)=>{const l=zo(e,c,t);u=J(u);const h=i.da(l);if(u instanceof Ai)s.push(l);else{const d=er(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new de(s);return new $h(o,a,i.fieldTransforms)}function wE(n,e,t,r,i,s){const o=n.ya(1,e,t),a=[bs(e,r,t)],c=[i];if(s.length%2!=0)throw new y(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(bs(e,s[d])),c.push(s[d+1]);const u=[],l=ue.empty();for(let d=a.length-1;d>=0;--d)if(!Hh(u,a[d])){const p=a[d];let w=c[d];w=J(w);const _=o.da(p);if(w instanceof Ai)u.push(p);else{const I=er(w,_);I!=null&&(u.push(p),l.set(p,I))}}const h=new de(u);return new $h(l,h,o.fieldTransforms)}function EE(n,e,t,r=!1){return er(t,n.ya(r?4:3,e))}function er(n,e){if(zh(n=J(n)))return jo("Unsupported field value:",e,n),jh(n,e);if(n instanceof ki)return function(t,r){if(!Bh(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=er(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=J(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Jl(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=z.fromDate(t);return{timestampValue:Br(r.serializer,i)}}if(t instanceof z){const i=new z(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Br(r.serializer,i)}}if(t instanceof Bo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof qt)return{bytesValue:ch(r.serializer,t._byteString)};if(t instanceof fe){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:No(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${Ei(t)}`)}(n,e)}function jh(n,e){const t={};return Ml(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vt(n,(r,i)=>{const s=er(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function zh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof z||n instanceof Bo||n instanceof qt||n instanceof fe||n instanceof ki)}function jo(n,e,t){if(!zh(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Ei(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function bs(n,e,t){if((e=J(e))instanceof Si)return e._internalPath;if(typeof e=="string")return zo(n,e);throw jr("Field path arguments must be of type string or ",n,!1,void 0,t)}const _E=new RegExp("[~\\*/\\[\\]]");function zo(n,e,t){if(e.search(_E)>=0)throw jr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Si(...e.split("."))._internalPath}catch{throw jr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function jr(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(f.INVALID_ARGUMENT,a+n+c)}function Hh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ho("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IE extends Kh{data(){return super.data()}}function Ho(n,e){return typeof e=="string"?zo(n,e):e instanceof Si?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ko{}class Go extends Ko{}function SE(n,e,...t){let r=[];e instanceof Ko&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Qo).length,o=i.filter(a=>a instanceof Wo).length;if(s>1||s>0&&o>0)throw new y(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Wo extends Go{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Wo(e,t,r)}_apply(e){const t=this._parse(e);return Gh(e._query,t),new nt(e.firestore,e.converter,Es(e._query,t))}_parse(e){const t=qh(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Cc(l,u);const d=[];for(const p of l)d.push(Ac(a,i,p));h={arrayValue:{values:d}}}else h=Ac(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Cc(l,u),h=EE(o,s,l,u==="in"||u==="not-in");return q.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Qo extends Ko{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ve.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Gh(s,a),s=Es(s,a)}(e._query,t),new nt(e.firestore,e.converter,Es(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yo extends Go{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yo(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Dt(i,s);return function(a,c){if(ko(a)===null){const u=hi(a);u!==null&&Wh(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new nt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Wt(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function kE(n,e="asc"){const t=e,r=Ho("orderBy",n);return Yo._create(r,t)}class Xo extends Go{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Xo(e,t,r)}_apply(e){return new nt(e.firestore,e.converter,Vr(e._query,this._limit,this._limitType))}}function AE(n){return aE("limit",n),Xo._create("limit",n,"F")}function Ac(n,e,t){if(typeof(t=J(t))=="string"){if(t==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zl(e)&&t.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(L.fromString(t));if(!E.isDocumentKey(r))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ya(n,new E(r))}if(t instanceof fe)return Ya(n,t._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ei(t)}.`)}function Cc(n,e){if(!Array.isArray(n)||n.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gh(n,e){if(e.isInequality()){const r=hi(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ko(n);s!==null&&Wh(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Wh(n,e,t){if(!t.isEqual(e))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class CE{convertValue(e,t="none"){switch(mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return B(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return vt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Bo(B(e.latitude),B(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Eo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(An(e));default:return null}}convertTimestamp(e){const t=Xe(e);return new z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=L.fromString(e);M(fh(r));const i=new Cn(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(t)||Me(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qh extends Kh{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ho("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Er extends Qh{data(e={}){return super.data(e)}}class RE{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new sn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Er(this._firestore,this._userDataWriter,r.key,r,new sn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Er(r._firestore,r._userDataWriter,o.doc.key,o.doc,new sn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Er(r._firestore,r._userDataWriter,o.doc.key,o.doc,new sn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:NE(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function NE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n){n=Bt(n,fe);const e=Bt(n.firestore,Ii);return iE(Ti(e),n._key).then(t=>LE(e,n,t))}class Yh extends CE{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fe(this.firestore,null,t)}}function PE(n){n=Bt(n,nt);const e=Bt(n.firestore,Ii),t=Ti(e),r=new Yh(e);return TE(n._query),sE(t,n._query).then(i=>new RE(e,r,n,i))}function OE(n,e){return function(t,r){const i=new Ne;return t.asyncQueue.enqueueAndForget(async()=>zw(await rE(t),r,i)),i.promise}(Ti(n),e)}function LE(n,e,t){const r=t.docs.get(e._key),i=new Yh(n);return new Qh(n,i,e._key,r,new sn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=qh(e)}set(e,t,r){this._verifyNotCommitted();const i=Wi(e,this._firestore),s=bE(i.converter,t,r),o=mE(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,me.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Wi(e,this._firestore);let o;return o=typeof(t=J(t))=="string"||t instanceof Si?wE(this._dataReader,"WriteBatch.update",s._key,t,r,i):vE(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,me.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Wi(e,this._firestore);return this._mutations=this._mutations.concat(new Ao(t._key,me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(f.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wi(n,e){if((n=J(n)).firestore!==e)throw new y(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function xE(n){return new yE("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n){return Ti(n=Bt(n,Ii)),new ME(n,e=>OE(n,e))}(function(n,e=!0){(function(t){Gt=t})(zt),We(new De("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new Ii(new Dy(t.getProvider("auth-internal")),new My(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cn(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Re(Ha,"3.13.0",n),Re(Ha,"3.13.0","esm2017")})();const UE={apiKey:"AIzaSyCPFHnutWJg_oDDKR9DyDPzEm-DXWdhmxo",authDomain:"screencompare.firebaseapp.com",databaseURL:"https://screencompare-default-rtdb.europe-west1.firebasedatabase.app",projectId:"screencompare",storageBucket:"screencompare.appspot.com",messagingSenderId:"1080235317181",appId:"1:1080235317181:web:1a2d8a776d69b3787064d4"},VE=Fc(UE);yp(VE,{provider:new Vs("6LfaM8cmAAAAAHCYzmLi9C0NYRUXt46rphpZYWRq"),isTokenAutoRefreshEnabled:!0});const Rs=dE(),$E=_m(),BE=async(n,e,t)=>{if(!navigator.onLine){console.log("addToDatabase - No internet connection.");return}const r=FE(Rs),i=`${n}_${e}_${t}`,s=lE(Rs,"formResponses",i);(await DE(s)).exists()?r.update(s,{count:xE(1)}):r.set(s,{screenSize:n,xAspectRatio:e,yAspectRatio:t,count:1}),await r.commit()},Xh=async()=>{if(!navigator.onLine){console.log("getTopScreens - No internet connection.");return}const n=SE(uE(Rs,"formResponses"),kE("count","desc"),AE(5));try{const e=await PE(n),t=document.querySelectorAll(".common-screens-dialog__column:first-child li span"),r=e.docs;t.forEach((i,s)=>{if(r[s]){const o=r[s],a=document.createTextNode(o.data().screenSize+"'"),c=document.createTextNode(`${o.data().xAspectRatio}:${o.data().yAspectRatio}`),u=document.createElement("pre");for(u.textContent="	 ";i.firstChild;)i.firstChild.remove();i.appendChild(a),i.appendChild(u),i.appendChild(c)}})}catch(e){console.error("Error fetching documents: ",e)}};ig($E).then(()=>{Xh()}).catch(n=>{const e=n.code,t=n.message;console.error(`Error code: ${e}, message: ${t}`)});console.log.bind(document);class qE{constructor(){this.detailsUnitSwitch=document.querySelector(".text-units-switch"),this.unitsDivider=0,this.switchUnits="",this.fractionDigits=0,this.diagonals=[],this.units=[],this.ratios=[],this.resolutions=[],this.ppis=[],this.sides=[],this.screenBox=document.querySelector(".visualization-box"),this.media1000=window.matchMedia("(max-width: 1000px)"),this.detailsUnitSwitch.addEventListener("change",this.onTableUnitsChange.bind(this))}handleUnitsValues(){this.detailsUnitSwitch.checked?(this.unitsDivider=1,this.switchUnits="cm",this.fractionDigits=1):(this.unitsDivider=2.54,this.switchUnits="in",this.fractionDigits=2)}handleDiagonalsAndUnits(){this.diagonals=Array.from(document.querySelectorAll(".size-input[required]")).map(e=>Number(e.value.replace(/,/g,"."))),this.units=Array.from(document.querySelectorAll(".units-label")).map(e=>e.textContent),this.units.forEach((e,t)=>{e==="in"&&this.diagonals[t]>0&&(this.diagonals[t]=this.diagonals[t]*2.54)})}handleRatios(){this.ratios=Array.from(document.querySelectorAll(".ratio-input[required]")).map(e=>Number(e.value.replace(/,/g,".")))}handleResolutions(){this.resolutions=Array.from(document.querySelectorAll(".res-input")).map(e=>Number(e.value.replace(/,/g,".")))}calculatePpis(){for(let e=0;e<=2;e++)if(this.resolutions[e*2]!==0&&this.resolutions[e*2+1]!==0){const t=Math.round(Number(Math.sqrt(this.resolutions[e*2]**2+this.resolutions[e*2+1]**2)));this.ppis=[...this.ppis,Number(Math.round(t/(this.diagonals[e]/this.unitsDivider)))]}else this.ppis=[...this.ppis,""]}calculateSides(){this.sides=[],this.diagonals.forEach((e,t)=>{const r=this.ratios[t*2],i=this.ratios[t*2+1],s=e*i/Math.sqrt(r**2+i**2),o=r/i*s;this.sides.push(o),this.sides.push(s)})}calculateProportions(){const e=document.querySelectorAll(".visualization");let t=getComputedStyle(document.querySelector(".visualization-box")).width;t=Number(t.slice(0,t.length-2));let r=getComputedStyle(document.querySelector(".visualization-box")).height;r=Number(r.slice(0,r.length-2));let i=0;this.sides.forEach((s,o)=>{(o+1)%2===1&&i<s/t&&(i=s/t),(o+1)%2===0&&i<s/r&&(i=s/r)}),e.forEach((s,o)=>{s.setAttribute("style",`
          width: ${this.sides[o*2]/i}px; 
          height: ${this.sides[o*2+1]/i}px;
        `)})}handleGuides(){const e=document.querySelectorAll(".diagonal");this.diagonals.forEach((l,h)=>{e[h].textContent=`${Number((l/this.unitsDivider).toFixed(this.fractionDigits))} ${this.switchUnits}`;const d=Math.atan(this.ratios[h*2+1]/this.ratios[h*2])*(180/Math.PI);e[h].setAttribute("style",`transform: rotate(-${d}deg)`),e[h].style.setProperty("--after-width",`${e[h].textContent.length-1}em`)});const t=[...document.querySelectorAll(".visualization")].sort((l,h)=>{const d=Number(l.children[0].textContent.slice(0,l.children[0].textContent.length-3));return Number(h.children[0].textContent.slice(0,h.children[0].textContent.length-3))-d});t.forEach((l,h)=>{l.style.zIndex=(h+1).toString();let d=2;l.classList.contains("hidden")&&(t.splice(h,1),d=1);let p=l.children[0].style.transform;l.children[0].style.transform=`${p} translate(${-h*2.5+d}em)`,p=l.children[0].style.transform,Number(l.style.width.slice(0,-2))<=150&&(l.children[0].style.transform=p.slice(0,-15))});const r=document.querySelector(".guides-wrapper--bottom"),i=document.querySelector(".guides-wrapper--left");for(;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)i.removeChild(i.firstChild);this.sides.forEach((l,h)=>{let d;(h+1)%2===1?d="bottom":d="left";const p=t[Math.floor(h/2)],w=p.className.slice(p.className.length-1,p.className.length)-1,_=document.createElement("p");_.className=`guides guides--${d} guides--${d}--${w+1}`;const I=`${Number((this.sides[w*2+h%2]/this.unitsDivider).toFixed(this.fractionDigits))} ${this.switchUnits}`;_.textContent=I.toString(),d==="bottom"&&r.appendChild(_),d==="left"&&i.appendChild(_)});const s=[...e].sort((l,h)=>Number(h.textContent.slice(0,h.textContent.length-3))-Number(l.textContent.slice(0,l.textContent.length-3)));e.forEach(l=>{l.classList.remove("dashed","dotted")});let o=[];s.forEach((l,h)=>{const d=Number(getComputedStyle(s[h]).transform.slice(7,getComputedStyle(s[h]).transform.length-1).split(", ")[0]);o=[...o,d],h!==0&&(o[h]===o[h-1]||o[h]===o[h-2])&&(s[h-1].classList.contains("dashed")?l.classList.add("dotted"):l.classList.add("dashed"))});const a=document.querySelectorAll(".visualization");let c=0,u=0;a.forEach(l=>{l.offsetHeight>c&&(c=l.offsetHeight),l.offsetWidth>u&&(u=l.offsetWidth)}),r.style.width=`${u}px`,i.style.height=`${c}px`}centerVisualisations(){const e=document.querySelectorAll(".visualization");let t=0,r=0;e.forEach(i=>{i.offsetHeight>t&&(t=i.offsetHeight),i.offsetWidth>r&&(r=i.offsetWidth)}),this.screenBox.setAttribute("style",`
      width: ${r}px;
      height: ${t}px;
      `)}resizeBox(){const e=document.querySelector(".screen-results__visualizations"),t=getComputedStyle(this.screenBox).height;e.style.height=`calc(${t} + 6em`}handleThirdScreenElement(){const e=document.querySelector(".visualization--3");this.diagonals.length===2?e.classList.add("hidden"):e.classList.remove("hidden")}handleResultsTable(){const e=document.querySelectorAll(".values__row");[...e[0].children].forEach((r,i)=>{r.textContent=`${Number((this.sides[i*2]/this.unitsDivider).toFixed(2))} ${this.switchUnits}`}),[...e[1].children].forEach((r,i)=>{r.textContent=`${Number((this.sides[i*2+1]/this.unitsDivider).toFixed(2))} ${this.switchUnits}`}),[...e[2].children].forEach((r,i)=>{r.textContent=`${Number((this.diagonals[i]/this.unitsDivider).toFixed(2))} ${this.switchUnits}`}),[...e[3].children].forEach((r,i)=>{r.textContent=`${Number((this.sides[i*2]/this.unitsDivider*(this.sides[i*2+1]/this.unitsDivider)).toFixed(2))} ${this.switchUnits}²`}),(()=>{const r=document.querySelector(".ppi-guide");[...e[4].children].forEach((i,s)=>{this.resolutions[s*2]===0||this.resolutions[s*2+1]===0?(i.style.opacity="0",i.textContent=""):(i.style.opacity="1",i.textContent=this.ppis[s].toString())}),[...e[4].children].every(i=>i.style.opacity==="0")?(e[4].style.display="none",r.style.display="none",r.style.opacity="0"):(e[4].style.display="grid",r.style.display="block",r.style.opacity="1")})()}handlePpiValidationColors(){const e={mobile:17.526,tablet:28.194};this.diagonals.forEach((t,r)=>{const i={mobile:{green:400,darkgoldenrod:300,brown:0},tablet:{green:200,darkgoldenrod:150,brown:0},desktop:{green:150,darkgoldenrod:100,brown:0}};function s(l){return l<=e.mobile?"mobile":l<=e.tablet?"tablet":"desktop"}function o(l,h){const d=i[h];for(let p in d)if(l>=d[p])return p}const a=s(t),c=o(this.ppis[r],a);document.querySelectorAll(".row__value.ppi")[r].style.setProperty("--validation-color",c)})}saveFormData(){const t=!document.querySelector(".screen--inactive")?3:2;for(let r=0;r<t;r++){const i=this.diagonals[r]/2.54,s=this.ratios[r*2],o=this.ratios[r*2+1];BE(i,s,o)}}async onTableUnitsChange(){await Promise.resolve(this.handleUnitsValues()),this.calculate(),this.handleResultsTable(),this.handlePpiValidationColors()}async calculate(){this.calculatePpis(),await Promise.resolve(this.calculateSides()),await Promise.resolve(this.calculateProportions()),await Promise.resolve(this.handleGuides()),await Promise.resolve(this.centerVisualisations()),this.media1000.matches&&this.resizeBox()}async handleComparison(){await Promise.resolve(this.handleUnitsValues()),this.handleDiagonalsAndUnits(),this.handleRatios(),this.handleResolutions(),this.calculate(),this.handleThirdScreenElement(),this.handleResultsTable(),this.handlePpiValidationColors(),this.saveFormData()}}const jE=console.log.bind(document),Jh=n=>{n.addEventListener("keydown",e=>{e.key==="Escape"&&e.target.blur()})},zE=()=>{const n=document.querySelector(".switch-mode");document.body.classList.contains("light-mode")?(n.src="assets/icons/Icons/light-mode.svg",document.cookie.includes("cookiesAccepted=true")&&(document.cookie="lightMode=false; max-age=31536000;")):(n.src="assets/icons/Icons/dark-mode.svg",document.cookie.includes("cookiesAccepted=true")&&(document.cookie="lightMode=true; max-age=31536000;")),document.body.classList.toggle("light-mode")},HE=()=>{const n=document.querySelector(".copyright"),e=new Date().getFullYear().toString();n.textContent=`ScreenCompare © ${e}`},KE=()=>{setInterval(()=>{navigator.onLine||jE("No Internet Connection")},5e3)},GE=n=>Array.from(document.getElementsByTagName("script")).some(e=>e.src===n),bc=n=>{if(!GE(n)){let e=document.createElement("script");e.src=n,document.body.appendChild(e)}};class WE{constructor(){this.cookieConsent=document.querySelector(".cookie-consent"),this.cookieConsentButtonAccept=document.querySelector(".cookie-consent__button--accept"),this.cookieConsentButtonReject=document.querySelector(".cookie-consent__button--reject"),this.cookieConsentBackdrop=document.querySelector(".cookie-consent-backdrop")}handleCookieConsent(){document.cookie.includes("cookiesAccepted")?document.cookie.includes("cookiesAccepted=true")&&bc("/js/third-party/hotjar.js"):(this.cookieConsentBackdrop.classList.remove("invisible"),this.cookieConsent.classList.remove("invisible"),this.cookieConsentButtonAccept.addEventListener("click",()=>{this.acceptCookies()}),this.cookieConsentButtonReject.addEventListener("click",()=>{this.rejectCookies()}))}acceptCookies(){document.cookie="cookiesAccepted=true; max-age=31536000;",this.cookieConsentBackdrop.classList.add("invisible"),this.cookieConsent.classList.add("invisible"),bc("/js/third-party/hotjar.js")}rejectCookies(){document.cookie.includes("cookiesAccepted=true")&&this.clearCookies(),document.cookie="cookiesAccepted=false; max-age=31536000;",this.cookieConsentBackdrop.classList.add("invisible"),this.cookieConsent.classList.add("invisible")}clearCookies(){document.cookie.split(";").forEach(e=>{const t=e.indexOf("="),r=t>-1?e.substr(0,t):e;document.cookie=`${r}=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`})}}class QE{constructor(){this.kofi=document.createElement("iframe"),this.kofiBackdrop=document.querySelector(".kofi-backdrop"),this.kofiWrapper=document.querySelector(".kofi-wrapper"),this.kofiButton=document.querySelector(".ko-fi")}handleKofiClicks(){this.kofiButton.addEventListener("click",()=>{getComputedStyle(this.kofiBackdrop).opacity==="0"&&this.openKofi(),getComputedStyle(this.kofiBackdrop).opacity==="1"&&this.closeKofi()}),this.kofiBackdrop.addEventListener("click",()=>{this.closeKofi()})}openKofi(){this.kofiBackdrop.classList.remove("invisible"),this.kofiBackdrop.style.opacity="1",this.kofiWrapper.style.translate="0"}closeKofi(){this.kofiWrapper.style.translate="120% 0",this.kofiBackdrop.style.opacity="0",setTimeout(()=>{this.kofiBackdrop.classList.add("invisible")},200)}appendKofi(){var e;this.kofi.setAttribute("height","712"),this.kofi.setAttribute("id","kofiframe"),this.kofi.setAttribute("src","https://ko-fi.com/rogalaharacz/?hidefeed=true&widget=true&embed=true&preview=true"),this.kofi.setAttribute("style","border: none; width: 100%; padding: 0; background: #f9f9f9"),this.kofi.setAttribute("title","Hubert Ko-fi"),console.warn("Console might display KO-FI ERRORS"),(e=this.kofiWrapper)==null||e.appendChild(this.kofi),this.handleKofiClicks()}}console.log.bind(document);const YE=document.querySelectorAll("header *");YE.forEach(n=>{Jh(n)});const XE=()=>{const n=document.querySelectorAll(".screen")[2],e=n.getElementsByTagName("*");n.classList.contains("screen--inactive")?[...e].forEach(t=>{t.tabIndex=-1}):[...e].forEach(t=>{t.removeAttribute("tabindex")})};window.addEventListener("keydown",n=>{n.key==="Tab"&&XE()});const JE=document.querySelectorAll(".name-edit"),ZE=n=>{const e=n.target.closest(".screen-name").querySelector(".name");e.hasAttribute("readonly")?(e.removeAttribute("readonly"),e.select()):e.setAttribute("readonly","")};JE.forEach(n=>{n.addEventListener("click",e=>ZE(e))});const _r=document.querySelectorAll(".name"),e0=n=>{n.target.value.length<=20&&n.target.value.length>=1&&(n.target.size=n.target.value.length)},Jo=document.querySelectorAll(".ref-screen"),Zh=(n,e)=>{_r[e].value===""?n.textContent=`Display ${e+1}`:(n.textContent=_r[e].value.slice(0,7),_r[e].value.length>7&&(n.textContent=`${n.textContent}...`))},t0=n=>{n.target.hasAttribute("readonly")&&(n.key==="Enter"||n.keyCode>47&&n.keyCode<58||n.keyCode>64&&n.keyCode<91||n.keyCode>96&&n.keyCode<123)?n.target.removeAttribute("readonly"):n.key==="Enter"&&(n.target.setAttribute("readonly",""),n.target.blur()),Jo.forEach((e,t)=>{Zh(e,t)})},n0=n=>{n.relatedTarget&&n.relatedTarget.id==="edit-name-button"||(n.target.setAttribute("readonly",""),n.target.blur())};_r.forEach(n=>{n.addEventListener("input",e=>e0(e)),n.addEventListener("keydown",e=>t0(e)),n.addEventListener("focusout",e=>n0(e))});const r0=document.querySelectorAll(".units-switch"),ed=n=>{const e=document.querySelector(`label[for=${n.target.id}].units-label`);e&&(e.textContent=n.target.checked?"cm":"in")};r0.forEach(n=>{n.addEventListener("change",e=>ed(e))});const i0=document.querySelector(".btn-add"),s0=document.querySelector(".btn-remove--last-form"),o0=()=>{document.querySelectorAll(".screen").item(2).classList.remove("screen--inactive"),document.querySelector(".screen-forms").classList.remove("screen-forms--double"),document.querySelector(".btn-add").classList.add("color-transparent"),document.getElementById("size-3").setAttribute("required",""),document.getElementById("units-3").setAttribute("required",""),document.getElementById("ratio-w-3").setAttribute("required",""),document.getElementById("ratio-h-3").setAttribute("required",""),setTimeout(()=>{document.querySelector(".btn-add").classList.add("invisible")},150)},a0=()=>{document.querySelectorAll(".screen").item(2).classList.add("screen--inactive"),document.querySelector(".screen-forms").classList.add("screen-forms--double"),document.querySelector(".btn-add").classList.remove("invisible"),document.querySelector(".btn-add").classList.remove("color-transparent"),document.getElementById("screen-form-3").reset(),document.getElementById("size-3").removeAttribute("required"),document.getElementById("units-3").removeAttribute("required"),document.getElementById("ratio-w-3").removeAttribute("required"),document.getElementById("ratio-h-3").removeAttribute("required")};i0.addEventListener("click",()=>o0());s0.addEventListener("click",()=>a0());const c0=document.querySelectorAll("input[type=number]");c0.forEach(n=>{n.addEventListener("input",e=>{let t;e.target.classList.contains("res-input")?t=/^\d{1,5}\.\d{0,2}$|^\d{1,5}$/g.test(e.target.value):t=/^\d{1,3}\.\d{0,2}$|^\d{1,3}$/g.test(e.target.value),t||(e.target.value=e.target.value.slice(0,-1))})});const u0=()=>{const n=document.querySelector(".screen-results"),e=new MutationObserver(t=>{t.forEach(r=>{r.target.classList.contains("invisible")||(document.querySelector(".screen-results").classList.remove("transparent"),e.disconnect())})});e.observe(n,{attributes:!0,attributeFilter:["class"]}),n.classList.remove("invisible"),document.querySelector(".screen-forms").classList.remove("screen-forms--double"),document.querySelector(".btn-wrapper").style.translate="0",document.querySelectorAll(".screen").item(2).classList.remove("screen--last")},l0=()=>{const n=document.querySelectorAll(".screen")[2],e=document.querySelector(".top__ref-screen-bar"),t=document.querySelectorAll(".values__row");n.classList.contains("screen--inactive")?(e.style.setProperty("--tab-width","50%"),e.children[2].style.display="none",t.forEach(r=>{r.children[2].style.display="none",r.style.gridTemplateColumns="repeat(2, 1fr)"})):(e.style.setProperty("--tab-width","33.33%"),e.children[2].style.display="block",t.forEach(r=>{r.children[2].style.display="block",r.style.gridTemplateColumns="repeat(3, 1fr)"}))},h0=new qE,d0=()=>{(()=>{document.querySelectorAll("input[required]").forEach(r=>{r.value===""&&(r.value=r.placeholder)});const t=document.querySelectorAll(".res-input");t.forEach((r,i)=>{r.value!==""&&(r.classList.remove("field-error"),i%2?t[i-1].value===""&&t[i-1].classList.add("field-error"):t[i+1].value===""&&t[i+1].classList.add("field-error"))})})(),h0.handleComparison(),u0(),l0()},f0=(n,e)=>{document.querySelector(".top__ref-screen-bar").style.setProperty("--screen-index",e.toString()),[...n.target.parentElement.children].forEach(r=>{r.style.fontWeight="400"}),n.target.style.fontWeight="600"},p0=(n,e)=>{document.querySelectorAll(".values__row").forEach(r=>{[...r.children].forEach((i,s)=>{const o=parseFloat(i.textContent),a=parseFloat(r.children[e].textContent);let c=o/a;c=Math.round(c*100);const u=isNaN(c)?'"—"':`"(${c}%)"`;i.style.setProperty("--value-reference",u)})})};Jo.forEach((n,e)=>{Zh(n,e),n.addEventListener("click",t=>{const r=Number(t.target.id.slice(11)-1);f0(t,r),p0(t,r)})});const g0=document.querySelector(".common-screens-btn"),m0=document.querySelector(".btn-remove--common-screens"),ht=document.querySelector(".common-screens-dialog");g0.addEventListener("click",()=>{ht.hasAttribute("open")?ht.close():ht.showModal()});m0.addEventListener("click",()=>{ht.close()});ht.addEventListener("click",n=>{const e=ht.getBoundingClientRect();e.top<=n.clientY&&n.clientY<=e.top+e.height&&e.left<=n.clientX&&n.clientX<=e.left+e.width||ht.close()});const Zo=document.querySelector(".btn-main--compare"),y0=document.querySelector(".btn-reset"),v0=document.querySelectorAll(".screen-form"),w0=document.querySelectorAll(".screen-forms input:not([type='checkbox'])"),E0=document.querySelectorAll(".screen-forms input[type='checkbox']"),_0=()=>{v0.forEach(n=>{n.reset()})};y0.addEventListener("click",()=>{_0()});Zo.addEventListener("click",()=>{d0(),Jo[0].click(),Xh(),document.getElementById("screen-results").scrollIntoView({behavior:"smooth"})});w0.forEach(n=>{n.addEventListener("keypress",e=>{!n.classList.contains("name")&&e.key==="Enter"&&(e.target.blur(),Zo.click())}),n.addEventListener("focus",e=>{e.target.select()}),Jh(n)});E0.forEach(n=>{n.addEventListener("click",e=>{e.target.parentNode.childNodes.forEach(t=>{e.clientX!==0&&t.nodeName==="INPUT"&&t.blur()})}),n.addEventListener("keydown",e=>{e.key==="Escape"&&e.target.parentNode.childNodes.forEach(t=>{t.nodeName==="INPUT"&&t.blur()}),e.key==="Enter"&&[...e.target.parentNode.children].forEach(t=>{t.hasAttribute("type")&&t.getAttribute("type")==="checkbox"&&(t.checked=!t.checked,ed(e))})})});const I0=document.querySelector(".switch-mode");I0.addEventListener("click",()=>{zE()});window.addEventListener("load",()=>{new WE().handleCookieConsent(),HE(),new QE().appendKofi(),KE(),Zo.click()});
