webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/slices/exampleSlice.js":
/*!************************************!*\
  !*** ./lib/slices/exampleSlice.js ***!
  \************************************/
/*! exports provided: updateExampleData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateExampleData\", function() { return updateExampleData; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n  ex: 'Example Data'\n};\nvar exampleSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'example',\n  initialState: initialState,\n  reducers: {\n    updateExampleData: function updateExampleData(state, action) {\n      state.ex = action.payload;\n    }\n  }\n}); // Extract the action creators object and the reducer\n\nvar actions = exampleSlice.actions,\n    reducer = exampleSlice.reducer; // Extract and export each action creator by name\n\nvar updateExampleData = actions.updateExampleData; // Export the reducer, either as a default or named export\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3NsaWNlcy9leGFtcGxlU2xpY2UuanM/Y2MyZSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJleCIsImV4YW1wbGVTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwidXBkYXRlRXhhbXBsZURhdGEiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLElBQUUsRUFBRTtBQURlLENBQXJCO0FBSUEsSUFBTUMsWUFBWSxHQUFHQyxvRUFBVyxDQUFDO0FBQy9CQyxNQUFJLEVBQUUsU0FEeUI7QUFFL0JKLGNBQVksRUFBWkEsWUFGK0I7QUFHL0JLLFVBQVEsRUFBRTtBQUNSQyxxQkFEUSw2QkFDVUMsS0FEVixFQUNpQkMsTUFEakIsRUFDeUI7QUFDL0JELFdBQUssQ0FBQ04sRUFBTixHQUFXTyxNQUFNLENBQUNDLE9BQWxCO0FBQ0Q7QUFITztBQUhxQixDQUFELENBQWhDLEMsQ0FVQTs7SUFDUUMsTyxHQUFxQlIsWSxDQUFyQlEsTztJQUFTQyxPLEdBQVlULFksQ0FBWlMsTyxFQUNqQjs7SUFDZUwsaUIsR0FBc0JJLE8sQ0FBdEJKLGlCLEVBQ2Y7OztBQUNlSyxzRUFBZiIsImZpbGUiOiIuL2xpYi9zbGljZXMvZXhhbXBsZVNsaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZXg6ICdFeGFtcGxlIERhdGEnXG59XG5cbmNvbnN0IGV4YW1wbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2V4YW1wbGUnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgdXBkYXRlRXhhbXBsZURhdGEoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuZXggPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gIH1cbn0pXG5cbi8vIEV4dHJhY3QgdGhlIGFjdGlvbiBjcmVhdG9ycyBvYmplY3QgYW5kIHRoZSByZWR1Y2VyXG5jb25zdCB7IGFjdGlvbnMsIHJlZHVjZXIgfSA9IGV4YW1wbGVTbGljZVxuLy8gRXh0cmFjdCBhbmQgZXhwb3J0IGVhY2ggYWN0aW9uIGNyZWF0b3IgYnkgbmFtZVxuZXhwb3J0IGNvbnN0IHsgdXBkYXRlRXhhbXBsZURhdGEgfSA9IGFjdGlvbnNcbi8vIEV4cG9ydCB0aGUgcmVkdWNlciwgZWl0aGVyIGFzIGEgZGVmYXVsdCBvciBuYW1lZCBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/slices/exampleSlice.js\n");

/***/ })

})