"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useStateForModel;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

function useStateForModel(initialValue) {
  var _React$useState = React.useState(initialValue),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      getter = _React$useState2[0],
      setter = _React$useState2[1];

  var handleChange = function handleChange(event) {
    if (event.target) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;
      setter((0, _objectSpread3.default)({}, getter, (0, _defineProperty2.default)({}, name, value)));
    } else {
      setter((0, _objectSpread3.default)({}, getter, event));
    }
  };

  return [getter, handleChange];
}