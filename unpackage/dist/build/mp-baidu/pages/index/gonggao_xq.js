(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/gonggao_xq"],{4173:function(t,n,e){"use strict";var a=e("4b65"),u=e.n(a);u.a},"48d0":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){Promise.all([e.e("common/vendor"),e.e("components/feng-parse/parse")]).then(function(){return resolve(e("e3f1"))}.bind(null,e)).catch(e.oe)},u={components:{uParse:a},data:function(){return{body:""}},created:function(){},onLoad:function(t){var n=this;this.$http.post({url:"/mapi/user/noticedetail",data:{noticeid:t.id}}).then((function(t){n.body=t.data.notice}))},methods:{navigateBack:function(){t.navigateBack()}},filters:{timeStamp:function(t){if(null==t)return"null";var n=(t+"").length;while(n++<13)t+="0";t=Number(t);var e=new Date(t),a=e.getMonth()+1,u=e.getHours();u<10&&(u="0"+u);var o=e.getMinutes();o<10&&(o="0"+o);var r=e.getFullYear()+"-"+a+"-"+e.getDate()+" "+u+":"+o;return r}}};n.default=u}).call(this,e("5486")["default"])},"4b65":function(t,n,e){},"4d2d":function(t,n,e){"use strict";(function(t){e("0743");a(e("66fd"));var n=a(e("a452"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("5486")["createPage"])},a452:function(t,n,e){"use strict";e.r(n);var a=e("c64c4"),u=e("c1e6");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("4173");var r,c=e("f0c5"),i=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=i.exports},c1e6:function(t,n,e){"use strict";e.r(n);var a=e("48d0"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=u.a},c64c4:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t._f("timeStamp")(t.body.addtime));t.$mp.data=Object.assign({},{$root:{f0:e}})},o=[]}},[["4d2d","common/runtime","common/vendor"]]]);