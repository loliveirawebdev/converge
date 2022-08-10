import { MixedRoutes } from "./routes.mixed";
import { MobileRoutes } from "./routes.mobile";
export const RoutesDefinition: Route[] = [...MixedRoutes, ...MobileRoutes];
