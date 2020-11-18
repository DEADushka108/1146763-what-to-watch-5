const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const path = require('path');
const publicDirection = path.resolve(__dirname, 'public');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: publicDirection,
  },
  devServer: {
    contentBase: publicDirection,
    open: true,
    compress: true,
    port: 1285,
    watchContentBase: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.ts', 'tsx', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: [`es-us`],
    }),
  ]
}
