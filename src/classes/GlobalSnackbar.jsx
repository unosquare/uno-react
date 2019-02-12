import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import withStyles from '@material-ui/core/styles/withStyles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Close from '@material-ui/icons/Close';
import Error from '@material-ui/icons/Error';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import classNames from 'classnames';
import * as React from 'react';

const styles = theme => ({
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        marginRight: theme.spacing.unit,
        opacity: 0.9,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    success: {
        backgroundColor: green[600],
    },
    warning: {
        backgroundColor: amber[700],
    },
});

const variantIcon = {
    error: Error,
    info: Info,
    success: CheckCircle,
    warning: Warning,
};

const CustomSnackbarContent = ({ classes, className, message, variant, onClose }) => {
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            aria-describedby='client-snackbar'
            className={classNames(classes[variant], className)}
            message={
                <span id='client-snackbar' className={classes.message}>
                    <Icon className={classNames(classes.icon, classes.iconVariant)} />
                    {message}
                </span>}
            action={
                <IconButton
                    key='close'
                    aria-label='Close'
                    color='inherit'
                    className={classes.close}
                    onClick={onClose}
                >
                    <Close className={classes.icon} />
                </IconButton>
            }
        />
    );
};

const SnackbarContentWrapper = withStyles(styles)(CustomSnackbarContent);

const GlobalSnackbar = ({ message, type, open, onClose, autoHideTimeout }) => (
    <Snackbar
        anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
        }}
        autoHideDuration={autoHideTimeout || 5000}
        open={open}
        onClose={onClose}
    >
        <SnackbarContentWrapper
            message={message}
            onClose={onClose}
            variant={type || 'info'}
        />
    </Snackbar>
);

export default GlobalSnackbar;


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

const useStyles = makeStyles((theme) => ({
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
            case 'sucess': return <CheckCircle className={classes.icon} />;
            case 'error': return <Error className={classes.icon} />;
        }
    };
    const getStyle = () => {
        switch (messageType) {
            case 'info': return classes.info;
            case 'warning': return classes.warning;
            case 'sucess': return classes.success;
            case 'error': return classes.error;
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

