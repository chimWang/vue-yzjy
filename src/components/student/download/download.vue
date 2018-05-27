<template>
  <div class="notes">
    <div class="back">
      <i class="el-icon-arrow-left" @click="back"></i>
    </div>
    <coming :text="text"></coming>
  </div>
</template>

<script type="text/ecmascript-6">
  import Coming from 'base/coming/coming'
  export default{
    data(){
      return {
        text: '离线中心'
      }
    },
    components: {
      Coming
    },
    methods: {
      back()
      {
        this.$router.back('-1')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .notes
    z-index: 10
    position fixed
    top 0
    bottom 0
    background-color #fff
    width 100%
    .back
      position absolute
      top 10px
      left 10px
      font-size 20px
</style>
