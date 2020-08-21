const path = require("path")
const merge = require("webpack-merge")
const baseConfig = require("./base.config")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const webpackConfig = merge(baseConfig, {
    devServer:{
        host:'0.0.0.0',
        port:'3333',
        open: false,
        hot:true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    },  
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),

        new CopyWebpackPlugin([
            {
                from:path.resolve(__dirname, "../static"),
                to:"static",
                ignore: [".*"]
             }
        ])
    ]
})

module.exports = webpackConfig