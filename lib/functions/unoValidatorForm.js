import differenceInMinutes from 'date-fns/difference_in_minutes';
import parse from 'date-fns/parse';
import { ValidatorForm } from 'react-form-validator-core';

const lettersRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])');
const numberRegex = new RegExp('^(?=.*[0-9])');
const nonAlphanumericRegex = new RegExp('^(?=.*[^\da-zA-Z0-9])');
const imageRegex = new RegExp('\.(jpe?g|png)');
const pincodeRegex = /\d+/g;

function validationRuleString(value, minlength) {
    const cleanVal = value.replace(/\s/g, '');

    return cleanVal.length >= minlength;
}

ValidatorForm.addValidationRule('isNotAllBlanks', validationRuleString);

ValidatorForm.addValidationRule('maxNaturalNumber', (value, maxInt) => {
    const valueReal = + value;
    const maxInteger = + maxInt;
    return valueReal >= 0 && valueReal <= maxInteger;
});

function validateEndDate(startValue, endValue) {
    const startDate = parse(startValue);
    const endDate = parse(endValue);
    return (differenceInMinutes(endDate, startDate) > 0);
}

ValidatorForm.addValidationRule('validateEndDate', validateEndDate);

function startDateGreaterThanEndDate(endValue, startValue) {
    if (endValue !== null) {
        const startDate = parse(startValue);
        const endDate = parse(endValue);
        return (differenceInMinutes(endDate, startDate) > 0);
    }
    return true;
}

ValidatorForm.addValidationRule('startDateGreaterThanEndDate', startDateGreaterThanEndDate);

ValidatorForm.addValidationRule(
    'isImage',
    (value, extensionFile) =>
        (imageRegex.test(extensionFile.toLowerCase())));

ValidatorForm.addValidationRule('atLeastOneLowerAndUpperCase', (value) => lettersRegex.test(value));

ValidatorForm.addValidationRule('atLeastOneNumber', (value) => numberRegex.test(value));

ValidatorForm.addValidationRule('atLeastOneSpecialCharacter', (value) => nonAlphanumericRegex.test(value));

ValidatorForm.addValidationRule('isPasswordMatch', (value, comparedValue) => value === comparedValue);

ValidatorForm.addValidationRule('pincodeValidator',
    (value) => {
        if (!value || value.trim().length === 0) { return true; }
        const res = value.match(pincodeRegex);
        return res && res[0].length === 6;
    },
);

ValidatorForm.addValidationRule('password', validatePassword);

function validatePassword(value) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!_%*.?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
    return value.match(regex);
}

export {
    startDateGreaterThanEndDate,
    ValidatorForm,
    validationRuleString,
    validateEndDate,
    validatePassword,
};
