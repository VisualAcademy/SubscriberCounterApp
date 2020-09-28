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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/subscriber-counter-app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/BlogCounter.ts":
/*!********************************!*\
  !*** ./scripts/BlogCounter.ts ***!
  \********************************/
/*! exports provided: BlogCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCounter", function() { return BlogCounter; });
/* harmony import */ var _CounterType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CounterType */ "./scripts/CounterType.ts");
/* harmony import */ var _SubscriberCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriberCounter */ "./scripts/SubscriberCounter.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Constants */ "./scripts/_Constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="CounterType.ts" />
/// <reference path="SubscriberCounter.ts" />
/// <reference path="_Constants.ts" />
/// <reference path="_Models.ts" />



var BlogCounter = /** @class */ (function (_super) {
    __extends(BlogCounter, _super);
    function BlogCounter(counterSettings) {
        var _this = _super.call(this, counterSettings) || this;
        _this.counterType = _CounterType__WEBPACK_IMPORTED_MODULE_0__["CounterType"].Blog;
        _this.postCount = 0;
        _this.postCount = counterSettings.postCount;
        _this._startYear = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].Blog.START_YEAR;
        _this._siteUrl = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].Blog.SITE_URL;
        return _this;
    }
    BlogCounter.prototype.getCounterInfo = function () {
        return {
            startYear: this._startYear,
            siteUrl: this._siteUrl
        };
    };
    // 다시 정의(Override)
    //increment(cnt: number) {
    //    if (this.postCount > 0) {
    //        this._count += (cnt * this.postCount); // 학습 목적상 포스트 수만큼 곱해서 증가
    //    }
    //    else {
    //        this._count += cnt;
    //    }
    //}
    BlogCounter.prototype.increment = function (cnt) {
        if (this.postCount !== undefined && this.postCount > 0) {
            _super.prototype.increment.call(this, cnt * this.postCount); // 부모 메서드로 전달
        }
        else {
            _super.prototype.increment.call(this, cnt);
        }
    };
    return BlogCounter;
}(_SubscriberCounter__WEBPACK_IMPORTED_MODULE_1__["SubscriberCounter"]));



/***/ }),

/***/ "./scripts/ChangeType.ts":
/*!*******************************!*\
  !*** ./scripts/ChangeType.ts ***!
  \*******************************/
/*! exports provided: ChangeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeType", function() { return ChangeType; });
var ChangeType;
(function (ChangeType) {
    ChangeType[ChangeType["Increment"] = 1] = "Increment";
    ChangeType[ChangeType["Update"] = 0] = "Update";
    ChangeType[ChangeType["Decrement"] = -1] = "Decrement";
})(ChangeType || (ChangeType = {}));


/***/ }),

/***/ "./scripts/CounterList.ts":
/*!********************************!*\
  !*** ./scripts/CounterList.ts ***!
  \********************************/
/*! exports provided: CounterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterList", function() { return CounterList; });
var CounterList = /** @class */ (function () {
    function CounterList() {
        this._counterList = [];
    }
    CounterList.prototype.add = function (counter) {
        this._counterList.push(counter);
    };
    CounterList.prototype.getAll = function () {
        return this._counterList;
    };
    return CounterList;
}());



/***/ }),

/***/ "./scripts/CounterType.ts":
/*!********************************!*\
  !*** ./scripts/CounterType.ts ***!
  \********************************/
/*! exports provided: CounterType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterType", function() { return CounterType; });
var CounterType;
(function (CounterType) {
    CounterType[CounterType["Youtube"] = 0] = "Youtube";
    CounterType[CounterType["Blog"] = 1] = "Blog";
})(CounterType || (CounterType = {}));


/***/ }),

/***/ "./scripts/HtmlWriter.ts":
/*!*******************************!*\
  !*** ./scripts/HtmlWriter.ts ***!
  \*******************************/
/*! exports provided: HtmlWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlWriter", function() { return HtmlWriter; });
//[1] HTML 페이지의 특정 div 태그에 HTML 출력
var HtmlWriter = /** @class */ (function () {
    function HtmlWriter(divHtml) {
        this.divHtml = divHtml;
        if (this.divHtml !== null) {
            this.divHtml.innerHTML = "<h2>구독자 카운터 앱</h2>";
        }
    }
    HtmlWriter.prototype.write = function (html) {
        if (this.divHtml !== null) {
            this.divHtml.innerHTML = html;
        }
    };
    HtmlWriter.prototype.writeLog = function (html) {
        if (this.divHtml !== null) {
            this.divHtml.innerHTML += "<hr />" + html;
        }
    };
    return HtmlWriter;
}());



