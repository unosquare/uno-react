export const valueToResponse = (value: any): Promise<Response> =>
    new Promise<Response>(resolve =>
        resolve({
            ok: true,
            json: () => new Promise(r => r(value)),
        } as Response),
    );
