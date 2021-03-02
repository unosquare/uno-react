import * as React from 'react';
import { useStateForModel } from './useStateForModel';

export function useStateForModelWithLoading<T>(
    effect: () => Promise<any>,
    initialValue: T,
    inputs: React.DependencyList,
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
    }, [effect, handleChange, ...inputs]);

    return [getter, isLoading, handleChange];
}
