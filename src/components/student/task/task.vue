<template>
  <div class="task">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="finished">
      <ul>
        <li v-for="item in task">
          <div class="icon"><span>{{item.type}}</span></div>
          <div>
            <h3>《{{item.taskTitle}}》</h3>
            <p>{{item.deadline}} 截止</p>
            <b>发布者：{{item.sendFromName}}</b>
          </div>
          <router-link tag="div" to="/schoolCourse" v-if="item.type==='考试'" class="tag">前往考试</router-link>
          <router-link tag="div" to="/schoolCourse" v-if="item.type==='听课'" class="tag">前往听课</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  export default{
    created(){
      this.listTask()
    },
    data(){
      return {
        title: '我的任务',
        task: []
      }
    },
    components: {
      MHeader,
    },
    methods: {
      listTask() {
        this.$http
          .post("http://www.zerotop.top/edu-web/teacher/list/task/teacherId=" + 283483, {})
          .then((res) => {
            console.log(res.data);
            this.task = res.data.data
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable.styl"

  .task
    position fixed
    width 100%
    top 0
    bottom 50px
    height 100%
    background-color #F0F0F0
    .finished
      ul
        padding 0
        li
          position relative
          font-size $font-size-small
          display flex
          list-style none
          height 70px
          background-color #fff
          margin-bottom 10px
          padding 10px 0 25px 5px
          .tag
            position absolute
            text-align center
            height 20px
            line-height 20px
            width 80px
            background-color #f5f40e
            border-radius 10px
            border none
            top 20px
            right 10px
          .icon
            width 80px
            height 60px
            background-image url("exam.png")
            background-size 100% 100%
            margin-right 20px
            span
              color #fff
              position absolute
              margin-top 6%
              margin-left 3%

</style>
