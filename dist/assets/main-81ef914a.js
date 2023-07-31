var L=Object.defineProperty;var $=(t,e,s)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var S=(t,e,s)=>($(t,typeof e!="symbol"?e+"":e,s),s);import{h as E,a as N,C as x,u as D,K as I,s as B}from"./domUtils-94b4f7fa.js";import{a as T,g as R}from"./firestore-7866e5ba.js";class g{static async fetchData(){if(this.data===null){const e=await fetch("/data/deviceData.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);this.data=await e.json()}return this.data}constructor(e){this.formFields={name:`name-${e}`,size:`size-${e}`,xAspectRatio:`ratio-w-${e}`,yAspectRatio:`ratio-h-${e}`,xResolution:`res-w-${e}`,yResolution:`res-h-${e}`},this.commonScreensDialog=document.querySelector(".common-screens-dialog"),this.nameInput=document.querySelectorAll(".name")[e-1]}fillForm(e){for(const s in e)if(this.formFields[s]){const i=document.getElementById(this.formFields[s]);i?i.value=e[s]:console.error(`Element not found for id: ${this.formFields[s]}`)}}attachEventHandlers(){const e=".common-screens-dialog__column:nth-child(1) li",s=".common-screens-dialog__column:not(:nth-child(1)) li";document.querySelectorAll(e).forEach(i=>{i.addEventListener("click",()=>{const o=i.textContent.trim();let[n,a]=o.split(/\s+/);n=n.replace(/["'″]/g,"");const[h,d]=a.split(":");this.fillForm({size:n,xAspectRatio:h,yAspectRatio:d}),this.commonScreensDialog.close()})}),document.querySelectorAll(s).forEach(i=>{i.addEventListener("click",()=>{const o=i.textContent.trim(),n=this.data[o];n?(n.name=o,this.fillForm(n),console.log(this.nameInput),this.nameInput.dispatchEvent(new Event("input"))):console.error(`No data for device: ${o}`),this.commonScreensDialog.close()})})}}S(g,"data",null);class P{constructor(){this.detailsUnitSwitch=document.querySelector(".text-units-switch"),this.unitsDivider=0,this.switchUnits="",this.fractionDigits=0,this.diagonals=[],this.units=[],this.ratios=[],this.resolutions=[],this.ppis=[],this.sides=[],this.screenBox=document.querySelector(".visualization-box"),this.media1000=window.matchMedia("(max-width: 1000px)"),this.detailsUnitSwitch.addEventListener("change",this.onTableUnitsChange.bind(this))}handleUnitsValues(){this.detailsUnitSwitch.checked?(this.unitsDivider=1,this.switchUnits="cm",this.fractionDigits=1):(this.unitsDivider=2.54,this.switchUnits="in",this.fractionDigits=2)}handleDiagonalsAndUnits(){this.diagonals=Array.from(document.querySelectorAll(".size-input[required]")).map(e=>Number(e.value.replace(/,/g,"."))),this.units=Array.from(document.querySelectorAll(".units-label")).map(e=>e.textContent),this.units.forEach((e,s)=>{e==="in"&&this.diagonals[s]>0&&(this.diagonals[s]=this.diagonals[s]*2.54)})}handleRatios(){this.ratios=Array.from(document.querySelectorAll(".ratio-input[required]")).map(e=>Number(e.value.replace(/,/g,".")))}handleResolutions(){this.resolutions=Array.from(document.querySelectorAll(".res-input")).map(e=>Number(e.value.replace(/,/g,".")))}calculatePpis(){this.ppis=[];for(let e=0;e<=2;e++)if(this.resolutions[e*2]!==0&&this.resolutions[e*2+1]!==0){const s=Math.round(Number(Math.sqrt(this.resolutions[e*2]**2+this.resolutions[e*2+1]**2)));this.ppis=[...this.ppis,Number(Math.round(s/(this.diagonals[e]/this.unitsDivider)))]}else this.ppis=[...this.ppis,""]}calculateSides(){this.sides=[],this.diagonals.forEach((e,s)=>{const i=this.ratios[s*2],o=this.ratios[s*2+1],n=e*o/Math.sqrt(i**2+o**2),a=i/o*n;this.sides.push(a),this.sides.push(n)})}calculateProportions(){const e=document.querySelectorAll(".visualization");let s=getComputedStyle(document.querySelector(".visualization-box")).width;s=Number(s.slice(0,s.length-2));let i=getComputedStyle(document.querySelector(".visualization-box")).height;i=Number(i.slice(0,i.length-2));let o=0;this.sides.forEach((n,a)=>{(a+1)%2===1&&o<n/s&&(o=n/s),(a+1)%2===0&&o<n/i&&(o=n/i)}),e.forEach((n,a)=>{n.setAttribute("style",`
          width: ${this.sides[a*2]/o}px; 
          height: ${this.sides[a*2+1]/o}px;
        `)})}handleGuides(){const e=document.querySelectorAll(".diagonal");this.diagonals.forEach((r,l)=>{e[l].textContent=`${Number((r/this.unitsDivider).toFixed(this.fractionDigits))} ${this.switchUnits}`;const c=Math.atan(this.ratios[l*2+1]/this.ratios[l*2])*(180/Math.PI);e[l].setAttribute("style",`transform: rotate(-${c}deg)`),e[l].style.setProperty("--after-width",`${e[l].textContent.length-1}em`)});const s=[...document.querySelectorAll(".visualization")].sort((r,l)=>{const c=Number(r.children[0].textContent.slice(0,r.children[0].textContent.length-3));return Number(l.children[0].textContent.slice(0,l.children[0].textContent.length-3))-c});s.forEach((r,l)=>{r.style.zIndex=(l+1).toString();let c=2;r.classList.contains("hidden")&&(s.splice(l,1),c=1);let u=r.children[0].style.transform;r.children[0].style.transform=`${u} translate(${-l*2.5+c}em)`,u=r.children[0].style.transform,Number(r.style.width.slice(0,-2))<=150&&(r.children[0].style.transform=u.slice(0,-15))});const i=document.querySelector(".guides-wrapper--bottom"),o=document.querySelector(".guides-wrapper--left");for(;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)o.removeChild(o.firstChild);this.sides.forEach((r,l)=>{let c;(l+1)%2===1?c="bottom":c="left";const u=s[Math.floor(l/2)],b=u.className.slice(u.className.length-1,u.className.length)-1,y=document.createElement("p");y.className=`guides guides--${c} guides--${c}--${b+1}`;const k=`${Number((this.sides[b*2+l%2]/this.unitsDivider).toFixed(this.fractionDigits))} ${this.switchUnits}`;y.textContent=k.toString(),c==="bottom"&&i.appendChild(y),c==="left"&&o.appendChild(y)});const n=[...e].sort((r,l)=>Number(l.textContent.slice(0,l.textContent.length-3))-Number(r.textContent.slice(0,r.textContent.length-3)));e.forEach(r=>{r.classList.remove("dashed","dotted")});let a=[];n.forEach((r,l)=>{const c=Number(getComputedStyle(n[l]).transform.slice(7,getComputedStyle(n[l]).transform.length-1).split(", ")[0]);a=[...a,c],l!==0&&(a[l]===a[l-1]||a[l]===a[l-2])&&(n[l-1].classList.contains("dashed")?r.classList.add("dotted"):r.classList.add("dashed"))});const h=document.querySelectorAll(".visualization");let d=0,m=0;h.forEach(r=>{r.offsetHeight>d&&(d=r.offsetHeight),r.offsetWidth>m&&(m=r.offsetWidth)}),i.style.width=`${m}px`,o.style.height=`${d}px`}centerVisualisations(){const e=document.querySelectorAll(".visualization");let s=0,i=0;e.forEach(o=>{o.offsetHeight>s&&(s=o.offsetHeight),o.offsetWidth>i&&(i=o.offsetWidth)}),this.screenBox.setAttribute("style",`
      width: ${i}px;
      height: ${s}px;
      `)}resizeBox(){const e=document.querySelector(".screen-results__visualizations"),s=getComputedStyle(this.screenBox).height;e.style.height=`calc(${s} + 6em`}handleThirdScreenElement(){const e=document.querySelector(".visualization--3");this.diagonals.length===2?e.classList.add("hidden"):e.classList.remove("hidden")}handleResultsTable(){const e=document.querySelectorAll(".values__row");[...e[0].children].forEach((i,o)=>{i.textContent=`${Number((this.sides[o*2]/this.unitsDivider).toFixed(2))} ${this.switchUnits}`}),[...e[1].children].forEach((i,o)=>{i.textContent=`${Number((this.sides[o*2+1]/this.unitsDivider).toFixed(2))} ${this.switchUnits}`}),[...e[2].children].forEach((i,o)=>{i.textContent=`${Number((this.diagonals[o]/this.unitsDivider).toFixed(2))} ${this.switchUnits}`}),[...e[3].children].forEach((i,o)=>{i.textContent=`${Number((this.sides[o*2]/this.unitsDivider*(this.sides[o*2+1]/this.unitsDivider)).toFixed(2))} ${this.switchUnits}²`}),(()=>{const i=document.querySelector(".ppi-guide");[...e[4].children].forEach((o,n)=>{this.resolutions[n*2]===0||this.resolutions[n*2+1]===0?(o.style.opacity="0",o.textContent=""):(o.style.opacity="1",o.textContent=this.ppis[n].toString())}),[...e[4].children].every(o=>o.style.opacity==="0")?(e[4].style.display="none",i.style.display="none",i.style.opacity="0"):(e[4].style.display="grid",i.style.display="block",i.style.opacity="1")})()}handlePpiValidationColors(){const e={mobile:17.526,tablet:28.194};this.diagonals.forEach((s,i)=>{const o={mobile:{green:400,darkgoldenrod:300,brown:0},tablet:{green:200,darkgoldenrod:150,brown:0},desktop:{green:150,darkgoldenrod:100,brown:0}};function n(r){return r<=e.mobile?"mobile":r<=e.tablet?"tablet":"desktop"}function a(r,l){const c=o[l];for(let u in c)if(r>=c[u])return u}const h=n(s),d=a(this.ppis[i],h);document.querySelectorAll(".row__value.ppi")[i].style.setProperty("--validation-color",d)})}handleReferenceValues(e,s){document.querySelectorAll(".values__row").forEach(o=>{[...o.children].forEach(n=>{const a=parseFloat(n.textContent),h=parseFloat(o.children[s].textContent);let d=a/h;d=Math.round(d*100);const m=isNaN(d)?'"—"':`"(${d}%)"`;n.style.setProperty("--value-reference",m)})})}saveFormData(){const s=!document.querySelector(".screen--inactive")?3:2;for(let i=0;i<s;i++){const o=this.diagonals[i]/2.54,n=this.ratios[i*2],a=this.ratios[i*2+1];T(o,n,a)}}async onTableUnitsChange(){await Promise.resolve(this.handleUnitsValues()),this.calculate(),this.handleResultsTable(),this.handlePpiValidationColors()}async calculate(){this.calculatePpis(),await Promise.resolve(this.calculateSides()),await Promise.resolve(this.calculateProportions()),await Promise.resolve(this.handleGuides()),await Promise.resolve(this.centerVisualisations()),this.media1000.matches&&this.resizeBox()}resetState(){this.unitsDivider=0,this.switchUnits="",this.fractionDigits=0,this.diagonals=[],this.units=[],this.ratios=[],this.resolutions=[],this.ppis=[],this.sides=[]}async handleComparison(){this.resetState(),await Promise.resolve(this.handleUnitsValues()),this.handleDiagonalsAndUnits(),this.handleRatios(),this.handleResolutions(),this.calculate(),this.handleThirdScreenElement(),this.handleResultsTable(),this.handlePpiValidationColors(),this.handleReferenceValues(null,0),this.saveFormData()}}const F=document.querySelectorAll("header *");F.forEach(t=>{E(t)});const U=()=>{const t=document.querySelectorAll(".screen")[2],e=t.getElementsByTagName("*");t.classList.contains("screen--inactive")?[...e].forEach(s=>{s.tabIndex=-1}):[...e].forEach(s=>{s.removeAttribute("tabindex")})};window.addEventListener("keydown",t=>{t.key==="Tab"&&U()});const H=document.querySelectorAll(".name-edit"),z=t=>{const e=t.target.closest(".screen-name").querySelector(".name");e.hasAttribute("readonly")?(e.removeAttribute("readonly"),e.select()):e.setAttribute("readonly","")};H.forEach(t=>{t.addEventListener("click",e=>z(e))});const p=document.querySelectorAll(".name"),_=t=>{t.target.value.length<=20&&t.target.value.length>=1&&(t.target.size=t.target.value.length)},v=document.querySelectorAll(".ref-screen"),q=(t,e)=>{p[e].value===""?t.textContent=`Display ${e+1}`:(t.textContent=p[e].value.slice(0,7),p[e].value.length>7&&(t.textContent=`${t.textContent}...`))},V=t=>{t.target.hasAttribute("readonly")&&(t.key==="Enter"||t.keyCode>47&&t.keyCode<58||t.keyCode>64&&t.keyCode<91||t.keyCode>96&&t.keyCode<123)?t.target.removeAttribute("readonly"):t.key==="Enter"&&(t.target.setAttribute("readonly",""),t.target.blur()),v.forEach((e,s)=>{q(e,s)})},M=t=>{t.relatedTarget&&t.relatedTarget.id==="edit-name-button"||(t.target.setAttribute("readonly",""),t.target.blur())};p.forEach(t=>{t.addEventListener("input",e=>_(e)),t.addEventListener("keydown",e=>V(e)),t.addEventListener("focusout",e=>M(e))});const W=document.querySelectorAll(".units-switch"),w=t=>{const e=document.querySelector(`label[for=${t.target.id}].units-label`);e&&(e.textContent=t.target.checked?"cm":"in")};W.forEach(t=>{t.addEventListener("change",e=>w(e))});const G=document.querySelector(".btn-add"),K=document.querySelector(".btn-remove--last-form"),O=()=>{document.querySelectorAll(".screen").item(2).classList.remove("screen--inactive"),document.querySelector(".screen-forms").classList.remove("screen-forms--double"),document.querySelector(".btn-add").classList.add("color-transparent"),document.getElementById("size-3").setAttribute("required",""),document.getElementById("units-3").setAttribute("required",""),document.getElementById("ratio-w-3").setAttribute("required",""),document.getElementById("ratio-h-3").setAttribute("required",""),setTimeout(()=>{document.querySelector(".btn-add").classList.add("invisible")},150)},X=()=>{document.querySelectorAll(".screen").item(2).classList.add("screen--inactive"),document.querySelector(".screen-forms").classList.add("screen-forms--double"),document.querySelector(".btn-add").classList.remove("invisible"),document.querySelector(".btn-add").classList.remove("color-transparent"),document.getElementById("screen-form-3").reset(),document.getElementById("size-3").removeAttribute("required"),document.getElementById("units-3").removeAttribute("required"),document.getElementById("ratio-w-3").removeAttribute("required"),document.getElementById("ratio-h-3").removeAttribute("required")};G.addEventListener("click",()=>O());K.addEventListener("click",()=>X());const Y=document.querySelectorAll("input[type=number]");Y.forEach(t=>{t.addEventListener("input",e=>{let s;e.target.classList.contains("res-input")?s=/^\d{1,5}\.\d{0,2}$|^\d{1,5}$/g.test(e.target.value):s=/^\d{1,3}\.\d{0,2}$|^\d{1,3}$/g.test(e.target.value),s||(e.target.value=e.target.value.slice(0,-1))})});const j=()=>{const t=document.querySelector(".screen-results"),e=new MutationObserver(s=>{s.forEach(i=>{i.target.classList.contains("invisible")||(document.querySelector(".screen-results").classList.remove("transparent"),e.disconnect())})});e.observe(t,{attributes:!0,attributeFilter:["class"]}),t.classList.remove("invisible"),document.querySelector(".screen-forms").classList.remove("screen-forms--double"),document.querySelector(".btn-wrapper").style.translate="0",document.querySelectorAll(".screen").item(2).classList.remove("screen--last")},J=()=>{const t=document.querySelectorAll(".screen")[2],e=document.querySelector(".top__ref-screen-bar"),s=document.querySelectorAll(".values__row");t.classList.contains("screen--inactive")?(e.style.setProperty("--tab-width","50%"),e.children[2].style.display="none",s.forEach(i=>{i.children[2].style.display="none",i.style.gridTemplateColumns="repeat(2, 1fr)"})):(e.style.setProperty("--tab-width","33.33%"),e.children[2].style.display="block",s.forEach(i=>{i.children[2].style.display="block",i.style.gridTemplateColumns="repeat(3, 1fr)"}))},C=new P,Q=()=>{(()=>{document.querySelectorAll("input[required]").forEach(i=>{i.value===""&&(i.value=i.placeholder)});const s=document.querySelectorAll(".res-input");s.forEach((i,o)=>{i.value!==""&&(i.classList.remove("field-error"),o%2?s[o-1].value===""&&s[o-1].classList.add("field-error"):s[o+1].value===""&&s[o+1].classList.add("field-error"))})})(),C.handleComparison(),j(),J()},Z=(t,e)=>{document.querySelector(".top__ref-screen-bar").style.setProperty("--screen-index",e.toString()),[...t.target.parentElement.children].forEach(i=>{i.style.fontWeight="400"}),t.target.style.fontWeight="600"};v.forEach((t,e)=>{q(t,e),t.addEventListener("click",s=>{const i=Number(s.target.id.slice(11)-1);Z(s,i),C.handleReferenceValues(null,i)})});const ee=document.querySelectorAll(".common-screens-btn"),te=document.querySelector(".btn-remove--common-screens"),f=document.querySelector(".common-screens-dialog");ee.forEach(t=>{t.addEventListener("click",async e=>{f.showModal();const s=e.currentTarget.id.slice(-1),i=new g(s);i.data=await g.fetchData(),i.attachEventHandlers()})});te.addEventListener("click",()=>f.close());f.addEventListener("click",t=>{const e=f.getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width||f.close()});const A=document.querySelector(".btn-main--compare"),se=document.querySelector(".btn-reset"),ie=document.querySelectorAll(".screen-form"),oe=document.querySelectorAll(".screen-forms input:not([type='checkbox'])"),ne=document.querySelectorAll(".screen-forms input[type='checkbox']"),re=()=>{ie.forEach(t=>{t.reset()})};se.addEventListener("click",()=>{re()});A.addEventListener("click",()=>{Q(),v[0].click(),R(),document.getElementById("screen-results").scrollIntoView({behavior:"smooth"})});oe.forEach(t=>{t.addEventListener("keypress",e=>{!t.classList.contains("name")&&e.key==="Enter"&&(e.target.blur(),A.click())}),t.addEventListener("focus",e=>{e.target.select()}),E(t)});ne.forEach(t=>{t.addEventListener("click",e=>{e.target.parentNode.childNodes.forEach(s=>{e.clientX!==0&&s.nodeName==="INPUT"&&s.blur()})}),t.addEventListener("keydown",e=>{e.key==="Escape"&&e.target.parentNode.childNodes.forEach(s=>{s.nodeName==="INPUT"&&s.blur()}),e.key==="Enter"&&[...e.target.parentNode.children].forEach(s=>{s.hasAttribute("type")&&s.getAttribute("type")==="checkbox"&&(s.checked=!s.checked,w(e))})})});const le=document.querySelector(".switch-mode");le.addEventListener("click",()=>{N()});window.addEventListener("load",()=>{new x().handleCookieConsent(),D(),new I().appendKofi(),B()});