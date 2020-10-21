/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/example/example.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/assets/fonts.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js!./src/assets/fonts.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/fonts.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/base/base.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js!./src/pages/base/base.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/base/base.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/example/example.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js!./src/pages/example/example.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/example/example.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/plugin/plugin.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js!./src/plugin/plugin.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/plugin/plugin.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src sync recursive \\.(ttf|eot|woff|woff2|svg|png|jpg)$":
/*!******************************************************!*\
  !*** ./src sync \.(ttf|eot|woff|woff2|svg|png|jpg)$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./assets/fonts/MaterialIcons/MaterialIcons-Regular.eot\": \"./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.eot\",\n\t\"./assets/fonts/MaterialIcons/MaterialIcons-Regular.svg\": \"./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.svg\",\n\t\"./assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf\": \"./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf\",\n\t\"./assets/fonts/MaterialIcons/MaterialIcons-Regular.woff\": \"./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff\",\n\t\"./assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2\": \"./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2\",\n\t\"./assets/fonts/Montserrat/montserrat-bold.eot\": \"./src/assets/fonts/Montserrat/montserrat-bold.eot\",\n\t\"./assets/fonts/Montserrat/montserrat-bold.svg\": \"./src/assets/fonts/Montserrat/montserrat-bold.svg\",\n\t\"./assets/fonts/Montserrat/montserrat-bold.ttf\": \"./src/assets/fonts/Montserrat/montserrat-bold.ttf\",\n\t\"./assets/fonts/Montserrat/montserrat-bold.woff\": \"./src/assets/fonts/Montserrat/montserrat-bold.woff\",\n\t\"./assets/fonts/Montserrat/montserrat-bold.woff2\": \"./src/assets/fonts/Montserrat/montserrat-bold.woff2\",\n\t\"./assets/fonts/Montserrat/montserrat-regular.eot\": \"./src/assets/fonts/Montserrat/montserrat-regular.eot\",\n\t\"./assets/fonts/Montserrat/montserrat-regular.svg\": \"./src/assets/fonts/Montserrat/montserrat-regular.svg\",\n\t\"./assets/fonts/Montserrat/montserrat-regular.ttf\": \"./src/assets/fonts/Montserrat/montserrat-regular.ttf\",\n\t\"./assets/fonts/Montserrat/montserrat-regular.woff\": \"./src/assets/fonts/Montserrat/montserrat-regular.woff\",\n\t\"./assets/fonts/Montserrat/montserrat-regular.woff2\": \"./src/assets/fonts/Montserrat/montserrat-regular.woff2\",\n\t\"./assets/fonts/OpenSans/open-sans-bold.eot\": \"./src/assets/fonts/OpenSans/open-sans-bold.eot\",\n\t\"./assets/fonts/OpenSans/open-sans-bold.svg\": \"./src/assets/fonts/OpenSans/open-sans-bold.svg\",\n\t\"./assets/fonts/OpenSans/open-sans-bold.ttf\": \"./src/assets/fonts/OpenSans/open-sans-bold.ttf\",\n\t\"./assets/fonts/OpenSans/open-sans-bold.woff\": \"./src/assets/fonts/OpenSans/open-sans-bold.woff\",\n\t\"./assets/fonts/OpenSans/open-sans-bold.woff2\": \"./src/assets/fonts/OpenSans/open-sans-bold.woff2\",\n\t\"./assets/fonts/OpenSans/open-sans-regular.eot\": \"./src/assets/fonts/OpenSans/open-sans-regular.eot\",\n\t\"./assets/fonts/OpenSans/open-sans-regular.svg\": \"./src/assets/fonts/OpenSans/open-sans-regular.svg\",\n\t\"./assets/fonts/OpenSans/open-sans-regular.ttf\": \"./src/assets/fonts/OpenSans/open-sans-regular.ttf\",\n\t\"./assets/fonts/OpenSans/open-sans-regular.woff\": \"./src/assets/fonts/OpenSans/open-sans-regular.woff\",\n\t\"./assets/fonts/OpenSans/open-sans-regular.woff2\": \"./src/assets/fonts/OpenSans/open-sans-regular.woff2\",\n\t\"./assets/fonts/Quicksand/quicksand-bold.eot\": \"./src/assets/fonts/Quicksand/quicksand-bold.eot\",\n\t\"./assets/fonts/Quicksand/quicksand-bold.svg\": \"./src/assets/fonts/Quicksand/quicksand-bold.svg\",\n\t\"./assets/fonts/Quicksand/quicksand-bold.ttf\": \"./src/assets/fonts/Quicksand/quicksand-bold.ttf\",\n\t\"./assets/fonts/Quicksand/quicksand-bold.woff\": \"./src/assets/fonts/Quicksand/quicksand-bold.woff\",\n\t\"./assets/fonts/Quicksand/quicksand-bold.woff2\": \"./src/assets/fonts/Quicksand/quicksand-bold.woff2\",\n\t\"./assets/fonts/Quicksand/quicksand-regular.eot\": \"./src/assets/fonts/Quicksand/quicksand-regular.eot\",\n\t\"./assets/fonts/Quicksand/quicksand-regular.svg\": \"./src/assets/fonts/Quicksand/quicksand-regular.svg\",\n\t\"./assets/fonts/Quicksand/quicksand-regular.ttf\": \"./src/assets/fonts/Quicksand/quicksand-regular.ttf\",\n\t\"./assets/fonts/Quicksand/quicksand-regular.woff\": \"./src/assets/fonts/Quicksand/quicksand-regular.woff\",\n\t\"./assets/fonts/Quicksand/quicksand-regular.woff2\": \"./src/assets/fonts/Quicksand/quicksand-regular.woff2\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive \\\\.(ttf|eot|woff|woff2|svg|png|jpg)$\";\n\n//# sourceURL=webpack:///./src_sync_\\.(ttf%7Ceot%7Cwoff%7Cwoff2%7Csvg%7Cpng%7Cjpg)$?");

/***/ }),

