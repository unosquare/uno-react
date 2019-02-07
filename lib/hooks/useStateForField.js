"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStateForField = useStateForField;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

function useStateForField(defaultValue) {
  var _React$useState = React.useState(defaultValue),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      getField = _React$useState2[0],
      setField = _React$useState2[1];

  var changeHandler = function changeHandler(_ref) {
    var target = _ref.target;
    var value = target.value;
    setField(value);
  };

  return [getField, changeHandler, setField];
}

var _useStateForField = useStateForField(defaultValue),
    _useStateForField2 = (0, _slicedToArray2.default)(_useStateForField, 2),
    getField = _useStateForField2[0],
    changeHandler = _useStateForField2[1];

React.createElement(_core.TextField, {
  onchange: changeHandler
});