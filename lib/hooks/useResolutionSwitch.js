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
const debounce_1 = require("../functions/debounce");
exports.useResolutionSwitch = (outerWidth = 1000, timeout = 500) => {
    const [isMobileResolution, setMobileResolution] = React.useState(false);
    const handleResolutionChange = () => setMobileResolution(window.outerWidth < outerWidth);
    const listener = debounce_1.debounce(handleResolutionChange, timeout);
    React.useEffect(() => {
        window.addEventListener('resize', listener);
        handleResolutionChange();
        return () => window.removeEventListener('resize', listener);
    }, []);
    return [isMobileResolution];
};
//# sourceMappingURL=useResolutionSwitch.js.map