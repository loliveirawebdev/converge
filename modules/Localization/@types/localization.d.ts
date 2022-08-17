declare namespace Localization {
  interface LocalizationDefinition {
    keys: string | string[];
    messages: Record<string | string>;
  }

  type AvailableLocales = Record<string, string | string[]>;
  type LocalizationDefinitions = LocalizationDefinition[];
}
