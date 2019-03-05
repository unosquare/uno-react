"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFullscreenDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var useFullscreenDialog = function useFullscreenDialog() {
  var outerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      isMobileResolution = _React$useState2[0],
      setMobileResolution = _React$useState2[1];

  var handleResolutionChange = function handleResolutionChange() {
    return setMobileResolution(window.outerWidth < outerWidth);
  };

  React.useEffect(function () {
    handleResolutionChange();
  }, []);
  return isMobileResolution;
};

exports.useFullscreenDialog = useFullscreenDialog;