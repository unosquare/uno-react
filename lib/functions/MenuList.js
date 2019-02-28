"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _makeStyles = _interopRequireDefault(require("@material-ui/styles/makeStyles"));

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    drawer: {
      flexShrink: 0
    },
    drawerPaper: {
      position: 'relative'
    },
    link: {
      textDecoration: 'none'
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
  }), React.createElement(_List.default, null, props.menuOptions ? props.menuOptions.map(function (menu) {
    return React.createElement(_reactRouterDom.Link, {
      to: menu.url,
      className: classes.link,
      key: menu.name
    }, React.createElement(_ListItem.default, {
      button: true
    }, React.createElement(_ListItemText.default, {
      primary: menu.name
    })));
  }) : React.createElement(_reactRouterDom.Link, {
    to: '/',
    className: classes.link
  }, React.createElement(_ListItem.default, {
    button: true
  }, React.createElement(_ListItemText.default, {
    primary: 'Home'
  })))));
};

var _default = MenuList;
exports.default = _default;