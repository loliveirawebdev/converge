import { useDate } from ".";

jest.mock("react-intl", () => ({
  useIntl: jest.fn().mockReturnValue({
    formatDate: jest.fn().mockReturnValue("REACT_INTL"),
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
      masks: { date: "ANY_MASK " },
    },
  ],
}));

jest.mock("moment", () =>
  jest.fn().mockReturnValue({
    toDate: jest.fn().mockReturnValue(new Date()),
  })
);

test("if react-intl is being used without any interventions", () => {
  const { formatDate } = useDate();

  const dateObject = formatDate(new Date());
  const dateString = formatDate("ANY_DATE_STRING");

  expect(dateObject).toBe("REACT_INTL");
  expect(dateString).toBe("REACT_INTL");
});
