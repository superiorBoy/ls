(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/chat"],{"11eb":function(e,t,i){"use strict";var o=i("d696"),n=i.n(o);n.a},"35df":function(e,t,i){"use strict";i.r(t);var o=i("4d60"),n=i.n(o);for(var s in o)"default"!==s&&function(e){i.d(t,e,(function(){return o[e]}))}(s);t["default"]=n.a},"4b50":function(e,t,i){"use strict";(function(e){i("0743");o(i("66fd"));var t=o(i("ecbf"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("5486")["createPage"])},"4d60":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(i("a34a")),n=s(i("7120"));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t,i,o,n,s,a){try{var r=e[s](a),u=r.value}catch(l){return void i(l)}r.done?t(u):Promise.resolve(u).then(o,n)}function r(e){return function(){var t=this,i=arguments;return new Promise((function(o,n){var s=e.apply(t,i);function r(e){a(s,o,n,r,u,"next",e)}function u(e){a(s,o,n,r,u,"throw",e)}r(void 0)}))}}var u=e.getRecorderManager(),l=e.createInnerAudioContext();l.autoplay=!0;var c=function(){i.e("components/bkhumor-emoji/index").then(function(){return resolve(i("b787"))}.bind(null,i)).catch(i.oe)},d=function(){Promise.all([i.e("common/vendor"),i.e("components/feng-parse/parse")]).then(function(){return resolve(i("e3f1"))}.bind(null,i)).catch(i.oe)},h=function(){i.e("components/l-file/l-file").then(function(){return resolve(i("3d92"))}.bind(null,i)).catch(i.oe)},m={computed:{intIntervalTime:function(){return console.log(Math.round(this.intervalTime)),Math.round(this.intervalTime)}},created:function(){},components:{emotion:c,uParse:d,lfile:h},onLoad:function(e){var t=this;this.ls_id=e.lawyerid,this.$http.post({url:"/mapi/index/getmessagecount"}).then((function(e){t.first_xiaoxi=e.data.messagecount,t.huoqu_xiaoxi_list()})),this.huanying(),this.tishiyu_tip(),this.huoqu_type();var i=this;u.onStop((function(e){console.log("recorder stop结束"+JSON.stringify(e)),i.voicePath=e.tempFilePath,i.is_quxiao?console.log("已取消录音"):i.Audio2dataURL(e.tempFilePath)})),this.huqu_zhiwu(),this.$http.post({url:"/mapi/user/user"}).then((function(e){t.user=e.data.user})),this.$http.post({url:"/mapi/lawyer/getshanchang"}).then((function(e){t.zhuanchang_arry=e.data.shanchang,t.huqu_ls_xinxi()})),this.$http.post({url:"/mapi/index/getopenchat"}).then((function(e){t.is_kaiqi_yuyin=e.data.openchat}))},onShow:function(){},onReady:function(){setTimeout((function(){}),1e3)},onHide:function(){},onUnload:function(){this.$http.post({url:"/mapi/consult/chatdeatils",data:{page:0,userid:this.ls_id}}).then((function(e){}));var t=e.getStorageSync("user_chat_list"),i=this,o=!1;if(t)for(var n in t=JSON.parse(t),t)if(t[n].lawyer.userid==i.ls_id)if(i.message[i.message.length-1].addtime!=i.is_last_msguptime){console.log(t[n].uptime,"11111111"),console.log(i.is_last_msguptime);var s={lawyerid:i.ls_id,userid:i.user.userid,content:i.message[i.message.length-1].content,msgtype:i.message[i.message.length-1].msgtype,readnum:0,lawyerreadnum:0,uptime:i.message[i.message.length-1].addtime,lawyer:{userid:i.ls_xinxi.userid,photourl:i.ls_xinxi.photourl,nickname:i.ls_xinxi.nickname}};t.splice(n,1),t.unshift(s),e.setStorageSync("user_chat_list",JSON.stringify(t)),console.log("存在",t[n]),console.log("重新设置"),o=!0}else o=!0,t[n].content=i.message[i.message.length-1].content,t[n].msgtype=i.message[i.message.length-1].msgtype,t[n].readnum=0,e.setStorageSync("user_chat_list",JSON.stringify(t)),console.log("存在",t[n]);o||(console.log("不存在"),e.removeStorageSync("user_chat_list")),console.log(t),l.stop()},data:function(){return{title:"",user:"",bt_show:!1,url:"../../static/bkhumor-emoji/",img:"11.gif",chat_txt:"",changyong:"",changyong_arry:["你好,有什么可以帮助到您？","客服的上班时间是早晨八点到晚上八点","好的，有什么事情可以找客服帮您疑难解答"],isShowEmj:!1,id:"100004",img_url:e.getStorageSync("img_url"),message:[],page:0,is_all:!1,ls_id:"",dianhua:"",chat_xinxi:"",dian_num:"点击显示号码",ls_xinxi:"",is_fa:!1,socketTask:null,is_open_socket:!1,zhuanchang_arry:"",xinxi:"",day:0,hour:"00",minute:"00",seconds:"00",time1:"0",chaoshi_item:"",new_ls:"",is_new:!1,is_chehui:!1,messageid:"",canClick:!0,is_zuijin_chehui:!1,zuijin_txt:"",bottom_tip:!1,on_yuyin:!1,is_yuyin:!1,is_quxiao:!1,clientX:"",clientY:"",recorderManager:{},innerAudioContext:{},voicePath:"",intervalTime:0,isRecord:!1,tishiyu:"",is_xiala:!1,yuyin_index:0,tips:"",gettype:"",localPath:"",is_last_msguptime:"",is_kaiqi_yuyin:2,is_first:!0,first_xiaoxi:"",first_height:0}},onPullDownRefresh:function(){},methods:{onPageScroll:function(t){var i=this;0==t.scrollTop&&(this.is_xiala=!0,this.is_all?(e.showToast({title:"没有更多内容了",duration:2e3,icon:"none"}),e.stopPullDownRefresh()):(e.showLoading({title:"加载中",mask:!0}),this.page++,this.huoqu_xiaoxi_list()));var o=e.createSelectorQuery().select(".chat_body");o.boundingClientRect((function(e){i.first_height=e.height})).exec()},onReachBottom:function(){},call2:function(t){e.makePhoneCall({phoneNumber:t+"",success:function(e){console.log("调用成功!")},fail:function(e){console.log("调用失败!")}})},yuyin_chat:function(){},shipin_chat:function(){},onOpenDoc:function(e){var t=this.img_url+e;console.log(t)},send_wenjian:function(){var e="/api/index/zixun/uploadfile";this.$refs.lFile.upload({url:e,name:"files"})},onSuccess:function(e){console.log("上传成功回调",JSON.stringify(e)),console.log(e.data.file),this.send_wenjian_txt(e.data.file)},send_wenjian_txt:function(t){var i=this,o=this;this.$http.post({url:"/push/gatewayworker/sendmessage.html",data:{userid_to:this.ls_id,msg:t,type:14}}).then((function(n){if(console.log(n),0==n.code){var s={content:t,msgtype:14,photourl_form:i.user.photourl,messageid:n.data,addtime:(new Date).getTime()};i.message.push(s),setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),100);var a=new Date(o.time1.replace(/-/g,"/")),r=new Date,u=a.getTime()-r.getTime();u<0&&o.send_guoqi()}}))},wenjian:function(e){return e=e.substring(e.lastIndexOf("/")+1),e},huanying:function(){var e=this;this.$http.post({url:"/mapi/index/getchatmessage"}).then((function(t){0==t.code&&(e.tishiyu=t.data)}))},tishiyu_tip:function(){var e=this;this.$http.post({url:"/mapi/index/tips"}).then((function(t){0==t.code&&(e.tips=t.data)}))},huoqu_type:function(){var e=this;this.$http.post({url:"/mapi/index/gettype"}).then((function(t){0==t.code&&(e.gettype=t.data.type)}))},show_luyin:function(){this.isShowEmj=!1,this.bt_show=!1},judgeIosPermission:function(t){var i=this,o=n.default.judgeIosPermission(t);console.log(o);var s=o?"已":"未";console.log(s),"已"==s?this.on_yuyin=!0:i.is_first?(u.start({format:"mp3"}),i.is_quxiao=!0,setTimeout((function(){u.stop()}),300),i.is_first=!1):e.showModal({content:"需要开启麦克风权限",confirmText:"设置",success:function(e){e.confirm&&n.default.gotoAppPermissionSetting()}})},requestAndroidPermission:function(t){var i=this;return r(o.default.mark((function s(){var a;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,n.default.requestAndroidPermission(t);case 2:a=o.sent,1==a?("已获得授权",i.on_yuyin=!0):0==a?("未获得授权",e.showToast({title:"麦克风权限没有开启",duration:1e3,icon:"none"})):("被永久拒绝权限",e.showToast({title:"麦克风权限被禁止",duration:1e3,icon:"none"}));case 4:case"end":return o.stop()}}),s)})))()},hide_luyin:function(){this.on_yuyin=!1},dian_luyin:function(){var t=this,i=this;this.is_yuyin=!0,this.timer=setInterval((function(){t.intervalTime+=.5,t.intervalTime>=.5&&!t.isRecord&&(console.log("开始录音"),t.isRecord=!0,t.intervalTime=0,u.start({format:"mp3"})),t.intervalTime>=60&&(e.showToast({title:"不得超过60秒",duration:2e3,icon:"none"}),i.songkai())}),500)},moveStop:function(e){console.log(e.touches[0].clientY),e.touches[0].clientY<650?this.is_quxiao=!0:this.is_quxiao=!1},songkai:function(){var e=this;console.log("songkai",this.is_quxiao,this.intervalTime),this.is_quxiao?console.log("已取消录音"):(this.intervalTime<=.5&&console.log("录音太短了!!!"),clearInterval(this.timer),this.isRecord&&setTimeout((function(){u.stop(),e.isRecord=!1,console.log(e.isRecord)}),500)),this.is_yuyin=!1,this.is_quxiao=!1},playVoice:function(e,t,i){var o=this;if(console.log("播放录音"),this.yuyin_index=t,i)var n=1e3*Number(i);else n=5e3;setTimeout((function(){o.yuyin_index=0}),n),console.log(this.img_url+e),l.src=this.img_url+e,l.play()},input_click:function(t){this.isShowEmj=!1,this.bt_show=!1,setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),100)},input_blur:function(){var e=this;setTimeout((function(){e.bottom_tip=!1}),100),console.log("失去焦点事件")},navigateBack:function(){e.navigateBack()},send_zaixian:function(){var t=this,i=this;this.$http.post({url:"/push/gatewayworker/sendzixun.html",data:{userid_to:this.ls_id,msg:"[在线咨询]",type:4}}).then((function(o){if(0==o.code){var n={content:"4",msgtype:4,userid_from:i.ls_id,photourl_form:t.chat_xinxi.photourl,addtime:(new Date).getTime()};i.message.push(n),setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),100)}}))},send_dianhua:function(){var t=this,i=this;this.$http.post({url:"/push/gatewayworker/sendzixun.html",data:{userid_to:this.ls_id,msg:"[电话咨询]",type:3}}).then((function(o){if(0==o.code){var n={content:"3",msgtype:3,photourl_form:t.chat_xinxi.photourl,userid_from:i.ls_id,addtime:(new Date).getTime()};i.message.push(n),setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),100)}}))},send_guoqi:function(){var t=this,i=this;this.$http.post({url:"/push/gatewayworker/sendzixun.html",data:{userid_to:this.ls_id,msg:"[服务过期]",type:8}}).then((function(o){if(0==o.code&&1!=o.data.type){var n={content:"8",msgtype:8,photourl_form:t.chat_xinxi.photourl,userid_from:i.ls_id,addtime:(new Date).getTime()};i.message.push(n),setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),100)}}))},go_zhuye:function(){e.navigateTo({url:"ls_zhuye?lawyerid="+this.ls_id})},zaixian_pay:function(t,i){e.navigateTo({url:"pay?type=1&lawyerid="+this.ls_id+"&time="+i+"&pay_money="+t})},dh_pay:function(t,i){e.navigateTo({url:"pay?type=2&lawyerid="+this.ls_id+"&time="+i+"&pay_money="+t})},huoqu_xiaoxi_list:function(){var t=this,i=this;this.$http.post({url:"/mapi/consult/chatdeatils",data:{page:this.page,userid:this.ls_id}}).then((function(o){t.title=o.data.user_to.nickname,t.dianhua=o.data.user_to.mobile,t.chat_xinxi=o.data.user_to,o.data.overtime.length>0&&(t.chaoshi_item=o.data.overtime,t.is_new=!0);var n=function(e){9==o.data.message[e].msgtype&&(console.log(e),t.$http.post({url:"/mapi/lawyer/lawyer",data:{lawyerid:o.data.message[e].userid}}).then((function(t){o.data.message[e]=Object.assign(o.data.message[e],t.data.lawyer)}))),10!=o.data.message[e].msgtype&&11!=o.data.message[e].msgtype&&12!=o.data.message[e].msgtype||t.$http.post({url:"/mapi/consult/red_envelope",data:{redid:o.data.message[e].content,userid:t.ls_id}}).then((function(i){console.log(i),o.data.message[e]=Object.assign(o.data.message[e],i.data.red_envelope),t.$forceUpdate()}))};for(var s in o.data.message)n(s);t.message=o.data.message.concat(t.message),0==t.page?(o.data.message.length<i.first_xiaoxi&&(t.is_all=!0),t.is_last_msguptime=t.message[t.message.length-1].addtime,console.log(t.is_last_msguptime)):o.data.message.length<100&&(t.is_all=!0),t.is_xiala?setTimeout((function(){var t=e.createSelectorQuery().select(".chat_body");t.boundingClientRect((function(t){e.pageScrollTo({scrollTop:t.height-i.first_height,duration:0})})).exec()}),1e3):setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),400),i.time1=o.data.shijian;var a=setInterval((function(){var e=new Date(i.time1.replace(/-/g,"/")),t=new Date,o=e.getTime()-t.getTime();if(o<0)clearInterval(a);else{var n=parseInt(o/1e3/60/60/24),s=parseInt(o/1e3/60/60%24),r=parseInt(o/1e3/60%60),u=parseInt(o/1e3%60);r<=9&&(r="0"+r),u<=9&&(u="0"+u),i.day=n,i.hour=s,i.minute=r,i.seconds=u}}),1e3);setTimeout((function(){e.hideLoading()}),1e3)}))},huojiao:function(){setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),600)},shiqu:function(){setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),200)},app_lianjie:function(){var t=this,i=t.$http.WebSocket_url;e.connectSocket({url:"wss://"+i+":3348",success:function(e){console.log("websocket连接成功",e)},fail:function(e){},complete:function(e){}}),e.onSocketOpen((function(e){console.log("WebSocket连接已打开！",e)})),e.onSocketError((function(e){console.log("WebSocket连接打开失败，请检查！")})),e.onSocketMessage((function(i){console.log("收到服务器内容",i);var o=JSON.parse(i.data);if("init"==o.type)console.log("init"),console.log("client_id",o.client_id),e.request({url:t.$http.baseUrl+"/push/gatewayworker/bind",method:"POST",data:{client_id:o.client_id},success:function(e){console.log(e,"bind")},fail:function(e){}});else if("say"==o.type){if(console.log("say"),o.state){if(9==o.state&&o.userid&&this.$http.post({url:"/mapi/lawyer/lawyer",data:{lawyerid:o.userid}}).then((function(e){var i={photourl_form:o.userid_from_pic,userid_to:o.userid_to,photourl_to:o.userid_to_pic,content:o.msg,msgtype:o.state,userid_from:t.ls_id,city:e.data.lawyer.city,province:e.data.lawyer.province,area:e.data.lawyer.area,photourl:e.data.lawyer.photourl,lvsuo:e.data.lawyer.lvsuo,nickname:e.data.lawyer.nickname,expertise1:e.data.lawyer.expertise1,expertise2:e.data.lawyer.expertise2,expertise3:e.data.lawyer.expertise3,addtime:(new Date).getTime()};t.message.push(i)})),10==o.state||11==o.state||12==o.state)o.content&&this.$http.post({url:"/mapi/consult/red_envelope",data:{redid:o.content,userid:t.ls_id}}).then((function(e){var i={photourl_form:o.userid_from_pic,userid_to:o.userid_to,photourl_to:o.userid_to_pic,content:o.msg,msgtype:o.state,userid_from:t.ls_id,money:e.data.red_envelope.money,is_pay:e.data.red_envelope.is_pay,information:e.data.red_envelope.information,paymode:e.data.red_envelope.paymode,type:e.data.red_envelope.type,addtime:(new Date).getTime()};t.message.push(i)}));else{var n={photourl_form:o.userid_from_pic,userid_to:o.userid_to,photourl_to:o.userid_to_pic,content:o.msg,msgtype:o.state,userid_from:t.ls_id,addtime:(new Date).getTime()};t.message.push(n)}setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),200)}}else console.log("else")})),e.onSocketClose((function(e){console.log("uniapp 已关闭！")}))},dianzan:function(){e.showToast({title:"点赞成功",duration:2e3})},go_chat:function(t){e.redirectTo({url:"chat?lawyerid="+t})},huaqu_new_ls:function(e){},huqu_ls_xinxi:function(){var e=this;this.$http.post({url:"/mapi/lawyer/lawyer",data:{lawyerid:this.ls_id}}).then((function(t){e.ls_xinxi=t.data.lawyer}))},huqu_zhiwu:function(){var e=this;this.$http.post({url:"/mapi/lawyer/xinxi",data:{lawyerid:this.ls_id}}).then((function(t){e.xinxi=t.data.lawyer}))},replace_em:function(e){return e=e.replace(/\</g,"&lt;"),e=e.replace(/\>/g,"&gt;"),e=e.replace(/\n/g,"<br/>"),e=e.replace(/\[em_([0-9]*)\]/g,'<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>'),e},handleEmj:function(e){console.log(e),"[em_98]"==e?this.chat_txt=this.chat_txt.replace(/(\[[^\]]+\]|[\s\S])$/,""):this.chat_txt+=e},showEmj:function(){this.on_yuyin=!1;var e=!this.isShowEmj;e?(this.emojiIcon="cuIcon-keyboard",this.bt_show=!1):this.emojiIcon="cuIcon-emoji",this.isShowEmj=e,this.$emit("show")},bianji:function(){this.chat_txt=this.zuijin_txt},changan:function(e,t){this.zuijin_txt=t||"",console.log(e),this.messageid=e,this.is_chehui=!0},che_queding:function(){var t=this;this.$http.post({url:"/index/zixun/withdraw",data:{messageid:this.messageid}}).then((function(i){0==i.code&&(e.showToast({title:"消息已撤回",duration:2e3}),t.message.forEach((function(e,i,o){e.messageid==t.messageid&&t.message.splice(i,1)})),t.is_chehui=!1,""!=t.zuijin_txt?t.is_zuijin_chehui=!0:(t.is_zuijin_chehui=!1,t.chat_txt=""))}))},che_quxiao:function(){this.is_chehui=!1},jia:function(){this.bt_show=!this.bt_show,this.isShowEmj=!1,this.on_yuyin=!1},Audio2dataURL:function(e){var t=this;plus.io.resolveLocalFileSystemURL(e,(function(e){e.file((function(e){var i=new plus.io.FileReader;i.onloadend=function(e){console.log(e.target.result),t.up_luyin(e.target.result)},i.readAsDataURL(e)}),(function(e){console.log("读写出现异常: "+e.message)}))}))},dataURL2Audio:function(e,t){e=e.replace("data:audio/amr;base64,","");var i=(new Date).valueOf()+".amr";plus.io.requestFileSystem(plus.io.PRIVATE_DOC,(function(o){o.root.getFile(i,{create:!0},(function(i){var o=i.fullPath;if(mui.os.android){var n=plus.android.importClass("android.util.Base64"),s=plus.android.importClass("java.io.FileOutputStream");try{var a=new s(o),r=n.decode(e,n.DEFAULT);console.log(r,"bytes"),a.write(r),a.close(),t&&t(i)}catch(c){console.log(c.message)}}else if(mui.os.ios){var u=plus.ios.importClass("NSData"),l=new u;l=l.initWithBase64EncodedStringoptions(e,0),l&&(l.plusCallMethod({writeToFile:o,atomically:!0}),plus.ios.deleteObject(l)),t&&t(i)}}))}))},up_luyin:function(e){console.log("up_luyin");var t=e.replace("mpeg","mp3"),i=this;i.$http.post({url:"/index/zixun/uploadaudiomessage",data:{audio:t}}).then((function(e){console.log(e),0==e.code&&i.send_luyin(e.data.audio)}))},send_luyin:function(t){var i=this;console.log("send1111111111");var o=this,n=Math.round(this.intervalTime);this.$http.post({url:"/push/gatewayworker/sendmessage.html",data:{userid_to:this.ls_id,msg:t,type:13,duration:n}}).then((function(s){if(console.log(s),0==s.code){var a={content:t,msgtype:13,photourl_form:i.user.photourl,messageid:s.data,duration:n,addtime:(new Date).getTime()};i.message.push(a),setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),100);var r=new Date(o.time1.replace(/-/g,"/")),u=new Date,l=r.getTime()-u.getTime();l<0&&o.send_guoqi()}}))},up_img:function(){e.chooseImage({success:function(e){console.log(e)}})},getLocalFilePath:function(e){if(0===e.indexOf("_www")||0===e.indexOf("_doc")||0===e.indexOf("_documents")||0===e.indexOf("_downloads"))return e;if(0===e.indexOf("file://"))return e;if(0===e.indexOf("/storage/emulated/0/"))return e;if(0===e.indexOf("/")){var t=plus.io.convertAbsoluteFileSystem(e);if(t!==e)return t;e=e.substr(1)}return"_www/"+e},send_img:function(t){var i=this,o=this;this.$http.post({url:"/push/gatewayworker/sendmessage.html",data:{userid_to:this.ls_id,msg:t,type:2}}).then((function(n){if(0==n.code){var s={content:t,msgtype:2,photourl_form:i.user.photourl,messageid:n.data,addtime:(new Date).getTime()};i.message.push(s),setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),100);var a=new Date(o.time1.replace(/-/g,"/")),r=new Date,u=a.getTime()-r.getTime();u<0&&o.send_guoqi()}}))},send:function(){var t=this;if(""==this.chat_txt)return e.showToast({title:"请输入内容",duration:2e3,icon:"none"}),!1;this.canClick?(this.canClick=!1,this.send_txt(),setTimeout((function(){t.canClick=!0}),1e3)):e.showToast({title:"请稍后发送",duration:2e3,icon:"none"})},send_txt:function(){var t=this,i=this;console.log(this.chat_txt);var o=this.replace_em(this.chat_txt);if(""==o)return e.showToast({title:"请输入内容",duration:2e3,icon:"none"}),!1;this.$http.post({url:"/push/gatewayworker/sendmessage.html",data:{userid_to:this.ls_id,msg:this.chat_txt,type:1}}).then((function(n){if(0==n.code){t.chat_txt="",t.is_zuijin_chehui=!1;var s={content:o,msgtype:1,photourl_form:t.user.photourl,messageid:n.data,addtime:(new Date).getTime()};t.message.push(s),setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),100);var a=new Date(i.time1.replace(/-/g,"/")),r=new Date,u=a.getTime()-r.getTime();u<0&&i.send_guoqi()}}))},call:function(){e.makePhoneCall({phoneNumber:this.dianhua+"",success:function(e){console.log("调用成功!")},fail:function(e){console.log(e),console.log("调用失败!")}})},changyong_change:function(e){this.changyong=this.changyong_arry[e.detail.value],console.log(this.changyong)},pingjia:function(){e.navigateTo({url:"pingjia?lawyerid="+this.chat_xinxi.userid})},tan_hide:function(){this.isShowEmj=!1,this.bt_show=!1},xianshi:function(){this.dian_num=this.dianhua},fufei:function(t){e.navigateTo({url:"pay?lawyerid="+this.ls_id+"&type="+t})},go_zixun:function(t){e.navigateTo({url:"pay?lawyerid="+this.ls_id+"&type="+t})},clickImg:function(t){e.previewImage({urls:[""+t],current:"",success:function(e){},fail:function(e){},complete:function(e){}})},connectSocketInit:function(){var t=this,i=window.location.host,o=new WebSocket("wss://"+i+":3348");o.onopen=function(e){console.log("Connection open ...")},o.onmessage=function(i){console.log("Received Message: "+i.data);var o=JSON.parse(i.data);if("init"==o.type)console.log("init"),console.log("client_id",o.client_id),e.request({url:t.$http.baseUrl+"/push/gatewayworker/bind",method:"POST",data:{client_id:o.client_id},success:function(e){console.log(e,"bind")},fail:function(e){}});else if("say"==o.type){if(console.log("say"),o.state){if(9==o.state&&this.$http.post({url:"/mapi/lawyer/lawyer",data:{lawyerid:o.userid}}).then((function(e){var i={photourl_form:o.userid_from_pic,userid_to:o.userid_to,photourl_to:o.userid_to_pic,content:o.msg,msgtype:o.state,userid_from:t.ls_id,city:e.data.lawyer.city,province:e.data.lawyer.province,area:e.data.lawyer.area,photourl:e.data.lawyer.photourl,lvsuo:e.data.lawyer.lvsuo,nickname:e.data.lawyer.nickname,expertise1:e.data.lawyer.expertise1,expertise2:e.data.lawyer.expertise2,expertise3:e.data.lawyer.expertise3,addtime:(new Date).getTime()};t.message.push(i)})),10==o.state||11==o.state||12==o.state)o.content&&this.$http.post({url:"/mapi/consult/red_envelope",data:{redid:o.content,userid:t.ls_id}}).then((function(e){var i={photourl_form:o.userid_from_pic,userid_to:o.userid_to,photourl_to:o.userid_to_pic,content:o.msg,msgtype:o.state,userid_from:t.ls_id,money:e.data.red_envelope.money,is_pay:e.data.red_envelope.is_pay,information:e.data.red_envelope.information,paymode:e.data.red_envelope.paymode,type:e.data.red_envelope.type,addtime:(new Date).getTime()};t.message.push(i)}));else{var n={photourl_form:o.userid_from_pic,userid_to:o.userid_to,photourl_to:o.userid_to_pic,content:o.msg,msgtype:o.state,userid_from:t.ls_id,addtime:(new Date).getTime()};t.message.push(n)}setTimeout((function(){e.pageScrollTo({scrollTop:99999,duration:0})}),100)}}else console.log("else")},o.onclose=function(e){console.log("Connection closed.")},o.onerror=function(e){console.log("WebSocketError!",e)}},guanbi:function(){this.is_new=!1},fa_hongbao:function(){e.navigateTo({url:"hongbao?lawyerid="+this.chat_xinxi.userid})},go_fuwufei:function(t,i){e.navigateTo({url:"fuwufei?lawyerid="+this.chat_xinxi.userid+"&redid="+t+"&addtime="+i})}},filters:{timeStamp:function(e){if(null==e)return"null";var t=(e+"").length;while(t++<13)e+="0";e=Number(e);var i=new Date(e),o=i.getMonth()+1,n=i.getHours();n<10&&(n="0"+n);var s=i.getMinutes();s<10&&(s="0"+s);var a=i.getFullYear()+"-"+o+"-"+i.getDate()+" "+n+":"+s;return a}}};t.default=m}).call(this,i("5486")["default"])},"94ce":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return o}));var o={lFile:function(){return i.e("components/l-file/l-file").then(i.bind(null,"3d92"))}},n=function(){var e=this,t=e.$createElement,i=(e._self._c,""!=e.message?e._f("timeStamp")(e.message[0].addtime):null),o=e.__map(e.message,(function(t,i){var o=e.__get_orig(t),n=i>1&&e.message[i].addtime-e.message[i-1].addtime>300?e._f("timeStamp")(e.message[i].addtime):null,s=t.userid_from==e.ls_id&&1==t.msgtype&&1!=t.iswithdraw?e.replace_em(t.content):null,a=t.userid_from==e.ls_id&&14==t.msgtype&&1!=t.iswithdraw?e.wenjian(t.content):null,r=t.userid_from!=e.ls_id&&1==t.msgtype&&1!=t.iswithdraw?e.replace_em(t.content):null,u=t.userid_from!=e.ls_id&&14==t.msgtype&&1!=t.iswithdraw?e.wenjian(t.content):null;return{$orig:o,f1:n,m0:s,m1:a,m2:r,m3:u}}));e.$mp.data=Object.assign({},{$root:{f0:i,l0:o}})},s=[]},d696:function(e,t,i){},ecbf:function(e,t,i){"use strict";i.r(t);var o=i("94ce"),n=i("35df");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("11eb");var a,r=i("f0c5"),u=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=u.exports}},[["4b50","common/runtime","common/vendor"]]]);