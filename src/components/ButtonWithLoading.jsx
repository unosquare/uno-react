import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const ButtonWithLoading = ({ isFetching = false, text = 'Save', className = '' }) => (
    <div className={className}>
        {
            isFetching ?
                <CircularProgress />
                :
                <Button type='submit' color='primary'>
                    {text}
                </Button>
        }
    </div>
);

export default ButtonWithLoading;
