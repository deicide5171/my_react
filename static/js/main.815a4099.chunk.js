(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],{126:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(9),r=n.n(c),s=n(101),o=n.n(s),i=(n(126),n(127),n(96),n(97),n(128),n(56)),l=n(24);var j=function(){return Object(a.jsxs)("nav",{className:"App-header navbar navbar-expand-md navbar-dark bg-dark fixed-top",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"/my_react",children:"Deicide5171's React Project"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault",children:[Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)(i.b,{to:"/my_react",children:Object(a.jsxs)("li",{className:"nav-item active nav-link",children:["Dashboard ",Object(a.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(a.jsx)(i.b,{to:"/my_react/myMap",children:Object(a.jsx)("li",{className:"nav-item nav-link",children:"Map"})}),Object(a.jsx)(i.b,{to:"/my_react/board",children:Object(a.jsx)("li",{className:"nav-item nav-link",children:"Board"})}),Object(a.jsx)(i.b,{to:"/my_react/blog",children:Object(a.jsx)("li",{className:"nav-item nav-link",children:"Blog"})}),Object(a.jsx)(i.b,{to:"/my_react/sns",children:Object(a.jsx)("li",{className:"nav-item nav-link",children:"SNS"})})]}),Object(a.jsx)("button",{className:"btn btn-success my-2 my-sm-0",type:"submit",children:"Login"})]})]})};var b=function(){return Object(a.jsx)("main",{role:"main",className:"container",children:Object(a.jsxs)("div",{className:"dashboard starter-template",children:[Object(a.jsx)("h1",{children:"Dashboard"}),Object(a.jsx)("p",{className:"lead",children:"\uc9c0\ub3c4, \uac8c\uc2dc\ud310, \ube14\ub85c\uadf8, SNS\ub97c \ud55c\ubc88\uc5d0 \ubcfc \uc218 \uc788\ub294 \ub300\uc2dc \ubcf4\ub4dc \uad6c\ud604"})]})})},u=n(65),d=(n(133),new r.a.createContext),m=n(105),x=n(136),O=function(e){var t=e.children,n=e.zoom,r=e.center,s=Object(c.useRef)(),o=Object(c.useState)(null),i=Object(u.a)(o,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){var e={view:new m.a({zoom:n,center:r}),layers:[],controls:[],overlays:[]},t=new x.a(e);return t.setTarget(s.current),j(t),function(){return t.setTarget(void 0)}}),[]),Object(c.useEffect)((function(){l&&l.getView().setZoom(n)}),[n]),Object(c.useEffect)((function(){l&&l.getView().setCenter(r)}),[r]),Object(a.jsx)(d.Provider,{value:{map:l},children:Object(a.jsx)("div",{ref:s,className:"ol-map",children:t})})},h=function(e){var t=e.children;return Object(a.jsx)("div",{children:t})},v=n(104),f=function(e){var t=e.source,n=e.zIndex,a=void 0===n?0:n,r=Object(c.useContext)(d).map;return Object(c.useEffect)((function(){if(r){var e=new v.a({source:t,zIndex:a});return r.addLayer(e),e.setZIndex(a),function(){r&&r.removeLayer(e)}}}),[r]),null},p=n(103),y=function(e){var t=e.source,n=e.style,a=e.zIndex,r=void 0===a?0:a,s=Object(c.useContext)(d).map;return Object(c.useEffect)((function(){if(s){var e=new p.a({source:t,style:n});return s.addLayer(e),e.setZIndex(r),function(){s&&s.removeLayer(e)}}}),[s]),null},g=n(95),N=n(73),w=n(88),k=n(137);var P=function(){return new k.a},S=n(138);var E=function(e){var t=e.features;return new S.a({features:t})},C=n(4),M=n(94),_=function(e){var t=e.children;return Object(a.jsx)("div",{children:t})},z=n(100),D=function(){var e=Object(c.useContext)(d).map;return Object(c.useEffect)((function(){if(e){var t=new z.a({});return e.controls.push(t),function(){return e.controls.remove(t)}}}),[e]),null};var I=function(){var e={MultiPolygon:new g.b({stroke:new N.a({color:"blue",width:1}),fill:new w.a({color:"rgba(0, 0, 255, 0.1)"})})},t=Object(c.useState)([-94.9065,38.9884]),n=Object(u.a)(t,2),r=n[0],s=(n[1],Object(c.useState)(9)),o=Object(u.a)(s,2),i=o[0],l=(o[1],Object(c.useState)(!0)),j=Object(u.a)(l,2),b=j[0],d=j[1],m=Object(c.useState)(!0),x=Object(u.a)(m,2),v=x[0],p=x[1];return Object(a.jsxs)("main",{role:"main",className:"container-fluid",children:[Object(a.jsxs)(O,{center:Object(C.d)(r),zoom:i,children:[Object(a.jsxs)(h,{children:[Object(a.jsx)(f,{source:P(),zIndex:0}),b&&Object(a.jsx)(y,{source:E({features:(new M.a).readFeatures({type:"FeatureCollection",features:[{type:"Feature",properties:{kind:"county",name:"Wyandotte",state:"KS"},geometry:{type:"MultiPolygon",coordinates:[[[[-94.8627,39.202],[-94.901,39.202],[-94.9065,38.9884],[-94.8682,39.0596],[-94.6053,39.0432],[-94.6053,39.1144],[-94.5998,39.1582],[-94.7422,39.1691],[-94.7751,39.202],[-94.8627,39.202]]]]}}]},{featureProjection:Object(C.g)("EPSG:3857")})}),style:e.MultiPolygon}),v&&Object(a.jsx)(y,{source:E({features:(new M.a).readFeatures({type:"FeatureCollection",features:[{type:"Feature",properties:{kind:"county",name:"Johnson",state:"KS"},geometry:{type:"MultiPolygon",coordinates:[[[[-94.9065,38.9884],[-95.0544,38.9829],[-95.0544,38.7365],[-94.9668,38.7365],[-94.6108,38.7365],[-94.6108,38.846],[-94.6053,39.0432],[-94.8682,39.0596],[-94.9065,38.9884]]]]}}]},{featureProjection:Object(C.g)("EPSG:3857")})}),style:e.MultiPolygon})]}),Object(a.jsx)(_,{children:Object(a.jsx)(D,{})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"checkbox",checked:b,onChange:function(e){return d(e.target.checked)}})," Johnson County"]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"checkbox",checked:v,onChange:function(e){return p(e.target.checked)}})," Wyandotte County"]})]})};var F=function(){return Object(a.jsx)("main",{role:"main",className:"container",children:Object(a.jsx)("div",{className:"board starter-template",children:Object(a.jsx)("h1",{children:"board"})})})};var L=function(){return Object(a.jsx)("main",{role:"main",className:"container",children:Object(a.jsx)("div",{className:"blog starter-template",children:Object(a.jsx)("h1",{children:"blog"})})})};var J=function(){return Object(a.jsx)("main",{role:"main",className:"container",children:Object(a.jsx)("div",{className:"sns starter-template",children:Object(a.jsx)("h1",{children:"sns"})})})};var A=function(){return Object(a.jsx)("div",{className:"App-footer fixed-bottom",children:Object(a.jsxs)("div",{className:"col-12 py-3 bg-info text-light text-center",children:["[ Still Poor Developers ] ",Object(a.jsx)("br",{}),"- Project : My Project #1 v1.0 (2020.11.09 Mon) ",Object(a.jsx)("br",{}),"- E-Mail : deicide5564@gmail.com"]})})};var B=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)(j,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/my_react",component:b}),Object(a.jsx)(l.a,{exact:!0,path:"/my_react/myMap",component:I}),Object(a.jsx)(l.a,{exact:!0,path:"/my_react/board",component:F}),Object(a.jsx)(l.a,{exact:!0,path:"/my_react/blog",component:L}),Object(a.jsx)(l.a,{exact:!0,path:"/my_react/sns",component:J})]})]}),Object(a.jsx)(A,{})]})};o.a.render(Object(a.jsx)(B,{}),document.getElementById("root"))},96:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.815a4099.chunk.js.map