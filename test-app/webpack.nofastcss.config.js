/**
 * Created by Vidailhet on 28/07/16.
 */

'use strict';

var utils = require('./webpack.utils');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
    entry: {
        app: [
            './src/app/style.scss'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            pkg: require('./package.json'),
            template: path.join(__dirname, 'src/app/index.cordova.html'),
            inject: 'body',
            hash: true
        })]
};

