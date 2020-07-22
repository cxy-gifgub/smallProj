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
export function getHomeBiliDetail(bvid) {
    return request({
        url: '/x/web-interface/view?',
        params:{
            bvid:bvid
        },
        urltype: 2
    })
}