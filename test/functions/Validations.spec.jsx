import { isNotAllBlanks, maxNaturalNumber } from '../../src/functions/validations';

describe('Validations', () => {
    test('Should return true in isNotAllBlanks', () => {
        const result = isNotAllBlanks('text for test', 10);
        expect(result).toBe(true);
    });

    test('Should return false in isNotAllBlanks', () => {
        const result = isNotAllBlanks('     ', 10);
        expect(result).toBe(false);
    });

    test('Should return true in maxNaturalNumber', () => {
        const result = maxNaturalNumber('13', 15);
        expect(result).toBe(true);
    });

    test('Should return false in maxNaturalNumber', () => {
        const result = maxNaturalNumber('12', 10);
        expect(result).toBe(false);
    });
});