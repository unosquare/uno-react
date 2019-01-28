"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _amber = _interopRequireDefault(require("@material-ui/core/colors/amber"));

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var styles = function styles(theme) {
  return {
    icon: {
      fontSize: 20
    },
    iconVariant: {
      marginRight: theme.spacing.unit,
      opacity: 0.9
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    success: {
      backgroundColor: _green.default[600]
    },
    warning: {
      backgroundColor: _amber.default[700]
    }
  };
};

var variantIcon = {
  error: _Error.default,
  info: _Info.default,
  success: _CheckCircle.default,
  warning: _Warning.default
};

var CustomSnackbarContent = function CustomSnackbarContent(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      message = _ref.message,
      variant = _ref.variant,
      onClose = _ref.onClose;
  var Icon = variantIcon[variant];
  return React.createElement(_SnackbarContent.default, {
    "aria-describedby": "client-snackbar",
    className: (0, _classnames.default)(classes[variant], className),
    message: React.createElement("span", {
      id: "client-snackbar",
      className: classes.message
    }, React.createElement(Icon, {
      className: (0, _classnames.default)(classes.icon, classes.iconVariant)
    }), message),
    action: React.createElement(_IconButton.default, {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.close,
      onClick: onClose
    }, React.createElement(_Close.default, {
      className: classes.icon
    }))
  });
};

var SnackbarContentWrapper = (0, _withStyles.default)(styles)(CustomSnackbarContent);

var GlobalSnackbar = function GlobalSnackbar(_ref2) {
  var message = _ref2.message,
      type = _ref2.type,
      open = _ref2.open,
      onClose = _ref2.onClose,
      autoHideTimeout = _ref2.autoHideTimeout;
  return React.createElement(_Snackbar.default, {
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'bottom'
    },
    autoHideDuration: autoHideTimeout || 5000,
    open: open,
    onClose: onClose
  }, React.createElement(SnackbarContentWrapper, {
    message: message,
    onClose: onClose,
    variant: type || 'info'
  }));
};

var _default = GlobalSnackbar;
exports.default = _default;