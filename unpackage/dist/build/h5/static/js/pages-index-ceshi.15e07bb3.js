(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ceshi"],{"072a":function(n,t,i){"use strict";i.r(t);var e=i("2d07"),o=i.n(e);for(var a in e)"default"!==a&&function(n){i.d(t,n,(function(){return e[n]}))}(a);t["default"]=o.a},"1b25":function(n,t,i){"use strict";i.r(t);var e=i("1d7e"),o=i("072a");for(var a in o)"default"!==a&&function(n){i.d(t,n,(function(){return o[n]}))}(a);var c,u=i("f0c5"),s=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"326c9cac",null,!1,e["a"],c);t["default"]=s.exports},"1d7e":function(n,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return e}));var e={lFile:i("3d92").default},o=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("l-file",{ref:"lFile",attrs:{logo:n.logo},on:{"up-success":function(t){arguments[0]=t=n.$handleEvent(t),n.onSuccess.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"padding text-center"},[i("v-uni-view",{staticClass:"padding"},[i("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onOpenDoc.apply(void 0,arguments)}}},[n._v("预览")])],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onDown.apply(void 0,arguments)}}},[n._v("下载到本地")]),i("v-uni-view",{staticClass:"text-center padding-sm",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onOpenNameDoc(n.localPath)}}},[n._v("点击打开："+n._s(n.localPath))])],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onUpload.apply(void 0,arguments)}}},[n._v("上传")])],1),i("v-uni-view",{staticClass:"padding",staticStyle:{"font-size":"26rpx","text-align":"center"}},[i("v-uni-text",{attrs:{decode:!0}},[n._v(n._s(n.tip))])],1)],1)],1)},a=[]},"2d07":function(n,t,i){"use strict";var e=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e(i("3d92")),a={components:{lfile:o.default},data:function(){return this.api="",{logo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F07%2F155788a6d8a5c42.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619847627&t=2da40b583002205c204d980b54b35040",localPath:"",tip:"\n\t\t\t希望能帮到你\n\n\t\t\t不喜勿喷，不要期待更新，我很懒\n\n\t\t\t"}},onLoad:function(){},computed:{},methods:{onLogin:function(){},onOpenNameDoc:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n&&this.$refs.lFile.open(n)},onOpenDoc:function(){var n=this,t="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg";this.$refs.lFile.download({url:t}).then((function(t){n.$refs.lFile.open(t)}))},onDown:function(){var n=this,t="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg";this.$refs.lFile.download({url:t,type:"save",customName:"自定义文件名需要带后缀.jpg",method:"GET"}).then((function(t){n.localPath=t}))},onUpload:function(){this.$refs.lFile.upload({url:this.api+"/dropbox/document/upload",name:"file",header:{Authorization:"",uid:"3871",client:"app",accountid:"IMED5274"}})},onSuccess:function(n){console.log("上传成功回调",JSON.stringify(n)),uni.showToast({title:JSON.stringify(n),icon:"none"})}}};t.default=a}}]);