import { action, makeObservable, observable } from "mobx";

export class BootstrapStore {
  isInitialized: boolean;

  constructor() {
    makeObservable(this, {
      isInitialized: observable,
      setIsInitialized: action,
    });

    this.isInitialized = false;
  }

  /**
   * Change isInitialized to true
   */
  setIsInitialized() {
    this.isInitialized = true;
  }
}
