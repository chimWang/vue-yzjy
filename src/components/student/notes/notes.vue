<template>
  <div class="notes">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="note">
      <scroll class="note-scroll">
        <div>
          <div class="note-content" v-for="item in note">
            <h5>{{item.title}}</h5>
            <p>{{item.content}}</p>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import MHeader from 'base/m-header/m-header'
  import Scroll from 'base/scroll/scroll'
  export default{
    created(){
      this.$nextTick(function () {
        this.listUserNote()
      })

    },
    computed: {
      userId(){
        return this.user.user.userId
      },
      ...mapGetters(['user'])
    },
    data(){
      return {
        title: '我的笔记',
        text: '课堂笔记',
        note: []
      }
    },
    components: {
      Scroll,
      MHeader
    },
    methods: {
      back(){
        this.$router.back('-1')
      },
      listUserNote(){
        this.$http.post('http://www.zerotop.top/edu-web/user/list/note', {
          userId: this.userId
        }).then((res) => {
          this.note = res.data.data

          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .notes
    position fixed
    top 0
    bottom 0
    background-color #f0f0f0
    width 100%
    .note
      position absolute
      top 50px
      bottom 0
      width 100%
      .note-scroll
        height 100%
        overflow hidden

      .note-content
        background-color #fff
        width 80%
        margin 30px auto
        padding 10px
        border-radius 5px
        h5
          margin 10px
        p
          font-size small
          line-height 20px
</style>
