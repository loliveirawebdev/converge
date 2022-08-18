import { useNumber } from "./";

jest.mock("react-intl", () => ({
  useIntl: jest.fn().mockReturnValue({
    formatNumber: jest.fn().mockReturnValue("REACT_INTL"),
  }),
}));

test("if react-intl is being used without interventions", () => {
  const { formatNumber } = useNumber();
  const number = formatNumber(123);

  expect(number).toBe("REACT_INTL");
});
