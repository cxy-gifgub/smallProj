import {request} from 'network/request'

export function getHomeListdata() {
    return request({
        url: '/home/multidata',
        urltype:1
    })
}