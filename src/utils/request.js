import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// import { apiBaseUrl } from '@/config'
// create an axios instance
const service = axios.create({
  //baseURL: 'http://127.0.0.1:8181/', // api的base_url
  baseURL: 'http://10.205.255.241:8181/', // api的base_url
  timeout: 10000 // request timeout
})

// request interceptor
// service.interceptors.request.use(config => {
//   // Do something before request is sent
//   if (store.getters.token) {
//     // config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
//     config.headers['login_type'] = 'CMS'
//     config.headers['token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
//   }
//   return config
// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })

// // respone interceptor
// service.interceptors.response.use(
//   // response => response,
//   /**
//   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
//   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
//   */
//   //  const res = response.data;
//   //     if (res.code !== 20000) {
//   //       Message({
//   //         message: res.message,
//   //         type: 'error',
//   //         duration: 5 * 1000
//   //       });
//   //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//   //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//   //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//   //           confirmButtonText: '重新登录',
//   //           cancelButtonText: '取消',
//   //           type: 'warning'
//   //         }).then(() => {
//   //           store.dispatch('FedLogOut').then(() => {
//   //             location.reload();// 为了重新实例化vue-router对象 避免bug
//   //           });
//   //         })
//   //       }
//   //       return Promise.reject('error');
//   //     } else {
//   //       return response.data;
//   //     }
//   response => {
//     const res = response.data
//     // 000000 执行成功
//     if (res.code === '000000') {
//       return response
//     } else {
//       // 执行不成功
//       // '000107' token过期失效
//       if (res.code === '000107') {
//         location.href = process.env.LOGIN_REDIRECT_URL + encodeURIComponent(location.href)
//       } else if (res.code === '000999') {
//         Message.error('系统异常')
//         console.log('系统异常')
//       } else if (res.code === '000998') {
//         Message.error('参数异常')
//         console.log('参数异常')
//       } else if (res.code === '000001') {
//         console.log('用户不存在')
//         Message.error('用户不存在')
//       } else if (res.code === '000002') {
//         Message.error('账户或者密码错误')
//         console.log('账户或者密码错误')
//       } else if (res.code === '000003') {
//         Message.error('用户名不唯一')
//         console.log('用户名不唯一')
//       } else if (res.code === '000950') {
//         Message.error('token非法')
//         console.log('token非法')
//       } else if (res.code === '000951') {
//         Message.error('token已过期，请重新登录！！')
//         console.log('token失效')
//         window.vueApp.$store.dispatch('LogOut').then(() => {
//           location.reload()// In order to re-instantiate the vue-router object to avoid bugs
//         })
//       } else {
//         Message.error(res)
//         console.log('res.message')
//       }
//       // 兼容以前的 继续返回
//       return response
//     }
//   },
//   error => {
//     console.log('err' + error)// for debug
//     return Promise.reject(error)
//   })

export default service
