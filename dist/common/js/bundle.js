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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//first
var Area = function () {
    function Area() {
        _classCallCheck(this, Area);

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.space = 250;
        this.gap = 15;
        this.column = Math.floor(this.width / (this.space + 15));
    }

    _createClass(Area, [{
        key: 'init',
        value: function init() {
            var _this = this;

            // console.log(this.column);

            $(window).on('resize', function () {
                return _this.onResize();
            });
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.column = Math.floor(this.width / (this.space + 15));

            images.onResize();
        }
    }]);

    return Area;
}();

var time = function time() {
    _classCallCheck(this, time);
};

var Images = function () {
    function Images() {
        _classCallCheck(this, Images);

        this.images = [];
        for (var i = 0; i < 100; i++) {
            // this.images.push(
            //     {'src':'img/img ('+i+').jpg'}
            // );
            this.images.push(new Img(i));
        }
    }

    _createClass(Images, [{
        key: 'init',
        value: function init() {
            for (var i = 0; i < 100; i++) {
                this.images[i].init();
            }
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            for (var i = 0; i < 100; i++) {
                this.images[i].setPos();
            }
        }
    }]);

    return Images;
}();

var Img = function () {
    function Img(num) {
        _classCallCheck(this, Img);

        this.index = num;
        this.elm = $('<span>').addClass('image').css({
            'background-image': 'url("/img/img (' + num + ').jpg")',
            'width': "250px",
            'height': "250px",
            'display': 'block'
        }).appendTo('#js-area');
    }

    _createClass(Img, [{
        key: 'init',
        value: function init() {
            this.setPos();
        }
    }, {
        key: 'scale',
        value: function scale() {}
    }, {
        key: 'moveTo',
        value: function moveTo() {}
    }, {
        key: 'setPos',
        value: function setPos() {
            this.col = this.index % area.column;
            this.row = Math.floor(this.index / area.column);
            this.left = (area.space + area.gap) * this.col;
            this.top = (area.space + area.gap) * this.row;
            this.elm.css({
                'transform': 'translate3d(' + this.left + 'px,' + this.top + 'px,0)'
            });
        }
    }]);

    return Img;
}();

var Main = function Main() {
    _classCallCheck(this, Main);

    area.init();
    images.init();
};

var area = new Area();
var images = new Images();

new Main();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map