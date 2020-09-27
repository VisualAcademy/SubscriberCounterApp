"use strict";
/// <reference path="CounterType.ts" />
/// <reference path="SubscriberCounter.ts" />
/// <reference path="_Constants.ts" />
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
var YoutubeCounter = /** @class */ (function (_super) {
    __extends(YoutubeCounter, _super);
    function YoutubeCounter(counterSettings) {
        var _this = _super.call(this, counterSettings) || this;
        _this.counterType = CounterType.Youtube;
        _this._siteYear = Constants.Youtube.START_YEAR;
        _this._siteUrl = Constants.Youtube.SITE_URL;
        return _this;
    }
    YoutubeCounter.prototype.getCounterInfo = function () {
        return {
            siteYear: this._siteYear,
            siteUrl: this._siteUrl
        };
    };
    return YoutubeCounter;
}(SubscriberCounter));
