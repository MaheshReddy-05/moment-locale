const { IgnorePlugin } = require('webpack');
const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      'moment-locale': path.resolve(__dirname, 'node_modules/moment/locale'),
    },
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['en', 'fr', 'de', 'es', 'it'], // Keep only needed locales
    }),
  ],
};
