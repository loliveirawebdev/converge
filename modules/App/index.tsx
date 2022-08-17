import React from "react";
import GlobalState from "@/modules/GlobalState/contexts/GlobalState";
import RoutingSystem from "@/modules/Routing/components/RoutingSystem";
import LocalizationService from "@/modules/Localization/contexts/LocalizationService";

export default function App(props: any) {
  return (
    <GlobalState>
      <LocalizationService>
        <RoutingSystem />
        {props.children}
      </LocalizationService>
    </GlobalState>
  );
}
