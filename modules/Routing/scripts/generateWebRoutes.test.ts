import fs from "fs";

jest.mock("fs", () => ({
  writeFileSync: jest.fn(),
}));

jest.mock("../config/routes.web", () => ({
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
  const fooInput = {
    filename: `pages/index.tsx`,
    module: `export { default } from "@/modules/Foo";`,
  };

  const barInput = {
    filename: `pages/bar.tsx`,
    module: `export { default } from "@/modules/Bar";`,
  };

  const bazInput = {
    filename: `pages/baz.tsx`,
    module: `export { default } from "@/modules/Baz";`,
  };

  require("./generateWebRoutes");
  expect(fs.writeFileSync).toBeCalledTimes(3);
  expect(fs.writeFileSync).toBeCalledWith(fooInput.filename, fooInput.module);
  expect(fs.writeFileSync).toBeCalledWith(barInput.filename, barInput.module);
  expect(fs.writeFileSync).toBeCalledWith(bazInput.filename, bazInput.module);
});
