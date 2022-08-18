import { useIntl } from "react-intl";

export function useNumber() {
  const { formatNumber } = useIntl();
  return { formatNumber };
}
