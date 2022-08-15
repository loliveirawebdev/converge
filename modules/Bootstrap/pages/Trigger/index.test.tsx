import React from "react";
import Bootstrap from "./index";
import { useBootstrap } from "../../hooks/useBootstrap";
import { create, act } from "react-test-renderer";

jest.mock("../../hooks/useBootstrap.ts", () => {
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
  act(() => {
    create(<Bootstrap />);
  });

  const { run } = useBootstrap();
  expect(run).toBeCalledTimes(1);
});
