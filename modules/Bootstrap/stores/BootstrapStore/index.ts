import { action, makeObservable, observable } from "mobx";
type BootstrapStoreNext = Omit<BootstrapStore, "setIsInitialized" | "setError">;

export class BootstrapStore {
  private static instance: BootstrapStore;

  error: boolean;
  isInitialized: boolean;
  results: Bootstrap.RoutineResult[];

  constructor() {
    makeObservable(this, {
      setError: action,
      error: observable,
      setIsInitialized: action,
      isInitialized: observable,
    });

    this.results = [];
    this.error = false;
    this.isInitialized = false;
  }

  /**
   * Change isInitialized to true
   */
  setIsInitialized() {
    this.isInitialized = true;
  }

  /**
   * Change error to true
   */
  setError() {
    this.error = true;
  }

  /**
   * getInstance method
   * @return {BootstrapStore}
   */
  static getInstance() {
    if (!BootstrapStore.instance) {
      BootstrapStore.instance = new BootstrapStore();
    }

    return BootstrapStore.instance;
  }

  /**
   * getInstance method
   * @param {BootstrapStore} store
   * @return {BootstrapStore}
   */
  static syncInstance(store: BootstrapStoreNext) {
    const newStore = new BootstrapStore();
    Object.assign(newStore, store);

    BootstrapStore.instance = newStore;
    return BootstrapStore.instance;
  }
}
