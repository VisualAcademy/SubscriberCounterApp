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
    return SubscriberCounter;
}());
//[!] 실행
var Root = /** @class */ (function () {
    function Root() {
        this.title = "Youtube";
        this.subscriberCounter = new SubscriberCounter(this.title);
        this.rederCounter();
    }
    Root.prototype.rederCounter = function () {
        var html = "\n<h2>" + this.title + " \uAD6C\uB3C5\uC790 \uCE74\uC6B4\uD2B8</h2>\n<span>\uCC44\uB110 \uC774\uB984: </span> " + this.subscriberCounter.title + "<br /> \n<span>\uAD6C\uB3C5\uC790 \uC218: </span> " + this.subscriberCounter.count + "<br /> \n";
        HtmlResponse.write(html);
    };
    return Root;
}());
HtmlResponse.divHtml = document.querySelector("#divHtml");
var root = new Root(); // 자바스크립트 코드 실행
//# sourceMappingURL=subscriber-counter-app.js.map