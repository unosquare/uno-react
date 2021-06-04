/**
 * @jest-environment jsdom
 */

import { act, renderHook } from '@testing-library/react-hooks';
import { useUrlId } from './useUrlId';

test('should get id already setted', () => {
    const { result } = renderHook(() => useUrlId('idName', window));

    act(() => {
        result.current[1](10);
    });
    expect(result.current[0]).toBe(10);
});

test('should reset userUrlId', () => {
    const { result } = renderHook(() => useUrlId('idName', window));

    act(() => {
        result.current[1](10);
        result.current[2]();
    });
    expect(result.current[0]).toBe(null);
});
