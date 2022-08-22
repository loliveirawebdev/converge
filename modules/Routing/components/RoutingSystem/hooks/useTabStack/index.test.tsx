/* eslint-disable @typescript-eslint/no-var-requires */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

beforeEach(() => {
  jest.resetModules();
});

jest.mock("@react-navigation/bottom-tabs", () => ({
  createBottomTabNavigator: jest.fn().mockReturnValue("bottom"),
}));

jest.mock("@react-navigation/material-bottom-tabs", () => ({
  createMaterialBottomTabNavigator: jest.fn().mockReturnValue("m-bottom"),
}));

jest.mock("@react-navigation/material-top-tabs", () => ({
  createMaterialTopTabNavigator: jest.fn().mockReturnValue("m-top"),
}));

test("if material-bottom-tab is being used", () => {
  const mockEnv = { Environment: { TabBarStyle: "material-bottom-tab" } };
  jest.mock("@/modules/Environment", () => mockEnv);

  const { useTabStack } = require("./index");
  const tabStack = useTabStack();
  const originalTabStack = createMaterialBottomTabNavigator();
  expect(tabStack).toBe(originalTabStack);
});

test("if material-top-tab is being used", () => {
  const mockEnv = { Environment: { TabBarStyle: "material-top-tab" } };
  jest.mock("@/modules/Environment", () => mockEnv);

  const { useTabStack } = require("./index");
  const tabStack = useTabStack();
  const originalTabStack = createMaterialTopTabNavigator();
  expect(tabStack).toBe(originalTabStack);
});

test("if material-top-tab is being used", () => {
  const mockEnv = { Environment: { TabBarStyle: "bottom-tab" } };
  jest.mock("@/modules/Environment", () => mockEnv);

  const { useTabStack } = require("./index");
  const tabStack = useTabStack();
  const originalTabStack = createBottomTabNavigator();
  expect(tabStack).toBe(originalTabStack);
});
