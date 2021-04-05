import * as React from 'react';
import useEffectWithDebounce from './useEffectWithDebounce';
import { BasicTypes } from './useValidation';

export type ValidationFunc<T> = (propName: string, propValue: BasicTypes, model: T) => string;

export function getErrors<T>(getter: T, validation: ValidationFunc<T>): Record<string, string> {
    return Object.keys(getter).reduce((last: Record<string, string>, current: string) => {
        last[current] = validation(current, getter[current], getter);
        return last;
    }, {});
}

function useStateForModelWithValidation<T>(
    initialValue: T,
    validation: ValidationFunc<T>,
    debounce = 100,
): [T, (event: any) => void, boolean, Record<string, string>, (e: Record<string, string>) => void] {
    const [getter, setter] = React.useState(initialValue);
    const [errors, setErrors] = React.useState(getErrors(getter, validation));

    const handleChange = (event: any): void => {
        if (event.target) {
            const { name, value } = event.target;

            setter({
                ...getter,
                [name]: value,
            });
        } else {
            setter({
                ...getter,
                ...event,
            });
        }
    };

    const effect = React.useCallback(() => {
        setErrors(getErrors(getter, validation));
    }, [getter]);

    useEffectWithDebounce(effect, debounce);

    const validateAndSetErrors = (e: Record<string, string>) => {
        if (e) {
            setErrors(e);
        }
    };

    return [getter, handleChange, !Object.keys(errors).some((x) => errors[x]), errors, validateAndSetErrors];
}

export default useStateForModelWithValidation;
