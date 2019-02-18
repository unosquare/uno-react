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
        backgroundColor: `${theme.palette.error.main} !important`,
        display: 'flex !important'
    },
    icon: {
        fontSize: '20px  !important',
        marginRight: '15px  !important',
    },
    iconMobile: {
        fontSize: '34px  !important',
        marginRight: '15px  !important',
    },
    info: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        display: 'flex !important'
    },
    success: {
        backgroundColor: `${green[600]} !important`,
        display: 'flex !important'
    },
    text: {
        alignItems: 'center',
        color: `${theme.palette.text.secondary} !important`,
        display: 'inline-flex !important',
        fontSize: '18px !important',
    },
    textMobile: {
        color: `${theme.palette.text.secondary} !important`,
        display: 'inline-flex !important',
        fontSize: '28px !important',
    },
    warning: {
        backgroundColor: `${amber[700]} !important`,
        display: 'flex !important'
    },
}));

const GlobalSnackbar = ({ message, messageType, seconds = 2500, mobile = false }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const getIcon = () => {
        switch (messageType) {
            case 'info': return <Info className={getIconStyle()} />;
            case 'warning': return <Warning className={getIconStyle()} />;
            case 'error': return <Error className={getIconStyle()} />;
            default: return <CheckCircle className={getIconStyle()} />;
        }
    };

    const getStyle = () => {
        switch (messageType) {
            case 'info': return classes.info;
            case 'warning': return classes.warning;
            case 'error': return classes.error;
            default: return classes.success;
        }
    };


    const getTextStyle = () => (mobile ? classes.textMobile : classes.text);
    const getIconStyle = () => (mobile ? classes.iconMobile : classes.icon);

    const onClose = () => setOpen(false);

    useEffect(() => {
        if (message !== '') {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, seconds);
        }
    }, [message]);

    const anchorOrigin = {
        horizontal: mobile ? 'center' : 'right',
        vertical: 'bottom',
    };

    return (
        <Snackbar
            anchorOrigin={anchorOrigin}
            className={getStyle()}
            open={open}
        >
            <SnackbarContent
                className={getStyle()}
                message={
                    <Typography className={getTextStyle()}> {getIcon()} {message} </Typography>
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
