var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './client/index.js'
    ],

    output: {
        path: path.join(__dirname, '/www/bundles'),
        publicPath: '/bundles/',
        filename: 'client.js'
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'client'),
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            { test: /\.css$/, loader: 'style!css'}
        ]
    },

    // N.B. these settings don't affect the production bundle, so can stay in .base:
    devServer: {
        port: 9090,
        contentBase: __dirname,
        noInfo: false,
        hot: true,
        inline: true
    }
};