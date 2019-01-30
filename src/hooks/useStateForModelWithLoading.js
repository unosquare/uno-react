import * as React from 'react';
import { useStateForModel } from './useStateForModel';

export function useStateForModelWithLoading(effect, initialValue, inputs) {
    const [getter, handleChange] = useStateForModel(initialValue);
    const [isLoading, setIsLoading] = React.useState(true);
    let _isMounted = false;

    React.useEffect(() => {
        _isMounted = true;

        effect().then(resp => {
            if (_isMounted) {
                handleChange(resp);
                setIsLoading(false);
            }
        });

        return (() => _isMounted = false);
    }, inputs || []);

    return [getter, isLoading, handleChange];
}