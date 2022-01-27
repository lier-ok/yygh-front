import request from '@/utils/request'


export default {
    //分页查询出所有医院
  getHospitalByPage(page,pageSize,searchObj){
    return request({
      url: `api/hosp/hospital/getHospitalByPage/${page}/${pageSize}`,
      method: 'get',
      params: searchObj
    })
  },

  //根据医院部分名称模糊查询
  getHospitalByHosname(hosName){
    return request({
      url: `api/hosp/hospital/getHospitalByName/${hosName}`,
      method: 'get'
    })
  },
  //获取医院详情
  getHospitalDetail(hoscode){
    return request({
      url: `api/hosp/hospital/getDetail/${hoscode}`,
      method: 'get'
    })
  },
  //获取科室
  getDepartment(hoscode){
    return request({
      url: `api/hosp/hospital/getDepartment/${hoscode}`,
      method: 'get'
    })
  },
  getBookingScheduleRule(page,limit,hoscode,depcode){
    return request({
      url: `api/hosp/hospital/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  getScheduleData(hoscode,depcode,workDate){
    return request({
      url: `api/hosp/hospital/getScheduleData/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },
  getScheduleById(scheduleId){
    return request({
      url: `api/hosp/hospital/getSchedule/${scheduleId}`,
      method: 'get'
    })
  }
}