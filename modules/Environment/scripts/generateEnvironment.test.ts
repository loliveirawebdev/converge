/* eslint-disable @typescript-eslint/no-var-requires */
const exampleFile = "./modules/Environment/environment.example.ts";
const devFile = "./modules/Environment/environment.dev.ts";
const prodFile = "./modules/Environment/environment.prod.ts";

beforeEach(() => {
  jest.resetModules();
});

test("if files are not created when they already exists", () => {
  jest.mock("fs", () => ({
    existsSync: jest.fn().mockReturnValue(true),
    copyFileSync: jest.fn(),
  }));

  const fs = require("fs");
  require("./generateEnvironment");

  expect(fs.existsSync).toBeCalledTimes(2);
  expect(fs.existsSync).toBeCalledWith(devFile);
  expect(fs.existsSync).toBeCalledWith(prodFile);
  expect(fs.copyFileSync).not.toBeCalled();
});

test("if files are created when they not exists", () => {
  jest.mock("fs", () => ({
    existsSync: jest.fn().mockReturnValue(false),
    copyFileSync: jest.fn(),
  }));

  const fs = require("fs");
  require("./generateEnvironment");

  expect(fs.existsSync).toBeCalledTimes(2);
  expect(fs.existsSync).toBeCalledWith(devFile);
  expect(fs.existsSync).toBeCalledWith(prodFile);
  expect(fs.copyFileSync).toBeCalledTimes(2);
  expect(fs.copyFileSync).toBeCalledWith(exampleFile, devFile);
  expect(fs.copyFileSync).toBeCalledWith(exampleFile, prodFile);
});

export default {};
