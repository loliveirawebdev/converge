import React from "react";
import ErrorBoundary from "@/modules/ErrorHandler/components/ErrorBoundary";
import GlobalState from "@/modules/GlobalState/contexts/GlobalState";
import RoutingSystem from "@/modules/Routing/components/RoutingSystem";
import LocalizationService from "@/modules/Localization/contexts/LocalizationService";
import "react-native-reanimated";

export default function App(props: any) {
  return (
    <GlobalState>
      <LocalizationService>
        <ErrorBoundary>
          <RoutingSystem />
          {props.children}
        </ErrorBoundary>
      </LocalizationService>
    </GlobalState>
  );
}
