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

test("if BootstrapStore default values", () => {
  const { BootstrapStore } = require("./index");
  const bootstrapStore = new BootstrapStore();

  expect(bootstrapStore.error).toBe(false);
  expect(bootstrapStore.results).toStrictEqual([]);
  expect(bootstrapStore.isInitialized).toBe(false);
});

test("if isInitialized is being changed to true", () => {
  const { BootstrapStore } = require("./index");
  const bootstrapStore = new BootstrapStore();
  bootstrapStore.setIsInitialized();

  expect(bootstrapStore.isInitialized).toBe(true);
});

test("if error is being changed to true", () => {
  const { BootstrapStore } = require("./index");
  const bootstrapStore = new BootstrapStore();
  bootstrapStore.setError();

  expect(bootstrapStore.error).toBe(true);
});

test("if error is get instance is working", () => {
  const { BootstrapStore } = require("./index");

  // new object
  const instance = BootstrapStore.getInstance();
  instance.setError();
  expect(instance.error).toBe(true);

  const newInstance = BootstrapStore.getInstance();
  expect(newInstance.error).toBe(true);
});

test("if error is sync instance is working", () => {
  const { BootstrapStore } = require("./index");
  const bootstrapStore = new BootstrapStore();
  bootstrapStore.setError();

  // new object
  const instance = BootstrapStore.syncInstance(bootstrapStore);
  expect(instance.error).toBe(true);
});

export default {};
