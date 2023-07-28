import{o as n,c as s,a,t as g,b as C,F as v,r as b,u as o,d as x,w,i as q,e as c,n as O,f as F,g as A,h as E,p as V,j,k as D,l as K,s as X}from"./index-1f403647.js";import{u as M,F as U,W as Y,A as S,E as I,a as N,H as Z,S as J}from"./weapon-offensive-potential-e6206dbb.js";import{u as B,C as G,a as Q,b as ee,c as te,d as z,e as ne}from"./vessels-store-83905651.js";import{u as ae,_ as ie}from"./eccentricities-4d7272af.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const le=["value"],se=a("option",{value:""},null,-1),re=["value"],ue={__name:"VesselBattery",props:{label:{type:String,required:!0},weaponId:{type:String}},emits:["update:weaponId"],setup(e,{emit:r}){const t=M();return(R,m)=>(n(),s("fieldset",null,[a("legend",null,g(e.label),1),a("label",null,[C(" Weapon "),a("select",{value:e.weaponId,onChange:m[0]||(m[0]=p=>r("update:weaponId",p.target.value))},[se,(n(!0),s(v,null,b(o(t).weapons,(p,u)=>(n(),s("option",{key:u,value:u},g(p.name||u),9,re))),128))],40,le)])]))}};function oe(e,r,t,R){const m=x(null);return w(()=>{const p=t.value?U.indexOf(t.value.firingArcs[e.value][r.value]):0,u=R.value?U.indexOf(R.value.firingArcs[e.value][r.value])+1:U.length;m.value=U.slice(p,u)}),{firingArcGamut:m}}const ce=["value"],de={__name:"VesselConditionFiringDiagramArc",props:{battery:{type:String,required:!0},label:{type:String,required:!0},weapons:{type:String,required:!0}},emits:["update:weapons"],setup(e,{emit:r}){const t=e,{firingArcGamut:R}=oe(c(t,"battery"),c(t,"label"),q("nextCondition"),q("prevCondition"));return(m,p)=>(n(),s("label",{class:O(`arc _${e.label.toLowerCase().replace(/\s+/g,"_")}`)},[C(g(e.label)+" ",1),a("select",{value:e.weapons,onChange:p[0]||(p[0]=u=>r("update:weapons",u.target.value))},[(n(!0),s(v,null,b(o(R),u=>(n(),s("option",{key:u},g(u),1))),128))],40,ce)],2))}};const ge={key:0,class:"firing_diagram"},pe={__name:"VesselConditionFiringDiagram",props:{firingArcs:{type:Object,required:!0},label:{type:String,required:!0}},setup(e){const r=e,t=F(()=>M().weapons[q("batteries").value[r.label].weaponId]);return(R,m)=>t.value?(n(),s("fieldset",ge,[a("legend",null,g(e.label)+" ("+g(t.value.name)+")",1),(n(!0),s(v,null,b(o(Y)[t.value.type].firingArcs,p=>(n(),A(de,{key:p,battery:e.label,label:p,weapons:e.firingArcs[p],"onUpdate:weapons":u=>e.firingArcs[p]=u},null,8,["battery","label","weapons","onUpdate:weapons"]))),128))])):E("",!0)}},me=$(pe,[["__scopeId","data-v-ea6aa56a"]]);function Re(e,r){const t=x(null);return w(()=>{const R=e.value?S.indexOf(e.value.armorRating):0,m=r.value?S.indexOf(r.value.armorRating)+1:S.length;t.value=S.slice(R,m)}),{armorRatingGamut:t}}function H(e,r=x(null),t=x(null)){const{classification:R}=B(e),m=x(null),p=x(null);return w(()=>{try{m.value=I.slice(0,G[R.value][e.value].maximumEngineRating+1)}catch{}}),w(()=>{try{const u=r.value?I.indexOf(r.value.engineRating):0,l=t.value?I.indexOf(t.value.engineRating):G[R.value][e.value].maximumEngineRating;p.value=I.slice(u,l+1)}catch{}}),{engineRatingGamut:p,smallCraftEngineRatingGamut:m}}const ve=e=>(j("data-v-9cdd1bc5"),e=e(),D(),e),be=["value"],fe=["value"],ye=["value"],Ce=ve(()=>a("legend",null,"Firing Arcs",-1)),he={__name:"VesselCondition",props:{label:{type:String,required:!0},hullCheckboxes:{type:Number,required:!0},nextCondition:Object,prevCondition:Object,type:{type:String,required:!0},engineRating:{type:String,required:!0},armorRating:{type:String,required:!0},firingArcs:{type:Object,required:!0}},emits:["update:engineRating","update:armorRating"],setup(e,{emit:r}){const t=e,{armorRatingGamut:R}=Re(c(t,"nextCondition"),c(t,"prevCondition")),{engineRatingGamut:m}=H(c(t,"type"),c(t,"nextCondition"),c(t,"prevCondition"));return V("nextCondition",c(t,"nextCondition")),V("prevCondition",c(t,"prevCondition")),(p,u)=>e.hullCheckboxes?(n(),s("fieldset",{key:0,class:O(`condition _${e.label.toLowerCase().replace(/\s+/g,"_")}`)},[a("legend",null,g(e.label),1),a("label",null,[C(" Hull Checkboxes "),a("input",{disabled:"",value:e.hullCheckboxes},null,8,be)]),a("label",null,[C(" Engine Rating "),a("select",{value:e.engineRating,onChange:u[0]||(u[0]=l=>r("update:engineRating",l.target.value))},[(n(!0),s(v,null,b(o(m),l=>(n(),s("option",{key:l},g(l),1))),128))],40,fe)]),a("label",null,[C(" Armor Rating "),a("select",{value:e.armorRating,onChange:u[1]||(u[1]=l=>r("update:armorRating",l.target.value))},[(n(!0),s(v,null,b(o(R),l=>(n(),s("option",{key:l},g(l),1))),128))],40,ye)]),a("fieldset",null,[Ce,(n(!0),s(v,null,b(e.firingArcs,(l,_)=>(n(),A(me,{key:_,firingArcs:l,label:_},null,8,["firingArcs","label"]))),128))])],2)):E("",!0)}},_e=$(he,[["__scopeId","data-v-9cdd1bc5"]]);const L=e=>(j("data-v-7f1a38c4"),e=e(),D(),e),xe={class:"vessel"},Ae=["value"],Se=["disabled","value"],ke=["label"],Ue={class:"vessel_eccentricities"},Ie=L(()=>a("legend",null,"Eccentricities",-1)),we={class:"vessel_batteries"},Ee=L(()=>a("legend",null,"Batteries",-1)),qe={key:0,class:"vessel_conditions"},Ve=["value"],Ge={key:1,class:"small_craft_values"},Oe=["value"],$e=["value"],Te=["value"],Ne={__name:"Vessel",props:{id:{type:String,required:!0},class:{type:String,required:!0},type:{type:String,required:!0},eccentricities:{type:Array,required:!0},batteries:{type:Object,required:!0},hullRating:{type:String,required:!0},conditions:{type:Object,required:!0},sizeCheckboxes:{type:String,required:!0},engineRating:{type:String,required:!0},armorRating:{type:String,required:!0}},emits:["remove:vessel","update:class","update:type","update:hullRating","update:sizeCheckboxes","update:engineRating","update:armorRating"],setup(e,{emit:r}){const t=e,{classification:R,isColossal:m,isSmallCraft:p}=B(c(t,"type")),{defensiveRating:u}=Q(c(t,"type"),c(t,"hullRating"),c(t,"conditions"),c(t,"sizeCheckboxes"),c(t,"armorRating"),c(t,"eccentricities")),{enabledEccentricities:l,toggleEccentricity:_}=ae(K(t),N.Vessel),{smallCraftEngineRatingGamut:d}=H(c(t,"type")),{hullCheckboxes:W}=ee(c(t,"hullRating")),{offensiveRating:T}=te(c(t,"hullRating"),c(t,"batteries"),c(t,"conditions")),P=F(()=>Math.round(Math.sqrt(T.value*u.value)));return V("batteries",c(t,"batteries")),(Fe,f)=>(n(),s("fieldset",xe,[a("legend",null,g(this.class||e.id),1),a("label",null,[C(" Class "),a("input",{value:e.class,onInput:f[0]||(f[0]=i=>r("update:class",i.target.value))},null,40,Ae)]),a("label",null,[C(" Type "),a("select",{disabled:e.eccentricities.length,value:e.type,onChange:f[1]||(f[1]=i=>r("update:type",i.target.value))},[(n(!0),s(v,null,b(o(G),(i,y)=>(n(),s("optgroup",{key:y,label:y},[(n(!0),s(v,null,b(i,(h,k)=>(n(),s("option",{key:k},g(k),1))),128))],8,ke))),128))],40,Se)]),a("button",{type:"button",onClick:f[2]||(f[2]=i=>r("remove:vessel",e.id))},"×"),a("span",null,"DRAT: "+g(o(u)),1),a("span",null,"ORAT: "+g(o(T)),1),a("span",null,"CRAT: "+g(P.value),1),a("fieldset",Ue,[Ie,(n(!0),s(v,null,b(o(N).Vessel,(i,y)=>(n(),A(ie,{key:y,abbr:y,checked:e.eccentricities.includes(y),disabled:!o(l)[y],eccentricity:i,"onUpdate:eccentricity":f[3]||(f[3]=(h,k)=>o(_)(h,k))},null,8,["abbr","checked","disabled","eccentricity"]))),128))]),a("fieldset",we,[Ee,(n(!0),s(v,null,b(e.batteries,(i,y)=>(n(),A(ue,{key:y,label:y,weaponId:i.weaponId,"onUpdate:weaponId":h=>i.weaponId=h},null,8,["label","weaponId","onUpdate:weaponId"]))),128))]),o(m)?(n(),s("fieldset",qe,[a("legend",null,g(o(R)),1),a("label",null,[C(" Hull Rating "),a("select",{value:e.hullRating,onChange:f[4]||(f[4]=i=>r("update:hullRating",i.target.value))},[(n(!0),s(v,null,b(o(Z),i=>(n(),s("option",{key:i},g(i),1))),128))],40,Ve)]),(n(!0),s(v,null,b(e.conditions,(i,y)=>(n(),A(_e,{key:y,label:y,hullCheckboxes:o(W)[y],nextCondition:e.conditions[o(z)[y].nextCondition],prevCondition:e.conditions[o(z)[y].prevCondition],type:e.type,engineRating:i.engineRating,"onUpdate:engineRating":h=>i.engineRating=h,armorRating:i.armorRating,"onUpdate:armorRating":h=>i.armorRating=h,firingArcs:i.firingArcs,"onUpdate:firingArcs":h=>i.firingArcs=h},null,8,["label","hullCheckboxes","nextCondition","prevCondition","type","engineRating","onUpdate:engineRating","armorRating","onUpdate:armorRating","firingArcs","onUpdate:firingArcs"]))),128))])):E("",!0),o(p)?(n(),s("fieldset",Ge,[a("legend",null,g(o(R)),1),a("label",null,[C(" Size Checkboxes "),a("select",{value:e.sizeCheckboxes,onChange:f[5]||(f[5]=i=>r("update:sizeCheckboxes",i.target.value))},[(n(!0),s(v,null,b(o(J),i=>(n(),s("option",{key:i},g(i),1))),128))],40,Oe)]),a("label",null,[C(" Engine Rating "),a("select",{value:e.engineRating,onChange:f[6]||(f[6]=i=>r("update:engineRating",i.target.value))},[(n(!0),s(v,null,b(o(d),i=>(n(),s("option",{key:i},g(i),1))),128))],40,$e)]),a("label",null,[C(" Armor Rating "),a("select",{value:e.armorRating,onChange:f[7]||(f[7]=i=>r("update:armorRating",i.target.value))},[(n(!0),s(v,null,b(o(S),i=>(n(),s("option",{key:i},g(i),1))),128))],40,Te)])])):E("",!0)]))}},ze=$(Ne,[["__scopeId","data-v-7f1a38c4"]]),Le={__name:"VesselsView",setup(e){const r=ne(),{addVessel:t,removeVessel:R}=r,{vessels:m}=X(r);return(p,u)=>(n(),s("main",null,[a("div",null,[a("button",{onClick:u[0]||(u[0]=l=>o(t)())},"Add Vessel")]),(n(!0),s(v,null,b(o(m),(l,_)=>(n(),s("div",{key:_},g(l),1))),128)),(n(!0),s(v,null,b(o(m),(l,_)=>(n(),A(ze,{key:_,id:_,class:O(l.class),"onUpdate:class":d=>l.class=d,type:l.type,"onUpdate:type":d=>l.type=d,eccentricities:l.eccentricities,"onUpdate:eccentricities":d=>l.eccentricities=d,batteries:l.batteries,"onUpdate:batteries":d=>l.batteries=d,hullRating:l.hullRating,"onUpdate:hullRating":d=>l.hullRating=d,conditions:l.conditions,"onUpdate:conditions":d=>l.conditions=d,sizeCheckboxes:l.sizeCheckboxes,"onUpdate:sizeCheckboxes":d=>l.sizeCheckboxes=d,engineRating:l.engineRating,"onUpdate:engineRating":d=>l.engineRating=d,armorRating:l.armorRating,"onUpdate:armorRating":d=>l.armorRating=d,"onRemove:vessel":d=>o(R)(d)},null,8,["id","class","onUpdate:class","type","onUpdate:type","eccentricities","onUpdate:eccentricities","batteries","onUpdate:batteries","hullRating","onUpdate:hullRating","conditions","onUpdate:conditions","sizeCheckboxes","onUpdate:sizeCheckboxes","engineRating","onUpdate:engineRating","armorRating","onUpdate:armorRating","onRemove:vessel"]))),128))]))}};export{Le as default};