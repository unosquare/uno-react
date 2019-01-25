import * as React from 'react';

import Typography from '@material-ui/core/Typography';

export function Title({ prefix, suffix, value, titleClass }) {
    const title = `${prefix || ''}${value}${suffix || ''}`;
    React.useEffect(() => { document.title = title; }, [ title ]);

    return <Typography variant='h4' className={titleClass}>{value}</Typography>;
}

export function AppTitle(prefix, suffix) {
    return ({ value, titleClass }) => {
        const props = { prefix, suffix, value, titleClass };

        return <Title {...props} />;
    };
}