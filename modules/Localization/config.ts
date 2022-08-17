import en from "./translations/en.json";
import ptBR from "./translations/pt-BR.json";

export const AvailableLocales: Localization.AvailableLocales = {
  ENGLISH: ["en-US", "en"],
  BRAZILIAN_PORTUGUESE: ["pt", "pt-BR"],
};

export const LocalizationMessages: Localization.LocalizationDefinitions = [
  {
    keys: AvailableLocales.ENGLISH,
    messages: en,
  },
  {
    keys: AvailableLocales.BRAZILIAN_PORTUGUESE,
    messages: ptBR,
  },
];
