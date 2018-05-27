<template>
  <div class="courseDetail">
    <div class="banner">
      <img :src="course.thumbnail"/>
      <i class="el-icon-share"></i>
      <i :class="{'el-icon-erp-icon_collect':collect,'el-icon-erp-icon3':collectAfter}" @click="collectCourse"></i>
      <i class="el-icon-arrow-left" @click="back"></i>
      <h3>{{course.title}}</h3>
    </div>
    <div class="course-info">
      <div class="degree">
        <div id="main2" style="width: 230px;height: 120px"></div>
        <div class="button">
          <el-button type="primary" @click="courseStudy" v-if="isStudy">进入学习</el-button>
          <el-button type="primary" @click="addCourse" v-if="!isStudy">添加此课</el-button>
        </div>
      </div>
    </div>
    <div class="tab">
      <router-link tag="div" class="tab-item" :to='{path:"/detailDesc",name:"detailDesc",query:{course:this.course}}'>
        <span class="tab-link">简介</span>
      </router-link>
      <router-link tag="div" class="tab-item"
                   :to='{path:"/courseExchange",name:"courseExchange",query:{courseId:this.course.courseId}}'>
        <span class="tab-link">课程交流</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  export default{
    mounted(){
      this.drawPie('main2')
      var _this = this

      let newAry = this.myCourse.filter(function (item) {
        return item.courseId === _this.course.courseId
      })
      if (newAry.length === 0) {
        this.isStudy = false
      }


    },
    data(){
      return {
        isStudy: true,
        buttonText: this.isStudy ? '进入学习' : '添加此课',
        course: this.$route.query.course,
        charts: '',
        opinionData: [
          {value: 100, name: '未学习'},
          {value: 310, name: '已学习'},
        ],
        opinionData2: [
          {value: 230, name: '未学习'},
          {value: 190, name: '已学习'},
        ],
        collect: true,
        collectAfter: false
      }
    },
    computed: {
      myCourse(){
        return this.user.myCourse
      },
      userId(){
        return this.user.user.userId
      },
      isLogin(){
        return this.auth.IsLogin
      },
      ...mapGetters([
        'auth',
        'user'
      ])
    },
    methods: {
      ...mapMutations({
        addMyCourse: 'ADD_COURSE'
      }),
      overTag(event){
        console.log(event)
      },
      collectCourse(){
        this.collect = !this.collect
        this.collectAfter = !this.collectAfter
      },
      back(){
        if (this.$route.query.judge) {
          this.$router.push('/main')
        } else {
          this.$router.push('/myCourse')
        }

      },
      courseStudy(){
        if (this.isLogin === 0) {
          this.$router.push('/login')
        } else {
          this.$router.push({path: '/courseStudy', name: 'courseStudy', query: {courseId: this.course.id}})
        }
      },
      addCourse(){
        if (this.isLogin === 0) {
          this.$router.push('/login')
        } else {
          this.$http.post("http://www.zerotop.top/edu-web/user/add/course", {
            userId: this.userId,
            courseId: this.course.courseId
          })
            .then((res) => {
              console.log(res)
              this.addMyCourse(res.data.data)
              this.$notify({
                title: '成功',
                message: '添课成功',
                type: 'success',
                position: 'bottom-right',
                showClose: true,
                customClass: 'notify',
              });
              this.$router.push('/homePage')
            })
            .catch((error) => {
              console.log(error);
            });

        }
      },
      drawPie(id){
        this.charts = echarts.init(document.getElementById(id))
        this.charts.resize()
        this.charts.setOption({
            legend: {
              orient: 'vertical',
              x: 'left',
              data: [
                '未学习', '已学习'
              ],
              bottom: 0
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                center: ['45%', '50%'],
                radius: ['30%', '50%'],
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
                data: this.opinionData
              },
              {
                name: '访问来源',
                type: 'pie',
                center: ['80%', '50%'],
                radius: ['30%', '50%'],
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
                data: this.opinionData2
              }
            ],
          },
        )
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .courseDetail
    width 100%
    position fixed
    top 0
    bottom 0
    background-color #fff
    .banner
      color #fff
      position relative
      height 180px
      img
        width 100%
        height 100%
      h3
        position absolute
        bottom 5px
        left 20px
      .el-icon-arrow-left
        position absolute
        left 10px
        top 10px
        font-size 20px
      .el-icon-erp-icon_collect, .el-icon-erp-icon3
        position absolute
        right 35px
        top 10px
        font-size 20px
      .el-icon-erp-pinglun
        position absolute
        right 65px
        top 10px
        font-size 20px
      .el-icon-share
        position absolute
        right 10px
        top 10px
        font-size 20px
    .course-info
      background-color #fff
      width 100%
      .degree
        display flex
        border-bottom 1px solid #ccc
        #main
          margin-top 10px
          font-size smaller
        .button
          margin-left 25px
          margin-top 45px
      .info
        padding 10px
        font-size 75%
        span:last-child
          display inline-block
          float right
    .tab
      height 30px
      padding 5px
      line-height 30px
      display flex
      box-shadow 3px 2px 5px #ccc;
      div
        font-size smaller
        display inline-block
        flex 1
        text-align center
        .tab-link
          padding-bottom 5px
        &.router-link-active
          .tab-link
            border-bottom 3px solid #5ec0dd

</style>
