import { FormStatus } from './useApiForm';
import { useApiFormWithValidation } from './useApiFormWithValidation';

export function useOptimizedFormModel<T>(
    getEntity: () => Promise<Response>,
    transform: (responseObject: Record<string, unknown>) => Record<string, unknown>,
): [T, (value) => void, FormStatus, () => Partial<T>] {
    const [entity, , status] = useApiFormWithValidation<T>(getEntity, () => '', transform);

    let flyingChanges = {} as Partial<T>;
    const onPropChange = (event) => {
        if (event.target) {
            const { name, value } = event.target as any;
            flyingChanges = { ...flyingChanges, [name]: value };
        } else {
            flyingChanges = { ...flyingChanges, ...event };
        }
    };

    return [entity, onPropChange, status, () => flyingChanges];
}
