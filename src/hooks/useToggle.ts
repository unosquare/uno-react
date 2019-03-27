import * as React from 'react';

export function useToggle(defaultValue: any) {
    const [getField, setField] = React.useState(defaultValue);

    const toggleField = () => setField(!getField);

    return [getField, toggleField];
}
