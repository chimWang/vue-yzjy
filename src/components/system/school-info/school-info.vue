<template>
  <div class="school-info">
    <scroll class="info">
      <div>
        <course-list :data="courseList"></course-list>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll.vue'
  import courseList from '../courses/courseList.vue'
  export default{
    created(){
      this.getCourse()
    },
    props: {},
    data(){
      return {
        courseList: [],
      }
    },
    methods: {
      getCourse(){
        this.$http.post('http://www.zerotop.top/edu-web/course/list/courses', {
          isPublic: false
        }).then((res) => {
          this.courseList = res.data.data
        }).catch((error) => {
          console.log(error)
        })
      },
    },
    components: {
      Scroll,
      courseList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .school-info
    position fixed
    width 100%
    top 285px
    bottom 0
    .info
      height 100%
      overflow hidden
      h4
        border-left 8px solid #0d1e2e
        padding-left 5px
      ul
        padding 0
        li
          display flex
          list-style none
          border-bottom 1px solid #ccc
          padding-left 10px
          font-size $font-size-medium
          p
            margin-right 10px
</style>
