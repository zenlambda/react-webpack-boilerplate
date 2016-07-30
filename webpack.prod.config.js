var webpack = require('webpack');
var config = require('./webpack.base.config.js');
var path = require('path');

config.devtool = 'source-map';

config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } }),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    }),

    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin()
]);

module.exports = config;
