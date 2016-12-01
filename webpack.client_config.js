var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/client.js",
    output: {
        path: __dirname + "/dist/publi",
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
                test: /\.scss$/, loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader" })
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', ".jsx"]
    },
    plugins: [
        new ExtractTextPlugin("./dist/public/styles.css")
    ]

};