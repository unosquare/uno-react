import * as React from 'react';
import { useStateForModel } from './useStateForModel';
import { useToggle } from './useToggle';

export function useApiForm(
    datasource: string | Request | (() => Promise<Response>),
    transform?: (responseObject: object) => object,
) {
    const [getter, setter] = useStateForModel({});
    const [isLoading, toggleIsLoading] = useToggle(true);
    const [error, toggleError] = useToggle(false);

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
                    setter(transform ? transform(y) : y);
                    toggleIsLoading();
                });
            } else {
                toggleError();
                toggleIsLoading();
            }
        });
    }, []);

    return [getter, setter, isLoading, error];
}
