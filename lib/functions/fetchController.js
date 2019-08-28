"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function defaultHeadersResolver(url, accessToken) {
    const headers = new Headers();
    if (url === '/api/token') {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    else {
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
}
function defaultResponseResolver(response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseBody = yield response.text();
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
    });
}
function getRequest(url, accessToken, requestMethod, requestBody, headersResolver) {
    const init = {
        body: requestBody ? requestBody : null,
        headers: headersResolver(url, accessToken),
        method: requestMethod,
    };
    return new Request(url, init);
}
function requestController(url, accessToken, requestMethod, requestBody, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = getRequest(url, accessToken, requestMethod, requestBody, options.headersResolver);
        const response = yield fetch(request);
        return yield options.responseResolver(response);
    });
}
exports.requestController = requestController;
const defaultOptions = {
    headersResolver: defaultHeadersResolver,
    responseResolver: defaultResponseResolver,
};
function createFetchController(options) {
    options = Object.assign({}, defaultOptions, options);
    return (url, accessToken, requestMethod, requestBody) => __awaiter(this, void 0, void 0, function* () { return requestController(url, accessToken, requestMethod, requestBody, options); });
}
exports.createFetchController = createFetchController;
//# sourceMappingURL=fetchController.js.map