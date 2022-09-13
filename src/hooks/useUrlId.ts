import * as React from 'react';
import { getQueryParam } from 'uno-js';

export type key = string | number | null;

export const getBaseUrl = (windowLocation: Location): string => windowLocation.href.split('?')[0];
export const resetBaseUrl = (window: Window): void => window.history.pushState('', '', getBaseUrl(window.location));
export const buildUrl = (keys?: string | string[], values?: key | key[]): string | null => {
    if (!values || !keys) return null;

    let url = getBaseUrl(window.location);

    if (typeof keys !== 'object') return `${url}?${keys}=${values}`;

    keys.forEach((key, index) => {
        if (values[index] !== null) url = url.concat(`${index === 0 ? '?' : '&'}${key}=${values[index]}`);
    });

    return url;
};

export const useUrlId = (
    idName: string | string[],
    window: Window,
): [key | key[], (value: key | key[]) => void, () => void] => {
    const [getId, setId] = React.useState<key | key[]>(null);

    React.useEffect(() => typeof idName === 'object' ? setId(idName.map((x) => getQueryParam(x.toLocaleLowerCase(), window.location.href.toLocaleLowerCase()))) : setId(getQueryParam(idName.toLocaleLowerCase(), window.location.href.toLocaleLowerCase()))
    , [idName, window.location]);

    React.useEffect(() => {
        if(getId !== null) window.history.pushState(null, null, buildUrl(idName, getId));
    }, [idName, window.location, window.history, getId]);

    const reset = (): void => {
        resetBaseUrl(window);
        setId(null);
    };

    return [getId, setId, reset];
};
