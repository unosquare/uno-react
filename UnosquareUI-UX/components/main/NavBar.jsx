import {
    AppBar, Toolbar, Typography,
} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles({
    appcore: {
        color: '#FFF',
        width: '95%',
    },
    appBar: {
        zIndex: '1201 !important',
    },
    icon: {
        color: '#FFF',
    },
});

const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar position='absolute' color='primary' className={classes.appBar}>
            <Toolbar>
                <Typography color='textSecondary' variant='h5' className={classes.appcore}>
                    AppCore
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
