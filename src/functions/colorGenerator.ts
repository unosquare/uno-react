const interpolation = (a: number[], b: number[], factor: number) => {
    const inter = [];

    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        inter[i] = a[i] * (1 - factor) + b[i] * factor;
    }

    return inter;
};

export function colorGenerator(startColor: any, endColor: any, factor: number) {
    const ret = [];
    for (let i = 0; i < factor; i++) {
        const rgb = interpolation(startColor, endColor, i / (factor - 1));
        ret.push(`rgba(${rgb[0]},${rgb[1]},${rgb[2]}, 1`);
    }

    return ret;
}
