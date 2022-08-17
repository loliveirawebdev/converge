import React from "react";
import { IntlProvider } from "react-intl";
import { useGlobalState } from "@/modules/GlobalState";

export default function LocalizationService(props: any) {
  const { localizationStore } = useGlobalState();
  const { locale, messages } = localizationStore;

  return (
    <IntlProvider locale={locale} messages={messages}>
      {props.children}
    </IntlProvider>
  );
}
