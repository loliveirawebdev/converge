import React from "react";
import { useStack } from "./hooks/useStack";
import { useTabStack } from "./hooks/useTabStack";
import { useMobileRoutes } from "./hooks/useMobileRoutes";
import { NavigationContainer } from "@react-navigation/native";

export default function RoutingSystem() {
  const Stack = useStack();
  const TabStack = useTabStack();

  const { initialRoute, routes, tabs } = useMobileRoutes(Stack, TabStack);
  const TabScreens = () => <TabStack.Navigator>{tabs}</TabStack.Navigator>;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        {routes}

        <Stack.Screen
          name="TabNavigation"
          component={TabScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
