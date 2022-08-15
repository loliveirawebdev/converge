import { useRouter } from "next/router";
import { useNavigation } from "./index.web";
import { renderHook } from "@testing-library/react-hooks/native";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("../../config/routes", () => ({
  RoutesDefinition: [
    {
      url: "/foo",
      name: "Foo",
      componentPath: "@/modules/Foo",
    },
  ],
}));

jest.mock("next/router", () => {
  const useRouter = jest.fn().mockReturnValue({
    back: jest.fn(),
    push: jest.fn(),
    query: "ANY_QUERY",
    pathname: "ANY_ROUTE",
  });

  return {
    useRouter,
    __esModule: true,
  };
});

test("if back method is triggering next back method", async () => {
  const { result } = renderHook(() => useNavigation());
  result.current.back();

  const { back } = useRouter();
  expect(back).toBeCalledTimes(1);
});

test("if is returning route data from next navigation", async () => {
  const { result } = renderHook(() => useNavigation());
  const { name, query } = result.current.route;

  expect(name).toBe("ANY_ROUTE");
  expect(query).toBe("ANY_QUERY");
});

test("if navigate is triggering native navigate method", () => {
  const { result } = renderHook(() => useNavigation());
  const { navigate } = result.current;

  navigate({ to: "Foo" });
  navigate({ to: "Foo", query: { q: "1" } });
  navigate({ to: "Foo", query: { q: ["2"] } });
  navigate({ to: "Foo", reset: true });

  const fstExampleExpectation = { pathname: "/foo", query: undefined };
  const secExampleExpectation = { pathname: "/foo", query: { q: "1" } };
  const thdExampleExpectation = { pathname: "/foo", query: { q: ["2"] } };
  const fthExampleExpectation = { pathname: "/foo", query: undefined };

  const router = useRouter();
  expect(router.push).toBeCalledTimes(4);
  expect(router.push).toBeCalledWith(fstExampleExpectation);
  expect(router.push).toBeCalledWith(secExampleExpectation);
  expect(router.push).toBeCalledWith(thdExampleExpectation);
  expect(router.push).toBeCalledWith(fthExampleExpectation);
});
