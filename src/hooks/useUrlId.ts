import * as React from 'react';
import { getQueryParam } from 'uno-js';

export const useUrlId = (
    idName: string,
    window: any,
): [number | string, (event: any) => void, () => void, () => void] => {
    const [getId, setId] = React.useState(null);

    React.useEffect(() => {
        setId(getQueryParam(idName, window.location.href));
    }, [idName, window.location]);

    const getBaseUrl = () => window.location.href.split('?')[0];
    const reset = () => window.history.pushState('', '', getBaseUrl());
    const complete = () => window.history.pushState('', '', `${getBaseUrl()}?${idName}=${getId}`);

    return [getId, setId, reset, complete];
};
