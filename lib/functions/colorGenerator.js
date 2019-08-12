"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interpolation = (a, b, factor) => {
    const inter = [];
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        inter[i] = a[i] * (1 - factor) + b[i] * factor;
    }
    return inter;
};
function colorGenerator(startColor, endColor, factor) {
    const ret = [];
    for (let i = 0; i < factor; i++) {
        const rgb = interpolation(startColor, endColor, i / (factor - 1));
        ret.push(`rgba(${rgb[0]},${rgb[1]},${rgb[2]}, 1`);
    }
    return ret;
}
exports.colorGenerator = colorGenerator;
//# sourceMappingURL=colorGenerator.js.map