(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-gonggao_xq"],{"0267":function(t,i,e){"use strict";var a=e("4ea4");e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("e3f1")),c={components:{uParse:n.default},data:function(){return{body:""}},created:function(){},onLoad:function(t){var i=this;this.$http.post({url:"/mapi/user/noticedetail",data:{noticeid:t.id}}).then((function(t){i.body=t.data.notice}))},methods:{navigateBack:function(){uni.navigateBack()},xq:function(){uni.navigateTo({url:"help_xq?id="+this.id1})}},filters:{timeStamp:function(t){if(null==t)return"null";var i=(t+"").length;while(i++<13)t+="0";t=Number(t);var e=new Date(t),a=e.getMonth()+1,n=e.getHours();n<10&&(n="0"+n);var c=e.getMinutes();c<10&&(c="0"+c);var u=e.getFullYear()+"-"+a+"-"+e.getDate()+" "+n+":"+c;return u}}};i.default=c},"24e8":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAApCAYAAAAxmNlDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEM4NTkxRUUxMUI5MTFFQjgzNThBRUJCRTUwNkQyNkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEM4NTkxRUYxMUI5MTFFQjgzNThBRUJCRTUwNkQyNkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Qzg1OTFFQzExQjkxMUVCODM1OEFFQkJFNTA2RDI2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Qzg1OTFFRDExQjkxMUVCODM1OEFFQkJFNTA2RDI2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzlhfoAAANBSURBVHjaYvn//z8DtcCKFSvy3r17J56QkNDOQi1D+/r6+pctW1YAYt+6dUufkRounjhxYvfixYtLkMWYKDV05cqVueiG5uXllTOAXEwubmlpmWVsbPwfGW/dujUWJEe2iydNmtS5fv36VGSxuLi4Li8vr8VgDjkuXbVqVRa6S4GR14ushmRD29rapqMbCrIIXR1Jhk6dOrUV3VCgWAs2tUQbunDhwlJ0Q6dPn96ESz1RhnZ2dk5BN3TBggXl+PQQ4/0WdEPnzp1bRUgfXsmZM2c2kOpSggZjcykw63YRGydYBSdPntyObujSpUsLSElBGAITJkzoRjcUWB7kkJreUbL0vHnzqtELlODg4BlhYWFTSM7z+MIUlHbJLaDARHt7+zR0Q1evXp1JScnHrKKiUgwKAmRfgLyempraREk5zfzo0aNj6IaWlZXlUloBMGlqap5FFrhw4YLNw4cP1Sk1mPHFixeyISEh179//84NE2RjY/u5a9cucR4eno9ku1hcXPwxMPEbSkhIPIIJ/vr1iz0pKenYmzdvJMl2MayW/v37N1tERMQl5GDg5OT8OmvWLHv04CLJYBAAuTA8PPzyx48fhZGC5ceePXvEuLi4PpMUFMgcERGR58uXLzcQEhJ6iRQsHJGRkRc+ffokSLbBICAmJvYEWDboIof506dPlYDJ8OrNmzcNyQoKZABsg4nFxMSce/XqlTRMDBQcmzZtUhIQEHhDsothABgcr4BtMQNQqoGJffv2jRcYLBdBDT+yDQYBkMsWLVpkBgoemNjr16+lgKnn4uPHj1XICgpk8PnzZwFgK+c0smG8vLwfgM1WPWQfkWwwNBh4gC69/OzZMwWYGB8f37slS5YYS0lJPSDbYBAAGRoVFXXhy5cv/EiGvwe24VT5+fnfkt2MBbls3bp1asCi9jJMDJS+gUnxCrCUVCPbxTDw588fVj8/v3vApCgDE+Pg4PgGLHOM5OXlb5JtMAiAIhJUtvz8+ZMTOVh2794txszM/Ifs9rGsrOwdUKrQ0NA4hxwsIMsePHigQZU+iJub2wvkTAOylOI+CAgAm12WoHSNVLYoMlKrn/f8+XP5/v7+PlBNBCx6JwMEGACjHDNQVGaWVgAAAABJRU5ErkJggg=="},"2e26":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".head[data-v-3349a3a0]{border-bottom:%?2?% solid #f7f7f7}.gg_xq_top[data-v-3349a3a0]{text-align:center;padding:%?30?% %?30?%}.xq_title[data-v-3349a3a0]{margin-bottom:%?10?%}.xq_body[data-v-3349a3a0]{padding:0 %?30?%;line-height:%?44?%}",""]),t.exports=i},a42e:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"head"},[a("v-uni-view",{staticClass:"head_back"},[a("v-uni-image",{attrs:{src:e("24e8").replace(/^\./,""),mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateBack()}}})],1),a("v-uni-view",{staticClass:"head_center hei_38_bold"},[t._v("网站公告")]),a("v-uni-view",{staticClass:" head_right hei_30_bold"})],1),a("v-uni-view",{staticClass:"zi_body "},[a("v-uni-view",{staticClass:"gg_xq_top"},[a("v-uni-view",{staticClass:"xq_title hei_30_bold"},[t._v(t._s(t.body.title))]),a("v-uni-view",{staticClass:"qian_24"},[t._v(t._s(t._f("timeStamp")(t.body.addtime)))])],1),a("v-uni-view",{staticClass:"xq_body hei_26"},[a("u-parse",{attrs:{content:t.body.information}})],1)],1)],1)},c=[]},a452:function(t,i,e){"use strict";e.r(i);var a=e("a42e"),n=e("c1e6");for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);e("d62c");var u,o=e("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"3349a3a0",null,!1,a["a"],u);i["default"]=l.exports},c1e6:function(t,i,e){"use strict";e.r(i);var a=e("0267"),n=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(i,t,(function(){return a[t]}))}(c);i["default"]=n.a},d4cc:function(t,i,e){var a=e("2e26");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("24b7b38a",a,!0,{sourceMap:!1,shadowMode:!1})},d62c:function(t,i,e){"use strict";var a=e("d4cc"),n=e.n(a);n.a}}]);