var CounterList = /** @class */ (function () {
    function CounterList() {
        this._counterList = [];
    }
    CounterList.prototype.add = function (counter) {
        this._counterList.push(counter);
    };
    CounterList.prototype.getAll = function () {
        return this._counterList;
    };
    return CounterList;
}());
export { CounterList };
//# sourceMappingURL=CounterList.js.map