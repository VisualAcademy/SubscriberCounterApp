/// <reference path="CounterType.ts" />
/// <reference path="SubscriberCounter.ts" />
/// <reference path="_Constants.ts" />

class YoutubeCounter extends SubscriberCounter {
    private _siteYear: number;
    private _siteUrl: string;
    counterType: CounterType = CounterType.Youtube;
    constructor(counterSettings: any) {
        super(counterSettings); // 부모의 생성자에 매개 변수 전달
        this._siteYear = Constants.Youtube.START_YEAR;
        this._siteUrl = Constants.Youtube.SITE_URL;
    }
    getCounterInfo() {
        return {
            siteYear: this._siteYear,
            siteUrl: this._siteUrl
        };
    }
}
