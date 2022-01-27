import request from '@/utils/request'

export default {
    //登录
    login(loginVo){
        return request({
            url: `/api/user/login`,
            method: 'post',
            data: loginVo
          })
    },
    //用户认证
    userAuth(userAuthVo){
        return request({
            url: `/api/user/auth/userAuth`,
            method: 'post',
            data: userAuthVo
          })
    },
    //获取用户信息
    getUserInfo(){
        return request({
            url: `/api/user/auth/getUserInfo`,
            method: 'get'
          })  
    }

}