import request from '@/utils/request'

export default {
  //获取预约统计数据
  getStatisticsData(searchObj){
    return request({
      url: `/admin/statistics/getCountMap`,
      method: 'get',
      params: searchObj
    })
  }

}