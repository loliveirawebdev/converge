import fs from "fs";

const exampleFile = "./modules/Environment/environment.example.ts";
const devFile = "./modules/Environment/environment.dev.ts";
const prodFile = "./modules/Environment/environment.prod.ts";

if (!fs.existsSync(devFile)) {
  fs.copyFileSync(exampleFile, devFile);
}

if (!fs.existsSync(prodFile)) {
  fs.copyFileSync(exampleFile, prodFile);
}
