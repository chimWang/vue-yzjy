<template>
  <div class="settings">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>

    <ul>
      <li>视频下载清晰度<span>高清</span></li>
      <li>允许2g/3g/4g网络下载<span>允许</span></li>
      <li>下载路径管理<span>手机内存</span></li>
    </ul>
    <ul>
      <li>关于我们</li>
      <li>意见反馈</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  export default{
    data(){
      return {
        title: '设置'
      }
    },
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .settings
    position absolute
    top 0
    bottom 0
    font-size smaller
    width 100%
    background-color #f0f0f0
    ul
      padding 0
      background-color #fff
      list-style none
      li
        padding 13px
        border-bottom 1px solid #ccc
        span
          float right
          color #666
</style>
