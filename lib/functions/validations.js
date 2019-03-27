"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.isNotAllBlanks = isNotAllBlanks;
exports.maxNaturalNumber = maxNaturalNumber;

function isNotAllBlanks(value, minlength) {
  var cleanVal = value.replace(/\s/g, '');
  return cleanVal.length >= minlength;
}

function maxNaturalNumber(value, maxInt) {
  var valueReal = +Number(value);
  var maxInteger = +Number(maxInt);
  return valueReal >= 0 && valueReal <= maxInteger;
}