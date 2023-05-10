const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { build: twBuild } = require("tailwindcss/lib/cli/build");

module.exports = (async () => {
  /** @type {import('expo/metro-config').MetroConfig} */
  const config = getDefaultConfig(__dirname, {
    // Enable CSS support.
    isCSSEnabled: true,
  });

  await twBuild({
    "--input": path.relative(__dirname, "./global.css"),
    "--output": path.resolve(
      __dirname,
      "node_modules/.cache/expo/tailwind/eval.css"
    ),
    "--watch": process.env.NODE_ENV === "development" ? "always" : false,
    "--poll": true,
  });

  return config;
})();
