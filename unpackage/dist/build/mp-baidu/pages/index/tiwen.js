(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/tiwen"],{"1bec":function(t,n,e){"use strict";e.r(n);var i=e("279c"),o=e("e36c");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("cf5f");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=c.exports},"279c":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={pickerAddress:function(){return Promise.all([e.e("common/vendor"),e.e("components/pickerAddress/pickerAddress")]).then(e.bind(null,"9e05"))}},o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"9cc3":function(t,n,e){"use strict";(function(t){e("0743");i(e("66fd"));var n=i(e("1bec"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("5486")["createPage"])},be8e:function(t,n,e){},cf5f:function(t,n,e){"use strict";var i=e("be8e"),o=e.n(i);o.a},e36c:function(t,n,e){"use strict";e.r(n);var i=e("fb3d"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},fb3d:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){Promise.all([e.e("common/vendor"),e.e("components/pickerAddress/pickerAddress")]).then(function(){return resolve(e("9e05"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{img_url:t.getStorageSync("img_url"),dizhi:"请选择省-市-区",isCheck:!0,shuru_txt:"",yishu_num:0,shujv:"",is_tishi:!0,fenlei:"选择类别",fenlei_arry:[],leiid:"",lvshi:[],zhuanchang_arry:[]}},created:function(){},components:{pickerAddress:i},onShow:function(){var t=this;this.$http.post({url:"/mapi/index/wen"}).then((function(n){t.shujv=n.data.serve})),this.$http.post({url:"/mapi/index/gettype"}).then((function(n){var e=[];for(var i in n.data.type)e.push(n.data.type[i]);t.fenlei_arry=e})),this.$http.post({url:"/mapi/lawyer/getshanchang"}).then((function(n){t.zhuanchang_arry=n.data.shanchang,t.huoqu_lvshi()}))},methods:{navigateBack:function(){t.navigateBack()},huoqu_lvshi:function(){var t=this;this.$http.post({url:"/mapi/lawyer/lvshilist",data:{type:1,page:0}}).then((function(n){0==n.code&&(t.lvshi=n.data.lawyer),console.log(n)}))},jiating_change:function(t){this.fenlei=this.fenlei_arry[t.detail.value].typename,this.leiid=this.fenlei_arry[t.detail.value].typeid},change:function(t){console.log(t),this.dizhi=t.data.join("-")},checkBox:function(t){this.isCheck=!this.isCheck},bianhua:function(){this.yishu_num=this.shuru_txt.length},close:function(){this.is_tishi=!1},tijiao:function(){var n=this.dizhi.split("-");if(console.log(n),""==this.shuru_txt)return t.showToast({title:"请输入问题",duration:2e3,icon:"none"}),!1;if("选择类别"==this.fenlei)return t.showToast({title:"请选择类别",duration:2e3,icon:"none"}),!1;if("请选择省-市-区"==this.dizhi)return t.showToast({title:"请选择地址",duration:2e3,icon:"none"}),!1;if(this.shuru_txt.length<10)return t.showToast({title:"请填写10个字以上的描述",duration:2e3,icon:"none"}),!1;var e={information:this.shuru_txt,typeid:this.leiid,province:n[0],city:n[1],area:n[2]};t.navigateTo({url:"tiwen_pay_fs?data="+JSON.stringify(e)})},getlocation:function(){var n=this;this.$nextTick((function(){try{var e=new BMap.Geolocation;e.getCurrentPosition((function(e){$.ajax({url:"https://api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&pois=1&location="+e.latitude+","+e.longitude,type:"GET",async:!1,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",timeout:5e3,contentType:"application/json; charset=utf-8",success:function(e){n.dizhi=e.result.addressComponent.province+"-"+e.result.addressComponent.city+"-"+e.result.addressComponent.district,t.setStorage({key:"dizhi",data:{sheng:e.result.addressComponent.province,shi:e.result.addressComponent.city,qu:e.result.addressComponent.district}})}})}))}catch(i){console.log(i)}}))}}};n.default=o}).call(this,e("5486")["default"])}},[["9cc3","common/runtime","common/vendor"]]]);