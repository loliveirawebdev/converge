import { useIntl } from "react-intl";
import { useTranslation } from "./index";

jest.mock("react-intl", () => {
  const useIntl = jest.fn().mockReturnValue({
    formatMessage: jest.fn().mockReturnValue("mock"),
  });

  return { useIntl };
});

test("if t function is using react-intl under the hood", () => {
  const { t } = useTranslation();
  const { formatMessage } = useIntl();

  // action
  const [firstTest, secondTest] = [t("key"), t("key", { name: "Foo" })];

  // assert
  expect(formatMessage).toBeCalledTimes(2);
  expect(formatMessage).toBeCalledWith({ id: "key" }, undefined);
  expect(formatMessage).toBeCalledWith({ id: "key" }, { name: "Foo" });
  expect(firstTest).toBe("mock");
  expect(secondTest).toBe("mock");
});
