import React from "react";
import App from "next/app";
import "../common/i18n";

import Page from "../components/Page";

export default class AppInit extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}
