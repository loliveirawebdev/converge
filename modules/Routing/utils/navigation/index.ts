import {
  useNavigation as useNativeNavigation,
  NavigationProp,
  CommonActions,
  useRoute,
} from "@react-navigation/native";

function navigate(navigation: NavigationProp<any>): Routing.NavigateFunction {
  return function (params) {
    const { to, query, reset } = params;
    const newRoute = { name: to, params: { query } };

    // just move on
    if (!reset) {
      navigation.navigate(newRoute);
      return;
    }

    const action = { index: 1, routes: [newRoute] };
    navigation.dispatch(CommonActions.reset(action));
  };
}

export function useNavigation(): Routing.NavigationHelper {
  const navigation = useNativeNavigation();
  const route = useRoute<any>();

  return {
    back: navigation.goBack,
    navigate: navigate(navigation),
    route: { name: route.name, query: route?.params?.query },
  };
}
