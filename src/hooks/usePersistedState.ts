import * as React from 'react';

function usePersistedState(localStorage: any, defaultValue: any, keyName: string): [any, React.Dispatch<any>] {
    const [getter, setter] = React.useState(defaultValue);

    const setterWithUpdateLocalStorage = React.useCallback(
        (value: any): void => {
            setter(value);
            localStorage.setItem(keyName, JSON.stringify(value));
        },
        [keyName, localStorage],
    );

    React.useEffect(() => {
        if (localStorage.getItem(keyName) !== null) {
            setter(JSON.parse(localStorage.getItem(keyName)));
        } else {
            setterWithUpdateLocalStorage(defaultValue);
        }
    }, [localStorage, defaultValue, keyName, setterWithUpdateLocalStorage]);

    return [getter, setterWithUpdateLocalStorage];
}

export default usePersistedState;
