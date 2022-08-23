/* eslint-disable @typescript-eslint/no-var-requires */
beforeEach(() => {
  jest.resetModules();
});

test("if BoostrapService is rendering correctly when error is true", async () => {
  jest.mock("../../stores/BootstrapStore", () => ({
    BootstrapStore: {
      getInstance: () => ({
        error: true,
      }),
    },
  }));

  const bootstrapService = require("./index.web").default;
  const result = bootstrapService();
  expect(result).toBe(null);
});

test("if BoostrapService is rendering correctly when error is false", async () => {
  jest.mock("../../stores/BootstrapStore", () => ({
    BootstrapStore: {
      getInstance: () => ({
        error: false,
      }),
    },
  }));

  const bootstrapService = require("./index.web").default;
  const result = bootstrapService({ children: "child" });
  expect(result).toBe("child");
});

export default {};
