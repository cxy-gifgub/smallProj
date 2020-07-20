module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'views':'@/views',
                'network':'@/network',
            }
        }
    },
    devServer: {
        proxy: {
            '/bilibiliapi': {
                target: 'https://www.bilibili.com',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/bilibiliapi': ''  // rewrite path
                }
            },
        }
    }

}