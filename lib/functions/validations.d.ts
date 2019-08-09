import { ValidatorForm } from 'react-form-validator-core';
export declare function isNotAllBlanks(value: any, minlength: number): boolean;
export declare function maxNaturalNumber(value: any, maxInt: any): boolean;
declare function validateEndDate(endValue: any, startValue: any): boolean;
declare function startDateGreaterThanEndDate(startValue: any, endValue: any): boolean;
export { startDateGreaterThanEndDate, ValidatorForm, validateEndDate, };
