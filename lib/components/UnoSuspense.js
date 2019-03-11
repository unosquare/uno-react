"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnoSuspense = void 0;

var _LoadingIcon = require("./LoadingIcon");

var _react = _interopRequireDefault(require("react"));

var UnoSuspense = function UnoSuspense(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react.default.Suspense, {
    fallback: _react.default.createElement(_LoadingIcon.LoadingIcon, null)
  }, children);
};

exports.UnoSuspense = UnoSuspense;