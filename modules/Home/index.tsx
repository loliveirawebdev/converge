import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@/modules/Routing";

export default function Home() {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate({ to: "Category" });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={onPress}>Home</Text>
    </View>
  );
}
