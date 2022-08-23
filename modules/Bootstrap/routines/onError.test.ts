import onError from "./onError";
jest.mock("@/modules/Routing");

test("if routine name is not changed", () => {
  const { name } = onError;
  expect(name).toBe("onError");
});

test("if throws an error if the context is invalid", () => {
  const { action } = onError;

  const invalidContextCases = [
    {},
    { bootstrapStore: null },
    { bootstrapStore: {} },
  ];

  for (const contextCase of invalidContextCases) {
    const test = () => action(contextCase);
    expect(test).toThrowError();
  }
});

test("if is filling error as true", () => {
  const { action } = onError;
  const bootstrapStore = { setError: jest.fn() };
  action({ bootstrapStore });

  const { setError } = bootstrapStore;
  expect(setError).toBeCalledTimes(1);
});
