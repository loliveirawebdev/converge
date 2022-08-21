/* eslint-disable @typescript-eslint/no-var-requires */
test("if __DEV__ constant is being used (false)", () => {
  // mock __DEV__ variable
  (global as any).__DEV__ = false;

  const { isDevEnvironment } = require("./index");
  const result = isDevEnvironment();

  expect(result).toBe(false);
});

test("if __DEV__ constant is being used (false)", () => {
  // mock __DEV__ variable
  (global as any).__DEV__ = true;

  const { isDevEnvironment } = require("./index");
  const result = isDevEnvironment();

  expect(result).toBe(true);
});

export default {};
