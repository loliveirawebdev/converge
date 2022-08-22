import { MessageFormatElement } from "react-intl";
import { action, makeObservable, observable } from "mobx";

// deep import to avoid require cycle warning
import { LocalizationDefinitions } from "@/modules/Localization/config";

export class LocalizationStore {
  locale: string;
  messages: Record<string, string> | Record<string, MessageFormatElement[]>;

  constructor(context: GlobalState.StoreContext) {
    const { locale } = context;

    makeObservable(this, {
      locale: observable,
      messages: observable,
      loadMessages: action,
      changeLocale: action,
    });

    this.locale = locale;
    this.loadMessages();
  }

  /**
   * Load all messages in memory
   */
  loadMessages() {
    if (!LocalizationDefinitions.length) {
      const msg = "[LocalizationStore] no Localization messages defined";
      throw new Error(msg);
    }

    try {
      const findDefinitionRule = (def) => def.keys.includes(this.locale);
      const localizationDef = LocalizationDefinitions.find(findDefinitionRule);

      if (!localizationDef) {
        const msg = `[LocalizationStore] cannot load messages for locale: ${this.locale}`;
        throw new Error(msg);
      }

      this.messages = localizationDef.messages;
    } catch (err) {
      const anyDefinition = LocalizationDefinitions[0];
      this.messages = anyDefinition.messages;
    }
  }

  /**
   * Change locale string and reload all messages
   * @param {string} newLocale
   */
  changeLocale(newLocale: string) {
    this.locale = newLocale;
    this.loadMessages();
  }
}
