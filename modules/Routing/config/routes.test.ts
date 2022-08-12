/* eslint-disable @typescript-eslint/no-var-requires */
import { MixedRoutes } from "./routes.mixed";
import { MobileRoutes } from "./routes.mobile";
import { WebRoutes } from "./routes.next";

test("if definitions are normalized", () => {
  expect(MixedRoutes).toBeInstanceOf(Array);
  expect(MobileRoutes).toBeInstanceOf(Array);
  expect(WebRoutes).toBeInstanceOf(Array);
});

test("if indexes are merging correctly", () => {
  jest.mock("./routes.mixed", () => ({ MixedRoutes: [1, 2] }));
  jest.mock("./routes.mobile", () => ({ MobileRoutes: [3, 4] }));
  jest.mock("./routes.next", () => ({ WebRoutes: [5, 6] }));

  const { RoutesDefinition: MobileRoutesDefinition } = require("./routes");
  const { RoutesDefinition: WebRoutesDefinition } = require("./routes.web");
  expect(MobileRoutesDefinition).toMatchObject([1, 2, 3, 4]);
  expect(WebRoutesDefinition).toMatchObject([1, 2, 5, 6]);
});
