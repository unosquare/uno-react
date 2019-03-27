"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useNow = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

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