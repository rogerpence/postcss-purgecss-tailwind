const path = require("path");
var ManifestPlugin = require("webpack-manifest-plugin");
// Note code has changed since Colt Steele video--
// braces now necessary.
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: "./resources/js/main.js",
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
  ]
};