import { act, renderHook } from '@testing-library/react-hooks';
import { usePersistedState } from './usePersistedState';

test('should save default value in LocalStatorage ', () => {
    const key: string = 'exampleToken';
    const defaultValue: string = 'unosquareToken';
    const { result } = renderHook(() => usePersistedState(defaultValue, key));

    expect(result.current[0]).toBe(defaultValue);
});

test('should save in LocalStatorage, changing default value ', () => {
    const key: string = 'exampleToken';
    const defaultValue: string = 'unosquareToken';
    const { result } = renderHook(() => usePersistedState(defaultValue, key));
    const value: string = '123456789';
    act(() => {
        result.current[1](value);
    });
    expect(result.current[0]).toBe(value);
});
