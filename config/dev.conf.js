const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const appConfig = require('./app.conf');
const config = require('./base.conf');

new WebpackDevServer(webpack(config), {
    compress: true,
    inline: true,
    hot: true,
    historyApiFallback: true,
    open: true,
    openPage: '',
    proxy: appConfig.proxy,
}).listen(appConfig.devServer.port, appConfig.devServer.host, (err) => {
    if(err) {
        return console.log('[出错啦]', err);
    }
    
    console.log(`在[${appConfig.devServer.port}] 浪起来啦~~~~`);
});
