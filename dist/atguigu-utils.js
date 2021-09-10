/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory();
	else
		root["aUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Array.js":
/*!**********************!*\
  !*** ./src/Array.js ***!
  \**********************/
/***/ (() => {

eval("function map(arr, callback) {\r\n    // 声明空数组\r\n    let result = [];\r\n    // 遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        // 执行回调\r\n        result.push(callback(arr[i], i));\r\n    }\r\n    // 返回结果\r\n    return result\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {function} callback \r\n * @param {*} initValue \r\n * @returns *\r\n */\r\nfunction reduce(arr, callback, initValue) {\r\n    // 声明变量\r\n    let result = initValue\r\n    for (let i = 0; i < arr.length; i++) {\r\n        // 执行回调\r\n        result = callback(result, arr[i])\r\n    }\r\n    return result\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\nfunction filter(arr, callback) {\r\n    // 声明空数组\r\n    let result = [];\r\n    // 遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        if (callback(arr[i], i)) {\r\n            result.push(arr[i])\r\n        }\r\n    }\r\n    return result\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n */\r\nfunction find(arr, callback) {\r\n    for (let i = 0; i < arr.length; i++) {\r\n        if (callback(arr[i], i)) {\r\n            return arr[i];\r\n        }\r\n    }\r\n    // 如果没有遇到满足条件的，返回undefined;\r\n    return undefined\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\nfunction findIndex(arr, callback) {\r\n    for (let i = 0; i < arr.length; i++) {\r\n        if (callback(arr[i], i)) {\r\n            return i;\r\n        }\r\n    }\r\n    // 如果没有遇到满足条件的，返回-1;\r\n    return -1\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\nfunction every(arr, callback) {\r\n    // 遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        // 执行回调,如果回调执行返回结果为false\r\n        if (!callback(arr[i], i)) {\r\n            return false;\r\n        }\r\n    }\r\n    // 如果都满足条件 则返回true\r\n    return true;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\nfunction some(arr, callback) {\r\n    // 遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        // 执行回调,如果回调执行返回结果为false\r\n        if (callback(arr[i], i)) {\r\n            return true;\r\n        }\r\n    }\r\n    // 如果都满足条件 则返回true\r\n    return false;\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/Array.js?");

/***/ }),

/***/ "./src/apply.js":
/*!**********************!*\
  !*** ./src/apply.js ***!
  \**********************/
/***/ (() => {

eval("function apply(Fn, obj, args) {\r\n    // 判断\r\n    if (obj === undefined || obj === null) {\r\n        obj = globalThis;\r\n    }\r\n    // 为obj添加临时方法\r\n    obj.temp = Fn;\r\n    // 执行方法\r\n    let result = obj.temp(...args);\r\n    // 删除临时属性\r\n    delete obj.temp;\r\n    // 返回结果\r\n    return result;\r\n}\n\n//# sourceURL=webpack://aUtils/./src/apply.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_1__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_1__.reduce),\n/* harmony export */   \"every\": () => (/* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_1__.every),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_1__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_1__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_1__.findIndex),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _apply__WEBPACK_IMPORTED_MODULE_0__.apply)\n/* harmony export */ });\n/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply */ \"./src/apply.js\");\n/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apply__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Array */ \"./src/Array.js\");\n/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Array__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});