(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ls/tiwen_jilu"],{1815:function(t,n,i){},"32f1":function(t,n,i){"use strict";var e=i("1815"),u=i.n(e);u.a},"3cb2":function(t,n,i){"use strict";i.r(n);var e=i("96b0"),u=i("8ceb");for(var s in u)"default"!==s&&function(t){i.d(n,t,(function(){return u[t]}))}(s);i("32f1");var o,a=i("f0c5"),h=Object(a["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);n["default"]=h.exports},"8ceb":function(t,n,i){"use strict";i.r(n);var e=i("c595"),u=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=u.a},"96b0":function(t,n,i){"use strict";i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var e={uniPopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/uni-popup/uni-popup")]).then(i.bind(null,"c52d"))},pickerAddress:function(){return Promise.all([i.e("common/vendor"),i.e("components/pickerAddress/pickerAddress")]).then(i.bind(null,"9e05"))}},u=function(){var t=this,n=t.$createElement,i=(t._self._c,t.__map(t.jilu_list,(function(n,i){var e=t.__get_orig(n),u=t._f("timeStamp")(n.addtime);return{$orig:e,f0:u}})));t.$mp.data=Object.assign({},{$root:{l0:i}})},s=[]},b799:function(t,n,i){"use strict";(function(t){i("0743");e(i("66fd"));var n=e(i("3cb2"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("5486")["createPage"])},c595:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){i.e("components/uni-popup/uni-popup-share").then(function(){return resolve(i("7918"))}.bind(null,i)).catch(i.oe)},u=function(){Promise.all([i.e("common/vendor"),i.e("components/wangding-pickerAddress/wangding-pickerAddress")]).then(function(){return resolve(i("c58d"))}.bind(null,i)).catch(i.oe)},s={components:{unpopup:e,pickerAddress:u},onLoad:function(){var t=this;this.$http.post({url:"/mapi/index/gettype"}).then((function(n){t.fenlei=n.data.type})),this.huoqu_list()},data:function(){return{tab_arry:["全部咨询","最新咨询","我回复的","追问我的"],active:"0",dizhi:"",zhuanchang:[],xuanzc:"9999",zhuanchang_txt:"",zhuanchang_txt2:"",zhuan_show:!1,jilu_list:[],page:0,is_all:!1,img_url:t.getStorageSync("img_url"),fenlei:"",type_id:"",sheng:"",shi:""}},created:function(){},onPullDownRefresh:function(){this.page=0,this.jilu_list=[],this.is_all=!1,this.zhuanchang_txt="",this.dizhi="",this.sheng="",this.shi="",this.type_id="",this.xuanzc="9999",this.huoqu_list()},onShow:function(){},methods:{onReachBottom:function(){if(this.is_all)return t.showToast({title:"没有更多内容了",duration:2e3,icon:"none"}),t.stopPullDownRefresh(),!1;this.page++,this.huoqu_list()},huoqu_list:function(){var t=this;this.$http.post({url:"/mlawyerapi/consult/tiwen_jilu",data:{page:this.page,typeid:this.type_id,province:this.sheng,city:this.shi}}).then((function(n){t.jilu_list=t.jilu_list.concat(n.data.list),n.data.list.length<10&&(t.is_all=!0)}))},navigateBack:function(){t.navigateBack()},xq:function(n){console.log(n),t.navigateTo({url:"tiwen_ji_xq?id="+n})},tan:function(){this.$refs.popup.open()},change:function(t){console.log(t),this.sheng=t.data[0],this.shi=t.data[1],this.dizhi=this.sheng+"-"+this.shi,this.zhuan_show=!1},xuanzhuangchang:function(t,n,i){this.xuanzc=t,this.zhuanchang_txt2=n,this.type_id=i},zhuanchang_go:function(){this.zhuanchang_txt=this.zhuanchang_txt2,this.zhuan_show=!this.zhuan_show},zhuan_togg:function(){this.zhuan_show=!this.zhuan_show},quxiao_btn:function(){this.zhuanchang_txt="",this.dizhi="",this.type_id="",this.sheng="",this.shi="",this.xuanzc="9999",this.$refs.popup.close()},queding_btn:function(){console.log(this.dizhi,this.zhuanchang_txt),this.$refs.popup.close(),this.page=0,this.jilu_list=[],this.is_all=!1,this.huoqu_list()}},filters:{timeStamp:function(t){if(null==t)return"null";var n=(t+"").length;while(n++<13)t+="0";t=Number(t);var i=new Date(t),e=i.getMonth()+1,u=i.getHours();u<10&&(u="0"+u);var s=i.getMinutes();s<10&&(s="0"+s);var o=i.getFullYear()+"-"+e+"-"+i.getDate()+" "+u+":"+s;return o}}};n.default=s}).call(this,i("5486")["default"])}},[["b799","common/runtime","common/vendor"]]]);