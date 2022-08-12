/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
const MockComponent = () => null;

beforeEach(() => {
  jest.resetModules();
});

test("if is returning valid route react elements", () => {
  jest.mock("../helpers/getModuleByName", () => ({
    getModuleByName: jest.fn().mockReturnValue(MockComponent),
  }));

  jest.mock("../../../config/routes", () => ({
    RoutesDefinition: [
      { url: "/foo", name: "Foo", componentPath: "@/modules/Foo" },
      { index: true, url: "/bar", name: "Bar", componentPath: "@/modules/Bar" },
    ],
  }));

  const { useMobileRoutes } = require("./useMobileRoutes");
  const { routes } = useMobileRoutes({ Screen: MockComponent });
  routes.forEach((route) => expect(React.isValidElement(route)).toBe(true));
});

test("if initialRoute is being handled correctly when it's set", () => {
  jest.mock("../helpers/getModuleByName", () => ({
    getModuleByName: jest.fn().mockReturnValue(MockComponent),
  }));

  jest.mock("../../../config/routes", () => ({
    RoutesDefinition: [
      { index: true, url: "/foo", name: "Foo", componentPath: "@/modules/Foo" },
    ],
  }));

  const { useMobileRoutes } = require("./useMobileRoutes");
  const { initialRoute } = useMobileRoutes({ Screen: MockComponent });
  expect(initialRoute).toBe("Foo");
});

test("if initialRoute is being handled correctly when it's not set", () => {
  jest.mock("../helpers/getModuleByName", () => ({
    getModuleByName: jest.fn().mockReturnValue(MockComponent),
  }));

  jest.mock("../../../config/routes", () => ({
    RoutesDefinition: [
      { url: "/foo", name: "Foo", componentPath: "@/modules/Foo" },
    ],
  }));

  const { useMobileRoutes } = require("./useMobileRoutes");
  const { initialRoute } = useMobileRoutes({ Screen: MockComponent });
  expect(initialRoute).toBe(undefined);
});
