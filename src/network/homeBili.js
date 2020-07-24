import { request } from 'network/request'

export function getHomeBili(rid,pn) {
    return request({
        url: '/x/web-interface/dynamic/region?&jsonp=jsonp&ps=30',
        params: {
            pn,
            rid
        },
        urltype: 2
    })
}
// 获取视频信息
export function getHomeBiliDetail(bvid) {
    return request({
        url: '/x/web-interface/view?',
        params:{
            bvid:bvid
        },
        urltype: 2
    })
}
// 获取视频的相关推荐
export function getDetailRecommend(bvid) {
    return request({
        url: '/x/web-interface/archive/related?',
        params:{
            bvid:bvid
        },
        urltype: 2
    })
}
//获取视频播放地址
export function getDetailVedioUrl(bvid,cid) {
    return request({
        url: '/x/player/playurl?',
        params: {
            bvid:bvid,
            cid: cid
        },
        urltype: 2
    })
}
export function getDetailVedioRecommand(bvid) {
    return request({
        url: '/x/web-interface/archive/related?',
        params: {
            bvid:bvid
        },
        urltype: 2
    })
}