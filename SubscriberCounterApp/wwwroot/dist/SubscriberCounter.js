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
export { SubscriberCounter };
//# sourceMappingURL=SubscriberCounter.js.map