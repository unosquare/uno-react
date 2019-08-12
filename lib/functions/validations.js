"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const difference_in_minutes_1 = __importDefault(require("date-fns/difference_in_minutes"));
const parse_1 = __importDefault(require("date-fns/parse"));
const react_form_validator_core_1 = require("react-form-validator-core");
exports.ValidatorForm = react_form_validator_core_1.ValidatorForm;
const lettersRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])');
const numberRegex = new RegExp('^(?=.*[0-9])');
const nonAlphanumericRegex = new RegExp('^(?=.*[^\da-zA-Z0-9])');
const imageRegex = new RegExp('\.(jpe?g|png)');
const pincodeRegex = /\d+/g;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!_%*.?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
function isNotAllBlanks(value, minlength) {
    const cleanVal = value.replace(/\s/g, '');
    return cleanVal.length >= minlength;
}
exports.isNotAllBlanks = isNotAllBlanks;
function maxNaturalNumber(value, maxInt) {
    const valueReal = +Number(value);
    const maxInteger = +Number(maxInt);
    return valueReal >= 0 && valueReal <= maxInteger;
}
exports.maxNaturalNumber = maxNaturalNumber;
react_form_validator_core_1.ValidatorForm.addValidationRule('isNotAllBlanks', isNotAllBlanks);
react_form_validator_core_1.ValidatorForm.addValidationRule('maxNaturalNumber', maxNaturalNumber);
function validateEndDate(endValue, startValue) {
    const startDate = parse_1.default(startValue);
    const endDate = parse_1.default(endValue);
    return (difference_in_minutes_1.default(endDate, startDate) > 0);
}
exports.validateEndDate = validateEndDate;
react_form_validator_core_1.ValidatorForm.addValidationRule('validateEndDate', validateEndDate);
function startDateGreaterThanEndDate(startValue, endValue) {
    if (endValue !== null) {
        const startDate = parse_1.default(startValue);
        const endDate = parse_1.default(endValue);
        return (difference_in_minutes_1.default(endDate, startDate) > 0);
    }
    return true;
}
exports.startDateGreaterThanEndDate = startDateGreaterThanEndDate;
react_form_validator_core_1.ValidatorForm.addValidationRule('startDateGreaterThanEndDate', startDateGreaterThanEndDate);
react_form_validator_core_1.ValidatorForm.addValidationRule('isImage', (value, extensionFile) => (imageRegex.test(extensionFile.toLowerCase())));
react_form_validator_core_1.ValidatorForm.addValidationRule('atLeastOneLowerAndUpperCase', (value) => lettersRegex.test(value));
react_form_validator_core_1.ValidatorForm.addValidationRule('atLeastOneNumber', (value) => numberRegex.test(value));
react_form_validator_core_1.ValidatorForm.addValidationRule('atLeastOneSpecialCharacter', (value) => nonAlphanumericRegex.test(value));
react_form_validator_core_1.ValidatorForm.addValidationRule('isPasswordMatch', (value, comparedValue) => value === comparedValue);
react_form_validator_core_1.ValidatorForm.addValidationRule('pincodeValidator', (value) => {
    if (!value || value.trim().length === 0) {
        return true;
    }
    const res = value.match(pincodeRegex);
    return res && res[0].length === 6;
});
react_form_validator_core_1.ValidatorForm.addValidationRule('password', (value) => value.match(passwordRegex));
//# sourceMappingURL=validations.js.map