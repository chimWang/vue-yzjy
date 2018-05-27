<template>
  <div class="yzjy">
    <m-header></m-header>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/main">
        <span class="tab-link">课程</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/information">
        <span class="tab-link">资讯</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/famous-teacher">
        <span class="tab-link">名师</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/institute">
        <span class="tab-link">名校</span>
      </router-link>
    </div>
    <m-footer></m-footer>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import MFooter from 'components/system/m-footer/m-footer'
  import MHeader from 'base/m-header/m-header'
  export default{
    data(){
      return {
        title: '云智教育',
      }
    },
    components: {
      MHeader,
      MFooter,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable.styl"

  .tab
    display flex
    height 44px
    line-height 44px
    font-size $font-size-medium
    background-color $color-main
    color $color-text
    .tab-item
      flex 1
      text-align center
      .tab-link
        padding-bottom 5px
      &.router-link-active
        .tab-link
          color #f5f40e
          border-bottom 3px solid #5ec0dd


</style>
