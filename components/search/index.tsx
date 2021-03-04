import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
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
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        iconButton: {
            padding: 10,
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
                inputRef={inputRef}
            />
            {props.value &&
                <IconButton id="searchCleanButton" className={classes.iconButton} onClick={onCleanButtonClick}>
                    <HighlightOffOutlinedIcon />
                </IconButton>
            }
        </div>
    )
}
