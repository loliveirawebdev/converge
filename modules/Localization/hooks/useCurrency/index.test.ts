import { useCurrency } from ".";

jest.mock("react-intl", () => ({
  useIntl: jest.fn().mockReturnValue({
    formatNumber: jest.fn().mockReturnValue("REACT_INTL"),
  }),
}));

jest.mock("@/modules/GlobalState", () => ({
  useGlobalState: jest.fn().mockReturnValue({
    localizationStore: { locale: "ANY_LOCALE" },
  }),
}));

jest.mock("../../config", () => ({
  LocalizationDefinitions: [
    {
      keys: ["ANY_LOCALE"],
      masks: { currency: "ANY_MASK" },
    },
  ],
}));

test("if react-intl is being used and currency mask is being set", () => {
  const { formatCurrency } = useCurrency();
  const currency = formatCurrency(123);
  expect(currency).toBe("ANY_MASK REACT_INTL");
});
