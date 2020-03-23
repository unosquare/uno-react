import { useState } from 'react';
import { useEffectWithDebounce } from './useEffectWithDebounce';

export const useValidation = (
    validation: (propName: string, prop: any, model: {}) => string,
    value: Record<string, any>,
    debounce = 100,
    disabledHasChange = false,
): [boolean, Record<string, string>] => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isValid, setIsValid] = useState(false);
    const [hasChanged, setHasChanged] = useState<Record<string, boolean>>({});

    useEffectWithDebounce(
        () => {
            const _hasChanged = { ...hasChanged };
            const errors = Object.keys(value).reduce((last: Record<string, string>, current: string) => {
                const error = validation(current, value[current], value);

                if (disabledHasChange) {
                    last[current] = error;
                } else {
                    if (!error) {
                        last[current] = '';
                        _hasChanged[current] = true;
                    } else {
                        last[current] = !_hasChanged[current] ? '' : error;
                    }

                    if (!_hasChanged[current] && value[current] !== value[current]) {
                        _hasChanged[current] = true;
                        last[current] = error;
                    }
                }

                return last;
            }, {});

            setHasChanged(_hasChanged);
            const _isValid =
                !Object.keys(errors).some((x) => errors[x]) &&
                (disabledHasChange || !Object.keys(value).some((x) => !_hasChanged[x]));

            setErrors(errors);
            setIsValid(_isValid);
        },
        debounce,
        [value],
    );

    return [isValid, errors];
};
