import * as React from 'react';

export function useEffectWithDebounce(effect: () => void, debounce: number): void {
    React.useEffect(() => {
        if (debounce === 0 || (navigator && navigator.userAgent.includes('jsdom'))) {
            effect();
            return;
        }

        const doLater = (): void => {
            effect();
        };

        const timeout = setTimeout(doLater, debounce);
        return (): void => clearTimeout(timeout);
    }, [effect, debounce]);
}
