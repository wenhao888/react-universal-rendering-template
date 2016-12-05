var path = require('path');
var webpack= require("webpack");
var nodeExternals = require('webpack-node-externals');


module.exports = {
    entry:   path.resolve(__dirname, 'src/server.js'),
    output: {
        path:path.resolve(__dirname ,"dist"),
        filename:"server.js"
    },
    target:"node",
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        loaders:[
            {
                test:/\.js$/,loader:"babel-loader",
                exclude: path.resolve(__dirname ,'node_modules')
            },
            {
                test:/\.jsx$/,loader:"babel-loader",
                exclude: path.resolve(__dirname ,'node_modules')
            },
            {
                test: /\.scss$/,
                loaders: [
                    'isomorphic-style-loader',
                    'css-loader?modules'
                ]
            }
        ]
    },
    resolve:{
        extensions:['','.js', ".jsx"]
    },
    externals: [nodeExternals()]

};