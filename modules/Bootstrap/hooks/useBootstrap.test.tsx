import onError from "../routines/onErrorRoutine";
import healthRoutine from "../routines/healthRoutine";

import { useBootstrap } from "./useBootstrap";
import { useNavigation } from "@/modules/Routing";
import { renderHook, act } from "@testing-library/react-hooks/native";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("../routines/onErrorRoutine.ts");
jest.mock("../routines/healthRoutine.ts");

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

test("move forward when everything works well", async () => {
  const { result } = renderHook(() => useBootstrap());
  await act(() => result.current.run());

  const { navigate } = useNavigation();
  expect(navigate).toBeCalledWith({ to: "Home", reset: true });
  expect(onError.action).not.toBeCalled();
});

test("trigger onErrorRoutine when something happens", async () => {
  // crash on example 1
  healthRoutine.action = jest.fn().mockRejectedValue(new Error());

  const { result } = renderHook(() => useBootstrap());
  await act(() => result.current.run());

  expect(onError.action).toBeCalled();
});
