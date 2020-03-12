const valueToResponse = (value: any): Promise<Response> =>
    new Promise<Response>(resolve => resolve({ ok: true, json: () => new Promise(r => r(value)) } as Response));

const c = (): Promise<Response> => valueToResponse('HOLA');

c().then(r => {
    if (r.ok) r.json().then(persona => console.log(persona));
});
