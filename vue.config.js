module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/g2': {
                    target: 'https://view.inews.qq.com',
                    changeOrigin: true
                }
            }
        }
    }
}