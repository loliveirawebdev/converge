/* eslint-disable @typescript-eslint/no-var-requires */
const mockDev = { ReactotronEnabled: true };
const mockProd = { ReactotronEnabled: false };
jest.mock("./environment.dev", () => ({ Environment: mockDev }));
jest.mock("./environment.prod", () => ({ Environment: mockProd }));

beforeEach(() => {
  jest.resetModules();
});

test("if isDevEnvironment is being used", () => {
  jest.mock("./helpers/isDevEnvironment", () => ({
    isDevEnvironment: jest.fn().mockReturnValue(true),
  }));

  const { Environment } = require("./index");
  expect(Environment).toMatchObject(mockDev);
});

test("if isDevEnvironment is being used", () => {
  jest.mock("./helpers/isDevEnvironment", () => ({
    isDevEnvironment: jest.fn().mockReturnValue(false),
  }));

  const { Environment } = require("./index");
  expect(Environment).toMatchObject(mockProd);
});

export default {};
