import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Search from '../search';
import MainMenu from '../main-menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none'
    },
  }),
);

export default function Header(props: { searchValue: string, setSearchValue, searchPlaceholder: string }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <MainMenu />
          <Typography className={classes.title} component="h4" noWrap>
            Music Sway
          </Typography>
          <Search value={props.searchValue} setValue={props.setSearchValue} placeholder={props.searchPlaceholder} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
