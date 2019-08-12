"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function humanize(name) {
    return (name || '')
        .replace(/^./, (str) => str.toUpperCase())
        .replace(/([a-z])([A-Z])/g, '$1 $2');
}
exports.humanize = humanize;
//# sourceMappingURL=humanize.js.map