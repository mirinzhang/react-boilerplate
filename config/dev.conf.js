const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const appConfig = require('./app.conf');
const config = require('./base.conf');

module.exports = new WebpackDevServer(webpack(config), {
    compress: true,
    inline: true,
    hot: true,
    historyApiFallback: true,
    open: true,
    openPage: '',
    proxy: appConfig.proxy,
}).listen(appConfig.devServer.port, appConfig.devServer.host, (err) => {
    if(err) {
        return console.log('run start error', err);
    }
    
    console.log(`Listen at http://${appConfig.devServer.host}:${appConfig.devServer.port}`);
});
