(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-app_down"],{"08a0":function(t,e,n){"use strict";n.r(e);var i=n("dc3c"),o=n("0ed7");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("8eb6");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"6ceab49e",null,!1,i["a"],r);e["default"]=l.exports},"0ed7":function(t,e,n){"use strict";n.r(e);var i=n("1a23"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"1a23":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("48dc"));var o={onShow:function(){var t=this;this.$http.post({url:"/mapi/index/banben"}).then((function(e){t.down=e.data.banben}))},data:function(){return{yaoqing:"",down:""}},created:function(){},onLoad:function(t){this.yaoqing=t.lianjie},methods:{navigateBack:function(){uni.navigateBack()},copy:function(){this.$copyText(this.yaoqing).then((function(t){uni.showToast({title:"复制成功"})}))},down_ios:function(){window.location.href=this.down.iosurl},down_anzhuo:function(){window.location.href=this.down.androidurl}}};e.default=o},"24e8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAApCAYAAAAxmNlDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEM4NTkxRUUxMUI5MTFFQjgzNThBRUJCRTUwNkQyNkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEM4NTkxRUYxMUI5MTFFQjgzNThBRUJCRTUwNkQyNkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Qzg1OTFFQzExQjkxMUVCODM1OEFFQkJFNTA2RDI2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Qzg1OTFFRDExQjkxMUVCODM1OEFFQkJFNTA2RDI2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzlhfoAAANBSURBVHjaYvn//z8DtcCKFSvy3r17J56QkNDOQi1D+/r6+pctW1YAYt+6dUufkRounjhxYvfixYtLkMWYKDV05cqVueiG5uXllTOAXEwubmlpmWVsbPwfGW/dujUWJEe2iydNmtS5fv36VGSxuLi4Li8vr8VgDjkuXbVqVRa6S4GR14ushmRD29rapqMbCrIIXR1Jhk6dOrUV3VCgWAs2tUQbunDhwlJ0Q6dPn96ESz1RhnZ2dk5BN3TBggXl+PQQ4/0WdEPnzp1bRUgfXsmZM2c2kOpSggZjcykw63YRGydYBSdPntyObujSpUsLSElBGAITJkzoRjcUWB7kkJreUbL0vHnzqtELlODg4BlhYWFTSM7z+MIUlHbJLaDARHt7+zR0Q1evXp1JScnHrKKiUgwKAmRfgLyempraREk5zfzo0aNj6IaWlZXlUloBMGlqap5FFrhw4YLNw4cP1Sk1mPHFixeyISEh179//84NE2RjY/u5a9cucR4eno9ku1hcXPwxMPEbSkhIPIIJ/vr1iz0pKenYmzdvJMl2MayW/v37N1tERMQl5GDg5OT8OmvWLHv04CLJYBAAuTA8PPzyx48fhZGC5ceePXvEuLi4PpMUFMgcERGR58uXLzcQEhJ6iRQsHJGRkRc+ffokSLbBICAmJvYEWDboIof506dPlYDJ8OrNmzcNyQoKZABsg4nFxMSce/XqlTRMDBQcmzZtUhIQEHhDsothABgcr4BtMQNQqoGJffv2jRcYLBdBDT+yDQYBkMsWLVpkBgoemNjr16+lgKnn4uPHj1XICgpk8PnzZwFgK+c0smG8vLwfgM1WPWQfkWwwNBh4gC69/OzZMwWYGB8f37slS5YYS0lJPSDbYBAAGRoVFXXhy5cv/EiGvwe24VT5+fnfkt2MBbls3bp1asCi9jJMDJS+gUnxCrCUVCPbxTDw588fVj8/v3vApCgDE+Pg4PgGLHOM5OXlb5JtMAiAIhJUtvz8+ZMTOVh2794txszM/Ifs9rGsrOwdUKrQ0NA4hxwsIMsePHigQZU+iJub2wvkTAOylOI+CAgAm12WoHSNVLYoMlKrn/f8+XP5/v7+PlBNBCx6JwMEGACjHDNQVGaWVgAAAABJRU5ErkJggg=="},"391a":function(t,e,n){var i=n("b395");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("eeb3adc8",i,!0,{sourceMap:!1,shadowMode:!1})},"48dc":function(t,e,n){n("a4d3"),n("e01a"),n("d28b"),n("944a"),n("4160"),n("d81d"),n("fb6a"),n("0c47"),n("23dc"),n("3410"),n("131a"),n("d3b7"),n("25f0"),n("3ca3"),n("159b"),n("ddb0"),function(e,n){t.exports=n()}(0,(function(){return n={},t.m=e=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function o(){i.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var a=0,r=i.length;a<r;a++)i[a].fn!==e&&i[a].fn._!==e&&o.push(i[a]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var i=n(3),o=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return f=e,h=n,(d=t).addEventListener(f,h),{destroy:function(){d.removeEventListener(f,h)}};if(i.nodeList(t))return l=t,s=e,u=n,Array.prototype.forEach.call(l,(function(t){t.addEventListener(s,u)})),{destroy:function(){Array.prototype.forEach.call(l,(function(t){t.removeEventListener(s,u)}))}};if(i.string(t))return a=t,r=e,c=n,o(document.body,a,r,c);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var a,r,c,l,s,u,d,f,h}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var i=n(5);function o(t,e,n,o,a){var r=function(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,r,a),{destroy:function(){t.removeEventListener(n,r,a)}}}t.exports=function(t,e,n,i,a){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,i,a)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":a(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),s=n(1),u=n.n(s),d=n(2),f=n.n(d),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=function(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),t};function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var y=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,u.a),b(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=f()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return g("action",t)}},{key:"defaultTarget",value:function(t){var e=g("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return g("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,i=!!document.queryCommandSupported;return n.forEach((function(t){i=i&&!!document.queryCommandSupported(t)})),i}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function g(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=y}],t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(t){return e[t]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="",t(t.s=6).default;function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e,n}))},"583a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAgCAYAAADjaQM7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTM2OEYxMUYxODJEMTFFQkFCQzY5QzNFMDVCOUNCQkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTM2OEYxMjAxODJEMTFFQkFCQzY5QzNFMDVCOUNCQkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMzY4RjExRDE4MkQxMUVCQUJDNjlDM0UwNUI5Q0JCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMzY4RjExRTE4MkQxMUVCQUJDNjlDM0UwNUI5Q0JCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmEBDpsAAAPQSURBVHjatJZZTBNRFIbpdKEt2BYoSwoF2UGigi2CQhS3qIlGjTFRAwGJe0wkUUMU48aDQR+QB5cHTUwk4ooJBBGCCyKBgBRZS1nL0kJLV2g73aZ1bk1JKS0EGM/bvXPufMm55/z3x9Gqb3msNsKpvpFJdBY3lMJYS4GIlMfCpuIZs17tnEdYLSibzTlzOTztWiTVLxqsq6WCSqPFbHCVuyrYo4SDz06xuecc9xoUI98NFsQlDFop6OLaLXnOIBA/5MN1Vg+rFTMYKNntmN33nfdLRhofCjTTfHfnlg2DcDgoKyQplwwRyI77vxTC+gdD9YVmq8Xs7uyy74yEw5O2+UXstK+1iFHzQdxVdpVfdcloQYyLnXUJw+MgvB+RyiRBeE+w1iEmrcoMKy1Wq0VvMespeCK1Z1bSNaiVC95Pdr5uVU000whkOtjXIyZYbtLJQK7zf3HOcxbr7R+fGZyUeyho3dFgMp0NDvVppD1fZYM1n6WCigm9ehydpzClCVawyfSw/QGxB1N9QtMiqL5RVDzJa0gnH6ic4pdXSHrL29SiFrewHDb37L2YPUV0IpnhrhR8FDypnxVx6MGbF8sDUdBXc+X5WMsTUA1bxTwzt9s+5EWk5xfF7y8h4+dfvHP4k7wCgGIslQdiFzNqL4yY4SblaMNcNybSWJyb0TsLPTCOmun+qgGtTDCvQa5H77hDxOGJWIJqpwc+n+CVHUKsFmRubLiMkJR0n7DtWILACNztr7vhCLLBMvwidnsTPNdgCUNVpBd08AJBAM8C1nfVq5F0u1QfXyLVF2sYmEFUiReIMUTAQUSsYUA/XSk/hAqnCWtYgnfQBldyBalMsApr2CY6KxnI1wKYSD8zjjUMFWRKflTGAnMDdcyIeTCq1FgDj7M2ZmWHcE7Pe00UxzjiA4HxRwI8vQOxBqLauM+EDnizaqzx39N1Mt0IVGQ9LSgRaxh4F3cwI/egHU/o18r6bEL8cbLrjcZsmPX4TyE1aCXoA6yzwepkg194anHr/wC1q8W/X4l4L4BpnTM8xSMNRUt5iJXE09HmEnsDzsG+yYZqX4vaX2IJqpTwy9+KO0pdWrkCQe1VZ9+w0hChXuVG35crbn0jaJILXZ9yJAbN1GpheT2V58dglXBed9o9iD3kRp2sSTX2K5URmsYkefk7fmtUjP58J+4s/TjV/bZFNd6kQYyzMV7MOMccYAPy+dWXQQmXtHL2CKP4hB8IjDucwgjdOgorhfXy4a9/ZibbZEbttIMsUVGXlZxEY3GB0+rVSLt5alGrUKccdvXPvwIMAExOs11KcnHsAAAAAElFTkSuQmCC"},"8eb6":function(t,e,n){"use strict";var i=n("391a"),o=n.n(i);o.a},b395:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".head[data-v-6ceab49e]{border-bottom:%?2?% solid #ade6d3;background-color:#ade6d3}.head_right uni-image[data-v-6ceab49e]{width:%?50?%;height:%?10?%}.zi_body[data-v-6ceab49e]{padding-top:%?102?%}\n.app_top[data-v-6ceab49e]{width:100%;height:%?720?%}.app_bottom[data-v-6ceab49e]{text-align:center}.yaoqingma[data-v-6ceab49e]{width:%?419?%;height:%?68?%;background-color:#fff;border-radius:%?34?%;border:solid %?1?% #535353;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?6?% 0 %?32?%;box-sizing:border-box;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?47?% auto %?15?%}.copy[data-v-6ceab49e]{width:%?109?%;height:%?58?%;background-color:#0eb77e;border-radius:%?29?%;line-height:%?58?%}.xiazai[data-v-6ceab49e]{padding:%?0?% %?30?% %?35?%;margin-top:%?84?%}.xiazai uni-button[data-v-6ceab49e]{height:%?80?%;background-color:#0eb77e;border-radius:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:%?40?%}.tishi[data-v-6ceab49e]{text-align:left;margin-bottom:%?40?%;line-height:%?40?%}",""]),t.exports=e},cde5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkQ2RkFEQkIxODJDMTFFQjk1ODNBNThCMjA1RDM3MDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkQ2RkFEQkMxODJDMTFFQjk1ODNBNThCMjA1RDM3MDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRDZGQURCOTE4MkMxMUVCOTU4M0E1OEIyMDVEMzcwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRDZGQURCQTE4MkMxMUVCOTU4M0E1OEIyMDVEMzcwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqP4hU4AAANrSURBVHjaYuHbXsdACGQpWBZMf3Bi4n+G//8ZiADsTCzsUdIGCfMfn5lJjHomYhSteHpxcYCEdigDkSBYUidixbOLi4hVz0KMone/v7399e/PTxVuYTUvMQ0/IPaX5xRQkGDnlQLJv/z15cW9r+/ubHt1Y+P+t3f3PPj2/t73v7+/U9URoOANkdSNDJLUCccmLwl0DAhbC8nbgfjbXt3cdOvrmxtvfn19TZXoEGTlFNphnnQYlwOwAS8xdb/TtjnXjfilTSl2BMgBW80SD4AMq7u5qyz2/MqQb39/fcWl/tH3Dw8Czyxyn/Po1DQhVi7hLWYJ+8wEZC0pcsQUnYC52rziuiD2z39/fx59/+Dgt7+/v+FSD8o9jAyMjDA+NzMbzzz9kOWsjMys+OxhxJVFzQVkrXZZpBxloAKovLGjcNqD4xNIDolcRetiBiqBKCmDeJKjg42Jmc1FRMWTWo7Q5ZMwEGHjFsWbRQVYOQWB+V7x0qcX50HxysXMxh1ydokXAxUBMyMjM4ytyi2iDkpbT398fAwWKLm6Nef3v7+//wPB4+8fHirt7RQNOr3I4z+VQe7ljSn82+sZj7x9cBAmtuDxmdmgNMmUrWBZyMLIBA4RGQ5+OVCRy8TIyMRAbQDMNsYC0mawAg0E4mWMU3hY2HmZBFg5BJHV8rNwCDDQCAiwoNoFAsKsXCJMDIMAjDpi1BGD0xH/GP7/QxZA51MTYDMbJMZ09sPTU8iC5z4+PU0rR1z+9OLC7/9/f8P4L39+eQEqulnyr25OT5c3z9XgEdXa9OLa2n1v7u5yE1X1ooUjXv/6+ir0zFLvBFnj1E9/fn6a9ejklH////9jAbkE1GpCCaL/1I+S/1AzgQ3h3SBMMGFe+fzyInKwUQOc/Yga7QRb2y9+fn4ednapD6iCAbYDxID1i4AOr4Q+sprzH5+d+Qptb4oC1ajziGoiy594/+jon////nz88+PDymcXl1z9/PIyyc07ZGAjpOAAbPDuRxazPDJV99qXV1dAbFB3YK5+yDJkeYW9HcLvf39/N1pYDU9HgDo1yPy////9ffrz0xNc8p/+/PgISpBEtz/ZY+wJKgIZCOzgftPgFdMGJra3Tbf2VgNT/xGY/NMfn56Ammlq3CIaD76/v1d9Y2fx9S+vrhLrCIAAAwA29tH7OlEgyQAAAABJRU5ErkJggg=="},dc39:function(t,e,n){t.exports=n.p+"static/img/app.99f7227e.png"},dc3c:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"head_back"},[i("v-uni-image",{attrs:{src:n("24e8"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateBack()}}})],1),i("v-uni-view",{staticClass:"head_center hei_38_bold"}),i("v-uni-view",{staticClass:" head_right"})],1),i("v-uni-view",{staticClass:"zi_body "},[i("v-uni-image",{staticClass:"app_top",attrs:{src:n("dc39"),mode:""}}),i("v-uni-view",{staticClass:"app_bottom"},[t.yaoqing?i("v-uni-view",{staticClass:"yaoqingma hei_24"},[t._v(t._s(t.yaoqing)),i("v-uni-view",{staticClass:"copy bai_24 ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy.apply(void 0,arguments)}}},[t._v("复制")])],1):t._e(),t.yaoqing?i("v-uni-view",{staticClass:"hei_26"},[t._v("请先"),i("v-uni-text",{staticClass:"hong_26"},[t._v("复制邀请码")]),t._v(",该邀请码用于"),i("v-uni-text",{staticClass:"hong_26"},[t._v("激活")]),t._v("软件使用资格")],1):t._e(),i("v-uni-view",{staticClass:"xiazai "},[i("v-uni-button",{staticClass:"bai_26",attrs:{type:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.down_ios.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"27rpx",height:"32rpx"},attrs:{src:n("583a"),mode:""}}),t._v("iphone版本下载")],1),i("v-uni-button",{staticClass:"bai_26",attrs:{type:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.down_anzhuo.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"33rpx",height:"32rpx"},attrs:{src:n("cde5"),mode:""}}),t._v("Android版本下载")],1),i("v-uni-view",{staticClass:"tishi qian_26"},[i("v-uni-text",{staticClass:"hong_26"},[t._v("温馨提示：")]),t._v("如果点击按钮无法下载，可点击右上角的【...】 选择在浏览器中打开下载APP")],1)],1)],1)],1)],1)},a=[]}}]);