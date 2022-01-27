<template>
  <div class="home page-component">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 2" :key="item">
        <img src="~assets/images/web-banner1.png" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索 -->
    <div class="search-container">
    <div class="search-wrapper">
    <div class="hospital-search">
      <el-autocomplete
      class="search-input"
      prefix-icon="el-icon-search"
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="点击输入医院名称"
      @select="handleSelect"
      >
        <span slot="suffix" class="search-btn v-link highlight clickable selected">搜索 </span>
      </el-autocomplete>
    </div>
    </div>
    </div>
    <!-- bottom -->
    <div class="bottom">
    <div class="left">
    <div class="home-filter-wrapper">
    <div class="title"> 医院</div>
    <div>
      <div class="filter-wrapper">
        <span
        class="label">等级：</span>
        <div class="condition-wrapper">
          <span class="item v-link clickable" 
            :class="hostypeActiveIndex == index ? 'selected' : ''"
             v-for="(item,index) in hostypeList" :key="item.id" 
             @click="hostypeSelect(item.value, index)">{{ item.name }}</span>
       </div>
      </div>
    <div class="private">
      <span class="label">省/市:  </span>
          <el-select style="width:15%" 
              v-model="searchObj.provinceCode"
              placeholder="请选择省"
                  @change="provinceChanged">
              <el-option 
                  v-for="item in provinceList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"/>
          </el-select>

           <el-select style="width:15%"
        v-model="searchObj.cityCode"
        placeholder="请选择市"
        @change="cityChanged">
            <el-option
            v-for="item in cityList"
            :key="item.id"
            :label="item.name"
            :value="item.id"/>
        </el-select>

        <el-button type="primary" @click="resetData()">全部医院</el-button>
    </div>

    <div class="filter-wrapper">
      <span
      class="label">地区：</span>
      <div class="condition-wrapper">
        <span class="item v-link clickable"
          :class="provinceActiveIndex == index ? 'selected' : ''"
          v-for="(item,index) in districtList" :key="item.id"
          @click="districtSelect(item.value, index)">{{ item.name }}</span>
      </div>
      </div>
    </div>
    </div>
    <div class="v-scroll-list hospital-list">
      <div class="v-card clickable list-item" v-for="item in list" :key="item.id">
        <div class="">
          <div class="hospital-list-item hos-item" index="0" @click="show(item.hoscode)">
            <div class="wrapper">
            <div class="hospital-title"> {{ item.hosname }}</div>
            <div class="bottom-container">
            <div class="icon-wrapper">
              <span class="iconfont"></span>{{ item.param.hostypeString }}
            </div>
          <div class="icon-wrapper">
          <span class="iconfont"></span>每天{{ item.bookingRule.releaseTime }}放号
          </div>
          </div>
          </div>
          <img :src="'data:image/jpeg;base64,'+item.logoData"
           :alt="item.hosname"
           class="hospital-img">
      </div>
    </div>
    </div>
    </div>
    </div>
    <div class="right">
      <div class="common-dept">
      <div class="header-wrapper">
      <div class="title"> 常见科室</div>
      <div class="all-wrapper"><span>全部</span>
      <span class="iconfont icon"></span>
      </div>
      </div>
      <div class="content-wrapper">
      <span class="item v-link clickable dark">神经内科 </span>
      <span class="item v-link clickable dark">消化内科 </span>
      <span class="item v-link clickable dark">呼吸内科 </span>
      <span class="item v-link clickable dark">内科 </span>
      <span class="item v-link clickable dark">神经外科 </span>
      <span class="item v-link clickable dark">妇科 </span>
      <span class="item v-link clickable dark"> 产科 </span>
      <span class="item v-link clickable dark">儿科 </span>
      </div>
    </div>
    <div class="space">
      <div class="header-wrapper">
      <div class="title-wrapper">
      <div class="icon-wrapper"><span
      class="iconfont title-icon"></span>
      </div>
      <span class="title">平台公告</span>
      </div>
      <div class="all-wrapper">
      <span>全部</span>
      <span class="iconfont icon"></span>
      </div>
      </div>
      <div class="content-wrapper">
      <div class="notice-wrapper">
      <div class="point"></div>
      <span class="notice v-link clickable dark">关于延长北京大学国际医院放假的通知 </span>
      </div>
      <div class="notice-wrapper">
      <div class="point"></div>
      <span class="notice v-link clickable dark">北京中医药大学东方医院部分科室医生门诊医 </span>
      </div>
      <div class="notice-wrapper">
      <div class="point"></div>
      <span class="notice v-link clickable dark"> 武警总医院号源暂停更新通知 </span>
      </div>
      </div>
    </div>
    <div class="suspend-notice-list space">
    <div class="header-wrapper">
    <div class="title-wrapper">
      <div class="icon-wrapper">
      <span class="iconfont title-icon"></span>
      </div>
      <span class="title">停诊公告</span>
      </div>
      <div class="all-wrapper">
      <span>全部</span>
      <span class="iconfont icon"></span>
      </div>
      </div>
      <div class="content-wrapper">
      <div class="notice-wrapper">
      <div class="point"></div>
      <span class="notice v-link clickable dark"> 中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告 </span>
      </div>
      <div class="notice-wrapper">
      <div class="point"></div>
    <span class="notice v-link clickable dark"> 首都医科大学附属北京潞河医院老年医学科门诊停诊公告 </span>
    </div>
      <div class="notice-wrapper">
        <div class="point"></div>
        <span class="notice v-link clickable dark">中日友好医院中西医结合心内科门诊停诊公告 </span>
      </div>
    </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import hospApi from '@/api/hosp'
