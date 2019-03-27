import * as React from 'react';
export function useToggle(defaultValue) {
    var _a = React.useState(defaultValue), getField = _a[0], setField = _a[1];
    var toggleField = function () { return setField(!getField); };
    return [getField, toggleField];
}
