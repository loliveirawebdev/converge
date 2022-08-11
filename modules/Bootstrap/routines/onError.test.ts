import onError from "./onError";
jest.mock("@/modules/Routing");

test("if routine name is not changed", () => {
  const { name } = onError;
  expect(name).toBe("onError");
});

test("if throws an error if the context is invalid", () => {
  const { action } = onError;
  const invalidContextCases = [{}, { navigation: null }, { navigation: {} }];

  for (const contextCase of invalidContextCases) {
    const test = () => action(contextCase);
    expect(test).toThrowError();
  }
});
