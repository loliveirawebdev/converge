import { useStack } from "./index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

jest.mock("@react-navigation/native-stack", () => ({
  createNativeStackNavigator: jest.fn().mockReturnValue("STACK"),
}));

test("if react-navigation is being used", () => {
  const stack = useStack();
  const original = createNativeStackNavigator();
  expect(stack).toBe(original);
});
