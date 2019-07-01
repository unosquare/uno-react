import differenceInMinutes from 'date-fns/difference_in_minutes';
import parse from 'date-fns/parse';
import { ValidatorForm } from 'react-form-validator-core';

const lettersRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])');
const numberRegex = new RegExp('^(?=.*[0-9])');
const nonAlphanumericRegex = new RegExp('^(?=.*[^\da-zA-Z0-9])');
const imageRegex = new RegExp('\.(jpe?g|png)');
const pincodeRegex = /\d+/g;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!_%*.?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;

export function isNotAllBlanks(value: any, minlength: number) {
    const cleanVal = value.replace(/\s/g, '');

    return cleanVal.length >= minlength;
}

export function maxNaturalNumber(value: any, maxInt: any) {
    const valueReal = + Number(value);
    const maxInteger = + Number(maxInt);

    return valueReal >= 0 && valueReal <= maxInteger;
}

ValidatorForm.addValidationRule('isNotAllBlanks', isNotAllBlanks);

ValidatorForm.addValidationRule('maxNaturalNumber', maxNaturalNumber);

function validateEndDate(startValue: any, endValue: any) {
    const startDate = parse(startValue);
    const endDate = parse(endValue);
    return (differenceInMinutes(endDate, startDate) > 0);
}

ValidatorForm.addValidationRule('validateEndDate', validateEndDate);

function startDateGreaterThanEndDate(startValue: any, endValue: any) {
    if (endValue !== null) {
        const startDate = parse(startValue);
        const endDate = parse(endValue);
        return (differenceInMinutes(endDate, startDate) > 0);
    }
    return true;
}

ValidatorForm.addValidationRule('startDateGreaterThanEndDate', startDateGreaterThanEndDate);

ValidatorForm.addValidationRule('isImage', (value: any, extensionFile: string) =>
    (imageRegex.test(extensionFile.toLowerCase())));

ValidatorForm.addValidationRule('atLeastOneLowerAndUpperCase', (value: string) => lettersRegex.test(value));

ValidatorForm.addValidationRule('atLeastOneNumber', (value: string) => numberRegex.test(value));

ValidatorForm.addValidationRule('atLeastOneSpecialCharacter', (value: string) => nonAlphanumericRegex.test(value));

ValidatorForm.addValidationRule('isPasswordMatch', (value: any, comparedValue: any) => value === comparedValue);

ValidatorForm.addValidationRule('pincodeValidator',
    (value: any) => {
        if (!value || value.trim().length === 0) { return true; }
        const res = value.match(pincodeRegex);
        return res && res[0].length === 6;
    },
);

ValidatorForm.addValidationRule('password', (value: any) => value.match(passwordRegex));

export {
    startDateGreaterThanEndDate,
    ValidatorForm,
    validateEndDate,
};
