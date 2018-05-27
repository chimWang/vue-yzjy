<template>
  <div class="my-message">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="message">
      <div><span>系统消息</span></div>
      <div><span>校园消息</span></div>
      <div><span>课程消息</span></div>
      <div><span>学友圈</span></div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  export default{
    data(){
      return {
        title: '我的消息'
      }
    },
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .my-message
    position fixed
    top 0
    bottom 0
    background-color #f0f0f0
    width 100%
    .message
      background-color #fff
      div
        height 40px
        padding 10px
        line-height 40px
        border-bottom 1px solid #ccc

</style>
