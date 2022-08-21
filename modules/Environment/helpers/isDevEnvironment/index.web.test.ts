/* eslint-disable @typescript-eslint/no-var-requires */
test("if process is not set, return false", () => {
  // mock process variable
  process = undefined;

  const { isDevEnvironment } = require("./index.web");
  const result = isDevEnvironment();

  expect(result).toBe(false);
});

test("if NODE_ENV constant is being used (false)", () => {
  // mock process variable
  process = { env: { NODE_ENV: "production" } } as any;

  const { isDevEnvironment } = require("./index.web");
  const result = isDevEnvironment();

  expect(result).toBe(false);
});

test("if NODE_ENV constant is being used (true)", () => {
  // mock process variable
  process = { env: { NODE_ENV: "development" } } as any;

  const { isDevEnvironment } = require("./index.web");
  const result = isDevEnvironment();

  expect(result).toBe(true);
});

export default {};
