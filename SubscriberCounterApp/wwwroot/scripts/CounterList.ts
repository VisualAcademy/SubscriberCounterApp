/// <reference path="SubscriberCounter.ts" />
import { SubscriberCounter } from './SubscriberCounter';

export class CounterList {
    private _counterList: SubscriberCounter[] = [];

    add(counter: SubscriberCounter) {
        this._counterList.push(counter); 
    }

    getAll(): SubscriberCounter[] {
        return this._counterList; 
    }
}
