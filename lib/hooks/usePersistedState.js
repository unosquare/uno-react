"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePersistedState = usePersistedState;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

function usePersistedState(defaultValue, keyName) {
  var _React$useState = React.useState(defaultValue),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      getter = _React$useState2[0],
      setter = _React$useState2[1];

  React.useEffect(function () {
    if (localStorage[keyName]) {
      setter(JSON.parse(localStorage.getItem(keyName)));
    } else {
      setterWithUpdateLocalStorage(defaultValue);
    }
  }, []);

  var setterWithUpdateLocalStorage = function setterWithUpdateLocalStorage(value) {
    setter(value);
    localStorage.setItem(keyName, JSON.stringify(value));
  };

  return [getter, setterWithUpdateLocalStorage];
}