import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@/modules/Routing";
import { useTranslation } from "@/modules/Localization";

export default function Home() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const onPress = () => navigation.navigate({ to: "Category" });

  return (
    <View>
      <Text onPress={onPress}>{t("welcome")}</Text>
    </View>
  );
}
