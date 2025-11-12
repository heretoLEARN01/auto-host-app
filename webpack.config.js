const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const deps = require('./package.json').dependencies;

const customersUrl = process.env.CUSTOMERS_REMOTE || 'http://localhost:3001/remoteEntry.js';
const jobsUrl = process.env.JOBS_REMOTE || 'http://localhost:3002/remoteEntry.js';

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: { port: 3000 },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: (process.env.HOST_PUBLIC_PATH || '/') ,
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        customersApp: `customersApp@${customersUrl}`,
        jobsApp: `jobsApp@${jobsUrl}`,
      },
      filename: 'remoteEntry.js',
      exposes: {
    './store': './src/store/useGarageStore2.ts',
  './eventBus': './src/eventBus',
  },
      shared: {
        react: { singleton: true, requiredVersion: deps.react,  eager: true },
        'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
         zustand: { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
