/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
const MockComponent = () => null;
const Tab = { Screen: MockComponent };
const Stack = { Screen: MockComponent };

beforeEach(() => {
  jest.resetModules();
});

test("if is returning valid route react elements", () => {
  jest.mock("../../helpers/getModuleByName", () => ({
    getModuleByName: jest.fn().mockReturnValue(MockComponent),
  }));

  jest.mock("../../config/routes", () => ({
    RoutesDefinition: [
      { url: "/foo", name: "Foo", componentPath: "@/modules/Foo" },
      { index: true, url: "/bar", name: "Bar", componentPath: "@/modules/Bar" },
    ],
  }));

  const { useMobileRoutes } = require("./index");
  const { routes } = useMobileRoutes(Stack, Tab);
  routes.forEach((route) => expect(React.isValidElement(route)).toBe(true));
});

test("if initialRoute is being handled correctly when it's set", () => {
  jest.mock("../../helpers/getModuleByName", () => ({
    getModuleByName: jest.fn().mockReturnValue(MockComponent),
  }));

  jest.mock("../../config/routes", () => ({
    RoutesDefinition: [
      { index: true, url: "/foo", name: "Foo", componentPath: "@/modules/Foo" },
    ],
  }));

  const { useMobileRoutes } = require("./index");
  const { initialRoute } = useMobileRoutes(Stack, Tab);
  expect(initialRoute).toBe("Foo");
});

test("if initialRoute is being handled correctly when it's not set", () => {
  jest.mock("../../helpers/getModuleByName", () => ({
    getModuleByName: jest.fn().mockReturnValue(MockComponent),
  }));

  jest.mock("../../config/routes", () => ({
    RoutesDefinition: [
      { url: "/foo", name: "Foo", componentPath: "@/modules/Foo" },
    ],
  }));

  const { useMobileRoutes } = require("./index");
  const { initialRoute } = useMobileRoutes(Stack, Tab);
  expect(initialRoute).toBe("TabNavigation");
});

test("if initialTabRoute is being handled correctly when it's set", () => {
  jest.mock("../../helpers/getModuleByName", () => ({
    getModuleByName: jest.fn().mockReturnValue(MockComponent),
  }));

  jest.mock("../../config/routes", () => ({
    RoutesDefinition: [
      {
        url: "/foo",
        name: "Foo",
        index: true,
        mobileTab: true,
        componentPath: "@/modules/Foo",
      },
    ],
  }));

  const { useMobileRoutes } = require("./index");
  const { initialTabRoute } = useMobileRoutes(Stack, Tab);
  expect(initialTabRoute).toBe("Foo");
});

test("if initialTabRoute is being handled correctly when it's set", () => {
  jest.mock("../../helpers/getModuleByName", () => ({
    getModuleByName: jest.fn().mockReturnValue(MockComponent),
  }));

  jest.mock("../../config/routes", () => ({
    RoutesDefinition: [
      {
        url: "/foo",
        name: "Foo",
        mobileTab: true,
        componentPath: "@/modules/Foo",
      },
    ],
  }));

  const { useMobileRoutes } = require("./index");
  const { initialTabRoute } = useMobileRoutes(Stack, Tab);
  expect(initialTabRoute).toBe(undefined);
});
