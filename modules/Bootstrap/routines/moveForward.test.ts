/* eslint-disable @typescript-eslint/no-var-requires */
beforeEach(() => {
  jest.resetModules();
});

jest.mock("@/modules/Routing");

test("if routine name is not changed", () => {
  const { name } = require("./moveForward").default;
  expect(name).toBe("moveForward");
});

test("if throws an error if the context is invalid", () => {
  const { action } = require("./moveForward").default;
  const invalidContextCases = [{}, { navigation: null }, { navigation: {} }];

  for (const contextCase of invalidContextCases) {
    const test = () => action(contextCase);
    expect(test).toThrowError();
  }
});

test("if is moving to Home when platform is web", () => {
  jest.mock("react-native", () => ({ Platform: { OS: "web" } }));

  const { action } = require("./moveForward").default;
  const navigation = { navigate: jest.fn() };
  action({ navigation });

  expect(navigation.navigate).toBeCalledTimes(1);
  expect(navigation.navigate).toBeCalledWith({ to: "Home", reset: true });
});

test("if is moving to TabNavigation when platform is not web", () => {
  jest.mock("react-native", () => ({ Platform: { OS: "ios" } }));

  const { action } = require("./moveForward").default;
  const navigation = { navigate: jest.fn() };
  action({ navigation });

  expect(navigation.navigate).toBeCalledTimes(1);
  expect(navigation.navigate).toBeCalledWith({
    to: "TabNavigation",
    reset: true,
  });
});

export default {};
