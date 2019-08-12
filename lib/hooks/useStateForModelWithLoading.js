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
const useStateForModel_1 = require("./useStateForModel");
function useStateForModelWithLoading(effect, initialValue, inputs) {
    const [getter, handleChange] = useStateForModel_1.useStateForModel(initialValue);
    const [isLoading, setIsLoading] = React.useState(true);
    let _isMounted = false;
    React.useEffect(() => {
        _isMounted = true;
        setIsLoading(true);
        effect()
            .then((resp) => {
            if (_isMounted) {
                handleChange(resp);
                setIsLoading(false);
            }
        });
        return (() => _isMounted = false);
    }, inputs || []);
    return [getter, isLoading, handleChange];
}
exports.useStateForModelWithLoading = useStateForModelWithLoading;
//# sourceMappingURL=useStateForModelWithLoading.js.map