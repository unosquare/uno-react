import * as React from 'react';

export function useEffectWithDebounce(effect: () => void, debounce: number, inputs: React.DependencyList): void {
    if (debounce === 0 || (navigator && navigator.userAgent.includes('jsdom'))) {
        React.useEffect(() => {
            effect();
        }, inputs || []);

        return;
    }

    let timeout: number;

    const doLater = (): void => {
        timeout = undefined;
        effect();
    };

    React.useEffect(() => {
        timeout = setTimeout(doLater, debounce);
        return (): void => clearTimeout(timeout);
    }, inputs || []);
}
