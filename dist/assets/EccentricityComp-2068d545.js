import{a as u,o,c as a,w as d,l as p,b,d as f,t as v}from"./index-babcb7e0.js";const s=Object.freeze(Object.defineProperty({__proto__:null,get prohibitedEccentricities(){return y},get requiredEccentricities(){return g},get requiredVesselTypes(){return m}},Symbol.toStringTag,{value:"Module"}));function y(t,e,r=null,n=null){return t.prohibitedEccentricities?t.prohibitedEccentricities.find(i=>e.eccentricities.includes(i))===void 0:!0}function g(t,e,r=null,n=null){return t.requiredEccentricities?t.requiredEccentricities.find(i=>e.eccentricities.includes(i))!==void 0:!0}function m(t,e,r=null,n=null){return t.requiredVesselTypes?t.requiredVesselTypes.find(i=>typeof i=="string"?e.type===i:e.type!==i.type?!1:Object.values(s).every(c=>c(i,e,r,n)))!==void 0:!0}const E=["disabled","value"],h={__name:"EccentricityComp",props:{abbr:{type:String,required:!0},eccentricity:{type:Object,required:!0},vessel:Object,weapon:Object},setup(t){const e=t,r=u(()=>e.weapon===void 0?e.vessel:e.weapon),n=u(()=>Object.values(s).every(i=>i(e.eccentricity,r.value,e.vessel,e.weapon)));return(i,c)=>(o(),a("label",null,[d(b("input",{type:"checkbox",disabled:!n.value,value:t.abbr,"onUpdate:modelValue":c[0]||(c[0]=l=>r.value.eccentricities=l)},null,8,E),[[p,r.value.eccentricities]]),f(" "+v(t.eccentricity.name),1)]))}};export{h as _};
