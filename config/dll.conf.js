/**
 * Created by Min on 2017/8/17.
 */
const path = require('path');
const pkg = require('../package.json');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    name: 'vendor',
    entry: Object.keys(pkg.dependencies),
    output: {
        path: path.join(__dirname, '../public/dll'),
        filename: '[name].js',
        library: "vendor_[hash]",
    },
    plugins: [
        new CleanWebpackPlugin([ 'public' ], { root: path.join(__dirname, '../') }),
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]_[hash]',
            path: path.join(__dirname, '../public/dll', 'manifest.json'),
        }),
    ]
};
