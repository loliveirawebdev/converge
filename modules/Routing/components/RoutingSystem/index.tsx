import React from "react";
import { useMobileRoutes } from "./hooks/useMobileRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function RoutingSystem() {
  const { initialRoute, routes } = useMobileRoutes(Stack);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        {routes}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
