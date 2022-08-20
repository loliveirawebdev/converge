import React from "react";
import { RootStore } from "../../stores/RootStore";
import { useFlipper } from "../../hooks/useFlipper";

// deep import to avoid require cycle warning
import { useLocale } from "@/modules/Localization/hooks/useLocale";
export const GlobalState = React.createContext<RootStore>(null);

export default function GlobalStateCtx(props: any) {
  const locale = useLocale();
  const rootStore = new RootStore({ locale });
  useFlipper(rootStore);

  return (
    <GlobalState.Provider value={rootStore}>
      {props?.children}
    </GlobalState.Provider>
  );
}
