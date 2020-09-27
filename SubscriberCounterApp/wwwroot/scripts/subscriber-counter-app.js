"use strict";
//console.log("구독자 수 관리 앱");
// 삼중 슬래시 참조, 삼중 슬래시 지시문
/// <reference path="ChangeType.ts" />
/// <reference path="HtmlResponse.ts" />
/// <reference path="SubscriberCounter.ts" />
/// <reference path="HtmlWriter.ts" />
/// <reference path="BlogCounter.ts" />
/// <reference path="YoutubeCounter.ts" />
/// <reference path="CounterType.ts" />
/// <reference path="CounterList.ts" />
//import { ChangeType } from './ChangeType';
//import { HtmlResponse } from './HtmlResponse';
//[!] 실행
var Root = /** @class */ (function () {
    function Root(writer) {
        this.writer = writer;
        this.title = "Youtube";
        this.youtubeCounter = new YoutubeCounter({
            id: 1,
            title: '유튜브 카운터',
            count: 10000
        });
        this.blogCounter = new BlogCounter({
            id: 2,
            title: '블로그 카운터',
            count: 40000,
            postCount: 5
        });
        this.subscriberCounter = this.youtubeCounter;
        var html = "";
        var counterList = new CounterList();
        counterList.add(this.youtubeCounter);
        counterList.add(this.blogCounter);
        counterList.getAll().forEach(function (cl, idx) {
            html += cl.id + " - " + cl.title + "<br />";
        });
        this.writer.write(html);
    }
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
        var html = "\n<h2>" + counter.title + " \uAD6C\uB3C5\uC790 \uCE74\uC6B4\uD2B8</h2>\n<span>\uCC44\uB110 \uC774\uB984: </span> " + counter.title + "<br /> \n<span>\uAD6C\uB3C5\uC790 \uC218: </span> " + counter.count + "<hr /> \n\uBCC0\uACBD \uAC12: <input type=\"text\" id=\"txtAmount\" value=\"0\"> \n<button onclick=\"window.root.changeCounter(+1)\">\uC99D\uAC00</button>\n<button onclick=\"window.root.changeCounter(-1)\">\uAC10\uC18C</button>\n<button onclick=\"window.root.changeCounter(0)\">\uC218\uC815</button>\n";
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
            if (changeType == ChangeType.Increment) {
                this.subscriberCounter.increment(amount);
            }
            else if (changeType == ChangeType.Decrement) {
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
var writer = new HtmlWriter(divHtml);
var root = new Root(writer); // 자바스크립트 코드 실행
window.root = root;
