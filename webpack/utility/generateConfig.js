const webpack = require("webpack");
const path = require("path");

function generateStaticConfigs(env) {
  const appConfig =
    String(env).toLowerCase() === "dev"
      ? require(path.resolve("./src/Config/app.dev.json"))
      : require(path.resolve("./src/Config/app.prod.json"));

  // TODO - Add more localization choices
  const intln = require(path.resolve("./src/Config/Intln/intln.en.json"));

  return new webpack.DefinePlugin({
    CONFIG: JSON.stringify(appConfig),
    INTLN: JSON.stringify(intln),
  });
}

module.exports = {
  generateAppConfig: generateStaticConfigs,
};
