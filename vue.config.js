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
                target: 'https://api.bilibili.com/',  // target host3
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/bilibiliapi': ''  // rewrite path
                }
            },
        }
    }

}