import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@/modules/Routing";
import { useTranslation } from "@/modules/Localization";
import { useGlobalState } from "../GlobalState";
import { observer } from "mobx-react";

const Home = () => {
  const { t } = useTranslation();
  const { localizationStore } = useGlobalState();
  const navigation = useNavigation();
  const onPress = () => navigation.navigate({ to: "Category" });
  const changeLocale = (locale) => () => localizationStore.changeLocale(locale);

  return (
    <View>
      <Text onPress={onPress}>{t("welcome")}</Text>
      <Text onPress={changeLocale("en")}>Change Locale to EN</Text>
      <Text onPress={changeLocale("pt-BR")}>Change Locale to BR</Text>
    </View>
  );
};

export default observer(Home);
