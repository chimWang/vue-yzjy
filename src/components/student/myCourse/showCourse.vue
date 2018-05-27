<template>
  <div class="show-course">
    <scroll class="course-scroll">
      <div>
        <ul v-for="(item,index) in chapters">
          <li>
            <h4 @click="courseToggle(item,index)">{{item.chapterName}}</h4><i
            :class="{'el-icon-arrow-up':index!==nowIndex,'el-icon-arrow-down':index===nowIndex}"
            @click="courseToggle(item,index)"></i>
            <div v-if="name&&index===nowIndex">
              <ul class="section" v-for="items in item.coursewares">
                <li>
                  <div>
                    <p>{{items.coursewareName}}</p>
                    <span>2018/4/10</span>
                    <span class="video" @click="lookVideo(items)">查看视频</span>
                  </div>
                </li>
              </ul>
            </div>
            <div v-if="!name&&index===nowIndex">
              <ul class="section" v-for="items in item.exams">
                <li>
                  <div>
                    <p>{{items.examTitle}}</p>
                    <span>2018/4/10</span>
                    <span class="video" @click="intoExam(items)">进入考试</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default{
    props: {
      chapters: {
        type: Array,
        default: function () {
          return []
        },
      },
      name: {
        type: Boolean,
        default: true
      }

    },
    data(){
      return {
        nowIndex: 1,
      }
    },
    components: {
      Scroll
    },
    methods: {
      courseToggle(item, index){
        this.nowIndex = index
      },
      lookVideo(items){
        this.$router.push({path: '/course-video', name: 'course-video', params: {courseware: items}})
      },
      intoExam(items){
        this.$router.push({path: '/examDetail', name: 'examDetail', params: {exam: items}})
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .show-course
    position fixed
    top 90px
    bottom 0
    font-size smaller
    width 100%
    .course-scroll
      height 100%
      overflow hidden
      ul
        padding 5px
        list-style none
        margin 5px
        li
          margin-bottom 0
          i
            display inline-block
            padding-top 5px
            float right
          h4
            display inline-block
            margin 5px
            padding 0
          .section
            height 100%
            font-size 13px
            padding 0
            margin-top 10px
            background-color #fff
            li
              position relative
              margin-bottom 0
              padding 5px 0 5px 15px
              p
                display inline-block
              span
                font-size 11px
                color #666
                margin-left 20px
              .video
                position absolute
                right 10px
                top 12px
                padding 5px
                border 1px solid #5ec0dd
                color #5ec0dd
                border-radius 3px

</style>
