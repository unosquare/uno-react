import * as React from 'react';
import { useEffectWithDebounce } from './useEffectWithDebounce';
import { useStateForModelWithValidation } from './useStateForModelWithValidation';

export enum FormStatus {
    Valid,
    Loading,
    ErrorLoading,
    ErrorValidation,
    Saving,
}

export function useApiFormWithValidation<T>(
    dataSource: string | Request | (() => Promise<Response>),
    validation: (propName: string, prop: any, model: {}) => string,
    transform?: (responseObject: object) => object,
): [T, (event: any) => void, FormStatus, Record<string, string>] {
    const [getter, setter, isValid, errors] = useStateForModelWithValidation<T>({} as T, validation, 300);
    const [status, setStatus] = React.useState(FormStatus.Loading);

    React.useEffect(() => {
        setStatus(FormStatus.Loading);
        const data = typeof dataSource === 'function' ? dataSource() : fetch(dataSource);

        data.then((response: Response) => {
            if (response.ok) {
                response.json().then((y: any) => {
                    setter(transform ? transform(y) : y);
                    setStatus(isValid ? FormStatus.Valid : FormStatus.ErrorValidation);
                });
            } else {
                setStatus(FormStatus.ErrorLoading);
            }
        });
    }, [dataSource]);

    useEffectWithDebounce(
        () => {
            if (status !== FormStatus.Loading && status !== FormStatus.ErrorLoading) {
                setStatus(isValid ? FormStatus.Valid : FormStatus.ErrorValidation);
            }
        },
        300,
        [isValid, errors],
    );

    return [getter, setter, status, errors];
}

export function useApiForm<T>(
    dataSource: string | Request | (() => Promise<Response>),
    transform?: (responseObject: object) => object,
): [T, (event: any) => void, boolean, boolean] {
    const [getter, setter, status] = useApiFormWithValidation<T>(dataSource, () => '', transform);

    return [getter, setter, status === FormStatus.Loading, status == FormStatus.ErrorLoading];
}
