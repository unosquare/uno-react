"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useStateForField = useStateForField;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

function useStateForField(defaultValue) {
  var _React$useState = React.useState(defaultValue),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      getField = _React$useState2[0],
      setField = _React$useState2[1];

  var changeHandler = function changeHandler(_ref) {
    var target = _ref.target;

    if (!target) {
      return;
    }

    var value = target.value;
    setField(value);
  };

  return [getField, changeHandler, setField];
}