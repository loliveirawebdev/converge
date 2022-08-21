import fs from "fs";

jest.mock("fs", () => ({
  writeFileSync: jest.fn(),
}));

jest.mock("../config/routes", () => ({
  RoutesDefinition: [
    {
      index: true,
      url: "/",
      name: "Foo",
      componentPath: "@/modules/Foo",
    },
    {
      url: "/bar",
      name: "Bar",
      componentPath: "@/modules/Bar",
    },
    {
      url: "baz",
      name: "Baz",
      componentPath: "@/modules/Baz",
    },
  ],
}));

test("if generate files correctly", () => {
  const imports = [
    'import Foo from "@/modules/Foo"',
    'import Bar from "@/modules/Bar"',
    'import Baz from "@/modules/Baz"',
  ];

  const instances = [
    '{ name: "Foo", module: Foo }',
    '{ name: "Bar", module: Bar }',
    '{ name: "Baz", module: Baz }',
  ];

  const instructions = [
    "/* istanbul ignore file */",
    imports.join(";"),
    `export const ModulesInstances: ModulesInstances = [${instances.join(
      ","
    )}];`,
  ];

  require("./instantiateMobileModules");
  expect(fs.writeFileSync).toBeCalledTimes(1);

  const filename = "./modules/instances.ts";
  const expectedOutput = instructions.join(";");
  expect(fs.writeFileSync).toBeCalledWith(filename, expectedOutput);
});
