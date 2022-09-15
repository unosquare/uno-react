export const valueToResponseType = <T>(value: T): Promise<Response> =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(value),
    } as Response);

export const valueToResponse = (value: Record<string, unknown>): Promise<Response> => valueToResponseType(value);
