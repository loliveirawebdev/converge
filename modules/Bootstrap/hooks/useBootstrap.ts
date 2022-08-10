import routines from "../routines";
import flowConfig from "../routines/flow.json";
import { findRoutine } from "../helpers/findRoutine";
import { useNavigation } from "@/modules/Routing";

export function useBootstrap() {
  const navigation = useNavigation();

  const run = async () => {
    const { flow, onErrorRoutine } = flowConfig as any;
    const ctx = { navigation };

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
  };

  return { run };
}
