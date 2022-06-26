/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --primary-color: #ccc;\\r\\n  --secondary-color: #ddd;\\r\\n  --dark: rgba(110, 104, 104, 0.4);\\r\\n  --white: #fff;\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n/*\\r\\nUlises Styles\\r\\n*/\\r\\nheader {\\r\\n  width: 100%;\\r\\n  margin: 2rem 0;\\r\\n}\\r\\n\\r\\n.main-img-logo {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  list-style: none;\\r\\n  gap: 1.2rem;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n.nav-list a {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.nav-list a:link,\\r\\n.nav-list a:visited {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.nav-list a:hover {\\r\\n  color: rgb(75, 72, 72);\\r\\n}\\r\\n\\r\\n.nav-list a:active {\\r\\n  color: rgb(49, 49, 49);\\r\\n}\\r\\n\\r\\n/*\\r\\nCard Styles --Ulises\\r\\n*/\\r\\n#cards-section {\\r\\n  display: grid;\\r\\n  margin: 1.2rem 0;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n}\\r\\n\\r\\n.info-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  justify-self: center;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  align-items: baseline;\\r\\n  justify-content: space-between;\\r\\n  margin-top: 1.1rem;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.likes-counter {\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n.card-btn {\\r\\n  width: fit-content;\\r\\n  padding: 0.3rem;\\r\\n  appearance: none;\\r\\n  box-shadow: 5px 5px black;\\r\\n  transition-duration: 0.1s;\\r\\n  border-radius: 4px;\\r\\n  margin-bottom: 1.1rem;\\r\\n}\\r\\n\\r\\n.card-btn:hover {\\r\\n  transform: translate(5px, 5px);\\r\\n  box-shadow: none;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.card-btn:active {\\r\\n  transform: translate(5px, 5px);\\r\\n  box-shadow: none;\\r\\n  background-color: rgb(156, 147, 147);\\r\\n  transition: 0.2s;\\r\\n}\\r\\n\\r\\n/*\\r\\nFooter Styles - Ulises\\r\\n*/\\r\\nfooter {\\r\\n  border: 4px solid black;\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  padding: 2rem;\\r\\n  margin: 2rem 0 0;\\r\\n}\\r\\n\\r\\n/*\\r\\nAddisu Styles\\r\\n*/\\r\\n\\r\\nbody {\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  font-size: 1.1rem;\\r\\n}\\r\\n\\r\\n#errorContainer {\\r\\n  display: flex;\\r\\n  font-size: 2rem;\\r\\n  opacity: 1;\\r\\n  transition: opacity 10s;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n/* Popup window */\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  height: 100%;\\r\\n  width: 100vw;\\r\\n  z-index: 1;\\r\\n  background-color: var(--dark);\\r\\n  opacity: 0;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  pointer-events: none;\\r\\n  transition: opacity 0.3s ease;\\r\\n  overflow: scroll;\\r\\n}\\r\\n\\r\\n.modal.show {\\r\\n  pointer-events: auto;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.modal-container {\\r\\n  background-color: #fefefe;\\r\\n  margin: 2rem auto;\\r\\n  padding: 1.4rem;\\r\\n  border: 1px solid #888;\\r\\n  border-radius: 17px;\\r\\n}\\r\\n\\r\\n/* popup style */\\r\\n.showType {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: 2px solid rgb(0, 0, 0);\\r\\n  margin: 10px 10px;\\r\\n}\\r\\n\\r\\n.main-img-popup {\\r\\n  margin-bottom: 1.2rem;\\r\\n  width: 400px;\\r\\n  height: 550px;\\r\\n}\\r\\n\\r\\n/* close button */\\r\\n.close {\\r\\n  align-self: flex-end;\\r\\n  color: rgb(58, 58, 58);\\r\\n  font-size: 50px;\\r\\n  font-weight: bold;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: var(--dark);\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nh2,\\r\\nh3 {\\r\\n  font-size: 2rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.show-details-items {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  gap: 10px;\\r\\n  list-style-type: none;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.show-details-items li {\\r\\n  list-style-type: none;\\r\\n  margin: 0 32px;\\r\\n  color: rgb(13, 13, 13);\\r\\n  line-height: 2rem;\\r\\n}\\r\\n\\r\\nform {\\r\\n  align-items: flex-start;\\r\\n  padding: 32px;\\r\\n}\\r\\n\\r\\n.formHeader {\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.contact {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#user-name,\\r\\n#user-comment {\\r\\n  width: 100%;\\r\\n  margin: auto;\\r\\n  border: solid 1px #333;\\r\\n  border-radius: 5px;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n#user-name {\\r\\n  padding: 4px;\\r\\n}\\r\\n\\r\\n#user-comment {\\r\\n  height: 6rem;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n.btn-comment {\\r\\n  color: rgb(255, 255, 255);\\r\\n  font-size: 12px;\\r\\n  line-height: 0.7rem;\\r\\n  padding: 6px;\\r\\n  border-radius: 10px;\\r\\n  font-family: inherit;\\r\\n  font-weight: normal;\\r\\n  text-decoration: none;\\r\\n  font-style: normal;\\r\\n  font-variant: normal;\\r\\n  text-transform: none;\\r\\n  background-image:\\r\\n    linear-gradient(\\r\\n      to right,\\r\\n      rgb(28, 110, 164) 0%,\\r\\n      rgb(35, 136, 203) 50%,\\r\\n      rgb(20, 78, 117) 100%\\r\\n    );\\r\\n  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;\\r\\n  border: 2px solid rgb(28, 110, 164);\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background: #1c6ea4;\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  background: #144e75;\\r\\n}\\r\\n\\r\\n#commentHeader {\\r\\n  font-size: 1.4rem;\\r\\n  margin: 0.6rem auto;\\r\\n}\\r\\n\\r\\n#allComments {\\r\\n  list-style: none;\\r\\n  margin: 0.4rem auto;\\r\\n  max-width: 80%;\\r\\n}\\r\\n\\r\\n#allComments li {\\r\\n  margin: 1.3rem auto;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Capstone_Project_2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Capstone_Project_2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Capstone_Project_2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Capstone_Project_2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Capstone_Project_2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Capstone_Project_2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Capstone_Project_2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Capstone_Project_2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Capstone_Project_2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Capstone_Project_2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_comment_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/comment-function.js */ \"./src/modules/comment-function.js\");\n/* harmony import */ var _modules_add_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add-cards.js */ \"./src/modules/add-cards.js\");\n/* harmony import */ var _modules_likes_count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likes-count.js */ \"./src/modules/likes-count.js\");\n/* harmony import */ var _assets_images_galaxyicon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/galaxyicon.png */ \"./src/assets/images/galaxyicon.png\");\n/* harmony import */ var _modules_shows_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shows-counter.js */ \"./src/modules/shows-counter.js\");\n\r\n\r\n\r\n/*\r\nUlises JS\r\n*/\r\n// Imports\r\n\r\n\r\n\r\n\r\n\r\nconst baseUrl = 'https://api.tvmaze.com/shows/';\r\nconst iBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi9NdZdiCp9O1MxDwJQW/likes/';\r\nconst cBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi9NdZdiCp9O1MxDwJQW/comments';\r\n\r\n// Const from DOM\r\nconst cardsContainer = document.getElementById('cards-section');\r\nconst mainLogo = document.getElementById('main-logo');\r\n\r\nconst modalContainer = document.getElementById('myModal');\r\n\r\n// Load first cards function\r\nfunction loadAllCards() {\r\n  const numberOfShows = 50;\r\n  for (let i = 0; i < numberOfShows; i += 1) {\r\n    const number = i + 6;\r\n    _modules_add_cards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayCards(baseUrl, number);\r\n  }\r\n\r\n  (0,_modules_shows_counter_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', loadAllCards);\r\n\r\n// Display Likes\r\ndocument.addEventListener('DOMContentLoaded', _modules_likes_count_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].receiveLikesInfo(iBaseUrl));\r\n\r\n// Insert Main Logo Icon\r\nconst myLogo = new Image();\r\nmyLogo.src = _assets_images_galaxyicon_png__WEBPACK_IMPORTED_MODULE_4__;\r\nmyLogo.classList.add('main-img-logo');\r\nmainLogo.appendChild(myLogo);\r\n\r\n// Function to change heart color\r\ncardsContainer.addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('fa-regular') === true) {\r\n    const likeId = e.target.parentElement.nextElementSibling.title;\r\n\r\n    e.target.classList.remove('fa-regular');\r\n    e.target.classList.add('fa-solid');\r\n\r\n    // Send New Like\r\n    _modules_likes_count_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendLikesInfo(iBaseUrl, likeId);\r\n\r\n    // Update Likes Info\r\n    _modules_likes_count_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].receiveLikesInfo(iBaseUrl);\r\n  }\r\n\r\n  if (e.target.classList.contains('like-icon') === true) {\r\n    _modules_likes_count_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].receiveLikesInfo(iBaseUrl);\r\n  }\r\n\r\n  // Function to display Modal Window\r\n  if (e.target.classList.contains('comments-popup') === true) {\r\n    const posterId = e.target.id;\r\n\r\n    _modules_add_cards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getPopUpInfo(baseUrl, posterId);\r\n\r\n    const commentPopUp = document.querySelector('.modal');\r\n    commentPopUp.classList.add('show');\r\n  }\r\n});\r\n\r\n// Function to Close the Modal\r\nmodalContainer.addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('close') === true) {\r\n    const commentPopUp = document.querySelector('.modal');\r\n    commentPopUp.classList.remove('show');\r\n\r\n    const showType = document.querySelector('.showType');\r\n\r\n    showType.remove();\r\n  }\r\n\r\n  if (e.target.classList.contains('btn-comment') === true) {\r\n    const mainForm = document.getElementById('comment-form');\r\n    const userName = document.getElementById('user-name');\r\n    const userComment = document.getElementById('user-comment');\r\n    const posterId = e.target.name;\r\n\r\n    mainForm.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      if (userName !== '' && userComment !== '') {\r\n        _modules_comment_function_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].makeComment(cBaseUrl, userName.value, userComment.value, posterId);\r\n      }\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://Capstone_Project_2/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-cards.js":
/*!**********************************!*\
  !*** ./src/modules/add-cards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-function.js */ \"./src/modules/comment-function.js\");\n\r\n\r\nconst cardsSection = document.getElementById('cards-section');\r\nconst cBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi9NdZdiCp9O1MxDwJQW/comments';\r\n\r\nclass MainCards {\r\n  static displayCards(baseUrl, number) {\r\n    this.getInformation(baseUrl, number);\r\n  }\r\n\r\n  static getInformation(baseUrl, number) {\r\n    const numberStr = number.toString();\r\n    const newUrl = baseUrl + numberStr;\r\n    fetch(newUrl)\r\n      .then((response) => response.json())\r\n      .then((result) => this.addCards(result, number));\r\n  }\r\n\r\n  static addCards({ name, image }, number) {\r\n    if (name !== 'Not Found') {\r\n      const newCard = document.createElement('article');\r\n      newCard.classList.add('info-card');\r\n\r\n      newCard.innerHTML = `<img src=\"${image.medium}\" class=\"card-image\">\r\n\r\n      <div class=\"card-title\">\r\n        <h2 class=\"card-title\">${name}</h2>\r\n        <i class=\"fa-regular fa-heart fa-2x like-icon\"></i>\r\n      </div>\r\n\r\n      <p class=\"likes-counter\" title=\"${number}\">0 likes</p>\r\n\r\n      <button class=\"card-btn comments-popup\" id=\"${number}\">Comments</button>\r\n      <button class=\"card-btn\">Reservation</button>`;\r\n\r\n      cardsSection.appendChild(newCard);\r\n    }\r\n  }\r\n\r\n  static getPopUpInfo(baseUrl, number) {\r\n    const numberStr = number.toString();\r\n    const newUrl = baseUrl + numberStr;\r\n\r\n    fetch(newUrl).then((response) => response.json())\r\n      .then((result) => this.addCommentPopUp(result, number));\r\n  }\r\n\r\n  static addCommentPopUp({\r\n    name, image, type, language, status, runtime, premiered,\r\n  }, number) {\r\n    const PopUpSpace = document.getElementById('modal-content');\r\n    const commentPopUp = document.createElement('div');\r\n    commentPopUp.classList.add('showType');\r\n\r\n    commentPopUp.innerHTML = `\r\n      <span class=\"close\">&times;</span>\r\n      <img src=\"${image.original}\" alt=\"Movie-poster\" class=\"main-img-popup\"/>\r\n      \r\n      <h2 class=\"show-title\">${name}</h2>\r\n      <div class=\"show-details\">\r\n        <ul class=\"show-details-items\">\r\n          <li>Name: ${name}</li>\r\n          <li>Type: ${type}</li>\r\n          <li>Language: ${language}</li>\r\n          <li>Status: ${status}</li>\r\n          <li>Runtime: ${runtime}</li>\r\n          <li>Premiered: ${premiered}</li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"comments\">\r\n        <h3 id=\"commentHeader\"></h3>\r\n        <ul id=\"allComments\"></ul>\r\n      </div>\r\n\r\n      <form id=\"comment-form\" class=\"comment-form\">\r\n        <h3 class=\"formHeader\">Add a comment</h3>\r\n        <div class=\"contact\">\r\n          <input type=\"text\" placeholder=\"Your name\" id=\"user-name\" required/>\r\n          <textarea\r\n            name=\"comment\"\r\n            id=\"user-comment\"\r\n            cols=\"60\"\r\n            rows=\"10\"\r\n            placeholder=\"Your insights...\"\r\n            required\r\n          ></textarea>\r\n          <button type=\"submit\" class=\"btn btn-comment\" name=\"${number}\">Comment</button>\r\n        </div>\r\n      </form>    \r\n    `;\r\n\r\n    PopUpSpace.appendChild(commentPopUp);\r\n\r\n    // Show all Comments once the Pop Up appears\r\n    _comment_function_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showAllComments(cBaseUrl, number);\r\n\r\n    const mainForm = document.getElementById('comment-form');\r\n    const userName = document.getElementById('user-name');\r\n    const userComment = document.getElementById('user-comment');\r\n\r\n    mainForm.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      if (userName !== '' && userComment !== '') {\r\n        _comment_function_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].makeComment(cBaseUrl, userName.value, userComment.value, number);\r\n      }\r\n\r\n      _comment_function_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showAllComments(cBaseUrl, number);\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainCards);\n\n//# sourceURL=webpack://Capstone_Project_2/./src/modules/add-cards.js?");

