import React from "react";
import { RoutesDefinition } from "../../../config/routes";
import { getModuleByName } from "../helpers/getModuleByName";

export function useMobileRoutes(stack: any) {
  const { Screen } = stack;
  const initialRoute = RoutesDefinition.find((route) => route.index);

  const routes = RoutesDefinition.map((route) => {
    const { name } = route;
    const component = getModuleByName(name);
    return <Screen key={name} name={name} component={component} />;
  });

  return {
    routes,
    initialRoute: initialRoute?.name,
  };
}
