import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "../common/i18n";

import Page from "../components/Page";

class AppInit extends App {
  render() {
    const {
      Component,
      pageProps,
      router: { route },
    } = this.props;

    const theme = {
      red: "#FF0000",
      black: "#393939",
      grey: "#3A3A3A",
      lightgrey: "#E1E1E1",
      offWhite: "#EDEDED",
      gold: "#CA9E46",
      maxWidth: "900px",
      bs: "0 12px 24px 0 hsla(0, 0%, 0%, 0.09)",
    };

    const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'radnika_next';
      src: url('radnikanext-medium-webfont.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
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
      color: ${props => props.theme.black};
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
  }
}

export default AppInit;
