import { useLocale } from "./index.web";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({ locale: "next" }),
}));

test("if next router is being used for web", () => {
  const locale = useLocale();
  expect(locale).toBe("next");
});
