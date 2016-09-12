var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(srcPath, 'js', 'client.js'),
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: '!!handlebars!src/index.hbs',
            googleApiKey: process.env.GOOGLE_API_KEY
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
                test: /\.(scss|sass)$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(eot.*|woff.*|ttf.*)$/,
                loader: 'file-loader'
            }
        ]
    }
};