import { LoadingIcon } from './LoadingIcon';
import React from 'react';

export const UnoSuspense = ({ children }) => (
    <React.Suspense fallback={<LoadingIcon />}>
        {children}
    </React.Suspense>
);