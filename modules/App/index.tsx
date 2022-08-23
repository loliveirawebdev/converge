import React from "react";
import GlobalState from "@/modules/GlobalState/contexts/GlobalState";
import RoutingSystem from "@/modules/Routing/components/RoutingSystem";
import BootstrapService from "../Bootstrap/components/BootstrapService";
import ErrorBoundary from "@/modules/ErrorHandler/components/ErrorBoundary";
import LocalizationService from "@/modules/Localization/contexts/LocalizationService";
import "react-native-reanimated";

export default function App(props: any) {
  return (
    <GlobalState>
      <LocalizationService>
        <ErrorBoundary>
          <BootstrapService>
            <RoutingSystem />
            {props.children}
          </BootstrapService>
        </ErrorBoundary>
      </LocalizationService>
    </GlobalState>
  );
}
