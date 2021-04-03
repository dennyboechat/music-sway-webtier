import { createContext } from 'react';

const themeContext = createContext({
    isDarkTheme: true,
    setIsDarkTheme: () => { }
});

export default themeContext;