import * as React from 'react';

function useEffectWithLoading<T>(effect: () => Promise<any>, initialValue: T) {
    const [getter, setter] = React.useState(initialValue);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        let _isMounted = true;
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
    }, [effect]);

    return [getter, isLoading];
}

export default useEffectWithLoading;