/***/ }),

/***/ "./scripts/SubscriberCounter.ts":
/*!**************************************!*\
  !*** ./scripts/SubscriberCounter.ts ***!
  \**************************************/
/*! exports provided: SubscriberCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriberCounter", function() { return SubscriberCounter; });
//[2] 구독자 수 관리에 필요한 기능의 부모 클래스
var SubscriberCounter = /** @class */ (function () {
    // 생성자
    function SubscriberCounter(counterSettings) {
        // 필드
        //_count = 7000;
        this._count = 7000;
        this.id = counterSettings.id;
        this.title = counterSettings.title;
        this._count = counterSettings.count;
    }
    Object.defineProperty(SubscriberCounter.prototype, "count", {
        // 속성
        get: function () {
            return this._count;
        },
        set: function (value) {
            if (value >= 0) {
                this._count = value;
            }
            else {
                throw Error("구독자 수는 음수일 수 없습니다.");
            }
        },
        enumerable: false,
        configurable: true
    });
    // 메서드
    SubscriberCounter.prototype.increment = function (cnt) {
        this._count += cnt;
    };
    SubscriberCounter.prototype.decrement = function (cnt) {
        this._count -= cnt;
    };
    SubscriberCounter.prototype.update = function (cnt) {
        this._count = cnt;
    };
    return SubscriberCounter;
}());



/***/ }),

/***/ "./scripts/YoutubeCounter.ts":
/*!***********************************!*\
  !*** ./scripts/YoutubeCounter.ts ***!
  \***********************************/
/*! exports provided: YoutubeCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeCounter", function() { return YoutubeCounter; });
/* harmony import */ var _CounterType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CounterType */ "./scripts/CounterType.ts");
/* harmony import */ var _SubscriberCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriberCounter */ "./scripts/SubscriberCounter.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Constants */ "./scripts/_Constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="CounterType.ts" />
/// <reference path="SubscriberCounter.ts" />
/// <reference path="_Constants.ts" />
/// <reference path="_Models.ts" />



var YoutubeCounter = /** @class */ (function (_super) {
    __extends(YoutubeCounter, _super);
    function YoutubeCounter(counterSettings) {
        var _this = _super.call(this, counterSettings) || this;
        _this.counterType = _CounterType__WEBPACK_IMPORTED_MODULE_0__["CounterType"].Youtube;
        _this._startYear = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].Youtube.START_YEAR;
        _this._siteUrl = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].Youtube.SITE_URL;
        return _this;
    }
    YoutubeCounter.prototype.getCounterInfo = function () {
        return {
            startYear: this._startYear,
            siteUrl: this._siteUrl
        };
    };
    return YoutubeCounter;
}(_SubscriberCounter__WEBPACK_IMPORTED_MODULE_1__["SubscriberCounter"]));



/***/ }),

/***/ "./scripts/_Constants.ts":
/*!*******************************!*\
  !*** ./scripts/_Constants.ts ***!
  \*******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants;
(function (Constants) {
    var Youtube = /** @class */ (function () {
        function Youtube() {
        }
        Object.defineProperty(Youtube, "SITE_URL", {
            get: function () {
                return "https://youtube.com/c/VisualAcademy";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Youtube, "START_YEAR", {
            get: function () { return 2010; },
            enumerable: false,
            configurable: true
        });
        return Youtube;
    }());
    Constants.Youtube = Youtube;
    var Blog = /** @class */ (function () {
        function Blog() {
        }
        Object.defineProperty(Blog, "SITE_URL", {
            get: function () {
                return "https://www.dotnetkorea.com";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Blog, "START_YEAR", {
            get: function () { return 2000; },
            enumerable: false,
            configurable: true
        });
        return Blog;
    }());
    Constants.Blog = Blog;
})(Constants || (Constants = {}));


/***/ }),

/***/ "./scripts/subscriber-counter-app.ts":
/*!*******************************************!*\
  !*** ./scripts/subscriber-counter-app.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangeType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeType */ "./scripts/ChangeType.ts");
