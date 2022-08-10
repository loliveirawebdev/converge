import { MixedRoutes } from "./routes.mixed";
import { WebRoutes } from "./routes.next";
export const RoutesDefinition: Route[] = [...MixedRoutes, ...WebRoutes];
