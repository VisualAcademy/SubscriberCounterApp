"use strict";
//[2] 구독자 수 관리에 필요한 기능
/*export*/ var SubscriberCounter = /** @class */ (function () {
    // 생성자
    function SubscriberCounter(title) {
        this.title = title;
        // 필드
        this._count = 7000;
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
    SubscriberCounter.prototype.update = function (cnt) {
        this._count = cnt;
    };
    return SubscriberCounter;
}());
