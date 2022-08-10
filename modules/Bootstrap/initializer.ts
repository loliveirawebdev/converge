import React from "react";
import { useNavigation } from "@/modules/Routing";

export function useInitializer() {
  const navigation = useNavigation();
  const onReady = () => navigation.navigate({ to: "Home", reset: true });
  React.useEffect(() => onReady(), []);
}
