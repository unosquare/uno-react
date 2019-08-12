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
function useClickOutside(Component, onClickOutside) {
    return (props) => {
        const node = React.useRef();
        const handleClick = (ev) => {
            if (!node.current.contains(ev.target)) {
                onClickOutside();
            }
        };
        React.useEffect(() => {
            document.addEventListener('click', handleClick);
            return () => document.removeEventListener('click', handleClick);
        }, []);
        return (React.createElement("div", { ref: node },
            React.createElement(Component, Object.assign({}, props))));
    };
}
exports.useClickOutside = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map