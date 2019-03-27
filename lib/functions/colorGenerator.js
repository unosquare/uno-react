"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.colorGenerator = colorGenerator;

var interpolation = function interpolation(a, b, factor) {
  var inter = [];

  for (var i = 0; i < Math.min(a.length, b.length); i++) {
    inter[i] = a[i] * (1 - factor) + b[i] * factor;
  }

  return inter;
};

function colorGenerator(startColor, endColor, factor) {
  var ret = [];

  for (var i = 0; i < factor; i++) {
    var rgb = interpolation(startColor, endColor, i / (factor - 1));
    ret.push("rgba(".concat(rgb[0], ",").concat(rgb[1], ",").concat(rgb[2], ", 1"));
  }

  return ret;
}