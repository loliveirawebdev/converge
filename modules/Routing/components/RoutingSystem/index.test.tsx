/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { create } from "react-test-renderer";

const MockNavigationContainer = ({ children }: any) => children || null;
const MockTabNavigator = ({ children }: any) => children || null;
const MockTabScreen = ({ children }: any) => children || null;
const MockStackNavigator = ({ children }: any) => children || null;
const MockStackScreen = ({ children }: any) => children || null;

jest.mock("./hooks/useStack", () => ({
  useStack: jest.fn().mockReturnValue({
    Navigator: MockStackNavigator,
    Screen: MockStackScreen,
  }),
}));

jest.mock("./hooks/useTabStack", () => ({
  useTabStack: jest.fn().mockReturnValue({
    Navigator: MockTabNavigator,
    Screen: MockTabScreen,
  }),
}));

jest.mock("./hooks/useMobileRoutes", () => ({
  useMobileRoutes: jest.fn().mockReturnValue({
    initialRoute: "Home",
    routes: [
      <MockStackScreen key="0" name="R1" />,
      <MockStackScreen key="1" name="R2" />,
    ],
    tabs: [
      <MockTabScreen key="0" name="T1" />,
      <MockTabScreen key="1" name="T2" />,
    ],
  }),
}));

jest.mock("@react-navigation/native", () => ({
  NavigationContainer: MockNavigationContainer,
}));

test("if navigator structure is working as expected", async () => {
  const RoutingSystem = require("./index").default;
  const component = await create(<RoutingSystem />);

  const test = () => {
    const navContainer = component.root.findByType(MockNavigationContainer);
    const stackNavigator = navContainer.findByType(MockStackNavigator);

    const stackScreens = stackNavigator.findAllByType(MockStackScreen);
    expect(stackScreens.length).toBe(3);

    const screenR1 = stackScreens.find((s) => s.props.name === "R1");
    const screenR2 = stackScreens.find((s) => s.props.name === "R2");
    const screenTab = stackScreens.find(
      (s) => s.props.name === "TabNavigation"
    );
    expect(screenR1).not.toBeNull();
    expect(screenR2).not.toBeNull();
    expect(screenTab).not.toBeNull();

    const tabNavigator = screenTab.props.component();
    const tabScreens = tabNavigator.props.children;

    const screenT1 = tabScreens.find((s) => s.props.name === "T1");
    const screenT2 = tabScreens.find((s) => s.props.name === "T2");
    expect(screenT1).not.toBeNull();
    expect(screenT2).not.toBeNull();
  };

  expect(test).not.toThrow();
});
