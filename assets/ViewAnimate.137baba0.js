import{p as e,b as t,A as n,d as a,C as o,f as i,g as s,F as r,o as u}from"./vendor.ec101613.js";import{M as c,V as l,bH as m,e as g}from"./ol.bbcea228.js";import{T as d}from"./TileImage.6719d572.js";import{B as p}from"./BingMaps.f431ad9d.js";import"./net.5778e213.js";e("data-v-7887eb89");const v=s("div",{id:"map",class:"map__x"},null,-1);t();const f={setup(e){const t=n(),f=a(null),w=[-.12755,51.507222],b=[37.6178,55.7517],V=[28.9744,41.0128],C=[12.5,41.9],k=[7.4458,46.95];function M(){let e=f.value.getView().getRotation();f.value.getView().animate({rotation:e+1})}function h(){let e=f.value.getView().getRotation();f.value.getView().animate({rotation:e-1})}function P(){f.value.getView().animate({center:w,duration:2e3})}function j(){f.value.getView().animate({center:b,easing:m})}function B(){f.value.getView().animate({center:V,duration:2e3,easing:R})}function I(){let e=f.value.getView(),t=e.getCenter();e.animate({center:[t[0]+(C[0]-t[0])/2,t[1]+(C[1]-t[1])/2],rotation:Math.PI,easing:g},{center:C,rotation:2*Math.PI,easing:m})}function _(){let e=f.value.getView(),t=e.getRotation();e.animate({rotation:t+Math.PI,anchor:C,easing:g},{rotation:t+2*Math.PI,anchor:C,easing:m})}function x(){let e=f.value.getView(),t=2e3,n=e.getZoom(),a=2,o=!1;function i(e){--a,o||0!==a&&e||(o=!0)}e.animate({center:k,duration:t},i),e.animate({zoom:n-1,duration:1e3},{zoom:n,duration:1e3},i)}function R(e){let t,n=7.5625,a=2.75;return t=e<1/a?n*e*e:e<2/a?n*(e-=1.5/a)*e+.75:e<2.5/a?n*(e-=2.25/a)*e+.9375:n*(e-=2.625/a)*e+.984375,t}return o((()=>{t.commit("setComponentPath","src/views/OpenLayers/Basic/pages/ViewAnimate/ViewAnimate.vue"),f.value=new c({target:"map",layers:[new d({preload:1/0,source:new p({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Road"})})],view:new l({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:6})})})),(e,t)=>(u(),i(r,null,[v,s("div",{class:"btn__x"},[s("button",{onClick:M},"↻"),s("button",{onClick:h},"↺"),s("button",{onClick:P},"平移到伦敦"),s("button",{onClick:j},"弹性平移到莫斯科"),s("button",{onClick:B},"弹跳平移到伊斯坦布尔"),s("button",{onClick:I},"旋转平移到罗马"),s("button",{onClick:_},"绕着罗马旋转"),s("button",{onClick:x},"飞行到伯尔尼")])],64))},__scopeId:"data-v-7887eb89"};export{f as default};
