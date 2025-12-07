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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n  margin: 0;\n}\n\n/* 3. Enable keyword animations */\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    interpolate-size: allow-keywords;\n  }\n}\n\nbody {\n  /* 4. Add accessible line-height */\n  line-height: 1.5;\n  /* 5. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 6. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 7. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* 8. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* 9. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n/*\n  10. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/reset.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: #efe9e3;\n  font-family: \"Lato\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 300;\n  font-style: normal;\n}\n\n#allProjectContent {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\nheader {\n  font-size: 2rem;\n  font-weight: 400;\n  background-color: #efe9e3;\n}\n\n#content {\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n  height: 100vh;\n}\n\n#sidebar {\n  width: 20%;\n  height: 100%;\n  margin-left: 1vw;\n  background-color: #efe9e3;\n}\n\n#sidebarHeader {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.dueDate {\n  font-weight: 500;\n}\n\n.dueDate > * {\n  font-weight: 300;\n}\n\n#activeProject {\n  width: 80%;\n  height: 100%;\n  background-color: #f9f8f6;\n}\n\n#createProject {\n  margin: 1vh 1vw;\n  background-color: #efe9e3;\n}\n\ndialog {\n  border-radius: 10px;\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #f9f8f6;\n  border: 1px solid black;\n  padding: 10px;\n  z-index: 1;\n}\n\n.editDialog {\n  font-size: 1rem;\n}\n\ndialog > button {\n  background-color: #f9f8f6;\n}\n\n.formLine {\n  display: flex;\n  align-items: center;\n}\n\nlabel {\n  width: 90px;\n  margin-right: 10px;\n  margin-bottom: 2px;\n}\n\n.buttonLine {\n  display: flex;\n  justify-content: center;\n}\n\ninput[type=\"text\"],\ninput[type=\"date\"] {\n  flex-grow: 1;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.allTodoDiv {\n  margin: 1vh 1vw;\n}\n\n#projectHeader {\n  display: grid;\n  max-height: 20vh;\n  overflow: hidden;\n  grid-template-columns: 1fr 2fr repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  margin-bottom: 1vh;\n  margin: 2vh 0 1vh 0;\n}\n\n#projectHeader > button {\n  display: flex;\n  align-items: center;\n}\n\n#projectHeader > button > * {\n  margin: 1px;\n}\n#projectHeader > button > img {\n  max-height: 5vh;\n}\n\n#projPriority,\n#priorityBoxHolder {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.priorityBoxes {\n  height: 10px;\n  width: 15px;\n  margin: 5px;\n}\n\n#projectHeader > *,\n.taskContent > * {\n  margin: 0 1vw;\n}\n\n.task {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.taskContent {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.removeButton {\n  margin-right: 10%;\n}\n\nbutton {\n  font-weight: bold;\n\n  background-color: #f9f8f6;\n\n  border: none;\n  border-radius: 10px;\n\n  padding: 0.5vh 1.5vw;\n  cursor: pointer;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/assets/add.svg":
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"29ecd500656399998d9f.svg\";\n\n//# sourceURL=webpack://todo_list/./src/assets/add.svg?\n}");

/***/ }),

/***/ "./src/assets/add_circle.svg":
/*!***********************************!*\
  !*** ./src/assets/add_circle.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"0c7861121e60d7ad9fdc.svg\";\n\n//# sourceURL=webpack://todo_list/./src/assets/add_circle.svg?\n}");

/***/ }),

/***/ "./src/assets/cancel.svg":
/*!*******************************!*\
  !*** ./src/assets/cancel.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"3b6c97bdf4cd1ebe08cc.svg\";\n\n//# sourceURL=webpack://todo_list/./src/assets/cancel.svg?\n}");

/***/ }),

/***/ "./src/assets/check_box.svg":
/*!**********************************!*\
  !*** ./src/assets/check_box.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b6046b0011c3eb052af2.svg\";\n\n//# sourceURL=webpack://todo_list/./src/assets/check_box.svg?\n}");

/***/ }),

/***/ "./src/assets/check_box_outline.svg":
/*!******************************************!*\
  !*** ./src/assets/check_box_outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"39f98c074dc3cd2b2c03.svg\";\n\n//# sourceURL=webpack://todo_list/./src/assets/check_box_outline.svg?\n}");

/***/ }),

