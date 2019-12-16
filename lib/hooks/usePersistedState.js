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
function usePersistedState(defaultValue, keyName) {
    var _a = React.useState(defaultValue), getter = _a[0], setter = _a[1];
    var setterWithUpdateLocalStorage = function (value) {
        setter(value);
        localStorage.setItem(keyName, JSON.stringify(value));
    };
    React.useEffect(function () {
        if (localStorage[keyName]) {
            setter(JSON.parse(localStorage.getItem(keyName)));
        }
        else {
            setterWithUpdateLocalStorage(defaultValue);
        }
    }, []);
    return [getter, setterWithUpdateLocalStorage];
}
exports.usePersistedState = usePersistedState;
