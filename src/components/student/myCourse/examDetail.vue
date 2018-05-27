<template>
  <div class="exam">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="exam-desc">
      <h3>{{exam.examTitle}}</h3>
      <div class="desc">
        <p><span>题目数量</span><b>10道题</b></p>
        <p><span>考试时间</span><b>{{exam.examtime}}分钟</b></p>
        <p>备注：{{exam.description}}</p>
        <el-button type="primary" @click="startExam">开始考试</el-button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  export default{
    data(){
      return {
        title: '考试',
        exam: this.$route.params.exam
      }
    },
    components: {
      MHeader
    },
    methods: {
      startExam(){
        this.$http.post('http://www.zerotop.top/edu-web/course/get/exam/' + this.exam.id)
          .then((res) => {
            console.log(res.data.data)
            this.$router.push({
              path: '/testPaper',
              name: 'testPaper',
              params: {questions: res.data.data, courseId: this.exam.courseId, id: this.exam.id}
            })
          }).catch((error) => {
          console.log(error)
        })
      },
    }


  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .exam
    position fixed
    top 0
    bottom 0
    background-color #fff
    width 100%
    .exam-desc
      width 80%
      margin 10% auto
      padding 10px
      .desc
        width 70%
        margin 40px auto
        span
          margin-right 20px
      .el-button
        margin-top 20px
        background-color #fff000
        color #000
        width 100%
</style>
