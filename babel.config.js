module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    
    //yarn add -D @types/react-native-dotenv
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "react-native-dotenv",
        },
      ],
    ],
  };
};
