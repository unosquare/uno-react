"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ErrorBoundary = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var styles = function styles(_ref) {
  var palette = _ref.palette;
  return {
    error: {
      backgroundColor: palette.error.dark
    },
    errorBoundBody: {
      color: 'red',
      fontFamily: 'verdana',
      fontSize: 10
    },
    errorBoundDetails: {
      fontFamily: 'verdana',
      fontSize: 9,
      whiteSpace: 'pre-wrap'
    },
    errorBoundPaper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '50px',
      width: '80%'
    },
    errorBoundTitle: {
      fontFamily: 'verdana',
      fontSize: 9,
      whiteSpace: 'pre-wrap'
    }
  };
};

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      error: null,
      errorInfo: null
    });
    return _this;
  }

  (0, _createClass2.default)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errorInfo) {
        var classes = this.props.classes;
        var errorDesc = this.state.error && this.state.error.toString() ? this.state.error.toString() : null;
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Typography.default, {
          variant: "h4"
        }, "Something went terribly wrong..."), _react.default.createElement(_Paper.default, {
          className: classes.errorBoundPaper,
          elevation: 8
        }, _react.default.createElement(_Typography.default, {
          className: classes.errorBoundTitle,
          variant: "subtitle1"
        }, errorDesc), _react.default.createElement("br", null), _react.default.createElement("details", {
          className: classes.errorBoundDetails
        }, _react.default.createElement(_Typography.default, {
          className: classes.errorBoundBody,
          variant: "body2"
        }, this.state.errorData.componentStack))));
      } // eslint-disable-next-line react/prop-types


      return this.props.children;
    }
  }]);
  return ErrorBoundary;
}(_react.default.Component);

exports.ErrorBoundary = ErrorBoundary;

var _default = (0, _withStyles.default)(styles)(ErrorBoundary);

exports.default = _default;