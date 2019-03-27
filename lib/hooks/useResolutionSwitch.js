"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useResolutionSwitch = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _debounce = require("../functions/debounce");

var useResolutionSwitch = function useResolutionSwitch() {
  var outerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      isMobileResolution = _React$useState2[0],
      setMobileResolution = _React$useState2[1];

  var handleResolutionChange = function handleResolutionChange() {
    return setMobileResolution(window.outerWidth < outerWidth);
  };

  var listener = (0, _debounce.debounce)(handleResolutionChange, timeout);
  React.useEffect(function () {
    window.addEventListener('resize', listener);
    handleResolutionChange();
    return function () {
      return window.removeEventListener('resize', listener);
    };
  }, []);
  return [isMobileResolution];
};

exports.useResolutionSwitch = useResolutionSwitch;