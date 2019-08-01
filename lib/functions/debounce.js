"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, waitMilliseconds) {
    if (waitMilliseconds === void 0) { waitMilliseconds = 500; }
    var timeoutId;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var doLater = function () {
            timeoutId = undefined;
            func.apply(context, args);
        };
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(doLater, waitMilliseconds);
    };
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map