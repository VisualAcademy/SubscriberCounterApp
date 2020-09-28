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
export { HtmlWriter };
//# sourceMappingURL=HtmlWriter.js.map