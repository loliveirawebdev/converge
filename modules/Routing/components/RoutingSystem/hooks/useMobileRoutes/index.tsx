import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { RoutesDefinition } from "../../../../config/routes";
import { getModuleByName } from "../../helpers/getModuleByName";

const mapDefinition = (Screen: any, options?: any) => {
  return function ScreenBuilder(route: Routing.Route) {
    const { name } = route;
    const moduleComponent = getModuleByName(name);

    return (
      <Screen
        key={name}
        name={name}
        options={options}
        component={moduleComponent}
      />
    );
  };
};

export function useMobileRoutes(stack: any, tab: any) {
  const { Screen: TabScreen } = tab;
  const { Screen: StackScreen } = stack;
  const initialRoute = RoutesDefinition.find((route) => route.index);

  // mock tabbaricon
  const mockOptions = { tabBarIcon: () => <Icon name="home" /> };

  const tabDefs = RoutesDefinition.filter((route) => route.mobileTab);
  const stackDefs = RoutesDefinition.filter((route) => !route.mobileTab);
  const tabs = tabDefs.map(mapDefinition(TabScreen, mockOptions));
  const routes = stackDefs.map(mapDefinition(StackScreen));

  return {
    tabs,
    routes,
    initialRoute: initialRoute?.name,
  };
}
