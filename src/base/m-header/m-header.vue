<template>
  <div class="m-header">
    <i class="el-icon-arrow-left" v-show="iconBack" @click="back(url)"></i>
    <h1 class="text" v-show="isTitle">{{title}}</h1>
    <div class="search" v-show="search">
      <input type="text" placeholder="搜索"/>
      <i class="el-icon-search"></i>
      <!--<button>筛选</button>-->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {
      isTitle: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      iconBack: {
        type: Boolean,
        default: false
      },
      search: {
        type: Boolean,
        default: true
      },
      url: {
        type: String,
        default: ''
      }
    },
    methods: {
      back(url){
        if (url) {
          this.$router.push(url)
        } else {
          this.$router.back(-1)
        }

      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"

  .m-header
    height 50px
    text-align center
    color $color-text
    background-color $color-main
    i
      display inline-block
      position absolute
      left 10px
      top 16px
    .text
      line-height 30px
      display inline-block
      vertical-align top
      font-size $font-size-large
    .search
      position relative
      width 90%
      margin 0 auto
      button
        width 40px
        height 25px
        line-height 20px
        right -60px
        font-size 12px
        top 17px
        position absolute
        color #fff
        background-color #0d1e2e
        border 1px solid #fff
        border-radius 10px
      input
        height 15px
        padding 5px
        margin-top 15px
        width 100%
        background-color #0d1e2e
        border 1px solid #fff
        border-radius 10px
      .el-icon-search
        position absolute
        top 20px
        left 95%
</style>
