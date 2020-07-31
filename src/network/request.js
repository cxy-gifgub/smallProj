import axios from 'axios'
export function request(config) {
    console.log(config.urltype);
    let nowUrl = ''
    if (config.urltype == 1) {
        nowUrl = 'http://123.207.32.32:8000'
    }
    if (config.urltype == 2) {
        nowUrl = '/bilibiliapi'
    }

    const instance = axios.create({
        baseURL: nowUrl
    })
    //axios拦截器
    //请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config);
        //1.修改config中一些不符合服务器的要求
        //2.在请求的时候显示加载图标
        //3.某些网络请求（比如登录信息token），必须携带一些特殊的信息
        return config
    }, err => {
        console.log(err);
    })

    //响应拦截
    instance.interceptors.response.use(config => {
        // console.log(config);
        return config
    }, err => {
        console.log(err);
    })

    
    return instance(config)
}

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get',
//   params: {
//     callback:'json123'
//   }
// }).then(res => {
//   let jsonData = null
//   // 下面是对获取到的数据进行处理，把jsonp格式的数据处理成json格式的数据
//   if (typeof res.data === 'string') {
//     // 返回的是jsonp类型的数据，所以要用正则表达式来匹配截取json数据
//     const reg = /^\w+\((\{[^()]+\})\)$/
//     const matches = res.data.match(reg)
//     // matches匹配到的是数组，数组第一个是所有正则表达式匹配的字符串，第二个是第一个小括号匹配到的字符串
//     if (matches) {
//       jsonData = JSON.parse(matches[1])
//     }
//   }
//   console.log(jsonData.data);
// })
// axios({
//   url: 'http://httpbin.org/json'
// }).then(resp => {
//   console.log(resp);
// })

// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata',
//     method: 'get',
//     params: {
//       callback: 'json123'
//     }
//   }),
//   axios({
//     url: 'http://httpbin.org/json'
//   })
// ]).then(axios.spread((res1, res2)=> {
//   console.log(res1);
//   console.log(res2);
// }))
// const instance = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res);
// })