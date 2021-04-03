import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import themeDark from '../styles/themeDark';
import themeLight from '../styles/themeLight';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/index.css'
import NoSleep from 'nosleep.js';
import ThemeContext from '../context/themeContext';

function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const noSleep = new NoSleep();
    noSleep.enable();
  }, []);

  const theme = isDarkTheme ? themeDark : themeLight;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <Head>
        <title>Music Sway</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default MyApp

