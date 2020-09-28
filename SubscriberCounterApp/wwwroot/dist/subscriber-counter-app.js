//console.log("구독자 수 관리 앱");
var __assign = (this && this.__assign) || function () {
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import { ChangeType } from './ChangeType';
import { HtmlWriter } from "./HtmlWriter";
import { BlogCounter } from "./BlogCounter";
import { YoutubeCounter } from "./YoutubeCounter";
//import { CounterType } from "./CounterType";
import { CounterList } from "./CounterList";
//import { Constants } from "./_Constants";
//import { ICounterBase, ICounterInfo, ICounterSettings, IIncrementDecrementUpdate } from "./_Models";
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
                        this.youtubeCounter = new YoutubeCounter(__assign({}, counters.youtubeCounter));
                        this.blogCounter = new BlogCounter(__assign({}, counters.blogCounter));
                        this.subscriberCounter = this.youtubeCounter;
                        html = "";
                        counterList = new CounterList();
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
root.initializeCountsAsync(); // Web API로부터 JSON 데이터 받아 출력
window.root = root;
//# sourceMappingURL=subscriber-counter-app.js.map