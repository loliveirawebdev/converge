import React from "react";
import { useGlobalState } from "./index";
import { GlobalState } from "../../contexts/GlobalState";

jest.mock("../../contexts/GlobalState", () => {
  return {
    __esModule: true,
    GlobalState: jest.fn(),
  };
});

test("if GlobalState is being set in useContext", async () => {
  const spy = jest.fn();
  jest.spyOn(React, "useContext").mockReturnValue(spy);

  const globalState = useGlobalState();

  expect(React.useContext).toBeCalledTimes(1);
  expect(React.useContext).toBeCalledWith(GlobalState);
  expect(globalState).toBe(spy);
});
