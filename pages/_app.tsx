import "raf/polyfill";
import "setimmediate";
import React from "react";
import App from "@/modules/App";

function MyApp({ Component, pageProps }) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;
