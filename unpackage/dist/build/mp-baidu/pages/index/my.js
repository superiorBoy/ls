(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/my"],{"06ef":function(n,t,i){"use strict";i.r(t);var o=i("a7bf"),e=i("1524");for(var u in e)"default"!==u&&function(n){i.d(t,n,(function(){return e[n]}))}(u);i("6fa9");var a,c=i("f0c5"),s=Object(c["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=s.exports},1524:function(n,t,i){"use strict";i.r(t);var o=i("e141"),e=i.n(o);for(var u in o)"default"!==u&&function(n){i.d(t,n,(function(){return o[n]}))}(u);t["default"]=e.a},"6fa9":function(n,t,i){"use strict";var o=i("8146"),e=i.n(o);e.a},8146:function(n,t,i){},a7bf:function(n,t,i){"use strict";var o;i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return u})),i.d(t,"a",(function(){return o}));var e=function(){var n=this,t=n.$createElement;n._self._c},u=[]},c374:function(n,t,i){"use strict";(function(n){i("0743");o(i("66fd"));var t=o(i("06ef"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,i("5486")["createPage"])},e141:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){i.e("components/y_tabbar/tabbar").then(function(){return resolve(i("85c1"))}.bind(null,i)).catch(i.oe)},e={created:function(){},onShow:function(){this.huiqu_login(),this.huo_qu_is_yaoqing()},components:{tabBar:o},onLoad:function(){},onHide:function(){},data:function(){return{currentPage:"index/my",user:"",img_url:n.getStorageSync("img_url"),is_login:!1,geshu:"",baojia:"",yaoqing:"",is_yaoqing:2,is_tixian:2}},methods:{kaiqi:function(){console.log("kaiqi");var t=this,i=t.$http.WebSocket_url;n.connectSocket({url:"wss://"+i+":3348",success:function(n){console.log("websocket连接成功",n)},fail:function(n){},complete:function(n){}}),n.onSocketOpen((function(n){console.log("WebSocket连接已打开！",n)})),n.onSocketError((function(n){console.log("WebSocket连接打开失败，请检查！")})),n.onSocketMessage((function(i){var o=JSON.parse(i.data);"init"==o.type?(console.log("init"),console.log("client_id",o.client_id),n.request({url:t.$http.baseUrl+"/push/gatewayworker/bind",method:"POST",data:{client_id:o.client_id},success:function(n){console.log(n,"bind")},fail:function(n){}})):"say"==o.type?(console.log("say"),o.state&&t.$refs.mainindex.huoqunum()):console.log("else")})),n.onSocketClose((function(n){console.log("uniapp 已关闭！")}))},qiehuan:function(){n.removeStorageSync("user_chat_list"),n.reLaunch({url:"../ls/my"})},huoqu_user:function(){var n=this;this.$http.post({url:"/mapi/user/user"}).then((function(t){n.user=t.data.user}))},huo_qu_is_yaoqing:function(){var n=this;this.$http.post({url:"/mapi/index/openinvite"}).then((function(t){n.is_yaoqing=t.data.openinvite}))},go_yaoqing:function(){if(!this.is_login)return n.navigateTo({url:"login"}),!1;n.navigateTo({url:"app_down?lianjie="+this.yaoqing})},huiqu_login:function(){var n=this;this.$http.post({url:"/index/login/islogin"}).then((function(t){""!=t.data.user?(n.$refs.mainindex.huoqunum(),n.is_login=!0,n.huoqu_user(),n.huoqu_geshu(),n.huoqu_baojia(),n.huoqu_lianjie(),n.huoqu_tixian(),n.kaiqi()):n.is_login=!1}))},huoqu_tixian:function(){var n=this;this.$http.post({url:"/mapi/index/getuser_withdrawal"}).then((function(t){n.is_tixian=t.data.user_withdrawal}))},huoqu_lianjie:function(){var n=this;this.$http.post({url:"/mapi/user/yaoqing"}).then((function(t){n.yaoqing=t.data.randcode1}))},huoqu_geshu:function(){var n=this;this.$http.post({url:"/mapi/index/usercount"}).then((function(t){n.geshu=t.data.count}))},huoqu_baojia:function(){var n=this;this.$http.post({url:"/mapi/index/getzixun"}).then((function(t){n.baojia=t.data.zhan}))},go_geren:function(){n.navigateTo({url:"geren_xinxi"})}}};t.default=e}).call(this,i("5486")["default"])}},[["c374","common/runtime","common/vendor"]]]);