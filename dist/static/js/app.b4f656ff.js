(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],f=0,d=[];f<i.length;f++)r=i[f],a[r]&&d.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},o=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1897:function(t,e,n){"use strict";var s=n("6081"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{staticClass:"content"},[n("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-container-item",{attrs:{id:"Home"}},[n("home",{ref:"home"})],1),n("mt-tab-container-item",{attrs:{id:"Settings"}},[n("settings")],1)],1)],1),n("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"Home"}},[t._v("\n      Home\n    ")]),n("mt-tab-item",{attrs:{id:"Settings"}},[t._v("\n      Settings\n    ")])],1)],1)},o=[],r=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"countdown"},[n("h2",[t._v(t._s(t.countdown)+"s")])]),n("div",{staticClass:"stave-content"},[t.state.treble?n("stave",{ref:"treble"}):t._e(),t.state.bass?n("stave",{ref:"bass",attrs:{type:"bass"}}):t._e()],1),n("div",{staticClass:"control"},[n("mt-button",{directives:[{name:"show",rawName:"v-show",value:!t.timer,expression:"!timer"}],attrs:{type:"default"},on:{click:t.start}},[t._v("start")]),n("mt-button",{directives:[{name:"show",rawName:"v-show",value:t.timer,expression:"timer"}],attrs:{type:"default"},on:{click:t.stop}},[t._v("stop")])],1)])}),i=[],c={state:{treble:"false"!==localStorage.getItem("treble"),bass:"true"===localStorage.getItem("bass"),timer:null===localStorage.getItem("timer")?5:+localStorage.getItem("timer")},setTrebleShow:function(t){this.state.treble=t,localStorage.setItem("treble",t)},setBassShow:function(t){this.state.bass=t,localStorage.setItem("bass",t)},setTimer:function(t){this.state.timer=t,localStorage.setItem("timer",t)}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stave"},[n("div",{ref:"staff",staticClass:"staff"})])},u=[],f=(n("28a5"),n("05de")),d=n.n(f),m=d.a.Flow,h={name:"stave",props:{type:{type:String,default:"treble"}},data:function(){return{context:null,stave:null,note:{treble:["C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5"],bass:["C3","D3","E3","F3","G3","A3","B3"]}}},computed:{restPosition:function(){return"treble"===this.type?"c/5":"e/3"}},mounted:function(){this._initStave()},methods:{_initStave:function(){var t=this.$refs.staff,e=new m.Renderer(t,m.Renderer.Backends.SVG).resize(350,150);this.context=e.getContext(),this.context.setFont("Arial",10,"").setBackgroundFillStyle("#eed"),this.stave=new m.Stave(0,0,340),this.stave.addClef(this.type).addTimeSignature("4/4"),this.stave.setContext(this.context).draw(),this.voice=new m.Voice({num_beats:4,beat_value:4})},start:function(t){var e=this.note[this.type],n=e[0];if(!t){var s=e.length,a=Math.random(),o=Math.ceil(a*s)-1;n=e[o]}n=n.split("").join("/"),this.render(n)},render:function(t){this.context.clear();var e=[new m.StaveNote({keys:[t],duration:"q",clef:this.type}),new m.StaveNote({keys:[this.restPosition],duration:"qr",clef:this.type}),new m.StaveNote({keys:[this.restPosition],duration:"qr",clef:this.type}),new m.StaveNote({keys:[this.restPosition],duration:"qr",clef:this.type})];this.voice=new m.Voice({num_beats:4,beat_value:4}),this.voice.addTickables(e),(new m.Formatter).joinVoices([this.voice]).format([this.voice],340),this.stave.setContext(this.context).draw(),this.voice.draw(this.context,this.stave)}}},v=h,p=n("0c7c"),b=Object(p["a"])(v,l,u,!1,null,null,null);b.options.__file="stave.vue";var w=b.exports,g=n("76a0"),_=n.n(g);s["default"].component(g["Button"].name,g["Button"]);var S={name:"HelloWorld",components:{stave:w},data:function(){return{highShow:!0,lowShow:!1,note:{high:["C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5"],low:["C3","D3","E3","F3","G3","A3","B3"]},noteValues:["/q","/h","/w","/r"],state:c.state,timer:null,countdown:c.state.timer}},watch:{state:{deep:!0,immediate:!0,handler:function(t){this.reset()}}},methods:{render:function(t){this.state.treble&&this.$refs.treble.start(t),this.state.bass&&this.$refs.bass.start(t)},start:function(){var t=this;if(!this.timer){this.countdown--;var e=1e3;this.timer=setInterval(function(){0===t.countdown?(t.render(),t.countdown=c.state.timer-1):t.countdown--},e)}},stop:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},reset:function(){var t=this;this.stop(),this.countdown=c.state.timer,this.$nextTick(function(){t.render(!0)})}}},y=S,x=(n("1897"),Object(p["a"])(y,r,i,!1,null,"2946a319",null));x.options.__file="Home.vue";var C=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings"},[n("mt-cell",{attrs:{title:"高音谱表"}},[n("mt-switch",{model:{value:t.treble,callback:function(e){t.treble=e},expression:"treble"}})],1),n("mt-cell",{attrs:{title:"低音谱表"}},[n("mt-switch",{model:{value:t.bass,callback:function(e){t.bass=e},expression:"bass"}})],1),n("mt-cell",{attrs:{title:"倒计时",label:t.timer.toString()}},[n("mt-range",{attrs:{min:0,max:10,step:1,"bar-height":5},model:{value:t.timer,callback:function(e){t.timer=e},expression:"timer"}},[n("div",{attrs:{slot:"start"},slot:"start"},[t._v("0")]),n("div",{attrs:{slot:"end"},slot:"end"},[t._v("10")])])],1)],1)},T=[];s["default"].component(g["Cell"].name,g["Cell"]),s["default"].component(g["Switch"].name,g["Switch"]),s["default"].component(g["Range"].name,g["Range"]);var j={name:"settings",data:function(){return{}},computed:{treble:{get:function(){return c.state.treble},set:function(t){c.setTrebleShow(t)}},bass:{get:function(){return c.state.bass},set:function(t){c.setBassShow(t)}},timer:{get:function(){return c.state.timer},set:function(t){c.setTimer(t)}}}},O=j,B=(n("779a"),Object(p["a"])(O,k,T,!1,null,"7b4499fc",null));B.options.__file="Settings.vue";var E=B.exports;s["default"].component(g["Tabbar"].name,g["Tabbar"]),s["default"].component(g["TabItem"].name,g["TabItem"]),s["default"].component(g["TabContainer"].name,g["TabContainer"]),s["default"].component(g["TabContainerItem"].name,g["TabContainerItem"]);var I={name:"app",components:{Home:C,Settings:E},data:function(){return{selected:"Home"}},watch:{selected:function(t,e){"Home"===e&&"Home"!==t&&this.clearComEvent(t)}},methods:{clearComEvent:function(){this.$refs.home.reset()}}},F=I,A=(n("5c0b"),Object(p["a"])(F,a,o,!1,null,null,null));A.options.__file="App.vue";var P=A.exports,$=n("8c4f");s["default"].use($["a"]);var H=new $["a"]({mode:"history",base:"/",routes:[]}),N=n("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("aa35"),n("a24a");s["default"].config.productionTip=!1,s["default"].use(_.a),new s["default"]({router:H,render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("62a7"),a=n.n(s);a.a},6081:function(t,e,n){},"62a7":function(t,e,n){},"779a":function(t,e,n){"use strict";var s=n("ecd5"),a=n.n(s);a.a},a24a:function(t,e,n){},ecd5:function(t,e,n){}});