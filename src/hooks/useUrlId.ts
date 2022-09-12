import * as React from 'react';
import { getQueryParam } from 'uno-js';

export type key = string | number | null;

export const getBaseUrl = (windowLocation: any): string => windowLocation.href.split('?')[0];
export const resetBaseUrl = (window: any): void => window.history.pushState('', '', getBaseUrl(window.location));
export const buildUrl = (keys?: string | string[], values?: key | key[]): string | null => {
    if (!values || !keys) return null;

    let url = getBaseUrl(window.location);

    typeof keys !== 'object'
        ? (url = `${url}?${keys}=${values}`)
        : keys.forEach((key, index) => {
              if (values[index] !== null) url = url.concat(`${index === 0 ? '?' : '&'}${key}=${values[index]}`);
          });

    console.log({ url });

    return url;
};

export const useUrlId = (
    idName: string | string[],
    window: any,
): [key | key[], (value: key | key[]) => void, () => void] => {
    const [getId, setId] = React.useState<key | key[]>(null);

    React.useEffect(() => {
        return typeof idName === 'object'
            ? setId(idName.map((x) => getQueryParam(x.toLocaleLowerCase(), window.location.href.toLocaleLowerCase())))
            : setId(getQueryParam(idName.toLocaleLowerCase(), window.location.href.toLocaleLowerCase()));
    }, [idName, window.location]);

    React.useEffect(() => {
        getId !== null && window.history.pushState(null, null, buildUrl(idName, getId));
    }, [idName, window.location, window.history, getId]);

    const reset = (): void => {
        resetBaseUrl(window);
        setId(null);
    };

    return [getId, setId, reset];
};
