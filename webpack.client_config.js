var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/client.js",
    output: {
        path: __dirname + "/dist/public",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/, loader: "babel-loader"
            },
            {
                test: /\.jsx$/, loader: "babel-loader"
            },
            {
                test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]")
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', ".jsx"]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]

};