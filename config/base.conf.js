const webpack = require('webpack');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');
const appConfig = require('./app.conf');
const resolver = require('./webpack/resolver');

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development';

module.exports = {
    entry: __DEV__ ? appConfig.apps.entry.dev : appConfig.apps.entry.prod,
    output: appConfig.apps.output,
    devtool: __DEV__ ? appConfig.apps.devtool.dev : appConfig.apps.devtool.prod,
    plugins: __DEV__
        ? [].concat(plugins.commonPlugins).concat(plugins.devPlugins)
        : [].concat(plugins.commonPlugins).concat(plugins.prodPlugins),
    resolve: resolver.resolve,
    resolveLoader: resolver.resolveLoader,
    module: {
        rules,
    },
};
