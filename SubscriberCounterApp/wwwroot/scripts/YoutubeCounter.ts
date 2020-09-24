/// <reference path="CounterType.ts" />
/// <reference path="SubscriberCounter.ts" />

class YoutubeCounter extends SubscriberCounter {
    counterType: CounterType = CounterType.Youtube;
    getCounterInfo() {
        return {};
    }
}
