const { IgnorePlugin } = require('webpack');
const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  resolve: {
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['en', 'fr', 'de', 'es', 'it'], // Keep only needed locales
    }),
  ],
};
