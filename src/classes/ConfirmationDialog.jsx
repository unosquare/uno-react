import * as React from 'react';

import {
    Button, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle,
} from '@material-ui/core';

const ConfirmationDialog = ({ contentText, title, onAgreeAction, onClose, open, agree = 'Agree', disagree = 'Disagree' }) => {
    const handleAgree = e => onAgreeAction(e);

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
                {onClose &&
                    <Button onClick={onClose} color='secondary'>
                        {disagree}
                    </Button>
                }
                {onAgreeAction &&
                    <Button onClick={handleAgree} color='primary' autoFocus={true}>
                        {agree}
                    </Button>
                }
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;
