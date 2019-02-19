import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const ConfirmationDialog = ({ contentText, title, onAgreeAction, onClose, open, agree = 'Agree', disagree = 'Disagree', textColor = 'textSecondary' }) => {
    const handleAgree = e => onAgreeAction(e);

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography color={textColor}>{contentText}</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {onClose &&
                    <Button onClick={onClose} color='secondary' variant='contained'>
                        {disagree}
                    </Button>
                }
                {onAgreeAction &&
                    <Button onClick={handleAgree} color='primary' variant='contained'>
                        {agree}
                    </Button>
                }
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;
