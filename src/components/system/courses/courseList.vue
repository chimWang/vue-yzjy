<template>
  <div class="courseList">
    <div class="course">
      <div v-if="!more">
        <p @click="moreCourse">查看更多 ></p>
        <h4 class="list-title">推荐课程</h4>
      </div>
      <div class="course-list">
        <div class="icon" v-for="(item,index) in data.slice(0,4)" @click="intoCourse(index)"
             v-if="!more">
          <img :src="item.thumbnail"/>
          <span>{{item.title}}</span>
        </div>
        <div class="icon" v-for="(item,index) in data" @click="intoCourse(index)" v-if="more">
          <img :src="item.thumbnail"/>
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        judge: 1,

      }
    },
    props: {
      data: {
        type: Array,
        default: []
      },
      more: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      intoCourse(index){
        this.$router.push({
          name: 'detailDesc',
          path: '/courseDetail',
          query: {
            course: this.data[index],
            judge: this.judge
          }
        })
      },
      moreCourse(){
        this.$router.push({
          path: '/moreCourse',
          name: 'moreCourse',
          params: {course: this.data}
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .course
    position relative
    p
      position absolute
      right 10px
      top -10px
      font-size smaller
    .list-title
      border-left 8px solid #0d1e2e
      padding-left 5px

    .course-list
      width 90%
      margin 0 auto
      .icon:nth-child(2n+1)
        margin-left 0
      .icon
        height 100px
        display inline-block
        width 45%
        margin-left 30px
        margin-bottom 40px
        span
          display inline-block
          font-size smaller
          margin-top 10px
        img
          width 100%
          height 100%


</style>
