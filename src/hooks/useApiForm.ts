import * as React from 'react';
import { useStateForModel } from './useStateForModel';
import { useToggle } from './useToggle';
import { useValidation } from './useValidation';

export function useApiFormWithValidation<T>(
    dataSource: string | Request | (() => Promise<Response>),
    validation: (propName: string, prop: any, model: {}) => string,
    transform?: (responseObject: object) => object,
): [T, (event: any) => void, boolean, boolean, boolean, Record<string, string>] {
    const [getter, setter] = useStateForModel<T>({} as T);
    const [isLoading, toggleIsLoading] = useToggle(true);
    const [error, toggleError] = useToggle(false);
    const [isValid, errors] = useValidation(validation, getter, 100, true);

    React.useEffect(() => {
        const data = typeof dataSource === 'function' ? dataSource() : fetch(dataSource);

        data.then((response: Response) => {
            if (response.ok) {
                response.json().then((y: any) => {
                    setter(transform ? transform(y) : y);
                    toggleIsLoading();
                });
            } else {
                toggleError();
                toggleIsLoading();
            }
        });
    }, []);

    return [getter, setter, isLoading, error, isValid, errors];
}

export function useApiForm<T>(
    dataSource: string | Request | (() => Promise<Response>),
    transform?: (responseObject: object) => object,
): [T, (event: any) => void, boolean, boolean] {
    const [getter, setter, isLoading, error] = useApiFormWithValidation<T>(dataSource, () => '', transform);

    return [getter, setter, isLoading, error];
}
