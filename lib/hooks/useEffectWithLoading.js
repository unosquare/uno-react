import * as React from 'react';
export function useEffectWithLoading(effect, initialValue, inputs) {
    const [getter, setter] = React.useState(initialValue);
    const [isLoading, setIsLoading] = React.useState(true);
    let _isMounted = false;
    React.useEffect(() => {
        _isMounted = true;
        effect().then(resp => {
            if (_isMounted) {
                setter(resp);
                setIsLoading(false);
            }
        });
        return (() => _isMounted = false);
    }, inputs || []);
    return [getter, isLoading];
}
