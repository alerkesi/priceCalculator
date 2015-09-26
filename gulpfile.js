'use strict';

var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var shell = require('gulp-shell');
var webpack = require('webpack');

gulp.task('doc', shell.task([
    'node ./node_modules/gitbook-cli/bin/gitbook.js build'
]));

gulp.task('webpack', function(callback) {
    var webpackConfig = require('./webpack.config');

    fs.lstat('./babel_cache', function (err, stats) {
        if (err || !stats.isDirectory()) {
            fs.mkdir('./babel_cache');
        }
    });


    webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }

        gutil.log('webpack', stats.toString());

        callback();
    });

});