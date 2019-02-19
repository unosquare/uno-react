import { colorGenerator } from '../../src/functions/colorGenerator';

describe('ColorGenerator', () => {
    test('Should return a valid array of colors', () => {
        const len = 4;
        const result = colorGenerator([2, 116, 144], [248, 115, 32], len);
        expect(result.length == len).toBe(true);
    });

    test('Should return an invalid array of colors', () => {
        const len = 2;
        const result = colorGenerator(2, 2, len);
        expect(result[1].includes('undefined')).toBe(true);
    });
});