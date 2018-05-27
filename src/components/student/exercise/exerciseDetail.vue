<template>
  <div class="exercise-detail">
    <div class="bg">
      <i class="el-icon-arrow-left" @click="back"></i>
      <div id="exercise" style="width: 180px;height: 180px" class="rate"></div>
      <span class="rate-text">此门课完成度<br/>{{courseFinish}}%</span>
    </div>
    <div class="exercise-rate">
      <scroll class="exercise-scroll">
        <div>
          <div>
            <h5>课程参与度</h5>
            <p><span>我的参与度</span>
              <el-progress :percentage="20"></el-progress>
            </p>
            <p><span>学生总体</span>
              <el-progress :percentage="70"></el-progress>
            </p>
            <p>总小节数量：20 | 已完成：12</p>
          </div>
          <div>
            <h5>考核完成度</h5>
            <p><span>我的完成度</span>
              <el-progress :percentage="courseDetail.examPercent"></el-progress>
            </p>
            <p><span>考核总数</span>
              <el-progress :percentage="courseDetail.examSum"></el-progress>
            </p>
            <p>总小节数量：20 | 已完成：12</p>
          </div>
          <div>
            <h5>错题统计</h5>
            <p><span>我的错题率</span>
              <el-progress :percentage="80"></el-progress>
            </p>
            <p><span>学生总体</span>
              <el-progress :percentage="80"></el-progress>
            </p>
            <p>总小节数量：20 | 已完成：12</p>
          </div>
          <div>
            <h5>我的答疑</h5>
            <p><span>我的答疑率</span>
              <el-progress :percentage="courseDetail.qaSum" color="#8e71c7"></el-progress>
            </p>
            <p><span>答疑处理率</span>
              <el-progress :percentage="courseDetail.qaHasProcess" color="#8e71c7"></el-progress>
            </p>
            <p>总小节数量：20 | 已完成：12</p>
          </div>
        </div>
      </scroll>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
  import Scroll from 'base/scroll/scroll'
  export default{
    mounted(){
      this.drawBar('exercise')
      console.log(this.courseDetail)
      console.log(this.courseFinish)
    },
    data(){
      return {
        charts: '',
        opinionData: [
          {value: 600, name: '未学习'},
          {value: this.courseFinish, name: '已学习'},
        ],
        rate: [
          {}
        ],
        courseFinish:this.$route.params.courseFinish,
        courseDetail: this.$route.params.courseDetail
      }
    },
    components: {
      Scroll
    },
    methods: {
      back(){
        this.$router.back(-1)
      },
      drawBar(id){
        this.charts = echarts.init(document.getElementById(id))
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
                color: ['rgba(255,255,255,0.3)','rgb(255,255,255)' ]
              },

            ],
          },
        )
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .exercise-detail
    position fixed
    top 0
    bottom 0
    width 100%
    .bg
      position relative
      height 300px
      background-image url("./my-course.png")
      background-size 100% 100%
      color #fff
      .el-icon-arrow-left
        position absolute
        top 10px
        left 10px
      .rate
        position absolute
        margin-left -90px
        margin-top -100px
        top 40%
        left 50%
      .rate-text
        text-align center
        position absolute
        top 32%
        left 37%
    .exercise-rate
      background-color #f0f0f0
      position fixed
      top 230px
      bottom 0
      width 100%
      .exercise-scroll
        height 100%
        overflow hidden
        div
          div
            padding 10px 0 10px 0
            background-color #fff
            margin-bottom 10px
            h5
              padding-left 5px
              margin 5px 0 15px 0
              border-left 15px solid #0d1e2e
            p:last-child
              color #666
              font-size 12px
            p
              font-size small
              margin-left 30px
              span
                display inline-block
                width 80px
              .el-progress
                margin-left 10px
                display inline-block
                width 230px
</style>
