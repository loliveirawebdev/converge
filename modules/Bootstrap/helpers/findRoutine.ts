export function findRoutine(routines: Bootstrap.Routine[], name: string) {
  const routine = routines.find((routine) => routine.name === name);

  if (!routine) {
    throw new Error(`[useBootstrap] invalid routine name (${name})`);
  }

  return routine;
}
