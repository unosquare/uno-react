"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, waitMilliseconds = 500) {
    let timeoutId;
    return function (...args) {
        const context = this;
        const doLater = () => {
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