import dictApi from '@/api/dict'

export default {
    asyncData({ params, error }) {
    //调用
    return hospApi.getHospitalByPage(1,10,null)
      .then(response => {
        return {
          list: response.data.content,
          pages: response.data.totalPages
        }
      })
    },
    data() {
      return {
        searchObj: {},
        page: 1,
        limit: 10,

        hosname: '', //医院名称
        hostypeList: [], //医院等级集合
        districtList: [], //地区集合
        provinceList: [],
        cityList: [],
        districtCode: null,

        hostypeActiveIndex: 0,
        provinceActiveIndex: 0
      }
    },
    created() {
      this.init()
      this.getAllProvince()
    },

   methods:{
      //点击地区
      districtSelect(districtCode,index){
        this.list = []
        this.page = 1
        this.provinceActiveIndex = index
        this.searchObj.districtCode = districtCode
      },
      //选择医院等级
      hostypeSelect(hostype,index){
        this.list = []
        this.page = 1
        this.hostypeActiveIndex = index //添加样式
        this.searchObj.hostype = hostype
        this.getHospByCondition()
      },
      //根据传入条件查询
      getHospByCondition(){
        hospApi.getHospitalByPage(this.page,this.limit,this.searchObj)
              .then(response => {
                for(let i in response.data.content){
                    this.list.push(response.data.content[i])
                }
              })
      },
      //全部
      resetData(){
        this.searchObj = {}
        this.districtList = []
        this.districtCode = null
        this.getHospByCondition()
        this.init()
      },
      //修改市
      cityChanged(){
        this.list = []
        this.districtList = []
        this.searchObj.districtCode = null
        this.getAllDistrict()
        this.getHospByCondition()
      },
      //修改省
      provinceChanged(){
        this.list = []
        this.cityList = []
        this.districtList = []
        this.searchObj.cityCode = null
        this.searchObj.districtCode = null
        this.getAllCity()
        this.getHospByCondition()
      },
      //查询所有地区
      getAllDistrict(){
        dictApi.getChildById(this.searchObj.cityCode)
              .then(response => {
                this.districtList = response.data
              })
      },
      //查询所有省
      getAllProvince(){
        dictApi.getChildByHosType('Province')
              .then(response => {
                this.provinceList = response.data
              })
      },
      //获取所有市
      getAllCity(){
        dictApi.getChildById(this.searchObj.provinceCode)
              .then(response => {
                this.cityList = response.data
              })
      },
      //查询医院等级列表 和 所有地区列表
      init() {
        //查询医院等级列表
        dictApi.getChildByHosType('Hostype')
          .then(response => {
            //hostypeList清空
            this.hostypeList = []
            //向hostypeList添加全部值
            //把接口返回数据，添加到hostypeList
            for(var i=0;i<response.data.length;i++) {
                this.hostypeList.push(response.data[i])
            }
            
        })    
      },
      //在输入框输入值，弹出下拉框，显示相关内容
    querySearchAsync(queryString, cb) {
      this.searchObj = []
      if(queryString == '') return
      hospApi.getHospitalByHosname(queryString).then(response => {
        for (let i = 0, len = response.data.length; i <len; i++) {
          response.data[i].value = response.data[i].hosname
        }
        cb(response.data)
      })
    },

    //在下拉框选择某一个内容，执行下面方法，跳转到详情页面中
    handleSelect(item) {
      window.location.href = '/hospital/' + item.hoscode
    },

    //点击某个医院名称，跳转到详情页面中
    show(hoscode) {
      window.location.href = '/hospital/' + hoscode
    }
  }
}
</script>
<style scoped>
.private{
  margin-top: 20px;
}
</style>
