"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
function usePersistedState(defaultValue, keyName) {
    const [getter, setter] = React.useState(defaultValue);
    React.useEffect(() => {
        if (localStorage[keyName]) {
            setter(JSON.parse(localStorage.getItem(keyName)));
        }
        else {
            setterWithUpdateLocalStorage(defaultValue);
        }
    }, []);
    const setterWithUpdateLocalStorage = (value) => {
        setter(value);
        localStorage.setItem(keyName, JSON.stringify(value));
    };
    return [getter, setterWithUpdateLocalStorage];
}
exports.usePersistedState = usePersistedState;
//# sourceMappingURL=usePersistedState.js.map