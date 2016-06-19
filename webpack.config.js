var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./entries/index/index.js",
    about: "./entries/about/about.js"
  },
  output: {
    path: "./dist",
    filename: '[name].bundle.js',
    chunkFilename: "[name].chunk.js"
  },
  module: {
    loaders: [
      // html-loader can replace all image urls in .html file
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", "css", "less")
      },
      { test: /\.(png|jpg)$/, loader: "url-loader?limit=1024" },
      {
        test: /\.(ttf|eot|svg|woff(?:2)?)(\?[a-z0-9]+)?$/,
        loader: "url-loader?limit=1024"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: "./entries/index/index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      template: "./entries/about/about.html",
      filename: "about.html",
      chunks: ["about"]
    })
  ]
}
