"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _makeStyles = _interopRequireDefault(require("@material-ui/styles/makeStyles"));

var React = _interopRequireWildcard(require("react"));

var useStyles = (0, _makeStyles.default)(function () {
  return {
    cardMedia: {
      display: 'block',
      height: '75px',
      margin: 'auto',
      marginTop: '20px',
      maxWidth: '280px'
    },
    grid: {
      alignContent: 'center',
      justifyContent: 'center',
      padding: 20,
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  };
});

var CentralCard = function CentralCard(props) {
  var classes = useStyles();
  return React.createElement(_Grid.default, {
    container: true,
    className: classes.grid
  }, React.createElement(_Card.default, null, props.children));
};

var _default = CentralCard;
exports.default = _default;