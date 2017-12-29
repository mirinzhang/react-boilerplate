/**
 * Created by Min on 2017/7/19.
 */
const path = require('path'),
    pkg = require('../package.json'),
    commonOuput = {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:6].chunk.js',
        sourceMapFilename: 'js/[name].bundle.map',
        publicPath: '/'
    },
    needRemovePkg = ['antd'],
    HOST = '0.0.0.0',
    PORT = 4040;

module.exports = {
    apps: {
        entry: {
            dev: [
                `webpack-dev-server/client?http://${HOST}:${PORT}`, 'webpack/hot/only-dev-server', './src/index'
            ],
            prod: {
                app: './src/index',
                vendors: Object
                    .keys(pkg.dependencies)
                    .filter(pkg => !needRemovePkg.includes(pkg))
            }
        },
        output: {
            dev: commonOuput,
            prod: commonOuput, // custom config production publicPath
        },
        devtool: {
            dev: 'eval-cheap-module-source-map',
            prod: 'hidden-source-map'
        }
    },
    devServer: {
        host: HOST,
        port: PORT
    },
    proxy: {}
};
