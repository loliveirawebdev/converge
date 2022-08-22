import { LocalizationStore } from "../LocalizationStore";

export class RootStore {
  localizationStore: LocalizationStore;

  constructor(context: GlobalState.StoreContext) {
    this.localizationStore = new LocalizationStore(context);
  }
}
