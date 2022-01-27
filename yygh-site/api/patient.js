import request from '@/utils/request'

export default {
    //查询就诊人列表
    getAllPatients(){
    return request({
      url: `api/user/patient/findAll`,
      method: 'get'
    })
  },

  //添加就诊人
  addPatient(patient){
    return request({
      url: `api/user/patient/add`,
      method: 'post',
      data: patient
    })
  },

  //根据指定id获取就诊人详细信息
  getPatientById(id){
    return request({
      url: `api/user/patient/getById/${id}`,
      method: 'get'
    })
  },

  //修改就诊人信息
  updatePatient(patient){
    return request({
      url: `api/user/patient/update`,
      method: 'put',
      data: patient
    })
  },

  //删除就诊人信息
  deletePatientById(id){
    return request({
      url: `api/user/patient/delete/${id}`,
      method: 'delete'
    })
  },
}