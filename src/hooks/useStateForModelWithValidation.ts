import * as React from 'react';
import { useEffectWithDebounce } from './useEffectWithDebounce';

export function useStateForModelWithValidation<T>(
    initialValue: T,
    validation: (propName: string, prop: any, model: {}) => string,
    debounce = 100,
): [T, (event: any) => void, boolean, Record<string, string>] {
    const [getter, setter] = React.useState(initialValue);
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isValid, setIsValid] = React.useState(false);

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

    useEffectWithDebounce(
        () => {
            const errors = Object.keys(getter as {}).reduce((last: Record<string, string>, current: string) => {
                const error = validation(current, getter[current], getter);
                last[current] = error;
                return last;
            }, {});

            setErrors(errors);
            setIsValid(!Object.keys(errors).some(x => errors[x]));
        },
        debounce,
        [getter],
    );

    return [getter, handleChange, isValid, errors];
}
