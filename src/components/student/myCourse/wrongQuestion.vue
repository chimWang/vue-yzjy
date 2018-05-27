<template>
  <coming :text="text"></coming>
</template>

<script type="text/ecmascript-6">
  import Coming from 'base/coming/coming'
  export default{
    data(){
      return {
        text: '错题'
      }
    },
    components: {
      Coming
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
