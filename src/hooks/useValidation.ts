import { useEffect, useState } from 'react';

export const useValidation = 
    (fn: (string, any, {}) => string , value: any) => {
    
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);
  
    useEffect(() => {
      const errors = Object.keys(value).reduce(
        (last, current) => {
          last[current] = fn(current, value[current], value);
          return last;
        }, {});
  
      const _isValid = !Object.keys(errors).some(x => errors[x]);
  
      setErrors(errors);
      setIsValid(_isValid);
  
    }, [value]); 

    return [errors, isValid];
};