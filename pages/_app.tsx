import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import themeDark from '../styles/themeDark';
import themeLight from '../styles/themeLight';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/index.css'
import NoSleep from 'nosleep.js';
import Footer from '@/components/footer'

function MyApp({ Component, pageProps }) {

  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  useEffect(() => {
    const noSleep = new NoSleep();
    noSleep.enable();
  }, []);

  const theme = isDarkTheme ? themeDark : themeLight;
  pageProps.isDarkTheme = isDarkTheme;
  pageProps.setIsDarkTheme = setIsDarkTheme;

  return (
    <>
      <Head>
        <title>Music Sway</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  )
}

export default MyApp

