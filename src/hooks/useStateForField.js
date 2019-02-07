import * as React from 'react';
import { TextField } from '@material-ui/core';

export function useStateForField(defaultValue) {
    const [getField, setField] = React.useState(defaultValue);

    const changeHandler = ({ target }) => {
        const { value } = target;
        setField(value);
    };

    return [getField, changeHandler, setField];
}
const [getField, changeHandler] = useStateForField(defaultValue);
<TextField
onchange={changeHandler}/>
