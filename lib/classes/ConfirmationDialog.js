"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var ConfirmationDialog = function ConfirmationDialog(_ref) {
  var contentText = _ref.contentText,
      title = _ref.title,
      onAgreeAction = _ref.onAgreeAction,
      onClose = _ref.onClose,
      open = _ref.open,
      _ref$agree = _ref.agree,
      agree = _ref$agree === void 0 ? 'Agree' : _ref$agree,
      _ref$disagree = _ref.disagree,
      disagree = _ref$disagree === void 0 ? 'Disagree' : _ref$disagree;

  var handleAgree = function handleAgree(e) {
    return onAgreeAction(e);
  };

  return React.createElement(_core.Dialog, {
    open: open,
    onClose: onClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, React.createElement(_core.DialogTitle, {
    id: "alert-dialog-title"
  }, title), React.createElement(_core.DialogContent, null, React.createElement(_core.DialogContentText, {
    id: "alert-dialog-description"
  }, contentText)), React.createElement(_core.DialogActions, null, onClose && React.createElement(_core.Button, {
    onClick: onClose,
    color: "secondary"
  }, disagree), onAgreeAction && React.createElement(_core.Button, {
    onClick: handleAgree,
    color: "primary",
    autoFocus: true
  }, agree)));
};

var _default = ConfirmationDialog;
exports.default = _default;