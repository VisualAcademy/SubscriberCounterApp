/// <reference path="SubscriberCounter.ts" />

class CounterList {
    private _counterList: SubscriberCounter[] = [];

    add(counter: SubscriberCounter) {
        this._counterList.push(counter); 
    }

    getAll(): SubscriberCounter[] {
        return this._counterList; 
    }
}
