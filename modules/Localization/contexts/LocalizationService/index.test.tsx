import React from "react";
import LocalizationService from "./index";
import { IntlProvider } from "react-intl";
import { create } from "react-test-renderer";

jest.mock("@/modules/GlobalState", () => ({
  useGlobalState: jest.fn().mockReturnValue({
    localizationStore: {
      locale: "locale",
      messages: { test: "mock" },
    },
  }),
}));

jest.mock("react-intl", () => ({
  IntlProvider: jest.fn().mockReturnValue(null),
}));

test("if IntlProvider is being configured as expected", () => {
  create(<LocalizationService />);

  const expectedProps = {
    children: undefined,
    locale: "locale",
    messages: { test: "mock" },
  };

  expect(IntlProvider).toBeCalledWith(expectedProps, {});
});
