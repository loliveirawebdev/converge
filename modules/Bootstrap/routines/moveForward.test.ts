/* eslint-disable @typescript-eslint/no-var-requires */
beforeEach(() => {
  jest.resetModules();
});

test("if routine name is not changed", () => {
  const { name } = require("./moveForward").default;
  expect(name).toBe("moveForward");
});

test("if throws an error if the context is invalid", () => {
  const { action } = require("./moveForward").default;

  const invalidContextCases = [
    {},
    { globalState: null },
    { globalState: { bootstrapStore: null } },
  ];

  for (const contextCase of invalidContextCases) {
    const test = () => action(contextCase);
    expect(test).toThrowError();
  }
});

test("if is moving to Home when platform is web", () => {
  jest.mock("react-native", () => ({ Platform: { OS: "web" } }));

  const { action } = require("./moveForward").default;
  const globalState = { bootstrapStore: { setIsInitialized: jest.fn() } };
  action({ globalState });

  const { setIsInitialized } = globalState.bootstrapStore;
  expect(setIsInitialized).toBeCalledTimes(1);
});

export default {};
