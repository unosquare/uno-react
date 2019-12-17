import * as React from 'react';

export function useToggle(defaultValue: boolean): [boolean, React.Dispatch<boolean>] {
    const [getField, setField] = React.useState(defaultValue);

    const toggleField = (): void => setField(!getField);

    return [getField, toggleField];
}
