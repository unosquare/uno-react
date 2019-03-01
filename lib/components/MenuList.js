"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _makeStyles = _interopRequireDefault(require("@material-ui/styles/makeStyles"));

var React = _interopRequireWildcard(require("react"));

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    drawer: {
      flexShrink: 0
    },
    drawerPaper: {
      position: 'relative'
    },
    toolbar: theme.mixins.toolbar
  };
});

var MenuList = function MenuList(props) {
  var classes = useStyles();
  return React.createElement(_Drawer.default, {
    variant: "permanent",
    className: classes.drawer,
    classes: {
      paper: classes.drawerPaper
    }
  }, React.createElement("div", {
    className: classes.toolbar
  }), React.createElement(_List.default, null, props.children));
};

var _default = MenuList;
exports.default = _default;