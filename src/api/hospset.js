import request from '@/utils/request'

export default {
  getHospSetList(current,limit,searchCondition){//获取医院设置列表
    return request({
      url: `/admin/hosp/hospitalSet/findPage/${current}/${limit}`,
      method: 'post',
      data: searchCondition
    })
  },
  saveHospSet(hospSet){//添加医院设置
    return request({
      url: '/admin/hosp/hospitalSet/saveHospSet',
      method: 'post',
      data: hospSet
    })
  },
  deleteHospSet(id){//删除医院设置
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete',
    })
  },
  batchDeleteHospSet(idList){//批量删除医院设置
    return request({
      url: `/admin/hosp/hospitalSet/deleteBatch`,
      method: 'delete',
      data: idList
    })
  },
  lockHospSet(id,status){//锁定和取消锁定
    return request({
      url: `/admin/hosp/hospitalSet/lockOrUnlock/${id}/${status}`,
      method: 'put'
    })
  },
  getHospSet(id){
    return request({
      url: `/admin/hosp/hospitalSet/getHospSetById/${id}`,
      method: 'get'
    })
  },
  updateHospSet(hospSet){
    return request({
      url: `/admin/hosp/hospitalSet/update/`,
      method: 'post',
      data: hospSet
    })
  }
}
