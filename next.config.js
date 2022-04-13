module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["."],
      prependData: `@import "~@styles/_vars.scss";`,
    };
  }
  defaultConfig["reactStrictMode"] = true;
  return defaultConfig;
};
