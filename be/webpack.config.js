const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv');

module.exports = (env, options) => {
  dotenv.config({
    path: './.env',
  });
  return {
    name: 'ts-back-setting',
    mode: process.env.NODE_ENV || 'development', // "production" | "development" | "none"
    devtool: 'eval', // source-map hidden-source-map
    externals: [nodeExternals()],
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', 'json', '.jsx', '.js'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: 'tsconfig.json',
        }),
      ],
    },
    plugins: [],
    entry: {
      index: ['./src/app.ts'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['ts-loader'],
          exclude: ['/node_modules'],
        },
      ],
    },
    optimization: {},
    output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].js',
    },
    target: 'node',
  };
};
