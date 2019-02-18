import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmationDialog = ({ contentText, title, onAgreeAction, onClose, open, agree = 'Agree', disagree = 'Disagree', textColor= 'textSecondary' }) => {
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
                <DialogContentText id='alert-dialog-description' color={textColor}>
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
