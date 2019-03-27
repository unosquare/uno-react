"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.asyncOnEnterKey = exports.onEnterKey = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var onEnterKey = function onEnterKey(callback) {
  return function (ev) {
    if (ev.keyCode === 13) {
      callback();
    }
  };
};

exports.onEnterKey = onEnterKey;

var asyncOnEnterKey = function asyncOnEnterKey(callback) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ev) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(ev.keyCode === 13)) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return callback();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.asyncOnEnterKey = asyncOnEnterKey;