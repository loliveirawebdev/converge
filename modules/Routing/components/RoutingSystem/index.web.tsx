import React from "react";
import { Props } from "./@types/system-props";

// we do not need any extra functionality to handle
// navigation for web. the specification provided by nextjs must be
// followed to create routes: https://nextjs.org/docs/routing/introduction
export function RoutingSystem(props: Props) {
  React.useEffect(() => props.onReady(), []);
  return null;
}