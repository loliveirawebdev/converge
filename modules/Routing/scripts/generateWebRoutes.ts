import fs from "fs";
import { RoutesDefinition } from "../config/routes.web";

const routes = RoutesDefinition.map((route) => {
  const filename = route.index ? "index" : route.url;

  return {
    filename: `pages/${filename}.tsx`,
    module: `export { default } from "${route.componentPath}";`,
  };
});

routes.forEach((route) => fs.writeFileSync(route.filename, route.module));
