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
function useStateForField(defaultValue) {
    var _a = React.useState(defaultValue), getField = _a[0], setField = _a[1];
    var changeHandler = function (_a) {
        var target = _a.target;
        if (!target) {
            return;
        }
        var value = target.value;
        setField(value);
    };
    return [getField, changeHandler, setField];
}
exports.useStateForField = useStateForField;