/***/ "./src/assets/fonts.scss":
/*!*******************************!*\
  !*** ./src/assets/fonts.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ref--7-3!../../node_modules/sass-loader/dist/cjs.js!./fonts.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/assets/fonts.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/fonts.scss?");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.eot":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.eot ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/MaterialIcons/MaterialIcons-Regular.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.eot?");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.svg":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.svg ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/MaterialIcons/MaterialIcons-Regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff?");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2 ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2\");\n\n//# sourceURL=webpack:///./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-bold.eot":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-bold.eot ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-bold.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-bold.eot?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-bold.svg":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-bold.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-bold.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-bold.ttf ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-bold.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-bold.woff":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-bold.woff ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-bold.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-bold.woff?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-bold.woff2":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-bold.woff2 ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-bold.woff2\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-bold.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-regular.eot":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-regular.eot ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-regular.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-regular.eot?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-regular.svg":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-regular.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-regular.ttf":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-regular.ttf ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-regular.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-regular.woff":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-regular.woff ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-regular.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-regular.woff?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-regular.woff2":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-regular.woff2 ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-regular.woff2\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-regular.woff2?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-bold.eot":
/*!******************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-bold.eot ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-bold.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-bold.eot?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-bold.svg":
/*!******************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-bold.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-bold.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-bold.ttf ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-bold.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-bold.woff":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-bold.woff ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-bold.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-bold.woff?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-bold.woff2":
/*!********************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-bold.woff2 ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-bold.woff2\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-bold.woff2?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-regular.eot":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-regular.eot ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-regular.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-regular.eot?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-regular.svg":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-regular.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-regular.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-regular.ttf ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-regular.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-regular.woff":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-regular.woff ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-regular.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-regular.woff?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-regular.woff2":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-regular.woff2 ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-regular.woff2\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-regular.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-bold.eot":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-bold.eot ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-bold.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-bold.eot?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-bold.svg":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-bold.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-bold.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-bold.ttf ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-bold.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-bold.woff":
/*!********************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-bold.woff ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-bold.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-bold.woff?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-bold.woff2":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-bold.woff2 ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-bold.woff2\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-bold.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-regular.eot":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-regular.eot ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-regular.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-regular.eot?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-regular.svg":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-regular.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-regular.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-regular.ttf ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-regular.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-regular.woff":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-regular.woff ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-regular.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-regular.woff?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-regular.woff2":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-regular.woff2 ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-regular.woff2\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-regular.woff2?");

/***/ }),

