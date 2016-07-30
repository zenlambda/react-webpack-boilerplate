/* globals process:false */
var webpack = require('webpack');
var config = require('./webpack.base.config.js');
var path = require('path');

var appHost = 'localhost';

function parseWebpackDevServerArgs() {
    var argv = process.argv.slice();
    while (argv.length > 0) {
        var arg = argv.shift();
        switch (arg) {
            case '--host':
                appHost = argv.shift();
                break;
        }
    }
}

if (path.basename(process.argv[1]) === 'webpack-dev-server') {

    parseWebpackDevServerArgs();

    config.resolve.unsafeCache = true;

    config.entry = [
        'webpack-dev-server/client?http://' + appHost + ':9090',
        'webpack/hot/dev-server'
    ].concat(config.entry);

    config.output.publicPath = 'http://' + appHost + ':9090/bundles/';

    config.output.pathinfo = true; //useful when devtool is 'eval'

    config.devtool = 'eval';
        // set to inline-sourcemap for debugging in chrome, eval reloads faster

    config.cache = true;

    config.plugins.push(new webpack.HotModuleReplacementPlugin());

}

module.exports = config;
