(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/feng-parse/parse"],{"33f1":function(t,e,n){"use strict";n.r(e);var i=n("b220"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},b220:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("f351"));function r(t){return t&&t.__esModule?t:{default:t}}var o=function(){n.e("components/feng-parse/components/wxParseTemplate0").then(function(){return resolve(n("8afc"))}.bind(null,n)).catch(n.oe)},a={name:"wxParse",props:{userSelect:{type:String,default:"element"},imgOptions:{type:[Object,Boolean],default:function(){return{loop:!1,indicator:"number",longPressActions:!1}}},loading:{type:Boolean,default:!1},className:{type:String,default:""},content:{type:String,default:""},noData:{type:String,default:""},startHandler:{type:Function,default:function(){return function(t){t.attr.class=null,t.attr.style=null}}},endHandler:{type:Function,default:function(){return function(t){t=t}}},charsHandler:{type:Function,default:function(){return function(t){t=t}}},imageProp:{type:Object,default:function(){return{mode:"aspectFit",padding:0,lazyLoad:!1,domain:""}}}},components:{wxParseTemplate:o},data:function(){return{nodes:{},imageUrls:[],wxParseWidth:{value:0}}},computed:{},mounted:function(){this.setHtml()},methods:{setHtml:function(){var t=this;this.getWidth().then((function(e){t.wxParseWidth.value=e}));var e=this.content,n=this.noData,r=this.imageProp,o=this.startHandler,a=this.endHandler,s=this.charsHandler,u=e||n,c={start:o,end:a,chars:s},l=(0,i.default)(u,c,r,this);this.imageUrls=l.imageUrls,this.nodes=[],l.nodes.forEach((function(e){setTimeout((function(){e.node&&t.nodes.push(e)}),0)}))},getWidth:function(){return new Promise((function(t,e){var n=swan.createSelectorQuery();n.select(".wxParse").boundingClientRect(),n.exec((function(e){var n=e[0];n&&t(n.width)}))}))},navigate:function(t,e,n){console.log(t,n),this.$emit("navigate",t,e)},preview:function(e,n){this.imageUrls.length&&"boolean"!==typeof this.imgOptions&&t.previewImage({current:e,urls:this.imageUrls,loop:this.imgOptions.loop,indicator:this.imgOptions.indicator,longPressActions:this.imgOptions.longPressActions}),this.$emit("preview",e,n)},removeImageUrl:function(t){var e=this.imageUrls;e.splice(e.indexOf(t),1)}},provide:function(){return{parseWidth:this.wxParseWidth,parseSelect:this.userSelect}},watch:{content:function(t){this.setHtml()}}};e.default=a}).call(this,n("5486")["default"])},c7c2:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement;t._self._c},o=[]},e3f1:function(t,e,n){"use strict";n.r(e);var i=n("c7c2"),r=n("33f1");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/feng-parse/parse-create-component',
    {
        'components/feng-parse/parse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("e3f1"))
        })
    },
    [['components/feng-parse/parse-create-component']]
]);
