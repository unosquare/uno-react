import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import Highlight from 'react-highlight';

const useStyles = makeStyles({
    code: {
        fontSize: 15,
    },
    codeTag: {
        background: '#F8F8FF',
        padding: '6px',
    },
});

export default (data: any) => {
    const classes = useStyles({});

    return (
        <div className={classes.codeTag}>
            <Highlight
                language='javascript'
                className='javascript'
            >
                {data.data}
            </Highlight>
        </div>
    );
};
