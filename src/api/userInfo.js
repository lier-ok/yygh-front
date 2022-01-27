import request from '@/utils/request'

const api_name = '/admin/user'

export default {

 getPageList(pageNo, pageSize, searchObj) {
  return request({
    url: `${api_name}/${pageNo}/${pageSize}`,
    method: 'get',
    params: searchObj
  })
 },
 lock(userId,status) {
  return request({
    url: `${api_name}/lock/${userId}/${status}`,
    method: 'get'
  })
 },
 show(id) {
  return request({
    url: `${api_name}/detail/${id}`,
    method: 'get'
  })
 },
 approve(id,authStatus) {
  return request({
    url: `${api_name}/approve/${id}/${authStatus}`,
    method: 'get'
  })
 }
}
