import { MixedRoutes } from "./routes.mixed";
import { WebRoutes } from "./routes.next";
export const RoutesDefinition: Routing.Route[] = [...MixedRoutes, ...WebRoutes];
