const path = require("path")
const vueLoaderPlugin = require("vue-loader/lib/plugin")
require("@babel/polyfill");
module.exports = {
    mode:'development',
    context:path.resolve(__dirname, "../"),
    entry:["@babel/polyfill","./src/index.js"],
    output:{
        path: path.resolve(__dirname, '../demo'),
        filename: '[name].js'
    },
    resolve:{
        extensions: [".js", ".vue", ".json"],
        alias: {
          vue$: "vue/dist/vue.esm.js",
          "@": path.resolve(__dirname,"../src")
        }
    },
    module:{
      rules:[
        {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:[
                path.resolve(__dirname,"../src")
            ]
        },
        {
            test:/\.vue$/,
            loader:'vue-loader',
        },
        {
            test:/\.less$/,
            use:[
                'vue-style-loader',
                'css-loader',
                'less-loader'
            ]
        },
        {
            test:/\.css$/,
            use:[
                'vue-style-loader',
                'css-loader',
            ]
        },
        {
            test:/\.(jpe?g|png|gif|svg)(\?.*)?$/,
            loader:"url-loader",
            options:{
                limit:10000,
                name:path.posix.join("static","img/[name].[hash:7].[ext]")
            }
        },
        {
            test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader:"url-loader",
            options:{
                limit:10000,
                name:path.posix.join("static","media/[name].[hash:7].[ext]")
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: "url-loader",
            options: {
              limit: 10000,
              name: path.posix.join("static","fonts/[name].[hash:7].[ext]")
            }
          }
      ]  
    },
    plugins:[
        new vueLoaderPlugin()
    ]
}