/* eslint-disable @typescript-eslint/no-var-requires */
import { renderHook, act } from "@testing-library/react-hooks/native";

// clear mocks
afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  jest.resetAllMocks();
});

// actions mock
const actR1 = jest.fn();
const actR2 = jest.fn();
const actR3 = jest.fn();
const actR4 = jest.fn();
const actR5 = jest.fn();

// routines defs
const mockRoutine1: Bootstrap.Routine = { name: "mockRoutine1", action: actR1 };
const mockRoutine2: Bootstrap.Routine = { name: "mockRoutine2", action: actR2 };
const mockRoutine3: Bootstrap.Routine = { name: "mockRoutine3", action: actR3 };
const mockRoutine4: Bootstrap.Routine = { name: "mockRoutine4", action: actR4 };
const mockRoutine5: Bootstrap.Routine = { name: "mockRoutine5", action: actR5 };

// mock routines
jest.mock("../../routines", () => [
  mockRoutine1,
  mockRoutine2,
  mockRoutine3,
  mockRoutine4,
  mockRoutine5,
]);

// mock flow
jest.mock("../../routines/flow.json", () => ({
  flow: ["mockRoutine1", ["mockRoutine4", "mockRoutine2"], "mockRoutine3"],
  onErrorRoutine: "mockRoutine5",
}));

test("if the flow work as expected (sync and async)", async () => {
  // run boostrap action
  const { useBootstrap } = require("./index");
  const { result } = renderHook(() => useBootstrap());
  await act(async () => await result.current.run());

  // call times assurance
  expect(actR1).toBeCalledTimes(1);
  expect(actR2).toBeCalledTimes(1);
  expect(actR3).toBeCalledTimes(1);
  expect(actR4).toBeCalledTimes(1);
  expect(actR5).not.toBeCalled();

  // call order assurance
  const actionR1Order = actR1.mock.invocationCallOrder[0];
  const actionR2Order = actR2.mock.invocationCallOrder[0];
  const actionR3Order = actR3.mock.invocationCallOrder[0];
  const actionR4Order = actR3.mock.invocationCallOrder[0];
  expect(actionR1Order).toBeLessThan(actionR2Order);
  expect(actionR1Order).toBeLessThan(actionR4Order);
  expect(actionR3Order).toBeGreaterThanOrEqual(actionR2Order);
  expect(actionR3Order).toBeGreaterThanOrEqual(actionR4Order);
});

test("if onError is triggered when something is wrong", async () => {
  // change actionR1 behavior to throw an exception
  actR1.mockImplementation(() => {
    throw new Error();
  });

  // run boostrap action
  const { useBootstrap } = require("./index");
  const { result } = renderHook(() => useBootstrap());
  await act(async () => await result.current.run());

  // call times assurance
  expect(actR1).toBeCalledTimes(1);
  expect(actR1).toThrow();
  expect(actR2).not.toBeCalled();
  expect(actR3).not.toBeCalled();
  expect(actR4).not.toBeCalled();
  expect(actR5).toBeCalledTimes(1);
});
