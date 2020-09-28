var __extends = (this && this.__extends) || (function () {
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
import { CounterType } from "./CounterType";
import { SubscriberCounter } from './SubscriberCounter';
import { Constants } from "./_Constants";
var BlogCounter = /** @class */ (function (_super) {
    __extends(BlogCounter, _super);
    function BlogCounter(counterSettings) {
        var _this = _super.call(this, counterSettings) || this;
        _this.counterType = CounterType.Blog;
        _this.postCount = 0;
        _this.postCount = counterSettings.postCount;
        _this._startYear = Constants.Blog.START_YEAR;
        _this._siteUrl = Constants.Blog.SITE_URL;
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
}(SubscriberCounter));
export { BlogCounter };
//# sourceMappingURL=BlogCounter.js.map