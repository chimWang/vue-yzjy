<template>
  <div class="teacher" ref="teacher">
    <scroll class="teacher-detail">
      <div>
        <ul class="detail">
          <li v-for="item in teacher">
            <div class="icon">
              <img :src="item.teacherImg" height="70" width="70"/>
            </div>
            <div class="desc">
              <h3>{{item.name}}</h3>
              <p class="info">{{item.info}} <span>{{item.position}}</span></p>

              <p>开课{{item.num}}门 | {{item.people}}人已经学习</p>
            </div>
            <button class="more">更多信息</button>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '../../../base/scroll/scroll'
  export default{
    data(){
      return {
        teacher: [
          {
            name: '张宇',
            info: 'xx大学',
            position: '教授、导学',
            num: 5,
            people: 200,
            teacherImg: 'http://localhost:8088/media/image/1522332943930.jpg'
          },
          {
            name: '顾教授',
            info: 'xx大学',
            position: '教授、导学',
            num: 2,
            people: 300,
            teacherImg: 'http://localhost:8088/media/image/1522332943930.jpg'
          },
          {
            name: '王教授',
            info: 'xx大学',
            position: '教授、导学',
            num: 2,
            people: 300,
            teacherImg: 'http://localhost:8088/media/image/1522332943930.jpg'
          },
          {
            name: '张教授',
            info: 'xx大学',
            position: '教授、导学',
            num: 2,
            people: 300,
            teacherImg: 'http://localhost:8088/media/image/1522332943930.jpg'
          },
          {
            name: '李教授',
            info: 'xx大学',
            position: '教授、导学',
            num: 2,
            people: 300,
            teacherImg: 'http://localhost:8088/media/image/1522332943930.jpg'
          },
          {
            name: '潘教授',
            info: 'xx大学',
            position: '教授、导学',
            num: 2,
            people: 300,
            teacherImg: 'http://localhost:8088/media/image/1522332943930.jpg'
          }
        ]

      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/variable.styl'
  .teacher
    position fixed
    width 100%
    top 94px
    bottom 50px
    .teacher-detail
      height 100%
      overflow hidden
      .detail
        padding 0
        li
          position relative
          list-style none
          display flex
          margin 0 0 10px 0
          padding-left 10px
          font-size $font-size-small
          height 90px
          border-bottom 1px solid #ccc
          .icon
            margin-right 10px
            img
              border-radius 50%
          .desc
            margin-right 2rem
            .info
              margin-bottom 10px
              span
                font-size $font-size-small-s
          .more
            position absolute
            font-size $font-size-small
            border 1px solid #0d1e2e
            border-radius 5px
            top 10px
            right 10px
            background-color #fff

</style>
