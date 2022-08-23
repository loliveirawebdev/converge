import Ops from "../Ops";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Handler({ children }) {
  return <ErrorBoundary FallbackComponent={Ops}>{children}</ErrorBoundary>;
}
