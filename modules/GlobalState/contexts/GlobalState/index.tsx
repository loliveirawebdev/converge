import React from "react";
import { RootStore } from "../../stores/RootStore";

const rootStore = new RootStore();
export const GlobalState = React.createContext<RootStore>(rootStore);

export default function GlobalStateCtx(props: any) {
  return (
    <GlobalState.Provider value={rootStore}>
      {props?.children}
    </GlobalState.Provider>
  );
}
