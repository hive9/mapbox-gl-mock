const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "node_modules/mapbox-gl/")],
        loader: "remove-flow-types-loader"
      }
    ]
  },
  optimization: {
    minimize: false
  }
};
