import { useNavigation } from "./index";
import { renderHook } from "@testing-library/react-hooks/native";

import {
  useNavigation as useNativeNavigation,
  CommonActions,
} from "@react-navigation/native";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("@react-navigation/native", () => {
  const useNavigation = jest.fn().mockReturnValue({
    goBack: jest.fn(),
    navigate: jest.fn(),
    dispatch: jest.fn(),
  });

  const useRoute = jest.fn().mockReturnValue({
    name: "Foo",
    params: { query: "Bar" },
  });

  return {
    useRoute,
    useNavigation,
    __esModule: true,
    CommonActions: { reset: jest.fn() },
  };
});

test("if back method is triggering native back method", async () => {
  const { result } = renderHook(() => useNavigation());
  result.current.back();

  const { goBack } = useNativeNavigation();
  expect(goBack).toBeCalledTimes(1);
});

test("if is returning route data from native navigation", async () => {
  const { result } = renderHook(() => useNavigation());
  const { name, query } = result.current.route;

  expect(name).toBe("Foo");
  expect(query).toBe("Bar");
});

test("if navigate is triggering native navigate method", () => {
  const { navigate: nativeNavigate, dispatch } = useNativeNavigation();
  const { result } = renderHook(() => useNavigation());
  const { navigate } = result.current;

  navigate({ to: "Foo" });
  navigate({ to: "Bar", query: { q: "1" } });
  navigate({ to: "Bat", query: { q: ["2"] } });
  navigate({ to: "Baz", reset: true });

  const expectedFooRoute = { name: "Foo", params: { query: undefined } };
  const expectedBarRoute = { name: "Bar", params: { query: { q: "1" } } };
  const expectedBatRoute = { name: "Bat", params: { query: { q: ["2"] } } };
  const expectedBazRoute = { name: "Baz", params: { query: undefined } };
  const expectedBazReset = { index: 1, routes: [expectedBazRoute] };

  // reset false
  expect(nativeNavigate).toBeCalledTimes(3);
  expect(nativeNavigate).toBeCalledWith(expectedFooRoute);
  expect(nativeNavigate).toBeCalledWith(expectedBarRoute);
  expect(nativeNavigate).toBeCalledWith(expectedBatRoute);

  // reset true
  expect(dispatch).toBeCalledTimes(1);
  expect(CommonActions.reset).toBeCalledTimes(1);
  expect(CommonActions.reset).toBeCalledWith(expectedBazReset);
});
