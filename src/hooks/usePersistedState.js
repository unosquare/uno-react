import * as React from 'react';

function resolveType(value) {
    return typeof value === 'object' 
    ? JSON.stringify(value)
    : value;
}

export function usePersistedState(defaultValue, keyName) {
    const [getter, setter] = React.useState(defaultValue);

    React.useEffect(() => {
        if (localStorage[keyName]) {
            setter(localStorage.getItem(keyName));
        }
    }, []);

    const setterWithUpdateLocalStorage = value => {
        setter(value);
        localStorage.setItem(keyName, resolveType(value));
    };

    return [getter, setterWithUpdateLocalStorage];
}