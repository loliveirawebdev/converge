import { ModuleInstances } from "@/modules/instances";

export function getModuleByName(name: string) {
  const definition = ModuleInstances.find((module) => module.name === name);
  return definition.module;
}
