import request from '@/utils/request'

export default {
    //获取登录参数
    getLoginParams(){
        return request({
            url: `/api/ucenter/wx/getLoginParams`,
            method: 'get'
          })
    },

    //获取支付二维码参数
    getPaymentParams(orderId){
        return request({
            url: `api/order/weixin/createNative/${orderId}`,
            method: 'get'
          })
    },
    queryPayStatus(orderId){
        return request({
            url: `api/order/weixin/getPaymentStatus/${orderId}`,
            method: 'get'
          })
    },

    //取消预约--已支付
    cancelOrderRefund(orderId){
        return request({
            url: `admin/order/orderInfo/cancelOrder/${orderId}`,
            method: 'get'
          })
    }

} 