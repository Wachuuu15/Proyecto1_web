const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const mime = require('mime-types');



module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"], 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /fontawesome\.css$/,
        use: 'ignore-loader'
      },      
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
      {
        test: /\.(mp4)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'imgs',
          mimetype: mime.lookup('mp4')
        }
      },
    ],
  },
};
