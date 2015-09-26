'use strict';

var path = require('path');

module.exports = {
    context: path.resolve('./src/scripts'),
    entry: {
        app: './app/index.js'
    },
    output: {
        path: path.resolve('./release/dev/scripts'),
        filename: '[name].js'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader?cacheDirectory=babel_cache'
                ]
            }
        ]
    }
};