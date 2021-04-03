import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SnackBar(props: { id: string, message: string, show: boolean, onUndo? }) {

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
    };

    return (
        <Snackbar
            id={props.id}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={props.show}
            autoHideDuration={6000}
            onClose={handleClose}
            message={props.message}
            action={
                <React.Fragment>
                    {props.onUndo &&
                        <Button color="secondary" size="small" onClick={props.onUndo}>
                            {'UNDO'}
                        </Button>
                    }
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    );
}