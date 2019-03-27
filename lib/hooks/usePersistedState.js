import * as React from 'react';
export function usePersistedState(defaultValue, keyName) {
    var _a = React.useState(defaultValue), getter = _a[0], setter = _a[1];
    React.useEffect(function () {
        if (localStorage[keyName]) {
            setter(JSON.parse(localStorage.getItem(keyName)));
        }
        else {
            setterWithUpdateLocalStorage(defaultValue);
        }
    }, []);
    var setterWithUpdateLocalStorage = function (value) {
        setter(value);
        localStorage.setItem(keyName, JSON.stringify(value));
    };
    return [getter, setterWithUpdateLocalStorage];
}
