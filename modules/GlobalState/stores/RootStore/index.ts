import { LocalizationStore } from "../LocalizationStore";
import { BootstrapStore } from "../BootstrapStore";

export class RootStore {
  localizationStore: LocalizationStore;
  bootstrapStore: BootstrapStore;

  constructor(context: GlobalState.StoreContext) {
    this.localizationStore = new LocalizationStore(context);
    this.bootstrapStore = new BootstrapStore();
  }
}
