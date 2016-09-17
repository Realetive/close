var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './templates/index.html',
            chunks: ['common', 'delivery-login'],
            hash: true
        }),
    ]
}