/***/ }),

/***/ "./src/modules/comment-function.js":
/*!*****************************************!*\
  !*** ./src/modules/comment-function.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n/* eslint-disable camelcase */\r\n\r\n\r\nclass MainComments {\r\n  static newAppApiShow() {\r\n    let success;\r\n    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {\r\n      method: 'POST',\r\n    }).then((response) => response.text())\r\n      .then((result) => { success = result; });\r\n\r\n    return success;\r\n  }\r\n\r\n  static makeComment(cBaseUrl, Name, Comment, id) {\r\n    let commentsData;\r\n    fetch(cBaseUrl, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n        username: Name,\r\n        comment: Comment,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n    }).then((response) => response.text())\r\n      .then(((result) => { commentsData = result; }));\r\n\r\n    // Update Comments\r\n    this.showAllComments(cBaseUrl, id);\r\n\r\n    return commentsData;\r\n  }\r\n\r\n  static getCommentsInfo = async (cBaseUrl, posterId) => {\r\n    const newerBaseUrl = `${cBaseUrl}?item_id=${posterId}`;\r\n\r\n    const response = await fetch(newerBaseUrl);\r\n    const result = await response.json();\r\n\r\n    return result;\r\n  }\r\n\r\n  static showAllComments(cBaseUrl, posterId) {\r\n    const commentHeader = document.getElementById('commentHeader');\r\n    const allComments = document.getElementById('allComments');\r\n\r\n    const data = this.getCommentsInfo(cBaseUrl, posterId);\r\n\r\n    data.then((comments) => {\r\n      let tmpList;\r\n      if (comments.error) {\r\n        commentHeader.innerHTML = 'No comments yet! Add comments.';\r\n        tmpList = [];\r\n      } else {\r\n        while (allComments.firstChild) {\r\n          allComments.removeChild(allComments.firstChild);\r\n        }\r\n        for (let i = 0; i < comments.length; i += 1) {\r\n          this.displayComments(comments[i]);\r\n        }\r\n\r\n        tmpList = comments;\r\n        const commentsNumber = (0,_counter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tmpList);\r\n        commentHeader.textContent = `Comments (${commentsNumber})`;\r\n      }\r\n    });\r\n  }\r\n\r\n  static displayComments({ creation_date, username, comment }) {\r\n    const allComments = document.getElementById('allComments');\r\n    const newCommentElement = document.createElement('li');\r\n\r\n    newCommentElement.innerHTML = `${creation_date} ${username}: ${comment}`;\r\n\r\n    allComments.appendChild(newCommentElement);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainComments);\n\n//# sourceURL=webpack://Capstone_Project_2/./src/modules/comment-function.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCount = (list) => list.length;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCount);\r\n\n\n//# sourceURL=webpack://Capstone_Project_2/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/likes-count.js":
