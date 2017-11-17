/**
 * Created by Min on 2017/7/19.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const DashboardPlugin = require('webpack-dashboard/plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development';


exports.commonPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(__DEV__ ? 'development' : 'production'),
        },
    }),
];

exports.devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        title: 'Development',
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        hash: true,
    }),
    new webpack.LoaderOptionsPlugin({
        debug: true,
        minimize: false,
        options: {
            eslint: {
                configFile: path.join(__dirname, '../tools/.eslintrc'),
            },
            context: '/',
        },
    }),
    new webpack.DllReferencePlugin({
        manifest: path.join(__dirname, '../../public/dll', 'manifest.json'),
    }),
    new DashboardPlugin(),
];

exports.prodPlugins = [
    new CleanWebpackPlugin([ 'dist', 'public' ], { root: path.join(__dirname, '../../') }),
    new webpack.optimize.CommonsChunkPlugin({
        names: [ 'vendor', 'manifest' ],
        filename: 'vendor.bundle.js',
        minChunks: ({ resource }) =>
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.(js|less|scss)$/)
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        quiet: true,
        options: {
            context: '/'
        },
    }),
    new ExtractTextPlugin({
        filename: '[name].style.[contenthash].css',
        disable: false,
        allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        output: false,
        compress: {
            unused: true,
            dead_code: true,
            pure_getters: true,
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            comparisons: true,
            sequences: true,
            evaluate: true,
            join_vars: true,
            if_return: true,
        },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new HtmlWebpackPlugin({
        title: 'Production',
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static'
    }),
    new ManifestPlugin()
];
