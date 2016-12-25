var rucksack = require('rucksack-css')
var lost = require("lost")
var cssnext = require("postcss-cssnext")

exports.modifyWebpackConfig = function(config, env) {

    // config.loader('png', {
    //   test: /\.png$/,
    //   loader: 'file-loader',
    // })
    // config.loader('jpg', {
    //   test: /\.jpg$/,
    //   loader: 'file-loader',
    // })

    config.merge({
        postcss: [
            rucksack(),
            lost(),
            cssnext({
                browsers: ['>1%', 'last 2 versions']
            })
        ]
    })

    // config.removeLoader('images')

    return config
};
