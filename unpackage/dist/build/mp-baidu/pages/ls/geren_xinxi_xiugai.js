(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ls/geren_xinxi_xiugai"],{"00b4":function(t,e,i){},"1b12":function(t,e,i){"use strict";i.r(e);var n=i("bd7c"),a=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,(function(){return n[t]}))}(u);e["default"]=a.a},"72fa":function(t,e,i){"use strict";var n=i("00b4"),a=i.n(n);a.a},"8d38":function(t,e,i){"use strict";(function(t){i("0743");n(i("66fd"));var e=n(i("9b28"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("5486")["createPage"])},"9b28":function(t,e,i){"use strict";i.r(e);var n=i("abbf"),a=i("1b12");for(var u in a)"default"!==u&&function(t){i.d(e,t,(function(){return a[t]}))}(u);i("72fa");var s,r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=o.exports},abbf:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},bd7c:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{shuru:"",user:""}},created:function(){},onLoad:function(t){var e=this;this.state=t.state,this.$http.post({url:"/mlawyerapi/user/getlawyer"}).then((function(t){1==e.state?e.shuru=t.data.user.nickname:2==e.state?e.shuru=t.data.user.qq:3==e.state?e.shuru=t.data.user.weixin:4==e.state&&(e.shuru=t.data.user.email),e.user=t.data.user}))},methods:{navigateBack:function(){t.navigateBack()},save:function(){if(1==this.state)return this.$http.post({url:"/mlawyerapi/lawyer/upnickname",data:{nickname:this.shuru,img:this.user.photourl}}).then((function(e){console.log(e.code),0==e.code&&(t.showToast({title:"修改成功",duration:2e3,icon:"none"}),setTimeout((function(){t.navigateBack()}),1e3))})),!1;if(2==this.state)var e={qq:this.shuru,weixin:this.user.weixin,email:this.user.email};else if(3==this.state)e={weixin:this.shuru,email:this.user.email,qq:this.user.qq};else if(4==this.state)e={email:this.shuru,weixin:this.user.weixin,qq:this.user.qq};this.$http.post({url:"/mlawyerapi/user/uplawyer",data:e}).then((function(e){console.log(e.code),0==e.code&&(t.showToast({title:"修改成功",duration:2e3,icon:"none"}),setTimeout((function(){t.navigateBack()}),1e3))})),console.log(this.name,this.shouji,this.qq,this.weixin,this.youxiang)}}};e.default=i}).call(this,i("5486")["default"])}},[["8d38","common/runtime","common/vendor"]]]);