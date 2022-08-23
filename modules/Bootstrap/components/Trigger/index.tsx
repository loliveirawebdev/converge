import React from "react";
import { useBootstrap } from "../../hooks/useBootstrap";

export default function Trigger() {
  const { run } = useBootstrap();

  React.useEffect(() => {
    run();
  }, []);

  return null;
}
