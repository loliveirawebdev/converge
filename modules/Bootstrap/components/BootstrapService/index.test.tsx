/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { create, act } from "react-test-renderer";

test("if it trigger the 'run' function correctly", async () => {
  jest.doMock("../../hooks/useBootstrap", () => {
    return {
      useBootstrap: jest.fn().mockReturnValue({
        run: jest.fn(),
        bootstrapStore: {
          isInitialized: false,
          error: false,
        },
      }),
    };
  });

  const Bootstrap = require("./index").default;
  await act(async () => create(<Bootstrap />));

  const { useBootstrap } = require("../../hooks/useBootstrap");
  const { run } = useBootstrap();
  expect(run).toBeCalledTimes(1);
});
