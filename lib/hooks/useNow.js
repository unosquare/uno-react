"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useNow = function (interval) {
    if (interval === void 0) { interval = 1000; }
    var _a = react_1.useState(new Date()), time = _a[0], setTime = _a[1];
    var _timer = null;
    var updateTime = function () { return setTime(new Date()); };
    react_1.useEffect(function () {
        _timer = setInterval(updateTime, interval);
        return function () { return clearInterval(_timer); };
    }, []);
    return [time];
};
