module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [["module:react-native-dotenv"]],
    // plugins: ["@babel/transform-react-jsx-source"],
  };
};
