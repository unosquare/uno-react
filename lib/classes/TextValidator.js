"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var React = _interopRequireWildcard(require("react"));

var _reactFormValidatorCore = require("react-form-validator-core");

/* eslint-disable no-unused-vars */
var TextValidator =
/*#__PURE__*/
function (_ValidatorComponent) {
  (0, _inherits2.default)(TextValidator, _ValidatorComponent);

  function TextValidator() {
    (0, _classCallCheck2.default)(this, TextValidator);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextValidator).apply(this, arguments));
  }

  (0, _createClass2.default)(TextValidator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          errorMessages = _this$props.errorMessages,
          validators = _this$props.validators,
          requiredError = _this$props.requiredError,
          helperText = _this$props.helperText,
          validatorListener = _this$props.validatorListener,
          withRequiredValidator = _this$props.withRequiredValidator,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["error", "errorMessages", "validators", "requiredError", "helperText", "validatorListener", "withRequiredValidator"]);
      var isValid = this.state.isValid;
      return React.createElement(_TextField.default, (0, _extends2.default)({}, rest, {
        error: !isValid || error,
        helperText: !isValid && this.getErrorMessage() || helperText
      }));
    }
  }]);
  return TextValidator;
}(_reactFormValidatorCore.ValidatorComponent);

exports.default = TextValidator;