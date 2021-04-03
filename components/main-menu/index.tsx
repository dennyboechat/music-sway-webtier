import React, { useContext } from "react";
import Image from 'next/image'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import themeContext from '../../context/themeContext';

export default function MainMenu() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const { isDarkTheme, setIsDarkTheme } = useContext(themeContext);

    const toggleDrawer = (value: boolean) => () => {
        setDrawerOpen(value);
    };

    const changeThemeMode = (e) => {
        if (e && e.target) {
            setIsDarkTheme(e.target.checked);
        }
    }

    const logoPath = isDarkTheme ? '/ms_logo_white.png' : '/ms_logo_black.png';

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
                <div className="ms-logo">
                    <Image src={logoPath} height={100} width={100} />
                </div>
                <List>
                    <ListItem key="themeMode">
                        <ListItemText>
                            <label>{'Dark mode?'}</label>
                            <Switch
                                checked={isDarkTheme}
                                onChange={changeThemeMode}
                                name="themeMode"
                                color="primary"
                            />
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}