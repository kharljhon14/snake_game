const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './bootstrap.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bootstrap.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './index.html',
          to: './',
        },
      ],
    }),
  ],
  mode: 'development',
};
