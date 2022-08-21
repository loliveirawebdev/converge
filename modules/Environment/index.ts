import { Environment as EnvDev } from "./environment.dev";
import { Environment as EnvProd } from "./environment.prod";
import { isDevEnvironment } from "./helpers/isDevEnvironment";

export const Environment = isDevEnvironment() ? EnvDev : EnvProd;
