import { cleanup, renderHook } from '@testing-library/react-hooks';
import { useToggle } from './useToggle';

describe('Hook: useToggle', () => {
    afterEach(cleanup)
    test('should use toggle', () => {
        const { result } = renderHook(() => useToggle(false))

        expect(result.current[0]).toBe(false);
        expect(typeof result.current[1]).toBe('function');
    })
});