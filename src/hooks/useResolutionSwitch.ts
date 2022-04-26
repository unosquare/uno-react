import * as React from 'react';
import { debounce } from 'uno-js';

const useResolutionSwitch = (window: any, outerWidth = 1000, timeout = 500): [boolean] => {
    const [isMobileResolution, setMobileResolution] = React.useState(false);
    const handleResolutionChange = React.useCallback(
        (): void => setMobileResolution(window.outerWidth < outerWidth),
        [window.outerWidth, outerWidth],
    );

    const listener = debounce(handleResolutionChange, timeout);

    React.useEffect(() => {
        window.addEventListener('resize', listener);
        handleResolutionChange();

        return (): void => window.removeEventListener('resize', listener);
    }, [window, listener, handleResolutionChange]);

    return [isMobileResolution];
};

export default useResolutionSwitch;
