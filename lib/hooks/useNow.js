"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNow = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var useNow = function useNow() {
  var _useState = (0, _react.useState)(new Date()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      time = _useState2[0],
      setTime = _useState2[1];

  var _timer = null;

  var updateTime = function updateTime() {
    return setTime(new Date());
  };

  (0, _react.useEffect)(function () {
    _timer = setInterval(updateTime, 1000);
    return function () {
      return clearInterval(_timer);
    };
  }, []);
  return [time];
};

exports.useNow = useNow;