import * as React from 'react';

export function useStateForModel(initialValue: any) {
  const [getter, setter] = React.useState(initialValue);

  const handleChange = (event: any) => {
    if (event.target) {
      const {
        name,
        value,
      } = event.target;

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
