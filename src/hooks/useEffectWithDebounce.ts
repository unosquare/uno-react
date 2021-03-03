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

        let timeout = setTimeout(doLater, debounce);
        return (): void => clearTimeout(timeout);
    }, [effect, debounce]);
}
