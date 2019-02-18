import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Close from '@material-ui/icons/Close';
import Error from '@material-ui/icons/Error';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import makeStyles from '@material-ui/styles/makeStyles';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
    error: {
        backgroundColor: theme.palette.secondary.main,
    },
    icon: {
        fontSize: '20px',
        marginRight: '15px',
    },
    iconMobile: {
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
        alignItems: 'center',
        color: theme.palette.text.secondary,
        display: 'inline-flex',
        fontSize: '18px',
    },
    textMobile: {
        color: theme.palette.text.secondary,
        display: 'inline-flex',
        fontSize: '28px',
    },
    warning: {
        backgroundColor: amber[700],
    },
}));

const GlobalSnackbar = ({ message, messageType, seconds = 2500, mobile = false }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const getIcon = () => {
        switch (messageType) {
            case 'info': return <Info className={getIconStyle()} />;
            case 'warning': return <Warning className={getIconStyle()} />;
            case 'success': return <CheckCircle className={getIconStyle()} />;
            case 'error': return <Error className={getIconStyle()} />;
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

    const getTextStyle = () => (mobile ? classes.textMobile : classes.text);
    const getIconStyle = () => (mobile ? classes.iconMobile : classes.icon);

    const onClose = () => {
        setOpen(false);
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
            anchorOrigin={
                    {
                        horizontal: mobile ? 'center' : 'right',
                        vertical: 'bottom',
                    }
            }
            className={getStyle()}
            open={open}
        >
            <SnackbarContent
                className={getStyle()}
                message={
                    <React.Fragment>
                        <Typography className={getTextStyle()}> {getIcon()} {message} </Typography>
                    </React.Fragment>
                }
                action={
                    <IconButton
                        onClick={onClose}
                    >
                        <Close className={getIconStyle()} />
                    </IconButton>
                }
            />
        </Snackbar>
    );
};

export default GlobalSnackbar;
