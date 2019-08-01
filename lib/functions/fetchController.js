"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function defaultHeadersResolver(url, accessToken) {
    var headers = new Headers();
    if (url === '/api/token') {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    else {
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + accessToken);
    }
    return headers;
}
function defaultResponseResolver(response) {
    return __awaiter(this, void 0, void 0, function () {
        var responseBody, responseJson;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, response.text()];
                case 1:
                    responseBody = _a.sent();
                    responseJson = responseBody ? JSON.parse(responseBody) : {};
                    switch (response.status) {
                        case 401:
                            throw new Error(responseJson && responseJson.error_description ?
                                String(responseJson.error_description) :
                                'The token is invalid/expired');
                        case 200:
                        case 204:
                            return [2 /*return*/, responseJson];
                        case 400:
                        case 500:
                            return [2 /*return*/, {
                                    error: responseJson.Message,
                                }];
                        case 404:
                            return [2 /*return*/, {
                                    error: responseJson,
                                }];
                        default:
                            return [2 /*return*/, {
                                    error: 'Something went wrong, please try again',
                                }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getRequest(url, accessToken, requestMethod, requestBody, headersResolver) {
    var init = {
        body: requestBody ? requestBody : null,
        headers: headersResolver(url, accessToken),
        method: requestMethod,
    };
    return new Request(url, init);
}
function requestController(url, accessToken, requestMethod, requestBody, options) {
    return __awaiter(this, void 0, void 0, function () {
        var request, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    request = getRequest(url, accessToken, requestMethod, requestBody, options.headersResolver);
                    return [4 /*yield*/, fetch(request)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, options.responseResolver(response)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.requestController = requestController;
var defaultOptions = {
    headersResolver: defaultHeadersResolver,
    responseResolver: defaultResponseResolver,
};
function createFetchController(options) {
    var _this = this;
    options = Object.assign({}, defaultOptions, options);
    return function (url, accessToken, requestMethod, requestBody) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, requestController(url, accessToken, requestMethod, requestBody, options)];
    }); }); };
}
exports.createFetchController = createFetchController;
//# sourceMappingURL=fetchController.js.map