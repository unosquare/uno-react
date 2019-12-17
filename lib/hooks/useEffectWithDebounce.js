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
function useEffectWithDebounce(effect, debounce, inputs) {
    var timeout;
    var doLater = function () {
        timeout = undefined;
        effect();
    };
    React.useEffect(function () {
        timeout = setTimeout(doLater, debounce);
        return function () { return clearTimeout(timeout); };
    }, inputs || []);
}
exports.useEffectWithDebounce = useEffectWithDebounce;
