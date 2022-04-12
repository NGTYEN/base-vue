const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
  }

function addStyleResource(rule) {
    rule.use('style-resource').loader('style-resources-loader').options({
        patterns: [
            path.resolve(__dirname, './src/styles/imports.scss')
        ]
    })
}

module.exports = {
    publicPath: process.env.NODE.ENV === 'production' ? '/production' : '/',
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => {
            addStyleResource(config.module.rule('scss').oneOf(type))
        })
        config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('./src/assets'))
        .set('components',resolve('./src/components'))
    },
    devServer: {
        proxy: 'http://localhost:3000'
    }
}