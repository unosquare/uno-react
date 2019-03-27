"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useStateForModelWithLoading = useStateForModelWithLoading;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _useStateForModel3 = require("./useStateForModel");

function useStateForModelWithLoading(effect, initialValue, inputs) {
  var _useStateForModel = (0, _useStateForModel3.useStateForModel)(initialValue),
      _useStateForModel2 = (0, _slicedToArray2.default)(_useStateForModel, 2),
      getter = _useStateForModel2[0],
      handleChange = _useStateForModel2[1];

  var _React$useState = React.useState(true),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      isLoading = _React$useState2[0],
      setIsLoading = _React$useState2[1];

  var _isMounted = false;
  React.useEffect(function () {
    _isMounted = true;
    effect().then(function (resp) {
      if (_isMounted) {
        handleChange(resp);
        setIsLoading(false);
      }
    });
    return function () {
      return _isMounted = false;
    };
  }, inputs || []);
  return [getter, isLoading, handleChange];
}