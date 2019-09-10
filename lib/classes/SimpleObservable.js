"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleObservable = /** @class */ (function () {
    function SimpleObservable() {
        this.observers = [];
    }
    SimpleObservable.prototype.subscribe = function (observer) {
        var _this = this;
        this.observers.push(observer);
        return function () {
            var index = _this.observers.indexOf(observer);
            _this.observers.splice(index, 1);
        };
    };
    SimpleObservable.prototype.inform = function (change) {
        this.observers.forEach(function (observer) { return observer(change); });
    };
    return SimpleObservable;
}());
exports.SimpleObservable = SimpleObservable;
