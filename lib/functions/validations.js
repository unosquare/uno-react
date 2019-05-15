"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var difference_in_minutes_1 = __importDefault(require("date-fns/difference_in_minutes"));
var parse_1 = __importDefault(require("date-fns/parse"));
var react_form_validator_core_1 = require("react-form-validator-core");
exports.ValidatorForm = react_form_validator_core_1.ValidatorForm;
var lettersRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])');
var numberRegex = new RegExp('^(?=.*[0-9])');
var nonAlphanumericRegex = new RegExp('^(?=.*[^\da-zA-Z0-9])');
var imageRegex = new RegExp('\.(jpe?g|png)');
var pincodeRegex = /\d+/g;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!_%*.?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
function isNotAllBlanks(value, minlength) {
    var cleanVal = value.replace(/\s/g, '');
    return cleanVal.length >= minlength;
}
exports.isNotAllBlanks = isNotAllBlanks;
function maxNaturalNumber(value, maxInt) {
    var valueReal = +Number(value);
    var maxInteger = +Number(maxInt);
    return valueReal >= 0 && valueReal <= maxInteger;
}
exports.maxNaturalNumber = maxNaturalNumber;
react_form_validator_core_1.ValidatorForm.addValidationRule('isNotAllBlanks', isNotAllBlanks);
react_form_validator_core_1.ValidatorForm.addValidationRule('maxNaturalNumber', maxNaturalNumber);
function validateEndDate(startValue, endValue) {
    var startDate = parse_1.default(startValue);
    var endDate = parse_1.default(endValue);
    return (difference_in_minutes_1.default(endDate, startDate) > 0);
}
exports.validateEndDate = validateEndDate;
react_form_validator_core_1.ValidatorForm.addValidationRule('validateEndDate', validateEndDate);
function startDateGreaterThanEndDate(endValue, startValue) {
    if (endValue !== null) {
        var startDate = parse_1.default(startValue);
        var endDate = parse_1.default(endValue);
        return (difference_in_minutes_1.default(endDate, startDate) > 0);
    }
    return true;
}
exports.startDateGreaterThanEndDate = startDateGreaterThanEndDate;
react_form_validator_core_1.ValidatorForm.addValidationRule('startDateGreaterThanEndDate', startDateGreaterThanEndDate);
react_form_validator_core_1.ValidatorForm.addValidationRule('isImage', function (value, extensionFile) {
    return (imageRegex.test(extensionFile.toLowerCase()));
});
react_form_validator_core_1.ValidatorForm.addValidationRule('atLeastOneLowerAndUpperCase', function (value) { return lettersRegex.test(value); });
react_form_validator_core_1.ValidatorForm.addValidationRule('atLeastOneNumber', function (value) { return numberRegex.test(value); });
react_form_validator_core_1.ValidatorForm.addValidationRule('atLeastOneSpecialCharacter', function (value) { return nonAlphanumericRegex.test(value); });
react_form_validator_core_1.ValidatorForm.addValidationRule('isPasswordMatch', function (value, comparedValue) { return value === comparedValue; });
react_form_validator_core_1.ValidatorForm.addValidationRule('pincodeValidator', function (value) {
    if (!value || value.trim().length === 0) {
        return true;
    }
    var res = value.match(pincodeRegex);
    return res && res[0].length === 6;
});
react_form_validator_core_1.ValidatorForm.addValidationRule('password', function (value) { return value.match(passwordRegex); });
