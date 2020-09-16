"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberCounter = exports.HtmlResponse = void 0;
//console.log("구독자 수 관리 앱");
//[1] HTML 페이지의 특정 div 태그에 HTML 출력
var HtmlResponse = /** @class */ (function () {
    function HtmlResponse() {
        // Empty
    }
    HtmlResponse.write = function (html) {
        HtmlResponse.divHtml.innerHTML = html;
    };
    return HtmlResponse;
}());
exports.HtmlResponse = HtmlResponse;
//[2] 구독자 수 관리에 필요한 기능
var SubscriberCounter = /** @class */ (function () {
    // 생성자
    function SubscriberCounter(title) {
        this.title = title;
        // 필드
        this._count = 0;
    }
    Object.defineProperty(SubscriberCounter.prototype, "count", {
        // 속성
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
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
    return SubscriberCounter;
}());
exports.SubscriberCounter = SubscriberCounter;
//[!] 실행
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var root = new Root();
//# sourceMappingURL=subscriber-counter-app.js.map