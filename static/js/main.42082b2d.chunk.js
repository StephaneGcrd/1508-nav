(window.webpackJsonp1508=window.webpackJsonp1508||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),u=a(2),r=a.n(u),s=a(1);a(9);function l(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var a=Object(i.useState)(t),n=Object(s.a)(a,2),u=n[0],r=n[1];return Object(i.useEffect)(function(){if(!e)return!1;function a(){r(t())}return window.addEventListener("resize",function(e,t,a){var i;return function(){var n=this,u=arguments,r=function(){i=null,a||e.apply(n,u)},s=a&&!i;clearTimeout(i),i=setTimeout(r,t),s&&e.apply(n,u)}}(a,200)),function(){return window.removeEventListener("resize",a)}},[]),u}var c=function(e){var t=e.name;return n.a.createElement("div",{className:"nav-element"},t)},m=function(e){var t=e.children,a=e.closeFn;return n.a.createElement("div",{className:"nav-side"},n.a.createElement("div",{className:"nav-side-close",onClick:function(){return a(!1)}},n.a.createElement(o,null)),t)},o=function(){return n.a.createElement("svg",{width:"15",height:"15"},n.a.createElement("line",{x1:"0",y1:"0",x2:"15",y2:"15",stroke:"white",strokeWidth:"2"}),n.a.createElement("line",{x1:"0",y1:"15",x2:"15",y2:"0",stroke:"white",strokeWidth:"2"}))},d=function(){return n.a.createElement("svg",{width:"15",height:"15"},n.a.createElement("line",{x1:"0",y1:"2",x2:"15",y2:"2",stroke:"white",strokeWidth:"2"}),n.a.createElement("line",{x1:"0",y1:7.5,x2:"15",y2:7.5,stroke:"white",strokeWidth:"2"}),n.a.createElement("line",{x1:"0",y1:13,x2:"15",y2:13,stroke:"white",strokeWidth:"2"}))},p=function(e){var t=e.logo,a=e.children,u=e.sideNavElement,c=e.setCn,o=e.cn,p=l(),v=Object(i.useState)(!1),f=Object(s.a)(v,2),b=f[0],E=f[1],g=Object(i.useState)(!1),h=Object(s.a)(g,2),w=h[0],q=h[1],j=function(e){e&&c("hide"),setTimeout(function(){q(!1),c("")},e?290:0)};Object(i.useEffect)(function(){return p&&p.width<600?E(!0):(E(!1),j(!!w)),function(){}},[p.width]);var k=n.a.createElement(m,{closeFn:function(){j(!0)},cn:o},a);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("div",{className:b?"nav mobile":"nav"},t,b?n.a.createElement("div",{className:"nav-element burger-menu",onClick:function(){q(!0),c("push")}},n.a.createElement(d,null)):null,!b&&n.a.createElement("div",null,a))),w&&b&&r.a.createPortal(k,u))};var v=function(){return n.a.createElement("div",{className:"nav-element nav-logo"},"1508 Nav")},f=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),a=Object(s.a)(t,2),u=a[0],r=a[1],l=Object(i.useState)(""),m=Object(s.a)(l,2),o=m[0],d=m[1];return Object(i.useEffect)(function(){return r(e.current),console.log(u),function(){}},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:e,className:"sidemenuwrap "+o}),n.a.createElement("div",{className:"App "+o},n.a.createElement(p,{logo:n.a.createElement(v,null),sideNavElement:u,setCn:d,cn:o},n.a.createElement(c,{name:"Work"}),n.a.createElement(c,{name:"About"}),n.a.createElement(c,{name:"Contact"})),n.a.createElement("p",{className:"content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mattis quam. Cras venenatis ut erat ut egestas. Ut euismod molestie elementum. Mauris ullamcorper fringilla commodo. Ut sed vestibulum diam, fermentum tincidunt enim. Vestibulum ante eros, pulvinar vel pretium eleifend, vehicula sit amet magna. Etiam fermentum metus non eros facilisis, posuere posuere dui porttitor. ",n.a.createElement("br",null),n.a.createElement("br",null)," Ut condimentum volutpat ultrices. Aenean tincidunt tellus imperdiet, malesuada neque sit amet, dignissim sem. Vivamus dui quam, imperdiet sit amet mi at, fringilla semper leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque et mauris consequat, molestie nisl nec, finibus enim. Maecenas at elementum odio, ac faucibus dui. Aliquam scelerisque sollicitudin elit, id convallis sapien vulputate non. Ut sit amet tincidunt mauris. Integer rutrum erat ac lorem porttitor dictum.",n.a.createElement("br",null),n.a.createElement("br",null),"Quisque condimentum massa a tortor scelerisque dignissim. Proin dictum erat in convallis pharetra. Vivamus imperdiet vestibulum arcu, sit amet malesuada purus. Pellentesque suscipit imperdiet molestie. Praesent aliquet, mauris eget sagittis pretium, leo sem commodo felis, auctor ultrices massa diam ac magna. Sed sed fringilla urna. Integer tempus leo nunc, vel condimentum lorem semper id. Integer faucibus nibh sed nisl tempus, sed faucibus eros fringilla. Mauris viverra varius ex, sit amet pretium justo facilisis quis. ",n.a.createElement("br",null),n.a.createElement("br",null)," Proin id ornare orci. Cras sit amet tellus eleifend, porttitor nisl a, suscipit metus. Nullam cursus blandit tortor, ac viverra lorem vehicula ut. Maecenas vitae sagittis ipsum. Duis in ipsum mattis, maximus dolor nec, consequat turpis. Duis ut pharetra augue. Phasellus volutpat vitae augue eu blandit. Quisque efficitur auctor libero ut suscipit.",n.a.createElement("br",null),n.a.createElement("br",null),"Phasellus rutrum nulla augue, ut imperdiet ligula blandit vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum faucibus euismod laoreet. Cras vestibulum justo in dignissim laoreet. Donec interdum pulvinar interdum. Proin nec tristique sapien. Quisque vitae purus non est pellentesque congue lacinia at velit. Duis sagittis nisl purus, sed suscipit arcu congue at. Morbi feugiat, neque et pellentesque dictum, quam ligula fringilla risus, sit amet tempus mi tortor sed erat. ",n.a.createElement("br",null),n.a.createElement("br",null)," Nunc a leo ligula. Nullam nec diam ex. Donec tincidunt purus a leo pellentesque facilisis id eget tellus. Pellentesque sit amet aliquet risus. Morbi vel viverra neque, non interdum tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet nunc sit amet nulla porta egestas. Praesent id justo vestibulum,",n.a.createElement("br",null),n.a.createElement("br",null),"fermentum ante sit amet, rhoncus est. Mauris iaculis nunc placerat purus interdum, sed posuere tellus ornare. Duis lacinia ultricies dapibus. Morbi tempus dolor at magna feugiat laoreet.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.42082b2d.chunk.js.map