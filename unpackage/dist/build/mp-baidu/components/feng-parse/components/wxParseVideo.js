(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/feng-parse/components/wxParseVideo"],{"02ba":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"77b7":function(t,n,e){},a019:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"wxParseVideo",props:{node:{}},data:function(){return{playState:!0,videoStyle:"width: 100%;"}},methods:{play:function(){console.log("点击了video 播放"),this.playState=!this.playState}},mounted:function(){var n=this;t.$on("slideMenuShow",(function(t){console.log("捕获事件："+t),"show"==t&&n.playState&&(n.playState=!1)}))}};n.default=e}).call(this,e("5486")["default"])},b592:function(t,n,e){"use strict";e.r(n);var a=e("02ba"),o=e("f1d6");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("da3f");var r,i=e("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=c.exports},da3f:function(t,n,e){"use strict";var a=e("77b7"),o=e.n(a);o.a},f1d6:function(t,n,e){"use strict";e.r(n);var a=e("a019"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/feng-parse/components/wxParseVideo-create-component',
    {
        'components/feng-parse/components/wxParseVideo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("b592"))
        })
    },
    [['components/feng-parse/components/wxParseVideo-create-component']]
]);
