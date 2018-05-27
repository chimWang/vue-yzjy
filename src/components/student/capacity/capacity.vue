<template>
  <div class="capacity">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="capacity-all">
      <scroll class="capacity-scroll">
        <div>
          <div class="capacity-desc">
            <div class="icon"><img :src="userAvatar"/></div>
            <div class="desc">
              <p>
                学生姓名：顾小阳<br/>
                已学习课程：4门<br/>
                平均分数：87分<br/>
                擅长科目：计算机网络<br/>
                单科最高排名：2
              </p>
            </div>
          </div>
          <div class="capacity-summary">
            <h5>能力总鉴</h5>
            <div id="capacity" style="width: 100%;height: 180px" class="rate"></div>
          </div>
          <div class="capacity-list">
            <div>
              <div v-for="item in capacityList" class="list">
                <div class="icon"><img :src="item.iconImg"/></div>
                <div class="list-desc">
                  <p>{{item.title}}</p>
                  <p>已学{{item.courses.length}}门【<span v-for="(items,index) in item.courses">{{items}}、</span>】</p>
                </div>
                <el-button size="mini" style="position: absolute;right: 10px;bottom:15px;background-color: #fff000">
                  查看详情
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  import echarts from 'echarts'
  import Scroll from 'base/scroll/scroll'
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  import {mapGetters} from 'vuex'
  export default{
    mounted(){
      this.drawPie('capacity')
    },
    computed:{
        userAvatar(){
            return this.user.user.avatar
        },
      ...mapGetters(['user'])
    },
    data(){
      return {
        title: '能力档案',
        charts: '',
        opinionData: [
          {value: 100, name: '工科'},
          {value: 310, name: '艺术'},
          {value: 310, name: '计算机'},
          {value: 100, name: '历史'},
          {value: 310, name: '文学'},
        ],
        capacityList: [
          {
            iconImg: 'http://localhost:8088/media/image/gk.png',
            title: '工科课程',
            courses: ['机械工程', '土木工程']
          },
          {
            iconImg: 'http://localhost:8088/media/image/art.png',
            title: '艺术课程',
            courses: ['钢琴', '小提琴']
          },
          {
            iconImg: 'http://localhost:8088/media/image/art.png',
            title: '计算机课程',
            courses: ['Java', 'vue', 'C++']
          },
          {
            iconImg: 'http://localhost:8088/media/image/history.png',
            title: '历史课程',
            courses: ['近代史']
          },
          {
            iconImg: 'http://localhost:8088/media/image/literature.png',
            title: '文课程',
            courses: ['道家文化', '国学']
          }
        ]
      }
    },
    methods: {
      drawPie(id){
        this.charts = echarts.init(document.getElementById(id))
        this.charts.resize()
        this.charts.setOption({
            legend: {
              orient: 'horizontal',
              y: 'bottom',
              data: [
                '工科', '艺术', '计算机', '历史', '文学'
              ],
              bottom: 0
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                center: ['50%', '40%'],
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '20',
                      fontWeight: 'blod'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: this.opinionData,
                color: ['#7ecdf4', '#aa8abc', '#f6b37f', '#add597', '#fff45c', '#f29ec2']
              },

            ],
          },
        )
      }
    },
    components: {
      ElButton,
      MHeader,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .capacity
    position fixed
    top 0
    bottom 0
    background-color #f0f0f0
    width 100%
    .capacity-all
      position absolute
      top 50px
      bottom 0
      .capacity-scroll
        height 100%
        overflow hidden
        .capacity-desc
          padding 10px 10px 10px 30px
          background-color #fff
          display flex
          .icon
            width 35%
            img
              margin-top 15px
              border-radius 50%
              width 80%
              height 70%
          .desc
            margin-left 30px
            font-size small
            line-height 23px

        .capacity-summary
          padding 10px
          margin-top 8px
          background-color #fff
          h5
            margin 10px
        .capacity-list
          margin-top 8px
          background-color #fff
          .list
            position relative
            font-size small
            padding 10px
            display flex
            border-bottom 1px solid #ccc
            .icon
              margin-top 3%
              width 20%
              img
                padding 10px
                border-radius 50%
                background-color #7ecdf4
                width 35%
                height 40%

</style>
