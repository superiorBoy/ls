(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ls_zhuye"],{"036a":function(i,t,e){var a=e("61e3");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("c7879d12",a,!0,{sourceMap:!1,shadowMode:!1})},"3b5e":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");__webpack_require__("4160"),__webpack_require__("a9e3"),__webpack_require__("ac1f"),__webpack_require__("5319"),__webpack_require__("159b"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _uCharts=_interopRequireDefault(__webpack_require__("d474")),_self,canvaRing=null,_default={data:function(){return{tabs:["律师服务","律师信息","律师案例"],lawyerid:"",active:0,cWidth:"",cHeight:"",pixelRatio:1,chartData:{series:[]},lvshi:"",zhuanchang_arry:"",img_url:uni.getStorageSync("img_url"),type_list:[],huifu_list:[],tuwen_page:0,tuwen_list:[],pingjia_list:[],pingjiatype:"",ls_xinxi:""}},created:function(){},onLoad:function(i){var t=this;this.$http.post({url:"/mapi/index/gettype"}).then((function(i){t.type_list=i.data.type})),this.$http.post({url:"/mapi/lawyer/getshanchang"}).then((function(i){t.zhuanchang_arry=i.data.shanchang,t.huoqu_lvshi()})),this.lawyerid=i.lawyerid,this.huoqu_bili(),this.huiqu_huifu_list(),this.huoqu_tuwen(),this.huiqu_pingjia_list(),this.huoqu_pingjiatype(),this.huoqu_xinxi()},onShow:function onShow(){var aaa=this.decodeUnicode('["服务优质","学识渊博","经验丰富","待人诚恳","乐于助人","回复很快","形象专业","值得推荐"]');console.log(eval(aaa))},methods:{navigateBack:function(){uni.navigateBack()},decodeUnicode:function(i){return i=i.replace(/\\/g,"%"),unescape(i)},huoqu_xinxi:function(){var i=this;this.$http.post({url:"/mapi/lawyer/xinxi",data:{lawyerid:this.lawyerid}}).then((function(t){0==t.code&&(i.ls_xinxi=t.data)}))},shuzu:function shuzu(str){return eval(str)},qiehuan:function(i){this.active=i},getServerData:function(){console.log("4444"),_self.showRing("canvasRing",this.chartData)},huoqu_lvshi:function(){var i=this;this.$http.post({url:"/mapi/lawyer/lawyer",data:{lawyerid:this.lawyerid}}).then((function(t){0==t.code&&(i.lvshi=t.data.lawyer,console.log(t.data.lawyer))}))},huoqu_bili:function(){var i=this;this.$http.post({url:"/mapi/lawyer/reply_tu",data:{lawyerid:this.lawyerid}}).then((function(t){if(0==t.code){var e=[];t.data.consulttu.forEach((function(t,a){console.log(t),e.push({name:i.type_list[t.typeid].typename,data:t.value})})),console.log(e),console.log(i.chartData.series),i.chartData.series=e,i.chartData.series=e,_self=i,i.cWidth=uni.upx2px(750),i.cHeight=uni.upx2px(500),i.getServerData()}}))},huiqu_huifu_list:function(){var i=this;this.$http.post({url:"/mapi/lawyer/consultlist",data:{lawyerid:this.lawyerid,page:0}}).then((function(t){0==t.code&&(i.huifu_list=t.data.consult)}))},huoqu_tuwen:function(){var i=this;this.$http.post({url:"/mapi/lawyer/tuwenlist",data:{lawyerid:this.lawyerid,page:this.tuwen_page}}).then((function(t){0==t.code&&(i.tuwen_list=t.data.tuwen)}))},huiqu_pingjia_list:function(){var i=this;this.$http.post({url:"/mapi/lawyer/pingjia",data:{lawyerid:this.lawyerid,page:0}}).then((function(t){0==t.code&&(i.pingjia_list=t.data.evaluatelist)}))},huoqu_pingjiatype:function(){var i=this;this.$http.post({url:"/mapi/lawyer/pingjianum",data:{lawyerid:this.lawyerid}}).then((function(t){0==t.code&&(i.pingjiatype=t.data)}))},showRing:function(i,t){canvaRing=new _uCharts.default({$this:_self,canvasId:i,colors:["#c23531","#91c7ae","#67afb8","#d48265","#3f5b6e","#c4b5ff"],type:"ring",fontSize:11,legend:{position:"bottom",float:"center",itemGap:10,lineHeight:20},extra:{pie:{offsetAngle:-45,ringWidth:40*_self.pixelRatio,labelWidth:15}},background:"#FFFFFF",pixelRatio:_self.pixelRatio,series:t.series,animation:!0,width:_self.cWidth*_self.pixelRatio,height:_self.cHeight*_self.pixelRatio,disablePieStroke:!0,dataLabel:!0})},touchRing:function(i){canvaRing.showToolTip(i,{format:function(i){return i.name+":"+i.data}})},tochat:function(i,t){uni.navigateTo({url:"zaixian_wen?user="+i+"&mobile="+t})},go_chat:function(i){uni.navigateTo({url:"chat?lsid="+i})},go_tiwen_xq:function(i){uni.navigateTo({url:"zhuye_zixun_xq?id="+i})},tuwen_xq:function(i){uni.navigateTo({url:"tuwen_xq?lytuwenid="+i})},go_dianping:function(){uni.navigateTo({url:"pingjia?lsid="+this.lawyerid})},quzheng:function(i){return Math.floor(i)},call:function(i){uni.makePhoneCall({phoneNumber:""+i,success:function(i){console.log("调用成功!")},fail:function(i){console.log("调用失败!")}})},go_pay:function(i){uni.navigateTo({url:"pay?lawyerid="+i})}},filters:{timeStamp:function(i){if(null==i)return"null";var t=(i+"").length;while(t++<13)i+="0";i=Number(i);var e=new Date(i),a=e.getMonth()+1,n=e.getHours();n<10&&(n="0"+n);var s=e.getMinutes();s<10&&(s="0"+s);var l=e.getFullYear()+"-"+a+"-"+e.getDate()+" "+n+":"+s;return l}}};exports.default=_default},"3d51":function(i,t,e){"use strict";var a=e("036a"),n=e.n(a);n.a},"61e3":function(i,t,e){var a=e("24fb"),n=e("1de5"),s=e("d40d"),l=e("a40e"),c=e("5b59"),r=e("8eec");t=a(!1);var o=n(s),u=n(l),d=n(c),_=n(r);t.push([i.i,".ls_top_bg[data-v-66e43c58]{width:100%;height:%?308?%;background:url("+o+') no-repeat;background-size:100% 100%}.head2[data-v-66e43c58]{background:none;padding-top:%?86?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;\n\t/* position: fixed; */top:0;width:100%;padding:%?96?% %?30?% %?26?%;z-index:99;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ls_tx_img[data-v-66e43c58]{width:%?152?%;height:%?152?%;margin-top:%?-76?%;border-radius:100%}.is_ren[data-v-66e43c58]{width:%?24?%;height:%?22?%;position:absolute;bottom:%?26?%;left:%?364?%}.ls_top[data-v-66e43c58]{height:%?398?%;background-color:#fff;box-shadow:%?0?% %?0?% %?13?% %?0?% rgba(0,0,0,.13);border-radius:%?10?%;text-align:center;padding:0 %?30?%;box-sizing:border-box}.ls_padd[data-v-66e43c58]{padding:0 %?30?%;margin-top:%?-45?%}.ls_tx[data-v-66e43c58]{text-align:center;position:relative;margin-bottom:%?10?%}.ls_gaikuo[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.ls_top_bg_wai[data-v-66e43c58]{background-color:rgba(0,0,0,.6);height:%?308?%}.ls_dizhi uni-text[data-v-66e43c58]{margin-right:%?30?%}.ls_dizhi[data-v-66e43c58]{margin:%?10?% 0}.techang[data-v-66e43c58]{margin:%?30?% 0}.techang uni-text[data-v-66e43c58]{height:%?42?%;background-color:#f5f5f5;line-height:%?42?%;margin-right:%?20?%;padding:%?10?% %?10?%}.ls_gaikuo[data-v-66e43c58]{border-top:%?2?% solid #f7f7f7;padding:%?20?% 0}.ls_gaikuo_item[data-v-66e43c58]{position:relative;width:33.33%}.ls_gaikuo_item[data-v-66e43c58]::before{content:"";width:%?2?%;height:%?36?%;background-color:#f7f7f7;position:absolute;right:0;top:%?26?%}.ls_gaikuo_item[data-v-66e43c58]:last-child::before{content:none}.ls_gaikuo_num[data-v-66e43c58]{margin-bottom:%?8?%}.ls_renzheng[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?65?%;background-color:#f5f5f5;border-radius:%?10?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% 0}.ls_renzheng_item[data-v-66e43c58]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.ren_shiming uni-image[data-v-66e43c58]{width:%?17?%;height:%?17?%;margin-right:%?10?%}.ren_zhiye uni-image[data-v-66e43c58]{width:%?18?%;height:%?14?%;margin-right:%?10?%}.ren_pingtai uni-image[data-v-66e43c58]{width:%?17?%;height:%?14?%;margin-right:%?10?%;vertical-align:middle}.ls_tab[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?60?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?80?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?2?% solid #f7f7f7}.ls_tab_item_active[data-v-66e43c58]{color:#333;position:relative}.ls_tab_item_active[data-v-66e43c58]::before{position:absolute;content:"";display:inline-block;width:%?71?%;height:%?4?%;background-color:#0eb77e;bottom:%?-12?%;left:50%;margin-left:%?-35?%}.fuwu_lei_list[data-v-66e43c58]{padding:%?25?% %?30?% 0}.fuwu_lei[data-v-66e43c58]{height:%?90?%;background-color:#11b790;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?18?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?0?% %?104?% 0 %?20?%;box-sizing:border-box}.fuwu_lei[data-v-66e43c58]:nth-child(1){background:url('+u+") no-repeat;background-size:100% 100%}.fuwu_lei[data-v-66e43c58]:nth-child(2){background:url("+d+") no-repeat;background-size:100% 100%}.fuwu_lei[data-v-66e43c58]:nth-child(3){background:url("+_+") no-repeat;background-size:100% 100%}.fuwu_lei .lei_btn[data-v-66e43c58]{font-size:%?20?%}.lei_btn uni-text[data-v-66e43c58]{-webkit-transform:scale(.8);display:inline-block;margin:0;padding:0;font-size:%?16?%}.zaixian_btn[data-v-66e43c58]{height:%?30?%;background-color:#fff;border-radius:%?15?%;line-height:%?30?%;text-align:center}.dianhua_btn[data-v-66e43c58]{height:%?31?%;border-radius:%?15?%;box-sizing:border-box;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;\n\t/* padding: 0 6rpx; */\n\t/* width: 162rpx; */-webkit-box-align:center;-webkit-align-items:center;align-items:center}.dianhua_btn uni-image[data-v-66e43c58]{width:%?10?%;height:%?16?%;margin-right:%?4?%;position:relative;left:%?14?%}.dianhua_btn uni-text[data-v-66e43c58]{font-size:%?16?%;-webkit-transform:scale(.8);-webkit-transform-origin-x:0;position:relative;left:%?18?%}.tuwen_btn[data-v-66e43c58]{height:%?30?%;background-color:#fff;text-align:center;border-radius:%?15?%;color:#bcb198;line-height:%?30?%}.ls_jilu[data-v-66e43c58]{padding:%?20?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.fuwu_lei_left[data-v-66e43c58]{max-width:%?460?%}.wenda[data-v-66e43c58]{border-bottom:%?2?% solid #f7f7f7;padding:%?18?% 0}.wenda_wen[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.wenda uni-image[data-v-66e43c58]{width:%?24?%;height:%?24?%;margin-right:%?8?%;position:relative;top:%?4?%}.wenda_da[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?13?%}.wenda[data-v-66e43c58]:last-child{border:none}.wenda_list[data-v-66e43c58]{padding:0 %?30?%;margin-top:%?10?%}.wenda_body[data-v-66e43c58]{max-width:%?520?%;margin-left:%?6?%;line-height:%?40?%}.tuwen[data-v-66e43c58]{border-bottom:%?20?% solid #f7f7f7;border-top:%?20?% solid #f7f7f7;margin-top:%?10?%}.tuwen_title[data-v-66e43c58]{padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tuwen_list[data-v-66e43c58]{height:%?280?%;white-space:nowrap;display:-webkit-box;display:-webkit-flex;display:flex}.tuwen_item uni-image[data-v-66e43c58]{width:100%;height:%?219?%}.tuwen_item[data-v-66e43c58]{display:inline-block;width:%?548?%;height:100%;margin-right:%?30?%}.tuwen_bottom[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?6?%}.tuwen_bottom .tuwen_txt[data-v-66e43c58]{display:inline-block;max-width:%?360?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pingjia[data-v-66e43c58]{padding:%?30?% %?0?% %?0?%}.pingjia_title[data-v-66e43c58]{margin:32prx 0 %?18?%;padding:0 %?30?%}.ping_tongji_left uni-image[data-v-66e43c58]{width:%?28?%;height:%?28?%;margin-right:%?7?%}.ping_tongji[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?10?% %?30?% 0}.dianping[data-v-66e43c58]{width:%?130?%;height:%?40?%;border:solid %?1?% #dcdcdc;line-height:%?40?%;text-align:center}.ping_tx[data-v-66e43c58]{width:%?72?%;height:%?72?%;margin-right:%?10?%}.xing_arry[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex}.xing_arry uni-image[data-v-66e43c58]{width:%?20?%;height:%?20?%;margin-right:%?9?%}.ping_list[data-v-66e43c58]{padding:%?33?% %?30?% %?17?%;border-bottom:%?2?% solid #f7f7f7;display:-webkit-box;display:-webkit-flex;display:flex}.ping_list_right[data-v-66e43c58]{width:88%;position:relative}.ping_dizhi[data-v-66e43c58]{margin:%?4?% 0 %?6?%}.ping_dizhi uni-image[data-v-66e43c58]{width:%?16?%;height:%?20?%;margin-right:%?8?%}.dianzan uni-image[data-v-66e43c58]{position:absolute;top:%?10?%;right:%?32?%;width:%?31?%;height:%?32?%}.biaoqian[data-v-66e43c58]{margin:%?13?% 0 0}.biaoqian uni-text[data-v-66e43c58]{display:inline-block;height:%?40?%;background-color:#fff;border:solid %?1?% #dcdcdc;line-height:%?40?%;padding:0 %?18?%;margin-right:%?10?%;margin-bottom:%?10?%}.ping_time[data-v-66e43c58]{margin-top:%?7?%;text-align:right}.ping_more[data-v-66e43c58]{height:%?90?%;background-color:#dcdcdc;line-height:%?90?%;text-align:center}.bottom[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?30?%;height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;bottom:0;width:100%;background-color:#fff}.bottom_fenxiang[data-v-66e43c58],\n.bottom_pingjia[data-v-66e43c58]{text-align:center;margin-right:%?22?%}.bottom_fenxiang uni-image[data-v-66e43c58]{width:%?24?%;height:%?23?%}.bottom_pingjia uni-image[data-v-66e43c58]{width:%?25?%;height:%?24?%}.dianhua[data-v-66e43c58]{width:%?270?%;height:%?74?%;border:solid %?1?% #0eb77e;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:%?10?% 0 0 %?10?%}.dianhua uni-image[data-v-66e43c58]{width:%?25?%;height:%?27?%;margin-right:%?16?%}.zaixian uni-image[data-v-66e43c58]{width:%?26?%;height:%?26?%;margin-right:%?12?%}.zaixian[data-v-66e43c58]{width:%?270?%;height:%?74?%;background-color:#0eb77e;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:0 %?10?% %?10?% 0}.qiun-charts[data-v-66e43c58]{width:100%;height:%?500?%;background-color:#fff;border-bottom:%?2?% solid #f7f7f7}.charts[data-v-66e43c58]{width:100%;height:100%;background-color:#fff}.ls_jianjie[data-v-66e43c58]{padding:0 %?30?% %?30?%;line-height:%?36?%;border-bottom:%?20?% solid #f3f3f3}.ls_jianjie_title[data-v-66e43c58]{line-height:%?90?%}.xixin_title[data-v-66e43c58]{margin:%?20?% 0 %?20?%}.jiben_xixin[data-v-66e43c58],\n.lianxi[data-v-66e43c58]{padding:0 %?0?% 0 %?30?%;border-bottom:%?2?% solid #f7f7f7}.jiben_xixin[data-v-66e43c58]{border-bottom:%?20?% solid #f3f3f3}.jiben_xixin_list[data-v-66e43c58]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?22?%;margin-bottom:%?20?%}.jiben_xixin_list_right[data-v-66e43c58]{margin-left:%?85?%}.lianxi_right[data-v-66e43c58]{max-width:77%;margin-left:%?25?%}",""]),i.exports=t},"95c3":function(i,t,e){"use strict";e.r(t);var a=e("fac2"),n=e("c8ac");for(var s in n)"default"!==s&&function(i){e.d(t,i,(function(){return n[i]}))}(s);e("3d51");var l,c=e("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"66e43c58",null,!1,a["a"],l);t["default"]=r.exports},c8ac:function(i,t,e){"use strict";e.r(t);var a=e("3b5e"),n=e.n(a);for(var s in a)"default"!==s&&function(i){e.d(t,i,(function(){return a[i]}))}(s);t["default"]=n.a},fac2:function(i,t,e){"use strict";var a;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return a}));var n=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:" "},[a("v-uni-view",{staticClass:"ls_top_bg"},[a("v-uni-view",{staticClass:"ls_top_bg_wai"},[a("v-uni-view",{staticClass:"head2"},[a("v-uni-view",{staticClass:"head_back"},[a("v-uni-image",{attrs:{src:e("0e34").replace(/^\./,""),mode:""},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.navigateBack()}}})],1),a("v-uni-view",{staticClass:"head_center bai_38_bold"},[i._v("律师主页")]),a("v-uni-view",{staticClass:" head_right hei_30_bold"})],1)],1)],1),a("v-uni-view",{staticClass:"ls_padd"},[a("v-uni-view",{staticClass:"ls_top"},[a("v-uni-view",{staticClass:"ls_tx"},[a("v-uni-image",{staticClass:"ls_tx_img",attrs:{src:i.img_url+i.lvshi.photourl,mode:""}}),a("v-uni-image",{staticClass:"is_ren",attrs:{src:e("3c33").replace(/^\./,""),mode:""}})],1),a("v-uni-view",{staticClass:"hei_28_bold"},[i._v(i._s(i.lvshi.nickname))]),a("v-uni-view",{staticClass:"qian_26 ls_dizhi"},[a("v-uni-text",[i._v(i._s(i.lvshi.province)+"-"+i._s(i.lvshi.city))]),a("v-uni-text",[i._v("专职律师")])],1),""!=i.lvshi?a("v-uni-view",{staticClass:"hui_26 techang"},[i.zhuanchang_arry[i.lvshi.expertise1]&&i.zhuanchang_arry[i.lvshi.expertise1].shanchangname?a("v-uni-text",[i._v(i._s(i.zhuanchang_arry[i.lvshi.expertise1].shanchangname))]):i._e(),i.zhuanchang_arry[i.lvshi.expertise1]&&i.zhuanchang_arry[i.lvshi.expertise2].shanchangname?a("v-uni-text",[i._v(i._s(i.zhuanchang_arry[i.lvshi.expertise2].shanchangname))]):i._e(),i.zhuanchang_arry[i.lvshi.expertise1]&&i.zhuanchang_arry[i.lvshi.expertise3].shanchangname?a("v-uni-text",[i._v(i._s(i.zhuanchang_arry[i.lvshi.expertise3].shanchangname))]):i._e()],1):i._e(),a("v-uni-view",{staticClass:"ls_gaikuo"},[a("v-uni-view",{staticClass:"ls_gaikuo_item"},[a("v-uni-view",{staticClass:"lv_30 ls_gaikuo_num"},[i._v(i._s(i.lvshi.replynum))]),a("v-uni-view",{staticClass:"qian_26"},[i._v("解答咨询")])],1),a("v-uni-view",{staticClass:"ls_gaikuo_item"},[a("v-uni-view",{staticClass:"lv_30 ls_gaikuo_num"},[i._v(i._s(i.lvshi.likenum))]),a("v-uni-view",{staticClass:"qian_26"},[i._v("获得点赞")])],1),a("v-uni-view",{staticClass:"ls_gaikuo_item"},[a("v-uni-view",{staticClass:"lv_30 ls_gaikuo_num"},[i._v(i._s(i.lvshi.pingfen))]),a("v-uni-view",{staticClass:"qian_26"},[i._v("综合评分")])],1)],1)],1),a("v-uni-view",{staticClass:"ls_renzheng qian_24"},[a("v-uni-view",{staticClass:"ls_renzheng_item ren_shiming"},[a("v-uni-image",{attrs:{src:e("fd00").replace(/^\./,""),mode:""}}),i._v("实名认证")],1),a("v-uni-view",{staticClass:"ls_renzheng_item ren_zhiye"},[a("v-uni-image",{attrs:{src:e("f1fb").replace(/^\./,""),mode:""}}),i._v("执业认证")],1),a("v-uni-view",{staticClass:"ls_renzheng_item ren_pingtai"},[a("v-uni-image",{attrs:{src:e("9fff").replace(/^\./,""),mode:"w"}}),i._v("平台认证")],1)],1)],1),a("v-uni-view",{staticClass:"ls_tab qian_26"},[a("v-uni-navigator",{staticClass:"ls_tab_item ls_tab_item_active",attrs:{url:"ls_zhuye?lawyerid="+i.lawyerid}},[i._v("首页")]),a("v-uni-navigator",{staticClass:"ls_tab_item ",attrs:{url:"ls_zhuye_index?lawyerid="+i.lawyerid}},[i._v("律师服务")]),a("v-uni-navigator",{staticClass:"ls_tab_item ",attrs:{url:"ls_xinxi?lawyerid="+i.lawyerid}},[i._v("律师信息")]),a("v-uni-navigator",{staticClass:"ls_tab_item ",attrs:{url:"ls_anli?lawyerid="+i.lawyerid}},[i._v("律师案例")])],1),a("v-uni-view",{staticClass:"fuwu_body"},[a("v-uni-view",{staticClass:"fuwu_lei_list"},[a("v-uni-view",{staticClass:"fuwu_lei"},[a("v-uni-view",{staticClass:"fuwu_lei_left"},[a("v-uni-view",{staticClass:"bai_26",staticStyle:{"margin-right":"15rpx"}},[i._v("在线文字咨询")]),a("v-uni-text",{staticClass:"bai_22"},[i._v("简易需求,在线解答")])],1),a("v-uni-view",{staticClass:" dianhua_btn bai_26"},[a("v-uni-image",{staticStyle:{width:"17rpx"},attrs:{src:e("9d1d").replace(/^\./,""),mode:"widthFix"}}),0!=i.lvshi.chatprice?a("v-uni-text",[i._v(i._s(i.lvshi.chatprice)+"元/小时")]):i._e()],1),0!=i.lvshi.chatprice?a("v-uni-view",{staticClass:"lv_20 lei_btn zaixian_btn",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go_chat(i.lawyerid)}}},[a("v-uni-text",[i._v("立即咨询")])],1):i._e(),0==i.lvshi.chatprice?a("v-uni-view",{staticClass:"lv_20 lei_btn zaixian_btn"},[a("v-uni-text",[i._v("未开启")])],1):i._e()],1),a("v-uni-view",{staticClass:"fuwu_lei"},[a("v-uni-view",{staticClass:"fuwu_lei_left"},[a("v-uni-view",{staticClass:"bai_26 ",staticStyle:{"margin-right":"15rpx"}},[i._v("电话语音咨询")]),a("v-uni-text",{staticClass:"bai_22"},[i._v("电话直呼,方便快捷")])],1),""!=i.lvshi?a("v-uni-view",{staticClass:" dianhua_btn"},[a("v-uni-image",{staticStyle:{width:"12rpx"},attrs:{src:e("842d").replace(/^\./,""),mode:"widthFix"}}),a("v-uni-text",[i._v(i._s(i.lvshi.mobile))])],1):i._e(),a("v-uni-view",{staticClass:"lei_btn tuwen_btn",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.call(i.lvshi.mobile)}}},[a("v-uni-text",[i._v("免费拨打")])],1)],1),a("v-uni-view",{staticClass:"fuwu_lei"},[a("v-uni-view",{staticClass:"fuwu_lei_left"},[a("v-uni-view",{staticClass:"bai_26",staticStyle:{"margin-right":"15rpx"}},[i._v("付费电话咨询")]),a("v-uni-text",{staticClass:"bai_22"},[i._v("隐私咨询，一步到位")])],1),a("v-uni-view",{staticClass:" dianhua_btn bai_26"},[a("v-uni-image",{staticStyle:{width:"16rpx"},attrs:{src:e("1724").replace(/^\./,""),mode:"widthFix"}}),0!=i.lvshi.phoneprice?a("v-uni-text",[i._v(i._s(i.lvshi.phoneprice)+"元/20分钟")]):i._e()],1),0!=i.lvshi.phoneprice?a("v-uni-view",{staticClass:"lei_btn tuwen_btn",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go_chat(i.lawyerid)}}},[a("v-uni-text",[i._v("立即咨询")])],1):i._e(),0==i.lvshi.phoneprice?a("v-uni-view",{staticClass:"lei_btn tuwen_btn"},[a("v-uni-text",[i._v("未开启")])],1):i._e()],1)],1),a("v-uni-view",{staticClass:"ls_jianjie hei_24"},[a("v-uni-view",{staticClass:"ls_jianjie_title hei_28_bold"},[i._v("个人资料")]),i._v(i._s(i.lvshi.miaoshu))],1),""!=i.ls_xinxi?a("v-uni-view",{staticClass:"lianxi"},[a("v-uni-view",{staticClass:" xixin_title hei_28_bold"},[i._v("联系方式")]),a("v-uni-view",{staticClass:"jiben_xixin_list hei_26"},[i._v("联系电话："),a("v-uni-view",{staticClass:"lianxi_right hui_26"},[i._v(i._s(i.ls_xinxi.lawyer.mobile))])],1),a("v-uni-view",{staticClass:"jiben_xixin_list hei_26"},[i._v("微    信："),a("v-uni-view",{staticClass:"lianxi_right hui_26"},[i._v(i._s(i.ls_xinxi.lawyer.weixin))])],1),a("v-uni-view",{staticClass:"jiben_xixin_list hei_26"},[i._v("邮    箱："),a("v-uni-view",{staticClass:"lianxi_right hui_26"},[i._v(i._s(i.ls_xinxi.lawyer.email))])],1),a("v-uni-view",{staticClass:"jiben_xixin_list hei_26"},[i._v("联系地址："),a("v-uni-view",{staticClass:"lianxi_right hui_26"},[i._v(i._s(i.ls_xinxi.lawyer.address))])],1)],1):i._e(),""!=i.ls_xinxi?a("v-uni-view",{staticClass:"jiben_xixin"},[a("v-uni-view",{staticClass:" xixin_title hei_28_bold"},[i._v("基本信息")]),a("v-uni-view",{staticClass:"jiben_xixin_list hei_26"},[i._v("执业律所"),a("v-uni-view",{staticClass:"jiben_xixin_list_right hui_26"},[i._v(i._s(i.ls_xinxi.lawyerauth.lvsuo))])],1),a("v-uni-view",{staticClass:"jiben_xixin_list hei_26"},[i._v("职    务"),a("v-uni-view",{staticClass:"jiben_xixin_list_right hui_26"},[i._v(i._s(i.ls_xinxi.lawyerauth.zhiwu))])],1),a("v-uni-view",{staticClass:"jiben_xixin_list hei_26"},[i._v("执业证号"),a("v-uni-view",{staticClass:"jiben_xixin_list_right hui_26"},[i._v(i._s(i.ls_xinxi.lawyerauth.zhiye))])],1),a("v-uni-view",{staticClass:"jiben_xixin_list hei_26"},[i._v("执业年份"),a("v-uni-view",{staticClass:"jiben_xixin_list_right hui_26"},[i._v(i._s(i.ls_xinxi.lawyerauth.zhiyenianfen)+"年")])],1)],1):i._e(),a("v-uni-view",{staticClass:" ls_jilu"},[a("v-uni-text",{staticClass:"hei_28_bold"},[i._v("律师服务记录")]),a("v-uni-navigator",{staticClass:"qian_28",attrs:{url:"./ls_zhuye_huifu?lawyerid="+i.lvshi.userid}},[i._v("更多>>")])],1),a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasRing",id:"canvasRing"},on:{touchstart:function(t){arguments[0]=t=i.$handleEvent(t),i.touchRing.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"wenda_list"},i._l(i.huifu_list,(function(t){return a("v-uni-view",{staticClass:"wenda",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.go_tiwen_xq(t.consultid)}}},[a("v-uni-view",{staticClass:"wenda_wen hei_24"},[a("v-uni-image",{attrs:{src:e("3b05").replace(/^\./,""),mode:""}}),i._v("用户提问："),a("v-uni-view",{staticClass:"wenda_body"},[i._v(i._s(t.information))])],1),a("v-uni-view",{staticClass:"wenda_da qian_24"},[a("v-uni-image",{attrs:{src:e("db29").replace(/^\./,""),mode:""}}),i._v("我的回复："),a("v-uni-view",{staticClass:"wenda_body"},[i._v(i._s(t.crinformation))])],1)],1)})),1),a("v-uni-view",{staticClass:"pingjia"},[a("v-uni-view",{staticClass:"pingjia_title qian_26"},[a("v-uni-text",{staticClass:"hei_28_bold"},[i._v("服务点评")]),i._v("(共"+i._s(i.pingjiatype.num)+"条评价)")],1),a("v-uni-view",{staticClass:"ping_tongji"},[""!=i.lvshi?a("v-uni-view",{staticClass:"ping_tongji_left"},[a("v-uni-text",{staticStyle:{"font-size":"40rpx","font-weight":"bold","margin-right":"16rpx"}},[i._v(i._s(i.lvshi.pingfen))]),i._l(i.quzheng(i.lvshi.pingfen),(function(i){return a("v-uni-image",{attrs:{src:e("4492").replace(/^\./,""),mode:""}})})),i._l(5-i.quzheng(i.lvshi.pingfen),(function(i){return a("v-uni-image",{attrs:{src:e("d914").replace(/^\./,""),mode:""}})}))],2):i._e(),a("v-uni-view",{staticClass:"dianping qian_26",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go_dianping()}}},[i._v("我要点评")])],1),i._l(i.pingjia_list,(function(t){return a("v-uni-view",{staticClass:"ping_list"},[a("v-uni-image",{staticClass:"ping_tx",attrs:{src:e("31f5").replace(/^\./,""),mode:""}}),a("v-uni-view",{staticClass:"ping_list_right"},[a("v-uni-view",{staticClass:"hei_26"},[i._v(i._s(t.nickname))]),a("v-uni-view",{staticClass:"qian_22 ping_dizhi"}),a("v-uni-view",{staticClass:"xing_arry"},[i._l(t.pingfen,(function(i){return a("v-uni-image",{attrs:{src:e("4492").replace(/^\./,""),mode:""}})})),i._l(5-t.pingfen,(function(i){return a("v-uni-image",{attrs:{src:e("d914").replace(/^\./,""),mode:""}})}))],2),a("v-uni-view",{staticClass:"biaoqian hui_22"},i._l(i.shuzu(i.decodeUnicode(t.yinxiang)),(function(t){return a("v-uni-text",[i._v(i._s(t))])})),1),a("v-uni-view",{staticClass:"ping_txt hei_26"},[i._v(i._s(t.pingjia))]),a("v-uni-view",{staticClass:"qian_26 ping_time"},[i._v(i._s(i._f("timeStamp")(t.addtime)))]),a("v-uni-view",{staticClass:"dianzan"},[a("v-uni-image",{attrs:{src:e("fbcf").replace(/^\./,""),mode:""}})],1)],1)],1)})),a("v-uni-view",{staticClass:"ping_more hei_26"},[i._v("查看全部评价>")])],2),a("v-uni-view",{staticClass:"zhanwei2",staticStyle:{height:"120rpx"}}),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"bottom_fenxiang"},[a("v-uni-image",{attrs:{src:e("a407").replace(/^\./,""),mode:""}}),a("v-uni-view",{staticClass:"hui_26"},[i._v("分享")])],1),a("v-uni-view",{staticClass:"bottom_pingjia",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go_dianping()}}},[a("v-uni-image",{attrs:{src:e("40aa").replace(/^\./,""),mode:""}}),a("v-uni-view",{staticClass:"hui_26"},[i._v("评价")])],1),a("v-uni-view",{staticClass:"dianhua lv_26",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go_chat(i.lvshi.userid)}}},[a("v-uni-image",{attrs:{src:e("7bd2").replace(/^\./,""),mode:""}}),i._v("电话咨询")],1),a("v-uni-view",{staticClass:"zaixian bai_26",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go_chat(i.lawyerid)}}},[a("v-uni-image",{attrs:{src:e("b4cd").replace(/^\./,""),mode:""}}),i._v("在线咨询")],1)],1)],1)],1)],1)},s=[]}}]);