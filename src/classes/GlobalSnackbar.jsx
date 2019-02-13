import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/Error';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
    error: {
        backgroundColor: theme.palette.secondary.main,
    },
    icon: {
        fontSize: '34px',
        marginRight: '15px',
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    success: {
        backgroundColor: green[600],
    },
    text: {
        color: theme.palette.text.secondary,
        display: 'inline-flex',
        fontSize: '28px',
    },
    warning: {
        backgroundColor: amber[700],
    },
}));

const GlobalSnackbar = ({ message, messageType, seconds = 2500 }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const getIcon = () => {
        switch (messageType) {
            case 'info': return <Info className={classes.icon} />;
            case 'warning': return <Warning className={classes.icon} />;
            case 'success': return <CheckCircle className={classes.icon} />;
            case 'error': return <Error className={classes.icon} />;
            default: return;
        }
    };
    const getStyle = () => {
        switch (messageType) {
            case 'info': return classes.info;
            case 'warning': return classes.warning;
            case 'success': return classes.success;
            case 'error': return classes.error;
            default: return;
        }
    };

    useEffect(() => {
        if (message !== '') {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, seconds);
        }
    }, [message]);

    return (
        <Snackbar
            className={getStyle()}
            open={open}
        >
            <SnackbarContent
                className={getStyle()}
                message={
                    <React.Fragment>
                        <Typography className={classes.text}> {getIcon()} {message} </Typography>
                    </React.Fragment>
                }
            />
        </Snackbar>
    );
};

export default GlobalSnackbar;

