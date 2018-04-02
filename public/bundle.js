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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/home";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Parse Error: Line 26: Unexpected identifier\n    at throwError (/app/node_modules/jstransform/node_modules/esprima-fb/esprima.js:2818:21)\n    at throwUnexpected (/app/node_modules/jstransform/node_modules/esprima-fb/esprima.js:2862:13)\n    at consumeSemicolon (/app/node_modules/jstransform/node_modules/esprima-fb/esprima.js:3003:13)\n    at parseConstLetDeclaration (/app/node_modules/jstransform/node_modules/esprima-fb/esprima.js:4887:9)\n    at parseSourceElement (/app/node_modules/jstransform/node_modules/esprima-fb/esprima.js:6428:24)\n    at parseProgramElement (/app/node_modules/jstransform/node_modules/esprima-fb/esprima.js:6491:16)\n    at parseProgramElements (/app/node_modules/jstransform/node_modules/esprima-fb/esprima.js:6523:29)\n    at parseProgram (/app/node_modules/jstransform/node_modules/esprima-fb/esprima.js:6536:16)\n    at Object.parse (/app/node_modules/jstransform/node_modules/esprima-fb/esprima.js:7713:23)\n    at getAstForSource (/app/node_modules/jstransform/src/jstransform.js:244:21)\n    at Object.transform (/app/node_modules/jstransform/src/jstransform.js:267:11)\n    at Object.transform (/app/node_modules/jstransform/src/simple.js:105:28)\n    at Object.module.exports (/app/node_modules/jsx-loader/index.js:15:31)");

/***/ })
/******/ ]);