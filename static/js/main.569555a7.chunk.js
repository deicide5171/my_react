(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],{102:function(e,t,n){},130:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(1),r=n.n(a),s=n(76),i=n.n(s),o=(n(130),n(131),n(102),n(103),n(132),n(57)),l=n(25),j=n(106);var b=function(){return Object(c.jsxs)("nav",{className:"App-header navbar navbar-expand-md navbar-dark bg-dark fixed-top",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"/my_react",children:"Deicide5171's React Project"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault",children:[Object(c.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(c.jsx)(o.b,{to:"/my_react",children:Object(c.jsxs)("li",{className:"nav-item active nav-link",children:["Dashboard ",Object(c.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(c.jsx)(o.b,{to:"/my_react/myMap",children:Object(c.jsx)("li",{className:"nav-item nav-link",children:"Map"})}),Object(c.jsx)(o.b,{to:"/my_react/board",children:Object(c.jsx)("li",{className:"nav-item nav-link",children:"Board"})}),Object(c.jsx)(o.b,{to:"/my_react/blog",children:Object(c.jsx)("li",{className:"nav-item nav-link",children:"Blog"})}),Object(c.jsx)(o.b,{to:"/my_react/sns",children:Object(c.jsx)("li",{className:"nav-item nav-link",children:"SNS"})})]}),Object(c.jsx)("button",{className:"btn btn-success my-2 my-sm-0",type:"submit",children:"Login"})]})]})};function u(){var e=(new Date).getMinutes()+":"+(new Date).getSeconds();return Object(c.jsxs)("div",{className:"info row",children:[Object(c.jsxs)("div",{className:"col",children:["\uac8c\uc784: #",1]}),Object(c.jsxs)("div",{className:"col",children:["\uc2e4\uc218: ",0," / 3"]}),Object(c.jsxs)("div",{className:"col",children:["\uacbd\uacfc\uc2dc\uac04: ",e]})]})}function d(){return Object(c.jsx)("div",{className:"board"})}function m(){return Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{children:"\ucde8\uc18c"}),Object(c.jsx)("button",{children:"\uc9c0\uc6b0\uae30"}),Object(c.jsx)("button",{children:"\uba54\ubaa8 on/off"}),Object(c.jsx)("button",{children:"\uac8c\uc784 \uc2dc\uc791"})]})}function O(){return Object(c.jsx)("div",{className:"numberPad"})}var x=function(e){return Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)(u,{store:e}),Object(c.jsx)(d,{store:e}),Object(c.jsx)(m,{store:e}),Object(c.jsx)(O,{store:e})]})})};var h=function(e){return Object(c.jsx)("main",{role:"main",className:"container",children:Object(c.jsxs)("div",{className:"dashboard starter-template",children:[Object(c.jsx)("h1",{children:"\uc2a4\ub3c4\ucfe0"}),Object(c.jsx)(x,{store:e})]})})},v=n(65),f=(n(138),new r.a.createContext),p=n(109),y=n(141),g=function(e){var t=e.children,n=e.zoom,r=e.center,s=Object(a.useRef)(),i=Object(a.useState)(null),o=Object(v.a)(i,2),l=o[0],j=o[1];return Object(a.useEffect)((function(){var e={view:new p.a({zoom:n,center:r}),layers:[],controls:[],overlays:[]},t=new y.a(e);return t.setTarget(s.current),j(t),function(){return t.setTarget(void 0)}}),[]),Object(a.useEffect)((function(){l&&l.getView().setZoom(n)}),[n]),Object(a.useEffect)((function(){l&&l.getView().setCenter(r)}),[r]),Object(c.jsx)(f.Provider,{value:{map:l},children:Object(c.jsx)("div",{ref:s,className:"ol-map",children:t})})},N=function(e){var t=e.children;return Object(c.jsx)("div",{children:t})},E=n(108),w=function(e){var t=e.source,n=e.zIndex,c=void 0===n?0:n,r=Object(a.useContext)(f).map;return Object(a.useEffect)((function(){if(r){var e=new E.a({source:t,zIndex:c});return r.addLayer(e),e.setZIndex(c),function(){r&&r.removeLayer(e)}}}),[r]),null},C=n(107),k=function(e){var t=e.source,n=e.style,c=e.zIndex,r=void 0===c?0:c,s=Object(a.useContext)(f).map;return Object(a.useEffect)((function(){if(s){var e=new C.a({source:t,style:n});return s.addLayer(e),e.setZIndex(r),function(){s&&s.removeLayer(e)}}}),[s]),null},M=n(101),_=n(75),P=n(92),S=n(142);var D=function(){return new S.a},T=n(143);var A=function(e){var t=e.features;return new T.a({features:t})},F=n(6),z=n(100),I=function(e){var t=e.children;return Object(c.jsx)("div",{children:t})},L=n(104),R=function(){var e=Object(a.useContext)(f).map;return Object(a.useEffect)((function(){if(e){var t=new L.a({});return e.controls.push(t),function(){return e.controls.remove(t)}}}),[e]),null};var B=function(){var e={MultiPolygon:new M.b({stroke:new _.a({color:"blue",width:1}),fill:new P.a({color:"rgba(0, 0, 255, 0.1)"})})},t=Object(a.useState)([-94.9065,38.9884]),n=Object(v.a)(t,2),r=n[0],s=(n[1],Object(a.useState)(9)),i=Object(v.a)(s,2),o=i[0],l=(i[1],Object(a.useState)(!0)),j=Object(v.a)(l,2),b=j[0],u=j[1],d=Object(a.useState)(!0),m=Object(v.a)(d,2),O=m[0],x=m[1];return Object(c.jsxs)("main",{role:"main",className:"container-fluid",children:[Object(c.jsxs)(g,{center:Object(F.d)(r),zoom:o,children:[Object(c.jsxs)(N,{children:[Object(c.jsx)(w,{source:D(),zIndex:0}),b&&Object(c.jsx)(k,{source:A({features:(new z.a).readFeatures({type:"FeatureCollection",features:[{type:"Feature",properties:{kind:"county",name:"Wyandotte",state:"KS"},geometry:{type:"MultiPolygon",coordinates:[[[[-94.8627,39.202],[-94.901,39.202],[-94.9065,38.9884],[-94.8682,39.0596],[-94.6053,39.0432],[-94.6053,39.1144],[-94.5998,39.1582],[-94.7422,39.1691],[-94.7751,39.202],[-94.8627,39.202]]]]}}]},{featureProjection:Object(F.g)("EPSG:3857")})}),style:e.MultiPolygon}),O&&Object(c.jsx)(k,{source:A({features:(new z.a).readFeatures({type:"FeatureCollection",features:[{type:"Feature",properties:{kind:"county",name:"Johnson",state:"KS"},geometry:{type:"MultiPolygon",coordinates:[[[[-94.9065,38.9884],[-95.0544,38.9829],[-95.0544,38.7365],[-94.9668,38.7365],[-94.6108,38.7365],[-94.6108,38.846],[-94.6053,39.0432],[-94.8682,39.0596],[-94.9065,38.9884]]]]}}]},{featureProjection:Object(F.g)("EPSG:3857")})}),style:e.MultiPolygon})]}),Object(c.jsx)(I,{children:Object(c.jsx)(R,{})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"checkbox",checked:b,onChange:function(e){return u(e.target.checked)}})," Johnson County"]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"checkbox",checked:O,onChange:function(e){return x(e.target.checked)}})," Wyandotte County"]})]})};var G=function(){return Object(c.jsx)("main",{role:"main",className:"container",children:Object(c.jsx)("div",{className:"board starter-template",children:Object(c.jsx)("h1",{children:"board"})})})};var J=function(){return Object(c.jsx)("main",{role:"main",className:"container",children:Object(c.jsx)("div",{className:"blog starter-template",children:Object(c.jsx)("h1",{children:"blog"})})})};var U=function(){return Object(c.jsx)("main",{role:"main",className:"container",children:Object(c.jsx)("div",{className:"sns starter-template",children:Object(c.jsx)("h1",{children:"sns"})})})};var V=function(){return Object(c.jsx)("div",{className:"App-footer fixed-bottom",children:Object(c.jsxs)("div",{className:"col-12 py-3 bg-info text-light text-center",children:["[ Still Poor Developers ] ",Object(c.jsx)("br",{}),"- Project : My Project #1 v1.0 (2020.11.09 Mon) ",Object(c.jsx)("br",{}),"- E-Mail : deicide5564@gmail.com"]})})};var Z=function(e){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(j.a,{store:e.store,children:[Object(c.jsxs)(o.a,{children:[Object(c.jsx)(b,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/my_react",component:h}),Object(c.jsx)(l.a,{exact:!0,path:"/my_react/myMap",component:B}),Object(c.jsx)(l.a,{exact:!0,path:"/my_react/board",component:G}),Object(c.jsx)(l.a,{exact:!0,path:"/my_react/blog",component:J}),Object(c.jsx)(l.a,{exact:!0,path:"/my_react/sns",component:U})]})]}),Object(c.jsx)(V,{})]})})},K=n(67),W="GAME_START",q="GAME_OVER",H="SELECT_NUMBER",Q="UPDATE_NUMBER",X="MENO_ON",Y="MENO_OFF",$="CANCEL",ee={state:"\ub300\uae30",mode:"\uc785\ub825",failCnt:0,gameCnt:0,playTime:"00:00",history:[]},te=Object(K.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:e.history.pop();return Object.assign({},e,{history:e.history});case q:return Object.assign({},e,{state:"\ub300\uae30"});case W:return Object.assign({},e,{state:"\uc9c4\ud589\uc911",mode:"\uc785\ub825",failCnt:0,gameCnt:e.gameCnt+1,playTime:"00:00",history:[]});case Y:return Object.assign({},e,{mode:"\uc785\ub825"});case X:return Object.assign({},e,{mode:"\uba54\ubaa8"});case H:case Q:return Object.assign({},e,{number:e.number-1});default:return e}}}),ne=Object(K.c)(te),ce=function(){i.a.render(Object(c.jsx)(Z,{store:ne}),document.getElementById("root"))};ne.subscribe(ce),ce()}},[[139,1,2]]]);
//# sourceMappingURL=main.569555a7.chunk.js.map