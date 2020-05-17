/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import '../common/i18n';
import '../public/empty.css';

import Page from '../components/Page';

const MyApp: React.FC<AppProps> = (props: AppProps) => {
  useEffect(() => {
    const lang = window.localStorage.getItem('i18nextLng') || 'en';
    document.documentElement.setAttribute('lang', lang);
  }, []);

  const {
    Component,
    pageProps,
    router: { route },
  } = props;

  const theme: DefaultTheme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    placeholder: '#797979',
    offWhite: '#EDEDED',
    gold: '#CA9E46',
    maxWidth: '900px',
    bs: '0 12px 24px 0 hsla(0, 0%, 0%, 0.09)',
  };

  const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      font-size: 10px;
    }
    *, *:before, *:after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }
    body {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 1;
      font-family: 'Montserrat';
      height: 100vh;
      overflow-x: hidden;
    }
    a {
      text-decoration: none;
      color: ${(p): string => p.theme.black};
    }
    h1 {
      font-family: 'Marck Script', cursive;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page route={route}>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
};

export default MyApp;
