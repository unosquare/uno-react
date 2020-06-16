import * as React from 'react';
import { useStateForModel } from './useStateForModel';

export function useStateForModelWithLoading<T>(
    effect: () => Promise<any>,
    initialValue: T,
    inputs: React.DependencyList,
): [T, boolean, (event: any) => void] {
    const [getter, handleChange] = useStateForModel<T>(initialValue);
    const [isLoading, setIsLoading] = React.useState(true);
    let _isMounted = false;

    React.useEffect(() => {
        _isMounted = true;
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
    }, inputs || []);

    return [getter, isLoading, handleChange];
}
