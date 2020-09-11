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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/redux/saga/root-saga.js":
/*!*************************************!*\
  !*** ./lib/redux/saga/root-saga.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_exampleSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/exampleSlice */ \"./lib/redux/slices/exampleSlice.js\");\n\n\n\nfunction* runExampleSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"take\"])(\"example/updateExampleData\");\n  console.log(\"runExampleSaga\");\n}\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(runExampleSaga)]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootSaga);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcmVkdXgvc2FnYS9yb290LXNhZ2EuanM/M2JmMyJdLCJuYW1lcyI6WyJydW5FeGFtcGxlU2FnYSIsInRha2UiLCJjb25zb2xlIiwibG9nIiwicm9vdFNhZ2EiLCJhbGwiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsVUFBVUEsY0FBVixHQUEyQjtBQUN6QixRQUFNQywrREFBSSxDQUFDLDJCQUFELENBQVY7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDRDs7QUFFRCxVQUFVQyxRQUFWLEdBQXFCO0FBQ25CLFFBQU1DLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQ04sY0FBRCxDQUFMLENBQUQsQ0FBVDtBQUNEOztBQUVjSSx1RUFBZiIsImZpbGUiOiIuL2xpYi9yZWR1eC9zYWdhL3Jvb3Qtc2FnYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIHB1dCwgdGFrZSwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCB7IHVwZGF0ZUV4YW1wbGVEYXRhIH0gZnJvbSBcIi4uL3NsaWNlcy9leGFtcGxlU2xpY2VcIjtcblxuZnVuY3Rpb24qIHJ1bkV4YW1wbGVTYWdhKCkge1xuICB5aWVsZCB0YWtlKFwiZXhhbXBsZS91cGRhdGVFeGFtcGxlRGF0YVwiKTtcbiAgY29uc29sZS5sb2coXCJydW5FeGFtcGxlU2FnYVwiKTtcbn1cblxuZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW2NhbGwocnVuRXhhbXBsZVNhZ2EpXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redux/saga/root-saga.js\n");

/***/ }),

/***/ "./lib/redux/slices/exampleSlice.js":
/*!******************************************!*\
  !*** ./lib/redux/slices/exampleSlice.js ***!
  \******************************************/
/*! exports provided: updateExampleData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateExampleData\", function() { return updateExampleData; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  ex: 'Example Data'\n};\nconst exampleSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'example',\n  initialState,\n  reducers: {\n    updateExampleData(state, action) {\n      state.ex = action.payload;\n    }\n\n  }\n}); // Extract the action creators object and the reducer\n\nconst {\n  actions,\n  reducer\n} = exampleSlice; // Extract and export each action creator by name\n\nconst {\n  updateExampleData\n} = actions; // Export the reducer, either as a default or named export\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcmVkdXgvc2xpY2VzL2V4YW1wbGVTbGljZS5qcz8xYjExIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImV4IiwiZXhhbXBsZVNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJ1cGRhdGVFeGFtcGxlRGF0YSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxJQUFFLEVBQUU7QUFEZSxDQUFyQjtBQUlBLE1BQU1DLFlBQVksR0FBR0Msb0VBQVcsQ0FBQztBQUMvQkMsTUFBSSxFQUFFLFNBRHlCO0FBRS9CSixjQUYrQjtBQUcvQkssVUFBUSxFQUFFO0FBQ1JDLHFCQUFpQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBZ0I7QUFDL0JELFdBQUssQ0FBQ04sRUFBTixHQUFXTyxNQUFNLENBQUNDLE9BQWxCO0FBQ0Q7O0FBSE87QUFIcUIsQ0FBRCxDQUFoQyxDLENBVUE7O0FBQ0EsTUFBTTtBQUFFQyxTQUFGO0FBQVdDO0FBQVgsSUFBdUJULFlBQTdCLEMsQ0FDQTs7QUFDTyxNQUFNO0FBQUVJO0FBQUYsSUFBd0JJLE9BQTlCLEMsQ0FDUDs7QUFDZUMsc0VBQWYiLCJmaWxlIjoiLi9saWIvcmVkdXgvc2xpY2VzL2V4YW1wbGVTbGljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGV4OiAnRXhhbXBsZSBEYXRhJ1xufVxuXG5jb25zdCBleGFtcGxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdleGFtcGxlJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHVwZGF0ZUV4YW1wbGVEYXRhKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLmV4ID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICB9XG59KVxuXG4vLyBFeHRyYWN0IHRoZSBhY3Rpb24gY3JlYXRvcnMgb2JqZWN0IGFuZCB0aGUgcmVkdWNlclxuY29uc3QgeyBhY3Rpb25zLCByZWR1Y2VyIH0gPSBleGFtcGxlU2xpY2Vcbi8vIEV4dHJhY3QgYW5kIGV4cG9ydCBlYWNoIGFjdGlvbiBjcmVhdG9yIGJ5IG5hbWVcbmV4cG9ydCBjb25zdCB7IHVwZGF0ZUV4YW1wbGVEYXRhIH0gPSBhY3Rpb25zXG4vLyBFeHBvcnQgdGhlIHJlZHVjZXIsIGVpdGhlciBhcyBhIGRlZmF1bHQgb3IgbmFtZWQgZXhwb3J0XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redux/slices/exampleSlice.js\n");

/***/ }),

