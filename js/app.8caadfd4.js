(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("f516"),a=n.n(r);a.a},3759:function(e,t,n){"use strict";var r=n("b859"),a=n.n(r);a.a},"51c1":function(e,t,n){"use strict";var r=n("ae33"),a=n.n(r);a.a},ae33:function(e,t,n){},b859:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("3018"),n("5730"),n("832e"),n("6ece");var r=n("54f2"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"rb"},[n("button",{on:{click:function(t){e.cTab=0}}},[e._v("<")]),n("button",{on:{click:function(t){e.cTab=9}}},[e._v("设置")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.cTab,expression:"cTab === 0"}],staticClass:"jz"},[n("button",{on:{click:function(t){e.cTab=1}}},[e._v("记录")]),n("button",{on:{click:function(t){e.cTab=2}}},[e._v("显示")]),n("button",{on:{click:e.drC}},[e._v("导入")]),n("button",{on:{click:e.scC}},[e._v("导出")])]),n("szTab",{directives:[{name:"show",rawName:"v-show",value:9===e.cTab,expression:"cTab === 9"}]}),n("dL",{directives:[{name:"show",rawName:"v-show",value:1===e.cTab,expression:"cTab === 1"}]}),n("showD",{directives:[{name:"show",rawName:"v-show",value:2===e.cTab,expression:"cTab === 2"}]})],1)},i=[],s=(n("1939"),n("584d"),n("1bde3"),n("6dd9"),n("281e"),n("eed2"),n("00af"),n("dfb0"),n("6f10"),n("e649"),n("1070")),o=n("1a2f"),c=n("7c92"),u=n("3f19"),l=n("7641"),f=n("01e5"),p=n("0529"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rps"},[e._m(0),n("div",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.electric,expression:"electric",modifiers:{number:!0}}],attrs:{required:"",type:"number"},domProps:{value:e.electric},on:{input:function(t){t.target.composing||(e.electric=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.water,expression:"water",modifiers:{number:!0}}],attrs:{required:"",type:"number"},domProps:{value:e.water},on:{input:function(t){t.target.composing||(e.water=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",[n("button",{on:{click:e.szAdd}},[e._v("添加")]),n("button",{on:{click:e.szSub}},[e._v("删除")]),n("button",{on:{click:e.saveSz}},[e._v("保存")])]),e._m(1),e._l(e.szD,(function(t){return n("div",{key:t.id},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fjh,expression:"item.fjh",modifiers:{number:!0}}],attrs:{required:"",type:"number"},domProps:{value:t.fjh},on:{input:function(n){n.target.composing||e.$set(t,"fjh",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.zj,expression:"item.zj",modifiers:{number:!0}}],attrs:{required:"",type:"number"},domProps:{value:t.zj},on:{input:function(n){n.target.composing||e.$set(t,"zj",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sf,expression:"item.sf",modifiers:{number:!0}}],attrs:{required:"",type:"number"},domProps:{value:t.sf},on:{input:function(n){n.target.composing||e.$set(t,"sf",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.df,expression:"item.df",modifiers:{number:!0}}],attrs:{required:"",type:"number"},domProps:{value:t.df},on:{input:function(n){n.target.composing||e.$set(t,"df",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})])}))],2)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v(" 电费单价 ")]),n("label",[e._v(" 水费单价 ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("房间号")]),n("label",[e._v("租金")]),n("label",[e._v("水费")]),n("label",[e._v("电费")])])}],m=n("bf52"),b=n.n(m),h=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.szD=[],e.water=0,e.electric=0,e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"created",value:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e=b.a.getItem("water"),t=b.a.getItem("electric"),n.next=4,regeneratorRuntime.awrap(b.a.getItem("sz"));case 4:return this.szD=n.sent,this.szD||(this.szD=[]),n.next=8,regeneratorRuntime.awrap(e);case 8:return this.water=n.sent,this.water||(this.water=1),n.next=12,regeneratorRuntime.awrap(t);case 12:this.electric=n.sent,this.electric||(this.electric=1);case 14:case"end":return n.stop()}}),null,this)}},{key:"szAdd",value:function(){this.szD.push({id:(new Date).getTime(),fjh:0,zj:0,sf:0,df:0})}},{key:"szSub",value:function(){this.szD.pop()}},{key:"saveSz",value:function(){b.a.setItem("sz",this.szD),b.a.setItem("water",this.water),b.a.setItem("electric",this.electric)}}]),t}(p["c"]);Object(f["a"])([Object(p["b"])()],h.prototype,"msg",void 0),h=Object(f["a"])([p["a"]],h);var g=h,w=g,j=(n("51c1"),n("fd66")),_=Object(j["a"])(w,v,d,!1,null,"ee3efa3e",null),y=_.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rps"},[e._m(0),e._l(e.szD,(function(t){return n("div",{key:t.id},[n("input",{attrs:{disabled:"",type:"number"},domProps:{value:t.fjh}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.df,expression:"item.df",modifiers:{number:!0}}],attrs:{required:"",type:"number"},domProps:{value:t.df},on:{input:function(n){n.target.composing||e.$set(t,"df",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sf,expression:"item.sf",modifiers:{number:!0}}],attrs:{required:"",type:"number"},domProps:{value:t.sf},on:{input:function(n){n.target.composing||e.$set(t,"sf",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})])})),n("button",{staticStyle:{width:"100%"},on:{click:e.saveSz}},[e._v("保存")])],2)},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("房间")]),n("span",[e._v("电表")]),n("span",[e._v("水表")])])}],x=(n("3e3b"),n("175b"),n("3aa4"),n("4345"),n("0734"),n("7b65"),n("b9a4"));function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(x["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.szD=[],e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"saveSz",value:function(){var e=new Date;b.a.setItem(e.getFullYear()+"-"+(e.getMonth()+1),this.szD)}},{key:"created",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(b.a.getItem("sz"));case 2:this.szD=e.sent,this.szD?this.szD=this.szD.map((function(e){return k({},e,{sf:0,df:0})})):this.szD=[];case 4:case"end":return e.stop()}}),null,this)}}]),t}(p["c"]);S=Object(f["a"])([p["a"]],S);var P=S,T=P,$=(n("3759"),Object(j["a"])(T,O,D,!1,null,"05211cc3",null)),R=$.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rps"},[n("div",[n("label",[e._v(" 日期 "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],attrs:{required:"",type:"month"},domProps:{value:e.month},on:{change:e.monthC,input:function(t){t.target.composing||(e.month=t.target.value)}}})]),n("label",[e._v(" 房间 "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.fj,expression:"fj"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.fj=t.target.multiple?n:n[0]},e.fjC]}},e._l(e.szD,(function(t){return n("option",{key:t.fjh,domProps:{value:t.fjh}},[e._v(e._s(t.fjh))])})),0)])]),n("div",[n("span",[e._v("租金")]),n("span",[e._v(e._s(e.cSD.zj))])]),n("div",[n("span",[e._v("上月水表")]),n("span",[e._v(e._s(e.oSD.sf))])]),n("div",[n("span",[e._v("本月水表")]),n("span",[e._v(e._s(e.cSD.sf))])]),n("div",[n("span",[e._v("用水量")]),n("span",[e._v(e._s(e.cSD.sf-e.oSD.sf))])]),n("div",[n("span",[e._v("水费")]),n("span",[e._v(e._s((e.cSD.sf-e.oSD.sf)*e.water))])]),n("div",[n("span",[e._v("上月电表")]),n("span",[e._v(e._s(e.oSD.df))])]),n("div",[n("span",[e._v("本月电表")]),n("span",[e._v(e._s(e.cSD.df))])]),n("div",[n("span",[e._v("用电量")]),n("span",[e._v(e._s(e.cSD.df-e.oSD.df))])]),n("div",[n("span",[e._v("电费")]),n("span",[e._v(e._s((e.cSD.df-e.oSD.df)*e.electric))])]),n("div",[n("span",[e._v("合计应交费金额")]),n("span",[e._v(e._s(e.cSD.zj+(e.cSD.sf-e.oSD.sf)*e.water+(e.cSD.df-e.oSD.df)*e.electric))])])])},C=[],I=(n("db2e"),function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.szD=[],e.oszD=[],e.fj=0,e.month="",e.water=0,e.electric=0,e.cSD={id:(new Date).getTime(),fjh:0,zj:0,sf:0,df:0},e.oSD={id:(new Date).getTime(),fjh:0,zj:0,sf:0,df:0},e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"fjC",value:function(){var e=this;this.cSD=this.szD.find((function(t){return t.fjh===e.fj})),this.oSD=this.oszD.find((function(t){return t.fjh===e.fj}))}},{key:"monthC",value:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e=new Date(this.month),e.setMonth(e.getMonth()-1),t=b.a.getItem(e.getFullYear()+"-"+(e.getMonth()+1)),n.next=5,regeneratorRuntime.awrap(b.a.getItem(this.month));case 5:return this.szD=n.sent,this.szD||(this.szD=[]),n.next=9,regeneratorRuntime.awrap(t);case 9:this.oszD=n.sent,this.oszD||(this.oszD=[]);case 11:case"end":return n.stop()}}),null,this)}},{key:"created",value:function(){var e,t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return e=b.a.getItem("water"),t=b.a.getItem("electric"),r.next=4,regeneratorRuntime.awrap(e);case 4:return this.water=r.sent,this.water||(this.water=1),r.next=8,regeneratorRuntime.awrap(t);case 8:this.electric=r.sent,this.electric||(this.electric=1),n=new Date,this.month=n.getFullYear()+"-"+(n.getMonth()+1),this.monthC();case 13:case"end":return r.stop()}}),null,this)}}]),t}(p["c"]));I=Object(f["a"])([p["a"]],I);var E=I,U=E,q=Object(j["a"])(U,N,C,!1,null,"39fd995f",null),M=q.exports,A=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.cTab=0,e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"drC",value:function(){var e,t,n,r,a;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:if(!confirm("从网络导入？")){i.next=11;break}return i.t0=regeneratorRuntime,i.next=4,regeneratorRuntime.awrap(fetch("data.json"));case 4:return i.t1=i.sent.json(),i.next=7,i.t0.awrap.call(i.t0,i.t1);case 7:for(e=i.sent,t=0,n=Object.entries(e);t<n.length;t++)r=n[t],b.a.setItem(r[0],r[1]);i.next=16;break;case 11:a=document.createElement("input"),a.style.display="none",a.type="file",a.addEventListener("change",(function(){var e=new FileReader;e.onload=function(){var t=e.result;if(t)for(var n=JSON.parse(t.toString()),r=0,i=Object.entries(n);r<i.length;r++){var s=i[r];b.a.setItem(s[0],s[1])}a.remove()},a.files&&e.readAsText(a.files[0],"UTF-8")})),a.click();case 16:case"end":return i.stop()}}))}},{key:"scC",value:function(){var e,t,n,r,a,i,s,o,c;return regeneratorRuntime.async((function(u){while(1)switch(u.prev=u.next){case 0:return e={},t=!0,n=!1,r=void 0,u.prev=4,u.next=7,regeneratorRuntime.awrap(b.a.keys());case 7:u.t0=Symbol.iterator,a=u.sent[u.t0]();case 9:if(t=(i=a.next()).done){u.next=17;break}return s=i.value,u.next=13,regeneratorRuntime.awrap(b.a.getItem(s));case 13:e[s]=u.sent;case 14:t=!0,u.next=9;break;case 17:u.next=23;break;case 19:u.prev=19,u.t1=u["catch"](4),n=!0,r=u.t1;case 23:u.prev=23,u.prev=24,t||null==a.return||a.return();case 26:if(u.prev=26,!n){u.next=29;break}throw r;case 29:return u.finish(26);case 30:return u.finish(23);case 31:o=new Blob([JSON.stringify(e)],{type:"text/plain"}),c=document.createElement("a"),c.download="data.json",c.style.display="none",c.href=URL.createObjectURL(o),document.body.appendChild(c),c.click(),document.body.removeChild(c);case 39:case"end":return u.stop()}}),null,null,[[4,19,23,31],[24,,26,30]])}}]),t}(p["c"]);A=Object(f["a"])([Object(p["a"])({components:{szTab:y,dL:R,showD:M}})],A);var F=A,L=F,J=(n("034f"),Object(j["a"])(L,a,i,!1,null,null,null)),Y=J.exports,B=n("2d3c");Object(B["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Y)}}).$mount("#app")},f516:function(e,t,n){}});
//# sourceMappingURL=app.8caadfd4.js.map