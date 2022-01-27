import request from '@/utils/request'

export default {
    //根据传入HosType查询其子节点信息
  getChildByHosType(hosType){
    return request({
      url: `/admin/cmn/dict/getChildByHosType/${hosType}`,
      method: 'get'
    })
  },

  //根据指定id查询其子节点信息
  getChildById(id){
    return request({
      url: `/admin/cmn/dict/findChild/${id}`,
      method: 'get'
    })
  },
}