/***/ "./lib/redux/store.js":
/*!****************************!*\
  !*** ./lib/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_exampleSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/exampleSlice */ \"./lib/redux/slices/exampleSlice.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _saga_root_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saga/root-saga */ \"./lib/redux/saga/root-saga.js\");\n\n\n\n\nconst devMode = true;\nconst sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();\nconst middleware = [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"getDefaultMiddleware\"])({\n  thunk: false\n}), sagaMiddleware];\nconst reducer = {\n  example: _slices_exampleSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nconst store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\n  reducer,\n  devTools: devMode,\n  middleware\n});\nsagaMiddleware.run(_saga_root_saga__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcmVkdXgvc3RvcmUuanM/NDQyMCJdLCJuYW1lcyI6WyJkZXZNb2RlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInRodW5rIiwicmVkdWNlciIsImV4YW1wbGUiLCJFeGFtcGxlUmVkdWNlciIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJkZXZUb29scyIsInJ1biIsInNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLE9BQWI7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFDLEdBQUdDLDZFQUFvQixDQUFDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQUQsQ0FBeEIsRUFBNENKLGNBQTVDLENBQW5CO0FBQ0EsTUFBTUssT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBRUMsNERBQWNBO0FBRFQsQ0FBaEI7QUFJQSxNQUFNQyxLQUFLLEdBQUdDLHVFQUFjLENBQUM7QUFDM0JKLFNBRDJCO0FBRTNCSyxVQUFRLEVBQUVYLE9BRmlCO0FBRzNCRztBQUgyQixDQUFELENBQTVCO0FBTUFGLGNBQWMsQ0FBQ1csR0FBZixDQUFtQkMsdURBQW5CO0FBRWVKLG9FQUFmIiwiZmlsZSI6Ii4vbGliL3JlZHV4L3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGdldERlZmF1bHRNaWRkbGV3YXJlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBFeGFtcGxlUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvZXhhbXBsZVNsaWNlXCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcbmltcG9ydCBzYWdhIGZyb20gXCIuL3NhZ2Evcm9vdC1zYWdhXCI7XG5cbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiO1xuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuY29uc3QgbWlkZGxld2FyZSA9IFsuLi5nZXREZWZhdWx0TWlkZGxld2FyZSh7IHRodW5rOiBmYWxzZSB9KSwgc2FnYU1pZGRsZXdhcmVdO1xuY29uc3QgcmVkdWNlciA9IHtcbiAgZXhhbXBsZTogRXhhbXBsZVJlZHVjZXIsXG59O1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcixcbiAgZGV2VG9vbHM6IGRldk1vZGUsXG4gIG1pZGRsZXdhcmUsXG59KTtcblxuc2FnYU1pZGRsZXdhcmUucnVuKHNhZ2EpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/redux/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/redux/store */ \"./lib/redux/store.js\");\nvar _jsxFileName = \"/home/joao/Develop/tests/nextjs-reduxtoolkit-saga-apollo/nextjs-reduxtoolkit-saga-apollo/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: _lib_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMxQyxTQUNFLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVDLHdEQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRCxDQU5EOztBQVFlRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL2xpYi9yZWR1eC9zdG9yZVwiO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });