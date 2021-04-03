import { createContext } from 'react';

const themeContext = createContext({
    isDarkTheme: true,
    setIsDarkTheme: (checked) => { }
});

export default themeContext;