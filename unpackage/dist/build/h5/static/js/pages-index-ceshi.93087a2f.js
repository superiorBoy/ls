(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ceshi"],{"072a":function(n,e,t){"use strict";t.r(e);var o=t("2d07"),i=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=i.a},"1b25":function(n,e,t){"use strict";t.r(e);var o=t("917a"),i=t("072a");for(var c in i)"default"!==c&&function(n){t.d(e,n,(function(){return i[n]}))}(c);var u,s=t("f0c5"),a=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"fda73190",null,!1,o["a"],u);e["default"]=a.exports},"2d07":function(n,e,t){"use strict";var o=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("96cf");var i=o(t("1da1")),c=o(t("7120")),u={data:function(){return{url:"url",socketTask:"1111",WebSocket:"WebSocket",WebSocketerr:"WebSocketerr",isIos:""}},onLoad:function(){this.app_lianjie(),this.isIos="iOS"==plus.os.name},computed:{},methods:{judgeIosPermission:function(n){var e=c.default.judgeIosPermission(n);console.log(e);var t=e?"已":"未";uni.showModal({content:n+"权限"+t+"获得授权",showCancel:!1})},requestAndroidPermission:function(n){return(0,i.default)(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.default.requestAndroidPermission(n);case 2:t=e.sent,o=1==t?"已获得授权":0==t?"未获得授权":"被永久拒绝权限",uni.showModal({content:n+o,showCancel:!1});case 5:case"end":return e.stop()}}),e)})))()},go_cwshi2:function(){uni.navigateTo({url:"ceshi2"})},go_cwshi3:function(){uni.navigateTo({url:"ceshi3"})},go_cwshi4:function(){uni.navigateTo({url:"ceshi4"})},go_cwshi5:function(){uni.navigateTo({url:"ceshi5"})},go_cwshi6:function(){uni.navigateTo({url:"ceshi6"})},close:function(){uni.closeSocket()},app_lianjie:function(){var n=this;n.WebSocket="开始连接lalala";var e=n.$http.WebSocket_url;n.url=n.$http.WebSocket_url+"----wss://"+e+":3348",console.log(n.url),this.socketTask=uni.connectSocket({url:"wss://"+e+":3348",success:function(e){n.WebSocket="接成功data"+e,console.log("websocket连接成功",e)},fail:function(e){n.WebSocketerr=e,console.log(e,"连接失败")},complete:function(e){n.WebSocket="complete",console.log(e,"连接失败complete"),n.WebSocket="complete"+e}}),n.WebSocket="开始连接3348"+e,uni.onSocketOpen((function(e){console.log("WebSocket连接已打开！",e),n.WebSocket="开始连接uniapp打开:"+e})),n.WebSocket="开始连接33333"+e,uni.onSocketError((function(e){console.log("WebSocket连接打开失败，请检查！"),n.WebSocket="开始连接uniapp失败:"+e})),n.WebSocket="开始连接444"+e,uni.onSocketMessage((function(e){var t=JSON.parse(e.data);"init"==t.type?(console.log("init"),console.log("client_id",t.client_id),uni.request({url:n.$http.baseUrl+"/push/gatewayworker/bind",method:"POST",data:{client_id:t.client_id},success:function(n){console.log(n,"bind")},fail:function(n){}})):"say"==t.type?(console.log("say"),t.state&&(n.WebSocket=e.data+"收到服务器内容say",n.jieshou_xiaoxi(t),n.$refs.mainindex.huoqunum())):console.log("else"),n.WebSocket="uniapp收到服务器内容:"+e.data})),n.WebSocket="开始连接55555"+e,uni.onSocketClose((function(e){console.log("uniapp 已关闭！"),n.WebSocket="uniapp 已关闭:"+JSON.stringify(e)})),n.WebSocket="zuihou"+e}}};e.default=u},"917a":function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return o}));var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("v-uni-view",{staticStyle:{"margin-top":"200px"}}),n._v("url"),t("v-uni-view",{},[n._v("WebSocket:"+n._s(n.WebSocket))]),t("v-uni-view",{},[n._v("WebSocketerr:"+n._s(n.WebSocketerr))]),t("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.go_cwshi2.apply(void 0,arguments)}}},[n._v("跳转测试2页面")]),t("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.go_cwshi3.apply(void 0,arguments)}}},[n._v("测试三页面")]),t("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.go_cwshi4.apply(void 0,arguments)}}},[n._v("测试四页面")]),t("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.go_cwshi5.apply(void 0,arguments)}}},[n._v("测试五")]),t("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.go_cwshi6.apply(void 0,arguments)}}},[n._v("测试6")]),t("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.app_lianjie.apply(void 0,arguments)}}},[n._v("开启")]),t("v-uni-button",{attrs:{disabled:!n.isIos},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.judgeIosPermission("location")}}},[n._v("位置权限")]),t("v-uni-button",{attrs:{disabled:!n.isIos},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.judgeIosPermission("camera")}}},[n._v("摄像头权限")]),t("v-uni-button",{attrs:{disabled:!n.isIos},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.judgeIosPermission("photoLibrary")}}},[n._v("相册权限")]),t("v-uni-button",{attrs:{disabled:!n.isIos},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.judgeIosPermission("record")}}},[n._v("麦克风权限")]),t("v-uni-button",{attrs:{disabled:!n.isIos},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.judgeIosPermission("push")}}},[n._v("推送权限")]),t("v-uni-button",{attrs:{disabled:!n.isIos},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.judgeIosPermission("contact")}}},[n._v("通讯录权限")]),t("v-uni-button",{attrs:{disabled:!n.isIos},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.judgeIosPermission("calendar")}}},[n._v("日历权限")]),t("v-uni-button",{attrs:{disabled:!n.isIos},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.judgeIosPermission("memo")}}},[n._v("备忘录权限")]),t("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.close.apply(void 0,arguments)}}},[n._v("关闭")])],1)},c=[]}}]);