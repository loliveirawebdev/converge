/* istanbul ignore file */

import en from "./translations/en.json";
import ptBR from "./translations/pt-BR.json";

export const AvailableLocales: Localization.AvailableLocales = {
  ENGLISH: ["en-US", "en"],
  BRAZILIAN_PORTUGUESE: ["pt", "pt-BR"],
};

export const LocalizationDefinitions: Localization.LocalizationDefinitions = [
  {
    keys: AvailableLocales.ENGLISH,
    messages: en,
    masks: {
      currency: "$",
      date: "M/DD/YYYY",
    },
  },
  {
    keys: AvailableLocales.BRAZILIAN_PORTUGUESE,
    messages: ptBR,
    masks: {
      currency: "R$",
      date: "DD/MM/YYYY",
    },
  },
];
