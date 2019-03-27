export function isNotAllBlanks(value, minlength) {
    const cleanVal = value.replace(/\s/g, '');
    return cleanVal.length >= minlength;
}
export function maxNaturalNumber(value, maxInt) {
    const valueReal = +Number(value);
    const maxInteger = +Number(maxInt);
    return valueReal >= 0 && valueReal <= maxInteger;
}
