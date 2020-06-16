import { useApiFormWithValidation } from './useApiFormWithValidation';

export enum FormStatus {
    Valid,
    Loading,
    ErrorLoading,
    ErrorValidation,
    Saving,
}

export function useApiForm<T>(
    dataSource: string | Request | (() => Promise<Response>),
    transform?: (responseObject: Record<string, unknown>) => Record<string, unknown>,
): [T, (event: any) => void, boolean, boolean] {
    const [getter, setter, status] = useApiFormWithValidation<T>(dataSource, () => '', transform);

    return [getter, setter, status === FormStatus.Loading, status == FormStatus.ErrorLoading];
}
