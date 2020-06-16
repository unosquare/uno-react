import * as React from 'react';

export function useEffectWithLoading<T>(effect: () => Promise<any>, initialValue: T, inputs: React.DependencyList) {
    const [getter, setter] = React.useState(initialValue);
    const [isLoading, setIsLoading] = React.useState(true);
    let _isMounted = false;

    React.useEffect(() => {
        _isMounted = true;
        setIsLoading(true);

        effect().then((resp: any) => {
            if (_isMounted) {
                setter(resp);
                setIsLoading(false);
            }
        });

        return (): void => {
            _isMounted = false;
        };
    }, inputs || []);

    return [getter, isLoading];
}
