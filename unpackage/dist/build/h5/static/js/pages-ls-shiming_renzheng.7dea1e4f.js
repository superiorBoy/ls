(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ls-shiming_renzheng"],{"03f3":function(i,e,t){"use strict";t.r(e);var a=t("625a"),n=t.n(a);for(var s in a)"default"!==s&&function(i){t.d(e,i,(function(){return a[i]}))}(s);e["default"]=n.a},"04e6":function(i,e,t){"use strict";var a;t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return s})),t.d(e,"a",(function(){return a}));var n=function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"head"},[a("v-uni-view",{staticClass:"head_back"},[a("v-uni-image",{attrs:{src:t("24e8"),mode:""},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.navigateBack()}}})],1),a("v-uni-view",{staticClass:"head_center hei_38_bold"},[i._v("实名认证")]),a("v-uni-view",{staticClass:" head_right hong_30"})],1),a("v-uni-view",{staticClass:"zi_body shiming_body"},[a("v-uni-view",{staticClass:"shiming_list hei_28"},[a("v-uni-view",{staticClass:"shiming_list_left"},[i._v("姓名")]),a("v-uni-input",{staticClass:"qian_28",attrs:{type:"text",value:"",placeholder:"请填写姓名",disabled:i.yi_zhiye},model:{value:i.name,callback:function(e){i.name=e},expression:"name"}})],1),a("v-uni-view",{staticClass:"shiming_list hei_28"},[a("v-uni-view",{staticClass:"shiming_list_left"},[i._v("性别")]),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"1",checked:1==i.danxuan},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.radio(1)}}}),a("v-uni-text",{staticClass:"nan"},[i._v("男")]),a("v-uni-radio",{attrs:{value:"2",checked:2==i.danxuan},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.radio(2)}}}),a("v-uni-text",[i._v("女")])],1)],1),a("v-uni-view",{staticClass:"shiming_list hei_28 zhiyezhao"},[a("v-uni-view",{staticClass:"shiming_list_left"},[i._v("律师头像")]),a("v-uni-view",{staticClass:"shiming_list_right",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.up_zhiye.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"tx",attrs:{src:i.zhiye_zhao,mode:""}}),a("v-uni-image",{staticClass:"genghuan",attrs:{src:t("b296"),mode:""}})],1)],1),a("v-uni-view",{staticClass:"shiming_list hei_28"},[a("v-uni-view",{staticClass:"shiming_list_left"},[i._v("身份证号")]),a("v-uni-input",{staticClass:"qian_28",attrs:{type:"text",value:"",placeholder:"请填写身份证号码"},model:{value:i.shenfenhao,callback:function(e){i.shenfenhao=e},expression:"shenfenhao"}})],1),a("v-uni-view",{staticClass:"up"},[a("v-uni-view",{staticClass:" up_zheng"},[a("v-uni-view",{class:["up_box",""==i.zheng_img?"up_zheng_top":""],on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.up_zheng.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:i.zheng_img,mode:""}})],1),a("v-uni-text",{staticClass:"hui_26"},[i._v("上传身份证正面")])],1),a("v-uni-view",{staticClass:" up_fan"},[a("v-uni-view",{class:["up_box",""==i.fan_img?"up_fan_top":""],on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.up_fan.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:i.fan_img,mode:""}})],1),a("v-uni-text",{staticClass:"hui_26"},[i._v("上传身份证反面")])],1)],1),a("v-uni-view",{staticClass:"renzheng_btn"},[a("v-uni-button",{class:["tijao bai_30",""==i.name||""==i.shenfenhao||""==i.zheng_img||""==i.fan_img?"sty_dis":""],attrs:{type:"",disabled:""==i.name||""==i.shenfenhao||""==i.zheng_img||""==i.fan_img},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.tijiao.apply(void 0,arguments)}}},[i._v(i._s(i.tijiao_txt))])],1)],1)],1)},s=[]},"12ba":function(i,e,t){"use strict";t.r(e);var a=t("04e6"),n=t("03f3");for(var s in n)"default"!==s&&function(i){t.d(e,i,(function(){return n[i]}))}(s);t("e25b");var o,u=t("f0c5"),l=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"7ed597f9",null,!1,a["a"],o);e["default"]=l.exports},"24e8":function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAApCAYAAAAxmNlDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEM4NTkxRUUxMUI5MTFFQjgzNThBRUJCRTUwNkQyNkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEM4NTkxRUYxMUI5MTFFQjgzNThBRUJCRTUwNkQyNkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Qzg1OTFFQzExQjkxMUVCODM1OEFFQkJFNTA2RDI2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Qzg1OTFFRDExQjkxMUVCODM1OEFFQkJFNTA2RDI2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzlhfoAAANBSURBVHjaYvn//z8DtcCKFSvy3r17J56QkNDOQi1D+/r6+pctW1YAYt+6dUufkRounjhxYvfixYtLkMWYKDV05cqVueiG5uXllTOAXEwubmlpmWVsbPwfGW/dujUWJEe2iydNmtS5fv36VGSxuLi4Li8vr8VgDjkuXbVqVRa6S4GR14ushmRD29rapqMbCrIIXR1Jhk6dOrUV3VCgWAs2tUQbunDhwlJ0Q6dPn96ESz1RhnZ2dk5BN3TBggXl+PQQ4/0WdEPnzp1bRUgfXsmZM2c2kOpSggZjcykw63YRGydYBSdPntyObujSpUsLSElBGAITJkzoRjcUWB7kkJreUbL0vHnzqtELlODg4BlhYWFTSM7z+MIUlHbJLaDARHt7+zR0Q1evXp1JScnHrKKiUgwKAmRfgLyempraREk5zfzo0aNj6IaWlZXlUloBMGlqap5FFrhw4YLNw4cP1Sk1mPHFixeyISEh179//84NE2RjY/u5a9cucR4eno9ku1hcXPwxMPEbSkhIPIIJ/vr1iz0pKenYmzdvJMl2MayW/v37N1tERMQl5GDg5OT8OmvWLHv04CLJYBAAuTA8PPzyx48fhZGC5ceePXvEuLi4PpMUFMgcERGR58uXLzcQEhJ6iRQsHJGRkRc+ffokSLbBICAmJvYEWDboIof506dPlYDJ8OrNmzcNyQoKZABsg4nFxMSce/XqlTRMDBQcmzZtUhIQEHhDsothABgcr4BtMQNQqoGJffv2jRcYLBdBDT+yDQYBkMsWLVpkBgoemNjr16+lgKnn4uPHj1XICgpk8PnzZwFgK+c0smG8vLwfgM1WPWQfkWwwNBh4gC69/OzZMwWYGB8f37slS5YYS0lJPSDbYBAAGRoVFXXhy5cv/EiGvwe24VT5+fnfkt2MBbls3bp1asCi9jJMDJS+gUnxCrCUVCPbxTDw588fVj8/v3vApCgDE+Pg4PgGLHOM5OXlb5JtMAiAIhJUtvz8+ZMTOVh2794txszM/Ifs9rGsrOwdUKrQ0NA4hxwsIMsePHigQZU+iJub2wvkTAOylOI+CAgAm12WoHSNVLYoMlKrn/f8+XP5/v7+PlBNBCx6JwMEGACjHDNQVGaWVgAAAABJRU5ErkJggg=="},"492c":function(i,e,t){i.exports=t.p+"static/img/shenfen_fan.4650e593.png"},"625a":function(i,e,t){"use strict";t("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{name:"",shenfenhao:"",zheng_img:"",fan_img:"",zhiye_zhao:"",danxuan:!1,dis:!0,img_url:uni.getStorageSync("img_url"),tijiao_txt:"确认提交",yi_zhiye:!1}},created:function(){},onLoad:function(i){var e=this;this.$http.post({url:"/mlawyerapi/lawyer/auth",data:{type:1}}).then((function(i){i.data.lawyerauth&&(console.log(i.data.lawyerauth),e.name=i.data.lawyerauth.nickname,e.danxuan=i.data.lawyerauth.sexid,e.zhiye_zhao=e.img_url+i.data.lawyerauth.photourl,e.shenfenhao=i.data.lawyerauth.idcard,e.zheng_img=e.img_url+i.data.lawyerauth.idcardfront,e.fan_img=e.img_url+i.data.lawyerauth.idcardback,1==i.data.lawyerauth.isreal?e.tijiao_txt="提交修改":4==i.data.lawyerauth.isreal?e.tijiao_txt="认证中":3==i.data.lawyerauth.isreal&&(e.tijiao_txt="失败："+i.data.lawyerauth.realreason,e.zhiye_zhao="",e.zheng_img="",e.fan_img=""))})),this.$http.post({url:"/mlawyerapi/user/getlawyer"}).then((function(i){1==i.data.user.iszhiye&&(e.yi_zhiye=!0)}))},methods:{navigateBack:function(){uni.redirectTo({url:"my"})},up_zhiye:function(){var i=this;uni.chooseImage({success:function(e){console.log(e),i.zhiye_zhao=e.tempFilePaths[0],uni.request({url:e.tempFilePaths[0],method:"GET",responseType:"arraybuffer",success:function(e){var t=wx.arrayBufferToBase64(e.data);t="data:image/jpeg;base64,"+t,i.zhiye_zhao=t}})}})},getLocalFilePath:function(i){if(0===i.indexOf("_www")||0===i.indexOf("_doc")||0===i.indexOf("_documents")||0===i.indexOf("_downloads"))return i;if(0===i.indexOf("file://"))return i;if(0===i.indexOf("/storage/emulated/0/"))return i;if(0===i.indexOf("/")){var e=plus.io.convertAbsoluteFileSystem(i);if(e!==i)return e;i=i.substr(1)}return"_www/"+i},up_zheng:function(){var i=this;uni.chooseImage({success:function(e){console.log(e),console.log(i.zhiye_zhao),uni.request({url:e.tempFilePaths[0],method:"GET",responseType:"arraybuffer",success:function(e){var t=wx.arrayBufferToBase64(e.data);t="data:image/jpeg;base64,"+t,i.zheng_img=t}})}})},up_fan:function(){var i=this;uni.chooseImage({success:function(e){console.log(e),console.log(i.zhiye_zhao),uni.request({url:e.tempFilePaths[0],method:"GET",responseType:"arraybuffer",success:function(e){var t=wx.arrayBufferToBase64(e.data);t="data:image/jpeg;base64,"+t,i.fan_img=t}})}})},urlTobase64:function(i){uni.request({url:i,method:"GET",responseType:"arraybuffer",success:function(i){var e=wx.arrayBufferToBase64(i.data);e="data:image/jpeg;base64,"+e}})},radio:function(i){this.danxuan=i},tijiao:function(){var i=this;if(""==this.name)return uni.showToast({title:"请输入姓名",duration:2e3,icon:"none"}),!1;if(!this.danxuan)return uni.showToast({title:"请选择性别",duration:2e3,icon:"none"}),!1;if(""==this.shenfenhao)return uni.showToast({title:"请输入身份证号",duration:2e3,icon:"none"}),!1;if(""==this.zheng_img)return uni.showToast({title:"请上传身份证正面照",duration:2e3,icon:"none"}),!1;if(""==this.fan_img)return uni.showToast({title:"请上传身份证反面照",duration:2e3,icon:"none"}),!1;if("确认提交"==this.tijiao_txt)var e="/lawyer/lawyer/zx_shiming_rz";else{if("认证中"==this.tijiao_txt)return!1;if("提交修改"==this.tijiao_txt)e="/lawyer/lawyer/uprealname";else e="/lawyer/lawyer/zx_shiming_rz"}console.log(e),this.$http.post({url:e,data:{xingming:this.name,sex:this.danxuan,touxiang:this.zhiye_zhao,shenfennumber:this.shenfenhao,zhengmian:this.zheng_img,fanmian:this.fan_img}}).then((function(e){console.log(e),0==e.code&&(uni.showToast({title:"上传成功",duration:2e3}),"确认提交"==i.tijiao_txt&&setTimeout((function(){uni.navigateTo({url:"zhiye_renzheng"})}),1e3))})),console.log(this.name,"name"),console.log(this.danxuan,"danxuan"),console.log(this.zhiye_zhao,"执业照"),console.log(this.shenfenhao,"身份号"),console.log(this.zheng_img,"证"),console.log(this.fan_img,"反")}}};e.default=a},ab85:function(i,e,t){var a=t("f922");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=t("4f06").default;n("929454b4",a,!0,{sourceMap:!1,shadowMode:!1})},b296:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0JENjc4Q0ExMzczMTFFQjk0RUZENTIxNjZEMDc1OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0JENjc4Q0IxMzczMTFFQjk0RUZENTIxNjZEMDc1OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQkQ2NzhDODEzNzMxMUVCOTRFRkQ1MjE2NkQwNzU4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQkQ2NzhDOTEzNzMxMUVCOTRFRkQ1MjE2NkQwNzU4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkPJGwAAAAJdSURBVHjajJPta1JxFMf1kpKKbioqPsZSKXrhoDeOIJHRiygqLKIgCCtQFB9f9xeEID6Gor5IX0lBICJzFsRAIRBlhrI0TMMYBiZMnKJOO3fgi5nu3i+cH/dy7of7O+d8D3E2mxEcDsfLyWTy3WQyZel0OgGPEACFvV4v0mg0Prlcru1+v48PJBKJv202m4/NZl9stVoJt9u9NRgMsEH0YLFYFrvd/o7JZNKazeaOx+PZHA6H2CBoxuFwXgH8YQ1Ur9czPp/v6mg0wgRRnfB4vGcAp6BBnFqtlvH7/ZdXwcjC+4jP5z+Gmr/QaDTRwcFBOhAIiKDjmCCqY5FI9ADgrxQKRVYul9PBYJCzCCMrSjiSSCR3rFbrN4CvlUqlnXA4vDadTjFBVH83NjZugSlqZDL5erFYTEUiEeocRjDG9Ucmk22bzeZfAN/I5/OJaDRKRt1GRA8cklUqlT3oMh9qTajV6kcIAZ9+SKVSrVAoRJ/vFwqFh7hA8O8lp9P5FlxFgDGVDQbD5wtYULfbvQL+3T08PJSsr6/nodO3BQJB51yw3W5vApTudDo8Lpe7B7O9B8twhOZWgnCtLa/Xm4KVY4rF4l2LxaJhMBjH8/xSsFqtqqGDCdgQulwu/2g0Gp9SqdQzpv0P3N/fvxsKhd6Px2OKQqGI6XS6FyQS6WTxuzNgLpd7EovFouAOslKpDGi1WiOCIMsHjRoAjUwmo9Xr9RP4wywej78BmDjPLYvTI5vNPgdgikLJZPL1ecA8Tq8KNdyE4gkajcaqUqk8eEwx9yoZAvXTT5wWJPwTYAAlzD71S/R5igAAAABJRU5ErkJggg=="},d16b:function(i,e,t){i.exports=t.p+"static/img/shenfen_zheng.eb842b3e.png"},e25b:function(i,e,t){"use strict";var a=t("ab85"),n=t.n(a);n.a},f922:function(i,e,t){var a=t("24fb"),n=t("1de5"),s=t("d16b"),o=t("492c");e=a(!1);var u=n(s),l=n(o);e.push([i.i,".head[data-v-7ed597f9]{border-bottom:%?2?% solid #e8e8e8}.shiming_list[data-v-7ed597f9]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #e8e8e8;padding-left:%?30?%;padding-right:%?30?%}.shiming_list uni-input[data-v-7ed597f9]{width:%?500?%}.shiming_list_left[data-v-7ed597f9]{width:%?169?%}.zhiyezhao[data-v-7ed597f9]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?300?%}.up[data-v-7ed597f9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-top:%?20?% solid #f8f8f8;padding-top:%?30?%;padding-left:%?30?%;padding-right:%?30?%}.renzheng_btn[data-v-7ed597f9]{padding-left:%?30?%;padding-right:%?30?%;padding-bottom:%?50?%}.up_zheng[data-v-7ed597f9],\n\t.up_fan[data-v-7ed597f9]{text-align:center}.up_box[data-v-7ed597f9]{width:%?330?%;height:%?220?%;margin-bottom:%?15?%;-webkit-border-radius:%?3?%;border-radius:%?3?%;border:solid %?1?% #f4f4f4;background-color:#fff}.up_box uni-image[data-v-7ed597f9],\n\t.up_box uni-image[data-v-7ed597f9]{width:100%;height:100%}.up_zheng_top[data-v-7ed597f9]{background:url("+u+") no-repeat;background-size:100% 100%}.up_fan_top[data-v-7ed597f9]{background:url("+l+") no-repeat;background-size:100% 100%}.tijao[data-v-7ed597f9]{height:%?89?%;background-color:#f43a51;-webkit-border-radius:%?44?%;border-radius:%?44?%;margin-top:%?200?%;line-height:%?89?%}.nan[data-v-7ed597f9]{margin-right:%?55?%}.shiming_list_right[data-v-7ed597f9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tx[data-v-7ed597f9]{width:%?240?%;height:%?240?%;-webkit-border-radius:100%;border-radius:100%}.genghuan[data-v-7ed597f9]{width:%?14?%;height:%?24?%;margin-left:%?12?%}.sty_dis[data-v-7ed597f9]{color:#fff;border:none;background-color:#999}",""]),i.exports=e}}]);