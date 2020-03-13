const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

process.env.NODE_ENV = 'production';

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['postcss-loader'],
      }
    ]
  }
});