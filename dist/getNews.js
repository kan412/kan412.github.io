(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getNews"],{

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/*! exports provided: formateDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formateDate\", function() { return formateDate; });\nfunction formateDate(dateString) {\n  var date = new Date(dateString);\n  var day = date.getDate();\n  var month = date.getMonth() + 1;\n  var year = date.getFullYear();\n  var modifiedDate = \"\".concat(day, \"/\").concat(month, \"/\").concat(year);\n  return modifiedDate;\n}\n\n//# sourceURL=webpack:///./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/news/buildNews.js":
/*!***************************************!*\
  !*** ./src/modules/news/buildNews.js ***!
  \***************************************/
/*! exports provided: generateNewsHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateNewsHTML\", function() { return generateNewsHTML; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ \"./src/modules/helper.js\");\n\nfunction generateNewsHTML(author, title, content, image, url, publishedOn) {\n  return \"<article class=\\\"news\\\">\\n                <div class=\\\"news__image\\\">\\n                    <img src=\\\"\".concat(image, \"\\\" alt=\\\"\").concat(title, \"\\\" />\\n                </div>\\n                <div class=\\\"news__body\\\">\\n                    <h3 class=\\\"news__title\\\"><a href=\\\"\").concat(url, \"\\\" target=\\\"_blank\\\">\").concat(title, \"</a></h3>\\n                    \\n                    <div class=\\\"news__meta\\\">\\n                        <p>Author: <b><em class=\\\"news__meta__author\\\">\").concat(author, \"</em></b> // Published on <b>\").concat(Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"formateDate\"])(publishedOn), \"</b></p>\\n                    </div>\\n                    \\n                    <div class=\\\"news__content\\\">\\n                        <p>\").concat(content, \"</p>\\n                    </div>\\n\\n                    <a class=\\\"news__readmore\\\" target=\\\"_blank\\\" href=\\\"\").concat(url, \"\\\">Continue Reading</a>\\n                </div>\\n            </article>\");\n}\n\n//# sourceURL=webpack:///./src/modules/news/buildNews.js?");

/***/ }),

/***/ "./src/modules/news/getNews.js":
/*!*************************************!*\
  !*** ./src/modules/news/getNews.js ***!
  \*************************************/
/*! exports provided: getNewsByChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewsByChannel\", function() { return getNewsByChannel; });\n/* harmony import */ var _renderNews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderNews */ \"./src/modules/news/renderNews.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nfunction getNewsByChannel(_x, _x2) {\n  return _getNewsByChannel.apply(this, arguments);\n}\n\nfunction _getNewsByChannel() {\n  _getNewsByChannel = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(channelID, key) {\n    var channelAPI, response, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            channelAPI = \"https://newsapi.org/v1/articles?source=\".concat(channelID, \"&apiKey=\").concat(key);\n            _context.prev = 1;\n            _context.next = 4;\n            return fetch(channelAPI);\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            data = _context.sent;\n            return _context.abrupt(\"return\", Object(_renderNews__WEBPACK_IMPORTED_MODULE_0__[\"renderAllNews\"])(data));\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](1);\n            return _context.abrupt(\"return\", console.log(_context.t0));\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 11]]);\n  }));\n  return _getNewsByChannel.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/modules/news/getNews.js?");

/***/ }),

/***/ "./src/modules/news/renderNews.js":
/*!****************************************!*\
  !*** ./src/modules/news/renderNews.js ***!
  \****************************************/
/*! exports provided: renderAllNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAllNews\", function() { return renderAllNews; });\n/* harmony import */ var _buildNews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildNews */ \"./src/modules/news/buildNews.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ \"./src/modules/variables.js\");\n\n\nfunction renderAllNews(data) {\n  var newsContent = \"<h1 tabindex=\\\"0\\\" class=\\\"app-main__news__title\\\">\".concat(data.source, \"</h1>\");\n  data.articles.map(function (news) {\n    newsContent += Object(_buildNews__WEBPACK_IMPORTED_MODULE_0__[\"generateNewsHTML\"])(news.author, news.title, news.description, news.urlToImage, news.url, news.publishedAt);\n  });\n  _variables__WEBPACK_IMPORTED_MODULE_1__[\"newsContainer\"].innerHTML = newsContent;\n  _variables__WEBPACK_IMPORTED_MODULE_1__[\"newsContainer\"].classList = \"app-main__news\";\n  _variables__WEBPACK_IMPORTED_MODULE_1__[\"newsContainer\"].focus();\n}\n\n//# sourceURL=webpack:///./src/modules/news/renderNews.js?");

/***/ })

}]);