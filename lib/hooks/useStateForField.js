import * as React from 'react';
export function useStateForField(defaultValue) {
    var _a = React.useState(defaultValue), getField = _a[0], setField = _a[1];
    var changeHandler = function (_a) {
        var target = _a.target;
        if (!target) {
            return;
        }
        var value = target.value;
        setField(value);
    };
    return [getField, changeHandler, setField];
}
