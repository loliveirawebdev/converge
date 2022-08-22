import { RootStore } from "./index";

const CONTEXT: GlobalState.StoreContext = {
  locale: "en",
};

class MockStore {
  name: string;

  constructor(name) {
    this.name = name;
  }
}

const mockLocalizationStore = new MockStore("LOCALIZATION_STORE");

jest.mock("../LocalizationStore", () => ({
  LocalizationStore: () => mockLocalizationStore,
}));

test("if stores are being created correctly", () => {
  const rootStore = new RootStore(CONTEXT);
  const childStoresCount = Object.entries(rootStore).length;
  expect(rootStore.localizationStore).toBe(mockLocalizationStore);
  expect(childStoresCount).toBe(1); // force throw when adds another store
});
