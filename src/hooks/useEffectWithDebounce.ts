import * as React from 'react';

export function useEffectWithDebounce(effect: any, debounce: number, inputs: React.DependencyList) {
    let timeout: any;

    const doLater = () => {
        timeout = undefined;
        effect();
    };

    React.useEffect(() => {
        timeout = setTimeout(doLater, debounce);
        return (() => clearTimeout(timeout));
    }, inputs || []);

    return;
}
