import request from '@/utils/request'

export default {
  //获取医院列表数据
  getHospitalPage(page,pageSize,searchObj){
    return request({
      url: `/admin/hosp/hospital/getHospitalPage/${page}/${pageSize}`,
      method: 'get',
      params: searchObj
    })
  },

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

  //更新上线状态
  updateStatus(id,status){
    return request({
      url: `/admin/hosp/hospital/updateStatus/${id}/${status}`,
      method: 'post'
    })
  },
  
  //查看医院详情
  getHospitalDetail(id){
    return request({
      url: `/admin/hosp/hospital/getDetail/${id}`,
      method: 'get'
    })
  },
  
  //查看科室
  getDepartmentByHoscode(hoscode){
    return request({
      url: `/admin/hosp/department/getDeptByHoscode/${hoscode}`,
      method: 'get'
    })
  },

  //查看排班
  getSchedule(page,limit,hoscode,depcode){
    return request({
      url: `/admin/hosp/schedule/getSchedule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },

  //查看排班详情
  getScheduleDetail(hoscode,depcode,workDate){
    return request({
      url: `/admin/hosp/schedule/getScheduleDetail/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  }
 
}
