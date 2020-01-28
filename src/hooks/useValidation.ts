import { useEffect, useState } from 'react';

export const useValidation = (fn: (string, any, {}) => string , value: any): [boolean, {}] => {
    const [initialValue, _] = useState(value);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);
  
    useEffect(() => {
      const errors = Object.keys(value).reduce((last, current) => {
          const hasChanged = initialValue[current] != value[current];
          last[current] = !hasChanged ? '' : fn(current, value[current], value);

          return last;
        }, {});

      const _isValid = !Object.keys(errors).some(x => errors[x]);

      setErrors(errors);
      setIsValid(_isValid);
  
    }, [value]); 

    return [isValid, errors];
};
