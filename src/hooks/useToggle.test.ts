import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from './useToggle';

test('should get default boolean value ', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
});

test('should get true boolean value ', () => {
    const { result } = renderHook(() => useToggle());
    act(() => {
        result.current[1]();
    });
    expect(result.current[0]).toBe(true);
});

test('should get true boolean value passing a defaultValue', () => {
    const defaultValue = true;
    const { result } = renderHook(() => useToggle(defaultValue));
    expect(result.current[0]).toBe(true);
});
