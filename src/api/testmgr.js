import request from '@/utils/request'

export function reqDownLogFile(query) {
  // alert(query)
  return request({
    url: '/downfile/interface/log',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
  // return request.get('/rptqy/prop/testplanlist', { params: query })
}

export function reqPlanTimeList(query) {
  // alert(query)
  return request({
    url: '/rptqy/prop/testplanlist',
    method: 'get',
    params: query
  })
  // return request.get('/rptqy/prop/testplanlist', { params: query })
}

export function reqTestReport(query) {
  // alert(query)
  return request({
    url: '/rptqy/prop/testappmap',
    method: 'get',
    params: query
  })
  // return request.get('/rptqy/prop/testplanlist', { params: query })
}

export function reqRunTestcases(query) {
  // alert(query)
  return request({
    url: '/tsrun/prop/runTestPro',
    method: 'get',
    params: query
  })
  // return request.get('/rptqy/prop/testplanlist', { params: query })
}

export function reqCheckRunProgressOrState(query) {
  // alert(query)
  return request({
    url: '/tsrun/prop/queryRunProcess',
    method: 'get',
    params: query
  })
  // return request.get('/rptqy/prop/testplanlist', { params: query })
}
