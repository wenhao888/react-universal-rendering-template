var webpack= require("webpack");
var ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {
    entry: __dirname+"/src/client.js",
    output: {
        path:__dirname +"/dist/public",
        filename:"bundle.js"
    },

    module: {
        loaders:[
            {
                test:/\.js$/,loader:"babel-loader"
            },
            {
                test:/\.jsx$/,loader:"babel-loader"
            }
        ]
    },
    resolve:{
        extensions:['','.js', ".jsx"]
    },
    plugins: [

    ]

};