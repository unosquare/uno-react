import * as React from 'react';

import {
    Button, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle,
} from '@material-ui/core';

const DialogModal = ({ contentText, title, onAgreeAction, onClose, open }) => {
    const handleAgree = (e) => onAgreeAction(e);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                    {contentText}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color='secondary'>
                    Disagree
                        </Button>
                <Button onClick={handleAgree} color='primary' autoFocus={true}>
                    Agree
                        </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogModal;
