import moveForward from "./moveForward";

jest.mock("@/modules/Routing");

test("if routine name is not changed", () => {
  const { name } = moveForward;
  expect(name).toBe("moveForward");
});

test("if throws an error if the context is invalid", () => {
  const { action } = moveForward;
  const invalidContextCases = [{}, { navigation: null }, { navigation: {} }];

  for (const contextCase of invalidContextCases) {
    const test = () => action(contextCase);
    expect(test).toThrowError();
  }
});
