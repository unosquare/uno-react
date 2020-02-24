import * as React from 'react';

export function useStateForModel<T>(initialValue: T): [T, (event: any) => void] {
    const [getter, setter] = React.useState(initialValue);

    const handleChange = (event: any): void => {
        if (event.target) {
            const { name, value } = event.target;

            setter({
                ...getter,
                [name]: value,
            });
        } else {
            setter({
                ...getter,
                ...event,
            });
        }
    };

    return [getter, handleChange];
}
