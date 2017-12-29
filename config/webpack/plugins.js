/**
 * Created by Min on 2017/7/19.
 */
const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    WebpackChunkHash = require('webpack-chunk-hash'),
    DashboardPlugin = require('webpack-dashboard/plugin'), { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    WebpackPwaManifest = require('webpack-pwa-manifest'),
    SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin'),
    Configs = require('../app.conf'),
    __DEV__ = (process.env.NODE_ENV || 'development') === 'development';

exports.commonPlugins = [new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(__DEV__
            ? 'development'
            : 'production'),
    },
})];

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
    new CleanWebpackPlugin([
        'dist', 'public',
    ], {
        root: path.join(__dirname, '../../'),
    }),
    new webpack
        .optimize
        .CommonsChunkPlugin({
            names: [
                'vendor', 'manifest',
            ],
            filename: 'js/vendor.bundle.js',
            minChunks: ({ resource }) => resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.(js|less|scss)$/),
        }),
    new webpack
        .optimize
        .ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        quiet: true,
        options: {
            context: '/',
        },
    }),
    new ExtractTextPlugin({ filename: 'css/[name].style.[contenthash].css', disable: false, allChunks: true }),
    new webpack
        .optimize
        .UglifyJsPlugin({
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
    new webpack
        .optimize
        .AggressiveMergingPlugin(),
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
    new WebpackPwaManifest({
        name: 'react-boilerplate',
        short_name: 'RPWA',
        description: 'React Progressive Web App!',
        start_url: '.',
        theme_color: '#000000',
        background_color: '#ffffff',
        inject: true,
        icons: [
            {
                src: path.resolve(__dirname, '../../src/assets/icon.png'),
                size: [
                    96,
                    128,
                    192,
                    256,
                    384,
                    512,
                ],
                destination: 'icons',
            },
        ],
    }),
    new SWPrecacheWebpackPlugin({
        cacheId: 'react-boilerplate',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'sw/service-worker.js',
        minify: true,
        navigateFallback: `${Configs.apps.output.prod.publicPath}index.html`,
        staticFileGlobs: [path.resolve(__dirname, 'index.html')],
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/, /report\.html/],
        mergeStaticsConfig: true,
    }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
];
