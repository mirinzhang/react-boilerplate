const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');

const __DEV__ = (process.env.NODE_ENV || "development") === "development";

module.exports = {
    entry: __DEV__
        ? [ './src/index' ]
        : [ ...Object.keys(pkg.dependencies), './src/index' ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:6].chunk.js',
        // sourceMapFilename: '[name].bundle.map',
    },
    devtool: __DEV__ ? "eval-cheap-module-source-map" : "hidden-source-map",
    plugins: __DEV__
        ? [].concat(plugins.commonPlugins).concat(plugins.devPlugins)
        : [].concat(plugins.commonPlugins).concat(plugins.prodPlugins),
    resolve: {
        extensions: [ '.jsx', '.js', '.sass', '.scss' ],
    },
    resolveLoader: {
        moduleExtensions: [ '-loader' ],
    },
    module: {
        rules,
    },
};
