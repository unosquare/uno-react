"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIcon = void 0;

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _styles = require("@material-ui/styles");

var LoadingIcon = (0, _styles.styled)(_CircularProgress.default)(function (theme) {
  return {
    color: theme.palette.primary.main,
    display: 'block !important',
    margin: 'auto !important',
    marginBottom: '15px !important'
  };
});
exports.LoadingIcon = LoadingIcon;