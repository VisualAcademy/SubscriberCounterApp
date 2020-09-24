/// <reference path="CounterType.ts" />
/// <reference path="SubscriberCounter.ts" />

class BlogCounter extends SubscriberCounter {
    counterType: CounterType = CounterType.Blog;
    getCounterInfo() {
        return {};
    }
}