/***/ "./src/assets/check_circle_black.svg":
/*!*******************************************!*\
  !*** ./src/assets/check_circle_black.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"304dfc79ce61d57cff90.svg\";\n\n//# sourceURL=webpack://todo_list/./src/assets/check_circle_black.svg?\n}");

/***/ }),

/***/ "./src/assets/check_circle_green.svg":
/*!*******************************************!*\
  !*** ./src/assets/check_circle_green.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"374dfcb1a64dd3e00773.svg\";\n\n//# sourceURL=webpack://todo_list/./src/assets/check_circle_green.svg?\n}");

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"66d3958d6b48a544d1be.svg\";\n\n//# sourceURL=webpack://todo_list/./src/assets/delete.svg?\n}");

/***/ }),

/***/ "./src/assets/remove.svg":
/*!*******************************!*\
  !*** ./src/assets/remove.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"e9d075733e65b6e078a7.svg\";\n\n//# sourceURL=webpack://todo_list/./src/assets/remove.svg?\n}");

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectClickEvent: () => (/* binding */ addProjectClickEvent),\n/* harmony export */   addTodoButton: () => (/* binding */ addTodoButton),\n/* harmony export */   closeDialog: () => (/* binding */ closeDialog),\n/* harmony export */   completedStatusClickEvent: () => (/* binding */ completedStatusClickEvent),\n/* harmony export */   createCancelButton: () => (/* binding */ createCancelButton),\n/* harmony export */   createProjectButton: () => (/* binding */ createProjectButton),\n/* harmony export */   deleteProjectClickEvent: () => (/* binding */ deleteProjectClickEvent),\n/* harmony export */   editProjectClick: () => (/* binding */ editProjectClick),\n/* harmony export */   removeButtonTodo: () => (/* binding */ removeButtonTodo),\n/* harmony export */   submitTodoClickEvent: () => (/* binding */ submitTodoClickEvent)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/add.svg */ \"./src/assets/add.svg\");\n/* harmony import */ var _assets_add_circle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/add_circle.svg */ \"./src/assets/add_circle.svg\");\n/* harmony import */ var _assets_remove_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/remove.svg */ \"./src/assets/remove.svg\");\n/* harmony import */ var _assets_cancel_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/cancel.svg */ \"./src/assets/cancel.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction createProjectButton(dialog) {\n  const sidebarHeader = document.getElementById(\"sidebarHeader\");\n\n  const button = document.createElement(\"button\");\n  const svg = document.createElement(\"img\");\n  svg.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_4__;\n  svg.alt = \"Add Project\";\n  button.appendChild(svg);\n  button.id = \"createProject\";\n\n  sidebarHeader.appendChild(button);\n\n  button.addEventListener(\"click\", () => {\n    dialog.showModal();\n  });\n\n  return button;\n}\n\nfunction editProjectClick(button, dialog) {\n  button.addEventListener(\"click\", () => {\n    dialog.showModal();\n  });\n}\n\nfunction addProjectClickEvent(buttonId, database, dialog) {\n  const button = document.getElementById(buttonId);\n  button.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    const project = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project(\n      document.getElementById(\"projectTitle\").value,\n      document.getElementById(\"projectDescription\").value,\n      document.getElementById(\"projectPriority\").value,\n      document.getElementById(\"projectDueDate\").value,\n    );\n    database.addProject(project);\n\n    dialog.close();\n    document.getElementById(\"projectTitle\").value = \"\";\n    document.getElementById(\"projectDescription\").value = \"\";\n    document.getElementById(\"projectPriority\").value = \"\";\n    document.getElementById(\"projectDueDate\").value = \"\";\n\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.printScreen)(database, project);\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.populateSidebar)(database);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeDatabase)(database);\n  });\n}\n\nfunction deleteProjectClickEvent(button, project, database) {\n  button.addEventListener(\"click\", () => {\n    database.removeProject(project);\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.printScreen)(database, (project = \"\"));\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeDatabase)(database);\n  });\n}\n\nfunction addTodoButton(projectHeaderDiv, project) {\n  const todoButton = document.createElement(\"button\");\n  const todoButtonText = document.createElement(\"div\");\n  todoButtonText.textContent = \"Add todo\";\n  const addCircle = document.createElement(\"img\");\n  addCircle.src = _assets_add_circle_svg__WEBPACK_IMPORTED_MODULE_5__;\n  addCircle.alt = \"Add todo\";\n  todoButton.id = project.id + \"addTodoButton\";\n\n  todoButton.appendChild(addCircle);\n  todoButton.appendChild(todoButtonText);\n\n  projectHeaderDiv.appendChild(todoButton);\n}\n\nfunction removeButtonTodo(project, database, todo) {\n  const remove = document.createElement(\"button\");\n  const svg = document.createElement(\"img\");\n  svg.src = _assets_remove_svg__WEBPACK_IMPORTED_MODULE_6__;\n  svg.alt = \"Remove\";\n  remove.className = \"removeButton\";\n  remove.appendChild(svg);\n\n  remove.addEventListener(\"click\", () => {\n    project.removeTodo(todo);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeDatabase)(database);\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.printTodos)(project);\n  });\n\n  return remove;\n}\n\nfunction closeDialog(/*database*/ button, dialog /*project*/) {\n  button.addEventListener(\"click\", () => {\n    // printScreen(database, project);\n    dialog.close();\n  });\n}\n\nfunction submitTodoClickEvent(button, project, dialog, database) {\n  const todoInput = project.id + \"todoInput\";\n  button.addEventListener(\"click\", () => {\n    project.newTodo(document.getElementById(todoInput).value);\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.printTodos)(project);\n\n    document.getElementById(todoInput).value = \"\";\n\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeDatabase)(database);\n\n    dialog.close();\n  });\n}\n\nfunction completedStatusClickEvent(div, project, database) {\n  div.addEventListener(\"click\", () => {\n    project.updateStatus();\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeDatabase)(database);\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.printScreen)(database, project);\n  });\n}\n\nfunction createCancelButton(dialog) {\n  const cancelButton = document.createElement(\"button\");\n\n  const cancelSvgButton = document.createElement(\"img\");\n  cancelSvgButton.src = _assets_cancel_svg__WEBPACK_IMPORTED_MODULE_7__;\n  cancelSvgButton.alt = \"Cancel\";\n\n  cancelButton.appendChild(cancelSvgButton);\n\n  closeDialog(cancelButton, dialog);\n\n  return cancelButton;\n}\n\n//# sourceURL=webpack://todo_list/./src/button.js?\n}");

