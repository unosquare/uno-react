import { act, renderHook } from '@testing-library/react-hooks';
import useStateForField from './useStateForField';

test('should keep the value of a variable that is related to an input(event)', () => {
    const { result } = renderHook(() => useStateForField(''));
    const event = {
        target: { value: 'the-value' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
        result.current[1](event);
    });
    expect(result.current[0]).toBe(event.target.value);
});

test('should set a value of a variable that is related to an input(event) and reset to defaultValue', () => {
    const defaultValue = '';
    const { result } = renderHook(() => useStateForField(defaultValue));
    const event = {
        target: { value: 'the-value' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
        result.current[1](event);
    });
    act(() => {
        result.current[2](defaultValue);
    });
    expect(result.current[0]).toBe(defaultValue);
});

test('should not keep the value of a variable that is not related to an input(event)', () => {
    const defaultValue = '';
    const { result } = renderHook(() => useStateForField(defaultValue));
    const event = {
        bubbles: false,
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
        result.current[1](event);
    });
    expect(result.current[0]).toBe(defaultValue);
});
