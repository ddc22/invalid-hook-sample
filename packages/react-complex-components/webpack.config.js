const path = require("path");
const webpack = require("webpack");
module.exports = {
  target: "node",
  mode: "development",
  entry: "./src/export_pos.js",
  output: {
    filename: "index.js",
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "lib")
  },
  plugins: [new webpack.ProgressPlugin()],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false
      },
      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },
  devtool: "none",
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};
