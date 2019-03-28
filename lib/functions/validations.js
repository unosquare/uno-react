"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNotAllBlanks(value, minlength) {
    var cleanVal = value.replace(/\s/g, '');
    return cleanVal.length >= minlength;
}
exports.isNotAllBlanks = isNotAllBlanks;
function maxNaturalNumber(value, maxInt) {
    var valueReal = +Number(value);
    var maxInteger = +Number(maxInt);
    return valueReal >= 0 && valueReal <= maxInteger;
}
exports.maxNaturalNumber = maxNaturalNumber;
