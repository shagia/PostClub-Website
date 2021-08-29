// Written by antireal
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CleanCSS = require("clean-css");

const isProd = process.env.NODE_ENV === "production";
const outputDir = path.join(__dirname, "build");

module.exports = {
  entry: "./src/js/main.js",
  mode: isProd ? "production" : "development",
  devtool: "source-map",
  devServer: {
    port: 8080,
    hot: true,
    compress: true,
  },
  output: {
    path: outputDir,
    filename: "[name]-[contenthash].bundle.js",
    chunkFilename: "[name]-[contenthash].bundle.js",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "static",
          to: "",
          globOptions: {
            // don't copy over index.html, HtmlWebpackPlugin will
            // inject the bundled JS paths to this file instead
            ignore: ["**/index.html"],
          },
          noErrorOnMissing: true,
          transform: (data, path) =>
            // minify all css files
            path.match(/.\.css$/) ? new CleanCSS().minify(data).styles : data,
        },
      ],
    }),
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          template: "static/index.html",
          inject: true,
          filename: "index.html",
        },
        isProd && {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }
      )
    ),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", { targets: { esmodules: true } }]],
        },
      },
    ],
  },
};
