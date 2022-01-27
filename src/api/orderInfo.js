import request from '@/utils/request'

export default {
  //分页查询订单
  getOrdersPage(page,pageSize,searchObj){
    return request({
      url: `admin/order/orderInfo/${page}/${pageSize}`,
      method: 'get',
      params: searchObj
    })
  },
  //获取订单所有状态
  getOrderAllStatus(){
    return request({
      url: `admin/order/orderInfo/getAllStatus`,
      method: 'get'
    })
  },
  getOrderDetail(orderId){
    return request({
      url: `admin/order/orderInfo/orderDetail/${orderId}`,
      method: 'get'
    })
  },
}
