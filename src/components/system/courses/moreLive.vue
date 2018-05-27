<template>
  <div class="more-course">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="course">
      <scroll class="course-scroll">
        <live-list :data="this.$route.params.course" :more="true"></live-list>
      </scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import liveList from './liveList.vue'
  import MHeader from 'base/m-header/m-header'
  import Scroll from 'base/scroll/scroll'
  export default{
    data(){
      return {
        title: '今日直播',
        courseList: []
      }
    },
    components: {
      Scroll,
      MHeader,
      liveList
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .more-course
    position fixed
    top 0
    bottom 0
    background-color #fff
    width 100%
    .course
      position absolute
      top 50px
      bottom 0
      width 100%
      margin-top 30px
      .course-scroll
        height 100%
        overflow hidden

</style>
