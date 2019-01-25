"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestController = requestController;
exports.createFetchController = createFetchController;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function defaultHeadersResolver(url, accessToken) {
  var headers = new Headers();

  if (url === '/api/token') {
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  } else {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', "Bearer ".concat(accessToken));
  }

  return headers;
}

function getRequest(url, accessToken, requestMethod, requestBody, headersResolver) {
  var init = {
    body: requestBody ? requestBody : null,
    headers: headersResolver(url, accessToken),
    method: requestMethod
  };
  return new Request(url, init);
}

function requestController(_x, _x2, _x3, _x4, _x5) {
  return _requestController.apply(this, arguments);
}

function _requestController() {
  _requestController = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url, accessToken, requestMethod, requestBody, options) {
    var request, response, responseBody, responseJson;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            request = getRequest(url, accessToken, requestMethod, requestBody, options.headersResolver);
            _context.next = 3;
            return fetch(request);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.text();

          case 6:
            responseBody = _context.sent;
            responseJson = responseBody ? JSON.parse(responseBody) : {};
            _context.t0 = response.status;
            _context.next = _context.t0 === 401 ? 11 : _context.t0 === 200 ? 12 : _context.t0 === 204 ? 12 : _context.t0 === 400 ? 13 : _context.t0 === 500 ? 13 : _context.t0 === 404 ? 14 : 15;
            break;

          case 11:
            throw new Error(responseJson && responseJson.error_description ? String(responseJson.error_description) : 'The token is invalid/expired');

          case 12:
            return _context.abrupt("return", responseJson);

          case 13:
            return _context.abrupt("return", {
              error: responseJson.Message
            });

          case 14:
            return _context.abrupt("return", {
              error: responseJson
            });

          case 15:
            return _context.abrupt("return", {
              error: 'Something went wrong, please try again'
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _requestController.apply(this, arguments);
}

function createFetchController(options) {
  options = Object.assign({}, options, {
    headersResolver: defaultHeadersResolver
  });
  return function (url, accessToken, requestMethod, requestBody) {
    return requestController(url, accessToken, requestMethod, requestBody, options);
  };
}