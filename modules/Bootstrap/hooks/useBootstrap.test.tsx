/* eslint-disable @typescript-eslint/no-var-requires */
import { renderHook, act } from "@testing-library/react-hooks/native";

// clear mocks
afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  jest.resetAllMocks();
});

// actions mock
const actionR1 = jest.fn();
const actionR2 = jest.fn();
const actionR3 = jest.fn();
const actionR4 = jest.fn();
const actionR5 = jest.fn();

// routines defs
const mockRoutine1: Routine = { name: "mockRoutine1", action: actionR1 };
const mockRoutine2: Routine = { name: "mockRoutine2", action: actionR2 };
const mockRoutine3: Routine = { name: "mockRoutine3", action: actionR3 };
const mockRoutine4: Routine = { name: "mockRoutine4", action: actionR4 };
const mockRoutine5: Routine = { name: "mockRoutine5", action: actionR5 };

// mock routines
jest.mock("../routines", () => [
  mockRoutine1,
  mockRoutine2,
  mockRoutine3,
  mockRoutine4,
  mockRoutine5,
]);

// mock flow
jest.mock("../routines/flow.json", () => ({
  flow: ["mockRoutine1", ["mockRoutine4", "mockRoutine2"], "mockRoutine3"],
  onErrorRoutine: "mockRoutine5",
}));

// mock routing
jest.mock("@/modules/Routing", () => {
  const useNavigation = jest.fn().mockReturnValue({
    __esModule: true,
    navigate: jest.fn(),
  });

  return {
    __esModule: true,
    useNavigation,
  };
});

test("if the flow work as expected (sync and async)", async () => {
  // run boostrap action
  const { useBootstrap } = require("./useBootstrap");
  const { result } = renderHook(() => useBootstrap());
  await act(async () => await result.current.run());

  // call times assurance
  expect(actionR1).toBeCalledTimes(1);
  expect(actionR2).toBeCalledTimes(1);
  expect(actionR3).toBeCalledTimes(1);
  expect(actionR4).toBeCalledTimes(1);
  expect(actionR5).not.toBeCalled();

  // call order assurance ["mockRoutine1", ["mockRoutine4", "mockRoutine2"], "mockRoutine3"],
  const actionR1Order = actionR1.mock.invocationCallOrder[0];
  const actionR2Order = actionR2.mock.invocationCallOrder[0];
  const actionR3Order = actionR3.mock.invocationCallOrder[0];
  const actionR4Order = actionR3.mock.invocationCallOrder[0];
  expect(actionR1Order).toBeLessThan(actionR2Order);
  expect(actionR1Order).toBeLessThan(actionR4Order);
  expect(actionR3Order).toBeGreaterThanOrEqual(actionR2Order);
  expect(actionR3Order).toBeGreaterThanOrEqual(actionR4Order);
});

test("if onError is triggered when something is wrong", async () => {
  // change actionR1 behavior to throw an exception
  actionR1.mockImplementation(() => {
    throw new Error();
  });

  // run boostrap action
  const { useBootstrap } = require("./useBootstrap");
  const { result } = renderHook(() => useBootstrap());
  await act(async () => await result.current.run());

  // call times assurance
  expect(actionR1).toBeCalledTimes(1);
  expect(actionR1).toThrow();
  expect(actionR2).not.toBeCalled();
  expect(actionR3).not.toBeCalled();
  expect(actionR4).not.toBeCalled();
  expect(actionR5).toBeCalledTimes(1);
});
