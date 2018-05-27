<template>
  <div class="courseStudy">
    <m-header :title="course.title" :iconBack="true" :url="url" :isTitle="true" :search="false"></m-header>
    <div class="tab">
      <div v-for="(item,index) in type" class="tab-item" @click="choose(index)" :class="{bgcolor:index===nowIndex}">{{item}}</div>
    </div>
    <div v-if="this.nowIndex===0">
      <show-course :chapters="this.course.chapters" :name="true"></show-course>
    </div>
    <div v-if="this.nowIndex===1">
      <show-course :chapters="this.course.chapters" :name="false"></show-course>
    </div>
    <div v-if="this.nowIndex===2">
      <course-info :files="this.course.files"></course-info>
    </div>
    <div v-if="this.nowIndex===3">
      <wrong-question></wrong-question>
    </div>
    <div v-if="this.nowIndex===4">
      <question :qalist="this.course.courseqalist" :courseId="this.course.courseId" @upload="upload"></question>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import ShowCourse from 'student/myCourse/showCourse'
  import MHeader from 'base/m-header/m-header'
  import CourseInfo from 'student/myCourse/courseInfo'
  import Question from 'student/myCourse/question'
  import wrongQuestion from 'student/myCourse/wrongQuestion'
  export default{
    created(){
      this.getCourse(this.$route.query.courseId)
    },
    data(){
      return {
        nowIndex: 0,
        type: ['课程', '考核', '资料', '错题', '答疑'],
        course: {},
        url: '/myCourse'
      }
    },
    components: {
      MHeader,
      ShowCourse,
      CourseInfo,
      Question,
      wrongQuestion
    },
    methods: {
      getCourse(courseId){
        this.$http.post('http://www.zerotop.top/edu-web/user/get/course/' + courseId, {}).then((res) => {
          this.course = res.data.data
          console.log(res.data.data)
        }).catch((error) => {
          console.log(error)
        })
      },
      choose(index){
        this.nowIndex = index
      },
      upload(){
        this.getCourse(this.$route.query.courseId)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .courseStudy
    position fixed
    width 100%
    top 0
    bottom 0
    background-color #f0f0f0
    .tab
      background-color #fff
      height 30px
      padding 5px
      line-height 30px
      display flex
      box-shadow: 3px 2px 5px #ccc;
      .bgcolor
        border-bottom 3px solid #5ec0dd
      .tab-item
        font-size smaller
        display inline-block
        flex 1
        text-align center
        .tab-link
          padding-bottom 5px

</style>
