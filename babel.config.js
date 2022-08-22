const NPM_TRIGGER = process.env.npm_lifecycle_script;
const STORYBOOK_SCRIPT = "start-storybook";

if (NPM_TRIGGER !== STORYBOOK_SCRIPT) {
  module.exports = {
    presets: ["@expo/next-adapter/babel"],
    plugins: [
      ["react-native-reanimated/plugin"],
      ["@babel/plugin-proposal-class-properties", { loose: false }],
      ["@babel/plugin-proposal-private-methods", { loose: false }],
      ["@babel/plugin-proposal-private-property-in-object", { loose: false }],
      ["module-resolver", { alias: { "@": "./" } }],
    ],
  };
}
