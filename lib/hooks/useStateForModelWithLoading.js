import * as React from 'react';
import { useStateForModel } from './useStateForModel';
export function useStateForModelWithLoading(effect, initialValue, inputs) {
    var _a = useStateForModel(initialValue), getter = _a[0], handleChange = _a[1];
    var _b = React.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _isMounted = false;
    React.useEffect(function () {
        _isMounted = true;
        effect().then(function (resp) {
            if (_isMounted) {
                handleChange(resp);
                setIsLoading(false);
            }
        });
        return (function () { return _isMounted = false; });
    }, inputs || []);
    return [getter, isLoading, handleChange];
}
