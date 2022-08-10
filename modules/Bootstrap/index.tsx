import React from "react";
import { useBootstrap } from "./hooks/useBootstrap";

export default function Bootstrap() {
  const { run } = useBootstrap();

  React.useEffect(() => {
    run();
  }, []);

  return null;
}
