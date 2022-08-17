import { useLocale } from "./index";

jest.mock("expo-localization", () => ({ locale: "expo" }));

test("if expo localization is being used for mobile", () => {
  const locale = useLocale();
  expect(locale).toBe("expo");
});
