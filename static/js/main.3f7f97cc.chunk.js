(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=(a(14),a(1));a(16);function s(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type))," : ",e.alert.msg,l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))}var i=a(4),m=a.n(i);function u(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-".concat(e.mode," navbar-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"./navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},e.home)))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable dark Mode"))))}function b(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h2",null,e.heading1),l.a.createElement("textarea",{value:o,onChange:function(e){r(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},className:"form-control my-3",placeholder:"Enter text here",id:"myBox",rows:"7"}),l.a.createElement("button",{type:"button",onClick:function(){var t=o.toUpperCase();r(t),e.showAlert("Converted to Uppercse!","success")},className:"btn btn-outline-info mx-1  "},"ToUpperCase"),l.a.createElement("button",{type:"button",onClick:function(){var t=o.toLowerCase();r(t),e.showAlert("Converted to Lowercase!","success")},className:"btn btn-outline-info mx-1  "},"ToLowerCase"),l.a.createElement("button",{type:"button",onClick:function(){for(var t=o.toLowerCase().split(" "),a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].substring(1);var n=t.join(" ");r(n),e.showAlert("Capitalization has been done!","success")},className:"btn btn-outline-info mx-1  "},"ToCapital"),l.a.createElement("button",{type:"button",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard!","success")},className:"btn btn-outline-info mx-1  "},"Copy Text"),l.a.createElement("button",{type:"button",onClick:function(){var t=o.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra spaces has been removed!","success")},className:"btn btn-outline-info mx-1  "},"Remove Extra Spaces"),l.a.createElement("button",{type:"button",onClick:function(){r(""),e.showAlert("Text cleared!","success")},className:"btn btn-outline-warning mx-1 "},"Clear")),l.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h2",null,e.heading2),l.a.createElement("p",null,"There are ",l.a.createElement("b",null,o.split(" ").length-1)," words and"," ",l.a.createElement("b",null,o.length)," characters in your text."," "),l.a.createElement("h4",null,"Preview"),l.a.createElement("p",null,o.length>0?o:"Enter something in text area to preview it here")))}u.protoTypes={title:m.a.string};var d=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(null),i=Object(c.a)(r,2),m=i[0],d=i[1],h=function(e,t){d({msg:e,type:t}),setTimeout(function(){d(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{title:"TextUtils",home:"Home",About:"About",mode:a,toggleMode:function(){"dark"===a?(o("light"),document.body.style.backgroundColor="white",h("Light mode has been Enabled","success")):(o("dark"),document.body.style.backgroundColor="#042743",h("Dark mode has been Enabled","success"))}}),l.a.createElement(s,{alert:m}),l.a.createElement(b,{heading1:"Enter your text to Analyse here!",heading2:"Your Text Summary",mode:a,showAlert:h}))},h=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null))),h()},5:function(e,t,a){e.exports=a(20)}},[[5,3,2]]]);
//# sourceMappingURL=main.3f7f97cc.chunk.js.map