import { ValidatorForm } from 'react-form-validator-core';
export declare function isNotAllBlanks(value: string, minlength: number): boolean;
export declare function maxNaturalNumber(value: string, maxInt: any): boolean;
declare const validateEndDate: (endValue: string, startValue: string) => boolean;
declare function startDateGreaterThanEndDate(startValue: string, endValue: string): boolean;
export { startDateGreaterThanEndDate, ValidatorForm, validateEndDate };
