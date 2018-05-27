<template>
  <div class="exercise">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="exercise-content">
      <scroll class="exercise-scroll">
        <div>
          <ul class="course" v-for="(item, index) in couseInfo" :key=index>
            <li>
              <div class="courseImg"><img v-bind:src='item.thumbnail'/></div>
              <div class="courseDesc">
                <h5>{{item.title}}</h5>
                <div class="rate">
                  <p>我的听课进度：{{item.engagePercent}}</p>
                  <p>我的考核进度：{{item.examPercent}}</p>
                </div>
                <el-button size="mini" @click="lookDetails(item)">查看详情</el-button>
              </div>
            </li>
          </ul>
        </div>
      </scroll>
      <router-view/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  import Scroll from 'base/scroll/scroll'
  import {mapGetters} from 'vuex'
  export default{
      created(){
        console.log(this.couseInfo)
      },
    data(){
      return {
        title: '综合实训',

      }
    },
    computed: {
      couseInfo(){
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
      back()
      {
        this.$router.back('-1')
      },
      lookDetails(item){
        let courseFinish = (item.engagePercent + item.examPercent) / 2
        this.$router.push({
          path: '/exerciseDetail',
          name: 'exerciseDetail',
          params: {
            courseFinish: courseFinish,
            courseDetail: JSON.parse(item.detail)
          }
        })
      },
    },
    components: {
      Scroll,
      MHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .exercise
    background-color #f0f0f0
    position fixed
    top 0
    bottom 0
    width 100%
    .exercise-content
      position fixed
      top 50px
      bottom 0
      width 100%
      .exercise-scroll
        height 100%
        overflow hidden
        .course
          padding 0
          list-style none
          width 100%
          li
            position relative
            display flex
            padding 10px
            height 100px
            margin-bottom 10px
            background-color #fff
            .courseImg
              height 100%
              width 35%
              img
                height 100%
                width 100%
            .courseDesc
              width 65%
              margin-left 15px
              h5
                margin-top 5px
                margin-bottom 0
              .rate
                margin-top 40px
                p
                  overflow hidden
                  text-overflow ellipse
                  margin 0
                  font-size 11px
                  color #666
                  line-height 18px
              .el-button
                background-color #fff000
                position absolute
                right 10px
                bottom 20px
</style>
