"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useEffectWithLoading = useEffectWithLoading;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

function useEffectWithLoading(effect, initialValue, inputs) {
  var _React$useState = React.useState(initialValue),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      getter = _React$useState2[0],
      setter = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      isLoading = _React$useState4[0],
      setIsLoading = _React$useState4[1];

  var _isMounted = false;
  React.useEffect(function () {
    _isMounted = true;
    effect().then(function (resp) {
      if (_isMounted) {
        setter(resp);
        setIsLoading(false);
      }
    });
    return function () {
      return _isMounted = false;
    };
  }, inputs || []);
  return [getter, isLoading];
}