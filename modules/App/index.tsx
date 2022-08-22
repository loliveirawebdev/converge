import React from "react";
import ErrorHandler from "@/modules/ErrorHandler/components/Handler";
import GlobalState from "@/modules/GlobalState/contexts/GlobalState";
import RoutingSystem from "@/modules/Routing/components/RoutingSystem";
import LocalizationService from "@/modules/Localization/contexts/LocalizationService";
import "react-native-reanimated";

export default function App(props: any) {
  return (
    <GlobalState>
      <LocalizationService>
        <ErrorHandler>
          <RoutingSystem />
          {props.children}
        </ErrorHandler>
      </LocalizationService>
    </GlobalState>
  );
}
