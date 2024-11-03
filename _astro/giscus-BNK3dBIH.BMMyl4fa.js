/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,B=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),V=new WeakMap;let ot=class{constructor(s,t,e){if(this._$cssResult$=!0,e!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=t}get styleSheet(){let s=this.o;const t=this.t;if(B&&s===void 0){const e=t!==void 0&&t.length===1;e&&(s=V.get(t)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),e&&V.set(t,s))}return s}toString(){return this.cssText}};const pt=s=>new ot(typeof s=="string"?s:s+"",void 0,G),_t=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new ot(e,s,G)},$t=(s,t)=>{if(B)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=x.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},q=B?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return pt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gt,defineProperty:ft,getOwnPropertyDescriptor:mt,getOwnPropertyNames:vt,getOwnPropertySymbols:At,getPrototypeOf:yt}=Object,E=globalThis,K=E.trustedTypes,St=K?K.emptyScript:"",J=E.reactiveElementPolyfillSupport,U=(s,t)=>s,H={toAttribute(s,t){switch(t){case Boolean:s=s?St:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},W=(s,t)=>!gt(s,t),F={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&ft(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=mt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r?.call(this)},set(n){const h=r?.call(this);o.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??F}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,i=[...vt(e),...At(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(q(r))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const n=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:H).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const n=r.getPropertyOptions(o),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:H;this._$Em=o,this[o]=h.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??W)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(i)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[U("elementProperties")]=new Map,S[U("finalized")]=new Map,J?.({ReactiveElement:S}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,k=L.trustedTypes,Q=k?k.createPolicy("lit-html",{createHTML:s=>s}):void 0,ht="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,at="?"+m,Et=`<${at}>`,y=document,O=()=>y.createComment(""),R=s=>s===null||typeof s!="object"&&typeof s!="function",lt=Array.isArray,bt=s=>lt(s)||typeof s?.[Symbol.iterator]=="function",z=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,X=/>/g,v=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,ct=/^(?:script|style|textarea|title)$/i,Ct=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),wt=Ct(1),b=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),st=new WeakMap,A=y.createTreeWalker(y,129);function dt(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const Ut=(s,t)=>{const e=s.length-1,i=[];let r,o=t===2?"<svg>":"",n=w;for(let h=0;h<e;h++){const a=s[h];let $,u,l=-1,g=0;for(;g<a.length&&(n.lastIndex=g,u=n.exec(a),u!==null);)g=n.lastIndex,n===w?u[1]==="!--"?n=Z:u[1]!==void 0?n=X:u[2]!==void 0?(ct.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=v):u[3]!==void 0&&(n=v):n===v?u[0]===">"?(n=r??w,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,$=u[1],n=u[3]===void 0?v:u[3]==='"'?et:tt):n===et||n===tt?n=v:n===Z||n===X?n=w:(n=v,r=void 0);const f=n===v&&s[h+1].startsWith("/>")?" ":"";o+=n===w?a+Et:l>=0?(i.push($),a.slice(0,l)+ht+a.slice(l)+m+f):a+m+(l===-2?h:f)}return[dt(s,o+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class N{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const h=t.length-1,a=this.parts,[$,u]=Ut(t,e);if(this.el=N.createElement($,i),A.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=A.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(ht)){const g=u[n++],f=r.getAttribute(l).split(m),I=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:I[2],strings:f,ctor:I[1]==="."?Tt:I[1]==="?"?Ot:I[1]==="@"?Rt:j}),r.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:o}),r.removeAttribute(l));if(ct.test(r.tagName)){const l=r.textContent.split(m),g=l.length-1;if(g>0){r.textContent=k?k.emptyScript:"";for(let f=0;f<g;f++)r.append(l[f],O()),A.nextNode(),a.push({type:2,index:++o});r.append(l[g],O())}}}else if(r.nodeType===8)if(r.data===at)a.push({type:2,index:o});else{let l=-1;for(;(l=r.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:o}),l+=m.length-1}o++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function C(s,t,e=s,i){var r,o;if(t===b)return t;let n=i!==void 0?(r=e._$Co)==null?void 0:r[i]:e._$Cl;const h=R(t)?void 0:t._$litDirective$;return n?.constructor!==h&&((o=n?._$AO)==null||o.call(n,!1),h===void 0?n=void 0:(n=new h(s),n._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=n:e._$Cl=n),n!==void 0&&(t=C(s,n._$AS(s,t.values),n,i)),t}let Pt=class{constructor(s,t){this._$AV=[],this._$AN=void 0,this._$AD=s,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(s){const{el:{content:t},parts:e}=this._$AD,i=(s?.creationScope??y).importNode(t,!0);A.currentNode=i;let r=A.nextNode(),o=0,n=0,h=e[0];for(;h!==void 0;){if(o===h.index){let a;h.type===2?a=new M(r,r.nextSibling,this,s):h.type===1?a=new h.ctor(r,h.name,h.strings,this,s):h.type===6&&(a=new Nt(r,this,s)),this._$AV.push(a),h=e[++n]}o!==h?.index&&(r=A.nextNode(),o++)}return A.currentNode=y,i}p(s){let t=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(s,e,t),t+=e.strings.length-2):e._$AI(s[t])),t++}};class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),R(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==c&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=N.createElement(dt(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)==null?void 0:e._$AD)===o)this._$AH.p(i);else{const n=new Pt(o,this),h=n.u(this.options);n.p(i),this.T(h),this._$AH=n}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new N(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new M(this.S(O()),this.S(O()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(o===void 0)t=C(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const h=t;let a,$;for(t=o[0],a=0;a<o.length-1;a++)$=C(this,h[i+a],e,a),$===b&&($=this._$AH[a]),n||(n=!R($)||$!==this._$AH[a]),$===c?t=c:t!==c&&(t+=($??"")+o[a+1]),this._$AH[a]=$}n&&!r&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Ot extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Rt extends j{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??c)===b)return;const i=this._$AH,r=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==c&&(i===c||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const it=L.litHtmlPolyfillSupport;it?.(N,M),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.1.2");const Mt=(s,t,e)=>{const i=e?.renderBefore??t;let r=i._$litPart$;if(r===void 0){const o=e?.renderBefore??null;i._$litPart$=r=new M(t.insertBefore(O(),o),o,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(s){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=Mt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return b}};var rt;P._$litElement$=!0,P.finalized=!0,(rt=globalThis.litElementHydrateSupport)==null||rt.call(globalThis,{LitElement:P});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W},Ht=(s=xt,t,e)=>{const{kind:i,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,s),i==="accessor"){const{name:n}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,s)},init(h){return h!==void 0&&this.P(n,void 0,s),h}}}if(i==="setter"){const{name:n}=e;return function(h){const a=this[n];t.call(this,h),this.requestUpdate(n,a,s)}}throw Error("Unsupported decorator location: "+i)};function _(s){return(t,e)=>typeof e=="object"?Ht(s,t,e):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(s,t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=s=>(...t)=>({_$litDirective$:s,values:t});let jt=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,t,e){this._$Ct=s,this._$AM=t,this._$Ci=e}_$AS(s,t){return this.update(s,t)}update(s,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(s,t)=>{var e;const i=s._$AN;if(i===void 0)return!1;for(const r of i)(e=r._$AO)==null||e.call(r,t,!1),T(r,t);return!0},D=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},ut=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Bt(t)}};function zt(s){this._$AN!==void 0?(D(this),this._$AM=s,ut(this)):this._$AM=s}function Yt(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let o=e;o<i.length;o++)T(i[o],!1),D(i[o]);else i!=null&&(T(i,!1),D(i));else T(this,s)}const Bt=s=>{s.type==kt.CHILD&&(s._$AP??(s._$AP=Yt),s._$AQ??(s._$AQ=zt))};class Gt extends jt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ut(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),e&&(T(this,t),D(this))}setValue(t){if(Lt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=()=>new Vt;class Vt{}const Y=new WeakMap,qt=Dt(class extends Gt{render(s){return c}update(s,[t]){var e;const i=t!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=s.options)==null?void 0:e.host,this.rt(this.ct=s.element)),c}rt(s){if(typeof this.Y=="function"){const t=this.ht??globalThis;let e=Y.get(t);e===void 0&&(e=new WeakMap,Y.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,s),s!==void 0&&this.Y.call(this.ht,s)}else this.Y.value=s}get lt(){var s,t;return typeof this.Y=="function"?(s=Y.get(this.ht??globalThis))==null?void 0:s.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Kt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,p=(s,t,e,i)=>{for(var r=i>1?void 0:i?Jt(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Kt(t,e,r),r};function Ft(s){return customElements.get(s)?t=>t:It(s)}let d=class extends P{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=Wt(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var s;return(s=this._iframeRef)==null?void 0:s.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(s){return`[giscus] An error occurred. Error message: "${s}".`}setupSession(){const s=location.href,t=new URL(s),e=localStorage.getItem(this.GISCUS_SESSION_KEY),i=t.searchParams.get("giscus")??"";if(this.__session="",i){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,t.searchParams.delete("giscus"),t.hash="",history.replaceState(void 0,document.title,t.toString());return}if(e)try{this.__session=JSON.parse(e)}catch(r){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(r?.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(s){if(s.origin!==this._host)return;const{data:t}=s;if(!(typeof t=="object"&&t.giscus))return;if(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),t.giscus.signOut){console.info("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!t.giscus.error)return;const e=t.giscus.error;if(e.includes("Bad credentials")||e.includes("Invalid state value")||e.includes("State has expired")){if(localStorage.getItem(this.GISCUS_SESSION_KEY)!==null){console.warn(`${this._formatError(e)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(e)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(e.includes("Discussion not found")){console.warn(`[giscus] ${e}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(e)} ${this.ERROR_SUGGESTION}`)}sendMessage(s){var t;!((t=this.iframeRef)!=null&&t.contentWindow)||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:s},this._host)}updateConfig(){const s={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:this.strict==="1",reactionsEnabled:this.reactionsEnabled==="1",emitMetadata:this.emitMetadata==="1",inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(s)}firstUpdated(){var s;(s=this.iframeRef)==null||s.addEventListener("load",()=>{var t;(t=this.iframeRef)==null||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(s,t,e){if(!this.hasUpdated||s==="host"){super.requestUpdate(s,t,e);return}this.updateConfig()}getMetaContent(s,t=!1){const e=t?`meta[property='og:${s}'],`:"",i=document.querySelector(e+`meta[name='${s}']`);return i?i.content:""}_getCleanedUrl(){const s=new URL(location.href);return s.searchParams.delete("giscus"),s.hash="",s}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";case"pathname":default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return this.mapping==="number"?this.term??"":""}getIframeSrc(){const s=this._getCleanedUrl().toString(),t=`${s}${this.id?"#"+this.id:""}`,e=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||s,r={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:e,backLink:i},o=this._host,n=this.lang?`/${this.lang}`:"",h=new URLSearchParams(r);return`${o}${n}/widget?${h.toString()}`}render(){return wt`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${qt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}};d.styles=_t`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;p([_({reflect:!0})],d.prototype,"host",2);p([_({reflect:!0})],d.prototype,"repo",2);p([_({reflect:!0})],d.prototype,"repoId",2);p([_({reflect:!0})],d.prototype,"category",2);p([_({reflect:!0})],d.prototype,"categoryId",2);p([_({reflect:!0})],d.prototype,"mapping",2);p([_({reflect:!0})],d.prototype,"term",2);p([_({reflect:!0})],d.prototype,"strict",2);p([_({reflect:!0})],d.prototype,"reactionsEnabled",2);p([_({reflect:!0})],d.prototype,"emitMetadata",2);p([_({reflect:!0})],d.prototype,"inputPosition",2);p([_({reflect:!0})],d.prototype,"theme",2);p([_({reflect:!0})],d.prototype,"lang",2);p([_({reflect:!0})],d.prototype,"loading",2);d=p([Ft("giscus-widget")],d);export{d as GiscusWidget};