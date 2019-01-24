"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useStateForModel = require("./useStateForModel");

Object.keys(_useStateForModel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useStateForModel[key];
    }
  });
});