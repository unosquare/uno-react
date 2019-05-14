"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toTitleCase(title) {
    title = title.toLowerCase();
    var words = title.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
exports.toTitleCase = toTitleCase;
