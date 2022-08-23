import { ModulesInstances } from "@/modules/instances";

export function getModuleByName(name: string) {
  const definition = ModulesInstances.find((module) => module.name === name);

  if (!definition) {
    throw new Error(`[getModuleName] instance not found (${name})`);
  }

  return definition.module;
}
