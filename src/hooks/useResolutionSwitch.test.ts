import { renderHook } from '@testing-library/react-hooks';
import { useResolutionSwitch } from './useResolutionSwitch';

test('should get flag depends on window outerSize besides the default outerWith ', () => {
    const { result } = renderHook(() => useResolutionSwitch());

    expect(result.current[0]).toBe(false);
});

test('should get flag depends on window outerSize besides the default outerWith given', () => {
    const { result } = renderHook(() => useResolutionSwitch(2020));
    expect(result.current[0]).toBe(true);
});
