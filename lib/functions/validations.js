"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uno_js_1 = require("uno-js");
var react_form_validator_core_1 = require("react-form-validator-core");
exports.ValidatorForm = react_form_validator_core_1.ValidatorForm;
var lettersRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])');
var numberRegex = new RegExp('^(?=.*[0-9])');
var nonAlphanumericRegex = new RegExp('^(?=.*[^da-zA-Z0-9])');
var imageRegex = new RegExp('.(jpe?g|png)');
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!_%*.?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
function isNotAllBlanks(value, minlength) {
    return value.replace(/\s/g, '').length >= minlength;
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
var validateEndDate = function (endValue, startValue) {
    return uno_js_1.parseISO(startValue).getTime() > uno_js_1.parseISO(endValue).getTime();
};
exports.validateEndDate = validateEndDate;
react_form_validator_core_1.ValidatorForm.addValidationRule('validateEndDate', validateEndDate);
function startDateGreaterThanEndDate(startValue, endValue) {
    return endValue !== null ? validateEndDate(endValue, startValue) : true;
}
exports.startDateGreaterThanEndDate = startDateGreaterThanEndDate;
react_form_validator_core_1.ValidatorForm.addValidationRule('startDateGreaterThanEndDate', startDateGreaterThanEndDate);
react_form_validator_core_1.ValidatorForm.addValidationRule('isImage', function (value, extensionFile) {
    return imageRegex.test(extensionFile.toLowerCase());
});
react_form_validator_core_1.ValidatorForm.addValidationRule('atLeastOneLowerAndUpperCase', function (value) { return lettersRegex.test(value); });
react_form_validator_core_1.ValidatorForm.addValidationRule('atLeastOneNumber', function (value) { return numberRegex.test(value); });
react_form_validator_core_1.ValidatorForm.addValidationRule('atLeastOneSpecialCharacter', function (value) { return nonAlphanumericRegex.test(value); });
react_form_validator_core_1.ValidatorForm.addValidationRule('isPasswordMatch', function (value, comparedValue) { return value === comparedValue; });
react_form_validator_core_1.ValidatorForm.addValidationRule('password', function (value) { return !!value.match(passwordRegex); });
