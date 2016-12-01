var webpack= require("webpack");
var ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {
    entry: __dirname+"/src/server.js",
    output: {
        path:__dirname +"/dist",
        filename:"server.js"
    },
    target:"node",
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        loaders:[
            {
                test:/\.js$/,loader:"babel-loader"
            },
            {
                test:/\.jsx$/,loader:"babel-loader"
            },
            {
                test: /\.scss$/,
                loaders: [
                    'isomorphic-style-loader',
                    'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve:{
        extensions:['','.js', ".jsx"]
    },
    plugins: [
        new ExternalsPlugin({
            type: 'commonjs',
            include: __dirname + '/node_modules',
        }),
    ]

};