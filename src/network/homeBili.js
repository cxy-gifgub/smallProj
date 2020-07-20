import { request } from 'network/request'

export function getHomeBili() {
    return request({
        url: '/index/ding.json',
        urltype: 2
    })
}