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
function useStateForModel(initialValue) {
    const [getter, setter] = React.useState(initialValue);
    const handleChange = (event) => {
        if (event.target) {
            const { name, value, } = event.target;
            setter(Object.assign({}, getter, { [name]: value }));
        }
        else {
            setter(Object.assign({}, getter, event));
        }
    };
    return [getter, handleChange];
}
exports.useStateForModel = useStateForModel;
//# sourceMappingURL=useStateForModel.js.map