export function isNotAllBlanks(value: any, minlength: number) {
    const cleanVal = value.replace(/\s/g, '');

    return cleanVal.length >= minlength;
}

export function maxNaturalNumber(value: any, maxInt: any) {
    const valueReal = + Number(value);
    const maxInteger = + Number(maxInt);

    return valueReal >= 0 && valueReal <= maxInteger;
}
