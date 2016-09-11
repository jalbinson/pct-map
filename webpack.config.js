var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config.json').dev;

module.exports = {
    context: srcPath,
    entry: path.join(srcPath, 'js', 'client.js'),
    output: {
        path: buildPath,
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!handlebars!src/index.hbs',
            googleApiKey: config.googleApiKey
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    devtool: '#cheap-eval-source-map',
};