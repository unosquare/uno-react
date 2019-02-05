"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _react = _interopRequireDefault(require("react"));

var ButtonWithLoading = function ButtonWithLoading(_ref) {
  var _ref$isFetching = _ref.isFetching,
      isFetching = _ref$isFetching === void 0 ? false : _ref$isFetching,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Save' : _ref$text,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return _react.default.createElement("div", {
    className: className
  }, isFetching ? _react.default.createElement(_CircularProgress.default, null) : _react.default.createElement(_Button.default, {
    type: "submit",
    color: "primary"
  }, text));
};

var _default = ButtonWithLoading;
exports.default = _default;