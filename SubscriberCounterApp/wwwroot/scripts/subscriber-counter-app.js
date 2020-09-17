"use strict";
//console.log("구독자 수 관리 앱");
// 삼중 슬래시 참조, 삼중 슬래시 지시문
/// <reference path="ChangeType.ts" />
/// <reference path="HtmlResponse.ts" />
/// <reference path="SubscriberCounter.ts" />
/// <reference path="HtmlWriter.ts" />
//import { ChangeType } from './ChangeType';
//import { HtmlResponse } from './HtmlResponse';
//[!] 실행
var Root = /** @class */ (function () {
    function Root(writer) {
        this.writer = writer;
        this.title = "Youtube";
        this.subscriberCounter = new SubscriberCounter(this.title);
        this.renderCounter();
    }
    Root.prototype.renderCounter = function () {
        var html = "\n<h2>" + this.title + " \uAD6C\uB3C5\uC790 \uCE74\uC6B4\uD2B8</h2>\n<span>\uCC44\uB110 \uC774\uB984: </span> " + this.subscriberCounter.title + "<br /> \n<span>\uAD6C\uB3C5\uC790 \uC218: </span> " + this.subscriberCounter.count + "<hr /> \n\uBCC0\uACBD \uAC12: <input type=\"text\" id=\"txtAmount\" value=\"0\"> \n<button onclick=\"window.root.changeCounter(+1)\">\uC99D\uAC00</button>\n<button onclick=\"window.root.changeCounter(-1)\">\uAC10\uC18C</button>\n<button onclick=\"window.root.changeCounter(0)\">\uC218\uC815</button>\n";
        //HtmlResponse.write(html);
        writer.write(html);
    };
    Root.prototype.changeCounter = function (changeType) {
        var txtAmount = document.querySelector("#txtAmount");
        var amount = 0;
        if (txtAmount !== null) {
            amount = +txtAmount.value;
        }
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
var divHtml = document.querySelector("#divHtml");
var writer = new HtmlWriter(divHtml);
var root = new Root(writer); // 자바스크립트 코드 실행
window.root = root;
