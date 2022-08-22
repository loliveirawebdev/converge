const MODULES_TO_TRANSPILE = [
  "react-native-web",
  "next-optimized-images",
  "imagemin-mozjpeg",
  "imagemin-optipng",
  "imagemin-svgo",
  "svg-sprite-loader",
  "webp-loader",
  "moti",
  "@motify/core",
  "@motify/components",
];

const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withTM = require("next-transpile-modules")(MODULES_TO_TRANSPILE);
const withFonts = require("next-fonts");

const plugins = [
  withOptimizedImages,
  withFonts,
  withTM,
  [withExpo, { projectRoot: __dirname }],
];

const nextConfig = {
  webpack5: true,
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "pt-BR",
  },
};

module.exports = withPlugins(plugins, nextConfig);
