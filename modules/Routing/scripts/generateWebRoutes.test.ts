import fs from "fs";
import path from "path";

jest.mock("fs", () => ({
  writeFileSync: jest.fn(),
  mkdirSync: jest.fn(),
}));

jest.mock("path", () => ({
  dirname: jest.fn().mockImplementation((path) => path),
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

  expect(path.dirname).toBeCalledTimes(3);
  expect(path.dirname).toBeCalledWith(fooInput.filename);
  expect(path.dirname).toBeCalledWith(barInput.filename);
  expect(path.dirname).toBeCalledWith(bazInput.filename);

  expect(fs.mkdirSync).toBeCalledTimes(3);
  expect(fs.mkdirSync).toBeCalledWith(fooInput.filename, { recursive: true });
  expect(fs.mkdirSync).toBeCalledWith(barInput.filename, { recursive: true });
  expect(fs.mkdirSync).toBeCalledWith(bazInput.filename, { recursive: true });
});
