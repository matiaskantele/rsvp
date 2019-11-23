import React from "react";
import App from "next/app";
import "../common/i18n";

class AppInit extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default AppInit;
