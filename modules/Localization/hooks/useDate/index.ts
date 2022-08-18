import moment from "moment";
import { useIntl } from "react-intl";
import { useGlobalState } from "@/modules/GlobalState";
import { LocalizationDefinitions } from "../../config";

export function useDate() {
  const { formatDate: intlFormatDate } = useIntl();
  const { localizationStore } = useGlobalState();

  const formatDate = (date: string | Date) => {
    if (date instanceof Date) {
      return intlFormatDate(date);
    }

    const findRule = (def) => def.keys.includes(localizationStore.locale);
    const { masks } = LocalizationDefinitions.find(findRule);
    const dateInstance = moment(date, masks.date).toDate();
    return intlFormatDate(dateInstance);
  };

  return { formatDate };
}
