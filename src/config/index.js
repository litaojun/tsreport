import { serverEnv } from '@/utils/serverEnv.js'

export const projectConfig = {
  // steam-185修改
  prod: {
    appid: 'wx473d2dc2d510bed7',
    redirect_uri: 'http://steam.opg.cn/om/index.html',
    scope: 'snsapi_base',
    state: '123321',
    mpid: 'gh_bd30bac29c7f',
    baseURL: 'https://steam-api.opg.cn/',
    uopBaseURL: 'http://steam.opg.cn',
    indexURL: 'http://steam.opg.cn/admin/index.html'
    // gioCode: 'b40cedd0227f3316'
  },
  dev: {
    // 公众号：东方明珠少儿 WaWaFace
    appid: 'wxa1cfabd68e2c785c',
    redirect_uri: 'http://dev-steam.opg.cn/om/index.html',
    scope: 'snsapi_base',
    state: '123321',
    mpid: 'gh_9d9b28dbd98b',
    baseURL: 'https://dev-steam-api.opg.cn/',
    // baseURL: 'http://10.205.253.254:7300/mock/5c402b1828713634a73dcf69/steam-cms',
    uopBaseURL: 'http://dev-steam.opg.cn',
    indexURL: 'http://dev-steam.opg.cn/admin/index.html'
  },
  uat: {
    // 公众号：SMG少儿
    appid: 'wxa5365dbeaa4265ac',
    redirect_uri: 'http://uat-steam.opg.cn/om/index.html',
    scope: 'snsapi_base',
    state: '123321',
    mpid: 'gh_25ce0bc165d7',
    baseURL: 'https://uat-steam-api.opg.cn/',
    uopBaseURL: 'http://uat-steam.opg.cn',
    indexURL: 'http://uat-steam.opg.cn/admin/index.html'
  },
  unRecog: {
    // 无法识别默认配置
    // 来源未识别
    appid: 'wxa5365dbeaa4265ac',
    redirect_uri: 'http://uat-steam.opg.cn/om/index.html',
    scope: 'snsapi_base',
    state: '123321',
    mpid: 'gh_25ce0bc165d7',
    baseURL: 'https://uat-steam-api.opg.cn/',
    uopBaseURL: 'http://uat-steam.opg.cn',
    indexURL: 'http://uat-steam.opg.cn/admin/index.html'
  }
}
function getApiBaseUrl() {
  return projectConfig[serverEnv].baseURL
}

export const apiBaseUrl = getApiBaseUrl()
export default projectConfig[serverEnv]
