var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.ag.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap?modules&camelCase=dashes&importLoaders=1&localIdentName=[local]-[hash:base64:5]!autoprefixer-loader!less-loader")
            },
            {
                // simple files
                test: /\.(jpe?g|png|gif)$/i,
                loaders: ['file?name=img/[name]-[sha512:hash:base64:7].[ext]']
            },
            {
                // files with postfixes like "EAS-Icons.woff?1qdav3"
                test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/i,
                loaders: ['file?name=fonts/[name].[ext]']
            },
            {
                test: /\.(cshtml|html)$/i,
                loader: "html",
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].ag.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'templates/index.html',
            chunks: ['common', 'delivery-login'],
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery',
            '_': 'underscore'
        })
    ]
}
