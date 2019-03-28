"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function useToggle(defaultValue) {
    var _a = React.useState(defaultValue), getField = _a[0], setField = _a[1];
    var toggleField = function () { return setField(!getField); };
    return [getField, toggleField];
}
exports.useToggle = useToggle;
