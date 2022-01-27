import request from '@/utils/request'

export default {
    //提交订单
    saveOrder(scheduleId,patientId){
        return request({
            url: `/api/order/orderInfo/auth/saveOrder/${scheduleId}/${patientId}`,
            method: 'put'
          })
    },
    getOrderList(pageNo,pageSize,searchObj){
        return request({
            url: `/api/order/orderInfo/auth/OrderList/${pageNo}/${pageSize}`,
            method: 'get',
            params: searchObj
          })
    },
    getStatus(){
        return request({
            url: `/api/order/orderInfo/auth/getAllStatus`,
            method: 'get'
          })
    },

    getOrderDetail(orderId){
        return request({
            url: `/api/order/orderInfo/auth/orderDetail/${orderId}`,
            method: 'get'
          })
    },

    //取消预约
    cancelOrder(orderId){
        return request({
            url: `api/order/weixin/cancelOrder/${orderId}`,
            method: 'put'
          })
    }

    

}