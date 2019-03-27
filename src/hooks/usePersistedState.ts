import * as React from 'react';

export function usePersistedState(defaultValue: any, keyName: string) {
    const [getter, setter] = React.useState(defaultValue);

    React.useEffect(() => {
        if (localStorage[keyName]) {
            setter(JSON.parse(localStorage.getItem(keyName)));
        } else {
            setterWithUpdateLocalStorage(defaultValue);
        }
    }, []);

    const setterWithUpdateLocalStorage = (value: any) => {
        setter(value);
        localStorage.setItem(keyName, JSON.stringify(value));
    };

    return [getter, setterWithUpdateLocalStorage];
}
