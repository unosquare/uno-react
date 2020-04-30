import * as React from 'react';
import { getQueryParam } from 'uno-js';

export type key = string | number | null;

export const getBaseUrl = (window: any): string => window.location.href.split('?')[0];
export const resetBaseUrl = (window: any): void => window.history.pushState('', '', getBaseUrl(window));

export const useUrlId = (idName: string, window: any): [key, (value: key) => void, () => void, () => void] => {
    const [getId, setId] = React.useState<key>(null);

    React.useEffect(() => {
        setId(getQueryParam(idName, window.location.href));
    }, [idName, window.location]);

    const complete = (): void => window.history.pushState('', '', `${getBaseUrl(window)}?${idName}=${getId}`);
    const reset = (): void => resetBaseUrl(window);
    
    return [getId, setId, reset, complete];
};
