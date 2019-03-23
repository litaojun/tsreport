import request from '@/utils/request'

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
