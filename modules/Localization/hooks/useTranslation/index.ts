import { useIntl } from "react-intl";

export function useTranslation() {
  const { formatMessage } = useIntl();

  // make the usage of formatMessage easier
  const t = (key: string, params?: Record<string, string>) => {
    return formatMessage({ id: key }, params);
  };

  return { t };
}
