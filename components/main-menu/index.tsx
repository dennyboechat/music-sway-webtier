import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';

export default function MainMenu(props: { isDarkTheme: boolean, setIsDarkTheme }) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (value: boolean) => () => {
        setDrawerOpen(value);
    };

    const changeThemeMode = (e) => {
        props.setIsDarkTheme(e.target.checked);
    }

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem key="themeMode">
                        <ListItemText>
                            <label>{'Dark mode?'}</label>
                            <Switch
                                checked={props.isDarkTheme}
                                onChange={changeThemeMode}
                                name="themeMode"
                            />
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}