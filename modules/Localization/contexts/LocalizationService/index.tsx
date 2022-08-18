import React from "react";
import { observer } from "mobx-react";
import { IntlProvider } from "react-intl";
import { useGlobalState } from "@/modules/GlobalState";

const LocalizationService = (props: any) => {
  const { localizationStore } = useGlobalState();
  const { locale, messages } = localizationStore;

  return (
    <IntlProvider locale={locale} messages={messages}>
      {props.children}
    </IntlProvider>
  );
};

export default observer(LocalizationService);
