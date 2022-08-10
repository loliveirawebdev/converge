import React from "react";
import { Props } from "./interface";
import { useMobileRoutes } from "./hooks/useMobileRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export function RoutingSystem(props: Props) {
  const { initialRoute, routes } = useMobileRoutes(Stack);

  return (
    <NavigationContainer onReady={props.onReady}>
      <Stack.Navigator initialRouteName={initialRoute}>
        {routes}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
