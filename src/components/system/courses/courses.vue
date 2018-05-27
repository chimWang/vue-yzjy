<template>
  <div class="courses">
    <scroll class="courses-content">
      <div>
        <div v-if="courses.length" class="slider-wrapper">
          <slider :loop="loop">
            <div v-for="item in courses">
              <a :href="item.linkUrl"><img :src="item.pickUrl"/></a>
            </div>
          </slider>
        </div>
        <div class="courses-nav" v-show="nav">
          <router-link tag="div" to="/institute">
            <img src="../../../common/image/toCompany.png"/>
          </router-link>
        </div>
        <course-list :data="courseList"></course-list>
        <live-list :data="liveList"></live-list>
        <div class="sort">
          <h4 class="sort-title">课程分类</h4>
          <div class="course-sort">
            <div><i class="el-icon-star-off"></i><span>哲学</span></div>
            <div><i class="el-icon-star-off"></i><span>法学</span></div>
            <div><i class="el-icon-star-off"></i><span>经济学</span></div>
          </div>
          <div class="course-sort">
            <div><i class="el-icon-star-off"></i><span>计算机</span></div>
            <div><i class="el-icon-star-off"></i><span>会计</span></div>
            <div><i class="el-icon-star-off"></i><span>法律</span></div>
          </div>
          <div class="course-sort">
            <div><i class="el-icon-star-off"></i><span>文学</span></div>
            <div><i class="el-icon-star-off"></i><span>心理学</span></div>
            <div><i class="el-icon-star-off"></i><span>设计</span></div>
          </div>
        </div>
      </div>
    </scroll>
    <router-view/>
  </div>


</template>
<script type="text/ecmascript-6">
  import Loading from '../../../base/loading/loading'
  import Slider from '../../../base/slider/slider'
  import Scroll from '../../../base/scroll/scroll'
  import courseList from './courseList.vue'
  import liveList from './liveList.vue'
  export default{
    created(){
      this.getCourse()
      this.getLive()
    },
    data(){
      return {
        courses: [
          {
            linkUrl: "http://localhost:8088/", //跳转链接
            pickUrl: "http://localhost:8088/media/image/banner1.png"  //图片地址
          },
          {
            linkUrl: "http://localhost:8088/", //跳转链接
            pickUrl: "http://localhost:8088/media/image/banner2.png" //图片地址
          },
          {
            linkUrl: "http://localhost:8088/", //跳转链接
            pickUrl: "http://localhost:8088/media/image/banner3.png" //图片地址
          },
        ],
        loop: true,
        courseList: [],
        liveList:[]
      }
    },
    props: {
      tab: {
        type: Boolean,
        default: false
      },
      nav: {
        type: Boolean,
        default: true
      }
    },
    components: {
      Slider,
      Scroll,
      Loading,
      courseList,
      liveList
    },
    methods: {
      getCourse(){
        this.$http.post('http://www.zerotop.top/edu-web/course/list/courses', {
          isPublic: true
        }).then((res) => {
          this.courseList = res.data.data
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      },
      getLive(){
        this.$http.post('http://www.zerotop.top/edu-web/course/list/courses', {
          isPublic: false
        }).then((res) => {
          this.liveList = res.data.data
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      },
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable.styl"
  .courses
    position fixed
    width 100%
    top 94px
    bottom 55px
    .courses-content
      height 100%
      overflow hidden
      .courses-nav
        width 100%
        height 70px
        border-bottom 1px solid #ccc
        padding-bottom 10px
        img
          width 100%
          height 100%
      .tab
        display flex
        height 65px
        line-height 20px
        padding 10px
        font-size $font-size-medium
        color #000
        border-bottom 1px solid #ccc
        .tab-item
          flex 1
          text-align center

      .sort
        .sort-title
          border-left 8px solid #0d1e2e
          padding-left 5px
        ul:last-child
          border none
        .sortList
          width 85%
          margin 0 auto
          border-bottom 1px solid #ccc
          li:last-child
            border none
          li
            list-style none
            display inline-block
            padding 0 20px 0 20px
            line-height 30px
            border-right 1px solid #ccc
        .course-sort
          text-align center
          display flex
          div
            padding 15px
            border-bottom 1px solid #f0f0f0
            border-left 1px solid #f0f0f0
            flex 1
            span
              display inline-block
              width 50px
            i
              display inline-block
              width 25px
</style>
