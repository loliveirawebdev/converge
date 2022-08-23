import { Environment } from "@/modules/Environment";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export function useTabStack() {
  if (Environment.TabBarStyle === "material-bottom-tab") {
    return createMaterialBottomTabNavigator();
  }

  if (Environment.TabBarStyle === "material-top-tab") {
    return createMaterialTopTabNavigator();
  }

  return createBottomTabNavigator();
}