/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Database: () => (/* binding */ Database)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n\n\nclass Database {\n  constructor() {\n    this.projectArray = [];\n  }\n\n  createProject(projectName) {\n    const project = new _projects_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);\n\n    return project;\n  }\n\n  addProject(project) {\n    this.projectArray.push(project);\n  }\n\n  removeProject(project) {\n    let index = this.projectArray.indexOf(project);\n\n    if (index !== -1) {\n      this.projectArray.splice(index, 1);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/database.js?\n}");

/***/ }),

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoDialog: () => (/* binding */ addTodoDialog),\n/* harmony export */   createProjectDialog: () => (/* binding */ createProjectDialog),\n/* harmony export */   createTodoDialog: () => (/* binding */ createTodoDialog)\n/* harmony export */ });\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n\n\n\n\n\nfunction createProjectDialog(dialogId) {\n  const projectDialog = createDialog(dialogId);\n\n  const projectForm = createForm();\n\n  const formLines = createProjectFormLines(projectDialog);\n\n  formLines.forEach((line) => {\n    projectForm.appendChild(line);\n    line.className = \"formLine\";\n  });\n\n  projectDialog.appendChild(projectForm);\n\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(projectDialog);\n\n  return projectDialog;\n}\n\nfunction createProjectFormLines(dialog) {\n  const formLines = [];\n\n  const priorityOptions = [\n    { value: \"high\", text: \"High\" },\n    { value: \"medium\", text: \"Medium\" },\n    { value: \"low\", text: \"Low\" },\n  ];\n\n  const lineOne = createTextBoxInput(\"Project Title: \", \"projectTitle\");\n  formLines.push(lineOne);\n  const lineTwo = createTextBoxInput(\"Description: \", \"projectDescription\");\n  formLines.push(lineTwo);\n  const lineThree = createSelectInput(\n    \"Priority: \",\n    \"projectPriority\",\n    priorityOptions,\n  );\n  formLines.push(lineThree);\n  const lineFour = createDateInput(\"Due Date: \", \"projectDueDate\");\n  formLines.push(lineFour);\n  const lineFive = document.createElement(\"div\");\n  // refactor\n  formLines.push(lineFive);\n  lineFive.classList = (\"formLine\", \"buttonLine\");\n  const addProjectButton = document.createElement(\"button\");\n  addProjectButton.id = \"addProjectButton\";\n  addProjectButton.textContent = \"Add Project\";\n\n  lineFive.appendChild(addProjectButton);\n\n  const cancelButton = (0,_button_js__WEBPACK_IMPORTED_MODULE_0__.createCancelButton)(dialog);\n  lineOne.appendChild(cancelButton);\n\n  return formLines;\n}\n\nfunction createTodoDialog(project, database) {\n  const todoDialog = createDialog(project.id + \"todo\");\n\n  const lineOne = createTextBoxInput(\"New todo: \", project.id + \"todoInput\");\n\n  const lineTwo = document.createElement(\"div\");\n  lineTwo.classList = (\"formLine\", \"buttonLine\");\n\n  const todoDialogButton = document.createElement(\"button\");\n  todoDialogButton.textContent = \"Add\";\n  todoDialogButton.id = project.id + \"add\";\n  lineTwo.appendChild(todoDialogButton);\n\n  const cancelButton = (0,_button_js__WEBPACK_IMPORTED_MODULE_0__.createCancelButton)(todoDialog);\n  lineOne.appendChild(cancelButton);\n\n  todoDialog.appendChild(lineOne);\n  todoDialog.appendChild(lineTwo);\n\n  (0,_button_js__WEBPACK_IMPORTED_MODULE_0__.submitTodoClickEvent)(todoDialogButton, project, todoDialog, database);\n\n  return todoDialog;\n}\n\nfunction addTodoDialog(project, database) {\n  const projectHeader = document.getElementById(\"projectHeader\");\n  const todoDialog = createTodoDialog(project, database);\n  projectHeader.appendChild(todoDialog);\n\n  openTodo(project);\n}\n\nfunction openTodo(project) {\n  const dialogId = project.id + \"todo\";\n  const todoDialog = document.getElementById(dialogId);\n  const button = document.getElementById(project.id + \"addTodoButton\");\n  button.addEventListener(\"click\", () => {\n    todoDialog.showModal();\n  });\n}\n\nfunction createDialog(id = \"\") {\n  const dialog = document.createElement(\"dialog\");\n  dialog.id = id;\n\n  return dialog;\n}\n\nfunction createForm(id = \"\") {\n  const form = document.createElement(\"form\");\n  form.id = id;\n\n  return form;\n}\n\nfunction createTextBoxInput(text, id, value = \"\") {\n  const formGroup = document.createElement(\"div\");\n\n  const formLineText = document.createElement(\"label\");\n  formLineText.textContent = text;\n\n  const formInput = document.createElement(\"input\");\n  formInput.id = id;\n  formInput.value = value;\n  formLineText.htmlFor = id;\n\n  formGroup.appendChild(formLineText);\n  formGroup.appendChild(formInput);\n\n  return formGroup;\n}\n\nfunction createSelectInput(text, id, options) {\n  const formGroup = document.createElement(\"div\");\n\n  const formLineText = document.createElement(\"label\");\n  formLineText.textContent = text;\n\n  const selectInput = document.createElement(\"select\");\n  selectInput.id = id;\n\n  const selectOptions = options;\n\n  selectOptions.forEach((option) => {\n    const selection = document.createElement(\"option\");\n    selection.value = option.value;\n    selection.textContent = option.text;\n    selectInput.appendChild(selection);\n  });\n\n  formLineText.htmlFor = id;\n\n  formGroup.appendChild(formLineText);\n  formGroup.appendChild(selectInput);\n\n  return formGroup;\n}\n\nfunction createDateInput(text, id) {\n  const formGroup = document.createElement(\"div\");\n\n  const formLineText = document.createElement(\"label\");\n  formLineText.textContent = text;\n\n  const dateInput = document.createElement(\"input\");\n  dateInput.id = id;\n  dateInput.type = \"date\";\n\n  formGroup.appendChild(formLineText);\n  formGroup.appendChild(dateInput);\n\n  return formGroup;\n}\n\n\n//# sourceURL=webpack://todo_list/./src/dialog.js?\n}");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   printScreen: () => (/* binding */ printScreen),\n/* harmony export */   printTodos: () => (/* binding */ printTodos)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/button.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog */ \"./src/dialog.js\");\n/* harmony import */ var _assets_check_box_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/check_box.svg */ \"./src/assets/check_box.svg\");\n/* harmony import */ var _assets_check_box_outline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/check_box_outline.svg */ \"./src/assets/check_box_outline.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction printScreen(database, project = \"\") {\n  resetProjectDivs();\n\n  (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.populateSidebar)(database);\n\n  if (project !== \"\") {\n    printHeader(project, database);\n    (0,_dialog__WEBPACK_IMPORTED_MODULE_4__.addTodoDialog)(project, database);\n    printTodos(project, database);\n  }\n}\n\nfunction resetProjectDivs() {\n  const projectHeader = document.getElementById(\"projectHeader\");\n  projectHeader.textContent = \"\";\n\n  const projectDetails = document.getElementById(\"projectDetails\");\n  projectDetails.textContent = \"\";\n}\n\nfunction printHeader(project, database) {\n  const projectHeader = document.getElementById(\"projectHeader\");\n\n  const headerDivs = (0,_header__WEBPACK_IMPORTED_MODULE_1__.createHeaderDivs)(project, database);\n\n  headerDivs.forEach((div) => {\n    projectHeader.appendChild(div);\n  });\n\n  (0,_button__WEBPACK_IMPORTED_MODULE_2__.addTodoButton)(projectHeader, project);\n}\n\nfunction printTodos(project, database) {\n  const projectDetails = document.getElementById(\"projectDetails\");\n\n  projectDetails.textContent = \"\";\n\n  const todos = project.tasks;\n\n  buildTodoDivs(todos, project, database);\n}\n\nfunction buildTodoDivs(todos, project, database) {\n  const projectDetails = document.getElementById(\"projectDetails\");\n  if (todos !== undefined) {\n    todos.forEach((todo) => {\n      const taskDiv = document.createElement(\"div\");\n      taskDiv.className = \"task\";\n\n      const taskContent = document.createElement(\"div\");\n      taskContent.className = \"taskContent\";\n\n      const taskMarker = document.createElement(\"img\");\n      taskMarker.className = \"taskMarker\";\n      if (todo.completed === false) {\n        taskMarker.src = _assets_check_box_outline_svg__WEBPACK_IMPORTED_MODULE_6__;\n        taskMarker.alt = \"Not completed\";\n      } else {\n        taskMarker.src = _assets_check_box_svg__WEBPACK_IMPORTED_MODULE_5__;\n        taskMarker.alt = \"Completed\";\n      }\n\n      updateDivColor(taskDiv, taskMarker, todo, database);\n\n      const taskText = document.createElement(\"div\");\n      taskText.className = \"taskText\";\n      taskText.textContent = todo.task;\n\n      const remove = (0,_button__WEBPACK_IMPORTED_MODULE_2__.removeButtonTodo)(project, database, todo);\n\n      taskContent.appendChild(taskMarker);\n      taskContent.appendChild(taskText);\n      taskDiv.appendChild(taskContent);\n      taskDiv.appendChild(remove);\n\n      projectDetails.appendChild(taskDiv);\n    });\n  }\n}\n\nfunction updateDivColor(div, taskMarker, todo, database) {\n  div.addEventListener(\"click\", () => {\n    if (taskMarker.src === _assets_check_box_outline_svg__WEBPACK_IMPORTED_MODULE_6__) {\n      taskMarker.src = _assets_check_box_svg__WEBPACK_IMPORTED_MODULE_5__;\n      taskMarker.alt = \"Completed\";\n      todo.completed = true;\n      (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeDatabase)(database);\n    } else {\n      taskMarker.src = _assets_check_box_outline_svg__WEBPACK_IMPORTED_MODULE_6__;\n      taskMarker.alt = \"Not completed\";\n      todo.complete = false;\n      (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeDatabase)(database);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://todo_list/./src/display.js?\n}");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader),\n/* harmony export */   createHeaderDivs: () => (/* binding */ createHeaderDivs)\n/* harmony export */ });\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/button.js\");\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/delete.svg */ \"./src/assets/delete.svg\");\n/* harmony import */ var _assets_check_circle_black_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/check_circle_black.svg */ \"./src/assets/check_circle_black.svg\");\n/* harmony import */ var _assets_check_circle_green_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/check_circle_green.svg */ \"./src/assets/check_circle_green.svg\");\n\n\n\n\n\n\n\n\n\nfunction createHeader() {\n  const header = document.getElementById(\"header\");\n  header.textContent = \"ToDooDoo\";\n}\n\nfunction createHeaderDivs(project, database) {\n  const headerDivs = [];\n\n  const projName = document.createElement(\"h3\");\n  headerDivs.push(projName);\n  projName.textContent = \"Project: \" + project.name;\n\n  const projDescription = document.createElement(\"div\");\n  projDescription.id = \"description\";\n  headerDivs.push(projDescription);\n  projDescription.textContent = \"Description: \" + project.description;\n\n  const timeDelta = document.createElement(\"div\");\n  headerDivs.push(timeDelta);\n  dateDelta(timeDelta, project);\n\n  const projPriority = document.createElement(\"div\");\n  projPriority.id = \"projPriority\";\n  headerDivs.push(projPriority);\n  priorityDisplay(project, projPriority);\n\n  const deleteProject = document.createElement(\"button\");\n  headerDivs.push(deleteProject);\n  deleteProjectHeader(deleteProject, project, database);\n\n  const completedStatus = completedStatusDiv(project);\n  (0,_button__WEBPACK_IMPORTED_MODULE_0__.completedStatusClickEvent)(completedStatus, project, database);\n  headerDivs.push(completedStatus);\n\n  return headerDivs;\n}\n\nfunction completedStatusDiv(project) {\n  const completedStatus = document.createElement(\"button\");\n\n  if (project.completed === false) {\n    populateCompletedSvg(\n      completedStatus,\n      _assets_check_circle_black_svg__WEBPACK_IMPORTED_MODULE_2__,\n      \"Mark Project Completed\",\n      \"Mark Project Completed\",\n      \"black\",\n    );\n  } else {\n    populateCompletedSvg(\n      completedStatus,\n      _assets_check_circle_green_svg__WEBPACK_IMPORTED_MODULE_3__,\n      \"Project Completed!\",\n      \"Project Completed!\",\n      \"#78A75A\",\n    );\n  }\n\n  return completedStatus;\n}\n\nfunction populateCompletedSvg(parentDiv, svgSrc, altText, textContent, color) {\n  const completedStatusSvg = document.createElement(\"img\");\n  completedStatusSvg.src = svgSrc;\n  completedStatusSvg.alt = altText;\n  const completedStatusText = document.createElement(\"div\");\n  completedStatusText.textContent = textContent;\n  completedStatusText.style.color = color;\n\n  parentDiv.appendChild(completedStatusSvg);\n  parentDiv.appendChild(completedStatusText);\n}\n\nfunction dateDelta(div, project) {\n  const roundDays = project.dateDelta();\n  if (roundDays <= 0) {\n    div.textContent = \"Project is past due!\";\n    div.style.color = \"red\";\n    div.style.fontWeight = \"bold\";\n  } else if (roundDays === 1) {\n    div.textContent = \"Due in 24 hours!\";\n  } else {\n    div.textContent = \"Due in \" + roundDays + \" days!\";\n  }\n}\n\nfunction deleteProjectHeader(div, project, database) {\n  div.id = \"deleteProject\";\n  const svg = document.createElement(\"img\");\n  svg.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_1__;\n  svg.alt = \"Delete project\";\n  const deleteProjectText = document.createElement(\"div\");\n  deleteProjectText.textContent = \"Delete project\";\n  div.appendChild(svg);\n  div.appendChild(deleteProjectText);\n  (0,_button__WEBPACK_IMPORTED_MODULE_0__.deleteProjectClickEvent)(div, project, database);\n}\n\nfunction priorityDisplay(project, div) {\n  const priorityText = document.createElement(\"div\");\n  priorityText.textContent = \"Priority: \";\n\n  const priorityBoxHolder = document.createElement(\"div\");\n  priorityBoxHolder.id = \"priorityBoxHolder\";\n\n  div.appendChild(priorityText);\n  div.appendChild(priorityBoxHolder);\n\n  const box1 = document.createElement(\"div\");\n  box1.className = \"priorityBoxes\";\n  const box2 = document.createElement(\"div\");\n  box2.className = \"priorityBoxes\";\n  const box3 = document.createElement(\"div\");\n  box3.className = \"priorityBoxes\";\n\n  priorityBoxHolder.appendChild(box1);\n  priorityBoxHolder.appendChild(box2);\n  priorityBoxHolder.appendChild(box3);\n\n  if (project.priority === \"high\") {\n    box1.style.backgroundColor = \"red\";\n    box2.style.backgroundColor = \"red\";\n    box3.style.backgroundColor = \"red\";\n  } else if (project.priority === \"medium\") {\n    box1.style.backgroundColor = \"orange\";\n    box2.style.backgroundColor = \"orange\";\n  } else {\n    box1.style.backgroundColor = \"green\";\n  }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/header.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.js */ \"./src/dialog.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n// index.js\n\n\n\n\n\n\n\n\n\n\nfunction initialize() {\n  (0,_header_js__WEBPACK_IMPORTED_MODULE_4__.createHeader)();\n  (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_5__.createSidebar)();\n\n  const projectDatabase = (0,_storage_js__WEBPACK_IMPORTED_MODULE_6__.loadDatabase)();\n  const projects = projectDatabase.projectArray;\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_7__.printScreen)(projectDatabase, projects[0]);\n  const projectDialog = (0,_dialog_js__WEBPACK_IMPORTED_MODULE_2__.createProjectDialog)(\"addProject\");\n\n  (0,_button_js__WEBPACK_IMPORTED_MODULE_3__.createProjectButton)(projectDialog);\n  (0,_button_js__WEBPACK_IMPORTED_MODULE_3__.addProjectClickEvent)(\"addProjectButton\", projectDatabase, projectDialog);\n}\n\ninitialize();\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?\n}");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\n\nclass Project {\n  constructor(name, description, priority, dueDate) {\n    this.name = name;\n    this.description = description;\n    this.priority = priority;\n    this.dueDate = dueDate;\n    this.createdAt = Date.now();\n    this.tasks = [];\n    this.completed = false;\n    this.id = crypto.randomUUID();\n  }\n\n  newTodo(todo) {\n    const task = new _todos_js__WEBPACK_IMPORTED_MODULE_0__.Todo(todo);\n    this.tasks.push(task);\n  }\n\n  removeTodo(todo) {\n    let index = this.tasks.indexOf(todo);\n\n    if (index !== -1) {\n      this.tasks.splice(index, 1);\n    }\n  }\n\n  dateDelta() {\n    const projectDueDate = new Date(this.dueDate);\n    const currentDate = new Date();\n    const delta =\n      (projectDueDate.getTime() - currentDate.getTime()) /\n      (1000 * 60 * 60 * 24);\n    const roundDays = Math.round(delta + 1);\n\n    return roundDays;\n  }\n\n  updatePriority(newPrio) {\n    this.priority = newPrio;\n  }\n\n  updateStatus() {\n    if (this.completed === false) {\n      this.completed = true;\n    } else {\n      this.completed = false;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/projects.js?\n}");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/reset.css?\n}");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSidebar: () => (/* binding */ createSidebar),\n/* harmony export */   populateSidebar: () => (/* binding */ populateSidebar)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\n\nfunction createSidebar() {\n  const sidebar = document.getElementById(\"sidebar\");\n\n  const sidebarHeader = document.createElement(\"div\");\n  sidebarHeader.id = \"sidebarHeader\";\n\n  const sidebarTitle = document.createElement(\"h3\");\n  sidebarTitle.textContent = \"Projects\";\n\n  const sidebarProjectList = document.createElement(\"div\");\n  sidebarProjectList.id = \"sidebarProjectList\";\n\n  const due24 = document.createElement(\"div\");\n  due24.id = \"due24\";\n  due24.className = \"dueDate\";\n  due24.textContent = \"Due in 24 hours\";\n\n  const dueSeven = document.createElement(\"div\");\n  dueSeven.id = \"dueSeven\";\n  dueSeven.className = \"dueDate\";\n  dueSeven.textContent = \"Due in 7 days\";\n\n  const dueThirty = document.createElement(\"div\");\n  dueThirty.id = \"dueThirty\";\n  dueThirty.className = \"dueDate\";\n  dueThirty.textContent = \"Due in 30 days\";\n\n  sidebarProjectList.appendChild(due24);\n  sidebarProjectList.appendChild(dueSeven);\n  sidebarProjectList.appendChild(dueThirty);\n\n  sidebarHeader.appendChild(sidebarTitle);\n  sidebar.appendChild(sidebarHeader);\n  sidebar.appendChild(sidebarProjectList);\n}\n\nfunction populateSidebar(database) {\n  const due24 = document.getElementById(\"due24\");\n  due24.textContent = \"\";\n  due24.textContent = \"Due in 24 hours\";\n  const dueSeven = document.getElementById(\"dueSeven\");\n  dueSeven.textContent = \"\";\n  dueSeven.textContent = \"Due next seven days\";\n  const dueThirty = document.getElementById(\"dueThirty\");\n  dueThirty.textContent = \"\";\n  dueThirty.textContent = \"Due next thirty days\";\n\n  const projects = database.projectArray;\n\n  projects.forEach((project) => {\n    const projectSidebar = projectSidebarDiv(database, project);\n    sortByDate(project, projectSidebar, due24, dueSeven, dueThirty);\n  });\n}\n\nfunction projectSidebarDiv(database, project) {\n  const projectSidebar = document.createElement(\"div\");\n  projectSidebar.className = \"projectSidebar\";\n  projectSidebar.id = project.id + \"sb\";\n  projectSidebar.textContent = project.name;\n  projectSidebar.addEventListener(\"click\", () => {\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.printScreen)(database, project);\n  });\n\n  return projectSidebar;\n}\n\nfunction sortByDate(project, projectSidebar, due24, dueSeven, dueThirty) {\n  if (project.dateDelta() <= 1) {\n    due24.appendChild(projectSidebar);\n  } else if (project.dateDelta() <= 7) {\n    dueSeven.appendChild(projectSidebar);\n  } else {\n    dueThirty.appendChild(projectSidebar);\n  }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/sidebar.js?\n}");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadDatabase: () => (/* binding */ loadDatabase),\n/* harmony export */   storeDatabase: () => (/* binding */ storeDatabase)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ \"./src/database.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n\n\n\n\n\n\n\nfunction storeDatabase(database) {\n  const databaseToString = JSON.stringify(database);\n\n  localStorage.setItem(\"userData\", databaseToString);\n}\n\nfunction loadDatabase() {\n  const retrievedString = localStorage.getItem(\"userData\");\n\n  if (retrievedString) {\n    const database = JSON.parse(retrievedString);\n\n    const projectDatabase = new _database__WEBPACK_IMPORTED_MODULE_0__.Database();\n    Object.assign(projectDatabase, database);\n\n    const projects = projectDatabase.projectArray;\n    projects.forEach((project) => {\n      let index = projects.indexOf(project);\n      const newProject = new _projects__WEBPACK_IMPORTED_MODULE_1__.Project();\n      Object.assign(newProject, project);\n      projects.splice(index, 1);\n      projects.splice(index, 0, newProject);\n      const todos = project.tasks;\n\n      todos.forEach((todo) => {\n        let index = todos.indexOf(todo);\n\n        const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_3__.Todo();\n        Object.assign(newTodo, todo);\n\n        todos.splice(index, 1);\n\n        todos.splice(index, 0, newTodo);\n      });\n    });\n\n    (0,_display__WEBPACK_IMPORTED_MODULE_2__.printScreen)(projectDatabase);\n    return projectDatabase;\n  } else {\n    const projectDatabase = new _database__WEBPACK_IMPORTED_MODULE_0__.Database();\n    const example = new _projects__WEBPACK_IMPORTED_MODULE_1__.Project(\"Test project\", \"Here is a fun example\", \"medium\", \"2025-12-25\");\n    example.newTodo(\"Add your todos here!\");\n    projectDatabase.addProject(example);\n    return projectDatabase;\n  }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/storage.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/styles.css?\n}");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(task) {\n    this.task = task;\n    this.completed = false;\n    this.id = crypto.randomUUID();\n  }\n\n  description() {\n    console.log(`${this.task}`);\n  }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/todos.js?\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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