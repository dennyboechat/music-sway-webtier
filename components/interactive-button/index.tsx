import React from 'react';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

export default function InteractiveButton(props: { onClick, loading?: boolean, tooltip: string }) {

    const useStyles = makeStyles((theme) => ({
        wrapper: {
            position: 'relative',
        },
        fabProgress: {
            color: theme.palette.primary.contrastText,
            position: 'absolute',
            left: -3,
            zIndex: 1,
        },
    }));
    const classes = useStyles();

    return (
        <div className={'song-action-buttons ' + classes.wrapper}>
            <Tooltip title={props.tooltip} arrow>
                <Fab
                    onClick={props.onClick}
                >
                    <CloseIcon fontSize="small" />
                </Fab>
            </Tooltip>
            {props.loading &&
                <CircularProgress size={24} className={classes.fabProgress} />
            }
        </div>
    );
}