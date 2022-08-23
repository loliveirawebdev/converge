import React from "react";
import { observer } from "mobx-react";
import { useGlobalState } from "@/modules/GlobalState";
import { useBootstrap } from "../../hooks/useBootstrap";

const BootstrapService = (props: any) => {
  const { run } = useBootstrap();
  const { bootstrapStore } = useGlobalState();
  const { isInitialized } = bootstrapStore;

  React.useEffect(() => {
    if (!isInitialized) {
      run();
    }
  }, [isInitialized]);

  if (!isInitialized) {
    return null;
  }

  return props.children;
};

export default observer(BootstrapService);
