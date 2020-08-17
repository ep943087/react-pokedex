// entry point -> output

const path = require("path");
const bundlePath = path.join(__dirname, "public");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: bundlePath,
    filename: "bundle.js",
  },
  module: {
    rules: [
      { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ },
      { test: /\.s?css$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  devtool: "cheap-module-eval-source-map", // allows to see exact file and line where errors occur
  devServer: {
    contentBase: bundlePath,
  },
};
