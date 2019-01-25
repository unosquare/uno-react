import * as React from 'react';

export default function useToggleStateForField(defaultValue) {
    const [getField, setField] = React.useState(defaultValue);

    const changeHandler = ({ target }) => {
        if (target) {
            setField(!getField);
        }
    };

    return [getField, changeHandler];
}