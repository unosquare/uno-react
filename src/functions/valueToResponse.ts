export const valueToResponseType = <T>(value: T): Promise<Response> =>
    new Promise<Response>((resolve) => {
        resolve({
            ok: true,
            json: () => new Promise((r) => r(value)),
        } as Response);
    });

export const valueToResponse = (value: Record<string, unknown>): Promise<Response> => valueToResponseType(value);
