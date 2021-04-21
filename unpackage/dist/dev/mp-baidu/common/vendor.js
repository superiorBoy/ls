(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!***********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _swan$getSystemInfoSy =




  swan.getSystemInfoSync(),platform = _swan$getSystemInfoSy.platform,pixelRatio = _swan$getSystemInfoSy.pixelRatio,windowWidth = _swan$getSystemInfoSy.windowWidth; // uni=>swan runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || swan.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    swan.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// 不支持的 API 列表
var todos = [
'preloadPage',
'unPreloadPage'
// 'hideKeyboard',
// 'onGyroscopeChange',
// 'startGyroscope',
// 'stopGyroscope',
// 'openBluetoothAdapter',
// 'startBluetoothDevicesDiscovery',
// 'onBluetoothDeviceFound',
// 'stopBluetoothDevicesDiscovery',
// 'onBluetoothAdapterStateChange',
// 'getConnectedBluetoothDevices',
// 'getBluetoothDevices',
// 'getBluetoothAdapterState',
// 'closeBluetoothAdapter',
// 'writeBLECharacteristicValue',
// 'readBLECharacteristicValue',
// 'onBLEConnectionStateChange',
// 'onBLECharacteristicValueChange',
// 'notifyBLECharacteristicValueChange',
// 'getBLEDeviceServices',
// 'getBLEDeviceCharacteristics',
// 'createBLEConnection',
// 'closeBLEConnection',
// 'onBeaconServiceChange',
// 'onBeaconUpdate',
// 'getBeacons',
// 'startBeaconDiscovery',
// 'stopBeaconDiscovery',
// 'hideShareMenu',
// 'onWindowResize',
// 'offWindowResize',
// 'vibrate'
];

// 存在兼容性的 API 列表
var canIUses = [];

function createTodoMethod(contextName, methodName) {
  return function unsupported() {
    console.error("\u767E\u5EA6\u5C0F\u7A0B\u5E8F ".concat(contextName, "\u6682\u4E0D\u652F\u6301").concat(methodName));
  };
}

function _handleEnvInfo(result) {
  result.miniProgram = {
    appId: result.appKey };

  result.plugin = {
    version: result.sdkVersion };

}

// 需要做转换的 API 列表
var protocols = {
  returnValue: function returnValue(methodName) {var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // 通用 returnValue 解析，部分 API 的 res 为 undefined，比如 navigateTo
    return res;
  },
  request: {
    args: function args(fromArgs) {
      // TODO
      // data 不支持 ArrayBuffer
      // method 不支持 TRACE, CONNECT
      return {
        method: 'method',
        dataType: function dataType(type) {
          return {
            name: 'dataType',
            value: type === 'json' ? type : 'string' };

        } };

    } },

  connectSocket: {
    args: {
      method: false } },


  navigateTo: navigateTo,
  redirectTo: redirectTo,
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  getRecorderManager: {
    returnValue: function returnValue(fromRet) {
      fromRet.onFrameRecorded = createTodoMethod('RecorderManager', 'onFrameRecorded');
    } },

  getBackgroundAudioManager: {
    returnValue: function returnValue(fromRet) {
      fromRet.onPrev = createTodoMethod('BackgroundAudioManager', 'onPrev');
      fromRet.onNext = createTodoMethod('BackgroundAudioManager', 'onNext');
    } },

  scanCode: {
    args: {
      onlyFromCamera: false,
      scanType: false } },


  navigateToMiniProgram: {
    name: 'navigateToSmartProgram',
    args: {
      appId: 'appKey',
      envVersion: false } },


  navigateBackMiniProgram: {
    name: 'navigateBackSmartProgram' },

  showShareMenu: {
    name: 'openShare' },

  getAccountInfoSync: {
    name: 'getEnvInfoSync',
    returnValue: _handleEnvInfo } };



var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u767E\u5EA6\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u767E\u5EA6\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = swan[methodName].apply(swan, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['baidu'],
  share: ['baidu'],
  payment: ['baidu'],
  push: ['baidu'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function createMediaQueryObserver() {
  var mediaQueryObserver = {};var _swan$getSystemInfoSy2 =



  swan.getSystemInfoSync(),windowWidth = _swan$getSystemInfoSy2.windowWidth,windowHeight = _swan$getSystemInfoSy2.windowHeight;

  var orientation = windowWidth < windowHeight ? 'portrait' : 'landscape';

  mediaQueryObserver.observe = function (options, callback) {
    var matches = true;
    for (var item in options) {
      var itemValue = item === 'orientation' ? options[item] : Number(options[item]);
      if (options[item] !== '') {
        if (item === 'width') {
          if (itemValue === windowWidth) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minWidth') {
          if (windowWidth >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxWidth') {
          if (windowWidth <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'height') {
          if (itemValue === windowHeight) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minHeight') {
          if (windowHeight >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxHeight') {
          if (windowHeight <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'orientation') {
          if (options[item] === orientation) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
      }
    }
    callback(matches);

    return matches;
  };

  mediaQueryObserver.disconnect = function () {
  };

  return mediaQueryObserver;
}

function requestPayment(params) {
  var parseError = false;
  if (typeof params.orderInfo === 'string') {
    try {
      params.orderInfo = JSON.parse(params.orderInfo);
    } catch (e) {
      parseError = true;
    }
  }
  if (parseError) {
    params.fail && params.fail({
      errMsg: 'requestPayment:fail 参数 orderInfo 数据结构不正确，参考：https://uniapp.dcloud.io/api/plugins/payment?id=orderinfo' });

  } else {
    swan.requestPolymerPayment(params);
  }
}

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  requestPayment: requestPayment,
  createMediaQueryObserver: createMediaQueryObserver });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"小虎律师法律咨询","VUE_APP_PLATFORM":"mp-baidu","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "swan".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  {
    if (
    defaultValue === false &&
    Array.isArray(type) &&
    type.length === 2 &&
    type.indexOf(String) !== -1 &&
    type.indexOf(Boolean) !== -1)
    {// [String,Boolean]=>Boolean
      if (file) {
        console.warn("props.".concat(
        key, ".type should use Boolean instead of [String,Boolean] at ").concat(file));

      }
      return Boolean;
    }
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  {// mp-baidu，checked=>value
    if (
    isPlainObject(event.detail) &&
    hasOwn(event.detail, 'checked') &&
    !hasOwn(event.detail, 'value'))
    {
      event.detail.value = event.detail.checked;
    }
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel$1() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel$1();
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-baidu";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

var mocks = ['nodeId', 'componentName', '_componentId', 'uniquePrefix'];

function isPage() {
  // 百度小程序组件的id，某些情况下可能是number类型的0，不能直接return !this.ownerId 判断当前组件是否是Page
  // 否则会导致mounted不执行
  return typeof this.ownerId === 'undefined';
}

function initRelation(detail) {
  this.dispatch('__l', detail);
}

function parseApp(vm) {
  // 百度 onShow 竟然会在 onLaunch 之前
  var appOptions = parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

  appOptions.onShow = function onShow(args) {
    if (!this.$vm) {
      this.onLaunch(args);
    }
    this.$vm.__call_hook('onShow', args);
  };
  return appOptions;
}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

var newLifecycle = swan.canIUse('lifecycle-2-0');

function parseComponent(vueOptions) {
  var componentOptions = parseBaseComponent(vueOptions, {
    isPage: isPage,
    initRelation: initRelation });


  // 关于百度小程序生命周期的说明(组件作为页面时):
  // lifetimes:attached --> methods:onShow --> methods:onLoad --> methods:onReady
  // 这里在强制将onShow挪到onLoad之后触发,另外一处修改在page-parser.js
  var oldAttached = componentOptions.lifetimes.attached;
  // 百度小程序基础库 3.260 以上支持页面 onInit 生命周期，提前创建 vm 实例
  componentOptions.lifetimes.onInit = function onInit(query) {
    // 处理百度小程序 onInit 生命周期调用 setData 无效的问题
    var setData = this.setData;
    var setDataArgs = [];
    this.setData = function () {
      setDataArgs.push(arguments);
    };
    this.__fixInitData = function () {var _this3 = this;
      delete this.__fixInitData;
      this.setData = setData;
      if (setDataArgs.length) {
        this.groupSetData(function () {
          setDataArgs.forEach(function (args) {
            setData.apply(_this3, args);
          });
        });
      }
    };
    oldAttached.call(this);
    this.pageinstance.$vm = this.$vm;
    this.$vm.__call_hook('onInit', query);
  };
  componentOptions.lifetimes.attached = function attached() {
    if (!this.$vm) {
      oldAttached.call(this);
    } else {
      this.__fixInitData && this.__fixInitData();
    }
    if (isPage.call(this)) {// 百度 onLoad 在 attached 之前触发（基础库小于 3.70）
      // 百度 当组件作为页面时 pageinstancce 不是原来组件的 instance
      this.pageinstance.$vm = this.$vm;
      if (hasOwn(this.pageinstance, '_$args')) {
        var query = this.pageinstance._$args;
        var copyQuery = Object.assign({}, query);
        delete copyQuery.__id__;
        this.pageinstance.$page = this.$page = {
          fullPath: '/' + this.pageinstance.route + stringifyQuery(copyQuery) };

        this.$vm.$mp.query = query;
        this.$vm.__call_hook('onLoad', query);
        this.$vm.__call_hook('onShow');
        delete this.pageinstance._$args;
      }
    } else {
      // 百度小程序组件不触发methods内的onReady
      if (this.$vm) {
        this.$vm._isMounted = true;
        this.$vm.__call_hook('mounted');
      }
    }
  };

  if (newLifecycle) {
    componentOptions.methods.onReady = componentOptions.lifetimes.ready;
    delete componentOptions.lifetimes.ready;
  }

  componentOptions.messages = {
    __l: componentOptions.methods.__l };

  delete componentOptions.methods.__l;

  return componentOptions;
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function detached($vm) {
  $vm.$children.forEach(function (childVm) {
    childVm.$scope.detached();
  });
  $vm.$scope.detached();
}

function onPageUnload($vm) {
  $vm.$destroy();
  $vm.$children.forEach(function (childVm) {
    detached(childVm);
  });
}

function parsePage(vuePageOptions) {
  var pageOptions = parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });


  // 纠正百度小程序生命周期methods:onShow在methods:onLoad之前触发的问题
  pageOptions.methods.onShow = function onShow() {
    if (this.$vm && this.$vm.$mp.query) {
      this.$vm.__call_hook('onShow');
    }
  };

  pageOptions.methods.onLoad = function onLoad(query) {
    // 百度 onLoad 在 attached 之前触发（基础库小于 3.70），先存储 args, 在 attached 里边触发 onLoad
    if (this.$vm) {
      var copyQuery = Object.assign({}, query);
      delete copyQuery.__id__;
      this.pageinstance.$page = this.$page = {
        fullPath: '/' + this.pageinstance.route + stringifyQuery(copyQuery) };

      this.$vm.$mp.query = query;
      this.$vm.__call_hook('onLoad', query);
      this.$vm.__call_hook('onShow');
    } else {
      this.pageinstance._$args = query;
    }
  };

  pageOptions.methods.onUnload = function onUnload() {
    this.$vm.__call_hook('onUnload');
    onPageUnload(this.$vm);
  };

  return pageOptions;
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && swan.onAppShow) {
    swan.onAppShow(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      appOptions.onShow.apply(app, args);
    });
  }
  if (isFn(appOptions.onHide) && swan.onAppHide) {
    swan.onAppHide(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onHide.apply(app, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = swan.getLaunchOptionsSync && swan.getLaunchOptionsSync();
    appOptions.onLaunch.call(app, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!swan.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-baidu" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(swan, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, swan[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(swan).forEach(function (name) {
    if (hasOwn(swan, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, swan[name]));
    }
  });
}

swan.createApp = createApp;
swan.createPage = createPage;
swan.createComponent = createComponent;
swan.createSubpackageApp = createSubpackageApp;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 100:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 101:
/*!*******************************************!*\
  !*** E:/ceshi/lvshi/common/permission.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启
 */

var isIos;




// 判断推送权限是否开启
function judgeIosPermissionPush() {
  var result = false;
  var UIApplication = plus.ios.import("UIApplication");
  var app = UIApplication.sharedApplication();
  var enabledTypes = 0;
  if (app.currentUserNotificationSettings) {
    var settings = app.currentUserNotificationSettings();
    enabledTypes = settings.plusGetAttribute("types");
    console.log("enabledTypes1:" + enabledTypes);
    if (enabledTypes == 0) {
      console.log("推送权限没有开启");
    } else {
      result = true;
      console.log("已经开启推送功能!");
    }
    plus.ios.deleteObject(settings);
  } else {
    enabledTypes = app.enabledRemoteNotificationTypes();
    if (enabledTypes == 0) {
      console.log("推送权限没有开启!");
    } else {
      result = true;
      console.log("已经开启推送功能!");
    }
    console.log("enabledTypes2:" + enabledTypes);
  }
  plus.ios.deleteObject(app);
  plus.ios.deleteObject(UIApplication);
  return result;
}

// 判断定位权限是否开启
function judgeIosPermissionLocation() {
  var result = false;
  var cllocationManger = plus.ios.import("CLLocationManager");
  var status = cllocationManger.authorizationStatus();
  result = status != 2;
  console.log("定位权限开启：" + result);
  // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation
  /* var enable = cllocationManger.locationServicesEnabled();
  var status = cllocationManger.authorizationStatus();
  console.log("enable:" + enable);
  console.log("status:" + status);
  if (enable && status != 2) {
  	result = true;
  	console.log("手机定位服务已开启且已授予定位权限");
  } else {
  	console.log("手机系统的定位没有打开或未给予定位权限");
  } */
  plus.ios.deleteObject(cllocationManger);
  return result;
}

// 判断麦克风权限是否开启
function judgeIosPermissionRecord() {
  var result = false;
  var avaudiosession = plus.ios.import("AVAudioSession");
  var avaudio = avaudiosession.sharedInstance();
  var permissionStatus = avaudio.recordPermission();
  console.log("permissionStatus:" + permissionStatus);
  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {
    console.log("麦克风权限没有开启");
  } else {
    result = true;
    console.log("麦克风权限已经开启");
  }
  plus.ios.deleteObject(avaudiosession);
  return result;
}

// 判断相机权限是否开启
function judgeIosPermissionCamera() {
  var result = false;
  var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');
  console.log("authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    console.log("相机权限已经开启");
  } else {
    console.log("相机权限没有开启");
  }
  plus.ios.deleteObject(AVCaptureDevice);
  return result;
}

// 判断相册权限是否开启
function judgeIosPermissionPhotoLibrary() {
  var result = false;
  var PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
  var authStatus = PHPhotoLibrary.authorizationStatus();
  console.log("authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    console.log("相册权限已经开启");
  } else {
    console.log("相册权限没有开启");
  }
  plus.ios.deleteObject(PHPhotoLibrary);
  return result;
}

// 判断通讯录权限是否开启
function judgeIosPermissionContact() {
  var result = false;
  var CNContactStore = plus.ios.import("CNContactStore");
  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
  if (cnAuthStatus == 3) {
    result = true;
    console.log("通讯录权限已经开启");
  } else {
    console.log("通讯录权限没有开启");
  }
  plus.ios.deleteObject(CNContactStore);
  return result;
}

// 判断日历权限是否开启
function judgeIosPermissionCalendar() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
  if (ekAuthStatus == 3) {
    result = true;
    console.log("日历权限已经开启");
  } else {
    console.log("日历权限没有开启");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}

// 判断备忘录权限是否开启
function judgeIosPermissionMemo() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
  if (ekAuthStatus == 3) {
    result = true;
    console.log("备忘录权限已经开启");
  } else {
    console.log("备忘录权限没有开启");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}

// Android权限查询
function requestAndroidPermission(permissionID) {
  return new Promise(function (resolve, reject) {
    plus.android.requestPermissions(
    [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
    function (resultObj) {
      var result = 0;
      for (var i = 0; i < resultObj.granted.length; i++) {
        var grantedPermission = resultObj.granted[i];
        console.log('已获取的权限：' + grantedPermission);
        result = 1;
      }
      for (var i = 0; i < resultObj.deniedPresent.length; i++) {
        var deniedPresentPermission = resultObj.deniedPresent[i];
        console.log('拒绝本次申请的权限：' + deniedPresentPermission);
        result = 0;
      }
      for (var i = 0; i < resultObj.deniedAlways.length; i++) {
        var deniedAlwaysPermission = resultObj.deniedAlways[i];
        console.log('永久拒绝申请的权限：' + deniedAlwaysPermission);
        result = -1;
      }
      resolve(result);
      // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限
      // if (result != 1) {
      // gotoAppPermissionSetting()
      // }
    },
    function (error) {
      console.log('申请权限错误：' + error.code + " = " + error.message);
      resolve({
        code: error.code,
        message: error.message });

    });

  });
}

// 使用一个方法，根据参数判断权限
function judgeIosPermission(permissionID) {
  if (permissionID == "location") {
    return judgeIosPermissionLocation();
  } else if (permissionID == "camera") {
    return judgeIosPermissionCamera();
  } else if (permissionID == "photoLibrary") {
    return judgeIosPermissionPhotoLibrary();
  } else if (permissionID == "record") {
    return judgeIosPermissionRecord();
  } else if (permissionID == "push") {
    return judgeIosPermissionPush();
  } else if (permissionID == "contact") {
    return judgeIosPermissionContact();
  } else if (permissionID == "calendar") {
    return judgeIosPermissionCalendar();
  } else if (permissionID == "memo") {
    return judgeIosPermissionMemo();
  }
  return false;
}

// 跳转到**应用**的权限页面
function gotoAppPermissionSetting() {
  if (isIos) {
    var UIApplication = plus.ios.import("UIApplication");
    var application2 = UIApplication.sharedApplication();
    var NSURL2 = plus.ios.import("NSURL");
    // var setting2 = NSURL2.URLWithString("prefs:root=LOCATION_SERVICES");		
    var setting2 = NSURL2.URLWithString("app-settings:");
    application2.openURL(setting2);

    plus.ios.deleteObject(setting2);
    plus.ios.deleteObject(NSURL2);
    plus.ios.deleteObject(application2);
  } else {
    // console.log(plus.device.vendor);
    var Intent = plus.android.importClass("android.content.Intent");
    var Settings = plus.android.importClass("android.provider.Settings");
    var Uri = plus.android.importClass("android.net.Uri");
    var mainActivity = plus.android.runtimeMainActivity();
    var intent = new Intent();
    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
    intent.setData(uri);
    mainActivity.startActivity(intent);
  }
}

// 检查系统的设备服务是否开启
// var checkSystemEnableLocation = async function () {
function checkSystemEnableLocation() {
  if (isIos) {
    var result = false;
    var cllocationManger = plus.ios.import("CLLocationManager");
    var result = cllocationManger.locationServicesEnabled();
    console.log("系统定位开启:" + result);
    plus.ios.deleteObject(cllocationManger);
    return result;
  } else {
    var context = plus.android.importClass("android.content.Context");
    var locationManager = plus.android.importClass("android.location.LocationManager");
    var main = plus.android.runtimeMainActivity();
    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);
    console.log("系统定位开启:" + result);
    return result;
  }
}

module.exports = {
  judgeIosPermission: judgeIosPermission,
  requestAndroidPermission: requestAndroidPermission,
  checkSystemEnableLocation: checkSystemEnableLocation,
  gotoAppPermissionSetting: gotoAppPermissionSetting };

/***/ }),

/***/ 11:
/*!*******************************************************************!*\
  !*** E:/ceshi/lvshi/node_modules/vue-clipboard2/vue-clipboard.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Clipboard = __webpack_require__(/*! clipboard/dist/clipboard.min.js */ 12); // FIXME: workaround for browserify

var VueClipboardConfig = {
  autoSetContainer: false,
  appendToBody: true // This fixes IE, see #50
};

var VueClipboard = {
  install: function install(Vue) {
    Vue.prototype.$clipboardConfig = VueClipboardConfig;
    Vue.prototype.$copyText = function (_text, container) {
      return new Promise(function (resolve, reject) {
        var fakeElement = document.createElement('button');
        var clipboard = new Clipboard(fakeElement, {
          text: function text() {return _text;},
          action: function action() {return 'copy';},
          container: typeof container === 'object' ? container : document.body });

        clipboard.on('success', function (e) {
          clipboard.destroy();
          resolve(e);
        });
        clipboard.on('error', function (e) {
          clipboard.destroy();
          reject(e);
        });
        if (VueClipboardConfig.appendToBody) document.body.appendChild(fakeElement);
        fakeElement.click();
        if (VueClipboardConfig.appendToBody) document.body.removeChild(fakeElement);
      });
    };

    Vue.directive('clipboard', {
      bind: function bind(el, binding, vnode) {
        if (binding.arg === 'success') {
          el._vClipboard_success = binding.value;
        } else if (binding.arg === 'error') {
          el._vClipboard_error = binding.value;
        } else {
          var clipboard = new Clipboard(el, {
            text: function text() {return binding.value;},
            action: function action() {return binding.arg === 'cut' ? 'cut' : 'copy';},
            container: VueClipboardConfig.autoSetContainer ? el : undefined });

          clipboard.on('success', function (e) {
            var callback = el._vClipboard_success;
            callback && callback(e);
          });
          clipboard.on('error', function (e) {
            var callback = el._vClipboard_error;
            callback && callback(e);
          });
          el._vClipboard = clipboard;
        }
      },
      update: function update(el, binding) {
        if (binding.arg === 'success') {
          el._vClipboard_success = binding.value;
        } else if (binding.arg === 'error') {
          el._vClipboard_error = binding.value;
        } else {
          el._vClipboard.text = function () {return binding.value;};
          el._vClipboard.action = function () {return binding.arg === 'cut' ? 'cut' : 'copy';};
        }
      },
      unbind: function unbind(el, binding) {
        if (binding.arg === 'success') {
          delete el._vClipboard_success;
        } else if (binding.arg === 'error') {
          delete el._vClipboard_error;
        } else {
          el._vClipboard.destroy();
          delete el._vClipboard;
        }
      } });

  },
  config: VueClipboardConfig };


if (true) {
  module.exports = VueClipboard;
} else {}

/***/ }),

/***/ 1153:
/*!****************************************************************!*\
  !*** E:/ceshi/lvshi/components/wangding-pickerAddress/data.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = [
{
  "name": "北京市",
  "city": [
  {
    "name": "北京市",
    "area": [
    "东城区",
    "西城区",
    "崇文区",
    "宣武区",
    "朝阳区",
    "丰台区",
    "石景山区",
    "海淀区",
    "门头沟区",
    "房山区",
    "通州区",
    "顺义区",
    "昌平区",
    "大兴区",
    "平谷区",
    "怀柔区",
    "密云县",
    "延庆县"] }] },




{
  "name": "天津市",
  "city": [
  {
    "name": "天津市",
    "area": [
    "和平区",
    "河东区",
    "河西区",
    "南开区",
    "河北区",
    "红桥区",
    "塘沽区",
    "汉沽区",
    "大港区",
    "东丽区",
    "西青区",
    "津南区",
    "北辰区",
    "武清区",
    "宝坻区",
    "宁河县",
    "静海县",
    "蓟  县"] }] },




{
  "name": "河北省",
  "city": [
  {
    "name": "石家庄市",
    "area": [
    "长安区",
    "桥东区",
    "桥西区",
    "新华区",
    "郊  区",
    "井陉矿区",
    "井陉县",
    "正定县",
    "栾城县",
    "行唐县",
    "灵寿县",
    "高邑县",
    "深泽县",
    "赞皇县",
    "无极县",
    "平山县",
    "元氏县",
    "赵  县",
    "辛集市",
    "藁",
    "晋州市",
    "新乐市",
    "鹿泉市"] },


  {
    "name": "唐山市",
    "area": [
    "路南区",
    "路北区",
    "古冶区",
    "开平区",
    "新  区",
    "丰润县",
    "滦  县",
    "滦南县",
    "乐亭县",
    "迁西县",
    "玉田县",
    "唐海县",
    "遵化市",
    "丰南市",
    "迁安市"] },


  {
    "name": "秦皇岛市",
    "area": [
    "海港区",
    "山海关区",
    "北戴河区",
    "青龙满族自治县",
    "昌黎县",
    "抚宁县",
    "卢龙县"] },


  {
    "name": "邯郸市",
    "area": [
    "邯山区",
    "丛台区",
    "复兴区",
    "峰峰矿区",
    "邯郸县",
    "临漳县",
    "成安县",
    "大名县",
    "涉  县",
    "磁  县",
    "肥乡县",
    "永年县",
    "邱  县",
    "鸡泽县",
    "广平县",
    "馆陶县",
    "魏  县",
    "曲周县",
    "武安市"] },


  {
    "name": "邢台市",
    "area": [
    "桥东区",
    "桥西区",
    "邢台县",
    "临城县",
    "内丘县",
    "柏乡县",
    "隆尧县",
    "任  县",
    "南和县",
    "宁晋县",
    "巨鹿县",
    "新河县",
    "广宗县",
    "平乡县",
    "威  县",
    "清河县",
    "临西县",
    "南宫市",
    "沙河市"] },


  {
    "name": "保定市",
    "area": [
    "新市区",
    "北市区",
    "南市区",
    "满城县",
    "清苑县",
    "涞水县",
    "阜平县",
    "徐水县",
    "定兴县",
    "唐  县",
    "高阳县",
    "容城县",
    "涞源县",
    "望都县",
    "安新县",
    "易  县",
    "曲阳县",
    "蠡  县",
    "顺平县",
    "博野",
    "雄县",
    "涿州市",
    "定州市",
    "安国市",
    "高碑店市"] },


  {
    "name": "张家口",
    "area": [
    "桥东区",
    "桥西区",
    "宣化区",
    "下花园区",
    "宣化县",
    "张北县",
    "康保县",
    "沽源县",
    "尚义县",
    "蔚  县",
    "阳原县",
    "怀安县",
    "万全县",
    "怀来县",
    "涿鹿县",
    "赤城县",
    "崇礼县"] },


  {
    "name": "承德市",
    "area": [
    "双桥区",
    "双滦区",
    "鹰手营子矿区",
    "承德县",
    "兴隆县",
    "平泉县",
    "滦平县",
    "隆化县",
    "丰宁满族自治县",
    "宽城满族自治县",
    "围场满族蒙古族自治县"] },


  {
    "name": "沧州市",
    "area": [
    "新华区",
    "运河区",
    "沧  县",
    "青  县",
    "东光县",
    "海兴县",
    "盐山县",
    "肃宁县",
    "南皮县",
    "吴桥县",
    "献  县",
    "孟村回族自治县",
    "泊头市",
    "任丘市",
    "黄骅市",
    "河间市"] },


  {
    "name": "廊坊市",
    "area": [
    "安次区",
    "固安县",
    "永清县",
    "香河县",
    "大城县",
    "文安县",
    "大厂回族自治县",
    "霸州市",
    "三河市"] },


  {
    "name": "衡水市",
    "area": [
    "桃城区",
    "枣强县",
    "武邑县",
    "武强县",
    "饶阳县",
    "安平县",
    "故城县",
    "景  县",
    "阜城县",
    "冀州市",
    "深州市"] }] },




{
  "name": "山西省",
  "city": [
  {
    "name": "太原市",
    "area": [
    "小店区",
    "迎泽区",
    "杏花岭区",
    "尖草坪区",
    "万柏林区",
    "晋源区",
    "清徐县",
    "阳曲县",
    "娄烦县",
    "古交市"] },


  {
    "name": "大同市",
    "area": [
    "城  区",
    "矿  区",
    "南郊区",
    "新荣区",
    "阳高县",
    "天镇县",
    "广灵县",
    "灵丘县",
    "浑源县",
    "左云县",
    "大同县"] },


  {
    "name": "阳泉市",
    "area": [
    "城  区",
    "矿  区",
    "郊  区",
    "平定县",
    "盂  县"] },


  {
    "name": "长治市",
    "area": [
    "城  区",
    "郊  区",
    "长治县",
    "襄垣县",
    "屯留县",
    "平顺县",
    "黎城县",
    "壶关县",
    "长子县",
    "武乡县",
    "沁  县",
    "沁源县",
    "潞城市"] },


  {
    "name": "晋城市",
    "area": [
    "城  区",
    "沁水县",
    "阳城县",
    "陵川县",
    "泽州县",
    "高平市"] },


  {
    "name": "朔州市",
    "area": [
    "朔城区",
    "平鲁区",
    "山阴县",
    "应  县",
    "右玉县",
    "怀仁县"] },


  {
    "name": "忻州市",
    "area": [
    "忻府区",
    "原平市",
    "定襄县",
    "五台县",
    "代  县",
    "繁峙县",
    "宁武县",
    "静乐县",
    "神池县",
    "五寨县",
    "岢岚县",
    "河曲县",
    "保德县",
    "偏关县"] },


  {
    "name": "吕梁市",
    "area": [
    "离石区",
    "孝义市",
    "汾阳市",
    "文水县",
    "交城县",
    "兴  县",
    "临  县",
    "柳林县",
    "石楼县",
    "岚  县",
    "方山县",
    "中阳县",
    "交口县"] },


  {
    "name": "晋中市",
    "area": [
    "榆次市",
    "介休市",
    "榆社县",
    "左权县",
    "和顺县",
    "昔阳县",
    "寿阳县",
    "太谷县",
    "祁  县",
    "平遥县",
    "灵石县"] },


  {
    "name": "临汾市",
    "area": [
    "临汾市",
    "侯马市",
    "霍州市",
    "曲沃县",
    "翼城县",
    "襄汾县",
    "洪洞县",
    "古  县",
    "安泽县",
    "浮山县",
    "吉  县",
    "乡宁县",
    "蒲  县",
    "大宁县",
    "永和县",
    "隰  县",
    "汾西县"] },


  {
    "name": "运城市",
    "area": [
    "运城市",
    "永济市",
    "河津市",
    "芮城县",
    "临猗县",
    "万荣县",
    "新绛县",
    "稷山县",
    "闻喜县",
    "夏  县",
    "绛  县",
    "平陆县",
    "垣曲县"] }] },




{
  "name": "内蒙古",
  "city": [
  {
    "name": "呼和浩特市",
    "area": [
    "新城区",
    "回民区",
    "玉泉区",
    "郊  区",
    "土默特左旗",
    "托克托县",
    "和林格尔县",
    "清水河县",
    "武川县"] },


  {
    "name": "包头市",
    "area": [
    "东河区",
    "昆都伦区",
    "青山区",
    "石拐矿区",
    "白云矿区",
    "郊  区",
    "土默特右旗",
    "固阳县",
    "达尔罕茂明安联合旗"] },


  {
    "name": "乌海市",
    "area": [
    "海勃湾区",
    "海南区",
    "乌达区"] },


  {
    "name": "赤峰市",
    "area": [
    "红山区",
    "元宝山区",
    "松山区",
    "阿鲁科尔沁旗",
    "巴林左旗",
    "巴林右旗",
    "林西县",
    "克什克腾旗",
    "翁牛特旗",
    "喀喇沁旗",
    "宁城县",
    "敖汉旗"] },


  {
    "name": "呼伦贝尔市",
    "area": [
    "海拉尔市",
    "满洲里市",
    "扎兰屯市",
    "牙克石市",
    "根河市",
    "额尔古纳市",
    "阿荣旗",
    "莫力达瓦达斡尔族自治旗",
    "鄂伦春自治旗",
    "鄂温克族自治旗",
    "新巴尔虎右旗",
    "新巴尔虎左旗",
    "陈巴尔虎旗"] },


  {
    "name": "兴安盟",
    "area": [
    "乌兰浩特市",
    "阿尔山市",
    "科尔沁右翼前旗",
    "科尔沁右翼中旗",
    "扎赉特旗",
    "突泉县"] },


  {
    "name": "通辽市",
    "area": [
    "科尔沁区",
    "霍林郭勒市",
    "科尔沁左翼中旗",
    "科尔沁左翼后旗",
    "开鲁县",
    "库伦旗",
    "奈曼旗",
    "扎鲁特旗"] },


  {
    "name": "锡林郭勒盟",
    "area": [
    "二连浩特市",
    "锡林浩特市",
    "阿巴嘎旗",
    "苏尼特左旗",
    "苏尼特右旗",
    "东乌珠穆沁旗",
    "西乌珠穆沁旗",
    "太仆寺旗",
    "镶黄旗",
    "正镶白旗",
    "正蓝旗",
    "多伦县"] },


  {
    "name": "乌兰察布盟",
    "area": [
    "集宁市",
    "丰镇市",
    "卓资县",
    "化德县",
    "商都县",
    "兴和县",
    "凉城县",
    "察哈尔右翼前旗",
    "察哈尔右翼中旗",
    "察哈尔右翼后旗",
    "四子王旗"] },


  {
    "name": "伊克昭盟",
    "area": [
    "东胜市",
    "达拉特旗",
    "准格尔旗",
    "鄂托克前旗",
    "鄂托克旗",
    "杭锦旗",
    "乌审旗",
    "伊金霍洛旗"] },


  {
    "name": "巴彦淖尔盟",
    "area": [
    "临河市",
    "五原县",
    "磴口县",
    "乌拉特前旗",
    "乌拉特中旗",
    "乌拉特后旗",
    "杭锦后旗"] },


  {
    "name": "阿拉善盟",
    "area": [
    "阿拉善左旗",
    "阿拉善右旗",
    "额济纳旗"] }] },




{
  "name": "辽宁省",
  "city": [
  {
    "name": "沈阳市",
    "area": [
    "沈河区",
    "皇姑区",
    "和平区",
    "大东区",
    "铁西区",
    "苏家屯区",
    "东陵区",
    "于洪区",
    "新民市",
    "法库县",
    "辽中县",
    "康平县",
    "新城子区"] },


  {
    "name": "大连市",
    "area": [
    "西岗区",
    "中山区",
    "沙河口区",
    "甘井子区",
    "旅顺口区",
    "金州区",
    "瓦房店市",
    "普兰店市",
    "庄河市",
    "长海县"] },


  {
    "name": "鞍山市",
    "area": [
    "铁东区",
    "铁西区",
    "立山区",
    "千山区",
    "海城市",
    "台安县",
    "岫岩满族自治县"] },


  {
    "name": "抚顺市",
    "area": [
    "顺城区",
    "新抚区",
    "东洲区",
    "望花区",
    "抚顺县",
    "清原满族自治县",
    "新宾满族自治县"] },


  {
    "name": "本溪市",
    "area": [
    "平山区",
    "明山区",
    "溪湖区",
    "南芬区",
    "本溪满族自治县",
    "桓仁满族自治县"] },


  {
    "name": "丹东市",
    "area": [
    "振兴区",
    "元宝区",
    "振安区",
    "东港市",
    "凤城市",
    "宽甸满族自治县"] },


  {
    "name": "锦州市",
    "area": [
    "太和区",
    "古塔区",
    "凌河区",
    "凌海市",
    "黑山县",
    "义县",
    "北宁市"] },


  {
    "name": "营口市",
    "area": [
    "站前区",
    "西市区",
    "鲅鱼圈区",
    "老边区",
    "大石桥市",
    "盖州市"] },


  {
    "name": "阜新市",
    "area": [
    "海州区",
    "新邱区",
    "太平区",
    "清河门区",
    "细河区",
    "彰武县",
    "阜新蒙古族自治县"] },


  {
    "name": "辽阳市",
    "area": [
    "白塔区",
    "文圣区",
    "宏伟区",
    "太子河区",
    "弓长岭区",
    "灯塔市",
    "辽阳县"] },


  {
    "name": "盘锦",
    "area": [
    "双台子区",
    "兴隆台区",
    "盘山县",
    "大洼县"] },


  {
    "name": "铁岭市",
    "area": [
    "银州区",
    "清河区",
    "调兵山市",
    "开原市",
    "铁岭县",
    "昌图县",
    "西丰县"] },


  {
    "name": "朝阳市",
    "area": [
    "双塔区",
    "龙城区",
    "凌源市",
    "北票市",
    "朝阳县",
    "建平县",
    "喀喇沁左翼蒙古族自治县"] },


  {
    "name": "葫芦岛市",
    "area": [
    "龙港区",
    "南票区",
    "连山区",
    "兴城市",
    "绥中县",
    "建昌县"] }] },




{
  "name": "吉林省",
  "city": [
  {
    "name": "长春市",
    "area": [
    "朝阳区",
    "宽城区",
    "二道区",
    "南关区",
    "绿园区",
    "双阳区",
    "九台市",
    "榆树市",
    "德惠市",
    "农安县"] },


  {
    "name": "吉林市",
    "area": [
    "船营区",
    "昌邑区",
    "龙潭区",
    "丰满区",
    "舒兰市",
    "桦甸市",
    "蛟河市",
    "磐石市",
    "永吉县"] },


  {
    "name": "四平",
    "area": [
    "铁西区",
    "铁东区",
    "公主岭市",
    "双辽市",
    "梨树县",
    "伊通满族自治县"] },


  {
    "name": "辽源市",
    "area": [
    "龙山区",
    "西安区",
    "东辽县",
    "东丰县"] },


  {
    "name": "通化市",
    "area": [
    "东昌区",
    "二道江区",
    "梅河口市",
    "集安市",
    "通化县",
    "辉南县",
    "柳河县"] },


  {
    "name": "白山市",
    "area": [
    "八道江区",
    "江源区",
    "临江市",
    "靖宇县",
    "抚松县",
    "长白朝鲜族自治县"] },


  {
    "name": "松原市",
    "area": [
    "宁江区",
    "乾安县",
    "长岭县",
    "扶余县",
    "前郭尔罗斯蒙古族自治县"] },


  {
    "name": "白城市",
    "area": [
    "洮北区",
    "大安市",
    "洮南市",
    "镇赉县",
    "通榆县"] },


  {
    "name": "延边朝鲜族自治州",
    "area": [
    "延吉市",
    "图们市",
    "敦化市",
    "龙井市",
    "珲春市",
    "和龙市",
    "安图县",
    "汪清县"] }] },




{
  "name": "黑龙江省",
  "city": [
  {
    "name": "哈尔滨市",
    "area": [
    "松北区",
    "道里区",
    "南岗区",
    "平房区",
    "香坊区",
    "道外区",
    "呼兰区",
    "阿城区",
    "双城市",
    "尚志市",
    "五常市",
    "宾县",
    "方正县",
    "通河县",
    "巴彦县",
    "延寿县",
    "木兰县",
    "依兰县"] },


  {
    "name": "齐齐哈尔市",
    "area": [
    "龙沙区",
    "昂昂溪区",
    "铁锋区",
    "建华区",
    "富拉尔基区",
    "碾子山区",
    "梅里斯达斡尔族区",
    "讷河市",
    "富裕县",
    "拜泉县",
    "甘南县",
    "依安县",
    "克山县",
    "泰来县",
    "克东县",
    "龙江县"] },


  {
    "name": "鹤岗市",
    "area": [
    "兴山区",
    "工农区",
    "南山区",
    "兴安区",
    "向阳区",
    "东山区",
    "萝北县",
    "绥滨县"] },


  {
    "name": "双鸭山",
    "area": [
    "尖山区",
    "岭东区",
    "四方台区",
    "宝山区",
    "集贤县",
    "宝清县",
    "友谊县",
    "饶河县"] },


  {
    "name": "鸡西市",
    "area": [
    "鸡冠区",
    "恒山区",
    "城子河区",
    "滴道区",
    "梨树区",
    "麻山区",
    "密山市",
    "虎林市",
    "鸡东县"] },


  {
    "name": "大庆市",
    "area": [
    "萨尔图区",
    "红岗区",
    "龙凤区",
    "让胡路区",
    "大同区",
    "林甸县",
    "肇州县",
    "肇源县",
    "杜尔伯特蒙古族自治县"] },


  {
    "name": "伊春市",
    "area": [
    "伊春区",
    "带岭区",
    "南岔区",
    "金山屯区",
    "西林区",
    "美溪区",
    "乌马河区",
    "翠峦区",
    "友好区",
    "上甘岭区",
    "五营区",
    "红星区",
    "新青区",
    "汤旺河区",
    "乌伊岭区",
    "铁力市",
    "嘉荫县"] },


  {
    "name": "牡丹江市",
    "area": [
    "爱民区",
    "东安区",
    "阳明区",
    "西安区",
    "绥芬河市",
    "宁安市",
    "海林市",
    "穆棱市",
    "林口县",
    "东宁县"] },


  {
    "name": "佳木斯市",
    "area": [
    "向阳区",
    "前进区",
    "东风区",
    "郊区",
    "同江市",
    "富锦市",
    "桦川县",
    "抚远县",
    "桦南县",
    "汤原县"] },


  {
    "name": "七台河市",
    "area": [
    "桃山区",
    "新兴区",
    "茄子河区",
    "勃利县"] },


  {
    "name": "黑河市",
    "area": [
    "爱辉区",
    "北安市",
    "五大连池市",
    "逊克县",
    "嫩江县",
    "孙吴县"] },


  {
    "name": "绥化市",
    "area": [
    "北林区",
    "安达市",
    "肇东市",
    "海伦市",
    "绥棱县",
    "兰西县",
    "明水县",
    "青冈县",
    "庆安县",
    "望奎县"] },


  {
    "name": "大兴安岭地区",
    "area": [
    "呼玛县",
    "塔河县",
    "漠河县",
    "大兴安岭辖区"] }] },




{
  "name": "上海市",
  "city": [
  {
    "name": "上海市",
    "area": [
    "黄浦区",
    "卢湾区",
    "徐汇区",
    "长宁区",
    "静安区",
    "普陀区",
    "闸北区",
    "虹口区",
    "杨浦区",
    "宝山区",
    "闵行区",
    "嘉定区",
    "松江区",
    "金山区",
    "青浦区",
    "南汇区",
    "奉贤区",
    "浦东新区",
    "崇明县"] }] },




{
  "name": "江苏省",
  "city": [
  {
    "name": "南京市",
    "area": [
    "玄武区",
    "白下区",
    "秦淮区",
    "建邺区",
    "鼓楼区",
    "下关区",
    "栖霞区",
    "雨花台区",
    "浦口区",
    "江宁区",
    "六合区",
    "溧水县",
    "高淳县"] },


  {
    "name": "苏州市",
    "area": [
    "金阊区",
    "平江区",
    "沧浪区",
    "虎丘区",
    "吴中区",
    "相城区",
    "常熟市",
    "张家港市",
    "昆山市",
    "吴江市",
    "太仓市"] },


  {
    "name": "无锡市",
    "area": [
    "崇安区",
    "南长区",
    "北塘区",
    "滨湖区",
    "锡山区",
    "惠山区",
    "江阴市",
    "宜兴市"] },


  {
    "name": "常州市",
    "area": [
    "钟楼区",
    "天宁区",
    "戚墅堰区",
    "新北区",
    "武进区",
    "金坛市",
    "溧阳市"] },


  {
    "name": "镇江市",
    "area": [
    "京口区",
    "润州区",
    "丹徒区",
    "丹阳市",
    "扬中市",
    "句容市"] },


  {
    "name": "南通市",
    "area": [
    "崇川区",
    "港闸区",
    "通州市",
    "如皋市",
    "海门市",
    "启东市",
    "海安县",
    "如东县"] },


  {
    "name": "泰州市",
    "area": [
    "海陵区",
    "高港区",
    "姜堰市",
    "泰兴市",
    "靖江市",
    "兴化市"] },


  {
    "name": "扬州市",
    "area": [
    "广陵区",
    "维扬区",
    "邗江区",
    "江都市",
    "仪征市",
    "高邮市",
    "宝应县"] },


  {
    "name": "盐城市",
    "area": [
    "亭湖区",
    "盐都区",
    "大丰市",
    "东台市",
    "建湖县",
    "射阳县",
    "阜宁县",
    "滨海县",
    "响水县"] },


  {
    "name": "连云港市",
    "area": [
    "新浦区",
    "海州区",
    "连云区",
    "东海县",
    "灌云县",
    "赣榆县",
    "灌南县"] },


  {
    "name": "徐州市",
    "area": [
    "云龙区",
    "鼓楼区",
    "九里区",
    "泉山区",
    "贾汪区",
    "邳州市",
    "新沂市",
    "铜山县",
    "睢宁县",
    "沛县",
    "丰县"] },


  {
    "name": "淮安市",
    "area": [
    "清河区",
    "清浦区",
    "楚州区",
    "淮阴区",
    "涟水县",
    "洪泽县",
    "金湖县",
    "盱眙县"] },


  {
    "name": "宿迁市",
    "area": [
    "宿城区",
    "宿豫区",
    "沭阳县",
    "泗阳县",
    "泗洪县"] }] },




{
  "name": "浙江省",
  "city": [
  {
    "name": "杭州市",
    "area": [
    "拱墅区",
    "西湖区",
    "上城区",
    "下城区",
    "江干区",
    "滨江区",
    "余杭区",
    "萧山区",
    "建德市",
    "富阳市",
    "临安市",
    "桐庐县",
    "淳安县"] },


  {
    "name": "宁波市",
    "area": [
    "海曙区",
    "江东区",
    "江北区",
    "镇海区",
    "北仑区",
    "鄞州区",
    "余姚市",
    "慈溪市",
    "奉化市",
    "宁海县",
    "象山县"] },


  {
    "name": "温州市",
    "area": [
    "鹿城区",
    "龙湾区",
    "瓯海区",
    "瑞安市",
    "乐清市",
    "永嘉县",
    "洞头县",
    "平阳县",
    "苍南县",
    "文成县",
    "泰顺县"] },


  {
    "name": "嘉兴市",
    "area": [
    "秀城区",
    "秀洲区",
    "海宁市",
    "平湖市",
    "桐乡市",
    "嘉善县",
    "海盐县"] },


  {
    "name": "湖州市",
    "area": [
    "吴兴区",
    "南浔区",
    "长兴县",
    "德清县",
    "安吉县"] },


  {
    "name": "绍兴市",
    "area": [
    "越城区",
    "诸暨市",
    "上虞市",
    "嵊州市",
    "绍兴县",
    "新昌县"] },


  {
    "name": "金华市",
    "area": [
    "婺城区",
    "金东区",
    "兰溪市",
    "义乌市",
    "东阳市",
    "永康市",
    "武义县",
    "浦江县",
    "磐安县"] },


  {
    "name": "衢州市",
    "area": [
    "柯城区",
    "衢江区",
    "江山市",
    "龙游县",
    "常山县",
    "开化县"] },


  {
    "name": "舟山市",
    "area": [
    "定海区",
    "普陀区",
    "岱山县",
    "嵊泗县"] },


  {
    "name": "台州市",
    "area": [
    "椒江区",
    "黄岩区",
    "路桥区",
    "临海市",
    "温岭市",
    "玉环县",
    "天台县",
    "仙居县",
    "三门县"] },


  {
    "name": "丽水市",
    "area": [
    "莲都区",
    "龙泉市",
    "缙云县",
    "青田县",
    "云和县",
    "遂昌县",
    "松阳县",
    "庆元县",
    "景宁畲族自治县"] }] },




{
  "name": "安徽省",
  "city": [
  {
    "name": "合肥市",
    "area": [
    "庐阳区",
    "瑶海区",
    "蜀山区",
    "包河区",
    "长丰县",
    "肥东县",
    "肥西县"] },


  {
    "name": "芜湖市",
    "area": [
    "镜湖区",
    "弋江区",
    "鸠江区",
    "三山区",
    "芜湖县",
    "南陵县",
    "繁昌县"] },


  {
    "name": "蚌埠市",
    "area": [
    "蚌山区",
    "龙子湖区",
    "禹会区",
    "淮上区",
    "怀远县",
    "固镇县",
    "五河县"] },


  {
    "name": "淮南市",
    "area": [
    "田家庵区",
    "大通区",
    "谢家集区",
    "八公山区",
    "潘集区",
    "凤台县"] },


  {
    "name": "马鞍山市",
    "area": [
    "雨山区",
    "花山区",
    "金家庄区",
    "当涂县"] },


  {
    "name": "淮北市",
    "area": [
    "相山区",
    "杜集区",
    "烈山区",
    "濉溪县"] },


  {
    "name": "铜陵市",
    "area": [
    "铜官山区",
    "狮子山区",
    "郊区",
    "铜陵县"] },


  {
    "name": "安庆市",
    "area": [
    "迎江区",
    "大观区",
    "宜秀区",
    "桐城市",
    "宿松县",
    "枞阳县",
    "太湖县",
    "怀宁县",
    "岳西县",
    "望江县",
    "潜山县"] },


  {
    "name": "黄山市",
    "area": [
    "屯溪区",
    "黄山区",
    "徽州区",
    "休宁县",
    "歙县",
    "祁门县",
    "黟县"] },


  {
    "name": "滁州市",
    "area": [
    "琅琊区",
    "南谯区",
    "天长市",
    "明光市",
    "全椒县",
    "来安县",
    "定远县",
    "凤阳县"] },


  {
    "name": "阜阳市",
    "area": [
    "颍州区",
    "颍东区",
    "颍泉区",
    "界首市",
    "临泉县",
    "颍上县",
    "阜南县",
    "太和县"] },


  {
    "name": "宿州市",
    "area": [
    "埇桥区",
    "萧县",
    "泗县",
    "砀山县",
    "灵璧县"] },


  {
    "name": "巢湖市",
    "area": [
    "居巢区",
    "含山县",
    "无为县",
    "庐江县",
    "和县"] },


  {
    "name": "六安市",
    "area": [
    "金安区",
    "裕安区",
    "寿县",
    "霍山县",
    "霍邱县",
    "舒城县",
    "金寨县"] },


  {
    "name": "亳州市",
    "area": [
    "谯城区",
    "利辛县",
    "涡阳县",
    "蒙城县"] },


  {
    "name": "池州市",
    "area": [
    "贵池区",
    "东至县",
    "石台县",
    "青阳县"] },


  {
    "name": "宣城市",
    "area": [
    "宣州区",
    "宁国市",
    "广德县",
    "郎溪县",
    "泾县",
    "旌德县",
    "绩溪县"] }] },




{
  "name": "福建省",
  "city": [
  {
    "name": "福州市",
    "area": [
    "鼓楼区",
    "台江区",
    "仓山区",
    "马尾区",
    "晋安区",
    "福清市",
    "长乐市",
    "闽侯县",
    "闽清县",
    "永泰县",
    "连江县",
    "罗源县",
    "平潭县"] },


  {
    "name": "厦门市",
    "area": [
    "思明区",
    "海沧区",
    "湖里区",
    "集美区",
    "同安区",
    "翔安区"] },


  {
    "name": "莆田市",
    "area": [
    "城厢区",
    "涵江区",
    "荔城区",
    "秀屿区",
    "仙游县"] },


  {
    "name": "三明市",
    "area": [
    "梅列区",
    "三元区",
    "永安市",
    "明溪县",
    "将乐县",
    "大田县",
    "宁化县",
    "建宁县",
    "沙县",
    "尤溪县",
    "清流县",
    "泰宁县"] },


  {
    "name": "泉州市",
    "area": [
    "鲤城区",
    "丰泽区",
    "洛江区",
    "泉港区",
    "石狮市",
    "晋江市",
    "南安市",
    "惠安县",
    "永春县",
    "安溪县",
    "德化县",
    "金门县"] },


  {
    "name": "漳州市",
    "area": [
    "芗城区",
    "龙文区",
    "龙海市",
    "平和县",
    "南靖县",
    "诏安县",
    "漳浦县",
    "华安县",
    "东山县",
    "长泰县",
    "云霄县"] },


  {
    "name": "南平市",
    "area": [
    "延平区",
    "建瓯市",
    "邵武市",
    "武夷山市",
    "建阳市",
    "松溪县",
    "光泽县",
    "顺昌县",
    "浦城县",
    "政和县"] },


  {
    "name": "龙岩市",
    "area": [
    "新罗区",
    "漳平市",
    "长汀县",
    "武平县",
    "上杭县",
    "永定县",
    "连城县"] },


  {
    "name": "宁德市",
    "area": [
    "蕉城区",
    "福安市",
    "福鼎市",
    "寿宁县",
    "霞浦县",
    "柘荣县",
    "屏南县",
    "古田县",
    "周宁县"] }] },




{
  "name": "江西省",
  "city": [
  {
    "name": "南昌市",
    "area": [
    "东湖区",
    "西湖区",
    "青云谱区",
    "湾里区",
    "青山湖区",
    "新建县",
    "南昌县",
    "进贤县",
    "安义县"] },


  {
    "name": "景德镇市",
    "area": [
    "珠山区",
    "昌江区",
    "乐平市",
    "浮梁县"] },


  {
    "name": "萍乡市",
    "area": [
    "安源区",
    "湘东区",
    "莲花县",
    "上栗县",
    "芦溪县"] },


  {
    "name": "九江市",
    "area": [
    "浔阳区",
    "庐山区",
    "瑞昌市",
    "九江县",
    "星子县",
    "武宁县",
    "彭泽县",
    "永修县",
    "修水县",
    "湖口县",
    "德安县",
    "都昌县"] },


  {
    "name": "新余市",
    "area": [
    "渝水区",
    "分宜县"] },


  {
    "name": "鹰潭市",
    "area": [
    "月湖区",
    "贵溪市",
    "余江县"] },


  {
    "name": "赣州市",
    "area": [
    "章贡区",
    "瑞金市",
    "南康市",
    "石城县",
    "安远县",
    "赣县",
    "宁都县",
    "寻乌县",
    "兴国县",
    "定南县",
    "上犹县",
    "于都县",
    "龙南县",
    "崇义县",
    "信丰县",
    "全南县",
    "大余县",
    "会昌县"] },


  {
    "name": "吉安市",
    "area": [
    "吉州区",
    "青原区",
    "井冈山市",
    "吉安县",
    "永丰县",
    "永新县",
    "新干县",
    "泰和县",
    "峡江县",
    "遂川县",
    "安福县",
    "吉水县",
    "万安县"] },


  {
    "name": "宜春市",
    "area": [
    "袁州区",
    "丰城市",
    "樟树市",
    "高安市",
    "铜鼓县",
    "靖安县",
    "宜丰县",
    "奉新县",
    "万载县",
    "上高县"] },


  {
    "name": "抚州市",
    "area": [
    "临川区",
    "南丰县",
    "乐安县",
    "金溪县",
    "南城县",
    "东乡县",
    "资溪县",
    "宜黄县",
    "广昌县",
    "黎川县",
    "崇仁县"] },


  {
    "name": "上饶市",
    "area": [
    "信州区",
    "德兴市",
    "上饶县",
    "广丰县",
    "鄱阳县",
    "婺源县",
    "铅山县",
    "余干县",
    "横峰县",
    "弋阳县",
    "玉山县",
    "万年县"] }] },




{
  "name": "山东省",
  "city": [
  {
    "name": "济南市",
    "area": [
    "市中区",
    "历下区",
    "天桥区",
    "槐荫区",
    "历城区",
    "长清区",
    "章丘市",
    "平阴县",
    "济阳县",
    "商河县"] },


  {
    "name": "青岛市",
    "area": [
    "市南区",
    "市北区",
    "城阳区",
    "四方区",
    "李沧区",
    "黄岛区",
    "崂山区",
    "胶南市",
    "胶州市",
    "平度市",
    "莱西市",
    "即墨市"] },


  {
    "name": "淄博市",
    "area": [
    "张店区",
    "临淄区",
    "淄川区",
    "博山区",
    "周村区",
    "桓台县",
    "高青县",
    "沂源县"] },


  {
    "name": "枣庄市",
    "area": [
    "市中区",
    "山亭区",
    "峄城区",
    "台儿庄区",
    "薛城区",
    "滕州市"] },


  {
    "name": "东营市",
    "area": [
    "东营区",
    "河口区",
    "垦利县",
    "广饶县",
    "利津县"] },


  {
    "name": "烟台市",
    "area": [
    "芝罘区",
    "福山区",
    "牟平区",
    "莱山区",
    "龙口市",
    "莱阳市",
    "莱州市",
    "招远市",
    "蓬莱市",
    "栖霞市",
    "海阳市",
    "长岛县"] },


  {
    "name": "潍坊市",
    "area": [
    "潍城区",
    "寒亭区",
    "坊子区",
    "奎文区",
    "青州市",
    "诸城市",
    "寿光市",
    "安丘市",
    "高密市",
    "昌邑市",
    "昌乐县",
    "临朐县"] },


  {
    "name": "济宁市",
    "area": [
    "市中区",
    "任城区",
    "曲阜市",
    "兖州市",
    "邹城市",
    "鱼台县",
    "金乡县",
    "嘉祥县",
    "微山县",
    "汶上县",
    "泗水县",
    "梁山县"] },


  {
    "name": "泰安市",
    "area": [
    "泰山区",
    "岱岳区",
    "新泰市",
    "肥城市",
    "宁阳县",
    "东平县"] },


  {
    "name": "威海市",
    "area": [
    "环翠区",
    "乳山市",
    "文登市",
    "荣成市"] },


  {
    "name": "日照市",
    "area": [
    "东港区",
    "岚山区",
    "五莲县",
    "莒县"] },


  {
    "name": "莱芜市",
    "area": [
    "莱城区",
    "钢城区"] },


  {
    "name": "临沂市",
    "area": [
    "兰山区",
    "罗庄区",
    "河东区",
    "沂南县",
    "郯城县",
    "沂水县",
    "苍山县",
    "费县",
    "平邑县",
    "莒南县",
    "蒙阴县",
    "临沭县"] },


  {
    "name": "德州市",
    "area": [
    "德城区",
    "乐陵市",
    "禹城市",
    "陵县",
    "宁津县",
    "齐河县",
    "武城县",
    "庆云县",
    "平原县",
    "夏津县",
    "临邑县"] },


  {
    "name": "聊城市",
    "area": [
    "东昌府区",
    "临清市",
    "高唐县",
    "阳谷县",
    "茌平县",
    "莘县",
    "东阿县",
    "冠县"] },


  {
    "name": "滨州市",
    "area": [
    "滨城区",
    "邹平县",
    "沾化县",
    "惠民县",
    "博兴县",
    "阳信县",
    "无棣县"] },


  {
    "name": "菏泽市",
    "area": [
    "牡丹区",
    "鄄城县",
    "单县",
    "郓城县",
    "曹县",
    "定陶县",
    "巨野县",
    "东明县",
    "成武县"] }] },




{
  "name": "河南省",
  "city": [
  {
    "name": "郑州市",
    "area": [
    "中原区",
    "金水区",
    "二七区",
    "管城回族区",
    "上街区",
    "惠济区",
    "巩义市",
    "新郑市",
    "新密市",
    "登封市",
    "荥阳市",
    "中牟县"] },


  {
    "name": "开封市",
    "area": [
    "鼓楼区",
    "龙亭区",
    "顺河回族区",
    "禹王台区",
    "金明区",
    "开封县",
    "尉氏县",
    "兰考县",
    "杞县",
    "通许县"] },


  {
    "name": "洛阳市",
    "area": [
    "西工区",
    "老城区",
    "涧西区",
    "瀍河回族区",
    "洛龙区",
    "吉利区",
    "偃师市",
    "孟津县",
    "汝阳县",
    "伊川县",
    "洛宁县",
    "嵩县",
    "宜阳县",
    "新安县",
    "栾川县"] },


  {
    "name": "平顶山市",
    "area": [
    "新华区",
    "卫东区",
    "湛河区",
    "石龙区",
    "汝州市",
    "舞钢市",
    "宝丰县",
    "叶县",
    "郏县",
    "鲁山县"] },


  {
    "name": "安阳市",
    "area": [
    "北关区",
    "文峰区",
    "殷都区",
    "龙安区",
    "林州市",
    "安阳县",
    "滑县",
    "内黄县",
    "汤阴县"] },


  {
    "name": "鹤壁市",
    "area": [
    "淇滨区",
    "山城区",
    "鹤山区",
    "浚县",
    "淇县"] },


  {
    "name": "新乡市",
    "area": [
    "卫滨区",
    "红旗区",
    "凤泉区",
    "牧野区",
    "卫辉市",
    "辉县市",
    "新乡县",
    "获嘉县",
    "原阳县",
    "长垣县",
    "封丘县",
    "延津县"] },


  {
    "name": "焦作市",
    "area": [
    "解放区",
    "中站区",
    "马村区",
    "山阳区",
    "沁阳市",
    "孟州市",
    "修武县",
    "温县",
    "武陟县",
    "博爱县"] },


  {
    "name": "濮阳市",
    "area": [
    "华龙区",
    "濮阳县",
    "南乐县",
    "台前县",
    "清丰县",
    "范县"] },


  {
    "name": "许昌市",
    "area": [
    "魏都区",
    "禹州市",
    "长葛市",
    "许昌县",
    "鄢陵县",
    "襄城县"] },


  {
    "name": "漯河市",
    "area": [
    "源汇区",
    "郾城区",
    "召陵区",
    "临颍县",
    "舞阳县"] },


  {
    "name": "三门峡市",
    "area": [
    "湖滨区",
    "义马市",
    "灵宝市",
    "渑池县",
    "卢氏县",
    "陕县"] },


  {
    "name": "南阳市",
    "area": [
    "卧龙区",
    "宛城区",
    "邓州市",
    "桐柏县",
    "方城县",
    "淅川县",
    "镇平县",
    "唐河县",
    "南召县",
    "内乡县",
    "新野县",
    "社旗县",
    "西峡县"] },


  {
    "name": "商丘市",
    "area": [
    "梁园区",
    "睢阳区",
    "永城市",
    "宁陵县",
    "虞城县",
    "民权县",
    "夏邑县",
    "柘城县",
    "睢县"] },


  {
    "name": "信阳市",
    "area": [
    "浉河区",
    "平桥区",
    "潢川县",
    "淮滨县",
    "息县",
    "新县",
    "商城县",
    "固始县",
    "罗山县",
    "光山县"] },


  {
    "name": "周口市",
    "area": [
    "川汇区",
    "项城市",
    "商水县",
    "淮阳县",
    "太康县",
    "鹿邑县",
    "西华县",
    "扶沟县",
    "沈丘县",
    "郸城县"] },


  {
    "name": "驻马店市",
    "area": [
    "驿城区",
    "确山县",
    "新蔡县",
    "上蔡县",
    "西平县",
    "泌阳县",
    "平舆县",
    "汝南县",
    "遂平县",
    "正阳县"] },


  {
    "name": "焦作市",
    "area": [
    "济源市"] }] },




{
  "name": "湖北省",
  "city": [
  {
    "name": "武汉市",
    "area": [
    "江岸区",
    "武昌区",
    "江汉区",
    "硚口区",
    "汉阳区",
    "青山区",
    "洪山区",
    "东西湖区",
    "汉南区",
    "蔡甸区",
    "江夏区",
    "黄陂区",
    "新洲区"] },


  {
    "name": "黄石市",
    "area": [
    "黄石港区",
    "西塞山区",
    "下陆区",
    "铁山区",
    "大冶市",
    "阳新县"] },


  {
    "name": "十堰市",
    "area": [
    "张湾区",
    "茅箭区",
    "丹江口市",
    "郧县",
    "竹山县",
    "房县",
    "郧西县",
    "竹溪县"] },


  {
    "name": "荆州市",
    "area": [
    "沙市区",
    "荆州区",
    "洪湖市",
    "石首市",
    "松滋市",
    "监利县",
    "公安县",
    "江陵县"] },


  {
    "name": "宜昌市",
    "area": [
    "西陵区",
    "伍家岗区",
    "点军区",
    "猇亭区",
    "夷陵区",
    "宜都市",
    "当阳市",
    "枝江市",
    "秭归县",
    "远安县",
    "兴山县",
    "五峰土家族自治县",
    "长阳土家族自治县"] },


  {
    "name": "襄樊市",
    "area": [
    "襄城区",
    "樊城区",
    "襄阳区",
    "老河口市",
    "枣阳市",
    "宜城市",
    "南漳县",
    "谷城县",
    "保康县"] },


  {
    "name": "鄂州市",
    "area": [
    "鄂城区",
    "华容区",
    "梁子湖区"] },


  {
    "name": "荆门市",
    "area": [
    "东宝区",
    "掇刀区",
    "钟祥市",
    "京山县",
    "沙洋县"] },


  {
    "name": "孝感市",
    "area": [
    "孝南区",
    "应城市",
    "安陆市",
    "汉川市",
    "云梦县",
    "大悟县",
    "孝昌县"] },


  {
    "name": "黄冈市",
    "area": [
    "黄州区",
    "麻城市",
    "武穴市",
    "红安县",
    "罗田县",
    "浠水县",
    "蕲春县",
    "黄梅县",
    "英山县",
    "团风县"] },


  {
    "name": "咸宁市",
    "area": [
    "咸安区",
    "赤壁市",
    "嘉鱼县",
    "通山县",
    "崇阳县",
    "通城县"] },


  {
    "name": "随州市",
    "area": [
    "曾都区",
    "广水市"] },


  {
    "name": "恩施土家族苗族自治州",
    "area": [
    "恩施市",
    "利川市",
    "建始县",
    "来凤县",
    "巴东县",
    "鹤峰县",
    "宣恩县",
    "咸丰县"] },


  {
    "name": "仙桃市",
    "area": [
    "仙桃"] },


  {
    "name": "天门市",
    "area": [
    "天门"] },


  {
    "name": "潜江市",
    "area": [
    "潜江"] },


  {
    "name": "神农架林区",
    "area": [
    "神农架林区"] }] },




{
  "name": "湖南省",
  "city": [
  {
    "name": "长沙市",
    "area": [
    "岳麓区",
    "芙蓉区",
    "天心区",
    "开福区",
    "雨花区",
    "浏阳市",
    "长沙县",
    "望城县",
    "宁乡县"] },


  {
    "name": "株洲市",
    "area": [
    "天元区",
    "荷塘区",
    "芦淞区",
    "石峰区",
    "醴陵市",
    "株洲县",
    "炎陵县",
    "茶陵县",
    "攸县"] },


  {
    "name": "湘潭市",
    "area": [
    "岳塘区",
    "雨湖区",
    "湘乡市",
    "韶山市",
    "湘潭县"] },


  {
    "name": "衡阳市",
    "area": [
    "雁峰区",
    "珠晖区",
    "石鼓区",
    "蒸湘区",
    "南岳区",
    "耒阳市",
    "常宁市",
    "衡阳县",
    "衡东县",
    "衡山县",
    "衡南县",
    "祁东县"] },


  {
    "name": "邵阳市",
    "area": [
    "双清区",
    "大祥区",
    "北塔区",
    "武冈市",
    "邵东县",
    "洞口县",
    "新邵县",
    "绥宁县",
    "新宁县",
    "邵阳县",
    "隆回县",
    "城步苗族自治县"] },


  {
    "name": "岳阳市",
    "area": [
    "岳阳楼区",
    "云溪区",
    "君山区",
    "临湘市",
    "汨罗市",
    "岳阳县",
    "湘阴县",
    "平江县",
    "华容县"] },


  {
    "name": "常德市",
    "area": [
    "武陵区",
    "鼎城区",
    "津市市",
    "澧县",
    "临澧县",
    "桃源县",
    "汉寿县",
    "安乡县",
    "石门县"] },


  {
    "name": "张家界市",
    "area": [
    "永定区",
    "武陵源区",
    "慈利县",
    "桑植县"] },


  {
    "name": "益阳市",
    "area": [
    "赫山区",
    "资阳区",
    "沅江市",
    "桃江县",
    "南县",
    "安化县"] },


  {
    "name": "郴州市",
    "area": [
    "北湖区",
    "苏仙区",
    "资兴市",
    "宜章县",
    "汝城县",
    "安仁县",
    "嘉禾县",
    "临武县",
    "桂东县",
    "永兴县",
    "桂阳县"] },


  {
    "name": "永州市",
    "area": [
    "冷水滩区",
    "零陵区",
    "祁阳县",
    "蓝山县",
    "宁远县",
    "新田县",
    "东安县",
    "江永县",
    "道县",
    "双牌县",
    "江华瑶族自治县"] },


  {
    "name": "怀化市",
    "area": [
    "鹤城区",
    "洪江市",
    "会同县",
    "沅陵县",
    "辰溪县",
    "溆浦县",
    "中方县",
    "新晃侗族自治县",
    "芷江侗族自治县",
    "通道侗族自治县",
    "靖州苗族侗族自治县",
    "麻阳苗族自治县"] },


  {
    "name": "娄底市",
    "area": [
    "娄星区",
    "冷水江市",
    "涟源市",
    "新化县",
    "双峰县"] },


  {
    "name": "湘西土家族苗族自治州",
    "area": [
    "吉首市",
    "古丈县",
    "龙山县",
    "永顺县",
    "凤凰县",
    "泸溪县",
    "保靖县",
    "花垣县"] }] },




{
  "name": "广东省",
  "city": [
  {
    "name": "广州市",
    "area": [
    "越秀区",
    "荔湾区",
    "海珠区",
    "天河区",
    "白云区",
    "黄埔区",
    "番禺区",
    "花都区",
    "南沙区",
    "萝岗区",
    "增城市",
    "从化市"] },


  {
    "name": "深圳市",
    "area": [
    "福田区",
    "罗湖区",
    "南山区",
    "宝安区",
    "龙岗区",
    "盐田区"] },


  {
    "name": "东莞市",
    "area": [
    "莞城",
    "常平",
    "塘厦",
    "塘厦",
    "塘厦"] },


  {
    "name": "中山市",
    "area": [
    "中山"] },


  {
    "name": "潮州市",
    "area": [
    "湘桥区",
    "潮安县",
    "饶平县"] },


  {
    "name": "揭阳市",
    "area": [
    "榕城区",
    "揭东县",
    "揭西县",
    "惠来县",
    "普宁市"] },


  {
    "name": "云浮市",
    "area": [
    "云城区",
    "新兴县",
    "郁南县",
    "云安县",
    "罗定市"] },


  {
    "name": "珠海市",
    "area": [
    "香洲区",
    "斗门区",
    "金湾区"] },


  {
    "name": "汕头市",
    "area": [
    "金平区",
    "濠江区",
    "龙湖区",
    "潮阳区",
    "潮南区",
    "澄海区",
    "南澳县"] },


  {
    "name": "韶关市",
    "area": [
    "浈江区",
    "武江区",
    "曲江区",
    "乐昌市",
    "南雄市",
    "始兴县",
    "仁化县",
    "翁源县",
    "新丰县",
    "乳源瑶族自治县"] },


  {
    "name": "佛山市",
    "area": [
    "禅城区",
    "南海区",
    "顺德区",
    "三水区",
    "高明区"] },


  {
    "name": "江门市",
    "area": [
    "蓬江区",
    "江海区",
    "新会区",
    "恩平市",
    "台山市",
    "开平市",
    "鹤山市"] },


  {
    "name": "湛江市",
    "area": [
    "赤坎区",
    "霞山区",
    "坡头区",
    "麻章区",
    "吴川市",
    "廉江市",
    "雷州市",
    "遂溪县",
    "徐闻县"] },


  {
    "name": "茂名市",
    "area": [
    "茂南区",
    "茂港区",
    "化州市",
    "信宜市",
    "高州市",
    "电白县"] },


  {
    "name": "肇庆市",
    "area": [
    "端州区",
    "鼎湖区",
    "高要市",
    "四会市",
    "广宁县",
    "怀集县",
    "封开县",
    "德庆县"] },


  {
    "name": "惠州市",
    "area": [
    "惠城区",
    "惠阳区",
    "博罗县",
    "惠东县",
    "龙门县"] },


  {
    "name": "梅州市",
    "area": [
    "梅江区",
    "兴宁市",
    "梅县",
    "大埔县",
    "丰顺县",
    "五华县",
    "平远县",
    "蕉岭县"] },


  {
    "name": "汕尾市",
    "area": [
    "城区",
    "陆丰市",
    "海丰县",
    "陆河县"] },


  {
    "name": "河源市",
    "area": [
    "源城区",
    "紫金县",
    "龙川县",
    "连平县",
    "和平县",
    "东源县"] },


  {
    "name": "阳江市",
    "area": [
    "江城区",
    "阳春市",
    "阳西县",
    "阳东县"] },


  {
    "name": "清远市",
    "area": [
    "清城区",
    "英德市",
    "连州市",
    "佛冈县",
    "阳山县",
    "清新县",
    "连山壮族瑶族自治县",
    "连南瑶族自治县"] }] },




{
  "name": "广西",
  "city": [
  {
    "name": "南宁市",
    "area": [
    "青秀区",
    "兴宁区",
    "西乡塘区",
    "良庆区",
    "江南区",
    "邕宁区",
    "武鸣县",
    "隆安县",
    "马山县",
    "上林县",
    "宾阳县",
    "横县"] },


  {
    "name": "柳州市",
    "area": [
    "城中区",
    "鱼峰区",
    "柳北区",
    "柳南区",
    "柳江县",
    "柳城县",
    "鹿寨县",
    "融安县",
    "融水苗族自治县",
    "三江侗族自治县"] },


  {
    "name": "桂林市",
    "area": [
    "象山区",
    "秀峰区",
    "叠彩区",
    "七星区",
    "雁山区",
    "阳朔县",
    "临桂县",
    "灵川县",
    "全州县",
    "平乐县",
    "兴安县",
    "灌阳县",
    "荔浦县",
    "资源县",
    "永福县",
    "龙胜各族自治县",
    "恭城瑶族自治县"] },


  {
    "name": "梧州市",
    "area": [
    "万秀区",
    "蝶山区",
    "长洲区",
    "岑溪市",
    "苍梧县",
    "藤县",
    "蒙山县"] },


  {
    "name": "北海市",
    "area": [
    "海城区",
    "银海区",
    "铁山港区",
    "合浦县"] },


  {
    "name": "防城港市",
    "area": [
    "港口区",
    "防城区",
    "东兴市",
    "上思县"] },


  {
    "name": "钦州市",
    "area": [
    "钦南区",
    "钦北区",
    "灵山县",
    "浦北县"] },


  {
    "name": "贵港市",
    "area": [
    "港北区",
    "港南区",
    "覃塘区",
    "桂平市",
    "平南县"] },


  {
    "name": "玉林市",
    "area": [
    "玉州区",
    "北流市",
    "容县",
    "陆川县",
    "博白县",
    "兴业县"] },


  {
    "name": "百色市",
    "area": [
    "右江区",
    "凌云县",
    "平果县",
    "西林县",
    "乐业县",
    "德保县",
    "田林县",
    "田阳县",
    "靖西县",
    "田东县",
    "那坡县",
    "隆林各族自治县"] },


  {
    "name": "贺州市",
    "area": [
    "八步区",
    "钟山县",
    "昭平县",
    "富川瑶族自治县"] },


  {
    "name": "河池市",
    "area": [
    "金城江区",
    "宜州市",
    "天峨县",
    "凤山县",
    "南丹县",
    "东兰县",
    "都安瑶族自治县",
    "罗城仫佬族自治县",
    "巴马瑶族自治县",
    "环江毛南族自治县",
    "大化瑶族自治县"] },


  {
    "name": "来宾市",
    "area": [
    "兴宾区",
    "合山市",
    "象州县",
    "武宣县",
    "忻城县",
    "金秀瑶族自治县"] },


  {
    "name": "崇左市",
    "area": [
    "江州区",
    "凭祥市",
    "宁明县",
    "扶绥县",
    "龙州县",
    "大新县",
    "天等县"] }] },




{
  "name": "海南省",
  "city": [
  {
    "name": "海口市",
    "area": [
    "龙华区",
    "秀英区",
    "琼山区",
    "美兰区"] },


  {
    "name": "三亚市",
    "area": [
    "三亚市"] },


  {
    "name": "五指山市",
    "area": [
    "五指山"] },


  {
    "name": "琼海市",
    "area": [
    "琼海"] },


  {
    "name": "儋州市",
    "area": [
    "儋州"] },


  {
    "name": "文昌市",
    "area": [
    "文昌"] },


  {
    "name": "万宁市",
    "area": [
    "万宁"] },


  {
    "name": "东方市",
    "area": [
    "东方"] },


  {
    "name": "澄迈县",
    "area": [
    "澄迈县"] },


  {
    "name": "定安县",
    "area": [
    "定安县"] },


  {
    "name": "屯昌县",
    "area": [
    "屯昌县"] },


  {
    "name": "临高县",
    "area": [
    "临高县"] },


  {
    "name": "白沙黎族自治县",
    "area": [
    "白沙黎族自治县"] },


  {
    "name": "昌江黎族自治县",
    "area": [
    "昌江黎族自治县"] },


  {
    "name": "乐东黎族自治县",
    "area": [
    "乐东黎族自治县"] },


  {
    "name": "陵水黎族自治县",
    "area": [
    "陵水黎族自治县"] },


  {
    "name": "保亭黎族苗族自治县",
    "area": [
    "保亭黎族苗族自治县"] },


  {
    "name": "琼中黎族苗族自治县",
    "area": [
    "琼中黎族苗族自治县"] }] },




{
  "name": "重庆市",
  "city": [
  {
    "name": "重庆市",
    "area": [
    "渝中区",
    "大渡口区",
    "江北区",
    "南岸区",
    "北碚区",
    "渝北区",
    "巴南区",
    "长寿区",
    "双桥区",
    "沙坪坝区",
    "万盛区",
    "万州区",
    "涪陵区",
    "黔江区",
    "永川区",
    "合川区",
    "江津区",
    "九龙坡区",
    "南川区",
    "綦江县",
    "潼南县",
    "荣昌县",
    "璧山县",
    "大足县",
    "铜梁县",
    "梁平县",
    "开县",
    "忠县",
    "城口县",
    "垫江县",
    "武隆县",
    "丰都县",
    "奉节县",
    "云阳县",
    "巫溪县",
    "巫山县",
    "石柱土家族自治县",
    "秀山土家族苗族自治县",
    "酉阳土家族苗族自治县",
    "彭水苗族土家族自治县"] }] },




{
  "name": "四川省",
  "city": [
  {
    "name": "成都市",
    "area": [
    "青羊区",
    "锦江区",
    "金牛区",
    "武侯区",
    "成华区",
    "龙泉驿区",
    "青白江区",
    "新都区",
    "温江区",
    "都江堰市",
    "彭州市",
    "邛崃市",
    "崇州市",
    "金堂县",
    "郫县",
    "新津县",
    "双流县",
    "蒲江县",
    "大邑县"] },


  {
    "name": "自贡市",
    "area": [
    "大安区",
    "自流井区",
    "贡井区",
    "沿滩区",
    "荣县",
    "富顺县"] },


  {
    "name": "攀枝花市",
    "area": [
    "仁和区",
    "米易县",
    "盐边县",
    "东区",
    "西区"] },


  {
    "name": "泸州市",
    "area": [
    "江阳区",
    "纳溪区",
    "龙马潭区",
    "泸县",
    "合江县",
    "叙永县",
    "古蔺县"] },


  {
    "name": "德阳市",
    "area": [
    "旌阳区",
    "广汉市",
    "什邡市",
    "绵竹市",
    "罗江县",
    "中江县"] },


  {
    "name": "绵阳市",
    "area": [
    "涪城区",
    "游仙区",
    "江油市",
    "盐亭县",
    "三台县",
    "平武县",
    "安县",
    "梓潼县",
    "北川羌族自治县"] },


  {
    "name": "广元市",
    "area": [
    "元坝区",
    "朝天区",
    "青川县",
    "旺苍县",
    "剑阁县",
    "苍溪县",
    "市中区"] },


  {
    "name": "遂宁市",
    "area": [
    "船山区",
    "安居区",
    "射洪县",
    "蓬溪县",
    "大英县"] },


  {
    "name": "内江市",
    "area": [
    "市中区",
    "东兴区",
    "资中县",
    "隆昌县",
    "威远县"] },


  {
    "name": "乐山市",
    "area": [
    "市中区",
    "五通桥区",
    "沙湾区",
    "金口河区",
    "峨眉山市",
    "夹江县",
    "井研县",
    "犍为县",
    "沐川县",
    "马边彝族自治县",
    "峨边彝族自治县"] },


  {
    "name": "南充",
    "area": [
    "顺庆区",
    "高坪区",
    "嘉陵区",
    "阆中市",
    "营山县",
    "蓬安县",
    "仪陇县",
    "南部县",
    "西充县"] },


  {
    "name": "眉山市",
    "area": [
    "东坡区",
    "仁寿县",
    "彭山县",
    "洪雅县",
    "丹棱县",
    "青神县"] },


  {
    "name": "宜宾市",
    "area": [
    "翠屏区",
    "宜宾县",
    "兴文县",
    "南溪县",
    "珙县",
    "长宁县",
    "高县",
    "江安县",
    "筠连县",
    "屏山县"] },


  {
    "name": "广安市",
    "area": [
    "广安区",
    "华蓥市",
    "岳池县",
    "邻水县",
    "武胜县"] },


  {
    "name": "达州市",
    "area": [
    "通川区",
    "万源市",
    "达县",
    "渠县",
    "宣汉县",
    "开江县",
    "大竹县"] },


  {
    "name": "雅安市",
    "area": [
    "雨城区",
    "芦山县",
    "石棉县",
    "名山县",
    "天全县",
    "荥经县",
    "宝兴县",
    "汉源县"] },


  {
    "name": "巴中市",
    "area": [
    "巴州区",
    "南江县",
    "平昌县",
    "通江县"] },


  {
    "name": "资阳市",
    "area": [
    "雁江区",
    "简阳市",
    "安岳县",
    "乐至县"] },


  {
    "name": "阿坝藏族羌族自治州",
    "area": [
    "马尔康县",
    "九寨沟县",
    "红原县",
    "汶川县",
    "阿坝县",
    "理县",
    "若尔盖县",
    "小金县",
    "黑水县",
    "金川县",
    "松潘县",
    "壤塘县",
    "茂县"] },


  {
    "name": "甘孜藏族自治州",
    "area": [
    "康定县",
    "丹巴县",
    "炉霍县",
    "九龙县",
    "甘孜县",
    "雅江县",
    "新龙县",
    "道孚县",
    "白玉县",
    "理塘县",
    "德格县",
    "乡城县",
    "石渠县",
    "稻城县",
    "色达县",
    "巴塘县",
    "泸定县",
    "得荣县"] },


  {
    "name": "凉山彝族自治州",
    "area": [
    "西昌市",
    "美姑县",
    "昭觉县",
    "金阳县",
    "甘洛县",
    "布拖县",
    "雷波县",
    "普格县",
    "宁南县",
    "喜德县",
    "会东县",
    "越西县",
    "会理县",
    "盐源县",
    "德昌县",
    "冕宁县",
    "木里藏族自治县"] }] },




{
  "name": "贵州省",
  "city": [
  {
    "name": "贵阳市",
    "area": [
    "南明区",
    "云岩区",
    "花溪区",
    "乌当区",
    "白云区",
    "小河区",
    "清镇市",
    "开阳县",
    "修文县",
    "息烽县"] },


  {
    "name": "六盘水市",
    "area": [
    "钟山区",
    "水城县",
    "盘县",
    "六枝特区"] },


  {
    "name": "遵义市",
    "area": [
    "红花岗区",
    "汇川区",
    "赤水市",
    "仁怀市",
    "遵义县",
    "绥阳县",
    "桐梓县",
    "习水县",
    "凤冈县",
    "正安县",
    "余庆县",
    "湄潭县",
    "道真仡佬族苗族自治县",
    "务川仡佬族苗族自治县"] },


  {
    "name": "安顺市",
    "area": [
    "西秀区",
    "普定县",
    "平坝县",
    "镇宁布依族苗族自治县",
    "紫云苗族布依族自治县",
    "关岭布依族苗族自治县"] },


  {
    "name": "铜仁地区",
    "area": [
    "铜仁市",
    "德江县",
    "江口县",
    "思南县",
    "石阡县",
    "玉屏侗族自治县",
    "松桃苗族自治县",
    "印江土家族苗族自治县",
    "沿河土家族自治县",
    "万山特区"] },


  {
    "name": "毕节地区",
    "area": [
    "毕节市",
    "黔西县",
    "大方县",
    "织金县",
    "金沙县",
    "赫章县",
    "纳雍县",
    "威宁彝族回族苗族自治县"] },


  {
    "name": "黔西南布依族苗族自治州",
    "area": [
    "兴义市",
    "望谟县",
    "兴仁县",
    "普安县",
    "册亨县",
    "晴隆县",
    "贞丰县",
    "安龙县"] },


  {
    "name": "黔东南苗族侗族自治州",
    "area": [
    "凯里市",
    "施秉县",
    "从江县",
    "锦屏县",
    "镇远县",
    "麻江县",
    "台江县",
    "天柱县",
    "黄平县",
    "榕江县",
    "剑河县",
    "三穗县",
    "雷山县",
    "黎平县",
    "岑巩县",
    "丹寨县"] },


  {
    "name": "黔南布依族苗族自治州",
    "area": [
    "都匀市",
    "福泉市",
    "贵定县",
    "惠水县",
    "罗甸县",
    "瓮安县",
    "荔波县",
    "龙里县",
    "平塘县",
    "长顺县",
    "独山县",
    "三都水族自治县"] }] },




{
  "name": "云南省",
  "city": [
  {
    "name": "昆明市",
    "area": [
    "盘龙区",
    "五华区",
    "官渡区",
    "西山区",
    "东川区",
    "安宁市",
    "呈贡县",
    "晋宁县",
    "富民县",
    "宜良县",
    "嵩明县",
    "石林彝族自治县",
    "禄劝彝族苗族自治县",
    "寻甸回族彝族自治县"] },


  {
    "name": "曲靖市",
    "area": [
    "麒麟区",
    "宣威市",
    "马龙县",
    "沾益县",
    "富源县",
    "罗平县",
    "师宗县",
    "陆良县",
    "会泽县"] },


  {
    "name": "玉溪市",
    "area": [
    "红塔区",
    "江川县",
    "澄江县",
    "通海县",
    "华宁县",
    "易门县",
    "峨山彝族自治县",
    "新平彝族傣族自治县",
    "元江哈尼族彝族傣族自治县"] },


  {
    "name": "保山市",
    "area": [
    "隆阳区",
    "施甸县",
    "腾冲县",
    "龙陵县",
    "昌宁县"] },


  {
    "name": "昭通市",
    "area": [
    "昭阳区",
    "鲁甸县",
    "巧家县",
    "盐津县",
    "大关县",
    "永善县",
    "绥江县",
    "镇雄县",
    "彝良县",
    "威信县",
    "水富县"] },


  {
    "name": "丽江市",
    "area": [
    "古城区",
    "永胜县",
    "华坪县",
    "玉龙纳西族自治县",
    "宁蒗彝族自治县"] },


  {
    "name": "普洱市",
    "area": [
    "思茅区",
    "普洱哈尼族彝族自治县",
    "墨江哈尼族自治县",
    "景东彝族自治县",
    "景谷傣族彝族自治县",
    "镇沅彝族哈尼族拉祜族自治县",
    "江城哈尼族彝族自治县",
    "孟连傣族拉祜族佤族自治县",
    "澜沧拉祜族自治县",
    "西盟佤族自治县"] },


  {
    "name": "临沧市",
    "area": [
    "临翔区",
    "凤庆县",
    "云县",
    "永德县",
    "镇康县",
    "双江拉祜族佤族布朗族傣族自治县",
    "耿马傣族佤族自治县",
    "沧源佤族自治县"] },


  {
    "name": "德宏傣族景颇族自治州",
    "area": [
    "潞西市",
    "瑞丽市",
    "梁河县",
    "盈江县",
    "陇川县"] },


  {
    "name": "怒江傈僳族自治州",
    "area": [
    "泸水县",
    "福贡县",
    "贡山独龙族怒族自治县",
    "兰坪白族普米族自治县"] },


  {
    "name": "迪庆藏族自治州",
    "area": [
    "香格里拉县",
    "德钦县",
    "维西傈僳族自治县"] },


  {
    "name": "大理白族自治州",
    "area": [
    "大理市",
    "祥云县",
    "宾川县",
    "弥渡县",
    "永平县",
    "云龙县",
    "洱源县",
    "剑川县",
    "鹤庆县",
    "漾濞彝族自治县",
    "南涧彝族自治县",
    "巍山彝族回族自治县"] },


  {
    "name": "楚雄彝族自治州",
    "area": [
    "楚雄市",
    "双柏县",
    "牟定县",
    "南华县",
    "姚安县",
    "大姚县",
    "永仁县",
    "元谋县",
    "武定县",
    "禄丰县"] },


  {
    "name": "红河哈尼族彝族自治州",
    "area": [
    "蒙自县",
    "个旧市",
    "开远市",
    "绿春县",
    "建水县",
    "石屏县",
    "弥勒县",
    "泸西县",
    "元阳县",
    "红河县",
    "金平苗族瑶族傣族自治县",
    "河口瑶族自治县",
    "屏边苗族自治县"] },


  {
    "name": "文山壮族苗族自治州",
    "area": [
    "文山县",
    "砚山县",
    "西畴县",
    "麻栗坡县",
    "马关县",
    "丘北县",
    "广南县",
    "富宁县"] },


  {
    "name": "西双版纳傣族自治州",
    "area": [
    "景洪市",
    "勐海县",
    "勐腊县"] }] },




{
  "name": "西藏",
  "city": [
  {
    "name": "拉萨市",
    "area": [
    "城关区",
    "林周县",
    "当雄县",
    "尼木县",
    "曲水县",
    "堆龙德庆县",
    "达孜县",
    "墨竹工卡县"] },


  {
    "name": "那曲地区",
    "area": [
    "那曲县",
    "嘉黎县",
    "比如县",
    "聂荣县",
    "安多县",
    "申扎县",
    "索县",
    "班戈县",
    "巴青县",
    "尼玛县"] },


  {
    "name": "昌都地区",
    "area": [
    "昌都县",
    "江达县",
    "贡觉县",
    "类乌齐县",
    "丁青县",
    "察雅县",
    "八宿县",
    "左贡县",
    "芒康县",
    "洛隆县",
    "边坝县"] },


  {
    "name": "林芝地区",
    "area": [
    "林芝县",
    "工布江达县",
    "米林县",
    "墨脱县",
    "波密县",
    "察隅县",
    "朗县"] },


  {
    "name": "山南地区",
    "area": [
    "乃东县",
    "扎囊县",
    "贡嘎县",
    "桑日县",
    "琼结县",
    "曲松县",
    "措美县",
    "洛扎县",
    "加查县",
    "隆子县",
    "错那县",
    "浪卡子县"] },


  {
    "name": "日喀则地区",
    "area": [
    "日喀则市",
    "南木林县",
    "江孜县",
    "定日县",
    "萨迦县",
    "拉孜县",
    "昂仁县",
    "谢通门县",
    "白朗县",
    "仁布县",
    "康马县",
    "定结县",
    "仲巴县",
    "亚东县",
    "吉隆县",
    "聂拉木县",
    "萨嘎县",
    "岗巴县"] },


  {
    "name": "阿里地区",
    "area": [
    "噶尔县",
    "普兰县",
    "札达县",
    "日土县",
    "革吉县",
    "改则县",
    "措勤县"] }] },




{
  "name": "陕西省",
  "city": [
  {
    "name": "西安市",
    "area": [
    "莲湖区",
    "新城区",
    "碑林区",
    "雁塔区",
    "灞桥区",
    "未央区",
    "阎良区",
    "临潼区",
    "长安区",
    "高陵县",
    "蓝田县",
    "户县",
    "周至县"] },


  {
    "name": "铜川市",
    "area": [
    "耀州区",
    "王益区",
    "印台区",
    "宜君县"] },


  {
    "name": "宝鸡市",
    "area": [
    "渭滨区",
    "金台区",
    "陈仓区",
    "岐山县",
    "凤翔县",
    "陇县",
    "太白县",
    "麟游县",
    "扶风县",
    "千阳县",
    "眉县",
    "凤县"] },


  {
    "name": "咸阳市",
    "area": [
    "秦都区",
    "渭城区",
    "杨陵区",
    "兴平市",
    "礼泉县",
    "泾阳县",
    "永寿县",
    "三原县",
    "彬县",
    "旬邑县",
    "长武县",
    "乾县",
    "武功县",
    "淳化县"] },


  {
    "name": "渭南市",
    "area": [
    "临渭区",
    "韩城市",
    "华阴市",
    "蒲城县",
    "潼关县",
    "白水县",
    "澄城县",
    "华县",
    "合阳县",
    "富平县",
    "大荔县"] },


  {
    "name": "延安市",
    "area": [
    "宝塔区",
    "安塞县",
    "洛川县",
    "子长县",
    "黄陵县",
    "延川县",
    "富县",
    "延长县",
    "甘泉县",
    "宜川县",
    "志丹县",
    "黄龙县",
    "吴起县"] },


  {
    "name": "汉中市",
    "area": [
    "汉台区",
    "留坝县",
    "镇巴县",
    "城固县",
    "南郑县",
    "洋县",
    "宁强县",
    "佛坪县",
    "勉县",
    "西乡县",
    "略阳县"] },


  {
    "name": "榆林市",
    "area": [
    "榆阳区",
    "清涧县",
    "绥德县",
    "神木县",
    "佳县",
    "府谷县",
    "子洲县",
    "靖边县",
    "横山县",
    "米脂县",
    "吴堡县",
    "定边县"] },


  {
    "name": "安康市",
    "area": [
    "汉滨区",
    "紫阳县",
    "岚皋县",
    "旬阳县",
    "镇坪县",
    "平利县",
    "石泉县",
    "宁陕县",
    "白河县",
    "汉阴县"] },


  {
    "name": "商洛市",
    "area": [
    "商州区",
    "镇安县",
    "山阳县",
    "洛南县",
    "商南县",
    "丹凤县",
    "柞水县"] }] },




{
  "name": "甘肃省",
  "city": [
  {
    "name": "兰州市",
    "area": [
    "城关区",
    "七里河区",
    "西固区",
    "安宁区",
    "红古区",
    "永登县",
    "皋兰县",
    "榆中县"] },


  {
    "name": "嘉峪关市",
    "area": [
    "嘉峪关市"] },


  {
    "name": "金昌市",
    "area": [
    "金川区",
    "永昌县"] },


  {
    "name": "白银市",
    "area": [
    "白银区",
    "平川区",
    "靖远县",
    "会宁县",
    "景泰县"] },


  {
    "name": "天水市",
    "area": [
    "清水县",
    "秦安县",
    "甘谷县",
    "武山县",
    "张家川回族自治县",
    "北道区",
    "秦城区"] },


  {
    "name": "武威市",
    "area": [
    "凉州区",
    "民勤县",
    "古浪县",
    "天祝藏族自治县"] },


  {
    "name": "酒泉市",
    "area": [
    "肃州区",
    "玉门市",
    "敦煌市",
    "金塔县",
    "肃北蒙古族自治县",
    "阿克塞哈萨克族自治县",
    "安西县"] },


  {
    "name": "张掖市",
    "area": [
    "甘州区",
    "民乐县",
    "临泽县",
    "高台县",
    "山丹县",
    "肃南裕固族自治县"] },


  {
    "name": "庆阳市",
    "area": [
    "西峰区",
    "庆城县",
    "环县",
    "华池县",
    "合水县",
    "正宁县",
    "宁县",
    "镇原县"] },


  {
    "name": "平凉市",
    "area": [
    "崆峒区",
    "泾川县",
    "灵台县",
    "崇信县",
    "华亭县",
    "庄浪县",
    "静宁县"] },


  {
    "name": "定西市",
    "area": [
    "安定区",
    "通渭县",
    "临洮县",
    "漳县",
    "岷县",
    "渭源县",
    "陇西县"] },


  {
    "name": "陇南市",
    "area": [
    "武都区",
    "成县",
    "宕昌县",
    "康县",
    "文县",
    "西和县",
    "礼县",
    "两当县",
    "徽县"] },


  {
    "name": "临夏回族自治州",
    "area": [
    "临夏市",
    "临夏县",
    "康乐县",
    "永靖县",
    "广河县",
    "和政县",
    "东乡族自治县",
    "积石山保安族东乡族撒拉族自治县"] },


  {
    "name": "甘南藏族自治州",
    "area": [
    "合作市",
    "临潭县",
    "卓尼县",
    "舟曲县",
    "迭部县",
    "玛曲县",
    "碌曲县",
    "夏河县"] }] },




{
  "name": "青海省",
  "city": [
  {
    "name": "西宁市",
    "area": [
    "城中区",
    "城东区",
    "城西区",
    "城北区",
    "湟源县",
    "湟中县",
    "大通回族土族自治县"] },


  {
    "name": "海东地区",
    "area": [
    "平安县",
    "乐都县",
    "民和回族土族自治县",
    "互助土族自治县",
    "化隆回族自治县",
    "循化撒拉族自治县"] },


  {
    "name": "海北藏族自治州",
    "area": [
    "海晏县",
    "祁连县",
    "刚察县",
    "门源回族自治县"] },


  {
    "name": "海南藏族自治州",
    "area": [
    "共和县",
    "同德县",
    "贵德县",
    "兴海县",
    "贵南县"] },


  {
    "name": "黄南藏族自治州",
    "area": [
    "同仁县",
    "尖扎县",
    "泽库县",
    "河南蒙古族自治县"] },


  {
    "name": "果洛藏族自治州",
    "area": [
    "玛沁县",
    "班玛县",
    "甘德县",
    "达日县",
    "久治县",
    "玛多县"] },


  {
    "name": "玉树藏族自治州",
    "area": [
    "玉树县",
    "杂多县",
    "称多县",
    "治多县",
    "囊谦县",
    "曲麻莱县"] },


  {
    "name": "海西蒙古族藏族自治州",
    "area": [
    "德令哈市",
    "格尔木市",
    "乌兰县",
    "都兰县",
    "天峻县"] }] },




{
  "name": "宁夏",
  "city": [
  {
    "name": "银川市",
    "area": [
    "兴庆区",
    "西夏区",
    "金凤区",
    "灵武市",
    "永宁县",
    "贺兰县"] },


  {
    "name": "石嘴山市",
    "area": [
    "大武口区",
    "惠农区",
    "平罗县"] },


  {
    "name": "吴忠市",
    "area": [
    "利通区",
    "青铜峡市",
    "盐池县",
    "同心县"] },


  {
    "name": "固原市",
    "area": [
    "原州区",
    "西吉县",
    "隆德县",
    "泾源县",
    "彭阳县"] },


  {
    "name": "中卫市",
    "area": [
    "沙坡头区",
    "中宁县",
    "海原县"] }] },




{
  "name": "新疆",
  "city": [
  {
    "name": "乌鲁木齐市",
    "area": [
    "天山区",
    "沙依巴克区",
    "新市区",
    "水磨沟区",
    "头屯河区",
    "达坂城区",
    "东山区",
    "乌鲁木齐县"] },


  {
    "name": "克拉玛依市",
    "area": [
    "克拉玛依区",
    "独山子区",
    "白碱滩区",
    "乌尔禾区"] },


  {
    "name": "吐鲁番地区",
    "area": [
    "吐鲁番市",
    "托克逊县",
    "鄯善县"] },


  {
    "name": "哈密地区",
    "area": [
    "哈密市",
    "伊吾县",
    "巴里坤哈萨克自治县"] },


  {
    "name": "和田地区",
    "area": [
    "和田市",
    "和田县",
    "洛浦县",
    "民丰县",
    "皮山县",
    "策勒县",
    "于田县",
    "墨玉县"] },


  {
    "name": "阿克苏地区",
    "area": [
    "阿克苏市",
    "温宿县",
    "沙雅县",
    "拜城县",
    "阿瓦提县",
    "库车县",
    "柯坪县",
    "新和县",
    "乌什县"] },


  {
    "name": "喀什地区",
    "area": [
    "喀什市",
    "巴楚县",
    "泽普县",
    "伽师县",
    "叶城县",
    "岳普湖县",
    "疏勒县",
    "麦盖提县",
    "英吉沙县",
    "莎车县",
    "疏附县",
    "塔什库尔干塔吉克自治县"] },


  {
    "name": "克孜勒苏柯尔克孜自治州",
    "area": [
    "阿图什市",
    "阿合奇县",
    "乌恰县",
    "阿克陶县"] },


  {
    "name": "巴音郭楞蒙古自治州",
    "area": [
    "库尔勒市",
    "和静县",
    "尉犁县",
    "和硕县",
    "且末县",
    "博湖县",
    "轮台县",
    "若羌县",
    "焉耆回族自治县"] },


  {
    "name": "昌吉回族自治州",
    "area": [
    "昌吉市",
    "阜康市",
    "奇台县",
    "玛纳斯县",
    "吉木萨尔县",
    "呼图壁县",
    "木垒哈萨克自治县",
    "米泉市"] },


  {
    "name": "博尔塔拉蒙古自治州",
    "area": [
    "博乐市",
    "精河县",
    "温泉县"] },


  {
    "name": "石河子",
    "area": [
    "石河子"] },


  {
    "name": "阿拉尔",
    "area": [
    "阿拉尔"] },


  {
    "name": "图木舒克",
    "area": [
    "图木舒克"] },


  {
    "name": "五家渠",
    "area": [
    "五家渠"] },


  {
    "name": "伊犁哈萨克自治州",
    "area": [
    "伊宁市",
    "奎屯市",
    "伊宁县",
    "特克斯县",
    "尼勒克县",
    "昭苏县",
    "新源县",
    "霍城县",
    "巩留县",
    "察布查尔锡伯自治县",
    "塔城地区",
    "阿勒泰地区"] }] },




{
  "name": "台湾省",
  "city": [
  {
    "name": "台北市",
    "area": [
    "内湖区",
    "南港区",
    "中正区",
    "万华区",
    "大同区",
    "中山区",
    "松山区",
    "大安区",
    "信义区",
    "文山区",
    "士林区",
    "北投区"] },


  {
    "name": "新北市",
    "area": [
    "板桥区",
    "汐止区",
    "新店区"] },


  {
    "name": "桃园市",
    "area": [
    "其他"] },


  {
    "name": "台中市",
    "area": [
    "其他"] },


  {
    "name": "台南市",
    "area": [
    "其他"] },


  {
    "name": "高雄市",
    "area": [
    "其他"] }] },




{
  "name": "澳门",
  "city": [
  {
    "name": "澳门",
    "area": [
    "花地玛堂区",
    "圣安多尼堂区",
    "大堂区",
    "望德堂区",
    "风顺堂区",
    "嘉模堂区",
    "圣方济各堂区",
    "路凼"] }] },




{
  "name": "香港",
  "city": [
  {
    "name": "香港",
    "area": [
    "深水埗区",
    "油尖旺区",
    "九龙城区",
    "黄大仙区",
    "观塘区",
    "北区",
    "大埔区",
    "沙田区",
    "西贡区",
    "元朗区",
    "屯门区",
    "荃湾区",
    "葵青区",
    "离岛区",
    "中西区",
    "湾仔区",
    "东区",
    "南区"] }] }];exports.default = _default;

/***/ }),

/***/ 1159:
/*!****************************************************!*\
  !*** E:/ceshi/lvshi/components/uni-popup/popup.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _message = _interopRequireDefault(__webpack_require__(/*! ./message.js */ 1160));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// 定义 type 类型:弹出类型：top/bottom/center
var config = {
  // 顶部弹出
  top: 'top',
  // 底部弹出
  bottom: 'bottom',
  // 居中弹出
  center: 'center',
  // 消息提示
  message: 'top',
  // 对话框
  dialog: 'center',
  // 分享
  share: 'bottom' };var _default =


{
  data: function data() {
    return {
      config: config };

  },
  mixins: [_message.default] };exports.default = _default;

/***/ }),

/***/ 1160:
/*!******************************************************!*\
  !*** E:/ceshi/lvshi/components/uni-popup/message.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _created$created$meth;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = (_created$created$meth = {
  created: function created() {
    if (this.type === 'message') {
      // 获取自组件对象
      this.maskShow = false;
      this.children = null;
    }
  } }, _defineProperty(_created$created$meth, "created", function created()
{
  if (this.type === 'message') {
    // 不显示遮罩
    this.maskShow = false;
    // 获取子组件对象
    this.childrenMsg = null;
  }
}), _defineProperty(_created$created$meth, "methods",
{
  customOpen: function customOpen() {
    if (this.childrenMsg) {
      this.childrenMsg.open();
    }
  },
  customClose: function customClose() {
    if (this.childrenMsg) {
      this.childrenMsg.close();
    }
  } }), _created$created$meth);exports.default = _default;

/***/ }),

/***/ 1168:
/*!**************************************************************!*\
  !*** E:/ceshi/lvshi/components/feng-parse/libs/html2json.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _wxDiscode = _interopRequireDefault(__webpack_require__(/*! ./wxDiscode */ 1169));
var _htmlparser = _interopRequireDefault(__webpack_require__(/*! ./htmlparser */ 1170));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                 * html2Json 改造来自: https://github.com/Jxck/html2json
                                                                                                                                                                 *
                                                                                                                                                                 *
                                                                                                                                                                 * author: Di (微信小程序开发工程师)
                                                                                                                                                                 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
                                                                                                                                                                 *               垂直微信小程序开发交流社区
                                                                                                                                                                 *
                                                                                                                                                                 * github地址: https://github.com/icindy/wxParse
                                                                                                                                                                 *
                                                                                                                                                                 * for: 微信小程序富文本解析
                                                                                                                                                                 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                                                                                 */function makeMap(str) {var obj = {};var items = str.split(',');for (var i = 0; i < items.length; i += 1) {obj[items[i]] = true;}return obj;} // Block Elements - HTML 5
var block = makeMap('br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video');
// Inline Elements - HTML 5
var inline = makeMap(
'a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');


// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');

function removeDOCTYPE(html) {
  var isDocument = /<body.*>([^]*)<\/body>/.test(html);
  return isDocument ? RegExp.$1 : html;
}

function trimHtml(html) {
  return html.
  replace(/<!--.*?-->/gi, '').
  replace(/\/\*.*?\*\//gi, '')
  // .replace(/[ ]+</gi, '<')
  .replace(/<script[^]*<\/script>/gi, '').
  replace(/<style[^]*<\/style>/gi, '');
}

function getScreenInfo() {
  var screen = {};
  wx.getSystemInfo({
    success: function success(res) {
      screen.width = res.windowWidth;
      screen.height = res.windowHeight;
    } });

  return screen;
}

function html2json(html, customHandler, imageProp, host) {
  // 处理字符串
  html = removeDOCTYPE(html);
  html = trimHtml(html);
  html = _wxDiscode.default.strDiscode(html);
  // 生成node节点
  var bufArray = [];
  var results = {
    nodes: [],
    imageUrls: [] };


  var screen = getScreenInfo();

  function Node(tag) {
    this.node = 'element';
    this.tag = tag;

    this.$screen = screen;
  }

  (0, _htmlparser.default)(html, {
    start: function start(tag, attrs, unary) {
      // node for this element
      var node = new Node(tag);

      if (bufArray.length !== 0) {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
      }

      if (block[tag]) {
        node.tagType = 'block';
      } else if (inline[tag]) {
        node.tagType = 'inline';
      } else if (closeSelf[tag]) {
        node.tagType = 'closeSelf';
      }

      node.attr = attrs.reduce(function (pre, attr) {var

        name =
        attr.name;var

        value =
        attr.value;
        if (name === 'class') {
          node.classStr = value;
        }
        // has multi attibutes
        // make it array of attribute
        if (name === 'style') {
          node.styleStr = value;
        }
        if (value.match(/ /)) {
          value = value.split(' ');
        }

        // if attr already exists
        // merge it
        if (pre[name]) {
          if (Array.isArray(pre[name])) {
            // already array, push to last
            pre[name].push(value);
          } else {
            // single value, make it array
            pre[name] = [pre[name], value];
          }
        } else {
          // not exist, put it
          pre[name] = value;
        }

        return pre;
      }, {});

      // 优化样式相关属性
      if (node.classStr) {
        node.classStr += " ".concat(node.tag);
      } else {
        node.classStr = node.tag;
      }
      if (node.tagType === 'inline') {
        node.classStr += ' inline';
      }

      // 对img添加额外数据
      if (node.tag === 'img') {
        var imgUrl = node.attr.src;
        imgUrl = _wxDiscode.default.urlToHttpUrl(imgUrl, imageProp.domain);
        Object.assign(node.attr, imageProp, {
          src: imgUrl || '' });

        if (imgUrl) {
          results.imageUrls.push(imgUrl);
        }
      }

      // 处理a标签属性
      if (node.tag === 'a') {
        node.attr.href = node.attr.href || '';
      }

      //处理table
      if (node.tag === 'table' || node.tag === 'tr' || node.tag === 'td') {
        node.styleStr = "";
        if (node.attr.width) {
          node.styleStr += "width:" + node.attr.width + 'px;';
          if (node.attr.width > node.$screen.width) {
            //等比缩放height
            if (node.attr.height) {
              node.attr.height = node.$screen.width * node.attr.height / node.attr.width;
            }
          }
        }
        if (node.attr.height) {
          node.styleStr += "height:" + node.attr.height + 'px;';
        }

      }
      //处理video
      if (node.tag === 'video') {
        node.styleStr = "";
        if (node.attr.width) {
          node.styleStr += "width:" + node.attr.width + 'px;';
          if (node.attr.width > node.$screen.width) {
            //等比缩放height
            if (node.attr.height) {
              node.attr.height = node.$screen.width * node.attr.height / node.attr.width;
            }
          }
        }
        if (node.attr.height) {
          node.styleStr += "height:" + node.attr.height + 'px;';
        }

      }

      // 处理font标签样式属性
      if (node.tag === 'font') {
        var fontSize = [
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
        'xx-large',
        '-webkit-xxx-large'];

        var styleAttrs = {
          color: 'color',
          face: 'font-family',
          size: 'font-size' };

        if (!node.styleStr) node.styleStr = '';
        Object.keys(styleAttrs).forEach(function (key) {
          if (node.attr[key]) {
            var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
            node.styleStr += "".concat(styleAttrs[key], ": ").concat(value, ";");
          }
        });
      }

      // 临时记录source资源
      if (node.tag === 'source') {
        results.source = node.attr.src;
      }






      if (unary) {
        // if this tag doesn't have end tag
        // like <img src="hoge.png"/>
        // add to parents
        var _parent = bufArray[0] || results;
        if (_parent.nodes === undefined) {
          _parent.nodes = [];
        }
        _parent.nodes.push(node);
      } else {
        bufArray.unshift(node);
      }
    },
    end: function end(tag) {
      // merge into parent tag
      var node = bufArray.shift();
      if (node.tag !== tag) {
        console.error('invalid state: mismatch end tag');
      }

      // 当有缓存source资源时于于video补上src资源
      if (node.tag === 'video' && results.source) {
        node.attr.src = results.source;
        delete results.source;
      }






      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (!parent.nodes) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    },
    chars: function chars(text) {
      if (!text.trim()) return;

      var node = {
        node: 'text',
        text: text };







      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    } });


  return results;
}var _default =

html2json;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1169:
/*!**************************************************************!*\
  !*** E:/ceshi/lvshi/components/feng-parse/libs/wxDiscode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // HTML 支持的数学符号
function strNumDiscode(str) {
  str = str.replace(/&forall;|&#8704;|&#x2200;/g, '∀');
  str = str.replace(/&part;|&#8706;|&#x2202;/g, '∂');
  str = str.replace(/&exist;|&#8707;|&#x2203;/g, '∃');
  str = str.replace(/&empty;|&#8709;|&#x2205;/g, '∅');
  str = str.replace(/&nabla;|&#8711;|&#x2207;/g, '∇');
  str = str.replace(/&isin;|&#8712;|&#x2208;/g, '∈');
  str = str.replace(/&notin;|&#8713;|&#x2209;/g, '∉');
  str = str.replace(/&ni;|&#8715;|&#x220b;/g, '∋');
  str = str.replace(/&prod;|&#8719;|&#x220f;/g, '∏');
  str = str.replace(/&sum;|&#8721;|&#x2211;/g, '∑');
  str = str.replace(/&minus;|&#8722;|&#x2212;/g, '−');
  str = str.replace(/&lowast;|&#8727;|&#x2217;/g, '∗');
  str = str.replace(/&radic;|&#8730;|&#x221a;/g, '√');
  str = str.replace(/&prop;|&#8733;|&#x221d;/g, '∝');
  str = str.replace(/&infin;|&#8734;|&#x221e;/g, '∞');
  str = str.replace(/&ang;|&#8736;|&#x2220;/g, '∠');
  str = str.replace(/&and;|&#8743;|&#x2227;/g, '∧');
  str = str.replace(/&or;|&#8744;|&#x2228;/g, '∨');
  str = str.replace(/&cap;|&#8745;|&#x2229;/g, '∩');
  str = str.replace(/&cup;|&#8746;|&#x222a;/g, '∪');
  str = str.replace(/&int;|&#8747;|&#x222b;/g, '∫');
  str = str.replace(/&there4;|&#8756;|&#x2234;/g, '∴');
  str = str.replace(/&sim;|&#8764;|&#x223c;/g, '∼');
  str = str.replace(/&cong;|&#8773;|&#x2245;/g, '≅');
  str = str.replace(/&asymp;|&#8776;|&#x2248;/g, '≈');
  str = str.replace(/&ne;|&#8800;|&#x2260;/g, '≠');
  str = str.replace(/&le;|&#8804;|&#x2264;/g, '≤');
  str = str.replace(/&ge;|&#8805;|&#x2265;/g, '≥');
  str = str.replace(/&sub;|&#8834;|&#x2282;/g, '⊂');
  str = str.replace(/&sup;|&#8835;|&#x2283;/g, '⊃');
  str = str.replace(/&nsub;|&#8836;|&#x2284;/g, '⊄');
  str = str.replace(/&sube;|&#8838;|&#x2286;/g, '⊆');
  str = str.replace(/&supe;|&#8839;|&#x2287;/g, '⊇');
  str = str.replace(/&oplus;|&#8853;|&#x2295;/g, '⊕');
  str = str.replace(/&otimes;|&#8855;|&#x2297;/g, '⊗');
  str = str.replace(/&perp;|&#8869;|&#x22a5;/g, '⊥');
  str = str.replace(/&sdot;|&#8901;|&#x22c5;/g, '⋅');
  return str;
}

// HTML 支持的希腊字母
function strGreeceDiscode(str) {
  str = str.replace(/&Alpha;|&#913;|&#x391;/g, 'Α');
  str = str.replace(/&Beta;|&#914;|&#x392;/g, 'Β');
  str = str.replace(/&Gamma;|&#915;|&#x393;/g, 'Γ');
  str = str.replace(/&Delta;|&#916;|&#x394;/g, 'Δ');
  str = str.replace(/&Epsilon;|&#917;|&#x395;/g, 'Ε');
  str = str.replace(/&Zeta;|&#918;|&#x396;/g, 'Ζ');
  str = str.replace(/&Eta;|&#919;|&#x397;/g, 'Η');
  str = str.replace(/&Theta;|&#920;|&#x398;/g, 'Θ');
  str = str.replace(/&Iota;|&#921;|&#x399;/g, 'Ι');
  str = str.replace(/&Kappa;|&#922;|&#x39a;/g, 'Κ');
  str = str.replace(/&Lambda;|&#923;|&#x39b;/g, 'Λ');
  str = str.replace(/&Mu;|&#924;|&#x39c;/g, 'Μ');
  str = str.replace(/&Nu;|&#925;|&#x39d;/g, 'Ν');
  str = str.replace(/&Xi;|&#925;|&#x39d;/g, 'Ν');
  str = str.replace(/&Omicron;|&#927;|&#x39f;/g, 'Ο');
  str = str.replace(/&Pi;|&#928;|&#x3a0;/g, 'Π');
  str = str.replace(/&Rho;|&#929;|&#x3a1;/g, 'Ρ');
  str = str.replace(/&Sigma;|&#931;|&#x3a3;/g, 'Σ');
  str = str.replace(/&Tau;|&#932;|&#x3a4;/g, 'Τ');
  str = str.replace(/&Upsilon;|&#933;|&#x3a5;/g, 'Υ');
  str = str.replace(/&Phi;|&#934;|&#x3a6;/g, 'Φ');
  str = str.replace(/&Chi;|&#935;|&#x3a7;/g, 'Χ');
  str = str.replace(/&Psi;|&#936;|&#x3a8;/g, 'Ψ');
  str = str.replace(/&Omega;|&#937;|&#x3a9;/g, 'Ω');

  str = str.replace(/&alpha;|&#945;|&#x3b1;/g, 'α');
  str = str.replace(/&beta;|&#946;|&#x3b2;/g, 'β');
  str = str.replace(/&gamma;|&#947;|&#x3b3;/g, 'γ');
  str = str.replace(/&delta;|&#948;|&#x3b4;/g, 'δ');
  str = str.replace(/&epsilon;|&#949;|&#x3b5;/g, 'ε');
  str = str.replace(/&zeta;|&#950;|&#x3b6;/g, 'ζ');
  str = str.replace(/&eta;|&#951;|&#x3b7;/g, 'η');
  str = str.replace(/&theta;|&#952;|&#x3b8;/g, 'θ');
  str = str.replace(/&iota;|&#953;|&#x3b9;/g, 'ι');
  str = str.replace(/&kappa;|&#954;|&#x3ba;/g, 'κ');
  str = str.replace(/&lambda;|&#955;|&#x3bb;/g, 'λ');
  str = str.replace(/&mu;|&#956;|&#x3bc;/g, 'μ');
  str = str.replace(/&nu;|&#957;|&#x3bd;/g, 'ν');
  str = str.replace(/&xi;|&#958;|&#x3be;/g, 'ξ');
  str = str.replace(/&omicron;|&#959;|&#x3bf;/g, 'ο');
  str = str.replace(/&pi;|&#960;|&#x3c0;/g, 'π');
  str = str.replace(/&rho;|&#961;|&#x3c1;/g, 'ρ');
  str = str.replace(/&sigmaf;|&#962;|&#x3c2;/g, 'ς');
  str = str.replace(/&sigma;|&#963;|&#x3c3;/g, 'σ');
  str = str.replace(/&tau;|&#964;|&#x3c4;/g, 'τ');
  str = str.replace(/&upsilon;|&#965;|&#x3c5;/g, 'υ');
  str = str.replace(/&phi;|&#966;|&#x3c6;/g, 'φ');
  str = str.replace(/&chi;|&#967;|&#x3c7;/g, 'χ');
  str = str.replace(/&psi;|&#968;|&#x3c8;/g, 'ψ');
  str = str.replace(/&omega;|&#969;|&#x3c9;/g, 'ω');
  str = str.replace(/&thetasym;|&#977;|&#x3d1;/g, 'ϑ');
  str = str.replace(/&upsih;|&#978;|&#x3d2;/g, 'ϒ');
  str = str.replace(/&piv;|&#982;|&#x3d6;/g, 'ϖ');
  str = str.replace(/&middot;|&#183;|&#xb7;/g, '·');
  return str;
}

function strcharacterDiscode(str) {
  // 加入常用解析

  str = str.replace(/&nbsp;|&#32;|&#x20;/g, "&nbsp;");
  str = str.replace(/&ensp;|&#8194;|&#x2002;/g, '&ensp;');
  str = str.replace(/&#12288;|&#x3000;/g, '<span class=\'spaceshow\'>　</span>');
  str = str.replace(/&emsp;|&#8195;|&#x2003;/g, '&emsp;');
  str = str.replace(/&quot;|&#34;|&#x22;/g, "\"");
  str = str.replace(/&apos;|&#39;|&#x27;/g, "&apos;");
  str = str.replace(/&acute;|&#180;|&#xB4;/g, "´");
  str = str.replace(/&times;|&#215;|&#xD7;/g, "×");
  str = str.replace(/&divide;|&#247;|&#xF7;/g, "÷");
  str = str.replace(/&amp;|&#38;|&#x26;/g, '&amp;');
  str = str.replace(/&lt;|&#60;|&#x3c;/g, '&lt;');
  str = str.replace(/&gt;|&#62;|&#x3e;/g, '&gt;');




  str = str.replace(/&nbsp;|&#32;|&#x20;/g, "<span class='spaceshow'> </span>");
  str = str.replace(/&ensp;|&#8194;|&#x2002;/g, '<span class=\'spaceshow\'> </span>');
  str = str.replace(/&#12288;|&#x3000;/g, '<span class=\'spaceshow\'>　</span>');
  str = str.replace(/&emsp;|&#8195;|&#x2003;/g, '<span class=\'spaceshow\'> </span>');
  str = str.replace(/&quot;|&#34;|&#x22;/g, "\"");
  str = str.replace(/&quot;|&#39;|&#x27;/g, "'");
  str = str.replace(/&acute;|&#180;|&#xB4;/g, "´");
  str = str.replace(/&times;|&#215;|&#xD7;/g, "×");
  str = str.replace(/&divide;|&#247;|&#xF7;/g, "÷");
  str = str.replace(/&amp;|&#38;|&#x26;/g, '&');
  str = str.replace(/&lt;|&#60;|&#x3c;/g, '<');
  str = str.replace(/&gt;|&#62;|&#x3e;/g, '>');
  return str;
}

// HTML 支持的其他实体
function strOtherDiscode(str) {
  str = str.replace(/&OElig;|&#338;|&#x152;/g, 'Œ');
  str = str.replace(/&oelig;|&#339;|&#x153;/g, 'œ');
  str = str.replace(/&Scaron;|&#352;|&#x160;/g, 'Š');
  str = str.replace(/&scaron;|&#353;|&#x161;/g, 'š');
  str = str.replace(/&Yuml;|&#376;|&#x178;/g, 'Ÿ');
  str = str.replace(/&fnof;|&#402;|&#x192;/g, 'ƒ');
  str = str.replace(/&circ;|&#710;|&#x2c6;/g, 'ˆ');
  str = str.replace(/&tilde;|&#732;|&#x2dc;/g, '˜');
  str = str.replace(/&thinsp;|$#8201;|&#x2009;/g, '<span class=\'spaceshow\'> </span>');
  str = str.replace(/&zwnj;|&#8204;|&#x200C;/g, '<span class=\'spaceshow\'>‌</span>');
  str = str.replace(/&zwj;|$#8205;|&#x200D;/g, '<span class=\'spaceshow\'>‍</span>');
  str = str.replace(/&lrm;|$#8206;|&#x200E;/g, '<span class=\'spaceshow\'>‎</span>');
  str = str.replace(/&rlm;|&#8207;|&#x200F;/g, '<span class=\'spaceshow\'>‏</span>');
  str = str.replace(/&ndash;|&#8211;|&#x2013;/g, '–');
  str = str.replace(/&mdash;|&#8212;|&#x2014;/g, '—');
  str = str.replace(/&lsquo;|&#8216;|&#x2018;/g, '‘');
  str = str.replace(/&rsquo;|&#8217;|&#x2019;/g, '’');
  str = str.replace(/&sbquo;|&#8218;|&#x201a;/g, '‚');
  str = str.replace(/&ldquo;|&#8220;|&#x201c;/g, '“');
  str = str.replace(/&rdquo;|&#8221;|&#x201d;/g, '”');
  str = str.replace(/&bdquo;|&#8222;|&#x201e;/g, '„');
  str = str.replace(/&dagger;|&#8224;|&#x2020;/g, '†');
  str = str.replace(/&Dagger;|&#8225;|&#x2021;/g, '‡');
  str = str.replace(/&bull;|&#8226;|&#x2022;/g, '•');
  str = str.replace(/&hellip;|&#8230;|&#x2026;/g, '…');
  str = str.replace(/&permil;|&#8240;|&#x2030;/g, '‰');
  str = str.replace(/&prime;|&#8242;|&#x2032;/g, '′');
  str = str.replace(/&Prime;|&#8243;|&#x2033;/g, '″');
  str = str.replace(/&lsaquo;|&#8249;|&#x2039;/g, '‹');
  str = str.replace(/&rsaquo;|&#8250;|&#x203a;/g, '›');
  str = str.replace(/&oline;|&#8254;|&#x203e;/g, '‾');
  str = str.replace(/&euro;|&#8364;|&#x20ac;/g, '€');
  str = str.replace(/&trade;|&#8482;|&#x2122;/g, '™');
  str = str.replace(/&larr;|&#8592;|&#x2190;/g, '←');
  str = str.replace(/&uarr;|&#8593;|&#x2191;/g, '↑');
  str = str.replace(/&rarr;|&#8594;|&#x2192;/g, '→');
  str = str.replace(/&darr;|&#8595;|&#x2193;/g, '↓');
  str = str.replace(/&harr;|&#8596;|&#x2194;/g, '↔');
  str = str.replace(/&crarr;|&#8629;|&#x21b5;/g, '↵');
  str = str.replace(/&lceil;|&#8968;|&#x2308;/g, '⌈');
  str = str.replace(/&rceil;|&#8969;|&#x2309;/g, '⌉');
  str = str.replace(/&lfloor;|&#8970;|&#x230a;/g, '⌊');
  str = str.replace(/&rfloor;|&#8971;|&#x230b;/g, '⌋');
  str = str.replace(/&loz;|&#9674;|&#x25ca;/g, '◊');
  str = str.replace(/&spades;|&#9824;|&#x2660;/g, '♠');
  str = str.replace(/&clubs;|&#9827;|&#x2663;/g, '♣');
  str = str.replace(/&hearts;|&#9829;|&#x2665;/g, '♥');
  str = str.replace(/&diams;|&#9830;|&#x2666;/g, '♦');
  return str;
}

function strDiscode(str) {
  str = strNumDiscode(str);
  str = strGreeceDiscode(str);
  str = strcharacterDiscode(str);
  str = strOtherDiscode(str);
  return str;
}

function urlToHttpUrl(url, domain) {
  if (/^\/\//.test(url)) {
    return "https:".concat(url);
  } else if (/^\//.test(url)) {
    return "https://".concat(domain).concat(url);
  }
  return url;
}var _default =

{
  strDiscode: strDiscode,
  urlToHttpUrl: urlToHttpUrl };exports.default = _default;

/***/ }),

/***/ 1170:
/*!***************************************************************!*\
  !*** E:/ceshi/lvshi/components/feng-parse/libs/htmlparser.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      *
                                                                                                      * htmlParser改造自: https://github.com/blowsie/Pure-JavaScript-HTML5-Parser
                                                                                                      *
                                                                                                      * author: Di (微信小程序开发工程师)
                                                                                                      * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
                                                                                                      *               垂直微信小程序开发交流社区
                                                                                                      *
                                                                                                      * github地址: https://github.com/icindy/wxParse
                                                                                                      *
                                                                                                      * for: 微信小程序富文本解析
                                                                                                      * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                      */
// Regular Expressions for parsing tags and attributes

var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

function makeMap(str) {
  var obj = {};
  var items = str.split(',');
  for (var i = 0; i < items.length; i += 1) {obj[items[i]] = true;}
  return obj;
}

// Empty Elements - HTML 5
var empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr');

// Block Elements - HTML 5
var block = makeMap('address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video');

// Inline Elements - HTML 5
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected');

function HTMLParser(html, handler) {
  var index;
  var chars;
  var match;
  var last = html;
  var stack = [];

  stack.last = function () {return stack[stack.length - 1];};

  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    var pos;
    if (!tagName) {
      pos = 0;
    } else {
      // Find the closest opened tag of the same type
      tagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos -= 1) {
        if (stack[pos] === tagName) break;
      }
    }
    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i -= 1) {
        if (handler.end) handler.end(stack[i]);
      }

      // Remove the open elements from the stack
      stack.length = pos;
    }
  }

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();

    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag('', stack.last());
      }
    }

    if (closeSelf[tagName] && stack.last() === tagName) {
      parseEndTag('', tagName);
    }

    unary = empty[tagName] || !!unary;

    if (!unary) stack.push(tagName);

    if (handler.start) {
      var attrs = [];

      rest.replace(attr, function genAttr(matches, name) {
        var value = arguments[2] || arguments[3] || arguments[4] || (fillAttrs[name] ? name : '');

        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\"') // "
        });
      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }

  while (html) {
    chars = true;

    if (html.indexOf('</') === 0) {
      match = html.match(endTag);

      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(endTag, parseEndTag);
        chars = false;
      }

      // start tag
    } else if (html.indexOf('<') === 0) {
      match = html.match(startTag);

      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(startTag, parseStartTag);
        chars = false;
      }
    }

    if (chars) {
      index = html.indexOf('<');
      var text = '';
      while (index === 0) {
        text += '<';
        html = html.substring(1);
        index = html.indexOf('<');
      }
      text += index < 0 ? html : html.substring(0, index);
      html = index < 0 ? '' : html.substring(index);

      if (handler.chars) handler.chars(text);
    }

    if (html === last) throw new Error("Parse Error: ".concat(html));
    last = html;
  }

  // Clean up any remaining tags
  parseEndTag();
}var _default =

HTMLParser;exports.default = _default;

/***/ }),

/***/ 1176:
/*!*************************************!*\
  !*** E:/ceshi/lvshi/common/data.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = [
{
  "name": "北京市",
  "city": [
  {
    "name": "北京市",
    "area": [
    "东城区",
    "西城区",
    "崇文区",
    "宣武区",
    "朝阳区",
    "丰台区",
    "石景山区",
    "海淀区",
    "门头沟区",
    "房山区",
    "通州区",
    "顺义区",
    "昌平区",
    "大兴区",
    "平谷区",
    "怀柔区",
    "密云县",
    "延庆县"] }] },




{
  "name": "天津市",
  "city": [
  {
    "name": "天津市",
    "area": [
    "和平区",
    "河东区",
    "河西区",
    "南开区",
    "河北区",
    "红桥区",
    "塘沽区",
    "汉沽区",
    "大港区",
    "东丽区",
    "西青区",
    "津南区",
    "北辰区",
    "武清区",
    "宝坻区",
    "宁河县",
    "静海县",
    "蓟  县"] }] },




{
  "name": "河北省",
  "city": [
  {
    "name": "石家庄市",
    "area": [
    "长安区",
    "桥东区",
    "桥西区",
    "新华区",
    "郊  区",
    "井陉矿区",
    "井陉县",
    "正定县",
    "栾城县",
    "行唐县",
    "灵寿县",
    "高邑县",
    "深泽县",
    "赞皇县",
    "无极县",
    "平山县",
    "元氏县",
    "赵  县",
    "辛集市",
    "藁",
    "晋州市",
    "新乐市",
    "鹿泉市"] },


  {
    "name": "唐山市",
    "area": [
    "路南区",
    "路北区",
    "古冶区",
    "开平区",
    "新  区",
    "丰润县",
    "滦  县",
    "滦南县",
    "乐亭县",
    "迁西县",
    "玉田县",
    "唐海县",
    "遵化市",
    "丰南市",
    "迁安市"] },


  {
    "name": "秦皇岛市",
    "area": [
    "海港区",
    "山海关区",
    "北戴河区",
    "青龙满族自治县",
    "昌黎县",
    "抚宁县",
    "卢龙县"] },


  {
    "name": "邯郸市",
    "area": [
    "邯山区",
    "丛台区",
    "复兴区",
    "峰峰矿区",
    "邯郸县",
    "临漳县",
    "成安县",
    "大名县",
    "涉  县",
    "磁  县",
    "肥乡县",
    "永年县",
    "邱  县",
    "鸡泽县",
    "广平县",
    "馆陶县",
    "魏  县",
    "曲周县",
    "武安市"] },


  {
    "name": "邢台市",
    "area": [
    "桥东区",
    "桥西区",
    "邢台县",
    "临城县",
    "内丘县",
    "柏乡县",
    "隆尧县",
    "任  县",
    "南和县",
    "宁晋县",
    "巨鹿县",
    "新河县",
    "广宗县",
    "平乡县",
    "威  县",
    "清河县",
    "临西县",
    "南宫市",
    "沙河市"] },


  {
    "name": "保定市",
    "area": [
    "新市区",
    "北市区",
    "南市区",
    "满城县",
    "清苑县",
    "涞水县",
    "阜平县",
    "徐水县",
    "定兴县",
    "唐  县",
    "高阳县",
    "容城县",
    "涞源县",
    "望都县",
    "安新县",
    "易  县",
    "曲阳县",
    "蠡  县",
    "顺平县",
    "博野",
    "雄县",
    "涿州市",
    "定州市",
    "安国市",
    "高碑店市"] },


  {
    "name": "张家口",
    "area": [
    "桥东区",
    "桥西区",
    "宣化区",
    "下花园区",
    "宣化县",
    "张北县",
    "康保县",
    "沽源县",
    "尚义县",
    "蔚  县",
    "阳原县",
    "怀安县",
    "万全县",
    "怀来县",
    "涿鹿县",
    "赤城县",
    "崇礼县"] },


  {
    "name": "承德市",
    "area": [
    "双桥区",
    "双滦区",
    "鹰手营子矿区",
    "承德县",
    "兴隆县",
    "平泉县",
    "滦平县",
    "隆化县",
    "丰宁满族自治县",
    "宽城满族自治县",
    "围场满族蒙古族自治县"] },


  {
    "name": "沧州市",
    "area": [
    "新华区",
    "运河区",
    "沧  县",
    "青  县",
    "东光县",
    "海兴县",
    "盐山县",
    "肃宁县",
    "南皮县",
    "吴桥县",
    "献  县",
    "孟村回族自治县",
    "泊头市",
    "任丘市",
    "黄骅市",
    "河间市"] },


  {
    "name": "廊坊市",
    "area": [
    "安次区",
    "固安县",
    "永清县",
    "香河县",
    "大城县",
    "文安县",
    "大厂回族自治县",
    "霸州市",
    "三河市"] },


  {
    "name": "衡水市",
    "area": [
    "桃城区",
    "枣强县",
    "武邑县",
    "武强县",
    "饶阳县",
    "安平县",
    "故城县",
    "景  县",
    "阜城县",
    "冀州市",
    "深州市"] }] },




{
  "name": "山西省",
  "city": [
  {
    "name": "太原市",
    "area": [
    "小店区",
    "迎泽区",
    "杏花岭区",
    "尖草坪区",
    "万柏林区",
    "晋源区",
    "清徐县",
    "阳曲县",
    "娄烦县",
    "古交市"] },


  {
    "name": "大同市",
    "area": [
    "城  区",
    "矿  区",
    "南郊区",
    "新荣区",
    "阳高县",
    "天镇县",
    "广灵县",
    "灵丘县",
    "浑源县",
    "左云县",
    "大同县"] },


  {
    "name": "阳泉市",
    "area": [
    "城  区",
    "矿  区",
    "郊  区",
    "平定县",
    "盂  县"] },


  {
    "name": "长治市",
    "area": [
    "城  区",
    "郊  区",
    "长治县",
    "襄垣县",
    "屯留县",
    "平顺县",
    "黎城县",
    "壶关县",
    "长子县",
    "武乡县",
    "沁  县",
    "沁源县",
    "潞城市"] },


  {
    "name": "晋城市",
    "area": [
    "城  区",
    "沁水县",
    "阳城县",
    "陵川县",
    "泽州县",
    "高平市"] },


  {
    "name": "朔州市",
    "area": [
    "朔城区",
    "平鲁区",
    "山阴县",
    "应  县",
    "右玉县",
    "怀仁县"] },


  {
    "name": "忻州市",
    "area": [
    "忻府区",
    "原平市",
    "定襄县",
    "五台县",
    "代  县",
    "繁峙县",
    "宁武县",
    "静乐县",
    "神池县",
    "五寨县",
    "岢岚县",
    "河曲县",
    "保德县",
    "偏关县"] },


  {
    "name": "吕梁市",
    "area": [
    "离石区",
    "孝义市",
    "汾阳市",
    "文水县",
    "交城县",
    "兴  县",
    "临  县",
    "柳林县",
    "石楼县",
    "岚  县",
    "方山县",
    "中阳县",
    "交口县"] },


  {
    "name": "晋中市",
    "area": [
    "榆次市",
    "介休市",
    "榆社县",
    "左权县",
    "和顺县",
    "昔阳县",
    "寿阳县",
    "太谷县",
    "祁  县",
    "平遥县",
    "灵石县"] },


  {
    "name": "临汾市",
    "area": [
    "临汾市",
    "侯马市",
    "霍州市",
    "曲沃县",
    "翼城县",
    "襄汾县",
    "洪洞县",
    "古  县",
    "安泽县",
    "浮山县",
    "吉  县",
    "乡宁县",
    "蒲  县",
    "大宁县",
    "永和县",
    "隰  县",
    "汾西县"] },


  {
    "name": "运城市",
    "area": [
    "运城市",
    "永济市",
    "河津市",
    "芮城县",
    "临猗县",
    "万荣县",
    "新绛县",
    "稷山县",
    "闻喜县",
    "夏  县",
    "绛  县",
    "平陆县",
    "垣曲县"] }] },




{
  "name": "内蒙古",
  "city": [
  {
    "name": "呼和浩特市",
    "area": [
    "新城区",
    "回民区",
    "玉泉区",
    "郊  区",
    "土默特左旗",
    "托克托县",
    "和林格尔县",
    "清水河县",
    "武川县"] },


  {
    "name": "包头市",
    "area": [
    "东河区",
    "昆都伦区",
    "青山区",
    "石拐矿区",
    "白云矿区",
    "郊  区",
    "土默特右旗",
    "固阳县",
    "达尔罕茂明安联合旗"] },


  {
    "name": "乌海市",
    "area": [
    "海勃湾区",
    "海南区",
    "乌达区"] },


  {
    "name": "赤峰市",
    "area": [
    "红山区",
    "元宝山区",
    "松山区",
    "阿鲁科尔沁旗",
    "巴林左旗",
    "巴林右旗",
    "林西县",
    "克什克腾旗",
    "翁牛特旗",
    "喀喇沁旗",
    "宁城县",
    "敖汉旗"] },


  {
    "name": "呼伦贝尔市",
    "area": [
    "海拉尔市",
    "满洲里市",
    "扎兰屯市",
    "牙克石市",
    "根河市",
    "额尔古纳市",
    "阿荣旗",
    "莫力达瓦达斡尔族自治旗",
    "鄂伦春自治旗",
    "鄂温克族自治旗",
    "新巴尔虎右旗",
    "新巴尔虎左旗",
    "陈巴尔虎旗"] },


  {
    "name": "兴安盟",
    "area": [
    "乌兰浩特市",
    "阿尔山市",
    "科尔沁右翼前旗",
    "科尔沁右翼中旗",
    "扎赉特旗",
    "突泉县"] },


  {
    "name": "通辽市",
    "area": [
    "科尔沁区",
    "霍林郭勒市",
    "科尔沁左翼中旗",
    "科尔沁左翼后旗",
    "开鲁县",
    "库伦旗",
    "奈曼旗",
    "扎鲁特旗"] },


  {
    "name": "锡林郭勒盟",
    "area": [
    "二连浩特市",
    "锡林浩特市",
    "阿巴嘎旗",
    "苏尼特左旗",
    "苏尼特右旗",
    "东乌珠穆沁旗",
    "西乌珠穆沁旗",
    "太仆寺旗",
    "镶黄旗",
    "正镶白旗",
    "正蓝旗",
    "多伦县"] },


  {
    "name": "乌兰察布盟",
    "area": [
    "集宁市",
    "丰镇市",
    "卓资县",
    "化德县",
    "商都县",
    "兴和县",
    "凉城县",
    "察哈尔右翼前旗",
    "察哈尔右翼中旗",
    "察哈尔右翼后旗",
    "四子王旗"] },


  {
    "name": "伊克昭盟",
    "area": [
    "东胜市",
    "达拉特旗",
    "准格尔旗",
    "鄂托克前旗",
    "鄂托克旗",
    "杭锦旗",
    "乌审旗",
    "伊金霍洛旗"] },


  {
    "name": "巴彦淖尔盟",
    "area": [
    "临河市",
    "五原县",
    "磴口县",
    "乌拉特前旗",
    "乌拉特中旗",
    "乌拉特后旗",
    "杭锦后旗"] },


  {
    "name": "阿拉善盟",
    "area": [
    "阿拉善左旗",
    "阿拉善右旗",
    "额济纳旗"] }] },




{
  "name": "辽宁省",
  "city": [
  {
    "name": "沈阳市",
    "area": [
    "沈河区",
    "皇姑区",
    "和平区",
    "大东区",
    "铁西区",
    "苏家屯区",
    "东陵区",
    "于洪区",
    "新民市",
    "法库县",
    "辽中县",
    "康平县",
    "新城子区"] },


  {
    "name": "大连市",
    "area": [
    "西岗区",
    "中山区",
    "沙河口区",
    "甘井子区",
    "旅顺口区",
    "金州区",
    "瓦房店市",
    "普兰店市",
    "庄河市",
    "长海县"] },


  {
    "name": "鞍山市",
    "area": [
    "铁东区",
    "铁西区",
    "立山区",
    "千山区",
    "海城市",
    "台安县",
    "岫岩满族自治县"] },


  {
    "name": "抚顺市",
    "area": [
    "顺城区",
    "新抚区",
    "东洲区",
    "望花区",
    "抚顺县",
    "清原满族自治县",
    "新宾满族自治县"] },


  {
    "name": "本溪市",
    "area": [
    "平山区",
    "明山区",
    "溪湖区",
    "南芬区",
    "本溪满族自治县",
    "桓仁满族自治县"] },


  {
    "name": "丹东市",
    "area": [
    "振兴区",
    "元宝区",
    "振安区",
    "东港市",
    "凤城市",
    "宽甸满族自治县"] },


  {
    "name": "锦州市",
    "area": [
    "太和区",
    "古塔区",
    "凌河区",
    "凌海市",
    "黑山县",
    "义县",
    "北宁市"] },


  {
    "name": "营口市",
    "area": [
    "站前区",
    "西市区",
    "鲅鱼圈区",
    "老边区",
    "大石桥市",
    "盖州市"] },


  {
    "name": "阜新市",
    "area": [
    "海州区",
    "新邱区",
    "太平区",
    "清河门区",
    "细河区",
    "彰武县",
    "阜新蒙古族自治县"] },


  {
    "name": "辽阳市",
    "area": [
    "白塔区",
    "文圣区",
    "宏伟区",
    "太子河区",
    "弓长岭区",
    "灯塔市",
    "辽阳县"] },


  {
    "name": "盘锦",
    "area": [
    "双台子区",
    "兴隆台区",
    "盘山县",
    "大洼县"] },


  {
    "name": "铁岭市",
    "area": [
    "银州区",
    "清河区",
    "调兵山市",
    "开原市",
    "铁岭县",
    "昌图县",
    "西丰县"] },


  {
    "name": "朝阳市",
    "area": [
    "双塔区",
    "龙城区",
    "凌源市",
    "北票市",
    "朝阳县",
    "建平县",
    "喀喇沁左翼蒙古族自治县"] },


  {
    "name": "葫芦岛市",
    "area": [
    "龙港区",
    "南票区",
    "连山区",
    "兴城市",
    "绥中县",
    "建昌县"] }] },




{
  "name": "吉林省",
  "city": [
  {
    "name": "长春市",
    "area": [
    "朝阳区",
    "宽城区",
    "二道区",
    "南关区",
    "绿园区",
    "双阳区",
    "九台市",
    "榆树市",
    "德惠市",
    "农安县"] },


  {
    "name": "吉林市",
    "area": [
    "船营区",
    "昌邑区",
    "龙潭区",
    "丰满区",
    "舒兰市",
    "桦甸市",
    "蛟河市",
    "磐石市",
    "永吉县"] },


  {
    "name": "四平",
    "area": [
    "铁西区",
    "铁东区",
    "公主岭市",
    "双辽市",
    "梨树县",
    "伊通满族自治县"] },


  {
    "name": "辽源市",
    "area": [
    "龙山区",
    "西安区",
    "东辽县",
    "东丰县"] },


  {
    "name": "通化市",
    "area": [
    "东昌区",
    "二道江区",
    "梅河口市",
    "集安市",
    "通化县",
    "辉南县",
    "柳河县"] },


  {
    "name": "白山市",
    "area": [
    "八道江区",
    "江源区",
    "临江市",
    "靖宇县",
    "抚松县",
    "长白朝鲜族自治县"] },


  {
    "name": "松原市",
    "area": [
    "宁江区",
    "乾安县",
    "长岭县",
    "扶余县",
    "前郭尔罗斯蒙古族自治县"] },


  {
    "name": "白城市",
    "area": [
    "洮北区",
    "大安市",
    "洮南市",
    "镇赉县",
    "通榆县"] },


  {
    "name": "延边朝鲜族自治州",
    "area": [
    "延吉市",
    "图们市",
    "敦化市",
    "龙井市",
    "珲春市",
    "和龙市",
    "安图县",
    "汪清县"] }] },




{
  "name": "黑龙江省",
  "city": [
  {
    "name": "哈尔滨市",
    "area": [
    "松北区",
    "道里区",
    "南岗区",
    "平房区",
    "香坊区",
    "道外区",
    "呼兰区",
    "阿城区",
    "双城市",
    "尚志市",
    "五常市",
    "宾县",
    "方正县",
    "通河县",
    "巴彦县",
    "延寿县",
    "木兰县",
    "依兰县"] },


  {
    "name": "齐齐哈尔市",
    "area": [
    "龙沙区",
    "昂昂溪区",
    "铁锋区",
    "建华区",
    "富拉尔基区",
    "碾子山区",
    "梅里斯达斡尔族区",
    "讷河市",
    "富裕县",
    "拜泉县",
    "甘南县",
    "依安县",
    "克山县",
    "泰来县",
    "克东县",
    "龙江县"] },


  {
    "name": "鹤岗市",
    "area": [
    "兴山区",
    "工农区",
    "南山区",
    "兴安区",
    "向阳区",
    "东山区",
    "萝北县",
    "绥滨县"] },


  {
    "name": "双鸭山",
    "area": [
    "尖山区",
    "岭东区",
    "四方台区",
    "宝山区",
    "集贤县",
    "宝清县",
    "友谊县",
    "饶河县"] },


  {
    "name": "鸡西市",
    "area": [
    "鸡冠区",
    "恒山区",
    "城子河区",
    "滴道区",
    "梨树区",
    "麻山区",
    "密山市",
    "虎林市",
    "鸡东县"] },


  {
    "name": "大庆市",
    "area": [
    "萨尔图区",
    "红岗区",
    "龙凤区",
    "让胡路区",
    "大同区",
    "林甸县",
    "肇州县",
    "肇源县",
    "杜尔伯特蒙古族自治县"] },


  {
    "name": "伊春市",
    "area": [
    "伊春区",
    "带岭区",
    "南岔区",
    "金山屯区",
    "西林区",
    "美溪区",
    "乌马河区",
    "翠峦区",
    "友好区",
    "上甘岭区",
    "五营区",
    "红星区",
    "新青区",
    "汤旺河区",
    "乌伊岭区",
    "铁力市",
    "嘉荫县"] },


  {
    "name": "牡丹江市",
    "area": [
    "爱民区",
    "东安区",
    "阳明区",
    "西安区",
    "绥芬河市",
    "宁安市",
    "海林市",
    "穆棱市",
    "林口县",
    "东宁县"] },


  {
    "name": "佳木斯市",
    "area": [
    "向阳区",
    "前进区",
    "东风区",
    "郊区",
    "同江市",
    "富锦市",
    "桦川县",
    "抚远县",
    "桦南县",
    "汤原县"] },


  {
    "name": "七台河市",
    "area": [
    "桃山区",
    "新兴区",
    "茄子河区",
    "勃利县"] },


  {
    "name": "黑河市",
    "area": [
    "爱辉区",
    "北安市",
    "五大连池市",
    "逊克县",
    "嫩江县",
    "孙吴县"] },


  {
    "name": "绥化市",
    "area": [
    "北林区",
    "安达市",
    "肇东市",
    "海伦市",
    "绥棱县",
    "兰西县",
    "明水县",
    "青冈县",
    "庆安县",
    "望奎县"] },


  {
    "name": "大兴安岭地区",
    "area": [
    "呼玛县",
    "塔河县",
    "漠河县",
    "大兴安岭辖区"] }] },




{
  "name": "上海市",
  "city": [
  {
    "name": "上海市",
    "area": [
    "黄浦区",
    "卢湾区",
    "徐汇区",
    "长宁区",
    "静安区",
    "普陀区",
    "闸北区",
    "虹口区",
    "杨浦区",
    "宝山区",
    "闵行区",
    "嘉定区",
    "松江区",
    "金山区",
    "青浦区",
    "南汇区",
    "奉贤区",
    "浦东新区",
    "崇明县"] }] },




{
  "name": "江苏省",
  "city": [
  {
    "name": "南京市",
    "area": [
    "玄武区",
    "白下区",
    "秦淮区",
    "建邺区",
    "鼓楼区",
    "下关区",
    "栖霞区",
    "雨花台区",
    "浦口区",
    "江宁区",
    "六合区",
    "溧水县",
    "高淳县"] },


  {
    "name": "苏州市",
    "area": [
    "金阊区",
    "平江区",
    "沧浪区",
    "虎丘区",
    "吴中区",
    "相城区",
    "常熟市",
    "张家港市",
    "昆山市",
    "吴江市",
    "太仓市"] },


  {
    "name": "无锡市",
    "area": [
    "崇安区",
    "南长区",
    "北塘区",
    "滨湖区",
    "锡山区",
    "惠山区",
    "江阴市",
    "宜兴市"] },


  {
    "name": "常州市",
    "area": [
    "钟楼区",
    "天宁区",
    "戚墅堰区",
    "新北区",
    "武进区",
    "金坛市",
    "溧阳市"] },


  {
    "name": "镇江市",
    "area": [
    "京口区",
    "润州区",
    "丹徒区",
    "丹阳市",
    "扬中市",
    "句容市"] },


  {
    "name": "南通市",
    "area": [
    "崇川区",
    "港闸区",
    "通州市",
    "如皋市",
    "海门市",
    "启东市",
    "海安县",
    "如东县"] },


  {
    "name": "泰州市",
    "area": [
    "海陵区",
    "高港区",
    "姜堰市",
    "泰兴市",
    "靖江市",
    "兴化市"] },


  {
    "name": "扬州市",
    "area": [
    "广陵区",
    "维扬区",
    "邗江区",
    "江都市",
    "仪征市",
    "高邮市",
    "宝应县"] },


  {
    "name": "盐城市",
    "area": [
    "亭湖区",
    "盐都区",
    "大丰市",
    "东台市",
    "建湖县",
    "射阳县",
    "阜宁县",
    "滨海县",
    "响水县"] },


  {
    "name": "连云港市",
    "area": [
    "新浦区",
    "海州区",
    "连云区",
    "东海县",
    "灌云县",
    "赣榆县",
    "灌南县"] },


  {
    "name": "徐州市",
    "area": [
    "云龙区",
    "鼓楼区",
    "九里区",
    "泉山区",
    "贾汪区",
    "邳州市",
    "新沂市",
    "铜山县",
    "睢宁县",
    "沛县",
    "丰县"] },


  {
    "name": "淮安市",
    "area": [
    "清河区",
    "清浦区",
    "楚州区",
    "淮阴区",
    "涟水县",
    "洪泽县",
    "金湖县",
    "盱眙县"] },


  {
    "name": "宿迁市",
    "area": [
    "宿城区",
    "宿豫区",
    "沭阳县",
    "泗阳县",
    "泗洪县"] }] },




{
  "name": "浙江省",
  "city": [
  {
    "name": "杭州市",
    "area": [
    "拱墅区",
    "西湖区",
    "上城区",
    "下城区",
    "江干区",
    "滨江区",
    "余杭区",
    "萧山区",
    "建德市",
    "富阳市",
    "临安市",
    "桐庐县",
    "淳安县"] },


  {
    "name": "宁波市",
    "area": [
    "海曙区",
    "江东区",
    "江北区",
    "镇海区",
    "北仑区",
    "鄞州区",
    "余姚市",
    "慈溪市",
    "奉化市",
    "宁海县",
    "象山县"] },


  {
    "name": "温州市",
    "area": [
    "鹿城区",
    "龙湾区",
    "瓯海区",
    "瑞安市",
    "乐清市",
    "永嘉县",
    "洞头县",
    "平阳县",
    "苍南县",
    "文成县",
    "泰顺县"] },


  {
    "name": "嘉兴市",
    "area": [
    "秀城区",
    "秀洲区",
    "海宁市",
    "平湖市",
    "桐乡市",
    "嘉善县",
    "海盐县"] },


  {
    "name": "湖州市",
    "area": [
    "吴兴区",
    "南浔区",
    "长兴县",
    "德清县",
    "安吉县"] },


  {
    "name": "绍兴市",
    "area": [
    "越城区",
    "诸暨市",
    "上虞市",
    "嵊州市",
    "绍兴县",
    "新昌县"] },


  {
    "name": "金华市",
    "area": [
    "婺城区",
    "金东区",
    "兰溪市",
    "义乌市",
    "东阳市",
    "永康市",
    "武义县",
    "浦江县",
    "磐安县"] },


  {
    "name": "衢州市",
    "area": [
    "柯城区",
    "衢江区",
    "江山市",
    "龙游县",
    "常山县",
    "开化县"] },


  {
    "name": "舟山市",
    "area": [
    "定海区",
    "普陀区",
    "岱山县",
    "嵊泗县"] },


  {
    "name": "台州市",
    "area": [
    "椒江区",
    "黄岩区",
    "路桥区",
    "临海市",
    "温岭市",
    "玉环县",
    "天台县",
    "仙居县",
    "三门县"] },


  {
    "name": "丽水市",
    "area": [
    "莲都区",
    "龙泉市",
    "缙云县",
    "青田县",
    "云和县",
    "遂昌县",
    "松阳县",
    "庆元县",
    "景宁畲族自治县"] }] },




{
  "name": "安徽省",
  "city": [
  {
    "name": "合肥市",
    "area": [
    "庐阳区",
    "瑶海区",
    "蜀山区",
    "包河区",
    "长丰县",
    "肥东县",
    "肥西县"] },


  {
    "name": "芜湖市",
    "area": [
    "镜湖区",
    "弋江区",
    "鸠江区",
    "三山区",
    "芜湖县",
    "南陵县",
    "繁昌县"] },


  {
    "name": "蚌埠市",
    "area": [
    "蚌山区",
    "龙子湖区",
    "禹会区",
    "淮上区",
    "怀远县",
    "固镇县",
    "五河县"] },


  {
    "name": "淮南市",
    "area": [
    "田家庵区",
    "大通区",
    "谢家集区",
    "八公山区",
    "潘集区",
    "凤台县"] },


  {
    "name": "马鞍山市",
    "area": [
    "雨山区",
    "花山区",
    "金家庄区",
    "当涂县"] },


  {
    "name": "淮北市",
    "area": [
    "相山区",
    "杜集区",
    "烈山区",
    "濉溪县"] },


  {
    "name": "铜陵市",
    "area": [
    "铜官山区",
    "狮子山区",
    "郊区",
    "铜陵县"] },


  {
    "name": "安庆市",
    "area": [
    "迎江区",
    "大观区",
    "宜秀区",
    "桐城市",
    "宿松县",
    "枞阳县",
    "太湖县",
    "怀宁县",
    "岳西县",
    "望江县",
    "潜山县"] },


  {
    "name": "黄山市",
    "area": [
    "屯溪区",
    "黄山区",
    "徽州区",
    "休宁县",
    "歙县",
    "祁门县",
    "黟县"] },


  {
    "name": "滁州市",
    "area": [
    "琅琊区",
    "南谯区",
    "天长市",
    "明光市",
    "全椒县",
    "来安县",
    "定远县",
    "凤阳县"] },


  {
    "name": "阜阳市",
    "area": [
    "颍州区",
    "颍东区",
    "颍泉区",
    "界首市",
    "临泉县",
    "颍上县",
    "阜南县",
    "太和县"] },


  {
    "name": "宿州市",
    "area": [
    "埇桥区",
    "萧县",
    "泗县",
    "砀山县",
    "灵璧县"] },


  {
    "name": "巢湖市",
    "area": [
    "居巢区",
    "含山县",
    "无为县",
    "庐江县",
    "和县"] },


  {
    "name": "六安市",
    "area": [
    "金安区",
    "裕安区",
    "寿县",
    "霍山县",
    "霍邱县",
    "舒城县",
    "金寨县"] },


  {
    "name": "亳州市",
    "area": [
    "谯城区",
    "利辛县",
    "涡阳县",
    "蒙城县"] },


  {
    "name": "池州市",
    "area": [
    "贵池区",
    "东至县",
    "石台县",
    "青阳县"] },


  {
    "name": "宣城市",
    "area": [
    "宣州区",
    "宁国市",
    "广德县",
    "郎溪县",
    "泾县",
    "旌德县",
    "绩溪县"] }] },




{
  "name": "福建省",
  "city": [
  {
    "name": "福州市",
    "area": [
    "鼓楼区",
    "台江区",
    "仓山区",
    "马尾区",
    "晋安区",
    "福清市",
    "长乐市",
    "闽侯县",
    "闽清县",
    "永泰县",
    "连江县",
    "罗源县",
    "平潭县"] },


  {
    "name": "厦门市",
    "area": [
    "思明区",
    "海沧区",
    "湖里区",
    "集美区",
    "同安区",
    "翔安区"] },


  {
    "name": "莆田市",
    "area": [
    "城厢区",
    "涵江区",
    "荔城区",
    "秀屿区",
    "仙游县"] },


  {
    "name": "三明市",
    "area": [
    "梅列区",
    "三元区",
    "永安市",
    "明溪县",
    "将乐县",
    "大田县",
    "宁化县",
    "建宁县",
    "沙县",
    "尤溪县",
    "清流县",
    "泰宁县"] },


  {
    "name": "泉州市",
    "area": [
    "鲤城区",
    "丰泽区",
    "洛江区",
    "泉港区",
    "石狮市",
    "晋江市",
    "南安市",
    "惠安县",
    "永春县",
    "安溪县",
    "德化县",
    "金门县"] },


  {
    "name": "漳州市",
    "area": [
    "芗城区",
    "龙文区",
    "龙海市",
    "平和县",
    "南靖县",
    "诏安县",
    "漳浦县",
    "华安县",
    "东山县",
    "长泰县",
    "云霄县"] },


  {
    "name": "南平市",
    "area": [
    "延平区",
    "建瓯市",
    "邵武市",
    "武夷山市",
    "建阳市",
    "松溪县",
    "光泽县",
    "顺昌县",
    "浦城县",
    "政和县"] },


  {
    "name": "龙岩市",
    "area": [
    "新罗区",
    "漳平市",
    "长汀县",
    "武平县",
    "上杭县",
    "永定县",
    "连城县"] },


  {
    "name": "宁德市",
    "area": [
    "蕉城区",
    "福安市",
    "福鼎市",
    "寿宁县",
    "霞浦县",
    "柘荣县",
    "屏南县",
    "古田县",
    "周宁县"] }] },




{
  "name": "江西省",
  "city": [
  {
    "name": "南昌市",
    "area": [
    "东湖区",
    "西湖区",
    "青云谱区",
    "湾里区",
    "青山湖区",
    "新建县",
    "南昌县",
    "进贤县",
    "安义县"] },


  {
    "name": "景德镇市",
    "area": [
    "珠山区",
    "昌江区",
    "乐平市",
    "浮梁县"] },


  {
    "name": "萍乡市",
    "area": [
    "安源区",
    "湘东区",
    "莲花县",
    "上栗县",
    "芦溪县"] },


  {
    "name": "九江市",
    "area": [
    "浔阳区",
    "庐山区",
    "瑞昌市",
    "九江县",
    "星子县",
    "武宁县",
    "彭泽县",
    "永修县",
    "修水县",
    "湖口县",
    "德安县",
    "都昌县"] },


  {
    "name": "新余市",
    "area": [
    "渝水区",
    "分宜县"] },


  {
    "name": "鹰潭市",
    "area": [
    "月湖区",
    "贵溪市",
    "余江县"] },


  {
    "name": "赣州市",
    "area": [
    "章贡区",
    "瑞金市",
    "南康市",
    "石城县",
    "安远县",
    "赣县",
    "宁都县",
    "寻乌县",
    "兴国县",
    "定南县",
    "上犹县",
    "于都县",
    "龙南县",
    "崇义县",
    "信丰县",
    "全南县",
    "大余县",
    "会昌县"] },


  {
    "name": "吉安市",
    "area": [
    "吉州区",
    "青原区",
    "井冈山市",
    "吉安县",
    "永丰县",
    "永新县",
    "新干县",
    "泰和县",
    "峡江县",
    "遂川县",
    "安福县",
    "吉水县",
    "万安县"] },


  {
    "name": "宜春市",
    "area": [
    "袁州区",
    "丰城市",
    "樟树市",
    "高安市",
    "铜鼓县",
    "靖安县",
    "宜丰县",
    "奉新县",
    "万载县",
    "上高县"] },


  {
    "name": "抚州市",
    "area": [
    "临川区",
    "南丰县",
    "乐安县",
    "金溪县",
    "南城县",
    "东乡县",
    "资溪县",
    "宜黄县",
    "广昌县",
    "黎川县",
    "崇仁县"] },


  {
    "name": "上饶市",
    "area": [
    "信州区",
    "德兴市",
    "上饶县",
    "广丰县",
    "鄱阳县",
    "婺源县",
    "铅山县",
    "余干县",
    "横峰县",
    "弋阳县",
    "玉山县",
    "万年县"] }] },




{
  "name": "山东省",
  "city": [
  {
    "name": "济南市",
    "area": [
    "市中区",
    "历下区",
    "天桥区",
    "槐荫区",
    "历城区",
    "长清区",
    "章丘市",
    "平阴县",
    "济阳县",
    "商河县"] },


  {
    "name": "青岛市",
    "area": [
    "市南区",
    "市北区",
    "城阳区",
    "四方区",
    "李沧区",
    "黄岛区",
    "崂山区",
    "胶南市",
    "胶州市",
    "平度市",
    "莱西市",
    "即墨市"] },


  {
    "name": "淄博市",
    "area": [
    "张店区",
    "临淄区",
    "淄川区",
    "博山区",
    "周村区",
    "桓台县",
    "高青县",
    "沂源县"] },


  {
    "name": "枣庄市",
    "area": [
    "市中区",
    "山亭区",
    "峄城区",
    "台儿庄区",
    "薛城区",
    "滕州市"] },


  {
    "name": "东营市",
    "area": [
    "东营区",
    "河口区",
    "垦利县",
    "广饶县",
    "利津县"] },


  {
    "name": "烟台市",
    "area": [
    "芝罘区",
    "福山区",
    "牟平区",
    "莱山区",
    "龙口市",
    "莱阳市",
    "莱州市",
    "招远市",
    "蓬莱市",
    "栖霞市",
    "海阳市",
    "长岛县"] },


  {
    "name": "潍坊市",
    "area": [
    "潍城区",
    "寒亭区",
    "坊子区",
    "奎文区",
    "青州市",
    "诸城市",
    "寿光市",
    "安丘市",
    "高密市",
    "昌邑市",
    "昌乐县",
    "临朐县"] },


  {
    "name": "济宁市",
    "area": [
    "市中区",
    "任城区",
    "曲阜市",
    "兖州市",
    "邹城市",
    "鱼台县",
    "金乡县",
    "嘉祥县",
    "微山县",
    "汶上县",
    "泗水县",
    "梁山县"] },


  {
    "name": "泰安市",
    "area": [
    "泰山区",
    "岱岳区",
    "新泰市",
    "肥城市",
    "宁阳县",
    "东平县"] },


  {
    "name": "威海市",
    "area": [
    "环翠区",
    "乳山市",
    "文登市",
    "荣成市"] },


  {
    "name": "日照市",
    "area": [
    "东港区",
    "岚山区",
    "五莲县",
    "莒县"] },


  {
    "name": "莱芜市",
    "area": [
    "莱城区",
    "钢城区"] },


  {
    "name": "临沂市",
    "area": [
    "兰山区",
    "罗庄区",
    "河东区",
    "沂南县",
    "郯城县",
    "沂水县",
    "苍山县",
    "费县",
    "平邑县",
    "莒南县",
    "蒙阴县",
    "临沭县"] },


  {
    "name": "德州市",
    "area": [
    "德城区",
    "乐陵市",
    "禹城市",
    "陵县",
    "宁津县",
    "齐河县",
    "武城县",
    "庆云县",
    "平原县",
    "夏津县",
    "临邑县"] },


  {
    "name": "聊城市",
    "area": [
    "东昌府区",
    "临清市",
    "高唐县",
    "阳谷县",
    "茌平县",
    "莘县",
    "东阿县",
    "冠县"] },


  {
    "name": "滨州市",
    "area": [
    "滨城区",
    "邹平县",
    "沾化县",
    "惠民县",
    "博兴县",
    "阳信县",
    "无棣县"] },


  {
    "name": "菏泽市",
    "area": [
    "牡丹区",
    "鄄城县",
    "单县",
    "郓城县",
    "曹县",
    "定陶县",
    "巨野县",
    "东明县",
    "成武县"] }] },




{
  "name": "河南省",
  "city": [
  {
    "name": "郑州市",
    "area": [
    "中原区",
    "金水区",
    "二七区",
    "管城回族区",
    "上街区",
    "惠济区",
    "巩义市",
    "新郑市",
    "新密市",
    "登封市",
    "荥阳市",
    "中牟县"] },


  {
    "name": "开封市",
    "area": [
    "鼓楼区",
    "龙亭区",
    "顺河回族区",
    "禹王台区",
    "金明区",
    "开封县",
    "尉氏县",
    "兰考县",
    "杞县",
    "通许县"] },


  {
    "name": "洛阳市",
    "area": [
    "西工区",
    "老城区",
    "涧西区",
    "瀍河回族区",
    "洛龙区",
    "吉利区",
    "偃师市",
    "孟津县",
    "汝阳县",
    "伊川县",
    "洛宁县",
    "嵩县",
    "宜阳县",
    "新安县",
    "栾川县"] },


  {
    "name": "平顶山市",
    "area": [
    "新华区",
    "卫东区",
    "湛河区",
    "石龙区",
    "汝州市",
    "舞钢市",
    "宝丰县",
    "叶县",
    "郏县",
    "鲁山县"] },


  {
    "name": "安阳市",
    "area": [
    "北关区",
    "文峰区",
    "殷都区",
    "龙安区",
    "林州市",
    "安阳县",
    "滑县",
    "内黄县",
    "汤阴县"] },


  {
    "name": "鹤壁市",
    "area": [
    "淇滨区",
    "山城区",
    "鹤山区",
    "浚县",
    "淇县"] },


  {
    "name": "新乡市",
    "area": [
    "卫滨区",
    "红旗区",
    "凤泉区",
    "牧野区",
    "卫辉市",
    "辉县市",
    "新乡县",
    "获嘉县",
    "原阳县",
    "长垣县",
    "封丘县",
    "延津县"] },


  {
    "name": "焦作市",
    "area": [
    "解放区",
    "中站区",
    "马村区",
    "山阳区",
    "沁阳市",
    "孟州市",
    "修武县",
    "温县",
    "武陟县",
    "博爱县"] },


  {
    "name": "濮阳市",
    "area": [
    "华龙区",
    "濮阳县",
    "南乐县",
    "台前县",
    "清丰县",
    "范县"] },


  {
    "name": "许昌市",
    "area": [
    "魏都区",
    "禹州市",
    "长葛市",
    "许昌县",
    "鄢陵县",
    "襄城县"] },


  {
    "name": "漯河市",
    "area": [
    "源汇区",
    "郾城区",
    "召陵区",
    "临颍县",
    "舞阳县"] },


  {
    "name": "三门峡市",
    "area": [
    "湖滨区",
    "义马市",
    "灵宝市",
    "渑池县",
    "卢氏县",
    "陕县"] },


  {
    "name": "南阳市",
    "area": [
    "卧龙区",
    "宛城区",
    "邓州市",
    "桐柏县",
    "方城县",
    "淅川县",
    "镇平县",
    "唐河县",
    "南召县",
    "内乡县",
    "新野县",
    "社旗县",
    "西峡县"] },


  {
    "name": "商丘市",
    "area": [
    "梁园区",
    "睢阳区",
    "永城市",
    "宁陵县",
    "虞城县",
    "民权县",
    "夏邑县",
    "柘城县",
    "睢县"] },


  {
    "name": "信阳市",
    "area": [
    "浉河区",
    "平桥区",
    "潢川县",
    "淮滨县",
    "息县",
    "新县",
    "商城县",
    "固始县",
    "罗山县",
    "光山县"] },


  {
    "name": "周口市",
    "area": [
    "川汇区",
    "项城市",
    "商水县",
    "淮阳县",
    "太康县",
    "鹿邑县",
    "西华县",
    "扶沟县",
    "沈丘县",
    "郸城县"] },


  {
    "name": "驻马店市",
    "area": [
    "驿城区",
    "确山县",
    "新蔡县",
    "上蔡县",
    "西平县",
    "泌阳县",
    "平舆县",
    "汝南县",
    "遂平县",
    "正阳县"] },


  {
    "name": "焦作市",
    "area": [
    "济源市"] }] },




{
  "name": "湖北省",
  "city": [
  {
    "name": "武汉市",
    "area": [
    "江岸区",
    "武昌区",
    "江汉区",
    "硚口区",
    "汉阳区",
    "青山区",
    "洪山区",
    "东西湖区",
    "汉南区",
    "蔡甸区",
    "江夏区",
    "黄陂区",
    "新洲区"] },


  {
    "name": "黄石市",
    "area": [
    "黄石港区",
    "西塞山区",
    "下陆区",
    "铁山区",
    "大冶市",
    "阳新县"] },


  {
    "name": "十堰市",
    "area": [
    "张湾区",
    "茅箭区",
    "丹江口市",
    "郧县",
    "竹山县",
    "房县",
    "郧西县",
    "竹溪县"] },


  {
    "name": "荆州市",
    "area": [
    "沙市区",
    "荆州区",
    "洪湖市",
    "石首市",
    "松滋市",
    "监利县",
    "公安县",
    "江陵县"] },


  {
    "name": "宜昌市",
    "area": [
    "西陵区",
    "伍家岗区",
    "点军区",
    "猇亭区",
    "夷陵区",
    "宜都市",
    "当阳市",
    "枝江市",
    "秭归县",
    "远安县",
    "兴山县",
    "五峰土家族自治县",
    "长阳土家族自治县"] },


  {
    "name": "襄樊市",
    "area": [
    "襄城区",
    "樊城区",
    "襄阳区",
    "老河口市",
    "枣阳市",
    "宜城市",
    "南漳县",
    "谷城县",
    "保康县"] },


  {
    "name": "鄂州市",
    "area": [
    "鄂城区",
    "华容区",
    "梁子湖区"] },


  {
    "name": "荆门市",
    "area": [
    "东宝区",
    "掇刀区",
    "钟祥市",
    "京山县",
    "沙洋县"] },


  {
    "name": "孝感市",
    "area": [
    "孝南区",
    "应城市",
    "安陆市",
    "汉川市",
    "云梦县",
    "大悟县",
    "孝昌县"] },


  {
    "name": "黄冈市",
    "area": [
    "黄州区",
    "麻城市",
    "武穴市",
    "红安县",
    "罗田县",
    "浠水县",
    "蕲春县",
    "黄梅县",
    "英山县",
    "团风县"] },


  {
    "name": "咸宁市",
    "area": [
    "咸安区",
    "赤壁市",
    "嘉鱼县",
    "通山县",
    "崇阳县",
    "通城县"] },


  {
    "name": "随州市",
    "area": [
    "曾都区",
    "广水市"] },


  {
    "name": "恩施土家族苗族自治州",
    "area": [
    "恩施市",
    "利川市",
    "建始县",
    "来凤县",
    "巴东县",
    "鹤峰县",
    "宣恩县",
    "咸丰县"] },


  {
    "name": "仙桃市",
    "area": [
    "仙桃"] },


  {
    "name": "天门市",
    "area": [
    "天门"] },


  {
    "name": "潜江市",
    "area": [
    "潜江"] },


  {
    "name": "神农架林区",
    "area": [
    "神农架林区"] }] },




{
  "name": "湖南省",
  "city": [
  {
    "name": "长沙市",
    "area": [
    "岳麓区",
    "芙蓉区",
    "天心区",
    "开福区",
    "雨花区",
    "浏阳市",
    "长沙县",
    "望城县",
    "宁乡县"] },


  {
    "name": "株洲市",
    "area": [
    "天元区",
    "荷塘区",
    "芦淞区",
    "石峰区",
    "醴陵市",
    "株洲县",
    "炎陵县",
    "茶陵县",
    "攸县"] },


  {
    "name": "湘潭市",
    "area": [
    "岳塘区",
    "雨湖区",
    "湘乡市",
    "韶山市",
    "湘潭县"] },


  {
    "name": "衡阳市",
    "area": [
    "雁峰区",
    "珠晖区",
    "石鼓区",
    "蒸湘区",
    "南岳区",
    "耒阳市",
    "常宁市",
    "衡阳县",
    "衡东县",
    "衡山县",
    "衡南县",
    "祁东县"] },


  {
    "name": "邵阳市",
    "area": [
    "双清区",
    "大祥区",
    "北塔区",
    "武冈市",
    "邵东县",
    "洞口县",
    "新邵县",
    "绥宁县",
    "新宁县",
    "邵阳县",
    "隆回县",
    "城步苗族自治县"] },


  {
    "name": "岳阳市",
    "area": [
    "岳阳楼区",
    "云溪区",
    "君山区",
    "临湘市",
    "汨罗市",
    "岳阳县",
    "湘阴县",
    "平江县",
    "华容县"] },


  {
    "name": "常德市",
    "area": [
    "武陵区",
    "鼎城区",
    "津市市",
    "澧县",
    "临澧县",
    "桃源县",
    "汉寿县",
    "安乡县",
    "石门县"] },


  {
    "name": "张家界市",
    "area": [
    "永定区",
    "武陵源区",
    "慈利县",
    "桑植县"] },


  {
    "name": "益阳市",
    "area": [
    "赫山区",
    "资阳区",
    "沅江市",
    "桃江县",
    "南县",
    "安化县"] },


  {
    "name": "郴州市",
    "area": [
    "北湖区",
    "苏仙区",
    "资兴市",
    "宜章县",
    "汝城县",
    "安仁县",
    "嘉禾县",
    "临武县",
    "桂东县",
    "永兴县",
    "桂阳县"] },


  {
    "name": "永州市",
    "area": [
    "冷水滩区",
    "零陵区",
    "祁阳县",
    "蓝山县",
    "宁远县",
    "新田县",
    "东安县",
    "江永县",
    "道县",
    "双牌县",
    "江华瑶族自治县"] },


  {
    "name": "怀化市",
    "area": [
    "鹤城区",
    "洪江市",
    "会同县",
    "沅陵县",
    "辰溪县",
    "溆浦县",
    "中方县",
    "新晃侗族自治县",
    "芷江侗族自治县",
    "通道侗族自治县",
    "靖州苗族侗族自治县",
    "麻阳苗族自治县"] },


  {
    "name": "娄底市",
    "area": [
    "娄星区",
    "冷水江市",
    "涟源市",
    "新化县",
    "双峰县"] },


  {
    "name": "湘西土家族苗族自治州",
    "area": [
    "吉首市",
    "古丈县",
    "龙山县",
    "永顺县",
    "凤凰县",
    "泸溪县",
    "保靖县",
    "花垣县"] }] },




{
  "name": "广东省",
  "city": [
  {
    "name": "广州市",
    "area": [
    "越秀区",
    "荔湾区",
    "海珠区",
    "天河区",
    "白云区",
    "黄埔区",
    "番禺区",
    "花都区",
    "南沙区",
    "萝岗区",
    "增城市",
    "从化市"] },


  {
    "name": "深圳市",
    "area": [
    "福田区",
    "罗湖区",
    "南山区",
    "宝安区",
    "龙岗区",
    "盐田区"] },


  {
    "name": "东莞市",
    "area": [
    "莞城",
    "常平",
    "塘厦",
    "塘厦",
    "塘厦"] },


  {
    "name": "中山市",
    "area": [
    "中山"] },


  {
    "name": "潮州市",
    "area": [
    "湘桥区",
    "潮安县",
    "饶平县"] },


  {
    "name": "揭阳市",
    "area": [
    "榕城区",
    "揭东县",
    "揭西县",
    "惠来县",
    "普宁市"] },


  {
    "name": "云浮市",
    "area": [
    "云城区",
    "新兴县",
    "郁南县",
    "云安县",
    "罗定市"] },


  {
    "name": "珠海市",
    "area": [
    "香洲区",
    "斗门区",
    "金湾区"] },


  {
    "name": "汕头市",
    "area": [
    "金平区",
    "濠江区",
    "龙湖区",
    "潮阳区",
    "潮南区",
    "澄海区",
    "南澳县"] },


  {
    "name": "韶关市",
    "area": [
    "浈江区",
    "武江区",
    "曲江区",
    "乐昌市",
    "南雄市",
    "始兴县",
    "仁化县",
    "翁源县",
    "新丰县",
    "乳源瑶族自治县"] },


  {
    "name": "佛山市",
    "area": [
    "禅城区",
    "南海区",
    "顺德区",
    "三水区",
    "高明区"] },


  {
    "name": "江门市",
    "area": [
    "蓬江区",
    "江海区",
    "新会区",
    "恩平市",
    "台山市",
    "开平市",
    "鹤山市"] },


  {
    "name": "湛江市",
    "area": [
    "赤坎区",
    "霞山区",
    "坡头区",
    "麻章区",
    "吴川市",
    "廉江市",
    "雷州市",
    "遂溪县",
    "徐闻县"] },


  {
    "name": "茂名市",
    "area": [
    "茂南区",
    "茂港区",
    "化州市",
    "信宜市",
    "高州市",
    "电白县"] },


  {
    "name": "肇庆市",
    "area": [
    "端州区",
    "鼎湖区",
    "高要市",
    "四会市",
    "广宁县",
    "怀集县",
    "封开县",
    "德庆县"] },


  {
    "name": "惠州市",
    "area": [
    "惠城区",
    "惠阳区",
    "博罗县",
    "惠东县",
    "龙门县"] },


  {
    "name": "梅州市",
    "area": [
    "梅江区",
    "兴宁市",
    "梅县",
    "大埔县",
    "丰顺县",
    "五华县",
    "平远县",
    "蕉岭县"] },


  {
    "name": "汕尾市",
    "area": [
    "城区",
    "陆丰市",
    "海丰县",
    "陆河县"] },


  {
    "name": "河源市",
    "area": [
    "源城区",
    "紫金县",
    "龙川县",
    "连平县",
    "和平县",
    "东源县"] },


  {
    "name": "阳江市",
    "area": [
    "江城区",
    "阳春市",
    "阳西县",
    "阳东县"] },


  {
    "name": "清远市",
    "area": [
    "清城区",
    "英德市",
    "连州市",
    "佛冈县",
    "阳山县",
    "清新县",
    "连山壮族瑶族自治县",
    "连南瑶族自治县"] }] },




{
  "name": "广西",
  "city": [
  {
    "name": "南宁市",
    "area": [
    "青秀区",
    "兴宁区",
    "西乡塘区",
    "良庆区",
    "江南区",
    "邕宁区",
    "武鸣县",
    "隆安县",
    "马山县",
    "上林县",
    "宾阳县",
    "横县"] },


  {
    "name": "柳州市",
    "area": [
    "城中区",
    "鱼峰区",
    "柳北区",
    "柳南区",
    "柳江县",
    "柳城县",
    "鹿寨县",
    "融安县",
    "融水苗族自治县",
    "三江侗族自治县"] },


  {
    "name": "桂林市",
    "area": [
    "象山区",
    "秀峰区",
    "叠彩区",
    "七星区",
    "雁山区",
    "阳朔县",
    "临桂县",
    "灵川县",
    "全州县",
    "平乐县",
    "兴安县",
    "灌阳县",
    "荔浦县",
    "资源县",
    "永福县",
    "龙胜各族自治县",
    "恭城瑶族自治县"] },


  {
    "name": "梧州市",
    "area": [
    "万秀区",
    "蝶山区",
    "长洲区",
    "岑溪市",
    "苍梧县",
    "藤县",
    "蒙山县"] },


  {
    "name": "北海市",
    "area": [
    "海城区",
    "银海区",
    "铁山港区",
    "合浦县"] },


  {
    "name": "防城港市",
    "area": [
    "港口区",
    "防城区",
    "东兴市",
    "上思县"] },


  {
    "name": "钦州市",
    "area": [
    "钦南区",
    "钦北区",
    "灵山县",
    "浦北县"] },


  {
    "name": "贵港市",
    "area": [
    "港北区",
    "港南区",
    "覃塘区",
    "桂平市",
    "平南县"] },


  {
    "name": "玉林市",
    "area": [
    "玉州区",
    "北流市",
    "容县",
    "陆川县",
    "博白县",
    "兴业县"] },


  {
    "name": "百色市",
    "area": [
    "右江区",
    "凌云县",
    "平果县",
    "西林县",
    "乐业县",
    "德保县",
    "田林县",
    "田阳县",
    "靖西县",
    "田东县",
    "那坡县",
    "隆林各族自治县"] },


  {
    "name": "贺州市",
    "area": [
    "八步区",
    "钟山县",
    "昭平县",
    "富川瑶族自治县"] },


  {
    "name": "河池市",
    "area": [
    "金城江区",
    "宜州市",
    "天峨县",
    "凤山县",
    "南丹县",
    "东兰县",
    "都安瑶族自治县",
    "罗城仫佬族自治县",
    "巴马瑶族自治县",
    "环江毛南族自治县",
    "大化瑶族自治县"] },


  {
    "name": "来宾市",
    "area": [
    "兴宾区",
    "合山市",
    "象州县",
    "武宣县",
    "忻城县",
    "金秀瑶族自治县"] },


  {
    "name": "崇左市",
    "area": [
    "江州区",
    "凭祥市",
    "宁明县",
    "扶绥县",
    "龙州县",
    "大新县",
    "天等县"] }] },




{
  "name": "海南省",
  "city": [
  {
    "name": "海口市",
    "area": [
    "龙华区",
    "秀英区",
    "琼山区",
    "美兰区"] },


  {
    "name": "三亚市",
    "area": [
    "三亚市"] },


  {
    "name": "五指山市",
    "area": [
    "五指山"] },


  {
    "name": "琼海市",
    "area": [
    "琼海"] },


  {
    "name": "儋州市",
    "area": [
    "儋州"] },


  {
    "name": "文昌市",
    "area": [
    "文昌"] },


  {
    "name": "万宁市",
    "area": [
    "万宁"] },


  {
    "name": "东方市",
    "area": [
    "东方"] },


  {
    "name": "澄迈县",
    "area": [
    "澄迈县"] },


  {
    "name": "定安县",
    "area": [
    "定安县"] },


  {
    "name": "屯昌县",
    "area": [
    "屯昌县"] },


  {
    "name": "临高县",
    "area": [
    "临高县"] },


  {
    "name": "白沙黎族自治县",
    "area": [
    "白沙黎族自治县"] },


  {
    "name": "昌江黎族自治县",
    "area": [
    "昌江黎族自治县"] },


  {
    "name": "乐东黎族自治县",
    "area": [
    "乐东黎族自治县"] },


  {
    "name": "陵水黎族自治县",
    "area": [
    "陵水黎族自治县"] },


  {
    "name": "保亭黎族苗族自治县",
    "area": [
    "保亭黎族苗族自治县"] },


  {
    "name": "琼中黎族苗族自治县",
    "area": [
    "琼中黎族苗族自治县"] }] },




{
  "name": "重庆市",
  "city": [
  {
    "name": "重庆市",
    "area": [
    "渝中区",
    "大渡口区",
    "江北区",
    "南岸区",
    "北碚区",
    "渝北区",
    "巴南区",
    "长寿区",
    "双桥区",
    "沙坪坝区",
    "万盛区",
    "万州区",
    "涪陵区",
    "黔江区",
    "永川区",
    "合川区",
    "江津区",
    "九龙坡区",
    "南川区",
    "綦江县",
    "潼南县",
    "荣昌县",
    "璧山县",
    "大足县",
    "铜梁县",
    "梁平县",
    "开县",
    "忠县",
    "城口县",
    "垫江县",
    "武隆县",
    "丰都县",
    "奉节县",
    "云阳县",
    "巫溪县",
    "巫山县",
    "石柱土家族自治县",
    "秀山土家族苗族自治县",
    "酉阳土家族苗族自治县",
    "彭水苗族土家族自治县"] }] },




{
  "name": "四川省",
  "city": [
  {
    "name": "成都市",
    "area": [
    "青羊区",
    "锦江区",
    "金牛区",
    "武侯区",
    "成华区",
    "龙泉驿区",
    "青白江区",
    "新都区",
    "温江区",
    "都江堰市",
    "彭州市",
    "邛崃市",
    "崇州市",
    "金堂县",
    "郫县",
    "新津县",
    "双流县",
    "蒲江县",
    "大邑县"] },


  {
    "name": "自贡市",
    "area": [
    "大安区",
    "自流井区",
    "贡井区",
    "沿滩区",
    "荣县",
    "富顺县"] },


  {
    "name": "攀枝花市",
    "area": [
    "仁和区",
    "米易县",
    "盐边县",
    "东区",
    "西区"] },


  {
    "name": "泸州市",
    "area": [
    "江阳区",
    "纳溪区",
    "龙马潭区",
    "泸县",
    "合江县",
    "叙永县",
    "古蔺县"] },


  {
    "name": "德阳市",
    "area": [
    "旌阳区",
    "广汉市",
    "什邡市",
    "绵竹市",
    "罗江县",
    "中江县"] },


  {
    "name": "绵阳市",
    "area": [
    "涪城区",
    "游仙区",
    "江油市",
    "盐亭县",
    "三台县",
    "平武县",
    "安县",
    "梓潼县",
    "北川羌族自治县"] },


  {
    "name": "广元市",
    "area": [
    "元坝区",
    "朝天区",
    "青川县",
    "旺苍县",
    "剑阁县",
    "苍溪县",
    "市中区"] },


  {
    "name": "遂宁市",
    "area": [
    "船山区",
    "安居区",
    "射洪县",
    "蓬溪县",
    "大英县"] },


  {
    "name": "内江市",
    "area": [
    "市中区",
    "东兴区",
    "资中县",
    "隆昌县",
    "威远县"] },


  {
    "name": "乐山市",
    "area": [
    "市中区",
    "五通桥区",
    "沙湾区",
    "金口河区",
    "峨眉山市",
    "夹江县",
    "井研县",
    "犍为县",
    "沐川县",
    "马边彝族自治县",
    "峨边彝族自治县"] },


  {
    "name": "南充",
    "area": [
    "顺庆区",
    "高坪区",
    "嘉陵区",
    "阆中市",
    "营山县",
    "蓬安县",
    "仪陇县",
    "南部县",
    "西充县"] },


  {
    "name": "眉山市",
    "area": [
    "东坡区",
    "仁寿县",
    "彭山县",
    "洪雅县",
    "丹棱县",
    "青神县"] },


  {
    "name": "宜宾市",
    "area": [
    "翠屏区",
    "宜宾县",
    "兴文县",
    "南溪县",
    "珙县",
    "长宁县",
    "高县",
    "江安县",
    "筠连县",
    "屏山县"] },


  {
    "name": "广安市",
    "area": [
    "广安区",
    "华蓥市",
    "岳池县",
    "邻水县",
    "武胜县"] },


  {
    "name": "达州市",
    "area": [
    "通川区",
    "万源市",
    "达县",
    "渠县",
    "宣汉县",
    "开江县",
    "大竹县"] },


  {
    "name": "雅安市",
    "area": [
    "雨城区",
    "芦山县",
    "石棉县",
    "名山县",
    "天全县",
    "荥经县",
    "宝兴县",
    "汉源县"] },


  {
    "name": "巴中市",
    "area": [
    "巴州区",
    "南江县",
    "平昌县",
    "通江县"] },


  {
    "name": "资阳市",
    "area": [
    "雁江区",
    "简阳市",
    "安岳县",
    "乐至县"] },


  {
    "name": "阿坝藏族羌族自治州",
    "area": [
    "马尔康县",
    "九寨沟县",
    "红原县",
    "汶川县",
    "阿坝县",
    "理县",
    "若尔盖县",
    "小金县",
    "黑水县",
    "金川县",
    "松潘县",
    "壤塘县",
    "茂县"] },


  {
    "name": "甘孜藏族自治州",
    "area": [
    "康定县",
    "丹巴县",
    "炉霍县",
    "九龙县",
    "甘孜县",
    "雅江县",
    "新龙县",
    "道孚县",
    "白玉县",
    "理塘县",
    "德格县",
    "乡城县",
    "石渠县",
    "稻城县",
    "色达县",
    "巴塘县",
    "泸定县",
    "得荣县"] },


  {
    "name": "凉山彝族自治州",
    "area": [
    "西昌市",
    "美姑县",
    "昭觉县",
    "金阳县",
    "甘洛县",
    "布拖县",
    "雷波县",
    "普格县",
    "宁南县",
    "喜德县",
    "会东县",
    "越西县",
    "会理县",
    "盐源县",
    "德昌县",
    "冕宁县",
    "木里藏族自治县"] }] },




{
  "name": "贵州省",
  "city": [
  {
    "name": "贵阳市",
    "area": [
    "南明区",
    "云岩区",
    "花溪区",
    "乌当区",
    "白云区",
    "小河区",
    "清镇市",
    "开阳县",
    "修文县",
    "息烽县"] },


  {
    "name": "六盘水市",
    "area": [
    "钟山区",
    "水城县",
    "盘县",
    "六枝特区"] },


  {
    "name": "遵义市",
    "area": [
    "红花岗区",
    "汇川区",
    "赤水市",
    "仁怀市",
    "遵义县",
    "绥阳县",
    "桐梓县",
    "习水县",
    "凤冈县",
    "正安县",
    "余庆县",
    "湄潭县",
    "道真仡佬族苗族自治县",
    "务川仡佬族苗族自治县"] },


  {
    "name": "安顺市",
    "area": [
    "西秀区",
    "普定县",
    "平坝县",
    "镇宁布依族苗族自治县",
    "紫云苗族布依族自治县",
    "关岭布依族苗族自治县"] },


  {
    "name": "铜仁地区",
    "area": [
    "铜仁市",
    "德江县",
    "江口县",
    "思南县",
    "石阡县",
    "玉屏侗族自治县",
    "松桃苗族自治县",
    "印江土家族苗族自治县",
    "沿河土家族自治县",
    "万山特区"] },


  {
    "name": "毕节地区",
    "area": [
    "毕节市",
    "黔西县",
    "大方县",
    "织金县",
    "金沙县",
    "赫章县",
    "纳雍县",
    "威宁彝族回族苗族自治县"] },


  {
    "name": "黔西南布依族苗族自治州",
    "area": [
    "兴义市",
    "望谟县",
    "兴仁县",
    "普安县",
    "册亨县",
    "晴隆县",
    "贞丰县",
    "安龙县"] },


  {
    "name": "黔东南苗族侗族自治州",
    "area": [
    "凯里市",
    "施秉县",
    "从江县",
    "锦屏县",
    "镇远县",
    "麻江县",
    "台江县",
    "天柱县",
    "黄平县",
    "榕江县",
    "剑河县",
    "三穗县",
    "雷山县",
    "黎平县",
    "岑巩县",
    "丹寨县"] },


  {
    "name": "黔南布依族苗族自治州",
    "area": [
    "都匀市",
    "福泉市",
    "贵定县",
    "惠水县",
    "罗甸县",
    "瓮安县",
    "荔波县",
    "龙里县",
    "平塘县",
    "长顺县",
    "独山县",
    "三都水族自治县"] }] },




{
  "name": "云南省",
  "city": [
  {
    "name": "昆明市",
    "area": [
    "盘龙区",
    "五华区",
    "官渡区",
    "西山区",
    "东川区",
    "安宁市",
    "呈贡县",
    "晋宁县",
    "富民县",
    "宜良县",
    "嵩明县",
    "石林彝族自治县",
    "禄劝彝族苗族自治县",
    "寻甸回族彝族自治县"] },


  {
    "name": "曲靖市",
    "area": [
    "麒麟区",
    "宣威市",
    "马龙县",
    "沾益县",
    "富源县",
    "罗平县",
    "师宗县",
    "陆良县",
    "会泽县"] },


  {
    "name": "玉溪市",
    "area": [
    "红塔区",
    "江川县",
    "澄江县",
    "通海县",
    "华宁县",
    "易门县",
    "峨山彝族自治县",
    "新平彝族傣族自治县",
    "元江哈尼族彝族傣族自治县"] },


  {
    "name": "保山市",
    "area": [
    "隆阳区",
    "施甸县",
    "腾冲县",
    "龙陵县",
    "昌宁县"] },


  {
    "name": "昭通市",
    "area": [
    "昭阳区",
    "鲁甸县",
    "巧家县",
    "盐津县",
    "大关县",
    "永善县",
    "绥江县",
    "镇雄县",
    "彝良县",
    "威信县",
    "水富县"] },


  {
    "name": "丽江市",
    "area": [
    "古城区",
    "永胜县",
    "华坪县",
    "玉龙纳西族自治县",
    "宁蒗彝族自治县"] },


  {
    "name": "普洱市",
    "area": [
    "思茅区",
    "普洱哈尼族彝族自治县",
    "墨江哈尼族自治县",
    "景东彝族自治县",
    "景谷傣族彝族自治县",
    "镇沅彝族哈尼族拉祜族自治县",
    "江城哈尼族彝族自治县",
    "孟连傣族拉祜族佤族自治县",
    "澜沧拉祜族自治县",
    "西盟佤族自治县"] },


  {
    "name": "临沧市",
    "area": [
    "临翔区",
    "凤庆县",
    "云县",
    "永德县",
    "镇康县",
    "双江拉祜族佤族布朗族傣族自治县",
    "耿马傣族佤族自治县",
    "沧源佤族自治县"] },


  {
    "name": "德宏傣族景颇族自治州",
    "area": [
    "潞西市",
    "瑞丽市",
    "梁河县",
    "盈江县",
    "陇川县"] },


  {
    "name": "怒江傈僳族自治州",
    "area": [
    "泸水县",
    "福贡县",
    "贡山独龙族怒族自治县",
    "兰坪白族普米族自治县"] },


  {
    "name": "迪庆藏族自治州",
    "area": [
    "香格里拉县",
    "德钦县",
    "维西傈僳族自治县"] },


  {
    "name": "大理白族自治州",
    "area": [
    "大理市",
    "祥云县",
    "宾川县",
    "弥渡县",
    "永平县",
    "云龙县",
    "洱源县",
    "剑川县",
    "鹤庆县",
    "漾濞彝族自治县",
    "南涧彝族自治县",
    "巍山彝族回族自治县"] },


  {
    "name": "楚雄彝族自治州",
    "area": [
    "楚雄市",
    "双柏县",
    "牟定县",
    "南华县",
    "姚安县",
    "大姚县",
    "永仁县",
    "元谋县",
    "武定县",
    "禄丰县"] },


  {
    "name": "红河哈尼族彝族自治州",
    "area": [
    "蒙自县",
    "个旧市",
    "开远市",
    "绿春县",
    "建水县",
    "石屏县",
    "弥勒县",
    "泸西县",
    "元阳县",
    "红河县",
    "金平苗族瑶族傣族自治县",
    "河口瑶族自治县",
    "屏边苗族自治县"] },


  {
    "name": "文山壮族苗族自治州",
    "area": [
    "文山县",
    "砚山县",
    "西畴县",
    "麻栗坡县",
    "马关县",
    "丘北县",
    "广南县",
    "富宁县"] },


  {
    "name": "西双版纳傣族自治州",
    "area": [
    "景洪市",
    "勐海县",
    "勐腊县"] }] },




{
  "name": "西藏",
  "city": [
  {
    "name": "拉萨市",
    "area": [
    "城关区",
    "林周县",
    "当雄县",
    "尼木县",
    "曲水县",
    "堆龙德庆县",
    "达孜县",
    "墨竹工卡县"] },


  {
    "name": "那曲地区",
    "area": [
    "那曲县",
    "嘉黎县",
    "比如县",
    "聂荣县",
    "安多县",
    "申扎县",
    "索县",
    "班戈县",
    "巴青县",
    "尼玛县"] },


  {
    "name": "昌都地区",
    "area": [
    "昌都县",
    "江达县",
    "贡觉县",
    "类乌齐县",
    "丁青县",
    "察雅县",
    "八宿县",
    "左贡县",
    "芒康县",
    "洛隆县",
    "边坝县"] },


  {
    "name": "林芝地区",
    "area": [
    "林芝县",
    "工布江达县",
    "米林县",
    "墨脱县",
    "波密县",
    "察隅县",
    "朗县"] },


  {
    "name": "山南地区",
    "area": [
    "乃东县",
    "扎囊县",
    "贡嘎县",
    "桑日县",
    "琼结县",
    "曲松县",
    "措美县",
    "洛扎县",
    "加查县",
    "隆子县",
    "错那县",
    "浪卡子县"] },


  {
    "name": "日喀则地区",
    "area": [
    "日喀则市",
    "南木林县",
    "江孜县",
    "定日县",
    "萨迦县",
    "拉孜县",
    "昂仁县",
    "谢通门县",
    "白朗县",
    "仁布县",
    "康马县",
    "定结县",
    "仲巴县",
    "亚东县",
    "吉隆县",
    "聂拉木县",
    "萨嘎县",
    "岗巴县"] },


  {
    "name": "阿里地区",
    "area": [
    "噶尔县",
    "普兰县",
    "札达县",
    "日土县",
    "革吉县",
    "改则县",
    "措勤县"] }] },




{
  "name": "陕西省",
  "city": [
  {
    "name": "西安市",
    "area": [
    "莲湖区",
    "新城区",
    "碑林区",
    "雁塔区",
    "灞桥区",
    "未央区",
    "阎良区",
    "临潼区",
    "长安区",
    "高陵县",
    "蓝田县",
    "户县",
    "周至县"] },


  {
    "name": "铜川市",
    "area": [
    "耀州区",
    "王益区",
    "印台区",
    "宜君县"] },


  {
    "name": "宝鸡市",
    "area": [
    "渭滨区",
    "金台区",
    "陈仓区",
    "岐山县",
    "凤翔县",
    "陇县",
    "太白县",
    "麟游县",
    "扶风县",
    "千阳县",
    "眉县",
    "凤县"] },


  {
    "name": "咸阳市",
    "area": [
    "秦都区",
    "渭城区",
    "杨陵区",
    "兴平市",
    "礼泉县",
    "泾阳县",
    "永寿县",
    "三原县",
    "彬县",
    "旬邑县",
    "长武县",
    "乾县",
    "武功县",
    "淳化县"] },


  {
    "name": "渭南市",
    "area": [
    "临渭区",
    "韩城市",
    "华阴市",
    "蒲城县",
    "潼关县",
    "白水县",
    "澄城县",
    "华县",
    "合阳县",
    "富平县",
    "大荔县"] },


  {
    "name": "延安市",
    "area": [
    "宝塔区",
    "安塞县",
    "洛川县",
    "子长县",
    "黄陵县",
    "延川县",
    "富县",
    "延长县",
    "甘泉县",
    "宜川县",
    "志丹县",
    "黄龙县",
    "吴起县"] },


  {
    "name": "汉中市",
    "area": [
    "汉台区",
    "留坝县",
    "镇巴县",
    "城固县",
    "南郑县",
    "洋县",
    "宁强县",
    "佛坪县",
    "勉县",
    "西乡县",
    "略阳县"] },


  {
    "name": "榆林市",
    "area": [
    "榆阳区",
    "清涧县",
    "绥德县",
    "神木县",
    "佳县",
    "府谷县",
    "子洲县",
    "靖边县",
    "横山县",
    "米脂县",
    "吴堡县",
    "定边县"] },


  {
    "name": "安康市",
    "area": [
    "汉滨区",
    "紫阳县",
    "岚皋县",
    "旬阳县",
    "镇坪县",
    "平利县",
    "石泉县",
    "宁陕县",
    "白河县",
    "汉阴县"] },


  {
    "name": "商洛市",
    "area": [
    "商州区",
    "镇安县",
    "山阳县",
    "洛南县",
    "商南县",
    "丹凤县",
    "柞水县"] }] },




{
  "name": "甘肃省",
  "city": [
  {
    "name": "兰州市",
    "area": [
    "城关区",
    "七里河区",
    "西固区",
    "安宁区",
    "红古区",
    "永登县",
    "皋兰县",
    "榆中县"] },


  {
    "name": "嘉峪关市",
    "area": [
    "嘉峪关市"] },


  {
    "name": "金昌市",
    "area": [
    "金川区",
    "永昌县"] },


  {
    "name": "白银市",
    "area": [
    "白银区",
    "平川区",
    "靖远县",
    "会宁县",
    "景泰县"] },


  {
    "name": "天水市",
    "area": [
    "清水县",
    "秦安县",
    "甘谷县",
    "武山县",
    "张家川回族自治县",
    "北道区",
    "秦城区"] },


  {
    "name": "武威市",
    "area": [
    "凉州区",
    "民勤县",
    "古浪县",
    "天祝藏族自治县"] },


  {
    "name": "酒泉市",
    "area": [
    "肃州区",
    "玉门市",
    "敦煌市",
    "金塔县",
    "肃北蒙古族自治县",
    "阿克塞哈萨克族自治县",
    "安西县"] },


  {
    "name": "张掖市",
    "area": [
    "甘州区",
    "民乐县",
    "临泽县",
    "高台县",
    "山丹县",
    "肃南裕固族自治县"] },


  {
    "name": "庆阳市",
    "area": [
    "西峰区",
    "庆城县",
    "环县",
    "华池县",
    "合水县",
    "正宁县",
    "宁县",
    "镇原县"] },


  {
    "name": "平凉市",
    "area": [
    "崆峒区",
    "泾川县",
    "灵台县",
    "崇信县",
    "华亭县",
    "庄浪县",
    "静宁县"] },


  {
    "name": "定西市",
    "area": [
    "安定区",
    "通渭县",
    "临洮县",
    "漳县",
    "岷县",
    "渭源县",
    "陇西县"] },


  {
    "name": "陇南市",
    "area": [
    "武都区",
    "成县",
    "宕昌县",
    "康县",
    "文县",
    "西和县",
    "礼县",
    "两当县",
    "徽县"] },


  {
    "name": "临夏回族自治州",
    "area": [
    "临夏市",
    "临夏县",
    "康乐县",
    "永靖县",
    "广河县",
    "和政县",
    "东乡族自治县",
    "积石山保安族东乡族撒拉族自治县"] },


  {
    "name": "甘南藏族自治州",
    "area": [
    "合作市",
    "临潭县",
    "卓尼县",
    "舟曲县",
    "迭部县",
    "玛曲县",
    "碌曲县",
    "夏河县"] }] },




{
  "name": "青海省",
  "city": [
  {
    "name": "西宁市",
    "area": [
    "城中区",
    "城东区",
    "城西区",
    "城北区",
    "湟源县",
    "湟中县",
    "大通回族土族自治县"] },


  {
    "name": "海东地区",
    "area": [
    "平安县",
    "乐都县",
    "民和回族土族自治县",
    "互助土族自治县",
    "化隆回族自治县",
    "循化撒拉族自治县"] },


  {
    "name": "海北藏族自治州",
    "area": [
    "海晏县",
    "祁连县",
    "刚察县",
    "门源回族自治县"] },


  {
    "name": "海南藏族自治州",
    "area": [
    "共和县",
    "同德县",
    "贵德县",
    "兴海县",
    "贵南县"] },


  {
    "name": "黄南藏族自治州",
    "area": [
    "同仁县",
    "尖扎县",
    "泽库县",
    "河南蒙古族自治县"] },


  {
    "name": "果洛藏族自治州",
    "area": [
    "玛沁县",
    "班玛县",
    "甘德县",
    "达日县",
    "久治县",
    "玛多县"] },


  {
    "name": "玉树藏族自治州",
    "area": [
    "玉树县",
    "杂多县",
    "称多县",
    "治多县",
    "囊谦县",
    "曲麻莱县"] },


  {
    "name": "海西蒙古族藏族自治州",
    "area": [
    "德令哈市",
    "格尔木市",
    "乌兰县",
    "都兰县",
    "天峻县"] }] },




{
  "name": "宁夏",
  "city": [
  {
    "name": "银川市",
    "area": [
    "兴庆区",
    "西夏区",
    "金凤区",
    "灵武市",
    "永宁县",
    "贺兰县"] },


  {
    "name": "石嘴山市",
    "area": [
    "大武口区",
    "惠农区",
    "平罗县"] },


  {
    "name": "吴忠市",
    "area": [
    "利通区",
    "青铜峡市",
    "盐池县",
    "同心县"] },


  {
    "name": "固原市",
    "area": [
    "原州区",
    "西吉县",
    "隆德县",
    "泾源县",
    "彭阳县"] },


  {
    "name": "中卫市",
    "area": [
    "沙坡头区",
    "中宁县",
    "海原县"] }] },




{
  "name": "新疆",
  "city": [
  {
    "name": "乌鲁木齐市",
    "area": [
    "天山区",
    "沙依巴克区",
    "新市区",
    "水磨沟区",
    "头屯河区",
    "达坂城区",
    "东山区",
    "乌鲁木齐县"] },


  {
    "name": "克拉玛依市",
    "area": [
    "克拉玛依区",
    "独山子区",
    "白碱滩区",
    "乌尔禾区"] },


  {
    "name": "吐鲁番地区",
    "area": [
    "吐鲁番市",
    "托克逊县",
    "鄯善县"] },


  {
    "name": "哈密地区",
    "area": [
    "哈密市",
    "伊吾县",
    "巴里坤哈萨克自治县"] },


  {
    "name": "和田地区",
    "area": [
    "和田市",
    "和田县",
    "洛浦县",
    "民丰县",
    "皮山县",
    "策勒县",
    "于田县",
    "墨玉县"] },


  {
    "name": "阿克苏地区",
    "area": [
    "阿克苏市",
    "温宿县",
    "沙雅县",
    "拜城县",
    "阿瓦提县",
    "库车县",
    "柯坪县",
    "新和县",
    "乌什县"] },


  {
    "name": "喀什地区",
    "area": [
    "喀什市",
    "巴楚县",
    "泽普县",
    "伽师县",
    "叶城县",
    "岳普湖县",
    "疏勒县",
    "麦盖提县",
    "英吉沙县",
    "莎车县",
    "疏附县",
    "塔什库尔干塔吉克自治县"] },


  {
    "name": "克孜勒苏柯尔克孜自治州",
    "area": [
    "阿图什市",
    "阿合奇县",
    "乌恰县",
    "阿克陶县"] },


  {
    "name": "巴音郭楞蒙古自治州",
    "area": [
    "库尔勒市",
    "和静县",
    "尉犁县",
    "和硕县",
    "且末县",
    "博湖县",
    "轮台县",
    "若羌县",
    "焉耆回族自治县"] },


  {
    "name": "昌吉回族自治州",
    "area": [
    "昌吉市",
    "阜康市",
    "奇台县",
    "玛纳斯县",
    "吉木萨尔县",
    "呼图壁县",
    "木垒哈萨克自治县",
    "米泉市"] },


  {
    "name": "博尔塔拉蒙古自治州",
    "area": [
    "博乐市",
    "精河县",
    "温泉县"] },


  {
    "name": "石河子",
    "area": [
    "石河子"] },


  {
    "name": "阿拉尔",
    "area": [
    "阿拉尔"] },


  {
    "name": "图木舒克",
    "area": [
    "图木舒克"] },


  {
    "name": "五家渠",
    "area": [
    "五家渠"] },


  {
    "name": "伊犁哈萨克自治州",
    "area": [
    "伊宁市",
    "奎屯市",
    "伊宁县",
    "特克斯县",
    "尼勒克县",
    "昭苏县",
    "新源县",
    "霍城县",
    "巩留县",
    "察布查尔锡伯自治县",
    "塔城地区",
    "阿勒泰地区"] }] },




{
  "name": "台湾省",
  "city": [
  {
    "name": "台北市",
    "area": [
    "内湖区",
    "南港区",
    "中正区",
    "万华区",
    "大同区",
    "中山区",
    "松山区",
    "大安区",
    "信义区",
    "文山区",
    "士林区",
    "北投区"] },


  {
    "name": "新北市",
    "area": [
    "板桥区",
    "汐止区",
    "新店区"] },


  {
    "name": "桃园市",
    "area": [
    "其他"] },


  {
    "name": "台中市",
    "area": [
    "其他"] },


  {
    "name": "台南市",
    "area": [
    "其他"] },


  {
    "name": "高雄市",
    "area": [
    "其他"] }] },




{
  "name": "澳门",
  "city": [
  {
    "name": "澳门",
    "area": [
    "花地玛堂区",
    "圣安多尼堂区",
    "大堂区",
    "望德堂区",
    "风顺堂区",
    "嘉模堂区",
    "圣方济各堂区",
    "路凼"] }] },




{
  "name": "香港",
  "city": [
  {
    "name": "香港",
    "area": [
    "深水埗区",
    "油尖旺区",
    "九龙城区",
    "黄大仙区",
    "观塘区",
    "北区",
    "大埔区",
    "沙田区",
    "西贡区",
    "元朗区",
    "屯门区",
    "荃湾区",
    "葵青区",
    "离岛区",
    "中西区",
    "湾仔区",
    "东区",
    "南区"] }] }];exports.default = _default;

/***/ }),

/***/ 12:
/*!*******************************************************************!*\
  !*** E:/ceshi/lvshi/node_modules/clipboard/dist/clipboard.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) { true ? module.exports = e() : undefined;}(this, function () {return o = {}, r.m = n = [function (t, e) {t.exports = function (t) {var e;if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {var n = t.hasAttribute("readonly");n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;} else {t.hasAttribute("contenteditable") && t.focus();var o = window.getSelection(),r = document.createRange();r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();}return e;};}, function (t, e) {function n() {}n.prototype = { on: function on(t, e, n) {var o = this.e || (this.e = {});return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;}, once: function once(t, e, n) {var o = this;function r() {o.off(t, r), e.apply(n, arguments);}return r._ = e, this.on(t, r, n);}, emit: function emit(t) {for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) {n[o].fn.apply(n[o].ctx, e);}return this;}, off: function off(t, e) {var n = this.e || (this.e = {}),o = n[t],r = [];if (o && e) for (var i = 0, a = o.length; i < a; i++) {o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);}return r.length ? n[t] = r : delete n[t], this;} }, t.exports = n, t.exports.TinyEmitter = n;}, function (t, e, n) {var d = n(3),h = n(4);t.exports = function (t, e, n) {if (!t && !e && !n) throw new Error("Missing required arguments");if (!d.string(e)) throw new TypeError("Second argument must be a String");if (!d.fn(n)) throw new TypeError("Third argument must be a Function");if (d.node(t)) return s = e, f = n, (u = t).addEventListener(s, f), { destroy: function destroy() {u.removeEventListener(s, f);} };if (d.nodeList(t)) return a = t, c = e, l = n, Array.prototype.forEach.call(a, function (t) {t.addEventListener(c, l);}), { destroy: function destroy() {Array.prototype.forEach.call(a, function (t) {t.removeEventListener(c, l);});} };if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o, r, i, a, c, l, u, s, f;};}, function (t, n) {n.node = function (t) {return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;}, n.nodeList = function (t) {var e = Object.prototype.toString.call(t);return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));}, n.string = function (t) {return "string" == typeof t || t instanceof String;}, n.fn = function (t) {return "[object Function]" === Object.prototype.toString.call(t);};}, function (t, e, n) {var a = n(5);function i(t, e, n, o, r) {var i = function (e, n, t, o) {return function (t) {t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t);};}.apply(this, arguments);return t.addEventListener(n, i, r), { destroy: function destroy() {t.removeEventListener(n, i, r);} };}t.exports = function (t, e, n, o, r) {return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {return i(t, e, n, o, r);}));};}, function (t, e) {if ("undefined" != typeof Element && !Element.prototype.matches) {var n = Element.prototype;n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;}t.exports = function (t, e) {for (; t && 9 !== t.nodeType;) {if ("function" == typeof t.matches && t.matches(e)) return t;t = t.parentNode;}};}, function (t, e, n) {"use strict";n.r(e);var o = n(0),r = n.n(o),i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;};function a(t, e) {for (var n = 0; n < e.length; n++) {var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);}}function c(t) {!function (t, e) {if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");}(this, c), this.resolveOptions(t), this.initSelection();}var l = (function (t, e, n) {return e && a(t.prototype, e), n && a(t, n), t;}(c, [{ key: "resolveOptions", value: function value(t) {var e = 0 < arguments.length && void 0 !== t ? t : {};this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = "";} }, { key: "initSelection", value: function value() {this.text ? this.selectFake() : this.target && this.selectTarget();} }, { key: "selectFake", value: function value() {var t = this,e = "rtl" == document.documentElement.getAttribute("dir");this.removeFake(), this.fakeHandlerCallback = function () {return t.removeFake();}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";var n = window.pageYOffset || document.documentElement.scrollTop;this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = r()(this.fakeElem), this.copyText();} }, { key: "removeFake", value: function value() {this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);} }, { key: "selectTarget", value: function value() {this.selectedText = r()(this.target), this.copyText();} }, { key: "copyText", value: function value() {var e = void 0;try {e = document.execCommand(this.action);} catch (t) {e = !1;}this.handleResult(e);} }, { key: "handleResult", value: function value(t) {this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });} }, { key: "clearSelection", value: function value() {this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();} }, { key: "destroy", value: function value() {this.removeFake();} }, { key: "action", set: function set(t) {var e = 0 < arguments.length && void 0 !== t ? t : "copy";if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');}, get: function get() {return this._action;} }, { key: "target", set: function set(t) {if (void 0 !== t) {if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target = t;}}, get: function get() {return this._target;} }]), c),u = n(1),s = n.n(u),f = n(2),d = n.n(f),h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;},p = function p(t, e, n) {return e && y(t.prototype, e), n && y(t, n), t;};function y(t, e) {for (var n = 0; n < e.length; n++) {var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);}}var m = (function (t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);}(v, s.a), p(v, [{ key: "resolveOptions", value: function value(t) {var e = 0 < arguments.length && void 0 !== t ? t : {};this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === h(e.container) ? e.container : document.body;} }, { key: "listenClick", value: function value(t) {var e = this;this.listener = d()(t, "click", function (t) {return e.onClick(t);});} }, { key: "onClick", value: function value(t) {var e = t.delegateTarget || t.currentTarget;this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this });} }, { key: "defaultAction", value: function value(t) {return b("action", t);} }, { key: "defaultTarget", value: function value(t) {var e = b("target", t);if (e) return document.querySelector(e);} }, { key: "defaultText", value: function value(t) {return b("text", t);} }, { key: "destroy", value: function value() {this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);} }], [{ key: "isSupported", value: function value(t) {var e = 0 < arguments.length && void 0 !== t ? t : ["copy", "cut"],n = "string" == typeof e ? [e] : e,o = !!document.queryCommandSupported;return n.forEach(function (t) {o = o && !!document.queryCommandSupported(t);}), o;} }]), v);function v(t, e) {!function (t, e) {if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");}(this, v);var n = function (t, e) {if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != typeof e && "function" != typeof e ? t : e;}(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e), n.listenClick(t), n;}function b(t, e) {var n = "data-clipboard-" + t;if (e.hasAttribute(n)) return e.getAttribute(n);}e.default = m;}], r.c = o, r.d = function (t, e, n) {r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });}, r.r = function (t) {"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });}, r.t = function (e, t) {if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) {r.d(n, o, function (t) {return e[t];}.bind(null, o));}return n;}, r.n = function (t) {var e = t && t.__esModule ? function () {return t.default;} : function () {return t;};return r.d(e, "a", e), e;}, r.o = function (t, e) {return Object.prototype.hasOwnProperty.call(t, e);}, r.p = "", r(r.s = 6).default;function r(t) {if (o[t]) return o[t].exports;var e = o[t] = { i: t, l: !1, exports: {} };return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;}var n, o;});

/***/ }),

/***/ 1210:
/*!*********************************************************************************************!*\
  !*** E:/ceshi/lvshi/node_modules/mp-html/dist/uni-app/components/mp-html/editable/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * @fileoverview editable 插件
               */
var config = __webpack_require__(/*! ./config */ 1211);

var parser = __webpack_require__(/*! ../parser */ 1212);

function editable(vm) {
  var _this = this;

  this.vm = vm;
  this.editHistory = []; // 历史记录

  this.editI = -1; // 历史记录指针

  vm._mask = []; // 蒙版被点击时进行的操作

  vm._setData = function (path, val) {
    var paths = path.split('.'),
    target = vm;

    for (var i = 0; i < paths.length - 1; i++) {
      target = target[paths[i]];
    }

    vm.$set(target, paths.pop(), val);
  };
  /**
      * @description 移动历史记录指针
      * @param {Number} num 移动距离
      */


  var move = function move(num) {
    setTimeout(function () {
      var item = _this.editHistory[_this.editI + num];

      if (item) {
        _this.editI += num;

        vm._setData(item.key, item.value);
      }
    }, 200);
  };

  vm.undo = function () {
    return move(-1);
  }; // 撤销


  vm.redo = function () {
    return move(1);
  }; // 重做

  /**
   * @description 更新记录
   * @param {String} path 更新内容路径
   * @param {*} oldVal 旧值
   * @param {*} newVal 新值
   * @param {Boolean} set 是否更新到视图
   * @private
   */


  vm._editVal = function (path, oldVal, newVal, set) {
    // 当前指针后的内容去除
    while (_this.editI < _this.editHistory.length - 1) {
      _this.editHistory.pop();
    } // 最多存储 30 条操作记录


    while (_this.editHistory.length > 30) {
      _this.editHistory.pop();

      _this.editI--;
    }

    var last = _this.editHistory[_this.editHistory.length - 1];

    if (!last || last.key != path) {
      if (last) {
        // 去掉上一次的新值
        _this.editHistory.pop();

        _this.editI--;
      } // 存入这一次的旧值


      _this.editHistory.push({
        key: path,
        value: oldVal });


      _this.editI++;
    } // 存入本次的新值


    _this.editHistory.push({
      key: path,
      value: newVal });


    _this.editI++; // 更新到视图

    if (set) vm._setData(path, newVal);
  };
  /**
      * @description 获取菜单项
      * @private
      */


  vm._getItem = function (node) {
    var items;

    if (node.name == 'img') {
      items = config.img.slice(0);

      if (!vm.getSrc) {
        var _i = items.indexOf('换图');

        if (_i != -1) items.splice(_i, 1);
        _i = items.indexOf('超链接');
        if (_i != -1) items.splice(_i, 1);
        _i = items.indexOf('预览图');
        if (_i != -1) items.splice(_i, 1);
      }

      var i = items.indexOf('禁用预览');
      if (i != -1 && node.attrs.ignore) items[i] = '启用预览';
    } else if (node.name == 'a') items = config.link.slice(0);else if (node.name == 'video' || node.name == 'audio') {
      items = config.media.slice(0);

      var _i2 = items.indexOf('封面');

      if (!vm.getSrc && _i2 != -1) items.splice(_i2, 1);
      _i2 = items.indexOf('循环');
      if (node.attrs.loop && _i2 != -1) items[_i2] = '不循环';
    } else items = config.node.slice(0);

    return items;
  };
  /**
      * @description 显示 tooltip
      * @param {object} obj
      * @private
      */


  vm._tooltip = function (obj) {
    vm.$set(vm, 'tooltip', {
      top: obj.top,
      items: obj.items });

    vm._tooltipcb = obj.success;
  };
  /**
      * @description 显示滚动条
      * @param {object} obj
      * @private
      */


  vm._slider = function (obj) {
    vm.$set(vm, 'slider', {
      min: obj.min,
      max: obj.max,
      value: obj.value,
      top: obj.top });

    vm._slideringcb = obj.changing;
    vm._slidercb = obj.change;
  };
  /**
      * @description 点击蒙版
      * @private
      */


  vm._maskTap = function () {
    // 隐藏所有悬浮窗
    while (vm._mask.length) {
      vm._mask.pop()();
    }

    if (vm.tooltip) vm.$set(vm, 'tooltip', null);
    if (vm.slider) vm.$set(vm, 'slider', null);
  };
  /**
      * @description 插入节点
      * @param {Object} node 
      */


  function insert(node) {
    if (vm._edit) vm._edit.insert(node);else vm.nodes.push(node);
  }
  /**
     * @description 在光标处插入指定 html 内容
     * @param {String} html 内容
     */


  vm.insertHtml = function (html) {
    var arr = new parser(vm).parse(html);

    for (var i = 0; i < arr.length; i++) {
      insert(arr[i]);
    }
  };
  /**
      * @description 在光标处插入一张图片
      */


  vm.insertImg = function () {
    vm.getSrc && vm.getSrc('img').then(function (src) {
      insert({
        name: 'img',
        attrs: {
          src: src } });


    })["catch"](function () {});
  };
  /**
      * @description 在光标处插入一个链接
      */


  vm.insertLink = function () {
    vm.getSrc && vm.getSrc('link').then(function (url) {
      insert({
        name: 'a',
        attrs: {
          href: url },

        children: [{
          type: 'text',
          text: url }] });


    })["catch"](function () {});
  };
  /**
      * @description 在光标处插入一个视频
      */


  vm.insertVideo = function () {
    vm.getSrc && vm.getSrc('video').then(function (src) {
      if (typeof src == 'string') src = [src];
      insert({
        name: 'div',
        attrs: {
          style: 'text-align:center' },

        children: [{
          name: 'video',
          attrs: {},
          children: [],
          src: src }] });


    })["catch"](function () {});
  };
  /**
      * @description 在光标处插入一个音频
      */


  vm.insertAudio = function () {
    vm.getSrc && vm.getSrc('audio').then(function (src) {
      if (typeof src == 'string') src = [src];
      insert({
        name: 'div',
        attrs: {
          style: 'text-align:center' },

        children: [{
          name: 'audio',
          attrs: {},
          children: [],
          src: src }] });


    })["catch"](function () {});
  };
  /**
      * @description 在光标处插入一段文本
      */


  vm.insertText = function () {
    insert({
      name: 'p',
      attrs: {},
      children: [{
        type: 'text',
        text: '' }] });


  };
  /**
      * @description 清空内容
      */


  vm.clear = function () {
    vm._maskTap();

    vm._edit = void 0;
    vm.$set(vm, 'nodes', [{
      name: 'p',
      attrs: {},
      children: [{
        type: 'text',
        text: '' }] }]);


  };
  /**
      * @description 获取编辑后的 html
      */


  vm.getContent = function () {
    var html = ''; // 递归遍历获取

    (function traversal(nodes, table) {
      for (var i = 0; i < nodes.length; i++) {
        var item = nodes[i];
        if (item.type == 'text') html += item.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>').replace(/\xa0/g, '&nbsp;'); // 编码实体
        else {
            if (item.name == 'img') {
              item.attrs.i = ''; // 还原被转换的 svg

              if ((item.attrs.src || '').includes('data:image/svg+xml;utf8,')) {
                html += item.attrs.src.substr(24).replace(/%23/g, '#').replace('<svg', '<svg style="' + (item.attrs.style || '') + '"');
                continue;
              }
            } // 还原 video 和 audio 的 source
            else if (item.name == 'video' || item.name == 'audio') {
                item = JSON.parse(JSON.stringify(item));

                if (item.src.length > 1) {
                  item.children = [];

                  for (var j = 0; j < item.src.length; j++) {
                    item.children.push({
                      name: 'source',
                      attrs: {
                        src: item.src[j] } });


                  }
                } else item.attrs.src = item.src[0];
              } // 还原滚动层
              else if (item.name == 'div' && (item.attrs.style || '').includes('overflow:auto') && (item.children[0] || {}).name == 'table') item = item.children[0]; // 还原 table


            if (item.name == 'table') {
              item = JSON.parse(JSON.stringify(item));
              table = item.attrs;

              if ((item.attrs.style || '').includes('display:grid')) {
                item.attrs.style = item.attrs.style.split('display:grid')[0];
                var children = [{
                  name: 'tr',
                  attrs: {},
                  children: [] }];


                for (var _j = 0; _j < item.children.length; _j++) {
                  item.children[_j].attrs.style = item.children[_j].attrs.style.replace(/grid-[^;]+;*/g, '');

                  if (item.children[_j].r != children.length) {
                    children.push({
                      name: 'tr',
                      attrs: {},
                      children: [item.children[_j]] });

                  } else children[children.length - 1].children.push(item.children[_j]);
                }

                item.children = children;
              }
            }

            html += '<' + item.name;

            for (var attr in item.attrs) {
              var val = item.attrs[attr];
              if (!val) continue; // bool 型省略值

              if (val == 'T' || val === true) {
                html += ' ' + attr;
                continue;
              } // 取消为了显示 table 添加的 style
              else if (item.name[0] == 't' && attr == 'style' && table) {
                  val = val.replace(/;*display:table[^;]*/, '');
                  if (table.border) val = val.replace(/border[^;]+;*/g, function ($) {
                    return $.includes('collapse') ? $ : '';
                  });
                  if (table.cellpadding) val = val.replace(/padding[^;]+;*/g, '');
                  if (!val) continue;
                }

              html += ' ' + attr + '="' + val.replace(/"/g, '&quot;') + '"';
            }

            html += '>';

            if (item.children) {
              traversal(item.children, table);
              html += '</' + item.name + '>';
            }
          }
      }
    })(vm.nodes); // 其他插件处理


    for (var i = vm.plugins.length; i--;) {
      if (vm.plugins[i].onGetContent) html = vm.plugins[i].onGetContent(html) || html;
    }

    return html;
  };
}

editable.prototype.onUpdate = function (content, config) {
  var _this2 = this;

  if (this.vm.editable) {
    this.vm._maskTap();

    this.vm._edit = void 0;
    config.entities.amp = '&';
    if (!content) setTimeout(function () {
      _this2.vm.$set(_this2.vm, 'nodes', [{
        name: 'p',
        attrs: {},
        children: [{
          type: 'text',
          text: '' }] }]);


    }, 0);
  }
};

module.exports = editable;

/***/ }),

/***/ 1211:
/*!**********************************************************************************************!*\
  !*** E:/ceshi/lvshi/node_modules/mp-html/dist/uni-app/components/mp-html/editable/config.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 以下项目可以删减或更换顺序，但不能添加或更改名字
module.exports = {
  // 普通标签的菜单项
  node: ['大小', '斜体', '粗体', '下划线', '居中', '缩进', '删除'],
  // 图片的菜单项
  img: ['换图', '宽度', '超链接', '预览图', '禁用预览', '删除'],
  // 链接的菜单项
  link: ['更换链接', '删除'],
  // 音视频的菜单项
  media: ['封面', '循环', '删除'] };

/***/ }),

/***/ 1212:
/*!*************************************************************************************!*\
  !*** E:/ceshi/lvshi/node_modules/mp-html/dist/uni-app/components/mp-html/parser.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

/**
               * @fileoverview html 解析器
               */
// 配置
var config = {
  // 信任的标签（保持标签名不变）
  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),
  // 块级标签（转为 div，其他的非信任标签转为 span）
  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),
  // 要移除的标签
  ignoreTags: makeMap('area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr'),
  // 自闭合的标签
  voidTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),
  // html 实体
  entities: {
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    ensp: "\u2002",
    emsp: "\u2003",
    nbsp: '\xA0',
    semi: ';',
    ndash: '–',
    mdash: '—',
    middot: '·',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    bull: '•',
    hellip: '…' },

  // 默认的标签样式
  tagStyle: {

    address: 'font-style:italic',
    big: 'display:inline;font-size:1.2em',
    caption: 'display:table-caption;text-align:center',
    center: 'text-align:center',
    cite: 'font-style:italic',
    dd: 'margin-left:40px',
    mark: 'background-color:yellow',
    pre: 'font-family:monospace;white-space:pre',
    s: 'text-decoration:line-through',
    small: 'display:inline;font-size:0.8em',
    strike: 'text-decoration:line-through',
    u: 'text-decoration:underline' } };



var tagSelector = {};

var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),
windowWidth = _uni$getSystemInfoSyn.windowWidth,
system = _uni$getSystemInfoSyn.system;

var blankChar = makeMap(' ,\r,\n,\t,\f');
var idIndex = 0;










/**
                  * @description 创建 map
                  * @param {String} str 逗号分隔
                  */

function makeMap(str) {
  var map = Object.create(null),
  list = str.split(',');

  for (var i = list.length; i--;) {
    map[list[i]] = true;
  }

  return map;
}
/**
   * @description 解码 html 实体
   * @param {String} str 要解码的字符串
   * @param {Boolean} amp 要不要解码 &amp;
   * @returns {String} 解码后的字符串
   */


function decodeEntity(str, amp) {
  var i = str.indexOf('&');

  while (i != -1) {
    var j = str.indexOf(';', i + 3),
    code = void 0;
    if (j == -1) break;

    if (str[i + 1] == '#') {
      // &#123; 形式的实体
      code = parseInt((str[i + 2] == 'x' ? '0' : '') + str.substring(i + 2, j));
      if (!isNaN(code)) str = str.substr(0, i) + String.fromCharCode(code) + str.substr(j + 1);
    } else {
      // &nbsp; 形式的实体
      code = str.substring(i + 1, j);
      if (config.entities[code] || code == 'amp' && amp) str = str.substr(0, i) + (config.entities[code] || '&') + str.substr(j + 1);
    }

    i = str.indexOf('&', i + 1);
  }

  return str;
}
/**
   * @description html 解析器
   * @param {Object} vm 组件实例
   */


function parser(vm) {
  this.options = vm || {};
  this.tagStyle = Object.assign(config.tagStyle, this.options.tagStyle);
  this.imgList = vm.imgList || [];
  this.plugins = vm.plugins || [];
  this.attrs = Object.create(null);
  this.stack = [];
  this.nodes = [];
}
/**
   * @description 执行解析
   * @param {String} content 要解析的文本
   */


parser.prototype.parse = function (content) {
  // 插件处理
  for (var i = this.plugins.length; i--;) {
    if (this.plugins[i].onUpdate) content = this.plugins[i].onUpdate(content, config) || content;
  }

  new lexer(this).parse(content); // 出栈未闭合的标签

  while (this.stack.length) {
    this.popNode();
  }

  return this.nodes;
};
/**
    * @description 将标签暴露出来（不被 rich-text 包含）
    */


parser.prototype.expose = function () {
  if (this.options.editable) return;

  for (var i = this.stack.length; i--;) {
    var item = this.stack[i];
    if (item.name == 'a' || item.c) return;
    item.c = 1;
  }

};
/**
    * @description 处理插件
    * @param {Object} node 要处理的标签
    * @returns {Boolean} 是否要移除此标签
    */


parser.prototype.hook = function (node) {
  for (var i = this.plugins.length; i--;) {
    if (this.plugins[i].onParse && this.plugins[i].onParse(node, this) == false) return false;
  }

  return true;
};
/**
    * @description 将链接拼接上主域名
    * @param {String} url 需要拼接的链接
    * @returns {String} 拼接后的链接
    */


parser.prototype.getUrl = function (url) {
  var domain = this.options.domain;

  if (url[0] == '/') {
    // // 开头的补充协议名
    if (url[1] == '/') url = (domain ? domain.split('://')[0] : 'http') + ':' + url; // 否则补充整个域名
    else if (domain) url = domain + url;
  } else if (domain && !url.includes('data:') && !url.includes('://')) url = domain + '/' + url;

  return url;
};
/**
    * @description 解析样式表
    * @param {Object} node 标签
    * @returns {Object} 
    */


parser.prototype.parseStyle = function (node) {
  var attrs = node.attrs,
  list = (this.tagStyle[node.name] || '').split(';').concat((attrs.style || '').split(';')),
  styleObj = {},
  tmp = '';

  if (attrs.id) {
    // 暴露锚点
    if (this.options.useAnchor) this.expose();else if (node.name != 'img' && node.name != 'a' && node.name != 'video' && node.name != 'audio') attrs.id = void 0;
  } // 转换 width 和 height 属性


  if (attrs.width) {
    styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
    attrs.width = void 0;
  }

  if (attrs.height) {
    styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
    attrs.height = void 0;
  }

  for (var i = 0, len = list.length; i < len; i++) {
    var info = list[i].split(':');
    if (info.length < 2) continue;
    var key = info.shift().trim().toLowerCase(),
    value = info.join(':').trim(); // 兼容性的 css 不压缩

    if (value[0] == '-' && value.lastIndexOf('-') > 0 || value.includes('safe')) tmp += ";".concat(key, ":").concat(value); // 重复的样式进行覆盖
    else if (!styleObj[key] || value.includes('import') || !styleObj[key].includes('import')) {
        // 填充链接
        if (value.includes('url')) {
          var j = value.indexOf('(') + 1;

          if (j) {
            while (value[j] == '"' || value[j] == "'" || blankChar[value[j]]) {
              j++;
            }

            value = value.substr(0, j) + this.getUrl(value.substr(j));
          }
        } // 转换 rpx（rich-text 内部不支持 rpx）
        else if (value.includes('rpx')) value = value.replace(/[0-9.]+\s*rpx/g, function ($) {
            return parseFloat($) * windowWidth / 750 + 'px';
          });

        styleObj[key] = value;
      }
  }

  node.attrs.style = tmp;
  return styleObj;
};
/**
    * @description 解析到标签名
    * @param {String} name 标签名
    * @private
    */


parser.prototype.onTagName = function (name) {
  this.tagName = this.xml ? name : name.toLowerCase();
  if (this.tagName == 'svg') this.xml = true; // svg 标签内大小写敏感
};
/**
    * @description 解析到属性名
    * @param {String} name 属性名
    * @private
    */


parser.prototype.onAttrName = function (name) {
  name = this.xml ? name : name.toLowerCase();

  if (name.substr(0, 5) == 'data-') {
    // data-src 自动转为 src
    if (name == 'data-src' && !this.attrs.src) this.attrName = 'src'; // a 和 img 标签保留 data- 的属性，可以在 imgtap 和 linktap 事件中使用
    else if (this.tagName == 'img' || this.tagName == 'a') this.attrName = name; // 剩余的移除以减小大小
      else this.attrName = void 0;
  } else {
    this.attrName = name;
    this.attrs[name] = 'T'; // boolean 型属性缺省设置
  }
};
/**
    * @description 解析到属性值
    * @param {String} val 属性值
    * @private
    */


parser.prototype.onAttrVal = function (val) {
  var name = this.attrName || ''; // 部分属性进行实体解码

  if (name == 'style' || name == 'href') this.attrs[name] = decodeEntity(val, true); // 拼接主域名
  else if (name.includes('src')) this.attrs[name] = this.getUrl(decodeEntity(val, true));else if (name) this.attrs[name] = val;
};
/**
    * @description 解析到标签开始
    * @param {Boolean} selfClose 是否有自闭合标识 />
    * @private
    */


parser.prototype.onOpenTag = function (selfClose) {
  // 拼装 node
  var node = Object.create(null);
  node.name = this.tagName;
  node.attrs = this.attrs; // 避免因为自动 diff 使得 type 被设置为 null 导致部分内容不显示

  if (this.options.nodes.length) node.type = 'node';
  this.attrs = Object.create(null);
  var attrs = node.attrs,
  parent = this.stack[this.stack.length - 1],
  siblings = parent ? parent.children : this.nodes,
  close = this.xml ? selfClose : config.voidTags[node.name]; // 替换标签名选择器

  if (tagSelector[node.name]) attrs["class"] = tagSelector[node.name] + (attrs["class"] ? ' ' + attrs["class"] : ''); // 转换 embed 标签

  if (node.name == 'embed') {

    var src = attrs.src || ''; // 按照后缀名和 type 将 embed 转为 video 或 audio

    if (src.includes('.mp4') || src.includes('.3gp') || src.includes('.m3u8') || (attrs.type || '').includes('video')) node.name = 'video';else if (src.includes('.mp3') || src.includes('.wav') || src.includes('.aac') || src.includes('.m4a') || (attrs.type || '').includes('audio')) node.name = 'audio';
    if (attrs.autostart) attrs.autoplay = 'T';
    attrs.controls = 'T';



  }
  // 处理音视频


  if (node.name == 'video' || node.name == 'audio') {
    // 设置 id 以便获取 context
    if (node.name == 'video' && !attrs.id) attrs.id = 'v' + idIndex++; // 没有设置 controls 也没有设置 autoplay 的自动设置 controls

    if (!attrs.controls && !attrs.autoplay) attrs.controls = 'T'; // 用数组存储所有可用的 source

    node.src = [];

    if (attrs.src) {
      node.src.push(attrs.src);
      attrs.src = void 0;
    }

    this.expose();
  }
  // 处理自闭合标签


  if (close) {
    if (!this.hook(node) || config.ignoreTags[node.name]) {
      // 通过 base 标签设置主域名
      if (node.name == 'base' && !this.options.domain) this.options.domain = attrs.href;
      // 设置 source 标签（仅父节点为 video 或 audio 时有效）
      else if (node.name == 'source' && parent && (parent.name == 'video' || parent.name == 'audio') && attrs.src) parent.src.push(attrs.src);

      return;
    } // 解析 style


    var styleObj = this.parseStyle(node); // 处理图片

    if (node.name == 'img') {
      if (attrs.src) {
        // 标记 webp
        if (attrs.src.includes('webp')) node.webp = 'T'; // data url 图片如果没有设置 original-src 默认为不可预览的小图片

        if (attrs.src.includes('data:') && !attrs['original-src']) attrs.ignore = 'T';

        if (!attrs.ignore || node.webp || attrs.src.includes('cloud://')) {
          for (var i = this.stack.length; i--;) {
            var item = this.stack[i];

            if (item.name == 'a') {
              node.a = item.attrs;
              break;
            }


            var style = item.attrs.style || '';

            if (style.includes('flex:') && !style.includes('flex:0') && !style.includes('flex: 0') && (!styleObj.width || !styleObj.width.includes('%'))) {
              styleObj.width = '100% !important';
              styleObj.height = '';

              for (var j = i + 1; j < this.stack.length; j++) {
                this.stack[j].attrs.style = (this.stack[j].attrs.style || '').replace('inline-', '');
              }
            } else if (style.includes('flex') && styleObj.width == '100%') {
              for (var _j = i + 1; _j < this.stack.length; _j++) {
                var _style = this.stack[_j].attrs.style || '';

                if (!_style.includes(';width') && !_style.includes(' width') && _style.indexOf('width') != 0) {
                  styleObj.width = '';
                  break;
                }
              }
            } else if (style.includes('inline-block')) {
              if (styleObj.width && styleObj.width[styleObj.width.length - 1] == '%') {
                item.attrs.style += ';max-width:' + styleObj.width;
                styleObj.width = '';
              } else item.attrs.style += ';max-width:100%';
            }


            item.c = 1;
          }

          attrs.i = this.imgList.length.toString();

          var _src = attrs['original-src'] || attrs.src;


          if (this.imgList.includes(_src)) {
            // 如果有重复的链接则对域名进行随机大小写变换避免预览时错位
            var _i = _src.indexOf('://');

            if (_i != -1) {
              _i += 3;

              var newSrc = _src.substr(0, _i);

              for (; _i < _src.length; _i++) {
                if (_src[_i] == '/') break;
                newSrc += Math.random() > 0.5 ? _src[_i].toUpperCase() : _src[_i];
              }

              newSrc += _src.substr(_i);
              _src = newSrc;
            }
          }


          this.imgList.push(_src);






        }
      }

      if (styleObj.display == 'inline') styleObj.display = '';

      if (attrs.ignore) {
        styleObj['max-width'] = styleObj['max-width'] || '100%';
        attrs.style += ';-webkit-touch-callout:none';
      }
      // 设置的宽度超出屏幕，为避免变形，高度转为自动


      if (parseInt(styleObj.width) > windowWidth) styleObj.height = void 0; // 记录是否设置了宽高

      if (styleObj.width) {
        if (styleObj.width.includes('auto')) styleObj.width = '';else {
          node.w = 'T';
          if (styleObj.height && !styleObj.height.includes('auto')) node.h = 'T';
        }
      }
    } else if (node.name == 'svg') {
      siblings.push(node);
      this.stack.push(node);
      this.popNode();
      return;
    }

    for (var key in styleObj) {
      if (styleObj[key]) attrs.style += ";".concat(key, ":").concat(styleObj[key].replace(' !important', ''));
    }

    attrs.style = attrs.style.substr(1) || void 0;
  } else {
    if (node.name == 'pre' || (attrs.style || '').includes('white-space') && attrs.style.includes('pre')) this.pre = node.pre = true;
    node.children = [];
    this.stack.push(node);
  } // 加入节点树


  siblings.push(node);
};
/**
    * @description 解析到标签结束
    * @param {String} name 标签名
    * @private
    */


parser.prototype.onCloseTag = function (name) {
  // 依次出栈到匹配为止
  name = this.xml ? name : name.toLowerCase();
  var i;

  for (i = this.stack.length; i--;) {
    if (this.stack[i].name == name) break;
  }

  if (i != -1) {
    while (this.stack.length > i) {
      this.popNode();
    }
  } else if (name == 'p' || name == 'br') {
    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push({
      name: name,
      attrs: {
        "class": tagSelector[name],
        style: this.tagStyle[name] } });


  }
};
/**
    * @description 处理标签出栈
    * @private
    */


parser.prototype.popNode = function () {
  var editable = this.options.editable;
  var node = this.stack.pop(),
  attrs = node.attrs,
  children = node.children,
  parent = this.stack[this.stack.length - 1],
  siblings = parent ? parent.children : this.nodes;

  if (!this.hook(node) || config.ignoreTags[node.name]) {
    // 获取标题
    if (node.name == 'title' && children.length && children[0].type == 'text' && this.options.setTitle) uni.setNavigationBarTitle({
      title: children[0].text });

    siblings.pop();
    return;
  }

  if (node.pre) {
    // 是否合并空白符标识
    node.pre = this.pre = void 0;

    for (var i = this.stack.length; i--;) {
      if (this.stack[i].pre) this.pre = true;
    }
  }

  var styleObj = {}; // 转换 svg

  if (node.name == 'svg') {

    var src = '',
    style = attrs.style;
    attrs.style = '';
    attrs.xmlns = 'http://www.w3.org/2000/svg';

    (function traversal(node) {
      if (node.type == 'text') return src += node.text;
      src += '<' + node.name;

      for (var item in node.attrs) {
        var val = node.attrs[item];

        if (val) {
          if (item == 'viewbox') item = 'viewBox';
          src += " ".concat(item, "=\"").concat(val, "\"");
        }
      }

      if (!node.children) src += '/>';else {
        src += '>';

        for (var _i2 = 0; _i2 < node.children.length; _i2++) {
          traversal(node.children[_i2]);
        }

        src += '</' + node.name + '>';
      }
    })(node);

    node.name = 'img';
    node.attrs = {
      src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
      style: style,
      ignore: 'T' };

    node.children = void 0;

    this.xml = false;
    return;
  }
  // 转换 align 属性


  if (attrs.align) {
    if (node.name == 'table') {
      if (attrs.align == 'center') styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';else styleObj["float"] = attrs.align;
    } else styleObj['text-align'] = attrs.align;

    attrs.align = void 0;
  } // 转换 font 标签的属性


  if (node.name == 'font') {
    if (attrs.color) {
      styleObj.color = attrs.color;
      attrs.color = void 0;
    }

    if (attrs.face) {
      styleObj['font-family'] = attrs.face;
      attrs.face = void 0;
    }

    if (attrs.size) {
      var size = parseInt(attrs.size);

      if (!isNaN(size)) {
        if (size < 1) size = 1;else if (size > 7) size = 7;
        styleObj['font-size'] = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'][size - 1];
      }

      attrs.size = void 0;
    }
  }
  // 一些编辑器的自带 class


  if ((attrs["class"] || '').includes('align-center')) styleObj['text-align'] = 'center';
  Object.assign(styleObj, this.parseStyle(node));

  if (parseInt(styleObj.width) > windowWidth) {
    styleObj['max-width'] = '100%';
    styleObj['box-sizing'] = 'border-box';
  }


  if (config.blockTags[node.name]) {
    if (!editable) node.name = 'div';
  } // 未知标签转为 span，避免无法显示
  else if (!config.trustTags[node.name] && !this.xml) node.name = 'span';

  if (node.name == 'a' || node.name == 'ad')

  this.expose();



















  // 列表处理
  else if ((node.name == 'ul' || node.name == 'ol') && (node.c || editable)) {
      var types = {
        a: 'lower-alpha',
        A: 'upper-alpha',
        i: 'lower-roman',
        I: 'upper-roman' };


      if (types[attrs.type]) {
        attrs.style += ';list-style-type:' + types[attrs.type];
        attrs.type = void 0;
      }

      for (var _i4 = children.length; _i4--;) {
        if (children[_i4].name == 'li') children[_i4].c = 1;
      }
    } // 表格处理
    else if (node.name == 'table') {
        // cellpadding、cellspacing、border 这几个常用表格属性需要通过转换实现
        var padding = parseFloat(attrs.cellpadding),
        spacing = parseFloat(attrs.cellspacing),
        border = parseFloat(attrs.border);

        if (node.c || editable) {
          // padding 和 spacing 默认 2
          if (isNaN(padding)) padding = 2;
          if (isNaN(spacing)) spacing = 2;
        }

        if (border) attrs.style += ';border:' + border + 'px solid gray';

        if (node.flag && (node.c || editable)) {
          // 有 colspan 或 rowspan 且含有链接的表格通过 grid 布局实现
          styleObj.display = 'grid';

          if (spacing) {
            styleObj['grid-gap'] = spacing + 'px';
            styleObj.padding = spacing + 'px';
          } // 无间隔的情况下避免边框重叠
          else if (border) attrs.style += ';border-left:0;border-top:0';

          var width = [],
          // 表格的列宽
          trList = [],
          // tr 列表
          cells = [],
          // 保存新的单元格
          map = {}; // 被合并单元格占用的格子

          (function traversal(nodes) {
            for (var _i5 = 0; _i5 < nodes.length; _i5++) {
              if (nodes[_i5].name == 'tr') trList.push(nodes[_i5]);else traversal(nodes[_i5].children || []);
            }
          })(children);

          for (var row = 1; row <= trList.length; row++) {
            var col = 1;

            for (var j = 0; j < trList[row - 1].children.length; j++, col++) {
              var td = trList[row - 1].children[j];

              if (td.name == 'td' || td.name == 'th') {
                // 这个格子被上面的单元格占用，则列号++
                while (map[row + '.' + col]) {
                  col++;
                }

                if (editable) td.r = row;

                var _style2 = td.attrs.style || '',
                start = _style2.indexOf('width') ? _style2.indexOf(';width') : 0; // 提取出 td 的宽度


                if (start != -1) {
                  var end = _style2.indexOf(';', start + 6);

                  if (end == -1) end = _style2.length;
                  if (!td.attrs.colspan) width[col] = _style2.substring(start ? start + 7 : 6, end);
                  _style2 = _style2.substr(0, start) + _style2.substr(end);
                }

                _style2 += (border ? ";border:".concat(border, "px solid gray") + (spacing ? '' : ';border-right:0;border-bottom:0') : '') + (padding ? ";padding:".concat(padding, "px") : ''); // 处理列合并

                if (td.attrs.colspan) {
                  _style2 += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + parseInt(td.attrs.colspan));
                  if (!td.attrs.rowspan) _style2 += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + 1);
                  col += parseInt(td.attrs.colspan) - 1;
                } // 处理行合并


                if (td.attrs.rowspan) {
                  _style2 += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + parseInt(td.attrs.rowspan));
                  if (!td.attrs.colspan) _style2 += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + 1); // 记录下方单元格被占用

                  for (var k = 1; k < td.attrs.rowspan; k++) {
                    map[row + k + '.' + col] = 1;
                  }
                }

                if (_style2) td.attrs.style = _style2;
                cells.push(td);
              }
            }

            if (row == 1) {
              var temp = '';

              for (var _i6 = 1; _i6 < col; _i6++) {
                temp += (width[_i6] ? width[_i6] : 'auto') + ' ';
              }

              styleObj['grid-template-columns'] = temp;
            }
          }

          node.children = cells;
        } else {
          // 没有使用合并单元格的表格通过 table 布局实现
          if (node.c || editable) styleObj.display = 'table';
          if (!isNaN(spacing)) styleObj['border-spacing'] = spacing + 'px';

          if (border || padding) {
            // 遍历
            (function traversal(nodes) {
              for (var _i7 = 0; _i7 < nodes.length; _i7++) {
                var _td = nodes[_i7];

                if (_td.name == 'th' || _td.name == 'td') {
                  if (border) _td.attrs.style = "border:".concat(border, "px solid gray;").concat(_td.attrs.style || '');
                  if (padding) _td.attrs.style = "padding:".concat(padding, "px;").concat(_td.attrs.style || '');
                } else if (_td.children) traversal(_td.children);
              }
            })(children);
          }
        } // 给表格添加一个单独的横向滚动层


        if (this.options.scrollTable && !(attrs.style || '').includes('inline')) {
          var table = Object.assign({}, node);
          node.name = 'div';
          node.attrs = {
            style: 'overflow:auto' };

          node.children = [table];
          attrs = table.attrs;
        }
      } else if ((node.name == 'td' || node.name == 'th') && (attrs.colspan || attrs.rowspan)) {
        for (var _i8 = this.stack.length; _i8--;) {
          if (this.stack[_i8].name == 'table') {
            this.stack[_i8].flag = 1; // 指示含有合并单元格

            break;
          }
        }
      } // 转换 ruby
      else if (node.name == 'ruby') {
          node.name = 'span';

          for (var _i9 = 0; _i9 < children.length - 1; _i9++) {
            if (children[_i9].type == 'text' && children[_i9 + 1].name == 'rt') {
              children[_i9] = {
                name: 'div',
                attrs: {
                  style: 'display:inline-block' },

                children: [{
                  name: 'div',
                  attrs: {
                    style: 'font-size:50%;text-align:start' },

                  children: children[_i9 + 1].children },
                children[_i9]] };

              children.splice(_i9 + 1, 1);
            }
          }
        } else if (!editable && node.c) {
          node.c = 2;

          for (var _i10 = node.children.length; _i10--;) {
            if (!node.children[_i10].c || node.children[_i10].name == 'table') node.c = 1;
          }
        }
  if ((styleObj.display || '').includes('flex') && !(node.c || editable)) for (var _i11 = children.length; _i11--;) {
    var _item = children[_i11];

    if (_item.f) {
      _item.attrs.style = (_item.attrs.style || '') + _item.f;
      _item.f = void 0;
    }
  } // flex 布局时部分样式需要提取到 rich-text 外层

  var flex = parent && (parent.attrs.style || '').includes('flex');





  if (flex) node.f = ';max-width:100%';

  for (var key in styleObj) {
    if (styleObj[key]) {
      var val = ";".concat(key, ":").concat(styleObj[key].replace(' !important', ''));

      if (flex && (key.includes('flex') && key != 'flex-direction' || key == 'align-self' || styleObj[key][0] == '-' || key == 'width' && val.includes('%'))) {
        node.f += val;
        if (key == 'width') attrs.style += ';width:100%';
      } else
      attrs.style += val;
    }
  }

  attrs.style = attrs.style.substr(1) || void 0;
};
/**
    * @description 解析到文本
    * @param {String} text 文本内容
    */


parser.prototype.onText = function (text) {
  if (!this.pre) {
    // 合并空白符
    var trim = '',
    flag;

    for (var i = 0, len = text.length; i < len; i++) {
      if (!blankChar[text[i]]) trim += text[i];else {
        if (trim[trim.length - 1] != ' ') trim += ' ';
        if (text[i] == '\n' && !flag) flag = true;
      }
    } // 去除含有换行符的空串


    if (trim == ' ' && flag) return;
    text = trim;
  }

  var node = Object.create(null);
  node.type = 'text';
  node.text = decodeEntity(text);

  if (this.hook(node)) {







    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push(node);
  }
};
/**
    * @description html 词法分析器
    * @param {Object} handler 高层处理器
    */


function lexer(handler) {
  this.handler = handler;
}
/**
   * @description 执行解析
   * @param {String} content 要解析的文本
   */


lexer.prototype.parse = function (content) {
  this.content = content || '';
  this.i = 0; // 标记解析位置

  this.start = 0; // 标记一个单词的开始位置

  this.state = this.text; // 当前状态

  for (var len = this.content.length; this.i != -1 && this.i < len;) {
    this.state();
  }
};
/**
    * @description 检查标签是否闭合
    * @param {String} method 如果闭合要进行的操作
    * @returns {Boolean} 是否闭合
    * @private
    */


lexer.prototype.checkClose = function (method) {
  var selfClose = this.content[this.i] == '/';

  if (this.content[this.i] == '>' || selfClose && this.content[this.i + 1] == '>') {
    if (method) this.handler[method](this.content.substring(this.start, this.i));
    this.i += selfClose ? 2 : 1;
    this.start = this.i;
    this.handler.onOpenTag(selfClose);

    if (this.handler.tagName == 'script') {
      this.i = this.content.indexOf('</', this.i);

      if (this.i != -1) {
        this.i += 2;
        this.start = this.i;
      }

      this.state = this.endTag;
    } else this.state = this.text;

    return true;
  }

  return false;
};
/**
    * @description 文本状态
    * @private
    */


lexer.prototype.text = function () {
  this.i = this.content.indexOf('<', this.i); // 查找最近的标签

  if (this.i == -1) {
    // 没有标签了
    if (this.start < this.content.length) this.handler.onText(this.content.substring(this.start, this.content.length));
    return;
  }

  var c = this.content[this.i + 1];

  if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
    // 标签开头
    if (this.start != this.i) this.handler.onText(this.content.substring(this.start, this.i));
    this.start = ++this.i;
    this.state = this.tagName;
  } else if (c == '/' || c == '!' || c == '?') {
    if (this.start != this.i) this.handler.onText(this.content.substring(this.start, this.i));
    var next = this.content[this.i + 2];

    if (c == '/' && (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z')) {
      // 标签结尾
      this.i += 2;
      this.start = this.i;
      return this.state = this.endTag;
    } // 处理注释


    var end = '-->';
    if (c != '!' || this.content[this.i + 2] != '-' || this.content[this.i + 3] != '-') end = '>';
    this.i = this.content.indexOf(end, this.i);

    if (this.i != -1) {
      this.i += end.length;
      this.start = this.i;
    }
  } else this.i++;
};
/**
    * @description 标签名状态
    * @private
    */


lexer.prototype.tagName = function () {
  if (blankChar[this.content[this.i]]) {
    // 解析到标签名
    this.handler.onTagName(this.content.substring(this.start, this.i));

    while (blankChar[this.content[++this.i]]) {
      ;
    }

    if (this.i < this.content.length && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  } else if (!this.checkClose('onTagName')) this.i++;
};
/**
    * @description 属性名状态
    * @private
    */


lexer.prototype.attrName = function () {
  var c = this.content[this.i];

  if (blankChar[c] || c == '=') {
    // 解析到属性名
    this.handler.onAttrName(this.content.substring(this.start, this.i));
    var needVal = c == '=',
    len = this.content.length;

    while (++this.i < len) {
      c = this.content[this.i];

      if (!blankChar[c]) {
        if (this.checkClose()) return;

        if (needVal) {
          // 等号后遇到第一个非空字符
          this.start = this.i;
          return this.state = this.attrVal;
        }

        if (this.content[this.i] == '=') needVal = true;else {
          this.start = this.i;
          return this.state = this.attrName;
        }
      }
    }
  } else if (!this.checkClose('onAttrName')) this.i++;
};
/**
    * @description 属性值状态
    * @private
    */


lexer.prototype.attrVal = function () {
  var c = this.content[this.i],
  len = this.content.length; // 有冒号的属性

  if (c == '"' || c == "'") {
    this.start = ++this.i;
    this.i = this.content.indexOf(c, this.i);
    if (this.i == -1) return;
    this.handler.onAttrVal(this.content.substring(this.start, this.i));
  } // 没有冒号的属性
  else for (; this.i < len; this.i++) {
      if (blankChar[this.content[this.i]]) {
        this.handler.onAttrVal(this.content.substring(this.start, this.i));
        break;
      } else if (this.checkClose('onAttrVal')) return;
    }

  while (blankChar[this.content[++this.i]]) {
    ;
  }

  if (this.i < len && !this.checkClose()) {
    this.start = this.i;
    this.state = this.attrName;
  }
};
/**
    * @description 结束标签状态
    * @returns {String} 结束的标签名
    * @private
    */


lexer.prototype.endTag = function () {
  var c = this.content[this.i];

  if (blankChar[c] || c == '>' || c == '/') {
    this.handler.onCloseTag(this.content.substring(this.start, this.i));

    if (c != '>') {
      this.i = this.content.indexOf('>', this.i);
      if (this.i == -1) return;
    }

    this.start = ++this.i;
    this.state = this.text;
  } else this.i++;
};

module.exports = parser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1220:
/*!**************************************************************!*\
  !*** E:/ceshi/lvshi/components/pickerAddress_buxian/data.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = [
{
  "name": "不限地区",
  "city": [
  {
    "name": "不限地区",
    "area": [
    "不限地区"] }] },




{
  "name": "北京市",
  "city": [
  {
    "name": "北京市",
    "area": [
    "东城区",
    "西城区",
    "崇文区",
    "宣武区",
    "朝阳区",
    "丰台区",
    "石景山区",
    "海淀区",
    "门头沟区",
    "房山区",
    "通州区",
    "顺义区",
    "昌平区",
    "大兴区",
    "平谷区",
    "怀柔区",
    "密云县",
    "延庆县"] }] },




{
  "name": "天津市",
  "city": [
  {
    "name": "天津市",
    "area": [
    "和平区",
    "河东区",
    "河西区",
    "南开区",
    "河北区",
    "红桥区",
    "塘沽区",
    "汉沽区",
    "大港区",
    "东丽区",
    "西青区",
    "津南区",
    "北辰区",
    "武清区",
    "宝坻区",
    "宁河县",
    "静海县",
    "蓟  县"] }] },




{
  "name": "河北省",
  "city": [
  {
    "name": "石家庄市",
    "area": [
    "长安区",
    "桥东区",
    "桥西区",
    "新华区",
    "郊  区",
    "井陉矿区",
    "井陉县",
    "正定县",
    "栾城县",
    "行唐县",
    "灵寿县",
    "高邑县",
    "深泽县",
    "赞皇县",
    "无极县",
    "平山县",
    "元氏县",
    "赵  县",
    "辛集市",
    "藁",
    "晋州市",
    "新乐市",
    "鹿泉市"] },


  {
    "name": "唐山市",
    "area": [
    "路南区",
    "路北区",
    "古冶区",
    "开平区",
    "新  区",
    "丰润县",
    "滦  县",
    "滦南县",
    "乐亭县",
    "迁西县",
    "玉田县",
    "唐海县",
    "遵化市",
    "丰南市",
    "迁安市"] },


  {
    "name": "秦皇岛市",
    "area": [
    "海港区",
    "山海关区",
    "北戴河区",
    "青龙满族自治县",
    "昌黎县",
    "抚宁县",
    "卢龙县"] },


  {
    "name": "邯郸市",
    "area": [
    "邯山区",
    "丛台区",
    "复兴区",
    "峰峰矿区",
    "邯郸县",
    "临漳县",
    "成安县",
    "大名县",
    "涉  县",
    "磁  县",
    "肥乡县",
    "永年县",
    "邱  县",
    "鸡泽县",
    "广平县",
    "馆陶县",
    "魏  县",
    "曲周县",
    "武安市"] },


  {
    "name": "邢台市",
    "area": [
    "桥东区",
    "桥西区",
    "邢台县",
    "临城县",
    "内丘县",
    "柏乡县",
    "隆尧县",
    "任  县",
    "南和县",
    "宁晋县",
    "巨鹿县",
    "新河县",
    "广宗县",
    "平乡县",
    "威  县",
    "清河县",
    "临西县",
    "南宫市",
    "沙河市"] },


  {
    "name": "保定市",
    "area": [
    "新市区",
    "北市区",
    "南市区",
    "满城县",
    "清苑县",
    "涞水县",
    "阜平县",
    "徐水县",
    "定兴县",
    "唐  县",
    "高阳县",
    "容城县",
    "涞源县",
    "望都县",
    "安新县",
    "易  县",
    "曲阳县",
    "蠡  县",
    "顺平县",
    "博野",
    "雄县",
    "涿州市",
    "定州市",
    "安国市",
    "高碑店市"] },


  {
    "name": "张家口",
    "area": [
    "桥东区",
    "桥西区",
    "宣化区",
    "下花园区",
    "宣化县",
    "张北县",
    "康保县",
    "沽源县",
    "尚义县",
    "蔚  县",
    "阳原县",
    "怀安县",
    "万全县",
    "怀来县",
    "涿鹿县",
    "赤城县",
    "崇礼县"] },


  {
    "name": "承德市",
    "area": [
    "双桥区",
    "双滦区",
    "鹰手营子矿区",
    "承德县",
    "兴隆县",
    "平泉县",
    "滦平县",
    "隆化县",
    "丰宁满族自治县",
    "宽城满族自治县",
    "围场满族蒙古族自治县"] },


  {
    "name": "沧州市",
    "area": [
    "新华区",
    "运河区",
    "沧  县",
    "青  县",
    "东光县",
    "海兴县",
    "盐山县",
    "肃宁县",
    "南皮县",
    "吴桥县",
    "献  县",
    "孟村回族自治县",
    "泊头市",
    "任丘市",
    "黄骅市",
    "河间市"] },


  {
    "name": "廊坊市",
    "area": [
    "安次区",
    "固安县",
    "永清县",
    "香河县",
    "大城县",
    "文安县",
    "大厂回族自治县",
    "霸州市",
    "三河市"] },


  {
    "name": "衡水市",
    "area": [
    "桃城区",
    "枣强县",
    "武邑县",
    "武强县",
    "饶阳县",
    "安平县",
    "故城县",
    "景  县",
    "阜城县",
    "冀州市",
    "深州市"] }] },




{
  "name": "山西省",
  "city": [
  {
    "name": "太原市",
    "area": [
    "小店区",
    "迎泽区",
    "杏花岭区",
    "尖草坪区",
    "万柏林区",
    "晋源区",
    "清徐县",
    "阳曲县",
    "娄烦县",
    "古交市"] },


  {
    "name": "大同市",
    "area": [
    "城  区",
    "矿  区",
    "南郊区",
    "新荣区",
    "阳高县",
    "天镇县",
    "广灵县",
    "灵丘县",
    "浑源县",
    "左云县",
    "大同县"] },


  {
    "name": "阳泉市",
    "area": [
    "城  区",
    "矿  区",
    "郊  区",
    "平定县",
    "盂  县"] },


  {
    "name": "长治市",
    "area": [
    "城  区",
    "郊  区",
    "长治县",
    "襄垣县",
    "屯留县",
    "平顺县",
    "黎城县",
    "壶关县",
    "长子县",
    "武乡县",
    "沁  县",
    "沁源县",
    "潞城市"] },


  {
    "name": "晋城市",
    "area": [
    "城  区",
    "沁水县",
    "阳城县",
    "陵川县",
    "泽州县",
    "高平市"] },


  {
    "name": "朔州市",
    "area": [
    "朔城区",
    "平鲁区",
    "山阴县",
    "应  县",
    "右玉县",
    "怀仁县"] },


  {
    "name": "忻州市",
    "area": [
    "忻府区",
    "原平市",
    "定襄县",
    "五台县",
    "代  县",
    "繁峙县",
    "宁武县",
    "静乐县",
    "神池县",
    "五寨县",
    "岢岚县",
    "河曲县",
    "保德县",
    "偏关县"] },


  {
    "name": "吕梁市",
    "area": [
    "离石区",
    "孝义市",
    "汾阳市",
    "文水县",
    "交城县",
    "兴  县",
    "临  县",
    "柳林县",
    "石楼县",
    "岚  县",
    "方山县",
    "中阳县",
    "交口县"] },


  {
    "name": "晋中市",
    "area": [
    "榆次市",
    "介休市",
    "榆社县",
    "左权县",
    "和顺县",
    "昔阳县",
    "寿阳县",
    "太谷县",
    "祁  县",
    "平遥县",
    "灵石县"] },


  {
    "name": "临汾市",
    "area": [
    "临汾市",
    "侯马市",
    "霍州市",
    "曲沃县",
    "翼城县",
    "襄汾县",
    "洪洞县",
    "古  县",
    "安泽县",
    "浮山县",
    "吉  县",
    "乡宁县",
    "蒲  县",
    "大宁县",
    "永和县",
    "隰  县",
    "汾西县"] },


  {
    "name": "运城市",
    "area": [
    "运城市",
    "永济市",
    "河津市",
    "芮城县",
    "临猗县",
    "万荣县",
    "新绛县",
    "稷山县",
    "闻喜县",
    "夏  县",
    "绛  县",
    "平陆县",
    "垣曲县"] }] },




{
  "name": "内蒙古",
  "city": [
  {
    "name": "呼和浩特市",
    "area": [
    "新城区",
    "回民区",
    "玉泉区",
    "郊  区",
    "土默特左旗",
    "托克托县",
    "和林格尔县",
    "清水河县",
    "武川县"] },


  {
    "name": "包头市",
    "area": [
    "东河区",
    "昆都伦区",
    "青山区",
    "石拐矿区",
    "白云矿区",
    "郊  区",
    "土默特右旗",
    "固阳县",
    "达尔罕茂明安联合旗"] },


  {
    "name": "乌海市",
    "area": [
    "海勃湾区",
    "海南区",
    "乌达区"] },


  {
    "name": "赤峰市",
    "area": [
    "红山区",
    "元宝山区",
    "松山区",
    "阿鲁科尔沁旗",
    "巴林左旗",
    "巴林右旗",
    "林西县",
    "克什克腾旗",
    "翁牛特旗",
    "喀喇沁旗",
    "宁城县",
    "敖汉旗"] },


  {
    "name": "呼伦贝尔市",
    "area": [
    "海拉尔市",
    "满洲里市",
    "扎兰屯市",
    "牙克石市",
    "根河市",
    "额尔古纳市",
    "阿荣旗",
    "莫力达瓦达斡尔族自治旗",
    "鄂伦春自治旗",
    "鄂温克族自治旗",
    "新巴尔虎右旗",
    "新巴尔虎左旗",
    "陈巴尔虎旗"] },


  {
    "name": "兴安盟",
    "area": [
    "乌兰浩特市",
    "阿尔山市",
    "科尔沁右翼前旗",
    "科尔沁右翼中旗",
    "扎赉特旗",
    "突泉县"] },


  {
    "name": "通辽市",
    "area": [
    "科尔沁区",
    "霍林郭勒市",
    "科尔沁左翼中旗",
    "科尔沁左翼后旗",
    "开鲁县",
    "库伦旗",
    "奈曼旗",
    "扎鲁特旗"] },


  {
    "name": "锡林郭勒盟",
    "area": [
    "二连浩特市",
    "锡林浩特市",
    "阿巴嘎旗",
    "苏尼特左旗",
    "苏尼特右旗",
    "东乌珠穆沁旗",
    "西乌珠穆沁旗",
    "太仆寺旗",
    "镶黄旗",
    "正镶白旗",
    "正蓝旗",
    "多伦县"] },


  {
    "name": "乌兰察布盟",
    "area": [
    "集宁市",
    "丰镇市",
    "卓资县",
    "化德县",
    "商都县",
    "兴和县",
    "凉城县",
    "察哈尔右翼前旗",
    "察哈尔右翼中旗",
    "察哈尔右翼后旗",
    "四子王旗"] },


  {
    "name": "伊克昭盟",
    "area": [
    "东胜市",
    "达拉特旗",
    "准格尔旗",
    "鄂托克前旗",
    "鄂托克旗",
    "杭锦旗",
    "乌审旗",
    "伊金霍洛旗"] },


  {
    "name": "巴彦淖尔盟",
    "area": [
    "临河市",
    "五原县",
    "磴口县",
    "乌拉特前旗",
    "乌拉特中旗",
    "乌拉特后旗",
    "杭锦后旗"] },


  {
    "name": "阿拉善盟",
    "area": [
    "阿拉善左旗",
    "阿拉善右旗",
    "额济纳旗"] }] },




{
  "name": "辽宁省",
  "city": [
  {
    "name": "沈阳市",
    "area": [
    "沈河区",
    "皇姑区",
    "和平区",
    "大东区",
    "铁西区",
    "苏家屯区",
    "东陵区",
    "于洪区",
    "新民市",
    "法库县",
    "辽中县",
    "康平县",
    "新城子区"] },


  {
    "name": "大连市",
    "area": [
    "西岗区",
    "中山区",
    "沙河口区",
    "甘井子区",
    "旅顺口区",
    "金州区",
    "瓦房店市",
    "普兰店市",
    "庄河市",
    "长海县"] },


  {
    "name": "鞍山市",
    "area": [
    "铁东区",
    "铁西区",
    "立山区",
    "千山区",
    "海城市",
    "台安县",
    "岫岩满族自治县"] },


  {
    "name": "抚顺市",
    "area": [
    "顺城区",
    "新抚区",
    "东洲区",
    "望花区",
    "抚顺县",
    "清原满族自治县",
    "新宾满族自治县"] },


  {
    "name": "本溪市",
    "area": [
    "平山区",
    "明山区",
    "溪湖区",
    "南芬区",
    "本溪满族自治县",
    "桓仁满族自治县"] },


  {
    "name": "丹东市",
    "area": [
    "振兴区",
    "元宝区",
    "振安区",
    "东港市",
    "凤城市",
    "宽甸满族自治县"] },


  {
    "name": "锦州市",
    "area": [
    "太和区",
    "古塔区",
    "凌河区",
    "凌海市",
    "黑山县",
    "义县",
    "北宁市"] },


  {
    "name": "营口市",
    "area": [
    "站前区",
    "西市区",
    "鲅鱼圈区",
    "老边区",
    "大石桥市",
    "盖州市"] },


  {
    "name": "阜新市",
    "area": [
    "海州区",
    "新邱区",
    "太平区",
    "清河门区",
    "细河区",
    "彰武县",
    "阜新蒙古族自治县"] },


  {
    "name": "辽阳市",
    "area": [
    "白塔区",
    "文圣区",
    "宏伟区",
    "太子河区",
    "弓长岭区",
    "灯塔市",
    "辽阳县"] },


  {
    "name": "盘锦",
    "area": [
    "双台子区",
    "兴隆台区",
    "盘山县",
    "大洼县"] },


  {
    "name": "铁岭市",
    "area": [
    "银州区",
    "清河区",
    "调兵山市",
    "开原市",
    "铁岭县",
    "昌图县",
    "西丰县"] },


  {
    "name": "朝阳市",
    "area": [
    "双塔区",
    "龙城区",
    "凌源市",
    "北票市",
    "朝阳县",
    "建平县",
    "喀喇沁左翼蒙古族自治县"] },


  {
    "name": "葫芦岛市",
    "area": [
    "龙港区",
    "南票区",
    "连山区",
    "兴城市",
    "绥中县",
    "建昌县"] }] },




{
  "name": "吉林省",
  "city": [
  {
    "name": "长春市",
    "area": [
    "朝阳区",
    "宽城区",
    "二道区",
    "南关区",
    "绿园区",
    "双阳区",
    "九台市",
    "榆树市",
    "德惠市",
    "农安县"] },


  {
    "name": "吉林市",
    "area": [
    "船营区",
    "昌邑区",
    "龙潭区",
    "丰满区",
    "舒兰市",
    "桦甸市",
    "蛟河市",
    "磐石市",
    "永吉县"] },


  {
    "name": "四平",
    "area": [
    "铁西区",
    "铁东区",
    "公主岭市",
    "双辽市",
    "梨树县",
    "伊通满族自治县"] },


  {
    "name": "辽源市",
    "area": [
    "龙山区",
    "西安区",
    "东辽县",
    "东丰县"] },


  {
    "name": "通化市",
    "area": [
    "东昌区",
    "二道江区",
    "梅河口市",
    "集安市",
    "通化县",
    "辉南县",
    "柳河县"] },


  {
    "name": "白山市",
    "area": [
    "八道江区",
    "江源区",
    "临江市",
    "靖宇县",
    "抚松县",
    "长白朝鲜族自治县"] },


  {
    "name": "松原市",
    "area": [
    "宁江区",
    "乾安县",
    "长岭县",
    "扶余县",
    "前郭尔罗斯蒙古族自治县"] },


  {
    "name": "白城市",
    "area": [
    "洮北区",
    "大安市",
    "洮南市",
    "镇赉县",
    "通榆县"] },


  {
    "name": "延边朝鲜族自治州",
    "area": [
    "延吉市",
    "图们市",
    "敦化市",
    "龙井市",
    "珲春市",
    "和龙市",
    "安图县",
    "汪清县"] }] },




{
  "name": "黑龙江省",
  "city": [
  {
    "name": "哈尔滨市",
    "area": [
    "松北区",
    "道里区",
    "南岗区",
    "平房区",
    "香坊区",
    "道外区",
    "呼兰区",
    "阿城区",
    "双城市",
    "尚志市",
    "五常市",
    "宾县",
    "方正县",
    "通河县",
    "巴彦县",
    "延寿县",
    "木兰县",
    "依兰县"] },


  {
    "name": "齐齐哈尔市",
    "area": [
    "龙沙区",
    "昂昂溪区",
    "铁锋区",
    "建华区",
    "富拉尔基区",
    "碾子山区",
    "梅里斯达斡尔族区",
    "讷河市",
    "富裕县",
    "拜泉县",
    "甘南县",
    "依安县",
    "克山县",
    "泰来县",
    "克东县",
    "龙江县"] },


  {
    "name": "鹤岗市",
    "area": [
    "兴山区",
    "工农区",
    "南山区",
    "兴安区",
    "向阳区",
    "东山区",
    "萝北县",
    "绥滨县"] },


  {
    "name": "双鸭山",
    "area": [
    "尖山区",
    "岭东区",
    "四方台区",
    "宝山区",
    "集贤县",
    "宝清县",
    "友谊县",
    "饶河县"] },


  {
    "name": "鸡西市",
    "area": [
    "鸡冠区",
    "恒山区",
    "城子河区",
    "滴道区",
    "梨树区",
    "麻山区",
    "密山市",
    "虎林市",
    "鸡东县"] },


  {
    "name": "大庆市",
    "area": [
    "萨尔图区",
    "红岗区",
    "龙凤区",
    "让胡路区",
    "大同区",
    "林甸县",
    "肇州县",
    "肇源县",
    "杜尔伯特蒙古族自治县"] },


  {
    "name": "伊春市",
    "area": [
    "伊春区",
    "带岭区",
    "南岔区",
    "金山屯区",
    "西林区",
    "美溪区",
    "乌马河区",
    "翠峦区",
    "友好区",
    "上甘岭区",
    "五营区",
    "红星区",
    "新青区",
    "汤旺河区",
    "乌伊岭区",
    "铁力市",
    "嘉荫县"] },


  {
    "name": "牡丹江市",
    "area": [
    "爱民区",
    "东安区",
    "阳明区",
    "西安区",
    "绥芬河市",
    "宁安市",
    "海林市",
    "穆棱市",
    "林口县",
    "东宁县"] },


  {
    "name": "佳木斯市",
    "area": [
    "向阳区",
    "前进区",
    "东风区",
    "郊区",
    "同江市",
    "富锦市",
    "桦川县",
    "抚远县",
    "桦南县",
    "汤原县"] },


  {
    "name": "七台河市",
    "area": [
    "桃山区",
    "新兴区",
    "茄子河区",
    "勃利县"] },


  {
    "name": "黑河市",
    "area": [
    "爱辉区",
    "北安市",
    "五大连池市",
    "逊克县",
    "嫩江县",
    "孙吴县"] },


  {
    "name": "绥化市",
    "area": [
    "北林区",
    "安达市",
    "肇东市",
    "海伦市",
    "绥棱县",
    "兰西县",
    "明水县",
    "青冈县",
    "庆安县",
    "望奎县"] },


  {
    "name": "大兴安岭地区",
    "area": [
    "呼玛县",
    "塔河县",
    "漠河县",
    "大兴安岭辖区"] }] },




{
  "name": "上海市",
  "city": [
  {
    "name": "上海市",
    "area": [
    "黄浦区",
    "卢湾区",
    "徐汇区",
    "长宁区",
    "静安区",
    "普陀区",
    "闸北区",
    "虹口区",
    "杨浦区",
    "宝山区",
    "闵行区",
    "嘉定区",
    "松江区",
    "金山区",
    "青浦区",
    "南汇区",
    "奉贤区",
    "浦东新区",
    "崇明县"] }] },




{
  "name": "江苏省",
  "city": [
  {
    "name": "南京市",
    "area": [
    "玄武区",
    "白下区",
    "秦淮区",
    "建邺区",
    "鼓楼区",
    "下关区",
    "栖霞区",
    "雨花台区",
    "浦口区",
    "江宁区",
    "六合区",
    "溧水县",
    "高淳县"] },


  {
    "name": "苏州市",
    "area": [
    "金阊区",
    "平江区",
    "沧浪区",
    "虎丘区",
    "吴中区",
    "相城区",
    "常熟市",
    "张家港市",
    "昆山市",
    "吴江市",
    "太仓市"] },


  {
    "name": "无锡市",
    "area": [
    "崇安区",
    "南长区",
    "北塘区",
    "滨湖区",
    "锡山区",
    "惠山区",
    "江阴市",
    "宜兴市"] },


  {
    "name": "常州市",
    "area": [
    "钟楼区",
    "天宁区",
    "戚墅堰区",
    "新北区",
    "武进区",
    "金坛市",
    "溧阳市"] },


  {
    "name": "镇江市",
    "area": [
    "京口区",
    "润州区",
    "丹徒区",
    "丹阳市",
    "扬中市",
    "句容市"] },


  {
    "name": "南通市",
    "area": [
    "崇川区",
    "港闸区",
    "通州市",
    "如皋市",
    "海门市",
    "启东市",
    "海安县",
    "如东县"] },


  {
    "name": "泰州市",
    "area": [
    "海陵区",
    "高港区",
    "姜堰市",
    "泰兴市",
    "靖江市",
    "兴化市"] },


  {
    "name": "扬州市",
    "area": [
    "广陵区",
    "维扬区",
    "邗江区",
    "江都市",
    "仪征市",
    "高邮市",
    "宝应县"] },


  {
    "name": "盐城市",
    "area": [
    "亭湖区",
    "盐都区",
    "大丰市",
    "东台市",
    "建湖县",
    "射阳县",
    "阜宁县",
    "滨海县",
    "响水县"] },


  {
    "name": "连云港市",
    "area": [
    "新浦区",
    "海州区",
    "连云区",
    "东海县",
    "灌云县",
    "赣榆县",
    "灌南县"] },


  {
    "name": "徐州市",
    "area": [
    "云龙区",
    "鼓楼区",
    "九里区",
    "泉山区",
    "贾汪区",
    "邳州市",
    "新沂市",
    "铜山县",
    "睢宁县",
    "沛县",
    "丰县"] },


  {
    "name": "淮安市",
    "area": [
    "清河区",
    "清浦区",
    "楚州区",
    "淮阴区",
    "涟水县",
    "洪泽县",
    "金湖县",
    "盱眙县"] },


  {
    "name": "宿迁市",
    "area": [
    "宿城区",
    "宿豫区",
    "沭阳县",
    "泗阳县",
    "泗洪县"] }] },




{
  "name": "浙江省",
  "city": [
  {
    "name": "杭州市",
    "area": [
    "拱墅区",
    "西湖区",
    "上城区",
    "下城区",
    "江干区",
    "滨江区",
    "余杭区",
    "萧山区",
    "建德市",
    "富阳市",
    "临安市",
    "桐庐县",
    "淳安县"] },


  {
    "name": "宁波市",
    "area": [
    "海曙区",
    "江东区",
    "江北区",
    "镇海区",
    "北仑区",
    "鄞州区",
    "余姚市",
    "慈溪市",
    "奉化市",
    "宁海县",
    "象山县"] },


  {
    "name": "温州市",
    "area": [
    "鹿城区",
    "龙湾区",
    "瓯海区",
    "瑞安市",
    "乐清市",
    "永嘉县",
    "洞头县",
    "平阳县",
    "苍南县",
    "文成县",
    "泰顺县"] },


  {
    "name": "嘉兴市",
    "area": [
    "秀城区",
    "秀洲区",
    "海宁市",
    "平湖市",
    "桐乡市",
    "嘉善县",
    "海盐县"] },


  {
    "name": "湖州市",
    "area": [
    "吴兴区",
    "南浔区",
    "长兴县",
    "德清县",
    "安吉县"] },


  {
    "name": "绍兴市",
    "area": [
    "越城区",
    "诸暨市",
    "上虞市",
    "嵊州市",
    "绍兴县",
    "新昌县"] },


  {
    "name": "金华市",
    "area": [
    "婺城区",
    "金东区",
    "兰溪市",
    "义乌市",
    "东阳市",
    "永康市",
    "武义县",
    "浦江县",
    "磐安县"] },


  {
    "name": "衢州市",
    "area": [
    "柯城区",
    "衢江区",
    "江山市",
    "龙游县",
    "常山县",
    "开化县"] },


  {
    "name": "舟山市",
    "area": [
    "定海区",
    "普陀区",
    "岱山县",
    "嵊泗县"] },


  {
    "name": "台州市",
    "area": [
    "椒江区",
    "黄岩区",
    "路桥区",
    "临海市",
    "温岭市",
    "玉环县",
    "天台县",
    "仙居县",
    "三门县"] },


  {
    "name": "丽水市",
    "area": [
    "莲都区",
    "龙泉市",
    "缙云县",
    "青田县",
    "云和县",
    "遂昌县",
    "松阳县",
    "庆元县",
    "景宁畲族自治县"] }] },




{
  "name": "安徽省",
  "city": [
  {
    "name": "合肥市",
    "area": [
    "庐阳区",
    "瑶海区",
    "蜀山区",
    "包河区",
    "长丰县",
    "肥东县",
    "肥西县"] },


  {
    "name": "芜湖市",
    "area": [
    "镜湖区",
    "弋江区",
    "鸠江区",
    "三山区",
    "芜湖县",
    "南陵县",
    "繁昌县"] },


  {
    "name": "蚌埠市",
    "area": [
    "蚌山区",
    "龙子湖区",
    "禹会区",
    "淮上区",
    "怀远县",
    "固镇县",
    "五河县"] },


  {
    "name": "淮南市",
    "area": [
    "田家庵区",
    "大通区",
    "谢家集区",
    "八公山区",
    "潘集区",
    "凤台县"] },


  {
    "name": "马鞍山市",
    "area": [
    "雨山区",
    "花山区",
    "金家庄区",
    "当涂县"] },


  {
    "name": "淮北市",
    "area": [
    "相山区",
    "杜集区",
    "烈山区",
    "濉溪县"] },


  {
    "name": "铜陵市",
    "area": [
    "铜官山区",
    "狮子山区",
    "郊区",
    "铜陵县"] },


  {
    "name": "安庆市",
    "area": [
    "迎江区",
    "大观区",
    "宜秀区",
    "桐城市",
    "宿松县",
    "枞阳县",
    "太湖县",
    "怀宁县",
    "岳西县",
    "望江县",
    "潜山县"] },


  {
    "name": "黄山市",
    "area": [
    "屯溪区",
    "黄山区",
    "徽州区",
    "休宁县",
    "歙县",
    "祁门县",
    "黟县"] },


  {
    "name": "滁州市",
    "area": [
    "琅琊区",
    "南谯区",
    "天长市",
    "明光市",
    "全椒县",
    "来安县",
    "定远县",
    "凤阳县"] },


  {
    "name": "阜阳市",
    "area": [
    "颍州区",
    "颍东区",
    "颍泉区",
    "界首市",
    "临泉县",
    "颍上县",
    "阜南县",
    "太和县"] },


  {
    "name": "宿州市",
    "area": [
    "埇桥区",
    "萧县",
    "泗县",
    "砀山县",
    "灵璧县"] },


  {
    "name": "巢湖市",
    "area": [
    "居巢区",
    "含山县",
    "无为县",
    "庐江县",
    "和县"] },


  {
    "name": "六安市",
    "area": [
    "金安区",
    "裕安区",
    "寿县",
    "霍山县",
    "霍邱县",
    "舒城县",
    "金寨县"] },


  {
    "name": "亳州市",
    "area": [
    "谯城区",
    "利辛县",
    "涡阳县",
    "蒙城县"] },


  {
    "name": "池州市",
    "area": [
    "贵池区",
    "东至县",
    "石台县",
    "青阳县"] },


  {
    "name": "宣城市",
    "area": [
    "宣州区",
    "宁国市",
    "广德县",
    "郎溪县",
    "泾县",
    "旌德县",
    "绩溪县"] }] },




{
  "name": "福建省",
  "city": [
  {
    "name": "福州市",
    "area": [
    "鼓楼区",
    "台江区",
    "仓山区",
    "马尾区",
    "晋安区",
    "福清市",
    "长乐市",
    "闽侯县",
    "闽清县",
    "永泰县",
    "连江县",
    "罗源县",
    "平潭县"] },


  {
    "name": "厦门市",
    "area": [
    "思明区",
    "海沧区",
    "湖里区",
    "集美区",
    "同安区",
    "翔安区"] },


  {
    "name": "莆田市",
    "area": [
    "城厢区",
    "涵江区",
    "荔城区",
    "秀屿区",
    "仙游县"] },


  {
    "name": "三明市",
    "area": [
    "梅列区",
    "三元区",
    "永安市",
    "明溪县",
    "将乐县",
    "大田县",
    "宁化县",
    "建宁县",
    "沙县",
    "尤溪县",
    "清流县",
    "泰宁县"] },


  {
    "name": "泉州市",
    "area": [
    "鲤城区",
    "丰泽区",
    "洛江区",
    "泉港区",
    "石狮市",
    "晋江市",
    "南安市",
    "惠安县",
    "永春县",
    "安溪县",
    "德化县",
    "金门县"] },


  {
    "name": "漳州市",
    "area": [
    "芗城区",
    "龙文区",
    "龙海市",
    "平和县",
    "南靖县",
    "诏安县",
    "漳浦县",
    "华安县",
    "东山县",
    "长泰县",
    "云霄县"] },


  {
    "name": "南平市",
    "area": [
    "延平区",
    "建瓯市",
    "邵武市",
    "武夷山市",
    "建阳市",
    "松溪县",
    "光泽县",
    "顺昌县",
    "浦城县",
    "政和县"] },


  {
    "name": "龙岩市",
    "area": [
    "新罗区",
    "漳平市",
    "长汀县",
    "武平县",
    "上杭县",
    "永定县",
    "连城县"] },


  {
    "name": "宁德市",
    "area": [
    "蕉城区",
    "福安市",
    "福鼎市",
    "寿宁县",
    "霞浦县",
    "柘荣县",
    "屏南县",
    "古田县",
    "周宁县"] }] },




{
  "name": "江西省",
  "city": [
  {
    "name": "南昌市",
    "area": [
    "东湖区",
    "西湖区",
    "青云谱区",
    "湾里区",
    "青山湖区",
    "新建县",
    "南昌县",
    "进贤县",
    "安义县"] },


  {
    "name": "景德镇市",
    "area": [
    "珠山区",
    "昌江区",
    "乐平市",
    "浮梁县"] },


  {
    "name": "萍乡市",
    "area": [
    "安源区",
    "湘东区",
    "莲花县",
    "上栗县",
    "芦溪县"] },


  {
    "name": "九江市",
    "area": [
    "浔阳区",
    "庐山区",
    "瑞昌市",
    "九江县",
    "星子县",
    "武宁县",
    "彭泽县",
    "永修县",
    "修水县",
    "湖口县",
    "德安县",
    "都昌县"] },


  {
    "name": "新余市",
    "area": [
    "渝水区",
    "分宜县"] },


  {
    "name": "鹰潭市",
    "area": [
    "月湖区",
    "贵溪市",
    "余江县"] },


  {
    "name": "赣州市",
    "area": [
    "章贡区",
    "瑞金市",
    "南康市",
    "石城县",
    "安远县",
    "赣县",
    "宁都县",
    "寻乌县",
    "兴国县",
    "定南县",
    "上犹县",
    "于都县",
    "龙南县",
    "崇义县",
    "信丰县",
    "全南县",
    "大余县",
    "会昌县"] },


  {
    "name": "吉安市",
    "area": [
    "吉州区",
    "青原区",
    "井冈山市",
    "吉安县",
    "永丰县",
    "永新县",
    "新干县",
    "泰和县",
    "峡江县",
    "遂川县",
    "安福县",
    "吉水县",
    "万安县"] },


  {
    "name": "宜春市",
    "area": [
    "袁州区",
    "丰城市",
    "樟树市",
    "高安市",
    "铜鼓县",
    "靖安县",
    "宜丰县",
    "奉新县",
    "万载县",
    "上高县"] },


  {
    "name": "抚州市",
    "area": [
    "临川区",
    "南丰县",
    "乐安县",
    "金溪县",
    "南城县",
    "东乡县",
    "资溪县",
    "宜黄县",
    "广昌县",
    "黎川县",
    "崇仁县"] },


  {
    "name": "上饶市",
    "area": [
    "信州区",
    "德兴市",
    "上饶县",
    "广丰县",
    "鄱阳县",
    "婺源县",
    "铅山县",
    "余干县",
    "横峰县",
    "弋阳县",
    "玉山县",
    "万年县"] }] },




{
  "name": "山东省",
  "city": [
  {
    "name": "济南市",
    "area": [
    "市中区",
    "历下区",
    "天桥区",
    "槐荫区",
    "历城区",
    "长清区",
    "章丘市",
    "平阴县",
    "济阳县",
    "商河县"] },


  {
    "name": "青岛市",
    "area": [
    "市南区",
    "市北区",
    "城阳区",
    "四方区",
    "李沧区",
    "黄岛区",
    "崂山区",
    "胶南市",
    "胶州市",
    "平度市",
    "莱西市",
    "即墨市"] },


  {
    "name": "淄博市",
    "area": [
    "张店区",
    "临淄区",
    "淄川区",
    "博山区",
    "周村区",
    "桓台县",
    "高青县",
    "沂源县"] },


  {
    "name": "枣庄市",
    "area": [
    "市中区",
    "山亭区",
    "峄城区",
    "台儿庄区",
    "薛城区",
    "滕州市"] },


  {
    "name": "东营市",
    "area": [
    "东营区",
    "河口区",
    "垦利县",
    "广饶县",
    "利津县"] },


  {
    "name": "烟台市",
    "area": [
    "芝罘区",
    "福山区",
    "牟平区",
    "莱山区",
    "龙口市",
    "莱阳市",
    "莱州市",
    "招远市",
    "蓬莱市",
    "栖霞市",
    "海阳市",
    "长岛县"] },


  {
    "name": "潍坊市",
    "area": [
    "潍城区",
    "寒亭区",
    "坊子区",
    "奎文区",
    "青州市",
    "诸城市",
    "寿光市",
    "安丘市",
    "高密市",
    "昌邑市",
    "昌乐县",
    "临朐县"] },


  {
    "name": "济宁市",
    "area": [
    "市中区",
    "任城区",
    "曲阜市",
    "兖州市",
    "邹城市",
    "鱼台县",
    "金乡县",
    "嘉祥县",
    "微山县",
    "汶上县",
    "泗水县",
    "梁山县"] },


  {
    "name": "泰安市",
    "area": [
    "泰山区",
    "岱岳区",
    "新泰市",
    "肥城市",
    "宁阳县",
    "东平县"] },


  {
    "name": "威海市",
    "area": [
    "环翠区",
    "乳山市",
    "文登市",
    "荣成市"] },


  {
    "name": "日照市",
    "area": [
    "东港区",
    "岚山区",
    "五莲县",
    "莒县"] },


  {
    "name": "莱芜市",
    "area": [
    "莱城区",
    "钢城区"] },


  {
    "name": "临沂市",
    "area": [
    "兰山区",
    "罗庄区",
    "河东区",
    "沂南县",
    "郯城县",
    "沂水县",
    "苍山县",
    "费县",
    "平邑县",
    "莒南县",
    "蒙阴县",
    "临沭县"] },


  {
    "name": "德州市",
    "area": [
    "德城区",
    "乐陵市",
    "禹城市",
    "陵县",
    "宁津县",
    "齐河县",
    "武城县",
    "庆云县",
    "平原县",
    "夏津县",
    "临邑县"] },


  {
    "name": "聊城市",
    "area": [
    "东昌府区",
    "临清市",
    "高唐县",
    "阳谷县",
    "茌平县",
    "莘县",
    "东阿县",
    "冠县"] },


  {
    "name": "滨州市",
    "area": [
    "滨城区",
    "邹平县",
    "沾化县",
    "惠民县",
    "博兴县",
    "阳信县",
    "无棣县"] },


  {
    "name": "菏泽市",
    "area": [
    "牡丹区",
    "鄄城县",
    "单县",
    "郓城县",
    "曹县",
    "定陶县",
    "巨野县",
    "东明县",
    "成武县"] }] },




{
  "name": "河南省",
  "city": [
  {
    "name": "郑州市",
    "area": [
    "中原区",
    "金水区",
    "二七区",
    "管城回族区",
    "上街区",
    "惠济区",
    "巩义市",
    "新郑市",
    "新密市",
    "登封市",
    "荥阳市",
    "中牟县"] },


  {
    "name": "开封市",
    "area": [
    "鼓楼区",
    "龙亭区",
    "顺河回族区",
    "禹王台区",
    "金明区",
    "开封县",
    "尉氏县",
    "兰考县",
    "杞县",
    "通许县"] },


  {
    "name": "洛阳市",
    "area": [
    "西工区",
    "老城区",
    "涧西区",
    "瀍河回族区",
    "洛龙区",
    "吉利区",
    "偃师市",
    "孟津县",
    "汝阳县",
    "伊川县",
    "洛宁县",
    "嵩县",
    "宜阳县",
    "新安县",
    "栾川县"] },


  {
    "name": "平顶山市",
    "area": [
    "新华区",
    "卫东区",
    "湛河区",
    "石龙区",
    "汝州市",
    "舞钢市",
    "宝丰县",
    "叶县",
    "郏县",
    "鲁山县"] },


  {
    "name": "安阳市",
    "area": [
    "北关区",
    "文峰区",
    "殷都区",
    "龙安区",
    "林州市",
    "安阳县",
    "滑县",
    "内黄县",
    "汤阴县"] },


  {
    "name": "鹤壁市",
    "area": [
    "淇滨区",
    "山城区",
    "鹤山区",
    "浚县",
    "淇县"] },


  {
    "name": "新乡市",
    "area": [
    "卫滨区",
    "红旗区",
    "凤泉区",
    "牧野区",
    "卫辉市",
    "辉县市",
    "新乡县",
    "获嘉县",
    "原阳县",
    "长垣县",
    "封丘县",
    "延津县"] },


  {
    "name": "焦作市",
    "area": [
    "解放区",
    "中站区",
    "马村区",
    "山阳区",
    "沁阳市",
    "孟州市",
    "修武县",
    "温县",
    "武陟县",
    "博爱县"] },


  {
    "name": "濮阳市",
    "area": [
    "华龙区",
    "濮阳县",
    "南乐县",
    "台前县",
    "清丰县",
    "范县"] },


  {
    "name": "许昌市",
    "area": [
    "魏都区",
    "禹州市",
    "长葛市",
    "许昌县",
    "鄢陵县",
    "襄城县"] },


  {
    "name": "漯河市",
    "area": [
    "源汇区",
    "郾城区",
    "召陵区",
    "临颍县",
    "舞阳县"] },


  {
    "name": "三门峡市",
    "area": [
    "湖滨区",
    "义马市",
    "灵宝市",
    "渑池县",
    "卢氏县",
    "陕县"] },


  {
    "name": "南阳市",
    "area": [
    "卧龙区",
    "宛城区",
    "邓州市",
    "桐柏县",
    "方城县",
    "淅川县",
    "镇平县",
    "唐河县",
    "南召县",
    "内乡县",
    "新野县",
    "社旗县",
    "西峡县"] },


  {
    "name": "商丘市",
    "area": [
    "梁园区",
    "睢阳区",
    "永城市",
    "宁陵县",
    "虞城县",
    "民权县",
    "夏邑县",
    "柘城县",
    "睢县"] },


  {
    "name": "信阳市",
    "area": [
    "浉河区",
    "平桥区",
    "潢川县",
    "淮滨县",
    "息县",
    "新县",
    "商城县",
    "固始县",
    "罗山县",
    "光山县"] },


  {
    "name": "周口市",
    "area": [
    "川汇区",
    "项城市",
    "商水县",
    "淮阳县",
    "太康县",
    "鹿邑县",
    "西华县",
    "扶沟县",
    "沈丘县",
    "郸城县"] },


  {
    "name": "驻马店市",
    "area": [
    "驿城区",
    "确山县",
    "新蔡县",
    "上蔡县",
    "西平县",
    "泌阳县",
    "平舆县",
    "汝南县",
    "遂平县",
    "正阳县"] },


  {
    "name": "焦作市",
    "area": [
    "济源市"] }] },




{
  "name": "湖北省",
  "city": [
  {
    "name": "武汉市",
    "area": [
    "江岸区",
    "武昌区",
    "江汉区",
    "硚口区",
    "汉阳区",
    "青山区",
    "洪山区",
    "东西湖区",
    "汉南区",
    "蔡甸区",
    "江夏区",
    "黄陂区",
    "新洲区"] },


  {
    "name": "黄石市",
    "area": [
    "黄石港区",
    "西塞山区",
    "下陆区",
    "铁山区",
    "大冶市",
    "阳新县"] },


  {
    "name": "十堰市",
    "area": [
    "张湾区",
    "茅箭区",
    "丹江口市",
    "郧县",
    "竹山县",
    "房县",
    "郧西县",
    "竹溪县"] },


  {
    "name": "荆州市",
    "area": [
    "沙市区",
    "荆州区",
    "洪湖市",
    "石首市",
    "松滋市",
    "监利县",
    "公安县",
    "江陵县"] },


  {
    "name": "宜昌市",
    "area": [
    "西陵区",
    "伍家岗区",
    "点军区",
    "猇亭区",
    "夷陵区",
    "宜都市",
    "当阳市",
    "枝江市",
    "秭归县",
    "远安县",
    "兴山县",
    "五峰土家族自治县",
    "长阳土家族自治县"] },


  {
    "name": "襄樊市",
    "area": [
    "襄城区",
    "樊城区",
    "襄阳区",
    "老河口市",
    "枣阳市",
    "宜城市",
    "南漳县",
    "谷城县",
    "保康县"] },


  {
    "name": "鄂州市",
    "area": [
    "鄂城区",
    "华容区",
    "梁子湖区"] },


  {
    "name": "荆门市",
    "area": [
    "东宝区",
    "掇刀区",
    "钟祥市",
    "京山县",
    "沙洋县"] },


  {
    "name": "孝感市",
    "area": [
    "孝南区",
    "应城市",
    "安陆市",
    "汉川市",
    "云梦县",
    "大悟县",
    "孝昌县"] },


  {
    "name": "黄冈市",
    "area": [
    "黄州区",
    "麻城市",
    "武穴市",
    "红安县",
    "罗田县",
    "浠水县",
    "蕲春县",
    "黄梅县",
    "英山县",
    "团风县"] },


  {
    "name": "咸宁市",
    "area": [
    "咸安区",
    "赤壁市",
    "嘉鱼县",
    "通山县",
    "崇阳县",
    "通城县"] },


  {
    "name": "随州市",
    "area": [
    "曾都区",
    "广水市"] },


  {
    "name": "恩施土家族苗族自治州",
    "area": [
    "恩施市",
    "利川市",
    "建始县",
    "来凤县",
    "巴东县",
    "鹤峰县",
    "宣恩县",
    "咸丰县"] },


  {
    "name": "仙桃市",
    "area": [
    "仙桃"] },


  {
    "name": "天门市",
    "area": [
    "天门"] },


  {
    "name": "潜江市",
    "area": [
    "潜江"] },


  {
    "name": "神农架林区",
    "area": [
    "神农架林区"] }] },




{
  "name": "湖南省",
  "city": [
  {
    "name": "长沙市",
    "area": [
    "岳麓区",
    "芙蓉区",
    "天心区",
    "开福区",
    "雨花区",
    "浏阳市",
    "长沙县",
    "望城县",
    "宁乡县"] },


  {
    "name": "株洲市",
    "area": [
    "天元区",
    "荷塘区",
    "芦淞区",
    "石峰区",
    "醴陵市",
    "株洲县",
    "炎陵县",
    "茶陵县",
    "攸县"] },


  {
    "name": "湘潭市",
    "area": [
    "岳塘区",
    "雨湖区",
    "湘乡市",
    "韶山市",
    "湘潭县"] },


  {
    "name": "衡阳市",
    "area": [
    "雁峰区",
    "珠晖区",
    "石鼓区",
    "蒸湘区",
    "南岳区",
    "耒阳市",
    "常宁市",
    "衡阳县",
    "衡东县",
    "衡山县",
    "衡南县",
    "祁东县"] },


  {
    "name": "邵阳市",
    "area": [
    "双清区",
    "大祥区",
    "北塔区",
    "武冈市",
    "邵东县",
    "洞口县",
    "新邵县",
    "绥宁县",
    "新宁县",
    "邵阳县",
    "隆回县",
    "城步苗族自治县"] },


  {
    "name": "岳阳市",
    "area": [
    "岳阳楼区",
    "云溪区",
    "君山区",
    "临湘市",
    "汨罗市",
    "岳阳县",
    "湘阴县",
    "平江县",
    "华容县"] },


  {
    "name": "常德市",
    "area": [
    "武陵区",
    "鼎城区",
    "津市市",
    "澧县",
    "临澧县",
    "桃源县",
    "汉寿县",
    "安乡县",
    "石门县"] },


  {
    "name": "张家界市",
    "area": [
    "永定区",
    "武陵源区",
    "慈利县",
    "桑植县"] },


  {
    "name": "益阳市",
    "area": [
    "赫山区",
    "资阳区",
    "沅江市",
    "桃江县",
    "南县",
    "安化县"] },


  {
    "name": "郴州市",
    "area": [
    "北湖区",
    "苏仙区",
    "资兴市",
    "宜章县",
    "汝城县",
    "安仁县",
    "嘉禾县",
    "临武县",
    "桂东县",
    "永兴县",
    "桂阳县"] },


  {
    "name": "永州市",
    "area": [
    "冷水滩区",
    "零陵区",
    "祁阳县",
    "蓝山县",
    "宁远县",
    "新田县",
    "东安县",
    "江永县",
    "道县",
    "双牌县",
    "江华瑶族自治县"] },


  {
    "name": "怀化市",
    "area": [
    "鹤城区",
    "洪江市",
    "会同县",
    "沅陵县",
    "辰溪县",
    "溆浦县",
    "中方县",
    "新晃侗族自治县",
    "芷江侗族自治县",
    "通道侗族自治县",
    "靖州苗族侗族自治县",
    "麻阳苗族自治县"] },


  {
    "name": "娄底市",
    "area": [
    "娄星区",
    "冷水江市",
    "涟源市",
    "新化县",
    "双峰县"] },


  {
    "name": "湘西土家族苗族自治州",
    "area": [
    "吉首市",
    "古丈县",
    "龙山县",
    "永顺县",
    "凤凰县",
    "泸溪县",
    "保靖县",
    "花垣县"] }] },




{
  "name": "广东省",
  "city": [
  {
    "name": "广州市",
    "area": [
    "越秀区",
    "荔湾区",
    "海珠区",
    "天河区",
    "白云区",
    "黄埔区",
    "番禺区",
    "花都区",
    "南沙区",
    "萝岗区",
    "增城市",
    "从化市"] },


  {
    "name": "深圳市",
    "area": [
    "福田区",
    "罗湖区",
    "南山区",
    "宝安区",
    "龙岗区",
    "盐田区"] },


  {
    "name": "东莞市",
    "area": [
    "莞城",
    "常平",
    "塘厦",
    "塘厦",
    "塘厦"] },


  {
    "name": "中山市",
    "area": [
    "中山"] },


  {
    "name": "潮州市",
    "area": [
    "湘桥区",
    "潮安县",
    "饶平县"] },


  {
    "name": "揭阳市",
    "area": [
    "榕城区",
    "揭东县",
    "揭西县",
    "惠来县",
    "普宁市"] },


  {
    "name": "云浮市",
    "area": [
    "云城区",
    "新兴县",
    "郁南县",
    "云安县",
    "罗定市"] },


  {
    "name": "珠海市",
    "area": [
    "香洲区",
    "斗门区",
    "金湾区"] },


  {
    "name": "汕头市",
    "area": [
    "金平区",
    "濠江区",
    "龙湖区",
    "潮阳区",
    "潮南区",
    "澄海区",
    "南澳县"] },


  {
    "name": "韶关市",
    "area": [
    "浈江区",
    "武江区",
    "曲江区",
    "乐昌市",
    "南雄市",
    "始兴县",
    "仁化县",
    "翁源县",
    "新丰县",
    "乳源瑶族自治县"] },


  {
    "name": "佛山市",
    "area": [
    "禅城区",
    "南海区",
    "顺德区",
    "三水区",
    "高明区"] },


  {
    "name": "江门市",
    "area": [
    "蓬江区",
    "江海区",
    "新会区",
    "恩平市",
    "台山市",
    "开平市",
    "鹤山市"] },


  {
    "name": "湛江市",
    "area": [
    "赤坎区",
    "霞山区",
    "坡头区",
    "麻章区",
    "吴川市",
    "廉江市",
    "雷州市",
    "遂溪县",
    "徐闻县"] },


  {
    "name": "茂名市",
    "area": [
    "茂南区",
    "茂港区",
    "化州市",
    "信宜市",
    "高州市",
    "电白县"] },


  {
    "name": "肇庆市",
    "area": [
    "端州区",
    "鼎湖区",
    "高要市",
    "四会市",
    "广宁县",
    "怀集县",
    "封开县",
    "德庆县"] },


  {
    "name": "惠州市",
    "area": [
    "惠城区",
    "惠阳区",
    "博罗县",
    "惠东县",
    "龙门县"] },


  {
    "name": "梅州市",
    "area": [
    "梅江区",
    "兴宁市",
    "梅县",
    "大埔县",
    "丰顺县",
    "五华县",
    "平远县",
    "蕉岭县"] },


  {
    "name": "汕尾市",
    "area": [
    "城区",
    "陆丰市",
    "海丰县",
    "陆河县"] },


  {
    "name": "河源市",
    "area": [
    "源城区",
    "紫金县",
    "龙川县",
    "连平县",
    "和平县",
    "东源县"] },


  {
    "name": "阳江市",
    "area": [
    "江城区",
    "阳春市",
    "阳西县",
    "阳东县"] },


  {
    "name": "清远市",
    "area": [
    "清城区",
    "英德市",
    "连州市",
    "佛冈县",
    "阳山县",
    "清新县",
    "连山壮族瑶族自治县",
    "连南瑶族自治县"] }] },




{
  "name": "广西",
  "city": [
  {
    "name": "南宁市",
    "area": [
    "青秀区",
    "兴宁区",
    "西乡塘区",
    "良庆区",
    "江南区",
    "邕宁区",
    "武鸣县",
    "隆安县",
    "马山县",
    "上林县",
    "宾阳县",
    "横县"] },


  {
    "name": "柳州市",
    "area": [
    "城中区",
    "鱼峰区",
    "柳北区",
    "柳南区",
    "柳江县",
    "柳城县",
    "鹿寨县",
    "融安县",
    "融水苗族自治县",
    "三江侗族自治县"] },


  {
    "name": "桂林市",
    "area": [
    "象山区",
    "秀峰区",
    "叠彩区",
    "七星区",
    "雁山区",
    "阳朔县",
    "临桂县",
    "灵川县",
    "全州县",
    "平乐县",
    "兴安县",
    "灌阳县",
    "荔浦县",
    "资源县",
    "永福县",
    "龙胜各族自治县",
    "恭城瑶族自治县"] },


  {
    "name": "梧州市",
    "area": [
    "万秀区",
    "蝶山区",
    "长洲区",
    "岑溪市",
    "苍梧县",
    "藤县",
    "蒙山县"] },


  {
    "name": "北海市",
    "area": [
    "海城区",
    "银海区",
    "铁山港区",
    "合浦县"] },


  {
    "name": "防城港市",
    "area": [
    "港口区",
    "防城区",
    "东兴市",
    "上思县"] },


  {
    "name": "钦州市",
    "area": [
    "钦南区",
    "钦北区",
    "灵山县",
    "浦北县"] },


  {
    "name": "贵港市",
    "area": [
    "港北区",
    "港南区",
    "覃塘区",
    "桂平市",
    "平南县"] },


  {
    "name": "玉林市",
    "area": [
    "玉州区",
    "北流市",
    "容县",
    "陆川县",
    "博白县",
    "兴业县"] },


  {
    "name": "百色市",
    "area": [
    "右江区",
    "凌云县",
    "平果县",
    "西林县",
    "乐业县",
    "德保县",
    "田林县",
    "田阳县",
    "靖西县",
    "田东县",
    "那坡县",
    "隆林各族自治县"] },


  {
    "name": "贺州市",
    "area": [
    "八步区",
    "钟山县",
    "昭平县",
    "富川瑶族自治县"] },


  {
    "name": "河池市",
    "area": [
    "金城江区",
    "宜州市",
    "天峨县",
    "凤山县",
    "南丹县",
    "东兰县",
    "都安瑶族自治县",
    "罗城仫佬族自治县",
    "巴马瑶族自治县",
    "环江毛南族自治县",
    "大化瑶族自治县"] },


  {
    "name": "来宾市",
    "area": [
    "兴宾区",
    "合山市",
    "象州县",
    "武宣县",
    "忻城县",
    "金秀瑶族自治县"] },


  {
    "name": "崇左市",
    "area": [
    "江州区",
    "凭祥市",
    "宁明县",
    "扶绥县",
    "龙州县",
    "大新县",
    "天等县"] }] },




{
  "name": "海南省",
  "city": [
  {
    "name": "海口市",
    "area": [
    "龙华区",
    "秀英区",
    "琼山区",
    "美兰区"] },


  {
    "name": "三亚市",
    "area": [
    "三亚市"] },


  {
    "name": "五指山市",
    "area": [
    "五指山"] },


  {
    "name": "琼海市",
    "area": [
    "琼海"] },


  {
    "name": "儋州市",
    "area": [
    "儋州"] },


  {
    "name": "文昌市",
    "area": [
    "文昌"] },


  {
    "name": "万宁市",
    "area": [
    "万宁"] },


  {
    "name": "东方市",
    "area": [
    "东方"] },


  {
    "name": "澄迈县",
    "area": [
    "澄迈县"] },


  {
    "name": "定安县",
    "area": [
    "定安县"] },


  {
    "name": "屯昌县",
    "area": [
    "屯昌县"] },


  {
    "name": "临高县",
    "area": [
    "临高县"] },


  {
    "name": "白沙黎族自治县",
    "area": [
    "白沙黎族自治县"] },


  {
    "name": "昌江黎族自治县",
    "area": [
    "昌江黎族自治县"] },


  {
    "name": "乐东黎族自治县",
    "area": [
    "乐东黎族自治县"] },


  {
    "name": "陵水黎族自治县",
    "area": [
    "陵水黎族自治县"] },


  {
    "name": "保亭黎族苗族自治县",
    "area": [
    "保亭黎族苗族自治县"] },


  {
    "name": "琼中黎族苗族自治县",
    "area": [
    "琼中黎族苗族自治县"] }] },




{
  "name": "重庆市",
  "city": [
  {
    "name": "重庆市",
    "area": [
    "渝中区",
    "大渡口区",
    "江北区",
    "南岸区",
    "北碚区",
    "渝北区",
    "巴南区",
    "长寿区",
    "双桥区",
    "沙坪坝区",
    "万盛区",
    "万州区",
    "涪陵区",
    "黔江区",
    "永川区",
    "合川区",
    "江津区",
    "九龙坡区",
    "南川区",
    "綦江县",
    "潼南县",
    "荣昌县",
    "璧山县",
    "大足县",
    "铜梁县",
    "梁平县",
    "开县",
    "忠县",
    "城口县",
    "垫江县",
    "武隆县",
    "丰都县",
    "奉节县",
    "云阳县",
    "巫溪县",
    "巫山县",
    "石柱土家族自治县",
    "秀山土家族苗族自治县",
    "酉阳土家族苗族自治县",
    "彭水苗族土家族自治县"] }] },




{
  "name": "四川省",
  "city": [
  {
    "name": "成都市",
    "area": [
    "青羊区",
    "锦江区",
    "金牛区",
    "武侯区",
    "成华区",
    "龙泉驿区",
    "青白江区",
    "新都区",
    "温江区",
    "都江堰市",
    "彭州市",
    "邛崃市",
    "崇州市",
    "金堂县",
    "郫县",
    "新津县",
    "双流县",
    "蒲江县",
    "大邑县"] },


  {
    "name": "自贡市",
    "area": [
    "大安区",
    "自流井区",
    "贡井区",
    "沿滩区",
    "荣县",
    "富顺县"] },


  {
    "name": "攀枝花市",
    "area": [
    "仁和区",
    "米易县",
    "盐边县",
    "东区",
    "西区"] },


  {
    "name": "泸州市",
    "area": [
    "江阳区",
    "纳溪区",
    "龙马潭区",
    "泸县",
    "合江县",
    "叙永县",
    "古蔺县"] },


  {
    "name": "德阳市",
    "area": [
    "旌阳区",
    "广汉市",
    "什邡市",
    "绵竹市",
    "罗江县",
    "中江县"] },


  {
    "name": "绵阳市",
    "area": [
    "涪城区",
    "游仙区",
    "江油市",
    "盐亭县",
    "三台县",
    "平武县",
    "安县",
    "梓潼县",
    "北川羌族自治县"] },


  {
    "name": "广元市",
    "area": [
    "元坝区",
    "朝天区",
    "青川县",
    "旺苍县",
    "剑阁县",
    "苍溪县",
    "市中区"] },


  {
    "name": "遂宁市",
    "area": [
    "船山区",
    "安居区",
    "射洪县",
    "蓬溪县",
    "大英县"] },


  {
    "name": "内江市",
    "area": [
    "市中区",
    "东兴区",
    "资中县",
    "隆昌县",
    "威远县"] },


  {
    "name": "乐山市",
    "area": [
    "市中区",
    "五通桥区",
    "沙湾区",
    "金口河区",
    "峨眉山市",
    "夹江县",
    "井研县",
    "犍为县",
    "沐川县",
    "马边彝族自治县",
    "峨边彝族自治县"] },


  {
    "name": "南充",
    "area": [
    "顺庆区",
    "高坪区",
    "嘉陵区",
    "阆中市",
    "营山县",
    "蓬安县",
    "仪陇县",
    "南部县",
    "西充县"] },


  {
    "name": "眉山市",
    "area": [
    "东坡区",
    "仁寿县",
    "彭山县",
    "洪雅县",
    "丹棱县",
    "青神县"] },


  {
    "name": "宜宾市",
    "area": [
    "翠屏区",
    "宜宾县",
    "兴文县",
    "南溪县",
    "珙县",
    "长宁县",
    "高县",
    "江安县",
    "筠连县",
    "屏山县"] },


  {
    "name": "广安市",
    "area": [
    "广安区",
    "华蓥市",
    "岳池县",
    "邻水县",
    "武胜县"] },


  {
    "name": "达州市",
    "area": [
    "通川区",
    "万源市",
    "达县",
    "渠县",
    "宣汉县",
    "开江县",
    "大竹县"] },


  {
    "name": "雅安市",
    "area": [
    "雨城区",
    "芦山县",
    "石棉县",
    "名山县",
    "天全县",
    "荥经县",
    "宝兴县",
    "汉源县"] },


  {
    "name": "巴中市",
    "area": [
    "巴州区",
    "南江县",
    "平昌县",
    "通江县"] },


  {
    "name": "资阳市",
    "area": [
    "雁江区",
    "简阳市",
    "安岳县",
    "乐至县"] },


  {
    "name": "阿坝藏族羌族自治州",
    "area": [
    "马尔康县",
    "九寨沟县",
    "红原县",
    "汶川县",
    "阿坝县",
    "理县",
    "若尔盖县",
    "小金县",
    "黑水县",
    "金川县",
    "松潘县",
    "壤塘县",
    "茂县"] },


  {
    "name": "甘孜藏族自治州",
    "area": [
    "康定县",
    "丹巴县",
    "炉霍县",
    "九龙县",
    "甘孜县",
    "雅江县",
    "新龙县",
    "道孚县",
    "白玉县",
    "理塘县",
    "德格县",
    "乡城县",
    "石渠县",
    "稻城县",
    "色达县",
    "巴塘县",
    "泸定县",
    "得荣县"] },


  {
    "name": "凉山彝族自治州",
    "area": [
    "西昌市",
    "美姑县",
    "昭觉县",
    "金阳县",
    "甘洛县",
    "布拖县",
    "雷波县",
    "普格县",
    "宁南县",
    "喜德县",
    "会东县",
    "越西县",
    "会理县",
    "盐源县",
    "德昌县",
    "冕宁县",
    "木里藏族自治县"] }] },




{
  "name": "贵州省",
  "city": [
  {
    "name": "贵阳市",
    "area": [
    "南明区",
    "云岩区",
    "花溪区",
    "乌当区",
    "白云区",
    "小河区",
    "清镇市",
    "开阳县",
    "修文县",
    "息烽县"] },


  {
    "name": "六盘水市",
    "area": [
    "钟山区",
    "水城县",
    "盘县",
    "六枝特区"] },


  {
    "name": "遵义市",
    "area": [
    "红花岗区",
    "汇川区",
    "赤水市",
    "仁怀市",
    "遵义县",
    "绥阳县",
    "桐梓县",
    "习水县",
    "凤冈县",
    "正安县",
    "余庆县",
    "湄潭县",
    "道真仡佬族苗族自治县",
    "务川仡佬族苗族自治县"] },


  {
    "name": "安顺市",
    "area": [
    "西秀区",
    "普定县",
    "平坝县",
    "镇宁布依族苗族自治县",
    "紫云苗族布依族自治县",
    "关岭布依族苗族自治县"] },


  {
    "name": "铜仁地区",
    "area": [
    "铜仁市",
    "德江县",
    "江口县",
    "思南县",
    "石阡县",
    "玉屏侗族自治县",
    "松桃苗族自治县",
    "印江土家族苗族自治县",
    "沿河土家族自治县",
    "万山特区"] },


  {
    "name": "毕节地区",
    "area": [
    "毕节市",
    "黔西县",
    "大方县",
    "织金县",
    "金沙县",
    "赫章县",
    "纳雍县",
    "威宁彝族回族苗族自治县"] },


  {
    "name": "黔西南布依族苗族自治州",
    "area": [
    "兴义市",
    "望谟县",
    "兴仁县",
    "普安县",
    "册亨县",
    "晴隆县",
    "贞丰县",
    "安龙县"] },


  {
    "name": "黔东南苗族侗族自治州",
    "area": [
    "凯里市",
    "施秉县",
    "从江县",
    "锦屏县",
    "镇远县",
    "麻江县",
    "台江县",
    "天柱县",
    "黄平县",
    "榕江县",
    "剑河县",
    "三穗县",
    "雷山县",
    "黎平县",
    "岑巩县",
    "丹寨县"] },


  {
    "name": "黔南布依族苗族自治州",
    "area": [
    "都匀市",
    "福泉市",
    "贵定县",
    "惠水县",
    "罗甸县",
    "瓮安县",
    "荔波县",
    "龙里县",
    "平塘县",
    "长顺县",
    "独山县",
    "三都水族自治县"] }] },




{
  "name": "云南省",
  "city": [
  {
    "name": "昆明市",
    "area": [
    "盘龙区",
    "五华区",
    "官渡区",
    "西山区",
    "东川区",
    "安宁市",
    "呈贡县",
    "晋宁县",
    "富民县",
    "宜良县",
    "嵩明县",
    "石林彝族自治县",
    "禄劝彝族苗族自治县",
    "寻甸回族彝族自治县"] },


  {
    "name": "曲靖市",
    "area": [
    "麒麟区",
    "宣威市",
    "马龙县",
    "沾益县",
    "富源县",
    "罗平县",
    "师宗县",
    "陆良县",
    "会泽县"] },


  {
    "name": "玉溪市",
    "area": [
    "红塔区",
    "江川县",
    "澄江县",
    "通海县",
    "华宁县",
    "易门县",
    "峨山彝族自治县",
    "新平彝族傣族自治县",
    "元江哈尼族彝族傣族自治县"] },


  {
    "name": "保山市",
    "area": [
    "隆阳区",
    "施甸县",
    "腾冲县",
    "龙陵县",
    "昌宁县"] },


  {
    "name": "昭通市",
    "area": [
    "昭阳区",
    "鲁甸县",
    "巧家县",
    "盐津县",
    "大关县",
    "永善县",
    "绥江县",
    "镇雄县",
    "彝良县",
    "威信县",
    "水富县"] },


  {
    "name": "丽江市",
    "area": [
    "古城区",
    "永胜县",
    "华坪县",
    "玉龙纳西族自治县",
    "宁蒗彝族自治县"] },


  {
    "name": "普洱市",
    "area": [
    "思茅区",
    "普洱哈尼族彝族自治县",
    "墨江哈尼族自治县",
    "景东彝族自治县",
    "景谷傣族彝族自治县",
    "镇沅彝族哈尼族拉祜族自治县",
    "江城哈尼族彝族自治县",
    "孟连傣族拉祜族佤族自治县",
    "澜沧拉祜族自治县",
    "西盟佤族自治县"] },


  {
    "name": "临沧市",
    "area": [
    "临翔区",
    "凤庆县",
    "云县",
    "永德县",
    "镇康县",
    "双江拉祜族佤族布朗族傣族自治县",
    "耿马傣族佤族自治县",
    "沧源佤族自治县"] },


  {
    "name": "德宏傣族景颇族自治州",
    "area": [
    "潞西市",
    "瑞丽市",
    "梁河县",
    "盈江县",
    "陇川县"] },


  {
    "name": "怒江傈僳族自治州",
    "area": [
    "泸水县",
    "福贡县",
    "贡山独龙族怒族自治县",
    "兰坪白族普米族自治县"] },


  {
    "name": "迪庆藏族自治州",
    "area": [
    "香格里拉县",
    "德钦县",
    "维西傈僳族自治县"] },


  {
    "name": "大理白族自治州",
    "area": [
    "大理市",
    "祥云县",
    "宾川县",
    "弥渡县",
    "永平县",
    "云龙县",
    "洱源县",
    "剑川县",
    "鹤庆县",
    "漾濞彝族自治县",
    "南涧彝族自治县",
    "巍山彝族回族自治县"] },


  {
    "name": "楚雄彝族自治州",
    "area": [
    "楚雄市",
    "双柏县",
    "牟定县",
    "南华县",
    "姚安县",
    "大姚县",
    "永仁县",
    "元谋县",
    "武定县",
    "禄丰县"] },


  {
    "name": "红河哈尼族彝族自治州",
    "area": [
    "蒙自县",
    "个旧市",
    "开远市",
    "绿春县",
    "建水县",
    "石屏县",
    "弥勒县",
    "泸西县",
    "元阳县",
    "红河县",
    "金平苗族瑶族傣族自治县",
    "河口瑶族自治县",
    "屏边苗族自治县"] },


  {
    "name": "文山壮族苗族自治州",
    "area": [
    "文山县",
    "砚山县",
    "西畴县",
    "麻栗坡县",
    "马关县",
    "丘北县",
    "广南县",
    "富宁县"] },


  {
    "name": "西双版纳傣族自治州",
    "area": [
    "景洪市",
    "勐海县",
    "勐腊县"] }] },




{
  "name": "西藏",
  "city": [
  {
    "name": "拉萨市",
    "area": [
    "城关区",
    "林周县",
    "当雄县",
    "尼木县",
    "曲水县",
    "堆龙德庆县",
    "达孜县",
    "墨竹工卡县"] },


  {
    "name": "那曲地区",
    "area": [
    "那曲县",
    "嘉黎县",
    "比如县",
    "聂荣县",
    "安多县",
    "申扎县",
    "索县",
    "班戈县",
    "巴青县",
    "尼玛县"] },


  {
    "name": "昌都地区",
    "area": [
    "昌都县",
    "江达县",
    "贡觉县",
    "类乌齐县",
    "丁青县",
    "察雅县",
    "八宿县",
    "左贡县",
    "芒康县",
    "洛隆县",
    "边坝县"] },


  {
    "name": "林芝地区",
    "area": [
    "林芝县",
    "工布江达县",
    "米林县",
    "墨脱县",
    "波密县",
    "察隅县",
    "朗县"] },


  {
    "name": "山南地区",
    "area": [
    "乃东县",
    "扎囊县",
    "贡嘎县",
    "桑日县",
    "琼结县",
    "曲松县",
    "措美县",
    "洛扎县",
    "加查县",
    "隆子县",
    "错那县",
    "浪卡子县"] },


  {
    "name": "日喀则地区",
    "area": [
    "日喀则市",
    "南木林县",
    "江孜县",
    "定日县",
    "萨迦县",
    "拉孜县",
    "昂仁县",
    "谢通门县",
    "白朗县",
    "仁布县",
    "康马县",
    "定结县",
    "仲巴县",
    "亚东县",
    "吉隆县",
    "聂拉木县",
    "萨嘎县",
    "岗巴县"] },


  {
    "name": "阿里地区",
    "area": [
    "噶尔县",
    "普兰县",
    "札达县",
    "日土县",
    "革吉县",
    "改则县",
    "措勤县"] }] },




{
  "name": "陕西省",
  "city": [
  {
    "name": "西安市",
    "area": [
    "莲湖区",
    "新城区",
    "碑林区",
    "雁塔区",
    "灞桥区",
    "未央区",
    "阎良区",
    "临潼区",
    "长安区",
    "高陵县",
    "蓝田县",
    "户县",
    "周至县"] },


  {
    "name": "铜川市",
    "area": [
    "耀州区",
    "王益区",
    "印台区",
    "宜君县"] },


  {
    "name": "宝鸡市",
    "area": [
    "渭滨区",
    "金台区",
    "陈仓区",
    "岐山县",
    "凤翔县",
    "陇县",
    "太白县",
    "麟游县",
    "扶风县",
    "千阳县",
    "眉县",
    "凤县"] },


  {
    "name": "咸阳市",
    "area": [
    "秦都区",
    "渭城区",
    "杨陵区",
    "兴平市",
    "礼泉县",
    "泾阳县",
    "永寿县",
    "三原县",
    "彬县",
    "旬邑县",
    "长武县",
    "乾县",
    "武功县",
    "淳化县"] },


  {
    "name": "渭南市",
    "area": [
    "临渭区",
    "韩城市",
    "华阴市",
    "蒲城县",
    "潼关县",
    "白水县",
    "澄城县",
    "华县",
    "合阳县",
    "富平县",
    "大荔县"] },


  {
    "name": "延安市",
    "area": [
    "宝塔区",
    "安塞县",
    "洛川县",
    "子长县",
    "黄陵县",
    "延川县",
    "富县",
    "延长县",
    "甘泉县",
    "宜川县",
    "志丹县",
    "黄龙县",
    "吴起县"] },


  {
    "name": "汉中市",
    "area": [
    "汉台区",
    "留坝县",
    "镇巴县",
    "城固县",
    "南郑县",
    "洋县",
    "宁强县",
    "佛坪县",
    "勉县",
    "西乡县",
    "略阳县"] },


  {
    "name": "榆林市",
    "area": [
    "榆阳区",
    "清涧县",
    "绥德县",
    "神木县",
    "佳县",
    "府谷县",
    "子洲县",
    "靖边县",
    "横山县",
    "米脂县",
    "吴堡县",
    "定边县"] },


  {
    "name": "安康市",
    "area": [
    "汉滨区",
    "紫阳县",
    "岚皋县",
    "旬阳县",
    "镇坪县",
    "平利县",
    "石泉县",
    "宁陕县",
    "白河县",
    "汉阴县"] },


  {
    "name": "商洛市",
    "area": [
    "商州区",
    "镇安县",
    "山阳县",
    "洛南县",
    "商南县",
    "丹凤县",
    "柞水县"] }] },




{
  "name": "甘肃省",
  "city": [
  {
    "name": "兰州市",
    "area": [
    "城关区",
    "七里河区",
    "西固区",
    "安宁区",
    "红古区",
    "永登县",
    "皋兰县",
    "榆中县"] },


  {
    "name": "嘉峪关市",
    "area": [
    "嘉峪关市"] },


  {
    "name": "金昌市",
    "area": [
    "金川区",
    "永昌县"] },


  {
    "name": "白银市",
    "area": [
    "白银区",
    "平川区",
    "靖远县",
    "会宁县",
    "景泰县"] },


  {
    "name": "天水市",
    "area": [
    "清水县",
    "秦安县",
    "甘谷县",
    "武山县",
    "张家川回族自治县",
    "北道区",
    "秦城区"] },


  {
    "name": "武威市",
    "area": [
    "凉州区",
    "民勤县",
    "古浪县",
    "天祝藏族自治县"] },


  {
    "name": "酒泉市",
    "area": [
    "肃州区",
    "玉门市",
    "敦煌市",
    "金塔县",
    "肃北蒙古族自治县",
    "阿克塞哈萨克族自治县",
    "安西县"] },


  {
    "name": "张掖市",
    "area": [
    "甘州区",
    "民乐县",
    "临泽县",
    "高台县",
    "山丹县",
    "肃南裕固族自治县"] },


  {
    "name": "庆阳市",
    "area": [
    "西峰区",
    "庆城县",
    "环县",
    "华池县",
    "合水县",
    "正宁县",
    "宁县",
    "镇原县"] },


  {
    "name": "平凉市",
    "area": [
    "崆峒区",
    "泾川县",
    "灵台县",
    "崇信县",
    "华亭县",
    "庄浪县",
    "静宁县"] },


  {
    "name": "定西市",
    "area": [
    "安定区",
    "通渭县",
    "临洮县",
    "漳县",
    "岷县",
    "渭源县",
    "陇西县"] },


  {
    "name": "陇南市",
    "area": [
    "武都区",
    "成县",
    "宕昌县",
    "康县",
    "文县",
    "西和县",
    "礼县",
    "两当县",
    "徽县"] },


  {
    "name": "临夏回族自治州",
    "area": [
    "临夏市",
    "临夏县",
    "康乐县",
    "永靖县",
    "广河县",
    "和政县",
    "东乡族自治县",
    "积石山保安族东乡族撒拉族自治县"] },


  {
    "name": "甘南藏族自治州",
    "area": [
    "合作市",
    "临潭县",
    "卓尼县",
    "舟曲县",
    "迭部县",
    "玛曲县",
    "碌曲县",
    "夏河县"] }] },




{
  "name": "青海省",
  "city": [
  {
    "name": "西宁市",
    "area": [
    "城中区",
    "城东区",
    "城西区",
    "城北区",
    "湟源县",
    "湟中县",
    "大通回族土族自治县"] },


  {
    "name": "海东地区",
    "area": [
    "平安县",
    "乐都县",
    "民和回族土族自治县",
    "互助土族自治县",
    "化隆回族自治县",
    "循化撒拉族自治县"] },


  {
    "name": "海北藏族自治州",
    "area": [
    "海晏县",
    "祁连县",
    "刚察县",
    "门源回族自治县"] },


  {
    "name": "海南藏族自治州",
    "area": [
    "共和县",
    "同德县",
    "贵德县",
    "兴海县",
    "贵南县"] },


  {
    "name": "黄南藏族自治州",
    "area": [
    "同仁县",
    "尖扎县",
    "泽库县",
    "河南蒙古族自治县"] },


  {
    "name": "果洛藏族自治州",
    "area": [
    "玛沁县",
    "班玛县",
    "甘德县",
    "达日县",
    "久治县",
    "玛多县"] },


  {
    "name": "玉树藏族自治州",
    "area": [
    "玉树县",
    "杂多县",
    "称多县",
    "治多县",
    "囊谦县",
    "曲麻莱县"] },


  {
    "name": "海西蒙古族藏族自治州",
    "area": [
    "德令哈市",
    "格尔木市",
    "乌兰县",
    "都兰县",
    "天峻县"] }] },




{
  "name": "宁夏",
  "city": [
  {
    "name": "银川市",
    "area": [
    "兴庆区",
    "西夏区",
    "金凤区",
    "灵武市",
    "永宁县",
    "贺兰县"] },


  {
    "name": "石嘴山市",
    "area": [
    "大武口区",
    "惠农区",
    "平罗县"] },


  {
    "name": "吴忠市",
    "area": [
    "利通区",
    "青铜峡市",
    "盐池县",
    "同心县"] },


  {
    "name": "固原市",
    "area": [
    "原州区",
    "西吉县",
    "隆德县",
    "泾源县",
    "彭阳县"] },


  {
    "name": "中卫市",
    "area": [
    "沙坡头区",
    "中宁县",
    "海原县"] }] },




{
  "name": "新疆",
  "city": [
  {
    "name": "乌鲁木齐市",
    "area": [
    "天山区",
    "沙依巴克区",
    "新市区",
    "水磨沟区",
    "头屯河区",
    "达坂城区",
    "东山区",
    "乌鲁木齐县"] },


  {
    "name": "克拉玛依市",
    "area": [
    "克拉玛依区",
    "独山子区",
    "白碱滩区",
    "乌尔禾区"] },


  {
    "name": "吐鲁番地区",
    "area": [
    "吐鲁番市",
    "托克逊县",
    "鄯善县"] },


  {
    "name": "哈密地区",
    "area": [
    "哈密市",
    "伊吾县",
    "巴里坤哈萨克自治县"] },


  {
    "name": "和田地区",
    "area": [
    "和田市",
    "和田县",
    "洛浦县",
    "民丰县",
    "皮山县",
    "策勒县",
    "于田县",
    "墨玉县"] },


  {
    "name": "阿克苏地区",
    "area": [
    "阿克苏市",
    "温宿县",
    "沙雅县",
    "拜城县",
    "阿瓦提县",
    "库车县",
    "柯坪县",
    "新和县",
    "乌什县"] },


  {
    "name": "喀什地区",
    "area": [
    "喀什市",
    "巴楚县",
    "泽普县",
    "伽师县",
    "叶城县",
    "岳普湖县",
    "疏勒县",
    "麦盖提县",
    "英吉沙县",
    "莎车县",
    "疏附县",
    "塔什库尔干塔吉克自治县"] },


  {
    "name": "克孜勒苏柯尔克孜自治州",
    "area": [
    "阿图什市",
    "阿合奇县",
    "乌恰县",
    "阿克陶县"] },


  {
    "name": "巴音郭楞蒙古自治州",
    "area": [
    "库尔勒市",
    "和静县",
    "尉犁县",
    "和硕县",
    "且末县",
    "博湖县",
    "轮台县",
    "若羌县",
    "焉耆回族自治县"] },


  {
    "name": "昌吉回族自治州",
    "area": [
    "昌吉市",
    "阜康市",
    "奇台县",
    "玛纳斯县",
    "吉木萨尔县",
    "呼图壁县",
    "木垒哈萨克自治县",
    "米泉市"] },


  {
    "name": "博尔塔拉蒙古自治州",
    "area": [
    "博乐市",
    "精河县",
    "温泉县"] },


  {
    "name": "石河子",
    "area": [
    "石河子"] },


  {
    "name": "阿拉尔",
    "area": [
    "阿拉尔"] },


  {
    "name": "图木舒克",
    "area": [
    "图木舒克"] },


  {
    "name": "五家渠",
    "area": [
    "五家渠"] },


  {
    "name": "伊犁哈萨克自治州",
    "area": [
    "伊宁市",
    "奎屯市",
    "伊宁县",
    "特克斯县",
    "尼勒克县",
    "昭苏县",
    "新源县",
    "霍城县",
    "巩留县",
    "察布查尔锡伯自治县",
    "塔城地区",
    "阿勒泰地区"] }] },




{
  "name": "台湾省",
  "city": [
  {
    "name": "台北市",
    "area": [
    "内湖区",
    "南港区",
    "中正区",
    "万华区",
    "大同区",
    "中山区",
    "松山区",
    "大安区",
    "信义区",
    "文山区",
    "士林区",
    "北投区"] },


  {
    "name": "新北市",
    "area": [
    "板桥区",
    "汐止区",
    "新店区"] },


  {
    "name": "桃园市",
    "area": [
    "其他"] },


  {
    "name": "台中市",
    "area": [
    "其他"] },


  {
    "name": "台南市",
    "area": [
    "其他"] },


  {
    "name": "高雄市",
    "area": [
    "其他"] }] },




{
  "name": "澳门",
  "city": [
  {
    "name": "澳门",
    "area": [
    "花地玛堂区",
    "圣安多尼堂区",
    "大堂区",
    "望德堂区",
    "风顺堂区",
    "嘉模堂区",
    "圣方济各堂区",
    "路凼"] }] },




{
  "name": "香港",
  "city": [
  {
    "name": "香港",
    "area": [
    "深水埗区",
    "油尖旺区",
    "九龙城区",
    "黄大仙区",
    "观塘区",
    "北区",
    "大埔区",
    "沙田区",
    "西贡区",
    "元朗区",
    "屯门区",
    "荃湾区",
    "葵青区",
    "离岛区",
    "中西区",
    "湾仔区",
    "东区",
    "南区"] }] }];exports.default = _default;

/***/ }),

/***/ 13:
/*!*************************************!*\
  !*** E:/ceshi/lvshi/common/http.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var baseUrl = '';
var WebSocket_url = 'www.xhlvshi.com';
if (true) {

  baseUrl = '/api';

  baseUrl = 'https://www.xhlvshi.com';


} else {}

function request(url, method, data) {var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // uni.showLoading({
  //   title: '加载中...'
  // })
  return new Promise(function (resolve, reject) {
    uni.request({
      url: baseUrl + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded' ,
		'Token':swan.getStorageSync("token")
		},

      success: function success(resp) {
        // uni.hideLoading();
        if (resp.data.code == 0) {
          resolve(resp.data);
        } else
        if (resp.data.message == '请先登录' || resp.data.msg == '请先登录') {
          uni.navigateTo({
            url: 'login?type=back' });

        } else
        {
          uni.showToast({
            title: resp.data.message,
            duration: 2000,
            icon: 'none' });

          resolve(resp.data);
        }
      },
      fail: function fail(resp) {
        // uni.hideLoading();
        reject(resp);
      },
      complete: function complete(end) {
        uni.stopPullDownRefresh();

      } });

  });
}


// 封装get方法
function get(obj) {
  return request(obj.url, 'GET', obj.data);
}
// 封装post方法
function post(obj) {
  return request(obj.url, 'POST', obj.data);
}


function jspost(URL) {var PARAMS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
















}var _default =

{
  request: request,
  get: get,
  post: post,
  baseUrl: baseUrl,
  WebSocket_url: WebSocket_url,
  jspost: jspost };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"小虎律师法律咨询","VUE_APP_PLATFORM":"mp-baidu","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"小虎律师法律咨询","VUE_APP_PLATFORM":"mp-baidu","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"小虎律师法律咨询","VUE_APP_PLATFORM":"mp-baidu","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"小虎律师法律咨询","VUE_APP_PLATFORM":"mp-baidu","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 284:
/*!*************************************!*\
  !*** E:/ceshi/lvshi/common/copy.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT ÂŠ Zeno Rocha
 */
!function (t, e) { true ? module.exports = e() : undefined;}(this, function () {return o = {}, r.m = n = [function (t, e) {t.exports = function (t) {var e;if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {var n = t.hasAttribute("readonly");n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;} else {t.hasAttribute("contenteditable") && t.focus();var o = window.getSelection(),r = document.createRange();r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();}return e;};}, function (t, e) {function n() {}n.prototype = { on: function on(t, e, n) {var o = this.e || (this.e = {});return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;}, once: function once(t, e, n) {var o = this;function r() {o.off(t, r), e.apply(n, arguments);}return r._ = e, this.on(t, r, n);}, emit: function emit(t) {for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) {n[o].fn.apply(n[o].ctx, e);}return this;}, off: function off(t, e) {var n = this.e || (this.e = {}),o = n[t],r = [];if (o && e) for (var i = 0, a = o.length; i < a; i++) {o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);}return r.length ? n[t] = r : delete n[t], this;} }, t.exports = n, t.exports.TinyEmitter = n;}, function (t, e, n) {var d = n(3),h = n(4);t.exports = function (t, e, n) {if (!t && !e && !n) throw new Error("Missing required arguments");if (!d.string(e)) throw new TypeError("Second argument must be a String");if (!d.fn(n)) throw new TypeError("Third argument must be a Function");if (d.node(t)) return s = e, f = n, (u = t).addEventListener(s, f), { destroy: function destroy() {u.removeEventListener(s, f);} };if (d.nodeList(t)) return a = t, c = e, l = n, Array.prototype.forEach.call(a, function (t) {t.addEventListener(c, l);}), { destroy: function destroy() {Array.prototype.forEach.call(a, function (t) {t.removeEventListener(c, l);});} };if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o, r, i, a, c, l, u, s, f;};}, function (t, n) {n.node = function (t) {return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;}, n.nodeList = function (t) {var e = Object.prototype.toString.call(t);return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));}, n.string = function (t) {return "string" == typeof t || t instanceof String;}, n.fn = function (t) {return "[object Function]" === Object.prototype.toString.call(t);};}, function (t, e, n) {var a = n(5);function i(t, e, n, o, r) {var i = function (e, n, t, o) {return function (t) {t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t);};}.apply(this, arguments);return t.addEventListener(n, i, r), { destroy: function destroy() {t.removeEventListener(n, i, r);} };}t.exports = function (t, e, n, o, r) {return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {return i(t, e, n, o, r);}));};}, function (t, e) {if ("undefined" != typeof Element && !Element.prototype.matches) {var n = Element.prototype;n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;}t.exports = function (t, e) {for (; t && 9 !== t.nodeType;) {if ("function" == typeof t.matches && t.matches(e)) return t;t = t.parentNode;}};}, function (t, e, n) {"use strict";n.r(e);var o = n(0),r = n.n(o),i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;};function a(t, e) {for (var n = 0; n < e.length; n++) {var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);}}function c(t) {!function (t, e) {if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");}(this, c), this.resolveOptions(t), this.initSelection();}var l = (function (t, e, n) {return e && a(t.prototype, e), n && a(t, n), t;}(c, [{ key: "resolveOptions", value: function value(t) {var e = 0 < arguments.length && void 0 !== t ? t : {};this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = "";} }, { key: "initSelection", value: function value() {this.text ? this.selectFake() : this.target && this.selectTarget();} }, { key: "selectFake", value: function value() {var t = this,e = "rtl" == document.documentElement.getAttribute("dir");this.removeFake(), this.fakeHandlerCallback = function () {return t.removeFake();}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";var n = window.pageYOffset || document.documentElement.scrollTop;this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = r()(this.fakeElem), this.copyText();} }, { key: "removeFake", value: function value() {this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);} }, { key: "selectTarget", value: function value() {this.selectedText = r()(this.target), this.copyText();} }, { key: "copyText", value: function value() {var e = void 0;try {e = document.execCommand(this.action);} catch (t) {e = !1;}this.handleResult(e);} }, { key: "handleResult", value: function value(t) {this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });} }, { key: "clearSelection", value: function value() {this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();} }, { key: "destroy", value: function value() {this.removeFake();} }, { key: "action", set: function set(t) {var e = 0 < arguments.length && void 0 !== t ? t : "copy";if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');}, get: function get() {return this._action;} }, { key: "target", set: function set(t) {if (void 0 !== t) {if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target = t;}}, get: function get() {return this._target;} }]), c),u = n(1),s = n.n(u),f = n(2),d = n.n(f),h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;},p = function p(t, e, n) {return e && y(t.prototype, e), n && y(t, n), t;};function y(t, e) {for (var n = 0; n < e.length; n++) {var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);}}var m = (function (t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);}(v, s.a), p(v, [{ key: "resolveOptions", value: function value(t) {var e = 0 < arguments.length && void 0 !== t ? t : {};this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === h(e.container) ? e.container : document.body;} }, { key: "listenClick", value: function value(t) {var e = this;this.listener = d()(t, "click", function (t) {return e.onClick(t);});} }, { key: "onClick", value: function value(t) {var e = t.delegateTarget || t.currentTarget;this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this });} }, { key: "defaultAction", value: function value(t) {return b("action", t);} }, { key: "defaultTarget", value: function value(t) {var e = b("target", t);if (e) return document.querySelector(e);} }, { key: "defaultText", value: function value(t) {return b("text", t);} }, { key: "destroy", value: function value() {this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);} }], [{ key: "isSupported", value: function value(t) {var e = 0 < arguments.length && void 0 !== t ? t : ["copy", "cut"],n = "string" == typeof e ? [e] : e,o = !!document.queryCommandSupported;return n.forEach(function (t) {o = o && !!document.queryCommandSupported(t);}), o;} }]), v);function v(t, e) {!function (t, e) {if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");}(this, v);var n = function (t, e) {if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != typeof e && "function" != typeof e ? t : e;}(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e), n.listenClick(t), n;}function b(t, e) {var n = "data-clipboard-" + t;if (e.hasAttribute(n)) return e.getAttribute(n);}e.default = m;}], r.c = o, r.d = function (t, e, n) {r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });}, r.r = function (t) {"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });}, r.t = function (e, t) {if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) {r.d(n, o, function (t) {return e[t];}.bind(null, o));}return n;}, r.n = function (t) {var e = t && t.__esModule ? function () {return t.default;} : function () {return t;};return r.d(e, "a", e), e;}, r.o = function (t, e) {return Object.prototype.hasOwnProperty.call(t, e);}, r.p = "", r(r.s = 6).default;function r(t) {if (o[t]) return o[t].exports;var e = o[t] = { i: t, l: !1, exports: {} };return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;}var n, o;});

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** E:/ceshi/lvshi/pages.json ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 421:
/*!******************************************************!*\
  !*** E:/ceshi/lvshi/components/u-charts/u-charts.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {/*
 * uCharts v1.8.5.20190815
 * uni-app平台高性能跨全端图表，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）
 * Copyright (c) 2019 QIUN秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 *
 * uCharts官方网站
 * https://www.uCharts.cn
 *
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 *
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 *
 */



var config = {
  yAxisWidth: 15,
  yAxisSplit: 5,
  xAxisHeight: 15,
  xAxisLineHeight: 15,
  legendHeight: 15,
  yAxisTitleWidth: 15,
  padding: [10, 10, 10, 10],
  pixelRatio: 1,
  rotate: false,
  columePadding: 3,
  fontSize: 13,
  //dataPointShape: ['diamond', 'circle', 'triangle', 'rect'],
  dataPointShape: ['circle', 'circle', 'circle', 'circle'],
  colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'],
  pieChartLinePadding: 15,
  pieChartTextPadding: 5,
  xAxisTextPadding: 3,
  titleColor: '#333333',
  titleFontSize: 20,
  subtitleColor: '#999999',
  subtitleFontSize: 15,
  toolTipPadding: 3,
  toolTipBackground: '#000000',
  toolTipOpacity: 0.7,
  toolTipLineHeight: 20,
  radarGridCount: 3,
  radarLabelTextMargin: 15,
  gaugeLabelTextMargin: 15 };


var assign;
if (Object.assign) {
  assign = Object.assign;
} else {
  // 使用polyfill
  assign = function assign(target, varArgs) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];
      if (nextSource != null) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

var util = {
  toFixed: function toFixed(num, limit) {
    limit = limit || 2;
    if (this.isFloat(num)) {
      num = num.toFixed(limit);
    }
    return num;
  },
  isFloat: function isFloat(num) {
    return num % 1 !== 0;
  },
  approximatelyEqual: function approximatelyEqual(num1, num2) {
    return Math.abs(num1 - num2) < 1e-10;
  },
  isSameSign: function isSameSign(num1, num2) {
    return Math.abs(num1) === num1 && Math.abs(num2) === num2 || Math.abs(num1) !== num1 && Math.abs(num2) !== num2;
  },
  isSameXCoordinateArea: function isSameXCoordinateArea(p1, p2) {
    return this.isSameSign(p1.x, p2.x);
  },
  isCollision: function isCollision(obj1, obj2) {
    obj1.end = {};
    obj1.end.x = obj1.start.x + obj1.width;
    obj1.end.y = obj1.start.y - obj1.height;
    obj2.end = {};
    obj2.end.x = obj2.start.x + obj2.width;
    obj2.end.y = obj2.start.y - obj2.height;
    var flag = obj2.start.x > obj1.end.x || obj2.end.x < obj1.start.x || obj2.end.y > obj1.start.y || obj2.start.y < obj1.end.y;
    return !flag;
  } };


//兼容H5点击事件
function getH5Offset(e) {
  e.mp = {
    changedTouches: [] };

  e.mp.changedTouches.push({
    x: e.offsetX,
    y: e.offsetY });

  return e;
}

// hex 转 rgba
function hexToRgb(hexValue, opc) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opc + ')';
}

function findRange(num, type, limit) {
  if (isNaN(num)) {
    throw new Error('[uCharts] unvalid series data!');
  }
  limit = limit || 10;
  type = type ? type : 'upper';
  var multiple = 1;
  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }
  if (type === 'upper') {
    num = Math.ceil(num * multiple);
  } else {
    num = Math.floor(num * multiple);
  }
  while (num % limit !== 0) {
    if (type === 'upper') {
      num++;
    } else {
      num--;
    }
  }
  return num / multiple;
}

function calCandleMA(dayArr, nameArr, colorArr, kdata) {
  var seriesTemp = [];
  for (var k = 0; k < dayArr.length; k++) {
    var seriesItem = {
      data: [],
      name: nameArr[k],
      color: colorArr[k] };

    for (var i = 0, len = kdata.length; i < len; i++) {
      if (i < dayArr[k]) {
        seriesItem.data.push(null);
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayArr[k]; j++) {
        sum += kdata[i - j][1];
      }
      seriesItem.data.push(+(sum / dayArr[k]).toFixed(3));
    }
    seriesTemp.push(seriesItem);
  }
  return seriesTemp;
}

function calValidDistance(distance, chartData, config, opts) {
  var dataChartAreaWidth = opts.width - opts.area[1] - opts.area[3];
  var dataChartWidth = chartData.eachSpacing * (opts.chartData.xAxisData.xAxisPoints.length - 1);
  var validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth;
  }
  return validDistance;
}

function isInAngleRange(angle, startAngle, endAngle) {
  function adjust(angle) {
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }
    return angle;
  }
  angle = adjust(angle);
  startAngle = adjust(startAngle);
  endAngle = adjust(endAngle);
  if (startAngle > endAngle) {
    endAngle += 2 * Math.PI;
    if (angle < startAngle) {
      angle += 2 * Math.PI;
    }
  }
  return angle >= startAngle && angle <= endAngle;
}

function calRotateTranslate(x, y, h) {
  var xv = x;
  var yv = h - y;
  var transX = xv + (h - yv - xv) / Math.sqrt(2);
  transX *= -1;
  var transY = (h - yv) * (Math.sqrt(2) - 1) - (h - yv - xv) / Math.sqrt(2);
  return {
    transX: transX,
    transY: transY };

}

function createCurveControlPoints(points, i) {

  function isNotMiddlePoint(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y,
      points[
      i + 1].y);
    } else {
      return false;
    }
  }
  var a = 0.2;
  var b = 0.2;
  var pAx = null;
  var pAy = null;
  var pBx = null;
  var pBy = null;
  if (i < 1) {
    pAx = points[0].x + (points[1].x - points[0].x) * a;
    pAy = points[0].y + (points[1].y - points[0].y) * a;
  } else {
    pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
    pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
  }

  if (i > points.length - 3) {
    var last = points.length - 1;
    pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
    pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
  } else {
    pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
    pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
  }
  if (isNotMiddlePoint(points, i + 1)) {
    pBy = points[i + 1].y;
  }
  if (isNotMiddlePoint(points, i)) {
    pAy = points[i].y;
  }
  return {
    ctrA: {
      x: pAx,
      y: pAy },

    ctrB: {
      x: pBx,
      y: pBy } };


}

function convertCoordinateOrigin(x, y, center) {
  return {
    x: center.x + x,
    y: center.y - y };

}

function avoidCollision(obj, target) {
  if (target) {
    // is collision test
    while (util.isCollision(obj, target)) {
      if (obj.start.x > 0) {
        obj.start.y--;
      } else if (obj.start.x < 0) {
        obj.start.y++;
      } else {
        if (obj.start.y > 0) {
          obj.start.y++;
        } else {
          obj.start.y--;
        }
      }
    }
  }
  return obj;
}

function fillSeries(series, opts, config) {
  var index = 0;
  return series.map(function (item) {
    if (!item.color) {
      item.color = config.colors[index];
      index = (index + 1) % config.colors.length;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (typeof item.show == "undefined") {
      item.show = true;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (!item.pointShape) {
      item.pointShape = "circle";
    }
    if (!item.legendShape) {
      switch (item.type) {
        case 'line':
          item.legendShape = "line";
          break;
        case 'column':
          item.legendShape = "rect";
          break;
        case 'area':
          item.legendShape = "triangle";
          break;
        default:
          item.legendShape = "circle";}

    }
    return item;
  });
}

function getDataRange(minData, maxData) {
  var limit = 0;
  var range = maxData - minData;
  if (range >= 10000) {
    limit = 1000;
  } else if (range >= 1000) {
    limit = 100;
  } else if (range >= 100) {
    limit = 10;
  } else if (range >= 10) {
    limit = 5;
  } else if (range >= 1) {
    limit = 1;
  } else if (range >= 0.1) {
    limit = 0.1;
  } else if (range >= 0.01) {
    limit = 0.01;
  } else if (range >= 0.001) {
    limit = 0.001;
  } else if (range >= 0.0001) {
    limit = 0.0001;
  } else if (range >= 0.00001) {
    limit = 0.00001;
  } else {
    limit = 0.000001;
  }
  return {
    minRange: findRange(minData, 'lower', limit),
    maxRange: findRange(maxData, 'upper', limit) };

}

function measureText(text) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.fontSize;
  text = String(text);
  var text = text.split('');
  var width = 0;
  for (var i = 0; i < text.length; i++) {
    var item = text[i];
    if (/[a-zA-Z]/.test(item)) {
      width += 7;
    } else if (/[0-9]/.test(item)) {
      width += 5.5;
    } else if (/\./.test(item)) {
      width += 2.7;
    } else if (/-/.test(item)) {
      width += 3.25;
    } else if (/[\u4e00-\u9fa5]/.test(item)) {
      width += 10;
    } else if (/\(|\)/.test(item)) {
      width += 3.73;
    } else if (/\s/.test(item)) {
      width += 2.5;
    } else if (/%/.test(item)) {
      width += 8;
    } else {
      width += 10;
    }
  }
  return width * fontSize / 10;
}

function dataCombine(series) {
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data);
  }, []);
}

function dataCombineStack(series, len) {
  var sum = new Array(len);
  for (var j = 0; j < sum.length; j++) {
    sum[j] = 0;
  }
  for (var i = 0; i < series.length; i++) {
    for (var j = 0; j < sum.length; j++) {
      sum[j] += series[i].data[j];
    }
  }
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data).concat(sum);
  }, []);
}

function getTouches(touches, opts, e) {
  var x, y;
  if (touches.clientX) {
    if (opts.rotate) {
      y = opts.height - touches.clientX * opts.pixelRatio;
      x = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    } else {
      x = touches.clientX * opts.pixelRatio;
      y = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    }
  } else {
    if (opts.rotate) {
      y = opts.height - touches.x * opts.pixelRatio;
      x = touches.y * opts.pixelRatio;
    } else {
      x = touches.x * opts.pixelRatio;
      y = touches.y * opts.pixelRatio;
    }
  }
  return {
    x: x,
    y: y };

}

function getSeriesDataItem(series, index) {
  var data = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    if (item.data[index] !== null && typeof item.data[index] !== 'undefined' && item.show) {
      var seriesItem = {};
      seriesItem.color = item.color;
      seriesItem.type = item.type;
      seriesItem.style = item.style;
      seriesItem.pointShape = item.pointShape;
      seriesItem.disableLegend = item.disableLegend;
      seriesItem.name = item.name;
      seriesItem.show = item.show;
      seriesItem.data = item.format ? item.format(item.data[index]) : item.data[index];
      data.push(seriesItem);
    }
  }
  return data;
}

function getMaxTextListLength(list) {
  var lengthList = list.map(function (item) {
    return measureText(item);
  });
  return Math.max.apply(null, lengthList);
}

function getRadarCoordinateSeries(length) {
  var eachAngle = 2 * Math.PI / length;
  var CoordinateSeries = [];
  for (var i = 0; i < length; i++) {
    CoordinateSeries.push(eachAngle * i);
  }

  return CoordinateSeries.map(function (item) {
    return -1 * item + Math.PI / 2;
  });
}

function getToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color };

  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i = 0; _i < validCalPoints.length; _i++) {
    var item = validCalPoints[_i];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getMixToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color,
      disableLegend: item.disableLegend ? true : false };

  });
  textList = textList.filter(function (item) {
    if (item.disableLegend !== true) {
      return item;
    }
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i2 = 0; _i2 < validCalPoints.length; _i2++) {
    var item = validCalPoints[_i2];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getCandleToolTipData(series, seriesData, calPoints, index, categories, extra) {
  var option = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var upColor = extra.color.upFill;
  var downColor = extra.color.downFill;
  //颜色顺序为开盘，收盘，最低，最高
  var color = [upColor, upColor, downColor, upColor];
  var textList = [];
  var text0 = {
    text: categories[index],
    color: null };

  textList.push(text0);
  seriesData.map(function (item) {
    if (index == 0 && item.data[1] - item.data[0] < 0) {
      color[1] = downColor;
    } else {
      if (item.data[0] < series[index - 1][1]) {
        color[0] = downColor;
      }
      if (item.data[1] < item.data[0]) {
        color[1] = downColor;
      }
      if (item.data[2] > series[index - 1][1]) {
        color[2] = upColor;
      }
      if (item.data[3] < series[index - 1][1]) {
        color[3] = downColor;
      }
    }
    var text1 = {
      text: '开盘：' + item.data[0],
      color: color[0] };

    var text2 = {
      text: '收盘：' + item.data[1],
      color: color[1] };

    var text3 = {
      text: '最低：' + item.data[2],
      color: color[2] };

    var text4 = {
      text: '最高：' + item.data[3],
      color: color[3] };

    textList.push(text1, text2, text3, text4);
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  offset.x = Math.round(validCalPoints[0][0].x);
  return {
    textList: textList,
    offset: offset };

}

function filterSeries(series) {
  var tempSeries = [];
  for (var i = 0; i < series.length; i++) {
    if (series[i].show == true) {
      tempSeries.push(series[i]);
    }
  }
  return tempSeries;
}

function findCurrentIndex(currentPoints, xAxisPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var currentIndex = -1;
  var spacing = 0;
  if ((opts.type == 'line' || opts.type == 'area') && opts.xAxis.boundaryGap == 'justify') {
    spacing = opts.chartData.eachSpacing / 2;
  }
  if (isInExactChartArea(currentPoints, opts, config)) {
    xAxisPoints.forEach(function (item, index) {
      if (currentPoints.x + offset + spacing > item) {
        currentIndex = index;
      }
    });
  }
  return currentIndex;
}

function findLegendIndex(currentPoints, legendData, opts) {
  var currentIndex = -1;
  if (isInExactLegendArea(currentPoints, legendData.area)) {
    var points = legendData.points;
    var index = -1;
    for (var i = 0, len = points.length; i < len; i++) {
      var item = points[i];
      for (var j = 0; j < item.length; j++) {
        index += 1;
        var area = item[j]['area'];
        if (currentPoints.x > area[0] && currentPoints.x < area[2] && currentPoints.y > area[1] && currentPoints.y < area[3]) {
          currentIndex = index;
          break;
        }
      }
    }
    return currentIndex;
  }
  return currentIndex;
}

function isInExactLegendArea(currentPoints, area) {
  return currentPoints.x > area.start.x && currentPoints.x < area.end.x && currentPoints.y > area.start.y &&
  currentPoints.y < area.end.y;
}

function isInExactChartArea(currentPoints, opts, config) {
  return currentPoints.x < opts.width - opts.area[1] + 10 && currentPoints.x > opts.area[3] - 10 && currentPoints.y > opts.area[0] && currentPoints.y < opts.height - opts.area[2];
}

function findRadarChartCurrentIndex(currentPoints, radarData, count) {
  var eachAngleArea = 2 * Math.PI / count;
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, radarData.center, radarData.radius)) {
    var fixAngle = function fixAngle(angle) {
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      return angle;
    };

    var angle = Math.atan2(radarData.center.y - currentPoints.y, currentPoints.x - radarData.center.x);
    angle = -1 * angle;
    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    var angleList = radarData.angleList.map(function (item) {
      item = fixAngle(-1 * item);

      return item;
    });

    angleList.forEach(function (item, index) {
      var rangeStart = fixAngle(item - eachAngleArea / 2);
      var rangeEnd = fixAngle(item + eachAngleArea / 2);
      if (rangeEnd < rangeStart) {
        rangeEnd += 2 * Math.PI;
      }
      if (angle >= rangeStart && angle <= rangeEnd || angle + 2 * Math.PI >= rangeStart && angle + 2 * Math.PI <=
      rangeEnd) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function findFunnelChartCurrentIndex(currentPoints, funnelData) {
  var currentIndex = -1;
  for (var i = 0, len = funnelData.series.length; i < len; i++) {
    var item = funnelData.series[i];
    if (currentPoints.x > item.funnelArea[0] && currentPoints.x < item.funnelArea[2] && currentPoints.y > item.funnelArea[1] && currentPoints.y < item.funnelArea[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findWordChartCurrentIndex(currentPoints, wordData) {
  var currentIndex = -1;
  for (var i = 0, len = wordData.length; i < len; i++) {
    var item = wordData[i];
    if (currentPoints.x > item.area[0] && currentPoints.x < item.area[2] && currentPoints.y > item.area[1] && currentPoints.y < item.area[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findMapChartCurrentIndex(currentPoints, opts) {
  var currentIndex = -1;
  var cData = opts.chartData.mapData;
  var data = opts.series;
  var tmp = pointToCoordinate(currentPoints.y, currentPoints.x, cData.bounds, cData.scale, cData.xoffset, cData.yoffset);
  var poi = [tmp.x, tmp.y];
  for (var i = 0, len = data.length; i < len; i++) {
    var item = data[i].geometry.coordinates;
    if (isPoiWithinPoly(poi, item)) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findPieChartCurrentIndex(currentPoints, pieData) {
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    for (var i = 0, len = pieData.series.length; i < len; i++) {
      var item = pieData.series[i];
      if (isInAngleRange(angle, item._start_, item._start_ + item._proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }

  return currentIndex;
}

function isInExactPieChartArea(currentPoints, center, radius) {
  return Math.pow(currentPoints.x - center.x, 2) + Math.pow(currentPoints.y - center.y, 2) <= Math.pow(radius, 2);
}

function splitPoints(points) {
  var newPoints = [];
  var items = [];
  points.forEach(function (item, index) {
    if (item !== null) {
      items.push(item);
    } else {
      if (items.length) {
        newPoints.push(items);
      }
      items = [];
    }
  });
  if (items.length) {
    newPoints.push(items);
  }

  return newPoints;
}

function calLegendData(series, opts, config, chartData) {
  var legendData = {
    area: {
      start: {
        x: 0,
        y: 0 },

      end: {
        x: 0,
        y: 0 },

      width: 0,
      height: 0,
      wholeWidth: 0,
      wholeHeight: 0 },

    points: [],
    widthArr: [],
    heightArr: [] };

  if (opts.legend.show === false) {
    chartData.legendData = legendData;
    return legendData;
  }

  var padding = opts.legend.padding;
  var margin = opts.legend.margin;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);
  if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
    var legendList = [];
    var widthCount = 0;
    var widthCountArr = [];
    var currentRow = [];
    for (var i = 0; i < series.length; i++) {
      var item = series[i];
      var itemWidth = shapeWidth + shapeRight + measureText(item.name || 'undefined', fontSize) + opts.legend.itemGap;
      if (widthCount + itemWidth > opts.width - opts.padding[1] - opts.padding[3]) {
        legendList.push(currentRow);
        widthCountArr.push(widthCount - opts.legend.itemGap);
        widthCount = itemWidth;
        currentRow = [item];
      } else {
        widthCount += itemWidth;
        currentRow.push(item);
      }
    }
    if (currentRow.length) {
      legendList.push(currentRow);
      widthCountArr.push(widthCount - opts.legend.itemGap);
      legendData.widthArr = widthCountArr;
      var legendWidth = Math.max.apply(null, widthCountArr);
      switch (opts.legend.float) {
        case 'left':
          legendData.area.start.x = opts.padding[3];
          legendData.area.end.x = opts.padding[3] + 2 * padding;
          break;
        case 'right':
          legendData.area.start.x = opts.width - opts.padding[1] - legendWidth - 2 * padding;
          legendData.area.end.x = opts.width - opts.padding[1];
          break;
        default:
          legendData.area.start.x = (opts.width - legendWidth) / 2 - padding;
          legendData.area.end.x = (opts.width + legendWidth) / 2 + padding;}

      legendData.area.width = legendWidth + 2 * padding;
      legendData.area.wholeWidth = legendWidth + 2 * padding;
      legendData.area.height = legendList.length * lineHeight + 2 * padding;
      legendData.area.wholeHeight = legendList.length * lineHeight + 2 * padding + 2 * margin;
      legendData.points = legendList;
    }
  } else {
    var len = series.length;
    var maxHeight = opts.height - opts.padding[0] - opts.padding[2] - 2 * margin - 2 * padding;
    var maxLength = Math.min(Math.floor(maxHeight / lineHeight), len);
    legendData.area.height = maxLength * lineHeight + padding * 2;
    legendData.area.wholeHeight = maxLength * lineHeight + padding * 2;
    switch (opts.legend.float) {
      case 'top':
        legendData.area.start.y = opts.padding[0] + margin;
        legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
        break;
      case 'bottom':
        legendData.area.start.y = opts.height - opts.padding[2] - margin - legendData.area.height;
        legendData.area.end.y = opts.height - opts.padding[2] - margin;
        break;
      default:
        legendData.area.start.y = (opts.height - legendData.area.height) / 2;
        legendData.area.end.y = (opts.height + legendData.area.height) / 2;}

    var lineNum = len % maxLength === 0 ? len / maxLength : Math.floor(len / maxLength + 1);
    var _currentRow = [];
    for (var _i3 = 0; _i3 < lineNum; _i3++) {
      var temp = series.slice(_i3 * maxLength, _i3 * maxLength + maxLength);
      _currentRow.push(temp);
    }

    legendData.points = _currentRow;

    if (_currentRow.length) {
      for (var _i4 = 0; _i4 < _currentRow.length; _i4++) {
        var _item = _currentRow[_i4];
        var maxWidth = 0;
        for (var j = 0; j < _item.length; j++) {
          var _itemWidth = shapeWidth + shapeRight + measureText(_item[j].name || 'undefined', fontSize) + opts.legend.itemGap;
          if (_itemWidth > maxWidth) {
            maxWidth = _itemWidth;
          }
        }
        legendData.widthArr.push(maxWidth);
        legendData.heightArr.push(_item.length * lineHeight + padding * 2);
      }
      var _legendWidth = 0;
      for (var _i5 = 0; _i5 < legendData.widthArr.length; _i5++) {
        _legendWidth += legendData.widthArr[_i5];
      }
      legendData.area.width = _legendWidth - opts.legend.itemGap + 2 * padding;
      legendData.area.wholeWidth = legendData.area.width + padding;
    }
  }

  switch (opts.legend.position) {
    case 'top':
      legendData.area.start.y = opts.padding[0] + margin;
      legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
      break;
    case 'bottom':
      legendData.area.start.y = opts.height - opts.padding[2] - legendData.area.height - margin;
      legendData.area.end.y = opts.height - opts.padding[2] - margin;
      break;
    case 'left':
      legendData.area.start.x = opts.padding[3];
      legendData.area.end.x = opts.padding[3] + legendData.area.width;
      break;
    case 'right':
      legendData.area.start.x = opts.width - opts.padding[1] - legendData.area.width;
      legendData.area.end.x = opts.width - opts.padding[1];
      break;}

  chartData.legendData = legendData;
  return legendData;
}

function calCategoriesData(categories, opts, config, eachSpacing) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };

  var categoriesTextLenth = categories.map(function (item) {
    return measureText(item);
  });
  var maxTextLength = Math.max.apply(this, categoriesTextLenth);

  if (opts.xAxis.rotateLabel == true && maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }
  return result;
}

function getRadarDataPoints(angleList, center, radius, series, opts) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

  var radarOption = opts.extra.radar || {};
  radarOption.max = radarOption.max || 0;
  var maxData = Math.max(radarOption.max, Math.max.apply(null, dataCombine(series)));

  var data = [];var _loop2 = function _loop2(
  i) {
    var each = series[i];
    var listItem = {};
    listItem.color = each.color;
    listItem.data = [];
    each.data.forEach(function (item, index) {
      var tmp = {};
      tmp.angle = angleList[index];

      tmp.proportion = item / maxData;
      tmp.position = convertCoordinateOrigin(radius * tmp.proportion * process * Math.cos(tmp.angle), radius * tmp.proportion *
      process * Math.sin(tmp.angle), center);
      listItem.data.push(tmp);
    });

    data.push(listItem);};for (var i = 0; i < series.length; i++) {_loop2(i);
  }

  return data;
}

function getPieDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var count = 0;
  var _start_ = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
  }
  for (var _i6 = 0; _i6 < series.length; _i6++) {
    var _item2 = series[_i6];
    _item2.data = _item2.data === null ? 0 : _item2.data;
    if (count === 0) {
      _item2._proportion_ = 1 / series.length * process;
    } else {
      _item2._proportion_ = _item2.data / count * process;
    }
    _item2._radius_ = radius;
  }
  for (var _i7 = 0; _i7 < series.length; _i7++) {
    var _item3 = series[_i7];
    _item3._start_ = _start_;
    _start_ += 2 * _item3._proportion_ * Math.PI;
  }

  return series;
}

function getFunnelDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  series = series.sort(function (a, b) {return parseInt(b.data) - parseInt(a.data);});
  for (var i = 0; i < series.length; i++) {
    series[i].radius = series[i].data / series[0].data * radius * process;
    series[i]._proportion_ = series[i].data / series[0].data;
  }
  return series.reverse();
}

function getRoseDataPoints(series, type, minRadius, radius) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var count = 0;
  var _start_ = 0;

  var dataArr = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
    dataArr.push(item.data);
  }

  var minData = Math.min.apply(null, dataArr);
  var maxData = Math.max.apply(null, dataArr);
  var radiusLength = radius - minRadius;

  for (var _i8 = 0; _i8 < series.length; _i8++) {
    var _item4 = series[_i8];
    _item4.data = _item4.data === null ? 0 : _item4.data;
    if (count === 0 || type == 'area') {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = 1 / series.length * process;
    } else {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = _item4.data / count * process;
    }
    _item4._radius_ = minRadius + radiusLength * ((_item4.data - minData) / (maxData - minData));
  }
  for (var _i9 = 0; _i9 < series.length; _i9++) {
    var _item5 = series[_i9];
    _item5._start_ = _start_;
    _start_ += 2 * _item5._rose_proportion_ * Math.PI;
  }

  return series;
}

function getArcbarDataPoints(series, arcbarOption) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process == 1) {
    process = 0.999999;
  }
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    var totalAngle = void 0;
    if (arcbarOption.type == 'default') {
      if (arcbarOption.endAngle < arcbarOption.startAngle) {
        totalAngle = 2 + arcbarOption.endAngle - arcbarOption.startAngle;
      } else {
        totalAngle = arcbarOption.startAngle - arcbarOption.endAngle;
      }
    } else {
      totalAngle = 2;
    }
    item._proportion_ = totalAngle * item.data * process + arcbarOption.startAngle;
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getGaugeAxisPoints(categories, startAngle, endAngle) {
  var totalAngle = startAngle - endAngle + 1;
  var tempStartAngle = startAngle;
  for (var i = 0; i < categories.length; i++) {
    categories[i].value = categories[i].value === null ? 0 : categories[i].value;
    categories[i]._startAngle_ = tempStartAngle;
    categories[i]._endAngle_ = totalAngle * categories[i].value + startAngle;
    if (categories[i]._endAngle_ >= 2) {
      categories[i]._endAngle_ = categories[i]._endAngle_ % 2;
    }
    tempStartAngle = categories[i]._endAngle_;
  }
  return categories;
}

function getGaugeDataPoints(series, categories, gaugeOption) {
  var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    if (gaugeOption.pointer.color == 'auto') {
      for (var _i10 = 0; _i10 < categories.length; _i10++) {
        if (item.data <= categories[_i10].value) {
          item.color = categories[_i10].color;
          break;
        }
      }
    } else {
      item.color = gaugeOption.pointer.color;
    }
    var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    item._endAngle_ = totalAngle * item.data + gaugeOption.startAngle;
    item._oldAngle_ = gaugeOption.oldAngle;
    if (gaugeOption.oldAngle < gaugeOption.endAngle) {
      item._oldAngle_ += 2;
    }
    if (item.data >= gaugeOption.oldData) {
      item._proportion_ = (item._endAngle_ - item._oldAngle_) * process + gaugeOption.oldAngle;
    } else {
      item._proportion_ = item._oldAngle_ - (item._oldAngle_ - item._endAngle_) * process;
    }
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getPieTextMaxLength(series) {
  series = getPieDataPoints(series);
  var maxLength = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    maxLength = Math.max(maxLength, measureText(text));
  }

  return maxLength;
}

function fixColumeData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / columnLen);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    item.x += (index + 0.5 - columnLen / 2) * item.width;
    return item;
  });
}

function fixColumeMeterData(points, eachSpacing, columnLen, index, config, opts, border) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }

    if (index > 0) {
      item.width -= 2 * border;
    }
    return item;
  });
}

function fixColumeStackData(points, eachSpacing, columnLen, index, config, opts, series) {

  return points.map(function (item, indexn) {

    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    return item;
  });
}

function getXAxisPoints(categories, opts, config) {
  var yAxisTotalWidth = config.yAxisWidth + config.yAxisTitleWidth;
  var spacingValid = opts.width - opts.area[1] - opts.area[3];
  var dataCount = opts.enableScroll ? Math.min(opts.xAxis.itemCount, categories.length) : categories.length;
  if ((opts.type == 'line' || opts.type == 'area') && dataCount > 1 && opts.xAxis.boundaryGap == 'justify') {
    dataCount -= 1;
  }
  var eachSpacing = spacingValid / dataCount;

  var xAxisPoints = [];
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  categories.forEach(function (item, index) {
    xAxisPoints.push(startX + index * eachSpacing);
  });
  if (opts.xAxis.boundaryGap !== 'justify') {
    if (opts.enableScroll === true) {
      xAxisPoints.push(startX + categories.length * eachSpacing);
    } else {
      xAxisPoints.push(endX);
    }
  }
  return {
    xAxisPoints: xAxisPoints,
    startX: startX,
    endX: endX,
    eachSpacing: eachSpacing };

}

function getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var cPoints = [];
      item.forEach(function (items, indexs) {
        var point = {};
        point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
        var value = items.value || items;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        height *= process;
        point.y = opts.height - Math.round(height) - opts.area[2];
        cPoints.push(point);
      });
      points.push(cPoints);
    }
  });

  return points;
}

function getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index];
      if (boundaryGap == 'center') {
        point.x += Math.round(eachSpacing / 2);
      }
      var value = item;
      if (typeof item === 'object' && item !== null) {
        value = item.value;
      }
      var height = validHeight * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];

  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);

      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      point.y0 = opts.height - Math.round(heightc) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getYAxisTextList(series, opts, config, stack) {
  var data;
  if (stack == 'stack') {
    data = dataCombineStack(series, opts.categories.length);
  } else {
    data = dataCombine(series);
  }
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (Array.isArray(item)) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (Array.isArray(item)) {
        item.map(function (subitem) {
          sorted.push(subitem);
        });
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });
  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  if (typeof opts.yAxis.min === 'number') {
    minData = Math.min(opts.yAxis.min, minData);
  }
  if (typeof opts.yAxis.max === 'number') {
    maxData = Math.max(opts.yAxis.max, maxData);
  }

  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / config.yAxisSplit;

  for (var i = 0; i <= config.yAxisSplit; i++) {
    range.push(minRange + eachRange * i);
  }
  return range.reverse();
}

function calYAxisData(series, opts, config) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, {
    type: "" },
  opts.extra.column);
  var ranges = getYAxisTextList(series, opts, config, columnstyle.type);
  var yAxisWidth = config.yAxisWidth;
  var yAxisFontSize = opts.yAxis.fontSize || config.fontSize;
  var rangesFormat = ranges.map(function (item) {
    item = util.toFixed(item, 6);
    item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
    yAxisWidth = Math.max(yAxisWidth, measureText(item, yAxisFontSize) + 5);
    return item;
  });
  if (opts.yAxis.disabled === true) {
    yAxisWidth = 0;
  }

  return {
    rangesFormat: rangesFormat,
    ranges: ranges,
    yAxisWidth: yAxisWidth };

}

function calTooltipYAxisData(point, series, opts, config, eachSpacing) {
  var ranges = getYAxisTextList(series, opts, config);
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var maxVal = ranges[0];
  var minVal = ranges[ranges.length - 1];
  var minAxis = opts.padding[3];
  var maxAxis = opts.padding[1] + spacingValid;
  var item = maxVal - (maxVal - minVal) * (point - minAxis) / (maxAxis - minAxis);
  item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
  return item;
}

function calMarkLineData(minRange, maxRange, points, opts) {
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  for (var i = 0; i < points.length; i++) {
    var height = spacingValid * (points[i].value - minRange) / (maxRange - minRange);
    points[i].y = opts.height - Math.round(height) - opts.area[2];
  }
  return points;
}

function contextRotate(context, opts) {
  if (opts.rotateLock !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
  } else if (opts._rotate_ !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
    opts._rotate_ = true;
  }
}

function drawPointShape(points, color, shape, context, opts) {
  context.beginPath();
  context.setStrokeStyle("#ffffff");
  context.setLineWidth(1 * opts.pixelRatio);
  context.setFillStyle(color);
  if (shape === 'diamond') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y);
        context.lineTo(item.x, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'circle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x + 3.5 * opts.pixelRatio, item.y);
        context.arc(item.x, item.y, 4 * opts.pixelRatio, 0, 2 * Math.PI, false);
      }
    });
  } else if (shape === 'rect') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x - 3.5, item.y - 3.5);
        context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
      }
    });
  } else if (shape === 'triangle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y + 4.5);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function drawRingTitle(opts, config, context, center) {
  var titlefontSize = opts.title.fontSize || config.titleFontSize;
  var subtitlefontSize = opts.subtitle.fontSize || config.subtitleFontSize;
  var title = opts.title.name || '';
  var subtitle = opts.subtitle.name || '';
  var titleFontColor = opts.title.color || config.titleColor;
  var subtitleFontColor = opts.subtitle.color || config.subtitleColor;
  var titleHeight = title ? titlefontSize : 0;
  var subtitleHeight = subtitle ? subtitlefontSize : 0;
  var margin = 5;

  if (subtitle) {
    var textWidth = measureText(subtitle, subtitlefontSize);
    var startX = center.x - textWidth / 2 + (opts.subtitle.offsetX || 0);
    var startY = center.y + subtitlefontSize / 2 + (opts.subtitle.offsetY || 0);
    if (title) {
      startY += (titleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(subtitlefontSize);
    context.setFillStyle(subtitleFontColor);
    context.fillText(subtitle, startX, startY);
    context.closePath();
    context.stroke();
  }
  if (title) {
    var _textWidth = measureText(title, titlefontSize);
    var _startX = center.x - _textWidth / 2 + (opts.title.offsetX || 0);
    var _startY = center.y + titlefontSize / 2 + (opts.title.offsetY || 0);
    if (subtitle) {
      _startY -= (subtitleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(titlefontSize);
    context.setFillStyle(titleFontColor);
    context.fillText(title, _startX, _startY);
    context.closePath();
    context.stroke();
  }
}

function drawPointText(points, series, config, context) {
  // 绘制数据文案
  var data = series.data;
  points.forEach(function (item, index) {
    if (item !== null) {
      //var formatVal = series.format ? series.format(data[index]) : data[index];
      context.beginPath();
      context.setFontSize(series.textSize || config.fontSize);
      context.setFillStyle(series.textColor || '#666666');
      var value = data[index];
      if (typeof data[index] === 'object' && data[index] !== null) {
        value = data[index].value;
      }
      var formatVal = series.format ? series.format(value) : value;
      context.fillText(String(formatVal), item.x - measureText(formatVal, series.textSize || config.fontSize) / 2, item.y -
      2);
      context.closePath();
      context.stroke();
    }
  });

}

function drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context) {
  radius -= gaugeOption.width / 2 + config.gaugeLabelTextMargin;

  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var totalNumber = gaugeOption.endNumber - gaugeOption.startNumber;
  var splitNumber = totalNumber / gaugeOption.splitLine.splitNumber;
  var nowAngle = gaugeOption.startAngle;
  var nowNumber = gaugeOption.startNumber;
  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    var pos = {
      x: radius * Math.cos(nowAngle * Math.PI),
      y: radius * Math.sin(nowAngle * Math.PI) };

    var labelText = gaugeOption.labelFormat ? gaugeOption.labelFormat(nowNumber) : nowNumber;
    pos.x += centerPosition.x - measureText(labelText) / 2;
    pos.y += centerPosition.y;
    var startX = pos.x;
    var startY = pos.y;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(gaugeOption.labelColor || '#666666');
    context.fillText(labelText, startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();

    nowAngle += splitAngle;
    if (nowAngle >= 2) {
      nowAngle = nowAngle % 2;
    }
    nowNumber += splitNumber;
  }

}

function drawRadarLabel(angleList, radius, centerPosition, opts, config, context) {
  var radarOption = opts.extra.radar || {};
  radius += config.radarLabelTextMargin;

  angleList.forEach(function (angle, index) {
    var pos = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle) };

    var posRelativeCanvas = convertCoordinateOrigin(pos.x, pos.y, centerPosition);
    var startX = posRelativeCanvas.x;
    var startY = posRelativeCanvas.y;
    if (util.approximatelyEqual(pos.x, 0)) {
      startX -= measureText(opts.categories[index] || '') / 2;
    } else if (pos.x < 0) {
      startX -= measureText(opts.categories[index] || '');
    }
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(radarOption.labelColor || '#666666');
    context.fillText(opts.categories[index] || '', startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });

}

function drawPieText(series, opts, config, context, radius, center) {
  var lineRadius = config.pieChartLinePadding;
  var textObjectCollection = [];
  var lastTextObject = null;

  var seriesConvert = series.map(function (item) {
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_.toFixed(4) * 100) + '%';
    if (item._rose_proportion_) item._proportion_ = item._rose_proportion_;
    var arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._proportion_ / 2);
    var color = item.color;
    var radius = item._radius_;
    return {
      arc: arc,
      text: text,
      color: color,
      radius: radius,
      textColor: item.textColor,
      textSize: item.textSize };

  });
  for (var i = 0; i < seriesConvert.length; i++) {
    var item = seriesConvert[i];
    // line end
    var orginX1 = Math.cos(item.arc) * (item.radius + lineRadius);
    var orginY1 = Math.sin(item.arc) * (item.radius + lineRadius);

    // line start
    var orginX2 = Math.cos(item.arc) * item.radius;
    var orginY2 = Math.sin(item.arc) * item.radius;

    // text start
    var orginX3 = orginX1 >= 0 ? orginX1 + config.pieChartTextPadding : orginX1 - config.pieChartTextPadding;
    var orginY3 = orginY1;
    var textWidth = measureText(item.text);
    var startY = orginY3;

    if (lastTextObject && util.isSameXCoordinateArea(lastTextObject.start, {
      x: orginX3 }))
    {
      if (orginX3 > 0) {
        startY = Math.min(orginY3, lastTextObject.start.y);
      } else if (orginX1 < 0) {
        startY = Math.max(orginY3, lastTextObject.start.y);
      } else {
        if (orginY3 > 0) {
          startY = Math.max(orginY3, lastTextObject.start.y);
        } else {
          startY = Math.min(orginY3, lastTextObject.start.y);
        }
      }
    }
    if (orginX3 < 0) {
      orginX3 -= textWidth;
    }

    var textObject = {
      lineStart: {
        x: orginX2,
        y: orginY2 },

      lineEnd: {
        x: orginX1,
        y: orginY1 },

      start: {
        x: orginX3,
        y: startY },

      width: textWidth,
      height: config.fontSize,
      text: item.text,
      color: item.color,
      textColor: item.textColor,
      textSize: item.textSize };

    lastTextObject = avoidCollision(textObject, lastTextObject);
    textObjectCollection.push(lastTextObject);
  }

  for (var _i11 = 0; _i11 < textObjectCollection.length; _i11++) {
    var _item6 = textObjectCollection[_i11];
    var lineStartPoistion = convertCoordinateOrigin(_item6.lineStart.x, _item6.lineStart.y, center);
    var lineEndPoistion = convertCoordinateOrigin(_item6.lineEnd.x, _item6.lineEnd.y, center);
    var textPosition = convertCoordinateOrigin(_item6.start.x, _item6.start.y, center);
    context.setLineWidth(1 * opts.pixelRatio);
    context.setFontSize(config.fontSize);
    context.beginPath();
    context.setStrokeStyle(_item6.color);
    context.setFillStyle(_item6.color);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    var curveStartX = _item6.start.x < 0 ? textPosition.x + _item6.width : textPosition.x;
    var textStartX = _item6.start.x < 0 ? textPosition.x - 5 : textPosition.x + 5;
    context.quadraticCurveTo(lineEndPoistion.x, lineEndPoistion.y, curveStartX, textPosition.y);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(textPosition.x + _item6.width, textPosition.y);
    context.arc(curveStartX, textPosition.y, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFontSize(_item6.textSize || config.fontSize);
    context.setFillStyle(_item6.textColor || '#666666');
    context.fillText(_item6.text, textStartX, textPosition.y + 3);
    context.closePath();
    context.stroke();
    context.closePath();
  }
}

function drawToolTipSplitLine(offsetX, opts, config, context) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(offsetX, startY);
  context.lineTo(offsetX, endY);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.xAxisLabel) {
    var labelText = opts.categories[opts.tooltip.index];
    context.setFontSize(config.fontSize);
    var textWidth = measureText(labelText, config.fontSize);

    var textX = offsetX - 0.5 * textWidth;
    var textY = endY;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX - config.toolTipPadding, textY, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(String(labelText), textX, textY + config.toolTipPadding + config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawMarkLine(minRange, maxRange, opts, config, context) {
  var markLineOption = assign({}, {
    type: 'solid',
    dashLength: 4,
    data: [] },
  opts.extra.markLine);
  var startX = opts.area[3];
  var endX = opts.width - opts.padding[1];
  var points = calMarkLineData(minRange, maxRange, markLineOption.data, opts);

  for (var i = 0; i < points.length; i++) {
    var item = assign({}, {
      lineColor: '#DE4A42',
      showLabel: false,
      labelFontColor: '#666666',
      labelBgColor: '#DFE8FF',
      labelBgOpacity: 0.8,
      yAxisIndex: 0 },
    points[i]);

    if (markLineOption.type == 'dash') {
      context.setLineDash([markLineOption.dashLength, markLineOption.dashLength]);
    }
    context.setStrokeStyle(item.lineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.beginPath();
    context.moveTo(startX, item.y);
    context.lineTo(endX, item.y);
    context.stroke();
    context.setLineDash([]);
    if (item.showLabel) {
      var labelText = opts.yAxis.format ? opts.yAxis.format(Number(item.value)) : item.value;
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText, config.fontSize);
      var bgStartX = opts.padding[3] + config.yAxisTitleWidth - config.toolTipPadding;
      var bgEndX = Math.max(opts.area[3], textWidth + config.toolTipPadding * 2);
      var bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = item.y;
      context.setFillStyle(hexToRgb(item.labelBgColor, item.labelBgOpacity));
      context.setStrokeStyle(item.labelBgColor);
      context.setLineWidth(1 * opts.pixelRatio);
      context.beginPath();
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(item.labelFontColor);
      context.fillText(String(labelText), textX, textY + 0.5 * config.fontSize);
      context.stroke();
    }
  }
}

function drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    gridType: 'solid',
    dashLength: 4 },
  opts.extra.tooltip);

  var startX = opts.area[3];
  var endX = opts.width - opts.padding[1];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(startX, opts.tooltip.offset.y);
  context.lineTo(endX, opts.tooltip.offset.y);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.yAxisLabel) {
    var labelText = calTooltipYAxisData(opts.tooltip.offset.y, opts.series, opts, config, eachSpacing);
    context.setFontSize(config.fontSize);
    var textWidth = measureText(labelText, config.fontSize);
    var bgStartX = opts.padding[3] + config.yAxisTitleWidth - config.toolTipPadding;
    var bgEndX = Math.max(opts.area[3], textWidth + config.toolTipPadding * 2);
    var bgWidth = bgEndX - bgStartX;

    var textX = bgStartX + (bgWidth - textWidth) / 2;
    var textY = opts.tooltip.offset.y;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(labelText, textX, textY + 0.5 * config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var toolTipOption = assign({}, {
    activeBgColor: '#000000',
    activeBgOpacity: 0.08 },
  opts.extra.tooltip);
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.activeBgColor, toolTipOption.activeBgOpacity));
  context.rect(offsetX - eachSpacing / 2, startY, eachSpacing, endY - startY);
  context.closePath();
  context.fill();
}

function drawToolTip(textList, offset, opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    bgColor: '#000000',
    bgOpacity: 0.7,
    fontColor: '#FFFFFF' },
  opts.extra.tooltip);
  var legendWidth = 4 * opts.pixelRatio;
  var legendMarginRight = 5 * opts.pixelRatio;
  var arrowWidth = 8 * opts.pixelRatio;
  var isOverRightBorder = false;
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'candle' || opts.type == 'mix') {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  offset = assign({
    x: 0,
    y: 0 },
  offset);
  offset.y -= 8 * opts.pixelRatio;
  var textWidth = textList.map(function (item) {
    return measureText(item.text, config.fontSize);
  });
  var toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
  var toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;

  // if beyond the right border
  if (offset.x - Math.abs(opts._scrollDistance_) + arrowWidth + toolTipWidth > opts.width) {
    isOverRightBorder = true;
  }
  if (toolTipHeight + offset.y > opts.height) {
    offset.y = opts.height - toolTipHeight;
  }
  // draw background rect
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.bgColor || config.toolTipBackground, toolTipOption.bgOpacity || config.toolTipOpacity));
  if (isOverRightBorder) {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  } else {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  }

  context.closePath();
  context.fill();

  // draw legend
  textList.forEach(function (item, index) {
    if (item.color !== null) {
      context.beginPath();
      context.setFillStyle(item.color);
      var startX = offset.x + arrowWidth + 2 * config.toolTipPadding;
      var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
      config.toolTipPadding + 1;
      if (isOverRightBorder) {
        startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding;
      }
      context.fillRect(startX, startY, legendWidth, config.fontSize);
      context.closePath();
    }
  });

  // draw text list

  textList.forEach(function (item, index) {
    var startX = offset.x + arrowWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
    if (isOverRightBorder) {
      startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding + +legendWidth + legendMarginRight;
    }
    var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
    config.toolTipPadding;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.fontColor);
    context.fillText(item.text, startX, startY + config.fontSize);
    context.closePath();
    context.stroke();
  });
}

function drawYAxisTitle(title, opts, config, context) {
  var startX = config.xAxisHeight + (opts.height - config.xAxisHeight - measureText(title)) / 2;
  context.save();
  context.beginPath();
  context.setFontSize(config.fontSize);
  context.setFillStyle(opts.yAxis.titleFontColor || '#333333');
  context.translate(0, opts.height);
  context.rotate(-90 * Math.PI / 180);
  context.fillText(title, startX, opts.padding[3] + 0.5 * config.fontSize);
  context.closePath();
  context.stroke();
  context.restore();
}

function drawColumnDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var columnOption = assign({}, {
    type: 'group',
    width: eachSpacing / 2,
    meter: {
      border: 4,
      fillColor: '#FFFFFF' } },

  opts.extra.column);
  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitArea(opts.tooltip.offset.x, opts, config, context, eachSpacing);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
        points.forEach(function (item, index) {
          if (item !== null) {
            context.beginPath();
            context.setStrokeStyle(item.color || eachSeries.color);
            context.setLineWidth(1);
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2;
            var height = opts.height - item.y - opts.area[2];
            context.moveTo(startX - 1, item.y);
            context.lineTo(startX + item.width - 2, item.y);
            context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
            context.lineTo(startX, opts.height - opts.area[2]);
            context.lineTo(startX, item.y);
            //context.rect(startX, item.y, item.width, height);
            context.closePath();
            context.stroke();
            context.fill();
          }
        });
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config,
        seriesIndex,
        series, process);
        calPoints.push(points);
        points = fixColumeStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);

        points.forEach(function (item, index) {
          if (item !== null) {
            context.beginPath();
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2 + 1;
            var height = opts.height - item.y - opts.area[2];
            var height0 = opts.height - item.y0 - opts.area[2];
            if (seriesIndex > 0) {
              height -= height0;
            }
            context.moveTo(startX, item.y);
            context.fillRect(startX, item.y, item.width - 2, height);
            context.closePath();
            context.fill();
          }
        });
        break;
      case 'meter':
        // 绘制温度计数据图
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        calPoints.push(points);
        points = fixColumeMeterData(points, eachSpacing, series.length, seriesIndex, config, opts, columnOption.meter.
        border);
        if (seriesIndex == 0) {
          points.forEach(function (item, index) {
            if (item !== null) {
              //画背景颜色
              context.beginPath();
              context.setFillStyle(columnOption.meter.fillColor);
              var startX = item.x - item.width / 2;
              var height = opts.height - item.y - opts.area[2];
              context.moveTo(startX, item.y);
              context.fillRect(startX, item.y, item.width, height);
              context.closePath();
              context.fill();
              //画边框线
              if (columnOption.meter.border > 0) {
                context.beginPath();
                context.setStrokeStyle(eachSeries.color);
                context.setLineWidth(columnOption.meter.border * opts.pixelRatio);
                context.moveTo(startX + columnOption.meter.border * 0.5, item.y + height);
                context.lineTo(startX + columnOption.meter.border * 0.5, item.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + item.width - columnOption.meter.border * 0.5, item.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + item.width - columnOption.meter.border * 0.5, item.y + height);
                context.stroke();
              }
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (item !== null) {
              context.beginPath();
              context.setFillStyle(item.color || eachSeries.color);
              var startX = item.x - item.width / 2;
              var height = opts.height - item.y - opts.area[2];
              context.moveTo(startX, item.y);
              context.fillRect(startX, item.y, item.width, height);
              context.closePath();
              context.fill();
            }
          });
        }
        break;}

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);

          drawPointText(points, eachSeries, config, context);
          break;
        case 'stack':
          var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config,
          seriesIndex,
          series, process);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'meter':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          drawPointText(points, eachSeries, config, context);
          break;}

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing,
    minRange: minRange,
    maxRange: maxRange };

}

function drawCandleDataPoints(series, seriesMA, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var candleOption = assign({}, {
    color: {},
    average: {} },
  opts.extra.candle);
  candleOption.color = assign({}, {
    upLine: '#f04864',
    upFill: '#f04864',
    downLine: '#2fc25b',
    downFill: '#2fc25b' },
  candleOption.color);
  candleOption.average = assign({}, {
    show: false,
    name: [],
    day: [],
    color: config.colors },
  candleOption.average);
  opts.extra.candle = candleOption;

  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  //画均线
  if (candleOption.average.show) {
    seriesMA.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      //calPoints.push(points);
      var splitPointList = splitPoints(points);

      splitPointList.forEach(function (points, index) {
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(1);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y,
              item.x, item.
              y);
            }
          });
          context.moveTo(points[0].x, points[0].y);
        }
        context.closePath();
        context.stroke();
      });
    });
  }
  //画K线
  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);
    splitPointList = splitPointList[0];

    splitPointList.forEach(function (points, index) {
      context.beginPath();
      //如果上涨
      if (data[index][1] - data[index][0] > 0) {
        context.setStrokeStyle(candleOption.color.upLine);
        context.setFillStyle(candleOption.color.upFill);
        context.setLineWidth(1 * opts.pixelRatio);
        context.moveTo(points[3].x, points[3].y); //顶点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[1].x - eachSpacing / 4, points[1].y); //收盘左侧点
        context.lineTo(points[0].x - eachSpacing / 4, points[0].y); //开盘左侧点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[2].x, points[2].y); //底点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[0].x + eachSpacing / 4, points[0].y); //开盘右侧点
        context.lineTo(points[1].x + eachSpacing / 4, points[1].y); //收盘右侧点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.moveTo(points[3].x, points[3].y); //顶点
      } else {
        context.setStrokeStyle(candleOption.color.downLine);
        context.setFillStyle(candleOption.color.downFill);
        context.setLineWidth(1 * opts.pixelRatio);
        context.moveTo(points[3].x, points[3].y); //顶点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[0].x - eachSpacing / 4, points[0].y); //开盘左侧点
        context.lineTo(points[1].x - eachSpacing / 4, points[1].y); //收盘左侧点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[2].x, points[2].y); //底点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[1].x + eachSpacing / 4, points[1].y); //收盘右侧点
        context.lineTo(points[0].x + eachSpacing / 4, points[0].y); //开盘右侧点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.moveTo(points[3].x, points[3].y); //顶点
      }
      context.closePath();
      context.fill();
      context.stroke();
    });
  });

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing,
    minRange: minRange,
    maxRange: maxRange };

}

function drawAreaDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var areaOption = assign({}, {
    type: 'straight',
    opacity: 0.2,
    addLine: false,
    width: 2 },
  opts.extra.area);

  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var endY = opts.height - opts.area[2];
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    var splitPointList = splitPoints(points);var _loop3 = function _loop3(

    i) {
      var points = splitPointList[i];
      // 绘制区域数
      context.beginPath();
      context.setStrokeStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      context.setFillStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      context.setLineWidth(areaOption.width * opts.pixelRatio);
      if (points.length > 1) {
        var firstPoint = points[0];
        var lastPoint = points[points.length - 1];

        context.moveTo(firstPoint.x, firstPoint.y);
        if (areaOption.type === 'curve') {
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (index > 0) {
              context.lineTo(item.x, item.y);
            }
          });
        }

        context.lineTo(lastPoint.x, endY);
        context.lineTo(firstPoint.x, endY);
        context.lineTo(firstPoint.x, firstPoint.y);
      } else {
        var item = points[0];
        context.moveTo(item.x - eachSpacing / 2, item.y);
        context.lineTo(item.x + eachSpacing / 2, item.y);
        context.lineTo(item.x + eachSpacing / 2, endY);
        context.lineTo(item.x - eachSpacing / 2, endY);
        context.moveTo(item.x - eachSpacing / 2, item.y);
      }
      context.closePath();
      context.fill();

      //画连线
      if (areaOption.addLine) {
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(areaOption.width * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          if (areaOption.type === 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.closePath();
        context.stroke();
      }};for (var i = 0; i < splitPointList.length; i++) {_loop3(i);
    }

    //画点
    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing,
    minRange: minRange,
    maxRange: maxRange };

}

function drawLineDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var lineOption = opts.extra.line || {
    type: 'straight',
    width: 2 };

  lineOption.type = lineOption.type ? lineOption.type : 'straight';
  lineOption.width = lineOption.width ? lineOption.width : 2;

  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    splitPointList.forEach(function (points, index) {
      context.beginPath();
      context.setStrokeStyle(eachSeries.color);
      context.setLineWidth(lineOption.width * opts.pixelRatio);
      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        if (lineOption.type === 'curve') {
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y,
              item.x, item.
              y);
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (index > 0) {
              context.lineTo(item.x, item.y);
            }
          });
        }
        context.moveTo(points[0].x, points[0].y);
      }
      context.closePath();
      context.stroke();
    });

    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing,
    minRange: minRange,
    maxRange: maxRange };

}

function drawMixDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var endY = opts.height - opts.area[2];
  var calPoints = [];

  var columnIndex = 0;
  var columnLength = 0;
  series.forEach(function (eachSeries, seriesIndex) {
    if (eachSeries.type == 'column') {
      columnLength += 1;
    }
  });
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    // 绘制柱状数据图
    if (eachSeries.type == 'column') {
      points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
      points.forEach(function (item, index) {
        if (item !== null) {
          context.beginPath();
          context.setStrokeStyle(item.color || eachSeries.color);
          context.setLineWidth(1);
          context.setFillStyle(item.color || eachSeries.color);
          var startX = item.x - item.width / 2;
          var height = opts.height - item.y - opts.area[2];
          context.moveTo(startX, item.y);
          context.moveTo(startX - 1, item.y);
          context.lineTo(startX + item.width - 2, item.y);
          context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
          context.lineTo(startX, opts.height - opts.area[2]);
          context.lineTo(startX, item.y);
          //context.rect(startX, item.y, item.width, height);
          context.closePath();
          context.stroke();
          context.fill();
          context.closePath();
          context.fill();
        }
      });
      columnIndex += 1;
    }

    //绘制区域图数据

    if (eachSeries.type == 'area') {
      var _splitPointList = splitPoints(points);var _loop4 = function _loop4(
      i) {
        var points = _splitPointList[i];
        // 绘制区域数据
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setFillStyle(hexToRgb(eachSeries.color, 0.2));
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length > 1) {
          firstPoint = points[0];
          var lastPoint = points[points.length - 1];
          context.moveTo(firstPoint.x, firstPoint.y);
          if (eachSeries.style === 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.lineTo(lastPoint.x, endY);
          context.lineTo(firstPoint.x, endY);
          context.lineTo(firstPoint.x, firstPoint.y);
        } else {
          var item = points[0];
          context.moveTo(item.x - eachSpacing / 2, item.y);
          context.lineTo(item.x + eachSpacing / 2, item.y);
          context.lineTo(item.x + eachSpacing / 2, endY);
          context.lineTo(item.x - eachSpacing / 2, endY);
          context.moveTo(item.x - eachSpacing / 2, item.y);
        }
        context.closePath();
        context.fill();};for (var i = 0; i < _splitPointList.length; i++) {var firstPoint;_loop4(i);
      }
    }

    // 绘制折线数据图
    if (eachSeries.type == 'line') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          if (eachSeries.style == 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y,
                item.x,
                item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.closePath();
        context.stroke();
      });
    }

    // 绘制点数据图
    if (eachSeries.type == 'point') {
      points.forEach(function (pointsa, index) {
        if (pointsa) {
          context.beginPath();
          context.setFillStyle(eachSeries.color);
          context.setStrokeStyle('#FFFFFF');
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(pointsa.x + 3.5 * opts.pixelRatio, pointsa.y);
          context.arc(pointsa.x, pointsa.y, 4 * opts.pixelRatio, 0, 2 * Math.PI);
          context.closePath();
          context.fill();
          context.stroke();
        }
      });
    }

    if (eachSeries.addPoint == true && eachSeries.type !== 'column') {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    var columnIndex = 0;
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      if (eachSeries.type !== 'column') {
        drawPointText(points, eachSeries, config, context);
      } else {
        points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
        drawPointText(points, eachSeries, config, context);
        columnIndex += 1;
      }

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing,
    minRange: minRange,
    maxRange: maxRange };

}

function drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  if (toolTipOption.horizentalLine && opts.tooltip && process === 1 && (opts.type == 'line' || opts.type == 'area' || opts.type == 'column' || opts.type == 'candle' || opts.type == 'mix')) {
    drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTip(opts.tooltip.textList, opts.tooltip.offset, opts, config, context, eachSpacing, xAxisPoints);
  }
  context.restore();

}

function drawXAxis(categories, opts, config, context) {

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  startX = xAxisData.startX,
  endX = xAxisData.endX,
  eachSpacing = xAxisData.eachSpacing;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var startY = opts.height - opts.area[2];
  var endY = opts.area[0];

  //绘制滚动条
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    var scrollY = opts.height - opts.area[2] + config.xAxisHeight;
    var scrollScreenWidth = endX - startX;
    var scrollTotalWidth = eachSpacing * (xAxisPoints.length - 1);
    var scrollWidth = scrollScreenWidth * scrollScreenWidth / scrollTotalWidth;
    var scrollLeft = 0;
    if (opts._scrollDistance_) {
      scrollLeft = -opts._scrollDistance_ * scrollScreenWidth / scrollTotalWidth;
    }
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollBackgroundColor || "#EFEBEF");
    context.moveTo(startX, scrollY);
    context.lineTo(endX, scrollY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollColor || "#A6A6A6");
    context.moveTo(startX + scrollLeft, scrollY);
    context.lineTo(startX + scrollLeft + scrollWidth, scrollY);
    context.stroke();
    context.closePath();
    context.setLineCap('butt');
  }

  context.save();

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }


  if (opts.xAxis.disableGrid !== true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    if (opts.xAxis.gridType == 'dash') {
      context.setLineDash([opts.xAxis.dashLength, opts.xAxis.dashLength]);
    }
    if (opts.xAxis.type === 'calibration') {
      xAxisPoints.forEach(function (item, index) {
        if (index > 0) {
          context.beginPath();
          context.moveTo(item - eachSpacing / 2, startY);
          context.lineTo(item - eachSpacing / 2, startY + 4 * opts.pixelRatio);
          context.closePath();
          context.stroke();
        }
      });
    } else {
      opts.xAxis.gridEval = opts.xAxis.gridEval || 1;
      xAxisPoints.forEach(function (item, index) {
        if (index % opts.xAxis.gridEval == 0) {
          context.beginPath();
          context.moveTo(item, startY);
          context.lineTo(item, endY);
          context.stroke();
        }
      });
    }
    context.setLineDash([]);
  }


  //不绘制X轴
  if (opts.xAxis.disabled !== true) {
    // 对X轴列表做抽稀处理
    var validWidth = opts.width - opts.padding[1] - opts.padding[3] - config.yAxisWidth - config.yAxisTitleWidth;
    //默认全部显示X轴标签
    var maxXAxisListLength = categories.length;
    //如果设置了X轴单屏数量
    if (opts.xAxis.labelCount) {
      //如果设置X轴密度
      if (opts.xAxis.itemCount) {
        maxXAxisListLength = Math.ceil(categories.length / opts.xAxis.itemCount * opts.xAxis.labelCount);
      } else {
        maxXAxisListLength = opts.xAxis.labelCount;
      }
      maxXAxisListLength -= 1;
    }

    var ratio = Math.ceil(categories.length / maxXAxisListLength);

    var newCategories = [];
    var cgLength = categories.length;
    for (var i = 0; i < cgLength; i++) {
      if (i % ratio !== 0) {
        newCategories.push("");
      } else {
        newCategories.push(categories[i]);
      }
    }
    newCategories[cgLength - 1] = categories[cgLength - 1];

    var xAxisFontSize = opts.xAxis.fontSize || config.fontSize;
    if (config._xAxisTextAngle_ === 0) {
      newCategories.forEach(function (item, index) {
        var offset = -measureText(item, xAxisFontSize) / 2;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        context.fillText(item, xAxisPoints[index] + offset, startY + xAxisFontSize + (config.xAxisHeight - xAxisFontSize) / 2);
        context.closePath();
        context.stroke();
      });

    } else {
      newCategories.forEach(function (item, index) {
        context.save();
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        var textWidth = measureText(item);
        var offset = -textWidth;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var _calRotateTranslate = calRotateTranslate(xAxisPoints[index] + eachSpacing / 2, startY + xAxisFontSize / 2 + 5, opts.height),
        transX = _calRotateTranslate.transX,
        transY = _calRotateTranslate.transY;

        context.rotate(-1 * config._xAxisTextAngle_);
        context.translate(transX, transY);
        context.fillText(item, xAxisPoints[index] + offset, startY + xAxisFontSize + 5);
        context.closePath();
        context.stroke();
        context.restore();
      });
    }
  }
  context.restore();

}

function drawYAxisGrid(categories, opts, config, context) {
  if (opts.yAxis.disableGrid === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / config.yAxisSplit;
  var startX = opts.area[3];
  var xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
  xAxiseachSpacing = opts.chartData.xAxisData.eachSpacing;
  var TotalWidth = xAxiseachSpacing * (xAxisPoints.length - 1);
  var endX = startX + TotalWidth;

  var points = [];
  for (var i = 0; i < config.yAxisSplit + 1; i++) {
    points.push(opts.height - opts.area[2] - eachSpacing * i);
  }

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.yAxis.gridType == 'dash') {
    context.setLineDash([opts.yAxis.dashLength, opts.yAxis.dashLength]);
  }
  context.setStrokeStyle(opts.yAxis.gridColor || "#cccccc");
  context.setLineWidth(1 * opts.pixelRatio);
  points.forEach(function (item, index) {
    context.beginPath();
    context.moveTo(startX, item);
    context.lineTo(endX, item);
    context.stroke();
  });
  context.setLineDash([]);

  context.restore();
}

function drawYAxis(series, opts, config, context) {
  if (opts.yAxis.disabled === true) {
    return;
  }
  var rangesFormat = opts.chartData.yAxisData.rangesFormat;
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = Math.floor(spacingValid / config.yAxisSplit);
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var endY = opts.height - opts.area[2];
  var fillEndY = endY + config.xAxisHeight;
  if (opts.xAxis.scrollShow) {
    fillEndY -= 3 * opts.pixelRatio;
  }
  // set YAxis background
  context.beginPath();
  context.setFillStyle(opts.background || '#ffffff');
  if (opts._scrollDistance_ < 0) {
    context.fillRect(0, 0, startX, fillEndY);
  }
  if (opts.enableScroll == true) {
    context.fillRect(endX, 0, opts.width, fillEndY);
  }
  context.closePath();
  context.stroke();

  var points = [];
  for (var i = 0; i <= config.yAxisSplit; i++) {
    points.push(opts.area[0] + eachSpacing * i);
  }

  var yAxisFontSize = opts.yAxis.fontSize || config.fontSize;
  rangesFormat.forEach(function (item, index) {
    var pos = points[index] ? points[index] : endY;
    context.beginPath();
    context.setFontSize(yAxisFontSize);
    context.setFillStyle(opts.yAxis.fontColor || '#666666');
    context.fillText(String(item), opts.area[3] - config.yAxisWidth, pos + yAxisFontSize / 2);
    context.closePath();
    context.stroke();
  });

  if (opts.yAxis.title) {
    drawYAxisTitle(opts.yAxis.title, opts, config, context);
  }
}

function drawLegend(series, opts, config, context, chartData) {
  if (opts.legend.show === false) {
    return;
  }
  var legendData = chartData.legendData;
  var legendList = legendData.points;
  var legendArea = legendData.area;
  var padding = opts.legend.padding;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var itemGap = opts.legend.itemGap;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);

  //画背景及边框
  context.beginPath();
  context.setLineWidth(opts.legend.borderWidth);
  context.setStrokeStyle(opts.legend.borderColor);
  context.setFillStyle(opts.legend.backgroundColor);
  context.moveTo(legendArea.start.x, legendArea.start.y);
  context.rect(legendArea.start.x, legendArea.start.y, legendArea.width, legendArea.height);
  context.closePath();
  context.fill();
  context.stroke();

  legendList.forEach(function (itemList, listIndex) {
    var width = 0;
    var height = 0;
    width = legendData.widthArr[listIndex];
    height = legendData.heightArr[listIndex];
    var startX = 0;
    var startY = 0;
    if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
      startX = legendArea.start.x + (legendArea.width - width) / 2;
      startY = legendArea.start.y + padding + listIndex * lineHeight;
    } else {
      if (listIndex == 0) {
        width = 0;
      } else {
        width = legendData.widthArr[listIndex - 1];
      }
      startX = legendArea.start.x + padding + width;
      startY = legendArea.start.y + padding + (legendArea.height - height) / 2;
    }

    context.setFontSize(config.fontSize);
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      item.area = [0, 0, 0, 0];
      item.area[0] = startX;
      item.area[1] = startY;
      item.area[3] = startY + lineHeight;
      context.beginPath();
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.show ? item.color : opts.legend.hiddenColor);
      context.setFillStyle(item.show ? item.color : opts.legend.hiddenColor);
      switch (item.legendShape) {
        case 'line':
          context.moveTo(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio, 15 * opts.pixelRatio, 4 * opts.pixelRatio);
          break;
        case 'triangle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'diamond':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'circle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight, 5 * opts.pixelRatio, 0, 2 * Math.PI);
          break;
        case 'rect':
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);
          break;
        default:
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);}

      context.closePath();
      context.fill();
      context.stroke();

      startX += shapeWidth + shapeRight;
      var fontTrans = 0.5 * lineHeight + 0.5 * fontSize - 2;
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.show ? opts.legend.fontColor : opts.legend.hiddenColor);
      context.fillText(item.name, startX, startY + fontTrans);
      context.closePath();
      context.stroke();
      if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
        startX += measureText(item.name, fontSize) + itemGap;
        item.area[2] = startX;
      } else {
        item.area[2] = startX + measureText(item.name, fontSize) + itemGap;;
        startX -= shapeWidth + shapeRight;
        startY += lineHeight;
      }
    }
  });
}

function drawPieDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var pieOption = assign({}, {
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    ringWidth: 0,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.pie);
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = pieOption.activeRadius;
  }

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);

  series = getPieDataPoints(series, radius, process);

  var activeRadius = pieOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += pieOption.offsetAngle * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, opts.extra.pie.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_ + activeRadius, eachSeries._start_,
        eachSeries._start_ + 2 *
        eachSeries._proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(pieOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(pieOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (pieOption.border == true) {
      context.stroke();
    }
  });

  if (opts.type === 'ring') {
    var innerPieWidth = radius * 0.6;
    if (typeof opts.extra.pie.ringWidth === 'number' && opts.extra.pie.ringWidth > 0) {
      innerPieWidth = Math.max(0, radius - opts.extra.pie.ringWidth);
    }
    context.beginPath();
    context.setFillStyle(opts.background || '#ffffff');
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, innerPieWidth, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  if (process === 1 && opts.type === 'ring') {
    drawRingTitle(opts, config, context, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawRoseDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var roseOption = assign({}, {
    type: 'area',
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.rose);
  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = roseOption.activeRadius;
  }
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);
  var minRadius = roseOption.minRadius || radius * 0.5;

  series = getRoseDataPoints(series, roseOption.type, minRadius, radius, process);

  var activeRadius = roseOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += (roseOption.offsetAngle || 0) * Math.PI / 180;
    return eachSeries;
  });

  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, roseOption.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, activeRadius + eachSeries._radius_, eachSeries._start_,
        eachSeries._start_ + 2 * eachSeries._rose_proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(roseOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(roseOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 *
    eachSeries._rose_proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (roseOption.border == true) {
      context.stroke();
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawArcbarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var arcbarOption = assign({}, {
    startAngle: 0.75,
    endAngle: 0.25,
    type: 'default',
    width: 12 * opts.pixelRatio },
  opts.extra.arcbar);

  series = getArcbarDataPoints(series, arcbarOption, process);
  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  radius -= 5 * opts.pixelRatio;
  radius -= arcbarOption.width / 2;

  //背景颜色
  context.setLineWidth(arcbarOption.width);
  context.setStrokeStyle(arcbarOption.backgroundColor || '#E9E9E9');
  context.setLineCap('round');
  context.beginPath();
  if (arcbarOption.type == 'default') {
    context.arc(centerPosition.x, centerPosition.y, radius, arcbarOption.startAngle * Math.PI, arcbarOption.endAngle *
    Math.PI, false);
  } else {
    context.arc(centerPosition.x, centerPosition.y, radius, 0, 2 * Math.PI, false);
  }
  context.stroke();

  for (var i = 0; i < series.length; i++) {
    var eachSeries = series[i];
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(eachSeries.color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius, arcbarOption.startAngle * Math.PI, eachSeries._proportion_ *
    Math.PI, false);
    context.stroke();
  }

  drawRingTitle(opts, config, context, centerPosition);

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawGaugeDataPoints(categories, series, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var gaugeOption = assign({}, {
    startAngle: 0.75,
    endAngle: 0.25,
    width: 15,
    splitLine: {
      fixRadius: 0,
      splitNumber: 10,
      width: 15,
      color: '#FFFFFF',
      childNumber: 5,
      childWidth: 5 },

    pointer: {
      width: 15,
      color: 'auto' } },

  opts.extra.gauge);

  if (gaugeOption.oldAngle == undefined) {
    gaugeOption.oldAngle = gaugeOption.startAngle;
  }
  if (gaugeOption.oldData == undefined) {
    gaugeOption.oldData = 0;
  }
  categories = getGaugeAxisPoints(categories, gaugeOption.startAngle, gaugeOption.endAngle);

  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  radius -= 5 * opts.pixelRatio;
  radius -= gaugeOption.width / 2;
  var innerRadius = radius - gaugeOption.width;

  //画背景
  context.setLineWidth(gaugeOption.width);
  context.setLineCap('butt');
  for (var i = 0; i < categories.length; i++) {
    var eachCategories = categories[i];
    context.beginPath();
    context.setStrokeStyle(eachCategories.color);
    context.arc(centerPosition.x, centerPosition.y, radius, eachCategories._startAngle_ * Math.PI, eachCategories._endAngle_ *
    Math.PI, false);
    context.stroke();
  }
  context.save();

  //画刻度线
  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
  var startX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
  var endX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
  var childendX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.childWidth;

  context.translate(centerPosition.x, centerPosition.y);
  context.rotate((gaugeOption.startAngle - 1) * Math.PI);

  for (var _i12 = 0; _i12 < gaugeOption.splitLine.splitNumber + 1; _i12++) {
    context.beginPath();
    context.setStrokeStyle(gaugeOption.splitLine.color);
    context.setLineWidth(2 * opts.pixelRatio);
    context.moveTo(startX, 0);
    context.lineTo(endX, 0);
    context.stroke();
    context.rotate(splitAngle * Math.PI);
  }
  context.restore();

  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  context.rotate((gaugeOption.startAngle - 1) * Math.PI);

  for (var _i13 = 0; _i13 < gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1; _i13++) {
    context.beginPath();
    context.setStrokeStyle(gaugeOption.splitLine.color);
    context.setLineWidth(1 * opts.pixelRatio);
    context.moveTo(startX, 0);
    context.lineTo(childendX, 0);
    context.stroke();
    context.rotate(childAngle * Math.PI);
  }
  context.restore();

  //画指针
  series = getGaugeDataPoints(series, categories, gaugeOption, process);

  for (var _i14 = 0; _i14 < series.length; _i14++) {
    var eachSeries = series[_i14];
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((eachSeries._proportion_ - 1) * Math.PI);
    context.beginPath();
    context.setFillStyle(eachSeries.color);
    context.moveTo(gaugeOption.pointer.width, 0);
    context.lineTo(0, -gaugeOption.pointer.width / 2);
    context.lineTo(-innerRadius, 0);
    context.lineTo(0, gaugeOption.pointer.width / 2);
    context.lineTo(gaugeOption.pointer.width, 0);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFillStyle('#FFFFFF');
    context.arc(0, 0, gaugeOption.pointer.width / 6, 0, 2 * Math.PI, false);
    context.fill();
    context.restore();
  }

  if (opts.dataLabel !== false) {
    drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context);
  }

  drawRingTitle(opts, config, context, centerPosition);

  if (process === 1 && opts.type === 'gauge') {
    opts.extra.gauge.oldAngle = series[0]._proportion_;
    opts.extra.gauge.oldData = series[0].data;
  }
  return {
    center: centerPosition,
    radius: radius,
    innerRadius: innerRadius,
    categories: categories,
    totalAngle: totalAngle };

}

function drawRadarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var radarOption = assign({}, {
    gridColor: '#cccccc',
    labelColor: '#666666',
    opacity: 0.2 },
  opts.extra.radar);

  var coordinateAngle = getRadarCoordinateSeries(opts.categories.length);

  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };


  var radius = Math.min(centerPosition.x - (getMaxTextListLength(opts.categories) + config.radarLabelTextMargin),
  centerPosition.y - config.radarLabelTextMargin);
  //TODO逻辑不对
  radius -= opts.padding[1];

  // draw grid
  context.beginPath();
  context.setLineWidth(1 * opts.pixelRatio);
  context.setStrokeStyle(radarOption.gridColor);
  coordinateAngle.forEach(function (angle) {
    var pos = convertCoordinateOrigin(radius * Math.cos(angle), radius * Math.sin(angle), centerPosition);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.lineTo(pos.x, pos.y);
  });
  context.stroke();
  context.closePath();
  // draw split line grid

  var _loop = function _loop(i) {
    var startPos = {};
    context.beginPath();
    context.setLineWidth(1 * opts.pixelRatio);
    context.setStrokeStyle(radarOption.gridColor);
    coordinateAngle.forEach(function (angle, index) {
      var pos = convertCoordinateOrigin(radius / config.radarGridCount * i * Math.cos(angle), radius / config.radarGridCount *
      i * Math.sin(angle), centerPosition);
      if (index === 0) {
        startPos = pos;
        context.moveTo(pos.x, pos.y);
      } else {
        context.lineTo(pos.x, pos.y);
      }
    });
    context.lineTo(startPos.x, startPos.y);
    context.stroke();
    context.closePath();
  };

  for (var i = 1; i <= config.radarGridCount; i++) {
    _loop(i);
  }

  var radarDataPoints = getRadarDataPoints(coordinateAngle, centerPosition, radius, series, opts, process);

  radarDataPoints.forEach(function (eachSeries, seriesIndex) {
    // 绘制区域数据
    context.beginPath();
    context.setFillStyle(hexToRgb(eachSeries.color, radarOption.opacity));
    eachSeries.data.forEach(function (item, index) {
      if (index === 0) {
        context.moveTo(item.position.x, item.position.y);
      } else {
        context.lineTo(item.position.x, item.position.y);
      }
    });
    context.closePath();
    context.fill();

    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      var points = eachSeries.data.map(function (item) {
        return item.position;
      });
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  // draw label text
  drawRadarLabel(coordinateAngle, radius, centerPosition, opts, config, context);

  return {
    center: centerPosition,
    radius: radius,
    angleList: coordinateAngle };

}

function normalInt(min, max, iter) {
  iter = iter == 0 ? 1 : iter;
  var arr = [];
  for (var i = 0; i < iter; i++) {
    arr[i] = Math.random();
  };
  return Math.floor(arr.reduce(function (i, j) {return i + j;}) / iter * (max - min)) + min;
};

function collisionNew(area, points, width, height) {
  var isIn = false;
  for (var i = 0; i < points.length; i++) {
    if (points[i].area) {
      if (area[3] < points[i].area[1] || area[0] > points[i].area[2] || area[1] > points[i].area[3] || area[2] < points[i].area[0]) {
        if (area[0] < 0 || area[1] < 0 || area[2] > width || area[3] > height) {
          isIn = true;
          break;
        } else {
          isIn = false;
        }
      } else {
        isIn = true;
        break;
      }
    }
  }
  return isIn;
};

function getBoundingBox(data) {
  var bounds = {},coords;
  bounds.xMin = 180;
  bounds.xMax = 0;
  bounds.yMin = 90;
  bounds.yMax = 0;
  for (var i = 0; i < data.length; i++) {
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        var longitude = coords[j][0];
        var latitude = coords[j][1];
        var point = {
          x: longitude,
          y: latitude };

        bounds.xMin = bounds.xMin < point.x ? bounds.xMin : point.x;
        bounds.xMax = bounds.xMax > point.x ? bounds.xMax : point.x;
        bounds.yMin = bounds.yMin < point.y ? bounds.yMin : point.y;
        bounds.yMax = bounds.yMax > point.y ? bounds.yMax : point.y;
      }
    }
  }
  return bounds;
}

function coordinateToPoint(latitude, longitude, bounds, scale, xoffset, yoffset) {
  return {
    x: (longitude - bounds.xMin) * scale + xoffset,
    y: (bounds.yMax - latitude) * scale + yoffset };

}

function pointToCoordinate(pointY, pointX, bounds, scale, xoffset, yoffset) {
  return {
    x: (pointX - xoffset) / scale + bounds.xMin,
    y: bounds.yMax - (pointY - yoffset) / scale };

}

function isRayIntersectsSegment(poi, s_poi, e_poi) {
  if (s_poi[1] == e_poi[1]) {return false;}
  if (s_poi[1] > poi[1] && e_poi[1] > poi[1]) {return false;}
  if (s_poi[1] < poi[1] && e_poi[1] < poi[1]) {return false;}
  if (s_poi[1] == poi[1] && e_poi[1] > poi[1]) {return false;}
  if (e_poi[1] == poi[1] && s_poi[1] > poi[1]) {return false;}
  if (s_poi[0] < poi[0] && e_poi[1] < poi[1]) {return false;}
  var xseg = e_poi[0] - (e_poi[0] - s_poi[0]) * (e_poi[1] - poi[1]) / (e_poi[1] - s_poi[1]);
  if (xseg < poi[0]) {
    return false;
  } else {
    return true;
  }
}

function isPoiWithinPoly(poi, poly) {
  var sinsc = 0;
  for (var i = 0; i < poly.length; i++) {
    var epoly = poly[i][0];
    if (poly.length == 1) {
      epoly = poly[i][0];
    }
    for (var j = 0; j < epoly.length - 1; j++) {
      var s_poi = epoly[j];
      var e_poi = epoly[j + 1];
      if (isRayIntersectsSegment(poi, s_poi, e_poi)) {
        sinsc += 1;
      }
    }
  }

  if (sinsc % 2 == 1) {
    return true;
  } else {
    return false;
  }
}


function drawMapDataPoints(series, opts, config, context) {
  var mapOption = assign({}, {
    border: true,
    borderWidth: 1,
    borderColor: '#666666',
    fillOpacity: 0.6,
    activeBorderColor: '#f04864',
    activeFillColor: '#facc14',
    activeFillOpacity: 1 },
  opts.extra.map);
  var coords, point;
  var data = series;
  var bounds = getBoundingBox(data);
  var xScale = opts.width / Math.abs(bounds.xMax - bounds.xMin);
  var yScale = opts.height / Math.abs(bounds.yMax - bounds.yMin);
  var scale = xScale < yScale ? xScale : yScale;
  var xoffset = opts.width / 2 - Math.abs(bounds.xMax - bounds.xMin) / 2 * scale;
  var yoffset = opts.height / 2 - Math.abs(bounds.yMax - bounds.yMin) / 2 * scale;
  context.beginPath();
  context.clearRect(0, 0, opts.width, opts.height);
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  for (var i = 0; i < data.length; i++) {
    context.beginPath();
    context.setLineWidth(mapOption.borderWidth * opts.pixelRatio);
    context.setStrokeStyle(mapOption.borderColor);
    context.setFillStyle(hexToRgb(series[i].color, mapOption.fillOpacity));
    if (opts.tooltip) {
      if (opts.tooltip.index == i) {
        context.setStrokeStyle(mapOption.activeBorderColor);
        context.setFillStyle(hexToRgb(mapOption.activeFillColor, mapOption.activeFillOpacity));
      }
    }
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        point = coordinateToPoint(coords[j][1], coords[j][0], bounds, scale, xoffset, yoffset);
        if (j === 0) {
          context.beginPath();
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.fill();
      if (mapOption.border == true) {
        context.stroke();
      }
    }
    if (opts.dataLabel == true) {
      var centerPoint = data[i].properties.centroid;
      if (centerPoint) {
        point = coordinateToPoint(centerPoint[1], centerPoint[0], bounds, scale, xoffset, yoffset);
        var fontSize = data[i].textSize || config.fontSize;
        var text = data[i].properties.name;
        context.beginPath();
        context.setFontSize(fontSize);
        context.setFillStyle(data[i].textColor || '#666666');
        context.fillText(text, point.x - measureText(text, fontSize) / 2, point.y + fontSize / 2);
        context.closePath();
        context.stroke();
      }
    }
  }
  opts.chartData.mapData = {
    bounds: bounds,
    scale: scale,
    xoffset: xoffset,
    yoffset: yoffset };

  drawToolTipBridge(opts, config, context, 1);
  context.draw();
}

function getWordCloudPoint(opts, type) {
  var points = opts.series.sort(function (a, b) {return parseInt(b.textSize) - parseInt(a.textSize);});
  switch (type) {
    case 'normal':
      for (var i = 0; i < points.length; i++) {
        var text = points[i].name;
        var tHeight = points[i].textSize;
        var tWidth = measureText(text, tHeight);
        var x = void 0,y = void 0;
        var area = void 0;
        var breaknum = 0;
        while (true) {
          breaknum++;
          x = normalInt(-opts.width / 2, opts.width / 2, 5) - tWidth / 2;
          y = normalInt(-opts.height / 2, opts.height / 2, 5) + tHeight / 2;
          area = [x - 5 + opts.width / 2, y - 5 - tHeight + opts.height / 2, x + tWidth + 5 + opts.width / 2, y + 5 + opts.height / 2];
          var isCollision = collisionNew(area, points, opts.width, opts.height);
          if (!isCollision) break;
          if (breaknum == 1000) {
            area = [-100, -100, -100, -100];
            break;
          }
        };
        points[i].area = area;
      }
      break;
    case 'vertical':var
      Spin = function Spin() {
        //获取均匀随机值，是否旋转，旋转的概率为（1-0.5）
        if (Math.random() > 0.7) {
          return true;
        } else {return false;};
      };;
      for (var _i15 = 0; _i15 < points.length; _i15++) {
        var _text = points[_i15].name;
        var _tHeight = points[_i15].textSize;
        var _tWidth = measureText(_text, _tHeight);
        var isSpin = Spin();
        var _x = void 0,_y = void 0,_area = void 0,areav = void 0;
        var _breaknum = 0;
        while (true) {
          _breaknum++;
          var _isCollision = void 0;
          if (isSpin) {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_y - 5 - _tWidth + opts.width / 2, -_x - 5 + opts.height / 2, _y + 5 + opts.width / 2, -_x + _tHeight + 5 + opts.height / 2];
            areav = [opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) - 5, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) - 5, opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) + _tHeight, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) + _tWidth + 5];
            _isCollision = collisionNew(areav, points, opts.height, opts.width);
          } else {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_x - 5 + opts.width / 2, _y - 5 - _tHeight + opts.height / 2, _x + _tWidth + 5 + opts.width / 2, _y + 5 + opts.height / 2];
            _isCollision = collisionNew(_area, points, opts.width, opts.height);
          }
          if (!_isCollision) break;
          if (_breaknum == 1000) {
            _area = [-1000, -1000, -1000, -1000];
            break;
          }
        };
        if (isSpin) {
          points[_i15].area = areav;
          points[_i15].areav = _area;
        } else {
          points[_i15].area = _area;
        }
        points[_i15].rotate = isSpin;
      };
      break;}

  return points;
}


function drawWordCloudDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var wordOption = assign({}, {
    type: 'normal',
    autoColors: true },
  opts.extra.word);

  context.beginPath();
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  context.save();
  var points = opts.chartData.wordCloudData;
  context.translate(opts.width / 2, opts.height / 2);

  for (var i = 0; i < points.length; i++) {
    context.save();
    if (points[i].rotate) {
      context.rotate(90 * Math.PI / 180);
    }
    var text = points[i].name;
    var tHeight = points[i].textSize;
    var tWidth = measureText(text, tHeight);
    context.beginPath();
    context.setStrokeStyle(points[i].color);
    context.setFillStyle(points[i].color);
    context.setFontSize(tHeight);
    if (points[i].rotate) {
      if (points[i].areav[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
        }
      }
    } else {
      if (points[i].area[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
        }

      }
    }

    context.stroke();
    context.restore();
  }
  context.restore();
}

function drawFunnelDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var funnelOption = assign({}, {
    activeWidth: 10,
    activeOpacity: 0.3,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fillOpacity: 1,
    labelAlign: 'right' },
  opts.extra.funnel);
  var eachSpacing = (opts.height - opts.area[0] - opts.area[2]) / series.length;
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.height - opts.area[2] };

  var activeWidth = funnelOption.activeWidth;
  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - activeWidth, (opts.height - opts.area[0] - opts.area[2]) / 2 - activeWidth);
  series = getFunnelDataPoints(series, radius, process);
  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  for (var i = 0; i < series.length; i++) {
    if (i == 0) {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(-activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(activeWidth, 0);
          context.lineTo(-activeWidth, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing, centerPosition.x + series[i].radius, centerPosition.y];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    } else {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(0, 0);
          context.lineTo(-series[i - 1].radius - activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(series[i - 1].radius + activeWidth, 0);
          context.lineTo(0, 0);
          context.closePath();
          context.fill();
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing * (i + 1), centerPosition.x + series[i].radius, centerPosition.y - eachSpacing * i];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i - 1].radius, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(series[i - 1].radius, 0);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    }
    context.translate(0, -eachSpacing);
  }
  context.restore();

  if (opts.dataLabel !== false && process === 1) {
    drawFunnelText(series, opts, context, eachSpacing, funnelOption.labelAlign, activeWidth, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawFunnelText(series, opts, context, eachSpacing, labelAlign, activeWidth, centerPosition) {
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var startX = void 0,endX = void 0,startY = void 0,fontSize = void 0;
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    if (labelAlign == 'right') {
      if (i == 0) {
        startX = (item.funnelArea[2] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[2] + series[i - 1].funnelArea[2]) / 2;
      }
      endX = startX + activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX + 5, startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    } else {
      if (i == 0) {
        startX = (item.funnelArea[0] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[0] + series[i - 1].funnelArea[0]) / 2;
      }
      endX = startX - activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX - 5 - measureText(text), startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    }

  }
}


function drawCanvas(opts, context) {
  context.draw();
}

var Timing = {
  easeIn: function easeIn(pos) {
    return Math.pow(pos, 3);
  },
  easeOut: function easeOut(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },
  easeInOut: function easeInOut(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
  },
  linear: function linear(pos) {
    return pos;
  } };


function Animation(opts) {
  this.isStop = false;
  opts.duration = typeof opts.duration === 'undefined' ? 1000 : opts.duration;
  opts.timing = opts.timing || 'linear';
  var delay = 17;

  function createAnimationFrame() {
    if (typeof setTimeout !== 'undefined') {
      return function (step, delay) {
        setTimeout(function () {
          var timeStamp = +new Date();
          step(timeStamp);
        }, delay);
      };
    } else if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame;
    } else {
      return function (step) {
        step(null);
      };
    }
  };
  var animationFrame = createAnimationFrame();
  var startTimeStamp = null;
  var _step = function step(timestamp) {
    if (timestamp === null || this.isStop === true) {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
      return;
    }
    if (startTimeStamp === null) {
      startTimeStamp = timestamp;
    }
    if (timestamp - startTimeStamp < opts.duration) {
      var process = (timestamp - startTimeStamp) / opts.duration;
      var timingFunction = Timing[opts.timing];
      process = timingFunction(process);

      opts.onProcess && opts.onProcess(process);
      animationFrame(_step, delay);
    } else {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
    }
  };
  _step = _step.bind(this);
  animationFrame(_step, delay);
}

// stop animation immediately
// and tigger onAnimationFinish
Animation.prototype.stop = function () {
  this.isStop = true;
};

function drawCharts(type, opts, config, context) {
  var _this = this;
  var series = opts.series;
  var categories = opts.categories;
  series = fillSeries(series, opts, config);
  var duration = opts.animation ? opts.duration : 0;
  this.animationInstance && this.animationInstance.stop();
  var seriesMA = null;
  if (type == 'candle') {
    var average = assign({}, opts.extra.candle.average);
    if (average.show) {
      seriesMA = calCandleMA(average.day, average.name, average.color, series[0].data);
      seriesMA = fillSeries(seriesMA, opts, config);
      opts.seriesMA = seriesMA;
    } else if (opts.seriesMA) {
      seriesMA = opts.seriesMA = fillSeries(opts.seriesMA, opts, config);
    } else {
      seriesMA = series;
    }
  } else {
    seriesMA = series;
  }

  /* 过滤掉show=false的series */
  opts._series_ = series = filterSeries(series);

  //重新计算图表区域

  opts.area = new Array(4);
  //复位绘图区域
  for (var j = 0; j < 4; j++) {
    opts.area[j] = opts.padding[j];
  }

  //通过计算三大区域：图例、X轴、Y轴的大小，确定绘图区域
  var _calLegendData = calLegendData(seriesMA, opts, config, opts.chartData),
  legendHeight = _calLegendData.area.wholeHeight,
  legendWidth = _calLegendData.area.wholeWidth;
  //TODO废弃config.legendHeight参数
  config.legendHeight = legendHeight;
  switch (opts.legend.position) {
    case 'top':
      opts.area[0] += legendHeight;
      break;
    case 'bottom':
      opts.area[2] += legendHeight;
      break;
    case 'left':
      opts.area[3] += legendWidth;
      break;
    case 'right':
      opts.area[1] += legendWidth;
      break;}


  var _calYAxisData = {},yAxisWidth = 0;
  if (opts.type === 'line' || opts.type === 'column' || opts.type === 'area' || opts.type === 'mix' || opts.type === 'candle') {
    _calYAxisData = calYAxisData(series, opts, config);
    yAxisWidth = _calYAxisData.yAxisWidth;
    config.yAxisWidth = yAxisWidth;
    opts.area[3] += yAxisWidth;
  } else {
    config.yAxisWidth = yAxisWidth;
  }
  opts.chartData.yAxisData = _calYAxisData;

  if (opts.categories && opts.categories.length) {
    opts.chartData.xAxisData = getXAxisPoints(opts.categories, opts, config);
    var _calCategoriesData = calCategoriesData(opts.categories, opts, config, opts.chartData.xAxisData.eachSpacing),
    xAxisHeight = _calCategoriesData.xAxisHeight,
    angle = _calCategoriesData.angle;
    config.xAxisHeight = xAxisHeight;
    config._xAxisTextAngle_ = angle;
    opts.area[2] += xAxisHeight;
    opts.chartData.categoriesData = _calCategoriesData;
  }

  //计算右对齐偏移距离
  if (opts.enableScroll && opts.xAxis.scrollAlign == 'right' && opts._scrollDistance_ === undefined) {
    var offsetLeft = 0,
    xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
    startX = opts.chartData.xAxisData.startX,
    endX = opts.chartData.xAxisData.endX,
    eachSpacing = opts.chartData.xAxisData.eachSpacing;
    var totalWidth = eachSpacing * (xAxisPoints.length - 1);
    var screenWidth = endX - startX;
    offsetLeft = screenWidth - totalWidth;
    _this.scrollOption = {
      currentOffset: offsetLeft,
      startTouchX: offsetLeft,
      distance: 0,
      lastMoveTime: 0 };

    opts._scrollDistance_ = offsetLeft;
  }

  if (type === 'pie' || type === 'ring' || type === 'rose') {
    config._pieTextMaxLength_ = opts.dataLabel === false ? 0 : getPieTextMaxLength(seriesMA);
  }

  switch (type) {
    case 'word':
      var wordOption = assign({}, {
        type: 'normal',
        autoColors: true },
      opts.extra.word);
      if (opts.updateData == true || opts.updateData == undefined) {
        opts.chartData.wordCloudData = getWordCloudPoint(opts, wordOption.type);
      }
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawWordCloudDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'map':
      context.clearRect(0, 0, opts.width, opts.height);
      drawMapDataPoints(series, opts, config, context);
      break;
    case 'funnel':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.funnelData = drawFunnelDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'line':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawLineDataPoints = drawLineDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawLineDataPoints.xAxisPoints,
          calPoints = _drawLineDataPoints.calPoints,
          eachSpacing = _drawLineDataPoints.eachSpacing,
          minRange = _drawLineDataPoints.minRange,
          maxRange = _drawLineDataPoints.maxRange;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(minRange, maxRange, opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);

        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'mix':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawMixDataPoints = drawMixDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawMixDataPoints.xAxisPoints,
          calPoints = _drawMixDataPoints.calPoints,
          eachSpacing = _drawMixDataPoints.eachSpacing,
          minRange = _drawMixDataPoints.minRange,
          maxRange = _drawMixDataPoints.maxRange;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(minRange, maxRange, opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'column':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawColumnDataPoints = drawColumnDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawColumnDataPoints.xAxisPoints,
          calPoints = _drawColumnDataPoints.calPoints,
          eachSpacing = _drawColumnDataPoints.eachSpacing,
          minRange = _drawColumnDataPoints.minRange,
          maxRange = _drawColumnDataPoints.maxRange;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(minRange, maxRange, opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'area':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawAreaDataPoints = drawAreaDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawAreaDataPoints.xAxisPoints,
          calPoints = _drawAreaDataPoints.calPoints,
          eachSpacing = _drawAreaDataPoints.eachSpacing,
          minRange = _drawAreaDataPoints.minRange,
          maxRange = _drawAreaDataPoints.maxRange;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(minRange, maxRange, opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'ring':
    case 'pie':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawPieDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'rose':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawRoseDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'radar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.radarData = drawRadarDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'arcbar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.arcbarData = drawArcbarDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'gauge':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.gaugeData = drawGaugeDataPoints(categories, series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'candle':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawCandleDataPoints = drawCandleDataPoints(series, seriesMA, opts, config, context, process),
          xAxisPoints = _drawCandleDataPoints.xAxisPoints,
          calPoints = _drawCandleDataPoints.calPoints,
          eachSpacing = _drawCandleDataPoints.eachSpacing,
          minRange = _drawCandleDataPoints.minRange,
          maxRange = _drawCandleDataPoints.maxRange;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(minRange, maxRange, opts, config, context);
          }
          if (seriesMA) {
            drawLegend(seriesMA, opts, config, context, opts.chartData);
          } else {
            drawLegend(opts.series, opts, config, context, opts.chartData);
          }
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;}

}

// simple event implement

function Event() {
  this.events = {};
}

Event.prototype.addEventListener = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Event.prototype.trigger = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var type = args[0];
  var params = args.slice(1);
  if (!!this.events[type]) {
    this.events[type].forEach(function (listener) {
      try {
        listener.apply(null, params);
      } catch (e) {
        console.error(e);
      }
    });
  }
};

var Charts = function Charts(opts) {
  opts.pixelRatio = opts.pixelRatio ? opts.pixelRatio : 1;
  opts.fontSize = opts.fontSize ? opts.fontSize * opts.pixelRatio : 13 * opts.pixelRatio;
  opts.title = assign({}, opts.title);
  opts.subtitle = assign({}, opts.subtitle);
  opts.duration = opts.duration ? opts.duration : 1000;
  opts.yAxis = assign({}, {
    gridType: 'solid',
    dashLength: 4 * opts.pixelRatio },
  opts.yAxis);
  opts.xAxis = assign({}, {
    rotateLabel: false,
    type: 'calibration',
    gridType: 'solid',
    dashLength: 4 * opts.pixelRatio,
    scrollAlign: 'left',
    boundaryGap: 'center' },
  opts.xAxis);
  opts.legend = assign({}, {
    show: true,
    position: 'bottom',
    float: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    padding: 5,
    margin: 5,
    itemGap: 10,
    fontSize: opts.fontSize,
    lineHeight: opts.fontSize,
    fontColor: '#333333',
    format: {},
    hiddenColor: '#CECECE' },
  opts.legend);
  opts.legend.borderWidth = opts.legend.borderWidth * opts.pixelRatio;
  opts.legend.itemGap = opts.legend.itemGap * opts.pixelRatio;
  opts.legend.padding = opts.legend.padding * opts.pixelRatio;
  opts.legend.margin = opts.legend.margin * opts.pixelRatio;
  opts.extra = assign({}, opts.extra);
  opts.rotate = opts.rotate ? true : false;
  opts.animation = opts.animation ? true : false;

  var config$$1 = JSON.parse(JSON.stringify(config));
  config$$1.colors = opts.colors ? opts.colors : config$$1.colors;
  config$$1.yAxisTitleWidth = opts.yAxis.disabled !== true && opts.yAxis.title ? config$$1.yAxisTitleWidth : 0;
  if (opts.type == 'pie' || opts.type == 'ring') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.pie.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  if (opts.type == 'rose') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.rose.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  config$$1.pieChartTextPadding = opts.dataLabel === false ? 0 : config$$1.pieChartTextPadding * opts.pixelRatio;
  config$$1.yAxisSplit = opts.yAxis.splitNumber ? opts.yAxis.splitNumber : config.yAxisSplit;

  //屏幕旋转
  config$$1.rotate = opts.rotate;
  if (opts.rotate) {
    var tempWidth = opts.width;
    var tempHeight = opts.height;
    opts.width = tempHeight;
    opts.height = tempWidth;
  }

  //适配高分屏
  opts.padding = opts.padding ? opts.padding : config$$1.padding;
  for (var i = 0; i < 4; i++) {
    opts.padding[i] *= opts.pixelRatio;
  }
  config$$1.yAxisWidth = config.yAxisWidth * opts.pixelRatio;
  config$$1.xAxisHeight = config.xAxisHeight * opts.pixelRatio;
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    config$$1.xAxisHeight += 6 * opts.pixelRatio;
  }
  config$$1.xAxisLineHeight = config.xAxisLineHeight * opts.pixelRatio;
  config$$1.legendHeight = config.legendHeight * opts.pixelRatio;
  config$$1.fontSize = opts.fontSize;
  config$$1.titleFontSize = config.titleFontSize * opts.pixelRatio;
  config$$1.subtitleFontSize = config.subtitleFontSize * opts.pixelRatio;
  config$$1.toolTipPadding = config.toolTipPadding * opts.pixelRatio;
  config$$1.toolTipLineHeight = config.toolTipLineHeight * opts.pixelRatio;
  config$$1.columePadding = config.columePadding * opts.pixelRatio;
  opts.$this = opts.$this ? opts.$this : this;

  this.context = uni.createCanvasContext(opts.canvasId, opts.$this);
  /* 兼容原生H5
                                                                     this.context = document.getElementById(opts.canvasId).getContext("2d");
                                                                     this.context.setStrokeStyle = function(e){ return this.strokeStyle=e; }
                                                                     this.context.setLineWidth = function(e){ return this.lineWidth=e; }
                                                                     this.context.setLineCap = function(e){ return this.lineCap=e; }
                                                                     this.context.setFontSize = function(e){ return this.font=e+"px sans-serif"; }
                                                                     this.context.setFillStyle = function(e){ return this.fillStyle=e; }
                                                                     this.context.draw = function(){ }
                                                                     */

  opts.chartData = {};
  this.event = new Event();
  this.scrollOption = {
    currentOffset: 0,
    startTouchX: 0,
    distance: 0,
    lastMoveTime: 0 };


  this.opts = opts;
  this.config = config$$1;

  drawCharts.call(this, opts.type, opts, config$$1, this.context);
};

Charts.prototype.updateData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.opts = assign({}, this.opts, data);
  this.opts.updateData = true;
  var scrollPosition = data.scrollPosition || 'current';
  switch (scrollPosition) {
    case 'current':
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      break;
    case 'left':
      this.opts._scrollDistance_ = 0;
      this.scrollOption = {
        currentOffset: 0,
        startTouchX: 0,
        distance: 0,
        lastMoveTime: 0 };

      break;
    case 'right':
      var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
      yAxisWidth = _calYAxisData.yAxisWidth;
      this.config.yAxisWidth = yAxisWidth;
      var offsetLeft = 0;
      var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
      xAxisPoints = _getXAxisPoints0.xAxisPoints,
      startX = _getXAxisPoints0.startX,
      endX = _getXAxisPoints0.endX,
      eachSpacing = _getXAxisPoints0.eachSpacing;
      var totalWidth = eachSpacing * (xAxisPoints.length - 1);
      var screenWidth = endX - startX;
      offsetLeft = screenWidth - totalWidth;
      this.scrollOption = {
        currentOffset: offsetLeft,
        startTouchX: offsetLeft,
        distance: 0,
        lastMoveTime: 0 };

      this.opts._scrollDistance_ = offsetLeft;
      break;}

  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.zoom = function () {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.opts.xAxis.itemCount;
  if (this.opts.enableScroll !== true) {
    console.log('请启用滚动条后使用！');
    return;
  }
  //当前屏幕中间点
  var centerPoint = Math.round(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + Math.round(
  this.opts.xAxis.itemCount / 2);
  this.opts.animation = false;
  this.opts.xAxis.itemCount = val.itemCount;
  //重新计算x轴偏移距离
  var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
  yAxisWidth = _calYAxisData.yAxisWidth;
  this.config.yAxisWidth = yAxisWidth;
  var offsetLeft = 0;
  var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
  xAxisPoints = _getXAxisPoints0.xAxisPoints,
  startX = _getXAxisPoints0.startX,
  endX = _getXAxisPoints0.endX,
  eachSpacing = _getXAxisPoints0.eachSpacing;
  var centerLeft = eachSpacing * centerPoint;
  var screenWidth = endX - startX;
  var MaxLeft = screenWidth - eachSpacing * (xAxisPoints.length - 1);
  offsetLeft = screenWidth / 2 - centerLeft;
  if (offsetLeft > 0) {
    offsetLeft = 0;
  }
  if (offsetLeft < MaxLeft) {
    offsetLeft = MaxLeft;
  }
  this.scrollOption = {
    currentOffset: offsetLeft,
    startTouchX: offsetLeft,
    distance: 0,
    lastMoveTime: 0 };

  this.opts._scrollDistance_ = offsetLeft;
  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.stopAnimation = function () {
  this.animationInstance && this.animationInstance.stop();
};

Charts.prototype.addEventListener = function (type, listener) {
  this.event.addEventListener(type, listener);
};

Charts.prototype.getCurrentDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose') {
      return findPieChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.pieData);
    } else if (this.opts.type === 'radar') {
      return findRadarChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.radarData, this.opts.categories.length);
    } else if (this.opts.type === 'funnel') {
      return findFunnelChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.funnelData);
    } else if (this.opts.type === 'map') {
      return findMapChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts);
    } else if (this.opts.type === 'word') {
      return findWordChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.wordCloudData);
    } else {
      return findCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.xAxisPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
  }
  return -1;
};

Charts.prototype.getLegendDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    return findLegendIndex({
      x: _touches$.x,
      y: _touches$.y },
    this.opts.chartData.legendData);
  }
  return -1;
};

Charts.prototype.touchLegend = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    var index = this.getLegendDataIndex(e);
    if (index >= 0) {
      this.opts.series[index].show = !this.opts.series[index].show;
      this.opts.animation = option.animation ? true : false;
      drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
    }
  }

};

Charts.prototype.showToolTip = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (!touches) {
    console.log("touchError");
  }
  var _touches$ = getTouches(touches, this.opts, e);
  var currentOffset = this.scrollOption.currentOffset;
  var opts = assign({}, this.opts, {
    _scrollDistance_: currentOffset,
    animation: false });

  if (this.opts.type === 'line' || this.opts.type === 'area' || this.opts.type === 'column') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'mix') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getMixToolTipData = getMixToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getMixToolTipData.textList,
        offset = _getMixToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'candle') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getCandleToolTipData(this.opts.series[0].data, seriesData, this.opts.chartData.calPoints,
        index, this.opts.categories, this.opts.extra.candle, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose' || this.opts.type === 'funnel') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.name + ': ' + seriesData.data,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'map' || this.opts.type === 'word') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.properties.name,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    opts.updateData = false;
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'radar') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var textList = seriesData.map(function (item) {
          return {
            text: option.format ? option.format(item) : item.name + ': ' + item.data,
            color: item.color };

        });
        var offset = {
          x: _touches$.x,
          y: _touches$.y };

        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.translate = function (distance) {
  this.scrollOption = {
    currentOffset: distance,
    startTouchX: distance,
    distance: 0,
    lastMoveTime: 0 };

  var opts = assign({}, this.opts, {
    _scrollDistance_: distance,
    animation: false });

  drawCharts.call(this, this.opts.type, opts, this.config, this.context);
};

Charts.prototype.scrollStart = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    this.scrollOption.startTouchX = _touches$.x;
  }
};

Charts.prototype.scroll = function (e) {
  if (this.scrollOption.lastMoveTime === 0) {
    this.scrollOption.lastMoveTime = Date.now();
  }
  var Limit = this.opts.extra.touchMoveLimit || 20;
  var currMoveTime = Date.now();
  var duration = currMoveTime - this.scrollOption.lastMoveTime;
  if (duration < Math.floor(1000 / Limit)) return;
  this.scrollOption.lastMoveTime = currMoveTime;
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches && this.opts.enableScroll === true) {
    var _touches$ = getTouches(touches, this.opts, e);
    var _distance;
    _distance = _touches$.x - this.scrollOption.startTouchX;
    var currentOffset = this.scrollOption.currentOffset;
    var validDistance = calValidDistance(currentOffset + _distance, this.opts.chartData, this.config, this.opts);
    this.scrollOption.distance = _distance = validDistance - currentOffset;
    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset + _distance,
      animation: false });

    drawCharts.call(this, opts.type, opts, this.config, this.context);
    return currentOffset + _distance;
  }
};

Charts.prototype.scrollEnd = function (e) {
  if (this.opts.enableScroll === true) {
    var _scrollOption = this.scrollOption,
    currentOffset = _scrollOption.currentOffset,
    distance = _scrollOption.distance;
    this.scrollOption.currentOffset = currentOffset + distance;
    this.scrollOption.distance = 0;
  }
};
if ( true && typeof module.exports === "object") {
  module.exports = Charts;
  //export default Charts;//建议使用nodejs的module导出方式，如报错请使用export方式导出
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 781:
/*!**************************************!*\
  !*** E:/ceshi/lvshi/common/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.pathToBase64 = pathToBase64;exports.base64ToPath = base64ToPath;function getLocalFilePath(path) {
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
}

var index = 0;
function getNewFileId() {
  return Date.now() + String(index++);
}

function biggerThan(v1, v2) {
  var v1Array = v1.split('.');
  var v2Array = v2.split('.');
  var update = false;
  for (var index = 0; index < v2Array.length; index++) {
    var diff = v1Array[index] - v2Array[index];
    if (diff !== 0) {
      update = diff > 0;
      break;
    }
  }
  return update;
}

function pathToBase64(path) {
  return new Promise(function (resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      if (typeof FileReader === 'function') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          if (this.status === 200) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
              resolve(e.target.result);
            };
            fileReader.onerror = reject;
            fileReader.readAsDataURL(this.response);
          }
        };
        xhr.onerror = reject;
        xhr.send();
        return;
      }
      var canvas = document.createElement('canvas');
      var c2x = canvas.getContext('2d');
      var img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        c2x.drawImage(img, 0, 0);
        resolve(canvas.toDataURL());
        canvas.height = canvas.width = 0;
      };
      img.onerror = reject;
      img.src = path;
      return;
    }
    if (typeof plus === 'object') {
      plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function (entry) {
        entry.file(function (file) {
          var fileReader = new plus.io.FileReader();
          fileReader.onload = function (data) {
            resolve(data.target.result);
          };
          fileReader.onerror = function (error) {
            reject(error);
          };
          fileReader.readAsDataURL(file);
        }, function (error) {
          reject(error);
        });
      }, function (error) {
        reject(error);
      });
      return;
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      wx.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function success(res) {
          resolve('data:image/png;base64,' + res.data);
        },
        fail: function fail(error) {
          reject(error);
        } });

      return;
    }
    reject(new Error('not support'));
  });
}

function base64ToPath(base64) {
  return new Promise(function (resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      base64 = base64.split(',');
      var type = base64[0].match(/:(.*?);/)[1];
      var str = atob(base64[1]);
      var n = str.length;
      var array = new Uint8Array(n);
      while (n--) {
        array[n] = str.charCodeAt(n);
      }
      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], { type: type })));
    }
    var extName = base64.match(/data\:\S+\/(\S+);/);
    if (extName) {
      extName = extName[1];
    } else {
      reject(new Error('base64 error'));
    }
    var fileName = getNewFileId() + '.' + extName;
    if (typeof plus === 'object') {
      var basePath = '_doc';
      var dirPath = 'uniapp_temp';
      var filePath = basePath + '/' + dirPath + '/' + fileName;
      if (!biggerThan(plus.os.name === 'Android' ? '1.9.9.80627' : '1.9.9.80472', plus.runtime.innerVersion)) {
        plus.io.resolveLocalFileSystemURL(basePath, function (entry) {
          entry.getDirectory(dirPath, {
            create: true,
            exclusive: false },
          function (entry) {
            entry.getFile(fileName, {
              create: true,
              exclusive: false },
            function (entry) {
              entry.createWriter(function (writer) {
                writer.onwrite = function () {
                  resolve(filePath);
                };
                writer.onerror = reject;
                writer.seek(0);
                writer.writeAsBinary(base64.replace(/^data:\S+\/\S+;base64,/, ''));
              }, reject);
            }, reject);
          }, reject);
        }, reject);
        return;
      }
      var bitmap = new plus.nativeObj.Bitmap(fileName);
      bitmap.loadBase64Data(base64, function () {
        bitmap.save(filePath, {}, function () {
          bitmap.clear();
          resolve(filePath);
        }, function (error) {
          bitmap.clear();
          reject(error);
        });
      }, function (error) {
        bitmap.clear();
        reject(error);
      });
      return;
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      var filePath = wx.env.USER_DATA_PATH + '/' + fileName;
      wx.getFileSystemManager().writeFile({
        filePath: filePath,
        data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
        encoding: 'base64',
        success: function success() {
          resolve(filePath);
        },
        fail: function fail(error) {
          reject(error);
        } });

      return;
    }
    reject(new Error('not support'));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 98:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 99);

/***/ }),

/***/ 99:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 100);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ })

}]);