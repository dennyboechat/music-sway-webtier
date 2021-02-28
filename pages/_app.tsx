import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/index.css'
import NoSleep from 'nosleep.js';
import Footer from '@/components/footer'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const noSleep = new NoSleep();
    noSleep.enable();
  }, []);

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

