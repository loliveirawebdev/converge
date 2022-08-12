import fs from "fs";
import { RoutesDefinition } from "../config/routes.web";

const normalizeUrl = (url: string) => {
  const firstChar = url[0];
  return firstChar === "/" ? url.slice(1) : url;
};

const routes = RoutesDefinition.map((route) => {
  const filename = route.index ? "index" : normalizeUrl(route.url);

  return {
    filename: `pages/${filename}.tsx`,
    module: `export { default } from "${route.componentPath}";`,
  };
});

routes.forEach((route) => fs.writeFileSync(route.filename, route.module));
