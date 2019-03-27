import * as React from 'react';
export function useStateForModel(initialValue) {
    const [getter, setter] = React.useState(initialValue);
    const handleChange = event => {
        if (event.target) {
            const { name, value } = event.target;
            setter(Object.assign({}, getter, { [name]: value }));
        }
        else {
            setter(Object.assign({}, getter, event));
        }
    };
    return [getter, handleChange];
}
