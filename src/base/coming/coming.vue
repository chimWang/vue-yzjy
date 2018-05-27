<template>
  <div class="coming">
    <div class="coming-soon">
      <img src="./book.png"/>
      <b>{{text}}</b>
      <b>敬请期待</b>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .coming
    position absolute
    width 80px
    height 80px
    top 50%
    left 50%
    margin-top -40px
    margin-left -40px
    text-align center
    img
      width 100%
      height 100%
    b
      display inline-block
      margin-top 5px

</style>
