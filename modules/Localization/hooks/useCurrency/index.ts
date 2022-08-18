import { useIntl } from "react-intl";
import { useGlobalState } from "@/modules/GlobalState";
import { LocalizationDefinitions } from "../../config";

export function useCurrency() {
  const { formatNumber: originalFormatNumber } = useIntl();
  const { localizationStore } = useGlobalState();

  const formatCurrency = (number: number | bigint) => {
    const findRule = (def) => def.keys.includes(localizationStore.locale);
    const { masks } = LocalizationDefinitions.find(findRule);
    const formatedNumber = originalFormatNumber(number);

    return `${masks.currency} ${formatedNumber}`;
  };

  return { formatCurrency };
}
