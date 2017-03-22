var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/entries/index/index.js",
    about: "./src/entries/about/about.js"
  },
  output: {
    path: "./dist",
    filename: '[name].bundle.js',
    chunkFilename: "[name].chunk.js"
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // html-loader can replace all image urls in .html file
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", "css", "less")
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=1024"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: "./src/entries/index/index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/entries/about/about.html",
      filename: "about.html",
      chunks: ["about"]
    })
  ],
  devServer: {
    host: '0.0.0.0'
  },
}