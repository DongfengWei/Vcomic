!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){var a=n(1),r=n(2),c=n(3),o=n(4);n(49);var l=React.createClass({displayName:"Root",render:function(){return React.createElement("div",{id:"app"},React.createElement(a,null),React.createElement(r,null),React.createElement(o,null))}});ReactDOM.render(React.createElement(l,null),document.body),ReactDOM.render(React.createElement(c,null),document.getElementById("home"))},1:function(e,t){var n=React.createClass({displayName:"CompHeader",render:function(){return React.createElement("header",null,React.createElement("h3",null,"漫画"))}});e.exports=n},2:function(e,t){var n=React.createClass({displayName:"Compcontent",render:function(){return React.createElement("section",null,React.createElement("div",{id:"home"}))}});e.exports=n},3:function(e,t){var n=React.createClass({displayName:"CompHome",render:function(){return React.createElement("div",null,"this is my home!!!!!")}});e.exports=n},4:function(e,t,n){var a=n(5),r=React.createClass({displayName:"CompFooter",mixins:[a],render:function(){return React.createElement("footer",null,React.createElement("a",{onClick:this.router,"data-href":"/index",className:"footerItem"},"漫画"),React.createElement("a",{onClick:this.router,"data-href":"/classify",className:"footerItem"},"发现"),React.createElement("a",{onClick:this.router,"data-href":"/Vcity",className:"footerItem"},"V社区"),React.createElement("a",{onClick:this.router,"data-href":"/mine",className:"footerItem"},"我的"))}});e.exports=r},5:function(e,t,n){var a=function(){var e=function(e){for(var t=0;t<e.length;t++)ReactDOM.unmountComponentAtNode(document.getElementById(e[t]))},t=function(e){for(var t in e){var a=n(6)(e[t]);ReactDOM.render(React.createElement(a),document.getElementById(t))}},a={"/index":{unmount:["home"],mount:{home:"./home.js"}},"/classify":{unmount:["home"],mount:{home:"./classify.js"}},"/Vcity":{unmount:["home"],mount:{home:"./vcity.js"}},"/mine":{unmount:["home"],mount:{home:"./mine.js"}}},r=function(n){var r=n.target.getAttribute("data-href");for(var c in a)if(r==c){var o=a[c];e(o.unmount),t(o.mount)}};return{router:r}}();e.exports=a},6:function(e,t,n){function a(e){return n(r(e))}function r(e){return c[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var c={"./classify":7,"./classify.js":7,"./content":2,"./content.js":2,"./footer":4,"./footer.js":4,"./header":1,"./header.js":1,"./home":3,"./home.js":3,"./mine":8,"./mine.js":8,"./router":5,"./router.js":5,"./vcity":48,"./vcity.js":48};a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id=6},7:function(e,t){var n=React.createClass({displayName:"CompClassify",render:function(){return React.createElement("div",null,React.createElement("div",null,"this is classify"),React.createElement("div",null,"this is classify02"),React.createElement("div",null,"this is classify03"),React.createElement("div",null,"this is classify04"))}});e.exports=n},8:function(e,t){var n=React.createClass({displayName:"CompMine",render:function(){return React.createElement("div",null,React.createElement("div",null,"1"),React.createElement("div",null,"2"),React.createElement("div",null,"3"))}});e.exports=n},48:function(e,t){var n=React.createClass({displayName:"CompVcity",render:function(){return React.createElement("div",null,React.createElement("div",null,"this is vcity001"),React.createElement("div",null,"this is vcity002"),React.createElement("div",null,"this is vcity003"))}});e.exports=n},49:function(e,t){}});