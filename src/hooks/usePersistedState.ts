import * as React from 'react';

export function usePersistedState(defaultValue: any, keyName: string): [any, React.Dispatch<any>] {
    const [getter, setter] = React.useState(defaultValue);

    const setterWithUpdateLocalStorage = (value: any): void => {
        setter(value);
        localStorage.setItem(keyName, JSON.stringify(value));
    };

    React.useEffect(() => {
        if (localStorage[keyName]) {
            setter(JSON.parse(localStorage.getItem(keyName)));
        } else {
            setterWithUpdateLocalStorage(defaultValue);
        }
    }, []);

    return [getter, setterWithUpdateLocalStorage];
}
