const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  entry: {
    bundle: path.resolve(__dirname, "..", "./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "[name].[contenthash].js", // name is same as entry i.e bundle.js
    clean: true,
  },
  module: {
    rules: [
       {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Sidebar Application",
      filename: "index.html",
      template: path.resolve(__dirname, "..", "./public/index.html"),
    }),
  ],
};