/* harmony import */ var _HtmlWriter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlWriter */ "./scripts/HtmlWriter.ts");
/* harmony import */ var _BlogCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogCounter */ "./scripts/BlogCounter.ts");
/* harmony import */ var _YoutubeCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YoutubeCounter */ "./scripts/YoutubeCounter.ts");
/* harmony import */ var _CounterList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CounterList */ "./scripts/CounterList.ts");
//console.log("구독자 수 관리 앱");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 삼중 슬래시 참조, 삼중 슬래시 지시문
/// <reference path="ChangeType.ts" />
/// <reference path="HtmlResponse.ts" />
/// <reference path="SubscriberCounter.ts" />
/// <reference path="HtmlWriter.ts" />
/// <reference path="BlogCounter.ts" />
/// <reference path="YoutubeCounter.ts" />
/// <reference path="CounterType.ts" />
/// <reference path="CounterList.ts" />
/// <reference path="_Constants.ts" />
/// <reference path="_Models.ts" />




//import { CounterType } from "./CounterType";

//import { Constants } from "./_Constants";
//import { ICounterBase, ICounterInfo, ICounterSettings, IIncrementDecrementUpdate } from "./_Models";
//[!] 실행
var Root = /** @class */ (function () {
    function Root(writer) {
        this.writer = writer;
        this.title = "Youtube";
        this.youtubeCounter = new _YoutubeCounter__WEBPACK_IMPORTED_MODULE_3__["YoutubeCounter"]({
            id: 1,
            title: '유튜브 카운터',
            count: 10000
        });
        this.blogCounter = new _BlogCounter__WEBPACK_IMPORTED_MODULE_2__["BlogCounter"]({
            id: 2,
            title: '블로그 카운터',
            count: 20000,
            postCount: 5
        });
        this.subscriberCounter = this.youtubeCounter;
    }
    // fetch() 함수와 async/await를 사용하려면 lib: "ES2015", "DOM" 추가 필요
    Root.prototype.initializeCountsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, counters, html, counterList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/counters.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        counters = _a.sent();
                        this.youtubeCounter = new _YoutubeCounter__WEBPACK_IMPORTED_MODULE_3__["YoutubeCounter"](__assign({}, counters.youtubeCounter));
                        this.blogCounter = new _BlogCounter__WEBPACK_IMPORTED_MODULE_2__["BlogCounter"](__assign({}, counters.blogCounter));
                        this.subscriberCounter = this.youtubeCounter;
                        html = "";
                        counterList = new _CounterList__WEBPACK_IMPORTED_MODULE_4__["CounterList"]();
                        counterList.add(this.youtubeCounter);
                        counterList.add(this.blogCounter);
                        counterList.getAll().forEach(function (cl, idx) {
                            html += cl.id + " - " + cl.title + "<br />";
                        });
                        this.writer.write(html);
                        return [2 /*return*/];
                }
            });
        });
    };
    Root.prototype.togglePage = function (page) {
        switch (page) {
            case 'Youtube':
                this.subscriberCounter = this.youtubeCounter;
                break;
            case 'Blog':
                this.subscriberCounter = this.blogCounter;
                break;
        }
        this.renderCounter(this.subscriberCounter);
    };
    Root.prototype.renderCounter = function (counter) {
        // 구조 파괴(분해) 할당
        var _a = counter.getCounterInfo(), startYear = _a.startYear, siteUrl = _a.siteUrl;
        var html = "\n<h2>" + counter.title + " \uAD6C\uB3C5\uC790 \uCE74\uC6B4\uD2B8</h2>\n<span>\uCC44\uB110 \uC774\uB984: </span> " + counter.title + "<br /> \n<span>\uAD6C\uB3C5\uC790 \uC218: </span> " + counter.count + "<hr /> \n" + startYear + "\uB144: " + siteUrl + "\n<hr /> \n\uBCC0\uACBD \uAC12: <input type=\"text\" id=\"txtAmount\" value=\"0\"> \n<button onclick=\"window.root.changeCounter(+1)\">\uC99D\uAC00</button>\n<button onclick=\"window.root.changeCounter(-1)\">\uAC10\uC18C</button>\n<button onclick=\"window.root.changeCounter(0)\">\uC218\uC815</button>\n";
        this.writer.write(html);
    };
    Root.prototype.changeCounter = function (changeType) {
        var txtAmount = document.querySelector("#txtAmount");
        var amount = 0;
        if (txtAmount !== null) {
            amount = +txtAmount.value;
        }
        var err;
        try {
            if (changeType == _ChangeType__WEBPACK_IMPORTED_MODULE_0__["ChangeType"].Increment) {
                this.subscriberCounter.increment(amount);
            }
            else if (changeType == _ChangeType__WEBPACK_IMPORTED_MODULE_0__["ChangeType"].Decrement) {
                this.subscriberCounter.decrement(amount);
            }
            else {
                this.subscriberCounter.update(amount);
            }
        }
        catch (e) {
            err = e;
        }
        this.renderCounter(this.subscriberCounter);
        if (err) {
            this.writer.writeLog(err.message);
        }
    };
    return Root;
}());
var divHtml = document.querySelector("#divHtml");
var writer = new _HtmlWriter__WEBPACK_IMPORTED_MODULE_1__["HtmlWriter"](divHtml);
var root = new Root(writer); // 자바스크립트 코드 실행
root.initializeCountsAsync(); // Web API로부터 JSON 데이터 받아 출력
window.root = root;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9CbG9nQ291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL0NoYW5nZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9Db3VudGVyTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL0NvdW50ZXJUeXBlLnRzIiwid2VicGFjazovLy8uL3NjcmlwdHMvSHRtbFdyaXRlci50cyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL1N1YnNjcmliZXJDb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NjcmlwdHMvWW91dHViZUNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9fQ29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc3Vic2NyaWJlci1jb3VudGVyLWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtR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c0RBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuRCxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWU7QUFDOUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyw0QkFBNEI7QUFDcEQsTUFBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHRzL3N1YnNjcmliZXItY291bnRlci1hcHAudHNcIik7XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiQ291bnRlclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiU3Vic2NyaWJlckNvdW50ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiX0NvbnN0YW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJfTW9kZWxzLnRzXCIgLz5cclxuaW1wb3J0IHsgQ291bnRlclR5cGUgfSBmcm9tIFwiLi9Db3VudGVyVHlwZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpYmVyQ291bnRlciB9IGZyb20gJy4vU3Vic2NyaWJlckNvdW50ZXInO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9fQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElDb3VudGVyU2V0dGluZ3MsIElDb3VudGVySW5mbywgSUNvdW50ZXJCYXNlLCBJSW5jcmVtZW50RGVjcmVtZW50VXBkYXRlIH0gZnJvbSBcIi4vX01vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2dDb3VudGVyIGV4dGVuZHMgU3Vic2NyaWJlckNvdW50ZXIge1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRZZWFyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zaXRlVXJsOiBzdHJpbmc7XHJcbiAgICBjb3VudGVyVHlwZTogQ291bnRlclR5cGUgPSBDb3VudGVyVHlwZS5CbG9nO1xyXG4gICAgcG9zdENvdW50PzogbnVtYmVyID0gMDsgXHJcbiAgICBjb25zdHJ1Y3Rvcihjb3VudGVyU2V0dGluZ3M6IElDb3VudGVyU2V0dGluZ3MpIHtcclxuICAgICAgICBzdXBlcihjb3VudGVyU2V0dGluZ3MpOyAvLyDrtoDrqqjsnZgg7IOd7ISx7J6Q7JeQIOunpOqwnCDrs4DsiJgg7KCE64usXHJcbiAgICAgICAgdGhpcy5wb3N0Q291bnQgPSBjb3VudGVyU2V0dGluZ3MucG9zdENvdW50O1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0WWVhciA9IENvbnN0YW50cy5CbG9nLlNUQVJUX1lFQVI7XHJcbiAgICAgICAgdGhpcy5fc2l0ZVVybCA9IENvbnN0YW50cy5CbG9nLlNJVEVfVVJMO1xyXG4gICAgfVxyXG4gICAgZ2V0Q291bnRlckluZm8oKTogSUNvdW50ZXJJbmZvPG51bWJlciwgc3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnRZZWFyOiB0aGlzLl9zdGFydFllYXIsXHJcbiAgICAgICAgICAgIHNpdGVVcmw6IHRoaXMuX3NpdGVVcmxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8g64uk7IucIOygleydmChPdmVycmlkZSlcclxuICAgIC8vaW5jcmVtZW50KGNudDogbnVtYmVyKSB7XHJcbiAgICAvLyAgICBpZiAodGhpcy5wb3N0Q291bnQgPiAwKSB7XHJcbiAgICAvLyAgICAgICAgdGhpcy5fY291bnQgKz0gKGNudCAqIHRoaXMucG9zdENvdW50KTsgLy8g7ZWZ7Iq1IOuqqeyggeyDgSDtj6zsiqTtirgg7IiY66eM7YG8IOqzse2VtOyEnCDspp3qsIBcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgIHRoaXMuX2NvdW50ICs9IGNudDtcclxuICAgIC8vICAgIH1cclxuICAgIC8vfVxyXG4gICAgaW5jcmVtZW50KGNudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zdENvdW50ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wb3N0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmluY3JlbWVudChjbnQgKiB0aGlzLnBvc3RDb3VudCk7IC8vIOu2gOuqqCDrqZTshJzrk5zroZwg7KCE64usXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdXBlci5pbmNyZW1lbnQoY250KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIENoYW5nZVR5cGUge1xyXG4gICAgSW5jcmVtZW50ID0gMSxcclxuICAgIFVwZGF0ZSA9IDAsXHJcbiAgICBEZWNyZW1lbnQgPSAtMVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJTdWJzY3JpYmVyQ291bnRlci50c1wiIC8+XHJcbmltcG9ydCB7IFN1YnNjcmliZXJDb3VudGVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyQ291bnRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ291bnRlckxpc3Qge1xyXG4gICAgcHJpdmF0ZSBfY291bnRlckxpc3Q6IFN1YnNjcmliZXJDb3VudGVyW10gPSBbXTtcclxuXHJcbiAgICBhZGQoY291bnRlcjogU3Vic2NyaWJlckNvdW50ZXIpIHtcclxuICAgICAgICB0aGlzLl9jb3VudGVyTGlzdC5wdXNoKGNvdW50ZXIpOyBcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwoKTogU3Vic2NyaWJlckNvdW50ZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXJMaXN0OyBcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBDb3VudGVyVHlwZSB7XHJcbiAgICBZb3V0dWJlLFxyXG4gICAgQmxvZ1xyXG59XHJcbiIsIi8vWzFdIEhUTUwg7Y6Y7J207KeA7J2YIO2KueyglSBkaXYg7YOc6re47JeQIEhUTUwg7Lac66ClXHJcbmV4cG9ydCBjbGFzcyBIdG1sV3JpdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGl2SHRtbDogSFRNTERpdkVsZW1lbnQgfCBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGl2SHRtbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpdkh0bWwuaW5uZXJIVE1MID0gXCI8aDI+6rWs64+F7J6QIOy5tOyatO2EsCDslbE8L2gyPlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdyaXRlKGh0bWw6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmRpdkh0bWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXZIdG1sLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd3JpdGVMb2coaHRtbDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGl2SHRtbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpdkh0bWwuaW5uZXJIVE1MICs9IGA8aHIgLz4ke2h0bWx9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkNvdW50ZXJUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIl9Nb2RlbHMudHNcIiAvPlxyXG5pbXBvcnQgeyBDb3VudGVyVHlwZSB9IGZyb20gXCIuL0NvdW50ZXJUeXBlXCI7XHJcbmltcG9ydCB7IElDb3VudGVyQmFzZSwgSUNvdW50ZXJJbmZvLCBJQ291bnRlclNldHRpbmdzIH0gZnJvbSBcIi4vX01vZGVsc1wiO1xyXG5cclxuLy9bMl0g6rWs64+F7J6QIOyImCDqtIDrpqzsl5Ag7ZWE7JqU7ZWcIOq4sOuKpeydmCDrtoDrqqgg7YG0656Y7IqkXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWJzY3JpYmVyQ291bnRlciBpbXBsZW1lbnRzIElDb3VudGVyQmFzZSB7XHJcbiAgICAvLyDtlYTrk5xcclxuICAgIC8vX2NvdW50ID0gNzAwMDtcclxuICAgIHByaXZhdGUgX2NvdW50ID0gNzAwMDtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgY291bnRlclR5cGU6IENvdW50ZXJUeXBlOyBcclxuICAgIC8vYWJzdHJhY3QgZ2V0Q291bnRlckluZm8oKTogYW55OyBcclxuICAgIGFic3RyYWN0IGdldENvdW50ZXJJbmZvKCk6IElDb3VudGVySW5mbzxudW1iZXIsIHN0cmluZz47IFxyXG4gICAgLy8g7IOd7ISx7J6QXHJcbiAgICBjb25zdHJ1Y3Rvcihjb3VudGVyU2V0dGluZ3M6IElDb3VudGVyU2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmlkID0gY291bnRlclNldHRpbmdzLmlkO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBjb3VudGVyU2V0dGluZ3MudGl0bGU7IFxyXG4gICAgICAgIHRoaXMuX2NvdW50ID0gY291bnRlclNldHRpbmdzLmNvdW50O1xyXG4gICAgfVxyXG4gICAgLy8g7IaN7ISxXHJcbiAgICBnZXQgY291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50O1xyXG4gICAgfVxyXG4gICAgc2V0IGNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCLqtazrj4XsnpAg7IiY64qUIOydjOyImOydvCDsiJgg7JeG7Iq164uI64ukLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDrqZTshJzrk5xcclxuICAgIGluY3JlbWVudChjbnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvdW50ICs9IGNudDtcclxuICAgIH1cclxuICAgIGRlY3JlbWVudChjbnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvdW50IC09IGNudDtcclxuICAgIH1cclxuICAgIHVwZGF0ZShjbnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvdW50ID0gY250O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJDb3VudGVyVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJTdWJzY3JpYmVyQ291bnRlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJfQ29uc3RhbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIl9Nb2RlbHMudHNcIiAvPlxyXG5pbXBvcnQgeyBDb3VudGVyVHlwZSB9IGZyb20gJy4vQ291bnRlclR5cGUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpYmVyQ291bnRlciB9IGZyb20gXCIuL1N1YnNjcmliZXJDb3VudGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL19Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgSUNvdW50ZXJTZXR0aW5ncywgSUNvdW50ZXJJbmZvIH0gZnJvbSBcIi4vX01vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVDb3VudGVyIGV4dGVuZHMgU3Vic2NyaWJlckNvdW50ZXIge1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRZZWFyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zaXRlVXJsOiBzdHJpbmc7XHJcbiAgICBjb3VudGVyVHlwZTogQ291bnRlclR5cGUgPSBDb3VudGVyVHlwZS5Zb3V0dWJlO1xyXG4gICAgY29uc3RydWN0b3IoY291bnRlclNldHRpbmdzOiBJQ291bnRlclNldHRpbmdzKSB7XHJcbiAgICAgICAgc3VwZXIoY291bnRlclNldHRpbmdzKTsgLy8g67aA66qo7J2YIOyDneyEseyekOyXkCDrp6TqsJwg67OA7IiYIOyghOuLrFxyXG4gICAgICAgIHRoaXMuX3N0YXJ0WWVhciA9IENvbnN0YW50cy5Zb3V0dWJlLlNUQVJUX1lFQVI7XHJcbiAgICAgICAgdGhpcy5fc2l0ZVVybCA9IENvbnN0YW50cy5Zb3V0dWJlLlNJVEVfVVJMO1xyXG4gICAgfVxyXG4gICAgZ2V0Q291bnRlckluZm8oKTogSUNvdW50ZXJJbmZvPG51bWJlciwgc3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnRZZWFyOiB0aGlzLl9zdGFydFllYXIsXHJcbiAgICAgICAgICAgIHNpdGVVcmw6IHRoaXMuX3NpdGVVcmxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBuYW1lc3BhY2UgQ29uc3RhbnRzIHtcclxuICAgIGV4cG9ydCBjbGFzcyBZb3V0dWJlIHtcclxuICAgICAgICBzdGF0aWMgZ2V0IFNJVEVfVVJMKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8veW91dHViZS5jb20vYy9WaXN1YWxBY2FkZW15XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBnZXQgU1RBUlRfWUVBUigpOiBudW1iZXIgeyByZXR1cm4gMjAxMDsgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIEJsb2cge1xyXG4gICAgICAgIHN0YXRpYyBnZXQgU0lURV9VUkwoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly93d3cuZG90bmV0a29yZWEuY29tXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBnZXQgU1RBUlRfWUVBUigpOiBudW1iZXIgeyByZXR1cm4gMjAwMDsgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vY29uc29sZS5sb2coXCLqtazrj4XsnpAg7IiYIOq0gOumrCDslbFcIik7XHJcblxyXG4vLyDsgrzspJEg7Iqs656Y7IucIOywuOyhsCwg7IK87KSRIOyKrOuemOyLnCDsp4Dsi5zrrLhcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkNoYW5nZVR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiSHRtbFJlc3BvbnNlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlN1YnNjcmliZXJDb3VudGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkh0bWxXcml0ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiQmxvZ0NvdW50ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiWW91dHViZUNvdW50ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiQ291bnRlclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiQ291bnRlckxpc3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiX0NvbnN0YW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJfTW9kZWxzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IENoYW5nZVR5cGUgfSBmcm9tICcuL0NoYW5nZVR5cGUnO1xyXG4vL2ltcG9ydCB7IEh0bWxSZXNwb25zZSB9IGZyb20gXCIuL0h0bWxSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpYmVyQ291bnRlciB9IGZyb20gXCIuL1N1YnNjcmliZXJDb3VudGVyXCI7XHJcbmltcG9ydCB7IEh0bWxXcml0ZXIgfSBmcm9tIFwiLi9IdG1sV3JpdGVyXCI7XHJcbmltcG9ydCB7IEJsb2dDb3VudGVyIH0gZnJvbSBcIi4vQmxvZ0NvdW50ZXJcIjtcclxuaW1wb3J0IHsgWW91dHViZUNvdW50ZXIgfSBmcm9tIFwiLi9Zb3V0dWJlQ291bnRlclwiO1xyXG4vL2ltcG9ydCB7IENvdW50ZXJUeXBlIH0gZnJvbSBcIi4vQ291bnRlclR5cGVcIjtcclxuaW1wb3J0IHsgQ291bnRlckxpc3QgfSBmcm9tIFwiLi9Db3VudGVyTGlzdFwiO1xyXG4vL2ltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL19Db25zdGFudHNcIjtcclxuLy9pbXBvcnQgeyBJQ291bnRlckJhc2UsIElDb3VudGVySW5mbywgSUNvdW50ZXJTZXR0aW5ncywgSUluY3JlbWVudERlY3JlbWVudFVwZGF0ZSB9IGZyb20gXCIuL19Nb2RlbHNcIjtcclxuXHJcbi8vWyFdIOyLpO2WiVxyXG5jbGFzcyBSb290IHtcclxuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZyA9IFwiWW91dHViZVwiO1xyXG4gICAgc3Vic2NyaWJlckNvdW50ZXI6IFN1YnNjcmliZXJDb3VudGVyO1xyXG4gICAgeW91dHViZUNvdW50ZXI6IFlvdXR1YmVDb3VudGVyO1xyXG4gICAgYmxvZ0NvdW50ZXI6IEJsb2dDb3VudGVyOyBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgd3JpdGVyOiBIdG1sV3JpdGVyKSB7XHJcbiAgICAgICAgdGhpcy55b3V0dWJlQ291bnRlciA9IG5ldyBZb3V0dWJlQ291bnRlcih7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+ycoO2KnOu4jCDsubTsmrTthLAnLFxyXG4gICAgICAgICAgICBjb3VudDogMTAwMDBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJsb2dDb3VudGVyID0gbmV3IEJsb2dDb3VudGVyKHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn67iU66Gc6re4IOy5tOyatO2EsCcsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMDAwMCxcclxuICAgICAgICAgICAgcG9zdENvdW50OiA1XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyQ291bnRlciA9IHRoaXMueW91dHViZUNvdW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmV0Y2goKSDtlajsiJjsmYAgYXN5bmMvYXdhaXTrpbwg7IKs7Jqp7ZWY66Ck66m0IGxpYjogXCJFUzIwMTVcIiwgXCJET01cIiDstpTqsIAg7ZWE7JqUXHJcbiAgICBhc3luYyBpbml0aWFsaXplQ291bnRzQXN5bmMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9jb3VudGVycy5qc29uXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICB0aGlzLnlvdXR1YmVDb3VudGVyID0gbmV3IFlvdXR1YmVDb3VudGVyKHsgLi4uY291bnRlcnMueW91dHViZUNvdW50ZXIgfSk7XHJcbiAgICAgICAgdGhpcy5ibG9nQ291bnRlciA9IG5ldyBCbG9nQ291bnRlcih7IC4uLmNvdW50ZXJzLmJsb2dDb3VudGVyIH0pO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlckNvdW50ZXIgPSB0aGlzLnlvdXR1YmVDb3VudGVyO1xyXG5cclxuICAgICAgICBsZXQgaHRtbDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBjb25zdCBjb3VudGVyTGlzdCA9IG5ldyBDb3VudGVyTGlzdCgpO1xyXG4gICAgICAgIGNvdW50ZXJMaXN0LmFkZCh0aGlzLnlvdXR1YmVDb3VudGVyKTtcclxuICAgICAgICBjb3VudGVyTGlzdC5hZGQodGhpcy5ibG9nQ291bnRlcik7XHJcbiAgICAgICAgY291bnRlckxpc3QuZ2V0QWxsKCkuZm9yRWFjaCgoY2wsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBodG1sICs9IGAke2NsLmlkfSAtICR7Y2wudGl0bGV9PGJyIC8+YDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy53cml0ZXIud3JpdGUoaHRtbCk7IFxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBhZ2UocGFnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAocGFnZSkge1xyXG4gICAgICAgICAgICBjYXNlICdZb3V0dWJlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlckNvdW50ZXIgPSB0aGlzLnlvdXR1YmVDb3VudGVyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0Jsb2cnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyQ291bnRlciA9IHRoaXMuYmxvZ0NvdW50ZXI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb3VudGVyKHRoaXMuc3Vic2NyaWJlckNvdW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvdW50ZXIoY291bnRlcjogU3Vic2NyaWJlckNvdW50ZXIpIHtcclxuICAgICAgICAvLyDqtazsobAg7YyM6rS0KOu2hO2VtCkg7ZWg64u5XHJcbiAgICAgICAgY29uc3QgeyBzdGFydFllYXIsIHNpdGVVcmwgfSA9IGNvdW50ZXIuZ2V0Q291bnRlckluZm8oKTtcclxuXHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGBcclxuPGgyPiR7Y291bnRlci50aXRsZX0g6rWs64+F7J6QIOy5tOyatO2KuDwvaDI+XHJcbjxzcGFuPuyxhOuEkCDsnbTrpoQ6IDwvc3Bhbj4gJHtjb3VudGVyLnRpdGxlfTxiciAvPiBcclxuPHNwYW4+6rWs64+F7J6QIOyImDogPC9zcGFuPiAke2NvdW50ZXIuY291bnR9PGhyIC8+IFxyXG4ke3N0YXJ0WWVhcn3rhYQ6ICR7c2l0ZVVybH1cclxuPGhyIC8+IFxyXG7rs4Dqsr0g6rCSOiA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInR4dEFtb3VudFwiIHZhbHVlPVwiMFwiPiBcclxuPGJ1dHRvbiBvbmNsaWNrPVwid2luZG93LnJvb3QuY2hhbmdlQ291bnRlcigrMSlcIj7spp3qsIA8L2J1dHRvbj5cclxuPGJ1dHRvbiBvbmNsaWNrPVwid2luZG93LnJvb3QuY2hhbmdlQ291bnRlcigtMSlcIj7qsJDshow8L2J1dHRvbj5cclxuPGJ1dHRvbiBvbmNsaWNrPVwid2luZG93LnJvb3QuY2hhbmdlQ291bnRlcigwKVwiPuyImOyglTwvYnV0dG9uPlxyXG5gO1xyXG4gICAgICAgIHRoaXMud3JpdGVyLndyaXRlKGh0bWwpOyBcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDb3VudGVyKGNoYW5nZVR5cGU6IENoYW5nZVR5cGUpIHtcclxuICAgICAgICBsZXQgdHh0QW1vdW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHh0QW1vdW50XCIpO1xyXG4gICAgICAgIGxldCBhbW91bnQgPSAwO1xyXG4gICAgICAgIGlmICh0eHRBbW91bnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYW1vdW50ID0gK3R4dEFtb3VudC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVycjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlVHlwZSA9PSBDaGFuZ2VUeXBlLkluY3JlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyQ291bnRlci5pbmNyZW1lbnQoYW1vdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFuZ2VUeXBlID09IENoYW5nZVR5cGUuRGVjcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJDb3VudGVyLmRlY3JlbWVudChhbW91bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyQ291bnRlci51cGRhdGUoYW1vdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgZXJyID0gZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyQ291bnRlcih0aGlzLnN1YnNjcmliZXJDb3VudGVyKTtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVyLndyaXRlTG9nKGVyci5tZXNzYWdlKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgZGl2SHRtbDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXZIdG1sXCIpO1xyXG5jb25zdCB3cml0ZXI6IEh0bWxXcml0ZXIgPSBuZXcgSHRtbFdyaXRlcihkaXZIdG1sKTtcclxuY29uc3Qgcm9vdCA9IG5ldyBSb290KHdyaXRlcik7IC8vIOyekOuwlOyKpO2BrOumve2KuCDsvZTrk5wg7Iuk7ZaJXHJcbnJvb3QuaW5pdGlhbGl6ZUNvdW50c0FzeW5jKCk7IC8vIFdlYiBBUEnroZzrtoDthLAgSlNPTiDrjbDsnbTthLAg67Cb7JWEIOy2nOugpVxyXG4oPGFueT53aW5kb3cpLnJvb3QgPSByb290OyBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==