(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/ls/chat"],{

/***/ 1104:
/*!***********************************************************!*\
  !*** E:/ceshi/lvshi/main.js?{"page":"pages%2Fls%2Fchat"} ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/ls/chat.vue */ 1105));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 1105:
/*!****************************************!*\
  !*** E:/ceshi/lvshi/pages/ls/chat.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_0f8d5a77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=0f8d5a77& */ 1106);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 1108);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=css& */ 1110);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_0f8d5a77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_0f8d5a77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chat_vue_vue_type_template_id_0f8d5a77___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/ls/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1106:
/*!***********************************************************************!*\
  !*** E:/ceshi/lvshi/pages/ls/chat.vue?vue&type=template&id=0f8d5a77& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_0f8d5a77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=0f8d5a77& */ 1107);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_0f8d5a77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_0f8d5a77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_0f8d5a77___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_0f8d5a77___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1107:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/ceshi/lvshi/pages/ls/chat.vue?vue&type=template&id=0f8d5a77& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    lFile: function() {
      return __webpack_require__.e(/*! import() | components/l-file/l-file */ "components/l-file/l-file").then(__webpack_require__.bind(null, /*! @/components/l-file/l-file.vue */ 1177))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var f0 =
    _vm.message != "" ? _vm._f("timeStamp")(_vm.message[0].addtime) : null

  var l0 = _vm.__map(_vm.message, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var f1 =
      index > 1 &&
      _vm.message[index].addtime - _vm.message[index - 1].addtime > 300
        ? _vm._f("timeStamp")(_vm.message[index].addtime)
        : null
    var m0 =
      item.userid_from != _vm.userid &&
      item.msgtype == 1 &&
      item.iswithdraw != 1
        ? _vm.replace_em(item.content)
        : null
    var m1 =
      item.userid_from != _vm.userid &&
      item.msgtype == 14 &&
      item.iswithdraw != 1
        ? _vm.wenjian(item.content)
        : null
    var m2 =
      item.userid_from == _vm.userid &&
      item.msgtype == 1 &&
      item.iswithdraw != 1 &&
      item.msgtype == 1
        ? _vm.replace_em(item.content)
        : null
    var m3 =
      item.userid_from == _vm.userid &&
      item.msgtype == 14 &&
      item.iswithdraw != 1
        ? _vm.wenjian(item.content)
        : null
    var f2 =
      item.msgtype == 16 && item.refund
        ? _vm._f("timeStamp")(item.refund.addtime)
        : null
    var f3 =
      item.msgtype == 17 && item.refund
        ? _vm._f("timeStamp")(item.refund.addtime)
        : null
    return {
      $orig: $orig,
      f1: f1,
      m0: m0,
      m1: m1,
      m2: m2,
      m3: m3,
      f2: f2,
      f3: f3
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        f0: f0,
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1108:
/*!*****************************************************************!*\
  !*** E:/ceshi/lvshi/pages/ls/chat.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 1109);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1109:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/ceshi/lvshi/pages/ls/chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 98));
































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































var _permission = _interopRequireDefault(__webpack_require__(/*! @/common/permission.js */ 101));var _methods;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var recorderManager = uni.getRecorderManager();var innerAudioContext = uni.createInnerAudioContext();innerAudioContext.autoplay = true;var emotion = function emotion() {__webpack_require__.e(/*! require.ensure | components/bkhumor-emoji/index */ "components/bkhumor-emoji/index").then((function () {return resolve(__webpack_require__(/*! @/components/bkhumor-emoji/index.vue */ 1184));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uParse = function uParse() {Promise.all(/*! require.ensure | components/feng-parse/parse */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/feng-parse/parse")]).then((function () {return resolve(__webpack_require__(/*! @/components/feng-parse/parse.vue */ 1163));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var lfile = function lfile() {__webpack_require__.e(/*! require.ensure | components/l-file/l-file */ "components/l-file/l-file").then((function () {return resolve(__webpack_require__(/*! @/components/l-file/l-file.vue */ 1177));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { computed: { intIntervalTime: function intIntervalTime() {// 用于显示整数的秒数
      console.log(Math.round(this.intervalTime));return Math.round(this.intervalTime);} }, created: function created() {}, components: { emotion: emotion, uParse: uParse, lfile: lfile }, onLoad: function onLoad(option) {var _this = this;this.userid = option.userid;this.huanying(); // 查看消息保留条数
    this.$http.post({ url: '/mapi/index/getmessagecount' }).then(function (res) {_this.first_xiaoxi = res.data.messagecount;_this.huoqu_xiaoxi_list();});this.tishiyu_tip();this.huoqu_type();var self = this;recorderManager.onStop(function (res) {console.log('recorder stop' + JSON.stringify(res));self.voicePath = res.tempFilePath;if (self.is_quxiao) {console.log('已取消录音');} else {self.Audio2dataURL(res.tempFilePath);}}); // 获取用户信息
    this.$http.post({ url: '/mlawyerapi/user/getlawyer' }).then(function (res) {_this.user = res.data.user;});this.$http.post({ url: '/mapi/lawyer/getshanchang' }).then(function (res) {_this.zhuanchang_arry = res.data.shanchang;_this.huoqu_renzheng();}); // 获取是否开启语音
    this.$http.post({ url: '/mapi/index/getopenchat' }).then(function (res) {_this.is_kaiqi_yuyin = res.data.openchat;}); // 进入这个页面的时候创建websocket连接【整个页面随时使用】
    // this.connectSocketInit();
  }, onShow: function onShow() {var that = this;setTimeout(function () {}, 1000);}, onReady: function onReady() {}, onHide: function onHide() {// 	this.$http
    // 		.post({
    // 			url: '/mlawyerapi/consult/chatdeatils',
    // 			data: {
    // 				page:0,
    // 				userid: this.userid
    // 			}
    // 		})
    // 		.then(res => {
    // 		});
  }, onUnload: function onUnload(e) {// this.huoqu_xiaoxi_list()
    this.$http.post({ url: '/mlawyerapi/consult/chatdeatils', data: { page: 0, userid: this.userid } }).then(function (res) {});innerAudioContext.stop(); //暂停这个实例
    var ls_chat_list = uni.getStorageSync('ls_chat_list'); //读取缓存
    var that = this;var is_cuzai = false;if (ls_chat_list) {ls_chat_list = JSON.parse(ls_chat_list);console.log(ls_chat_list);for (var i in ls_chat_list) {if (ls_chat_list[i].user.userid == this.userid) {if (that.message[that.message.length - 1].addtime != that.is_last_msguptime) {console.log('重新设置');console.log('存在', ls_chat_list[i]);var xinxi = { lawyerid: that.renzheng.userid, userid: that.userid, content: that.message[that.message.length - 1].content, msgtype: that.message[that.message.length - 1].msgtype, readnum: 0, lawyerreadnum: 0, addtime: new Date().getTime(), uptime: that.message[that.message.length - 1].addtime, user: { userid: that.userid, photourl: that.yh_user.photourl, nickname: that.yh_user.nickname, mobile: that.yh_user.mobile } };ls_chat_list.splice(i, 1); //存在即删除
            ls_chat_list.unshift(xinxi);is_cuzai = true;uni.setStorageSync('ls_chat_list', JSON.stringify(ls_chat_list)); //设置缓存
          } else {is_cuzai = true;ls_chat_list[i].content = this.message[this.message.length - 1].content;ls_chat_list[i].msgtype = this.message[this.message.length - 1].msgtype;ls_chat_list[i].lawyerreadnum = 0;uni.setStorageSync('ls_chat_list', JSON.stringify(ls_chat_list)); //设置缓存
            // uni.removeStorageSync('ls_chat_list');
          } // ls_chat_list[i].content=this.message[this.message.length-1].content
          // ls_chat_list[i].msgtype=this.message[this.message.length-1].msgtype
          // ls_chat_list[i].lawyerreadnum=0
        } //     ls_chat_list[i].readnum=0
        // ls_chat_list[i]= ls_chat_list[i].addtime,
      }}if (!is_cuzai) {console.log('不存在');uni.removeStorageSync('ls_chat_list');}}, data: function data() {return { title: '', user: '', bt_show: false, url: '../../static/bkhumor-emoji/', img: '11.gif', chat_txt: '', changyong: '', changyong_arry: ['你好,有什么可以帮助到您？', '客服的上班时间是早晨八点到晚上八点', '好的，有什么事情可以找客服帮您疑难解答'], isShowEmj: false, img_url: uni.getStorageSync('img_url'), message: [], page: 0, is_all: false, userid: '', dianhua: '', is_fa: false, yh_user: '', renzheng: '', zhuanchang_arry: [], day: 0, hour: '00', minute: '00', seconds: '00', time1: '0', zixuncount: '', is_chehui: false, messageid: '', canClick: true, is_zuijin_chehui: false, zuijin_txt: '', bottom_tip: false, on_yuyin: false, is_yuyin: false, is_quxiao: false, clientX: '', clientY: '', recorderManager: {}, innerAudioContext: {}, voicePath: '', intervalTime: 0, isRecord: false, tishiyu: '', is_xiala: false, yuyin_index: 0, dakai: false, tips: '', gettype: '', is_last_msguptime: '', is_kaiqi_yuyin: 2, is_first: true, first_xiaoxi: '', first_height: 0 };}, //下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {// this.is_xiala = true;
    // if (this.is_all) {
    // 	uni.showToast({
    // 		title: '没有更多内容了',
    // 		duration: 2000,
    // 		icon: 'none'
    // 	});
    // 	uni.stopPullDownRefresh();
    // } else {
    // 	this.page++;
    // 	this.huoqu_xiaoxi_list();
    // }
  }, methods: (_methods = { onPageScroll: function onPageScroll(res) {var that = this;if (res.scrollTop == 0) {this.is_xiala = true;if (this.is_all) {uni.showToast({ title: '没有更多内容了', duration: 2000, icon: 'none' });uni.stopPullDownRefresh();} else {uni.showLoading({ title: '加载中', mask: true });this.page++;this.huoqu_xiaoxi_list();}} // console.log(res.scrollTop)
      var info = uni.createSelectorQuery().select('.chat_body');info.boundingClientRect(function (data) {//data - 各种参数
        // 　　　  　console.log(data)  // 获取元素宽度
        that.first_height = data.height;}).exec();}, //上拉加载
    onReachBottom: function onReachBottom() {// uni.showToast({
      // 	title: '没有更多内容了',
      // 	duration: 2000,
      // 	icon: "none"
      // });
    }, huoqu_type: function huoqu_type() {var _this2 = this;this.$http.post({ url: '/mapi/index/gettype' }).then(function (res) {if (res.code == 0) {_this2.gettype = res.data.type;}});}, show_luyin: function show_luyin() {this.isShowEmj = false;this.bt_show = false; // this.is_yuyin=true
    }, judgeIosPermission: function judgeIosPermission(permisionID) {var result = _permission.default.judgeIosPermission(permisionID);console.log(result);var strStatus = result ? '已' : '未';console.log(strStatus);if (strStatus == '已') {this.on_yuyin = true;} else {if (that.is_first) {recorderManager.start({ format: 'mp3' });that.is_quxiao = true;setTimeout(function () {recorderManager.stop();}, 300);that.is_first = false;} else {uni.showModal({ content: '需要开启麦克风权限', confirmText: '设置', success: function success(res) {if (res.confirm) {_permission.default.gotoAppPermissionSetting();}} });}} // uni.showModal({
      // 	content: permisionID + '权限' + strStatus + "获得授权",
      // 	showCancel: false
      // });
    }, requestAndroidPermission: function requestAndroidPermission(permisionID) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var result, strStatus;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return _permission.default.requestAndroidPermission(permisionID);case 2:result = _context.sent;if (result == 1) {strStatus = '已获得授权';_this3.on_yuyin = true;} else if (result == 0) {strStatus = '未获得授权';uni.showToast({ title: '麦克风权限没有开启', duration: 1000, icon: 'none' });} else {strStatus = '被永久拒绝权限';uni.showToast({ title: '麦克风权限被禁止', duration: 1000, icon: 'none' });}case 4:case "end":return _context.stop();}}}, _callee);}))();}, hide_luyin: function hide_luyin() {this.on_yuyin = false;}, // 点击长按录音
    dian_luyin: function dian_luyin() {var _this4 = this;var that = this;this.is_yuyin = true;this.timer = setInterval(function () {_this4.intervalTime += 0.5;if (_this4.intervalTime >= 0.5 && !_this4.isRecord) {//如果用户录制的时间太短,就不会去开启录音, 因为有个bug: recorderManager.stop()在短时间内开启在关闭的话,实际上他还在不停地录音,不知道你们有没有遇到过
          console.log('开始录音');_this4.isRecord = true;_this4.intervalTime = 0;recorderManager.start({ format: 'mp3' });} // console.log(this.intervalTime)
        if (_this4.intervalTime >= 60) {uni.showToast({ title: '不得超过60秒', duration: 2000, icon: 'none' });that.songkai();}}, 500);}, yiru: function yiru() {this.on_yuyin = false;}, moveStop: function moveStop(e) {console.log(e.touches[0].clientY);if (e.touches[0].clientY < 650) {this.is_quxiao = true;} else {this.is_quxiao = false;}}, songkai: function songkai() {var _this5 = this;var that = this;console.log('songkai', this.is_quxiao);if (this.is_quxiao) {console.log('已取消录音');} else {if (this.intervalTime <= 0.5) {console.log('录音太短了!!!');}clearInterval(this.timer);if (this.isRecord) {setTimeout(function () {recorderManager.stop();_this5.isRecord = false; // var data = {
            // 	content: '',
            // 	msgtype: 12,
            // 	photourl_form: that.user.photourl
            // };
            // that.message.push(data);
            // setTimeout(() => {
            // 	uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
            // }, 100);
            console.log(_this5.isRecord);}, 500); //延迟小段时间停止录音, 更好的体验
        }}this.is_yuyin = false;this.is_quxiao = false;}, playVoice: function playVoice(voicePath, index, duration) {console.log('播放录音');var that = this;this.yuyin_index = index;if (duration) {var daoji = Number(duration) * 1000;} else {var daoji = 5 * 1000;}setTimeout(function () {that.yuyin_index = 0;}, daoji);console.log(this.img_url + voicePath);innerAudioContext.src = this.img_url + voicePath;innerAudioContext.play();}, input_click: function input_click(e) {this.bottom_tip = true;}, input_blur: function input_blur() {var _this6 = this;setTimeout(function () {_this6.bottom_tip = false;}, 300);console.log('失去焦点事件');}, navigateBack: function navigateBack() {uni.navigateBack();}, bianji: function bianji() {this.chat_txt = this.zuijin_txt;}, changan: function changan(messageid, txt) {if (txt) {this.zuijin_txt = txt;} else {this.zuijin_txt = '';}console.log(messageid);this.messageid = messageid;this.is_chehui = true;}, Audio2dataURL: function Audio2dataURL(path) {var that = this;plus.io.resolveLocalFileSystemURL(path, function (entry) {entry.file(function (file) {var reader = new plus.io.FileReader();reader.onloadend = function (e) {console.log(e.target.result);that.up_luyin(e.target.result);};reader.readAsDataURL(file);}, function (e) {mui.toast('读写出现异常: ' + e.message);});});}, up_luyin: function up_luyin(base64) {console.log('up_luyin');var urlrep = base64.replace('mpeg', 'mp3');var that = this;that.$http.post({ url: '/lawyer/index/uploadaudiomessage', data: { audio: urlrep } }).then(function (res) {console.log(res);if (res.code == 0) {that.send_luyin(res.data.audio);}});}, send_luyin: function send_luyin(audio) {var _this7 = this;var that = this;var duration = Math.round(this.intervalTime);this.$http.post({ url: '/push/gatewayworker/sendmessage1.html', data: { userid_to: this.userid, msg: audio, type: 13, duration: duration } }).then(function (res) {console.log(res);if (res.code == 0) {var data = { content: audio, msgtype: 13, photourl_form: _this7.user.photourl, messageid: res.data, duration: duration, addtime: new Date().getTime() };_this7.message.push(data);setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 100);var to = new Date(that.time1.replace(/-/g, '/'));var now = new Date();var time = to.getTime() - now.getTime();if (time < 0) {that.send_guoqi();}}});}, huanying: function huanying() {var _this8 = this;this.$http.post({ url: '/mapi/index/getchatmessage' }).then(function (res) {if (res.code == 0) {_this8.tishiyu = res.data;}});}, tishiyu_tip: function tishiyu_tip() {var _this9 = this;this.$http.post({ url: '/mapi/index/tips' }).then(function (res) {if (res.code == 0) {_this9.tips = res.data;}});}, che_queding: function che_queding() {var _this10 = this;console.log(this.messageid, '666');this.$http.post({ url: '/lawyer/index/withdraw', data: { messageid: this.messageid } }).then(function (res) {console.log(res, '555');if (res.code == 0) {uni.showToast({ title: '消息已撤回', duration: 2000 });_this10.message.forEach(function (item, index, array) {if (item.messageid == _this10.messageid) {_this10.message.splice(index, 1);}});_this10.is_chehui = false;if (_this10.zuijin_txt != '') {_this10.is_zuijin_chehui = true;} else {_this10.is_zuijin_chehui = false;_this10.chat_txt = '';}}});}, che_quxiao: function che_quxiao() {this.is_chehui = false;}, huoqu_xiaoxi_list: function huoqu_xiaoxi_list() {var _this11 = this;var that = this;this.$http.post({ url: '/mlawyerapi/consult/chatdeatils', data: { page: this.page, userid: this.userid } }).then(function (res) {_this11.title = res.data.user_to.mobile;_this11.dianhua = res.data.user_to.mobile;_this11.yh_user = res.data.user_to;_this11.zixuncount = res.data.zixuncount;var _loop = function _loop(key) {if (res.data.message[key].msgtype == 10 || res.data.message[key].msgtype == 11 || res.data.message[key].msgtype == 12) {_this11.$http.post({ url: '/mlawyerapi/consult/red_envelope', data: { redid: res.data.message[key].content, userid: that.userid } }).then(function (ress) {console.log(ress);res.data.message[key] = Object.assign(res.data.message[key], ress.data.red_envelope);_this11.$forceUpdate();});} // if (res.data.message[key].msgtype == 13) {
          // 	console.log(key)
          // 	innerAudioContext.src =that.img_url+res.data.message[key].content;
          // 	innerAudioContext.onTimeUpdate(() => {
          // 	    console.log(innerAudioContext.duration,key);
          // 		let shichang={
          // 			shitime:innerAudioContext.duration.toFixed(0)
          // 		}
          // 		res.data.message[key] = Object.assign(res.data.message[key], shichang);
          // 		this.$forceUpdate();
          // 	})
          // }
        };for (var key in res.data.message) {_loop(key);}_this11.message = res.data.message.concat(_this11.message);if (_this11.page == 0) {if (res.data.message.length < that.first_xiaoxi) {_this11.is_all = true;}_this11.is_last_msguptime = _this11.message[_this11.message.length - 1].addtime;} else {if (res.data.message.length < 100) {_this11.is_all = true;}} // if (res.data.message.length < 100) {
        // 	this.is_all = true;
        // }
        if (!_this11.is_xiala) {setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 400);} else {setTimeout(function () {var info = uni.createSelectorQuery().select('.chat_body');info.boundingClientRect(function (data) {//data - 各种参数
              uni.pageScrollTo({ scrollTop: data.height - that.first_height, duration: 0 });}).exec();}, 1000);}that.time1 = res.data.shijian;console.log(that.time1); // 倒计时
        var interval = setInterval(function () {var to = new Date(that.time1.replace(/-/g, '/'));var now = new Date();var time = to.getTime() - now.getTime();if (time < 0) {clearInterval(interval);} else {var day = parseInt(time / 1000 / 60 / 60 / 24);var hour = parseInt(time / 1000 / 60 / 60 % 24);var minute = parseInt(time / 1000 / 60 % 60);var seconds = parseInt(time / 1000 % 60);if (minute <= 9) minute = '0' + minute;if (seconds <= 9) seconds = '0' + seconds;that.day = day;that.hour = hour;that.minute = minute;that.seconds = seconds;}}, 1000);setTimeout(function () {uni.hideLoading();}, 1000);});}, huoqu_renzheng: function huoqu_renzheng() {var _this12 = this;this.$http.post({ url: '/mlawyerapi/lawyer/auth', data: { type: 2 } }).then(function (res) {_this12.renzheng = res.data.lawyerauth;});} }, _defineProperty(_methods, "input_click", function input_click() {// this.bottom_tip =true;
    this.isShowEmj = false;this.bt_show = false;setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 100);}), _defineProperty(_methods, "huojiao", function huojiao() {setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 600);}), _defineProperty(_methods, "shiqu", function shiqu() {setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 200);}), _defineProperty(_methods, "app_lianjie", function app_lianjie() {var that = this;var url = that.$http.WebSocket_url;uni.connectSocket({ url: 'wss://' + url + ':3348', success: function success(data) {console.log('websocket连接成功', data);}, fail: function fail(err) {}, complete: function complete(res) {} });uni.onSocketOpen(function (res) {console.log('WebSocket连接已打开！', res);});uni.onSocketError(function (res) {console.log('WebSocket连接打开失败，请检查！');});uni.onSocketMessage(function (res) {var data = JSON.parse(res.data);if (data.type == 'init') {console.log('init');console.log('client_id', data.client_id);uni.request({ url: that.$http.baseUrl + '/push/gatewayworker/bind', method: 'POST', data: { client_id: data.client_id, type: 1 }, success: function success(resp) {console.log(resp, 'bind');}, fail: function fail(resp) {} });} else if (data.type == 'say') {console.log('say');if (data.state) {if (data.state == 10) {if (data.content) {this.$http.post({ url: '/mlawyerapi/consult/red_envelope', data: { redid: data.content, userid: that.userid } }).then(function (ress) {var xiaoxi = { photourl_form: data.userid_from_pic, userid_to: data.userid_to, photourl_to: data.userid_to_pic, content: data.msg, msgtype: data.state, userid_from: data.userid_from, money: ress.data.red_envelope.money, is_pay: ress.data.red_envelope.is_pay, information: ress.data.red_envelope.information, paymode: ress.data.red_envelope.paymode, type: ress.data.red_envelope.type, addtime: new Date().getTime() };that.message.push(xiaoxi);});}} else {var xiaoxi = { photourl_form: data.userid_from_pic, userid_to: data.userid_to, photourl_to: data.userid_to_pic, content: data.msg, msgtype: data.state, userid_from: data.userid_from, addtime: new Date().getTime() };if (that.user.userid != data.userid_from) {that.message.push(xiaoxi);}}setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 200);}} else {console.log('else');}});uni.onSocketClose(function (res) {console.log('uniapp 已关闭！');});}), _defineProperty(_methods, "handleEmj", function handleEmj(i) {console.log(i);if (i == '[em_98]') {//匹配最后一个表情符号并删除。
      this.chat_txt = this.chat_txt.replace(/(\[[^\]]+\]|[\s\S])$/, '');} else {this.chat_txt += i;}}), _defineProperty(_methods, "replace_em", function replace_em(str) {str = str.replace(/\</g, '&lt;');str = str.replace(/\>/g, '&gt;');str = str.replace(/\n/g, '<br/>');str = str.replace(/\[em_([0-9]*)\]/g, '<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>');return str;}), _defineProperty(_methods, "handleEmj", function handleEmj(i) {console.log(i);if (i == '[em_98]') {//匹配最后一个表情符号并删除。
      this.chat_txt = this.chat_txt.replace(/(\[[^\]]+\]|[\s\S])$/, '');} else {this.chat_txt += i;}}), _defineProperty(_methods, "showEmj", function showEmj() {this.on_yuyin = false;var bool = !this.isShowEmj;if (bool) {this.emojiIcon = 'cuIcon-keyboard';this.bt_show = false;} else {this.emojiIcon = 'cuIcon-emoji';}this.isShowEmj = bool;this.$emit('show');}), _defineProperty(_methods, "jia", function jia() {this.bt_show = !this.bt_show;this.isShowEmj = false;this.on_yuyin = false;}), _defineProperty(_methods, "input_change", function input_change() {if (this.chat_txt == '') {this.is_fa = false;} else {this.is_fa = true;}}), _defineProperty(_methods, "send", function send() {var that = this;if (this.chat_txt == '') {uni.showToast({ title: '请输入内容', duration: 2000, icon: 'none' });return false;}if (this.canClick) {this.canClick = false;this.send_txt();setTimeout(function () {that.canClick = true;}, 1000);} else {uni.showToast({ title: '请稍后发送', duration: 2000, icon: 'none' });}}), _defineProperty(_methods, "send_txt", function send_txt() {var _this13 = this;var data = { content: '' + this.chat_txt, userid_from: '' + this.id };var txt = this.replace_em(this.chat_txt);if (txt == '') {uni.showToast({ title: '请输入内容', duration: 2000, icon: 'none' });return false;}this.$http.post({ url: '/push/gatewayworker/sendmessage1.html', data: { userid_to: this.userid, msg: this.chat_txt, type: 1 } }).then(function (res) {if (res.code == 0) {_this13.chat_txt = '';_this13.is_zuijin_chehui = false;var data = { content: txt, msgtype: 1, photourl_form: _this13.user.photourl, messageid: res.data, addtime: new Date().getTime() };_this13.message.push(data);setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 100);} // this.canClick=true
    });}), _defineProperty(_methods, "send_huanying", function send_huanying() {var _this14 = this;this.$http.post({ url: '/push/gatewayworker/sendmessage1.html', data: { userid_to: this.userid, msg: '[欢迎]', type: 5 } }).then(function (res) {if (res.code == 0) {_this14.chat_txt = '';var data = { content: '[欢迎]', msgtype: 5, photourl_form: _this14.user.photourl, messageid: res.data, addtime: new Date().getTime() };_this14.message.push(data);setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 100);}});}), _defineProperty(_methods, "send_zaixian", function send_zaixian() {var _this15 = this;this.$http.post({ url: '/push/gatewayworker/sendmessage1.html', data: { userid_to: this.userid, msg: '[在线咨询]', type: 4 } }).then(function (res) {if (res.code == 0) {_this15.chat_txt = '';var data = { content: '[在线咨询]', msgtype: 4, photourl_form: _this15.user.photourl, messageid: res.data, addtime: new Date().getTime() };_this15.message.push(data);setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 100);}});}), _defineProperty(_methods, "send_dianhua", function send_dianhua() {var _this16 = this;this.$http.post({ url: '/push/gatewayworker/sendmessage1.html', data: { userid_to: this.userid, msg: '[电话咨询]', type: 3 } }).then(function (res) {if (res.code == 0) {_this16.chat_txt = '';var data = { content: '[电话咨询]', msgtype: 3, photourl_form: _this16.user.photourl, messageid: res.data, addtime: new Date().getTime() };_this16.message.push(data);setTimeout(function () {uni.pageScrollTo({ scrollTop: 99999, duration: 0 });}, 100);}});}), _defineProperty(_methods, "call", function call() {uni.makePhoneCall({ // 手机号
      phoneNumber: this.dianhua + '', // 成功回调
      success: function success(res) {console.log('调用成功!');}, // 失败回调
      fail: function fail(res) {console.log('调用失败!');} });}), _defineProperty(_methods, "call2", function call2(dianhua) {uni.makePhoneCall({ // 手机号
      phoneNumber: dianhua + '', // 成功回调
      success: function success(res) {console.log('调用成功!');}, // 失败回调
      fail: function fail(res) {console.log('调用失败!');} });}), _defineProperty(_methods, "wenjian", function wenjian(str) {str = str.substring(str.lastIndexOf('/') + 1);return str; // console.log(str)
  }), _defineProperty(_methods, "yuyin_chat", function yuyin_chat() {}), _defineProperty(_methods, "shipin_chat", function shipin_chat() {}), _defineProperty(_methods, "onOpenDoc", function onOpenDoc(src) {var url = this.img_url + src; /* 下载返回临时路径（退出应用失效） */}), _defineProperty(_methods, "send_wenjian", function send_wenjian() {/**
                                                                                                                                                                                                                                                                                                                                          * currentWebview: 当前webview
                                                                                                                                                                                                                                                                                                                                          * url：上传接口地址
                                                                                                                                                                                                                                                                                                                                          * name：附件key,服务端根据key值获取文件流，默认file,上传文件的key
                                                                                                                                                                                                                                                                                                                                          * header: 上传接口请求头
                                                                                                                                                                                                                                                                                                                                          */var url = '/api/lawyer/index/uploadfile';



    this.$refs.lFile.upload({




      url: url, //替换为你的
      name: 'files' });

  }), _defineProperty(_methods, "onSuccess", function onSuccess(
  res) {
    console.log('上传成功回调', JSON.stringify(res));

    console.log(res.data.file);
    // uni.showToast({
    // 	title: JSON.stringify(res),
    // 	icon: 'none'
    // })
    this.send_wenjian_txt(res.data.file);
  }), _defineProperty(_methods, "send_wenjian_txt", function send_wenjian_txt(
  localPath) {var _this17 = this;
    var that = this;

    this.$http.
    post({
      url: '/push/gatewayworker/sendmessage1.html',
      data: {
        userid_to: this.userid,
        msg: localPath,
        type: 14 } }).


    then(function (res) {
      console.log(res);
      if (res.code == 0) {
        var data = {
          content: localPath,
          msgtype: 14,
          photourl_form: _this17.user.photourl,
          messageid: res.data,
          addtime: new Date().getTime() };

        _this17.message.push(data);
        setTimeout(function () {
          uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
        }, 100);
        var to = new Date(that.time1.replace(/-/g, '/'));
        var now = new Date();
        var time = to.getTime() - now.getTime();
        if (time < 0) {
          that.send_guoqi();
        }
      }
    });
  }), _defineProperty(_methods, "up_img", function up_img()
  {
    var that = this;
    uni.chooseImage({
      success: function success(res) {
        console.log(res);
        // that.zhiye_zhao = res.tempFilePaths[0];

        // that.urlTobase64(res.tempFilePaths[0])


































































      } });

  }), _defineProperty(_methods, "getLocalFilePath", function getLocalFilePath(
  path) {
    console.log('getLocalFilePath', '111');
    if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
      return path;
    }
    if (path.indexOf('file://') === 0) {
      return path;
    }
    if (path.indexOf('/storage/emulated/0/') === 0) {
      return path;
    }
    if (path.indexOf('/') === 0) {
      var localFilePath = plus.io.convertAbsoluteFileSystem(path);
      if (localFilePath !== path) {
        return localFilePath;
      } else {
        path = path.substr(1);
      }
    }
    return '_www/' + path;
  }), _defineProperty(_methods, "send_img", function send_img(
  img) {var _this18 = this;
    this.$http.
    post({
      url: '/push/gatewayworker/sendmessage1.html',
      data: {
        userid_to: this.userid,
        msg: img,
        type: 2 } }).


    then(function (res) {
      if (res.code == 0) {
        var data = {
          content: img,
          msgtype: 2,
          photourl_form: _this18.user.photourl,
          messageid: res.data,
          addtime: new Date().getTime() };

        _this18.message.push(data);
        setTimeout(function () {
          uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
        }, 100);
      }
    });
  }), _defineProperty(_methods, "changyong_change", function changyong_change(
  data) {
    this.changyong = this.changyong_arry[data.detail.value];
    this.chat_txt = this.changyong_arry[data.detail.value];
    console.log(this.changyong);
  }), _defineProperty(_methods, "tan_hide", function tan_hide()
  {
    this.isShowEmj = false;
    this.bt_show = false;
  }), _defineProperty(_methods, "clickImg", function clickImg(
  img) {
    uni.previewImage({
      urls: ['' + img], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
      current: '', // 当前显示图片的http链接，默认是第一个
      success: function success(res) {},
      fail: function fail(res) {},
      complete: function complete(res) {} });

  }), _defineProperty(_methods, "connectSocketInit", function connectSocketInit()
  {
    var that = this;
    var url = window.location.host;
    console.log(url);
    var ws = new WebSocket('wss://' + url + ':3348');
    ws.onopen = function (evt) {
      console.log('Connection open ...');
      // ws.send("你好");
    };
    ws.onmessage = function (evt) {
      console.log('Received Message: ' + evt.data);
      // json数据转换成js对象
      var data = JSON.parse(evt.data);
      if (data.type == 'init') {
        console.log('init');
        console.log('client_id', data.client_id);
        uni.request({
          url: that.$http.baseUrl + '/push/gatewayworker/bind',
          method: 'POST',
          data: {
            client_id: data.client_id,
            type: 1 },


          success: function success(resp) {
            console.log(resp, 'bind');
          },
          fail: function fail(resp) {} });

      } else if (data.type == 'say') {
        console.log('say');
        if (data.state) {
          if (data.state == 10) {
            if (data.content) {
              this.$http.
              post({
                url: '/mlawyerapi/consult/red_envelope',
                data: {
                  redid: data.content,
                  userid: that.userid } }).


              then(function (ress) {
                var xiaoxi = {
                  photourl_form: data.userid_from_pic,
                  userid_to: data.userid_to,
                  photourl_to: data.userid_to_pic,
                  content: data.msg,
                  msgtype: data.state,
                  userid_from: data.userid_from,
                  money: ress.data.red_envelope.money,
                  is_pay: ress.data.red_envelope.is_pay,
                  information: ress.data.red_envelope.information,
                  paymode: ress.data.red_envelope.paymode,
                  type: ress.data.red_envelope.type,
                  addtime: new Date().getTime() };

                that.message.push(xiaoxi);
              });
            }
          } else {
            var xiaoxi = {
              photourl_form: data.userid_from_pic,
              userid_to: data.userid_to,
              photourl_to: data.userid_to_pic,
              content: data.msg,
              msgtype: data.state,
              userid_from: data.userid_from,
              addtime: new Date().getTime() };

            that.message.push(xiaoxi);
          }
          setTimeout(function () {
            uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
          }, 100);
        }
      } else {
        console.log('else');
      }
    };
    ws.onclose = function (evt) {
      console.log('Connection closed.');
    };
    ws.onerror = function (evt) {
      console.log('WebSocketError!', evt);
    };
  }), _defineProperty(_methods, "go_shoukuan", function go_shoukuan()
  {
    uni.navigateTo({
      url: 'shoukuan?userid=' + this.userid });

  }), _methods),

  filters: {
    timeStamp: function timeStamp(value) {
      if (value == null) {
        return 'null';
      }
      var i = (value + '').length;
      while (i++ < 13) {value = value + '0';}
      value = Number(value);
      var date = new Date(value);
      //date.setTime(value);
      var month = date.getMonth() + 1;
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      var minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
      return time;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1110:
/*!*************************************************************************!*\
  !*** E:/ceshi/lvshi/pages/ls/chat.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&lang=css& */ 1111);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1111:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/ceshi/lvshi/pages/ls/chat.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[1104,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/ls/chat.js.map