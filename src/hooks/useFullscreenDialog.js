import * as React from 'react';

export const useFullscreenDialog = (outerWidth = 1000) => {
    const [isMobileResolution, setMobileResolution] = React.useState(false);
    const handleResolutionChange = () => setMobileResolution(window.outerWidth < outerWidth);

    React.useEffect(() => {
        handleResolutionChange();
    }, []);

    return isMobileResolution;
};
