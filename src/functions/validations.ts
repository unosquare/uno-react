import { parseISO } from 'uno-js';

export function isNotAllBlanks(value: string, minlength: number): boolean {
    return value.replace(/\s/g, '').length >= minlength;
}

export function maxNaturalNumber(value: string, maxInt: number): boolean {
    const valueReal = +Number(value);
    const maxInteger = maxInt;

    return valueReal >= 0 && valueReal <= maxInteger;
}

export function validateEndDate(endValue: string, startValue: string): boolean {
    return parseISO(startValue).getTime() > parseISO(endValue).getTime();
}

export function startDateGreaterThanEndDate(startValue: string, endValue: string): boolean {
    return endValue !== null ? validateEndDate(endValue, startValue) : true;
}
