import * as React from 'react';
import { debounce } from '../functions/debounce';
export var useResolutionSwitch = function (outerWidth, timeout) {
    if (outerWidth === void 0) { outerWidth = 1000; }
    if (timeout === void 0) { timeout = 500; }
    var _a = React.useState(false), isMobileResolution = _a[0], setMobileResolution = _a[1];
    var handleResolutionChange = function () { return setMobileResolution(window.outerWidth < outerWidth); };
    var listener = debounce(handleResolutionChange, timeout);
    React.useEffect(function () {
        window.addEventListener('resize', listener);
        handleResolutionChange();
        return function () { return window.removeEventListener('resize', listener); };
    }, []);
    return [isMobileResolution];
};
