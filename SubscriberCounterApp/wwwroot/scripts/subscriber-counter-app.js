//console.log("구독자 수 관리 앱");
//[1] HTML 페이지의 특정 div 태그에 HTML 출력
/*export */ var HtmlResponse = /** @class */ (function () {
    function HtmlResponse() {
        // Empty
    }
    HtmlResponse.write = function (html) {
        HtmlResponse.divHtml.innerHTML = html;
    };
    return HtmlResponse;
}());
//[2] 구독자 수 관리에 필요한 기능
/*export */ var SubscriberCounter = /** @class */ (function () {
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
//[!] 실행
var Root = /** @class */ (function () {
    function Root() {
        this.title = "Youtube";
        this.subscriberCounter = new SubscriberCounter(this.title);
        this.renderCounter();
    }
    Root.prototype.renderCounter = function () {
        var html = "\n<h2>" + this.title + " \uAD6C\uB3C5\uC790 \uCE74\uC6B4\uD2B8</h2>\n<span>\uCC44\uB110 \uC774\uB984: </span> " + this.subscriberCounter.title + "<br /> \n<span>\uAD6C\uB3C5\uC790 \uC218: </span> " + this.subscriberCounter.count + "<hr /> \n\uBCC0\uACBD \uAC12: <input type=\"text\" id=\"txtAmount\" value=\"0\"> \n<button onclick=\"window.root.changeCounter(+1)\">\uC99D\uAC00</button>\n<button onclick=\"window.root.changeCounter(-1)\">\uAC10\uC18C</button>\n<button onclick=\"window.root.changeCounter(0)\">\uC218\uC815</button>\n";
        HtmlResponse.write(html);
    };
    Root.prototype.changeCounter = function (changeType) {
        var txtAmount = document.querySelector("#txtAmount");
        var amount = +txtAmount.value;
        if (changeType == ChangeType.Increment) {
            this.subscriberCounter.increment(amount);
        }
        else if (changeType == ChangeType.Decrement) {
            this.subscriberCounter.decrement(amount);
        }
        else {
            this.subscriberCounter.update(amount);
        }
        this.renderCounter();
    };
    return Root;
}());
var ChangeType;
(function (ChangeType) {
    ChangeType[ChangeType["Increment"] = 1] = "Increment";
    ChangeType[ChangeType["Update"] = 0] = "Update";
    ChangeType[ChangeType["Decrement"] = -1] = "Decrement";
})(ChangeType || (ChangeType = {}));
HtmlResponse.divHtml = document.querySelector("#divHtml");
var root = new Root(); // 자바스크립트 코드 실행
window.root = root;
//# sourceMappingURL=subscriber-counter-app.js.map