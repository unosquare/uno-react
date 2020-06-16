export const valueToResponse = (value: Record<string, unknown>): Promise<Response> =>
    new Promise<Response>((resolve) =>
        resolve({
            ok: true,
            json: () => new Promise((r) => r(value)),
        } as Response),
    );
