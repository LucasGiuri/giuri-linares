module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apis/notices.js":
/*!*************************!*\
  !*** ./apis/notices.js ***!
  \*************************/
/*! exports provided: getNotices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotices", function() { return getNotices; });
/* harmony import */ var _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/ferrari.jpg */ "./assets/images/ferrari.jpg");
/* harmony import */ var _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0__);

var getNotices = function getNotices() {
  return [{
    id: 1,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    text: 'Text 1'
  }, {
    id: 2,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 2',
    subtitle: 'Subtitle 2',
    text: 'Text 2'
  }, {
    id: 3,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 3',
    subtitle: 'Subtitle 3',
    text: 'Text 3'
  }, {
    id: 4,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 4',
    subtitle: 'Subtitle 4',
    text: 'Text 4'
  }, {
    id: 5,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 5',
    subtitle: 'Subtitle 5',
    text: 'Text 5'
  }, {
    id: 6,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 6',
    subtitle: 'Subtitle 6',
    text: 'Text 6'
  }, {
    id: 7,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 7',
    subtitle: 'Subtitle 7',
    text: 'Text 7'
  }, {
    id: 8,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 8',
    subtitle: 'Subtitle 8',
    text: 'Text 8'
  }, {
    id: 9,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 9',
    subtitle: 'Subtitle 9',
    text: 'Text 9'
  }, {
    id: 10,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 10',
    subtitle: 'Subtitle 10',
    text: 'Text 10'
  }, {
    id: 11,
    image: _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    title: 'Title 11',
    subtitle: 'Subtitle 11',
    text: 'Text 11'
  }];
};

/***/ }),

/***/ "./assets/images/ferrari.jpg":
/*!***********************************!*\
  !*** ./assets/images/ferrari.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ferrari-71d9c851b014500366200e9eb855703d.jpg";

/***/ }),

/***/ "./components/Content/Content.js":
/*!***************************************!*\
  !*** ./components/Content/Content.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/notices */ "./apis/notices.js");
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Image/Image */ "./components/Image/Image.js");
/* harmony import */ var _Content_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content.scss */ "./components/Content/Content.scss");
/* harmony import */ var _Content_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Content_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/lucasgiuri/Desktop/pruebass/giuri-linares/components/Content/Content.js";





var Content = function Content() {
  var notices = Object(_apis_notices__WEBPACK_IMPORTED_MODULE_1__["getNotices"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, notices.map(function (notice) {
    var id = notice.id,
        image = notice.image,
        title = notice.title,
        subtitle = notice.subtitle,
        text = notice.text;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content__notice",
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content__notice__photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      imageSrc: image,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content__notice__body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "content__notice__body--title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "content__notice__body--subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "content__notice__body--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, text)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/Content/Content.scss":
/*!*****************************************!*\
  !*** ./components/Content/Content.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Image/Image.js":
/*!***********************************!*\
  !*** ./components/Image/Image.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/ferrari.jpg */ "./assets/images/ferrari.jpg");
/* harmony import */ var _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/lucasgiuri/Desktop/pruebass/giuri-linares/components/Image/Image.js";




var Image = function Image(_ref) {
  var imageSrc = _ref.imageSrc;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageSrc ? imageSrc : _assets_images_ferrari_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

Image.propTypes = {
  imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Image.defaultProps = {
  imageSrc: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Content_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content/Content */ "./components/Content/Content.js");
var _jsxFileName = "/Users/lucasgiuri/Desktop/pruebass/giuri-linares/pages/index.js";



var HomePage = function HomePage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Home !"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lucasgiuri/Desktop/pruebass/giuri-linares/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map