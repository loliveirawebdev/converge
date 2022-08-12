import { ModuleInstances } from "@/modules/instances";

export function getModuleByName(name: string) {
  const definition = ModuleInstances.find((module) => module.name === name);

  if (!definition) {
    throw new Error(`[getModuleName] instance not found (${name})`);
  }

  return definition.module;
}
