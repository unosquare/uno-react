import { renderHook } from '@testing-library/react-hooks';
import useResolutionSwitch from './useResolutionSwitch';

const mockOuterWidth = (width: number) => {
    Object.defineProperty(window, 'outerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });
};

test('should get flag depends on window outerSize besides the default outerWith ', () => {
    mockOuterWidth(1001);

    const { result } = renderHook(() => useResolutionSwitch(window));
    expect(result.current[0]).toBe(false);
});

test('should get flag depends on window outerSize besides the default outerWith given', () => {
    mockOuterWidth(1001);

    const { result } = renderHook(() => useResolutionSwitch(window, 2020));
    expect(result.current[0]).toBe(true);
});

test('should get flag depends on window outerSize besides the default outerWith and timeout given ', () => {
    mockOuterWidth(1001);

    const { result } = renderHook(() => useResolutionSwitch(window, 2020, 1000));
    expect(result.current[0]).toBe(true);
});
