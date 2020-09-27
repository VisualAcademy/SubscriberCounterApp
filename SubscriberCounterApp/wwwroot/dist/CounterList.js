export class CounterList {
    constructor() {
        this._counterList = [];
    }
    add(counter) {
        this._counterList.push(counter);
    }
    getAll() {
        return this._counterList;
    }
}
