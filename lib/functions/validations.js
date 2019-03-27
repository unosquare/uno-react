export function isNotAllBlanks(value, minlength) {
    var cleanVal = value.replace(/\s/g, '');
    return cleanVal.length >= minlength;
}
export function maxNaturalNumber(value, maxInt) {
    var valueReal = +Number(value);
    var maxInteger = +Number(maxInt);
    return valueReal >= 0 && valueReal <= maxInteger;
}
