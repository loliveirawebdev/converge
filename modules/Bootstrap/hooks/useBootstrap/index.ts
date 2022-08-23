import routines from "../../routines";
import flowConfig from "../../routines/flow.json";
import { findRoutine } from "../../helpers/findRoutine";
import { BootstrapStore } from "../../stores/BootstrapStore";

export function useBootstrap() {
  const bootstrapStore = BootstrapStore.getInstance();

  const run = async () => {
    const ctx = { bootstrapStore };
    const { flow, onErrorRoutine } = flowConfig as any;

    try {
      for (const flowItem of flow) {
        if (typeof flowItem === "string") {
          const singleRoutine = findRoutine(routines, flowItem);
          await singleRoutine.action(ctx);
          continue;
        }

        const mapRoutines = (item) => findRoutine(routines, item).action(ctx);
        const multiRoutines = flowItem.map(mapRoutines);
        await Promise.all(multiRoutines);
      }
    } catch (error) {
      const onError = findRoutine(routines, onErrorRoutine);
      onError.action(ctx, error);
    }

    return bootstrapStore;
  };

  return { run, bootstrapStore };
}
