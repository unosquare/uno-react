"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = void 0;

var debounce = function debounce(fn, time) {
  var timeout;
  return function () {
    var _this = this,
        _arguments = arguments;

    var functionCall = function functionCall() {
      return fn.apply(_this, _arguments);
    };

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time || 500);
  };
};

exports.debounce = debounce;