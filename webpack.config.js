const path = require("path");
const webpack = require("webpack");
const fs = require("fs");

const themePath = path.resolve(
  __dirname,
  `./src/themes/${process.env.THEME_NAME}.js`
);
const settingsBase = path.resolve(__dirname, `./src/settings`);
let settingsPath = path.resolve(
  __dirname,
  `${settingsBase}/settings.${process.env.HOST_LOCATION || "prod"}.js`
);
console.log(settingsBase);
console.log(settingsPath);

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      theme$: themePath,
      settings$: settingsPath,
    },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
  ],
};
