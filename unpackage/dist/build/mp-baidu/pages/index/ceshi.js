(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/ceshi"],{"072a":function(e,o,t){"use strict";t.r(o);var n=t("85ff"),c=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(o,e,(function(){return n[e]}))}(i);o["default"]=c.a},"1b25":function(e,o,t){"use strict";t.r(o);var n=t("a4d0"),c=t("072a");for(var i in c)"default"!==i&&function(e){t.d(o,e,(function(){return c[e]}))}(i);var u,a=t("f0c5"),s=Object(a["a"])(c["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);o["default"]=s.exports},"85ff":function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=i(t("a34a")),c=i(t("7120"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,o,t,n,c,i,u){try{var a=e[i](u),s=a.value}catch(r){return void t(r)}a.done?o(s):Promise.resolve(s).then(n,c)}function a(e){return function(){var o=this,t=arguments;return new Promise((function(n,c){var i=e.apply(o,t);function a(e){u(i,n,c,a,s,"next",e)}function s(e){u(i,n,c,a,s,"throw",e)}a(void 0)}))}}var s={data:function(){return{url:"url",socketTask:"1111",WebSocket:"WebSocket",WebSocketerr:"WebSocketerr",isIos:""}},onLoad:function(){this.app_lianjie(),this.isIos="iOS"==plus.os.name},computed:{},methods:{judgeIosPermission:function(o){var t=c.default.judgeIosPermission(o);console.log(t);var n=t?"已":"未";e.showModal({content:o+"权限"+n+"获得授权",showCancel:!1})},requestAndroidPermission:function(o){return a(n.default.mark((function t(){var i,u;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.default.requestAndroidPermission(o);case 2:i=t.sent,u=1==i?"已获得授权":0==i?"未获得授权":"被永久拒绝权限",e.showModal({content:o+u,showCancel:!1});case 5:case"end":return t.stop()}}),t)})))()},go_cwshi2:function(){e.navigateTo({url:"ceshi2"})},go_cwshi3:function(){e.navigateTo({url:"ceshi3"})},go_cwshi4:function(){e.navigateTo({url:"ceshi4"})},go_cwshi5:function(){e.navigateTo({url:"ceshi5"})},go_cwshi6:function(){e.navigateTo({url:"ceshi6"})},close:function(){e.closeSocket()},app_lianjie:function(){var o=this;o.WebSocket="开始连接lalala";var t=o.$http.WebSocket_url;o.url=o.$http.WebSocket_url+"----wss://"+t+":3348",console.log(o.url),this.socketTask=e.connectSocket({url:"wss://"+t+":3348",success:function(e){o.WebSocket="接成功data"+e,console.log("websocket连接成功",e)},fail:function(e){o.WebSocketerr=e,console.log(e,"连接失败")},complete:function(e){o.WebSocket="complete",console.log(e,"连接失败complete"),o.WebSocket="complete"+e}}),o.WebSocket="开始连接3348"+t,e.onSocketOpen((function(e){console.log("WebSocket连接已打开！",e),o.WebSocket="开始连接uniapp打开:"+e})),o.WebSocket="开始连接33333"+t,e.onSocketError((function(e){console.log("WebSocket连接打开失败，请检查！"),o.WebSocket="开始连接uniapp失败:"+e})),o.WebSocket="开始连接444"+t,e.onSocketMessage((function(t){var n=JSON.parse(t.data);"init"==n.type?(console.log("init"),console.log("client_id",n.client_id),e.request({url:o.$http.baseUrl+"/push/gatewayworker/bind",method:"POST",data:{client_id:n.client_id},success:function(e){console.log(e,"bind")},fail:function(e){}})):"say"==n.type?(console.log("say"),n.state&&(o.WebSocket=t.data+"收到服务器内容say",o.jieshou_xiaoxi(n),o.$refs.mainindex.huoqunum())):console.log("else"),o.WebSocket="uniapp收到服务器内容:"+t.data})),o.WebSocket="开始连接55555"+t,e.onSocketClose((function(e){console.log("uniapp 已关闭！"),o.WebSocket="uniapp 已关闭:"+JSON.stringify(e)})),o.WebSocket="zuihou"+t}}};o.default=s}).call(this,t("5486")["default"])},a4d0:function(e,o,t){"use strict";var n;t.d(o,"b",(function(){return c})),t.d(o,"c",(function(){return i})),t.d(o,"a",(function(){return n}));var c=function(){var e=this,o=e.$createElement;e._self._c},i=[]},b634:function(e,o,t){"use strict";(function(e){t("0743");n(t("66fd"));var o=n(t("1b25"));function n(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,t("5486")["createPage"])}},[["b634","common/runtime","common/vendor"]]]);