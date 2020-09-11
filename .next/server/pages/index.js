module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/redux/slices/exampleSlice.js":
/*!******************************************!*\
  !*** ./lib/redux/slices/exampleSlice.js ***!
  \******************************************/
/*! exports provided: updateExampleData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateExampleData\", function() { return updateExampleData; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  ex: 'Example Data'\n};\nconst exampleSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'example',\n  initialState,\n  reducers: {\n    updateExampleData(state, action) {\n      state.ex = action.payload;\n    }\n\n  }\n}); // Extract the action creators object and the reducer\n\nconst {\n  actions,\n  reducer\n} = exampleSlice; // Extract and export each action creator by name\n\nconst {\n  updateExampleData\n} = actions; // Export the reducer, either as a default or named export\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcmVkdXgvc2xpY2VzL2V4YW1wbGVTbGljZS5qcz8xYjExIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImV4IiwiZXhhbXBsZVNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJ1cGRhdGVFeGFtcGxlRGF0YSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxJQUFFLEVBQUU7QUFEZSxDQUFyQjtBQUlBLE1BQU1DLFlBQVksR0FBR0Msb0VBQVcsQ0FBQztBQUMvQkMsTUFBSSxFQUFFLFNBRHlCO0FBRS9CSixjQUYrQjtBQUcvQkssVUFBUSxFQUFFO0FBQ1JDLHFCQUFpQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBZ0I7QUFDL0JELFdBQUssQ0FBQ04sRUFBTixHQUFXTyxNQUFNLENBQUNDLE9BQWxCO0FBQ0Q7O0FBSE87QUFIcUIsQ0FBRCxDQUFoQyxDLENBVUE7O0FBQ0EsTUFBTTtBQUFFQyxTQUFGO0FBQVdDO0FBQVgsSUFBdUJULFlBQTdCLEMsQ0FDQTs7QUFDTyxNQUFNO0FBQUVJO0FBQUYsSUFBd0JJLE9BQTlCLEMsQ0FDUDs7QUFDZUMsc0VBQWYiLCJmaWxlIjoiLi9saWIvcmVkdXgvc2xpY2VzL2V4YW1wbGVTbGljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGV4OiAnRXhhbXBsZSBEYXRhJ1xufVxuXG5jb25zdCBleGFtcGxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdleGFtcGxlJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHVwZGF0ZUV4YW1wbGVEYXRhKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLmV4ID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICB9XG59KVxuXG4vLyBFeHRyYWN0IHRoZSBhY3Rpb24gY3JlYXRvcnMgb2JqZWN0IGFuZCB0aGUgcmVkdWNlclxuY29uc3QgeyBhY3Rpb25zLCByZWR1Y2VyIH0gPSBleGFtcGxlU2xpY2Vcbi8vIEV4dHJhY3QgYW5kIGV4cG9ydCBlYWNoIGFjdGlvbiBjcmVhdG9yIGJ5IG5hbWVcbmV4cG9ydCBjb25zdCB7IHVwZGF0ZUV4YW1wbGVEYXRhIH0gPSBhY3Rpb25zXG4vLyBFeHBvcnQgdGhlIHJlZHVjZXIsIGVpdGhlciBhcyBhIGRlZmF1bHQgb3IgbmFtZWQgZXhwb3J0XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redux/slices/exampleSlice.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_redux_slices_exampleSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/redux/slices/exampleSlice */ \"./lib/redux/slices/exampleSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/joao/Develop/tests/nextjs-reduxtoolkit-saga-apollo/nextjs-reduxtoolkit-saga-apollo/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst IndexPage = () => {\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Next.js ReduxToolkit Saga Apollo Boilerplate\"), __jsx(\"button\", {\n    onClick: () => dispatch(Object(_lib_redux_slices_exampleSlice__WEBPACK_IMPORTED_MODULE_1__[\"updateExampleData\"])(\"Changed Data\")),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \"dispatch\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1cGRhdGVFeGFtcGxlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUN0QixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQURGLEVBRUU7QUFBUSxXQUFPLEVBQUUsTUFBTUQsUUFBUSxDQUFDRSx3RkFBaUIsQ0FBQyxjQUFELENBQWxCLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsQ0FERjtBQVFELENBVkQ7O0FBWWVILHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cGRhdGVFeGFtcGxlRGF0YSB9IGZyb20gXCIuLi9saWIvcmVkdXgvc2xpY2VzL2V4YW1wbGVTbGljZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5OZXh0LmpzIFJlZHV4VG9vbGtpdCBTYWdhIEFwb2xsbyBCb2lsZXJwbGF0ZTwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHVwZGF0ZUV4YW1wbGVEYXRhKFwiQ2hhbmdlZCBEYXRhXCIpKX0+XG4gICAgICAgIGRpc3BhdGNoXG4gICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ })

/******/ });