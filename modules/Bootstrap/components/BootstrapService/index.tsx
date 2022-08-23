import { useEffect } from "react";
import { observer } from "mobx-react";
import { useBootstrap } from "../../hooks/useBootstrap";

const BootstrapService = (props: any) => {
  const { run, bootstrapStore } = useBootstrap();
  const { isInitialized, error } = bootstrapStore;

  useEffect(() => {
    if (!isInitialized) {
      run();
    }
  }, [isInitialized]);

  if (!isInitialized) {
    return null;
  }

  if (error) {
    return null;
  }

  return props.children;
};

export default observer(BootstrapService);
