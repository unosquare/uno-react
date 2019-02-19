"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var ConfirmationDialog = function ConfirmationDialog(_ref) {
  var contentText = _ref.contentText,
      title = _ref.title,
      onAgreeAction = _ref.onAgreeAction,
      onClose = _ref.onClose,
      open = _ref.open,
      _ref$agree = _ref.agree,
      agree = _ref$agree === void 0 ? 'Agree' : _ref$agree,
      _ref$disagree = _ref.disagree,
      disagree = _ref$disagree === void 0 ? 'Disagree' : _ref$disagree,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? 'textSecondary' : _ref$textColor;

  var handleAgree = function handleAgree(e) {
    return onAgreeAction(e);
  };

  return React.createElement(_Dialog.default, {
    open: open,
    onClose: onClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, React.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, title), React.createElement(_DialogContent.default, null, React.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, React.createElement(_Typography.default, {
    color: textColor
  }, contentText))), React.createElement(_DialogActions.default, null, onClose && React.createElement(_Button.default, {
    onClick: onClose,
    color: "secondary"
  }, disagree), onAgreeAction && React.createElement(_Button.default, {
    onClick: handleAgree,
    color: "primary",
    autoFocus: true
  }, agree)));
};

var _default = ConfirmationDialog;
exports.default = _default;