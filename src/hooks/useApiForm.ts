import * as React from 'react';
import { useStateForModel } from './useStateForModel';
import { useValidation } from './useValidation';

export enum FormStatus {
    Valid,
    Loading,
    ErrorLoading,
    ErrorValidation,
}

export function useApiFormWithValidation<T>(
    dataSource: string | Request | (() => Promise<Response>),
    validation: (propName: string, prop: any, model: {}) => string,
    transform?: (responseObject: object) => object,
): [T, (event: any) => void, FormStatus, Record<string, string>] {
    const [getter, setter] = useStateForModel<T>({} as T);
    const [status, setStatus] = React.useState(FormStatus.Valid);
    const [isValid, errors] = useValidation(validation, getter, 100, true);

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

    if (status !== FormStatus.Loading && status !== FormStatus.ErrorLoading) {
        setStatus(isValid ? FormStatus.Valid : FormStatus.ErrorValidation);
    }

    return [getter, setter, status, errors];
}

export function useApiForm<T>(
    dataSource: string | Request | (() => Promise<Response>),
    transform?: (responseObject: object) => object,
): [T, (event: any) => void, boolean, boolean] {
    const [getter, setter, status] = useApiFormWithValidation<T>(dataSource, () => '', transform);

    return [getter, setter, status === FormStatus.Loading, status == FormStatus.ErrorLoading];
}
