module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/notes.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/notes.js":
/*!****************************!*\
  !*** ./pages/api/notes.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nano_sql_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nano-sql/core */ \"@nano-sql/core\");\n/* harmony import */ var _nano_sql_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connectMiddleware = handler => async (req, res) => {\n  const dbName = 'with-redux-toolkit';\n\n  if (!Object(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__[\"nSQL\"])().listDatabases().includes(dbName)) {\n    await Object(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__[\"nSQL\"])().createDatabase({\n      id: dbName,\n      mode: 'PERM',\n      tables: [{\n        name: 'notes',\n        model: {\n          'id:uuid': {\n            pk: true\n          },\n          'title:string': {\n            notNull: true\n          },\n          'content:string': {\n            notNull: true\n          },\n          'createdAt:date': {\n            default: () => new Date()\n          }\n        }\n      }],\n      version: 1\n    });\n  }\n\n  Object(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__[\"nSQL\"])().useDatabase(dbName);\n  return handler(req, res);\n};\n\nconst saveNote = async (req, res) => {\n  const {\n    title,\n    content\n  } = req.body;\n  const errors = {};\n  if (!title) errors['title'] = 'Title is required';\n  if (!content) errors['content'] = 'Content is required';\n  if (Object.keys(errors).length > 0) return res.status(422).json({\n    statusCode: 422,\n    message: 'Unprocessable Entity',\n    errors\n  });\n  const [note] = await Object(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__[\"nSQL\"])('notes').query('upsert', {\n    title,\n    content\n  }).exec();\n  res.status(201).json(note);\n};\n\nconst listNotes = async (_, res) => {\n  const notes = await Object(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__[\"nSQL\"])('notes').query('select').exec();\n  res.json(notes);\n};\n\nconst updateNote = async (req, res) => {\n  const {\n    noteId\n  } = req.query;\n  const [note] = await Object(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__[\"nSQL\"])().query('select').where(['id', '=', noteId]).limit(1).exec();\n  if (!note) return res.status(404).json({\n    statusCode: 404,\n    message: 'Not Found'\n  });\n  const {\n    title = note.title,\n    content = note.content\n  } = req.body;\n  const [noteUpdated] = await Object(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__[\"nSQL\"])('notes').query('upsert', {\n    title,\n    content\n  }).where(['id', '=', noteId]).limit(1).exec();\n  res.json(noteUpdated);\n};\n\nconst removeNote = async (req, res) => {\n  const {\n    noteId\n  } = req.query;\n  const [note] = await Object(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__[\"nSQL\"])().query('select').where(['id', '=', noteId]).limit(1).exec();\n  if (!note) return res.status(404).json({\n    statusCode: 404,\n    message: 'Not Found'\n  });\n  await Object(_nano_sql_core__WEBPACK_IMPORTED_MODULE_0__[\"nSQL\"])('notes').query('delete').where(['id', '=', noteId]).limit(1).exec();\n  res.status(204).send(null);\n};\n\nconst handler = (req, res) => {\n  switch (req.method) {\n    case 'POST':\n      return saveNote(req, res);\n\n    case 'GET':\n      return listNotes(req, res);\n\n    case 'PUT':\n      return updateNote(req, res);\n\n    case 'DELETE':\n      return removeNote(req, res);\n\n    default:\n      return res.status(404).json({\n        statusCode: 404,\n        message: 'Not Found'\n      });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectMiddleware(handler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZXMuanM/NGE4MSJdLCJuYW1lcyI6WyJjb25uZWN0TWlkZGxld2FyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYk5hbWUiLCJuU1FMIiwibGlzdERhdGFiYXNlcyIsImluY2x1ZGVzIiwiY3JlYXRlRGF0YWJhc2UiLCJpZCIsIm1vZGUiLCJ0YWJsZXMiLCJuYW1lIiwibW9kZWwiLCJwayIsIm5vdE51bGwiLCJkZWZhdWx0IiwiRGF0ZSIsInZlcnNpb24iLCJ1c2VEYXRhYmFzZSIsInNhdmVOb3RlIiwidGl0bGUiLCJjb250ZW50IiwiYm9keSIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJub3RlIiwicXVlcnkiLCJleGVjIiwibGlzdE5vdGVzIiwiXyIsIm5vdGVzIiwidXBkYXRlTm90ZSIsIm5vdGVJZCIsIndoZXJlIiwibGltaXQiLCJub3RlVXBkYXRlZCIsInJlbW92ZU5vdGUiLCJzZW5kIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxpQkFBaUIsR0FBSUMsT0FBRCxJQUFhLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUN6RCxRQUFNQyxNQUFNLEdBQUcsb0JBQWY7O0FBRUEsTUFBSSxDQUFDQywyREFBSSxHQUFHQyxhQUFQLEdBQXVCQyxRQUF2QixDQUFnQ0gsTUFBaEMsQ0FBTCxFQUE4QztBQUM1QyxVQUFNQywyREFBSSxHQUFHRyxjQUFQLENBQXNCO0FBQzFCQyxRQUFFLEVBQUVMLE1BRHNCO0FBRTFCTSxVQUFJLEVBQUUsTUFGb0I7QUFHMUJDLFlBQU0sRUFBRSxDQUNOO0FBQ0VDLFlBQUksRUFBRSxPQURSO0FBRUVDLGFBQUssRUFBRTtBQUNMLHFCQUFXO0FBQUVDLGNBQUUsRUFBRTtBQUFOLFdBRE47QUFFTCwwQkFBZ0I7QUFBRUMsbUJBQU8sRUFBRTtBQUFYLFdBRlg7QUFHTCw0QkFBa0I7QUFBRUEsbUJBQU8sRUFBRTtBQUFYLFdBSGI7QUFJTCw0QkFBa0I7QUFBRUMsbUJBQU8sRUFBRSxNQUFNLElBQUlDLElBQUo7QUFBakI7QUFKYjtBQUZULE9BRE0sQ0FIa0I7QUFjMUJDLGFBQU8sRUFBRTtBQWRpQixLQUF0QixDQUFOO0FBZ0JEOztBQUNEYiw2REFBSSxHQUFHYyxXQUFQLENBQW1CZixNQUFuQjtBQUVBLFNBQU9ILE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLENBQWQ7QUFDRCxDQXhCRDs7QUF5QkEsTUFBTWlCLFFBQVEsR0FBRyxPQUFPbEIsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ25DLFFBQU07QUFBRWtCLFNBQUY7QUFBU0M7QUFBVCxNQUFxQnBCLEdBQUcsQ0FBQ3FCLElBQS9CO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFFQSxNQUFJLENBQUNILEtBQUwsRUFBWUcsTUFBTSxDQUFDLE9BQUQsQ0FBTixHQUFrQixtQkFBbEI7QUFFWixNQUFJLENBQUNGLE9BQUwsRUFBY0UsTUFBTSxDQUFDLFNBQUQsQ0FBTixHQUFvQixxQkFBcEI7QUFFZCxNQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsTUFBWixFQUFvQkcsTUFBcEIsR0FBNkIsQ0FBakMsRUFDRSxPQUFPeEIsR0FBRyxDQUFDeUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxjQUFVLEVBQUUsR0FEYztBQUUxQkMsV0FBTyxFQUFFLHNCQUZpQjtBQUcxQlA7QUFIMEIsR0FBckIsQ0FBUDtBQU1GLFFBQU0sQ0FBQ1EsSUFBRCxJQUFTLE1BQU0zQiwyREFBSSxDQUFDLE9BQUQsQ0FBSixDQUFjNEIsS0FBZCxDQUFvQixRQUFwQixFQUE4QjtBQUFFWixTQUFGO0FBQVNDO0FBQVQsR0FBOUIsRUFBa0RZLElBQWxELEVBQXJCO0FBRUEvQixLQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJHLElBQXJCO0FBQ0QsQ0FsQkQ7O0FBbUJBLE1BQU1HLFNBQVMsR0FBRyxPQUFPQyxDQUFQLEVBQVVqQyxHQUFWLEtBQWtCO0FBQ2xDLFFBQU1rQyxLQUFLLEdBQUcsTUFBTWhDLDJEQUFJLENBQUMsT0FBRCxDQUFKLENBQWM0QixLQUFkLENBQW9CLFFBQXBCLEVBQThCQyxJQUE5QixFQUFwQjtBQUVBL0IsS0FBRyxDQUFDMEIsSUFBSixDQUFTUSxLQUFUO0FBQ0QsQ0FKRDs7QUFLQSxNQUFNQyxVQUFVLEdBQUcsT0FBT3BDLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNyQyxRQUFNO0FBQUVvQztBQUFGLE1BQWFyQyxHQUFHLENBQUMrQixLQUF2QjtBQUNBLFFBQU0sQ0FBQ0QsSUFBRCxJQUFTLE1BQU0zQiwyREFBSSxHQUN0QjRCLEtBRGtCLENBQ1osUUFEWSxFQUVsQk8sS0FGa0IsQ0FFWixDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVlELE1BQVosQ0FGWSxFQUdsQkUsS0FIa0IsQ0FHWixDQUhZLEVBSWxCUCxJQUprQixFQUFyQjtBQU1BLE1BQUksQ0FBQ0YsSUFBTCxFQUNFLE9BQU83QixHQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJDLGNBQVUsRUFBRSxHQURjO0FBRTFCQyxXQUFPLEVBQUU7QUFGaUIsR0FBckIsQ0FBUDtBQUtGLFFBQU07QUFBRVYsU0FBSyxHQUFHVyxJQUFJLENBQUNYLEtBQWY7QUFBc0JDLFdBQU8sR0FBR1UsSUFBSSxDQUFDVjtBQUFyQyxNQUFpRHBCLEdBQUcsQ0FBQ3FCLElBQTNEO0FBQ0EsUUFBTSxDQUFDbUIsV0FBRCxJQUFnQixNQUFNckMsMkRBQUksQ0FBQyxPQUFELENBQUosQ0FDekI0QixLQUR5QixDQUNuQixRQURtQixFQUNUO0FBQUVaLFNBQUY7QUFBU0M7QUFBVCxHQURTLEVBRXpCa0IsS0FGeUIsQ0FFbkIsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZRCxNQUFaLENBRm1CLEVBR3pCRSxLQUh5QixDQUduQixDQUhtQixFQUl6QlAsSUFKeUIsRUFBNUI7QUFNQS9CLEtBQUcsQ0FBQzBCLElBQUosQ0FBU2EsV0FBVDtBQUNELENBdEJEOztBQXVCQSxNQUFNQyxVQUFVLEdBQUcsT0FBT3pDLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNyQyxRQUFNO0FBQUVvQztBQUFGLE1BQWFyQyxHQUFHLENBQUMrQixLQUF2QjtBQUNBLFFBQU0sQ0FBQ0QsSUFBRCxJQUFTLE1BQU0zQiwyREFBSSxHQUN0QjRCLEtBRGtCLENBQ1osUUFEWSxFQUVsQk8sS0FGa0IsQ0FFWixDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVlELE1BQVosQ0FGWSxFQUdsQkUsS0FIa0IsQ0FHWixDQUhZLEVBSWxCUCxJQUprQixFQUFyQjtBQU1BLE1BQUksQ0FBQ0YsSUFBTCxFQUNFLE9BQU83QixHQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJDLGNBQVUsRUFBRSxHQURjO0FBRTFCQyxXQUFPLEVBQUU7QUFGaUIsR0FBckIsQ0FBUDtBQUtGLFFBQU0xQiwyREFBSSxDQUFDLE9BQUQsQ0FBSixDQUFjNEIsS0FBZCxDQUFvQixRQUFwQixFQUE4Qk8sS0FBOUIsQ0FBb0MsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZRCxNQUFaLENBQXBDLEVBQXlERSxLQUF6RCxDQUErRCxDQUEvRCxFQUFrRVAsSUFBbEUsRUFBTjtBQUVBL0IsS0FBRyxDQUFDeUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JnQixJQUFoQixDQUFxQixJQUFyQjtBQUNELENBakJEOztBQW1CQSxNQUFNM0MsT0FBTyxHQUFHLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzVCLFVBQVFELEdBQUcsQ0FBQzJDLE1BQVo7QUFDRSxTQUFLLE1BQUw7QUFDRSxhQUFPekIsUUFBUSxDQUFDbEIsR0FBRCxFQUFNQyxHQUFOLENBQWY7O0FBQ0YsU0FBSyxLQUFMO0FBQ0UsYUFBT2dDLFNBQVMsQ0FBQ2pDLEdBQUQsRUFBTUMsR0FBTixDQUFoQjs7QUFDRixTQUFLLEtBQUw7QUFDRSxhQUFPbUMsVUFBVSxDQUFDcEMsR0FBRCxFQUFNQyxHQUFOLENBQWpCOztBQUNGLFNBQUssUUFBTDtBQUNFLGFBQU93QyxVQUFVLENBQUN6QyxHQUFELEVBQU1DLEdBQU4sQ0FBakI7O0FBQ0Y7QUFDRSxhQUFPQSxHQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJDLGtCQUFVLEVBQUUsR0FEYztBQUUxQkMsZUFBTyxFQUFFO0FBRmlCLE9BQXJCLENBQVA7QUFWSjtBQWVELENBaEJEOztBQWtCZS9CLGdGQUFpQixDQUFDQyxPQUFELENBQWhDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25vdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgblNRTCB9IGZyb20gJ0BuYW5vLXNxbC9jb3JlJ1xuXG5jb25zdCBjb25uZWN0TWlkZGxld2FyZSA9IChoYW5kbGVyKSA9PiBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgZGJOYW1lID0gJ3dpdGgtcmVkdXgtdG9vbGtpdCdcblxuICBpZiAoIW5TUUwoKS5saXN0RGF0YWJhc2VzKCkuaW5jbHVkZXMoZGJOYW1lKSkge1xuICAgIGF3YWl0IG5TUUwoKS5jcmVhdGVEYXRhYmFzZSh7XG4gICAgICBpZDogZGJOYW1lLFxuICAgICAgbW9kZTogJ1BFUk0nLFxuICAgICAgdGFibGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnbm90ZXMnLFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAnaWQ6dXVpZCc6IHsgcGs6IHRydWUgfSxcbiAgICAgICAgICAgICd0aXRsZTpzdHJpbmcnOiB7IG5vdE51bGw6IHRydWUgfSxcbiAgICAgICAgICAgICdjb250ZW50OnN0cmluZyc6IHsgbm90TnVsbDogdHJ1ZSB9LFxuICAgICAgICAgICAgJ2NyZWF0ZWRBdDpkYXRlJzogeyBkZWZhdWx0OiAoKSA9PiBuZXcgRGF0ZSgpIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgIH0pXG4gIH1cbiAgblNRTCgpLnVzZURhdGFiYXNlKGRiTmFtZSlcblxuICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcylcbn1cbmNvbnN0IHNhdmVOb3RlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQgfSA9IHJlcS5ib2R5XG4gIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgaWYgKCF0aXRsZSkgZXJyb3JzWyd0aXRsZSddID0gJ1RpdGxlIGlzIHJlcXVpcmVkJ1xuXG4gIGlmICghY29udGVudCkgZXJyb3JzWydjb250ZW50J10gPSAnQ29udGVudCBpcyByZXF1aXJlZCdcblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPiAwKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICBzdGF0dXNDb2RlOiA0MjIsXG4gICAgICBtZXNzYWdlOiAnVW5wcm9jZXNzYWJsZSBFbnRpdHknLFxuICAgICAgZXJyb3JzLFxuICAgIH0pXG5cbiAgY29uc3QgW25vdGVdID0gYXdhaXQgblNRTCgnbm90ZXMnKS5xdWVyeSgndXBzZXJ0JywgeyB0aXRsZSwgY29udGVudCB9KS5leGVjKClcblxuICByZXMuc3RhdHVzKDIwMSkuanNvbihub3RlKVxufVxuY29uc3QgbGlzdE5vdGVzID0gYXN5bmMgKF8sIHJlcykgPT4ge1xuICBjb25zdCBub3RlcyA9IGF3YWl0IG5TUUwoJ25vdGVzJykucXVlcnkoJ3NlbGVjdCcpLmV4ZWMoKVxuXG4gIHJlcy5qc29uKG5vdGVzKVxufVxuY29uc3QgdXBkYXRlTm90ZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IG5vdGVJZCB9ID0gcmVxLnF1ZXJ5XG4gIGNvbnN0IFtub3RlXSA9IGF3YWl0IG5TUUwoKVxuICAgIC5xdWVyeSgnc2VsZWN0JylcbiAgICAud2hlcmUoWydpZCcsICc9Jywgbm90ZUlkXSlcbiAgICAubGltaXQoMSlcbiAgICAuZXhlYygpXG5cbiAgaWYgKCFub3RlKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7XG4gICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICBtZXNzYWdlOiAnTm90IEZvdW5kJyxcbiAgICB9KVxuXG4gIGNvbnN0IHsgdGl0bGUgPSBub3RlLnRpdGxlLCBjb250ZW50ID0gbm90ZS5jb250ZW50IH0gPSByZXEuYm9keVxuICBjb25zdCBbbm90ZVVwZGF0ZWRdID0gYXdhaXQgblNRTCgnbm90ZXMnKVxuICAgIC5xdWVyeSgndXBzZXJ0JywgeyB0aXRsZSwgY29udGVudCB9KVxuICAgIC53aGVyZShbJ2lkJywgJz0nLCBub3RlSWRdKVxuICAgIC5saW1pdCgxKVxuICAgIC5leGVjKClcblxuICByZXMuanNvbihub3RlVXBkYXRlZClcbn1cbmNvbnN0IHJlbW92ZU5vdGUgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBub3RlSWQgfSA9IHJlcS5xdWVyeVxuICBjb25zdCBbbm90ZV0gPSBhd2FpdCBuU1FMKClcbiAgICAucXVlcnkoJ3NlbGVjdCcpXG4gICAgLndoZXJlKFsnaWQnLCAnPScsIG5vdGVJZF0pXG4gICAgLmxpbWl0KDEpXG4gICAgLmV4ZWMoKVxuXG4gIGlmICghbm90ZSlcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgbWVzc2FnZTogJ05vdCBGb3VuZCcsXG4gICAgfSlcblxuICBhd2FpdCBuU1FMKCdub3RlcycpLnF1ZXJ5KCdkZWxldGUnKS53aGVyZShbJ2lkJywgJz0nLCBub3RlSWRdKS5saW1pdCgxKS5leGVjKClcblxuICByZXMuc3RhdHVzKDIwNCkuc2VuZChudWxsKVxufVxuXG5jb25zdCBoYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgcmV0dXJuIHNhdmVOb3RlKHJlcSwgcmVzKVxuICAgIGNhc2UgJ0dFVCc6XG4gICAgICByZXR1cm4gbGlzdE5vdGVzKHJlcSwgcmVzKVxuICAgIGNhc2UgJ1BVVCc6XG4gICAgICByZXR1cm4gdXBkYXRlTm90ZShyZXEsIHJlcylcbiAgICBjYXNlICdERUxFVEUnOlxuICAgICAgcmV0dXJuIHJlbW92ZU5vdGUocmVxLCByZXMpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7XG4gICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgbWVzc2FnZTogJ05vdCBGb3VuZCcsXG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNaWRkbGV3YXJlKGhhbmRsZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/notes.js\n");

/***/ }),

/***/ "@nano-sql/core":
/*!*********************************!*\
  !*** external "@nano-sql/core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nano-sql/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmFuby1zcWwvY29yZVwiP2NjZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG5hbm8tc3FsL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmFuby1zcWwvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@nano-sql/core\n");

/***/ })

/******/ });