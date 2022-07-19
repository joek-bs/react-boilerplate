const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled", // 'disabled' | 'static' | 'server'
    }),
  ],
  devServer: {
    host: "localhost",
    open: true,
  },
}
