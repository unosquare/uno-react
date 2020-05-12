import * as React from 'react';

export function useStateForField(defaultValue: any): [any, (event: any) => void, React.Dispatch<any>] {
    const [getField, setField] = React.useState(defaultValue);

    const changeHandler = ({ target }): void => {
        if (target) {
            setField(target.value);
        }
    };

    return [getField, changeHandler, setField];
}
