/* eslint-disable @typescript-eslint/no-var-requires */
const mockEnglish = { keys: "en", messages: { test: "english" } };
const mockPortuguese = { keys: "pt", messages: { test: "portuguese" } };

beforeEach(() => {
  jest.resetModules();
});

jest.mock("mobx", () => {
  return {
    action: jest.fn(),
    makeObservable: jest.fn(),
    observable: jest.fn(),
  };
});

test("if is loading messages correctly", () => {
  jest.mock("@/modules/Localization/config", () => ({
    LocalizationDefinitions: [mockEnglish],
  }));

  const { LocalizationStore } = require("./LocalizationStore");
  const store = new LocalizationStore({ locale: "en" });

  expect(store.locale).toBe("en");
  expect(store.messages).toMatchObject(mockEnglish.messages);
});

test("if is changing locale correctly", () => {
  jest.mock("@/modules/Localization/config", () => ({
    LocalizationDefinitions: [mockEnglish, mockPortuguese],
  }));

  const { LocalizationStore } = require("./LocalizationStore");
  const store = new LocalizationStore({ locale: "en" });

  expect(store.locale).toBe("en");
  expect(store.messages).toMatchObject(mockEnglish.messages);

  // change locale
  store.changeLocale("pt");
  expect(store.locale).toBe("pt");
  expect(store.messages).toMatchObject(mockPortuguese.messages);
});

test("if is default is being loaded when locale is invalid", () => {
  jest.mock("@/modules/Localization/config", () => ({
    LocalizationDefinitions: [mockEnglish, mockPortuguese],
  }));

  const { LocalizationStore } = require("./LocalizationStore");
  const store = new LocalizationStore({ locale: "ch" });

  expect(store.locale).toBe("ch");
  expect(store.messages).toMatchObject(mockEnglish.messages);
});

test("if is store will crash if messages is not configured", () => {
  jest.mock("@/modules/Localization/config", () => ({
    LocalizationDefinitions: [],
  }));

  const { LocalizationStore } = require("./LocalizationStore");
  const test = () => new LocalizationStore({ locale: "ch" });

  expect(test).toThrow();
});

export {};