/***/ "./src/pages/base/base.js":
/*!********************************!*\
  !*** ./src/pages/base/base.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_fonts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/fonts.scss */ \"./src/assets/fonts.scss\");\n/* harmony import */ var _assets_fonts_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.scss */ \"./src/pages/base/base.scss\");\n/* harmony import */ var _base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_base_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n__webpack_require__(\"./src sync recursive \\\\.(ttf|eot|woff|woff2|svg|png|jpg)$\");\r\n\n\n//# sourceURL=webpack:///./src/pages/base/base.js?");

/***/ }),

/***/ "./src/pages/base/base.scss":
/*!**********************************!*\
  !*** ./src/pages/base/base.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--7-3!../../../node_modules/sass-loader/dist/cjs.js!./base.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/base/base.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/pages/base/base.scss?");

/***/ }),

/***/ "./src/pages/example/example.js":
/*!**************************************!*\
  !*** ./src/pages/example/example.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base */ \"./src/pages/base/base.js\");\n/* harmony import */ var _plugin_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../plugin/plugin */ \"./src/plugin/plugin.js\");\n/* harmony import */ var _example_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.scss */ \"./src/pages/example/example.scss\");\n/* harmony import */ var _example_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_example_scss__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst plugins = Array.from(document.querySelectorAll('.example__plugin-instance'))\r\n  .map((container) => {\r\n    return new _plugin_plugin__WEBPACK_IMPORTED_MODULE_1__[\"default\"](container);\r\n  });\n\n//# sourceURL=webpack:///./src/pages/example/example.js?");

/***/ }),

/***/ "./src/pages/example/example.scss":
/*!****************************************!*\
  !*** ./src/pages/example/example.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--7-3!../../../node_modules/sass-loader/dist/cjs.js!./example.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/example/example.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/pages/example/example.scss?");

/***/ }),

/***/ "./src/plugin/Segment.js":
/*!*******************************!*\
  !*** ./src/plugin/Segment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Segment {\r\n  constructor(chart, value, index) {\r\n    this.chart = chart;\r\n    this.value = value;\r\n    this.index = index;\r\n\r\n    this.initialize();\r\n  }\r\n\r\n  initialize() {\r\n    this.radius = 150;\r\n    this.subradius = 130;\r\n\r\n    this.calculateAngle();\r\n    this.build();\r\n    this.rotate();\r\n  }\r\n\r\n  calculateAngle() {\r\n    this.startAngle = this.index > 0 ? this.chart.segments[this.index - 1].endAngle : 0;\r\n    this.angle = (this.value * 360) / this.chart.totalValue;\r\n    this.endAngle = this.startAngle + this.angle;\r\n  }\r\n\r\n  build() {\r\n    this.pathsContainer = document.createElementNS(\"http://www.w3.org/2000/svg\", 'g');\r\n    this.pathsContainer.setAttribute('transform', \"translate(150,150)\");\r\n    this.outerPath = document.createElementNS(\"http://www.w3.org/2000/svg\", 'path');\r\n    this.innerPath = document.createElementNS(\"http://www.w3.org/2000/svg\", 'path');\r\n    this.outerPath.classList.add('pie-chart__outer-path');\r\n    this.outerPath.classList.add(`js-pie-chart__outer-path-${this.index}`);\r\n    this.innerPath.classList.add('pie-chart__inner-path');\r\n    this.innerPath.classList.add(`js-pie-chart__inner-path-${this.index}`);\r\n\r\n    this.pathsContainer.append(this.outerPath);\r\n    this.pathsContainer.append(this.innerPath);\r\n    this.chart.svgContainer.append(this.pathsContainer);\r\n  }\r\n\r\n  rotate() {\r\n    const startAngleInRad = this.converDegToRad(this.startAngle);\r\n    const endAngleInRad = this.converDegToRad(this.endAngle);\r\n\r\n    let x1 = this.radius * Math.cos(startAngleInRad);\r\n    let y1 = this.radius * Math.sin(startAngleInRad);\r\n    let x2 = this.radius * Math.cos(endAngleInRad);\r\n    let y2 = this.radius * Math.sin(endAngleInRad);\r\n\r\n    const outerArcData = `M0 0 ${x1} ${y1} A150 150 0 0 1 ${x2} ${y2}Z`;\r\n    this.outerPath.setAttribute('d', outerArcData)\r\n\r\n    let subx1 = this.subradius * Math.cos(startAngleInRad);\r\n    let suby1 = this.subradius * Math.sin(startAngleInRad);\r\n    let subx2 = this.subradius * Math.cos(endAngleInRad);\r\n    let suby2 = this.subradius * Math.sin(endAngleInRad);\r\n\r\n    const innerArcData = `M0 0 ${subx1} ${suby1} A130 130 0 0 1 ${subx2} ${suby2}Z`;\r\n    this.innerPath.setAttribute('d', innerArcData);\r\n  }\r\n\r\n  converDegToRad(deg) {\r\n    const oneDeg = Math.PI / 180;\r\n    const result = oneDeg * deg;\r\n    return result;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Segment);\r\n\n\n//# sourceURL=webpack:///./src/plugin/Segment.js?");

/***/ }),

