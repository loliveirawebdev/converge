import { observer } from "mobx-react";
import { BootstrapStore } from "../../stores/BootstrapStore";

// we can't run any bootstrap script here because we need to hold
// page loading while our routines are being executed
// please check nextjs _app.tsx file
const BootstrapService = (props: any) => {
  const bootstrapStore = BootstrapStore.getInstance();
  const { error } = bootstrapStore;

  if (error) {
    return null;
  }

  return props.children;
};

export default observer(BootstrapService);
