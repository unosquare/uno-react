import * as React from 'react';
import useStateForModel from './useStateForModel';

function useStateForModelWithLoading<T>(
    effect: () => Promise<any>,
    initialValue: T,
): [T, boolean, (event: any) => void] {
    const [getter, handleChange] = useStateForModel<T>(initialValue);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        let _isMounted = true;
        setIsLoading(true);

        effect().then((resp: any) => {
            if (_isMounted) {
                handleChange(resp);
                setIsLoading(false);
            }
        });

        return (): void => {
            _isMounted = false;
        };
    }, [effect, handleChange]);

    return [getter, isLoading, handleChange];
}

export default useStateForModelWithLoading;
