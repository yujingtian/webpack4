const path = require('path')
const merge = require("webpack-merge")
const baseConfig = require("./base.config")

const webpackConfig = merge(baseConfig, {
    mode:'production',
})

module.exports = webpackConfig