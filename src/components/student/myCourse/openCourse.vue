<template>
  <div class="open-course">
    <scroll class="open-course-scroll">
      <div v-if="this.course.length===0" style="position: absolute;top:40%;left: 38%"><b>快去添加课程~</b></div>
      <div>
        <ul class="course" v-for="(item, index) in course" :key=index>
          <li @click="intoCourse(index)" v-if="item.isPublic===true">
            <div class="courseImg"><img v-bind:src='item.thumbnail'/></div>
            <div class="courseDesc">
              <h5>{{item.title}}
                <el-tag v-show="item.tags" size="mini">{{item.tags}}</el-tag>
              </h5>
              <p>概要：{{item.description}}</p>
              <p>已学习人数：{{item.userCount}}</p>
              <p>平时：{{item.examUsual}}% | 期末：{{item.examFinal}}%</p>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import Scroll from 'base/scroll/scroll'
  export default{
    mounted() {
      this.$nextTick(
        function () {
          if (this.user.user) {
            this.getCourse(this.userId)
          }
        }
      )

    },
    data(){
      return {
        course: []
      }
    },
    computed: {
      userId(){
        if (this.user.user) {
          return this.user.user.userId
        }
      },
      ...mapGetters([
        'user',
      ])
    },
    methods: {
      getCourse(userId){
        this.$http.post('http://www.zerotop.top/edu-web/user/list/selected/course/' + userId, {}).then((res) => {
          console.log(res.data)
          this.course = res.data.data

        }).catch((error) => {
          console.log(error)
        })
      },
      intoCourse(index){
        this.$router.push({
          name: 'detailDesc',
          path: '/courseDetail',
          query: {
            course: this.course[index]
          }
        })
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .open-course
    position fixed
    top 90px
    bottom 0
    width 100%
    .open-course-scroll
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
          margin-bottom 10px
          background-color #fff
          .courseImg
            width 40%
            img
              height 100%
              width 100%
          .courseDesc
            width 60%
            margin-left 20px
            h5
              margin-top 5px
              margin-bottom 0
              .el-tag
                position absolute
                top 12px
                right 20px
                width 100px
                overflow hidden
                background-color #fff000
                color #000
            p
              font-size 13px
              color #666
              line-height 18px
              overflow hidden
              width 100%
              word-break: break-all;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;

</style>
