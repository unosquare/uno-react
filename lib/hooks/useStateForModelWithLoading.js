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
var useStateForModel_1 = require("./useStateForModel");
function useStateForModelWithLoading(effect, initialValue, inputs) {
    var _a = useStateForModel_1.useStateForModel(initialValue), getter = _a[0], handleChange = _a[1];
    var _b = React.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _isMounted = false;
    React.useEffect(function () {
        _isMounted = true;
        setIsLoading(true);
        effect().then(function (resp) {
            if (_isMounted) {
                handleChange(resp);
                setIsLoading(false);
            }
        });
        return function () {
            _isMounted = false;
        };
    }, inputs || []);
    return [getter, isLoading, handleChange];
}
exports.useStateForModelWithLoading = useStateForModelWithLoading;
