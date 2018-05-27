<template>
  <div class="my-course">
    <div class="bg">
      <not-logged v-if="IsLogin===1" :warning="warning" :buttonText="buttonText"
                  :binding="binding"></not-logged>
      <div id="main" v-if="IsLogin===2" style="width: 180px;height: 180px" class="rate"></div>
      <span class="rate-text" v-if="IsLogin===2">本学期已度过<br/>80%</span>
      <div class="tab-left">
        <router-link tag="div" class="tab-item" to="/notes">
          <img src="./img/courseTable.png" width="30" height="30"><br/>
          <span class="tab-link">课堂笔记</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/courseMsg">
          <img src="./img/msg.png" width="30" height="30"><br/>
          <span class="tab-link">课程消息</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/download">
          <img src="./img/download.png" width="30" height="30"><br/>
          <span class="tab-link">离线中心</span>
        </router-link>
      </div>
      <div class="tab-right">
        <router-link tag="div" class="tab-item" to="/capacity">
          <img src="./img/analysis.png" width="30" height="30"><br/>
          <span class="tab-link">能力档案</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/scoreInquiry">
          <img src="./img/score.png" width="30" height="30"><br/>
          <span class="tab-link">成绩查询</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/wrongAnalysis">
          <img src="./img/wrong.png" width="30" height="30"><br/>
          <span class="tab-link">错题分析</span>
        </router-link>
      </div>
    </div>
    <div class="content">
      <router-link tag="div" class="tab-item" to="/myCourse">
        <img src="../personal/collection.png" width="30" height="30"/><span class="tab-link">我的课程</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/task">
        <img src="../personal/collection.png" width="30" height="30"/><span class="tab-link">我的任务</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/exercise">
        <img src="../personal/collection.png" width="30" height="30"/><span class="tab-link">综合实训</span>
      </router-link>
    </div>
    <m-footer></m-footer>
    <router-view/>
  </div>
</template>
<script type="text/ecmascript-6">
  import MFooter from 'components/system/m-footer/m-footer'
  import {mapGetters} from 'vuex'
  import notLogged from 'base/not-logged/not-logged'
  import echarts from 'echarts'
  export default{
    mounted(){
      if (this.IsLogin === 2) {
        this.drawPie('main')
      }
    },
    components: {
      notLogged,
      MFooter
    },
    computed: {
      ...mapGetters([
        'auth'
      ]),
      IsLogin(){
        return this.auth.IsLogin
      }
    },
    data(){
      return {
        warning: '您还未绑定院校',
        buttonText: '进入我的院校',
        binding: true,
        charts: '',
        opinionData: [
          {value: 100, name: '未学习'},
          {value: 310, name: '已学习'},
        ],
      }
    },
    methods: {
      drawPie(id){
        this.charts = echarts.init(document.getElementById(id))
        this.charts.resize()
        this.charts.setOption({
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['70%', '80%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '20',
                      fontWeight: 'blod'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: this.opinionData,
                color: ['rgb(255,255,255)', 'rgba(255,255,255,0.3)']
              },

            ],
          },
        )
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .my-course
    width 100%
    bottom 0
    top 0
    position fixed
    background-color #f0f0f0
    .bg
      position relative
      height 300px
      background-image url("img/my-course.png")
      background-size 100% 100%
      color #fff
      .rate
        position absolute
        margin-left -90px
        margin-top -90px
        top 40%
        left 50%
      .rate-text
        text-align center
        position absolute
        top 37%
        left 36%
      .tab-left
        text-align center
        font-size small
        position absolute
        left 15px
        top 15px
        div
          margin-bottom 20px
      .tab-right
        text-align center
        font-size small
        position absolute
        right 15px
        top 15px
        div
          margin-bottom 20px

    .content
      width 100%
      margin-top 20px
      div
        height 30px
        line-height 30px
        background-color #fff
        margin-bottom 10px
        padding 10px 0 10px 30px
        span
          position absolute
          margin-left 20px

</style>
