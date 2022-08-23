import React from "react";
import GlobalState from "@/modules/GlobalState/contexts/GlobalState";
import RoutingSystem from "@/modules/Routing/components/RoutingSystem";
import BootstrapService from "../Bootstrap/components/BootstrapService";
import ErrorBoundary from "@/modules/ErrorHandler/components/ErrorBoundary";
import LocalizationService from "@/modules/Localization/contexts/LocalizationService";
import "react-native-reanimated";

export default function App(props: any) {
  return (
    <BootstrapService>
      <GlobalState>
        <LocalizationService>
          <ErrorBoundary>
            <RoutingSystem />
            {props.children}
          </ErrorBoundary>
        </LocalizationService>
      </GlobalState>
    </BootstrapService>
  );
}
