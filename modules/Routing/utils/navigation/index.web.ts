import {
  NavigateFunction,
  NavigationHelper,
} from "../../types/NavigationHelper";

import { NextRouter, useRouter } from "next/router";
import { RoutesDefinition } from "../../config/routes";

function navigate(router: NextRouter): NavigateFunction {
  return function (params) {
    const { to, query } = params;
    const routeName = RoutesDefinition.find((route) => route.name === to);
    router.push({ pathname: routeName.url, query });
  };
}

export function useNavigation(): NavigationHelper {
  const router = useRouter();

  return {
    back: router.back,
    navigate: navigate(router),
    route: { name: router.pathname, query: router.query },
  };
}
