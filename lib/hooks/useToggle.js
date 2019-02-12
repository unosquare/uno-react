"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToggle = useToggle;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

function useToggle(defaultValue) {
  var _React$useState = React.useState(defaultValue),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      getField = _React$useState2[0],
      setField = _React$useState2[1];

  var toggleField = function toggleField() {
    return setField(!getField);
  };

  return [getField, toggleField];
}