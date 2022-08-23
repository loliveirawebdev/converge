import React from "react";
import { View, Text } from "react-native";
import { useBootstrap } from "../../hooks/useBootstrap";

export default function Trigger() {
  const { run } = useBootstrap();

  React.useEffect(() => {
    run();
  }, []);

  return (
    <View>
      <Text>loading...</Text>
    </View>
  );
}
