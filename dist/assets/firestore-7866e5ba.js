/**
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
 */const stringToByteArray$1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},byteArrayToString=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],c=t[n++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,c=a?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,d=o>>2,f=(o&3)<<4|c>>4;let g=(c&15)<<2|h>>6,m=h&63;u||(m=64,a||(g=64)),i.push(n[d],n[f],n[g],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(stringToByteArray$1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):byteArrayToString(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||h==null||f==null)throw new DecodeBase64StringError;const g=o<<2|c>>4;if(i.push(g),h!==64){const m=c<<4&240|h>>2;if(i.push(m),f!==64){const _=h<<6&192|f;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const base64Encode=function(t){const e=stringToByteArray$1(t);return base64.encodeByteArray(e,!0)},base64urlEncodeWithoutPadding=function(t){return base64Encode(t).replace(/\./g,"")},base64Decode=function(t){try{return base64.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function getGlobal(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const getDefaultsFromGlobal=()=>getGlobal().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},getDefaultsFromCookie=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&base64Decode(t[1]);return e&&JSON.parse(e)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},getDefaultEmulatorHost=t=>{var e,n;return(n=(e=getDefaults())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},getDefaultEmulatorHostnameAndPort=t=>{const e=getDefaultEmulatorHost(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},getDefaultAppConfig=()=>{var t;return(t=getDefaults())===null||t===void 0?void 0:t.config},getExperimentalSetting=t=>{var e;return(e=getDefaults())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function createMockUserToken(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[base64urlEncodeWithoutPadding(JSON.stringify(n)),base64urlEncodeWithoutPadding(JSON.stringify(a)),c].join(".")}/**
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
 */function getUA(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function isMobileCordova(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isBrowserExtension(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function isReactNative(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function isIE(){const t=getUA();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function isIndexedDBAvailable(){try{return typeof indexedDB=="object"}catch{return!1}}function validateIndexedDBOpenable(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const ERROR_NAME="FirebaseError";class FirebaseError extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ERROR_NAME,Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}}class ErrorFactory{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?replaceTemplate(o,i):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new FirebaseError(s,c,i)}}function replaceTemplate(t,e){return t.replace(PATTERN,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const PATTERN=/\{\$([^}]+)}/g;function isEmpty(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function deepEqual(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],a=e[s];if(isObject(o)&&isObject(a)){if(!deepEqual(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function isObject(t){return t!==null&&typeof t=="object"}/**
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
 */function querystring(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function createSubscribe(t,e){const n=new ObserverProxy(t,e);return n.subscribe.bind(n)}class ObserverProxy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");implementsAnyMethods(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=noop),s.error===void 0&&(s.error=noop),s.complete===void 0&&(s.complete=noop);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function implementsAnyMethods(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function noop(){}/**
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
 */const uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
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
 */const DEFAULT_INTERVAL_MILLIS=1e3,DEFAULT_BACKOFF_FACTOR=2,MAX_VALUE_MILLIS=4*60*60*1e3,RANDOM_FACTOR=.5;function calculateBackoffMillis(t,e=DEFAULT_INTERVAL_MILLIS,n=DEFAULT_BACKOFF_FACTOR){const i=e*Math.pow(n,t),s=Math.round(RANDOM_FACTOR*i*(Math.random()-.5)*2);return Math.min(MAX_VALUE_MILLIS,i+s)}/**
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
 */function getModularInstance(t){return t&&t._delegate?t._delegate:t}class Component{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const DEFAULT_ENTRY_NAME$1="[DEFAULT]";/**
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
 */class Provider{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Deferred;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(isComponentEager(e))try{this.getOrInitializeService({instanceIdentifier:DEFAULT_ENTRY_NAME$1})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=DEFAULT_ENTRY_NAME$1){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=DEFAULT_ENTRY_NAME$1){return this.instances.has(e)}getOptions(e=DEFAULT_ENTRY_NAME$1){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:normalizeIdentifierForFactory(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=DEFAULT_ENTRY_NAME$1){return this.component?this.component.multipleInstances?e:DEFAULT_ENTRY_NAME$1:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function normalizeIdentifierForFactory(t){return t===DEFAULT_ENTRY_NAME$1?void 0:t}function isComponentEager(t){return t.instantiationMode==="EAGER"}/**
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
 */class ComponentContainer{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Provider(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var LogLevel;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(LogLevel||(LogLevel={}));const levelStringToEnum={debug:LogLevel.DEBUG,verbose:LogLevel.VERBOSE,info:LogLevel.INFO,warn:LogLevel.WARN,error:LogLevel.ERROR,silent:LogLevel.SILENT},defaultLogLevel=LogLevel.INFO,ConsoleMethod={[LogLevel.DEBUG]:"log",[LogLevel.VERBOSE]:"log",[LogLevel.INFO]:"info",[LogLevel.WARN]:"warn",[LogLevel.ERROR]:"error"},defaultLogHandler=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=ConsoleMethod[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Logger{constructor(e){this.name=e,this._logLevel=defaultLogLevel,this._logHandler=defaultLogHandler,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in LogLevel))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?levelStringToEnum[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.DEBUG,...e),this._logHandler(this,LogLevel.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.VERBOSE,...e),this._logHandler(this,LogLevel.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.INFO,...e),this._logHandler(this,LogLevel.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.WARN,...e),this._logHandler(this,LogLevel.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.ERROR,...e),this._logHandler(this,LogLevel.ERROR,...e)}}const instanceOfAny=(t,e)=>e.some(n=>t instanceof n);let idbProxyableTypes,cursorAdvanceMethods;function getIdbProxyableTypes(){return idbProxyableTypes||(idbProxyableTypes=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return cursorAdvanceMethods||(cursorAdvanceMethods=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cursorRequestMap=new WeakMap,transactionDoneMap=new WeakMap,transactionStoreNamesMap=new WeakMap,transformCache=new WeakMap,reverseTransformCache=new WeakMap;function promisifyRequest(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(wrap(t.result)),s()},a=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&cursorRequestMap.set(n,t)}).catch(()=>{}),reverseTransformCache.set(e,t),e}function cacheDonePromiseForTransaction(t){if(transactionDoneMap.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});transactionDoneMap.set(t,e)}let idbProxyTraps={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return transactionDoneMap.get(t);if(e==="objectStoreNames")return t.objectStoreNames||transactionStoreNamesMap.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wrap(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function replaceTraps(t){idbProxyTraps=t(idbProxyTraps)}function wrapFunction(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(unwrap(this),e,...n);return transactionStoreNamesMap.set(i,e.sort?e.sort():[e]),wrap(i)}:getCursorAdvanceMethods().includes(t)?function(...e){return t.apply(unwrap(this),e),wrap(cursorRequestMap.get(this))}:function(...e){return wrap(t.apply(unwrap(this),e))}}function transformCachableValue(t){return typeof t=="function"?wrapFunction(t):(t instanceof IDBTransaction&&cacheDonePromiseForTransaction(t),instanceOfAny(t,getIdbProxyableTypes())?new Proxy(t,idbProxyTraps):t)}function wrap(t){if(t instanceof IDBRequest)return promisifyRequest(t);if(transformCache.has(t))return transformCache.get(t);const e=transformCachableValue(t);return e!==t&&(transformCache.set(t,e),reverseTransformCache.set(e,t)),e}const unwrap=t=>reverseTransformCache.get(t);function openDB(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=wrap(a);return i&&a.addEventListener("upgradeneeded",u=>{i(wrap(a.result),u.oldVersion,u.newVersion,wrap(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const readMethods=["get","getKey","getAll","getAllKeys","count"],writeMethods=["put","add","delete","clear"],cachedMethods=new Map;function getMethod(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cachedMethods.get(e))return cachedMethods.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=writeMethods.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||readMethods.includes(n)))return;const o=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&u.done]))[0]};return cachedMethods.set(e,o),o}replaceTraps(t=>({...t,get:(e,n,i)=>getMethod(e,n)||t.get(e,n,i),has:(e,n)=>!!getMethod(e,n)||t.has(e,n)}));/**
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
 */class PlatformLoggerServiceImpl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(isVersionServiceProvider(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function isVersionServiceProvider(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const name$o="@firebase/app",version$1$1="0.9.13";/**
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
 */const logger$1=new Logger("@firebase/app"),name$n="@firebase/app-compat",name$m="@firebase/analytics-compat",name$l="@firebase/analytics",name$k="@firebase/app-check-compat",name$j="@firebase/app-check",name$i="@firebase/auth",name$h="@firebase/auth-compat",name$g="@firebase/database",name$f="@firebase/database-compat",name$e="@firebase/functions",name$d="@firebase/functions-compat",name$c="@firebase/installations",name$b="@firebase/installations-compat",name$a="@firebase/messaging",name$9="@firebase/messaging-compat",name$8="@firebase/performance",name$7="@firebase/performance-compat",name$6="@firebase/remote-config",name$5="@firebase/remote-config-compat",name$4="@firebase/storage",name$3="@firebase/storage-compat",name$2$1="@firebase/firestore",name$1$1="@firebase/firestore-compat",name$p="firebase",version$3="9.23.0";/**
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
 */const DEFAULT_ENTRY_NAME="[DEFAULT]",PLATFORM_LOG_STRING={[name$o]:"fire-core",[name$n]:"fire-core-compat",[name$l]:"fire-analytics",[name$m]:"fire-analytics-compat",[name$j]:"fire-app-check",[name$k]:"fire-app-check-compat",[name$i]:"fire-auth",[name$h]:"fire-auth-compat",[name$g]:"fire-rtdb",[name$f]:"fire-rtdb-compat",[name$e]:"fire-fn",[name$d]:"fire-fn-compat",[name$c]:"fire-iid",[name$b]:"fire-iid-compat",[name$a]:"fire-fcm",[name$9]:"fire-fcm-compat",[name$8]:"fire-perf",[name$7]:"fire-perf-compat",[name$6]:"fire-rc",[name$5]:"fire-rc-compat",[name$4]:"fire-gcs",[name$3]:"fire-gcs-compat",[name$2$1]:"fire-fst",[name$1$1]:"fire-fst-compat","fire-js":"fire-js",[name$p]:"fire-js-all"};/**
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
 */const _apps=new Map,_components=new Map;function _addComponent(t,e){try{t.container.addComponent(e)}catch(n){logger$1.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _registerComponent(t){const e=t.name;if(_components.has(e))return logger$1.debug(`There were multiple attempts to register component ${e}.`),!1;_components.set(e,t);for(const n of _apps.values())_addComponent(n,t);return!0}function _getProvider(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ERRORS$1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ERROR_FACTORY$1=new ErrorFactory("app","Firebase",ERRORS$1);/**
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
 */class FirebaseAppImpl{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ERROR_FACTORY$1.create("app-deleted",{appName:this._name})}}/**
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
 */const SDK_VERSION=version$3;function initializeApp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:DEFAULT_ENTRY_NAME,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ERROR_FACTORY$1.create("bad-app-name",{appName:String(s)});if(n||(n=getDefaultAppConfig()),!n)throw ERROR_FACTORY$1.create("no-options");const o=_apps.get(s);if(o){if(deepEqual(n,o.options)&&deepEqual(i,o.config))return o;throw ERROR_FACTORY$1.create("duplicate-app",{appName:s})}const a=new ComponentContainer(s);for(const u of _components.values())a.addComponent(u);const c=new FirebaseAppImpl(n,i,a);return _apps.set(s,c),c}function getApp(t=DEFAULT_ENTRY_NAME){const e=_apps.get(t);if(!e&&t===DEFAULT_ENTRY_NAME&&getDefaultAppConfig())return initializeApp();if(!e)throw ERROR_FACTORY$1.create("no-app",{appName:t});return e}function registerVersion(t,e,n){var i;let s=(i=PLATFORM_LOG_STRING[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),logger$1.warn(c.join(" "));return}_registerComponent(new Component(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const DB_NAME$2="firebase-heartbeat-database",DB_VERSION$2=1,STORE_NAME$1="firebase-heartbeat-store";let dbPromise$1=null;function getDbPromise(){return dbPromise$1||(dbPromise$1=openDB(DB_NAME$2,DB_VERSION$2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(STORE_NAME$1)}}}).catch(t=>{throw ERROR_FACTORY$1.create("idb-open",{originalErrorMessage:t.message})})),dbPromise$1}async function readHeartbeatsFromIndexedDB(t){try{return await(await getDbPromise()).transaction(STORE_NAME$1).objectStore(STORE_NAME$1).get(computeKey$1(t))}catch(e){if(e instanceof FirebaseError)logger$1.warn(e.message);else{const n=ERROR_FACTORY$1.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});logger$1.warn(n.message)}}}async function writeHeartbeatsToIndexedDB(t,e){try{const i=(await getDbPromise()).transaction(STORE_NAME$1,"readwrite");await i.objectStore(STORE_NAME$1).put(e,computeKey$1(t)),await i.done}catch(n){if(n instanceof FirebaseError)logger$1.warn(n.message);else{const i=ERROR_FACTORY$1.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});logger$1.warn(i.message)}}}function computeKey$1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MAX_HEADER_BYTES=1024,STORED_HEARTBEAT_RETENTION_MAX_MILLIS=30*24*60*60*1e3;class HeartbeatServiceImpl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=getUTCDateString();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=STORED_HEARTBEAT_RETENTION_MAX_MILLIS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=getUTCDateString(),{heartbeatsToSend:n,unsentEntries:i}=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),s=base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function getUTCDateString(){return new Date().toISOString().substring(0,10)}function extractHeartbeatsForHeader(t,e=MAX_HEADER_BYTES){const n=[];let i=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),countBytes(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),countBytes(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class HeartbeatStorageImpl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return isIndexedDBAvailable()?validateIndexedDBOpenable().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await readHeartbeatsFromIndexedDB(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function countBytes(t){return base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function registerCoreComponents(t){_registerComponent(new Component("platform-logger",e=>new PlatformLoggerServiceImpl(e),"PRIVATE")),_registerComponent(new Component("heartbeat",e=>new HeartbeatServiceImpl(e),"PRIVATE")),registerVersion(name$o,version$1$1,t),registerVersion(name$o,version$1$1,"esm2017"),registerVersion("fire-js","")}registerCoreComponents("");var name$2="firebase",version$2="9.23.0";/**
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
 */registerVersion(name$2,version$2,"app");/**
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
 */const APP_CHECK_STATES=new Map,DEFAULT_STATE={activated:!1,tokenObservers:[]},DEBUG_STATE={initialized:!1,enabled:!1};function getStateReference(t){return APP_CHECK_STATES.get(t)||Object.assign({},DEFAULT_STATE)}function setInitialState(t,e){return APP_CHECK_STATES.set(t,e),APP_CHECK_STATES.get(t)}function getDebugState(){return DEBUG_STATE}/**
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
 */const BASE_ENDPOINT="https://content-firebaseappcheck.googleapis.com/v1",EXCHANGE_RECAPTCHA_TOKEN_METHOD="exchangeRecaptchaV3Token",EXCHANGE_DEBUG_TOKEN_METHOD="exchangeDebugToken",TOKEN_REFRESH_TIME={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},ONE_DAY=24*60*60*1e3;/**
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
 */class Refresher{constructor(e,n,i,s,o){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=s,s>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Deferred,await sleep(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Deferred,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function sleep(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const ERRORS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ERROR_FACTORY=new ErrorFactory("appCheck","AppCheck",ERRORS);/**
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
 */function getRecaptcha(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function ensureActivated(t){if(!getStateReference(t).activated)throw ERROR_FACTORY.create("use-before-activation",{appName:t.name})}function getDurationString(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),i=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-i*3600)/60),o=e-n*3600*24-i*3600-s*60;let a="";return n&&(a+=pad(n)+"d:"),i&&(a+=pad(i)+"h:"),a+=pad(s)+"m:"+pad(o)+"s",a}function pad(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function exchangeToken({url:t,body:e},n){const i={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&(i["X-Firebase-Client"]=f)}const o={method:"POST",body:JSON.stringify(e),headers:i};let a;try{a=await fetch(t,o)}catch(f){throw ERROR_FACTORY.create("fetch-network-error",{originalErrorMessage:f==null?void 0:f.message})}if(a.status!==200)throw ERROR_FACTORY.create("fetch-status-error",{httpStatus:a.status});let c;try{c=await a.json()}catch(f){throw ERROR_FACTORY.create("fetch-parse-error",{originalErrorMessage:f==null?void 0:f.message})}const u=c.ttl.match(/^([\d.]+)(s)$/);if(!u||!u[2]||isNaN(Number(u[1])))throw ERROR_FACTORY.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const h=Number(u[1])*1e3,d=Date.now();return{token:c.token,expireTimeMillis:d+h,issuedAtTimeMillis:d}}function getExchangeRecaptchaV3TokenRequest(t,e){const{projectId:n,appId:i,apiKey:s}=t.options;return{url:`${BASE_ENDPOINT}/projects/${n}/apps/${i}:${EXCHANGE_RECAPTCHA_TOKEN_METHOD}?key=${s}`,body:{recaptcha_v3_token:e}}}function getExchangeDebugTokenRequest(t,e){const{projectId:n,appId:i,apiKey:s}=t.options;return{url:`${BASE_ENDPOINT}/projects/${n}/apps/${i}:${EXCHANGE_DEBUG_TOKEN_METHOD}?key=${s}`,body:{debug_token:e}}}/**
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
 */const DB_NAME$1="firebase-app-check-database",DB_VERSION$1=1,STORE_NAME="firebase-app-check-store",DEBUG_TOKEN_KEY="debug-token";let dbPromise=null;function getDBPromise(){return dbPromise||(dbPromise=new Promise((t,e)=>{try{const n=indexedDB.open(DB_NAME$1,DB_VERSION$1);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(ERROR_FACTORY.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(STORE_NAME,{keyPath:"compositeKey"})}}}catch(n){e(ERROR_FACTORY.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),dbPromise)}function readTokenFromIndexedDB(t){return read(computeKey(t))}function writeTokenToIndexedDB(t,e){return write(computeKey(t),e)}function writeDebugTokenToIndexedDB(t){return write(DEBUG_TOKEN_KEY,t)}function readDebugTokenFromIndexedDB(){return read(DEBUG_TOKEN_KEY)}async function write(t,e){const i=(await getDBPromise()).transaction(STORE_NAME,"readwrite"),o=i.objectStore(STORE_NAME).put({compositeKey:t,value:e});return new Promise((a,c)=>{o.onsuccess=u=>{a()},i.onerror=u=>{var h;c(ERROR_FACTORY.create("storage-set",{originalErrorMessage:(h=u.target.error)===null||h===void 0?void 0:h.message}))}})}async function read(t){const n=(await getDBPromise()).transaction(STORE_NAME,"readonly"),s=n.objectStore(STORE_NAME).get(t);return new Promise((o,a)=>{s.onsuccess=c=>{const u=c.target.result;o(u?u.value:void 0)},n.onerror=c=>{var u;a(ERROR_FACTORY.create("storage-get",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function computeKey(t){return`${t.options.appId}-${t.name}`}/**
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
 */const logger=new Logger("@firebase/app-check");/**
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
 */async function readTokenFromStorage(t){if(isIndexedDBAvailable()){let e;try{e=await readTokenFromIndexedDB(t)}catch(n){logger.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function writeTokenToStorage(t,e){return isIndexedDBAvailable()?writeTokenToIndexedDB(t,e).catch(n=>{logger.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function readOrCreateDebugTokenFromStorage(){let t;try{t=await readDebugTokenFromIndexedDB()}catch{}if(t)return t;{const e=uuidv4();return writeDebugTokenToIndexedDB(e).catch(n=>logger.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function isDebugMode(){return getDebugState().enabled}async function getDebugToken(){const t=getDebugState();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function initializeDebugMode(){const t=getGlobal(),e=getDebugState();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new Deferred;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(readOrCreateDebugTokenFromStorage())}/**
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
 */const defaultTokenErrorData={error:"UNKNOWN_ERROR"};function formatDummyToken(t){return base64.encodeString(JSON.stringify(t),!1)}async function getToken$2(t,e=!1){const n=t.app;ensureActivated(n);const i=getStateReference(n);let s=i.token,o;if(s&&!isValid(s)&&(i.token=void 0,s=void 0),!s){const u=await i.cachedTokenPromise;u&&(isValid(u)?s=u:await writeTokenToStorage(n,void 0))}if(!e&&s&&isValid(s))return{token:s.token};let a=!1;if(isDebugMode()){i.exchangeTokenPromise||(i.exchangeTokenPromise=exchangeToken(getExchangeDebugTokenRequest(n,await getDebugToken()),t.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),a=!0);const u=await i.exchangeTokenPromise;return await writeTokenToStorage(n,u),i.token=u,{token:u.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),a=!0),s=await getStateReference(n).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"?logger.warn(u.message):logger.error(u),o=u}let c;return s?o?isValid(s)?c={token:s.token,internalError:o}:c=makeDummyTokenResult(o):(c={token:s.token},i.token=s,await writeTokenToStorage(n,s)):c=makeDummyTokenResult(o),a&&notifyTokenListeners(n,c),c}async function getLimitedUseToken$1(t){const e=t.app;ensureActivated(e);const{provider:n}=getStateReference(e);if(isDebugMode()){const i=await getDebugToken(),{token:s}=await exchangeToken(getExchangeDebugTokenRequest(e,i),t.heartbeatServiceProvider);return{token:s}}else{const{token:i}=await n.getToken();return{token:i}}}function addTokenListener(t,e,n,i){const{app:s}=t,o=getStateReference(s),a={next:n,error:i,type:e};if(o.tokenObservers=[...o.tokenObservers,a],o.token&&isValid(o.token)){const c=o.token;Promise.resolve().then(()=>{n({token:c.token}),initTokenRefresher(t)}).catch(()=>{})}o.cachedTokenPromise.then(()=>initTokenRefresher(t))}function removeTokenListener(t,e){const n=getStateReference(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function initTokenRefresher(t){const{app:e}=t,n=getStateReference(e);let i=n.tokenRefresher;i||(i=createTokenRefresher(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function createTokenRefresher(t){const{app:e}=t;return new Refresher(async()=>{const n=getStateReference(e);let i;if(n.token?i=await getToken$2(t,!0):i=await getToken$2(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=getStateReference(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},TOKEN_REFRESH_TIME.RETRIAL_MIN_WAIT,TOKEN_REFRESH_TIME.RETRIAL_MAX_WAIT)}function notifyTokenListeners(t,e){const n=getStateReference(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function isValid(t){return t.expireTimeMillis-Date.now()>0}function makeDummyTokenResult(t){return{token:formatDummyToken(defaultTokenErrorData),error:t}}/**
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
 */class AppCheckService{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=getStateReference(this.app);for(const n of e)removeTokenListener(this.app,n.next);return Promise.resolve()}}function factory(t,e){return new AppCheckService(t,e)}function internalFactory(t){return{getToken:e=>getToken$2(t,e),getLimitedUseToken:()=>getLimitedUseToken$1(t),addTokenListener:e=>addTokenListener(t,"INTERNAL",e),removeTokenListener:e=>removeTokenListener(t.app,e)}}const name$1="@firebase/app-check",version$1="0.8.0";/**
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
 */const RECAPTCHA_URL="https://www.google.com/recaptcha/api.js";function initializeV3(t,e){const n=new Deferred,i=getStateReference(t);i.reCAPTCHAState={initialized:n};const s=makeDiv(t),o=getRecaptcha(!1);return o?queueWidgetRender(t,e,o,s,n):loadReCAPTCHAV3Script(()=>{const a=getRecaptcha(!1);if(!a)throw new Error("no recaptcha");queueWidgetRender(t,e,a,s,n)}),n.promise}function queueWidgetRender(t,e,n,i,s){n.ready(()=>{renderInvisibleWidget(t,e,n,i),s.resolve(n)})}function makeDiv(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function getToken$1(t){ensureActivated(t);const n=await getStateReference(t).reCAPTCHAState.initialized.promise;return new Promise((i,s)=>{const o=getStateReference(t).reCAPTCHAState;n.ready(()=>{i(n.execute(o.widgetId,{action:"fire_app_check"}))})})}function renderInvisibleWidget(t,e,n,i){const s=n.render(i,{sitekey:e,size:"invisible",callback:()=>{getStateReference(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{getStateReference(t).reCAPTCHAState.succeeded=!1}}),o=getStateReference(t);o.reCAPTCHAState=Object.assign(Object.assign({},o.reCAPTCHAState),{widgetId:s})}function loadReCAPTCHAV3Script(t){const e=document.createElement("script");e.src=RECAPTCHA_URL,e.onload=t,document.head.appendChild(e)}/**
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
 */class ReCaptchaV3Provider{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,i;throwIfThrottled(this._throttleData);const s=await getToken$1(this._app).catch(a=>{throw ERROR_FACTORY.create("recaptcha-error")});if(!(!((e=getStateReference(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw ERROR_FACTORY.create("recaptcha-error");let o;try{o=await exchangeToken(getExchangeRecaptchaV3TokenRequest(this._app,s),this._heartbeatServiceProvider)}catch(a){throw!((n=a.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=setBackoff(Number((i=a.customData)===null||i===void 0?void 0:i.httpStatus),this._throttleData),ERROR_FACTORY.create("throttled",{time:getDurationString(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,o}initialize(e){this._app=e,this._heartbeatServiceProvider=_getProvider(e,"heartbeat"),initializeV3(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof ReCaptchaV3Provider?this._siteKey===e._siteKey:!1}}function setBackoff(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+ONE_DAY,httpStatus:t};{const n=e?e.backoffCount:0,i=calculateBackoffMillis(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+i,httpStatus:t}}}function throwIfThrottled(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw ERROR_FACTORY.create("throttled",{time:getDurationString(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function initializeAppCheck(t=getApp(),e){t=getModularInstance(t);const n=_getProvider(t,"app-check");if(getDebugState().initialized||initializeDebugMode(),isDebugMode()&&getDebugToken().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(o.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&o.provider.isEqual(e.provider))return s;throw ERROR_FACTORY.create("already-initialized",{appName:t.name})}const i=n.initialize({options:e});return _activate(t,e.provider,e.isTokenAutoRefreshEnabled),getStateReference(t).isTokenAutoRefreshEnabled&&addTokenListener(i,"INTERNAL",()=>{}),i}function _activate(t,e,n){const i=setInitialState(t,Object.assign({},DEFAULT_STATE));i.activated=!0,i.provider=e,i.cachedTokenPromise=readTokenFromStorage(t).then(s=>(s&&isValid(s)&&(i.token=s,notifyTokenListeners(t,{token:s.token})),s)),i.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,i.provider.initialize(t)}const APP_CHECK_NAME="app-check",APP_CHECK_NAME_INTERNAL="app-check-internal";function registerAppCheck(){_registerComponent(new Component(APP_CHECK_NAME,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return factory(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(APP_CHECK_NAME_INTERNAL).initialize()})),_registerComponent(new Component(APP_CHECK_NAME_INTERNAL,t=>{const e=t.getProvider("app-check").getImmediate();return internalFactory(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),registerVersion(name$1,version$1)}registerAppCheck();function __rest(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}typeof SuppressedError=="function"&&SuppressedError;function _prodErrorMap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const prodErrorMap=_prodErrorMap,_DEFAULT_AUTH_ERROR_FACTORY=new ErrorFactory("auth","Firebase",_prodErrorMap());/**
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
 */const logClient=new Logger("@firebase/auth");function _logWarn(t,...e){logClient.logLevel<=LogLevel.WARN&&logClient.warn(`Auth (${SDK_VERSION}): ${t}`,...e)}function _logError(t,...e){logClient.logLevel<=LogLevel.ERROR&&logClient.error(`Auth (${SDK_VERSION}): ${t}`,...e)}/**
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
 */function _fail(t,...e){throw createErrorInternal(t,...e)}function _createError(t,...e){return createErrorInternal(t,...e)}function _errorWithCustomMessage(t,e,n){const i=Object.assign(Object.assign({},prodErrorMap()),{[e]:n});return new ErrorFactory("auth","Firebase",i).create(e,{appName:t.name})}function createErrorInternal(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return _DEFAULT_AUTH_ERROR_FACTORY.create(t,...e)}function _assert(t,e,...n){if(!t)throw createErrorInternal(e,...n)}function debugFail(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _logError(e),new Error(e)}function debugAssert(t,e){t||debugFail(e)}/**
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
 */function _getCurrentUrl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _isHttpOrHttps(){return _getCurrentScheme()==="http:"||_getCurrentScheme()==="https:"}function _getCurrentScheme(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _isOnline(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_isHttpOrHttps()||isBrowserExtension()||"connection"in navigator)?navigator.onLine:!0}function _getUserLanguage(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Delay{constructor(e,n){this.shortDelay=e,this.longDelay=n,debugAssert(n>e,"Short delay should be less than long delay!"),this.isMobile=isMobileCordova()||isReactNative()}get(){return _isOnline()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _emulatorUrl(t,e){debugAssert(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class FetchProvider{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SERVER_ERROR_MAP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DEFAULT_API_TIMEOUT_MS=new Delay(3e4,6e4);function _addTidIfNecessary(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _performApiRequest(t,e,n,i,s={}){return _performFetchWithErrorHandling(t,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const c=querystring(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),FetchProvider.fetch()(_getFinalTarget(t,t.config.apiHost,n,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},o))})}async function _performFetchWithErrorHandling(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},SERVER_ERROR_MAP),e);try{const s=new NetworkTimeout(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw _makeTaggedError(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _makeTaggedError(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw _makeTaggedError(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw _makeTaggedError(t,"user-disabled",a);const d=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw _errorWithCustomMessage(t,d,h);_fail(t,d)}}catch(s){if(s instanceof FirebaseError)throw s;_fail(t,"network-request-failed",{message:String(s)})}}async function _performSignInRequest(t,e,n,i,s={}){const o=await _performApiRequest(t,e,n,i,s);return"mfaPendingCredential"in o&&_fail(t,"multi-factor-auth-required",{_serverResponse:o}),o}function _getFinalTarget(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?_emulatorUrl(t.config,s):`${t.config.apiScheme}://${s}`}class NetworkTimeout{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(_createError(this.auth,"network-request-failed")),DEFAULT_API_TIMEOUT_MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _makeTaggedError(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=_createError(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function deleteAccount(t,e){return _performApiRequest(t,"POST","/v1/accounts:delete",e)}async function getAccountInfo(t,e){return _performApiRequest(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function utcTimestampToDateString(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function getIdTokenResult(t,e=!1){const n=getModularInstance(t),i=await n.getIdToken(e),s=_parseToken(i);_assert(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:utcTimestampToDateString(secondsStringToMilliseconds(s.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(s.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function secondsStringToMilliseconds(t){return Number(t)*1e3}function _parseToken(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{const s=base64Decode(n);return s?JSON.parse(s):(_logError("Failed to decode base64 JWT payload"),null)}catch(s){return _logError("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _tokenExpiresIn(t){const e=_parseToken(t);return _assert(e,"internal-error"),_assert(typeof e.exp<"u","internal-error"),_assert(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _logoutIfInvalidated(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof FirebaseError&&isUserInvalidated(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function isUserInvalidated({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ProactiveRefresh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class UserMetadata{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _reloadWithoutSaving(t){var e;const n=t.auth,i=await t.getIdToken(),s=await _logoutIfInvalidated(t,getAccountInfo(n,{idToken:i}));_assert(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?extractProviderData(o.providerUserInfo):[],c=mergeProviderData(t.providerData,a),u=t.isAnonymous,h=!(t.email&&o.passwordHash)&&!(c!=null&&c.length),d=u?h:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new UserMetadata(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function reload(t){const e=getModularInstance(t);await _reloadWithoutSaving(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mergeProviderData(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function extractProviderData(t){return t.map(e=>{var{providerId:n}=e,i=__rest(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function requestStsToken(t,e){const n=await _performFetchWithErrorHandling(t,{},async()=>{const i=querystring({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=_getFinalTarget(t,s,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(a,{method:"POST",headers:c,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_assert(e.idToken,"internal-error"),_assert(typeof e.idToken<"u","internal-error"),_assert(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_tokenExpiresIn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return _assert(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await requestStsToken(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,a=new StsTokenManager;return i&&(_assert(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(_assert(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(_assert(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}}/**
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
 */function assertStringOrUndefined(t,e){_assert(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class UserImpl{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,o=__rest(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new UserMetadata(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,e));return _assert(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return getIdTokenResult(this,e)}reload(){return reload(this)}_assign(e){this!==e&&(_assert(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new UserImpl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,o,a,c,u,h,d;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(a=n.photoURL)!==null&&a!==void 0?a:void 0,ee=(c=n.tenantId)!==null&&c!==void 0?c:void 0,te=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,ne=(h=n.createdAt)!==null&&h!==void 0?h:void 0,re=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:ie,emailVerified:se,isAnonymous:oe,providerData:ce,stsTokenManager:le}=n;_assert(ie&&le,e,"internal-error");const he=StsTokenManager.fromJSON(this.name,le);_assert(typeof ie=="string",e,"internal-error"),assertStringOrUndefined(f,e.name),assertStringOrUndefined(g,e.name),_assert(typeof se=="boolean",e,"internal-error"),_assert(typeof oe=="boolean",e,"internal-error"),assertStringOrUndefined(m,e.name),assertStringOrUndefined(_,e.name),assertStringOrUndefined(ee,e.name),assertStringOrUndefined(te,e.name),assertStringOrUndefined(ne,e.name),assertStringOrUndefined(re,e.name);const ue=new UserImpl({uid:ie,auth:e,email:g,emailVerified:se,displayName:f,isAnonymous:oe,photoURL:_,phoneNumber:m,tenantId:ee,stsTokenManager:he,createdAt:ne,lastLoginAt:re});return ce&&Array.isArray(ce)&&(ue.providerData=ce.map(de=>Object.assign({},de))),te&&(ue._redirectEventId=te),ue}static async _fromIdTokenResponse(e,n,i=!1){const s=new StsTokenManager;s.updateFromServerResponse(n);const o=new UserImpl({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await _reloadWithoutSaving(o),o}}/**
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
 */const instanceCache=new Map;function _getInstance(t){debugAssert(t instanceof Function,"Expected a class definition");let e=instanceCache.get(t);return e?(debugAssert(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,instanceCache.set(t,e),e)}/**
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
 */class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}InMemoryPersistence.type="NONE";const inMemoryPersistence=InMemoryPersistence;/**
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
 */function _persistenceKeyName(t,e,n){return`firebase:${t}:${e}:${n}`}class PersistenceUserManager{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,s.apiKey,o),this.fullPersistenceKey=_persistenceKeyName("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?UserImpl._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new PersistenceUserManager(_getInstance(inMemoryPersistence),e,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=s[0]||_getInstance(inMemoryPersistence);const a=_persistenceKeyName(i,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){const f=UserImpl._fromJSON(e,d);h!==o&&(c=f),o=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new PersistenceUserManager(o,e,i):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(a)}catch{}})),new PersistenceUserManager(o,e,i))}}/**
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
 */function _getBrowserName(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_isIEMobile(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_isFirefox(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_isBlackBerry(e))return"Blackberry";if(_isWebOS(e))return"Webos";if(_isSafari(e))return"Safari";if((e.includes("chrome/")||_isChromeIOS(e))&&!e.includes("edge/"))return"Chrome";if(_isAndroid(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _isFirefox(t=getUA()){return/firefox\//i.test(t)}function _isSafari(t=getUA()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _isChromeIOS(t=getUA()){return/crios\//i.test(t)}function _isIEMobile(t=getUA()){return/iemobile/i.test(t)}function _isAndroid(t=getUA()){return/android/i.test(t)}function _isBlackBerry(t=getUA()){return/blackberry/i.test(t)}function _isWebOS(t=getUA()){return/webos/i.test(t)}function _isIOS(t=getUA()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _isIOSStandalone(t=getUA()){var e;return _isIOS(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _isIE10(){return isIE()&&document.documentMode===10}function _isMobileBrowser(t=getUA()){return _isIOS(t)||_isAndroid(t)||_isWebOS(t)||_isBlackBerry(t)||/windows phone/i.test(t)||_isIEMobile(t)}function _isIframe(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _getClientVersion(t,e=[]){let n;switch(t){case"Browser":n=_getBrowserName(getUA());break;case"Worker":n=`${_getBrowserName(getUA())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${SDK_VERSION}/${i}`}async function getRecaptchaConfig(t,e){return _performApiRequest(t,"GET","/v2/recaptchaConfig",_addTidIfNecessary(t,e))}function isEnterprise(t){return t!==void 0&&t.enterprise!==void 0}class RecaptchaConfig{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function getScriptParentElement(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=_createError("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",getScriptParentElement().appendChild(i)})}function _generateCallbackName(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RECAPTCHA_ENTERPRISE_URL="https://www.google.com/recaptcha/enterprise.js?render=",RECAPTCHA_ENTERPRISE_VERIFIER_TYPE="recaptcha-enterprise",FAKE_TOKEN="NO_RECAPTCHA";class RecaptchaEnterpriseVerifier{constructor(e){this.type=RECAPTCHA_ENTERPRISE_VERIFIER_TYPE,this.auth=_castAuth(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{getRecaptchaConfig(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new RecaptchaConfig(u);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(o,a,c){const u=window.grecaptcha;isEnterprise(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(h=>{a(h)}).catch(()=>{a(FAKE_TOKEN)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{i(this.auth).then(c=>{if(!n&&isEnterprise(window.grecaptcha))s(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}_loadJS(RECAPTCHA_ENTERPRISE_URL+c).then(()=>{s(c,o,a)}).catch(u=>{a(u)})}}).catch(c=>{a(c)})})}}/**
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
 */class AuthMiddlewareQueue{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class AuthImpl{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_DEFAULT_AUTH_ERROR_FACTORY,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_getInstance(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _reloadWithoutSaving(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_getUserLanguage()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?getModularInstance(e):null;return n&&_assert(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_assert(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(e))})}async initializeRecaptchaConfig(){const e=await getRecaptchaConfig(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new RecaptchaConfig(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new RecaptchaEnterpriseVerifier(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_getInstance(e)||this._popupRedirectResolver;_assert(n,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return _assert(a,this,"internal-error"),a.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_logWarn(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _castAuth(t){return getModularInstance(t)}class Subscription{constructor(e){this.auth=e,this.observer=null,this.addObserver=createSubscribe(n=>this.observer=n)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function initializeAuth(t,e){const n=_getProvider(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(deepEqual(o,e??{}))return s;_fail(s,"already-initialized")}return n.initialize({options:e})}function _initializeAuthInstance(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(_getInstance);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function connectAuthEmulator(t,e,n){const i=_castAuth(t);_assert(i._canInitEmulator,i,"emulator-config-failed"),_assert(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),o=extractProtocol(e),{host:a,port:c}=extractHostAndPort(e),u=c===null?"":`:${c}`;i.config.emulator={url:`${o}//${a}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||emitEmulatorWarning()}function extractProtocol(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function extractHostAndPort(t){const e=extractProtocol(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:parsePort(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:parsePort(a)}}}function parsePort(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function emitEmulatorWarning(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class AuthCredential{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(e){return debugFail("not implemented")}_linkToIdToken(e,n){return debugFail("not implemented")}_getReauthenticationResolver(e){return debugFail("not implemented")}}/**
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
 */async function signInWithIdp(t,e){return _performSignInRequest(t,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(t,e))}/**
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
 */const IDP_REQUEST_URI$1="http://localhost";class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new OAuthCredential(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_fail("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,o=__rest(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new OAuthCredential(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return signInWithIdp(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,signInWithIdp(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,signInWithIdp(e,n)}buildRequest(){const e={requestUri:IDP_REQUEST_URI$1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=querystring(n)}return e}}/**
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
 */class FederatedAuthProvider{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(e){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return FacebookAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return FacebookAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(e.oauthAccessToken)}catch{return null}}}FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com";FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
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
 */class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return GoogleAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GoogleAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return GoogleAuthProvider.credential(n,i)}catch{return null}}}GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com";GoogleAuthProvider.PROVIDER_ID="google.com";/**
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
 */class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(e){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return GithubAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GithubAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return GithubAuthProvider.credential(e.oauthAccessToken)}catch{return null}}}GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com";GithubAuthProvider.PROVIDER_ID="github.com";/**
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
 */class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(e,n){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return TwitterAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return TwitterAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return TwitterAuthProvider.credential(n,i)}catch{return null}}}TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com";TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
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
 */async function signUp(t,e){return _performSignInRequest(t,"POST","/v1/accounts:signUp",_addTidIfNecessary(t,e))}/**
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
 */class UserCredentialImpl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await UserImpl._fromIdTokenResponse(e,i,s),a=providerIdForResponse(i);return new UserCredentialImpl({user:o,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=providerIdForResponse(i);return new UserCredentialImpl({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function providerIdForResponse(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function signInAnonymously(t){var e;const n=_castAuth(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new UserCredentialImpl({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await signUp(n,{returnSecureToken:!0}),s=await UserCredentialImpl._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class MultiFactorError extends FirebaseError{constructor(e,n,i,s){var o;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new MultiFactorError(e,n,i,s)}}function _processCredentialSavingMfaContextIfNecessary(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?MultiFactorError._fromErrorAndOperation(t,o,e,i):o})}async function _link$1(t,e,n=!1){const i=await _logoutIfInvalidated(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return UserCredentialImpl._forOperation(t,"link",i)}/**
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
 */async function _reauthenticate(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const o=await _logoutIfInvalidated(t,_processCredentialSavingMfaContextIfNecessary(i,s,e,t),n);_assert(o.idToken,i,"internal-error");const a=_parseToken(o.idToken);_assert(a,i,"internal-error");const{sub:c}=a;return _assert(t.uid===c,i,"user-mismatch"),UserCredentialImpl._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&_fail(i,"user-mismatch"),o}}/**
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
 */async function _signInWithCredential(t,e,n=!1){const i="signIn",s=await _processCredentialSavingMfaContextIfNecessary(t,i,e),o=await UserCredentialImpl._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}function onIdTokenChanged(t,e,n,i){return getModularInstance(t).onIdTokenChanged(e,n,i)}function beforeAuthStateChanged(t,e,n){return getModularInstance(t).beforeAuthStateChanged(e,n)}const STORAGE_AVAILABLE_KEY="__sak";/**
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
 */class BrowserPersistenceClass{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(STORAGE_AVAILABLE_KEY,"1"),this.storage.removeItem(STORAGE_AVAILABLE_KEY),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _iframeCannotSyncWebStorage(){const t=getUA();return _isSafari(t)||_isIOS(t)}const _POLLING_INTERVAL_MS$1=1e3,IE10_LOCAL_STORAGE_SYNC_DELAY=10;class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_iframeCannotSyncWebStorage()&&_isIframe(),this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);_isIE10()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IE10_LOCAL_STORAGE_SYNC_DELAY):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},_POLLING_INTERVAL_MS$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BrowserLocalPersistence.type="LOCAL";const browserLocalPersistence=BrowserLocalPersistence;/**
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
 */class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BrowserSessionPersistence.type="SESSION";const browserSessionPersistence=BrowserSessionPersistence;/**
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
 */function _allSettled(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Receiver{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Receiver(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,o)),u=await _allSettled(c);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Receiver.receivers=[];/**
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
 */function _generateEventId(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Sender{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const h=_generateEventId("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(g.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function _window(){return window}function _setWindowLocation(t){_window().location.href=t}/**
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
 */function _isWorker(){return typeof _window().WorkerGlobalScope<"u"&&typeof _window().importScripts=="function"}async function _getActiveServiceWorker(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _getServiceWorkerController(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _getWorkerGlobalScope(){return _isWorker()?self:null}/**
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
 */const DB_NAME="firebaseLocalStorageDb",DB_VERSION=1,DB_OBJECTSTORE_NAME="firebaseLocalStorage",DB_DATA_KEYPATH="fbase_key";class DBPromise{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function getObjectStore(t,e){return t.transaction([DB_OBJECTSTORE_NAME],e?"readwrite":"readonly").objectStore(DB_OBJECTSTORE_NAME)}function _deleteDatabase(){const t=indexedDB.deleteDatabase(DB_NAME);return new DBPromise(t).toPromise()}function _openDatabase(){const t=indexedDB.open(DB_NAME,DB_VERSION);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(DB_OBJECTSTORE_NAME,{keyPath:DB_DATA_KEYPATH})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(DB_OBJECTSTORE_NAME)?e(i):(i.close(),await _deleteDatabase(),e(await _openDatabase()))})})}async function _putObject(t,e,n){const i=getObjectStore(t,!0).put({[DB_DATA_KEYPATH]:e,value:n});return new DBPromise(i).toPromise()}async function getObject(t,e){const n=getObjectStore(t,!1).get(e),i=await new DBPromise(n).toPromise();return i===void 0?null:i.value}function _deleteObject(t,e){const n=getObjectStore(t,!0).delete(e);return new DBPromise(n).toPromise()}const _POLLING_INTERVAL_MS=800,_TRANSACTION_RETRY_COUNT=3;class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _openDatabase(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>_TRANSACTION_RETRY_COUNT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_getWorkerGlobalScope()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_getServiceWorkerController()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _openDatabase();return await _putObject(e,STORAGE_AVAILABLE_KEY,"1"),await _deleteObject(e,STORAGE_AVAILABLE_KEY),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>_putObject(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>getObject(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_deleteObject(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=getObjectStore(s,!1).getAll();return new DBPromise(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_POLLING_INTERVAL_MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IndexedDBLocalPersistence.type="LOCAL";const indexedDBLocalPersistence=IndexedDBLocalPersistence;new Delay(3e4,6e4);/**
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
 */function _withDefaultResolver(t,e){return e?_getInstance(e):(_assert(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class IdpCredential extends AuthCredential{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return signInWithIdp(e,this._buildIdpRequest())}_linkToIdToken(e,n){return signInWithIdp(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return signInWithIdp(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _signIn(t){return _signInWithCredential(t.auth,new IdpCredential(t),t.bypassAuthState)}function _reauth(t){const{auth:e,user:n}=t;return _assert(n,e,"internal-error"),_reauthenticate(n,new IdpCredential(t),t.bypassAuthState)}async function _link(t){const{auth:e,user:n}=t;return _assert(n,e,"internal-error"),_link$1(n,new IdpCredential(t),t.bypassAuthState)}/**
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
 */class AbstractPopupRedirectOperation{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(e){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _POLL_WINDOW_CLOSE_TIMEOUT=new Delay(2e3,1e4);class PopupOperation extends AbstractPopupRedirectOperation{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _assert(e,this.auth,"internal-error"),e}async onExecution(){debugAssert(this.filter.length===1,"Popup operations only handle one event");const e=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_POLL_WINDOW_CLOSE_TIMEOUT.get())};e()}}PopupOperation.currentPopupAction=null;/**
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
 */const PENDING_REDIRECT_KEY="pendingRedirect",redirectOutcomeMap=new Map;class RedirectAction extends AbstractPopupRedirectOperation{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=redirectOutcomeMap.get(this.auth._key());if(!e){try{const i=await _getAndClearPendingRedirectStatus(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}redirectOutcomeMap.set(this.auth._key(),e)}return this.bypassAuthState||redirectOutcomeMap.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _getAndClearPendingRedirectStatus(t,e){const n=pendingRedirectKey(e),i=resolverPersistence(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function _overrideRedirectResult(t,e){redirectOutcomeMap.set(t._key(),e)}function resolverPersistence(t){return _getInstance(t._redirectPersistence)}function pendingRedirectKey(t){return _persistenceKeyName(PENDING_REDIRECT_KEY,t.config.apiKey,t.name)}async function _getRedirectResult(t,e,n=!1){const i=_castAuth(t),s=_withDefaultResolver(i,e),a=await new RedirectAction(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const EVENT_DUPLICATION_CACHE_DURATION_MS=10*60*1e3;class AuthEventManager{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!isRedirectEvent(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!isNullRedirectEvent(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(_createError(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EVENT_DUPLICATION_CACHE_DURATION_MS&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(e))}saveEventToCache(e){this.cachedEventUids.add(eventUid(e)),this.lastProcessedEventTime=Date.now()}}function eventUid(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function isNullRedirectEvent({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function isRedirectEvent(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(t);default:return!1}}/**
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
 */async function _getProjectConfig(t,e={}){return _performApiRequest(t,"GET","/v1/projects",e)}/**
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
 */const IP_ADDRESS_REGEX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HTTP_REGEX=/^https?/;async function _validateOrigin(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _getProjectConfig(t);for(const n of e)try{if(matchDomain(n))return}catch{}_fail(t,"unauthorized-domain")}function matchDomain(t){const e=_getCurrentUrl(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!HTTP_REGEX.test(n))return!1;if(IP_ADDRESS_REGEX.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const NETWORK_TIMEOUT=new Delay(3e4,6e4);function resetUnloadedGapiModules(){const t=_window().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function loadGapi(t){return new Promise((e,n)=>{var i,s,o;function a(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),n(_createError(t,"network-request-failed"))},timeout:NETWORK_TIMEOUT.get()})}if(!((s=(i=_window().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=_window().gapi)===null||o===void 0)&&o.load)a();else{const c=_generateCallbackName("iframefcb");return _window()[c]=()=>{gapi.load?a():n(_createError(t,"network-request-failed"))},_loadJS(`https://apis.google.com/js/api.js?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw cachedGApiLoader=null,e})}let cachedGApiLoader=null;function _loadGapi(t){return cachedGApiLoader=cachedGApiLoader||loadGapi(t),cachedGApiLoader}/**
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
 */const PING_TIMEOUT=new Delay(5e3,15e3),IFRAME_PATH="__/auth/iframe",EMULATED_IFRAME_PATH="emulator/auth/iframe",IFRAME_ATTRIBUTES={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EID_FROM_APIHOST=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function getIframeUrl(t){const e=t.config;_assert(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_emulatorUrl(e,EMULATED_IFRAME_PATH):`https://${t.config.authDomain}/${IFRAME_PATH}`,i={apiKey:e.apiKey,appName:t.name,v:SDK_VERSION},s=EID_FROM_APIHOST.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${querystring(i).slice(1)}`}async function _openIframe(t){const e=await _loadGapi(t),n=_window().gapi;return _assert(n,t,"internal-error"),e.open({where:document.body,url:getIframeUrl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IFRAME_ATTRIBUTES,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=_createError(t,"network-request-failed"),c=_window().setTimeout(()=>{o(a)},PING_TIMEOUT.get());function u(){_window().clearTimeout(c),s(i)}i.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const BASE_POPUP_OPTIONS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DEFAULT_WIDTH=500,DEFAULT_HEIGHT=600,TARGET_BLANK="_blank",FIREFOX_EMPTY_URL="http://localhost";class AuthPopup{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _open(t,e,n,i=DEFAULT_WIDTH,s=DEFAULT_HEIGHT){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},BASE_POPUP_OPTIONS),{width:i.toString(),height:s.toString(),top:o,left:a}),h=getUA().toLowerCase();n&&(c=_isChromeIOS(h)?TARGET_BLANK:n),_isFirefox(h)&&(e=e||FIREFOX_EMPTY_URL,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[m,_])=>`${g}${m}=${_},`,"");if(_isIOSStandalone(h)&&c!=="_self")return openAsNewWindowIOS(e||"",c),new AuthPopup(null);const f=window.open(e||"",c,d);_assert(f,t,"popup-blocked");try{f.focus()}catch{}return new AuthPopup(f)}function openAsNewWindowIOS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const WIDGET_PATH="__/auth/handler",EMULATOR_WIDGET_PATH="emulator/auth/handler",FIREBASE_APP_CHECK_FRAGMENT_ID=encodeURIComponent("fac");async function _getRedirectUrl(t,e,n,i,s,o){_assert(t.config.authDomain,t,"auth-domain-config-required"),_assert(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:SDK_VERSION,eventId:s};if(e instanceof FederatedAuthProvider){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",isEmpty(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(o||{}))a[d]=f}if(e instanceof BaseOAuthProvider){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await t._getAppCheckToken(),h=u?`#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(u)}`:"";return`${getHandlerBase(t)}?${querystring(c).slice(1)}${h}`}function getHandlerBase({config:t}){return t.emulator?_emulatorUrl(t,EMULATOR_WIDGET_PATH):`https://${t.authDomain}/${WIDGET_PATH}`}/**
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
 */const WEB_STORAGE_SUPPORT_KEY="webStorageSupport";class BrowserPopupRedirectResolver{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=browserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(e,n,i,s){var o;debugAssert((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await _getRedirectUrl(e,n,i,_getCurrentUrl(),s);return _open(e,a,_generateEventId())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await _getRedirectUrl(e,n,i,_getCurrentUrl(),s);return _setWindowLocation(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(debugAssert(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await _openIframe(e),i=new AuthEventManager(e);return n.register("authEvent",s=>(_assert(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(WEB_STORAGE_SUPPORT_KEY,{type:WEB_STORAGE_SUPPORT_KEY},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[WEB_STORAGE_SUPPORT_KEY];a!==void 0&&n(!!a),_fail(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_validateOrigin(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}}const browserPopupRedirectResolver=BrowserPopupRedirectResolver;var name="@firebase/auth",version="0.23.2";/**
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
 */class AuthInterop{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function getVersionForPlatform(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function registerAuth(t){_registerComponent(new Component("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=i.options;_assert(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(t)},h=new AuthImpl(i,s,o,u);return _initializeAuthInstance(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),_registerComponent(new Component("auth-internal",e=>{const n=_castAuth(e.getProvider("auth").getImmediate());return(i=>new AuthInterop(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),registerVersion(name,version,getVersionForPlatform(t)),registerVersion(name,version,"esm2017")}/**
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
 */const DEFAULT_ID_TOKEN_MAX_AGE=5*60,authIdTokenMaxAge=getExperimentalSetting("authIdTokenMaxAge")||DEFAULT_ID_TOKEN_MAX_AGE;let lastPostedIdToken=null;const mintCookieFactory=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>authIdTokenMaxAge)return;const s=n==null?void 0:n.token;lastPostedIdToken!==s&&(lastPostedIdToken=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function getAuth(t=getApp()){const e=_getProvider(t,"auth");if(e.isInitialized())return e.getImmediate();const n=initializeAuth(t,{popupRedirectResolver:browserPopupRedirectResolver,persistence:[indexedDBLocalPersistence,browserLocalPersistence,browserSessionPersistence]}),i=getExperimentalSetting("authTokenSyncURL");if(i){const o=mintCookieFactory(i);beforeAuthStateChanged(n,o,()=>o(n.currentUser)),onIdTokenChanged(n,a=>o(a))}const s=getDefaultEmulatorHost("auth");return s&&connectAuthEmulator(n,`http://${s}`),n}registerAuth("Browser");var commonjsGlobal$1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k$1,goog=goog||{},l=commonjsGlobal$1||self;function aa$1(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function p(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ba(t){return Object.prototype.hasOwnProperty.call(t,ca$1)&&t[ca$1]||(t[ca$1]=++da)}var ca$1="closure_uid_"+(1e9*Math.random()>>>0),da=0;function ea$1(t,e,n){return t.call.apply(t.bind,arguments)}function fa(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function q$1(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?q$1=ea$1:q$1=fa,q$1.apply(null,arguments)}function ha(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function r(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,o){for(var a=Array(arguments.length-2),c=2;c<arguments.length;c++)a[c-2]=arguments[c];return e.prototype[s].apply(i,a)}}function v(){this.s=this.s,this.o=this.o}var ia$1=0;v.prototype.s=!1;v.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ia$1!=0)&&ba(this)};v.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ka$1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ma(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function na$1(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(aa$1(i)){const s=t.length||0,o=i.length||0;t.length=s+o;for(let a=0;a<o;a++)t[s+a]=i[a]}else t.push(i)}}function w(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var oa$1=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",()=>{},e),l.removeEventListener("test",()=>{},e)}catch{}return t}();function x(t){return/^[\s\xa0]*$/.test(t)}function pa$1(){var t=l.navigator;return t&&(t=t.userAgent)?t:""}function y(t){return pa$1().indexOf(t)!=-1}function qa$1(t){return qa$1[" "](t),t}qa$1[" "]=function(){};function ra$1(t,e){var n=sa$1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ta$1=y("Opera"),z$1=y("Trident")||y("MSIE"),ua$1=y("Edge"),va=ua$1||z$1,wa=y("Gecko")&&!(pa$1().toLowerCase().indexOf("webkit")!=-1&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),xa$1=pa$1().toLowerCase().indexOf("webkit")!=-1&&!y("Edge");function ya(){var t=l.document;return t?t.documentMode:void 0}var za$1;e:{var Aa="",Ba=function(){var t=pa$1();if(wa)return/rv:([^\);]+)(\)|;)/.exec(t);if(ua$1)return/Edge\/([\d\.]+)/.exec(t);if(z$1)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xa$1)return/WebKit\/(\S+)/.exec(t);if(ta$1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ba&&(Aa=Ba?Ba[1]:""),z$1){var Ca=ya();if(Ca!=null&&Ca>parseFloat(Aa)){za$1=String(Ca);break e}}za$1=Aa}var Da;if(l.document&&z$1){var Ea$1=ya();Da=Ea$1||parseInt(za$1,10)||void 0}else Da=void 0;var Fa=Da;function A(t,e){if(w.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wa){e:{try{qa$1(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ga[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&A.$.h.call(this)}}r(A,w);var Ga={2:"touch",3:"pen",4:"mouse"};A.prototype.h=function(){A.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ha$1="closure_listenable_"+(1e6*Math.random()|0),Ia$1=0;function Ja(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++Ia$1,this.fa=this.ia=!1}function Ka$1(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Na$1(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Oa$1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Pa$1(t){const e={};for(const n in t)e[n]=t[n];return e}const Qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ra(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let o=0;o<Qa.length;o++)n=Qa[o],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Sa(t){this.src=t,this.g={},this.h=0}Sa.prototype.add=function(t,e,n,i,s){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var a=Ta(t,e,i,s);return-1<a?(e=t[a],n||(e.ia=!1)):(e=new Ja(e,this.src,o,!!i,s),e.ia=n,t.push(e)),e};function Ua(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=ka$1(i,e),o;(o=0<=s)&&Array.prototype.splice.call(i,s,1),o&&(Ka$1(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ta(t,e,n,i){for(var s=0;s<t.length;++s){var o=t[s];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==i)return s}return-1}var Va$1="closure_lm_"+(1e6*Math.random()|0),Wa={};function Ya(t,e,n,i,s){if(i&&i.once)return Za(t,e,n,i,s);if(Array.isArray(e)){for(var o=0;o<e.length;o++)Ya(t,e[o],n,i,s);return null}return n=$a$1(n),t&&t[Ha$1]?t.O(e,n,p(i)?!!i.capture:!!i,s):ab(t,e,n,!1,i,s)}function ab(t,e,n,i,s,o){if(!e)throw Error("Invalid event type");var a=p(s)?!!s.capture:!!s,c=bb(t);if(c||(t[Va$1]=c=new Sa(t)),n=c.add(e,n,i,a,o),n.proxy)return n;if(i=cb(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)oa$1||(s=a),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(db$1(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cb(){function t(n){return e.call(t.src,t.listener,n)}const e=eb;return t}function Za(t,e,n,i,s){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Za(t,e[o],n,i,s);return null}return n=$a$1(n),t&&t[Ha$1]?t.P(e,n,p(i)?!!i.capture:!!i,s):ab(t,e,n,!0,i,s)}function fb(t,e,n,i,s){if(Array.isArray(e))for(var o=0;o<e.length;o++)fb(t,e[o],n,i,s);else i=p(i)?!!i.capture:!!i,n=$a$1(n),t&&t[Ha$1]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Ta(o,n,i,s),-1<n&&(Ka$1(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=bb(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ta(e,n,i,s)),(n=-1<t?e[t]:null)&&gb(n))}function gb(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ha$1])Ua(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(db$1(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=bb(e))?(Ua(n,t),n.h==0&&(n.src=null,e[Va$1]=null)):Ka$1(t)}}}function db$1(t){return t in Wa?Wa[t]:Wa[t]="on"+t}function eb(t,e){if(t.fa)t=!0;else{e=new A(e,this);var n=t.listener,i=t.la||t.src;t.ia&&gb(t),t=n.call(i,e)}return t}function bb(t){return t=t[Va$1],t instanceof Sa?t:null}var hb="__closure_events_fn_"+(1e9*Math.random()>>>0);function $a$1(t){return typeof t=="function"?t:(t[hb]||(t[hb]=function(e){return t.handleEvent(e)}),t[hb])}function B(){v.call(this),this.i=new Sa(this),this.S=this,this.J=null}r(B,v);B.prototype[Ha$1]=!0;B.prototype.removeEventListener=function(t,e,n,i){fb(this,t,e,n,i)};function C$1(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new w(e,t);else if(e instanceof w)e.target=e.target||t;else{var s=e;e=new w(i,t),Ra(e,s)}if(s=!0,n)for(var o=n.length-1;0<=o;o--){var a=e.g=n[o];s=ib(a,i,!0,e)&&s}if(a=e.g=t,s=ib(a,i,!0,e)&&s,s=ib(a,i,!1,e)&&s,n)for(o=0;o<n.length;o++)a=e.g=n[o],s=ib(a,i,!1,e)&&s}B.prototype.N=function(){if(B.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Ka$1(n[i]);delete t.g[e],t.h--}}this.J=null};B.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};B.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ib(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,o=0;o<e.length;++o){var a=e[o];if(a&&!a.fa&&a.capture==n){var c=a.listener,u=a.la||a.src;a.ia&&Ua(t.i,a),s=c.call(u,i)!==!1&&s}}return s&&!i.defaultPrevented}var jb=l.JSON.stringify;class kb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function lb(){var t=mb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nb{constructor(){this.h=this.g=null}add(e,n){const i=ob.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var ob=new kb(()=>new pb,t=>t.reset());class pb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function rb(t){l.setTimeout(()=>{throw t},0)}let sb,tb=!1,mb=new nb,vb=()=>{const t=l.Promise.resolve(void 0);sb=()=>{t.then(ub)}};var ub=()=>{for(var t;t=lb();){try{t.h.call(t.g)}catch(n){rb(n)}var e=ob;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tb=!1};function wb(t,e){B.call(this),this.h=t||1,this.g=e||l,this.j=q$1(this.qb,this),this.l=Date.now()}r(wb,B);k$1=wb.prototype;k$1.ga=!1;k$1.T=null;k$1.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),C$1(this,"tick"),this.ga&&(xb(this),this.start()))}};k$1.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xb(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k$1.N=function(){wb.$.N.call(this),xb(this),delete this.g};function yb(t,e,n){if(typeof t=="function")n&&(t=q$1(t,n));else if(t&&typeof t.handleEvent=="function")t=q$1(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function zb(t){t.g=yb(()=>{t.g=null,t.i&&(t.i=!1,zb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ab extends v{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zb(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bb(t){v.call(this),this.h=t,this.g={}}r(Bb,v);var Cb=[];function Db(t,e,n,i){Array.isArray(n)||(n&&(Cb[0]=n.toString()),n=Cb);for(var s=0;s<n.length;s++){var o=Ya(e,n[s],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Fb(t){Na$1(t.g,function(e,n){this.g.hasOwnProperty(n)&&gb(e)},t),t.g={}}Bb.prototype.N=function(){Bb.$.N.call(this),Fb(this)};Bb.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gb(){this.g=!0}Gb.prototype.Ea=function(){this.g=!1};function Hb(t,e,n,i,s,o){t.info(function(){if(t.g)if(o)for(var a="",c=o.split("&"),u=0;u<c.length;u++){var h=c[u].split("=");if(1<h.length){var d=h[0];h=h[1];var f=d.split("_");a=2<=f.length&&f[1]=="type"?a+(d+"="+h+"&"):a+(d+"=redacted&")}}else a=null;else a=o;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+a})}function Ib(t,e,n,i,s,o,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+o+" "+a})}function D$1(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jb(t,n)+(i?" "+i:"")})}function Kb(t,e){t.info(function(){return"TIMEOUT: "+e})}Gb.prototype.info=function(){};function Jb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var o=s[0];if(o!="noop"&&o!="stop"&&o!="close")for(var a=1;a<s.length;a++)s[a]=""}}}}return jb(n)}catch{return e}}var E={},Lb=null;function Mb(){return Lb=Lb||new B}E.Ta="serverreachability";function Nb(t){w.call(this,E.Ta,t)}r(Nb,w);function Ob(t){const e=Mb();C$1(e,new Nb(e))}E.STAT_EVENT="statevent";function Pb(t,e){w.call(this,E.STAT_EVENT,t),this.stat=e}r(Pb,w);function F$1(t){const e=Mb();C$1(e,new Pb(e,t))}E.Ua="timingevent";function Qb(t,e){w.call(this,E.Ua,t),this.size=e}r(Qb,w);function Rb(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){t()},e)}var Sb={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ub(){}Ub.prototype.h=null;function Vb(t){return t.h||(t.h=t.i())}function Wb(){}var Xb={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yb(){w.call(this,"d")}r(Yb,w);function Zb(){w.call(this,"c")}r(Zb,w);var $b;function ac$1(){}r(ac$1,Ub);ac$1.prototype.g=function(){return new XMLHttpRequest};ac$1.prototype.i=function(){return{}};$b=new ac$1;function bc$1(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Bb(this),this.P=cc$1,t=va?125:void 0,this.V=new wb(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dc$1}function dc$1(){this.i=null,this.g="",this.h=!1}var cc$1=45e3,ec$1={},fc$1={};k$1=bc$1.prototype;k$1.setTimeout=function(t){this.P=t};function gc$1(t,e,n){t.L=1,t.v=hc$1(G$1(e)),t.s=n,t.S=!0,ic$1(t,null)}function ic$1(t,e){t.G=Date.now(),jc$1(t),t.A=G$1(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),kc(n.i,"t",i),t.C=0,n=t.l.J,t.h=new dc$1,t.g=lc$1(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ab(q$1(t.Pa,t,t.g),t.O)),Db(t.U,t.g,"readystatechange",t.nb),e=t.I?Pa$1(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ob(),Hb(t.j,t.u,t.A,t.m,t.W,t.s)}k$1.nb=function(t){t=t.target;const e=this.M;e&&H$1(t)==3?e.l():this.Pa(t)};k$1.Pa=function(t){try{if(t==this.g)e:{const d=H$1(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>d)&&(d!=3||va||this.g&&(this.h.h||this.g.ja()||mc$1(this.g)))){this.J||d!=4||e==7||(e==8||0>=f?Ob(3):Ob(2)),nc$1(this);var n=this.g.da();this.ca=n;t:if(oc$1(this)){var i=mc$1(this.g);t="";var s=i.length,o=H$1(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){I(this),pc$1(this);var a="";break t}this.h.i=new l.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:o&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=n==200,Ib(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(c)){var h=c;break t}}h=null}if(n=h)D$1(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qc$1(this,n);else{this.i=!1,this.o=3,F$1(12),I(this),pc$1(this);break e}}this.S?(rc$1(this,d,a),va&&this.i&&d==3&&(Db(this.U,this.V,"tick",this.mb),this.V.start())):(D$1(this.j,this.m,a,null),qc$1(this,a)),d==4&&I(this),this.i&&!this.J&&(d==4?sc$1(this.l,this):(this.i=!1,jc$1(this)))}else tc$1(this.g),n==400&&0<a.indexOf("Unknown SID")?(this.o=3,F$1(12)):(this.o=0,F$1(13)),I(this),pc$1(this)}}}catch{}finally{}};function oc$1(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function rc$1(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=uc$1(t,n),s==fc$1){e==4&&(t.o=4,F$1(14),i=!1),D$1(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ec$1){t.o=4,F$1(15),D$1(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else D$1(t.j,t.m,s,null),qc$1(t,s);oc$1(t)&&s!=fc$1&&s!=ec$1&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,F$1(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vc$1(e),e.M=!0,F$1(11))):(D$1(t.j,t.m,n,"[Invalid Chunked Response]"),I(t),pc$1(t))}k$1.mb=function(){if(this.g){var t=H$1(this.g),e=this.g.ja();this.C<e.length&&(nc$1(this),rc$1(this,t,e),this.i&&t!=4&&jc$1(this))}};function uc$1(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?fc$1:(n=Number(e.substring(n,i)),isNaN(n)?ec$1:(i+=1,i+n>e.length?fc$1:(e=e.slice(i,i+n),t.C=i+n,e)))}k$1.cancel=function(){this.J=!0,I(this)};function jc$1(t){t.Y=Date.now()+t.P,wc$1(t,t.P)}function wc$1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rb(q$1(t.lb,t),e)}function nc$1(t){t.B&&(l.clearTimeout(t.B),t.B=null)}k$1.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Kb(this.j,this.A),this.L!=2&&(Ob(),F$1(17)),I(this),this.o=2,pc$1(this)):wc$1(this,this.Y-t)};function pc$1(t){t.l.H==0||t.J||sc$1(t.l,t)}function I(t){nc$1(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,xb(t.V),Fb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function qc$1(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||xc$1(n.i,t))){if(!t.K&&xc$1(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yc$1(n),zc$1(n);else break e;Ac$1(n),F$1(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Rb(q$1(n.ib,n),6e3));if(1>=Bc$1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else J$1(n,11)}else if((t.K||n.g==t)&&yc$1(n),!x(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const d=h[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const f=h[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const g=h[5];g!=null&&typeof g=="number"&&0<g&&(i=1.5*g,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var o=i.i;o.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(Cc$1(o,o.h),o.h=null))}if(i.F){const ee=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;ee&&(i.Da=ee,K$1(i.I,i.F,ee))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var a=t;if(i.wa=Dc$1(i,i.J?i.pa:null,i.Y),a.K){Ec$1(i.i,a);var c=a,u=i.L;u&&c.setTimeout(u),c.B&&(nc$1(c),jc$1(c)),i.g=a}else Fc$1(i);0<n.j.length&&Gc$1(n)}else h[0]!="stop"&&h[0]!="close"||J$1(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?J$1(n,7):Hc$1(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}Ob(4)}catch{}}function Ic$1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(aa$1(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Jc$1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(aa$1(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Kc$1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(aa$1(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Jc$1(t),i=Ic$1(t),s=i.length,o=0;o<s;o++)e.call(void 0,i[o],n&&n[o],t)}var Lc$1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mc(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var o=t[n].substring(0,i);s=t[n].substring(i+1)}else o=t[n];e(o,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function M$1(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof M$1){this.h=t.h,Nc$1(this,t.j),this.s=t.s,this.g=t.g,Oc(this,t.m),this.l=t.l;var e=t.i,n=new Pc$1;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qc$1(this,n),this.o=t.o}else t&&(e=String(t).match(Lc$1))?(this.h=!1,Nc$1(this,e[1]||"",!0),this.s=Rc$1(e[2]||""),this.g=Rc$1(e[3]||"",!0),Oc(this,e[4]),this.l=Rc$1(e[5]||"",!0),Qc$1(this,e[6]||"",!0),this.o=Rc$1(e[7]||"")):(this.h=!1,this.i=new Pc$1(null,this.h))}M$1.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Sc$1(e,Tc$1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Sc$1(e,Tc$1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Sc$1(n,n.charAt(0)=="/"?Uc$1:Vc$1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Sc$1(n,Wc$1)),t.join("")};function G$1(t){return new M$1(t)}function Nc$1(t,e,n){t.j=n?Rc$1(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qc$1(t,e,n){e instanceof Pc$1?(t.i=e,Xc$1(t.i,t.h)):(n||(e=Sc$1(e,Yc$1)),t.i=new Pc$1(e,t.h))}function K$1(t,e,n){t.i.set(e,n)}function hc$1(t){return K$1(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rc$1(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Sc$1(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Zc),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zc(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Tc$1=/[#\/\?@]/g,Vc$1=/[#\?:]/g,Uc$1=/[#\?]/g,Yc$1=/[#\?@]/g,Wc$1=/#/g;function Pc$1(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function N$1(t){t.g||(t.g=new Map,t.h=0,t.i&&Mc(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k$1=Pc$1.prototype;k$1.add=function(t,e){N$1(this),this.i=null,t=O$1(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $c(t,e){N$1(t),e=O$1(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ad(t,e){return N$1(t),e=O$1(t,e),t.g.has(e)}k$1.forEach=function(t,e){N$1(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};k$1.ta=function(){N$1(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let o=0;o<s.length;o++)n.push(e[i])}return n};k$1.Z=function(t){N$1(this);let e=[];if(typeof t=="string")ad(this,t)&&(e=e.concat(this.g.get(O$1(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k$1.set=function(t,e){return N$1(this),this.i=null,t=O$1(this,t),ad(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k$1.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function kc(t,e,n){$c(t,e),0<n.length&&(t.i=null,t.g.set(O$1(t,e),ma(n)),t.h+=n.length)}k$1.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const o=encodeURIComponent(String(i)),a=this.Z(i);for(i=0;i<a.length;i++){var s=o;a[i]!==""&&(s+="="+encodeURIComponent(String(a[i]))),t.push(s)}}return this.i=t.join("&")};function O$1(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Xc$1(t,e){e&&!t.j&&(N$1(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&($c(this,i),kc(this,s,n))},t)),t.j=e}var bd=class{constructor(t,e){this.g=t,this.map=e}};function cd(t){this.l=t||dd,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(l.g&&l.g.Ka&&l.g.Ka()&&l.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dd=10;function ed(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Bc$1(t){return t.h?1:t.g?t.g.size:0}function xc$1(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cc$1(t,e){t.g?t.g.add(e):t.h=e}function Ec$1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cd.prototype.cancel=function(){if(this.i=fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fd(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ma(t.i)}var gd=class{stringify(t){return l.JSON.stringify(t,void 0)}parse(t){return l.JSON.parse(t,void 0)}};function hd(){this.g=new gd}function id(t,e,n){const i=n||"";try{Kc$1(t,function(s,o){let a=s;p(s)&&(a=jb(s)),e.push(i+o+"="+encodeURIComponent(a))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function jd(t,e){const n=new Gb;if(l.Image){const i=new Image;i.onload=ha(kd,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ha(kd,n,i,"TestLoadImage: error",!1,e),i.onabort=ha(kd,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ha(kd,n,i,"TestLoadImage: timeout",!1,e),l.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function kd(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ld(t){this.l=t.fc||null,this.j=t.ob||!1}r(ld,Ub);ld.prototype.g=function(){return new md(this.l,this.j)};ld.prototype.i=function(t){return function(){return t}}({});function md(t,e){B.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=nd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}r(md,B);var nd=0;k$1=md.prototype;k$1.open=function(t,e){if(this.readyState!=nd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,od(this)};k$1.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||l).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k$1.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pd(this)),this.readyState=nd};k$1.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,od(this)),this.g&&(this.readyState=3,od(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qd(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qd(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k$1.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pd(this):od(this),this.readyState==3&&qd(this)}};k$1.Za=function(t){this.g&&(this.response=this.responseText=t,pd(this))};k$1.Ya=function(t){this.g&&(this.response=t,pd(this))};k$1.ka=function(){this.g&&pd(this)};function pd(t){t.readyState=4,t.l=null,t.j=null,t.A=null,od(t)}k$1.setRequestHeader=function(t,e){this.v.append(t,e)};k$1.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k$1.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function od(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(md.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var rd=l.JSON.parse;function P(t){B.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sd,this.L=this.M=!1}r(P,B);var sd="",td=/^https?$/i,ud=["POST","PUT"];k$1=P.prototype;k$1.Oa=function(t){this.M=t};k$1.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$b.g(),this.C=this.u?Vb(this.u):Vb($b),this.g.onreadystatechange=q$1(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){vd(this,o);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const o of i.keys())n.set(o,i.get(o));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),s=l.FormData&&t instanceof l.FormData,!(0<=ka$1(ud,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wd(this),0<this.B&&((this.L=xd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=q$1(this.ua,this)):this.A=yb(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){vd(this,o)}};function xd(t){return z$1&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k$1.ua=function(){typeof goog<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,C$1(this,"timeout"),this.abort(8))};function vd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yd(t),zd(t)}function yd(t){t.F||(t.F=!0,C$1(t,"complete"),C$1(t,"error"))}k$1.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,C$1(this,"complete"),C$1(this,"abort"),zd(this))};k$1.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zd(this,!0)),P.$.N.call(this)};k$1.La=function(){this.s||(this.G||this.v||this.l?Ad(this):this.kb())};k$1.kb=function(){Ad(this)};function Ad(t){if(t.h&&typeof goog<"u"&&(!t.C[1]||H$1(t)!=4||t.da()!=2)){if(t.v&&H$1(t)==4)yb(t.La,0,t);else if(C$1(t,"readystatechange"),H$1(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.I).match(Lc$1)[1]||null;!s&&l.self&&l.self.location&&(s=l.self.location.protocol.slice(0,-1)),i=!td.test(s?s.toLowerCase():"")}n=i}if(n)C$1(t,"complete"),C$1(t,"success");else{t.m=6;try{var o=2<H$1(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",yd(t)}}finally{zd(t)}}}}function zd(t,e){if(t.g){wd(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||C$1(t,"ready");try{n.onreadystatechange=i}catch{}}}function wd(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}k$1.isActive=function(){return!!this.g};function H$1(t){return t.g?t.g.readyState:0}k$1.da=function(){try{return 2<H$1(this)?this.g.status:-1}catch{return-1}};k$1.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k$1.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),rd(e)}};function mc$1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case sd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function tc$1(t){const e={};t=(t.g&&2<=H$1(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(x(t[i]))continue;var n=qb(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=e[s]||[];e[s]=o,o.push(n)}Oa$1(e,function(i){return i.join(", ")})}k$1.Ia=function(){return this.m};k$1.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Bd(t){let e="";return Na$1(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Cd(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Bd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):K$1(t,e,n))}function Dd(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ed(t){this.Ga=0,this.j=[],this.l=new Gb,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Dd("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Dd("baseRetryDelayMs",5e3,t),this.hb=Dd("retryDelaySeedMs",1e4,t),this.eb=Dd("forwardChannelMaxRetries",2,t),this.xa=Dd("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cd(t&&t.concurrentRequestLimit),this.Ja=new hd,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k$1=Ed.prototype;k$1.ra=8;k$1.H=1;function Hc$1(t){if(Fd(t),t.H==3){var e=t.W++,n=G$1(t.I);if(K$1(n,"SID",t.K),K$1(n,"RID",e),K$1(n,"TYPE","terminate"),Gd(t,n),e=new bc$1(t,t.l,e),e.L=2,e.v=hc$1(G$1(n)),n=!1,l.navigator&&l.navigator.sendBeacon)try{n=l.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&l.Image&&(new Image().src=e.v,n=!0),n||(e.g=lc$1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),jc$1(e)}Hd(t)}function zc$1(t){t.g&&(vc$1(t),t.g.cancel(),t.g=null)}function Fd(t){zc$1(t),t.u&&(l.clearTimeout(t.u),t.u=null),yc$1(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&l.clearTimeout(t.m),t.m=null)}function Gc$1(t){if(!ed(t.i)&&!t.m){t.m=!0;var e=t.Na;sb||vb(),tb||(sb(),tb=!0),mb.add(e,t),t.C=0}}function Id(t,e){return Bc$1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Rb(q$1(t.Na,t,e),Jd(t,t.C)),t.C++,!0)}k$1.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new bc$1(this,this.l,t);let o=this.s;if(this.U&&(o?(o=Pa$1(o),Ra(o,this.U)):o=this.U),this.o!==null||this.O||(s.I=o,o=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Kd(this,s,e),n=G$1(this.I),K$1(n,"RID",t),K$1(n,"CVER",22),this.F&&K$1(n,"X-HTTP-Session-Id",this.F),Gd(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(Bd(o)))+"&"+e:this.o&&Cd(n,this.o,o)),Cc$1(this.i,s),this.bb&&K$1(n,"TYPE","init"),this.P?(K$1(n,"$req",e),K$1(n,"SID","null"),s.aa=!0,gc$1(s,n,null)):gc$1(s,n,e),this.H=2}}else this.H==3&&(t?Ld(this,t):this.j.length==0||ed(this.i)||Ld(this))};function Ld(t,e){var n;e?n=e.m:n=t.W++;const i=G$1(t.I);K$1(i,"SID",t.K),K$1(i,"RID",n),K$1(i,"AID",t.V),Gd(t,i),t.o&&t.s&&Cd(i,t.o,t.s),n=new bc$1(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Kd(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Cc$1(t.i,n),gc$1(n,i,e)}function Gd(t,e){t.na&&Na$1(t.na,function(n,i){K$1(e,i,n)}),t.h&&Kc$1({},function(n,i){K$1(e,i,n)})}function Kd(t,e,n){n=Math.min(t.j.length,n);var i=t.h?q$1(t.h.Va,t.h,t):null;e:{var s=t.j;let o=-1;for(;;){const a=["count="+n];o==-1?0<n?(o=s[0].g,a.push("ofs="+o)):o=0:a.push("ofs="+o);let c=!0;for(let u=0;u<n;u++){let h=s[u].g;const d=s[u].map;if(h-=o,0>h)o=Math.max(0,s[u].g-100),c=!1;else try{id(d,a,"req"+h+"_")}catch{i&&i(d)}}if(c){i=a.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Fc$1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;sb||vb(),tb||(sb(),tb=!0),mb.add(e,t),t.A=0}}function Ac$1(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Rb(q$1(t.Ma,t),Jd(t,t.A)),t.A++,!0)}k$1.Ma=function(){if(this.u=null,Md(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Rb(q$1(this.jb,this),t)}};k$1.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,F$1(10),zc$1(this),Md(this))};function vc$1(t){t.B!=null&&(l.clearTimeout(t.B),t.B=null)}function Md(t){t.g=new bc$1(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=G$1(t.wa);K$1(e,"RID","rpc"),K$1(e,"SID",t.K),K$1(e,"AID",t.V),K$1(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&K$1(e,"TO",t.qa),K$1(e,"TYPE","xmlhttp"),Gd(t,e),t.o&&t.s&&Cd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=hc$1(G$1(e)),n.s=null,n.S=!0,ic$1(n,t)}k$1.ib=function(){this.v!=null&&(this.v=null,zc$1(this),Ac$1(this),F$1(19))};function yc$1(t){t.v!=null&&(l.clearTimeout(t.v),t.v=null)}function sc$1(t,e){var n=null;if(t.g==e){yc$1(t),vc$1(t),t.g=null;var i=2}else if(xc$1(t.i,e))n=e.F,Ec$1(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Mb(),C$1(i,new Qb(i,n)),Gc$1(t)}else Fc$1(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&Id(t,e)||i==2&&Ac$1(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:J$1(t,5);break;case 4:J$1(t,10);break;case 3:J$1(t,6);break;default:J$1(t,2)}}}function Jd(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function J$1(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=q$1(t.pb,t);n||(n=new M$1("//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Nc$1(n,"https"),hc$1(n)),jd(n.toString(),i)}else F$1(2);t.H=0,t.h&&t.h.za(e),Hd(t),Fd(t)}k$1.pb=function(t){t?(this.l.info("Successfully pinged google.com"),F$1(2)):(this.l.info("Failed to ping google.com"),F$1(1))};function Hd(t){if(t.H=0,t.ma=[],t.h){const e=fd(t.i);(e.length!=0||t.j.length!=0)&&(na$1(t.ma,e),na$1(t.ma,t.j),t.i.i.length=0,ma(t.j),t.j.length=0),t.h.ya()}}function Dc$1(t,e,n){var i=n instanceof M$1?G$1(n):new M$1(n);if(i.g!="")e&&(i.g=e+"."+i.g),Oc(i,i.m);else{var s=l.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var o=new M$1(null);i&&Nc$1(o,i),e&&(o.g=e),s&&Oc(o,s),n&&(o.l=n),i=o}return n=t.F,e=t.Da,n&&e&&K$1(i,n,e),K$1(i,"VER",t.ra),Gd(t,i),i}function lc$1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new P(new ld({ob:!0})):new P(t.va),e.Oa(t.J),e}k$1.isActive=function(){return!!this.h&&this.h.isActive(this)};function Nd(){}k$1=Nd.prototype;k$1.Ba=function(){};k$1.Aa=function(){};k$1.za=function(){};k$1.ya=function(){};k$1.isActive=function(){return!0};k$1.Va=function(){};function Od(){if(z$1&&!(10<=Number(Fa)))throw Error("Environmental error: no available transport.")}Od.prototype.g=function(t,e){return new Q$1(t,e)};function Q$1(t,e){B.call(this),this.g=new Ed(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new R(this)}r(Q$1,B);Q$1.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;F$1(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Dc$1(t,null,t.Y),Gc$1(t)};Q$1.prototype.close=function(){Hc$1(this.g)};Q$1.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jb(t),t=n);e.j.push(new bd(e.fb++,t)),e.H==3&&Gc$1(e)};Q$1.prototype.N=function(){this.g.h=null,delete this.j,Hc$1(this.g),delete this.g,Q$1.$.N.call(this)};function Pd(t){Yb.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}r(Pd,Yb);function Qd(){Zb.call(this),this.status=1}r(Qd,Zb);function R(t){this.g=t}r(R,Nd);R.prototype.Ba=function(){C$1(this.g,"a")};R.prototype.Aa=function(t){C$1(this.g,new Pd(t))};R.prototype.za=function(t){C$1(this.g,new Qd)};R.prototype.ya=function(){C$1(this.g,"b")};function Rd(){this.blockSize=-1}function S$1(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}r(S$1,Rd);S$1.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sd(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var o=t.g[3],a=e+(o^n&(s^o))+i[0]+3614090360&4294967295;e=n+(a<<7&4294967295|a>>>25),a=o+(s^e&(n^s))+i[1]+3905402710&4294967295,o=e+(a<<12&4294967295|a>>>20),a=s+(n^o&(e^n))+i[2]+606105819&4294967295,s=o+(a<<17&4294967295|a>>>15),a=n+(e^s&(o^e))+i[3]+3250441966&4294967295,n=s+(a<<22&4294967295|a>>>10),a=e+(o^n&(s^o))+i[4]+4118548399&4294967295,e=n+(a<<7&4294967295|a>>>25),a=o+(s^e&(n^s))+i[5]+1200080426&4294967295,o=e+(a<<12&4294967295|a>>>20),a=s+(n^o&(e^n))+i[6]+2821735955&4294967295,s=o+(a<<17&4294967295|a>>>15),a=n+(e^s&(o^e))+i[7]+4249261313&4294967295,n=s+(a<<22&4294967295|a>>>10),a=e+(o^n&(s^o))+i[8]+1770035416&4294967295,e=n+(a<<7&4294967295|a>>>25),a=o+(s^e&(n^s))+i[9]+2336552879&4294967295,o=e+(a<<12&4294967295|a>>>20),a=s+(n^o&(e^n))+i[10]+4294925233&4294967295,s=o+(a<<17&4294967295|a>>>15),a=n+(e^s&(o^e))+i[11]+2304563134&4294967295,n=s+(a<<22&4294967295|a>>>10),a=e+(o^n&(s^o))+i[12]+1804603682&4294967295,e=n+(a<<7&4294967295|a>>>25),a=o+(s^e&(n^s))+i[13]+4254626195&4294967295,o=e+(a<<12&4294967295|a>>>20),a=s+(n^o&(e^n))+i[14]+2792965006&4294967295,s=o+(a<<17&4294967295|a>>>15),a=n+(e^s&(o^e))+i[15]+1236535329&4294967295,n=s+(a<<22&4294967295|a>>>10),a=e+(s^o&(n^s))+i[1]+4129170786&4294967295,e=n+(a<<5&4294967295|a>>>27),a=o+(n^s&(e^n))+i[6]+3225465664&4294967295,o=e+(a<<9&4294967295|a>>>23),a=s+(e^n&(o^e))+i[11]+643717713&4294967295,s=o+(a<<14&4294967295|a>>>18),a=n+(o^e&(s^o))+i[0]+3921069994&4294967295,n=s+(a<<20&4294967295|a>>>12),a=e+(s^o&(n^s))+i[5]+3593408605&4294967295,e=n+(a<<5&4294967295|a>>>27),a=o+(n^s&(e^n))+i[10]+38016083&4294967295,o=e+(a<<9&4294967295|a>>>23),a=s+(e^n&(o^e))+i[15]+3634488961&4294967295,s=o+(a<<14&4294967295|a>>>18),a=n+(o^e&(s^o))+i[4]+3889429448&4294967295,n=s+(a<<20&4294967295|a>>>12),a=e+(s^o&(n^s))+i[9]+568446438&4294967295,e=n+(a<<5&4294967295|a>>>27),a=o+(n^s&(e^n))+i[14]+3275163606&4294967295,o=e+(a<<9&4294967295|a>>>23),a=s+(e^n&(o^e))+i[3]+4107603335&4294967295,s=o+(a<<14&4294967295|a>>>18),a=n+(o^e&(s^o))+i[8]+1163531501&4294967295,n=s+(a<<20&4294967295|a>>>12),a=e+(s^o&(n^s))+i[13]+2850285829&4294967295,e=n+(a<<5&4294967295|a>>>27),a=o+(n^s&(e^n))+i[2]+4243563512&4294967295,o=e+(a<<9&4294967295|a>>>23),a=s+(e^n&(o^e))+i[7]+1735328473&4294967295,s=o+(a<<14&4294967295|a>>>18),a=n+(o^e&(s^o))+i[12]+2368359562&4294967295,n=s+(a<<20&4294967295|a>>>12),a=e+(n^s^o)+i[5]+4294588738&4294967295,e=n+(a<<4&4294967295|a>>>28),a=o+(e^n^s)+i[8]+2272392833&4294967295,o=e+(a<<11&4294967295|a>>>21),a=s+(o^e^n)+i[11]+1839030562&4294967295,s=o+(a<<16&4294967295|a>>>16),a=n+(s^o^e)+i[14]+4259657740&4294967295,n=s+(a<<23&4294967295|a>>>9),a=e+(n^s^o)+i[1]+2763975236&4294967295,e=n+(a<<4&4294967295|a>>>28),a=o+(e^n^s)+i[4]+1272893353&4294967295,o=e+(a<<11&4294967295|a>>>21),a=s+(o^e^n)+i[7]+4139469664&4294967295,s=o+(a<<16&4294967295|a>>>16),a=n+(s^o^e)+i[10]+3200236656&4294967295,n=s+(a<<23&4294967295|a>>>9),a=e+(n^s^o)+i[13]+681279174&4294967295,e=n+(a<<4&4294967295|a>>>28),a=o+(e^n^s)+i[0]+3936430074&4294967295,o=e+(a<<11&4294967295|a>>>21),a=s+(o^e^n)+i[3]+3572445317&4294967295,s=o+(a<<16&4294967295|a>>>16),a=n+(s^o^e)+i[6]+76029189&4294967295,n=s+(a<<23&4294967295|a>>>9),a=e+(n^s^o)+i[9]+3654602809&4294967295,e=n+(a<<4&4294967295|a>>>28),a=o+(e^n^s)+i[12]+3873151461&4294967295,o=e+(a<<11&4294967295|a>>>21),a=s+(o^e^n)+i[15]+530742520&4294967295,s=o+(a<<16&4294967295|a>>>16),a=n+(s^o^e)+i[2]+3299628645&4294967295,n=s+(a<<23&4294967295|a>>>9),a=e+(s^(n|~o))+i[0]+4096336452&4294967295,e=n+(a<<6&4294967295|a>>>26),a=o+(n^(e|~s))+i[7]+1126891415&4294967295,o=e+(a<<10&4294967295|a>>>22),a=s+(e^(o|~n))+i[14]+2878612391&4294967295,s=o+(a<<15&4294967295|a>>>17),a=n+(o^(s|~e))+i[5]+4237533241&4294967295,n=s+(a<<21&4294967295|a>>>11),a=e+(s^(n|~o))+i[12]+1700485571&4294967295,e=n+(a<<6&4294967295|a>>>26),a=o+(n^(e|~s))+i[3]+2399980690&4294967295,o=e+(a<<10&4294967295|a>>>22),a=s+(e^(o|~n))+i[10]+4293915773&4294967295,s=o+(a<<15&4294967295|a>>>17),a=n+(o^(s|~e))+i[1]+2240044497&4294967295,n=s+(a<<21&4294967295|a>>>11),a=e+(s^(n|~o))+i[8]+1873313359&4294967295,e=n+(a<<6&4294967295|a>>>26),a=o+(n^(e|~s))+i[15]+4264355552&4294967295,o=e+(a<<10&4294967295|a>>>22),a=s+(e^(o|~n))+i[6]+2734768916&4294967295,s=o+(a<<15&4294967295|a>>>17),a=n+(o^(s|~e))+i[13]+1309151649&4294967295,n=s+(a<<21&4294967295|a>>>11),a=e+(s^(n|~o))+i[4]+4149444226&4294967295,e=n+(a<<6&4294967295|a>>>26),a=o+(n^(e|~s))+i[11]+3174756917&4294967295,o=e+(a<<10&4294967295|a>>>22),a=s+(e^(o|~n))+i[2]+718787259&4294967295,s=o+(a<<15&4294967295|a>>>17),a=n+(o^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(a<<21&4294967295|a>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+o&4294967295}S$1.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,o=0;o<e;){if(s==0)for(;o<=n;)Sd(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(i[s++]=t.charCodeAt(o++),s==this.blockSize){Sd(this,i),s=0;break}}else for(;o<e;)if(i[s++]=t[o++],s==this.blockSize){Sd(this,i),s=0;break}}this.h=s,this.i+=e};S$1.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function T(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var o=t[s]|0;i&&o==e||(n[s]=o,i=!1)}this.g=n}var sa$1={};function Td(t){return-128<=t&&128>t?ra$1(t,function(e){return new T([e|0],0>e?-1:0)}):new T([t|0],0>t?-1:0)}function U$1(t){if(isNaN(t)||!isFinite(t))return V$1;if(0>t)return W$1(U$1(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Ud;return new T(e,0)}function Vd(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return W$1(Vd(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=U$1(Math.pow(e,8)),i=V$1,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),e);8>o?(o=U$1(Math.pow(e,o)),i=i.R(o).add(U$1(a))):(i=i.R(n),i=i.add(U$1(a)))}return i}var Ud=4294967296,V$1=Td(0),Wd=Td(1),Xd=Td(16777216);k$1=T.prototype;k$1.ea=function(){if(X(this))return-W$1(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Ud+i)*e,e*=Ud}return t};k$1.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Y$1(this))return"0";if(X(this))return"-"+W$1(this).toString(t);for(var e=U$1(Math.pow(t,6)),n=this,i="";;){var s=Yd(n,e).g;n=Zd(n,s.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Y$1(n))return o+i;for(;6>o.length;)o="0"+o;i=o+i}};k$1.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Y$1(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function X(t){return t.h==-1}k$1.X=function(t){return t=Zd(this,t),X(t)?-1:Y$1(t)?0:1};function W$1(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new T(n,~t.h).add(Wd)}k$1.abs=function(){return X(this)?W$1(this):this};k$1.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var o=i+(this.D(s)&65535)+(t.D(s)&65535),a=(o>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new T(n,n[n.length-1]&-2147483648?-1:0)};function Zd(t,e){return t.add(W$1(e))}k$1.R=function(t){if(Y$1(this)||Y$1(t))return V$1;if(X(this))return X(t)?W$1(this).R(W$1(t)):W$1(W$1(this).R(t));if(X(t))return W$1(this.R(W$1(t)));if(0>this.X(Xd)&&0>t.X(Xd))return U$1(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var o=this.D(i)>>>16,a=this.D(i)&65535,c=t.D(s)>>>16,u=t.D(s)&65535;n[2*i+2*s]+=a*u,$d(n,2*i+2*s),n[2*i+2*s+1]+=o*u,$d(n,2*i+2*s+1),n[2*i+2*s+1]+=a*c,$d(n,2*i+2*s+1),n[2*i+2*s+2]+=o*c,$d(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new T(n,0)};function $d(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ae(t,e){this.g=t,this.h=e}function Yd(t,e){if(Y$1(e))throw Error("division by zero");if(Y$1(t))return new ae(V$1,V$1);if(X(t))return e=Yd(W$1(t),e),new ae(W$1(e.g),W$1(e.h));if(X(e))return e=Yd(t,W$1(e)),new ae(W$1(e.g),e.h);if(30<t.g.length){if(X(t)||X(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wd,i=e;0>=i.X(t);)n=be(n),i=be(i);var s=Z$1(n,1),o=Z$1(i,1);for(i=Z$1(i,2),n=Z$1(n,2);!Y$1(i);){var a=o.add(i);0>=a.X(t)&&(s=s.add(n),o=a),i=Z$1(i,1),n=Z$1(n,1)}return e=Zd(t,s.R(e)),new ae(s,e)}for(s=V$1;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),o=U$1(n),a=o.R(e);X(a)||0<a.X(t);)n-=i,o=U$1(n),a=o.R(e);Y$1(o)&&(o=Wd),s=s.add(o),t=Zd(t,a)}return new ae(s,t)}k$1.gb=function(t){return Yd(this,t).h};k$1.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new T(n,this.h&t.h)};k$1.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new T(n,this.h|t.h)};k$1.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new T(n,this.h^t.h)};function be(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new T(n,t.h)}function Z$1(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],o=0;o<i;o++)s[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new T(s,t.h)}Od.prototype.createWebChannel=Od.prototype.g;Q$1.prototype.send=Q$1.prototype.u;Q$1.prototype.open=Q$1.prototype.m;Q$1.prototype.close=Q$1.prototype.close;Sb.NO_ERROR=0;Sb.TIMEOUT=8;Sb.HTTP_ERROR=6;Tb.COMPLETE="complete";Wb.EventType=Xb;Xb.OPEN="a";Xb.CLOSE="b";Xb.ERROR="c";Xb.MESSAGE="d";B.prototype.listen=B.prototype.O;P.prototype.listenOnce=P.prototype.P;P.prototype.getLastError=P.prototype.Sa;P.prototype.getLastErrorCode=P.prototype.Ia;P.prototype.getStatus=P.prototype.da;P.prototype.getResponseJson=P.prototype.Wa;P.prototype.getResponseText=P.prototype.ja;P.prototype.send=P.prototype.ha;P.prototype.setWithCredentials=P.prototype.Oa;S$1.prototype.digest=S$1.prototype.l;S$1.prototype.reset=S$1.prototype.reset;S$1.prototype.update=S$1.prototype.j;T.prototype.add=T.prototype.add;T.prototype.multiply=T.prototype.R;T.prototype.modulo=T.prototype.gb;T.prototype.compare=T.prototype.X;T.prototype.toNumber=T.prototype.ea;T.prototype.toString=T.prototype.toString;T.prototype.getBits=T.prototype.D;T.fromNumber=U$1;T.fromString=Vd;var createWebChannelTransport=function(){return new Od},getStatEventTarget=function(){return Mb()},ErrorCode=Sb,EventType=Tb,Event=E,Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},FetchXmlHttpFactory=ld,WebChannel=Wb,XhrIo=P,Md5=S$1,Integer=T;const b="@firebase/firestore";/**
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
 */class V{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");/**
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
 */let S="9.23.0";/**
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
 */const D=new Logger("@firebase/firestore");function C(){return D.logLevel}function N(t,...e){if(D.logLevel<=LogLevel.DEBUG){const n=e.map($);D.debug(`Firestore (${S}): ${t}`,...n)}}function k(t,...e){if(D.logLevel<=LogLevel.ERROR){const n=e.map($);D.error(`Firestore (${S}): ${t}`,...n)}}function M(t,...e){if(D.logLevel<=LogLevel.WARN){const n=e.map($);D.warn(`Firestore (${S}): ${t}`,...n)}}function $(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${S}) INTERNAL ASSERTION FAILED: `+t;throw k(e),new Error(e)}function F(t,e){t||O()}function L(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends FirebaseError{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class K{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class G{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Q{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(V.UNAUTHENTICATED))}shutdown(){}}class j{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class z{constructor(e){this.t=e,this.currentUser=V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let o=new K;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new K,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new K)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(F(typeof i.accessToken=="string"),new G(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new V(e)}}class W{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=V.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class H{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new W(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Y{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.T;return this.T=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.I.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.I.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.T=n.token,new J(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Z(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class tt{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Z(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%e.length))}return i}}function et(t,e){return t<e?-1:t>e?1:0}function nt(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new it(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class rt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rt(e)}static min(){return new rt(new it(0,0))}static max(){return new rt(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ot{constructor(e,n,i){n===void 0?n=0:n>e.length&&O(),i===void 0?i=e.length-n:i>e.length-n&&O(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ot.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ot?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=e.get(s),a=n.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ut extends ot{construct(e,n,i){return new ut(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new U(q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new ut(n)}static emptyPath(){return new ut([])}}const ct=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends ot{construct(e,n,i){return new at(e,n,i)}static isValidIdentifier(e){return ct.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new U(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new U(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(i+=c,s++):(o(),s++)}if(o(),a)throw new U(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class ht{constructor(e){this.path=e}static fromPath(e){return new ht(ut.fromString(e))}static fromName(e){return new ht(ut.fromString(e).popFirst(5))}static empty(){return new ht(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ut.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ht(new ut(e.slice()))}}function yt(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=rt.fromTimestamp(i===1e9?new it(n+1,0):new it(n,i));return new It(s,ht.empty(),e)}function pt(t){return new It(t.readTime,t.key,-1)}class It{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new It(rt.min(),ht.empty(),-1)}static max(){return new It(rt.max(),ht.empty(),-1)}}function Tt(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ht.comparator(t.documentKey,e.documentKey),n!==0?n:et(t.largestBatchId,e.largestBatchId))}/**
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
 */const Et="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class At{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vt(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==Et)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Rt{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Rt((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Rt?n:Rt.resolve(n)}catch(n){return Rt.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Rt.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Rt.reject(n)}static resolve(e){return new Rt((n,i)=>{n(e)})}static reject(e){return new Rt((n,i)=>{i(e)})}static waitFor(e){return new Rt((n,i)=>{let s=0,o=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&n()},u=>i(u))}),a=!0,o===s&&n()})}static or(e){let n=Rt.resolve(!1);for(const i of e)n=n.next(s=>s?Rt.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,o)=>{i.push(n.call(this,s,o))}),this.waitFor(i)}static mapArray(e,n){return new Rt((i,s)=>{const o=e.length,a=new Array(o);let c=0;for(let u=0;u<o;u++){const h=u;n(e[h]).next(d=>{a[h]=d,++c,c===o&&i(a)},d=>s(d))}})}static doWhile(e,n){return new Rt((i,s)=>{const o=()=>{e()===!0?n().next(()=>{o()},s):i()};o()})}}function Dt(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ot{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ot.ct=-1;function Ft(t){return t==null}function Bt(t){return t===0&&1/t==-1/0}function Lt(t){return typeof t=="number"&&Number.isInteger(t)&&!Bt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function me(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ge(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ye(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class pe{constructor(e,n){this.comparator=e,this.root=n||Te.EMPTY}insert(e,n){return new pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ie(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ie(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ie(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ie(this.root,e,this.comparator,!0)}}class Ie{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?i(e.key,n):1,n&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,n,i,s,o){this.key=e,this.value=n,this.color=i??Te.RED,this.left=s??Te.EMPTY,this.right=o??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,o){return new Te(e??this.key,n??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,n,i),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ae(this.data.getIterator())}getIteratorFrom(e){return new Ae(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class Ae{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Re{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Re([])}unionWith(e){let n=new Ee(at.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Re(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return nt(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Pe extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Pe("Invalid base64 string: "+s):s}}(e);return new Ve(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const Se=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function De(t){if(F(!!t),typeof t=="string"){let e=0;const n=Se.exec(t);if(F(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xe(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
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
 */function Ne(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ke(t){const e=t.mapValue.fields.__previous_value__;return Ne(e)?ke(e):e}function Me(t){const e=De(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class $e{constructor(e,n,i,s,o,a,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class Oe{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oe&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Le(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ne(t)?4:en(t)?9007199254740991:10:O()}function qe(t,e){if(t===e)return!0;const n=Le(t);if(n!==Le(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Me(t).isEqual(Me(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=De(i.timestampValue),a=De(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xe(i.bytesValue).isEqual(xe(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),a=Ce(s.doubleValue);return o===a?Bt(o)===Bt(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return nt(t.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(me(o)!==me(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!qe(o[c],a[c])))return!1;return!0}(t,e);default:return O()}}function Ue(t,e){return(t.values||[]).find(n=>qe(n,e))!==void 0}function Ke(t,e){if(t===e)return 0;const n=Le(t),i=Le(e);if(n!==i)return et(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return et(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ce(s.integerValue||s.doubleValue),c=Ce(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Ge(t.timestampValue,e.timestampValue);case 4:return Ge(Me(t),Me(e));case 5:return et(t.stringValue,e.stringValue);case 6:return function(s,o){const a=xe(s),c=xe(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=et(a[u],c[u]);if(h!==0)return h}return et(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=et(Ce(s.latitude),Ce(o.latitude));return a!==0?a:et(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const h=Ke(a[u],c[u]);if(h)return h}return et(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Fe.mapValue&&o===Fe.mapValue)return 0;if(s===Fe.mapValue)return 1;if(o===Fe.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const f=et(c[d],h[d]);if(f!==0)return f;const g=Ke(a[c[d]],u[h[d]]);if(g!==0)return g}return et(c.length,h.length)}(t.mapValue,e.mapValue);default:throw O()}}function Ge(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return et(t,e);const n=De(t),i=De(e),s=et(n.seconds,i.seconds);return s!==0?s:et(n.nanos,i.nanos)}function Qe(t){return je(t)}function je(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=De(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xe(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ht.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",o=!0;for(const a of i.values||[])o?o=!1:s+=",",s+=je(a);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let o="{",a=!0;for(const c of s)a?a=!1:o+=",",o+=`${c}:${je(i.fields[c])}`;return o+"}"}(t.mapValue):O();var e,n}function We(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function He(t){return!!t&&"integerValue"in t}function Je(t){return!!t&&"arrayValue"in t}function Ye(t){return!!t&&"nullValue"in t}function Xe(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ze(t){return!!t&&"mapValue"in t}function tn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ge(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=tn(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function en(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ze(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tn(n)}setAll(e){let n=at.emptyPath(),i={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,i,s),i={},s=[],n=c.popLast()}a?i[c.lastSegment()]=tn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,i,s)}delete(e){const n=this.field(e.popLast());Ze(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Ze(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){ge(n,(s,o)=>e[s]=o);for(const s of i)delete e[s]}clone(){return new un(tn(this.value))}}function cn(t){const e=[];return ge(t.fields,(n,i)=>{const s=new at([n]);if(Ze(i)){const o=cn(i.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Re(e)}/**
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
 */class an{constructor(e,n,i,s,o,a,c){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new an(e,0,rt.min(),rt.min(),rt.min(),un.empty(),0)}static newFoundDocument(e,n,i,s){return new an(e,1,n,rt.min(),i,s,0)}static newNoDocument(e,n){return new an(e,2,n,rt.min(),rt.min(),un.empty(),0)}static newUnknownDocument(e,n){return new an(e,3,n,rt.min(),rt.min(),un.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(rt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hn{constructor(e,n){this.position=e,this.inclusive=n}}function ln(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const o=e[s],a=t.position[s];if(o.field.isKeyField()?i=ht.comparator(ht.fromName(a.referenceValue),n.key):i=Ke(a,n.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function fn(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qe(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dn{constructor(e,n="asc"){this.field=e,this.dir=n}}function wn(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _n{}class mn extends _n{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Pn(e,n,i):n==="array-contains"?new Dn(e,i):n==="in"?new Cn(e,i):n==="not-in"?new xn(e,i):n==="array-contains-any"?new Nn(e,i):new mn(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new bn(e,i):new Vn(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ke(n,this.value)):n!==null&&Le(this.value)===Le(n)&&this.matchesComparison(Ke(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gn extends _n{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new gn(e,n)}matches(e){return yn(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function yn(t){return t.op==="and"}function In(t){return Tn(t)&&yn(t)}function Tn(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function En(t){if(t instanceof mn)return t.field.canonicalString()+t.op.toString()+Qe(t.value);if(In(t))return t.filters.map(e=>En(e)).join(",");{const e=t.filters.map(n=>En(n)).join(",");return`${t.op}(${e})`}}function An(t,e){return t instanceof mn?function(n,i){return i instanceof mn&&n.op===i.op&&n.field.isEqual(i.field)&&qe(n.value,i.value)}(t,e):t instanceof gn?function(n,i){return i instanceof gn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,a)=>s&&An(o,i.filters[a]),!0):!1}(t,e):void O()}function Rn(t){return t instanceof mn?function(e){return`${e.field.canonicalString()} ${e.op} ${Qe(e.value)}`}(t):t instanceof gn?function(e){return e.op.toString()+" {"+e.getFilters().map(Rn).join(" ,")+"}"}(t):"Filter"}class Pn extends mn{constructor(e,n,i){super(e,n,i),this.key=ht.fromName(i.referenceValue)}matches(e){const n=ht.comparator(e.key,this.key);return this.matchesComparison(n)}}class bn extends mn{constructor(e,n){super(e,"in",n),this.keys=Sn("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Vn extends mn{constructor(e,n){super(e,"not-in",n),this.keys=Sn("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sn(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ht.fromName(i.referenceValue))}class Dn extends mn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Je(n)&&Ue(n.arrayValue,this.value)}}class Cn extends mn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ue(this.value.arrayValue,n)}}class xn extends mn{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ue(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ue(this.value.arrayValue,n)}}class Nn extends mn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Je(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ue(this.value.arrayValue,i))}}/**
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
 */class kn{constructor(e,n=null,i=[],s=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.dt=null}}function Mn(t,e=null,n=[],i=[],s=null,o=null,a=null){return new kn(t,e,n,i,s,o,a)}function $n(t){const e=L(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>En(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ft(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Qe(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Qe(i)).join(",")),e.dt=n}return e.dt}function On(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wn(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!An(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fn(t.startAt,e.startAt)&&fn(t.endAt,e.endAt)}function Fn(t){return ht.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Un{constructor(e,n=null,i=[],s=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function Kn(t,e,n,i,s,o,a,c){return new Un(t,e,n,i,s,o,a,c)}function Gn(t){return new Un(t)}function Qn(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jn(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zn(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Wn(t){return t.collectionGroup!==null}function Hn(t){const e=L(t);if(e.wt===null){e.wt=[];const n=zn(e),i=jn(e);if(n!==null&&i===null)n.isKeyField()||e.wt.push(new dn(n)),e.wt.push(new dn(at.keyField(),"asc"));else{let s=!1;for(const o of e.explicitOrderBy)e.wt.push(o),o.field.isKeyField()&&(s=!0);if(!s){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new dn(at.keyField(),o))}}}return e.wt}function Jn(t){const e=L(t);if(!e._t)if(e.limitType==="F")e._t=Mn(e.path,e.collectionGroup,Hn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const o of Hn(e)){const a=o.dir==="desc"?"asc":"desc";n.push(new dn(o.field,a))}const i=e.endAt?new hn(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new hn(e.startAt.position,e.startAt.inclusive):null;e._t=Mn(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e._t}function Yn(t,e){e.getFirstInequalityField(),zn(t);const n=t.filters.concat([e]);return new Un(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xn(t,e,n){return new Un(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zn(t,e){return On(Jn(t),Jn(e))&&t.limitType===e.limitType}function ts(t){return`${$n(Jn(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Rn(i)).join(", ")}]`),Ft(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Qe(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Qe(i)).join(",")),`Target(${n})`}(Jn(t))}; limitType=${t.limitType})`}function ns(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ht.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of Hn(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,o,a){const c=ln(s,o,a);return s.inclusive?c<=0:c<0}(n.startAt,Hn(n),i)||n.endAt&&!function(s,o,a){const c=ln(s,o,a);return s.inclusive?c>=0:c>0}(n.endAt,Hn(n),i))}(t,e)}function ss(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function is(t){return(e,n)=>{let i=!1;for(const s of Hn(t)){const o=rs(s,e,n);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function rs(t,e,n){const i=t.field.isKeyField()?ht.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Ke(c,u):O()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return O()}}/**
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
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ge(this.inner,(n,i)=>{for(const[s,o]of i)e(s,o)})}isEmpty(){return ye(this.inner)}size(){return this.innerSize}}/**
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
 */const us=new pe(ht.comparator);function cs(){return us}const as=new pe(ht.comparator);function hs(...t){let e=as;for(const n of t)e=e.insert(n.key,n);return e}function ls(t){let e=as;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function fs(){return ws()}function ds(){return ws()}function ws(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const _s=new pe(ht.comparator),ms=new Ee(ht.comparator);function gs(...t){let e=ms;for(const n of t)e=e.add(n);return e}const ys=new Ee(et);function ps(){return ys}/**
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
 */function Is(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bt(e)?"-0":e}}function Ts(t){return{integerValue:""+t}}function Es(t,e){return Lt(e)?Ts(e):Is(t,e)}/**
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
 */class As{constructor(){this._=void 0}}function vs(t,e,n){return t instanceof bs?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ne(s)&&(s=ke(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Vs?Ss(t,e):t instanceof Ds?Cs(t,e):function(i,s){const o=Ps(i,s),a=Ns(o)+Ns(i.gt);return He(o)&&He(i.gt)?Ts(a):Is(i.serializer,a)}(t,e)}function Rs(t,e,n){return t instanceof Vs?Ss(t,e):t instanceof Ds?Cs(t,e):n}function Ps(t,e){return t instanceof xs?He(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class bs extends As{}class Vs extends As{constructor(e){super(),this.elements=e}}function Ss(t,e){const n=ks(e);for(const i of t.elements)n.some(s=>qe(s,i))||n.push(i);return{arrayValue:{values:n}}}class Ds extends As{constructor(e){super(),this.elements=e}}function Cs(t,e){let n=ks(e);for(const i of t.elements)n=n.filter(s=>!qe(s,i));return{arrayValue:{values:n}}}class xs extends As{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Ns(t){return Ce(t.integerValue||t.doubleValue)}function ks(t){return Je(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Ms{constructor(e,n){this.field=e,this.transform=n}}function $s(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Vs&&i instanceof Vs||n instanceof Ds&&i instanceof Ds?nt(n.elements,i.elements,qe):n instanceof xs&&i instanceof xs?qe(n.gt,i.gt):n instanceof bs&&i instanceof bs}(t.transform,e.transform)}class Os{constructor(e,n){this.version=e,this.transformResults=n}}class Fs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fs}static exists(e){return new Fs(void 0,e)}static updateTime(e){return new Fs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ls{}function qs(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ys(t.key,Fs.none()):new js(t.key,t.data,Fs.none());{const n=t.data,i=un.empty();let s=new Ee(at.comparator);for(let o of e.fields)if(!s.has(o)){let a=n.field(o);a===null&&o.length>1&&(o=o.popLast(),a=n.field(o)),a===null?i.delete(o):i.set(o,a),s=s.add(o)}return new zs(t.key,i,new Re(s.toArray()),Fs.none())}}function Us(t,e,n){t instanceof js?function(i,s,o){const a=i.value.clone(),c=Hs(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zs?function(i,s,o){if(!Bs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Hs(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Ws(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,i){return t instanceof js?function(s,o,a,c){if(!Bs(s.precondition,o))return a;const u=s.value.clone(),h=Js(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,i):t instanceof zs?function(s,o,a,c){if(!Bs(s.precondition,o))return a;const u=Js(s.fieldTransforms,c,o),h=o.data;return h.setAll(Ws(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,i):function(s,o,a){return Bs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Gs(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),o=Ps(i.transform,s||null);o!=null&&(n===null&&(n=un.empty()),n.set(i.field,o))}return n||null}function Qs(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&nt(n,i,(s,o)=>$s(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class js extends Ls{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zs extends Ls{constructor(e,n,i,s,o=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ws(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Hs(t,e,n){const i=new Map;F(t.length===n.length);for(let s=0;s<n.length;s++){const o=t[s],a=o.transform,c=e.data.field(o.field);i.set(o.field,Rs(a,c,n[s]))}return i}function Js(t,e,n){const i=new Map;for(const s of t){const o=s.transform,a=n.data.field(s.field);i.set(s.field,vs(o,a,e))}return i}class Ys extends Ls{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xs extends Ls{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zs{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Us(o,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Ks(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Ks(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=ds();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=n.has(s.key)?null:c;const u=qs(a,c);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(rt.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),gs())}isEqual(e){return this.batchId===e.batchId&&nt(this.mutations,e.mutations,(n,i)=>Qs(n,i))&&nt(this.baseMutations,e.baseMutations,(n,i)=>Qs(n,i))}}class ti{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){F(e.mutations.length===i.length);let s=_s;const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,i[a].version);return new ti(e,n,i,s)}}/**
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
 */class ei{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class si{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ii,ri;function oi(t){switch(t){default:return O();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function ui(t){if(t===void 0)return k("GRPC error has no .code"),q.UNKNOWN;switch(t){case ii.OK:return q.OK;case ii.CANCELLED:return q.CANCELLED;case ii.UNKNOWN:return q.UNKNOWN;case ii.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ii.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ii.INTERNAL:return q.INTERNAL;case ii.UNAVAILABLE:return q.UNAVAILABLE;case ii.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ii.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ii.NOT_FOUND:return q.NOT_FOUND;case ii.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ii.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ii.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ii.ABORTED:return q.ABORTED;case ii.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ii.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ii.DATA_LOSS:return q.DATA_LOSS;default:return O()}}(ri=ii||(ii={}))[ri.OK=0]="OK",ri[ri.CANCELLED=1]="CANCELLED",ri[ri.UNKNOWN=2]="UNKNOWN",ri[ri.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ri[ri.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ri[ri.NOT_FOUND=5]="NOT_FOUND",ri[ri.ALREADY_EXISTS=6]="ALREADY_EXISTS",ri[ri.PERMISSION_DENIED=7]="PERMISSION_DENIED",ri[ri.UNAUTHENTICATED=16]="UNAUTHENTICATED",ri[ri.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ri[ri.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ri[ri.ABORTED=10]="ABORTED",ri[ri.OUT_OF_RANGE=11]="OUT_OF_RANGE",ri[ri.UNIMPLEMENTED=12]="UNIMPLEMENTED",ri[ri.INTERNAL=13]="INTERNAL",ri[ri.UNAVAILABLE=14]="UNAVAILABLE",ri[ri.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ci{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ai}static getOrCreateInstance(){return ai===null&&(ai=new ci),ai}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ai=null;/**
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
 */function hi(){return new TextEncoder}/**
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
 */const li=new Integer([4294967295,4294967295],0);function fi(t){const e=hi().encode(t),n=new Md5;return n.update(e),new Uint8Array(n.digest())}function di(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Integer([n,i],0),new Integer([s,o],0)]}class wi{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new _i(`Invalid padding: ${n}`);if(i<0)throw new _i(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new _i(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new _i(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Integer.fromNumber(this.It)}Et(e,n,i){let s=e.add(n.multiply(Integer.fromNumber(i)));return s.compare(li)===1&&(s=new Integer([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=fi(e),[i,s]=di(n);for(let o=0;o<this.hashCount;o++){const a=this.Et(i,s,o);if(!this.At(a))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new wi(o,s,n);return i.forEach(c=>a.insert(c)),a}insert(e){if(this.It===0)return;const n=fi(e),[i,s]=di(n);for(let o=0;o<this.hashCount;o++){const a=this.Et(i,s,o);this.Rt(a)}}Rt(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class _i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mi{constructor(e,n,i,s,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new mi(rt.min(),s,new pe(et),cs(),gs())}}class gi{constructor(e,n,i,s,o){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new gi(i,n,gs(),gs(),gs())}}/**
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
 */class yi{constructor(e,n,i,s){this.Pt=e,this.removedTargetIds=n,this.key=i,this.bt=s}}class pi{constructor(e,n){this.targetId=e,this.Vt=n}}class Ii{constructor(e,n,i=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Ti{constructor(){this.St=0,this.Dt=vi(),this.Ct=Ve.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=gs(),n=gs(),i=gs();return this.Dt.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:O()}}),new gi(this.Ct,this.xt,e,n,i)}Ft(){this.Nt=!1,this.Dt=vi()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Ei{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=cs(),this.zt=Ai(),this.Wt=new pe(et)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const i=this.Zt(n);switch(e.state){case 0:this.te(n)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(n);break;case 3:this.te(n)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),i.$t(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((i,s)=>{this.te(s)&&n(s)})}ne(e){var n;const i=e.targetId,s=e.Vt.count,o=this.se(i);if(o){const a=o.target;if(Fn(a))if(s===0){const c=new ht(a.path);this.Yt(i,c,an.newNoDocument(c,rt.min()))}else F(s===1);else{const c=this.ie(i);if(c!==s){const u=this.re(e,c);if(u!==0){this.ee(i);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,h)}(n=ci.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f){var g,m,_,ee,te,ne;const re={localCacheCount:d,existenceFilterCount:f.count},ie=f.unchangedNames;return ie&&(re.bloomFilter={applied:h===0,hashCount:(g=ie==null?void 0:ie.hashCount)!==null&&g!==void 0?g:0,bitmapLength:(ee=(_=(m=ie==null?void 0:ie.bits)===null||m===void 0?void 0:m.bitmap)===null||_===void 0?void 0:_.length)!==null&&ee!==void 0?ee:0,padding:(ne=(te=ie==null?void 0:ie.bits)===null||te===void 0?void 0:te.padding)!==null&&ne!==void 0?ne:0}),re}(u,c,e.Vt))}}}}re(e,n){const{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:o="",padding:a=0},hashCount:c=0}=i;let u,h;try{u=xe(o).toUint8Array()}catch(d){if(d instanceof Pe)return M("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw d}try{h=new wi(u,a,c)}catch(d){return M(d instanceof _i?"BloomFilter error: ":"Applying bloom filter failed: ",d),1}return h.It===0?1:s!==n-this.oe(e.targetId,h)?2:0}oe(e,n){const i=this.Gt.getRemoteKeysForTarget(e);let s=0;return i.forEach(o=>{const a=this.Gt.ue(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;n.vt(c)||(this.Yt(e,o,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((o,a)=>{const c=this.se(a);if(c){if(o.current&&Fn(c.target)){const u=new ht(c.target.path);this.jt.get(u)!==null||this.ae(a,u)||this.Yt(a,u,an.newNoDocument(u,e))}o.Mt&&(n.set(a,o.Ot()),o.Ft())}});let i=gs();this.zt.forEach((o,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.se(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(i=i.add(o))}),this.jt.forEach((o,a)=>a.setReadTime(e));const s=new mi(e,n,this.Wt,this.jt,i);return this.jt=cs(),this.zt=Ai(),this.Wt=new pe(et),s}Jt(e,n){if(!this.te(e))return;const i=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,i),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,i){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),i&&(this.jt=this.jt.insert(n,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Ti,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ee(et),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ti),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Ai(){return new pe(ht.comparator)}function vi(){return new pe(ht.comparator)}const Ri=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Pi=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),bi=(()=>({and:"AND",or:"OR"}))();class Vi{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Si(t,e){return t.useProto3Json||Ft(e)?e:{value:e}}function Di(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ci(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xi(t,e){return Di(t,e.toTimestamp())}function Ni(t){return F(!!t),rt.fromTimestamp(function(e){const n=De(e);return new it(n.seconds,n.nanos)}(t))}function ki(t,e){return function(n){return new ut(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Mi(t){const e=ut.fromString(t);return F(ur(e)),e}function $i(t,e){return ki(t.databaseId,e.path)}function Oi(t,e){const n=Mi(e);if(n.get(1)!==t.databaseId.projectId)throw new U(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ht(qi(n))}function Fi(t,e){return ki(t.databaseId,e)}function Bi(t){const e=Mi(t);return e.length===4?ut.emptyPath():qi(e)}function Li(t){return new ut(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qi(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ui(t,e,n){return{name:$i(t,e),fields:n.value.mapValue.fields}}function Qi(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(u,h){return u.useProto3Json?(F(h===void 0||typeof h=="string"),Ve.fromBase64String(h||"")):(F(h===void 0||h instanceof Uint8Array),Ve.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(u){const h=u.code===void 0?q.UNKNOWN:ui(u.code);return new U(h,u.message||"")}(a);n=new Ii(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Oi(t,i.document.name),o=Ni(i.document.updateTime),a=i.document.createTime?Ni(i.document.createTime):rt.min(),c=new un({mapValue:{fields:i.document.fields}}),u=an.newFoundDocument(s,o,a,c),h=i.targetIds||[],d=i.removedTargetIds||[];n=new yi(h,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Oi(t,i.document),o=i.readTime?Ni(i.readTime):rt.min(),a=an.newNoDocument(s,o),c=i.removedTargetIds||[];n=new yi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Oi(t,i.document),o=i.removedTargetIds||[];n=new yi([],o,s,null)}else{if(!("filter"in e))return O();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,a=new si(s,o),c=i.targetId;n=new pi(c,a)}}return n}function ji(t,e){let n;if(e instanceof js)n={update:Ui(t,e.key,e.value)};else if(e instanceof Ys)n={delete:$i(t,e.key)};else if(e instanceof zs)n={update:Ui(t,e.key,e.data),updateMask:or(e.fieldMask)};else{if(!(e instanceof Xs))return O();n={verify:$i(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof bs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ds)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xs)return{fieldPath:o.field.canonicalString(),increment:a.gt};throw O()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xi(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:O()}(t,e.precondition)),n}function Wi(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ni(i.updateTime):Ni(s);return o.isEqual(rt.min())&&(o=Ni(s)),new Os(o,i.transformResults||[])}(n,e))):[]}function Hi(t,e){return{documents:[Fi(t,e.path)]}}function Ji(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Fi(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fi(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(u){if(u.length!==0)return rr(gn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(d){return{field:sr(d.field),direction:tr(d.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Si(t,e.limit);var c;return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Yi(t){let e=Bi(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){F(i===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let o=[];n.where&&(o=function(d){const f=Zi(d);return f instanceof gn&&In(f)?f.getFilters():[f]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(d=>function(f){return new dn(ir(f.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(d)));let c=null;n.limit&&(c=function(d){let f;return f=typeof d=="object"?d.value:d,Ft(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(d){const f=!!d.before,g=d.values||[];return new hn(g,f)}(n.startAt));let h=null;return n.endAt&&(h=function(d){const f=!d.before,g=d.values||[];return new hn(g,f)}(n.endAt)),Kn(e,s,a,o,c,"F",u,h)}function Xi(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zi(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ir(e.unaryFilter.field);return mn.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ir(e.unaryFilter.field);return mn.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ir(e.unaryFilter.field);return mn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ir(e.unaryFilter.field);return mn.create(o,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(e){return mn.create(ir(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return gn.create(e.compositeFilter.filters.map(n=>Zi(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(t):O()}function tr(t){return Ri[t]}function er(t){return Pi[t]}function nr(t){return bi[t]}function sr(t){return{fieldPath:t.canonicalString()}}function ir(t){return at.fromServerFormat(t.fieldPath)}function rr(t){return t instanceof mn?function(e){if(e.op==="=="){if(Xe(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NAN"}};if(Ye(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xe(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NOT_NAN"}};if(Ye(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(e.field),op:er(e.op),value:e.value}}}(t):t instanceof gn?function(e){const n=e.getFilters().map(i=>rr(i));return n.length===1?n[0]:{compositeFilter:{op:nr(e.op),filters:n}}}(t):O()}function or(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ur(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cr{constructor(e,n,i,s,o=rt.min(),a=rt.min(),c=Ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ar{constructor(e){this.fe=e}}function yr(t){const e=Yi({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xn(e,e.limit,"L"):e}/**
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
 */class zr{constructor(){this.rn=new Wr}addToCollectionParentIndex(e,n){return this.rn.add(n),Rt.resolve()}getCollectionParents(e,n){return Rt.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return Rt.resolve()}deleteFieldIndex(e,n){return Rt.resolve()}getDocumentsMatchingTarget(e,n){return Rt.resolve(null)}getIndexType(e,n){return Rt.resolve(0)}getFieldIndexes(e,n){return Rt.resolve([])}getNextCollectionGroupToUpdate(e){return Rt.resolve(null)}getMinOffset(e,n){return Rt.resolve(It.min())}getMinOffsetFromCollectionGroup(e,n){return Rt.resolve(It.min())}updateCollectionGroup(e,n,i){return Rt.resolve()}updateIndexEntries(e,n){return Rt.resolve()}}class Wr{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Ee(ut.comparator),o=!s.has(i);return this.index[n]=s.add(i),o}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ee(ut.comparator)).toArray()}}/**
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
 */class lo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new lo(0)}static Mn(){return new lo(-1)}}/**
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
 */class vo{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,an.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?Rt.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class No{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ko{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Ks(i.mutation,s,Re.empty(),it.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,gs()).next(()=>i))}getLocalViewOfDocuments(e,n,i=gs()){const s=fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(o=>{let a=hs();return o.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const i=fs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,gs()))}populateOverlays(e,n,i){const s=[];return i.forEach(o=>{n.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,i,s){let o=cs();const a=ws(),c=ws();return n.forEach((u,h)=>{const d=i.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof zs)?o=o.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ks(d.mutation,h,d.mutation.getFieldMask(),it.now())):a.set(h.key,Re.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var f;return c.set(h,new No(d,(f=a.get(h))!==null&&f!==void 0?f:null))}),c))}recalculateAndSaveOverlays(e,n){const i=ws();let s=new pe((a,c)=>a-c),o=gs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=i.get(u)||Re.empty();d=c.applyToLocalView(h,d),i.set(u,d);const f=(s.get(c.batchId)||gs()).add(u);s=s.insert(c.batchId,f)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,d=u.value,f=ds();d.forEach(g=>{if(!o.has(g)){const m=qs(n.get(g),i.get(g));m!==null&&f.set(g,m),o=o.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,f))}return Rt.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return ht.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wn(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-o.size):Rt.resolve(fs());let c=-1,u=o;return a.next(h=>Rt.forEach(h,(d,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),o.get(d)?Rt.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,h,o)).next(()=>this.computeViews(e,u,h,gs())).next(d=>({batchId:c,changes:ls(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ht(n)).next(i=>{let s=hs();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let o=hs();return this.indexManager.getCollectionParents(e,s).next(a=>Rt.forEach(a,c=>{const u=function(h,d){return new Un(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,i).next(h=>{h.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,an.newInvalidDocument(h)))});let a=hs();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&Ks(h.mutation,u,Re.empty(),it.now()),ns(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class Mo{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return Rt.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var i;return this.cs.set(n.id,{id:(i=n).id,version:i.version,createTime:Ni(i.createTime)}),Rt.resolve()}getNamedQuery(e,n){return Rt.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(i){return{name:i.name,query:yr(i.bundledQuery),readTime:Ni(i.readTime)}}(n)),Rt.resolve()}}/**
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
 */class $o{constructor(){this.overlays=new pe(ht.comparator),this.ls=new Map}getOverlay(e,n){return Rt.resolve(this.overlays.get(n))}getOverlays(e,n){const i=fs();return Rt.forEach(n,s=>this.getOverlay(e,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,o)=>{this.we(e,n,o)}),Rt.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.ls.delete(i)),Rt.resolve()}getOverlaysForCollection(e,n,i){const s=fs(),o=n.length+1,a=new ht(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===o&&u.largestBatchId>i&&s.set(u.getKey(),u)}return Rt.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let o=new pe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let d=o.get(h.largestBatchId);d===null&&(d=fs(),o=o.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=fs(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return Rt.resolve(c)}we(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new ei(n,i));let o=this.ls.get(n);o===void 0&&(o=gs(),this.ls.set(n,o)),this.ls.set(n,o.add(i.key))}}/**
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
 */class Oo{constructor(){this.fs=new Ee(Fo.ds),this.ws=new Ee(Fo._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const i=new Fo(e,n);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ys(new Fo(e,n))}ps(e,n){e.forEach(i=>this.removeReference(i,n))}Is(e){const n=new ht(new ut([])),i=new Fo(n,e),s=new Fo(n,e+1),o=[];return this.ws.forEachInRange([i,s],a=>{this.ys(a),o.push(a.key)}),o}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new ht(new ut([])),i=new Fo(n,e),s=new Fo(n,e+1);let o=gs();return this.ws.forEachInRange([i,s],a=>{o=o.add(a.key)}),o}containsKey(e){const n=new Fo(e,0),i=this.fs.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Fo{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return ht.comparator(e.key,n.key)||et(e.As,n.As)}static _s(e,n){return et(e.As,n.As)||ht.comparator(e.key,n.key)}}/**
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
 */class Bo{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ee(Fo.ds)}checkEmpty(e){return Rt.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const o=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zs(o,n,i,s);this.mutationQueue.push(a);for(const c of s)this.Rs=this.Rs.add(new Fo(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return Rt.resolve(a)}lookupMutationBatch(e,n){return Rt.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.bs(i),o=s<0?0:s;return Rt.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return Rt.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return Rt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Fo(n,0),s=new Fo(n,Number.POSITIVE_INFINITY),o=[];return this.Rs.forEachInRange([i,s],a=>{const c=this.Ps(a.As);o.push(c)}),Rt.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ee(et);return n.forEach(s=>{const o=new Fo(s,0),a=new Fo(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([o,a],c=>{i=i.add(c.As)})}),Rt.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let o=i;ht.isDocumentKey(o)||(o=o.child(""));const a=new Fo(new ht(o),0);let c=new Ee(et);return this.Rs.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.As)),!0)},a),Rt.resolve(this.Vs(c))}Vs(e){const n=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){F(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return Rt.forEach(n.mutations,s=>{const o=new Fo(s.key,n.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,n){const i=new Fo(n,0),s=this.Rs.firstAfterOrEqual(i);return Rt.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Rt.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Lo{constructor(e){this.Ds=e,this.docs=new pe(ht.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ds(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return Rt.resolve(i?i.document.mutableCopy():an.newInvalidDocument(n))}getEntries(e,n){let i=cs();return n.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():an.newInvalidDocument(s))}),Rt.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let o=cs();const a=n.path,c=new ht(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Tt(pt(d),i)<=0||(s.has(d.key)||ns(n,d))&&(o=o.insert(d.key,d.mutableCopy()))}return Rt.resolve(o)}getAllFromCollectionGroup(e,n,i,s){O()}Cs(e,n){return Rt.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new qo(this)}getSize(e){return Rt.resolve(this.size)}}class qo extends vo{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),Rt.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class Uo{constructor(e){this.persistence=e,this.xs=new os(n=>$n(n),On),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Oo,this.targetCount=0,this.Ms=lo.kn()}forEachTarget(e,n){return this.xs.forEach((i,s)=>n(s)),Rt.resolve()}getLastRemoteSnapshotVersion(e){return Rt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Rt.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Rt.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ns&&(this.Ns=n),Rt.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new lo(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,Rt.resolve()}updateTargetData(e,n){return this.Fn(n),Rt.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,Rt.resolve()}removeTargets(e,n,i){let s=0;const o=[];return this.xs.forEach((a,c)=>{c.sequenceNumber<=n&&i.get(c.targetId)===null&&(this.xs.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),Rt.waitFor(o).next(()=>s)}getTargetCount(e){return Rt.resolve(this.targetCount)}getTargetData(e,n){const i=this.xs.get(n)||null;return Rt.resolve(i)}addMatchingKeys(e,n,i){return this.ks.gs(n,i),Rt.resolve()}removeMatchingKeys(e,n,i){this.ks.ps(n,i);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),Rt.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),Rt.resolve()}getMatchingKeysForTargetId(e,n){const i=this.ks.Es(n);return Rt.resolve(i)}containsKey(e,n){return Rt.resolve(this.ks.containsKey(n))}}/**
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
 */class Ko{constructor(e,n){this.$s={},this.overlays={},this.Os=new Ot(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Uo(this),this.indexManager=new zr,this.remoteDocumentCache=function(i){return new Lo(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new ar(n),this.qs=new Mo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $o,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.$s[e.toKey()];return i||(i=new Bo(n,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,i){N("MemoryPersistence","Starting transaction:",e);const s=new Go(this.Os.next());return this.referenceDelegate.Us(),i(s).next(o=>this.referenceDelegate.Ks(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gs(e,n){return Rt.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,n)))}}class Go extends At{constructor(e){super(),this.currentSequenceNumber=e}}class Qo{constructor(e){this.persistence=e,this.Qs=new Oo,this.js=null}static zs(e){return new Qo(e)}get Ws(){if(this.js)return this.js;throw O()}addReference(e,n,i){return this.Qs.addReference(i,n),this.Ws.delete(i.toString()),Rt.resolve()}removeReference(e,n,i){return this.Qs.removeReference(i,n),this.Ws.add(i.toString()),Rt.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),Rt.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(o=>this.Ws.add(o.toString()))}).next(()=>i.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Rt.forEach(this.Ws,i=>{const s=ht.fromPath(i);return this.Hs(e,s).next(o=>{o||n.removeEntry(s,rt.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(i=>{i?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return Rt.or([()=>Rt.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class tu{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Fi=i,this.Bi=s}static Li(e,n){let i=gs(),s=gs();for(const o of n.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new tu(e,n.fromCache,i,s)}}/**
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
 */class eu{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ki(e,n).next(o=>o||this.Gi(e,n,s,i)).next(o=>o||this.Qi(e,n))}Ki(e,n){if(Qn(n))return Rt.resolve(null);let i=Jn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Xn(n,null,"F"),i=Jn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const a=gs(...o);return this.Ui.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,i).next(u=>{const h=this.ji(n,c);return this.zi(n,h,a,u.readTime)?this.Ki(e,Xn(n,null,"F")):this.Wi(e,h,n,u)}))})))}Gi(e,n,i,s){return Qn(n)||s.isEqual(rt.min())?this.Qi(e,n):this.Ui.getDocuments(e,i).next(o=>{const a=this.ji(n,o);return this.zi(n,a,i,s)?this.Qi(e,n):(C()<=LogLevel.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.Wi(e,a,n,yt(s,-1)))})}ji(e,n){let i=new Ee(is(e));return n.forEach((s,o)=>{ns(e,o)&&(i=i.add(o))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Qi(e,n){return C()<=LogLevel.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",es(n)),this.Ui.getDocumentsMatchingQuery(e,n,It.min())}Wi(e,n,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(o=>(n.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class nu{constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new pe(et),this.Yi=new os(o=>$n(o),On),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ko(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function su(t,e,n,i){return new nu(t,e,n,i)}async function iu(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,n.tr(e),n.mutationQueue.getAllMutationBatches(i))).next(o=>{const a=[],c=[];let u=gs();for(const h of s){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of o){c.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(i,u).next(h=>({er:h,removedBatchIds:a,addedBatchIds:c}))})})}function ru(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),o=n.Zi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const d=u.batch,f=d.keys();let g=Rt.resolve();return f.forEach(m=>{g=g.next(()=>h.getEntry(c,m)).next(_=>{const ee=u.docVersions.get(m);F(ee!==null),_.version.compareTo(ee)<0&&(d.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),h.addEntry(_)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,i,e,o).next(()=>o.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let c=gs();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function ou(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function uu(t,e){const n=L(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const c=[];e.targetChanges.forEach((d,f)=>{const g=s.get(f);if(!g)return;c.push(n.Bs.removeMatchingKeys(o,d.removedDocuments,f).next(()=>n.Bs.addMatchingKeys(o,d.addedDocuments,f)));let m=g.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(Ve.EMPTY_BYTE_STRING,rt.min()).withLastLimboFreeSnapshotVersion(rt.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,i)),s=s.insert(f,m),function(_,ee,te){return _.resumeToken.approximateByteSize()===0||ee.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0}(g,m,d)&&c.push(n.Bs.updateTargetData(o,m))});let u=cs(),h=gs();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),c.push(cu(o,a,e.documentUpdates).next(d=>{u=d.nr,h=d.sr})),!i.isEqual(rt.min())){const d=n.Bs.getLastRemoteSnapshotVersion(o).next(f=>n.Bs.setTargetsMetadata(o,o.currentSequenceNumber,i));c.push(d)}return Rt.waitFor(c).next(()=>a.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,h)).next(()=>u)}).then(o=>(n.Ji=s,o))}function cu(t,e,n){let i=gs(),s=gs();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=cs();return n.forEach((c,u)=>{const h=o.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(rt.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{nr:a,sr:s}})}function au(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function hu(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Bs.getTargetData(i,e).next(o=>o?(s=o,Rt.resolve(s)):n.Bs.allocateTargetId(i).next(a=>(s=new cr(e,a,"TargetPurposeListen",i.currentSequenceNumber),n.Bs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function lu(t,e,n){const i=L(t),s=i.Ji.get(e),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Dt(a))throw a;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function fu(t,e,n){const i=L(t);let s=rt.min(),o=gs();return i.persistence.runTransaction("Execute query","readonly",a=>function(c,u,h){const d=L(c),f=d.Yi.get(h);return f!==void 0?Rt.resolve(d.Ji.get(f)):d.Bs.getTargetData(u,h)}(i,a,Jn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(a,c.targetId).next(u=>{o=u})}).next(()=>i.Hi.getDocumentsMatchingQuery(a,e,n?s:rt.min(),n?o:gs())).next(c=>(_u(i,ss(e),c),{documents:c,ir:o})))}function _u(t,e,n){let i=t.Xi.get(e)||rt.min();n.forEach((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),t.Xi.set(e,i)}class Ru{constructor(){this.activeTargetIds=ps()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bu{constructor(){this.Hr=new Ru,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,i){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ru,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Vu{Yr(e){}shutdown(){}}/**
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
 */class Su{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Du=null;function Cu(){return Du===null?Du=268435456+Math.round(2147483648*Math.random()):Du++,"0x"+Du.toString(16)}/**
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
 */const xu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Nu{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const ku="WebChannelConnection";class Mu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,i,s,o){const a=Cu(),c=this.To(e,n);N("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const u={};return this.Eo(u,s,o),this.Ao(e,c,u,i).then(h=>(N("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw M("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}vo(e,n,i,s,o,a){return this.Io(e,n,i,s,o)}Eo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+S,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}To(e,n){const i=xu[e];return`${this.mo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,i,s){const o=Cu();return new Promise((a,c)=>{const u=new XhrIo;u.setWithCredentials(!0),u.listenOnce(EventType.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ErrorCode.NO_ERROR:const d=u.getResponseJson();N(ku,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case ErrorCode.TIMEOUT:N(ku,`RPC '${e}' ${o} timed out`),c(new U(q.DEADLINE_EXCEEDED,"Request time out"));break;case ErrorCode.HTTP_ERROR:const f=u.getStatus();if(N(ku,`RPC '${e}' ${o} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const _=function(ee){const te=ee.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(te)>=0?te:q.UNKNOWN}(m.status);c(new U(_,m.message))}else c(new U(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new U(q.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{N(ku,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);N(ku,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,i,15)})}Ro(e,n,i){const s=Cu(),o=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=createWebChannelTransport(),c=getStatEventTarget(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new FetchXmlHttpFactory({})),this.Eo(u.initMessageHeaders,n,i),u.encodeInitMessageHeaders=!0;const d=o.join("");N(ku,`Creating RPC '${e}' stream ${s}: ${d}`,u);const f=a.createWebChannel(d,u);let g=!1,m=!1;const _=new Nu({ro:te=>{m?N(ku,`Not sending because RPC '${e}' stream ${s} is closed:`,te):(g||(N(ku,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),N(ku,`RPC '${e}' stream ${s} sending:`,te),f.send(te))},oo:()=>f.close()}),ee=(te,ne,re)=>{te.listen(ne,ie=>{try{re(ie)}catch(se){setTimeout(()=>{throw se},0)}})};return ee(f,WebChannel.EventType.OPEN,()=>{m||N(ku,`RPC '${e}' stream ${s} transport opened.`)}),ee(f,WebChannel.EventType.CLOSE,()=>{m||(m=!0,N(ku,`RPC '${e}' stream ${s} transport closed`),_.wo())}),ee(f,WebChannel.EventType.ERROR,te=>{m||(m=!0,M(ku,`RPC '${e}' stream ${s} transport errored:`,te),_.wo(new U(q.UNAVAILABLE,"The operation could not be completed")))}),ee(f,WebChannel.EventType.MESSAGE,te=>{var ne;if(!m){const re=te.data[0];F(!!re);const ie=re,se=ie.error||((ne=ie[0])===null||ne===void 0?void 0:ne.error);if(se){N(ku,`RPC '${e}' stream ${s} received error:`,se);const oe=se.status;let ce=function(he){const ue=ii[he];if(ue!==void 0)return ui(ue)}(oe),le=se.message;ce===void 0&&(ce=q.INTERNAL,le="Unknown error status: "+oe+" with message "+se.message),m=!0,_.wo(new U(ce,le)),f.close()}else N(ku,`RPC '${e}' stream ${s} received:`,re),_._o(re)}}),ee(c,Event.STAT_EVENT,te=>{te.stat===Stat.PROXY?N(ku,`RPC '${e}' stream ${s} detected buffering proxy`):te.stat===Stat.NOPROXY&&N(ku,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function Ou(){return typeof document<"u"?document:null}/**
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
 */function Fu(t){return new Vi(t,!0)}/**
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
 */class Bu{constructor(e,n,i=1e3,s=1.5,o=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=s,this.Vo=o,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Lu{constructor(e,n,i,s,o,a,c,u){this.ii=e,this.$o=i,this.Oo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Bu(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(k(n.toString()),k("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===n&&this.Zo(i,s)},i=>{e(()=>{const s=new U(q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,n){const i=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qu extends Lu{constructor(e,n,i,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,a),this.serializer=o}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=Qi(this.serializer,e),i=function(s){if(!("targetChange"in s))return rt.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?rt.min():o.readTime?Ni(o.readTime):rt.min()}(e);return this.listener.nu(n,i)}su(e){const n={};n.database=Li(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Fn(c)?{documents:Hi(s,c)}:{query:Ji(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ci(s,o.resumeToken);const u=Si(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(rt.min())>0){a.readTime=Di(s,o.snapshotVersion.toTimestamp());const u=Si(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const i=Xi(this.serializer,e);i&&(n.labels=i),this.Wo(n)}iu(e){const n={};n.database=Li(this.serializer),n.removeTarget=e,this.Wo(n)}}class Uu extends Lu{constructor(e,n,i,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,a),this.serializer=o,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Wi(e.writeResults,e.commitTime),i=Ni(e.commitTime);return this.listener.cu(i,n)}return F(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Li(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>ji(this.serializer,i))};this.Wo(n)}}/**
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
 */class Ku extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new U(q.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Io(e,n,i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(q.UNKNOWN,s.toString())})}vo(e,n,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,n,i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(q.UNKNOWN,o.toString())})}terminate(){this.lu=!0}}class Qu{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(k(n),this.mu=!1):N("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class ju{constructor(e,n,i,s,o){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=o,this.Pu.Yr(a=>{i.enqueueAndForget(async()=>{ec(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=L(c);u.vu.add(4),await Wu(u),u.bu.set("Unknown"),u.vu.delete(4),await zu(u)}(this))})}),this.bu=new Qu(i,s)}}async function zu(t){if(ec(t))for(const e of t.Ru)await e(!0)}async function Wu(t){for(const e of t.Ru)await e(!1)}function Hu(t,e){const n=L(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),tc(n)?Zu(n):pc(n).Ko()&&Yu(n,e))}function Ju(t,e){const n=L(t),i=pc(n);n.Au.delete(e),i.Ko()&&Xu(n,e),n.Au.size===0&&(i.Ko()?i.jo():ec(n)&&n.bu.set("Unknown"))}function Yu(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(rt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}pc(t).su(e)}function Xu(t,e){t.Vu.qt(e),pc(t).iu(e)}function Zu(t){t.Vu=new Ei({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),pc(t).start(),t.bu.gu()}function tc(t){return ec(t)&&!pc(t).Uo()&&t.Au.size>0}function ec(t){return L(t).vu.size===0}function nc(t){t.Vu=void 0}async function sc(t){t.Au.forEach((e,n)=>{Yu(t,e)})}async function ic(t,e){nc(t),tc(t)?(t.bu.Iu(e),Zu(t)):t.bu.set("Unknown")}async function rc(t,e,n){if(t.bu.set("Online"),e instanceof Ii&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Au.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Au.delete(a),i.Vu.removeTarget(a))}(t,e)}catch(i){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await oc(t,i)}else if(e instanceof yi?t.Vu.Ht(e):e instanceof pi?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(rt.min()))try{const i=await ou(t.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.Vu.ce(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.Au.get(u);h&&s.Au.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.Au.get(c);if(!h)return;s.Au.set(c,h.withResumeToken(Ve.EMPTY_BYTE_STRING,h.snapshotVersion)),Xu(s,c);const d=new cr(h.target,c,u,h.sequenceNumber);Yu(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){N("RemoteStore","Failed to raise snapshot:",i),await oc(t,i)}}async function oc(t,e,n){if(!Dt(e))throw e;t.vu.add(1),await Wu(t),t.bu.set("Offline"),n||(n=()=>ou(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await zu(t)})}function uc(t,e){return e().catch(n=>oc(t,n,e))}async function cc(t){const e=L(t),n=Ic(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ac(e);)try{const s=await au(e.localStore,i);if(s===null){e.Eu.length===0&&n.jo();break}i=s.batchId,hc(e,s)}catch(s){await oc(e,s)}lc(e)&&fc(e)}function ac(t){return ec(t)&&t.Eu.length<10}function hc(t,e){t.Eu.push(e);const n=Ic(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function lc(t){return ec(t)&&!Ic(t).Uo()&&t.Eu.length>0}function fc(t){Ic(t).start()}async function dc(t){Ic(t).hu()}async function wc(t){const e=Ic(t);for(const n of t.Eu)e.uu(n.mutations)}async function _c(t,e,n){const i=t.Eu.shift(),s=ti.from(i,e,n);await uc(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await cc(t)}async function mc(t,e){e&&Ic(t).ou&&await async function(n,i){if(s=i.code,oi(s)&&s!==q.ABORTED){const o=n.Eu.shift();Ic(n).Qo(),await uc(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await cc(n)}var s}(t,e),lc(t)&&fc(t)}async function gc(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const i=ec(n);n.vu.add(3),await Wu(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await zu(n)}async function yc(t,e){const n=L(t);e?(n.vu.delete(2),await zu(n)):e||(n.vu.add(2),await Wu(n),n.bu.set("Unknown"))}function pc(t){return t.Su||(t.Su=function(e,n,i){const s=L(e);return s.fu(),new qu(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:sc.bind(null,t),ao:ic.bind(null,t),nu:rc.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),tc(t)?Zu(t):t.bu.set("Unknown")):(await t.Su.stop(),nc(t))})),t.Su}function Ic(t){return t.Du||(t.Du=function(e,n,i){const s=L(e);return s.fu(),new Uu(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:dc.bind(null,t),ao:mc.bind(null,t),au:wc.bind(null,t),cu:_c.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await cc(t)):(await t.Du.stop(),t.Eu.length>0&&(N("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Tc{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new K,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,n,i,s,o){const a=Date.now()+i,c=new Tc(e,n,a,s,o);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ec(t,e){if(k("AsyncQueue",`${e}: ${t}`),Dt(t))return new U(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ac{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ht.comparator(n.key,i.key):(n,i)=>ht.comparator(n.key,i.key),this.keyedMap=hs(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Ac(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ac)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ac;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class vc{constructor(){this.Cu=new pe(ht.comparator)}track(e){const n=e.doc.key,i=this.Cu.get(n);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(n):e.type===1&&i.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):O():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Rc{constructor(e,n,i,s,o,a,c,u,h){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,i,s,o){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Rc(e,n,Ac.emptySet(n),a,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class Pc{constructor(){this.Nu=void 0,this.listeners=[]}}class bc{constructor(){this.queries=new os(e=>ts(e),Zn),this.onlineState="Unknown",this.ku=new Set}}async function Vc(t,e){const n=L(t),i=e.query;let s=!1,o=n.queries.get(i);if(o||(s=!0,o=new Pc),s)try{o.Nu=await n.onListen(i)}catch(a){const c=Ec(a,`Initialization of query '${es(e.query)}' failed`);return void e.onError(c)}n.queries.set(i,o),o.listeners.push(e),e.Mu(n.onlineState),o.Nu&&e.$u(o.Nu)&&xc(n)}async function Sc(t,e){const n=L(t),i=e.query;let s=!1;const o=n.queries.get(i);if(o){const a=o.listeners.indexOf(e);a>=0&&(o.listeners.splice(a,1),s=o.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Dc(t,e){const n=L(t);let i=!1;for(const s of e){const o=s.query,a=n.queries.get(o);if(a){for(const c of a.listeners)c.$u(s)&&(i=!0);a.Nu=s}}i&&xc(n)}function Cc(t,e,n){const i=L(t),s=i.queries.get(e);if(s)for(const o of s.listeners)o.onError(n);i.queries.delete(e)}function xc(t){t.ku.forEach(e=>{e.next()})}class Nc{constructor(e,n,i){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Rc(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Rc.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Fc{constructor(e){this.key=e}}class Bc{constructor(e){this.key=e}}class Lc{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=gs(),this.mutatedKeys=gs(),this.tc=is(e),this.ec=new Ac(this.tc)}get nc(){return this.Yu}sc(e,n){const i=n?n.ic:new vc,s=n?n.ec:this.ec;let o=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const g=s.get(d),m=ns(this.query,f)?f:null,_=!!g&&this.mutatedKeys.has(g.key),ee=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let te=!1;g&&m?g.data.isEqual(m.data)?_!==ee&&(i.track({type:3,doc:m}),te=!0):this.rc(g,m)||(i.track({type:2,doc:m}),te=!0,(u&&this.tc(m,u)>0||h&&this.tc(m,h)<0)&&(c=!0)):!g&&m?(i.track({type:0,doc:m}),te=!0):g&&!m&&(i.track({type:1,doc:g}),te=!0,(u||h)&&(c=!0)),te&&(m?(a=a.add(m),o=ee?o.add(d):o.delete(d)):(a=a.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),o=o.delete(d.key),i.track({type:1,doc:d})}return{ec:a,ic:i,zi:c,mutatedKeys:o}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const o=e.ic.xu();o.sort((h,d)=>function(f,g){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return m(f)-m(g)}(h.type,d.type)||this.tc(h.doc,d.doc)),this.oc(i);const a=n?this.uc():[],c=this.Zu.size===0&&this.current?1:0,u=c!==this.Xu;return this.Xu=c,o.length!==0||u?{snapshot:new Rc(this.query,e.ec,s,o,e.mutatedKeys,c===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:a}:{cc:a}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new vc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=gs(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const n=[];return e.forEach(i=>{this.Zu.has(i)||n.push(new Bc(i))}),this.Zu.forEach(i=>{e.has(i)||n.push(new Fc(i))}),n}hc(e){this.Yu=e.ir,this.Zu=gs();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Rc.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class qc{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class Uc{constructor(e){this.key=e,this.fc=!1}}class Kc{constructor(e,n,i,s,o,a){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.dc={},this.wc=new os(c=>ts(c),Zn),this._c=new Map,this.mc=new Set,this.gc=new pe(ht.comparator),this.yc=new Map,this.Ic=new Oo,this.Tc={},this.Ec=new Map,this.Ac=lo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Gc(t,e){const n=pa(t);let i,s;const o=n.wc.get(e);if(o)i=o.targetId,n.sharedClientState.addLocalQueryTarget(i),s=o.view.lc();else{const a=await hu(n.localStore,Jn(e)),c=n.sharedClientState.addLocalQueryTarget(a.targetId);i=a.targetId,s=await Qc(n,e,i,c==="current",a.resumeToken),n.isPrimaryClient&&Hu(n.remoteStore,a)}return s}async function Qc(t,e,n,i,s){t.Rc=(f,g,m)=>async function(_,ee,te,ne){let re=ee.view.sc(te);re.zi&&(re=await fu(_.localStore,ee.query,!1).then(({documents:oe})=>ee.view.sc(oe,re)));const ie=ne&&ne.targetChanges.get(ee.targetId),se=ee.view.applyChanges(re,_.isPrimaryClient,ie);return ia(_,ee.targetId,se.cc),se.snapshot}(t,f,g,m);const o=await fu(t.localStore,e,!0),a=new Lc(e,o.ir),c=a.sc(o.documents),u=gi.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,u);ia(t,n,h.cc);const d=new qc(e,n,a);return t.wc.set(e,d),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),h.snapshot}async function jc(t,e){const n=L(t),i=n.wc.get(e),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter(o=>!Zn(o,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await lu(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Ju(n.remoteStore,i.targetId),na(n,i.targetId)}).catch(vt)):(na(n,i.targetId),await lu(n.localStore,i.targetId,!0))}async function zc(t,e,n){const i=Ia(t);try{const s=await function(o,a){const c=L(o),u=it.now(),h=a.reduce((g,m)=>g.add(m.key),gs());let d,f;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let m=cs(),_=gs();return c.Zi.getEntries(g,h).next(ee=>{m=ee,m.forEach((te,ne)=>{ne.isValidDocument()||(_=_.add(te))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,m)).next(ee=>{d=ee;const te=[];for(const ne of a){const re=Gs(ne,d.get(ne.key).overlayedDocument);re!=null&&te.push(new zs(ne.key,re,cn(re.value.mapValue),Fs.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,te,a)}).next(ee=>{f=ee;const te=ee.applyToLocalDocumentSet(d,_);return c.documentOverlayCache.saveOverlays(g,ee.batchId,te)})}).then(()=>({batchId:f.batchId,changes:ls(d)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Tc[o.currentUser.toKey()];u||(u=new pe(et)),u=u.insert(a,c),o.Tc[o.currentUser.toKey()]=u}(i,s.batchId,n),await ua(i,s.changes),await cc(i.remoteStore)}catch(s){const o=Ec(s,"Failed to persist write");n.reject(o)}}async function Wc(t,e){const n=L(t);try{const i=await uu(n.localStore,e);e.targetChanges.forEach((s,o)=>{const a=n.yc.get(o);a&&(F(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.fc=!0:s.modifiedDocuments.size>0?F(a.fc):s.removedDocuments.size>0&&(F(a.fc),a.fc=!1))}),await ua(n,i,e)}catch(i){await vt(i)}}function Hc(t,e,n){const i=L(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.wc.forEach((o,a)=>{const c=a.view.Mu(e);c.snapshot&&s.push(c.snapshot)}),function(o,a){const c=L(o);c.onlineState=a;let u=!1;c.queries.forEach((h,d)=>{for(const f of d.listeners)f.Mu(a)&&(u=!0)}),u&&xc(c)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Jc(t,e,n){const i=L(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.yc.get(e),o=s&&s.key;if(o){let a=new pe(ht.comparator);a=a.insert(o,an.newNoDocument(o,rt.min()));const c=gs().add(o),u=new mi(rt.min(),new Map,new pe(et),a,c);await Wc(i,u),i.gc=i.gc.remove(o),i.yc.delete(e),oa(i)}else await lu(i.localStore,e,!1).then(()=>na(i,e,n)).catch(vt)}async function Yc(t,e){const n=L(t),i=e.batch.batchId;try{const s=await ru(n.localStore,e);ea(n,i,null),ta(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ua(n,s)}catch(s){await vt(s)}}async function Xc(t,e,n){const i=L(t);try{const s=await function(o,a){const c=L(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(F(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(i.localStore,e);ea(i,e,n),ta(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ua(i,s)}catch(s){await vt(s)}}function ta(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function ea(t,e,n){const i=L(t);let s=i.Tc[i.currentUser.toKey()];if(s){const o=s.get(e);o&&(n?o.reject(n):o.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}function na(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t._c.get(e))t.wc.delete(i),n&&t.dc.Pc(i,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(i=>{t.Ic.containsKey(i)||sa(t,i)})}function sa(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Ju(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),oa(t))}function ia(t,e,n){for(const i of n)i instanceof Fc?(t.Ic.addReference(i.key,e),ra(t,i)):i instanceof Bc?(N("SyncEngine","Document no longer in limbo: "+i.key),t.Ic.removeReference(i.key,e),t.Ic.containsKey(i.key)||sa(t,i.key)):O()}function ra(t,e){const n=e.key,i=n.path.canonicalString();t.gc.get(n)||t.mc.has(i)||(N("SyncEngine","New document in limbo: "+n),t.mc.add(i),oa(t))}function oa(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new ht(ut.fromString(e)),i=t.Ac.next();t.yc.set(i,new Uc(n)),t.gc=t.gc.insert(n,i),Hu(t.remoteStore,new cr(Jn(Gn(n.path)),i,"TargetPurposeLimboResolution",Ot.ct))}}async function ua(t,e,n){const i=L(t),s=[],o=[],a=[];i.wc.isEmpty()||(i.wc.forEach((c,u)=>{a.push(i.Rc(u,e,n).then(h=>{if((h||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){s.push(h);const d=tu.Li(u.targetId,h);o.push(d)}}))}),await Promise.all(a),i.dc.nu(s),await async function(c,u){const h=L(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>Rt.forEach(u,f=>Rt.forEach(f.Fi,g=>h.persistence.referenceDelegate.addReference(d,f.targetId,g)).next(()=>Rt.forEach(f.Bi,g=>h.persistence.referenceDelegate.removeReference(d,f.targetId,g)))))}catch(d){if(!Dt(d))throw d;N("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const g=h.Ji.get(f),m=g.snapshotVersion,_=g.withLastLimboFreeSnapshotVersion(m);h.Ji=h.Ji.insert(f,_)}}}(i.localStore,o))}async function ca(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const i=await iu(n.localStore,e);n.currentUser=e,function(s,o){s.Ec.forEach(a=>{a.forEach(c=>{c.reject(new U(q.CANCELLED,o))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ua(n,i.er)}}function aa(t,e){const n=L(t),i=n.yc.get(e);if(i&&i.fc)return gs().add(i.key);{let s=gs();const o=n._c.get(e);if(!o)return s;for(const a of o){const c=n.wc.get(a);s=s.unionWith(c.view.nc)}return s}}function pa(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aa.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jc.bind(null,e),e.dc.nu=Dc.bind(null,e.eventManager),e.dc.Pc=Cc.bind(null,e.eventManager),e}function Ia(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xc.bind(null,e),e}class Ea{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return su(this.persistence,new eu,e.initialUser,this.serializer)}createPersistence(e){return new Ko(Qo.zs,this.serializer)}createSharedClientState(e){return new bu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Pa{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Hc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ca.bind(null,this.syncEngine),await yc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bc}createDatastore(e){const n=Fu(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new Mu(s));var s;return function(o,a,c,u){return new Ku(o,a,c,u)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,o=c=>Hc(this.syncEngine,c,0),a=Su.D()?new Su:new Vu,new ju(n,i,s,o,a);var n,i,s,o,a}createSyncEngine(e,n){return function(i,s,o,a,c,u,h){const d=new Kc(i,s,o,a,c,u);return h&&(d.vc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);N("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Wu(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Va{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):k("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class xa{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=V.UNAUTHENTICATED,this.clientId=tt.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new K;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Ec(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Na(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await iu(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ka(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $a(t);N("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>gc(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,o)=>gc(e.remoteStore,o)),t._onlineComponents=e}function Ma(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function $a(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Na(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ma(n))throw n;M("Error using user provided cache. Falling back to memory cache: "+n),await Na(t,new Ea)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Na(t,new Ea);return t._offlineComponents}async function Oa(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await ka(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await ka(t,new Pa))),t._onlineComponents}function qa(t){return Oa(t).then(e=>e.syncEngine)}async function Ka(t){const e=await Oa(t),n=e.eventManager;return n.onListen=Gc.bind(null,e.syncEngine),n.onUnlisten=jc.bind(null,e.syncEngine),n}function za(t,e,n={}){const i=new K;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new Va({next:f=>{o.enqueueAndForget(()=>Sc(s,d));const g=f.docs.has(a);!g&&f.fromCache?u.reject(new U(q.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?u.reject(new U(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new Nc(Gn(a.path),h,{includeMetadataChanges:!0,Ku:!0});return Vc(s,d)}(await Ka(t),t.asyncQueue,e,n,i)),i.promise}function Ha(t,e,n={}){const i=new K;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new Va({next:f=>{o.enqueueAndForget(()=>Sc(s,d)),f.fromCache&&c.source==="server"?u.reject(new U(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new Nc(a,h,{includeMetadataChanges:!0,Ku:!0});return Vc(s,d)}(await Ka(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function th(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const eh=new Map;/**
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
 */function nh(t,e,n){if(!n)throw new U(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sh(t,e,n,i){if(e===!0&&i===!0)throw new U(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ih(t){if(!ht.isDocumentKey(t))throw new U(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rh(t){if(ht.isDocumentKey(t))throw new U(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function uh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oh(t);throw new U(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ch(t,e){if(e<=0)throw new U(q.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class ah{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new U(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=th((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class hh{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Q;switch(n.type){case"firstParty":return new H(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=eh.get(e);n&&(N("ComponentProvider","Removing Datastore"),eh.delete(e),n.terminate())}(this),Promise.resolve()}}function lh(t,e,n,i={}){var s;const o=(t=uh(t,hh))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&M("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),i.mockUserToken){let c,u;if(typeof i.mockUserToken=="string")c=i.mockUserToken,u=V.MOCK_USER;else{c=createMockUserToken(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new U(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new V(h)}t._authCredentials=new j(new G(c,u))}}/**
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
 */class fh{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fh(this.firestore,e,this._key)}}class dh{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new dh(this.firestore,e,this._query)}}class wh extends dh{constructor(e,n,i){super(e,n,Gn(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fh(this.firestore,null,new ht(e))}withConverter(e){return new wh(this.firestore,e,this._path)}}function _h(t,e,...n){if(t=getModularInstance(t),nh("collection","path",e),t instanceof hh){const i=ut.fromString(e,...n);return rh(i),new wh(t,null,i)}{if(!(t instanceof fh||t instanceof wh))throw new U(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ut.fromString(e,...n));return rh(i),new wh(t.firestore,null,i)}}function gh(t,e,...n){if(t=getModularInstance(t),arguments.length===1&&(e=tt.A()),nh("doc","path",e),t instanceof hh){const i=ut.fromString(e,...n);return ih(i),new fh(t,null,new ht(i))}{if(!(t instanceof fh||t instanceof wh))throw new U(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ut.fromString(e,...n));return ih(i),new fh(t.firestore,t instanceof wh?t.converter:null,new ht(i))}}/**
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
 */class Ih{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Bu(this,"async_queue_retry"),this.Xc=()=>{const n=Ou();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Ou();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Ou();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new K;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Dt(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw k("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=Tc.createAndSchedule(this,e,n,i,o=>this.na(o));return this.zc.push(s),s}Zc(){this.Wc&&O()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class vh extends hh{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Ih,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vh(this),this._firestoreClient.terminate()}}function Ph(t,e){const n=typeof t=="object"?t:getApp(),i=typeof t=="string"?t:e||"(default)",s=_getProvider(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=getDefaultEmulatorHostnameAndPort("firestore");o&&lh(s,...o)}return s}function bh(t){return t._firestoreClient||Vh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vh(t){var e,n,i;const s=t._freezeSettings(),o=function(a,c,u,h){return new $e(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,th(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new xa(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class Uh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Uh(Ve.fromBase64String(e))}catch(n){throw new U(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Uh(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Kh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qh{constructor(e){this._methodName=e}}/**
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
 */class jh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}}/**
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
 */const zh=/^__.*__$/;class Wh{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new zs(e,this.data,this.fieldMask,n,this.fieldTransforms):new js(e,this.data,n,this.fieldTransforms)}}class Hh{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new zs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Jh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Yh{constructor(e,n,i,s,o,a){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.ua(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.fa(e),s}da(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return gl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Jh(this.ca)&&zh.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Xh{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Fu(e)}ya(e,n,i,s=!1){return new Yh({ca:e,methodName:n,ga:i,path:at.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zh(t){const e=t._freezeSettings(),n=Fu(t._databaseId);return new Xh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tl(t,e,n,i,s,o={}){const a=t.ya(o.merge||o.mergeFields?2:0,e,n,s);dl("Data must be an object, but it was:",a,i);const c=ll(i,a);let u,h;if(o.merge)u=new Re(a.fieldMask),h=a.fieldTransforms;else if(o.mergeFields){const d=[];for(const f of o.mergeFields){const g=wl(e,f,n);if(!a.contains(g))throw new U(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);yl(d,g)||d.push(g)}u=new Re(d),h=a.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,h=a.fieldTransforms;return new Wh(new un(c),u,h)}class el extends Qh{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof el}}class ol extends Qh{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new xs(e.serializer,Es(e.serializer,this.Ia));return new Ms(e.path,n)}isEqual(e){return this===e}}function ul(t,e,n,i){const s=t.ya(1,e,n);dl("Data must be an object, but it was:",s,i);const o=[],a=un.empty();ge(i,(u,h)=>{const d=ml(e,u,n);h=getModularInstance(h);const f=s.da(d);if(h instanceof el)o.push(d);else{const g=hl(h,f);g!=null&&(o.push(d),a.set(d,g))}});const c=new Re(o);return new Hh(a,c,s.fieldTransforms)}function cl(t,e,n,i,s,o){const a=t.ya(1,e,n),c=[wl(e,i,n)],u=[s];if(o.length%2!=0)throw new U(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<o.length;g+=2)c.push(wl(e,o[g])),u.push(o[g+1]);const h=[],d=un.empty();for(let g=c.length-1;g>=0;--g)if(!yl(h,c[g])){const m=c[g];let _=u[g];_=getModularInstance(_);const ee=a.da(m);if(_ instanceof el)h.push(m);else{const te=hl(_,ee);te!=null&&(h.push(m),d.set(m,te))}}const f=new Re(h);return new Hh(d,f,a.fieldTransforms)}function al(t,e,n,i=!1){return hl(n,t.ya(i?4:3,e))}function hl(t,e){if(fl(t=getModularInstance(t)))return dl("Unsupported field value:",e,t),ll(t,e);if(t instanceof Qh)return function(n,i){if(!Jh(i.ca))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const a of n){let c=hl(a,i.wa(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=getModularInstance(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Es(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=it.fromDate(n);return{timestampValue:Di(i.serializer,s)}}if(n instanceof it){const s=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Di(i.serializer,s)}}if(n instanceof jh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Uh)return{bytesValue:Ci(i.serializer,n._byteString)};if(n instanceof fh){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i._a(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ki(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${oh(n)}`)}(t,e)}function ll(t,e){const n={};return ye(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ge(t,(i,s)=>{const o=hl(s,e.ha(i));o!=null&&(n[i]=o)}),{mapValue:{fields:n}}}function fl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof jh||t instanceof Uh||t instanceof fh||t instanceof Qh)}function dl(t,e,n){if(!fl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=oh(n);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function wl(t,e,n){if((e=getModularInstance(e))instanceof Kh)return e._internalPath;if(typeof e=="string")return ml(t,e);throw gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const _l=new RegExp("[~\\*/\\[\\]]");function ml(t,e,n){if(e.search(_l)>=0)throw gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kh(...e.split("."))._internalPath}catch{throw gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gl(t,e,n,i,s){const o=i&&!i.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new U(q.INVALID_ARGUMENT,c+t+u)}function yl(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class pl{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new fh(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Il(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Il extends pl{data(){return super.data()}}function Tl(t,e){return typeof e=="string"?ml(t,e):e instanceof Kh?e._internalPath:e._delegate._internalPath}/**
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
 */function El(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Al{}class vl extends Al{}function Rl(t,e,...n){let i=[];e instanceof Al&&i.push(e),i=i.concat(n),function(s){const o=s.filter(c=>c instanceof Vl).length,a=s.filter(c=>c instanceof Pl).length;if(o>1||o>0&&a>0)throw new U(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class Pl extends vl{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Pl(e,n,i)}_apply(e){const n=this._parse(e);return Ql(e._query,n),new dh(e.firestore,e.converter,Yn(e._query,n))}_parse(e){const n=Zh(e.firestore);return function(s,o,a,c,u,h,d){let f;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new U(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Gl(d,h);const g=[];for(const m of d)g.push(Kl(c,s,m));f={arrayValue:{values:g}}}else f=Kl(c,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Gl(d,h),f=al(a,o,d,h==="in"||h==="not-in");return mn.create(u,h,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Vl extends Al{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vl(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Ql(o,c),o=Yn(o,c)}(e._query,n),new dh(e.firestore,e.converter,Yn(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cl extends vl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cl(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new U(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new dn(s,o);return function(c,u){if(jn(c)===null){const h=zn(c);h!==null&&jl(c,h,u.field)}}(i,a),a}(e._query,this._field,this._direction);return new dh(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Un(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function xl(t,e="asc"){const n=e,i=Tl("orderBy",t);return Cl._create(i,n)}class Nl extends vl{constructor(e,n,i){super(),this.type=e,this._limit=n,this._limitType=i}static _create(e,n,i){return new Nl(e,n,i)}_apply(e){return new dh(e.firestore,e.converter,Xn(e._query,this._limit,this._limitType))}}function kl(t){return ch("limit",t),Nl._create("limit",t,"F")}function Kl(t,e,n){if(typeof(n=getModularInstance(n))=="string"){if(n==="")throw new U(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wn(e)&&n.indexOf("/")!==-1)throw new U(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(ut.fromString(n));if(!ht.isDocumentKey(i))throw new U(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return We(t,new ht(i))}if(n instanceof fh)return We(t,n._key);throw new U(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`)}function Gl(t,e){if(!Array.isArray(t)||t.length===0)throw new U(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ql(t,e){if(e.isInequality()){const i=zn(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new U(q.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const o=jn(t);o!==null&&jl(t,s,o)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function jl(t,e,n){if(!n.isEqual(e))throw new U(q.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Wl{convertValue(e,n="none"){switch(Le(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ge(e,(s,o)=>{i[s]=this.convertValue(o,n)}),i}convertGeoPoint(e){return new jh(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=ke(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Me(e));default:return null}}convertTimestamp(e){const n=De(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=ut.fromString(e);F(ur(i));const s=new Oe(i.get(1),i.get(3)),o=new ht(i.popFirst(5));return s.isEqual(n)||k(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function Hl(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
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
 */class nf{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sf extends pl{constructor(e,n,i,s,o,a){super(e,n,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Tl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class rf extends sf{data(e={}){return super.data(e)}}class of{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new nf(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new rf(this._firestore,this._userDataWriter,i.key,i,new nf(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new rf(i._firestore,i._userDataWriter,a.doc.key,a.doc,new nf(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new rf(i._firestore,i._userDataWriter,a.doc.key,a.doc,new nf(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:uf(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uf(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
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
 */function af(t){t=uh(t,fh);const e=uh(t.firestore,vh);return za(bh(e),t._key).then(n=>Af(e,t,n))}class hf extends Wl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Uh(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new fh(this.firestore,null,n)}}function df(t){t=uh(t,dh);const e=uh(t.firestore,vh),n=bh(e),i=new hf(e);return El(t._query),Ha(n,t._query).then(s=>new of(e,i,t,s))}function Ef(t,e){return function(n,i){const s=new K;return n.asyncQueue.enqueueAndForget(async()=>zc(await qa(n),i,s)),s.promise}(bh(t),e)}function Af(t,e,n){const i=n.docs.get(e._key),s=new hf(t);return new sf(t,s,e._key,i,new nf(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class Bf{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Zh(e)}set(e,n,i){this._verifyNotCommitted();const s=Lf(e,this._firestore),o=Hl(s.converter,n,i),a=tl(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,i);return this._mutations.push(a.toMutation(s._key,Fs.none())),this}update(e,n,i,...s){this._verifyNotCommitted();const o=Lf(e,this._firestore);let a;return a=typeof(n=getModularInstance(n))=="string"||n instanceof Kh?cl(this._dataReader,"WriteBatch.update",o._key,n,i,s):ul(this._dataReader,"WriteBatch.update",o._key,n),this._mutations.push(a.toMutation(o._key,Fs.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Lf(e,this._firestore);return this._mutations=this._mutations.concat(new Ys(n._key,Fs.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lf(t,e){if((t=getModularInstance(t)).firestore!==e)throw new U(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function zf(t){return new ol("increment",t)}/**
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
 */function Wf(t){return bh(t=uh(t,vh)),new Bf(t,e=>Ef(t,e))}(function(t,e=!0){(function(n){S=n})(SDK_VERSION),_registerComponent(new Component("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new vh(new z(n.getProvider("auth-internal")),new Y(n.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),registerVersion(b,"3.13.0",t),registerVersion(b,"3.13.0","esm2017")})();var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sha256={exports:{}};/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(module){(function(){var ERROR="input is invalid type",WINDOW=typeof window=="object",root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&typeof self=="object",NODE_JS=!root.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS?root=commonjsGlobal:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&!0&&module.exports,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return Object.prototype.toString.call(t)==="[object Array]"}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return typeof t=="object"&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,e){return function(n){return new Sha256(e,!0).update(n)[t]()}},createMethod=function(t){var e=createOutputMethod("hex",t);NODE_JS&&(e=nodeWrap(e,t)),e.create=function(){return new Sha256(t)},e.update=function(s){return e.create().update(s)};for(var n=0;n<OUTPUT_TYPES.length;++n){var i=OUTPUT_TYPES[n];e[i]=createOutputMethod(i,t)}return e},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if(typeof t=="string")return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(t==null)throw new Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,e){return function(n,i){return new HmacSha256(n,e,!0).update(i)[t]()}},createHmacMethod=function(t){var e=createHmacOutputMethod("hex",t);e.create=function(s){return new HmacSha256(s,t)},e.update=function(s,o){return e.create(s).update(o)};for(var n=0;n<OUTPUT_TYPES.length;++n){var i=OUTPUT_TYPES[n];e[i]=createHmacOutputMethod(i,t)}return e};function Sha256(t,e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}Sha256.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if(n!=="string"){if(n==="object"){if(t===null)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR)}else throw new Error(ERROR);e=!0}for(var i,s=0,o,a=t.length,c=this.blocks;s<a;){if(this.hashed&&(this.hashed=!1,c[0]=this.block,c[16]=c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=0),e)for(o=this.start;s<a&&o<64;++s)c[o>>2]|=t[s]<<SHIFT[o++&3];else for(o=this.start;s<a&&o<64;++s)i=t.charCodeAt(s),i<128?c[o>>2]|=i<<SHIFT[o++&3]:i<2048?(c[o>>2]|=(192|i>>6)<<SHIFT[o++&3],c[o>>2]|=(128|i&63)<<SHIFT[o++&3]):i<55296||i>=57344?(c[o>>2]|=(224|i>>12)<<SHIFT[o++&3],c[o>>2]|=(128|i>>6&63)<<SHIFT[o++&3],c[o>>2]|=(128|i&63)<<SHIFT[o++&3]):(i=65536+((i&1023)<<10|t.charCodeAt(++s)&1023),c[o>>2]|=(240|i>>18)<<SHIFT[o++&3],c[o>>2]|=(128|i>>12&63)<<SHIFT[o++&3],c[o>>2]|=(128|i>>6&63)<<SHIFT[o++&3],c[o>>2]|=(128|i&63)<<SHIFT[o++&3]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=c[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=EXTRA[e&3],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t=this.h0,e=this.h1,n=this.h2,i=this.h3,s=this.h4,o=this.h5,a=this.h6,c=this.h7,u=this.blocks,h,d,f,g,m,_,ee,te,ne,re,ie;for(h=16;h<64;++h)m=u[h-15],d=(m>>>7|m<<25)^(m>>>18|m<<14)^m>>>3,m=u[h-2],f=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,u[h]=u[h-16]+d+u[h-7]+f<<0;for(ie=e&n,h=0;h<64;h+=4)this.first?(this.is224?(te=300032,m=u[0]-1413257819,c=m-150054599<<0,i=m+24177077<<0):(te=704751109,m=u[0]-210244248,c=m-1521486534<<0,i=m+143694565<<0),this.first=!1):(d=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),f=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),te=t&e,g=te^t&n^ie,ee=s&o^~s&a,m=c+f+ee+K[h]+u[h],_=d+g,c=i+m<<0,i=m+_<<0),d=(i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10),f=(c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7),ne=i&t,g=ne^i&e^te,ee=c&s^~c&o,m=a+f+ee+K[h+1]+u[h+1],_=d+g,a=n+m<<0,n=m+_<<0,d=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),f=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),re=n&i,g=re^n&t^ne,ee=a&c^~a&s,m=o+f+ee+K[h+2]+u[h+2],_=d+g,o=e+m<<0,e=m+_<<0,d=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),f=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),ie=e&n,g=ie^e&i^re,ee=o&a^~o&c,m=s+f+ee+K[h+3]+u[h+3],_=d+g,s=t+m<<0,t=m+_<<0;this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+i<<0,this.h4=this.h4+s<<0,this.h5=this.h5+o<<0,this.h6=this.h6+a<<0,this.h7=this.h7+c<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,i=this.h3,s=this.h4,o=this.h5,a=this.h6,c=this.h7,u=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[t&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[e&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[n&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[i&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[s&15]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[o&15]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[a&15];return this.is224||(u+=HEX_CHARS[c>>28&15]+HEX_CHARS[c>>24&15]+HEX_CHARS[c>>20&15]+HEX_CHARS[c>>16&15]+HEX_CHARS[c>>12&15]+HEX_CHARS[c>>8&15]+HEX_CHARS[c>>4&15]+HEX_CHARS[c&15]),u},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,i=this.h3,s=this.h4,o=this.h5,a=this.h6,c=this.h7,u=[t>>24&255,t>>16&255,t>>8&255,t&255,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24&255,n>>16&255,n>>8&255,n&255,i>>24&255,i>>16&255,i>>8&255,i&255,s>>24&255,s>>16&255,s>>8&255,s&255,o>>24&255,o>>16&255,o>>8&255,o&255,a>>24&255,a>>16&255,a>>8&255,a&255];return this.is224||u.push(c>>24&255,c>>16&255,c>>8&255,c&255),u},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t};function HmacSha256(t,e,n){var i,s=typeof t;if(s==="string"){var o=[],a=t.length,c=0,u;for(i=0;i<a;++i)u=t.charCodeAt(i),u<128?o[c++]=u:u<2048?(o[c++]=192|u>>6,o[c++]=128|u&63):u<55296||u>=57344?(o[c++]=224|u>>12,o[c++]=128|u>>6&63,o[c++]=128|u&63):(u=65536+((u&1023)<<10|t.charCodeAt(++i)&1023),o[c++]=240|u>>18,o[c++]=128|u>>12&63,o[c++]=128|u>>6&63,o[c++]=128|u&63);t=o}else if(s==="object"){if(t===null)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR)}else throw new Error(ERROR);t.length>64&&(t=new Sha256(e,!0).update(t).array());var h=[],d=[];for(i=0;i<64;++i){var f=t[i]||0;h[i]=92^f,d[i]=54^f}Sha256.call(this,e,n),this.update(d),this.oKeyPad=h,this.inner=!0,this.sharedMemory=n}HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224)})()})(sha256);var sha256Exports=sha256.exports;const firebaseConfig={apiKey:"AIzaSyCPFHnutWJg_oDDKR9DyDPzEm-DXWdhmxo",authDomain:"screencompare.firebaseapp.com",databaseURL:"https://screencompare-default-rtdb.europe-west1.firebasedatabase.app",projectId:"screencompare",storageBucket:"screencompare.appspot.com",messagingSenderId:"1080235317181",appId:"1:1080235317181:web:1a2d8a776d69b3787064d4"},app=initializeApp(firebaseConfig);initializeAppCheck(app,{provider:new ReCaptchaV3Provider("6LfaM8cmAAAAAHCYzmLi9C0NYRUXt46rphpZYWRq"),isTokenAutoRefreshEnabled:!0});const db=Ph(),auth=getAuth(),addScreenToDatabase=async(t,e,n)=>{if(!navigator.onLine){console.log("addScreenToDatabase - No internet connection.");return}const i=Wf(db),s=`${t}_${e}_${n}`,o=gh(db,"formResponses",s);(await af(o)).exists()?i.update(o,{count:zf(1)}):i.set(o,{screenSize:t,xAspectRatio:e,yAspectRatio:n,count:1}),await i.commit()},addFeedbackToDatabase=async(t,e,n,i)=>{if(!navigator.onLine)throw new Error("No internet connection.");const s=Wf(db),o=[{type:"Features",value:t},{type:"Bugs",value:e},{type:"Devices",value:n},{type:"Thoughts",value:i}];for(let a of o)if(a.value!==""){const c=sha256Exports.sha256(a.value).substring(0,8),u=gh(db,a.type,c);(await af(u)).exists()?s.update(u,{count:zf(1)}):s.set(u,{response:a.value,count:1})}await s.commit()},getTopScreens=async()=>{if(!navigator.onLine){console.log("getTopScreens - No internet connection.");return}const t=Rl(_h(db,"formResponses"),xl("count","desc"),kl(5));try{const e=await df(t),n=document.querySelectorAll(".common-screens-dialog__column:first-child li span"),i=e.docs;n.forEach((s,o)=>{if(i[o]){const a=i[o],c=document.createTextNode(a.data().screenSize+"″"),u=document.createTextNode(`${a.data().xAspectRatio}:${a.data().yAspectRatio}`),h=document.createElement("pre");for(h.textContent="	 ";s.firstChild;)s.firstChild.remove();s.appendChild(c),s.appendChild(h),s.appendChild(u)}})}catch(e){console.error("Error fetching documents: ",e)}};signInAnonymously(auth).then(()=>{getTopScreens()}).catch(t=>{const e=t.code,n=t.message;console.error(`Error code: ${e}, message: ${n}`)});export{addScreenToDatabase as a,addFeedbackToDatabase as b,getTopScreens as g};
