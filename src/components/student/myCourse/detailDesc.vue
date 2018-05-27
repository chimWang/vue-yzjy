<template>
  <div class="course-desc">
    <scroll class="desc-scroll">
      <div>
        <div class="info">
          <span>开课时间：2017-11-8至2018-1-31</span>
        </div>
        <div>
          <p><b>课程简介：</b><br/>{{course.description}}</p>
        </div>
        <div>
          <h4>授课老师</h4>
          <div class="teacher">
            <div class="icon">
              <img src="http://localhost:8088/media/image/1522332943930.jpg"
                   height="80" width="70"/>
            </div>
            <div class="desc">
              <h4>张宇</h4>
              <i>毕业于某知名大学，在大数据领域上有较好的成就</i>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>

</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default{
    data(){
      return {
        course: this.$route.query.course
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .course-desc
    position fixed
    top 341px
    bottom 0
    font-size smaller
    padding 10px 20px 10px 20px
    line-height 23px
    .desc-scroll
      height 100%
      overflow hidden
      h4
        margin 20px 0 10px 0
      p
        padding-bottom 10px
        border-bottom 1px solid #ddd
      .info
        margin-top 10px
        padding-bottom 10px
        border-bottom 1px solid #ddd
      .teacher
        display flex
        .desc
          margin-left 20px
          h4
            margin 0 0 10px 0
</style>
