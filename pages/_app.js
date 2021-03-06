/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import '../styles/styles.css';
import 'aos/dist/aos.css';

import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Tomas Boda</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
