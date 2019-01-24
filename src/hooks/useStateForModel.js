import * as React from 'react';

export default function useStateForModel(initialValue) {
  const [getter, setter] = React.useState(initialValue);

  const handleChange = event => {
    if (event.target) {
      const {
        name,
        value
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