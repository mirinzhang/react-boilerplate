const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    AutoDllPlugin = require('autodll-webpack-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier'),
    ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'),
    HOST = '0.0.0.0',
    PORT = 4040,

    cssExtract = process.env.NODE_ENV === 'production' ?
        ExtractTextPlugin.extract({
            fallback: 'style', use: [ 'css', 'postcss', 'sass' ],
        })
        : [ 'style', 'css', 'postcss', 'sass' ],
    vendors = [
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-dom',
        'redux',
        'react-loadable',
        'whatwg-fetch',
        '@types/node',
        '@types/react',
        '@types/react-dom',
        '@types/react-redux',
        '@types/react-router',
        '@types/react-loadable',
    ];

let commonPlugins = [];

module.exports = {
    devServer: {
        compress: true,
        inline: true,
        hot: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST,
        open: true,
        openPage: '',
    },
    entry: [
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:6].chunk.js',
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js', '.sass', '.scss' ],
        modules: [ 'src', 'node_modules' ],
    },
    resolveLoader: {
        moduleExtensions: [ '-loader' ],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [ 'babel', 'ts' ],
                include: path.resolve('src'),
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|sass)$/,
                use: cssExtract,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [ 'style', 'css', 'postcss' ],
            },
        ],
    },
    plugins: [
      new CleanWebpackPlugin([ 'dist' ]),
      new AutoDllPlugin({
          inject: true,
          context: __dirname,
          filename: '[name]_[hash].js',
          path: './dll',
          entry: {
              vendor: vendors,
          },
      }),
    ],
};

if (process.env.NODE_ENV === 'production') {
    commonPlugins = [
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'vendor', 'manifest' ],
            filename: 'vendor.bundle.js',
            minChunks(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            },
        }),
        new ExtractTextPlugin({
            filename: '[name].style.[contenthash].css',
            disable: false,
            allChunks: true,
        }),
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
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
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            quiet: true,
        }),
    ];
} else {
    commonPlugins = [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new WebpackNotifierPlugin({
          title: '构建提醒',
          message: '哇啦啦啦，构建成功啦🤓🤓🤓'
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            hash: true,
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            options: {},
        }),
    ];
    module.exports.devtool = 'source-map';
}
module.exports.plugins = module.exports.plugins.concat(commonPlugins);
