import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.primary.contrastText, 0.08),
            '&:hover': {
                backgroundColor: fade(theme.palette.primary.contrastText, 0.15),
            },
            marginLeft: 0,
            display: 'flex',
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            paddingRight: `calc(1em + ${theme.spacing(3)}px)`,
            width: '100%',
        },
        iconButton: {
            height: '100%',
            position: 'absolute',
            right: 0,
        },
    }),
);

export default function SearchInput(props: { value: string, setValue, placeholder?: string }) {
    const classes = useStyles();
    const inputRef = React.useRef(null);

    const onCleanButtonClick = () => {
        props.setValue('');
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                id="searchInput"
                placeholder={props.placeholder}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={props.value}
                onChange={e => { props.setValue(e.target.value) }}
                autoComplete='off'
                inputRef={inputRef}
            />
            {props.value &&
                <IconButton id="searchCleanButton" className={classes.iconButton} onClick={onCleanButtonClick}>
                    <CloseIcon />
                </IconButton>
            }
        </div>
    )
}
