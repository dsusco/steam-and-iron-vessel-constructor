import{o as l,c as a,a as d,b as o,t as f,d as v,w as y}from"./index-dccb4eeb.js";const n=Object.freeze(Object.defineProperty({__proto__:null,get prohibitedEccentricities(){return g},get requiredEccentricities(){return p},get requiredTypes(){return h}},Symbol.toStringTag,{value:"Module"})),b=["checked","disabled","value"],O={__name:"Eccentricity",props:{abbr:{type:String,required:!0},checked:{type:Boolean,required:!0},disabled:{type:Boolean,required:!0},eccentricity:{type:Object,required:!0}},emits:["update:eccentricity"],setup(e,{emit:i}){return(t,r)=>(l(),a("label",null,[d("input",{type:"checkbox",checked:e.checked,disabled:e.disabled,value:e.abbr,onChange:r[0]||(r[0]=c=>i("update:eccentricity",c.target.value,c.target.checked))},null,40,b),o(" "+f(e.eccentricity.name),1)]))}};function g(e,i){return e.prohibitedEccentricities?e.prohibitedEccentricities.find(t=>typeof t=="string"?i.eccentricities.value.includes(t):i.eccentricities.value.includes(t.eccentricity)?Object.values(n).every(r=>r(t,i)):!1)===void 0:!0}function p(e,i){return e.requiredEccentricities?e.requiredEccentricities.find(t=>typeof t=="string"?i.eccentricities.value.includes(t):i.eccentricities.value.includes(t.eccentricity)?Object.values(n).every(r=>r(t,i)):!1)!==void 0:!0}function h(e,i){return e.requiredTypes?e.requiredTypes.find(t=>typeof t=="string"?i.type.value===t:i.type.value!==t.type?!1:Object.values(n).every(r=>r(t,i)))!==void 0:!0}function j(e,i){const t=v(null);function r(c,u){u?e.eccentricities.value.push(c):e.eccentricities.value.splice(e.eccentricities.value.indexOf(c),1)}return y(()=>{t.value=Object.keys(i).reduce((c,u)=>(c[u]=Object.values(n).every(s=>s(i[u],e)),c),{})}),{enabledEccentricities:t,toggleEccentricity:r}}export{O as _,j as u};
