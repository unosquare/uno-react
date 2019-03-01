"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = Title;
exports.AppTitle = AppTitle;

var React = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function Title(_ref) {
  var prefix = _ref.prefix,
      suffix = _ref.suffix,
      value = _ref.value,
      titleClass = _ref.titleClass;
  var title = "".concat(prefix || '').concat(value).concat(suffix || '');
  React.useEffect(function () {
    document.title = title;
  }, [title]);
  return React.createElement(_Typography.default, {
    variant: "h4",
    className: titleClass
  }, value);
}

function AppTitle(prefix, suffix) {
  return function (_ref2) {
    var value = _ref2.value,
        titleClass = _ref2.titleClass;
    var props = {
      prefix: prefix,
      suffix: suffix,
      value: value,
      titleClass: titleClass
    };
    return React.createElement(Title, props);
  };
}