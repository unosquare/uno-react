import * as React from 'react';

export function useToggleStateForField(defaultValue) {
    const [getField, setField] = React.useState(defaultValue);

    const toggleField = () => setField(!getField);

    const changeHandler = ({ target }) => {
        if (target) {
            toggleField();
        }
    };

    return [getField, changeHandler, toggleField];
}