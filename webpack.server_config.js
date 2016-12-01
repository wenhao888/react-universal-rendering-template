var path = require('path');
var webpack= require("webpack");
var ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: path.join(__dirname, "/src/server.js"),
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
                loader: 'isomorphic-style-loader!css-loader?modules=true'

            }
        ]
    },
    resolve:{
        extensions:['','.js', ".jsx"],
        root:[path.join(__dirname, 'src')]
    },
    plugins: [
        new ExternalsPlugin({
            type: 'commonjs',
            include: path.join(__dirname ,'/node_modules')
        }),
    ]

};