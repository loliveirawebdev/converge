import { ModulesInstances } from "@/modules/instances";
import { getModuleByName } from "./index";

jest.mock("@/modules/instances", () => ({
  ModulesInstances: [{ name: "Foo", module: jest.fn() }],
}));

test("if is returning the right module", () => {
  const module = getModuleByName("Foo");
  module();

  const { module: fooModule } = ModulesInstances[0];
  expect(fooModule).toBeCalled();
});

test("if is throwing an error if module does not exists", () => {
  const test = () => getModuleByName("Bar");
  expect(test).toThrowError();
});
