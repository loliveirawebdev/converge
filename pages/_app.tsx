import "raf/polyfill";
import "setimmediate";
import React from "react";
import App from "@/modules/App";
import { useBootstrap } from "@/modules/Bootstrap/hooks/useBootstrap";
import { BootstrapStore } from "@/modules/Bootstrap/stores/BootstrapStore";

function MyApp(props) {
  const { Component, pageProps, bootstrapStore } = props;
  BootstrapStore.syncInstance(bootstrapStore);

  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

MyApp.getInitialProps = async () => {
  const { run } = useBootstrap();
  return { bootstrapStore: await run() };
};

export default MyApp;
