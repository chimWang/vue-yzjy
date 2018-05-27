<template>
  <footer>
    <div class="m-footer">
      <router-link tag="div" class="footer-item" to="/main">
        <a><img src="../../../common/image/resource.png"/><br/><span class="tab-link">首页</span></a>

      </router-link>
      <router-link tag="div" class="footer-item" to="/homePage">
        <a><img src="../../../common/image/study.png"/><br/><span class="tab-link">用户学习</span></a>
      </router-link>

      <router-link tag="div" class="footer-item" to="/exchange">
        <a><img src="../../../common/image/talk.png"/><br/><span class="tab-link">交流</span></a>
      </router-link>
      <router-link tag="div" class="footer-item" to="/personal">
        <a><img src="../../../common/image/talk.png"/><br/><span class="tab-link">个人中心</span></a>
      </router-link>
    </div>
  </footer>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable.styl"

  @media (max-height: 400px) {
    footer {
      display: none;
    }
  }

  footer
    width 100%
    background-color $color-main
    height 50px
    position fixed
    bottom 0
    font-size $font-size-small-s
    .m-footer
      display flex
      width 100%
      height 100%
      margin 0 auto
      color $color-text
      text-align center
      div:last-child
        margin 0
      .footer-item
        height 100%
        margin-right 35px
        img
          display inline-block
          width 30%
          margin-bottom 3px
        a
          text-decoration none
          color #fff
          display inline-block
          padding-top 8px
          width 100%
          height 100%
        &.router-link-active
          a

            background-color #f5f40e
            color #000


</style>
