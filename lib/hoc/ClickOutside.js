"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.enhanceWithClickOutside = enhanceWithClickOutside;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function enhanceWithClickOutside(Component) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(EnhancedComponent, _React$Component);

    function EnhancedComponent(props) {
      var _this;

      (0, _classCallCheck2.default)(this, EnhancedComponent);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EnhancedComponent).call(this, props));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "__domNode", void 0);
      _this.handleClickOutside = _this.handleClickOutside.bind((0, _assertThisInitialized2.default)(_this));
      return _this;
    }

    (0, _createClass2.default)(EnhancedComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: "handleClickOutside",
      value: function handleClickOutside(e) {
        var domNode = this.__domNode;

        if ((!domNode || !domNode.contains(e.target)) && this.__wrappedInstance && typeof this.__wrappedInstance.handleClickOutside === 'function') {
          this.__wrappedInstance.handleClickOutside(e);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var rest = (0, _extends2.default)({}, this.props);
        return _react.default.createElement(Component, (0, _extends2.default)({}, rest, {
          ref: function ref(c) {
            _this2.__wrappedInstance = c; // eslint-disable-next-line react/no-find-dom-node

            _this2.__domNode = _reactDom.default.findDOMNode(c);
          }
        }));
      }
    }]);
    return EnhancedComponent;
  }(_react.default.Component), _temp;
}