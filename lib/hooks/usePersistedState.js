"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePersistedState = usePersistedState;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var React = _interopRequireWildcard(require("react"));

function resolveType(value) {
  return (0, _typeof2.default)(value) === 'object' ? JSON.stringify(value) : value;
}

function usePersistedState(defaultValue, keyName) {
  var _React$useState = React.useState(defaultValue),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      getter = _React$useState2[0],
      setter = _React$useState2[1];

  React.useEffect(function () {
    if (localStorage[keyName]) {
      setter(localStorage.getItem(keyName));
    }
  }, []);

  var setterWithUpdateLocalStorage = function setterWithUpdateLocalStorage(value) {
    setter(value);
    localStorage.setItem(keyName, resolveType(value));
  };

  return [getter, setterWithUpdateLocalStorage];
}