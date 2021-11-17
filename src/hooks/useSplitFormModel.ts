import * as React from 'react';
import FormStatus from './FormStatus';
import useStateForModelWithValidation, { ValidationFunc } from './useStateForModelWithValidation';

function useSplitFormModel<T extends P, P>(
    initModel: P,
    refEntity: T,
    validation: ValidationFunc<T>,
    addChange: (value: any) => void,
    status: FormStatus,
): [P, (value: any) => void, boolean, Record<string, string>] {
    const [model, onChange, isValid, errors] = useStateForModelWithValidation<P>(initModel, validation);
    const update = (value: any) => {
        addChange(value);
        onChange(value);
    };
   

    React.useEffect(() => {
        if (status === FormStatus.Valid) {
            const changes = {} as P;
            for (const i in initModel) {
                changes[i] = refEntity[i];
            }

            onChange(changes);
        }
    }, [status, refEntity]);

    return [model, update, isValid, errors];
}

export default useSplitFormModel;
