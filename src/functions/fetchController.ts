function defaultHeadersResolver(url: string, accessToken: string) {
    const headers = new Headers();

    if (url === '/api/token') {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    } else {
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
}

async function defaultResponseResolver(response: Response) {
    const responseBody = await response.text();
    const responseJson = responseBody ? JSON.parse(responseBody) : {};

    switch (response.status) {
        case 401:
            throw new Error(responseJson && responseJson.error_description ?
                String(responseJson.error_description) :
                'The token is invalid/expired');
        case 200:
        case 204:
            return responseJson;
        case 400:
        case 500:
            return {
                error: responseJson.Message,
            };
        case 404:
            return {
                error: responseJson,
            };
        default:
            return {
                error: 'Something went wrong, please try again',
            };
    }
}

function getRequest(url: string, accessToken: string, requestMethod: string, requestBody: any, headersResolver: any) {
    const init = {
        body: requestBody ? requestBody : null,
        headers: headersResolver(url, accessToken),
        method: requestMethod,
    };

    return new Request(url, init);
}

export async function requestController(
    url: string,
    accessToken: string,
    requestMethod: string,
    requestBody: any,
    options: any) {
    const request = getRequest(url, accessToken, requestMethod, requestBody, options.headersResolver);
    const response = await fetch(request);

    return await options.responseResolver(response);
}

const defaultOptions = {
    headersResolver: defaultHeadersResolver,
    responseResolver: defaultResponseResolver,
};

export function createFetchController(options: any) {
    options = Object.assign({}, defaultOptions, options);

    return async (url: string, accessToken: string, requestMethod: string, requestBody: any) =>
        requestController(url, accessToken, requestMethod, requestBody, options);
}
