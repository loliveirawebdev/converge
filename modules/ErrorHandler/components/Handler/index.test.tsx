/* eslint-disable @typescript-eslint/no-var-requires */
import Ops from "../Ops";
import React from "react";

import { create } from "react-test-renderer";
import { ErrorBoundary } from "react-error-boundary";
const MockChildren = () => null;

jest.mock("react-error-boundary", () => ({
  ErrorBoundary: jest.fn().mockImplementation(() => null),
}));

test("if ErrorBoundary is being used correctly", async () => {
  const Handler = require("./index").default;
  const boundaryProps = { FallbackComponent: Ops, children: <MockChildren /> };

  await create(
    <Handler>
      <MockChildren />
    </Handler>
  );

  expect(ErrorBoundary).toBeCalledTimes(1);
  expect(ErrorBoundary).toBeCalledWith(boundaryProps, {});
});
