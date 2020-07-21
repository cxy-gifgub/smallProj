import { request } from 'network/request'

export function getHomeBili(rid,pn) {
    return request({
        url: '/x/web-interface/dynamic/region?&jsonp=jsonp&ps=10',
        params: {
            pn,
            rid
        },
        urltype: 2
    })
}
// export function getHomeBili2() {
//     return request({
//         url: '/ajax/member/getSubmitVideos?mid=320491072&page=1',
//         urltype: 3
//     })
// }