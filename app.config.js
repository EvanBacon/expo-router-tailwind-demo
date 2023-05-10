module.exports = ({ config }) => {
  config.web.output =
    process.env.NODE_ENV === "production" ? "static" : "single";

  return config;
};
