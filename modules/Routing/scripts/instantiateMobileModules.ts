import fs from "fs";
import { RoutesDefinition } from "../config/routes";

// helper function
const replaceArg = (string: string, ...args: string[]) => {
  let replaced = string;

  for (const [index, arg] of args.entries()) {
    const normalizedIndex = index + 1;
    replaced = replaced.replaceAll(`$${normalizedIndex}`, arg);
  }

  return replaced;
};

const imports = RoutesDefinition.map(({ name, componentPath }) => {
  const template = 'import $1 from "$2"';
  return replaceArg(template, name, componentPath);
});

const instances = RoutesDefinition.map(({ name }) => {
  const template = '{ name: "$1", module: $1 }';
  return replaceArg(template, name);
});

const instructions = [
  imports.join(";"),
  `export const ModuleInstances = [${instances.join(",")}];`,
];

fs.writeFileSync("./modules/instances.ts", instructions.join(";"));
