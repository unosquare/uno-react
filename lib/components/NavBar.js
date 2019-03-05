"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var React = _interopRequireWildcard(require("react"));

var NavBar = function NavBar(props) {
  return React.createElement(_AppBar.default, {
    position: "absolute",
    color: "primary"
  }, React.createElement(_Toolbar.default, null, React.createElement(_Grid.default, {
    container: true,
    direction: "row",
    item: true,
    xs: 12
  }, React.createElement(_Grid.default, {
    item: true,
    xs: 6,
    container: true,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'center'
  }, React.createElement(_Typography.default, {
    color: "textSecondary",
    variant: "h5"
  }, props.title || 'uno-react')), React.createElement(_Grid.default, {
    xs: 6,
    item: true,
    container: true,
    direction: 'row',
    justify: 'flex-end',
    alignItems: 'center'
  }, props.children))));
};

var _default = NavBar;
exports.default = _default;