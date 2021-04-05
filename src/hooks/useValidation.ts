import { useCallback, useState } from 'react';
import useEffectWithDebounce from './useEffectWithDebounce';

export type BasicTypes = string | number | boolean | Record<string, unknown>;

export const useValidation = (
    validation: (propName: string, prop: BasicTypes, model: Record<string, BasicTypes>) => string,
    value: Record<string, BasicTypes>,
    debounce = 100,
    disabledHasChange = false,
): [boolean, Record<string, string>] => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isValid, setIsValid] = useState(false);
    const [hasChanged, setHasChanged] = useState<Record<string, boolean>>({});

    const effect = useCallback(() => {
        const _hasChanged = { ...hasChanged };
        const currentErrors = Object.keys(value).reduce((last: Record<string, string>, current: string) => {
            const error = validation(current, value[current], value);

            if (disabledHasChange) {
                last[current] = error;
            } else {
                if (error) {
                    last[current] = error;
                    _hasChanged[current] = true;
                } else {
                    last[current] = !_hasChanged[current] ? '' : error;
                }

                if (!_hasChanged[current]) {
                    _hasChanged[current] = true;
                    last[current] = error;
                }
            }

            return last;
        }, {});

        setHasChanged(_hasChanged);
        const _isValid =
            !Object.keys(currentErrors).some((x) => currentErrors[x]) &&
            (disabledHasChange ||
                !Object.keys(value).some((x) => (_hasChanged[x] === undefined ? false : !_hasChanged[x])));

        setErrors(currentErrors);
        setIsValid(_isValid);
    }, [hasChanged, value, validation, disabledHasChange]);

    useEffectWithDebounce(effect, debounce);

    return [isValid, errors];
};
