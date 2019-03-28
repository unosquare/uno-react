"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useNow = function () {
    var _a = react_1.useState(new Date()), time = _a[0], setTime = _a[1];
    var _timer = null;
    var updateTime = function () { return setTime(new Date()); };
    react_1.useEffect(function () {
        _timer = setInterval(updateTime, 1000);
        return (function () { return clearInterval(_timer); });
    }, []);
    return [time];
};
