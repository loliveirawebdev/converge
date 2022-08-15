/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { create } from "react-test-renderer";
const MockChildren = () => null;

jest.mock("../../stores/RootStore", () => {
  return {
    __esModule: true,
    RootStore: jest.fn().mockReturnValue({ mock: true }),
  };
});

test("if RootStore is being set in context", async () => {
  const Provider = jest.fn().mockImplementation(() => <MockChildren />);
  const contextSpy = () => ({ Provider, Consumer: jest.fn() });
  jest.spyOn(React, "createContext").mockImplementation(contextSpy as any);

  const GlobalState = require("./index");
  const GlobalStateCtx = GlobalState.default;
  create(<GlobalStateCtx />);

  // check if createContext is using RootStore
  expect(React.createContext).toBeCalledTimes(1);
  expect(React.createContext).toBeCalledWith({ mock: true });

  // set RootStore to Provider Value, without children in this example
  expect(Provider).toBeCalledWith({ value: { mock: true } }, {});
});

test("if is rendering children properly", async () => {
  const GlobalState = require("./index");
  const GlobalStateCtx = GlobalState.default;

  const component = await create(
    <GlobalStateCtx>
      <MockChildren key="MOCK" />
    </GlobalStateCtx>
  );

  const test = () => component.root.findByType(MockChildren);
  expect(test).not.toThrow();
});
