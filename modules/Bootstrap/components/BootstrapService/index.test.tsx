/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { create, act } from "react-test-renderer";
import { useBootstrap } from "../../hooks/useBootstrap";

jest.mock("../../hooks/useBootstrap", () => {
  const useBootstrap = jest.fn().mockReturnValue({
    __esModule: true,
    run: jest.fn(),
  });

  return {
    __esModule: true,
    useBootstrap,
  };
});

test("if it trigger the 'run' function correctly", async () => {
  jest.mock("@/modules/GlobalState", () => ({
    useGlobalState: jest.fn().mockReturnValue({
      bootstrapStore: { isInitialized: false },
    }),
  }));

  const Bootstrap = require("./index").default;
  await act(async () => create(<Bootstrap>{null}</Bootstrap>));

  const { run } = useBootstrap();
  expect(run).toBeCalledTimes(1);
});
