const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
    compress: true,
    hot: true,
  },
}

module.exports = merge(commonConfig, devConfig)

// Context API
// Save the users in the form of map { userId: {} }
// Validation of all the field
// Unit testing
// Submit the form on enter by using form component and submit button
// compression gZip, Brotli
