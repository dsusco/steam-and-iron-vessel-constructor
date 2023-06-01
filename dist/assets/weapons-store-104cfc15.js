import{u as L,s as B,x as H,k as v,y as K,z as U,A as Y,B as k,q as X}from"./index-babcb7e0.js";function Z(e){return+e==0?e="-":+e>0?e=`+${e}`:e=`${e}`,e}function D(e){return+e==0?e="-":e=`${7-+e}+`,e}const Ge=Array.from({length:5},(e,r)=>D(r+1)),Me=Array.from({length:6},(e,r)=>D(r)),Ne=Array.from({length:6},(e,r)=>String(r+1)),Ie=Array.from({length:13},(e,r)=>String(r)),Ce=Array.from({length:7},(e,r)=>String(r)),Ue=Array.from({length:18},(e,r)=>String(r+1)),De=Array.from({length:6},(e,r)=>Z(r)),je=Array.from({length:18},(e,r)=>String(r+1)),We=Array.from({length:6},(e,r)=>String(r+1)),qe=Array.from({length:6},(e,r)=>String(r+1)),Ve={Vessel:{A:{name:"Agile",prohibitedEccentricities:["A+"]},"A+":{name:"Agile+",prohibitedEccentricities:["A"]},Amph:{name:"Amphibious",requiredVesselTypes:["Aquanef","Aquacraft","Ironclad","Contraptions"],prohibitedEccentricities:["ACrl","Sub"]},ACrl:{name:"Aquacrawler",requiredVesselTypes:["Ironclad","Contraptions"],prohibitedEccentricities:["Amph","Sub"]},M:{name:"Mobile",prohibitedEccentricities:["M+"]},"M+":{name:"Mobile+",prohibitedEccentricities:["M"]},RA1:{name:"Reinforced Armor (1)",prohibitedEccentricities:["RA2","RA3","RA4","RA5"]},RA2:{name:"Reinforced Armor (2)",prohibitedEccentricities:["RA1","RA3","RA4","RA5"]},RA3:{name:"Reinforced Armor (3)",prohibitedEccentricities:["RA1","RA2","RA4","RA5"]},RA4:{name:"Reinforced Armor (4)",prohibitedEccentricities:["RA1","RA2","RA3","RA5"]},RA5:{name:"Reinforced Armor (5)",prohibitedEccentricities:["RA1","RA2","RA3","RA4"]},S:{name:"Stable"},Sub:{name:"Subaqua",requiredVesselTypes:["Aquanef","Aquacraft",{type:"Ironclad",requiredEccentricities:["Amph"]},{type:"Contraptions",requiredEccentricities:["Amph"]}],prohibitedEccentricities:["ACrl"]},TBA:{name:"Thick Bottom Armor"},TRA:{name:"Thick Rear Armor"},TTA:{name:"Thick Top Armor"}},Weapon:{D:{name:"Destructive",prohibitedEccentricities:["D+"]},"D+":{name:"Destructive+",prohibitedEccentricities:["D"]},F:{name:"Forecasting",prohibitedEccentricities:["F+"]},"F+":{name:"Forecasting+",prohibitedEccentricities:["F"]},G:{name:"Gyroscopic",prohibitedEccentricities:["G+"]},"G+":{name:"Gyroscopic+",prohibitedEccentricities:["G"]},I:{name:"Immaterial"},P:{name:"Precise"},U:{name:"Unerring",prohibitedEccentricities:["U+"]},"U+":{name:"Unerring+",prohibitedEccentricities:["U"]}}};let Q="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",ee=(e=21)=>{let r="",t=e;for(;t--;)r+=Q[Math.random()*64|0];return r};function re(e){return B()?(H(e),!0):!1}function O(e){return typeof e=="function"?e():L(e)}const te=typeof window<"u",ne=()=>{};function ie(e,r){function t(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})).then(a).catch(o)})}return t}const j=e=>e();function ae(e=j){const r=v(!0);function t(){r.value=!1}function n(){r.value=!0}const a=(...o)=>{r.value&&e(...o)};return{isActive:K(r),pause:t,resume:n,eventFilter:a}}var F=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,ce=(e,r)=>{var t={};for(var n in e)oe.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&F)for(var n of F(e))r.indexOf(n)<0&&se.call(e,n)&&(t[n]=e[n]);return t};function le(e,r,t={}){const n=t,{eventFilter:a=j}=n,o=ce(n,["eventFilter"]);return U(e,ie(a,r),o)}var fe=Object.defineProperty,ue=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,$=(e,r,t)=>r in e?fe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,de=(e,r)=>{for(var t in r||(r={}))W.call(r,t)&&$(e,t,r[t]);if(S)for(var t of S(r))q.call(r,t)&&$(e,t,r[t]);return e},Ae=(e,r)=>ue(e,pe(r)),me=(e,r)=>{var t={};for(var n in e)W.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&S)for(var n of S(e))r.indexOf(n)<0&&q.call(e,n)&&(t[n]=e[n]);return t};function he(e,r,t={}){const n=t,{eventFilter:a}=n,o=me(n,["eventFilter"]),{eventFilter:A,pause:_,resume:y,isActive:f}=ae(a);return{stop:le(e,r,Ae(de({},o),{eventFilter:A})),pause:_,resume:y,isActive:f}}function _e(e){var r;const t=O(e);return(r=t==null?void 0:t.$el)!=null?r:t}const E=te?window:void 0;function G(...e){let r,t,n,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,n,a]=e,r=E):[r,t,n,a]=e,!r)return ne;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const o=[],A=()=>{o.forEach(c=>c()),o.length=0},_=(c,l,m,u)=>(c.addEventListener(l,m,u),()=>c.removeEventListener(l,m,u)),y=U(()=>[_e(r),O(a)],([c,l])=>{A(),c&&o.push(...t.flatMap(m=>n.map(u=>_(c,m,u,l))))},{immediate:!0,flush:"post"}),f=()=>{y(),A()};return re(f),f}const b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w="__vueuse_ssr_handlers__",ye=ge();function ge(){return w in b||(b[w]=b[w]||{}),b[w]}function be(e,r){return ye[e]||r}function we(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Se=Object.defineProperty,M=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,N=(e,r,t)=>r in e?Se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,I=(e,r)=>{for(var t in r||(r={}))Ee.call(r,t)&&N(e,t,r[t]);if(M)for(var t of M(r))Re.call(r,t)&&N(e,t,r[t]);return e};const ve={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},C="vueuse-storage";function Oe(e,r,t,n={}){var a;const{flush:o="pre",deep:A=!0,listenToStorageChanges:_=!0,writeDefaults:y=!0,mergeDefaults:f=!1,shallow:c,window:l=E,eventFilter:m,onError:u=i=>{console.error(i)}}=n,h=(c?Y:v)(r);if(!t)try{t=be("getDefaultStorage",()=>{var i;return(i=E)==null?void 0:i.localStorage})()}catch(i){u(i)}if(!t)return h;const p=O(r),T=we(p),g=(a=n.serializer)!=null?a:ve[T],{pause:V,resume:P}=he(h,()=>x(h.value),{flush:o,deep:A,eventFilter:m});return l&&_&&(G(l,"storage",R),G(l,C,J)),R(),h;function x(i){try{if(i==null)t.removeItem(e);else{const s=g.write(i),d=t.getItem(e);d!==s&&(t.setItem(e,s),l&&l.dispatchEvent(new CustomEvent(C,{detail:{key:e,oldValue:d,newValue:s,storageArea:t}})))}}catch(s){u(s)}}function z(i){const s=i?i.newValue:t.getItem(e);if(s==null)return y&&p!==null&&t.setItem(e,g.write(p)),p;if(!i&&f){const d=g.read(s);return typeof f=="function"?f(d,p):T==="object"&&!Array.isArray(d)?I(I({},p),d):d}else return typeof s!="string"?s:g.read(s)}function J(i){R(i.detail)}function R(i){if(!(i&&i.storageArea!==t)){if(i&&i.key==null){h.value=p;return}if(!(i&&i.key!==e)){V();try{h.value=z(i)}catch(s){u(s)}finally{i?k(P):P()}}}}}function Te(e,r,t={}){const{window:n=E}=t;return Oe(e,r,n==null?void 0:n.localStorage,t)}const Pe={Guns:{firingArcs:["forward","astarboardForward","astarboardAft","aft","aportAft","aportForward"],maximumRange:18},"Released Munitions":{firingArcs:["above","below"],maximumRange:12}};class Fe{constructor(r="",t=Object.keys(Pe)[0]){this.name=`${r}`,this.type=`${t}`,this.rangeBands=[],this.eccentricities=[]}}const xe=X("weaponStore",()=>{const e=v(Te("weaponStore",{}));function r(){const n=ee();return e.value[n]=new Fe,n}function t(n){delete e.value[n]}return{weapons:e,addWeapon:r,removeWeapon:t}});export{Me as A,Ne as D,Ie as E,Ce as F,Ue as H,De as P,We as R,qe as S,Pe as W,Ve as a,Ge as b,je as c,Te as d,ee as n,xe as u};
