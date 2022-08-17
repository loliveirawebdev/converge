import React from "react";
import { useLocale } from "@/modules/Localization";
import { RootStore } from "../../stores/RootStore";

export const GlobalState = React.createContext<RootStore>(null);

export default function GlobalStateCtx(props: any) {
  const locale = useLocale();
  const rootStore = new RootStore({ locale });

  return (
    <GlobalState.Provider value={rootStore}>
      {props?.children}
    </GlobalState.Provider>
  );
}