/***/ "./src/plugin/plugin.js":
/*!******************************!*\
  !*** ./src/plugin/plugin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Segment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Segment */ \"./src/plugin/Segment.js\");\n/* harmony import */ var _plugin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin.scss */ \"./src/plugin/plugin.scss\");\n/* harmony import */ var _plugin_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugin_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\nclass PieChart {\r\n  constructor(container, values = [30, 20, 50, 10]) {\r\n    this.container = container;\r\n    this.values = values;\r\n    this.totalValue = values.reduce((previousValue, currentValue) => previousValue + currentValue, 0);\r\n    this.segments = [];\r\n\r\n    this.rotate = this.rotate.bind(this);\r\n\r\n    this.initialize();\r\n  }\r\n\r\n  initialize() {\r\n    this.build();\r\n\r\n    /* this.rotate(); */\r\n    /* const rotateTimerId = setInterval(this.rotate, 300);\r\n\r\n    this.buttonTEST.addEventListener('click', () => {\r\n      clearInterval(rotateTimerId);\r\n    }); */\r\n    this.buttonTEST.addEventListener('click', this.rotate);\r\n  }\r\n\r\n  build() {\r\n    this.chartContainer = document.createElement('div');\r\n    this.chartContainer.classList.add('pie-chart');\r\n    this.chartContainer.innerHTML = `\r\n      <svg class=\"pie-chart__svg\">\r\n        <defs class=\"pie-chart__defs\">\r\n          <linearGradient id=\"red-blue\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">\r\n            <stop offset=\"0%\" stop-color=\"red\" />\r\n            <stop offset=\"100%\" stop-color=\"blue\" />\r\n          </linearGradient>\r\n          <linearGradient id=\"red-blue2\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">\r\n            <stop offset=\"0%\" stop-color=\"rgb(255, 227, 156)\" />\r\n            <stop offset=\"100%\" stop-color=\"rgb(255, 186, 156)\" />\r\n          </linearGradient>\r\n        </defs>\r\n\r\n      </svg>\r\n    `;\r\n    this.svgContainer = this.chartContainer.querySelector('.pie-chart__svg')\r\n    /* this.defs = this.svgContainer.querySelector('.pie-chart__defs'); */\r\n\r\n    this.buttonTEST = document.createElement('button');\r\n    this.buttonTEST.classList.add('test-button');\r\n    this.buttonTEST.textContent = 'test button';\r\n\r\n    this.container.append(this.chartContainer);\r\n    this.container.append(this.buttonTEST);\r\n\r\n    this.buildSegments();\r\n  }\r\n\r\n  buildSegments() {\r\n    this.values.forEach((value, index) => {\r\n      this.segments.push(new _Segment__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, value, index));\r\n    });\r\n  }\r\n\r\n  rotate() {\r\n    this.segments.forEach((segment) => {\r\n      segment.startAngle += 10;\r\n      segment.endAngle += 10;\r\n      segment.rotate();\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PieChart);\r\n\r\n// M move to (x, y) -> draw line to (x, y) -> A radius start(x, y) -> ? ? ? -> end (x, y)\r\n\r\n\n\n//# sourceURL=webpack:///./src/plugin/plugin.js?");

/***/ }),

/***/ "./src/plugin/plugin.scss":
/*!********************************!*\
  !*** ./src/plugin/plugin.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ref--7-3!../../node_modules/sass-loader/dist/cjs.js!./plugin.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/plugin/plugin.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/plugin/plugin.scss?");

/***/ })

/******/ });