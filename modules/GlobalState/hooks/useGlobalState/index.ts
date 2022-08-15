import React from "react";
import { GlobalState } from "../../contexts/GlobalState";
export const useGlobalState = () => React.useContext(GlobalState);
