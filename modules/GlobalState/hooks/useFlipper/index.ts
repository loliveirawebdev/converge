import { spy } from "mobx";
import { createMobxDebugger } from "mobx-flipper";
import { RootStore } from "./../../stores/RootStore";

export function useFlipper(store: RootStore) {
  spy(createMobxDebugger(store) as any);
}
