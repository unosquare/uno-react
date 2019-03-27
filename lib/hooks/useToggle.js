import * as React from 'react';
export function useToggle(defaultValue) {
    const [getField, setField] = React.useState(defaultValue);
    const toggleField = () => setField(!getField);
    return [getField, toggleField];
}
