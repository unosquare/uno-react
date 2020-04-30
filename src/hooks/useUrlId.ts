import * as React from 'react';
import { getQueryParam } from 'uno-js';

export type key = string | number | null;

export const useUrlId = (idName: string, window: any): [key, (value: key) => void, () => void, () => void] => {
    const [getId, setId] = React.useState<key>(null);

    React.useEffect(() => {
        setId(getQueryParam(idName, window.location.href));
    }, [idName, window.location]);

    const getBaseUrl = (): void => window.location.href.split('?')[0];
    const reset = (): void => window.history.pushState('', '', getBaseUrl());
    const complete = (): void => window.history.pushState('', '', `${getBaseUrl()}?${idName}=${getId}`);

    return [getId, setId, reset, complete];
};
