import request from '@/utils/request'

export default {
  getDictListById(id){//获取数据字典数据
    return request({
      url: `/admin/cmn/dict/findChild/${id}`,
      method: 'get'
    })
  }
}
