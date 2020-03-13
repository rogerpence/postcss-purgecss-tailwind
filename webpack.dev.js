const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

process.env.NODE_ENV = 'dev';

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
});