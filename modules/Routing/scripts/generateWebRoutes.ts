import fs from "fs";
import path from "path";
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

routes.forEach((route) => {
  fs.mkdirSync(path.dirname(route.filename), { recursive: true });
  fs.writeFileSync(route.filename, route.module);
});
