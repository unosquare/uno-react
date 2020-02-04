import { useEffect, useState } from 'react';
import { useStateForModel } from './useStateForModel';

export const useValidation = (
    fn: (propName: string, prop: any, model: {}) => string,
    value: Record<string, any>,
): [Record<string, string>, boolean] => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isValid, setIsValid] = useState(true);
    const [model, setModel] = useStateForModel(value);
    const [flags, setFlags] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const errors = Object.keys(value).reduce((last: Record<string, string>, current: string) => {
            if (model[current] !== value[current] || flags[current]) {
                flags[current] = true;
                last[current] = fn(current, value[current], value);
            } else {
                flags[current] = false;
            }
            return last;
        }, {});

        setFlags(flags);

        const _isValid = !Object.keys(errors).some(x => errors[x]) && !Object.keys(flags).some(x => flags[x] === false);

        setErrors(errors);
        setIsValid(_isValid);
    }, [value]);

    return [errors, isValid];
};
