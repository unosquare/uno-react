import * as React from 'react';
import { useEffectWithDebounce } from './useEffectWithDebounce';
import { useStateForModelWithValidation } from './useStateForModelWithValidation';
import { FormStatus } from './useApiForm';

export function useApiFormWithValidation<T>(
    dataSource: string | Request | (() => Promise<Response>),
    validation: (propName: string, prop: any, model: T) => string,
    transform?: (responseObject: Record<string, unknown>) => Record<string, unknown>,
): [T, (event: any) => void, FormStatus, Record<string, string>, (e: Record<string, string>) => void] {
    const [getter, setter, isValid, errors, setErrors] = useStateForModelWithValidation<T>({} as T, validation, 300);
    const [status, setStatus] = React.useState(FormStatus.Loading);

    React.useEffect(() => {
        if (!dataSource) return;

        setStatus(FormStatus.Loading);
        const data = typeof dataSource === 'function' ? dataSource() : fetch(dataSource);

        if (!data) return;

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

    return [getter, setter, status, errors, setErrors];
}
