"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnoTheme = void 0;

var _createMuiTheme = _interopRequireDefault(require("@material-ui/core/styles/createMuiTheme"));

var UnoTheme = (0, _createMuiTheme.default)({
  palette: {
    error: {
      main: '#f44336'
    },
    primary: {
      main: '#304FF3'
    },
    secondary: {
      main: '#5c5b5b'
    },
    text: {
      primary: '#191919',
      secondary: '#000'
    }
  },
  typography: {
    useNextVariants: true
  },
  zIndex: {
    appBar: '1201 !important'
  }
});
exports.UnoTheme = UnoTheme;