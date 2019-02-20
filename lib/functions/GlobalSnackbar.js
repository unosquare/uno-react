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

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _makeStyles = _interopRequireDefault(require("@material-ui/styles/makeStyles"));

var _react = _interopRequireWildcard(require("react"));

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    closeIcon: {
      fontSize: '20px  !important'
    },
    error: {
      backgroundColor: "".concat(theme.palette.error.main, " !important"),
      display: 'flex !important'
    },
    icon: {
      fontSize: '20px  !important',
      marginRight: '15px  !important'
    },
    iconMobile: {
      fontSize: '34px  !important',
      marginRight: '15px  !important'
    },
    info: {
      backgroundColor: "".concat(theme.palette.primary.main, " !important"),
      display: 'flex !important'
    },
    success: {
      backgroundColor: "".concat(_green.default[600], " !important"),
      display: 'flex !important'
    },
    text: {
      alignItems: 'center',
      color: "".concat(theme.palette.text.secondary, " !important"),
      display: 'inline-flex !important',
      fontSize: '18px !important'
    },
    textMobile: {
      color: "".concat(theme.palette.text.secondary, " !important"),
      display: 'inline-flex !important',
      fontSize: '28px !important'
    },
    warning: {
      backgroundColor: "".concat(_amber.default[700], " !important"),
      display: 'flex !important'
    }
  };
});

var GlobalSnackbar = function GlobalSnackbar(_ref) {
  var message = _ref.message,
      _ref$seconds = _ref.seconds,
      seconds = _ref$seconds === void 0 ? 2500 : _ref$seconds,
      _ref$mobile = _ref.mobile,
      mobile = _ref$mobile === void 0 ? false : _ref$mobile;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var getIcon = function getIcon() {
    switch (message.messageType) {
      case 'info':
        return _react.default.createElement(_Info.default, {
          className: getIconStyle()
        });

      case 'warning':
        return _react.default.createElement(_Warning.default, {
          className: getIconStyle()
        });

      case 'error':
        return _react.default.createElement(_Error.default, {
          className: getIconStyle()
        });

      default:
        return _react.default.createElement(_CheckCircle.default, {
          className: getIconStyle()
        });
    }
  };

  var getStyle = function getStyle() {
    switch (message.messageType) {
      case 'info':
        return classes.info;

      case 'warning':
        return classes.warning;

      case 'error':
        return classes.error;

      default:
        return classes.success;
    }
  };

  var getTextStyle = function getTextStyle() {
    return mobile ? classes.textMobile : classes.text;
  };

  var getIconStyle = function getIconStyle() {
    return mobile ? classes.iconMobile : classes.icon;
  };

  var onClose = function onClose() {
    return setOpen(false);
  };

  (0, _react.useEffect)(function () {
    if (message && message.messageText !== '') {
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
      }, seconds);
    }
  }, [message]);
  var anchorOrigin = {
    horizontal: mobile ? 'center' : 'right',
    vertical: 'bottom'
  };
  return _react.default.createElement(_Snackbar.default, {
    anchorOrigin: anchorOrigin,
    className: getStyle(),
    open: open
  }, _react.default.createElement(_SnackbarContent.default, {
    className: getStyle(),
    message: _react.default.createElement(_Typography.default, {
      className: getTextStyle()
    }, " ", getIcon(), " ", message.messageText, " "),
    action: !mobile && _react.default.createElement(_IconButton.default, {
      onClick: onClose
    }, _react.default.createElement(_Close.default, {
      className: classes.closeIcon
    }))
  }));
};

var _default = GlobalSnackbar;
exports.default = _default;