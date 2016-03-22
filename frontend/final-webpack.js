/**
 * Created by Tatyana on 14.03.2016.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {

    var devTool = config.devServer;

    var loaders = [
        {
            test: /\.html$/,
            loader: 'html',
            exclude: ['./node_modules']
        },
        {
            test: /\.js$/,
            loader: "babel-loader",
            query: {
                presets: ['es2015']
            },
            exclude: /node_modules/
        },
        {
            test: /\.ts$/,
            loader: 'ts-loader?configFileName=tsconfig.webpack.json',
            exclude: './node_modules'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            exclude: './node_modules'
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css?sourceMap", "sass?sourceMap"]
        },
        {test: /\.otf/, loader: "url-loader?limit=100000"},
        {test: /\.jpeg/, loader: "url-loader?limit=100000"},
        {test: /\.png/, loader: "url-loader?limit=100000"},


        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"},
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }
    ];

    var entry, output, plugins;

    entry = {
        main: './src/js/app.js',
        vendor: [
            'angular',
            'angular-ui-router',
            'bootstrap',
            'jquery',
            'js-data',
            'js-data-angular'
        ]
    };

    output = {
        path: './build',
        publicPath: '',
        filename: 'bundle.js'
    };

    var HtmlWebpackPlugin = require('html-webpack-plugin');
    plugins = [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            d3: 'd3'
        })
    ];

    return {
        entry: entry,
        plugins: plugins,
        devTool: devTool,
        module: {
            loaders: loaders
        },
        output: output
    }
}