/*!************************************!*\
  !*** ./src/modules/likes-count.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass LikesInfo {\r\n  static sendLikesInfo(iBaseUrl, id) {\r\n    let likesData;\r\n    fetch(iBaseUrl, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n    }).then((response) => response.text())\r\n      .then(((result) => { likesData = result; }));\r\n    return likesData;\r\n  }\r\n\r\n  static receiveLikesInfo = async (iBaseUrl) => {\r\n    const response = await fetch(iBaseUrl);\r\n    const result = await response.json();\r\n\r\n    const updatedElement = document.querySelectorAll('.likes-counter');\r\n\r\n    updatedElement.forEach((n) => {\r\n      for (let i = 0; i < result.length; i += 1) {\r\n        if (n.title === result[i].item_id) {\r\n          n.textContent = `${result[i].likes} likes`;\r\n        }\r\n      }\r\n    });\r\n\r\n    return result;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikesInfo);\n\n//# sourceURL=webpack://Capstone_Project_2/./src/modules/likes-count.js?");

/***/ }),

/***/ "./src/modules/shows-counter.js":
/*!**************************************!*\
  !*** ./src/modules/shows-counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction showsCounter() {\r\n  const numberOfShows = 50;\r\n  const tvShowsCounter = document.getElementById('tv-counter');\r\n\r\n  tvShowsCounter.innerHTML = `TV Shows (${numberOfShows})`;\r\n\r\n  return numberOfShows;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showsCounter);\n\n//# sourceURL=webpack://Capstone_Project_2/./src/modules/shows-counter.js?");

/***/ }),

/***/ "./src/assets/images/galaxyicon.png":
/*!******************************************!*\
  !*** ./src/assets/images/galaxyicon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d4d1bd4958ad6a6896bf.png\";\n\n//# sourceURL=webpack://Capstone_Project_2/./src/assets/images/galaxyicon.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;