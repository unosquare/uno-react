import * as React from 'react';
import { useStateForModel } from './useStateForModel';

export function useApiForm(
    datasource: string | Request | (() => Promise<Response>),
    transform?: (responseObject: object) => object,
) {
    const [getter, setter] = useStateForModel({});
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        let data = null;
        if (typeof datasource === 'string' || datasource instanceof Request) {
            data = fetch(datasource);
        } else if (typeof datasource === 'function') {
            data = datasource();
        }

        data.then(x => {
            if (x.ok) {
                x.json().then(y => {
                    setter(transform ? transform(y) : y)
                    setIsLoading(false);
                });
            } else {
                setError(true);
                setIsLoading(false);
            }
        });
    }, []);

    return [getter, setter, isLoading, error];
}
