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
var uno_js_1 = require("uno-js");
exports.useResolutionSwitch = function (outerWidth, timeout) {
    if (outerWidth === void 0) { outerWidth = 1000; }
    if (timeout === void 0) { timeout = 500; }
    var _a = React.useState(false), isMobileResolution = _a[0], setMobileResolution = _a[1];
    var handleResolutionChange = function () { return setMobileResolution(window.outerWidth < outerWidth); };
    var listener = uno_js_1.debounce(handleResolutionChange, timeout);
    React.useEffect(function () {
        window.addEventListener('resize', listener);
        handleResolutionChange();
        return function () { return window.removeEventListener('resize', listener); };
    }, []);
    return [isMobileResolution];
};
