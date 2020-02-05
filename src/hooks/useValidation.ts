import { useEffect, useState } from 'react';
import { useStateForModel } from './useStateForModel';

export const useValidation = (
    fn: (propName: string, prop: any, model: {}) => string,
    value: Record<string, any>
  ): [boolean, Record<string, string>] => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isValid, setIsValid] = useState(true);
    const [model, setModel] = useStateForModel(value);
    const [hasChanged, setHasChanged] = useState<Record<string, boolean>>({});
  
    useEffect(() => {
      let _hasChanged = { ...hasChanged };
      const errors = Object.keys(model).reduce(
        (last: Record<string, string>, current: string) => {
          const error = fn(current, value[current], value);
  
          if (!error) {
            last[current] = "";
            _hasChanged[current] = true;
          } else {
            last[current] = !_hasChanged[current] ? "" : error;
          }
  
          if (!_hasChanged[current] && value[current] !== model[current]) {
            _hasChanged[current] = true;
            last[current] = error;
          }
  
          return last;
        },
        {}
      );
  
      setHasChanged(_hasChanged);
      const _isValid =
        !Object.keys(errors).some(x => errors[x]) &&
        !Object.keys(model).some(x => !_hasChanged[x]);
  
      setErrors(errors);
      setIsValid(_isValid);
    }, [value]);
  
    return [isValid, errors];
  };