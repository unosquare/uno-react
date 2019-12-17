import * as React from 'react';
import { debounce } from 'uno-js';

export const useResolutionSwitch = (outerWidth = 1000, timeout = 500): [boolean] => {
    const [isMobileResolution, setMobileResolution] = React.useState(false);
    const handleResolutionChange = (): void => setMobileResolution(window.outerWidth < outerWidth);

    const listener = debounce(handleResolutionChange, timeout);

    React.useEffect(() => {
        window.addEventListener('resize', listener);
        handleResolutionChange();

        return (): void => window.removeEventListener('resize', listener);
    }, []);

    return [isMobileResolution];
};
