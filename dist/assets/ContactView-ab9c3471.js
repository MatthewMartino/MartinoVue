import{_ as i,o as c,c as a,a as t,t as r,b as h,r as l,d as m}from"./index-0836d6df.js";const p={props:["buttonText","hiddenText"],data(){return{showButton:!0}},methods:{hideButton(){this.showButton=!1}}},x={href:"#"},f={href:"mailto:matt@prdxlabs.com"},B={class:"hiddenText"};function T(u,e,o,_,d,s){return c(),a("div",null,[t("a",x,[d.showButton?(c(),a("div",{key:0,onClick:e[0]||(e[0]=(...n)=>s.hideButton&&s.hideButton(...n)),class:"button"},r(o.buttonText),1)):h("",!0)]),t("a",f,[t("div",B,r(o.hiddenText),1)])])}const b=i(p,[["render",T]]),v={components:{customButton:b}},$={class:"contact"},k=t("div",{class:"heroText"},"let's get in touch!",-1);function w(u,e,o,_,d,s){const n=l("customButton");return c(),a("div",$,[k,m(n,{buttonText:"click to reveal email",hiddenText:"matt@prdxlabs.com"})])}const V=i(v,[["render",w]]);export{V as default};
