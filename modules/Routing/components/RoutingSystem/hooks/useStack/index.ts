import { createNativeStackNavigator } from "@react-navigation/native-stack";

// we use this hook only to keep friendly to read in RoutingSystem component
export function useStack() {
  return createNativeStackNavigator();
}
