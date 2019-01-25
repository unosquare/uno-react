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

function defaultResponseResolver(_x) {
  return _defaultResponseResolver.apply(this, arguments);
}

function _defaultResponseResolver() {
  _defaultResponseResolver = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(response) {
    var responseBody, responseJson;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return response.text();

          case 2:
            responseBody = _context2.sent;
            responseJson = responseBody ? JSON.parse(responseBody) : {};
            _context2.t0 = response.status;
            _context2.next = _context2.t0 === 401 ? 7 : _context2.t0 === 200 ? 8 : _context2.t0 === 204 ? 8 : _context2.t0 === 400 ? 9 : _context2.t0 === 500 ? 9 : _context2.t0 === 404 ? 10 : 11;
            break;

          case 7:
            throw new Error(responseJson && responseJson.error_description ? String(responseJson.error_description) : 'The token is invalid/expired');

          case 8:
            return _context2.abrupt("return", responseJson);

          case 9:
            return _context2.abrupt("return", {
              error: responseJson.Message
            });

          case 10:
            return _context2.abrupt("return", {
              error: responseJson
            });

          case 11:
            return _context2.abrupt("return", {
              error: 'Something went wrong, please try again'
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _defaultResponseResolver.apply(this, arguments);
}

function getRequest(url, accessToken, requestMethod, requestBody, headersResolver) {
  var init = {
    body: requestBody ? requestBody : null,
    headers: headersResolver(url, accessToken),
    method: requestMethod
  };
  return new Request(url, init);
}

function requestController(_x2, _x3, _x4, _x5, _x6) {
  return _requestController.apply(this, arguments);
}

function _requestController() {
  _requestController = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(url, accessToken, requestMethod, requestBody, options) {
    var request, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            request = getRequest(url, accessToken, requestMethod, requestBody, options.headersResolver);
            _context3.next = 3;
            return fetch(request);

          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return options.responseResolver(response);

          case 6:
            return _context3.abrupt("return", _context3.sent);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _requestController.apply(this, arguments);
}

var defaultOptions = {
  headersResolver: defaultHeadersResolver,
  responseResolver: defaultResponseResolver
};

function createFetchController(options) {
  options = Object.assign({}, defaultOptions, options);
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(url, accessToken, requestMethod, requestBody) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", requestController(url, accessToken, requestMethod, requestBody, options));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x7, _x8, _x9, _x10) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}