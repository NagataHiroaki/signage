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

        // this.width = window.innerWidth;
        // this.height = window.innerHeight;
        this.space = 250;
        this.gap = 15;
        this.itemHeight = this.space + this.gap;

        // this.column = Math.floor(this.width / (this.space + 15));
        // this.endPos = -(this.itemHeight);
        // this.startPos = this.column * this.itemHeight;
    }

    _createClass(Area, [{
        key: 'init',
        value: function init() {
            var _this = this;

            // console.log(this.column);
            this.onResize();

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
            this.endPos = -this.itemHeight;
            this.startPos = this.column * this.itemHeight;

            images.onResize();
        }
    }]);

    return Area;
}();

var Timer = function () {
    function Timer() {
        _classCallCheck(this, Timer);

        this.timer;
        this.count = 0;
        this.ismoved = false;
    }

    _createClass(Timer, [{
        key: 'init',
        value: function init() {
            this.play();
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            // console.log(performance.now());
            this.count++;
            // if(this.count === 1) {
            // this.count = 0;
            images.update();
            // }


            this.timer = requestAnimationFrame(function () {
                return _this2.update();
            });

            if (this.count === 60) {
                this.count = 0;
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            console.log('stop');
            cancelAnimationFrame(this.timer);
            this.ismoved = false;
        }
    }, {
        key: 'play',
        value: function play() {
            if (this.ismoved) return;
            this.start = performance.now();
            this.update();
            this.ismoved = true;
        }
    }]);

    return Timer;
}();

var Images = function () {
    function Images() {
        _classCallCheck(this, Images);

        this.images = [];
        this.length = 20;
        for (var i = 0; i < this.length; i++) {
            // this.images.push(
            //     {'src':'img/img ('+i+').jpg'}
            // );
            this.images.push(new Img(i));
        }
    }

    _createClass(Images, [{
        key: 'init',
        value: function init() {
            for (var i = 0; i < this.length; i++) {
                this.images[i].init();
            }
        }
    }, {
        key: 'update',
        value: function update() {
            for (var i = 0; i < this.length; i++) {
                this.images[i].update();
            }
        }
    }, {
        key: 'takashi',
        value: function takashi(current, index) {
            // const top = 
            // const bottom =
            var right = current + 1 === area.column ? 0 : current + 1;
            var left = current === 0 ? area.column : current - 1;
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            for (var i = 0; i < this.length; i++) {
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
        this.path = 'url("/img/img (' + num + ').jpg")';
        this.elm = $('<span>').addClass('image').css({
            'background-image': this.path,
            'width': "250px",
            'height': "250px",
            'display': 'block'
        }).appendTo('#js-area');
        this.top;
        this.left;
        this.col;
        this.row;
        this.speed = 3;
        this.istouched = false;
        this.delay;
    }

    _createClass(Img, [{
        key: 'init',
        value: function init() {
            var _this3 = this;

            this.setPos();
            this.elm.on('mouseleave', function () {
                return _this3.onMouseLeave();
            });
            this.elm.on('mouseenter', function () {
                return _this3.onMouseEnter();
            });

            this.elm.on('click', function () {
                return _this3.onClick();
            });
        }
    }, {
        key: 'onMouseEnter',
        value: function onMouseEnter() {
            var _this4 = this;

            this.istouched = true;
            timer.stop();
            // clearTimeout(this.delay);
            this.delay = setTimeout(function () {
                _this4.istouched = true;
            }, 100);

            timer.takashi(this.col);
        }
    }, {
        key: 'onMouseLeave',
        value: function onMouseLeave() {
            // this.delay = setTimeout( ()=>{
            //     console.log(this);
            //         }
            //     ,1000);
            this.istouched = false;
            if (!this.istouched) this.play();
        }
    }, {
        key: 'play',
        value: function play() {
            timer.play();
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            this.istouched = true;
            timer.stop();
            // clearTimeout(this.delay);
            modal.setImage(this.path);
            modal.open();
        }
    }, {
        key: 'scale',
        value: function scale() {}
    }, {
        key: 'akira',
        value: function akira(pos, power) {}
    }, {
        key: 'moveTo',
        value: function moveTo() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.left;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.top;

            this.elm.css({
                'transform': 'translate3d(' + x + 'px,' + y + 'px,0)'
            });
        }
    }, {
        key: 'update',
        value: function update() {
            this.top -= this.speed;
            this.moveTo();

            if (this.top < area.endPos) this.rollback();
        }
    }, {
        key: 'rollback',
        value: function rollback() {
            this.top = area.startPos;
            this.moveTo();
        }
    }, {
        key: 'setPos',
        value: function setPos() {
            this.col = this.index % area.column;
            this.row = Math.floor(this.index / area.column);
            this.left = (area.space + area.gap) * this.col;
            this.top = (area.space + area.gap) * this.row;
            this.moveTo();
        }
    }]);

    return Img;
}();

var Modal = function () {
    function Modal() {
        _classCallCheck(this, Modal);

        this.$target = $('#js-modal>span');
        this.$modal = $('#js-modal');
        this.$overlay = $('#js-overlay');
    }

    _createClass(Modal, [{
        key: 'init',
        value: function init() {
            var _this5 = this;

            this.$overlay.on('click', function () {
                return _this5.close();
            });
        }
    }, {
        key: 'setImage',
        value: function setImage(path) {
            this.$target.css('background-image', path);
        }
    }, {
        key: 'open',
        value: function open() {
            this.$modal.addClass('active');
            this.$overlay.addClass('active');
        }
    }, {
        key: 'close',
        value: function close() {
            this.$modal.removeClass('active');
            this.$overlay.removeClass('active');
        }
    }]);

    return Modal;
}();

var Main = function Main() {
    _classCallCheck(this, Main);

    area.init();
    images.init();
    modal.init();
};

var area = new Area();
var images = new Images();
var timer = new Timer();
var modal = new Modal();
timer.play();

new Main();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map