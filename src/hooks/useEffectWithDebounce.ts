import * as React from 'react';

function noop() {
    // Do nothing
}

function useEffectWithDebounce(effect: () => void, debounce: number): void {
    React.useEffect(() => {
        if (debounce === 0 || (navigator && navigator.userAgent.includes('jsdom'))) {
            effect();
            return (): void => noop();
        }

        const doLater = (): void => {
            effect();
        };

        const timeout = setTimeout(doLater, debounce);
        return (): void => clearTimeout(timeout);
    }, [effect, debounce]);
}

export default useEffectWithDebounce;
