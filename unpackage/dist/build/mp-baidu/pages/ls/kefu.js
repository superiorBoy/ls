(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ls/kefu"],{"2f706":function(t,n,u){},"55c3":function(t,n,u){"use strict";var e=u("2f706"),a=u.n(e);a.a},9520:function(t,n,u){"use strict";(function(t){u("0743");e(u("66fd"));var n=e(u("fa7f"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,u("5486")["createPage"])},e29d:function(t,n,u){"use strict";u.r(n);var e=u("f64f"),a=u.n(e);for(var f in e)"default"!==f&&function(t){u.d(n,t,(function(){return e[t]}))}(f);n["default"]=a.a},f418:function(t,n,u){"use strict";var e;u.d(n,"b",(function(){return a})),u.d(n,"c",(function(){return f})),u.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement;t._self._c},f=[]},f64f:function(t,n,u){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{img_url:t.getStorageSync("img_url"),kefu:""}},created:function(){},onLoad:function(t){this.huoqu_lawyer()},onShow:function(){},methods:{navigateBack:function(){t.navigateBack()},huoqu_lawyer:function(){var t=this;this.$http.post({url:"/mlawyerapi/user/getkefu"}).then((function(n){t.kefu=n.data.zhan}))}}};n.default=u}).call(this,u("5486")["default"])},fa7f:function(t,n,u){"use strict";u.r(n);var e=u("f418"),a=u("e29d");for(var f in a)"default"!==f&&function(t){u.d(n,t,(function(){return a[t]}))}(f);u("55c3");var r,c=u("f0c5"),o=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=o.exports}},[["9520","common/runtime","common/vendor"]]]);