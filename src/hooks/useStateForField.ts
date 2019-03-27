import * as React from 'react';

export function useStateForField(defaultValue: any) {
    const [getField, setField] = React.useState(defaultValue);

    const changeHandler = ({ target }) => {
        if (!target) {
            return;
        }

        const { value } = target;
        setField(value);
    };

    return [getField, changeHandler, setField];
}
