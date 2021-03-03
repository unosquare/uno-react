import * as React from 'react';
import { getQueryParam } from 'uno-js';

export type key = string | number | null;

export const getBaseUrl = (windowLocation: any): string => windowLocation.href.split('?')[0];
export const resetBaseUrl = (window: any): void => window.history.pushState('', '', getBaseUrl(window.location));

export const useUrlId = (idName: string, window: any): [key, (value: key) => void, () => void] => {
    const [getId, setId] = React.useState<key>(null);

    React.useEffect(() => {
        setId(getQueryParam(idName.toLocaleLowerCase(), window.location.href.toLocaleLowerCase()));
    }, [idName, window.location]);

    React.useEffect(() => {
        if (getId) window.history.pushState('', '', `${getBaseUrl(window.location)}?${idName}=${getId}`);
    }, [idName, window.location, window.history, getId]);

    const reset = (): void => {
        resetBaseUrl(window);
        setId(null);
    };

    return [getId, setId, reset];
};
