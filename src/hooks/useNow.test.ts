import { renderHook } from '@testing-library/react-hooks';
import { useNow } from './useNow';

test('should get seconds', () => {
    const { result } = renderHook(() => useNow());

    expect(result.current[0].getSeconds()).toBe(new Date().getSeconds());
});

test('should get minutes', () => {
    const { result } = renderHook(() => useNow());

    expect(result.current[0].getMinutes()).toBe(new Date().getMinutes());
});
test('should get year', () => {
    const { result } = renderHook(() => useNow());

    expect(result.current[0].getFullYear()).toBe(new Date().getFullYear());
});
