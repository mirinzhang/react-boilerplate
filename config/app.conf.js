/**
 * Created by Min on 2017/8/17.
 */
const path = require('path');
const pkg = require('../package.json');

const HOST = '0.0.0.0';
const _PORT = process.argv[ 2 ] || 4040;

module.exports = {
    apps: {
        entry: {
            dev: [
                `webpack-dev-server/client?http://${HOST}:${_PORT}`,
                './src/index'
            ],
            prod: [ ...Object.keys(pkg.dependencies).filter(val => !val.startsWith('@')), './src/index' ],
        },
        output: {
            path: path.join(__dirname, '../dist'),
            filename: '[name].js',
            chunkFilename: '[name].[chunkhash:6].chunk.js',
            sourceMapFilename: '[name].bundle.map',
        },
        devtool: {
            dev: 'eval-cheap-module-source-map',
            prod: 'hidden-source-map'
        }
    },
    devServer: {
        host: HOST,
        port: _PORT,
    },
    proxy: {},
};
