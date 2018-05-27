<template>
  <div class="institute-list">
    <div class="back">
      <i class="el-icon-arrow-left" @click="back"></i>
    </div>
    <div class="banner">
      <router-link tag="div" to="/student" class="bg-image"><img :src="bgImage" width="100" height="100"/></router-link>
      <h3 class="title">{{title}}</h3>
      <button @click="into" v-if="isLogin===1">绑定院校</button>
      <p class="desc">{{description}}</p>
    </div>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/schoolInfo">
        <span class="tab-link">资讯</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/aboutSchool">
        <span class="tab-link">校园风采</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/announcement">
        <span class="tab-link">公告</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/friends">
        <span class="tab-link">学友圈</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {}
    },
    props: {
      isLogin: Number,
      bgImage: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      orgCode: {
        type: String,
        default: ''
      }
//      news: {
//        type: Array,
//        default: []
//      },
    },
    methods: {
      into()
      {
        this.$router.push({name: 'binding', path: '/binding', params: {title: this.title, orgCode: this.orgCode}})
      }
      ,
      back()
      {
        if (this.isLogin === 2) {
          this.$router.push('/personal')
        } else {
          this.$router.push('/institute')
        }

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable.styl"
  .institute-list
    width 100%
    position: fixed
    z-index: 10
    top: 0
    bottom: 0
    background: #fff
    .back
      position absolute
      top 10px
      left 10px
      font-size 20px
    .banner
      padding 15px
      padding-bottom 0
      text-align center
      button
        position absolute
        margin-top -38px
        margin-left 60px
        font-size $font-size-small
        height 20px
        border 1px solid #0d1e2e
        border-radius 5px
        background-color #000
        color #fff
      .desc
        overflow hidden
        height 60px
        line-height 20px
        text-align left
        font-size $font-size-small

  .tab
    border-bottom 1px solid #ccc
    border-top 1px solid #ccc
    display flex
    height 40px
    line-height 40px
    font-size $font-size-medium
    .tab-item
      flex 1
      text-align center
      .tab-link
        padding-bottom 5px
      &.router-link-active
        .tab-link
          border-bottom 3px solid #5ec0dd


</style>
