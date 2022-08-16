import React from "react";
import GlobalState from "@/modules/GlobalState/contexts/GlobalState";
import RoutingSystem from "@/modules/Routing/components/RoutingSystem";

export default function App(props: any) {
  return (
    <GlobalState>
      <RoutingSystem />
        {props.children}
    </GlobalState>
  );
}
