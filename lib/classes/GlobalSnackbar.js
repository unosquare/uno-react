"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _amber = _interopRequireDefault(require("@material-ui/core/colors/amber"));

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _styles = require("@material-ui/styles");

var _react = _interopRequireWildcard(require("react"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    error: {
      backgroundColor: theme.palette.secondary.main
    },
    icon: {
      fontSize: '34px',
      marginRight: '15px'
    },
    info: {
      backgroundColor: theme.palette.primary.main
    },
    success: {
      backgroundColor: _green.default[600]
    },
    text: {
      color: theme.palette.text.secondary,
      display: 'inline-flex',
      fontSize: '28px'
    },
    warning: {
      backgroundColor: _amber.default[700]
    }
  };
});

var GlobalSnackbar = function GlobalSnackbar(_ref) {
  var message = _ref.message,
      messageType = _ref.messageType,
      _ref$seconds = _ref.seconds,
      seconds = _ref$seconds === void 0 ? 2500 : _ref$seconds;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var getIcon = function getIcon() {
    switch (messageType) {
      case 'info':
        return _react.default.createElement(_Info.default, {
          className: classes.icon
        });

      case 'warning':
        return _react.default.createElement(_Warning.default, {
          className: classes.icon
        });

      case 'sucess':
        return _react.default.createElement(_CheckCircle.default, {
          className: classes.icon
        });

      case 'error':
        return _react.default.createElement(_Error.default, {
          className: classes.icon
        });

      default:
        return;
    }
  };

  var getStyle = function getStyle() {
    switch (messageType) {
      case 'info':
        return classes.info;

      case 'warning':
        return classes.warning;

      case 'sucess':
        return classes.success;

      case 'error':
        return classes.error;

      default:
        return;
    }
  };

  (0, _react.useEffect)(function () {
    if (message !== '') {
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
      }, seconds);
    }
  }, [message]);
  return _react.default.createElement(_Snackbar.default, {
    className: getStyle(),
    open: open
  }, _react.default.createElement(_SnackbarContent.default, {
    className: getStyle(),
    message: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Typography.default, {
      className: classes.text
    }, " ", getIcon(), " ", message, " "))
  }));
};

var _default = GlobalSnackbar;
exports.default = _default;