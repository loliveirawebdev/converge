/* eslint-disable @typescript-eslint/no-var-requires */
beforeEach(() => {
  jest.resetModules();
});

jest.mock("mobx", () => {
  return {
    action: jest.fn(),
    makeObservable: jest.fn(),
    observable: jest.fn(),
  };
});

test("if BootstrapStore is being constructed with initialized as false", () => {
  const { BootstrapStore } = require("./index");
  const bootstrapStore = new BootstrapStore();
  expect(bootstrapStore.isInitialized).toBe(false);
});

test("if isInitialized is being changed to true", () => {
  const { BootstrapStore } = require("./index");
  const bootstrapStore = new BootstrapStore();
  bootstrapStore.setIsInitialized();

  expect(bootstrapStore.isInitialized).toBe(true);
});

export default {};
