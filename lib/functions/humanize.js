"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.humanize = humanize;

function humanize(name) {
  return (name || '').replace(/^./, function (str) {
    return str.toUpperCase();
  }).replace(/([a-z])([A-Z])/g, '$1 $2');
}