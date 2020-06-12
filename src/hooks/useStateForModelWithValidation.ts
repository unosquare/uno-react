import * as React from 'react';
import { useEffectWithDebounce } from './useEffectWithDebounce';

export type ValidationFunc = (propName: string, propValue: any, model: {}) => string;

export const getErrors = (getter: any, validation: ValidationFunc) =>
    Object.keys(getter as {}).reduce((last: Record<string, string>, current: string) => {
        last[current] = validation(current, getter[current], getter);
        return last;
    }, {});

export function useStateForModelWithValidation<T>(
    initialValue: T,
    validation: ValidationFunc,
    debounce = 100,
): [T, (event: any) => void, boolean, Record<string, string>, (event: any) => void] {
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

    useEffectWithDebounce(() => setErrors(getErrors(getter, validation)), debounce, [getter]);

    return [getter, handleChange, !Object.keys(errors).some((x) => errors[x]), errors, setErrors];
}
